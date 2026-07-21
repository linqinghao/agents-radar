# Generative UI Ecosystem Digest 2026-07-21

> Issues: 224 | PRs: 104 | Projects covered: 4 | Generated: 2026-07-21 02:54 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## Cross-Ecosystem Comparison

## Cross-Project Comparison Report: Generative UI Ecosystem (2026-07-21)

### 1. Ecosystem Overview
The generative UI ecosystem is currently characterized by active maturation and stabilization efforts, with projects racing to solidify core protocols (like a2ui's v1.0) and expand cross-platform rendering capabilities. While foundational rendering standards are being established, production robustness—especially regarding agent-to-UI state synchronization, streaming resilience, and memory management—remains a critical friction point. Projects are increasingly prioritizing framework parity (e.g., Angular support) and stricter data validation to support complex, long-running AI agents in enterprise environments. Activity levels vary drastically, from massive triage operations to quiet dormancy.

### 2. Activity Comparison

| Project | Issues Updated | Issues Closed | PRs Updated | PRs Merged/Closed | Release Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **a2ui** | 13 | 3 | 29 | 14 | No Release |
| **OpenUI** | 1 | 0 | 7 | 1 | No Release |
| **json-render** | 0 | 0 | 0 | 0 | No Release |
| **CopilotKit** | 210 | 143 | 68 | 36 | No Release |

### 3. Shared Feature Directions

*   **Angular Ecosystem Parity:** Both **a2ui** and **CopilotKit** are actively investing in Angular support. a2ui resolved a critical minification bug and merged an A2UI activity renderer for Angular, while CopilotKit is pushing for feature parity between its React v2 and Angular packages. *Need:* Enterprise adoption requires framework-agnostic support beyond React.
*   **Streaming State Resilience & Memory Management:** Handling long-running and streaming agent interactions is a universal pain point. **OpenUI** is battling a high-severity bug where streaming bindings default to truncated values, **a2ui** is discussing component garbage collection to prevent memory leaks, and **CopilotKit** is addressing multi-user state leakage and socket hangs. *Need:* Reliable client-side state reconciliation and memory cleanup for persistent agents.
*   **Stricter Typing and Schema Validation:** The shift from unstructured LLM outputs to reliable UIs is driving demand for type safety. **a2ui** users are strongly requesting static type checking (mypy/TS) and hallucination-proof data binding, while **OpenUI** is implementing nested schema validation to prune incorrect prop types. *Need:* Mechanisms to prevent LLMs from generating malformed UI structures.

### 4. Differentiation Analysis

*   **a2ui** differentiates through **protocol standardization and hardware breadth**. Its focus is on defining a universal v1.0 specification for agent-to-UI communication and expanding renderer support to diverse platforms like HarmonyOS, Flutter, and Swift. It targets developers building foundational, cross-platform agent infrastructures.
*   **OpenUI** differentiates through **core language and tooling refinement**. It focuses on the low-level parsing layer (`lang-core`) and developer experience (Paste Playground), aiming to make generative UI languages easier to test and structurally resilient. It targets builders constructing the generative UI compilers themselves.
*   **CopilotKit** differentiates through **full-stack integration and out-of-the-box UI components**. It operates higher up the stack, focusing on seamless integration with backend orchestration frameworks (LangGraph, AG-UI) and providing ready-made React/Angular chat interfaces. It targets developers who want to quickly embed functional AI copilots into existing web applications.
*   **json-render** currently shows **stagnation**, indicating it is either highly stable, in maintenance mode, or surpassed by more active frameworks.

### 5. Community Momentum & Maturity

*   **CopilotKit** exhibits the highest raw momentum and is in a **rapid scaling/triage phase**. The massive volume of issue closures (143) and PR merges indicates aggressive maintenance. However, community feedback reveals stability ceilings; users pushing into production with complex Python backends are encountering state leakage and silent errors, signaling that the architecture is straining under enterprise use cases.
*   **a2ui** shows **healthy, spec-driven momentum**. The community is deeply engaged in architectural debates (typing, GC) rather than just bug reporting. The steady PR merge rate toward a v1.0 milestone indicates a project transitioning from experimental to stable.
*   **OpenUI** is in a **methodical, maintainer-driven phase**. Despite low community engagement (0 comments today), core contributors are actively advancing high-impact PRs around schema validation and core parsing. It is mature in its architectural approach but needs more community validation.

### 6. Trend Signals

*   **From "Cool Demo" to "Production Memory Management":** The emergence of issues like component garbage collection (a2ui) and streaming state corruption (OpenUI) signals that the industry is moving beyond initial rendering proofs-of-concept. Developers must now architect for long-running agent sessions where memory leaks and stale states are unacceptable.
*   **Backend-Orchestration Friction is the Bottleneck:** As seen heavily in CopilotKit, connecting self-hosted Python agent backends (LangGraph) to JS/TS frontends is causing the most developer pain (context propagation, socket hangs). Seamless protocol standardization—exactly what a2ui is attempting with its v1.0 spec—will be critical infrastructure moving forward.
*   **MCP (Model Context Protocol) Evolution:** The demand for Streamable HTTP in CopilotKit and schema translation issues indicates that MCP is actively maturing. Frameworks that quickly adapt to MCP's shift away from SSE and improve tool schema routing will hold a competitive advantage.
*   **Hallucination Mitigation via Strong Typing:** The explicit demand for strong SDK types (a2ui) and nested schema validation (OpenUI) highlights a trend shift: developers no longer trust LLMs to output valid UI code on their own. Future generative UI systems will increasingly rely on strict, deterministic validation layers to constrain LLM outputs into renderable schemas.

---

## Per-Project Reports

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui Project Digest: 2026-07-21

## 1. Today's Overview
The a2ui project exhibited robust activity over the past 24 hours, driven primarily by a high volume of pull requests (29 updated, 14 merged/closed) compared to a moderate issue update rate (13 updated, 3 closed). The development focus is heavily centered on maturing the v1.0 specification, enhancing the agent SDK (specifically around typing and validation), and expanding the renderer ecosystem with new platform support and bug fixes. No new version was released today, but the substantial number of closed PRs indicates active preparation for an upcoming release or milestone.

## 2. Releases
No new releases were recorded today.

## 3. Project Progress
Significant advancements were merged into the project today, spanning core protocol updates, UI components, and ecosystem fixes:
*   **v1.0 Specification & Catalog Evolution:** Merged PR [#1347](https://redirect.github.com/a2ui-project/a2ui/pull/1347) resolved an Angular type collision by renaming the Icon `path` property to `svgPath`. Open PRs like [#2020](https://redirect.github.com/a2ui-project/a2ui/pull/2020) (allowing catalog mixing via `catalogId`) and [#2019](https://redirect.github.com/a2ui-project/a2ui/pull/2019) (removing freestanding catalog requirements in v1.0) show active structural evolution.
*   **New Components & Samples:** Merged PR [#2004](https://redirect.github.com/a2ui-project/a2ui/pull/2004) added a dedicated `ProgressBar` component to the Basic Catalog, and merged PR [#1674](https://redirect.github.com/a2ui-project/a2ui/pull/1674) integrated the new BoteAI renderer.
*   **Bug Fixes:** Merged PR [#1799](https://redirect.github.com/a2ui-project/a2ui/pull/1799) fixed a critical Angular renderer bug where minified builds caused input property mismatches. Merged PR [#1931](https://redirect.github.com/a2ui-project/a2ui/pull/1931) resolved an `ERESOLVE` dependency conflict for `@a2ui/markdown-it`. 
*   **SDK & Infrastructure:** Merged PR [#2010](https://redirect.github.com/a2ui-project/a2ui/pull/2010) resolved `pub` warnings for the Flutter `genui_a2a` package.

## 4. Community Hot Topics
The most actively discussed items revolve around developer experience and memory management in long-running agent UIs:
*   **Strong Typing Demand:** Issue [#1614](https://redirect.github.com/a2ui-project/a2ui/issues/1614) (8 comments) and Issue [#1975](https://redirect.github.com/a2ui-project/a2ui/issues/1975) (4 comments) highlight strong community demand for static type checking (e.g., mypy) and strong types in Python/TS SDKs. Developers are finding dictionary manipulation error-prone and tedious.
*   **Component Garbage Collection:** Issue [#235](https://redirect.github.com/a2ui-project/a2ui/issues/235) (8 comments) discusses defining GC behavior for client-side components. The underlying need is preventing memory leaks and purging sensitive data in persistent agent UIs that continuously update surfaces.
*   **Cross-Component Interactions:** Issue [#302](https://redirect.github.com/a2ui-project/a2ui/issues/302) (3 comments) explores client-side event handling where one component affects another, pointing to a need for more decoupled, reactive UI patterns without round-tripping to the agent.

## 5. Bugs & Stability
*   **P1 - Angular Minification Bug:** Fixed today in PR [#1799](https://redirect.github.com/a2ui-project/a2ui/pull/1799). Production minified builds were renaming input keys, causing runtime mismatches and input failures in Angular components.
*   **P1 - Flutter Pub Warnings:** Fixed today in PR [#2010](https://redirect.github.com/a2ui-project/a2ui/pull/2010). Publishing `genui_a2a` triggered `pub` validation warnings regarding pre-release dependencies.
*   **P2 - NPM Dependency Conflicts:** Fixed today in PR [#1931](https://redirect.github.com/a2ui-project/a2ui/pull/1931). `@a2ui/markdown-it` had a narrow peer dependency on `web_core` causing `ERESOLVE` errors in newer versions.
*   **P2 - Missing Validation:** Open Issue [#1757](https://redirect.github.com/a2ui-project/a2ui/issues/1757) notes that `validationRegexp` was dropped from the v1.0 `TextField` schema, breaking text validation use cases from v0.9. A fix PR is currently open.

## 6. Feature Requests & Roadmap Signals
*   **Context Filtering for LLMs:** Issue [#2055](https://redirect.github.com/a2ui-project/a2ui/issues/2055) requests SDK support to transform/filter A2UI content for reading purposes. This signals a need to manage token limits and context windows when agents generate complex, embedded HTML/MCP apps.
*   **Hallucination-Proof Data Binding:** Issue [#1246](https://redirect.github.com/a2ui-project/a2ui/issues/1246) proposes better ways for LLMs to populate UI data without hallucinating structures.
*   **Ecosystem Expansion:** PR [#1912](https://redirect.github.com/a2ui-project/a2ui/pull/1912) introduces AGenUI, the first renderer covering HarmonyOS alongside iOS/Android.
*   *Roadmap Signal:* The convergence of PRs related to v1.0 catalog flexibility (mixing, `$ref` support) and the open issue to migrate Flutter GenUI to v1.0 ([#1959](https://redirect.github.com/a2ui-project/a2ui/issues/1959)) strongly suggests the next major milestone is the formal stabilization and rollout of the A2UI v1.0 protocol.

## 7. User Feedback Summary
*   **Pain Points:** Developers are frustrated by the lack of strong typing in SDKs, leading to dictionary manipulation fatigue. Missing features from v0.9 (like `validationRegexp`) are causing migration friction. Angular users hit silent production failures due to minification.
*   **Use Cases:** Agents analyzing multiple products (like ACs) and needing structured, hallucination-free ways to populate recommendation UIs. Complex multi-surface interactions where embedded MCP apps bloat the agent's context window.
*   **Satisfaction:** High community engagement in enhancing the specification and expanding renderer coverage (Swift, Angular, HarmonyOS, Flutter) indicates a healthy, adoption-driven ecosystem, though developers desire more robust, type-safe core libraries.

## 8. Backlog Watch
*   **[Issue #235](https://redirect.github.com/a2ui-project/a2ui/issues/235):** Component garbage collection. Open since Dec 2025 with 8 comments, still needing triage/implementation. Critical for long-term memory management in production agents.
*   **[Issue #1614](https://redirect.github.com/a2ui-project/a2ui/issues/1614):** Python type checking. Open since June 2026 with 8 comments, status remains `needs-triage`. High developer demand but lacks a merged path forward.
*   **[PR #488](https://redirect.github.com/a2ui-project/a2ui/pull/488):** i18n support for documentation (zh-CN). Open since Jan 2026, still unmerged. A large-scale contribution that may require more maintainer bandwidth to review and integrate.
*   **[Issue #1246](https://redirect.github.com/a2ui-project/a2ui/issues/1246) & [Issue #1255](https://redirect.github.com/a2ui-project/a2ui/issues/1255):** Both opened in April 2026 regarding data binding validation and hallucination-proof data population. Both updated today but have 0 comments, indicating they may be stuck in triage.

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

### 1. Today's Overview
OpenUI is experiencing steady development activity with 7 pull requests and 1 issue updated in the last 24 hours. The core team and contributors are primarily focused on enhancing the developer experience and UI components, notably through the introduction of a Paste Playground and a welcome experience rework. Stability and data integrity are also receiving significant attention, with active PRs addressing schema validation and thread storage persistence. A notable core bug regarding streaming binding defaults remains open. Overall, project health appears stable with a clear, active focus on tooling, UI refinement, and robustness.

### 2. Releases
None

### 3. Project Progress
The only merged/closed PR today was [#792](https://redirect.github.com/thesysdev/openui/pull/792), which handled minor housekeeping by removing a duplicate community article from the projects page. Despite no new releases, feature advancement is highly active across several open PRs. UI/UX is progressing via [#787](https://redirect.github.com/thesysdev/openui/pull/787) (AgentInterface welcome-glow rework and new loaders), while core data persistence is being addressed in [#790](https://redirect.github.com/thesysdev/openui/pull/790) (adding `updateMessage` handler to ThreadStorage). Developer tooling advanced significantly with [#775](https://redirect.github.com/thesysdev/openui/pull/775) (OpenUI Paste Playground) and architectural consistency improved with [#711](https://redirect.github.com/thesysdev/openui/pull/711) (standardizing examples on `fetchLLM`).

### 4. Community Hot Topics
Community engagement measured by comments and reactions is currently low (0 comments and 0 reactions across all tracked items). However, the most substantial topics by scope and development effort are the UI/UX architectural shifts in [#787](https://redirect.github.com/thesysdev/openui/pull/787) and the introduction of nested schema validation in [#729](https://redirect.github.com/thesysdev/openui/pull/729). The underlying needs driving these PRs point to a maturing framework that requires stricter data guarantees for component props and a more polished, branded default interface for end-users. 

### 5. Bugs & Stability
- **High Severity**: [#767](https://redirect.github.com/thesysdev/openui/issues/767) - Streaming `$binding` defaults stick at truncated values. In `@openuidev/lang-core`, `store.initialize()` skips existing keys, causing truncated defaults generated by the lexer during streaming parse recovery to permanently override correct values. This directly impacts state integrity during LLM streaming. No fix PRs are currently noted.

### 6. Feature Requests & Roadmap Signals
Based on active PRs, the near-term roadmap signals a strong push toward stricter data validation and improved developer tooling. 
- **Schema Validation**: [#729](https://redirect.github.com/thesysdev/openui/pull/729) introduces nested schema validation to repair and prune incorrect prop types rather than ignoring them, signaling a shift toward more resilient rendering.
- **Developer Tooling**: [#775](https://redirect.github.com/thesysdev/openui/pull/775) introduces a Paste Playground, indicating a priority on making OpenUI Lang easier to test, validate, and debug against different `lang-core` versions.
- **Architectural Centralization**: [#793](https://redirect.github.com/thesysdev/openui/pull/793) centralizes skill links via a Git submodule, hinting at a future where skills are maintained and updated independently from the core UI repo.
These features are highly likely to be included in the next major or minor version release.

### 7. User Feedback Summary
Direct user feedback is sparse today, with 0 comments on recent issues and PRs. However, the sole open bug report provides a clear pain point: developers working with custom streaming implementations in `lang-core` are experiencing state corruption. Specifically, when the lexer auto-closes incomplete strings during streaming, the resulting truncated defaults permanently override intended values because the store ignores re-initialization of existing keys. This highlights a friction point in OpenUI's streaming parse recovery mechanism, where resilience currently comes at the cost of state accuracy.

### 8. Backlog Watch
- **[#767](https://redirect.github.com/thesysdev/openui/issues/767)**: Open since July 14th with 0 maintainer comments. It addresses a critical state corruption bug during streaming and needs immediate attention.
- **[#711](https://redirect.github.com/thesysdev/openui/pull/711)**: Open since July 3rd (18 days). As a chore PR standardizing examples, it likely has low priority, but its age suggests it may be falling out of sync with the main branch and needs a review/merge to reduce technical debt.
- **[#729](https://redirect.github.com/thesysdev/openui/pull/729)**: Open since July 7th (14 days). This is a large, impactful PR shifting how component props are validated. It requires thorough review, but its long-open status suggests it may need dedicated maintainer bandwidth to progress toward merging.

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit Project Digest — 2026-07-21

## 1. Today's Overview
CopilotKit exhibited high maintenance activity on 2026-07-21, processing 210 issues (with 143 closed) and 68 pull requests (36 merged/closed). While no new software releases were published, the day was marked by a massive volume of documentation updates, showcase/CI infrastructure hardening, and the closure of numerous long-standing integration bugs. The high issue closure rate indicates active triage and stabilization efforts, particularly surrounding LangGraph and AG-UI integrations. The open PR pipeline suggests a strong upcoming focus on Angular framework parity and AI activity renderers.

## 2. Releases
No new releases were published today.

## 3. Project Progress
Merged and closed PRs today focused heavily on documentation accuracy, infrastructure reliability, and framework expansion:
*   **Documentation Overhaul:** A series of PRs by `marthakelly` fixed critical documentation gaps for Deep Agents (adding the `agentId` parameter to interrupt examples, [PR #5868](https://redirect.github.com/CopilotKit/CopilotKit/pull/5868)), state emission patterns ([PR #5852](https://redirect.github.com/CopilotKit/CopilotKit/pull/5852)), Google ADK Voice integration ([PR #5863](https://redirect.github.com/CopilotKit/CopilotKit/pull/5863)), Pydantic AI quickstart ([PR #5864](https://redirect.github.com/CopilotKit/CopilotKit/pull/5864)), and syntax errors in state streaming examples ([PR #5857](https://redirect.github.com/CopilotKit/CopilotKit/pull/5857), [PR #5850](https://redirect.github.com/CopilotKit/CopilotKit/pull/5850)).
*   **Showcase & CI Stabilization:** `jpr5` merged several infrastructure PRs to consolidate showcase deployments, fix an empty-response render race condition ([PR #6081](https://redirect.github.com/CopilotKit/CopilotKit/pull/6081)), and harden notify jobs ([PR #6083](https://redirect.github.com/CopilotKit/CopilotKit/pull/6083)). 
*   **Docs & Tooling:** `BenTaylorDev` fixed stale quickstart links and added MCP Codex setup docs ([PR #6079](https://redirect.github.com/CopilotKit/CopilotKit/pull/6079)), and added a CodeRabbit configuration to reduce review noise ([PR #6077](https://redirect.github.com/CopilotKit/CopilotKit/pull/6077)).

## 4. Community Hot Topics
*   **LangGraph + AG-UI Integration Friction:** The most discussed issue was [Issue #2200](https://redirect.github.com/CopilotKit/CopilotKit/issues/2200) (31 comments), highlighting persistent problems with thread reloading when using LangGraph with the AG-UI interface. Similarly, [Issue #2066](https://redirect.github.com/CopilotKit/CopilotKit/issues/2066) (12 comments) noted failures in suppressing messages and registering emits. This underscores that connecting LangGraph agents smoothly remains a primary pain point for the community.
*   **MCP Tool Schema Handling:** [Issue #2061](https://redirect.github.com/CopilotKit/CopilotKit/issues/2061) (18 comments) revealed that tool schemas for MCP servers are sometimes passed incorrectly to the LLM, causing action retries or failures. This indicates a need for better schema translation in the runtime.
*   **Tailwind CSS Conflicts:** [Issue #1857](https://redirect.github.com/CopilotKit/CopilotKit/issues/1857) (19 comments) showed ongoing frustration regarding CopilotKit's CSS overriding existing Tailwind dark styles, pointing to a need for better CSS encapsulation or scoping.

## 5. Bugs & Stability
*   **Critical: Multi-user State Leakage:** [Issue #1995](https://redirect.github.com/CopilotKit/CopilotKit/issues/1995) (15 comments) reported that `LanggraphAgent` saves interrupt state in the instance, causing cross-contamination between simultaneous users. (Closed, presumably fixed in recent updates).
*   **High: Silent Errors & Missing UI Fallbacks:** [Issue #2249](https://redirect.github.com/CopilotKit/CopilotKit/issues/2249) (15 comments) noted that expired AWS Bedrock credentials cause the UI to hang infinitely with no error logged or displayed via `onError`. 
*   **High: Socket Hangs on Long Tasks:** [Issue #1759](https://redirect.github.com/CopilotKit/CopilotKit/issues/1759) (9 comments) and [Issue #2043](https://redirect.github.com/CopilotKit/CopilotKit/issues/2043) (14 comments) reported disconnections and socket hangs during long-running parallel nodes, especially when the browser tab is backgrounded.
*   **Medium: Angular Chat Layout Bug:** [PR #6080](https://redirect.github.com/CopilotKit/CopilotKit/pull/6080) addresses an open bug where the floating-input height gets stuck at `0` on the welcome screen.
*   **Medium: Chat Controls Unresponsive:** [Issue #2136](https://redirect.github.com/CopilotKit/CopilotKit/issues/2136) (8 comments) reports that `reloadMessages` and `reset` in `useCopilotChat` are non-functional when using LangGraph.

## 6. Feature Requests & Roadmap Signals
*   **Streamable HTTP for MCP:** [Issue #2319](https://redirect.github.com/CopilotKit/CopilotKit/issues/2319) (12 comments) requests support for the new MCP protocol revision replacing SSE with Streamable HTTP. Given the protocol shift, this is highly likely to be picked up in an upcoming release.
*   **Angular Parity with React v2:** [Issue #5428](https://redirect.github.com/CopilotKit/CopilotKit/issues/5428) (9 comments) requests a stop button and run serialization for the Angular package. This aligns with today's open [PR #6072](https://redirect.github.com/CopilotKit/CopilotKit/pull/6072) which adds an A2UI activity renderer for Angular, signaling active investment in Angular ecosystem parity.
*   **Message Kwargs Propagation:** [Issue #1747](https://redirect.github.com/CopilotKit/CopilotKit/issues/1747) (8 comments) requests the ability to pass `additional_kwargs` through to the frontend, useful for custom metadata like fallback flags.

## 7. User Feedback Summary
Users are pushing CopilotKit into production with complex, multi-user agent architectures but are encountering stability ceilings. The core friction lies in self-hosted Python backends (FastAPI/LangGraph), where users struggle with context propagation ([Issue #2278](https://redirect.github.com/CopilotKit/CopilotKit/issues/2278)), long-running task timeouts, and subgraph interrupt failures. While the framework is praised for its quick-start capabilities, advanced use cases—like managing parallel nodes or handling silent API failures—reveal gaps in the runtime's robustness. Error handling in the React UI is a notable source of dissatisfaction, as background failures leave users staring at loading spinners.

## 8. Backlog Watch
*   [Issue #2278](https://redirect.github.com/CopilotKit/CopilotKit/issues/2278): `CopilotKitReadable` context is ignored when using self-hosted LLMs. Open with 9 comments; crucial for non-cloud users.
*   [Issue #2136](https://redirect.github.com/CopilotKit/CopilotKit/issues/2136): `useCopilotChat` `reloadMessages` and `reset` not working. Open with 8 comments; core chat functionality is broken for some LangGraph users.
*   [Issue #2447](https://redirect.github.com/CopilotKit/CopilotKit/issues/2447): Rendering bug with `useCopilotAction` and `followUp: true`. Open with 8 comments; needs maintainer triage.
*   [Issue #1747](https://redirect.github.com/CopilotKit/CopilotKit/issues/1747): Inability to pass message `additional_kwargs`. Open since May 2025 with 8 comments; a low-friction enhancement that would greatly aid backend-frontend state signaling.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/linqinghao/agents-radar).*