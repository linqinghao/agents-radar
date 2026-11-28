# Generative UI Ecosystem Digest 2026-11-28

> Issues: 6 | PRs: 56 | Projects covered: 4 | Generated: 2026-11-28 06:56 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## Cross-Ecosystem Comparison

# Generative UI Ecosystem Cross-Project Report — 2026-11-28

## 1. Ecosystem Overview

The generative UI space is diverging into three distinct postures: **specification hardening** (a2ui, pre-1.0 and architecture-decision phase), **platform expansion** (OpenUI, shipping channels and server infrastructure), and **consolidation** (CopilotKit, auditing 1,028 docs pages and aligning AG-UI dependencies ahead of a likely release). json-render (Vercel Labs) showed zero activity and is effectively dormant in this window. Across all active projects, work is PR-heavy and maintainer-driven — engineering sprints rather than inbound support surges. Common directional threads are visible: rendering beyond the browser into chat channels, Python SDK parity, agentic/MCP tool access, and stricter validation of model-generated payloads.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status |
|---|---|---|---|
| **a2ui** | 2 active, 0 new | 12 updated (11 open / 1 closed — Angular 22 + TS 6 breaking migration #3406) | **0 releases**; current gen: `@a2ui/agent` 0.2.1, `@a2ui/web_core` 0.16.1, spec v1.0 |
| **OpenUI** | 2 (1 closed — #1732 adopter listing) | 19 updated (14 open / 5 merged) | **1 minor release** — `@openuidev/channels@0.3.0` (Discord Components V2, additive) |
| **json-render** | 0 | 0 | No activity |
| **CopilotKit** | 2 (1 closed — #3748 after 7.5 months) | 25 updated (21 open / 4 closed) | **0 releases**; AG-UI dep alignment (#8593, #8588) signals a staged coordinated release |

## 3. Shared Feature Directions

- **Python SDK parity** — all three active projects. a2ui ships `CatalogModel` + codec in Python (#4432); OpenUI is porting `openui-server` with sync + async clients for PyPI (#1742); CopilotKit is bumping Python `ag-ui-langgraph` to 0.1.0 (#8593). *Need: agent orchestration is increasingly Python-side; TS-only SDKs are no longer sufficient.*
- **Rendering beyond the browser** — OpenUI (Discord Components V2 joining Slack/Teams, shipped in channels 0.3.0) and CopilotKit (iMessage/WhatsApp/SMS/RCS early-access messaging channels, #8580/#8591). *Need: generative UI delivery where users already converse, with in-place message updates.*
- **Agentic tool access / MCP** — OpenUI exposes `create/edit/get_dashboard` tools over MCP (#1736); CopilotKit invests in AG-UI ecosystem integration and React Native sub-agent delegation (#8592); a2ui's decision kernel (#4320) addresses adjacent agent-side semantics. *Need: agents that can build and mutate UIs as first-class tool calls.*
- **Strict validation of model output** — a2ui's validator leniency bug (#4435/#4436) and spec ambiguity causing SDK divergence (#3043/#4438); CopilotKit's Ask AI guard bypass (#8434) and stream-order-dependent rendering failure (#8562). *Need: runtimes and validators that enforce published schemas and tolerate arbitrary model emission ordering.*
- **Documentation as an engineering workstream** — a2ui blueprint governance PRs (#4437–#4439), OpenUI server reference docs (#1750), CopilotKit's 7-PR audit of 1,028 pages with 2,704 code blocks verified. *Need: docs treated as product surface, not afterthought.*

## 4. Differentiation Analysis

- **a2ui** is **spec-first and interoperability-focused**: a decoupled Catalog Document format across spec/TS/Python/proto, zero-dependency core with Zod decoupled, and normative defaults to keep multi-SDK implementations aligned. Target users are SDK implementers and framework vendors; pre-1.0 status permits deliberate breaking changes (repo-wide TS 6.0.3).
- **OpenUI** is **product-velocity and platform-out**: OpenUI Lang as a model-agnostic UI language rendered to multiple channels, plus a hosted/server tier (conversations API, dashboards, MCP tools). Target users are teams building AI chat products who need charts/tables/forms inline across surfaces.
- **CopilotKit** is a **mature, top-down application framework**: full-stack copilot runtime (React/Vue/RN, voice, HITL, messaging GA path) tightly coupled to the AG-UI protocol ecosystem. Target users are app developers embedding agents into existing applications.
- **json-render** occupies a narrower library niche (JSON→UI rendering) with no current community signal.

## 5. Community Momentum & Maturity

- **OpenUI — fastest iteration and healthiest flywheel:** 5 merged PRs plus a release in 24h, and *inbound* adopter requests (Krater, Commonly) trading brand association for ecosystem visibility. The month-old `toMarkdown()` PR (#1502) is the one attrition risk.
- **CopilotKit — largest absolute volume, consolidation phase:** 27 tracker items; activity is maintainer-driven (docs stack, dep alignment). User base is sophisticated — #8562 includes root-cause-level `ACTIVITY_SNAPSHOT` analysis — but the HIGH-severity Open Generative UI bug has no linked fix PR yet.
- **a2ui — high signal, constrained throughput:** 7+ contributors in-window, same-day community fix PRs (#4436), but 11 open PRs (5 ≥1 week old) and #3043 open ~7 weeks make **review latency the single bottleneck**. Maturity is clearly earliest (0.2.x SDKs, spec v1.0).
- **Maturity ladder:** CopilotKit (mature framework, 8k+ issue volume) → OpenUI (scaling platform with adoption traction) → a2ui (pre-1.0 spec phase) → json-render (dormant).

## 6. Trend Signals

- **Channel-agnostic delivery is becoming table stakes.** Discord Components V2, Slack, Teams (OpenUI) and iMessage/WhatsApp/RCS (CopilotKit) show generative UI converging on "render wherever the conversation happens."
- **Python parity is now expected, not optional.** All three active projects moved on Python support in the same 24h window.
- **MCP is emerging as the standard interface for agentic UI manipulation** (OpenUI's dashboard tools), while CopilotKit bets on the AG-UI protocol family — a live standards-competition worth monitoring.
- **Silent leniency is the new correctness frontier.** a2ui #4435 (invalid payloads validating cleanly) and CopilotKit #8434 (guard bypass) show that validators must enforce published schemas from day one; retrofitting strictness risks latent breakage.
- **Model-controlled ordering must be treated as adversarial input.** CopilotKit #8562 (canvas wiped when `initialHeight` streams after `html`/`css`) generalizes: runtimes need deterministic behavior regardless of argument emission order.
- **Docs quality is a competitive moat:** CopilotKit's Playwright-verified audit of 431 guides signals docs reliability being measured like CI.
- **Practical guidance for adopters:** choose **a2ui** for spec-level interoperability and multi-SDK catalogs (accepting pre-1.0 churn, e.g., the TS 6 bump); **OpenUI** for channel-delivered, dashboard-oriented product velocity; **CopilotKit** for full-stack app-embedded agents (watch AG-UI upstream dependency timing, cf. the blocked #8588); treat **json-render** as watch-only until activity resumes.

---

## Per-Project Reports

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui Project Digest — 2026-11-28

**Repository:** [a2ui-project/a2ui](https://github.com/a2ui-project/a2ui) · **Activity window:** last 24h (2 issues, 12 PRs updated, 0 releases)

---

## 1. Today's Overview

a2ui had a specification- and review-heavy day: 14 tracker items updated within 24 hours, dominated by pull requests (11 still open, 1 closed out) with no new issues filed and no release cut. Activity clusters around two threads: a coordinated four-PR architectural initiative by jacobsimionato to replace JSON Schema-based catalogs with a decoupled "Catalog Document" format across the spec, TypeScript, Python, and proto surfaces, and a trio of blueprint-governance docs PRs from gspencergoog that finally write down the missing default-validation semantics for streamed surfaces (resolving long-open [#3043](https://redirect.github.com/a2ui-project/a2ui/issues/3043)). The one PR to leave open state was the breaking Angular 22 / TypeScript 6 renderer migration ([#3406](https://redirect.github.com/a2ui-project/a2ui/pull/3406)). Overall health: strong, disciplined pre-1.0 cadence with 7+ distinct contributors in-window, but an accumulating open-PR queue (several items 1–7 weeks old) makes review throughput the bottleneck to watch.

## 2. Releases

**None.** No GitHub releases were published in the window. Active bug reports still reference the current SDK generation: `@a2ui/agent` 0.2.1, `@a2ui/web_core` 0.16.1, protocol spec v1.0.

## 3. Project Progress

- **Closed out in-window:** [#3406](https://redirect.github.com/a2ui-project/a2ui/pull/3406) `feat(angular)!: upgrade the renderer to Angular 22` (andreascorti) — closes [#3405](https://redirect.github.com/a2ui-project/a2ui/issues/3405). Migrates the Angular renderer to Angular `^22.2.3`; because Angular 22 requires TypeScript 6 and the repo pins a single TS version, `typescript` was bumped to 6.0.3 repo-wide plus three TS 6 follow-ups. Notably **breaking** for downstream TS-version-pinned consumers.
- **Spec ambiguity resolved (pending review):** [#4438](https://redirect.github.com/a2ui-project/a2ui/pull/4438) (gspencergoog) specifies which graph checks run by default for multi-message streamed surfaces in `a2ui_core.blueprint.md`, directly addressing issue [#3043](https://redirect.github.com/a2ui-project/a2ui/issues/3043) (open since Oct 7).
- **Blueprint hygiene:** [#4439](https://redirect.github.com/a2ui-project/a2ui/pull/4439) (Angular renderer codebase blueprint: fixes stale pins and a wrong `@a2ui/web_core` vs `@a2ui/web_co…` import path) and [#4437](https://redirect.github.com/a2ui-project/a2ui/pull/4437) (`a2ui_agent` blueprint: catches up to `agent_renderer_app`, records gaps for `e4e8ee409`, corrects catalog-serialization text).
- **Experimental inference work advanced:** [#4320](https://redirect.github.com/a2ui-project/a2ui/pull/4320) (shared decision kernel, `@macro` placement hints, CI barrel guard) was active on day 8 of its review cycle.
- **Catalog architecture stack proposed:** [#4427](https://redirect.github.com/a2ui-project/a2ui/pull/4427) (spec/blueprints), [#4431](https://redirect.github.com/a2ui-project/a2ui/pull/4431) (TypeScript, zero-dependency catalog model, Zod decoupled from core), [#4432](https://redirect.github.com/a2ui-project/a2ui/pull/4432) (Python `CatalogModel` + codec + `build_catalog`), [#4433](https://redirect.github.com/a2ui-project/a2ui/pull/4433) (proto transport PoC stacked on #4431).

## 4. Community Hot Topics

*Data caveat: engagement counts are low across the board (each issue has 1 comment; PR comment metadata unavailable; all items show 0 👍). "Heat" below is inferred from update traffic, cross-linking, and scope.*

- **The catalog decoupling mega-thread** — [#4427](https://redirect.github.com/a2ui-project/a2ui/pull/4427) / [#4431](https://redirect.github.com/a2ui-project/a2ui/pull/4431) / [#4432](https://redirect.github.com/a2ui-project/a2ui/pull/4432) / [#4433](https://redirect.github.com/a2ui-project/a2ui/pull/4433) (jacobsimionato). Four coordinated PRs spanning spec + both SDK languages + proto in ~48 hours. *Underlying need:* catalog authors today must hand-write heavy JSON Schema Draft 2020-12 plumbing (`component: {const}`, `allOf`-wrapped `Checkable`, `$defs.anyComponent` indirection), and SDK code repeatedly scrapes `$ref`/`allOf`/`oneOf`/`anyOf` trees. The community wants a first-class, ergonomic catalog format and a dependency-light core.
- **Default validation for streamed surfaces** — [#3043](https://redirect.github.com/a2ui-project/a2ui/issues/3043) (andrewkolos) ↔ [#4438](https://redirect.github.com/a2ui-project/a2ui/pull/4438) (gspencergoog). The blueprint admitted two readings and the SDKs **had already diverged** (renderers skip graph checks when no config is supplied). *Underlying need:* unambiguous, testable normative defaults so multi-SDK implementations remain interoperable.
- **Validator strictness on protocol v1.0** — [#4435](https://redirect.github.com/a2ui-project/a2ui/issues/4435) (SebDam2k) ↔ [#4436](https://redirect.github.com/a2ui-project/a2ui/pull/4436) (hualu00). Same-day report + community fix PR: `validatePayload` silently accepts undeclared keys in `@accessibility` and `@checks` rules despite the v1.0 schema forbidding them. *Underlying need:* runtime validators that actually enforce the published schema.

## 5. Bugs & Stability

Ranked by severity:

1. **[#4435](https://redirect.github.com/a2ui-project/a2ui/issues/4435) — v1.0 validation gap: unknown keys accepted in `@accessibility` / `@checks` rules** (reported 2026-11-27, needs-triage; affects `@a2ui/agent` 0.2.1 + `@a2ui/web_core` 0.16.1). *Medium severity:* non-conformant payloads validate silently, which risks latent breakage the moment strictness is enforced or renderers assume schema-conformant input. ✅ Fix PR exists: [#4436](https://redirect.github.com/a2ui-project/a2ui/pull/4436) — open, awaiting review.
2. **[#4057](https://redirect.github.com/a2ui-project/a2ui/pull/4057) — JSON Schema enforcement gaps (`minProperties`, `maxProperties`, typeless `not`)** (rows 1, 2, 6 of [#3998](https://redirect.github.com/a2ui-project/a2ui/issues/3998)). Row 6 *rejects a valid value* — a false-negative correctness bug — plus two unenforced schema constraints. Fix PR: #4057 itself (Anoshor), open since 2026-11-08, assigned-for-triage.
3. **[#4054](https://redirect.github.com/a2ui-project/a2ui/pull/4054) — `DataModel.get<T = any>` type-inference hazard** (Anoshor). In overloaded callee contexts (e.g., Jasmine accessibility matcher augmentations), `T` is inferred from the wrong overload, producing incorrect types in tests. Low runtime severity; DX/test-only. Fix PR: #4054 itself, open since 2026-11-08.
4. **Spec-level defect (no runtime fault): [#3043](https://redirect.github.com/a2ui-project/a2ui/issues/3043)** — blueprint ambiguity that already caused real SDK behavioral divergence; remediation in-flight via docs PR #4438.

⚠️ *Stability watch:* the closed-out [#3406](https://redirect.github.com/a2ui-project/a2ui/pull/3406) introduces a repo-wide TypeScript 6.0.3 bump — a deliberate breaking change; watch for downstream ecosystem fallout (type errors in userland builds and matcher augmentations, cf. #4054).

## 6. Feature Requests & Roadmap Signals

- **Decoupled Catalog Document format** ([#4427](https://redirect.github.com/a2ui-project/a2ui/pull/4427) + TS/Python/proto implementation PRs): the clearest long-term roadmap signal — moving catalogs away from raw JSON Schema documents across every SDK, with a zero-dependency core and optional `.proto` transport + bidirectional codegen ([#4433](https://redirect.github.com/a2ui-project/a2ui/pull/4433)). The stacked, explicitly "Experimental PoC" framing suggests a lengthy spec-review phase before anything ships stable.
- **Decision-model support** ([#4320](https://redirect.github.com/a2ui-project/a2ui/pull/4320)): a shared `a2ui.inference_formats.experimental.decision` kernel, `@macro` parent/child placement hints, and an optional `httpx`-gated `[decision]` extra for the Python agent SDK — a signal toward richer agent-side decision/planning semantics.
- **Next-version predictions:** (a) the small, self-contained strictness fixes [#4436](https://redirect.github.com/a2ui-project/a2ui/pull/4436) and [#4057](https://redirect.github.com/a2ui-project/a2ui/pull/4057) are the most likely candidates for the next `web_core`/`agent` patch (they bring runtime in line with published v1.0 schema); (b) Angular 22 support from #3406 if confirmed merged; (c) the cheap docs consolidations #4437–#4439. The catalog format and decision kernel are almost certainly post-next-release, experimental-track work.

## 7. User Feedback Summary

- **Pain point — silent leniency:** a user ([SebDam2k, #4435](https://redirect.github.com/a2ui-project/a2ui/issues/4435)) hit schema-conformance drift where invalid documents validate cleanly, undermining trust in `validatePayload` as a conformance gate.
- **Pain point — spec ambiguity:** implementers ([andrewkolos, #3043](https://redirect.github.com/a2ui-project/a2ui/issues/3043)) were burned by two valid readings of the blueprint, with renderer and agent SDKs now behaving differently on multi-message streamed surfaces.
- **Pain point — authoring ergonomics and dependency weight:** contributors cite JSON Schema boilerplate in catalog authoring and unwanted Zod coupling in the TypeScript core ([#4427](https://redirect.github.com/a2ui-project/a2ui/pull/4427), [#4431](https://redirect.github.com/a2ui-project/a2ui/pull/4431)) as structural costs.
- **Pain point — TS testing friction:** overloaded-matcher inference issues ([#4054](https://redirect.github.com/a2ui-project/a2ui/pull/4054)) point to rough edges writing typed tests against `web_core`.
- **Sentiment:** constructive and high-signal. Users don't just file bugs — they include schema citations, minimal repros, and same-day fix PRs. Dissatisfaction today is architectural (spec strictness, format weight, coupling), not operational; no complaints about support or release cadence surfaced.

## 8. Backlog Watch

- **[#3043](https://redirect.github.com/a2ui-project/a2ui/issues/3043)** (P2, open since 2026-10-07 — **~7 weeks**): only 1 comment to date; a concrete resolution now exists in [#4438](https://redirect.github.com/a2ui-project/a2ui/pull/4438). Maintainer review is the sole remaining blocker to un-diverging the SDKs.
- **[#4054](https://redirect.github.com/a2ui-project/a2ui/pull/4054) / [#4057](https://redirect.github.com/a2ui-project/a2ui/pull/4057)** (open since 2026-11-08 — 3 weeks): both "assigned-for-triage" with complete fix code; triage completion is overdue. #4057 also closes part of parent issue [#3998](https://redirect.github.com/a2ui-project/a2ui/issues/3998)'s gap table.
- **[#4320](https://redirect.github.com/a2ui-project/a2ui/pull/4320)** (open since 2026-11-20): large surface area (kernel + macros + CI guard), still gaining review traction slowly.
- **[#4427](https://redirect.github.com/a2ui-project/a2ui/pull/4427) / [#4431](https://redirect.github.com/a2ui-project/a2ui/pull/4431) / [#4432](https://redirect.github.com/a2ui-project/a2ui/pull/4432) / [#4433](https://redirect.github.com/a2ui-project/a2ui/pull/4433)** (filed 2026-11-27): fresh but very large; the four-PR stack risks stalling without early maintainer direction, ideally on the spec-level PR (#4427) first since the rest depends on it.
- **[#4436](https://redirect.github.com/a2ui-project/a2ui/pull/4436)**: time-sensitive — it pairs with a just-filed bug report; fast review would prevent invalid-payload drift from compounding in the wild.

**Health check:** 11 open PRs, of which at least 5 are ≥1 week old; zero releases in the window; very low issue inflow (2 active). a2ui reads as a spec-driven, pre-1.0 codebase in an architecture-decision phase — contributor engagement and issue quality are strong, but PR review throughput is the primary constraint on forward momentum.

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI Project Digest — 2026-11-28

## 1. Today's Overview

OpenUI is having a development-heavy day: 19 PRs saw activity in the last 24 hours (14 open, 5 merged/closed) against only 2 issues, indicating a core-team-driven engineering sprint rather than an inbound support surge. A minor release shipped — [`@openuidev/channels@0.3.0`](https://github.com/thesysdev/openui/releases), adding a Discord Components V2 channel. The dominant workstream is a five-PR stacked overhaul of `@openuidev/server` (refactor → tests → conversations → docs → dashboard tools/MCP) by AbhinRustagi, plus a parallel Python port of the server SDK ([#1742](https://redirect.github.com/thesysdev/openui/pull/1742)), signaling a significant platform-expansion phase. Ecosystem health is strong: two third-party adopters (Krater, Commonly) actively sought visibility in ADOPTERS/Demos listings, and both requests were closed or have PRs in flight.

## 2. Releases

**[`@openuidev/channels@0.3.0`](https://redirect.github.com/thesysdev/openui/pull/1748)** (minor, no breaking changes)
- Adds `@openuidev/channels/discord`: renders OpenUI Lang as Discord Components V2 messages, updating in place on interaction — the same model as the existing Slack and Teams channels. No changes to the shared engine.
- Authored by [@​vishxrad](https://github.com/vishxrad) in [#1748](https://redirect.github.com/thesysdev/openui/pull/1748), released via the Changesets automation in [#1752](https://redirect.github.com/thesysdev/openui/pull/1752).
- Migration notes: none needed — purely additive; Discord apps adopting OpenUI Lang can simply install the new subpath export.

## 3. Project Progress

**Merged/closed today:**
- [#1748](https://redirect.github.com/thesysdev/openui/pull/1748) — Discord Components V2 channel (shipped as channels 0.3.0, above).
- [#1744](https://redirect.github.com/thesysdev/openui/pull/1744) — Added [Commonly](https://github.com/Team-Commonly/commonly) to `ADOPTERS.md`, closing [#1732](https://redirect.github.com/thesysdev/openui/issues/1732).
- [#1740](https://redirect.github.com/thesysdev/openui/pull/1740) — Documented that `renderChartPng` requires recharts 2 (recharts 3 renders an empty wrapper).
- [#1741](https://redirect.github.com/thesysdev/openui/pull/1741) — Blog draft: "What it takes to build live AI dashboards yourself."
- [#1752](https://redirect.github.com/thesysdev/openui/pull/1752) — Version-packages release automation.

**Key open PRs advancing (stacked server rework, in merge order):**
1. [#1720](https://redirect.github.com/thesysdev/openui/pull/1720) — Server refactor: feature folders, single build, Autofix on client.
2. [#1745](https://redirect.github.com/thesysdev/openui/pull/1745) — Test coverage for the refactored server package.
3. [#1707](https://redirect.github.com/thesysdev/openui/pull/1707) — `openui.conversations` plus `openui.chat` and `openui.langgraph` adapters (read/verify chat history per user).
4. [#1750](https://redirect.github.com/thesysdev/openui/pull/1750) — Full server reference docs.
5. [#1736](https://redirect.github.com/thesysdev/openui/pull/1736) — Dashboard agent tools (`create/edit/get_dashboard`) as framework tools or over MCP.

**Other notable open work:** [#1742](https://redirect.github.com/thesysdev/openui/pull/1742) (Python `openui-server` with sync + async clients), [#1746](https://redirect.github.com/thesysdev/openui/pull/1746) (cookbooks/Autofix example/`openui create` moved to new server SDK), [#1747](https://redirect.github.com/thesysdev/openui/pull/1747) (react-ui error-surfacing fix), [#1756](https://redirect.github.com/thesysdev/openui/pull/1756) (Open Dashboards card on docs), [#1743](https://redirect.github.com/thesysdev/openui/pull/1743) (OpenDashboards build-guide blog).

## 4. Community Hot Topics

- **[#1754 — List Krater in community projects](https://redirect.github.com/thesysdev/openui/issues/1754)** (2 comments, the most-discussed item today). Krater.ai, an SMB-focused AI platform with chat across 500+ models, uses OpenUI Lang for inline charts/tables/KPIs/carousels/forms, with a companion PR [#1755](https://redirect.github.com/thesysdev/openui/pull/1755) submitted by the same author. *Underlying need:* adopters treat OpenUI as a model-agnostic UI layer and want ecosystem visibility (Demos/ADOPTERS) in exchange — a healthy adoption flywheel signal.
- **[#1732 — Add Commonly to ADOPTERS.md](https://redirect.github.com/thesysdev/openui/issues/1732)** (closed same window via [#1744](https://redirect.github.com/thesysdev/openui/pull/1744)). Commonly, an Apache-2.0 workspace where teams and agents share pods, renders agent cards with `@openuidev/react-lang`. Fast maintainer turnaround (~1 day) on adoption listings.
- **[#1748 — Discord channel](https://redirect.github.com/thesysdev/openui/pull/1748)** generated release-level momentum: merged and published within a day, showing channels is an actively growing rendering surface.

## 5. Bugs & Stability

Ranked by severity (no crashes, data loss, or security issues reported today):

1. **Moderate (UX correctness) — [#1747](https://redirect.github.com/thesysdev/openui/pull/1747):** react-ui cards show "This data didn't load" for failed queries, but the Sources detail misleadingly reports "No rows returned · 0 rows · 0 fields," because the runtime returns the default empty result and records the failure separately. **Fix PR exists and is open** (maintainer-authored).
2. **Moderate limitation (mitigated, not code-fixed) — [#1740](https://redirect.github.com/thesysdev/openui/pull/1740):** `renderChartPng` fails under recharts 3 (its store/effect-based layout never runs in `renderToStaticMarkup`, yielding an empty `recharts-wrapper`). Resolution shipped as documentation pinning recharts 2; a recharts 3 compatibility fix remains open territory.
3. **Low (infra/quality) — [#1728](https://redirect.github.com/thesysdev/openui/pull/1728):** docs lint and format checks fail on `main`, and no CI workflow runs them — meaning breakage goes undetected. Fix + CI workflow are in the open PR.

## 6. Feature Requests & Roadmap Signals

- **[#1502 — `toMarkdown()` in `lang-core`](https://redirect.github.com/thesysdev/openui/pull/1502)** (closes [#681](https://redirect.github.com/thesysdev/openui/issues/681)): serializes parsed OpenUI responses to plain Markdown for logging, storage, or LLM refeeding without a second model call. Open ~1 month — a strong candidate for the next `lang-core` minor.
- **[#1736 — Dashboard agent tools over MCP](https://redirect.github.com/thesysdev/openui/pull/1736):** first-class `create/edit/get_dashboard` tools with owned schemas — signals a deliberate push into agentic/MCP-native workflows.
- **[#1707 — Conversations API](https://redirect.github.com/thesysdev/openui/pull/1707):** reading and authorizing stored conversations; removes hand-written history code for integrators.
- **[#1742 — Python server SDK](https://redirect.github.com/thesysdev/openui/pull/1742):** a PyPI-published `openui-server` mirror of the TS SDK (sync + async clients) — the clearest roadmap signal toward polyglot coverage.

**Prediction:** the next `@openuidev/server` minor release bundles the #1720→#1736 stack (refactor, conversations, dashboard tools, new docs), with `lang-core` shipping `toMarkdown()` shortly after, and `channels` receiving incremental channel additions following Discord's template.

## 7. User Feedback Summary

- **Positive — ecosystem adoption:** Krater (500+ model chat, OpenUI Lang inline blocks) and Commonly (agent pods posting cards via `@openuidev/react-lang`) both proactively request listings — integrators are satisfied enough to associate their brands with OpenUI, and the OpenUI Lang runtime is proving model- and product-agnostic.
- **Pain point — error transparency (#1747):** users see contradictory messages when a query fails ("didn't load" vs. "0 rows returned"), eroding trust in card details; the fix is in review.
- **Pain point — dependency pinning (#1740):** users on recharts 3 get silently empty chart PNGs with no error, only discoverable via docs; a compatibility fix or runtime warning would improve the experience.
- **Use cases confirmed:** hosted dashboards (OpenDashboards), multi-model chat platforms, team-agent workspaces, and multi-channel delivery (Slack, Teams, now Discord).

## 8. Backlog Watch

- **[#1502](https://redirect.github.com/thesysdev/openui/pull/1502)** — open since 2026-10-27 (~1 month), from an external contributor, unblocking long-standing issue #681. Needs a maintainer review; risk of contributor attrition grows.
- **[#1728](https://redirect.github.com/thesysdev/openui/pull/1728)** — open since 2026-11-25; docs CI remains broken on `main` until merged. Low-risk, high-quality-of-life merge.
- **The five-PR server stack** ([#1720](https://redirect.github.com/thesysdev/openui/pull/1720) ← [#1745](https://redirect.github.com/thesysdev/openui/pull/1745) ← [#1707](https://redirect.github.com/thesysdev/openui/pull/1707) ← [#1750](https://redirect.github.com/thesysdev/openui/pull/1750) ← [#1736](https://redirect.github.com/thesysdev/openui/pull/1736)) — a large, well-ordered review burden concentrated on one author; extended open time increases rebase churn across the whole chain.
- **[#1755](https://redirect.github.com/thesysdev/openui/pull/1755) / [#1754](https://redirect.github.com/thesysdev/openui/issues/1754)** — a small docs-only community request pending since 11-27; a quick merge would sustain the positive adopter flywheel seen with Commonly's same-day turnaround.

---

**Health verdict:** Strong. High merged-output velocity, a clean minor release, expanding platform surface (Python, MCP, Discord), and inbound ecosystem adoption requests outweigh a small, actively-fixed bug load. The main watch item is review latency on the big server stack and the month-old `toMarkdown()` PR.

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit Project Digest — 2026-11-28

## 1. Today's Overview
CopilotKit shows **high PR-driven activity** with 25 pull requests updated in the last 24 hours (21 open, 4 closed/merged) against minimal issue flow (2 updated, 1 closed). The dominant thread is an unusually ambitious **documentation overhaul**: maintainer tylerslaton's 7-PR stack auditing all 1,028 docs pages, supplemented by quickstart, voice-consistency, and Ask AI security PRs. Engineering work continues in parallel — AG-UI ecosystem dependency upgrades (Mastra, LangGraph, Cloudflare) and core data-integrity fixes. No release shipped today; the project appears to be in a consolidation phase ahead of a likely version bump. Overall health: **active and maintainer-driven**, with community contributors (egg119, aditigaur27, contextablemark, mme, ataibarkai) engaged alongside the core team.

## 2. Releases
No new releases in the reporting window. Notable signal: multiple PRs (#8593, #8588) align dependencies against upcoming AG-UI versions, suggesting a coordinated release is being staged.

## 3. Project Progress
**Closed today (4 PRs closed/merged; 2 visible in data):**
- [#8481](https://redirect.github.com/CopilotKit/CopilotKit/pull/8481) — `fix(core)`: preserve `TOOL_CALL_RESULT` event metadata when `reconcilePendingResults` restores or promotes tool messages at run end. A data-integrity fix ensuring tool result metadata survives `MESSAGES_SNAPSHOT` reconciliation.
- [#8590](https://redirect.github.com/CopilotKit/CopilotKit/pull/8590) — closed as superseded by the near-identical [#8589](https://redirect.github.com/CopilotKit/CopilotKit/pull/8589) (stack picker cue animation).

**Advancing in-flight:**
- **Docs mega-stack** (open, mostly created 2026-11-17→19): search ranking [#8432](https://redirect.github.com/CopilotKit/CopilotKit/pull/8432), Ask AI hardening [#8434](https://redirect.github.com/CopilotKit/CopilotKit/pull/8434), agent-facing markdown [#8435](https://redirect.github.com/CopilotKit/CopilotKit/pull/8435), content audits [#8436](https://redirect.github.com/CopilotKit/CopilotKit/pull/8436)/[#8437](https://redirect.github.com/CopilotKit/CopilotKit/pull/8437), API reference sync [#8438](https://redirect.github.com/CopilotKit/CopilotKit/pull/8438), code-sample verification [#8440](https://redirect.github.com/CopilotKit/CopilotKit/pull/8440), single-voice prose pass [#8451](https://redirect.github.com/CopilotKit/CopilotKit/pull/8451), plus [#8468](https://redirect.github.com/CopilotKit/CopilotKit/pull/8468), [#8486](https://redirect.github.com/CopilotKit/CopilotKit/pull/8486), and the "do not merge" preview [#8483](https://redirect.github.com/CopilotKit/CopilotKit/pull/8483).
- **AG-UI upgrades**: [#8593](https://redirect.github.com/CopilotKit/CopilotKit/pull/8593) (created today) bumps Mastra to `@ag-ui/mastra` 2.1.0 and Python LangGraph to `ag-ui-langgraph` 0.1.0 / `ag-ui-protocol` 0.1.22; [#8588](https://redirect.github.com/CopilotKit/CopilotKit/pull/8588) migrates the Cloudflare interrupt flow to `run.resumePayload` (draft, blocked upstream).
- **UX fix**: [#8473](https://redirect.github.com/CopilotKit/CopilotKit/pull/8473) restricts the attachment drop zone to drags that actually carry files (react-core + Vue).

## 4. Community Hot Topics
- **[#8562](https://redirect.github.com/CopilotKit/CopilotKit/issues/8562)** (open, 2 comments, created 2026-11-24) — the most active open issue. A well-reproduced report on the Open Generative UI runtime middleware wiping the canvas blank when the model streams `initialHeight` *after* `html`/`css` in `generateSandboxedUi` args. Underlying need: deterministic sandboxed-UI rendering regardless of model argument emission order.
- **[#3748](https://redirect.github.com/CopilotKit/CopilotKit/issues/3748)** (closed today, 3 comments, open since 2026-04-10) — a 7.5-month-old LangGraph feature request for custom stream mode and `ToolMessage.artifact` / `AIMessage.additional` structured-data access via `@ag-ui/langgraph`. Underlying need: LangGraph users want richer structured payloads surfaced to the frontend. The "reserved for students" tag hints at a student-contribution slot; closure rationale (implemented vs. stale) is not evident from the data.
- PR comment counts are unavailable in this dataset, so PR ranking is by recency and stack centrality — the docs stack (10+ open PRs) is the clear focal point of review attention.

## 5. Bugs & Stability (ranked by severity)
1. **HIGH — [#8562](https://redirect.github.com/CopilotKit/CopilotKit/issues/8562)**: user-facing rendering failure in a flagship feature (Open Generative UI). Since argument ordering is model-controlled, users cannot reliably work around it. **No fix PR identified yet.**
2. **HIGH (site security/cost) — [#8434](https://redirect.github.com/CopilotKit/CopilotKit/pull/8434)**: Ask AI guard bypass — in single-route mode, `body` sent as a JSON *string* is parsed after the guard checks `body.messages`/`context`/`tools`, plus unbounded endpoint costs. Affects the docs site, not the SDK. Fix PR exists, open.
3. **MEDIUM — [#8473](https://redirect.github.com/CopilotKit/CopilotKit/pull/8473)**: `useAttachments` calls `preventDefault()`/`stopPropagation()` before checking `dataTransfer.types`, hijacking ordinary text-selection drags. Fix PR exists, open.
4. **MEDIUM (resolved) — [#8481](https://redirect.github.com/CopilotKit/CopilotKit/pull/8481)**: tool result metadata silently dropped during run reconciliation. Fixed and closed today.
5. **LOW — docs quickstarts failing at step 1** (e.g., A2A/AgentKit paths per [#8436](https://redirect.github.com/CopilotKit/CopilotKit/pull/8436)); fixes pending in the open stack.

## 6. Feature Requests & Roadmap Signals
- **AG-UI version alignment** ([#8593](https://redirect.github.com/CopilotKit/CopilotKit/pull/8593), [#8588](https://redirect.github.com/CopilotKit/CopilotKit/pull/8588)) is the strongest release signal: the next version will likely bump `@ag-ui/mastra` (2.1.0), `ag-ui-langgraph` (0.1.0), `ag-ui-protocol` (0.1.22), and — once upstream `ag-ui-protocol/ag-ui#3488` ships — `@ag-ui/cloudflare-agents` 0.2.0 with `run.resumePayload` for Cloudflare HITL.
- **Early-access messaging channels** (iMessage, WhatsApp, SMS, RCS — landed in #8580, copy rewritten in [#8591](https://redirect.github.com/CopilotKit/CopilotKit/pull/8591)) signal a path toward GA of messaging-channel deployment.
- **React Native sub-agent delegation** examples ([#8592](https://redirect.github.com/CopilotKit/CopilotKit/pull/8592)) signal investment in RN multi-agent orchestration.
- **#3748's closure**: if closed-as-implemented, LangGraph artifact support may appear next release; if stale-closed, the need remains a gap to watch.
- **Prediction**: next release bundles AG-UI dependency bumps + the #8481 core fix; a Generative UI fix for #8562 is plausible given its prominence. Docs changes ship via the website, not npm.

## 7. User Feedback Summary
- **Pain points**: (1) Open Generative UI runtime fragility — the #8562 reporter supplied root-cause-level analysis of `ACTIVITY_SNAPSHOT` timing, indicating a sophisticated, invested user base; (2) LangGraph structured-data access (`ToolMessage.artifact`) unmet for ~7.5 months; (3) historically rough docs — search ranking errors ("mastra" surfacing Intelligence pages over Mastra docs), quickstarts failing at step 1, and code samples not matching installed package versions.
- **Use cases observed**: model-generated sandboxed UIs, LangGraph agents with structured artifacts, multi-framework frontends (Vue/Angular/RN), and agents deployed to messaging channels.
- **Sentiment**: critical but constructive. Users file detailed, reproducible reports rather than abandoning the platform; maintainers respond systematically (431 guides verified end-to-end with Playwright + aimock, 2,704 code blocks checked across 1,028 pages) — an unusually rigorous feedback loop.

## 8. Backlog Watch
- **[#8562](https://redirect.github.com/CopilotKit/CopilotKit/issues/8562)** — open since 2026-11-24 with 2 comments and no linked fix PR; needs triage or an assigned fix.
- **[#8588](https://redirect.github.com/CopilotKit/CopilotKit/pull/8588)** — draft blocked on the external `@ag-ui/cloudflare-agents` 0.2.0 release; **warning flag**: CI is green only because the Worker build doesn't typecheck on 0.1.0 (where interrupt demos break). Revisit the moment upstream ships.
- **The 7-PR docs stack** ([#8432](https://redirect.github.com/CopilotKit/CopilotKit/pull/8432)→[#8486](https://redirect.github.com/CopilotKit/CopilotKit/pull/8486), preview [#8483](https://redirect.github.com/CopilotKit/CopilotKit/pull/8483)) — a large review burden; stacked PRs risk rotting as `main` moves, and the preview PR is explicitly "do not merge."
- **[#3748](https://redirect.github.com/CopilotKit/CopilotKit/issues/3748)** — 7.5 months open with only 3 comments before today's closure; if closed stale, the LangGraph artifact/streaming need remains unaddressed and warrants either an upstream tracking issue or a documented workaround.

---
*Data basis: 2 issues and 25 PRs updated in the 24h window ending 2026-11-28; 0 releases. PR comment counts unavailable in source data; 2 of 4 closed PRs visible.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/linqinghao/agents-radar).*