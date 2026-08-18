# Generative UI Ecosystem Digest 2026-08-18

> Issues: 22 | PRs: 88 | Projects covered: 4 | Generated: 2026-08-18 01:21 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## Cross-Ecosystem Comparison

## Cross-Project Comparison Report: Generative UI Ecosystem (2026-08-18)

### 1. Ecosystem Overview
The generative UI landscape is currently characterized by high engineering velocity and a strong pivot toward framework-agnostic, spec-driven architectures. Projects are aggressively expanding their backend orchestration support—particularly around LangGraph and Vercel AI SDK—while racing to decouple rendering logic from specific frontend frameworks. However, this rapid iteration is exposing significant stability and security growing pains; critical vulnerabilities in core processing defaults and streaming decoders indicate the ecosystem is entering a necessary hardening phase. Overall, the shift from React-centric libraries to universal, polyglot UI specifications is the defining trajectory.

### 2. Activity Comparison

| Project | Issues (Active/Closed) | PRs (Updated/Merged) | Release Status |
| :--- | :--- | :--- | :--- |
| **a2ui** | 12 active | 31 updated / 9 merged | No releases |
| **OpenUI** | 0 new/active | 19 updated / 8 merged | No releases |
| **json-render** | 0 active | 1 updated / 0 merged | No releases |
| **CopilotKit** | 10 processed (7 closed) | 37 updated / 15 merged | 1 prerelease |

### 3. Shared Feature Directions

*   **Multi-Framework & Adapter Parity** (*a2ui, json-render, CopilotKit*): There is a universal push to decouple generative UI from React-only ecosystems. a2ui is building universal web components (Svelte, Lit, Angular), json-render is implementing Vue-native named slots, and CopilotKit is upgrading to Angular 22 and converging React Native hooks onto a core renderer.
*   **Backend Orchestration Integration (LangGraph/Vercel AI SDK)** (*OpenUI, CopilotKit*): Both projects are making LangGraph and Vercel AI SDK first-class citizens. OpenUI is adding CLI scaffolding for these backends, while CopilotKit is fixing middleware intercepts and custom thread authorization specifically for self-hosted LangGraph deployments.
*   **Security & Privacy Hardening** (*a2ui, OpenUI, CopilotKit*): Addressing insecure defaults and data privacy is a cross-cutting concern. a2ui faces a cluster of core SDK vulnerabilities (SSRF, XSS); OpenUI shifted telemetry to explicit opt-in; and CopilotKit users are actively requesting prompt injection firewalls.

### 4. Differentiation Analysis

*   **a2ui** differs through its **protocol-first, specification-driven approach**. It focuses heavily on polyglot schema generation (Python/TS) and universal web component standards, acting as an underlying protocol layer rather than an opinionated framework.
*   **OpenUI** differentiates via **developer experience and rendering resilience**. Its focus is on CLI scaffolding, local DevTools iteration, and defensive parsing (repair-and-prune logic for invalid nested schemas), expanding even into non-web environments (Rust TUI).
*   **CopilotKit** stands out as an **opinionated, full-stack agentic framework**. Its technical approach centers on complex state management (context pipelines, HITL, multi-agent channels), targeting developers who want integrated, rather than decoupled, AI orchestration.
*   **json-render** remains a **lightweight, adapter-focused utility**. It lacks opinions on orchestration or specs, focusing solely on the mechanics of mapping JSON schemas to native framework components cleanly.

### 5. Community Momentum & Maturity

*   **Rapidly Iterating / High Momentum**: **CopilotKit** and **a2ui** show the highest PR velocity and community engagement. However, both are paying a complexity tax: CopilotKit has critical open regressions in its context pipeline, and a2ui is fighting a barrage of high-severity security flaws. They are moving fast but require stabilization.
*   **Maturing / Steady Momentum**: **OpenUI** demonstrates a healthy, mature cadence. The lack of new issues combined with proactive privacy/DevX merges suggests the project is successfully iterating on internal quality rather than firefighting. 
*   **Dormant / Niche**: **json-render** is effectively in maintenance mode, with minimal community chatter and solely contributor-driven parity updates.

