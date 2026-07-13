/**
 * agents-radar: daily digest for AI CLI tools and OpenClaw.
 *
 * Env vars:
 *   LLM_PROVIDER        - "anthropic" | "openai" | "github-copilot" | "openrouter" (default: anthropic)
 *   GITHUB_TOKEN        - GitHub token for API access and issue creation
 *   DIGEST_REPO         - owner/repo where digest issues are posted (optional)
 *
 * Provider-specific env vars — see src/providers/ for full list.
 */

import fs from "node:fs";
import path from "node:path";
import {
  type GitHubItem,
  type RepoConfig,
  type RepoFetch,
  fetchRecentItems,
  fetchRecentReleases,
  fetchSkillsData,
  createGitHubIssue,
} from "./github.ts";
import {
  type RepoDigest,
  buildCliPrompt,
  buildPeerPrompt,
  buildComparisonPrompt,
  buildPeersComparisonPrompt,
  buildSkillsPrompt,
  buildGenuiComparisonPrompt,
} from "./prompts.ts";
import { buildTrendingPrompt, buildHighlightsPrompt, type ReportHighlights } from "./prompts-data.ts";
import { callLlm, parseLlmJson, saveFile, autoGenFooter, LLM_TOKENS_TRENDING } from "./report.ts";
import {
  buildCliReportContent,
  buildOpenclawReportContent,
  buildGenuiReportContent,
} from "./report-builders.ts";
import {
  saveWebReport,
  saveTrendingReport,
  saveHnReport,
  savePhReport,
  saveArxivReport,
  saveHfReport,
  saveCommunityReport,
} from "./report-savers.ts";
import { loadWebState, fetchSiteContent, type WebFetchResult, type WebState } from "./web.ts";
import { fetchTrendingData, type TrendingData } from "./trending.ts";
import { fetchHnData, type HnData } from "./hn.ts";
import { fetchPhData, type PhData } from "./ph.ts";
import { fetchArxivData, type ArxivData } from "./arxiv.ts";
import { fetchHfData, type HfData } from "./hf.ts";
import { fetchDevtoData, type DevtoData } from "./devto.ts";
import { fetchLobstersData, type LobstersData } from "./lobsters.ts";
import { loadConfig } from "./config.ts";
import { toCstDateStr, toUtcStr } from "./date.ts";
import {
  type Lang,
  MSG,
  ISSUE_LABELS,
  CLI_ISSUE_TITLE,
  OPENCLAW_ISSUE_TITLE,
  GENUI_ISSUE_TITLE,
} from "./i18n.ts";

// ---------------------------------------------------------------------------
// Repo config — loaded from config.yml, falls back to built-in defaults
// ---------------------------------------------------------------------------

const {
  cliRepos: CLI_REPOS,
  skillsRepo: CLAUDE_SKILLS_REPO,
  openclaw: OPENCLAW,
  openclawPeers: OPENCLAW_PEERS,
  genuiRepos: GENUI_REPOS,
} = loadConfig();

/**
 * Optional allow-list of report IDs to generate. When set (via the
 * ONLY_REPORTS env var, comma-separated), all other report types are skipped
 * — their data is not fetched and no LLM calls are made for them. Empty/unset
 * means "generate all reports" (default behavior).
 *
 * Example: ONLY_REPORTS=ai-genui  →  only the generative UI report runs.
 */
const ONLY_REPORTS = (() => {
  const raw = process.env["ONLY_REPORTS"] ?? "";
  const ids = raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  return ids.length === 0 ? null : new Set(ids);
})();

