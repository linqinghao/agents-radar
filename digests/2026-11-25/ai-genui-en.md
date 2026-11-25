# Generative UI Ecosystem Digest 2026-11-25

> Issues: 20 | PRs: 94 | Projects covered: 4 | Generated: 2026-11-25 07:38 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## Cross-Ecosystem Comparison

# Generative UI Ecosystem Cross-Project Report — 2026-11-25

## 1. Ecosystem Overview

The generative UI field is consolidating into three distinct architectural bets: specification-driven interoperability (a2ui, pre-v1.0 spec work), API/product-platform delivery (OpenUI, npm-published dashboard/artifact stack), and application-framework integration (CopilotKit, multi-framework copilot embedding). Across all three active projects, today's engineering effort is dominated not by new rendering capabilities but by **production hardening** — security fixes, auth/ownership, resumability, and timeout management — a clear signal the category is moving from demos to deployment. Generation latency (OpenUI documents 20–40s+ dashboard builds) has emerged as the top product friction, driving investment in streaming build status and trust features like provenance. Meanwhile, all active projects are integrating with external agent runtimes and protocols (AG-UI, LangGraph, MCP Apps) rather than building their own agent layers, while vercel-labs/json-render recorded zero activity — quiet single-purpose library approaches are being outpaced by full-stack platforms.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Key signal |
|---|---|---|---|---|
| **a2ui** | 17 updated (9 open / 8 closed) | 50 updated (40 open / 10 closed) | None | Highest volume; 4:1 open:closed ratio = review backlog |
| **OpenUI** | 1 updated (1 open) | 29 updated (9 open / 20 closed) | **8 npm releases** (4 minor, 4 patch) | Most release-heavy; changesets discipline; same-day fix cycle |
| **CopilotKit** | 2 new (both triaged <24h) | 15 updated (10 open / 5 closed) | None | 5 merged fixes accumulating un-released (patch batch candidate) |
| **json-render** | 0 | 0 | None | No activity in window |

## 3. Shared Feature Directions