### 6. Trend Signals

*   **Secure-by-Default is Non-Negotiable**: a2ui’s unpatched SDK defaults (e.g., unbounded regex, unset host restrictions) and OpenUI’s quick reversal on telemetry highlight a strict industry demand: generative UI SDKs must be secure and private out-of-the-box, as developers will not tolerate implicit risk in AI rendering pipelines.
*   **Enterprise Self-Hosting Friction**: CopilotKit’s most active community discussions revolve around decoupling from proprietary clouds (AWS Lambda, custom thread auth). Vendors and OSS projects must provide clear, first-class deployment paths for isolated, self-hosted agentic runtimes.
*   **Streaming Complexity is the Next Bottleneck**: Bugs in OpenUI (LangGraph out-of-order tool loops) and CopilotKit (v1 context pipeline orphaning) reveal that multi-step, multi-agent streaming over HTTP is architecturally fragile. Robust stream decoding and state reconciliation are emerging as the primary technical differentiators.
*   **Death of React-Only UI**: The simultaneous push for Svelte, Lit, Angular, and Vue adapters across three distinct projects signals that generative UI is following the broader web trend toward framework-agnostic primitives, requiring developers to design AI UI contracts that are transport-agnostic.

---

## Per-Project Reports

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui Project Digest (2026-08-18)

## 1. Today's Overview
The a2ui project exhibited high engineering activity over the past 24 hours, with 31 pull requests updated and 9 merged, alongside 12 active issues. The development focus remains heavily anchored on implementing the A2UI v1.0 specification, evidenced by advancing stacked PRs for Python multi-version support and TypeScript Zod schemas/RPC handlers. However, project stability faces a significant challenge today, as a cluster of high-severity security vulnerabilities was reported across core processing, rendering, and SDK modules. Efforts to decouple web components into universal, framework-agnostic implementations also continue across multiple renderer repositories.

## 2. Releases
No new releases were recorded today.