/** Returns true if the given report ID should be generated. */
function shouldRun(reportId: string): boolean {
  return ONLY_REPORTS === null || ONLY_REPORTS.has(reportId);
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

// ---------------------------------------------------------------------------
// Phase 1: Fetch
// ---------------------------------------------------------------------------

async function fetchAllData(
  since: Date,
  webState: WebState,
): Promise<{
  fetched: RepoFetch[];
  skillsData: { prs: GitHubItem[]; issues: GitHubItem[] };
  webResults: WebFetchResult[];
  trendingData: TrendingData;
  hnData: HnData;
  phData: PhData;
  arxivData: ArxivData;
  hfData: HfData;
  devtoData: DevtoData;
  lobstersData: LobstersData;
}> {
  const allConfigs = (() => {
    if (ONLY_REPORTS === null) {
      return [...CLI_REPOS, OPENCLAW, ...OPENCLAW_PEERS, ...GENUI_REPOS];
    }
    // Only fetch repos for reports that are actually enabled.
    const configs: RepoConfig[] = [];
    if (shouldRun("ai-cli")) configs.push(...CLI_REPOS);
    if (shouldRun("ai-agents")) configs.push(OPENCLAW, ...OPENCLAW_PEERS);
    if (shouldRun("ai-genui")) configs.push(...GENUI_REPOS);
    return configs;
  })();
  const extraSources =
    ONLY_REPORTS === null ? ", claude-code-skills, web, hn, ph, arxiv, hf, devto, lobsters" : "";
  console.log(`  Tracking: ${allConfigs.map((r) => r.id).join(", ")}${extraSources}`);

  const EMPTY_SKILLS = { prs: [] as GitHubItem[], issues: [] as GitHubItem[] };
  const EMPTY_WEB: WebFetchResult[] = [];
  const EMPTY_TRENDING: TrendingData = {
    trendingRepos: [],
    searchRepos: [],
    trendingFetchSuccess: false,
  };
  const EMPTY_HN: HnData = { stories: [], fetchSuccess: false };
  const EMPTY_PH: PhData = { products: [], fetchSuccess: false };
  const EMPTY_ARXIV: ArxivData = { papers: [], fetchSuccess: false };
  const EMPTY_HF: HfData = { models: [], fetchSuccess: false };
  const EMPTY_DEVTO: DevtoData = { articles: [], fetchSuccess: false };
  const EMPTY_LOBSTERS: LobstersData = { stories: [], fetchSuccess: false };

  const [
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    hfData,
    devtoData,
    lobstersData,
  ] = await Promise.all([
    Promise.all(
      allConfigs.map(async (cfg) => {
        try {
          const [issuesRaw, prs, releases] = await Promise.all([
            fetchRecentItems(cfg, "issues", since),
            fetchRecentItems(cfg, "pulls", since),
            fetchRecentReleases(cfg.repo, since),
          ]);
          const issues = issuesRaw.filter((i) => !i.pull_request);
          console.log(
            `  [${cfg.id}] issues: ${issues.length}, prs: ${prs.length}, releases: ${releases.length}`,
          );
          return { cfg, issues, prs, releases };
        } catch (err) {
          console.error(`  [${cfg.id}] fetch failed: ${err}`);
          return { cfg, issues: [], prs: [], releases: [] };
        }
      }),
    ),
    !shouldRun("ai-cli")
      ? Promise.resolve(EMPTY_SKILLS)
      : fetchSkillsData(CLAUDE_SKILLS_REPO)
          .then((d) => {
            console.log(`  [claude-code-skills] prs: ${d.prs.length}, issues: ${d.issues.length}`);
            return d;
          })
          .catch((err) => {
            console.error(`  [claude-code-skills] fetch failed: ${err}`);
            return EMPTY_SKILLS;
          }),
    !shouldRun("ai-web")
      ? Promise.resolve(EMPTY_WEB)
      : Promise.all([
          fetchSiteContent("anthropic", webState).catch((err): WebFetchResult => {
            console.error(`  [web/anthropic] fetch failed: ${err}`);
            return {
              site: "anthropic",
              siteName: "Anthropic (Claude)",
              isFirstRun: false,
              newItems: [],
              totalDiscovered: 0,
            };
          }),
          fetchSiteContent("openai", webState).catch((err): WebFetchResult => {
            console.error(`  [web/openai] fetch failed: ${err}`);
            return {
              site: "openai",
              siteName: "OpenAI",
              isFirstRun: false,
              newItems: [],
              totalDiscovered: 0,
            };
          }),
        ]),
    !shouldRun("ai-trending")
      ? Promise.resolve(EMPTY_TRENDING)
      : fetchTrendingData().catch((): TrendingData => EMPTY_TRENDING),
    !shouldRun("ai-hn") ? Promise.resolve(EMPTY_HN) : fetchHnData().catch((): HnData => EMPTY_HN),
    !shouldRun("ai-ph") ? Promise.resolve(EMPTY_PH) : fetchPhData().catch((): PhData => EMPTY_PH),
    !shouldRun("ai-arxiv")
      ? Promise.resolve(EMPTY_ARXIV)
      : fetchArxivData().catch((): ArxivData => EMPTY_ARXIV),
    !shouldRun("ai-hf") ? Promise.resolve(EMPTY_HF) : fetchHfData().catch((): HfData => EMPTY_HF),
    !shouldRun("ai-community")
      ? Promise.resolve(EMPTY_DEVTO)
      : fetchDevtoData().catch((): DevtoData => EMPTY_DEVTO),
    !shouldRun("ai-community")
      ? Promise.resolve(EMPTY_LOBSTERS)
      : fetchLobstersData().catch((): LobstersData => EMPTY_LOBSTERS),
  ]);

  return {
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    hfData,
    devtoData,
    lobstersData,
  };
}

// ---------------------------------------------------------------------------
// Phase 2: LLM summaries
// ---------------------------------------------------------------------------

/** Call LLM with logging and error fallback. */
async function summarize(id: string, prompt: string, failMsg: string, maxTokens?: number): Promise<string> {
  console.log(`  [${id}] Calling LLM for summary...`);
  try {
    return await callLlm(prompt, maxTokens);
  } catch (err) {
    console.error(`  [${id}] LLM call failed: ${err}`);
    return failMsg;
  }
}

/** Summarize a repo's activity, returning a RepoDigest. Skips LLM if no data. */
async function summarizeRepo(
  { cfg, issues, prs, releases }: RepoFetch,
  prompt: string,
  noActivityMsg: string,
  failMsg: string,
): Promise<RepoDigest> {
  if (!issues.length && !prs.length && !releases.length) {
    console.log(`  [${cfg.id}] No activity, skipping LLM call`);
    return { config: cfg, issues, prs, releases, summary: noActivityMsg };
  }
  const summary = await summarize(cfg.id, prompt, failMsg);
  return { config: cfg, issues, prs, releases, summary };
}

async function generateSummaries(
  fetchedCli: RepoFetch[],
  fetchedOpenclaw: RepoFetch,
  skillsData: { prs: GitHubItem[]; issues: GitHubItem[] },
  fetchedPeers: RepoFetch[],
  trendingData: TrendingData,
  dateStr: string,
  lang: Lang = "zh",
): Promise<{
  cliDigests: RepoDigest[];
  openclawSummary: string;
  skillsSummary: string;
  peerDigests: RepoDigest[];
  trendingSummary: string;
}> {
  const noActivity = MSG.noActivity[lang];
  const fail = MSG.summaryFailed[lang];

  const [cliDigests, openclawSummary, skillsSummary, peerDigests, trendingSummary] = await Promise.all([
    Promise.all(
      fetchedCli.map((f) =>
        summarizeRepo(f, buildCliPrompt(f.cfg, f.issues, f.prs, f.releases, dateStr, lang), noActivity, fail),
      ),
    ),
    summarizeRepo(
      fetchedOpenclaw,
      buildPeerPrompt(
        fetchedOpenclaw.cfg,
        fetchedOpenclaw.issues,
        fetchedOpenclaw.prs,
        fetchedOpenclaw.releases,
        dateStr,
        50,
        30,
        lang,
      ),
      noActivity,
      fail,
    ).then((d) => d.summary),
    summarize(
      "claude-code-skills",
      buildSkillsPrompt(skillsData.prs, skillsData.issues, dateStr, lang),
      MSG.skillsFailed[lang],
    ),
    Promise.all(
      fetchedPeers.map((f) =>
        summarizeRepo(
          f,
          buildPeerPrompt(f.cfg, f.issues, f.prs, f.releases, dateStr, undefined, undefined, lang),
          noActivity,
          fail,
        ),
      ),
    ),
    (async () => {
      const hasData = trendingData.trendingRepos.length > 0 || trendingData.searchRepos.length > 0;
      if (!hasData) {
        return MSG.trendingNoData[lang];
      }
      return summarize(
        "trending",
        buildTrendingPrompt(trendingData, dateStr, lang),
        MSG.trendingFailed[lang],
        LLM_TOKENS_TRENDING,
      );
    })(),
  ]);

  return { cliDigests, openclawSummary, skillsSummary, peerDigests, trendingSummary };
}

async function generateGenuiSummaries(
  fetchedGenui: RepoFetch[],
  dateStr: string,
  lang: Lang = "zh",
): Promise<RepoDigest[]> {
  const noActivity = MSG.noActivity[lang];
  const fail = MSG.summaryFailed[lang];
  return Promise.all(
    fetchedGenui.map((f) =>
      summarizeRepo(
        f,
        buildPeerPrompt(f.cfg, f.issues, f.prs, f.releases, dateStr, undefined, undefined, lang),
        noActivity,
        fail,
      ),
    ),
  );
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  requireEnv("GITHUB_TOKEN");

  const now = new Date();
  const since = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const dateStr = toCstDateStr(now);
  const utcStr = toUtcStr(now);
  const digestRepo = process.env["DIGEST_REPO"] ?? "";

  const providerName = process.env["LLM_PROVIDER"] ?? "anthropic";
  console.log(`[${now.toISOString()}] Starting digest | provider: ${providerName}`);

  // 1. Fetch all data in parallel
  const webState = loadWebState();
  const {
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    hfData,
    devtoData,
    lobstersData,
  } = await fetchAllData(since, webState);

  const peerIds = new Set(OPENCLAW_PEERS.map((p) => p.id));
  const genuiIds = new Set(GENUI_REPOS.map((r) => r.id));
  const fetchedCli = fetched.filter(
    (f) => f.cfg.id !== OPENCLAW.id && !peerIds.has(f.cfg.id) && !genuiIds.has(f.cfg.id),
  );
  const fetchedOpenclaw = fetched.find((f) => f.cfg.id === OPENCLAW.id)!;
  const fetchedPeers = fetched.filter((f) => peerIds.has(f.cfg.id));
  const fetchedGenui = fetched.filter((f) => genuiIds.has(f.cfg.id));

  // When ONLY_REPORTS filters out both ai-cli and ai-agents, skip the shared
  // summary+comparison pipeline entirely (saves LLM calls + time).
  const runCliOrAgents = shouldRun("ai-cli") || shouldRun("ai-agents");

  // 2. Generate per-repo LLM summaries in parallel (zh + en simultaneously)
  console.log("  Generating summaries in ZH and EN in parallel...");
  const [zhSummaries, enSummaries, zhGenuiDigests, enGenuiDigests] = await Promise.all([
    runCliOrAgents
      ? generateSummaries(fetchedCli, fetchedOpenclaw, skillsData, fetchedPeers, trendingData, dateStr, "zh")
      : Promise.resolve(null as unknown as Awaited<ReturnType<typeof generateSummaries>>),
    runCliOrAgents
      ? generateSummaries(fetchedCli, fetchedOpenclaw, skillsData, fetchedPeers, trendingData, dateStr, "en")
      : Promise.resolve(null as unknown as Awaited<ReturnType<typeof generateSummaries>>),
    shouldRun("ai-genui")
      ? generateGenuiSummaries(fetchedGenui, dateStr, "zh")
      : Promise.resolve([] as RepoDigest[]),
    shouldRun("ai-genui")
      ? generateGenuiSummaries(fetchedGenui, dateStr, "en")
      : Promise.resolve([] as RepoDigest[]),
  ]);

  // 3. Generate cross-repo comparisons in parallel (zh + en)
  console.log("  Calling LLM for comparative analyses (ZH + EN)...");
  const summariesByLang = runCliOrAgents ? { zh: zhSummaries, en: enSummaries } : null;

  const makeOpenclawDigest = (lang: Lang): RepoDigest => ({
    config: OPENCLAW,
    issues: fetchedOpenclaw.issues,
    prs: fetchedOpenclaw.prs,
    releases: fetchedOpenclaw.releases,
    summary: summariesByLang![lang].openclawSummary,
  });

  const [
    zhComparison,
    zhPeersComparison,
    zhGenuiComparison,
    enComparison,
    enPeersComparison,
    enGenuiComparison,
  ] = await Promise.all([
    shouldRun("ai-cli")
      ? callLlm(buildComparisonPrompt(zhSummaries.cliDigests, dateStr, "zh"))
      : Promise.resolve(""),
    shouldRun("ai-agents")
      ? callLlm(buildPeersComparisonPrompt(makeOpenclawDigest("zh"), zhSummaries.peerDigests, dateStr, "zh"))
      : Promise.resolve(""),
    shouldRun("ai-genui")
      ? callLlm(buildGenuiComparisonPrompt(zhGenuiDigests, dateStr, "zh"))
      : Promise.resolve(""),
    shouldRun("ai-cli")
      ? callLlm(buildComparisonPrompt(enSummaries.cliDigests, dateStr, "en"))
      : Promise.resolve(""),
    shouldRun("ai-agents")
      ? callLlm(buildPeersComparisonPrompt(makeOpenclawDigest("en"), enSummaries.peerDigests, dateStr, "en"))
      : Promise.resolve(""),
    shouldRun("ai-genui")
      ? callLlm(buildGenuiComparisonPrompt(enGenuiDigests, dateStr, "en"))
      : Promise.resolve(""),
  ]);

  const comparisonByLang = { zh: zhComparison, en: enComparison };
  const peersComparisonByLang = { zh: zhPeersComparison, en: enPeersComparison };
  const genuiComparisonByLang = { zh: zhGenuiComparison, en: enGenuiComparison };

  // 4. Build + save all reports (zh + en)
  const cliContent: Record<Lang, string> = {} as Record<Lang, string>;
  const openclawContent: Record<Lang, string> = {} as Record<Lang, string>;
  const genuiContent: Record<Lang, string> = {} as Record<Lang, string>;

  for (const lang of ["zh", "en"] as const) {
    const ft = autoGenFooter(lang);
    const suffix = lang === "en" ? "-en" : "";

    if (shouldRun("ai-cli") && summariesByLang) {
      const s = summariesByLang[lang];
      cliContent[lang] = buildCliReportContent(
        s.cliDigests,
        s.skillsSummary,
        comparisonByLang[lang],
        utcStr,
        dateStr,
        ft,
        CLAUDE_SKILLS_REPO,
        lang,
      );
      console.log(`  Saved ${saveFile(cliContent[lang], dateStr, `ai-cli${suffix}.md`)}`);
    }
    if (shouldRun("ai-agents") && summariesByLang) {
      const s = summariesByLang[lang];
      openclawContent[lang] = buildOpenclawReportContent(
        fetchedOpenclaw,
        s.peerDigests,
        s.openclawSummary,
        peersComparisonByLang[lang],
        utcStr,
        dateStr,
        ft,
        OPENCLAW,
        OPENCLAW_PEERS,
        lang,
      );
      console.log(`  Saved ${saveFile(openclawContent[lang], dateStr, `ai-agents${suffix}.md`)}`);
    }
    if (shouldRun("ai-genui")) {
      const genuiDigests = lang === "zh" ? zhGenuiDigests : enGenuiDigests;
      genuiContent[lang] = buildGenuiReportContent(
        genuiDigests,
        genuiComparisonByLang[lang],
        utcStr,
        dateStr,
        ft,
        lang,
      );
      console.log(`  Saved ${saveFile(genuiContent[lang], dateStr, `ai-genui${suffix}.md`)}`);
    }
  }

  // Web report: zh saves state, en skips state save
  if (shouldRun("ai-web")) {
    for (const lang of ["zh", "en"] as const) {
      await saveWebReport(webResults, webState, utcStr, dateStr, digestRepo, autoGenFooter(lang), lang);
    }
  }

  const savePromises: Promise<void>[] = [];
  if (shouldRun("ai-trending") && summariesByLang) {
    savePromises.push(
      saveTrendingReport(
        trendingData,
        summariesByLang.zh.trendingSummary,
        utcStr,
        dateStr,
        digestRepo,
        autoGenFooter("zh"),
        "zh",
      ),
      saveTrendingReport(
        trendingData,
        summariesByLang.en.trendingSummary,
        utcStr,
        dateStr,
        digestRepo,
        autoGenFooter("en"),
        "en",
      ),
    );
  }
  if (shouldRun("ai-hn")) {
    savePromises.push(
      saveHnReport(hnData, utcStr, dateStr, digestRepo, autoGenFooter("zh"), "zh"),
      saveHnReport(hnData, utcStr, dateStr, digestRepo, autoGenFooter("en"), "en"),
    );
  }
  if (shouldRun("ai-ph")) {
    savePromises.push(
      savePhReport(phData, utcStr, dateStr, digestRepo, autoGenFooter("zh"), "zh"),
      savePhReport(phData, utcStr, dateStr, digestRepo, autoGenFooter("en"), "en"),
    );
  }
  if (shouldRun("ai-arxiv")) {
    savePromises.push(
      saveArxivReport(arxivData, utcStr, dateStr, digestRepo, autoGenFooter("zh"), "zh"),
      saveArxivReport(arxivData, utcStr, dateStr, digestRepo, autoGenFooter("en"), "en"),
    );
  }
  if (shouldRun("ai-hf")) {
    savePromises.push(
      saveHfReport(hfData, utcStr, dateStr, digestRepo, autoGenFooter("zh"), "zh"),
      saveHfReport(hfData, utcStr, dateStr, digestRepo, autoGenFooter("en"), "en"),
    );
  }
  if (shouldRun("ai-community")) {
    savePromises.push(
      saveCommunityReport(devtoData, lobstersData, utcStr, dateStr, digestRepo, autoGenFooter("zh"), "zh"),
      saveCommunityReport(devtoData, lobstersData, utcStr, dateStr, digestRepo, autoGenFooter("en"), "en"),
    );
  }
  await Promise.all(savePromises);

  // 5. Generate highlights for Telegram notification
  const readReport = (name: string): string | undefined => {
    const p = path.join("digests", dateStr, name);
    return fs.existsSync(p) ? fs.readFileSync(p, "utf-8") : undefined;
  };

  const zhReports: Record<string, string> = {};
  const enReports: Record<string, string> = {};
  if (shouldRun("ai-cli") && cliContent.zh) {
    zhReports["ai-cli"] = cliContent.zh;
    enReports["ai-cli"] = cliContent.en;
  }
  if (shouldRun("ai-agents") && openclawContent.zh) {
    zhReports["ai-agents"] = openclawContent.zh;
    enReports["ai-agents"] = openclawContent.en;
  }
  if (shouldRun("ai-genui") && genuiContent.zh) {
    zhReports["ai-genui"] = genuiContent.zh;
    enReports["ai-genui"] = genuiContent.en;
  }
  for (const [id, zhFile, enFile] of [
    ["ai-trending", "ai-trending.md", "ai-trending-en.md"],
    ["ai-web", "ai-web.md", "ai-web-en.md"],
    ["ai-hn", "ai-hn.md", "ai-hn-en.md"],
    ["ai-ph", "ai-ph.md", "ai-ph-en.md"],
    ["ai-arxiv", "ai-arxiv.md", "ai-arxiv-en.md"],
    ["ai-hf", "ai-hf.md", "ai-hf-en.md"],
    ["ai-community", "ai-community.md", "ai-community-en.md"],
  ] as const) {
    if (!shouldRun(id)) continue;
    const zh = readReport(zhFile);
    const en = readReport(enFile);
    if (zh) zhReports[id] = zh;
    if (en) enReports[id] = en;
  }

  console.log("  Generating highlights for Telegram...");
  const highlights: Record<Lang, ReportHighlights> = { zh: {}, en: {} };
  // Generate + parse one language, retrying once. The LLM occasionally emits
  // slightly malformed JSON that repairJson can't fix (seen 2026-07-13: zh
  // failed with "Expected ',' or ']' after array element"); a fresh generation
  // usually returns valid JSON. Each language runs independently so a failure
  // in one never wipes the other.
  const genHighlights = async (reports: Record<string, string>, lang: Lang): Promise<ReportHighlights> => {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        return parseLlmJson<ReportHighlights>(await callLlm(buildHighlightsPrompt(reports, lang), 2048));
      } catch (err) {
        const tag = attempt < 2 ? "retrying" : "giving up";
        console.error(`  [highlights] ${lang} attempt ${attempt} failed (${tag}): ${err}`);
      }
    }
    return {};
  };
  const [zhRes, enRes] = await Promise.all([genHighlights(zhReports, "zh"), genHighlights(enReports, "en")]);
  highlights.zh = zhRes;
  highlights.en = enRes;

  // If one language failed (generation or parse) but the other succeeded,
  // backfill the empty one from the other so notifications never render with
  // zero highlights. Seen 2026-07-13: zh failed intermittently while en was
  // fine, leaving Telegram/Feishu with only section headers and no bullets.
  const zhEmpty = Object.keys(highlights.zh).length === 0;
  const enEmpty = Object.keys(highlights.en).length === 0;
  if (zhEmpty && !enEmpty) {
    console.warn("  [highlights] zh empty — backfilling from en");
    highlights.zh = highlights.en;
  } else if (enEmpty && !zhEmpty) {
    console.warn("  [highlights] en empty — backfilling from zh");
    highlights.en = highlights.zh;
  }

  const highlightsPath = saveFile(JSON.stringify(highlights, null, 2), dateStr, "highlights.json");
  console.log(`  Saved ${highlightsPath}`);

  // 6. Create GitHub issues for CLI + OpenClaw (zh + en)
  if (digestRepo) {
    for (const lang of ["zh", "en"] as const) {
      if (shouldRun("ai-cli") && cliContent[lang]) {
        const cliUrl = await createGitHubIssue(
          CLI_ISSUE_TITLE(dateStr, lang),
          cliContent[lang],
          ISSUE_LABELS.cli[lang],
        );
        console.log(`  Created CLI issue (${lang}): ${cliUrl}`);
      }

      if (shouldRun("ai-agents") && openclawContent[lang]) {
        const ocUrl = await createGitHubIssue(
          OPENCLAW_ISSUE_TITLE(dateStr, lang),
          openclawContent[lang],
          ISSUE_LABELS.openclaw[lang],
        );
        console.log(`  Created OpenClaw issue (${lang}): ${ocUrl}`);
      }

      if (shouldRun("ai-genui") && genuiContent[lang]) {
        const genuiUrl = await createGitHubIssue(
          GENUI_ISSUE_TITLE(dateStr, lang),
          genuiContent[lang],
          ISSUE_LABELS.gui[lang],
        );
        console.log(`  Created GenUI issue (${lang}): ${genuiUrl}`);
      }
    }
  }

  console.log("Done!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
