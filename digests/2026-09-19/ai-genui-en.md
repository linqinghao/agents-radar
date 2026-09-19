# Generative UI Ecosystem Digest 2026-09-19

> Issues: 24 | PRs: 99 | Projects covered: 4 | Generated: 2026-09-19 03:48 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## Cross-Ecosystem Comparison

**1. Ecosystem Overview**
The generative UI ecosystem on 2026-09-19 is characterized by rapid iteration toward v1.0 stability and agent-native composability. Projects are uniformly pivoting from basic JSON rendering to solving advanced agent interaction patterns, such as multi-turn state persistence, self-healing UI, and AI-driven spec composition. Concurrently, maintainers are tackling infrastructure friction—decoupling rigid framework dependencies, resolving namespace collisions, and hardening deployment pipelines—to support enterprise-grade agentic workflows in production environments.

**2. Activity Comparison**

| Project | Issues Updated | PRs Updated | Release Status |
| :--- | :--- | :--- | :--- |
| **a2ui** | 11 | 24 | No release (v1.0 prep) |
| **OpenUI** | 1 | 12 (7 closed, 5 open) | No release (v-next staged) |
| **json-render** | 0 | 5 | **v0.21.0** released |
| **CopilotKit** | 12 | 58 | **v1.73.0** released |