## 3. Project Progress
Merged PRs today advanced foundational architecture for the v1.0 release and developer tooling:
*   **Python Multi-Version Support:** Merged [#2287](https://redirect.github.com/a2ui-project/a2ui/pull/2287) (migrate schema/basic_catalog to versioned v0_9 subpackages) and [#2285](https://redirect.github.com/a2ui-project/a2ui/pull/2285) (add automated A2UI Python schema generation skill), paving the way for Pydantic v1.0 models.
*   **v1.0 Spec Refinement:** Merged [#2238](https://redirect.github.com/a2ui-project/a2ui/pull/2238), refactoring function boundary declarations by renaming `callableFrom` to `allowedCallers` across catalog schemas and protocol documentation.
*   **Developer Experience:** Merged [#2307](https://redirect.github.com/a2ui-project/a2ui/pull/2307), removing a hardcoded URL that blocked the MCP demo from functioning in the MCP inspector.

Active feature work saw major updates to open PRs for v1.0 TypeScript execution stages ([#2257](https://redirect.github.com/a2ui-project/a2ui/pull/2257), [#2264](https://redirect.github.com/a2ui-project/a2ui/pull/2264)), Python v1.0 Pydantic models ([#2308](https://redirect.github.com/a2ui-project/a2ui/pull/2308)), and universal web component support across Angular ([#2273](https://redirect.github.com/a2ui-project/a2ui/pull/2273)), React ([#2283](https://redirect.github.com/a2ui-project/a2ui/pull/2283)), and Lit ([#2311](https://redirect.github.com/a2ui-project/a2ui/pull/2311)).

## 4. Community Hot Topics
The most impactful community activity stems from a comprehensive security audit performed by contributor `ez-lbz`, who opened 8 interconnected vulnerability issues (CWE-200, CWE-400, CWE-20, CWE-601, CWE-918, CWE-79, CWE-1333) targeting core web processing and SDK defaults. 
Additionally, community contributor `ChaliceForAuri` submitted PR [#2290](https://redirect.github.com/a2ui-project/a2ui/pull/2290) to document `svelte-a2ui`, a Svelte 5 community renderer. This indicates growing ecosystem adoption and community interest in framework diversity beyond the officially supported Angular/React/Lit renderers.

## 5. Bugs & Stability
A critical barrage of security-focused bugs was reported today, currently all in an `OPEN` and `needs-triage` state with no associated fix PRs yet. Ranked by severity/exploitability:

1.  **SSRF:** [#2295](https://redirect.github.com/a2ui-project/a2ui/issues/2295) - `FileResolver` performs server-side fetches with `allowed_hosts` unset by default (CWE-918).
2.  **XSS:** [#2294](https://redirect.github.com/a2ui-project/a2ui/issues/2294) - Default text renderer in Angular sample bypasses HTML sanitization (CWE-79).
3.  **Open Redirect:** [#2296](https://redirect.github.com/a2ui-project/a2ui/issues/2296) - Dynamic function properties (`openUrl`) evaluate at bind time without a user gesture (CWE-601).
4.  **Info Exposure:** [#2299](https://redirect.github.com/a2ui-project/a2ui/issues/2299) - v0_8 read path resolves JSON pointers through ordinary-object prototype chains (CWE-200).
5.  **ReDoS:** [#2292](https://redirect.github.com/a2ui-project/a2ui/issues/2292) - Unbounded agent-supplied regex executed on the client main thread (CWE-1333).
6.  **Resource Exhaustion:** [#2298](https://redirect.github.com/a2ui-project/a2ui/issues/2298) - Unbounded resource consumption in web_core processing (CWE-400).
7.  **Input Validation:** [#2297](https://redirect.github.com/a2ui-project/a2ui/issues/2297) - v0.9 message processor skips envelope schema validation; [#2293](https://redirect.github.com/a2ui-project/a2ui/issues/2293) - `createSurface.theme` values stored without validation and consumed as CSS.

## 6. Feature Requests & Roadmap Signals
*   **Python SDK Versioning:** Issue [#2304](https://redirect.github.com/a2ui-project/a2ui/issues/2304) requests that the Python agent library automatically inject the version number when creating an A2UI data part, required for v0.9+ compliance. Given the active Python v1.0 PRs, this is highly likely to be addressed in the next iteration.
*   **CI/CD Efficiency:** Issue [#2232](https://redirect.github.com/a2ui-project/a2ui/issues/2232) requests scoping presubmits to currently changed files rather than running formatters/linters on the whole workspace.
*   **Roadmap Signals:** The convergence of PRs for universal web components ([#2190](https://redirect.github.com/a2ui-project/a2ui/pull/2190), [#2311](https://redirect.github.com/a2ui-project/a2ui/pull/2311), [#2283](https://redirect.github.com/a2ui-project/a2ui/pull/2283), [#2273](https://redirect.github.com/a2ui-project/a2ui/pull/2273)) and Light DOM rendering ([#2204](https://redirect.github.com/a2ui-project/a2ui/pull/2204)) signals a strong architectural pivot toward framework-agnostic, globally interoperable UI components for the v1.0 era.

## 7. User Feedback Summary
User pain points center on CI friction and security defaults. The workspace-wide presubmit checks ([#2232](https://redirect.github.com/a2ui-project/a2ui/issues/2232)) cause slow and irrelevant feedback for polyglot workspaces (e.g., running Dart formatters on Swift-only PRs). The security reports highlight dangerous default configurations, particularly the Python SDK's `FileResolver` lacking default host restrictions ([#2295](https://redirect.github.com/a2ui-project/a2ui/issues/2295)) and the web core's lack of schema validation ([#2297](https://redirect.github.com/a2ui-project/a2ui/issues/2297)), indicating that developers integrating the SDK may inadvertently expose their applications if they don't manually override defaults.

## 8. Backlog Watch
*   **[#2045](https://redirect.github.com/a2ui-project/a2ui/issues/2045) [P1]:** Port internal documentation to markdown. Open since July 17 with zero comments, this P1 issue appears stalled and requires maintainer allocation.
*   **[#2232](https://redirect.github.com/a2ui-project/a2ui/issues/2232):** Scope presubmits to changed files. Open since August 12 with only 1 comment, this CI improvement directly impacts daily developer velocity and needs triage.
*   **Security Audit Cluster:** The 8 issues opened by `ez-lbz` on August 17 currently lack triage. Given their CWE severity classifications, they urgently require maintainer acknowledgment and assignment.

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

**1. Today's Overview**
OpenUI experienced robust development activity on 2026-08-18, with 19 pull requests updated and 8 successfully merged or closed, while no new issues were opened. The development focus is heavily centered on expanding CLI scaffolding capabilities for backend frameworks (LangGraph and Vercel AI SDK) and hardening the rendering core. Additionally, significant effort was directed toward privacy compliance and documentation, notably shifting runtime telemetry to an opt-in model. The absence of new issues and releases suggests a period of intensive feature integration and internal refinement ahead of a future release.

**2. Releases**
No new releases were published today.

**3. Project Progress**
Significant advancements were merged today, focusing on schema resilience, developer experience, and privacy:
*   **Schema Validation & Stability**: [thesysdev/openui PR #729](https://redirect.github.com/thesysdev/openui/pull/729) was merged, introducing nested schema validation for component props. Instead of dropping or ignoring invalid nested data, the parser now validates, repairs, and prunes it, preventing wrong-typed values from reaching the renderer.
*   **Privacy & Telemetry**: [thesysdev/openui PR #991](https://redirect.github.com/thesysdev/openui/pull/991) merged a change making `@openuidev/lang-core` runtime telemetry opt-in rather than opt-out, requiring explicit enabling via `OPENUI_RUNTIME_TELEMETRY_ENABLED=1`.
*   **CLI UX**: [thesysdev/openui PR #999](https://redirect.github.com/thesysdev/openui/pull/999) streamlined the interactive `openui create` command by defaulting to the `openui-cloud` template, removing the backend prompt for interactive runs (self-hosted is now explicit-only via `--template`).
*   **DevTools & Docs**: Merged [thesysdev/openui PR #993](https://redirect.github.com/thesysdev/openui/pull/993) to persist DevTools config across sessions, [thesysdev/openui PR #997](https://redirect.github.com/thesysdev/openui/pull/997) to add a DevTools demo GIF, [thesysdev/openui PR #992](https://redirect.github.com/thesysdev/openui/pull/992) to document React UI Tailwind styling, and [thesysdev/openui PR #971](https://redirect.github.com/thesysdev/openui/pull/971) to restructure Cloud API guides. An obsolete standard library page was removed ([thesysdev/openui PR #996](https://redirect.github.com/thesysdev/openui/pull/996)).

**4. Community Hot Topics**
Activity is currently dominated by internal and contributor PRs shaping the project's architectural direction, specifically around backend orchestration and language expansion:
*   **Backend Framework Expansion**: A cluster of open PRs ([thesysdev/openui PR #968](https://redirect.github.com/thesysdev/openui/pull/968), [thesysdev/openui PR #969](https://redirect.github.com/thesysdev/openui/pull/969), [thesysdev/openui PR #964](https://redirect.github.com/thesysdev/openui/pull/964)) focuses on adding LangGraph and Vercel AI SDK as first-class backend overlays for both self-hosted and Cloud templates. This signals a strong architectural push to decouple OpenUI's frontend/rendering from a single orchestration backend.
*   **Rust TUI Example**: [thesysdev/openui PR #994](https://redirect.github.com/thesysdev/openui/pull/994) introduces a Rust/ratatui TUI example using a Node bridge. This highlights a community/maintainer interest in expanding OpenUI's reach beyond traditional web/JS environments.
*   **Alternative Gateways**: [thesysdev/openui PR #998](https://redirect.github.com/thesysdev/openui/pull/998) adds OrcaRouter as a named gateway option in the Supabase-chat example, mirroring OpenRouter, indicating user demand for flexible LLM routing.

**5. Bugs & Stability**
*   **Critical (Active)**: [thesysdev/openui PR #966](https://redirect.github.com/thesysdev/openui/pull/966) exposes a bug in the react-headless adapter where LangGraph multi-step tool loops are rendered out of order. The stream decoder assumed one assistant message per stream, causing tool-resume loops to collapse. A fix is currently open.
*   **Critical (Resolved)**: [thesysdev/openui PR #729](https://redirect.github.com/thesysdev/openui/pull/729) resolved a major stability issue where nested schema validation was entirely absent, allowing malformed data to crash or corrupt the renderer. This is now mitigated via the merged repair-and-prune logic.

**6. Feature Requests & Roadmap Signals**
The current PR pipeline clearly signals the next version's themes:
*   **Multi-Backend Scaffolding**: The `--backend-framework` flag ([thesysdev/openui PR #964](https://redirect.github.com/thesysdev/openui/pull/964)) and its documentation ([thesysdev/openui PR #965](https://redirect.github.com/thesysdev/openui/pull/965)) will likely land soon, making LangGraph and Vercel AI SDK officially supported scaffolding options.
*   **Advanced DevTools**: Upcoming features like pasting directly into DevTools ([thesysdev/openui PR #1000](https://redirect.github.com/thesysdev/openui/pull/1000)) and session persistence indicate a roadmap focused on making the local debugging loop tighter.
*   **Runtime Observability**: [thesysdev/openui PR #995](https://redirect.github.com/thesysdev/openui/pull/995) introduces sampled telemetry for `parser.parse()`. If merged, this will give the maintainers real-world performance and error-rate data for the core parsing engine.

**7. User Feedback Summary**
With zero issues updated in the last 24 hours, direct user feedback is quiet today. However, maintainer and contributor actions imply responses to recent friction: the immediate reversal of telemetry to opt-in ([thesysdev/openui PR #991](https://redirect.github.com/thesysdev/openui/pull/991)) suggests privacy-sensitive user feedback was received regarding data collection. Furthermore, the simplification of the `create` CLI flow ([thesysdev/openui PR #999](https://redirect.github.com/thesysdev/openui/pull/999)) addresses onboarding friction, prioritizing the most common Cloud use-case while keeping self-hosted explicitly accessible.

**8. Backlog Watch**
*   [thesysdev/openui PR #790](https://redirect.github.com/thesysdev/openui/pull/790): Open since July 19, this PR adds an `updateMessage` handler on `ThreadStorage` to fix an agent interface form values update bug. It was updated today but remains unmerged. Given the recent focus on streaming and tool loops (e.g., PR #966), this agent-state mutation capability needs maintainer review to prevent conflicts with ongoing streaming architecture work.

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

1. **Today's Overview**
Activity on the `json-render` project is minimal today, characterized by a single open pull request and no new issues, closed items, or releases. The project is currently in a low-activity state for this 24-hour period, with no user-reported bugs or active discussions. The sole development signal is a contributor-driven enhancement to the Vue adapter. Overall, the repository appears stable but quiet, with current momentum focused on expanding framework feature parity rather than resolving operational issues.

2. **Releases**
No new releases were recorded today.

3. **Project Progress**
No PRs were merged or closed today. However, feature development advanced with the opening of [PR #322](https://redirect.github.com/vercel-labs/json-render/pull/322), which introduces named slot support to `@json-render/vue`. This indicates active work to align the Vue adapter's capabilities with the existing React specification format, pushing the project toward better cross-framework consistency for dynamic JSON rendering.

4. **Community Hot Topics**
The most notable topic is the implementation of Vue-native slots via [PR #322](https://redirect.github.com/vercel-labs/json-render/pull/322). While there are no highly active discussions or comments today, the underlying need signaled by this PR is framework parity—users or maintainers require that components rendered via JSON in Vue have the same slot-handling capabilities as those in React, utilizing native Vue slot functions through `defineRegistry`.

5. **Bugs & Stability**
No bugs, crashes, or regressions were reported in the last 24 hours. Project stability remains steady with no active bug-fix PRs or issue submissions today.

6. **Feature Requests & Roadmap Signals**
The open [PR #322 (feat(vue): support named slots)](https://redirect.github.com/vercel-labs/json-render/pull/322) serves as the primary roadmap signal today. It suggests a strategic direction toward refining framework-specific adapters to support advanced component composition patterns (slots). If merged, this feature will likely be a key inclusion in the next minor release of the `@json-render/vue` package.

7. **User Feedback Summary**
There is no direct user feedback, pain points, or use-case discussions captured in today's data. The activity is strictly limited to a proactive feature implementation rather than reactive responses to user complaints or feature requests.

8. **Backlog Watch**
No long-unanswered issues or PRs were identified in today's data snapshot. Maintainer attention is recommended for the newly opened [PR #322](https://redirect.github.com/vercel-labs/json-render/pull/322) to ensure the Vue named slots implementation aligns with project standards and can progress toward merging.

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

## CopilotKit Project Digest — 2026-08-18

### 1. Today's Overview
CopilotKit exhibited high development velocity on 2026-08-18, with 37 pull requests updated (15 merged/closed) and 10 issues processed (7 closed). The day's activity heavily favored core stability and ecosystem expansion, highlighted by merged fixes for runtime hydration, Python SDK middleware, and context pipeline defects. Simultaneously, the framework support matrix broadened with active PRs for Angular 22 and multi-agent channels. Documentation closing out long-standing community requests (AWS Lambda, thread authorization) also marked a productive day for project health.

### 2. Releases
- **pr-6517-visuals**: An artifact-only prerelease containing before-and-after screenshots for PR #6517. No runtime changes, breaking changes, or migration notes.

### 3. Project Progress
Fifteen PRs were merged/closed today, advancing core bug fixes, documentation, and showcase maintenance:
- **Core/Runtime Fixes**: Merged [#6520](https://redirect.github.com/CopilotKit/CopilotKit/pull/6520) fixing stale `useCoAgent` node names and silent content-part drops; [#5372](https://redirect.github.com/CopilotKit/CopilotKit/pull/5372) ensuring the Python SDK emits tool call events for middleware-intercepted actions.
- **Documentation**: Closed [#6540](https://redirect.github.com/CopilotKit/CopilotKit/pull/6540) (complete programmatic control examples), [#6539](https://redirect.github.com/CopilotKit/CopilotKit/pull/6539) (parse Claude BYOA requests before streaming), and [#6537](https://redirect.github.com/CopilotKit/CopilotKit/pull/6537) (Strands TypeScript sub-agent snippets).
- **Infrastructure/Showcase**: Merged [#6534](https://redirect.github.com/CopilotKit/CopilotKit/pull/6534) to stop LangSmith tracing in Dojo e2e runs, [#6510](https://redirect.github.com/CopilotKit/CopilotKit/pull/6510) upgrading the Showcase to CopilotKit 1.68.1, and [#6493](https://redirect.github.com/CopilotKit/CopilotKit/pull/6493) deploying CrewAI conversational flows to staging.

### 4. Community Hot Topics
The most engaged issues revolve around **self-hosting deployment patterns and authorization**, revealing a clear friction point for enterprise users operating outside the CopilotKit Cloud:
- [#1151](https://redirect.github.com/CopilotKit/CopilotKit/issues/1151) (14 comments): Request for AWS Lambda self-hosting examples. Closed today, indicating docs were likely updated.
- [#2241](https://redirect.github.com/CopilotKit/CopilotKit/issues/2241) (7 comments): Custom thread authorization for self-hosted LangGraph. Closed today.
- [#6090](https://redirect.github.com/CopilotKit/CopilotKit/issues/6090) (4 comments): Custom thread management/persistence specs without the intelligence platform. Closed today.
Additionally, Angular framework integration is generating buzz with [#6509](https://redirect.github.com/CopilotKit/CopilotKit/issues/6509) (3 comments) requesting interrupt controller exposure on `AgentStore`, which was swiftly addressed by an open PR.

### 5. Bugs & Stability
Several significant bugs were reported or addressed today:
1. **[High] Orphaned v1 Context Pipeline**: [#6408](https://redirect.github.com/CopilotKit/CopilotKit/issues/6408) reports `useCopilotReadable` has been broken since v1.50.0 because readers weren't repointed to the v2 flat context store. *Open; no fix PR merged yet.*
2. **[Medium] A2UI Skeleton Never Resolves**: [#6526](https://redirect.github.com/CopilotKit/CopilotKit/issues/6526) reports the "Building interface" skeleton hangs forever when using `BuiltInAgent` due to missing snapshot emissions. *Open; no fix PR yet.*
3. **[Medium] LangGraph Middleware Tool Execution Lie**: [#4759](https://redirect.github.com/CopilotKit/CopilotKit/issues/4759) where middleware hides frontend tool execution status from the agent. *Closed; fixed by merged PR [#5372](https://redirect.github.com/CopilotKit/CopilotKit/pull/5372).*
4. **[Low] Self-hosted Thread Hydration**: [#6528](https://redirect.github.com/CopilotKit/CopilotKit/pull/6528) fixes an issue where self-hosted runtimes fail `/connect` replay if thread history contains a `RUN_ERROR`. *Fix PR is open.*

### 6. Feature Requests & Roadmap Signals
Key feature requests and signals for upcoming releases include:
- **Angular Enhancements**: Exposing the interrupt controller on `AgentStore` ([#6509](https://redirect.github.com/CopilotKit/CopilotKit/issues/6509)) via PR [#6538](https://redirect.github.com/CopilotKit/CopilotKit/pull/6538), and upgrading the Angular package to v22 ([#6521](https://redirect.github.com/CopilotKit/CopilotKit/pull/6521)).
- **Multi-Agent Channels**: [#6529](https://redirect.github.com/CopilotKit/CopilotKit/pull/6529) introduces the ability for a single Channel to run many named agents, extending CopilotKit's multi-agent capabilities.
- **UI/UX Improvements**: [#6531](https://redirect.github.com/CopilotKit/CopilotKit/pull/6531) adds feedback state reporting to `onThumbsUp`/`onThumbsDown` callbacks, and [#6530](https://redirect.github.com/CopilotKit/CopilotKit/pull/6530) fixes mobile viewport padding.
- **Breaking Change Signal**: [#6533](https://redirect.github.com/CopilotKit/CopilotKit/pull/6533) is an open refactor converging React Native render-tool hooks onto `react-core`, marked with a `!` breaking change indicator.

### 7. User Feedback Summary
Users are actively trying to deploy CopilotKit in secure, scalable enterprise environments but lack sufficient guidance. The closure of issues regarding AWS Lambda deployments, thread authorization, and custom persistence backends confirms the community strongly demands decoupled, self-hosted capabilities. Furthermore, there is confusion around MCP integrations; users struggle to distinguish between interactive MCP Apps and read-only context servers ([#5991](https://redirect.github.com/CopilotKit/CopilotKit/issues/5991)). Security remains a top-of-mind concern, with requests for prompt injection firewall implementations for LangGraph agents ([#3414](https://redirect.github.com/CopilotKit/CopilotKit/issues/3414)).

### 8. Backlog Watch
- **[#6408](https://redirect.github.com/CopilotKit/CopilotKit/issues/6408)**: The v1 readable-context pipeline orphaning bug is a critical regression from v1.50.0 that remains open and lacks a linked fix PR. Given it affects fundamental context passing (`useCopilotReadable`), it requires urgent maintainer attention.
- **[#6526](https://redirect.github.com/CopilotKit/CopilotKit/issues/6526)**: The A2UI skeleton hang for `BuiltInAgent` is a severe UX blocker introduced recently, currently with no assigned fix.
- **[#6527](https://redirect.github.com/CopilotKit/CopilotKit/pull/6527)**: An open PR fixing parallel v1 tool rendering and Vue HITL bugs. It notes a core gap that required a `--no-verify` commit, suggesting it may need closer architectural review before merging.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/linqinghao/agents-radar).*