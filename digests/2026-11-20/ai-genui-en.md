# Generative UI Ecosystem Digest 2026-11-20

> Issues: 12 | PRs: 109 | Projects covered: 4 | Generated: 2026-11-20 06:22 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## Cross-Ecosystem Comparison

# Generative UI Ecosystem — Cross-Project Comparison Report
**Date: 2026-11-20 | Projects: a2ui, OpenUI, json-render, CopilotKit**

---

## 1. Ecosystem Overview

The generative UI landscape is stratifying into four distinct layers: protocol/specification (a2ui), application framework (CopilotKit), platform product (OpenUI), and focused rendering library (json-render). The most significant signal today is cross-layer convergence — CopilotKit demoed a live canvas built on the **A2UI protocol's Express path** (#8504), meaning the protocol layer now has a major framework consumer alongside its reference implementation. Simultaneously, three of four projects are optimizing documentation for **AI-agent consumption** rather than human readers, treating docs as machine-facing infrastructure. No project cut a release today, giving the ecosystem a collective pre-release/staging posture, while security and dependency hygiene surfaced as shared friction across three projects.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Notable Contributors |
|---|---|---|---|---|
| **a2ui** | 10 (6 open / 4 closed) | 48 (39 open / 9 merged) | None ever; release automation being built (#4215), v1.0 conformance staged | gspencergoog ×11 of top-20; multi-SDK contributors |
| **CopilotKit** | 2 (2 open / 0 closed) | 47 (32 open / 15 merged) | None; runtime fixes (CORS, gpt-6, react-core) unshipped | tylerslaton (13+ stacked docs PRs); community demo builders |
| **OpenUI** | 0 | 13 (5 open / 8 closed) | None today; Changesets PR #1668 queued → **release imminent** | Core team (3) + 2 bots + 2 external contributors |
| **json-render** | 0 | 1 (1 open / 0 closed) | None; no recent release data | 1 community contributor (haranishi) |

**Read:** a2ui and CopilotKit are the throughput engines (~50 items each). OpenUI runs the highest merge efficiency (8/13 = 62% closed). Near-zero issue inflow at OpenUI and json-render reflects either mature cores or roadmaps living in PRs — while a2ui's issue flow (partly CI-bot-filed) and CopilotKit's user-reported bugs indicate broader production exposure.

---

## 3. Shared Feature Directions

| Direction | Projects | Specific Needs |
|---|---|---|
| **Agent-readable docs & agent-driven onboarding** | json-render, OpenUI, CopilotKit | Markdown content negotiation and MCP docs (json-render #499 — imports stripped from `.md` routes); hosted `SKILL.md` + `npx skills add` onboarding (OpenUI #1672/#1676); agent-facing deploy guides and Ask AI guard hardening (CopilotKit #8434/#8435). Underlying need: docs are now retrieved and executed by coding agents; examples must survive Markdown extraction. |
| **Docs/SEO remediation at scale** | CopilotKit, OpenUI, a2ui | CopilotKit audited 1,028 pages, validated 2,704 code blocks, Playwright-verified 431 guides; OpenUI fixed "Crawled – currently not indexed" and moved IndexNow keys to env vars; a2ui shipped Search Console/sitemap/Core Web Vitals work (#4306). Docs drift from shipped packages is hurting discoverability and onboarding everywhere. |
| **A2UI as interoperability layer** | a2ui, CopilotKit | a2ui maintains 15 SDKs across 5 languages and version-tagged v1.0 conformance suites (#4242); CopilotKit renders A2UI via Express and Antigravity with Gemini 3.8 Flash (#8504/#8509). Demand: portable agent-to-UI contracts decoupled from any single framework. |
| **Security & dependency hygiene** | a2ui, CopilotKit, OpenUI | Enterprise zod-advisory gate (a2ui #4192, Coolblue); resolved dompurify critical pin (a2ui #4278); CORS reflecting any origin with credentials (CopilotKit #8025, open ~3.5 weeks); committed IndexNow key requiring rotation (OpenUI #1673). Production deployments are gated on audit-clean trees and safe defaults. |
| **Structured tool-output-to-UI binding** | a2ui, OpenUI | a2ui's ToolPointerBinder binds structured tool output to templates with **no extra LLM hop** (#4322); OpenUI runs user data tools mid-generation and returns provenance (#1544/#1678). Demand: deterministic data flow into generated UI. |

---

## 4. Differentiation Analysis

| Dimension | a2ui | OpenUI | json-render | CopilotKit |
|---|---|---|---|---|
| **Feature focus** | Protocol + renderer SDKs; experimental zero-LLM decision model (kernel → cascade router → predicates) | Data-aware dashboards with cell-level provenance, artifact lifecycle (list/read/share, org/user scoping) | Minimal JSON→UI rendering primitives | Full-stack copilot framework: runtime, middleware (LangGraph, Mastra), showcases, model upkeep (gpt-6) |
| **Target users** | Platform teams; enterprises embedding in existing apps (Streamlit, Web Components, shadow DOM) | Developers building agentic analytics/data apps | Developers wanting a small, stable rendering layer | App developers adding copilots; demo/showcase-driven adoption |
| **Technical approach** | Spec conformance across 5 languages; deterministic assembly; no tagged releases yet | Server-side orchestration; cross-repo platform coordination (muse/coda); Changesets discipline | Client library; Markdown-first docs delivery | React-centric runtime expanding to Vue/Angular/RN (#8486); heavy integration surface |

**Key contrast:** a2ui optimizes for *breadth and portability* (any language, any host), OpenUI for *depth in one vertical* (trustworthy AI-generated analytics), json-render for *minimalism and stability*, CopilotKit for *time-to-ship for app developers*.

---

## 5. Community Momentum & Maturity

**Momentum (by volume):** a2ui (58 items) ≈ CopilotKit (49) >> OpenUI (13) >> json-render (1).

- **a2ui** — fastest iteration: issue #4314 → fix PR #4326 in ~1 day; ReDoS #4236 → Swift fix in ~5 days. Genuine multi-SDK contribution and an emerging commercial layer (Angular Architects directory request #4228; enterprise user Coolblue). But throughput concentrates on one maintainer, main-branch CI is red (#4262), and 39 open PRs await review.
- **CopilotKit** — large-scale, engaged community building demos on the platform, but carries aging debt: a security-relevant CORS issue open ~3.5 weeks with no fix PR, and a complete fix (#7697) waiting 6 weeks for review.
- **OpenUI** — most process-mature relative to size: CI-enforced contribution policy, bot automation, cross-repo coordination. External interest is arriving (first outside contributor tested the fork→PR flow via Claude Code), and governance is being formalized in response.
- **json-render** — lowest volume but constructive (bug reported as a fix PR, not a complaint); consistent with a mature, stable core.

**Maturity ranking:** json-render (stable core, docs-only patches) → CopilotKit (production-scale, paying down docs debt) → OpenUI (disciplined, pre-release, imminent ship) → a2ui (pre-1.0, highest velocity, zero tagged releases).

---

## 6. Trend Signals

1. **Protocols over frameworks.** A2UI now has both a spec steward (a2ui) and a framework consumer (CopilotKit). Building against protocol-level contracts reduces lock-in; watch a2ui's v1.0 conformance tagging (#4242) as the stabilization marker.
2. **Docs are agent infrastructure.** Three of four projects made docs machine-consumable this cycle (Markdown negotiation, SKILL.md, validated code blocks). New quality bar: every code example must remain runnable when retrieved as Markdown by an agent.
3. **Deterministic assembly layers are emerging.** a2ui's zero-LLM decision kernel and OpenUI's mid-generation tool execution reflect cost/latency/reliability pressure — expect the "LLM decides, deterministic code renders" pattern to spread.
4. **Dependency hygiene is an enterprise adoption gate.** Transitive advisories (zod, dompurify) blocked a corporate rollout at Coolblue. Audit-clean dependency trees are now table stakes, not nice-to-have.
5. **Security defaults are under scrutiny.** CORS-with-credentials reflection, guard bypasses, and committed keys across three projects show that publicly exposed generative-UI runtimes need secure-by-default configuration.
6. **Provenance is becoming a trust feature.** OpenUI's formula/query/cell-level dashboard provenance signals rising auditability demands for AI-generated analytics — likely a differentiator as generated UIs touch business data.
7. **Contribution norms are renegotiating around AI.** Contributions authored via Claude Code and CI-enforced linked-issue policies (OpenUI #1674) show projects adapting governance for agentic contributors.

**Bottom line for decision-makers:** choose **a2ui** for multi-language protocol conformance (accepting pre-1.0 churn), **CopilotKit** for fastest copilot integration in React apps (verify CORS posture before public deployment), **OpenUI** if data-aware agentic dashboards are the use case, and **json-render** for a stable, minimal rendering layer. The ecosystem's center of gravity is moving from "can agents generate UI" toward interoperable protocols, agent-grade documentation, and deterministic trust.

---

## Per-Project Reports

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui Project Digest — 2026-11-20

**Repository:** [a2ui-project/a2ui](https://github.com/a2ui-project/a2ui) — Agent-to-UI protocol and multi-SDK renderer stack (Python, TypeScript/Web, Dart/Flutter, Swift/SwiftUI, Kotlin; 15 SDK packages)

---

## 1. Today's Overview

A2UI is in a high-velocity, pre-tagged-release phase: 58 items were updated in the last 24 hours (10 issues — 6 open / 4 closed; 48 PRs — 39 open / 9 merged or closed), with zero GitHub releases to date. Today's activity was dominated by core maintainer **gspencergoog**, who opened a seven-PR series — headlined by a five-part experimental "decision model" stack — including a next-day performance fix ([#4326](https://redirect.github.com/a2ui-project/a2ui/pull/4326)) for a bug filed yesterday ([#4314](https://redirect.github.com/a2ui-project/a2ui/issues/4314)). Community flow is healthy and multi-SDK (Swift fixes, JSON Schema parity, shadow DOM fix, site/SEO work), and the prevalence of automated labels (`first-line-handled`, CI auto-filed issues) indicates mature bot-assisted triage. The main health watch-items are an unresolved **P1 e2e-drift CI failure on main** ([#4262](https://redirect.github.com/a2ui-project/a2ui/issues/4262)) and a review queue of 39 open PRs versus 9 closed, suggesting maintainer bandwidth is the current bottleneck.

## 2. Releases

No new releases this period. Context worth noting: the repository has no tagged GitHub releases at all (packages ship via npm, e.g. `@a2ui/markdown-it@0.2.2`), and release automation is actively being built — [#4215](https://redirect.github.com/a2ui-project/a2ui/pull/4215) adds `release_notes.py` and a release package manifest to auto-generate changelog sections across 17 packages from PR history.

## 3. Project Progress

**Closed/merged in the last 24h (9 total; 3 visible in top activity):**
- [#4310](https://redirect.github.com/a2ui-project/a2ui/pull/4310) — `fix(swift/core)`: RegexSubset now rejects counted repetition of ambiguous nullable groups, landing the Swift-side fix for the renderer-hang pattern in [#4236](https://redirect.github.com/a2ui-project/a2ui/issues/4236).
- [#4309](https://redirect.github.com/a2ui-project/a2ui/pull/4309) — `docs(web_core)`: documented overridable `--a2ui-*` CSS custom properties across 16+ basic-catalog components, closing docs backlog issue [#2461](https://redirect.github.com/a2ui-project/a2ui/issues/2461) (open since Aug 31).
- [#4159](https://redirect.github.com/a2ui-project/a2ui/pull/4159) — `test(e2e)`: live-pair Playwright tests where real Lit/React renderers talk A2A to scripted Python ADK / TypeScript agents.

**Issues closed:** [#4278](https://redirect.github.com/a2ui-project/a2ui/issues/4278) (dompurify advisory pin), [#4256](https://redirect.github.com/a2ui-project/a2ui/issues/4256) (Swift silent binding drops), [#4259](https://redirect.github.com/a2ui-project/a2ui/issues/4259) (Swift icon SVG arcs), [#2461](https://redirect.github.com/a2ui-project/a2ui/issues/2461) — four user-reported items resolved.

**Advanced (open, in review):**
- **Decision-model stack (all opened today):** [#4320](https://redirect.github.com/a2ui-project/a2ui/pull/4320) shared experimental decision kernel + `@macro` placement hints + CI barrel guard; [#4321](https://redirect.github.com/a2ui-project/a2ui/pull/4321) DecisionCascadeRouter (single-batch UI gating, closure-preserving catalog pruning); [#4322](https://redirect.github.com/a2ui-project/a2ui/pull/4322) ToolPointerBinder + ADK `after_tool_callback` (bind structured tool output to Express templates/`@macro`/CSTs without an extra LLM hop); [#4323](https://redirect.github.com/a2ui-project/a2ui/pull/4323) submit-time named-predicate RPC agent functions; [#4325](https://redirect.github.com/a2ui-project/a2ui/pull/4325) `decision_playground` sample with Lit shell inspector.
- [#4326](https://redirect.github.com/a2ui-project/a2ui/pull/4326) — perf: eliminate per-component `validation_schema` deep copies in the Python core (fixes #4314).
- [#4296](https://redirect.github.com/a2ui-project/a2ui/pull/4296) — remove the function-call nesting limit of 5 across all five SDKs (global depth limit of 50 retained).
- [#4184](https://redirect.github.com/a2ui-project/a2ui/pull/4184) — Express support for `oneOf`/`anyOf`/`allOf`/local `$defs` (TS/Dart/Python).
- [#4242](https://redirect.github.com/a2ui-project/a2ui/pull/4242) — 23 conformance cases version-tagged as v0.9 with v1.0 copies added.
- [#4319](https://redirect.github.com/a2ui-project/a2ui/pull/4319) — dependabot: 16 npm/yarn updates incl. `@modelcontextprotocol/sdk` 1.30.1→1.32.0 and `markdown-it` 14.2.0→14.3.3.
- Docs/site: [#4313](https://redirect.github.com/a2ui-project/a2ui/pull/4313) (@​call bindings, formatString, `@index`), [#4306](https://redirect.github.com/a2ui-project/a2ui/pull/4306) (Search Console/sitemap/Core Web Vitals), [#4327](https://redirect.github.com/a2ui-project/a2ui/pull/4327) (Dart blueprint sync), [#4228](https://redirect.github.com/a2ui-project/a2ui/pull/4228) (Angular Architects directory entry).

## 4. Community Hot Topics

(Ranked by comment count; PR comment data unavailable.)

1. [#4192](https://redirect.github.com/a2ui-project/a2ui/issues/4192) — **4 comments, most-discussed.** Enterprise request to depend on `zod ^4.6.6` and import from `zod/v3` as a stopgap for GHSA-mrhx-c7xc-m3w5. The reporter (Coolblue) ships `@a2ui/react` + `@a2ui/web_core` in a shared internal chat package. **Underlying need:** transitive advisories fail corporate `npm audit` gates — dependency hygiene is now a precondition for enterprise adoption.
2. [#4262](https://redirect.github.com/a2ui-project/a2ui/issues/4262) — **3 comments.** Auto-filed P1 CI failure (e2e drift on main, commit 1cbef31). Reflects both trunk-stability concern and the project's heavy investment in drift/live-pair testing (cf. #4159).
3. [#4278](https://redirect.github.com/a2ui-project/a2ui/issues/4278) — 2 comments, now closed: `@a2ui/markdown-it@0.2.2` pinned dompurify 3.4.11 with advisories rated up to critical (GHSA-cg2g-xh64-v4q7). Same dependency-hygiene theme; resolved in ~2 days.
4. [#4236](https://redirect.github.com/a2ui-project/a2ui/issues/4236) — 2 comments: `analyzeRegex` accepts `(a?){1000}a{1000}`, hanging the renderer on a 256-character value — a ReDoS-class defect.
5. [#4279](https://redirect.github.com/a2ui-project/a2ui/issues/4279) — 2 comments: basic-catalog styles adopted onto the host document instead of the shadow root, breaking style isolation in Web Component/Streamlit embeds.

Contributor mix in the top-20 PRs is reasonably distributed (gspencergoog ×11; karolkulesza ×2; vojtech, manfredsteyer, roblevintennis, wrenj, jihanurrahman33, abdallahshaban557; dependabot), though core throughput clearly depends on one maintainer.

## 5. Bugs & Stability (ranked by severity)

1. **P1 — [#4262](https://redirect.github.com/a2ui-project/a2ui/issues/4262):** E2E drift failed on main (commit 1cbef31). Trunk pipeline red since Nov 17; no fix PR visible. Highest operational risk, since 39 open PRs converge on main.
2. **P2 — [#4236](https://redirect.github.com/a2ui-project/a2ui/issues/4236):** Renderer hang via catastrophic regex on 256-char input. The Swift-side fix landed today ([#4310](https://redirect.github.com/a2ui-project/a2ui/pull/4310)), but the issue is tagged `lang: typescript` — the TS `analyzeRegex`/`validateRegex` path still needs an equivalent guard.
3. **P2 — [#4279](https://redirect.github.com/a2ui-project/a2ui/issues/4279):** Stylesheet adopted onto document, breaking shadow DOM isolation (Streamlit, Web Components). Community fix PR [#4286](https://redirect.github.com/a2ui-project/a2ui/pull/4286) is open, awaiting review.
4. **[#4314](https://redirect.github.com/a2ui-project/a2ui/issues/4314):** Python core `Catalog.validation_schema` deep-copies the cached schema on every read — validation cost scales with components × catalog size. Maintainer fix [#4326](https://redirect.github.com/a2ui-project/a2ui/pull/4326) opened within ~1 day.
5. **Resolved in window:** #4278 (dompurify critical advisory pin), #4256 (Swift silently drops two-way binding writes the data model rejects), #4259 (Swift `Icon.svgPath` ignores SVG arc commands, breaking circular icons).

**Read:** Closure velocity is strong (4 issues + 3 visible fix/docs PRs closed in 24h; several filed-and-fixed within a week), but main-branch CI health is the outstanding stability gap.

## 6. Feature Requests & Roadmap Signals

- **Dependency/security stopgaps** ([#4192](https://redirect.github.com/a2ui-project/a2ui/issues/4192)): the zod `^4.6.6` + `zod/v3` request is the top open feature ask. With dompurify (#4278) resolved and a 16-package dependabot group in flight (#4319), a dependency-hygiene patch is the most predictable next-version content.
- **Decision-model stack** ([#4320](https://redirect.github.com/a2ui-project/a2ui/pull/4320)–[#4323](https://redirect.github.com/a2ui-project/a2ui/pull/4323), [#4325](https://redirect.github.com/a2ui-project/a2ui/pull/4325)): the clearest directional signal — deterministic, **zero-LLM** UI assembly layered on the agent stack (kernel → cascade router → tool-pointer binder → submit-time predicates → playground). Expect iteration behind `a2ui.inference_formats.experimental.*` and the optional `[decision]` extra before stabilization.
- **Release engineering + v1.0 conformance** ([#4215](https://redirect.github.com/a2ui-project/a2ui/pull/4215), [#4242](https://redirect.github.com/a2ui-project/a2ui/pull/4242)): changelog automation and version-tagged conformance suites strongly suggest the first automated tagged release and a v1.0 conformance line are being staged.
- **v1.0 spec alignment:** [#4296](https://redirect.github.com/a2ui-project/a2ui/pull/4296) (drop nesting limit of 5), [#4184](https://redirect.github.com/a2ui-project/a2ui/pull/4184) (schema composition in Express), [#4285](https://redirect.github.com/a2ui-project/a2ui/pull/4285) (Draft 2020-12 parity), [#4313](https://redirect.github.com/a2ui-project/a2ui/pull/4313) (binding docs).
- **Prediction:** next version ≈ security-and-fixes patch (zod stopgap, Swift fixes, Python perf fix, dependency bumps), followed by experimental decision-model packages on the v1.0 line.

## 7. User Feedback Summary

- **Enterprise gating on dependency hygiene:** a Coolblue team uses `@a2ui/react`/`@a2ui/web_core` in a shared internal chat package; published advisories in transitive deps (zod, dompurify) block corporate rollout. Fast advisory response is becoming table stakes.
- **Diverse embedding targets:** users mount renderers inside shadow roots (Streamlit, Web Components) and expect style isolation (#4279) — A2UI is being embedded, not just used standalone.
- **Swift SDK quality bar:** users expect errors to surface when the data model rejects two-way binding writes (#4256) and full SVG path support in icons (#4259). Silent failure is the biggest trust-eroder reported.
- **Performance at scale:** #4314 shows real workloads with many components per catalog, where per-read deep copies made validation cost prohibitive.
- **Ecosystem formation:** Manfred Steyer / Angular Architects requesting a Get Help directory listing (#4228) signals a commercial consulting ecosystem forming around A2UI.
- **Overall tone:** detailed, reproducible reports; rapid maintainer turnaround (issue #4314 → fix PR #4326 in ~1 day; #4236 → Swift fix #4310 in ~5 days) indicates an engaged, well-served contributor base.

## 8. Backlog Watch

- [#3842](https://redirect.github.com/a2ui-project/a2ui/issues/3842) — Conformance-test skip audit across all 15 SDKs (skips, `xfail`, `withKnownIssue`, silent assertion bypasses). Open 18 days (since Nov 2), 1 comment, still needs-triage. A high-value remediation epic that needs a maintainer plan and milestone mapping.
- [#4262](https://redirect.github.com/a2ui-project/a2ui/issues/4262) — P1 CI failure on main, open 3 days; should be top priority given 39 open PRs target main.
- [#4192](https://redirect.github.com/a2ui-project/a2ui/issues/4192) — 8 days open with 4 comments; security-adjacent P2 needing resolution or a communicated timeline.
- **Review queue strain:** 39 open PRs vs. 9 closed in-window. Community fixes awaiting review: [#4286](https://redirect.github.com/a2ui-project/a2ui/pull/4286) (shadow DOM), [#4285](https://redirect.github.com/a2ui-project/a2ui/pull/4285) (Zod/JSON Schema parity), [#4313](https://redirect.github.com/a2ui-project/a2ui/pull/4313) (docs), [#4242](https://redirect.github.com/a2ui-project/a2ui/pull/4242) (conformance versioning); [#4228](https://redirect.github.com/a2ui-project/a2ui/pull/4228) is parked in waiting-for-author-response.
- [#4184](https://redirect.github.com/a2ui-project/a2ui/pull/4184) — complex cross-SDK Express schema-composition fix, open 8 days; high-value but review-heavy.

---

**Health snapshot:** Velocity and responsiveness are excellent (58 items/24h, same-week bug-to-fix cycles, active security response), community contribution is genuinely multi-SDK, and release/v1.0 groundwork is visibly in motion. Risks: single-maintainer throughput concentration, a red main branch (P1 #4262), and a growing review backlog — the project's next challenge is scaling review capacity to match its output.

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI Project Digest — 2026-11-20

**Repo:** [thesysdev/openui](https://github.com/thesysdev/openui) · **Issues (24h):** 0 · **PRs (24h):** 13 (5 open / 8 closed) · **Releases:** 0 · **Active authors:** 5 humans + 2 automation bots

---

## 1. Today's Overview

OpenUI had a development-heavy, issue-silent day: 13 pull requests were updated within the last 24h (5 open, 8 closed) against zero issue activity and no published release. PR numbering (#1544 on Nov 3 → #1678 on Nov 19) implies a recent creation pace of roughly 8 PRs/day, so today's volume of 13 updated PRs with 8 closures is an above-average throughput day. Work clustered into three themes: a "data-aware dashboards" initiative (provenance [#1544](https://redirect.github.com/thesysdev/openui/pull/1544), live data tool calls [#1678](https://redirect.github.com/thesysdev/openui/pull/1678), artifact management [#1677](https://redirect.github.com/thesysdev/openui/pull/1677)), agent-first onboarding via a hosted skill file, and docs/SEO hygiene. The Changesets version PR ([#1668](https://redirect.github.com/thesysdev/openui/pull/1668)) was refreshed today, signaling an npm release is queued but not yet cut. Activity was led by core-team authors (Aditya-thesys, AbhinRustagi, zahlekhan), with bots handling template/version chores and two outside contributors engaging on CI governance.

## 2. Releases

No new releases today. However, the Changesets release PR [#1668](https://redirect.github.com/thesysdev/openui/pull/1668) ("chore: version packages") was updated today — merging it will auto-publish packages to npm, so a release appears imminent (see Backlog Watch).

## 3. Project Progress

**Closed today (8 PRs):**

| PR | Area | Outcome |
|---|---|---|
| [#1665](https://redirect.github.com/thesysdev/openui/pull/1665) | react-ui | Pending loader now scales to fit (viewBox-like behavior, capped at 1.5×) instead of stretching flat or thin depending on container shape |
| [#1673](https://redirect.github.com/thesysdev/openui/pull/1673) | docs site / SEO | IndexNow key served from `INDEXNOW_KEY` env var (committed key file removed); only changed pages submitted |
| [#1664](https://redirect.github.com/thesysdev/openui/pull/1664) | docs / SEO | Legacy openui-lang prompts stub removed; permanent redirect to system-prompts fixes Google "Crawled – currently not indexed" |
| [#1676](https://redirect.github.com/thesysdev/openui/pull/1676) | onboarding | "Setup for agents" prompts now install the OpenUI agent skill (`npx skills add thesysdev/skills`) and ask new vs. existing app |
| [#1672](https://redirect.github.com/thesysdev/openui/pull/1672) | website | Homepage hero button copies a short prompt linking to hosted `/v1/SKILL.md` and `/v2/SKILL.md` |
| [#1674](https://redirect.github.com/thesysdev/openui/pull/1674) | CI / governance | Workflow closes outside PRs opened without a linked issue (supersedes #1633; drops auto-reopen and label overrides) |
| [#1633](https://redirect.github.com/thesysdev/openui/pull/1633) | CI / governance | Earlier iteration of the linked-issue policy; closed in favor of #1674 |
| [#1675](https://redirect.github.com/thesysdev/openui/pull/1675) | test | Outside-fork test PR from first-time contributor FireBird1998; closed unmerged as intended |

**Open and advancing (5 PRs):**

- [#1544](https://redirect.github.com/thesysdev/openui/pull/1544) — Dashboard provenance: `enableProvenance` on `LiveArtifactRenderer`; inspect mode reveals a number's formula, query with call/result rows, cited cell, and filters (`dataSources`, `useDataSources`). Open since Nov 3; updated today.
- [#1678](https://redirect.github.com/thesysdev/openui/pull/1678) — Server SDK dashboard agent: `create()`/`edit()` on `POST /v1/dashboard/chat/completions`; runs the user's data tools mid-generation and returns only new results. Cross-repo coordinated with `thesysdev/muse#672` (spec), `thesysdev/coda#1110`, and `thesysdev/muse#673`.
- [#1677](https://redirect.github.com/thesysdev/openui/pull/1677) — `openui.artifacts` in `@openuidev/server`: list/read/share/manage saved dashboards, org-wide or per-`userId`; stacked on #1659 (sharing).
- [#1668](https://redirect.github.com/thesysdev/openui/pull/1668) — Changesets version PR, updated today; release gate.
- [#1629](https://redirect.github.com/thesysdev/openui/pull/1629) — Bot PR refreshing CLI templates, overlays, and examples to latest `@openuidev/*`; credential-free verification contracts passed.

**Net progress:** the data-aware dashboard storyline is now end-to-end (renderer provenance → server-side tool calling → artifact lifecycle management); contribution governance moved from convention to CI-enforced; agent onboarding became a documented first-class path.

## 4. Community Hot Topics

No issues were updated and comment/reaction counts are unavailable (all listed PRs show 0 👍), so engagement cannot be ranked numerically today. Inferred hotspots:

1. **Contribution governance cluster** — [#1674](https://redirect.github.com/thesysdev/openui/pull/1674) / [#1633](https://redirect.github.com/thesysdev/openui/pull/1633) (vishxrad) and [#1675](https://redirect.github.com/thesysdev/openui/pull/1675) (FireBird1998). Underlying need: outside interest is growing (an external contributor probed the fork→PR flow using Claude Code), and the project needs scalable, predictable contribution rules that don't alienate first-timers. The same-day open→supersede→close cycle shows fast iteration on this.
2. **Dashboard data stack** — [#1678](https://redirect.github.com/thesysdev/openui/pull/1678) and [#1677](https://redirect.github.com/thesysdev/openui/pull/1677) are the substantive technical threads; notably, the roadmap conversation is happening in PRs, not issues, indicating a maintainer-driven feature pipeline at present.
3. **Agent-assisted setup** — [#1676](https://redirect.github.com/thesysdev/openui/pull/1676) / [#1672](https://redirect.github.com/thesysdev/openui/pull/1672) respond to users bootstrapping OpenUI projects via coding agents rather than manual docs.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported via issues today (0 issue events). Fixes closed today, ranked by severity:

1. **Moderate — credential hygiene:** [#1673](https://redirect.github.com/thesysdev/openui/pull/1673) — a docs-site IndexNow key was committed to the repo. Fixed by serving it from the `INDEXNOW_KEY` env var. ⚠️ Residual risk: the old key remains in git history and must be replaced/rotated. Fix landed.
2. **Low — UI rendering:** [#1665](https://redirect.github.com/thesysdev/openui/pull/1665) — pending loader distorted to container aspect ratio; now scale-to-fit and centered. Fix landed.
3. **Low — SEO/docs:** [#1664](https://redirect.github.com/thesysdev/openui/pull/1664) — legacy page invisible to Google Search; permanent redirect added. Fix landed.

No open bug-fix PRs and no unresolved user-reported defects in today's data.

## 6. Feature Requests & Roadmap Signals

- **Imminent release:** merging [#1668](https://redirect.github.com/thesysdev/openui/pull/1668) will publish the next version — likely bundling the loader fix (#1665), hosted SKILL.md onboarding (#1672/#1676), IndexNow hardening (#1673), the docs redirect (#1664), and refreshed templates (#1629).
- **Headline roadmap — "dashboards that use your data":** provenance/inspect mode ([#1544](https://redirect.github.com/thesysdev/openui/pull/1544)), server SDK tool-calling during dashboard construction ([#1678](https://redirect.github.com/thesysdev/openui/pull/1678)), and `openui.artifacts` CRUD ([#1677](https://redirect.github.com/thesysdev/openui/pull/1677)) form one coordinated initiative spanning renderer and server SDK — the probable marquee features of the next feature release.
- **Cross-repo coordination** (#1678 cites muse#672/#673 and coda#1110) suggests synchronized platform-level API changes.
- **Prediction:** #1677's dependency on #1659 (sharing) indicates the artifacts/sharing API surface ships as one coordinated release rather than piecemeal.

## 7. User Feedback Summary

Direct user feedback is absent today (0 issues; no measurable reactions or comments). Indirect signals:

- **Contribution friction/aspiration:** an outside contributor tested the fork→PR flow ([#1675](https://redirect.github.com/thesysdev/openui/pull/1675), authored with Claude Code), while a community member built CI enforcement for contribution rules ([#1674](https://redirect.github.com/thesysdev/openui/pull/1674)) — the community wants to contribute; the project is formalizing how.
- **Docs discoverability pain:** [#1664](https://redirect.github.com/thesysdev/openui/pull/1664) cites Google Search Console's "Crawled – currently not indexed," and [#1673](https://redirect.github.com/thesysdev/openui/pull/1673)'s IndexNow work targets search freshness — real evidence that users/search engines were struggling to reach docs content.
- **Agent-driven workflows:** the onboarding PRs imply users increasingly delegate OpenUI setup to coding agents; even community contributions arrive via AI tooling.
- No end-user satisfaction or dissatisfaction data points exist in today's window.

## 8. Backlog Watch

- **[#1544](https://redirect.github.com/thesysdev/openui/pull/1544) — aging keystone PR:** open since 2026-11-03 (~17 days, the oldest in today's set). Still active (updated today), but as the foundation of the provenance story it needs review/merge attention before #1677/#1678 land, or the dashboard-data release ships fragmented.
- **[#1668](https://redirect.github.com/thesysdev/openui/pull/1668) — release gate:** every merged change since the last version queues behind this Changesets PR; the longer it waits, the larger the release delta.
- **[#1629](https://redirect.github.com/thesysdev/openui/pull/1629) — template refresh (8 days open):** low-risk bot PR; merging keeps new scaffolds on current `@openuidev/*` versions.
- **Dependency chain:** [#1677](https://redirect.github.com/thesysdev/openui/pull/1677) is stacked on #1659 (sharing) — review sequencing is required to avoid stale stacks.
- **Issue-tracker visibility:** with 0 issues updated in 24h, the issue backlog cannot be assessed from today's data. If zero inflow persists, it's worth confirming whether user reporting has shifted to other channels (e.g., Discord) rather than signaling low friction.

---

**Health assessment:** Strong. Above-average PR throughput, disciplined processes (Changesets releases, bot automation, CI-enforced contribution policy), cross-repo platform coordination, and active docs/SEO investment. The only watch items are an aging flagship PR (#1544), a pending release gate (#1668), and an unrotated historical API key flagged in #1673.

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render Project Digest — 2026-11-20

**Repository:** [vercel-labs/json-render](https://github.com/vercel-labs/json-render)
**Data window:** Last 24 hours (2026-11-19 → 2026-11-20)

---

## 1. Today's Overview

Today was a quiet day for json-render: zero issue activity, zero releases, and a single open pull request focused on documentation correctness ([PR #499](https://redirect.github.com/vercel-labs/json-render/pull/499)). No code was merged or closed within the window, so there is no functional change to the library itself. Activity is concentrated entirely on the documentation pipeline — specifically, how docs are converted to Markdown for machine/AI-agent consumption — which is a meaningful signal about how the project's docs are being used. Overall project health appears stable: a steady trickle of small, well-scoped community contributions with no incoming bug reports or stability complaints suggests the core rendering API is in a mature state.

## 2. Releases

No new releases today. No recent release data is available in this window, so there are no version changes, breaking changes, or migration notes to report.

## 3. Project Progress

**No PRs were merged or closed in the last 24 hours.**

One new open PR is pending review:

- **[#499 — fix(docs): preserve fenced code in Markdown responses](https://redirect.github.com/vercel-labs/json-render/pull/499)** (opened 2026-11-19 by **haranishi**)
  - **Problem:** The docs Markdown converter was stripping page-level MDX syntax (e.g., `import` statements) from fenced code examples. For instance, requesting `Accept: text/markdown` on `/docs/api/mcp` yielded a snippet referencing `createMcpApp` without importing it — making the example non-runnable. The same defect affected the explicit `.md` routes and the legacy Markdown routes.
  - **Fix approach:** Preserve fenced code blocks as-is during Markdown conversion so examples remain self-contained.

While this advances documentation quality rather than library functionality, it does fix a real correctness issue on a docs-delivery path that matters for this project's audience (see Section 4).

## 4. Community Hot Topics

The only active item in the window is [PR #499](https://redirect.github.com/vercel-labs/json-render/pull/499), with **0 upvotes and no recorded comments** — engagement is minimal, consistent with a small, surgical docs patch.

**Underlying need analysis:** The interesting signal here is *where* the bug occurs. The docs are served via content negotiation (`Accept: text/markdown`), explicit `.md` routes, and include an `/docs/api/mcp` page — indicating the documentation is explicitly designed to be consumable by **LLM-powered tools and AI agents** (MCP clients, coding assistants, doc-scraping agents). The contributor's use case — retrieving Markdown docs and getting examples that don't compile because imports were stripped — is precisely the failure mode an agent hits when trying to use json-render from its own docs. This reinforces that json-render sits squarely in the AI-agent toolchain, and even its docs infrastructure is agent-facing.

## 5. Bugs & Stability

Ranked by severity (all items from the last 24h):

| Severity | Item | Status |
|---|---|---|
| **Low** (docs-only, no runtime impact) | Markdown-rendered docs strip MDX imports from fenced examples, producing broken/non-runnable snippets on `/docs/api/mcp`, `.md` routes, and legacy Markdown routes — [PR #499](https://redirect.github.com/vercel-labs/json-render/pull/499) | **Fix PR exists (open, awaiting review)** |

- **No runtime bugs, crashes, or regressions were reported today.**
- No open bug issues carried over into this window's activity.

## 6. Feature Requests & Roadmap Signals

No explicit feature requests appeared in the last 24 hours, so version predictions should be treated with caution.

**Inferred signals:**
- Continued investment in **Markdown-first / agent-readable documentation delivery** (text/markdown negotiation, `.md` routes, MCP docs). Expect this docs-fix category to keep recurring in contributions.
- The absence of feature-request activity and presence of only a docs patch suggests the next release (if any) will likely be **maintenance/docs-oriented** rather than feature-driven — though a single quiet day is not sufficient to project a roadmap.

## 7. User Feedback Summary

Only one data point today, but it is instructive:

- **Pain point:** A user consuming the docs via Markdown routes (likely via curl, an editor integration, or an LLM/agent tool) received code examples that referenced APIs (e.g., `createMcpApp`) without the required imports, making them non-copyable and non-runnable.
- **Use case revealed:** Docs-as-Markdown consumption for AI-assisted development — users are feeding json-render's documentation directly into agent workflows.
- **Sentiment:** Neutral-to-positive. The user responded constructively with a fix PR rather than a complaint, which is generally a sign of a healthy, engaged contributor base even at low volume.

## 8. Backlog Watch

- **No long-unanswered Issues or PRs surfaced** in today's data — the issue tracker shows zero activity, and the only PR ([#499](https://redirect.github.com/vercel-labs/json-render/pull/499)) was created just one day ago (2026-11-19), so nothing is stale.
- **Maintainer action item:** Review and merge [PR #499](https://redirect.github.com/vercel-labs/json-render/pull/499). It is small, scoped, and addresses an accuracy problem on agent-facing docs routes — a quick turnaround here keeps the project's Markdown/MCP documentation pipeline trustworthy for its core AI-agent audience.

---

*Note: This digest reflects only the 24-hour activity window provided. Days with zero issue activity and a single PR are low-signal; trends should be confirmed against a multi-week baseline before drawing conclusions about project trajectory.*

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit Project Digest — 2026-11-20

## 1. Today's Overview

CopilotKit shows **high engineering throughput but a documentation-and-examples-heavy cycle**: 47 PRs were updated in the last 24h (32 open, 15 merged/closed), while issue inflow remained low at just 2 open issues with 0 closures. The dominant theme is a massive stacked docs overhaul by `tylerslaton` (13+ interdependent PRs auditing all 1,028 documentation pages), alongside a new A2UI canvas demo showcase and continued Omnara integration hardening. No releases were cut today, so none of the in-flight runtime fixes (CORS security, gpt-6 reasoning, react-core agent-run timing) have shipped to users yet. Overall project health appears strong — activity is elevated and PRs are being actively iterated — but the two live bugs, one of them a security-relevant CORS flaw open for ~3.5 weeks, are the main stability concern.

## 2. Releases

No new releases in this period. None of the open fixes (#8363, #7697) or the security-relevant issue #8025 have landed in a shipped version.

## 3. Project Progress

**Merged/closed today (15 total; highlights):**

- **[#8504](https://redirect.github.com/CopilotKit/CopilotKit/pull/8504) — feat(examples): a live A2UI canvas, drawn by Express or Antigravity.** A new flagship demo: an A2UI canvas rendered live by an agent, demonstrated with Gemini 3.8 Flash via the Express path in an uncut 58-second run. Follow-up [#8505](https://redirect.github.com/CopilotKit/CopilotKit/pull/8505) (open) points the README at the custom domain `a2ui-canvas.copilotkit.ai` on Railway.
- **[#8509](https://redirect.github.com/CopilotKit/CopilotKit/pull/8509) — fix(examples): keep the A2UI canvas side by side on foldables.** Responsive fix stacking chat/canvas below 740 CSS px (verified against Pixel 10 Pro Fold viewports).

**Advancing while open:**

- **Docs stack (Parts 1–9)** by `tylerslaton`: [#8432](https://redirect.github.com/CopilotKit/CopilotKit/pull/8432) (search ranking), [#8433](https://redirect.github.com/CopilotKit/CopilotKit/pull/8433) (SEO: 24 pages titled just "Quickstart" fixed), [#8434](https://redirect.github.com/CopilotKit/CopilotKit/pull/8434) (Ask AI guard bypass fixes + cost bounding), [#8435](https://redirect.github.com/CopilotKit/CopilotKit/pull/8435) (agent-facing markdown/deploy guides), [#8436](https://redirect.github.com/CopilotKit/CopilotKit/pull/8436), [#8437](https://redirect.github.com/CopilotKit/CopilotKit/pull/8437), [#8438](https://redirect.github.com/CopilotKit/CopilotKit/pull/8438) (API reference sync), [#8440](https://redirect.github.com/CopilotKit/CopilotKit/pull/8440) (all 2,704 unique code blocks validated against installed packages), [#8451](https://redirect.github.com/CopilotKit/CopilotKit/pull/8451) (single-voice prose pass), plus preview-only [#8483](https://redirect.github.com/CopilotKit/CopilotKit/pull/8483). Notably, #8468 reports that all 431 guide pages were followed end-to-end with a mock LLM + Playwright.
- **[#8486](https://redirect.github.com/CopilotKit/CopilotKit/pull/8486)** adds real per-framework quickstarts for Vue, Angular, React Native, and React SPA — closing a gap where framework selection changed the URL but not the content.
- **Omnara showcase hardening:** [#8459](https://redirect.github.com/CopilotKit/CopilotKit/pull/8459) (signed, per-thread visitor credentials to isolate demo sessions) and [#8508](https://redirect.github.com/CopilotKit/CopilotKit/pull/8508) (staging registration, PNI-775).
- **[#8507](https://redirect.github.com/CopilotKit/CopilotKit/pull/8507)** aligns the Mastra read-only context example with the React Native sample.

## 4. Community Hot Topics

PR comment counts are unavailable in today's data, so activity is assessed by cluster size and update recency:

- **Docs stack cluster (~13 PRs, all updated today)** — the single largest conversation. The underlying need: docs drifted from the shipped packages (broken quickstarts, hallucinated-adjacent examples, duplicate page titles harming SEO and search). The maintainer response is unusually rigorous (automated code-block validation, Playwright-verified guides).
- **A2UI canvas cluster (#8504/#8505/#8509)** — signals strong interest in agentic-UI demos, with community contributors (`jerelvelarde`, `contextablemark`) building on top of Gemini 3.8 Flash + Express/Antigravity.
- **Issue [#8025](https://redirect.github.com/CopilotKit/CopilotKit/issues/8025)** (2 comments) — self-hosted runtime users worried about CORS behavior with credentials.
- **Issue [#8491](https://redirect.github.com/CopilotKit/CopilotKit/issues/8491)** (1 comment) — Python/LangGraph SDK users losing state through `CopilotKitMiddleware`.

## 5. Bugs & Stability

Ranked by severity:

| Rank | Issue | Severity | Fix status |
|---|---|---|---|
| 1 | [#8025](https://redirect.github.com/CopilotKit/CopilotKit/issues/8025) — v2 runtime CORS reflects **any** origin when `credentials: true` and no `origin` is set (`fetch-cors.ts:34`) | **High (security)** | ⚠️ No fix PR visible; open since 2026-10-27 |
| 2 | [#8491](https://redirect.github.com/CopilotKit/CopilotKit/issues/8491) — `CopilotKitMiddleware.after_model`/`after_agent` replace `state["copilotkit"]` wholesale (no reducer), dropping `context` and `actions` for the rest of the run | **Medium-High** | No fix PR visible; reported 2026-11-19 |
| 3 | [#8363](https://redirect.github.com/CopilotKit/CopilotKit/pull/8363) — `BuiltInAgent` with `gpt-6-*` silently drops `reasoningEffort` (lockfile resolved `@ai-sdk/openai` 3.0.36) | Medium | ✅ Fix PR open: bumps minimum to `^3.0.140` |
| 4 | [#7697](https://redirect.github.com/CopilotKit/CopilotKit/pull/7697) — generic AG-UI agents without the completion-promise extension cause premature send in react-core | Medium | ✅ Fix PR open (since 2026-10-08, includes regression tests) |

Related hardening in-flight: [#8434](https://redirect.github.com/CopilotKit/CopilotKit/pull/8434) closes Ask AI guard bypasses (single-route mode accepts `body` as a JSON string, bypassing the `body.messages`/`context`/`tools` checks) and bounds endpoint costs — a real, if docs-scoped, security fix.

## 6. Feature Requests & Roadmap Signals

- **A2UI (Agent-to-UI) investment**: the live canvas demo with Express *and* Antigravity paths suggests A2UI + generative UI is a strategic direction; expect more polished demos and possibly framework-level support.
- **Multi-framework parity**: [#8486](https://redirect.github.com/CopilotKit/CopilotKit/pull/8486)'s Vue/Angular/React Native quickstarts signal a deliberate push beyond React.
- **Omnara integration maturing** (isolation + staging registration) points toward production-grade hosted showcases.
- **Model-compatibility upkeep**: gpt-6 reasoning support (#8363) indicates fast tracking of new OpenAI models.
- **Prediction for next release**: the `@ai-sdk/openai` `^3.0.140` bump (#8363) and the react-core agent-run fix (#7697) are the most release-ready code changes; #7697's age (6 weeks) suggests it's waiting on review rather than rework. The docs stack and Omnara work will likely land as a separate site/deploy milestone. A CORS fix for #8025 should be prioritized before the next runtime release.

## 7. User Feedback Summary

- **Self-hosters of the v2 runtime** are the source of the sharpest feedback: the default-CORS-with-credentials behavior in #8025 is a deployment-blocking security concern for anyone exposing the runtime publicly.
- **Python SDK users** on LangGraph report silent data loss (#8491) — `context` and `actions` vanishing mid-run is confusing to debug because the middleware "succeeds" while discarding state.
- **Model adopters** hit a silent-degradation pattern: `gpt-6-*` requests work but ignore `reasoningEffort` without warning (#8363) — users want fail-loud behavior or automatic dependency floors.
- **Non-React developers** have been underserved (quickstart content that didn't actually change per framework), which the docs stack explicitly acknowledges and fixes — a positive satisfaction signal for the maintainers' rigor.
- Overall tone: contributors are engaged and building on the platform (A2UI canvas extensions, showcase fixes), indicating a healthy ecosystem rather than a complaint-driven one.

## 8. Backlog Watch

- **[#8025](https://redirect.github.com/CopilotKit/CopilotKit/issues/8025) (CORS security, open since 2026-10-27, ~3.5 weeks)** — highest priority for maintainer attention given security implications and the absence of a linked fix PR.
- **[#7697](https://redirect.github.com/CopilotKit/CopilotKit/pull/7697) (open since 2026-10-08, ~6 weeks)** — complete fix with regression tests awaiting review; risk of bitrot the longer it sits.
- **[#8363](https://redirect.github.com/CopilotKit/CopilotKit/pull/8363) (open since 2026-11-12)** — small dependency-floor fix, low-risk to merge.
- **Docs stack ordering risk**: the stacked PRs (#8432 → #8451 + preview #8483) have strict merge-order dependencies; any conflict mid-stack could stall the entire 1,028-page overhaul. The "do not merge" preview PR (#8483) is a pragmatic workaround but also a fragile point in the pipeline.

---
*Data basis: GitHub snapshot for 2026-11-20 (2 issues updated, 47 PRs updated, 0 releases). PR comment counts unavailable; activity ranking is inferred from cluster size and update recency.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/linqinghao/agents-radar).*