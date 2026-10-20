# Generative UI Ecosystem Digest 2026-10-20

> Issues: 44 | PRs: 114 | Projects covered: 4 | Generated: 2026-10-20 04:02 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## Cross-Ecosystem Comparison

# Generative UI Ecosystem Cross-Project Report — 2026-10-20

*Coverage: a2ui, OpenUI, json-render, CopilotKit*

---

## 1. Ecosystem Overview

The generative UI space is visibly maturing from demo-grade to production-grade: today's dominant workstreams are performance conformance, runtime reliability, protocol versioning, and migration hardening rather than new rendering capabilities. A strong convergence signal is the A2UI protocol, referenced by three of the four projects (a2ui as its home, CopilotKit aligning its generative UI catalog to A2UI 1.0, OpenUI publishing an integration page). Multi-framework and multi-platform rendering breadth has become table stakes, with active expansion into native mobile (Swift, React Native) and long-tail frameworks (Lynx, Vue). Activity is highly uneven: two projects are in intense engineering phases (a2ui: 50 PRs; CopilotKit: 43 PRs), while json-render spent the day on backlog triage and OpenUI on web-presence/SEO recovery — reflecting projects at very different lifecycle stages.

---

## 2. Activity Comparison (last 24h)

| Project | Issues Active | Issue Closures | PRs Active | PR Closures/Merges | Open PRs In Flight | Release Status |
|---|---|---|---|---|---|---|
| **a2ui** | 17 | 3 | 50 | 5 | **45** | 0 — no recent releases; breaking-change release (`feat!` #3279) pending |
| **OpenUI** | **0** | 0 | 8 | 2 | 6 | 0 — core library untouched; docs/site work only |
| **json-render** | 17 | 16 (mostly backlog sweep) | 13 | 11 (incl. legacy sweep) | 2 | 0 — npm at 0.19.0 with empty GitHub releases page (#287) |
| **CopilotKit** | 10 | 7 | 43 | 14 | 29 | 0 — patch release evidently staged (fixes queued: #7881, #7877, #7835) |

*Takeaway:* raw volume is highest at a2ui and CopilotKit, but throughput quality differs sharply — CopilotKit closed 70% of touched issues; a2ui merged only 10% of active PRs and has CI red on main for all three SDKs (#3335/#3336/#3325).

---

## 3. Shared Feature Directions

1. **A2UI protocol convergence** — *a2ui, CopilotKit, OpenUI.* a2ui is hardening v0.8/v0.9/v1.0 conformance (version-keyed capabilities, #3331); CopilotKit is aligning its generative UI to the A2UI 1.0 basic catalog (#7879: names, child references, dynamic values, checks, calc); OpenUI is adding an A2UI integration page (#1448). Cross-vendor interoperability is becoming an explicit investment, not a sideshow.
2. **Performance at scale** — all four, in different layers: a2ui faces runtime rendering scale (Swift full-tree re-resolution on 2,000-item lists, #3200; quadratic streaming costs now guarded by CI `measure_growth`, #3285/#3314); CopilotKit faces bundle weight (40 MB docs payload #7821; headless entry pulling the full render stack, #7882); OpenUI faces site performance (mobile Lighthouse ~54, #1450).
3. **Renderer/platform breadth** — *OpenUI, json-render, a2ui.* OpenUI markets one-spec-five-renderers (React/Vue/Svelte/Angular/Lynx); json-render's most-upvoted request is Vue support (#34, 11 👍) plus SvelteKit (#177); a2ui targets full Apple-ecosystem coverage (visionOS/tvOS/watchOS, #3252) with a Dart SDK still in backlog (#2356).
4. **Agent-ecosystem integration** — *a2ui, CopilotKit, json-render.* MCP catalogs and runtime-extensible tool discovery (a2ui #3186, #3303); Strands/Mastra/LangGraph/Google ADK onboarding and AG-UI state sync (CopilotKit #7783, #3132); Claude Code skill and Dispatch runtime surfacing (json-render #250).
5. **Docs/onboarding reliability as an adoption gate** — *json-render, CopilotKit, OpenUI.* Broken Quick Start and API drift (json-render #20, #42, #47, #104); v1→v2 migration doc fixes (CopilotKit #7876, PE-920/922); 404 cleanup and a CI-enforced URL contract (OpenUI #1444, #1451).

---

## 4. Differentiation Analysis

| Dimension | a2ui | OpenUI | json-render | CopilotKit |
|---|---|---|---|---|
| **Positioning** | Protocol-first spec + multi-language SDKs (Python/Dart/TS) + native Swift renderer | Spec-once, render-anywhere web toolkit | Rendering library with per-framework adapters | Full-stack agent platform (chat UI + runtime + integrations) |
| **Feature focus today** | Streaming/rendering performance conformance; MCP/iFrame catalogs; breaking stateless Parser redesign (#3279) | SEO recovery, site perf, positioning | Validation correctness, devtools fixes, RN parity | v2 API hardening, self-hosted Intelligence runtime durability, feedback learning (#7828) |
| **Target users** | Platform teams shipping cross-platform (incl. native Apple) generative UI under a versioned protocol | Web devs evaluating framework-agnostic adoption | React/RN developers embedding generative UI in AI apps | Teams building production copilots on LangGraph/ADK/Strands/Mastra |
| **Technical approach** | Versioned wire protocol, cross-SDK conformance suites, undo-log state rollback | Multi-renderer abstraction, heavy CI/automation | JSON-patch rendering with state/bindings/`$computed` props; Zod-validated catalogs | Monorepo framework; AG-UI protocol; self-hosted runtime with runner durability |

Notably, a2ui and CopilotKit are converging from opposite directions — a2ui builds protocol conformance into its SDKs while CopilotKit builds protocol compatibility into its framework — while json-render and OpenUI compete on renderer coverage, where OpenUI already ships what json-render's community most demands (Vue).

---

## 5. Community Momentum & Maturity

- **Most rapid iteration:** a2ui (50 PRs/24h, 7+ contributors) and CopilotKit (43 PRs/24h, 11+ authors). 
- **Healthiest community engine: CopilotKit.** 7/10 issues closed including a 9-month-old ADK state-sync bug (#3132); same-day fix PRs for the prompt-injection report (#7846→#7881); a 5-day turnaround on a 40 MB bundle report (#7821→#7822); repro-driven community reports (one contributor filed 5 runnable-repro issues). 
- **a2ui: velocity exceeds capacity.** 45 open PRs vs. 5 merged signals a review bottleneck; eval CI failing on main across all three SDKs is the day's most concrete operational risk; a 25-day-old 9-PR stacked catalog series (#2795→#3226) gates an entire feature surface.
- **json-render: demand outpaces maintenance.** Strong positive sentiment and the ecosystem's clearest feature demand signal (Vue, 11 👍), but ~9-month triage latency, a bulk closure sweep of uncertain merged-vs-stale status, and npm/GitHub release mismatch (0.19.0 vs. empty releases) erode upgrade confidence.
- **OpenUI: minimal community, growth phase.** Zero issue traffic; work is maintainer + AI-bot driven (3 of 8 PRs bot-authored), consistent with a project investing in acquisition (SEO, positioning) ahead of community formation.
- **Maturity ranking:** CopilotKit (v2 era, staged releases, disciplined backlog burn-down) > a2ui (pre-1.0 protocol rigor, unstable CI) ≈ json-render (0.19.0, fast-moving but docs drift) > OpenUI (core quiet, web-presence focus).

---

## 6. Trend Signals

1. **Standardization is the next competitive layer.** Three projects independently referencing A2UI within one day indicates the market is moving toward interoperable generative UI protocols. Developers choosing a stack today should weight protocol alignment (A2UI, AG-UI) heavily — it's the likeliest lock-in/lock-out axis.
2. **Production-scale pain has arrived.** Incremental rendering (#3200), streaming-cost regression guards (#3285), tool-call pairing durability (#7877), and state-sync correctness (#3132) are all "works in a demo, fails at 2,000 items" problems — evidence that real deployments, not prototypes, now drive roadmaps.
3. **Bundle weight and headless correctness are first-class requirements** (CopilotKit #7821/#7882; OpenUI's Lighthouse work) — generative UI runtimes are being evaluated like any other frontend dependency.
4. **Native/mobile generative UI is an active frontier** (a2ui's Apple-platform push, Dart SDK demand; json-render's RN parity work #294), not a hypothetical.
5. **Cost and trust concerns are surfacing:** cheaper-model support requests (json-render #16, moving off Opus 4.5) and security-adjacent issues like prompt-injection warnings (CopilotKit #7846) will increasingly shape adoption decisions.
6. **Docs, onboarding, and discoverability are measurable adoption gates** — three of four projects spent effort here today; release-notes hygiene (json-render, a2ui) is a leading indicator of maintenance reliability worth checking before adopting.
7. **AI-assisted maintenance is normalizing** (OpenUI's bot-authored PRs passing credential-free verification contracts) — expect maintenance capacity to decouple further from human maintainer headcount.

**Practical guidance:** for cross-platform/native needs under a protocol, watch a2ui (but wait for its pending breaking release and CI stabilization); for a full agent platform with the strongest operational discipline, CopilotKit is the safest current bet; for lightweight React/RN embedding, json-render is capable but verify against its docs drift; for maximal web-framework breadth, OpenUI — while noting its community is too young to validate long-term support.

---

## Per-Project Reports

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui Project Digest — 2026-10-20

**Repository:** [a2ui-project/a2ui](https://github.com/a2ui-project/a2ui) | **Activity window:** last 24h

---

## 1. Today's Overview

a2ui is in a phase of intense engineering velocity: 50 PRs and 17 issues saw activity in the last 24 hours, spanning a broad contributor base (ditman, nan-yu, josemontespg, polina-c, retz8, BBC6BAE9, hangy233). However, throughput lags input — only 5 of 50 PRs merged/closed and 3 of 17 issues closed — leaving 45 PRs in flight, indicating heavy stacked work-in-progress and a likely review bottleneck. Work concentrates on three fronts: TypeScript agent SDK conformance hardening, cross-SDK streaming/rendering performance, and the long-running MCP + iFrame catalog series. The main health concern today is CI: eval workflows are failing on main for **all three SDKs** (Python, Dart, TypeScript). No releases shipped.

## 2. Releases

No new releases today (0). The repository reports no recent releases at all — notable given the volume of breaking in-flight changes (e.g., the `feat!` PR #3279), suggesting a release with migration notes is pending rather than simply absent.

## 3. Project Progress

**Issues closed (Oct 19–20):**
- [#3024](https://redirect.github.com/a2ui-project/a2ui/issues/3024) — DirectJsonStreamParser surface-lifecycle bug (v0.8 swallowed `deleteSurface` and permanently blocked the surface ID; v0.9 couldn't re-create deleted surfaces). Closed after 13 days.
- [#3145](https://redirect.github.com/a2ui-project/a2ui/issues/3145) — Swift renderer `NodeResolver`/`PayloadValidator` now automatically handle `ComponentCommon.accessibility` on custom component schemas.
- [#3285](https://redirect.github.com/a2ui-project/a2ui/issues/3285) (P1) — Performance tests for streaming/payload checks added to CI. The timing conformance cases from PR #3314 landed, including `measure_growth` (fails when an n→4n payload takes >8× longer, catching quadratic cost — a direct response to Dart's 1.4s/6.4KB streaming regression found in review).

**Merged PRs:** 5 per activity counts (not individually identified in the dataset). Eval-failure issues [#3336](https://redirect.github.com/a2ui-project/a2ui/issues/3336)/[#3335](https://redirect.github.com/a2ui-project/a2ui/issues/3335) reference commit `ba4c47b` (PR #3323) on main, and [#3325](https://redirect.github.com/a2ui-project/a2ui/issues/3325) references PR #3314's commit on main — indicating both landed, with #3314 delivering the conformance timing suites that closed #3285.

**Features advancing (open PRs):**
- **TS agent SDK conformance cluster (ditman):** [#3329](https://redirect.github.com/a2ui-project/a2ui/pull/3329) (dedupe common schemas, strict `FunctionCallSchema`), [#3330](https://redirect.github.com/a2ui-project/a2ui/pull/3330) (null allowlists in pruning transformers), [#3331](https://redirect.github.com/a2ui-project/a2ui/pull/3331) (version-keyed capabilities, v0.9 `create_format` cases, refs #3134), [#3332](https://redirect.github.com/a2ui-project/a2ui/pull/3332) (parser `unwrap`/`compile` alignment), [#3333](https://redirect.github.com/a2ui-project/a2ui/pull/3333) (KNOWN_GAPS/CHANGELOG updates).
- **Performance (nan-yu):** [#3326](https://redirect.github.com/a2ui-project/a2ui/pull/3326) (Python core: incremental `updateComponents` checks + `python-performance` CI job), [#3327](https://redirect.github.com/a2ui-project/a2ui/pull/3327) (web_core equivalent), [#3328](https://redirect.github.com/a2ui-project/a2ui/pull/3328) (cross-SDK `ComponentGraphBound` rename), and the architectural [#3279](https://redirect.github.com/a2ui-project/a2ui/pull/3279) (`feat!` stateless Parser + `ResponseStream` + undo-log rollback in `RendererState`).
- **MCP/iFrame catalogs (josemontespg):** the full stack saw activity — [#2795](https://redirect.github.com/a2ui-project/a2ui/pull/2795) (schema), [#2797](https://redirect.github.com/a2ui-project/a2ui/pull/2797) (package/bridge), [#2798](https://redirect.github.com/a2ui-project/a2ui/pull/2798), [#2799](https://redirect.github.com/a2ui-project/a2ui/pull/2799), [#2803](https://redirect.github.com/a2ui-project/a2ui/pull/2803), [#3008](https://redirect.github.com/a2ui-project/a2ui/pull/3008), [#3009](https://redirect.github.com/a2ui-project/a2ui/pull/3009), [#3010](https://redirect.github.com/a2ui-project/a2ui/pull/3010), [#3186](https://redirect.github.com/a2ui-project/a2ui/pull/3186) (`configureMcpCatalog`), [#3226](https://redirect.github.com/a2ui-project/a2ui/pull/3226) (Kanban showcase).

## 4. Community Hot Topics

Ranked by comment volume (reactions are uniformly 0 — engagement here is conversational, not 👍-driven; PR comment data unavailable):

1. **[#3200](https://redirect.github.com/a2ui-project/a2ui/issues/3200) (6 comments, P2)** — Swift renderer re-resolves the entire tree on every write; a search TextField bound to `/query` re-processes a 2,000-item list on each keystroke. **Underlying need:** production-grade incremental rendering in Swift, mirroring the incremental-checks work landing in Python/web_core. The day's most-discussed item.
2. **[#3303](https://redirect.github.com/a2ui-project/a2ui/issues/3303) (2 comments)** — `MessageProcessor` accepts catalogs only at construction; clients cannot register catalogs at runtime. **Underlying need:** dynamic tool discovery — directly relevant to the MCP catalog direction.
3. **[#3252](https://redirect.github.com/a2ui-project/a2ui/issues/3252) (2 comments)** — Swift renderer targets only iOS/macOS/iPadOS. **Underlying need:** full Apple-ecosystem coverage (visionOS, tvOS, watchOS) for generative UI.

**Analysis:** community asks cluster around *scale* (render only what changed) and *breadth* (all Apple platforms, runtime-extensible catalogs) — the profile of users building real production apps, not demos.

## 5. Bugs & Stability

Ranked by severity:

1. **CI red on main (regression, blocking):** [#3336](https://redirect.github.com/a2ui-project/a2ui/issues/3336) (Python SDK) and [#3335](https://redirect.github.com/a2ui-project/a2ui/issues/3335) (Dart SDK) evals failed on main for commit `ba4c47b` (PR #3323); [#3325](https://redirect.github.com/a2ui-project/a2ui/issues/3325) (TypeScript SDK) failed for PR #3314's commit. All `needs-triage`, no comments, no fix PRs identified yet. Note: #3325 is from yesterday and may have been resolved by a later run.
2. **[#3337](https://redirect.github.com/a2ui-project/a2ui/issues/3337) — stale validation state (reported today):** replacing a Button definition that omits previously failing `checks` leaves the mounted button disabled; `GenericBinder` merges new properties into the old snapshot and retains `isValid: false`. **Fix in flight same day:** [#3338](https://redirect.github.com/a2ui-project/a2ui/pull/3338).
3. **[#3305](https://redirect.github.com/a2ui-project/a2ui/issues/3305) (P2, needs review):** Python core `Catalog.to_json` raises for functions declared without an argument schema. No linked fix PR visible in today's set.
4. **Resolved:** the serious stream-parser lifecycle bug [#3024](https://redirect.github.com/a2ui-project/a2ui/issues/3024) is now closed.

## 6. Feature Requests & Roadmap Signals

- **Performance is the strongest signal.** [#3200](https://redirect.github.com/a2ui-project/a2ui/issues/3200) (Swift incremental refresh) + closed #3285 + open P1s [#3315](https://redirect.github.com/a2ui-project/a2ui/issues/3315)/[#3316](https://redirect.github.com/a2ui-project/a2ui/issues/3316) (scaling conformance suites for Python/TypeScript) + PRs #3326/#3327/#3279 form a coherent cross-SDK performance program — likely the core of the next release.
- **Breaking API evolution in TS agent SDK:** [#3279](https://redirect.github.com/a2ui-project/a2ui/pull/3279) (`feat!` stateless Parser) signals the next TypeScript agent release will carry breaking changes and migration notes; [#3318](https://redirect.github.com/a2ui-project/a2ui/issues/3318) (public `assume_unknown_surfaces` on `RendererState` + ADK opt-in) is a review follow-up to #3269 and likely near-term, as it unblocks ADK callers.
- **Runtime catalogs ([#3303](https://redirect.github.com/a2ui-project/a2ui/issues/3303))** aligns with `configureMcpCatalog` (#3186); a post-construction `addCatalog` API is a plausible next step.
- **Apple platform expansion ([#3252](https://redirect.github.com/a2ui-project/a2ui/issues/3252))** becomes tractable once #3200's incremental rendering lands.
- **Protocol multi-version hardening:** #3331's v0.9 `create_format` cases and version-keyed capabilities show v0.8/v0.9/v1.0 correctness remains an active concern.
- **Maintenance debt:** [#3320](https://redirect.github.com/a2ui-project/a2ui/issues/3320) (extract duplicated prepublish scripts across 6 published TS packages) is a low-risk quick win.

**Prediction:** the next release will center on streaming/rendering performance conformance across SDKs and the TS agent conformance batch, with the stateless-Parser change as the headline migration item.

## 7. User Feedback Summary

- **Pain points (concrete, production-flavored):**
  - *Performance at scale:* full-tree re-resolution in Swift with 2,000-item bound lists (#3200); previously quadratic streaming cost in Dart (1.4s for 6.4KB in 16-byte chunks vs 5ms for compile, per #3285) — now guarded by CI timing cases.
  - *Stale mounted-UI state:* dynamically replaced component definitions retaining old validation (#3337).
  - *Extensibility limits:* catalogs locked at construction (#3303); parser rejecting updates to surfaces the response doesn't create (#3318, affects ADK users).
- **Use cases visible in the data:** generative UI with large bound lists; MCP tool-driven apps (Kanban board with agent mutations, 3D geometry viewer); iframe-embedded web apps (URL order tracker, srcdoc tip calculator); multi-platform Apple deployment.
- **Satisfaction signals:** same-day bug-to-fix turnaround (#3337 → #3338, including a likely first-time contributor fixing their own report) and a disciplined conformance program (KNOWN_GAPS.md, changelogs, cross-SDK suites) indicate responsive maintenance. **Dissatisfaction vectors:** eval failures on main across all three SDKs, and a growing 45-PR review queue.

## 8. Backlog Watch

- **[#2356](https://redirect.github.com/a2ui-project/a2ui/issues/2356) (P1) — Dart A2UI agent SDK library:** open since 2026-08-20 (~2 months), zero comments. Highest-priority long-idle item.
- **josemontespg's catalog stack (9+ PRs, #2795 → #3226):** base PRs open since 2026-09-25 (~25 days). The entire iframe/MCP feature area stacks on them — review throughput here is the single biggest gate on a whole feature surface.
- **[#3297](https://redirect.github.com/a2ui-project/a2ui/issues/3297) (P1) — genui → a2ui migration (Dart):** contains only internal references (go/a2ui-dart-g3, b/573696248), no comments; needs an external action plan or triage.
- **Needs-triage queue:** eval failures #3325/#3335/#3336 (main-branch health), #3318 (ADK blocker), #3337 (fix pending in #3338).
- **[#3305](https://redirect.github.com/a2ui-project/a2ui/issues/3305) (P2, needs review):** small, well-scoped Python fix awaiting review.

---

**Health read:** Strong velocity and contributor breadth; risks are concentrated in CI stability on main and review capacity for large stacked PR series. Performance conformance and the MCP/iFrame catalogs are the two tracks most likely to define the next release.

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI Project Digest — 2026-10-20

**Repository:** [thesysdev/openui](https://github.com/thesysdev/openui)

---

## 1. Today's Overview

Activity over the last 24h was entirely PR-driven: 8 PRs updated (6 open, 2 closed), **zero issue activity**, and **no releases**. All work is concentrated on the documentation/marketing website (openui.com) — a coordinated wave of SEO recovery, 404 cleanup, and Lighthouse performance fixes following a recent docs reorganisation. The contributor pattern is notable: one focused docs contributor ([zahlekhan](https://redirect.github.com/thesysdev/openui/pull/1451)) filed 4 PRs, AI agents (`devin-ai-integration[bot]`, `thesys-pr-creator[bot]`) authored or updated 3, and a maintainer (shubham-thesys) filed 1. The core OpenUI library/runtime was untouched this window; the project is in a web-presence hardening phase with solid process discipline (CI guards, automated dependency refreshes) but no measurable community discussion volume.

## 2. Releases

No new releases were published in this window; no release data is available.

## 3. Project Progress

**Closed today (2):**
- [PR #1444](https://redirect.github.com/thesysdev/openui/pull/1444) — Redirects removed `/docs/chat/*` pages (superseded by Agent Interface docs) and relocated example URLs to their current locations, eliminating user-facing 404s from the docs reorganisation. Appears landed, as [#1451](https://redirect.github.com/thesysdev/openui/pull/1451) references its redirects as already in place.
- [PR #1446](https://redirect.github.com/thesysdev/openui/pull/1446) — Added a "One spec, rendered in React · Vue · Svelte · Angular · Lynx" proof line under the homepage hero. Closed the same day it opened; [PR #1447](https://redirect.github.com/thesysdev/openui/pull/1447) from maintainer Shubham iterates on the same area, suggesting a rapid review-and-refine cycle.

**Still open / advancing (6):**
- [PR #1451](https://redirect.github.com/thesysdev/openui/pull/1451) — Introduces `docs/urls.txt` as a URL contract plus a CI check so removed pages can't silently 404 again; also redirects the remaining 29 "Not found" URLs from Google Search Console.
- [PR #1450](https://redirect.github.com/thesysdev/openui/pull/1450) — Removes the docs/blog component library from marketing pages' first load (mobile Lighthouse on Home is ~54 in production).
- [PR #1449](https://redirect.github.com/thesysdev/openui/pull/1449) — Sends `X-Robots-Tag: noindex` for `/_next/static` assets, which Google is indexing because Vercel Skew Protection appends `?dpl=<deployment id>` on every deploy.
- [PR #1448](https://redirect.github.com/thesysdev/openui/pull/1448) — Adds an "Open UI" alternate-name SEO play and a new A2UI integration page.
- [PR #1447](https://redirect.github.com/thesysdev/openui/pull/1447) — Restructures the homepage, moving renderer chips into the "Works with" section.
- [PR #1438](https://redirect.github.com/thesysdev/openui/pull/1438) — Bot-driven refresh of CLI templates, overlays, and examples to latest `@openuidev/*` versions; all credential-free verification contracts passed. Open since 2026-10-15, updated today.

**Net progress:** website reliability (no broken links, correct search indexing), marketing-page performance, and template ecosystem freshness all advanced.

## 4. Community Hot Topics

No issues were updated today (0 open, 0 closed), and comment/reaction counts are unavailable on all PRs, so there is no measurable discussion volume. The de facto "hot" cluster is the four SEO/docs PRs by zahlekhan, all responding to Google Search Console findings: 29 not-found URLs, "openui" dropping from #1 to #2 (with `/blog` outranking the homepage), and "open ui" (~1,600 US searches/mo) falling outside the top 30 ([#1448](https://redirect.github.com/thesysdev/openui/pull/1448), [#1449](https://redirect.github.com/thesysdev/openui/pull/1449), [#1450](https://redirect.github.com/thesysdev/openui/pull/1450), [#1451](https://redirect.github.com/thesysdev/openui/pull/1451)).

**Underlying needs inferred:** (a) users arrive via search and old bookmarks, so dead links and deindexing directly hurt acquisition; (b) fast mobile first-load matters for conversion; (c) clearer positioning on multi-framework support (React/Vue/Svelte/Angular/Lynx) and the adjacent A2UI ecosystem. A meta-signal worth noting: heavy use of AI-agent bots for routine PRs aligns with the project's own AI-agent identity.

## 5. Bugs & Stability

No user-reported bugs, crashes, or regressions in the issue tracker today. However, three website defects surfaced via PRs — **all have fix PRs already in flight:**

| Severity | Issue | Fix |
|---|---|---|
| **High** | 29 openui.com URLs returning 404 (old `/docs/chat/*` section, moved example pages); external links and search results still point at them | [#1444](https://redirect.github.com/thesysdev/openui/pull/1444) (closed/landed) + [#1451](https://redirect.github.com/thesysdev/openui/pull/1451) (remaining redirects + CI guard against recurrence) |
| **Medium** | Homepage scores ~54 on mobile Lighthouse in production due to unused JS/CSS from the docs/blog component library being imported via `BASE_URL` in `lib/source.ts` | [#1450](https://redirect.github.com/thesysdev/openui/pull/1450) |
| **Medium** | Google indexing `/_next/static` build chunks as crawlable URLs; each deploy adds a new batch via `?dpl=` skew-protection params | [#1449](https://redirect.github.com/thesysdev/openui/pull/1449) |

No core-runtime stability issues were reported.

## 6. Feature Requests & Roadmap Signals

- **A2UI integration page** ([#1448](https://redirect.github.com/thesysdev/openui/pull/1448)) — new content positioning OpenUI alongside the A2UI ecosystem; signals convergence in the agent-to-UI space and is likely to land with this batch.
- **Multi-renderer emphasis** ([#1446](https://redirect.github.com/thesysdev/openui/pull/1446) → [#1447](https://redirect.github.com/thesysdev/openui/pull/1447)) — Lynx inclusion alongside React/Vue/Svelte/Angular is a differentiator the homepage will now showcase.
- **URL contract + CI** ([#1451](https://redirect.github.com/thesysdev/openui/pull/1451)) — institutionalizes docs reliability, suggesting the docs-reorganisation cleanup is nearing completion.
- **Templates/examples sync** ([#1438](https://redirect.github.com/thesysdev/openui/pull/1438)) — periodic ecosystem refresh; if merged, a templates-oriented release or docs update could follow.

**Prediction:** the next publishable change is most likely a docs/website maintenance wave (the #1448–#1451 batch merging together) rather than a library feature release. "Open UI" keyword recovery is an explicit near-term goal.

## 7. User Feedback Summary

No direct user feedback was captured today — 0 issues, and no comments/reactions recorded on any PR. Indirect signals only: sustained search demand ("open ui" at ~1,600 US searches/mo) and residual traffic to removed URLs imply a search-driven inbound audience currently hitting dead links; the ranking drops indicate discoverability friction rather than product dissatisfaction. The homepage renderer rework targets prospective users evaluating framework compatibility — the key adoption question for a "one spec, many renderers" tool. Observable pain is concentrated in site navigation and performance, not the library itself; satisfaction is not measurable from this window.

## 8. Backlog Watch

- **No issue backlog is assessable** — 0 issues were tracked in this window, so no long-unanswered issues are visible.
- [PR #1438](https://redirect.github.com/thesysdev/openui/pull/1438) (open since 2026-10-15, ~5 days) is the oldest open item updated today — the templates/overlays/examples dependency refresh gates ecosystem freshness and would benefit from maintainer review.
- The four 2026-10-19 PRs ([#1448](https://redirect.github.com/thesysdev/openui/pull/1448)–[#1451](https://redirect.github.com/thesysdev/openui/pull/1451)) form a coherent SEO/performance batch awaiting review; [#1451](https://redirect.github.com/thesysdev/openui/pull/1451)'s CI check builds conceptually on [#1444](https://redirect.github.com/thesysdev/openui/pull/1444)'s redirects, so review order matters.

---

**Health assessment:** Active, well-scoped maintenance with strong automation support and responsive same-day review cycles — but the total absence of issue traffic and releases this window limits broader health conclusions. Current focus is squarely on restoring and protecting openui.com's search presence and site performance.

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render Project Digest — 2026-10-20

**Repository:** [vercel-labs/json-render](https://github.com/vercel-labs/json-render) · Generative UI rendering for AI applications (React, React Native, Solid, Svelte)

---

## 1. Today's Overview

json-render saw unusually high churn in the last 24 hours: **17 issues and 13 PRs updated (16 issues closed, 11 PRs merged/closed, 2 PRs still open)**, with **no new releases**. However, the bulk of closures target items created in January–May 2026, indicating a **large-scale backlog triage/cleanup sweep** rather than ~27 fresh resolutions. Genuine new activity is concentrated in two contributor PRs opened Oct 19 — [#404](https://redirect.github.com/vercel-labs/json-render/pull/404) (devtools production leak) and [#405](https://redirect.github.com/vercel-labs/json-render/pull/405) (Solid SSR) — plus the closure of the recent diagnostics PR [#398](https://redirect.github.com/vercel-labs/json-render/pull/398). Overall project health is **moderately good**: an engaged multi-framework community is actively contributing fixes, but slow triage turnaround, docs drift, and a stagnant GitHub releases page (npm is at 0.19.0 per [#287](https://redirect.github.com/vercel-labs/json-render/issues/287)) are visible friction points.

## 2. Releases

No new releases were published in this period. Notably, users report a **npm/GitHub release mismatch** — `@json-render/react` 0.19.0 exists on npm but has no corresponding GitHub release ([#287](https://redirect.github.com/vercel-labs/json-render/issues/287)), suggesting release-publishing hygiene needs attention.

## 3. Project Progress

**Active October workstreams (closed within the window):**
- [#398](https://redirect.github.com/vercel-labs/json-render/pull/398) — feat: opt-in `checkTemplateStateRefs` validation to diagnose unresolved `$template` state references (silent empty-value rendering). Real DX advancement.
- [#255](https://redirect.github.com/vercel-labs/json-render/pull/255) — fix(core): `.passthrough()` in `catalog.validate()` so runtime fields (`on`, `repeat`, `watch`, `state`) are no longer silently stripped.
- [#345](https://redirect.github.com/vercel-labs/json-render/pull/345) — fix(core): JSON Pointer escaping for keys containing `/` and `~` in `flattenToPointers`; previously caused key collisions and wrong-path writes in the devtools state tab.
- [#333](https://redirect.github.com/vercel-labs/json-render/pull/333) — fix(devtools): TS7006 implicit-any errors in React/Solid devtools under strict mode.
- [#294](https://redirect.github.com/vercel-labs/json-render/pull/294) — feat(react-native): `functions` prop for `$computed` props, bringing `@json-render/react-native` to parity with `@json-render/react`.

**Legacy community PRs closed in the sweep** (data does not distinguish merged vs. closed-unmerged): [#35](https://redirect.github.com/vercel-labs/json-render/pull/35) (useUITree hook for external patch sources), [#25](https://redirect.github.com/vercel-labs/json-render/pull/25) (JSONL patch format docs), [#22](https://redirect.github.com/vercel-labs/json-render/pull/22) (dark-mode Rating contrast), [#19](https://redirect.github.com/vercel-labs/json-render/pull/19) (useUIStream docs), [#31](https://redirect.github.com/vercel-labs/json-render/pull/31)/[#32](https://redirect.github.com/vercel-labs/json-render/pull/32) (example fixes).

**Net progress:** core validation correctness, devtools reliability, and React Native feature parity advanced.

## 4. Community Hot Topics

- **Vue support** — [#34](https://redirect.github.com/vercel-labs/json-render/issues/34): **11 👍 (highest in repo)**, 3 comments. With React/RN/Solid/Svelte adapters shipping, Vue is the most-demanded gap in framework coverage.
- **Broken `generateCatalogPrompt`** — [#37](https://redirect.github.com/vercel-labs/json-render/issues/37): 6 👍, 3 comments; README example reportedly fails.
- **Zod 4.4 compatibility** — [#287](https://redirect.github.com/vercel-labs/json-render/issues/287): 3 👍; minor Zod bumps break element validation, plus the release-page gap.
- **LLM cost guidance** — [#16](https://redirect.github.com/vercel-labs/json-render/issues/16): docs standardize on expensive Opus 4.5; users ask whether generative UI works on cheaper models (GPT-4.1-class).
- **Ecosystem asks**: shadcn/ui plug-n-play catalog ([#29](https://redirect.github.com/vercel-labs/json-render/issues/29), 2 👍), SvelteKit support ([#177](https://redirect.github.com/vercel-labs/json-render/issues/177)), code export of generated components ([#11](https://redirect.github.com/vercel-labs/json-render/issues/11)), complex dynamic forms with cascading linkage ([#151](https://redirect.github.com/vercel-labs/json-render/issues/151)).

**Underlying needs:** framework breadth, lower LLM cost of entry, prebuilt component kits, and trustworthy docs.

## 5. Bugs & Stability

| Rank | Severity | Issue | Status | Fix |
|---|---|---|---|---|
| 1 | **High** | [#377](https://redirect.github.com/vercel-labs/json-render/issues/377) — Svelte devtools adapter still mounts devtools panel in production Vite builds when `process` is undefined (breaks documented tree-shaking promise) | Open | Fix PR [#404](https://redirect.github.com/vercel-labs/json-render/pull/404) open, awaiting review |
| 2 | **High** | [#375](https://redirect.github.com/vercel-labs/json-render/issues/375) — `@json-render/solid` unimportable under server/SSR conditions (DOM template hoisting) | Referenced | Fix PR [#405](https://redirect.github.com/vercel-labs/json-render/pull/405) open |
| 3 | Medium-High | [#287](https://redirect.github.com/vercel-labs/json-render/issues/287) — Zod 4.3.6→4.4.3 makes element `visible` field required, breaking apps | Closed | No fix PR identified in window; closure may be triage-related |
| 4 | Medium | [#292](https://redirect.github.com/vercel-labs/json-render/issues/292) — `{ "$item": "field" }` in `action.params` returns path string (`"list/0/url"`) instead of value (0.19.0); `$bindItem` works correctly | Closed | Inconsistency at minimum documented/answered |
| 5 | Medium | [#20](https://redirect.github.com/vercel-labs/json-render/issues/20) — Quick Start produces empty `tree` (onboarding blocker) | Closed | Related docs PR [#25](https://redirect.github.com/vercel-labs/json-render/pull/25) closed |
| 6 | Low-Medium | [#42](https://redirect.github.com/vercel-labs/json-render/issues/42), [#47](https://redirect.github.com/vercel-labs/json-render/issues/47), [#104](https://redirect.github.com/vercel-labs/json-render/issues/104) — docs/API drift: JSONL patch format mismatch, missing `setValue` on `useFieldValidation` | Closed | Docs PRs [#25](https://redirect.github.com/vercel-labs/json-render/pull/25)/[#19](https://redirect.github.com/vercel-labs/json-render/pull/19) closed |

Also fixed via PRs: JSON Pointer key collisions ([#345](https://redirect.github.com/vercel-labs/json-render/pull/345)) and silent stripping of runtime fields in validation ([#255](https://redirect.github.com/vercel-labs/json-render/pull/255)). No crashes or data-loss regressions reported today.

## 6. Feature Requests & Roadmap Signals

**Strongest community signals:** Vue adapter ([#34](https://redirect.github.com/vercel-labs/json-render/issues/34), 11 👍) and SvelteKit support ([#177](https://redirect.github.com/vercel-labs/json-render/issues/177)) — the project's adapter-per-framework architecture makes these the most plausible major roadmap items. Secondary asks: shadcn/ui catalog preset ([#29](https://redirect.github.com/vercel-labs/json-render/issues/29)), code export ([#11](https://redirect.github.com/vercel-labs/json-render/issues/11)), external patch-source hook ([#35](https://redirect.github.com/vercel-labs/json-render/pull/35)), cheaper-model guidance ([#16](https://redirect.github.com/vercel-labs/json-render/issues/16)).

**Prediction for the next version:** a patch release bundling the devtools production guard ([#404](https://redirect.github.com/vercel-labs/json-render/pull/404)), Solid SSR import fix ([#405](https://redirect.github.com/vercel-labs/json-render/pull/405)), template-ref diagnostics ([#398](https://redirect.github.com/vercel-labs/json-render/pull/398)), JSON Pointer escaping ([#345](https://redirect.github.com/vercel-labs/json-render/pull/345)), validate passthrough ([#255](https://redirect.github.com/vercel-labs/json-render/pull/255)), and React Native `$computed` functions ([#294](https://redirect.github.com/vercel-labs/json-render/pull/294)) — all recently closed/open fixes that logically ship together. Vue/SvelteKit adapters and official component presets are longer-horizon bets.

## 7. User Feedback Summary

- **Positive sentiment:** "very clean and useful project" ([#177](https://redirect.github.com/vercel-labs/json-render/issues/177)), "Great job!" ([#29](https://redirect.github.com/vercel-labs/json-render/issues/29)) — the core concept resonates strongly.
- **Recurring pain points:** (1) **Docs drift from the actual API** — `useUIStream` (isLoading→isStreaming), `useFieldValidation` (`setValue` missing), and streaming JSONL format all mismatched docs ([#19](https://redirect.github.com/vercel-labs/json-render/pull/19), [#42](https://redirect.github.com/vercel-labs/json-render/issues/42), [#47](https://redirect.github.com/vercel-labs/json-render/issues/47), [#104](https://redirect.github.com/vercel-labs/json-render/issues/104)); (2) **onboarding friction** — Quick Start failure ([#20](https://redirect.github.com/vercel-labs/json-render/issues/20)); (3) **binding inconsistencies** (`$item` vs `$bindItem`, [#292](https://redirect.github.com/vercel-labs/json-render/issues/292)); (4) **tight dependency coupling** to Zod minor versions ([#287](https://redirect.github.com/vercel-labs/json-render/issues/287)); (5) **LLM cost anxiety** around Opus 4.5 as the reference model ([#16](https://redirect.github.com/vercel-labs/json-render/issues/16)).
- **Use cases observed:** AI-generated dashboards, feedback forms, complex dynamic forms with cascading state ([#151](https://redirect.github.com/vercel-labs/json-render/issues/151)), React Native generative UI, and agentic coding — the project ships a Claude Code skill (`json-render-react-native`) surfaced by the Dispatch runtime ([#250](https://redirect.github.com/vercel-labs/json-render/issues/250)), confirming traction in the AI-agent tooling ecosystem.

## 8. Backlog Watch

- **Awaiting review (highest leverage):** [#404](https://redirect.github.com/vercel-labs/json-render/pull/404) (fixes production devtools leak [#377](https://redirect.github.com/vercel-labs/json-render/issues/377), open since Oct 3) and [#405](https://redirect.github.com/vercel-labs/json-render/pull/405) (fixes Solid SSR [#375](https://redirect.github.com/vercel-labs/json-render/issues/375)). Both are small, well-scoped fixes — merging them would clear the entire open critical-bug queue.
- **Closed without visible resolution:** Vue support ([#34](https://redirect.github.com/vercel-labs/json-render/issues/34), 11 👍), SvelteKit ([#177](https://redirect.github.com/vercel-labs/json-render/issues/177)), shadcn preset ([#29](https://redirect.github.com/vercel-labs/json-render/issues/29)), code export ([#11](https://redirect.github.com/vercel-labs/json-render/issues/11)), model recommendations ([#16](https://redirect.github.com/vercel-labs/json-render/issues/16)) — if closed as stale rather than fixed, maintainers should publish an explicit stance to avoid alienating demand.
- **Triage latency:** ~9 months between creation and closure for many January 2026 issues suggests a stale-bot or faster triage cadence is needed.
- **Noise handled:** spam/self-promo items ([#48](https://redirect.github.com/vercel-labs/json-render/issues/48), [#357](https://redirect.github.com/vercel-labs/json-render/issues/357)) were closed cleanly.
- **Release hygiene:** GitHub releases page is empty while npm is at 0.19.0 ([#287](https://redirect.github.com/vercel-labs/json-render/issues/287)) — publishing proper release notes would improve upgrade confidence.

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit Project Digest — 2026-10-20

## 1. Today's Overview
CopilotKit is showing sustained high development velocity: 43 PRs and 10 issues saw activity in the last 24 hours, with 29 PRs still open — a large pipeline accumulating ahead of a release (none shipped today). Triage health is strong, with 7 of 10 touched issues closed, including a 9-month-old Google ADK state-sync bug ([#3132](https://redirect.github.com/CopilotKit/CopilotKit/issues/3132)). Work clusters around three themes: **v2 API surface hardening** (headless entry point, `BuiltInAgent` system prompt handling), **self-hosted Intelligence runtime reliability** (runner durability, tool-call pairing, transcript read retries), and **ecosystem expansion** (Strands, Mastra, A2UI 1.0). The contributor base is notably broad — at least 11 distinct authors across the top-20 PRs, mixing core maintainers (BenTaylorDev, ranst91, mxmzb) with active community contributors (Laptopmini, minwookshin, akhil9tiet).

## 2. Releases
No new releases were published today. The open PR queue (29) contains multiple release-ready fixes (notably [#7881](https://redirect.github.com/CopilotKit/CopilotKit/pull/7881), [#7877](https://redirect.github.com/CopilotKit/CopilotKit/pull/7877), [#7835](https://redirect.github.com/CopilotKit/CopilotKit/pull/7835)), suggesting a patch release is being staged.

## 3. Project Progress
Of 14 closed PRs today, the top-20 sample shows four notable closures:

- **[#7822](https://redirect.github.com/CopilotKit/CopilotKit/pull/7822)** — Server-rendered `DemoSource` in docs shell, keeping a ~39 MB `demo-content.json` (842 demos, 6,563 files) out of client bundles. Closes [#7821](https://redirect.github.com/CopilotKit/CopilotKit/issues/7821) within 5 days of the report — an excellent turnaround.
- **[#7875](https://redirect.github.com/CopilotKit/CopilotKit/pull/7875)** — Render-only `useCopilotAction` (with `render` but no `handler`) is now accepted, and config errors name the offending action (PE-921). Removes a v1→v2 migration blocker.
- **[#7876](https://redirect.github.com/CopilotKit/CopilotKit/pull/7876)** — Docs fixes from onboarding friction: `provider.chat()` for OpenAI-compatible providers and an app-owned new-conversation button with the Threads drawer (PE-920/PE-922).
- **[#7425](https://redirect.github.com/CopilotKit/CopilotKit/pull/7425)** — Chat scroll preservation after hide/show of the host container; linked issue [#7414](https://redirect.github.com/CopilotKit/CopilotKit/issues/7414) closed the same day.

**Advancing in-flight:** Automatic Learning reply ratings with comments ([#7828](https://redirect.github.com/CopilotKit/CopilotKit/pull/7828), PE-836), generative UI alignment with the A2UI 1.0 basic catalog ([#7879](https://redirect.github.com/CopilotKit/CopilotKit/pull/7879)), Intelligence runner durability ([#7826](https://redirect.github.com/CopilotKit/CopilotKit/pull/7826), [#7880](https://redirect.github.com/CopilotKit/CopilotKit/pull/7880)), and v1 service adapter compatibility ([#7756](https://redirect.github.com/CopilotKit/CopilotKit/pull/7756), closing old issue #3217).

## 4. Community Hot Topics
- **[#3132](https://redirect.github.com/CopilotKit/CopilotKit/issues/3132)** (5 comments, 2 👍, closed today) — The most-discussed issue of the day. `setState` via `useCoAgent` with Google ADK agents updated the UI but not the agent's backend state, causing reverts. Open since 2026-01-30, its closure signals real progress on AG-UI protocol state synchronization — a core need for users building on external agent frameworks.
- **[#7859](https://redirect.github.com/CopilotKit/CopilotKit/issues/7859)** (4 comments, open) — Request for a public API to send messages exactly as `CopilotChat`'s composer does, driven by components rendered inside tool calls (generative UI). This exposes an architectural gap: the chat input is currently the only first-class message entry point.
- **[#7846](https://redirect.github.com/CopilotKit/CopilotKit/issues/7846)** (3 comments, open) — `BuiltInAgent` embeds its system prompt inside `messages`, triggering an AI SDK v6 prompt-injection warning on every run. Trust/compliance-sensitive; fix PR [#7881](https://redirect.github.com/CopilotKit/CopilotKit/pull/7881) opened the same day, with the related request [#7855](https://redirect.github.com/CopilotKit/CopilotKit/issues/7855) already closed.

## 5. Bugs & Stability
Ranked by severity:

1. **[#7846](https://redirect.github.com/CopilotKit/CopilotKit/issues/7846)** (open) — Prompt-injection warning on every `BuiltInAgent` run with AI SDK v6; system prompt travels via `messages` instead of the `system` option. **Fix PR exists:** [#7881](https://redirect.github.com/CopilotKit/CopilotKit/pull/7881). Security-adjacent, affects all classic-config runs.
2. **[#7882](https://redirect.github.com/CopilotKit/CopilotKit/issues/7882)** (open, filed yesterday) — `/v2/headless` exports no web provider, so headless apps still bundle the full chat rendering stack — contradicting its documented purpose. **No linked fix yet.**
3. **Intelligence runtime stability cluster** (production-impacting for self-hosted deployments; all have fix PRs in flight): runner connection drops ([#7826](https://redirect.github.com/CopilotKit/CopilotKit/pull/7826)), tool call/result pairing loss on snapshot merges ([#7877](https://redirect.github.com/CopilotKit/CopilotKit/pull/7877)), frontend tool results lost on refresh ([#7847](https://redirect.github.com/CopilotKit/CopilotKit/pull/7847)), 502s from rate-limited transcript reads ([#7835](https://redirect.github.com/CopilotKit/CopilotKit/pull/7835)), and bounded-history replay hangs ([#7880](https://redirect.github.com/CopilotKit/CopilotKit/pull/7880)).
4. **Closed/fixed today:** `afterRequestMiddleware` dropping tool calls on text-less turns ([#7860](https://redirect.github.com/CopilotKit/CopilotKit/issues/7860)), 40 MB docs bundle ([#7821](https://redirect.github.com/CopilotKit/CopilotKit/issues/7821)), missing accessible names on icon-only chat buttons ([#7862](https://redirect.github.com/CopilotKit/CopilotKit/issues/7862)), published types importing devDependencies ([#7817](https://redirect.github.com/CopilotKit/CopilotKit/issues/7817)), and scroll-position jumps on chat hide/show ([#7414](https://redirect.github.com/CopilotKit/CopilotKit/issues/7414)).
5. **[#3132](https://redirect.github.com/CopilotKit/CopilotKit/issues/3132)** closed — the long-standing ADK state-sync regression is resolved.

## 6. Feature Requests & Roadmap Signals
- **Public message-sending API** ([#7859](https://redirect.github.com/CopilotKit/CopilotKit/issues/7859)) — Pairs naturally with PE-922's app-owned new-conversation button in [#7876](https://redirect.github.com/CopilotKit/CopilotKit/pull/7876); the "app-controlled chat actions" theme is clearly on the roadmap. Likely next release.
- **Automatic Learning feedback loop** ([#7828](https://redirect.github.com/CopilotKit/CopilotKit/pull/7828), PE-836) — Thumbs up/down plus free-text comments on replies feeding the learned-skills system; a differentiating feature in progress.
- **A2UI 1.0 generative UI catalog** ([#7879](https://redirect.github.com/CopilotKit/CopilotKit/pull/7879)) — Names, child references, dynamic values, checks, calc. Signals investment in cross-vendor generative UI standards.
- **Ecosystem onboarding** — Strands thread import guide ([#7783](https://redirect.github.com/CopilotKit/CopilotKit/pull/7783)) and v1 service adapter compatibility ([#7756](https://redirect.github.com/CopilotKit/CopilotKit/pull/7756)).
- **Prediction:** the next patch release most plausibly bundles [#7881](https://redirect.github.com/CopilotKit/CopilotKit/pull/7881) (AI SDK v6 fix), the tool-pairing/refresh fixes, and [#7835](https://redirect.github.com/CopilotKit/CopilotKit/pull/7835); a headless provider export responding to #7882 should follow closely given it blocks a documented use case.

## 7. User Feedback Summary
- **Pain points:** v1→v2 migration friction is the dominant recurring theme (render-only actions PE-921, headless provider gap #7882, provider.chat() confusion PE-920); bundle weight concerns appear twice (40 MB docs site, headless entry pulling the render stack); and self-hosted Intelligence deployments report real production failures ("Runner connection dropped").
- **Use cases observed:** generative UI components that need to participate in conversations, LangGraph/Strands/Mastra-based agents on self-hosted Intelligence, and importing existing conversation threads from other frameworks.
- **Sentiment:** Constructive and engaged. Reports arrive with minimal repro scripts (Laptopmini filed 5 of today's 10 issues with runnable repros), and maintainers respond same-day — BenTaylorDev alone closed three PRs on 2026-10-19. The 5-day docs-bundle fix is a strong responsiveness signal.

## 8. Backlog Watch
- **[#7370](https://redirect.github.com/CopilotKit/CopilotKit/pull/7370)** (open since 2026-09-22, ~4 weeks) — Virtual chat scroll preservation on width resize; the sibling hide/show case (#7414/#7425) just resolved, leaving this the remaining piece of the scroll-epic (#5979). Deserves review priority.
- **[#7634](https://redirect.github.com/CopilotKit/CopilotKit/pull/7634)** (since 2026-10-05) — Stable `message.id` React keys; small, review-ready fix for state loss during streaming.
- **[#7756](https://redirect.github.com/CopilotKit/CopilotKit/pull/7756)** (since 2026-10-09) — Closes the old #3217; unblocks v1 users whose adapters can't resolve a model.
- **[#7709](https://redirect.github.com/CopilotKit/CopilotKit/pull/7709)**, **[#7783](https://redirect.github.com/CopilotKit/CopilotKit/pull/7783)**, **[#7835](https://redirect.github.com/CopilotKit/CopilotKit/pull/7835)** — Aged 4–12 days; the transcript-retry fix (#7835) addresses user-facing 502s and should be prioritized.
- **Positive signal:** the closure of 9-month-old [#3132](https://redirect.github.com/CopilotKit/CopilotKit/issues/3132) demonstrates the team is actively burning down the long-tail backlog, not just the freshest items.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/linqinghao/agents-radar).*