**3. Shared Feature Directions**
*   **Framework & Dependency Decoupling:** Projects are actively dismantling hardcoded framework couplings to broaden adoption. *a2ui* is decoupling catalogs from specification paths (#2693) and resolving MCP key collisions (#2692); *CopilotKit* is facing demands to shift Express/Hono to optional peer dependencies (#7276); *json-render* expanded support to TanStack Start (#309) alongside Next.js.
*   **Multi-Agent/Multi-Turn State Isolation:** As agents scale, UI state isolation is critical. *a2ui* is debating `dataModel` persistence across turns (#2690); *CopilotKit* users are flagging sub-agent `ToolMessage` leakage to the frontend (#3861) and run-cancellation race conditions (#7149).
*   **Network & Proxy Resiliency:** Enterprise deployments are failing on idle network connections. *CopilotKit* merged SSE keep-alive comment frames to defeat proxy timeouts (#6984), while *OpenUI* fixed faulty deploy-time API key inference for cloud environments (#1196).

**4. Differentiation Analysis**
*   **a2ui** focuses on **protocol and spec standardization**. Its primary technical battle is defining language-agnostic catalogs and resolving namespace conflicts for MCP servers, targeting developers building foundational agent-to-UI protocols.
*   **OpenUI** differentiates via **DX and self-healing generation**. Its strategic focus is on the "Autofix" paradigm (automated UI repair) and frictionless cloud deployments, targeting developers who want managed, auto-correcting generative UI pipelines.
*   **json-render** acts as a **pure, framework-agnostic rendering engine**. Its differentiation lies in safe, AI-driven UI assembly via experimental Jev composition APIs (where LLMs output decisions rather than raw JSON), targeting frontend architects integrating AI into existing cross-framework apps.
*   **CopilotKit** is heavily **runtime and integration-centric**. It focuses on resilient SSE streaming, built-in agent skills, and hardening framework integrations (Agno, LangGraph), targeting full-stack developers building complex, multi-agent workflows out of the box.

**5. Community Momentum & Maturity**
*   **CopilotKit** shows the highest velocity and maturity friction. Processing 58 PRs and releasing v1.73.0 demonstrates massive momentum, but community stress-testing (Express 5 breaks, message leakage) reveals the growing pains of enterprise adoption.
*   **a2ui** is in an intensive, community-driven architectural phase. With 22 open PRs and 10 open issues, it is rapidly iterating on v1.0 restructuring. However, unaddressed CI failures (#2701) and a11y bugs (#2697) suggest bottlenecked maintainer capacity.
*   **json-render** exhibits steady, maintainer-driven momentum with high architectural output (v0.21.0) but low community issue noise, indicating a tightly controlled but highly impactful roadmap.
*   **OpenUI** demonstrates strong maintainer responsiveness to specific regressions (e.g., swiftly merging `ToolCallTimeline` overrides #1170), though lower overall community issue volume suggests a more curated, internally driven development cycle.

**6. Trend Signals**
*   **From "Flat" Lists to Rich Agent Primitives:** Agents are moving beyond simple text and dropdowns. Communities demand native UI constructs for commerce and data summarization—specifically, tabular/quantitative primitives and rich `ChoicePicker` cards (a2ui #2674, #2673). Developers should prepare UI catalogs to support complex, card-based multi-select scenarios.
*   **Self-Healing and AI-Driven Assembly:** The ecosystem is shifting from static generation to dynamic evaluation. OpenUI’s `createAutofix` (#1194) and json-render’s `experimental_composeSpec` (#342) signal that future generative UIs will rely on LLMs to dynamically compose, evaluate, and repair specs at runtime, rather than just rendering a single-shot output.
*   **Strict Dependency Boundaries:** The era of heavy, bundled dependencies is ending for agentic runtimes. Hardcoded web framework versions (CopilotKit #7276) and monolithic spec directories (a2ui #2700) are causing integration friction. Technical decision-makers should architect runtimes with strict optional peer dependencies and decoupled adapters to survive diverse enterprise backend environments.

---

## Per-Project Reports

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

### 1. Today's Overview
The a2ui project experienced high activity on 2026-09-19, with 11 issues and 24 pull requests updated, indicating vigorous development primarily focused on repository restructuring and v1.0 SDK enhancements. The majority of issues remain open (10) and nearly all updated PRs are still active (22 open), suggesting an ongoing intensive coding phase rather than a stabilization period. Key themes of the day include broad refactoring to decouple catalogs from the specification directory, advancing Dart and React universal component support, and addressing critical gaps in the basic UI catalog for agent interactions. No new releases were cut today.

### 2. Releases
No new releases were published today.

### 3. Project Progress
While only 1 issue and 1 PR (#2290, a closed PR for adding Svelte community renderer docs) were closed today, significant architectural progress was made across several open PRs:
*   **Catalog Restructuring**: Major progress on decoupling catalogs from specification paths, with PRs moving the v1.0 basic catalog ([#2693](https://redirect.github.com/a2ui-project/a2ui/pull/2693)), MCP catalog ([#2694](https://redirect.github.com/a2ui-project/a2ui/pull/2694)), and Python MCP catalog ([#2695](https://redirect.github.com/a2ui-project/a2ui/pull/2695)) to top-level language-agnostic or language-specific directories.
*   **Web Core & React Refactoring**: Advanced refactoring to register basic catalog elements at render time rather than on import ([#2698](https://redirect.github.com/a2ui-project/a2ui/pull/2698)), and extracting NodeView/RenderFallback in React ([#2615](https://redirect.github.com/a2ui-project/a2ui/pull/2615)).
*   **Dart SDK Evolution**: The Dart core received the node-resolution layer ([#2669](https://redirect.github.com/a2ui-project/a2ui/pull/2669)) and payload entry-point types ([#2683](https://redirect.github.com/a2ui-project/a2ui/pull/2683)).
*   **Bug Fixes**: A fix was quickly submitted for canonical icon inconsistencies ([#2703](https://redirect.github.com/a2ui-project/a2ui/pull/2703)) on the same day the bug was reported.

### 4. Community Hot Topics
The most engaging topics center on the expressiveness of the basic catalog for AI agent use cases:
*   **Missing Tabular/Quantitative Primitives** ([#2674](https://redirect.github.com/a2ui-project/a2ui/issues/2674)): With 1 👍 and active discussion, this issue highlights a major pain point—agents currently cannot natively render numeric data or tables without hacky `Row`/`Column` grids.
*   **Rich ChoicePicker Options** ([#2673](https://redirect.github.com/a2ui-project/a2ui/issues/2673)): Driven by "agent commerce interactions" (flights, hotels), the community is pushing for `ChoicePicker` to support rich cards rather than flat `{label, value}` pairs.
*   **Multi-turn Conversation History** ([#2690](https://redirect.github.com/a2ui-project/a2ui/issues/2690)): Active discussion on how `components` and `dataModel` should persist across turns, a fundamental architectural question for agent memory.

### 5. Bugs & Stability
Three bugs were reported or active today, ranked by severity:
1.  **E2E Tests Failing on Main** ([#2701](https://redirect.github.com/a2ui-project/a2ui/issues/2701)): An automated test workflow failure associated with PR #2589. This represents an immediate CI/CD stability risk and requires urgent triage.
2.  **Accessibility Attributes Dropped** ([#2697](https://redirect.github.com/a2ui-project/a2ui/issues/2697)): `genui` drops `label` and `description`, preventing them from reaching the semantics tree. High severity as it breaks accessibility compliance. No fix PR yet.
3.  **Icon Inconsistencies** ([#2702](https://redirect.github.com/a2ui-project/a2ui/issues/2702)): Canonical examples reference icon names undefined in the basic catalog's enum, causing rendering failures. **Fix exists** via PR [#2703](https://redirect.github.com/a2ui-project/a2ui/pull/2703).

### 6. Feature Requests & Roadmap Signals
Strong signals for **v1.0** are emerging, focused on reducing boilerplate and resolving namespace conflicts:
*   **Reserved Keyword Prefixing** ([#2692](https://redirect.github.com/a2ui-project/a2ui/issues/2692)): Request to prefix reserved keywords (like `path`) with `$` or `@` in v1.0 to prevent collisions with MCP server keys.
*   **Async Arg Resolution** ([#2691](https://redirect.github.com/a2ui-project/a2ui/issues/2691)): Request for the v1.0 SDK to resolve function args and handle promises automatically before invoking function implementations, eliminating developer boilerplate.
*   **Missing UI Primitives** ([#2672](https://redirect.github.com/a2ui-project/a2ui/issues/2672), [#2673](https://redirect.github.com/a2ui-project/a2ui/issues/2673), [#2674](https://redirect.github.com/a2ui-project/a2ui/issues/2674)): Steppers, rich choice cards, and tables are highly requested. These are likely to be prioritized for the next catalog update given their centrality to agent commerce and data summarization.

### 7. User Feedback Summary
Users are experiencing friction with UI primitives that feel too "flat" for complex agent outputs. Specifically, agents summarizing numeric data must resort to prose or manual alignment, and agents facilitating commerce cannot present rich options (like hotel cards) within a `ChoicePicker`. Developer pain points also include SDK boilerplate for resolving function arguments and naming collisions between A2UI data bindings and generic MCP server keys (e.g., `path`). Overall, satisfaction seems hindered by the gap between the protocol's flexibility and the basic catalog's limited component set.

### 8. Backlog Watch
Several items marked `[status: needs-triage]` require immediate maintainer attention:
*   **CI Failure**: Issue [#2701](https://redirect.github.com/a2ui-project/a2ui/issues/2701) (E2E failure on main) is critical and unaddressed.
*   **Structural Move Blockers**: Issue [#2700](https://redirect.github.com/a2ui-project/a2ui/issues/2700) requests moving v0.9/v0.9.1 catalogs out of `specification/`, but notes it is blocked by Python SDK coupling—a complexity that needs maintainer input.
*   **New PRs**: PR [#2704](https://redirect.github.com/a2ui-project/a2ui/pull/2704) (persist restaurant demo logs) and the icon fix PR [#2703](https://redirect.github.com/a2ui-project/a2ui/pull/2703) are awaiting initial triage reviews.
*   **Accessibility Bug**: Issue [#2697](https://redirect.github.com/a2ui-project/a2ui/issues/2697) (dropped a11y attributes) has had zero maintainer response since opening.

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

**1. Today's Overview**
OpenUI experienced high development velocity over the past 24 hours, characterized by a robust merge rate of 7 closed PRs against only 1 closed issue. The maintainers are deeply focused on refining the deployment pipeline, restructuring the CLI, and advancing the "Autofix" self-healing generation paradigm. With 5 PRs still open—including an automated changesets release PR—the project is in an active stabilization and feature-integration phase, showing strong maintainer momentum despite low new community issue filings today.

**2. Releases**
No new releases were published today. However, PR [#1201](https://redirect.github.com/thesysdev/openui/pull/1201) indicates that a `changesets` version bump is staged and awaiting merge, suggesting an upcoming release will soon incorporate recent Autofix, deployment, and CLI refactorings.

**3. Project Progress**
Significant progress was made across deployment, core architecture, and developer experience:
*   **Deployment & Cloud:** Merged PR [#1199](https://redirect.github.com/thesysdev/openui/pull/1199) added a deployment guide, and [#1172](https://redirect.github.com/thesysdev/openui/pull/1172) introduced local deploy popups and an Inspect command banner. PR [#1196](https://redirect.github.com/thesysdev/openui/pull/1196) fixed faulty deploy-time API key inference.
*   **CLI Refactor:** PR [#1174](https://redirect.github.com/thesysdev/openui/pull/1174) successfully merged a major restructuring of `@openuidev/cli` to simplify command additions, while [#1138](https://redirect.github.com/thesysdev/openui/pull/1138) fixed a CLI exit-code bug during skipped API key prompts.
*   **Autofix & API:** Documentation for the Autofix API was corrected in [#1200](https://redirect.github.com/thesysdev/openui/pull/1200), and the ability to override the tool timeline in `AgentInterface` was merged in [#1170](https://redirect.github.com/thesysdev/openui/pull/1170).

**4. Community Hot Topics**
The most notable community interaction revolved around Issue [#1128](https://redirect.github.com/thesysdev/openui/issues/1128), where user `LemonPhase` reported a regression following PR #916 that broke live tool progress rendering in `AssistantMessage`. This sparked the creation and merge of PR [#1170](https://redirect.github.com/thesysdev/openui/pull/1170), which introduced a `components.ToolCallTimeline` override to restore and enhance this capability. This highlights a strong community need for customizable, turn-level tool activity rendering in agentic workflows.

**5. Bugs & Stability**
*   **Regression (Medium):** Issue [#1128](https://redirect.github.com/thesysdev/openui/issues/1128) - `AssistantMessage` failed to render tool activity post-#916. **Fix:** Merged in PR [#1170](https://redirect.github.com/thesysdev/openui/pull/1170).
*   **Parsing Inconsistency (Medium):** Streaming parser failed to use the last complete definition for duplicate IDs, diverging from non-streaming behavior. **Fix:** Open in PR [#1140](https://redirect.github.com/thesysdev/openui/pull/1140).
*   **Deployment Friction (Medium):** Incorrect `OPENAI_API_KEY` warnings triggered during OpenUI Cloud deployments due to dependency inference. **Fix:** Merged in PR [#1196](https://redirect.github.com/thesysdev/openui/pull/1196).
*   **CLI Exit Code (Low):** CLI `create` command exited with code 1 when API key was skipped in immediate mode, falsely signaling failure. **Fix:** Merged in PR [#1138](https://redirect.github.com/thesysdev/openui/pull/1138).

**6. Feature Requests & Roadmap Signals**
The clear roadmap signals point toward **automated UI repair (Autofix)** and **frictionless deployment**:
*   **Autofix Pipeline:** Open PR [#1194](https://redirect.github.com/thesysdev/openui/pull/1194) proposes a `createAutofix` helper for `@openuidev/server`, abstracting manual validation/repair logic. Companion PR [#1193](https://redirect.github.com/thesysdev/openui/pull/1193) adds an OpenAI Autofix example. This signals the next version will heavily market self-healing UI generation.
*   **Cloud Abstraction:** Open PR [#1190](https://redirect.github.com/thesysdev/openui/pull/1190) moves OpenUI Cloud storage/APIs to a public surface and removes deprecated artifact tooling, signaling a shift toward a more standardized, decoupled cloud architecture.

**7. User Feedback Summary**
Users are actively pushing the boundaries of the `AgentInterface` for complex agentic loops but are encountering friction when trying to customize rendering behavior for tool calls (as seen in #1128). The swift maintainer response to expose a `ToolCallTimeline` override demonstrates responsiveness to UI flexibility demands. Additionally, developers utilizing OpenUI Cloud expressed confusion over API key management during deployment, prompting a fix to cease incorrect environment variable inference (#1196). 

**8. Backlog Watch**
*   **PR [#1140](https://redirect.github.com/thesysdev/openui/pull/1140)** (Open since 09-09): A critical fix for streaming parser behavior with duplicate IDs. It has been open for 10 days and requires maintainer review/merge to ensure streaming/non-streaming parity.
*   **PR [#1190](https://redirect.github.com/thesysdev/openui/pull/1190)** (Open since 09-16): A large-scale refactor of OpenUI Cloud templates and public surfaces. Given its architectural impact, it needs careful review before merging to avoid breaking downstream Cloud integrations.

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

### 1. Today's Overview
The `json-render` project experienced a highly productive day, marked by the release of version 0.21.0 which introduces significant framework expansion and experimental AI-composition capabilities. Activity was concentrated in the pull request pipeline, with 5 PRs updated (3 closed/merged, 2 opened) and zero new issues, indicating a focused, maintainer-driven release cycle rather than reactive bug triaging. The introduction of TanStack Start support and experimental Jev composition APIs signals a strategic push toward broader framework compatibility and AI-agent-driven UI assembly.

### 2. Releases
- **[v0.21.0](https://github.com/vercel-labs/json-render/releases/tag/v0.21.0)**
  - **New Feature:** Added `@json-render/tanstack-start` renderer, enabling JSON-defined applications with file-based routes, reusable layouts, SSR loaders, head metadata, prerender paths, client navigation, and route fallbacks.
  - **New Feature:** Introduced experimental Jev composition APIs (`experimental_composeSpec` and `experimental_createEvaluator`) to `@json-render/core`, allowing apps to use a decision model to compose and edit `Spec` from catalog components.
  - **Breaking Changes/Migration:** None explicitly noted in the release data.

### 3. Project Progress
Significant architectural and feature-based advancements were merged today in preparation for the v0.21.0 release:
- **[PR #309](https://redirect.github.com/vercel-labs/json-render/pull/309) [CLOSED]:** Implemented `@json-render/start` for TanStack Start support, mirroring the existing Next.js API and porting core schema/router/metadata logic to be framework-agnostic.
- **[PR #342](https://redirect.github.com/vercel-labs/json-render/pull/342) [CLOSED]:** Added experimental composition APIs and a playground model option. This establishes the foundation for AI-driven UI generation by allowing models to compose specs from permitted actions and data.
- **[PR #344](https://redirect.github.com/vercel-labs/json-render/pull/344) [CLOSED]:** Prepared the v0.21.0 release by bumping packages, updating documentation, and validating workspace type safety.

### 4. Community Hot Topics
There are no highly active discussions or issues today based on comments and reactions (all stand at 0 👍 and undefined comments). However, the underlying developer needs are evident from the PRs:
- **Framework Agnosticism:** The push for TanStack Start ([PR #309](https://redirect.github.com/vercel-labs/json-render/pull/309)) alongside existing Next.js support shows a strong community need to decouple `json-render` from specific meta-frameworks.
- **AI/Agent Composability:** The introduction of Jev composition ([PR #342](https://redirect.github.com/vercel-labs/json-render/pull/342)) highlights a direct interest in using LLMs/agents to dynamically assemble UIs based on data and permitted actions, moving beyond static JSON definitions.

### 5. Bugs & Stability
- **[PR #341](https://redirect.github.com/vercel-labs/json-render/pull/341) [OPEN]:** *fix(react): unregister validation fields on unmount* — Addresses a state/memory leak where validation fields are not properly cleaned up on unmount, causing stale errors across conditional fields, tabs, and shared paths. **Severity: Medium-High** (directly impacts React form stability and user experience; fix is actively in progress).
- **[PR #343](https://redirect.github.com/vercel-labs/json-render/pull/343) [OPEN]:** *Avoid provisional layout shifts in Jev playground previews* — Fixes UI jank where new Jev generations appeared in provisional catalog order before jumping upon layout evaluation. **Severity: Low-Medium** (primarily affects developer experience in the playground, not production rendering).

### 6. Feature Requests & Roadmap Signals
- **AI-Driven UI Assembly:** The addition of `experimental_composeSpec` and `experimental_createEvaluator` in [PR #342](https://redirect.github.com/vercel-labs/json-render/pull/342) is a massive roadmap signal. It indicates the project is positioning itself as a rendering layer for AI agents, where the agent outputs a "decision" rather than raw JSON, and the evaluator safely composes the final UI.
- **Next Version Prediction (v0.22.0):** It is highly probable that the experimental Jev composition APIs will undergo real-world testing via the playground, leading to stabilization (dropping the `experimental_` prefix). Additionally, the React validation fix from [PR #341](https://redirect.github.com/vercel-labs/json-render/pull/341) will likely be included.

### 7. User Feedback Summary
- **Pain Points:** Managing complex form lifecycles in React remains a pain point, specifically around conditional rendering and field unmounting ([PR #341](https://redirect.github.com/vercel-labs/json-render/pull/341)). Additionally, UI instability (layout shifts) during AI streaming/generation is a friction point in the dev experience ([PR #343](https://redirect.github.com/vercel-labs/json-render/pull/343)).
- **Use Cases:** Users are increasingly treating `json-render` as a cross-framework engine (Next.js + TanStack Start) and are beginning to use it as an execution layer for AI-generated UI specs.

### 8. Backlog Watch
- **[PR #309](https://redirect.github.com/vercel-labs/json-render/pull/309):** While closed today, this PR was open for over two months (created 2026-07-13). Major framework integration PRs seem to suffer from long review cycles, suggesting the core team may be resource-constrained when validating agnostic adapters.
- No long-unanswered issues were reported in today's data, but maintaining momentum on the freshly opened [PR #341](https://redirect.github.com/vercel-labs/json-render/pull/341) and [PR #343](https://redirect.github.com/vercel-labs/json-render/pull/343) should be prioritized to keep the v0.21.0 release stable.

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

**1. Today's Overview**
CopilotKit exhibits high development velocity today, driven by the release of v1.73.0 and the processing of 58 pull requests (35 merged/closed). The project's focus is split between enhancing core runtime capabilities—such as resilient SSE streaming and BuiltInAgent skill delivery—and aggressively stabilizing showcase integrations, particularly for the Agno framework. With 12 issues updated and an 8-to-4 open-to-closed ratio, the community is actively stress-testing the runtime's dependency architecture and multi-agent message isolation, signaling a maturing ecosystem grappling with enterprise proxy environments and framework versioning conflicts.

**2. Releases**
- **v1.73.0**: This minor release introduces automatic Learning skill delivery to `BuiltInAgent`, more resilient SSE streaming (via keep-alive comment frames), and richer runtime telemetry. It also includes targeted fixes across `core`, `react-core`, and Vue packages.
  - *Migration/Breaking Notes*: No explicitly documented breaking changes, but PR #7290 indicates ongoing efforts to ratchet imports against the deprecated v1 surface, meaning developers still relying on v1 compatibility shims (like `LangGraphHttpAgent`) should verify their import paths.

**3. Project Progress**
- **Core Runtime**: `BuiltInAgent` now natively supports published Learning skills without external wrappers (#7254). SSE streaming robustness improved significantly by injecting comment frames to defeat proxy idle timeouts (#6984, closes #6980).
- **Deprecation Enforcement**: Merged a script to ratchet documented imports against deprecated v1 surfaces (#7290), preventing silent compatibility drift (like the recently discovered `LangGraphHttpAgent` leak).
- **Showcase Stabilization (Agno/LlamaIndex)**: A massive batch of fixes landed for the Agno showcase, addressing multimodal HTTP 422 errors (#7297), missing recall instructions (#7296), corrupted planner routing/repeated state (#7295), wildcard tool validation errors (#7293), advanced UI 503s (#7292), and dropped sandboxed UI tools in airplane visualization (#7291).
- **Documentation**: Updated managed credential guidance to separate browser/runtime keys properly (#6906).

**4. Community Hot Topics**
- **Hard vs. Optional Dependencies** ([#7276](https://redirect.github.com/CopilotKit/CopilotKit/issues/7276), 4 comments): `@copilotkit/runtime` bundles Express/Hono as hard dependencies, breaking type-checking for Express 5 apps. This highlights a need for the runtime to adopt optional peer dependencies to support diverse backend frameworks.
- **Subagent Message Leakage** ([#3861](https://redirect.github.com/CopilotKit/CopilotKit/issues/3861), 4 comments): `MessagesSnapshotEvent` sends all graph state messages to the frontend, including internal agent-to-agent `ToolMessage` objects. Users need finer-grained metadata filtering to keep sub-agent logic hidden from the chat UI.
- **Run Cancellation Scope** ([#7149](https://redirect.github.com/CopilotKit/CopilotKit/issues/7149), 3 comments): `abortRun` currently issues a thread-wide stop rather than a run-specific stop, causing delayed stops to accidentally cancel subsequent runs.

**5. Bugs & Stability**
- **High Severity - Dependency Conflict** ([#7276](https://redirect.github.com/CopilotKit/CopilotKit/issues/7276)): Express 5 apps fail type-checking due to hardcoded Express 4 dependencies. *No fix PR yet.*
- **High Severity - State Isolation** ([#3861](https://redirect.github.com/CopilotKit/CopilotKit/issues/3861)): Sub-agent tool messages leak to the frontend UI. *No fix PR yet.*
- **Medium Severity - Cancellation Race Condition** ([#7149](https://redirect.github.com/CopilotKit/CopilotKit/issues/7149)): Delayed run stops cancel the next run on the same thread. *No fix PR yet.*
- **Medium Severity - Unanswered Tool Calls** ([#7100](https://redirect.github.com/CopilotKit/CopilotKit/issues/7100)): BuiltInAgent channel throws `MissingToolResultsError` on subsequent turns if a backend tool call is left unanswered. *No fix PR yet.*
- **Fixed Today**: Quiet SSE streams closed by proxy idle timeouts ([#6980](https://redirect.github.com/CopilotKit/CopilotKit/issues/6980)) was resolved and merged via PR [#6984](https://redirect.github.com/CopilotKit/CopilotKit/pull/6984). Vue scoped-slot `@stop` listener bug ([#5934](https://redirect.github.com/CopilotKit/CopilotKit/issues/5934)) was closed.

**6. Feature Requests & Roadmap Signals**
- **Inspector Tooling**: Open PRs for Intelligence access/Learning shortcuts ([#7194](https://redirect.github.com/CopilotKit/CopilotKit/pull/7194)) and evidence highlighting verification ([#7262](https://redirect.github.com/CopilotKit/CopilotKit/pull/7262)) indicate active investment in the CopilotKit Inspector developer experience.
- **UI/UX Polish**: Upcoming merges likely include better fallbacks for thread naming ([#7007](https://redirect.github.com/CopilotKit/CopilotKit/pull/7007)) and React Native user-message markdown rendering ([#6059](https://redirect.github.com/CopilotKit/CopilotKit/pull/6059)).
- **Compatibility & Strictness**: Requests to lock Python dependency versions in showcases ([#7284](https://redirect.github.com/CopilotKit/CopilotKit/issues/7284), [#7285](https://redirect.github.com/CopilotKit/CopilotKit/issues/7285)) and widen `@ag-ui` pins for deduping ([#6782](https://redirect.github.com/CopilotKit/CopilotKit/pull/6782)) point toward a roadmap focus on strict reproducibility and eliminating dependency hell for consumers.

**7. User Feedback Summary**
Users are expressing friction with runtime packaging boundaries, specifically the coupling of specific web framework versions (Express 4) into the agnostic runtime package. Multi-agent developers are reporting that the current message snapshot implementation lacks the granularity needed for complex, nested agent architectures, resulting in internal "thinking" messages appearing in the user UI. On the positive side, the rapid merge of the SSE keep-alive fix shows high responsiveness to deployment-edge cases (proxies/load balancers), and the continuous hardening of showcase integrations signals a commitment to out-of-the-box developer success.

**8. Backlog Watch**
- **[Issue #3861](https://redirect.github.com/CopilotKit/CopilotKit/issues/3861)**: Open since April 2026, this sub-agent message leakage bug fundamentally impacts the viability of complex LangGraph architectures and needs architectural prioritization.
- **[PR #6782](https://redirect.github.com/CopilotKit/CopilotKit/pull/6782)**: Open since August 2026, this PR fixes strict `@ag-ui` version pinning that prevents consumers from deduping their dependency trees. It requires maintainer review to unblock downstream builds.
- **[PR #6059](https://redirect.github.com/CopilotKit/CopilotKit/pull/6059)**: Open since July 2026, addressing a basic UX gap where React Native user messages don't render Markdown. Needs prioritization for the RN community.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/linqinghao/agents-radar).*