- **Security by default** — a2ui: CWE-79 XSS in samples (#2294) with same-day fix PR (#4409); CopilotKit: credentialed CORS origin-reflection fixed (#8493) plus fail-closed auth docs (#8309); OpenUI: conversation ownership/auth in server SDK (#1707). *Need: default-safe postures across samples, runtimes, and SDKs — external users are actively auditing all three.*
- **Server-side maturity & resumability** — a2ui #2104 (unified server-side function RPC, the biggest open v1.0 question); CopilotKit #8561 (`lastSeenEventId` replay for self-hosters); OpenUI #1707 (reading/verifying conversation ownership server-side). *Need: stateful, resumable production runtimes, not just client rendering.*
- **Graceful handling of imperfect model output** — OpenUI #1711 (`excess-args` should warn, not error, when the element still renders); CopilotKit #8562 (blank canvas from model-emitted arg ordering); a2ui #4400 (function results not validated against declared `returnType`). *Need: validation semantics that reflect actual rendering impact and robustness to LLM output variance.*
- **Trust & transparency of generated artifacts** — OpenUI: provenance (#1544), 30s auto-refresh (#1679), unified failure/status line (#1713, "failed builds look fine" gap). *Need: users must see where numbers come from and whether an artifact is stale or broken.*
- **Edge/serverless deployment** — CopilotKit: Cloudflare Workers compat (#8559/#8560, two independent fixes to one root cause) + Agents showcase (#8351); OpenUI: `maxDuration=300` guidance (#1716); a2ui: MCP Apps embed prototypes (#4404–#4407). *Need: serverless timeout headroom and edge-compatible module loading.*
- **Agent-runtime integration** — CopilotKit (AG-UI protocol, LangGraph, AG2, Mastra); OpenUI (`openui.langgraph`); a2ui (Python agent SDK, Dart generator). *Need: interop with external agent ecosystems.*

## 4. Differentiation Analysis

| Dimension | a2ui | OpenUI | CopilotKit |
|---|---|---|---|
| **Core bet** | Interchange spec + multi-language SDKs (TS/Dart/Python) | Vertical product: chat-driven dashboards/live artifacts | App-embedding framework across React/Vue/Angular |
| **Technical approach** | Schema-driven declarative UI, function catalogs, experimental "decision kernel" (UI gating, catalog pruning) | Tool-round generation on `/v1/dashboard/chat/completions`, provenance pipeline | v2 runtime middleware, AG-UI adapters, integration showcases (Teams, Cloudflare, LangGraph) |
| **Target users** | Downstream vendors, interop-focused teams, spec consumers | Developers building analytics products via hosted API surface | Teams adding copilots to existing applications |
| **Stage** | Pre-1.0 spec development, conformance debt across 3+ renderers | Shipping product, semver-clean release cadence | Production framework, integration breadth expansion |

json-render's silence positions it outside this competitive layer entirely — the action has moved to full stacks (runtime + SDK + artifact UX), not standalone JSON-to-UI rendering.

## 5. Community Momentum & Maturity

- **OpenUI** — fastest iteration: 20 of 29 PRs closed and 8 releases in one window, same-day bug fix (#1718), community fix (#1719) filed the same day as the issue it addresses. Caveat: core-team concentrated; external feedback volume is minimal (1 issue).
- **a2ui** — highest raw activity (50 PRs, 17 issues) and broadest participation (maintainers, community contributors, an external security researcher, four embed prototypes), but **reviewer capacity is the explicit bottleneck** (40 open vs. 10 closed) with 7–8-month-old adapter bugs (#1023, #1298).
- **CopilotKit** — most balanced and externally diverse: 7+ outside contributors, two independent fixes for the same Workers bug, same-day issue triage. Risk: two PRs open ~a month without review (#7971, #7982).
- **json-render** — no measurable momentum in this window.

**Rapid iteration ranking:** OpenUI > CopilotKit > a2ui (velocity high but throughput-constrained) > json-render.

## 6. Trend Signals

1. **Hardening over features.** Security (XSS, CORS), auth/ownership, and resumability dominate today's merged work across all active projects — the field is being pulled into production whether ready or not.
2. **Latency is the #1 UX enemy.** 20–40s+ generation times are reshaping architecture (streaming status, unified artifact state, 5-minute serverless budgets). Plan for asynchronous generation UX from day one.
3. **Model-output tolerance is a differentiator.** Validation severity semantics (#1711), arg-order robustness (#8562), and contract validation (#4400) show frameworks competing on graceful degradation, not just rendering capability.
4. **Trust features are table stakes.** Provenance, freshness, and visible failure states for generated artifacts are now user expectations, not nice-to-haves.
5. **Review capacity, not contribution supply, is the ecosystem-wide constraint** — visible in a2ui's 4:1 ratio and CopilotKit's month-old PRs. Teams choosing dependencies should weigh maintainer bandwidth, not just star counts.
6. **Interop layering is the strategic map.** Projects integrate agent protocols rather than own them; a2ui's unresolved v1.0 RPC design (#2104, 4 months untriaged) is the bellwether for whether the interchange layer standardizes or fragments.
7. **Multi-renderer support is expensive.** a2ui's cross-renderer drift and CopilotKit's Angular bailouts suggest consolidation around fewer, well-supported framework targets — React remains the default center of gravity despite recurring pushback (a2ui #3204).

**For developers choosing today:** OpenUI for shipping chat-driven analytics fastest, CopilotKit for embedding agents in existing multi-framework apps, a2ui if you're betting on spec-level interop and can tolerate pre-1.0 churn.

---

## Per-Project Reports

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui Project Digest — 2026-11-25

*Repo: [a2ui-project/a2ui](https://github.com/a2ui-project/a2ui) · Data window: last 24h*

---

## 1. Today's Overview

a2ui is in a high-velocity development phase: **50 PRs updated in the last 24h (40 open, 10 merged/closed)** and **17 issues updated (9 open, 8 closed)**, with **no release cut in this window** — work continues on `main` between the v0.9.1 line and the in-flight v1.0 specification. Notable events: a same-day fix PR ([#4409](https://redirect.github.com/a2ui-project/a2ui/pull/4409)) responded to an externally reported XSS vulnerability ([#2294](https://redirect.github.com/a2ui-project/a2ui/issues/2294)); two v0.9.1 schema-conformance fixes ([#3135](https://redirect.github.com/a2ui-project/a2ui/pull/3135), [#3975](https://redirect.github.com/a2ui-project/a2ui/pull/3975)) closed out real interop failures; and an experimental "decision kernel" stack of four PRs ([#4320](https://redirect.github.com/a2ui-project/a2ui/pull/4320), [#4321](https://redirect.github.com/a2ui-project/a2ui/pull/4321), [#4323](https://redirect.github.com/a2ui-project/a2ui/pull/4323), [#4342](https://redirect.github.com/a2ui-project/a2ui/pull/4342)) landed in review. Activity is concentrated: ~12 of the updated PRs come from maintainer @​gspencergoog, and 5 from community contributor @​josemontespg. Health signals are positive on triage hygiene (nearly all items carry labels/status), but the 40-open-vs-10-closed PR ratio indicates an accumulating review backlog.

## 2. Releases

None in this reporting window.

## 3. Project Progress

**Closed PRs (10 merged/closed total; 4 visible in this update set):**
- [#3135](https://redirect.github.com/a2ui-project/a2ui/pull/3135) — Keys v0.9.1 capabilities under `v0.9.1` in spec + Python SDK, fixing the mismatch where the Python agent SDK rejected capabilities sent by v0.9.1 renderers ([#3134](https://redirect.github.com/a2ui-project/a2ui/issues/3134) closed).
- [#3975](https://redirect.github.com/a2ui-project/a2ui/pull/3975) — Gives v0.9.1 schemas their own `$id`s (they previously declared v0.9's, breaking URL-ref validators) ([#3974](https://redirect.github.com/a2ui-project/a2ui/issues/3974) closed).
- [#4394](https://redirect.github.com/a2ui-project/a2ui/pull/4394) — Root README site links + five-stage roadmap refresh following the Astro docs-site migration ([#4393](https://redirect.github.com/a2ui-project/a2ui/issues/4393) closed).
- [#4388](https://redirect.github.com/a2ui-project/a2ui/pull/4388) — Widens `/specification/` CODEOWNERS to include @​yjbanov and @​nan-yu (governance expansion).

**Closed issues (8):** the P1 security-relevant bug [#3774](https://redirect.github.com/a2ui-project/a2ui/issues/3774) (nested `rendererOnly` invocation via `callRendererFunction` arguments), the v0.9.1 spec pair #3134/#3974, Lit renderer bug [#602](https://redirect.github.com/a2ui-project/a2ui/issues/602), inline-catalog error reporting [#3165](https://redirect.github.com/a2ui-project/a2ui/issues/3165), the Zod v4 migration discussion [#1263](https://redirect.github.com/a2ui-project/a2ui/issues/1263), and the "Why React?" framework debate [#3204](https://redirect.github.com/a2ui-project/a2ui/issues/3204).

**In-flight and advancing:** the experimental decision stack (#4320 → #4321 → #4323 → #4342), Dart skill generator [#4217](https://redirect.github.com/a2ui-project/a2ui/pull/4217) (tracking #4376), triage automation [#3981](https://redirect.github.com/a2ui-project/a2ui/pull/3981), Dart `Future`-in-reactive-bindings fix [#4387](https://redirect.github.com/a2ui-project/a2ui/pull/4387), and the same-day XSS fix [#4409](https://redirect.github.com/a2ui-project/a2ui/pull/4409).

## 4. Community Hot Topics

- **[#2160 — Abstract dependency on Zod in web_core](https://redirect.github.com/a2ui-project/a2ui/issues/2160)** (11 comments, 4 👍 — most-reactioned issue; open since Aug 3). web_core pins `zod ^3.25`, which blocks downstream Zod v4 adoption. The related migration discussion [#1263](https://redirect.github.com/a2ui-project/a2ui/issues/1263) just closed and [#1222](https://redirect.github.com/a2ui-project/a2ui/issues/1222) remains open. Underlying need: consumers who vendor renderer subsets want dependency freedom at the package boundary.
- **[#2104 — Server-Side Functions & Unified Function RPC](https://redirect.github.com/a2ui-project/a2ui/issues/2104)** (9 comments; open since Jul 27; component: specification). A design proposal to replace the draft v1.0 `wantResponse`/`actionResponse` with catalog-defined server functions. Still `needs-triage` after ~4 months — the v1.0 RPC surface remains the project's biggest open architecture question.
- **@​a2ui/embed prototype wave** (Nov 24, all marked "do not merge"): [#4404](https://redirect.github.com/a2ui-project/a2ui/pull/4404) (lease/quote redline negotiator), [#4405](https://redirect.github.com/a2ui-project/a2ui/pull/4405) (trip planner), [#4406](https://redirect.github.com/a2ui-project/a2ui/pull/4406) (multi-goal trade-off mixer), [#4407](https://redirect.github.com/a2ui-project/a2ui/pull/4407) (spatial/seating planner), plus docs [#4403](https://redirect.github.com/a2ui-project/a2ui/pull/4403). Strong community appetite for MCP Apps embedding use cases.

## 5. Bugs & Stability

Ranked by severity/impact:

1. **[#2294](https://redirect.github.com/a2ui-project/a2ui/issues/2294)** (P2, OPEN, security) — CWE-79 XSS in the a2a-chat-canvas sample: the default text renderer called `bypassSecurityTrustHtml` on raw remote-agent markdown. **Fix PR exists, opened same day: [#4409](https://redirect.github.com/a2ui-project/a2ui/pull/4409) (still open).**
2. **[#4400](https://redirect.github.com/a2ui-project/a2ui/issues/4400)** (OPEN, filed 2026-11-24) — web_core does not validate function results against the catalog's declared `returnType` (a v1.0 contract-integrity gap). **No fix PR visible yet.**
3. **[#4401](https://redirect.github.com/a2ui-project/a2ui/issues/4401)** (OPEN, new) — Dart core returns `path == null` on nested parser/graph errors, degrading debuggability.
4. **[#1023](https://redirect.github.com/a2ui-project/a2ui/issues/1023)** (P2, OPEN since 2026-03-29) — Lit adapter: interactive components miss `requestUpdate()` after `setData()`, a latent re-render bug ~8 months old.
5. **[#1298](https://redirect.github.com/a2ui-project/a2ui/issues/1298)** (P2, OPEN since 2026-04-28) — three web renderers implement `Image` inconsistently with each other and the spec default `fit`.

**Resolved in-window:** #3774 (P1, the highest-severity item), #3134/#3974 (interop, with merged fixes), #602, #3165. Net stability trend is positive for spec conformance and security responsiveness; one live security fix is pending merge.

## 6. Feature Requests & Roadmap Signals

**User-requested:** Zod abstraction ([#2160](https://redirect.github.com/a2ui-project/a2ui/issues/2160)), unified server-side function RPC ([#2104](https://redirect.github.com/a2ui-project/a2ui/issues/2104)), Dart error field paths ([#4401](https://redirect.github.com/a2ui-project/a2ui/issues/4401)), Zod v4 upgrade timing ([#1222](https://redirect.github.com/a2ui-project/a2ui/issues/1222)), Dart skill generator ([#4217](https://redirect.github.com/a2ui-project/a2ui/pull/4217)).

**Maintainer-driven:** the experimental decision kernel and its consumers (#4320/#4321/#4323/#4342 — single-batch UI gating, catalog pruning, rate-limited submit-time predicates), plus automated triage (#3981).

**Prediction for the next release:** expect a patch bundle containing the v0.9.1 schema/capability fixes (#3135, #3975) and the XSS sample fix (#4409); a v1.0 milestone would plausibly incorporate `returnType` validation (#4400 closes a declared v1.0 gap), the decision-stack modules behind experimental flags, and Zod-decoupling groundwork (momentum signaled by #1263's closure).

## 7. User Feedback Summary

**Pain points:**
- **Dependency coupling** — the loudest recurring theme (#2160, #1263, #1222): downstream vendors pinning renderer subsets cannot plan a Zod v4 migration against `web_core`'s `zod ^3.25`.
- **Cross-renderer drift** — #1298 and #1023 reflect the parity burden of maintaining Lit/Angular/React adapters simultaneously.
- **Framework skepticism** — #3204 ("Why React?") pushed for build-free, standards-based custom elements; closed, but the signal persists.
- **Sample security posture** — #2294 shows external users are actively auditing samples (CWE-classified report).
- **Dart DX** — #4401 asks for actionable error paths rather than null-path failures.

**Positive signals:** same-day maintainer response to the security report; spec bugs reported by downstream integrators fixed within weeks; sustained community contributions (embed prototypes, community renderer [#3313](https://redirect.github.com/a2ui-project/a2ui/pull/3313), triage tooling, SDK generators).

## 8. Backlog Watch

- [#2104](https://redirect.github.com/a2ui-project/a2ui/issues/2104) — 4 months old, `needs-triage`, 9 comments: the v1.0 function/RPC design decision; highest-leverage unresolved item.
- [#1023](https://redirect.github.com/a2ui-project/a2ui/issues/1023) — ~8 months open, `needs review` (Lit adapter re-render bug).
- [#1298](https://redirect.github.com/a2ui-project/a2ui/issues/1298) — ~7 months open, `needs-triage`, spanning lit/angular/react/spec components (conformance debt).
- [#1222](https://redirect.github.com/a2ui-project/a2ui/issues/1222) — ~7 months open, `needs review`; should be resolved alongside #2160's decision.
- [PR #3313](https://redirect.github.com/a2ui-project/a2ui/pull/3313) — `waiting-for-author-response` since 2026-10-19 (community renderer listing).
- [PR #4286](https://redirect.github.com/a2ui-project/a2ui/pull/4286) — `needs review` since 2026-11-18 (shadow DOM style scoping fix for #4279, affects Streamlit/Web Components users).
- [PR #3981](https://redirect.github.com/a2ui-project/a2ui/pull/3981) — triage automation, open 3 weeks; process debt compounding the review queue.

**Operational risk:** 40 open PRs vs. 10 closed in 24h — reviewer capacity, not contributor supply, is the project's current constraint.

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI Project Digest — 2026-11-25

**Repo:** [thesysdev/openui](https://github.com/thesysdev/openui) · **Digest window:** last 24h

---

## 1. Today's Overview

Today was a release-heavy, high-throughput day: 29 PRs saw activity (9 open, 20 closed/merged) against a quiet issue tracker (1 active issue), culminating in **8 npm package releases** published via the changesets pipeline ([#1708](https://redirect.github.com/thesysdev/openui/pull/1708)). The unifying theme is **dashboard/live-artifact maturation** — data provenance for live numbers ([#1544](https://redirect.github.com/thesysdev/openui/pull/1544)), automatic freshness for open artifacts ([#1679](https://redirect.github.com/thesysdev/openui/pull/1679)), and dashboard generation via tool rounds on the `/v1/dashboard/chat/completions` endpoint ([#1678](https://redirect.github.com/thesysdev/openui/pull/1678)). Health indicators are strong: a same-day bug fix cycle ([#1718](https://redirect.github.com/thesysdev/openui/pull/1718)), an external contributor opened a fix for the repo's only active issue within ~2 days of it being filed ([#1719](https://redirect.github.com/thesysdev/openui/pull/1719)), and a large backlog sweep closed a batch of months-old PRs. Contributor activity remains concentrated in the core team (Aditya-thesys, AbhinRustagi, ankit-thesys, rahuldoval, abhithesys), with one community contributor (AyhamJo7) and one community reporter (MacJedi42).

---

## 2. Releases

Eight packages published (all semver-compatible; **no breaking changes declared** — 4 minor, 4 patch):

| Package | Version | Key change |
|---|---|---|
| [@​openuidev/server](https://redirect.github.com/thesysdev/openui/pull/1678) | 0.5.2 (patch) | Dashboards now built on `/v1/dashboard/chat/completions` with tool rounds |
| [@​openuidev/react-ui](https://redirect.github.com/thesysdev/openui/pull/1544) | 0.19.0 (minor) | Live artifact **provenance**: `LiveArtifactRenderer` shows where a live artifact's numbers come from |
| [@​openuidev/react-lang](https://redirect.github.com/thesysdev/openui/pull/1544) | 1.2.0 (minor) | Same provenance feature |
| [@​openuidev/lang-core](https://redirect.github.com/thesysdev/openui/pull/1544) | 1.2.0 (minor) | Same provenance feature |
| [@​openuidev/dashboard-library](https://redirect.github.com/thesysdev/openui/pull/1544) | 1.1.0 (minor) | Same provenance feature |
| [@​openuidev/assistant-ui](https://redirect.github.com/thesysdev/openui/pull/1544) | 0.2.1 (patch) | Same provenance feature |
| [@​openuidev/react-headless](https://redirect.github.com/thesysdev/openui/pull/1679) | 0.19.0 (patch) | Open artifacts stay current: renderer re-checks every 30s while open |
| [@​openuidev/browser-bundle](https://github.com/thesysdev/openui) | 0.2.3 (patch) | Dependency refresh |

**Migration/deployment notes:**
- Dashboard generation now runs model tool rounds and takes **~20–40+ seconds**; the reference example sets `export const maxDuration = 300` on dashboard routes ([#1716](https://redirect.github.com/thesysdev/openui/pull/1716)). Serverless deployments (Vercel et al.) should verify function timeout headroom.
- New API surface to review: `maxToolRounds` and `reasoningEffort` (documented in [#1712](https://redirect.github.com/thesysdev/openui/pull/1712), which was deliberately held until this release hit npm — both docs and example PRs are now unblocked).
- Consumers of `useArtifactList` and dashboard renderers should pick up the minor bumps to get provenance display and 30s auto-refresh.

---

## 3. Project Progress

**Shipped/closed today:**
- **Release train merged:** [#1708](https://redirect.github.com/thesysdev/openui/pull/1708) (changesets bot) → the 8 releases above.
- **[#1718](https://redirect.github.com/thesysdev/openui/pull/1718)** (ankit-thesys) — Fixed same day it opened: a chart's screen-reader data table (`SrTable`) applied `visually-hidden` to the `<table>` element itself, which ignores `height: 1px`, causing dashboards with long charts to double-scroll (host page + renderer content box).
- **[#1692](https://redirect.github.com/thesysdev/openui/pull/1692)** (rahuldoval) — Docs: animated "Share and edit" and "See the sources" cards leading the Dashboards API page (aligns with the provenance release).
- **[#1601](https://redirect.github.com/thesysdev/openui/pull/1601)** / **[#1595](https://redirect.github.com/thesysdev/openui/pull/1595)** — UI/examples fixes updated to closed today: artifact-list reshuffle during `refresh()` and dashboard card/panel state desync.

**Backlog sweep:** A notable batch of older PRs was closed/updated today: [#322](https://redirect.github.com/thesysdev/openui/pull/322) (structured outputs, open since March), [#812](https://redirect.github.com/thesysdev/openui/pull/812) (background threads), [#790](https://redirect.github.com/thesysdev/openui/pull/790) (`updateMessage` on ThreadStorage), [#850](https://redirect.github.com/thesysdev/openui/pull/850)/[#856](https://redirect.github.com/thesysdev/openui/pull/856) (July), [#1048](https://redirect.github.com/thesysdev/openui/pull/1048)/[#1049](https://redirect.github.com/thesysdev/openui/pull/1049)/[#1052](https://redirect.github.com/thesysdev/openui/pull/1052) (Aug), [#1260](https://redirect.github.com/thesysdev/openui/pull/1260) (Sep). The data doesn't distinguish merged vs. stale-closed; several describe features already observable in the product (background threads, chat-completions templates), suggesting supersession/cleanup.

**In flight:** [#1707](https://redirect.github.com/thesysdev/openui/pull/1707) (server SDK `openui.conversations`), [#1713](https://redirect.github.com/thesysdev/openui/pull/1713) (unified artifact status line), plus the two release-gated follow-ups [#1712](https://redirect.github.com/thesysdev/openui/pull/1712)/[#1716](https://redirect.github.com/thesysdev/openui/pull/1716).

---

## 4. Community Hot Topics

**[Issue #1711](https://redirect.github.com/thesysdev/openui/issues/1711) — `excess-args` error severity in lang-core** (MacJedi42, 0 comments, 1 👍)
The repo's only active issue, and the hottest thread in practice. When a component is called with more args than its signature (e.g., `Table([...], null)`), `excess-args` is reported as a plain error with no `severity`, even though the extras are dropped and the element renders fully — contradicting `ValidationError`'s own doc semantics ("warning" when the program still renders). The message also fails to say *what* was dropped.
**Underlying need:** Hosts embedding lang-core surface validation errors directly to end users, so error-vs-warning taxonomy directly shapes perceived reliability. The reporter is asking for **graceful-degradation semantics and actionable messages** — a DX-correctness concern, not a crash. A community fix landed the same day the issue trended: **[PR #1719](https://redirect.github.com/thesysdev/openui/pull/1719)** (AyhamJo7) proposes warning-instead-of-error for dropped null args.

**[PR #1707](https://redirect.github.com/thesysdev/openui/pull/1707) — `openui.conversations` server SDK API** (AbhinRustagi, open, updated today)
The most substantive open PR. The server SDK can *store* chat history but can't *read* a conversation or verify it belongs to the signed-in user, so demos mint a frontend token every turn just to read the visitor's thread.
**Underlying need:** First-class conversation ownership/auth in the server SDK — a security and production-readiness signal from the maintainers' own dogfooding.

---

## 5. Bugs & Stability

Ranked by severity (none are runtime crashes; all are correctness/DX):

1. **[Issue #1711](https://redirect.github.com/thesysdev/openui/issues/1711)** — *Medium (DX/behavioral):* `excess-args` reported as hard error when the element still renders fully; dropped args not reported. **Fix exists:** [PR #1719](https://redirect.github.com/thesysdev/openui/pull/1719) (open, community-contributed, filed 2026-11-25).
2. **[PR #1718](https://redirect.github.com/thesysdev/openui/pull/1718)** — *Low (a11y/layout), FIXED same-day:* screen-reader table under charts caused double scrolling in dashboards with long charts. Closed 2026-11-24.
3. **[PR #1713](https://redirect.github.com/thesysdev/openui/pull/1713)** (open) — *Low (UX correctness), in progress:* while a dashboard builds, card/bar/skeleton each showed different status, and a **failed dashboard still looked fine from the chat**. Fix (unified status line + card errors) is open and building on merged #1709.
4. **[PR #1601](https://redirect.github.com/thesysdev/openui/pull/1601)** — *Low, fixed:* `useArtifactList` momentarily reshuffled/emptied during `refresh()`, visibly reordering pinned lists.
5. **[PR #1595](https://redirect.github.com/thesysdev/openui/pull/1595)** — *Low (examples), fixed:* dashboard card claimed "Live" while the panel was still "Generating" or had failed.

---

## 6. Feature Requests & Roadmap Signals

Likely to land next, based on open PRs and release sequencing:

- **`openui.conversations` + `openui.chat` + `openui.langgraph`** ([#1707](https://redirect.github.com/thesysdev/openui/pull/1707)) — reading conversations with user-ownership checks; expect a server SDK minor (0.6.0) as the next notable release.
- **Unified artifact status line with named build steps and card errors** ([#1713](https://redirect.github.com/thesysdev/openui/pull/1713)) — react-ui follow-up, addresses the "failed builds look fine" gap exposed by longer tool-round generation.
- **Imminent gated merges:** dashboards docs for `maxToolRounds`/`reasoningEffort`/streaming the build ([#1712](https://redirect.github.com/thesysdev/openui/pull/1712)) and the updated `assistant-ui-dashboards` example with `maxDuration = 300` ([#1716](https://redirect.github.com/thesysdev/openui/pull/1716)) — both were held only until today's release reached npm, so expect them to merge within days.
- **Validation severity fix** ([#1719](https://redirect.github.com/thesysdev/openui/pull/1719)) — likely a `lang-core` patch in the next changeset batch if maintainers approve the "warn on dropped null args" behavior.
- **Watch signal:** the closure of the 8-month-old structured-outputs PR ([#322](https://redirect.github.com/thesysdev/openui/pull/322), `@openuidev/structured-output` with Zod helpers) — if shipped/superseded, structured outputs may reappear as published packages or a newer implementation.

---

## 7. User Feedback Summary

Direct user feedback volume is low (1 issue, 1 👍, 0 comments), but signal density is high:

- **Pain point — validation semantics:** The single user report ([#1711](https://redirect.github.com/thesysdev/openui/issues/1711)) comes from a host integrating lang-core who surfaces errors to end users; a hard error under a fully-rendered element undermines trust in the framework. Users want error levels to reflect actual rendering impact and messages that name what was discarded.
- **Pain point — dashboard latency:** PR descriptions quantify generation at **20–40+ seconds** with tool rounds, requiring 5-minute serverless timeouts and streaming build status ([#1712](https://redirect.github.com/thesysdev/openui/pull/1712), [#1716](https://redirect.github.com/thesysdev/openui/pull/1716)). Long builds are clearly the top product friction driving current engineering effort.
- **Pain point — trust/transparency:** Provenance ("see the sources"), auto-refresh, and share/edit collaboration ([#1544](https://redirect.github.com/thesysdev/openui/pull/1544), [#1679](https://redirect.github.com/thesysdev/openui/pull/1679), [#1692](https://redirect.github.com/thesysdev/openui/pull/1692)) indicate users questioned *where live numbers came from* and *whether open artifacts were stale*.
- **Sentiment:** Overall positive — steady release cadence, same-day fixes, responsive community loop. Dissatisfaction clusters around strict validation ergonomics and generation wait times rather than crashes or regressions.

---

## 8. Backlog Watch

| Item | Age / Status | Why it needs attention |
|---|---|---|
| [PR #1707](https://redirect.github.com/thesysdev/openui/pull/1707) | Open since 11-23, active today | High-value server SDK API (conversations ownership); large surface area, needs review to unblock demos that mint tokens per turn |
| [PR #1719](https://redirect.github.com/thesysdev/openui/pull/1719) | Opened today | Community fix for the repo's only active bug; fast maintainer triage would reinforce the healthy external-contribution loop |
| [PR #1712](https://redirect.github.com/thesysdev/openui/pull/1712) / [PR #1716](https://redirect.github.com/thesysdev/openui/pull/1716) | Gated on npm publish (now satisfied) | Should merge promptly or docs/examples drift from the released SDK |
| [PR #1629](https://redirect.github.com/thesysdev/openui/pull/1629) | Bot PR open since 11-12 | Template/overlay dependency refresh, verification contracts already passed; 13 days open is long for an automation PR |
| [PR #322](https://redirect.github.com/thesysdev/openui/pull/322) | Closed today after 8 months | Disposition unclear (merged vs. superseded); users tracking structured outputs would benefit from a maintainer note on where the capability now lives |

---

*Data basis: 1 issue updated (1 open), 29 PRs updated (9 open / 20 closed-merged), 8 releases. GitHub does not distinguish merged vs. stale-closed in this dataset; closures are reported as-is.*

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit Project Digest — 2026-11-25

## 1. Today's Overview

CopilotKit shows **healthy, PR-driven momentum** with 15 PRs updated in the last 24h (10 open, 5 closed/merged) against a light issue inflow of 2 new bug/feature reports, and **no releases published**. The day's activity clusters into four clear themes: (1) **Cloudflare Workers/edge-runtime compatibility**, with two independent fix PRs (#8559, #8560) arriving the same day on top of a landed Cloudflare Agents showcase (#8351); (2) a large **7-PR docs overhaul stack** from maintainer tylerslaton; (3) **security hardening** (credentialed CORS fix #8493 landed); and (4) framework-compatibility fixes (Next.js 16, Angular). External contributor participation is strong — egg119, mme, laoyyu, 0xArx, Kelpy2004, shteynu, and devbymak all have active PRs — and both new issues received comments within ~24h, indicating responsive triage. The main health concern is a **review bottleneck on long-lived PRs** (two PRs open since late October).

## 2. Releases

No new releases today. Notably, the 5 closed fixes (CORS security #8493, drag-and-drop #8473, Teams image sizing #8340, and Cloudflare showcase work #8351/#8563) are accumulating on the default branch un-released — a patch-level release candidate batch.

## 3. Project Progress

**5 PRs closed/merged today:**

- [#8351](https://redirect.github.com/CopilotKit/CopilotKit/pull/8351) — **Cloudflare Agents showcase integration** (mme). Major integration milestone: `showcase/integrations/cloudflare-agents` running on `@ag-ui/cloudflare-agents` 0.1.0 from npm (adapter from `ag-ui-protocol/ag-ui#3365`), with agents in a Cloudflare Worker via `wrangler dev`.
- [#8563](https://redirect.github.com/CopilotKit/CopilotKit/pull/8563) — Added the missing D4 chat aimock fixture for the new cloudflare-agents showcase (mme), completing the probe suite for #8351.
- [#8493](https://redirect.github.com/CopilotKit/CopilotKernel/pull/8493) ([correct link](https://redirect.github.com/CopilotKit/CopilotKit/pull/8493)) — **Security fix**: credentialed CORS now requires an explicit `origin`, closing the origin-reflection gap from [#8025](https://redirect.github.com/CopilotKit/CopilotKit/issues/8025). Previously `cors: { credentials: true }` without `origin` reflected every requesting origin — a credential-leak vector.
- [#8473](https://redirect.github.com/CopilotKit/CopilotKit/pull/8473) — `useAttachments` (react-core, vue) no longer claims every drag over the chat; drop zone opens only for file-carrying drags.
- [#8340](https://redirect.github.com/CopilotKit/CopilotKit/pull/8340) — Teams channel: `<Image size>` (`small|medium|large`) now maps to Adaptive Card `Image.size` instead of hard-coded `Auto`. Fixes [#8306](https://redirect.github.com/CopilotKit/CopilotKit/issues/8306).

**Advanced (still open):** the docs stack continues moving ([#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309) Python quickstart security/dependency fixes, [#8432](https://redirect.github.com/CopilotKit/CopilotKit/pull/8432) search ranking, [#8483](https://redirect.github.com/CopilotKit/CopilotKit/pull/8483) full-stack preview, [#8564](https://redirect.github.com/CopilotKit/CopilotKit/pull/8564) AG2 context-tool example), and two fresh Cloudflare Workers compatibility PRs ([#8559](https://redirect.github.com/CopilotKit/CopilotKit/pull/8559), [#8560](https://redirect.github.com/CopilotKit/CopilotKit/pull/8560)) landed for review.

## 4. Community Hot Topics

- **[#8562](https://redirect.github.com/CopilotKit/CopilotKit/issues/8562)** — Open Generative UI canvas wiped blank when the model emits `initialHeight` after `html`/`css` in `generateSandboxedUi` args. The v2 runtime middleware ([`open-generative-ui-middleware.ts`](https://github.com/CopilotKit/CopilotKit)) only emits the initializing `ACTIVITY_SNAPSHOT` under certain arg orderings. 1 comment within a day — this touches the flagship "Open Generative UI" surface, where rendering stability is the core UX promise.
- **[#8561](https://redirect.github.com/CopilotKit/CopilotKit/issues/8561)** — Feature request: pass `lastSeenEventId` from `/connect` through to `AgentRunner.connect`. On self-hosted runtimes, `parseConnectRequest` already reads the client's `lastSeenEventId` but the handler doesn't forward it — breaking event resumability/replay after reconnect. 1 comment. Underlying need: **production-grade streaming reliability for self-hosters**, not just the hosted runtime.
- **Cloudflare Workers cluster (highest-volume topic overall)**: [#8559](https://redirect.github.com/CopilotKit/CopilotKit/pull/8559), [#8560](https://redirect.github.com/CopilotKit/CopilotKit/pull/8560), plus landed [#8351](https://redirect.github.com/CopilotKit/CopilotKit/pull/8351)/[#8563](https://redirect.github.com/CopilotKit/CopilotKit/pull/8563). Two separate contributors hitting the same root cause (`createRequire(import.meta.url)` at module load) signals strong community demand for **edge/serverless deployment as a first-class target**.
- **Docs stack**: [#8432](https://redirect.github.com/CopilotKit/CopilotKit/pull/8432) documents concrete search failures (searching "mastra" outranked Mastra's own docs; HITL and Angular pages unreachable) — a 7-PR investment in docs discoverability.

## 5. Bugs & Stability

Ranked by severity:

1. **High — [#8562](https://redirect.github.com/CopilotKit/CopilotKit/issues/8562)**: Generative UI canvas rendered as a blank white box due to `ACTIVITY_SNAPSHOT` emission ordering in the v2 runtime middleware. **No fix PR yet.** Affects a flagship feature; arg-order-dependent behavior from the model is not something users can reliably control.
2. **High — [#8192](https://redirect.github.com/CopilotKit/CopilotKit/issues/8192) (partial fix open)**: Under Next.js 16 `cacheComponents`, `<CopilotChat>` never fires agent discovery and the send button stays disabled ("unstable value in a Client Component"). Partial fix in [#8557](https://redirect.github.com/CopilotKit/CopilotKit/pull/8557) (SSR-safe fallback thread id), opened today.
3. **High (for edge users) — Cloudflare Workers load failure** ([#8539](https://redirect.github.com/CopilotKit/CopilotKit/issues/8539) referenced): `channels-core` fails to load in Workers due to top-level `createRequire`. **Two fix PRs exist and are open**: [#8559](https://redirect.github.com/CopilotKit/CopilotKit/pull/8559) (0xArx) and [#8560](https://redirect.github.com/CopilotKit/CopilotKit/pull/8560) (laoyyu) — somewhat duplicative; maintainers should pick one.
4. **Security — [#8025](https://redirect.github.com/CopilotKit/CopilotKit/issues/8025) CORS origin reflection with credentials**: **Fixed today** in merged [#8493](https://redirect.github.com/CopilotKit/CopilotKit/pull/8493). Users with `credentials: true` and no explicit `origin` will need to set one after this lands in a release — a behavioral (arguably breaking) change.
5. **Medium — [#7654](https://redirect.github.com/CopilotKit/CopilotKit/issues/7654) Angular optimization bailouts** from CommonJS-only `partial-json`/`semver`: fix PR [#7982](https://redirect.github.com/CopilotKit/CopilotKit/pull/7982) open since Oct 25, unmerged.
6. **Low — resolved today**: Teams image sizing ([#8306](https://redirect.github.com/CopilotKit/CopilotKit/issues/8306) → #8340), over-aggressive drag zone (#8473), missing showcase fixture (#8563).

## 6. Feature Requests & Roadmap Signals

- **[#8561](https://redirect.github.com/CopilotKit/CopilotKit/issues/8561)** (`lastSeenEventId` → `AgentRunner.connect`): small, well-scoped runtime change with clear self-hoster value. **Most likely near-term candidate** — it completes a code path that already parses the value.
- **Edge-runtime support**: with the Cloudflare Agents showcase landed (#8351) and two Workers-compat PRs in review the same day, formal Cloudflare Workers support looks like an active roadmap direction; expect at least one of #8559/#8560 to merge soon.
- **Security-by-default posture**: #8493 (explicit CORS origin) plus #8309 (fail-closed `authorization_scope_resolver`, `single_user=True` local examples) suggest a hardening pass across runtime, docs, and examples.
- **Docs revamp**: the 7-PR stack (#8432 et al.) is close to landing, previewable via #8483.
- **Next-version prediction**: a patch release batching #8493, #8473, #8340 is the natural next ship; Workers compatibility (#8559/#8560) and #8557 likely follow in the subsequent minor.

## 7. User Feedback Summary

- **Pain points**: edge/serverless deployments hit hard blockers (Workers module loading); Next.js 16 early adopters face a broken chat experience under `cacheComponents`; Angular users suffer build optimization bailouts; docs search was failing users badly enough to warrant a 7-PR fix; the Python quickstart shipped a dependency (`azure-identity`) it didn't install and unclear auth-scoping guidance.
- **Use cases surfacing**: authenticated LangGraph agents over FastAPI/AG-UI ([#7971](https://redirect.github.com/CopilotKit/CopilotKit/pull/7971) — user identity inside the agent, conversation access control); Teams bots with richer Adaptive Card media (#8340); self-hosted runtimes needing reconnect/resume (#8561); Cloudflare Worker-hosted agents (#8351).
- **Sentiment**: broadly constructive — contributors are submitting high-quality, well-analyzed fixes rather than complaints, and both new issues were acknowledged within a day. The main dissatisfaction signal is the **review turnaround on long-open PRs**, not the product direction.

## 8. Backlog Watch

| Item | Age | Status | Concern |
|---|---|---|---|
| [#7971](https://redirect.github.com/CopilotKit/CopilotKit/pull/7971) (langgraph-fastapi-auth starter) | ~32 days (since Oct 24) | Open | Complete, valuable auth example; no visible review movement. Needs maintainer triage. |
| [#7982](https://redirect.github.com/CopilotKit/CopilotKit/pull/8982) ([correct: #7982](https://redirect.github.com/CopilotKit/CopilotKit/pull/7982)) | ~31 days (since Oct 25) | Open | Unblocks Angular users (#7654); agreed-upon approach per the linked issue; still unmerged. |
| [#8309](https://github.com/CopilotKit/CopilotKit/CopilotKit/pull/8309) ([correct: #8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309)) | 15 days | Open | Docs quickstart fixes (missing `azure-identity`, security defaults) — user-facing onboarding friction persists while unmerged. |
| [#8432](https://redirect.github.com/CopilotKit/CopilotKit/pull/8432) | 8 days | Open | Base of the 7-PR docs stack; 6 PRs are stacked behind it, so review latency compounds. |
| [#8478](https://redirect.github.com/CopilotKit/CopilotKit/pull/8478) | 7 days | Open | Routine renovate GitHub-Actions bump; low risk, quick win. |

**Suggested maintainer actions**: dedupe #8559/#8560 (Cloudflare Workers), open a fix PR for #8562 (Generative UI snapshot ordering), and prioritize reviews for #7971/#7982 to clear the month-old backlog.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/linqinghao/agents-radar).*