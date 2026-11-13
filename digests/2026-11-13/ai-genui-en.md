# Generative UI Ecosystem Digest 2026-11-13

> Issues: 39 | PRs: 123 | Projects covered: 4 | Generated: 2026-11-13 05:43 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## Cross-Ecosystem Comparison

# Generative UI Ecosystem Cross-Project Report — 2026-11-13

## 1. Ecosystem Overview

The generative UI sector is visibly transitioning from demo-grade experimentation to production hardening: across all four tracked projects, the dominant workstreams are security remediation, streaming-state correctness, and documentation reliability — the classic friction points of enterprise adoption. The most significant structural event is the emergence of **A2UI as a de facto interop standard**: CopilotKit timed a release and playground strategy to Google's A2UI launch and shipped a fix for v1.0-protocol catalogs, while the a2ui project itself (spec + multi-language SDKs) races to stabilize v1.0 against enterprise pressure. Meanwhile, rendering surfaces are broadening — SwiftUI renderers appeared in two independent projects this week, and one project shipped a 45-component generated-dashboard library — signaling the category is expanding beyond chat-embedded widgets into native apps and data-rich analytics UI.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases Today | Activity Profile |
|---|---|---|---|---|
| **a2ui** | 29 (21 open / 8 closed) | 50 (40 open / 10 merged) | **0** | Highest raw volume; 80% of PRs still open — review backlog accumulating; users publicly asking when v1.0 hits npm (#4223) |
| **OpenUI** | 2 | 21 (17 merged, ~81%) | **8** (7 packages) | Most release-heavy; same-day regression catch-and-fix (server 0.4.2 → #1630, unreleased); near-fully maintainer-driven |
| **json-render** | 4 (1 open / 3 closed) | 9 (4 open / 5 merged) | **0** | Small but disciplined; 5 fixes merged with no version bump — a staged release (likely 0.21.x/0.22) is imminent |
| **CopilotKit** | 4 (0 closed) | 43 (19 open / 24 merged, ~56%) | **2** (v1.87.1, python-sdk 0.1.97) | Best throughput-to-backlog ratio; same-day security fix (#8375 → #8377); healthy external contributor mix |

**Key asymmetry:** a2ui generates the most activity but converts the least into merges/releases today; OpenUI and CopilotKit convert activity into shipped packages at high rates.

## 3. Shared Feature Directions

1. **Cross-platform / native rendering beyond the web** — *a2ui* (SwiftUI theming parity gap #3257; Kotlin Multiplatform #3992; WeChat MiniProgram #3750) and *json-render* (full Swift package + SwiftUI renderer #470). Both need "AI-generated UI renders natively anywhere," and both identify SwiftUI as the parity frontier.
2. **Security and safe-by-default execution** — all four projects. *a2ui*: zod CVEs block named enterprise adopters (Coolblue, #4147/#4192). *OpenUI*: unauthenticated routes spending the project's API key (#1618/#1619, fixed). *CopilotKit*: thread-naming silently re-executed the app's agent with server-side tools (#8375), plus a sustained auth-hardening arc (#8309, #7971, #8254, #8235).
3. **Streaming state correctness** — the sector's shared weak point. *json-render*: prose silently dropped after malformed spec fences (#419). *CopilotKit*: duplicate assistant message IDs under interleaved tool events (#3644, 7 months open). *a2ui*: direct-JSON streams can replace the whole data model on message-ordering edge cases (#4132) and STRICT_VALIDATION passes spec-invalid messages (#4173).
4. **Documentation reliability after migrations** — *a2ui* completed MkDocs→Astro but exposed drift between guides (still v0.8/v0.9, #3519) and npm reality (#4223); *CopilotKit* audited 7,518 legacy URLs and fixed 400 404s (#8373); *OpenUI* hardened its docs site; *json-render* fixed a quick start that didn't build (#428/#380).
5. **Agentic, data-rich generated UI** — *OpenUI* closed a 7.5-month multi-agent request (#418) and shipped dashboard-library 1.0.0 (45 components); *CopilotKit* is migrating demos to A2UI 1.0 (#8384). Both point to orchestration + structured data output as the next product surface.
6. **Release engineering automation** — *a2ui* building auto-changelog tooling (#4215), *OpenUI* running Changesets, *CopilotKit* using automated release workflows. All treat release cadence as an adoption variable.

## 4. Differentiation Analysis

| Dimension | a2ui | CopilotKit | OpenUI | json-render |
|---|---|---|---|---|
| **Layer** | Protocol + spec + multi-language SDKs (TS/Dart/Swift/Python; Go proposed) | Full application framework (React/Vue/Angular/RN + Python SDK) | Vertical product: dashboard gen-UI + hosted cloud API | Lightweight rendering layer (JSON spec → UI) |
| **Feature focus** | Catalogs, capability negotiation, conformance testing, renderer matrix | Agents, runtime, auth, telemetry, A2UI integration | 45-component dashboard library, cloud storage, server API | JSX codegen, YAML/JSONL streaming transforms, directives |
| **Target user** | Platform teams and renderer authors building cross-platform agent-UI infrastructure | Product teams shipping production AI copilots | Developers building AI analytics/chat apps quickly | Web devs embedding AI-output rendering in Next.js pipelines |
| **Technical approach** | Spec-first, cross-language conformance suites | Framework-first, now consuming the A2UI protocol | Curated component catalog coupled to a commercial service | Minimal core, community-fed fix pipeline |

**The pivotal relationship:** a2ui defines the wire format; CopilotKit consumes it — v1.87.1 explicitly fixes rendering for protocol-1.0 catalogs, and CopilotKit integrations appear as PRs inside the a2ui repo (#4204/#4210). OpenUI and json-render remain independent stacks but share the "declarative JSON → UI" philosophy. Notably, OpenUI is the only project coupled to a commercial API (Thesys), and a2ui is the only one with formal conformance suites — the two ends of the openness spectrum.

## 5. Community Momentum & Maturity

- **CopilotKit — most operationally mature.** 24 PRs merged against 4 active issues, two releases, same-day security response, external contributors, a student-issue program, and a strategic rename in flight (OpenFuse, #8376). Backlog is shallow relative to velocity.
- **OpenUI — fastest iteration, thinnest community.** Eight releases in a day with functioning automation and QA that caught its own regression internally. But with only 2 issues (1 unanswered) and near-100% maintainer commits, community depth is the clear gap — and the 0.4.2 `appId` regression caused **real customer data loss**, the single trust-damaging event in today's window.
- **a2ui — deepest enterprise pull, weakest release responsiveness.** Production signals are the strongest in the set: a named enterprise (Coolblue) blocked on CVEs, production Flutter deployments filing hardening bugs (RandalSchwartz cluster), and high-quality dependent-tooling reports (leoafarias). But 40 open PRs, a month-old unmerged SSR fix (#3197), and npm-vs-upstream drift (#4223) show a review/release bottleneck precisely when v1.0 anticipation peaks.
- **json-render — small but healthiest per-capita.** Every complaint in the window converted to a merged fix or in-flight PR; community drafts are superseded rather than ignored; bug reports carry version pins and repro steps. Its risk is review throughput, not quality: three PRs (including the large SwiftUI renderer) await maintainer attention simultaneously.

## 6. Trend Signals

1. **Protocol consolidation is underway.** Google's A2UI launch, CopilotKit's alignment (playground at open.bot/a2ui, version-matrix documentation), and a2ui's expanding renderer/SDK matrix suggest A2UI is becoming the interop layer of this category. *For developers:* building UI generation against a published spec now buys multi-vendor renderer support — track protocol versions, not just package versions (cf. CopilotKit 1.87.1 + `ag-ui-adk` 0.13.0 matrix).
2. **Security is the enterprise adoption gate.** Dependency CVEs (a2ui/zod), key-exposing routes (OpenUI), and hidden agent execution during "harmless" operations (CopilotKit thread naming) all surfaced this week. *Reference value:* audit what code runs during background operations and what leaves your perimeter — generated-UI stacks inherit agent security surface, not just rendering surface.
3. **Silent failure is the worst failure mode.** OpenUI's Svelte example rendered nothing with no error (#1626); json-render silently dropped streamed prose (#419); CopilotKit produced duplicate message IDs (#3644). *Reference value:* demand loud errors, pin versions, and consult compatibility matrices before upgrading — silent non-rendering is currently common enough to budget debugging time for.
4. **The canvas is expanding: native and data-rich.** SwiftUI renderers in two projects, WeChat/Kotlin targets in a third, and a 45-component dashboard library indicate generated UI is moving from chat widgets to native apps and BI-style surfaces. *Reference value:* cross-platform renderer parity (especially theming) is a real selection criterion today, not a roadmap item.
5. **Multi-agent UI composition is emerging demand.** OpenUI's #418 and CopilotKit's agent orchestration work both point to delegation patterns where multiple agents contribute inline UI. Expect first-class patterns here within a release cycle or two.
6. **Release discipline correlates with trust.** Projects with automated release pipelines (OpenUI, CopilotKit) ship fixes within a day; a2ui's release lag is now generating public user friction. *Reference value:* when choosing a stack, evaluate merge-to-publish latency — a merged fix you can't install is an open vulnerability (see OpenUI 0.4.2 users advised to pin 0.4.1 until 0.4.3 ships).

**Bottom line:** CopilotKit and OpenUI are the safest near-term choices for shipping product today (with OpenUI's regression a caution to pin versions); a2ui offers the broadest strategic platform bet but demands tolerance for release lag until its v1.0 cycle completes; json-render is a lean, well-tended option for web-centric rendering whose community quality bar suggests durability at its current scale.

---

## Per-Project Reports

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui Project Digest — 2026-11-13

## 1. Today's Overview

High-activity day for a2ui: 29 issues (21 open, 8 closed) and 50 PRs (40 open, 10 merged/closed) saw updates within 24 hours, though no new release shipped. The dominant storyline is the **completed documentation platform migration** — the MkDocs scaffolding (`docs/public/`) was fully retired in favor of the Astro-based `docs/site/`, closing out a question open since May ([#1458](https://redirect.github.com/a2ui-project/a2ui/issues/1458)) but immediately surfacing a deploy regression ([#4221](https://redirect.github.com/a2ui-project/a2ui/pull/4221)). In parallel, the project continues its v1.0 stabilization push across TypeScript, Dart, Swift, and Python, with strong ecosystem expansion signals (official Go SDK proposal, Dart skill generator, WeChat MiniProgram and Kotlin Multiplatform renderer listings). Enterprise adoption pressure is visible in dependency-security demands (zod CVEs) and published-npm-vs-upstream version lag.

## 2. Releases

**No new releases today.** However, release activity is clearly ramping up:

- [#4215](https://redirect.github.com/a2ui-project/a2ui/pull/4215) introduces `release_notes.py` plus a release package manifest to auto-generate per-package `CHANGELOG.md` sections from PR history (17 changelog files are currently hand-edited) — groundwork for a more automated, frequent release cadence.
- [#4223](https://redirect.github.com/a2ui-project/a2ui/issues/4223) directly asks maintainers to clarify when v1.0's `@`-prefixed component envelope fields (`@catalogId`, `@accessibility`, `@metadata`, `@checks`) will reach npm, since published `@a2ui/web_core@0.15.0` still uses bare keys. This signals user anticipation of a coordinated multi-package release with v1.0 support.

## 3. Project Progress

**Closed/merged today:**

- **Docs migration trilogy** completing [#4209](https://redirect.github.com/a2ui-project/a2ui/issues/4209): [#4211](https://redirect.github.com/a2ui-project/a2ui/pull/4211) (moved active assets + CNAME out of `docs/public/`), [#4212](https://redirect.github.com/a2ui-project/a2ui/pull/4212) (retargeted workflows, context7, and repo links), [#4213](https://redirect.github.com/a2ui-project/a2ui/pull/4213) (removed MkDocs scaffolding and dependencies entirely). Also [#4218](https://redirect.github.com/a2ui-project/a2ui/pull/4218) (Get Help page copy/video refresh).
- [#2088](https://redirect.github.com/a2ui-project/a2ui/pull/2088) — the **shared renderer fallback mechanism** (types-only contract in web_core + React/Lit/Angular implementations, per design #2013), open since July, was finally closed after ~4 months.
- Notable issue closures: [#1458](https://redirect.github.com/a2ui-project/a2ui/issues/1458) (MkDocs replacement question from May — resolved by the Astro migration), [#2590](https://redirect.github.com/a2ui-project/a2ui/issues/2590) (explicit named exports replacing wildcard barrels), [#3743](https://redirect.github.com/a2ui-project/a2ui/issues/3743) (DateTimeInput optional attribute bindings), [#3752](https://redirect.github.com/a2ui-project/a2ui/issues/3752) (Restaurant Finder Python sample breakage), [#3492](https://redirect.github.com/a2ui-project/a2ui/issues/3492) (v1.0 custom functions docs linking), [#3687](https://redirect.github.com/a2ui-project/a2ui/issues/3687) (eval failure on main).

**Advancing in review:**

- [#4184](https://redirect.github.com/a2ui-project/a2ui/pull/4184) — Express format now supports `oneOf`/`anyOf`/`allOf` and local `$defs` across TypeScript, Dart, and Python; a substantial correctness fix for real-world catalog schemas.
- [#3197](https://redirect.github.com/a2ui-project/a2ui/pull/3197) — React SSR/Node import fix (for #3158).
- [#4199](https://redirect.github.com/a2ui-project/a2ui/pull/4199) — agent development guide updated for v1.0 (addresses #3519).
- [#4126](https://redirect.github.com/a2ui-project/a2ui/pull/4126) — deletion of the deprecated Lit v0.8 framework adapter.

## 4. Community Hot Topics

Ranked by comment volume (PR comment data unavailable; issue-based):

1. **[#3061](https://redirect.github.com/a2ui-project/a2ui/issues/3061)** (7 comments, open since Oct 8) — removing `componentEnvelopeRef` from `CapabilitiesOptions` and gating catalog format purely by `ProtocolVersion`. Spans core SDK + spec across Swift/TS/Dart/Python. Underlying need: cleaning up obsolete multi-version capability-negotiation semantics before v1.0 freezes.
2. **[#3687](https://redirect.github.com/a2ui-project/a2ui/issues/3687)** (6 comments, closed) — evals failed on main after PR #3677; shows CI quality gates are actively enforced and triaged.
3. **[#3519](https://redirect.github.com/a2ui-project/a2ui/issues/3519)** (4 comments) — the public agent-development guide only covers v0.8/v0.9 with phantom `render`/`update` operations; now paired with fix PR [#4199](https://redirect.github.com/a2ui-project/a2ui/pull/4199). Community wants v1.0-accurate onboarding docs.
4. **[#3257](https://redirect.github.com/a2ui-project/a2ui/issues/3257)** (4 comments) — SwiftUI Basic Catalog theming: Web exposes CSS variables, Flutter reads `ThemeData`, SwiftUI has no equivalent. A clear cross-renderer parity gap.
5. **RandalSchwartz's production-Flutter cluster** ([#4161](https://redirect.github.com/a2ui-project/a2ui/issues/4161), [#4162](https://redirect.github.com/a2ui-project/a2ui/issues/4162), [#4163](https://redirect.github.com/a2ui-project/a2ui/issues/4163)) — silent bypass of `argumentSchema` checks on null args, expression purity/fail-loudly contracts, and catalog design best practices (anti-corruption layer, DTO porting). Indicates serious enterprise adoption of the Dart stack.
6. **leoafarias's Dart core cluster** ([#4188](https://redirect.github.com/a2ui-project/a2ui/issues/4188), [#4193](https://redirect.github.com/a2ui-project/a2ui/issues/4193), [#4194](https://redirect.github.com/a2ui-project/a2ui/issues/4194)) — high-quality, reproducible bug reports from a dependent-tooling author.

**Underlying needs:** v1.0 migration clarity, cross-platform renderer parity, and hardening the Dart/Flutter core for production use.

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Notes |
|---|---|---|
| **P1** | [#4195](https://redirect.github.com/a2ui-project/a2ui/issues/4195) | SwiftUI `a2uiCatalogs`/`a2uiDefaultCatalogID` EnvironmentValues publicly writeable; should be read-only outside `Surface`. No fix PR yet. |
| **Security** | [#4147](https://redirect.github.com/a2ui-project/a2ui/issues/4147), [#4192](https://redirect.github.com/a2ui-project/a2ui/issues/4192) | Zod CVE-2023-54404 (SDK pinned to vulnerable zod 3.25.76) and GHSA-mrhx-c7xc-m3w5. #4192 proposes a concrete stopgap: depend on `zod ^4.6.6`, import from `zod/v3`. **Enterprise-adoption blocking.** Related breakage: [#3812](https://redirect.github.com/a2ui-project/a2ui/issues/3812) (zod 4 removes `.errors`, so `PayloadValidator` throws `TypeError`). |
| **P2** | [#4132](https://redirect.github.com/a2ui-project/a2ui/issues/4132) | Direct JSON stream **replaces the whole data model** when `updateDataModel` streams `value` before `path` — potential data loss. |
| **P2** | [#4173](https://redirect.github.com/a2ui-project/a2ui/issues/4173) | web_core 0.15.0 `STRICT_VALIDATION` accepts 12 `server_to_client` messages the v0.9.1 spec test suite marks invalid (wrong `returnType`/invalid arguments) — validation laxity. |
| **P2** | [#3158](https://redirect.github.com/a2ui-project/a2ui/issues/3158) | `@a2ui/react` 0.13.0 import-time crash in Node/SSR ("HTMLElement is not defined", regression from 0.12.0). **Fix PR exists**: [#3197](https://redirect.github.com/a2ui-project/a2ui/pull/3197), open since Oct 14, awaiting merge. |
| **P2** | [#4059](https://redirect.github.com/a2ui-project/a2ui/issues/4059) | `@a2ui/markdown-it@0.2.2` peer-conflicts with web_core 0.15.0 (recurring pattern: #1766, #1930). |
| **P2** | [#4188](https://redirect.github.com/a2ui-project/a2ui/issues/4188) | `json_schema_builder` `TypeError` on schemas with `$id`/`$anchor`/`$dynamicAnchor` — blocks validating catalogs against `catalog_definition.json`. |
| **P2** | [#3061](https://redirect.github.com/a2ui-project/a2ui/issues/3061) | Schema corruption during multi-version capabilities negotiation. |
| **P3** | [#4193](https://redirect.github.com/a2ui-project/a2ui/issues/4193), [#4194](https://redirect.github.com/a2ui-project/a2ui/issues/4194) | Dart `formatString` clamps integers ≥ 2^63 to int64 max; unknown envelope keys misreported at `/version`. |
| **Infra** | [#4222](https://redirect.github.com/a2ui-project/a2ui/issues/4222) | Docs deploy regression after MkDocs removal (missing `ghp-import`); **fix PR same day**: [#4221](https://redirect.github.com/a2ui-project/a2ui/pull/4221). |

## 6. Feature Requests & Roadmap Signals

- **[#4075](https://redirect.github.com/a2ui-project/a2ui/issues/4075)** — declarative `visible` property on `ComponentCommon` for role-based sections/progressive disclosure. A natural fit for the next minor version.
- **[#3257](https://redirect.github.com/a2ui-project/a2ui/issues/3257)** — SwiftUI Basic Catalog style customization (theme parity with Web/Flutter).
- **[#4192](https://redirect.github.com/a2ui-project/a2ui/issues/4192)** — zod ^4.6.6 + `zod/v3` import path; likely lands alongside the #3812 fix.
- **[#4162](https://redirect.github.com/a2ui-project/a2ui/issues/4162) / [#4163](https://redirect.github.com/a2ui-project/a2ui/issues/4163)** — advanced documentation: client-side function purity contracts and catalog design best practices for enterprise onboarding.
- **Ecosystem expansion PRs:** [#4200](https://redirect.github.com/a2ui-project/a2ui/pull/4200) (official Go SDK + ADK restaurant finder sample), [#4217](https://redirect.github.com/a2ui-project/a2ui/pull/4217) (Dart skill generator per blueprint), [#4216](https://redirect.github.com/a2ui-project/a2ui/pull/4216) (Dart conformance test manifest enforcement), [#3992](https://redirect.github.com/a2ui-project/a2ui/pull/3992) (Kotlin Multiplatform renderer), [#3750](https://redirect.github.com/a2ui-project/a2ui/pull/3750) (WeChat MiniProgram renderer).

**Prediction:** the next release cycle likely bundles (1) v1.0 `@`-prefixed envelope fields on npm (pressure from #4223), (2) the zod 4 security/compatibility bump (#4192/#3812/#4147), (3) the React SSR fix (#3197), and (4) automated changelog generation (#4215 groundwork). The Go SDK and Dart skill generator suggest a deliberately broadened official-language matrix.

## 7. User Feedback Summary

**Pain points:**
- **Release lag/fragmentation** — upstream supports v1.0 envelope fields but published npm 0.15.0 doesn't ([#4223](https://redirect.github.com/a2ui-project/a2ui/issues/4223)); peer-dependency conflicts recur on upgrades ([#4059](https://redirect.github.com/a2ui-project/a2ui/issues/4059)).
- **Dependency security** — zod CVEs explicitly block organizational adoption; Coolblue reports being unable to ship their shared chat package using `@a2ui/react` until resolved ([#4147](https://redirect.github.com/a2ui-project/a2ui/issues/4147), [#4192](https://redirect.github.com/a2ui-project/a2ui/issues/4192)).
- **SSR/Node compatibility** — the React package has been unusable in non-DOM environments since 0.13.0 ([#3158](https://redirect.github.com/a2ui-project/a2ui/issues/3158)).
- **Docs drift** — primary public guides still describe v0.8/v0.9 semantics ([#3519](https://redirect.github.com/a2ui-project/a2ui/issues/3519)).
- **Renderer parity** — SwiftUI theming gap vs. Web/Flutter ([#3257](https://redirect.github.com/a2ui-project/a2ui/issues/3257)).

**Positive signals:**
- Bug reports are detailed and reproducible (leoafarias, RandalSchwartz with production Flutter deployments) — a mark of maturing, invested users rather than drive-by reports.
- Third-party renderer momentum is strong: WeChat Mini Program (1B+ MAU platform), Kotlin Multiplatform, plus framework integrations like CopilotKit ([#4204](https://redirect.github.com/a2ui-project/a2ui/pull/4204), [#4210](https://redirect.github.com/a2ui-project/a2ui/pull/4210)).
- Fast response to sample breakage (#3752) and eval failures (#3687).

## 8. Backlog Watch

- **[#3061](https://redirect.github.com/a2ui-project/a2ui/issues/3061)** (open since Oct 8, 7 comments, `needs-team-input`) — cross-language spec cleanup; blocks clean v1.0 capabilities semantics. Highest-value triage target.
- **[#3197](https://redirect.github.com/a2ui-project/a2ui/pull/3197) / [#3158](https://redirect.github.com/a2ui-project/a2ui/issues/3158)** (Oct 12/14) — month-old user-facing React SSR regression with a fix PR sitting unmerged; a quick win.
- **[#3257](https://redirect.github.com/a2ui-project/a2ui/issues/3257)** (Oct 16, `needs-team-input`) — SwiftUI theming; no maintainer decision yet.
- **[#3812](https://redirect.github.com/a2ui-project/a2ui/issues/3812)** (Nov 2, `needs review`) — zod 4 breakage; urgency elevated by the security CVEs.
- **[#3750](https://redirect.github.com/a2ui-project/a2ui/pull/3750)** (Oct 29) and **[#3992](https://redirect.github.com/a2ui-project/a2ui/pull/3992)** (Nov 5) — community renderer listings awaiting review; low-cost ecosystem wins.
- **[#4223](https://redirect.github.com/a2ui-project/a2ui/issues/4223)** (today, `needs-triage`) — a direct release-status question that deserves a prompt maintainer answer.
- **Watch item:** if #2088's fallback mechanism was closed without merging, the developer-experience problem it targeted (raw `[Loading {id}...]` placeholders shown to end users) remains open — worth confirming whether the work will be re-landed.

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI Project Digest — 2026-11-13

*Repo: [thesysdev/openui](https://github.com/thesysdev/openui) · Coverage: last 24h*

---

## 1. Today's Overview

Today was an exceptionally high-velocity, release-heavy day: **21 PRs saw activity (17 closed/merged)** and **8 releases were cut across 7 packages**, while issue traffic stayed light (2 issues). The headline event is **@​openuidev/dashboard-library 1.0.0** — a ground-up rewrite of the dashboard component library shipping 45 components in 10 groups ([#1620](https://redirect.github.com/thesysdev/openui/pull/1620)). Around it, the team landed dashboard caching UX improvements, a server-side auth simplification, and closed **three security exposures in the docs site** where unauthenticated routes called the Thesys API with the project's own key. Activity is overwhelmingly maintainer-driven (Aditya-thesys, ankit-thesys, AbhinRustagi, zahlekhan, i-subham23) with mature automation (Changesets, template-update bots, Devin). One same-day regression in server 0.4.2 (dropped `appId`) was caught and a fix ([#1630](https://redirect.github.com/thesysdev/openui/pull/1630)) closed within ~24 hours — though it has **not yet shipped in a published release**.

---

## 2. Releases

**[@​openuidev/dashboard-library@1.0.0](https://redirect.github.com/thesysdev/openui/pull/1620) — MAJOR / breaking**
- Complete replacement of the 0.0.x components with a new library built on the dashboards-ui-library design: 45 components in 10 groups ([#1620](https://redirect.github.com/thesysdev/openui/pull/1620)), refined by a unified argument pattern and prompt rework ([#1621](https://redirect.github.com/thesysdev/openui/pull/1621)), with `SearchFilter` deliberately left out of the schema for now ([#1623](https://redirect.github.com/thesysdev/openui/pull/1623)) and docs corrected to the final count ([#1625](https://redirect.github.com/thesysdev/openui/pull/1625)).
- **Migration note:** breaking vs 0.0.x — components are replaced; component signatures now follow one shared argument pattern.

**[@​openuidev/server@0.4.2](https://redirect.github.com/thesysdev/openui/pull/1616) — patch**
- Dashboard `create`/`edit` now send `context.userId` as `user_id` directly instead of minting a frontend token per call (one request instead of two; the client `appId` is no longer sent, on the assumption one API key serves one app).
- ⚠️ **Caution:** this change regressed `appId` handling — see Bugs & Stability. Fix ([#1630](https://redirect.github.com/thesysdev/openui/pull/1630)) is closed but **0.4.3 is not yet published**.

**[@​openuidev/react-ui](https://redirect.github.com/thesysdev/openui/pull/1607) / [@​openuidev/react-headless](https://redirect.github.com/thesysdev/openui/pull/1607)@​0.18.7 — patch**
- A reopened dashboard now shows each tile's **last results while data reloads**, instead of query defaults (often zeros); each tile swaps to fresh data on arrival. `cacheQueryResults: false` disables it.

**@​openuidev/react-ui / react-headless@0.18.8 — patch**
- [#1627](https://redirect.github.com/thesysdev/openui/pull/1627): `cacheQueryResults` is now actually passable to `useOpenuiCloudStorage` and `OpenUICloudProvider` — the 0.18.7 release notes advertised an option that lived on the non-exported `cloudArtifactStorage` and could not be set. Same-day fix.

**[@​openuidev/react-lang@1.1.1](https://redirect.github.com/thesysdev/openui/pull/1613) — patch**
- `Renderer` errors are now handled sensibly when no `onError` prop is provided (previously a gap).

**@​openuidev/lang-core@1.1.1** — no code changes (version alignment release).

---

## 3. Project Progress

**Dashboard Library 1.0.0 (the day's main thrust):**
- [#1620](https://redirect.github.com/thesysdev/openui/pull/1620) — the 1.0.0 foundation (41 components, later 45) — merged.
- [#1621](https://redirect.github.com/thesysdev/openui/pull/1621) — one argument pattern across components + prompt text naming each `$variable` — merged.
- [#1623](https://redirect.github.com/thesysdev/openui/pull/1623) — `SearchFilter` removed from schema (component retained) — merged.
- [#1625](https://redirect.github.com/thesysdev/openui/pull/1625) — README/changeset corrected to 45 components — merged.
- Follow-ups in flight: [#1624](https://redirect.github.com/thesysdev/openui/pull/1624) (5 behavior fixes, open) and [#1608](https://redirect.github.com/thesysdev/openui/pull/1608) (filter-state persistence, open).

**Dashboard UX:** [#1607](https://redirect.github.com/thesysdev/openui/pull/1607) (last-results-while-reloading) merged and released as 0.18.7.

**Server/cloud auth:** [#1616](https://redirect.github.com/thesysdev/openui/pull/1616) merged (→ 0.4.2); regression fix [#1630](https://redirect.github.com/thesysdev/openui/pull/1630) closed today.

**Docs site security & performance:** [#1618](https://redirect.github.com/thesysdev/openui/pull/1618) and [#1619](https://redirect.github.com/thesysdev/openui/pull/1619) (removed public model-calling routes), [#1617](https://redirect.github.com/thesysdev/openui/pull/1617) (proper 404s for unknown slugs), [#1614](https://redirect.github.com/thesysdev/openui/pull/1614) (disabled nav prefetch; video first-frame posters) — all merged.

**Release operations:** [#1615](https://redirect.github.com/thesysdev/openui/pull/1615) and [#1628](https://redirect.github.com/thesysdev/openui/pull/1628) (Changesets version PRs) merged, producing today's 8 releases; [#1589](https://redirect.github.com/thesysdev/openui/pull/1589) closed, superseded by open [#1629](https://redirect.github.com/thesysdev/openui/pull/1629).

**Hygiene:** the satirical "rewrite in Assembly" PR [#517](https://redirect.github.com/thesysdev/openui/pull/517), open since May, was finally closed.

---

## 4. Community Hot Topics

*Note: comment counts were unavailable and all listed items show 0 👍 — engagement ranking below is based on substance and recency rather than raw metrics.*

- **[#418 — Multi-agent support with OpenUI](https://redirect.github.com/thesysdev/openui/issues/418)** (closed 2026-11-12, after ~7.5 months). Requested a multi-agent chat example using the Vercel AI SDK where a main agent delegates to a specialized sub-agent and returns **Generated UI inline with regular text**. Underlying need: users building AI-analytics chat products on multi-agent architectures want first-class patterns for composing generated UI across agents. Whether the closure means "shipped" or "stale-closed" is unclear from the data — worth confirming.
- **[#1626 — Bump Svelte example to ai-sdk v7 + @​openuidev/lang-core 1.1.0?](https://redirect.github.com/thesysdev/openui/issues/1626)** (open, 0 comments). A real user hit a **silent rendering failure**: `Render` produced nothing with `@ai-sdk/openai-compatible` until they migrated to ai-sdk v7 and lang-core 1.1.0. Needs: fresher examples and a clear version-compatibility matrix.
- The most substantive "discussions" today were maintainer PR threads ([#1630](https://redirect.github.com/thesysdev/openui/pull/1630), [#1624](https://redirect.github.com/thesysdev/openui/pull/1624), [#1620](https://redirect.github.com/thesysdev/openui/pull/1620) series) — community pulse this cycle is release-driven rather than discussion-driven.

---

## 5. Bugs & Stability

Ranked by severity:

1. **🔴 Security — unauthenticated routes spending the project's API key (fixed).** `POST /api/playground/stream` called the Thesys API with `THESYS_API_KEY`, no sign-in, no rate limit, caller-chosen model ([#1618](https://redirect.github.com/thesysdev/openui/pull/1618)); `/api/chat` had no origin check and `/api/openui-cloud/chat` only checked origin, with no per-user limit ([#1619](https://redirect.github.com/thesysdev/openui/pull/1619)). Both fixed by route removal — an open cost/abuse vector now closed.
2. **🔴 Regression — server 0.4.2 drops client `appId` (fix closed, not yet released).** 0.4.1 carried `appId` inside the minted frontend token; 0.4.2 dropped the token and the app with it. **Customers with `appId` set lost edits on older dashboards after upgrading, and app-scoped frontend tokens couldn't open new ones.** Fix: [#1630](https://redirect.github.com/thesysdev/openui/pull/1630) (closed 2026-11-13) — but no server 0.4.3 appears in today's releases. Affected users should consider pinning 0.4.1 until 0.4.3 lands.
3. **🟠 Shipped option was unusable (fixed same day).** 0.18.7's release note advertised `cacheQueryResults: false`, but the option sat on non-exported `cloudArtifactStorage` — impossible to pass. Fixed in 0.18.8 via [#1627](https://redirect.github.com/thesysdev/openui/pull/1627).
4. **🟠 dashboard-library 1.0.0 behavior bugs (fix PR open).** Cards lose state across refetch; filters don't show the value their `$variable` holds; plus four prompt-text corrections — all in open PR [#1624](https://redirect.github.com/thesysdev/openui/pull/1624), found by systematically rendering each component against its documented behavior.
5. **🟡 500s and on-demand rendering for exotic slugs (fixed).** Slugs containing characters above U+00FF returned 500 instead of 404 and triggered on-demand rendering ([#1617](https://redirect.github.com/thesysdev/openui/pull/1617)).
6. **🟡 User-reported: Svelte example fails silently (open, no fix PR).** `Render` produces nothing under `@ai-sdk/openai-compatible` until ai-sdk v7 + lang-core 1.1.0 ([#1626](https://redirect.github.com/thesysdev/openui/issues/1626)).
7. **🟢 `Renderer` error handling without `onError` (fixed).** Addressed in react-lang 1.1.1 ([#1613](https://redirect.github.com/thesysdev/openui/pull/1613)).

---

## 6. Feature Requests & Roadmap Signals

- **Example/version freshness ([#1626](https://redirect.github.com/thesysdev/openui/issues/1626)):** likely to land soon — either via the open automated template/example refresh [#1629](https://redirect.github.com/thesysdev/openui/pull/1629) or a targeted Svelte example bump to ai-sdk v7 + lang-core 1.1.x. A published compatibility matrix would address the root cause.
- **Filter-state persistence ([#1608](https://redirect.github.com/thesysdev/openui/pull/1608), open):** reopened dashboards restore the `$state`/filters the user left — stacked on the already-released #1607; a natural 0.18.9 candidate.
- **Dashboard-library stabilization ([#1624](https://redirect.github.com/thesysdev/openui/pull/1624), open):** five fixes + prompt corrections → likely 1.0.1.
- **Server 0.4.3:** the closed #1630 fix strongly implies an imminent patch release.
- **Strategic signal from [#418](https://redirect.github.com/thesysdev/openui/issues/418):** demand for multi-agent orchestration examples (delegation + inline Generated UI). Combined with the dashboard-library push, the roadmap direction is clearly **agentic, data-rich generated UI**.

**Next-version prediction:** server 0.4.3 (appId fix), react-ui/headless 0.18.9 (#1608), dashboard-library 1.0.1 (#1624), and refreshed examples/templates (#1629).

---

## 7. User Feedback Summary

- **Pain point — silent version-compatibility failures:** a user's `Render` output simply didn't appear with `@ai-sdk/openai-compatible`, with no error, until upgrading to ai-sdk v7 + lang-core 1.1.0 ([#1626](https://redirect.github.com/thesysdev/openui/issues/1626)). Silent non-rendering is the worst failure mode for a UI-generation library; clearer errors or a compatibility table would help.
- **Use case signal:** multi-agent chat with AI analytics — a main agent delegating to specialized sub-agents and returning Generated UI inline ([#418](https://redirect.github.com/thesysdev/openui/issues/418)) — confirms the product-market pull toward agent-driven dashboards.
- **Positive:** same-day patch for the unusable 0.18.7 option ([#1627](https://redirect.github.com/thesysdev/openui/pull/1627)), and the 0.4.2 regression was caught in internal testing ("found testing 0.4.x") with a fix closed within a day — evidence of solid QA discipline and functioning release automation.
- **Negative:** the 0.4.2 `appId` regression caused **actual data loss (lost dashboard edits) for customers** — the kind of patch-level break that erodes trust in upgrading quickly.

---

## 8. Backlog Watch

- **[#517](https://redirect.github.com/thesysdev/openui/pull/517)** (open since 2026-05-15) — the joke "migrate to Assembly" PR — **finally closed today**. Good hygiene; no further action needed.
- **[#418](https://redirect.github.com/thesysdev/openui/issues/418)** — closed after ~7.5 months with only 1 comment. If the requested multi-agent/Vercel AI SDK example wasn't actually shipped, the underlying demand remains unmet and deserves an official example or docs pattern.
- **[#1626](https://redirect.github.com/thesysdev/openui/issues/1626)** — brand new, zero maintainer response; needs triage.
- **Open PRs awaiting review/merge:** [#1624](https://redirect.github.com/thesysdev/openui/pull/1624) (dashboard-library fixes), [#1608](https://redirect.github.com/thesysdev/openui/pull/1608) (filter persistence), plus bot chores [#1629](https://redirect.github.com/thesysdev/openui/pull/1629) / [#1631](https://redirect.github.com/thesysdev/openui/pull/1631).
- **Watch item:** **server 0.4.3 containing the #1630 `appId` fix is not yet published** — users on 0.4.2 with `appId` set are exposed until it ships.

---

*Health read: strong. High merge velocity, same-day patch capability, working release automation, and proactive security cleanup are all positives; the open risks are the unreleased 0.4.2 regression fix, dashboard-library 1.0.0's known-but-unfixed behavior bugs (#1624), and thin community-issue responsiveness (1 unanswered new issue).*

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render Project Digest — 2026-11-13

**Repository:** [vercel-labs/json-render](https://github.com/vercel-labs/json-render)

---

## 1. Today's Overview

json-render shows sustained, healthy maintenance activity, with 13 items updated in the last 24 hours (4 issues, 9 PRs). Maintainers closed 5 fix PRs and resolved 3 bug reports — every one of which already had a corresponding fix PR — indicating a disciplined, low-backlog triage process. The only remaining open issue ([#367](https://redirect.github.com/vercel-labs/json-render/issues/367), directive resolution in conditions) is being actively implemented through two coordinated community PRs ([#458](https://redirect.github.com/vercel-labs/json-render/pull/458), [#471](https://redirect.github.com/vercel-labs/json-render/pull/471)), including one opened today. Notably, no version release accompanied this batch of fixes, suggesting a patch/minor release is being staged. Meanwhile, an open SwiftUI renderer PR ([#470](https://redirect.github.com/vercel-labs/json-render/pull/470)) signals ambitions beyond the web platform.

---

## 2. Releases

No new releases today. Two observations worth noting:

- Five fix PRs were closed on 2026-11-12 ([#426](https://redirect.github.com/vercel-labs/json-render/pull/426), [#427](https://redirect.github.com/vercel-labs/json-render/pull/427), [#428](https://redirect.github.com/vercel-labs/json-render/pull/428), [#429](https://redirect.github.com/vercel-labs/json-render/pull/429), [#430](https://redirect.github.com/vercel-labs/json-render/pull/430)) without an accompanying version bump — a release (likely 0.21.x or 0.22) appears imminent.
- The repo shows no formal GitHub Releases at all, though issue reports reference package versions up to `@json-render/core` 0.21.0 / `@json-render/codegen` 0.21.0 — versioning is evidently tracked via npm rather than GitHub release notes.

---

## 3. Project Progress

**Closed/merged PRs (5):**

| PR | Area | Change |
|---|---|---|
| [#427](https://redirect.github.com/vercel-labs/json-render/pull/427) | codegen | String props now emitted as JSX expressions (`title={"..."}`) instead of quoted attributes, which broke on quotes/backslashes/newlines. Fixes [#379](https://redirect.github.com/vercel-labs/json-render/issues/379). |
| [#426](https://redirect.github.com/vercel-labs/json-render/pull/426) | core + YAML transforms | Spec fence and line-buffer state now flushed/cleared at `text-start`, `text-end`, `start-step`, `error`, and `abort` boundaries. Fixes [#419](https://redirect.github.com/vercel-labs/json-render/issues/419). |
| [#428](https://redirect.github.com/vercel-labs/json-render/pull/428) | docs (Next) | Quick start rewritten to use `getPageData` + `PageRenderer` instead of the nonexistent `Page` export. Fixes [#380](https://redirect.github.com/vercel-labs/json-render/issues/380). |
| [#429](https://redirect.github.com/vercel-labs/json-render/pull/429) | core validation | `min`/`max`/`numeric` now share one number parser; numeric strings like `"7"` compare as numbers. |
| [#430](https://redirect.github.com/vercel-labs/json-render/pull/430) | core validation | Email validator now ignores surrounding whitespace, consistent with `url`/`required`. Replaces #351. |

**Issues resolved:** [#379](https://redirect.github.com/vercel-labs/json-render/issues/379), [#419](https://redirect.github.com/vercel-labs/json-render/issues/419), [#380](https://redirect.github.com/vercel-labs/json-render/issues/380) — all closed 2026-11-12, the same day their fix PRs closed.

**Open PR movement:**

- [#471](https://redirect.github.com/vercel-labs/json-render/pull/471) *(new today)* — adds `$value` as a condition source for any prop expression (left-hand-side half of #367).
- [#458](https://redirect.github.com/vercel-labs/json-render/pull/458) — resolves custom directives on the right-hand side of comparison conditions (right-hand-side half of #367).
- [#470](https://redirect.github.com/vercel-labs/json-render/pull/470) — adds a full Swift package: `JSONRenderCore` (spec decoding, validation, expressions, JSONL streaming) plus a SwiftUI renderer and native component catalog.
- [#454](https://redirect.github.com/vercel-labs/json-render/pull/454) — switches docs chat and playground defaults from `anthropic/claude-haiku-4.5` to `openai/gpt-6-luna-fast`.

---

## 4. Community Hot Topics

1. **[Issue #367 — Resolve directives in conditions](https://redirect.github.com/vercel-labs/json-render/issues/367)** (5 comments, updated today) — the most-discussed item. Directives resolve in props and action params via `resolvePropValue`, but not inside `visible`/`$cond` conditions, forcing users to copy directive or `$computed` results into state before referencing them. **Underlying need:** conditions should be a first-class expression surface over *any* resolved value, not just `$state`/`$item`/`$index`. The community response is unusually structured — two split PRs ([#458](https://redirect.github.com/vercel-labs/json-render/pull/458) for RHS operands, [#471](https://redirect.github.com/vercel-labs/json-render/pull/471) for LHS sources) implementing the feature from both ends.
2. **[PR #470 — Swift/SwiftUI renderer](https://redirect.github.com/vercel-labs/json-render/pull/470)** — a substantial platform-expansion contribution (core + renderer + component catalog). **Underlying need:** rendering JSON specs natively on Apple platforms, positioning json-render as a cross-platform AI-output rendering layer rather than a web-only one.
3. **[PR #454 — Playground model switch](https://redirect.github.com/vercel-labs/json-render/pull/454)** — low-stakes but signals the project keeps its AI infrastructure (docs chat, playground, AI Gateway) actively maintained.

A notable pattern: the five closed fixes by contributor lahfir credit multiple co-authors and explicitly supersede earlier community drafts (#351, #425, #318) — evidence of an iterative, community-fed fix pipeline rather than lone maintainer work.

---

## 5. Bugs & Stability

All bugs reported/closed in this window have landed fix PRs. Ranked by severity:

| Rank | Issue | Severity | Impact | Fix |
|---|---|---|---|---|
| 1 | [#419](https://redirect.github.com/vercel-labs/json-render/issues/419) (stream transform state) | **High** | `inSpecFence`/`lineBuffer` persisted across text blocks; prose silently dropped after an unfinished fence or on retry/error/abort — data loss in streaming output | [#426](https://redirect.github.com/vercel-labs/json-render/pull/426) ✅ |
| 2 | [#379](https://redirect.github.com/vercel-labs/json-render/issues/379) (codegen invalid JSX) | **High** | `serializeProps()` emitted JS backslash escapes inside quoted JSX attributes → unparseable JSX, build failure for esbuild consumers | [#427](https://redirect.github.com/vercel-labs/json-render/pull/427) ✅ |
| 3 | (no separate issue) min/max validation | **Medium-High** | Numeric strings like `"7"` always failed `min`/`max` — any text input with numeric bounds was permanently invalid | [#429](https://redirect.github.com/vercel-labs/json-render/pull/429) ✅ |
| 4 | (no separate issue) email validator | **Low-Medium** | Whitespace-padded emails rejected, inconsistent with `url`/`required` validators | [#430](https://redirect.github.com/vercel-labs/json-render/pull/430) ✅ |
| 5 | [#380](https://redirect.github.com/vercel-labs/json-render/issues/380) (Next quick start) | **Low-Medium** | Documented `Page` export doesn't exist in `createNextApp()` return — quick start fails to build (docs-only, but an onboarding blocker) | [#428](https://redirect.github.com/vercel-labs/json-render/pull/428) ✅ |

**No crashes or regressions reported today.** Bug reports are consistently high quality (version pins, repro steps, even esbuild versions), which correlates with fast fix turnaround — median issue-to-fix here was ~5–6 weeks, with all fixes landing in a single batch.

---

## 6. Feature Requests & Roadmap Signals

- **Directives in conditions ([#367](https://redirect.github.com/vercel-labs/json-render/issues/367))** — the clearest roadmap signal. Two PRs ([#458](https://redirect.github.com/vercel-labs/json-render/pull/458), [#471](https://redirect.github.com/vercel-labs/json-render/pull/471)) are open and coordinated, explicitly labeled as parts of #367. **Prediction: this is the headline feature of the next release**, likely a minor bump (0.22.x) since `$value` as a condition source is additive.
- **Swift/SwiftUI renderer ([#470](https://redirect.github.com/vercel-labs/json-render/pull/470))** — a major platform bet. Large review surface (core + renderer + catalog); likely a longer review cycle, but its existence reframes the project as multi-platform.
- **Next release composition (predicted):** the five closed fixes (validation ×2, codegen, streaming, docs) plus the #367 condition feature if review completes — a solid maintenance-plus-feature release.

---

## 7. User Feedback Summary

**Positive signals:**
- Users are invested and specific: [#367](https://redirect.github.com/vercel-labs/json-render/issues/367) opens with "directives have been really useful for us" — directives are a valued abstraction.
- Bug reports include exact package versions, repro steps, and downstream tool versions (esbuild 0.28.2), indicating professional/production usage rather than casual evaluation.

**Pain points:**
- **Workaround friction:** conditions couldn't reference directives or `$computed` values without copying into state (the core of #367).
- **First-run failures:** the Next.js quick start didn't build (#380) — costly friction for new adopters, now fixed.
- **Silent data loss:** streaming transforms dropping prose after malformed fences (#419) — the kind of bug that erodes trust in streaming AI-output rendering.
- **Over-strict validation:** valid user input (numeric strings in text fields, whitespace-padded emails) rejected — now aligned.

**Use cases observed:** Next.js integration, esbuild-based codegen pipelines, JSONL streaming with markdown spec fences (AI assistant output → UI), form validation, and emerging interest in native Apple platforms (SwiftUI).

**Overall sentiment:** healthy. Dissatisfaction is procedural (missing capability, docs drift), not architectural, and every complaint in this window converted into a merged fix or an in-flight PR.

---

## 8. Backlog Watch

| Item | Age / Status | Concern |
|---|---|---|
| [#367](https://redirect.github.com/vercel-labs/json-render/issues/367) | Open since 2026-09-30 (~6 weeks) | Long-lived, but now has two active PRs ([#458](https://redirect.github.com/vercel-labs/json-render/pull/458), [#471](https://redirect.github.com/vercel-labs/json-render/pull/471)). **Needs:** maintainer review and merge coordination across the LHS/RHS split. |
| [#470](https://redirect.github.com/vercel-labs/json-render/pull/470) (SwiftUI renderer) | Opened 2026-11-11, updated today | Large multi-package PR from @​ctate. **Needs:** significant review bandwidth; risk of stalling if not prioritized. |
| [#454](https://redirect.github.com/vercel-labs/json-render/pull/454) (model switch) | Opened 2026-11-06, updated today, still unmerged | Small, low-risk change idling for a week. **Needs:** a merge decision. |
| [#471](https://redirect.github.com/vercel-labs/json-render/pull/471) / [#458](https://redirect.github.com/vercel-labs/json-render/pull/458) | New / 6 days old | Fresh feature PRs awaiting first review. |

No orphaned issues: nothing in this window sits unanswered, and the oldest open item (#367) is actively being resolved. The main risk to watch is review throughput — three open PRs (#470, #454, and the #367 pair) are all waiting on maintainer attention simultaneously.

---

*Data window: 2026-11-12 – 2026-11-13. Sources: 4 issues (1 open, 3 closed), 9 PRs (4 open, 5 closed/merged), 0 releases.*

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit Project Digest — 2026-11-13

## 1. Today's Overview

CopilotKit is operating at high velocity: **43 PRs saw activity in the last 24 hours (19 open, 24 merged/closed)** against only **4 active issues (0 closed)** — a PR-to-issue activity ratio that indicates strong maintainer throughput and effective triage. Two releases shipped today ([v1.87.1](https://github.com/CopilotKit/CopilotKit/releases/tag/v1.87.1) and [python-sdk/v0.1.97](https://pypi.org/project/copilotkit/0.1.97/)). Work clusters around three fronts: an A2UI push timed to Google's A2UI launch (playground relocation to open.bot, A2UI 1.0 migrations), a docs-site migration cleanup (400 broken URLs fixed), and a rapid security-relevant fix for thread naming that could execute the app's agent with its server-side tools ([#8375](https://redirect.github.com/CopilotKit/CopilotKit/issues/8375) → fix [#8377](https://redirect.github.com/CopilotKit/CopilotKit/pull/8377), same-day response). Contributor mix is healthy: core team (tylerslaton, BenTaylorDev, jerelvelarde, contextablemark) plus external contributors (minako-m, yuxuanx-rain, devbymak, MichielMAnalytics). **Overall health: strong.**

## 2. Releases

**[v1.87.1](https://github.com/CopilotKit/CopilotKit/releases/tag/v1.87.1)** (patch, shipped via release PR [#8380](https://redirect.github.com/CopilotKit/CopilotKit/pull/8380))
- **Change:** Fixes A2UI rendering for catalogs that declare protocol version 1.0 when streaming Direct JSON.
- **Breaking changes:** None (patch-level).
- **Migration notes:** No action needed for most users. Teams building A2UI 1.0 catalogs with Direct JSON streaming should upgrade; PR [#8384](https://redirect.github.com/CopilotKit/CopilotKit/pull/8384) documents the working version matrix (`ag-ui-adk` 0.13.0 + CopilotKit 1.87.1).

**[python-sdk/v0.1.97](https://pypi.org/project/copilotkit/0.1.97/)** — routine Python SDK release, no detailed notes published.

## 3. Project Progress

**24 PRs merged/closed in the window; 7 visible in today's top-20:**

- **Release:** v1.87.1 shipped via automated release workflow ([#8380](https://redirect.github.com/CopilotKit/CopilotKit/pull/8380)).
- **Docs migration hardening:** [#8373](https://redirect.github.com/CopilotKit/CopilotKit/pull/8373) audited **7,518 URLs** from the old docs.copilotkit.ai, found **400 returning 404**, and redirects 398 of them to working pages. [#8385](https://redirect.github.com/CopilotKit/CopilotKit/pull/8385) restored the sidebar to the live docs' structure with design tweaks. [#8382](https://redirect.github.com/CopilotKit/CopilotKit/pull/8382) fixed the Vue tool-rendering guide to default to the Built-in Agent.
- **A2UI playground overhaul:** [#8379](https://redirect.github.com/CopilotKit/CopilotKit/pull/8379) replaced the auto-playing replay with a landing page + starter prompts; [#8383](https://redirect.github.com/CopilotKit/CopilotKit/pull/8383) removed the search and Components tab; [#8374](https://redirect.github.com/CopilotKit/CopilotKit/pull/8374) fixed a missing logo SVG that 404'd in staging and production.
- **react-core UX:** [#8381](https://redirect.github.com/CopilotKit/CopilotKit/pull/8381) folds orphaned "Thought for N seconds" thinking blocks into the collapsed work summary.

**Key in-flight (open) work:**

- **A2UI ecosystem:** [#8388](https://redirect.github.com/CopilotKit/CopilotKit/pull/8388) serves the playground at open.bot/a2ui to capture Google's A2UI launch traffic; [#8387](https://redirect.github.com/CopilotKit/CopilotKit/pull/8387) updates the README to a2ui.open.bot; [#8384](https://redirect.github.com/CopilotKit/CopilotKit/pull/8384) migrates google-adk demos to A2UI 1.0.
- **Auth/security:** [#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309) hardens the Python quickstart (azure-identity, `single_user=True` on loopback, fail-closed `authorization_scope_resolver`); [#7971](https://redirect.github.com/CopilotKit/CopilotKit/pull/7971) adds a langgraph-fastapi-auth starter; [#8254](https://redirect.github.com/CopilotKit/CopilotKit/pull/8254) and [#8235](https://redirect.github.com/CopilotKit/CopilotKit/pull/8235) complete per-request header evaluation for React Native and `useAgent`.
- **Telemetry:** [#8378](https://redirect.github.com/CopilotKit/CopilotKit/pull/8378) adds field labels on edits, SDK/app version capture, and page error capture.
- **Branding:** [#8376](https://redirect.github.com/CopilotKit/CopilotKit/pull/8376) renames the README project card to **OpenFuse**, ahead of a repository rename.

## 4. Community Hot Topics

Issue volume is low today (4 active), so "hot" is relative; PR comment counts were unavailable in this window (👍 counts are 0 across all items).

- **[#3644](https://redirect.github.com/CopilotKit/CopilotKit/issues/3644)** (4 comments, most-discussed) — Duplicate assistant message IDs when `TOOL_CALL_START`/`TOOL_CALL_RESULT` events interleave in AG-UI streams. Open since April, re-touched 2026-11-12. *Underlying need:* correctness of the client-side message store under realistic multi-tool streaming — likely production-derived.
- **[#6936](https://redirect.github.com/CopilotKit/CopilotKit/issues/6936)** (3 comments, updated today) — Showcase drift: the dynamic-schema A2UI demo runs three different system prompts across integrations after the OSS-136 rework into "Vantage Threads". *Underlying need:* demo consistency as a trust signal; overlaps with #8384's A2UI 1.0 migration scope.
- **[#8375](https://redirect.github.com/CopilotKit/CopilotKit/issues/8375)** (1 comment, but highest signal) — Thread naming executing the app's own agent with server tools. Drew a same-day breaking fix ([#8377](https://github.com/CopilotKit/CopilotKit/CopilotKit/pull/8377)).
- Notable community-authored PRs: [#8254](https://redirect.github.com/CopilotKit/CopilotKit/pull/8254) (minako-m), [#8235](https://redirect.github.com/CopilotKit/CopilotKit/pull/8235) (yuxuanx-rain), [#8362](https://redirect.github.com/CopilotKit/CopilotKit/pull/8362) (MichielMAnalytics — third-party boxd integration), [#7971](https://redirect.github.com/CopilotKit/CopilotKit/pull/7971) (devbymak).

## 5. Bugs & Stability

Ranked by severity:

1. **HIGH — [#8375](https://redirect.github.com/CopilotKit/CopilotKit/issues/8375):** Thread naming (`generateThreadNames`, on by default) clones the app's agent to write a title; LangGraph agents retain server-bound tools, system prompts, and skills, so the title run re-executes the user's task, calls tools, and **can loop and write data**. Data-integrity and cost implications. **Fix exists:** [#8377](https://redirect.github.com/CopilotKit/CopilotKit/pull/8377) (breaking; strips tools fully rather than frontend-only) — open, same-day turnaround.
2. **MEDIUM — [#3644](https://redirect.github.com/CopilotKit/CopilotKit/issues/3644):** Duplicate assistant message IDs in `messages[]` under interleaved AG-UI tool events. **~7 months open**, reserved for students; no fix PR visible in this window.
3. **LOW — [#6936](https://redirect.github.com/CopilotKit/CopilotKit/issues/6936):** Inconsistent system prompts across demo integrations; likely partially resolved by [#8384](https://redirect.github.com/CopilotKit/CopilotKit/pull/8384).
4. **COSMETIC — [#8386](https://redirect.github.com/CopilotKit/CopilotKit/pull/8386):** Playground design system mislabeled "ChatCN" instead of "shadcn/ui" (a transcription error from call notes); fix PR open.
5. **Fixed today:** [#8374](https://redirect.github.com/CopilotKit/CopilotKit/pull/8374) (missing logo asset 404) and [#8381](https://redirect.github.com/CopilotKit/CopilotKit/pull/8381) (orphaned thinking lines) — both closed.

## 6. Feature Requests & Roadmap Signals

- **[#6641](https://redirect.github.com/CopilotKit/CopilotKit/issues/6641)** (rainerhahnekamp): Add Angular to automated visual regression testing — motivated by the Angular 22 upgrade (#6521) where the Lucide migration check lacked coverage. Signals Angular is a first-class target needing test parity with React/Vue.
- **Auth-hardening arc:** [#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309) + [#7971](https://redirect.github.com/CopilotKit/CopilotKit/pull/7971) + the headers work ([#8254](https://redirect.github.com/CopilotKit/CopilotKit/pull/8254), [#8235](https://redirect.github.com/CopilotKit/CopilotKit/pull/8235), referencing #7510/#7512) show a sustained "secure defaults" push.
- **A2UI as strategic bet:** v1.87.1 + [#8384](https://redirect.github.com/CopilotKit/CopilotKit/pull/8384) + [#8388](https://redirect.github.com/CopilotKit/CopilotKit/pull/8388), explicitly tied to Google's A2UI launch traffic.
- **Next-version prediction (v1.88.0):** [#8377](https://redirect.github.com/CopilotKit/CopilotKit/pull/8377) and [#8254](https://redirect.github.com/CopilotKit/CopilotKit/pull/8254) are both marked breaking (`!`), so a minor release is likely imminent — expect the thread-naming fix, RN header parity, and `useAgent` header keying (#8235) plus A2UI playground polish (#8388/#8387/#8386).

## 7. User Feedback Summary

**Pain points from real usage:**
- **Agent side effects during mundane operations:** title generation triggering full agent runs with tools — loops and unexpected writes for LangGraph users ([#8375](https://redirect.github.com/CopilotKit/CopilotKit/issues/8375)) — implies production users run tool-heavy, stateful agents.
- **Streaming correctness:** interleaved tool calls producing duplicate message IDs ([#3644](https://redirect.github.com/CopilotKit/CopilotKit/issues/3644)).
- **Docs reliability:** 400 of 7,518 legacy URLs 404'd before [#8373](https://redirect.github.com/CopilotKit/CopilotKit/pull/8373) — users following old links/search results hit dead ends.
- **Stale auth tokens in React Native:** headers captured at render time rather than per-request ([#8254](https://redirect.github.com/CopilotKit/CopilotKit/pull/8254)).
- **Angular users feel under-served** on test infrastructure ([#6641](https://redirect.github.com/CopilotKit/CopilotKit/issues/6641)).

**Positive signals:** same-day maintainer response to a security-relevant bug; substantial third-party contributions (the boxd recipe [#8362](https://redirect.github.com/CopilotKit/CopilotKit/pull/8362) demonstrates agent code execution on external infrastructure); a student-reserved issue program suggesting structured OSS education outreach; and ecosystem growth evidenced by the OpenFuse rename ([#8376](https://redirect.github.com/CopilotKit/CopilotKit/pull/8376)).

## 8. Backlog Watch

- **[#3644](https://redirect.github.com/CopilotKit/CopilotKit/issues/3644)** — open since **2026-04-07 (~7 months)**, 4 comments, no fix PR visible. The oldest active bug; needs maintainer triage or a resolution plan beyond student reservation.
- **[#6641](https://redirect.github.com/CopilotKit/CopilotKit/issues/6641)** — open since 2026-08-21 (~3 months), 2 comments; blocks confident Angular upgrades.
- **[#6936](https://redirect.github.com/CopilotKit/CopilotKit/issues/6936)** — open since 2026-09-07 (~2 months), 3 comments, updated today; likely to be partially resolved by [#8384](https://redirect.github.com/CopilotKit/CopilotKit/pull/8384).
- **[#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309)** — open since 2026-11-10; security-relevant docs (auth defaults) worth prioritizing given the current auth-hardening theme.
- **[#7971](https://redirect.github.com/CopilotKit/CopilotKit/pull/7971)** — open since 2026-10-24 (~3 weeks); integration starter awaiting review.

**Backlog health:** no active item older than ~7 months; the backlog is shallow relative to merge velocity (24 closed PRs/day vs. 4 active issues), which is a favorable maintenance ratio.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/linqinghao/agents-radar).*