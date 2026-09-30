# Generative UI Ecosystem Digest 2026-09-30

> Issues: 45 | PRs: 119 | Projects covered: 4 | Generated: 2026-09-30 04:42 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## Cross-Ecosystem Comparison

## 1. Ecosystem Overview
The generative UI ecosystem is currently transitioning from foundational schema-driven rendering to complex, multi-platform, multi-agent runtime orchestration. Projects are heavily investing in cross-framework parity (extending beyond React to Angular, Vue, Swift, and Dart) to meet enterprise demands for ubiquitous AI interface delivery. Simultaneously, as AI agents become more autonomous, these projects are confronting the architectural challenges of multi-agent state management, streaming performance, and strict UI encapsulation. The focus has shifted from merely generating UI components to ensuring performant, secure, and predictable rendering across diverse environments—from mobile native to server-side PDFs.

## 2. Activity Comparison

| Project | Issues Updated (Open) | PRs Updated (Closed/Merged) | Release Status |
| :--- | :--- | :--- | :--- |
| **a2ui** | 30 (21) | 50 (14) | No release (v1.0 protocol rollout in progress) |
| **OpenUI** | 0 (0) | 13 (4) | No release (version bump PR staged) |
| **json-render** | 1 (1) | 3 (0) | No release |
| **CopilotKit** | 14 (N/A) | 53 (27) | **v1.75.1** released |

## 3. Shared Feature Directions

*   **Cross-Framework & Multi-Target Parity:** Achieving consistent behavior across disparate UI targets is a universal priority. **a2ui** is executing a coordinated push for v1.0 entry points across React, Angular, Lit, Swift, and Dart. **CopilotKit** is actively merging `transformMessages` APIs for Vue and Angular to match React, while also fixing Angular web component rendering. **json-render** is focused on aligning its secondary adapters (`react-pdf`, `shadcn`) with the core React adapter's layout and conditional rendering logic.
*   **Multi-Agent State & UX Management:** As developers build complex agent topologies, managing the resulting UI clutter is critical. **CopilotKit** addressed the highly demanded need to filter redundant sub-agent messages in LangGraph Supervisor patterns. Similarly, **a2ui** is refactoring its Agent SDK ergonomics (moving prompt examples to per-`CatalogConfig`) to better support multi-catalog, multi-agent capability negotiations without breaking the rendering pipeline.
*   **Streaming and Performance Optimization:** Rendering AI generation "snappily" requires overcoming runtime bottlenecks. **a2ui** is actively debating custom streaming pipelines for its Express Compiler. **CopilotKit** resolved a severe performance regression (12-76s UI freezes) caused by deep-cloning run state in long conversation threads.

## 4. Differentiation Analysis

*   **a2ui** differentiates via a **protocol-first, inference-to-rendering pipeline** approach. Its focus on multi-catalog transformations, reserved protocol key prefixes, and cross-SDK DataModel parity targets platform engineers building complex, multi-platform AI agent experiences from the ground up.
*   **OpenUI** is currently in a **maintainer-led, core-engine overhaul phase**. By replacing Recharts with custom D3 charts and refactoring threading with the OpenAI SDK, it is prioritizing a lighter, more customizable standalone rendering engine and Cloud integration, distinct from the multi-agent orchestration focus of its peers.
*   **json-render** maintains a strict **schema-driven, declarative adapter model**. Its technical focus is narrow but deep: ensuring that a single JSON schema renders identically whether targeting the DOM via `shadcn` or generating a serverside PDF via `react-pdf`. 
*   **CopilotKit** operates as a **full-stack AI copilot framework**. It differentiates by focusing on the end-to-end developer experience of runtime orchestration, tackling enterprise-grade concerns like CSS Shadow DOM encapsulation, AG-UI stream standardization, and prompt caching architectures.

## 5. Community Momentum & Maturity

*   **CopilotKit** exhibits the highest momentum and operational maturity. It has the highest throughput (53 PRs, 27 closed), just shipped a release with breaking changes, and maintains active community discourse on complex architectural pain points (prompt caching, Shadow DOM).
*   **a2ui** shows strong contributor momentum (50 PRs) indicative of a project rapidly maturing toward its v1.0 milestone. Community discussions (Swift schema sync, streaming) are highly technical and proactive, signaling an engaged, advanced user base.
*   **json-render** is in a stable, quiet execution phase. Community engagement is low-volume but high-signal, focusing on specific schema lifecycle enhancements (directive resolution).
*   **OpenUI** is experiencing a community drought (0 issues, 0 comments on PRs). While internal engineering momentum is high, the lack of public discourse suggests the project is in a transitional or tightly controlled architectural phase, potentially alienating external contributors temporarily.

## 6. Trend Signals

*   **Enterprise Encapsulation is Non-Negotiable:** The friction around CSS leaks in Angular Shadow DOM (CopilotKit) and the need for automated Swift schema synchronization (a2ui) highlight that enterprise adoption of generative UI requires strict style isolation and first-class, strongly-typed SDK support. Generative UI cannot break host application styling.
*   **Multi-Agent UX Requires New Primitives:** As agent architectures (like LangGraph Supervisor) mature, chat interfaces become bloated with machine-to-machine chatter. Developers urgently need UI primitives (like message transformers) to abstract away orchestration noise and present cohesive experiences to the user.
*   **"Write Once, Render Anywhere" Remains Architecturally Difficult:** The divergence of rendering logic between web and PDF walkers in `json-render` proves that sharing generative UI schemas across fundamental rendering paradigms (DOM vs. document layout) is fraught with edge cases. Adapter parity will be a major ongoing engineering tax.
*   **Prompt Caching vs. Dynamic State:** CopilotKit's community highlights a growing industry friction: injecting dynamic application state into LLM system prompts destroys provider-side prompt caching, drastically increasing latency and cost. Future generative UI protocols will need architectures that expose application state to agents outside the prompt context to preserve cache hits.

---

## Per-Project Reports

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui Project Digest (2026-09-30)

## 1. Today's Overview
The a2ui project is experiencing a highly active development phase, marked by a significant push towards cross-SDK parity and the v1.0 protocol rollout. With 30 issues updated (21 open) and 50 PRs updated (36 open, 14 closed) in the last 24 hours, contributor momentum is strong. The primary focus is currently bifurcated between hardening existing renderers (specifically addressing critical validation and data-model bugs in the Dart/`genui` ecosystem) and aggressively expanding v1.0 protocol support across web renderers (React, Angular, Lit). Architectural discussions around multi-catalog transformations and Agent SDK ergonomics indicate that the project is actively maturing its inference-to-rendering pipeline for complex, multi-platform AI agent experiences.

## 2. Releases
No new releases were recorded today.

## 3. Project Progress
Significant progress was made on v1.0 protocol alignment and cross-SDK conformance. 
*   **Closed/Merged PRs:** Key merges include updates to the Swift ecosystem documentation and naming ([#1762](https://redirect.github.com/a2ui-project/a2ui/pull/1762)), a spec enforcement requiring `actionId` when an action requests a response ([#2072](https://redirect.github.com/a2ui-project/a2ui/pull/2072)), and a fix for Swift `formatString` silently dropping interpolated objects/arrays ([#2780](https://redirect.github.com/a2ui-project/a2ui/pull/2780)). The Dart Agent SDK also saw its v0.9 protocol API stubs merged ([#2890](https://redirect.github.com/a2ui-project/a2ui/pull/2890)), and new message version conformance cases were added ([#2633](https://redirect.github.com/a2ui-project/a2ui/pull/2633)).
*   **Active Open PRs:** A massive coordinated effort is underway for web renderers, with open PRs adding v1.0 entry points, multi-catalog support, and explorer galleries for Lit ([#2860](https://redirect.github.com/a2ui-project/a2ui/pull/2860)), React ([#2861](https://redirect.github.com/a2ui-project/a2ui/pull/2861)), Angular ([#2862](https://redirect.github.com/a2ui-project/a2ui/pull/2862)), and web_core ([#2859](https://redirect.github.com/a2ui-project/a2ui/pull/2859)). Additionally, architectural PRs for reserved protocol key prefixes ([#2891](https://redirect.github.com/a2ui-project/a2ui/pull/2891)) and cross-SDK DataModel/MessageProcessor parity ([#2883](https://redirect.github.com/a2ui-project/a2ui/pull/2883), [#2884](https://redirect.github.com/a2ui-project/a2ui/pull/2884)) are pending.

## 4. Community Hot Topics
*   **Swift Schema Synchronization** ([#2034](https://redirect.github.com/a2ui-project/a2ui/issues/2034), 4 comments): The community is actively discussing the need for automated generation of inline Swift representations of the A2UI JSON schema to prevent manual sync drift—a classic pain point in strongly-typed SDKs consuming dynamic JSON schemas.
*   **Streaming in Express Compiler** ([#2896](https://redirect.github.com/a2ui-project/a2ui/issues/2896), 3 comments): High interest in supporting streaming to demonstrate the "snappiest possible generation experience." The discussion centers on whether to reuse the existing generated Lexer or build a custom streaming pipeline.
*   **Agent SDK API Ergonomics** ([#2893](https://redirect.github.com/a2ui-project/a2ui/issues/2893), 3 comments): Prompt examples configuration is sparking debate. Moving examples from the top-level `A2uiGenerator` down to per-`CatalogConfig` is seen as a necessary refactoring to support multi-catalog capabilities properly without breaking capability negotiation.
*

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

Here is the structured project digest for OpenUI on 2026-09-30.

### 1. Today's Overview
OpenUI exhibited active internal development momentum over the last 24 hours, driven entirely by maintainers and automated bots rather than community input. With 13 pull requests updated and zero new or active issues reported, the project is currently in a focused, "heads-down" engineering phase. The activity centers around a major architectural overhaul of the charting system (replacing Recharts with D3), significant refactoring of cookbook threading mechanisms, and updates to Cloud templates. A pending version packages PR also indicates that a new official release is being queued. 

### 2. Releases
**None**
No new releases were published today. However, PR [#1257](https://redirect.github.com/thesysdev/openui/pull/1257) was opened by the Changesets GitHub action, signaling that a version bump and npm package publication are being staged for the near future.

### 3. Project Progress
The project saw 4 PRs closed today, indicating consolidation of ongoing work streams:
*   **Star count reliability fixed:** [PR #1249](https://redirect.github.com/thesysdev/openui/pull/1249) (Closed) fixed a bug where the GitHub star count was missing in the site header by routing requests through a same-origin, CDN-cached API endpoint instead of making direct browser-to-GitHub calls.
*   **Cookbook threading refactored:** [PR #1261](https://redirect.github.com/thesysdev/openui/pull/1261) (Closed) refactored cookbooks to run tools with the OpenAI SDK's `runTools()` instead of a hand-written tool loop. This was closed because its changes were absorbed into [PR #1258](https://redirect.github.com/thesysdev/openui/pull/1258) (Open), which stores threads in Gateway conversations.
*   **Template identification:** [PR #1259](https://redirect.github.com/thesysdev/openui/pull/1259) (Closed) added a `User-Agent` header to outbound server-side requests for the `openui-cloud` template, allowing traffic to be identifiable.
*   **Feedback CLI rejected/superseded:** [PR #1266](https://redirect.github.com/thesysdev/openui/pull/1266) (Closed) attempted to add an `openui feedback` CLI command for anonymous PostHog telemetry but was closed without merging.

Active development also advanced on replacing Recharts with D3 charts ([PR #1248](https://redirect.github.com/thesysdev/openui/pull/1248) and breaking change [PR #1263](https://redirect.github.com/thesysdev/openui/pull/1263)), and adding Cloud script generation/editing options to `lang-core` ([PR #1265](https://redirect.github.com/thesysdev/openui/pull/1265)).

### 4. Community Hot Topics
There is no community-driven activity to report today. The repository saw **0 issues** created, updated, or closed in the last 24 hours. Furthermore, all 13 active PRs show 0 comments and 0 reactions. This indicates that the current development cycle is entirely maintainer-led, with no active public discourse or debate occurring on recent code changes.

### 5. Bugs & Stability
No bugs or regressions were reported by the community today (0 issues). The only stability fix addressed was an internal UI bug:
*   **Low Severity:** GitHub star count failing to render in the site header due to client-side GitHub API rate limits. 
    *   **Fix:** Closed in [PR #1249](https://redirect.github.com/thesysdev/openui/pull/1249) by implementing a same-origin, CDN-cached API endpoint with a fallback mechanism for invalid payloads.

### 6. Feature Requests & Roadmap Signals
While there are no user feature requests today, the open PRs provide strong signals regarding the immediate project roadmap:
*   **Charting Engine Migration:** [PR #1263](https://redirect.github.com/thesysdev/openui/pull/1263) is a breaking change that entirely removes the `recharts` dependency in favor of custom D3 charts (building on [PR #1248](https://redirect.github.com/thesysdev/openui/pull/1248)). This suggests the next release will offer a lighter, more customizable charting experience.
*   **Cloud & Standalone Enhancements:** [PR #1265](https://redirect.github.com/thesysdev/openui/pull/1265) introduces Cloud-only script generation, incremental bundle editing, and metadata options. Concurrently, [PR #1260](https://redirect.github.com/thesysdev/openui/pull/1260) updates Cloud Templates to use Chat Completions format, pointing toward a more robust standalone Cloud integration.
*   **Artifact Rendering:** [PR #1268](https://redirect.github.com/thesysdev/openui/pull/1268) introduces a new `ArtifactRenderer` to `react-lang`, which will likely expand the UI capabilities for AI-generated outputs.

### 7. User Feedback Summary
Due to a complete absence of issue creation or PR commentary over the last 24 hours, there is no direct user feedback, pain points, or use cases to analyze today. The closure of the automated feedback CLI PR ([#1266](https://redirect.github.com/thesysdev/openui/pull/1266)) suggests the team is still evaluating how best to capture user sentiment, if at all.

### 8. Backlog Watch
There are no long-unanswered community issues requiring maintainer attention. However, within the PR pipeline:
*   [PR #1244](https://redirect.github.com/thesysdev/openui/pull/1244) (Update OpenUI templates and examples) has been open since September 25th. As an automated dependency refresh, it is approaching 5 days in the pipeline and may need a final review or rebase to be merged alongside the pending version bump.
*   The stacked PRs surrounding the cookbook refactoring ([#1258](https://redirect.github.com/thesysdev/openui/pull/1258), [#1264](https://redirect.github.com/thesysdev/openui/pull/1264)) and D3 chart migration ([#1248](https://redirect.github.com/thesysdev/openui/pull/1248), [#1263](https://redirect.github.com/thesysdev/openui/pull/1263)) represent a complex dependency chain that will require careful, sequential merging to avoid pipeline breakage.

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

Here is the project digest for `vercel-labs/json-render` as of 2026-09-30.

### 1. Today's Overview
The `json-render` project exhibits steady, focused maintenance activity today, with three open pull requests and one new feature request, but no new releases. The development focus is heavily directed towards aligning the behavior of secondary adapters (`react-pdf`, `shadcn`) with the core `@json-render/react` package, specifically addressing layout and conditional rendering edge cases. Community engagement is functional but quiet, with no comments or reactions on today's updated items, suggesting contributors are working independently on well-defined bug fixes and enhancements. Overall project health appears stable, with active identification and patching of cross-adapter discrepancies.

### 2. Releases
No new releases were published today.

### 3. Project Progress
No PRs were merged or closed today. However, active development is progressing on three distinct fronts:
*   **PDF Rendering Consistency:** Two PRs ([#364](https://redirect.github.com/vercel-labs/json-render/pull/364) and [#366](https://redirect.github.com/vercel-labs/json-render/pull/366)) are advancing fixes for `@json-render/react-pdf` to ensure server-side rendering (`renderToBuffer`, `renderToStream`, `renderToFile`) correctly handles `repeat` containers and `$item` visibility conditions, mirroring the logic already present in the main React adapter.
*   **UI Component Responsiveness:** [PR #365](https://redirect.github.com/vercel-labs/json-render/pull/365) advances the `shadcn` adapter by making `Grid` components responsive across breakpoints and fixing container overflow issues for wide content like `Table`.

### 4. Community Hot Topics
Today's items have 0 comments and 0 reactions, indicating a low-discussion, execution-focused period. The most notable item is [Issue #367](https://redirect.github.com/vercel-labs/json-render/issues/367), a feature request regarding directive resolution in conditions. 
*   **Underlying Need:** The user notes that while directives (`defineDirective`) are resolved in props and action params via `resolvePropValue`, they are ignored in conditional logic (`visible`, `$cond`). This highlights a user need for a more unified and predictable directive evaluation lifecycle across all aspects of the JSON schema, not just isolated property bindings.

### 5. Bugs & Stability
No crashes or critical regressions were reported today, but several medium-severity behavioral bugs were identified via open PRs:
1.  **High/Medium Severity - PDF Repeat Container Duplication:** [PR #366](https://redirect.github.com/vercel-labs/json-render/pull/366) addresses a bug where server-side PDF walkers draw a repeat container *once per item* instead of once for all items. This structural mismatch between web and PDF output breaks complex PDF layouts.
2.  **Medium Severity - PDF List Filtering Broken:** [PR #364](https://redirect.github.com/vercel-labs/json-render/pull/364) fixes an issue where `visible` conditions referencing `$item`/`$index` on `repeat` elements fail to filter lists in `@json-render/react-pdf`, leading to hidden items still being processed/rendered in the PDF output.
3.  **Low/Medium Severity - Shadcn Layout Overflow:** [PR #365](https://redirect.github.com/vercel-labs/json-render/pull/365) fixes a layout bug where `Table` and other wide content overflow the page in `Grid` and `Stack` components, and makes `Grid` responsive on mobile devices.

### 6. Feature Requests & Roadmap Signals
*   **Directive Resolution in Conditions ([Issue #367](https://redirect.github.com/vercel-labs/json-render/issues/367)):** The user requests that `resolvePropValue` (or a similar mechanism) be applied to condition evaluations (`visible`, `$cond`). 
*   **Prediction:** Given that the project is currently at core version 0.20 and actively expanding its directive capabilities, it is highly likely that the maintainers will incorporate this into the next minor version (e.g., 0.21) to unify the resolution pipeline. Upcoming roadmap signals also point heavily towards stabilizing the `react-pdf` and `shadcn` adapters based on current PR traffic.

### 7. User Feedback Summary
Real user feedback today is positive regarding the core architecture but highlights friction in advanced use cases. The reporter of Issue #367 explicitly praises directives as "really useful," indicating high satisfaction with the schema-driven approach. However, the existence of PRs #364 and #366 reveals a significant pain point for users generating PDFs: the divergence in rendering logic between the web and PDF walkers. Users attempting to share JSON schemas across web and PDF outputs are encountering broken layouts and unfiltered data in their PDFs. Furthermore, the Shadcn PR indicates that mobile responsiveness and flexbox/grid overflow handling are current pain points for web UI users.

### 8. Backlog Watch
The repository currently has a small, actionable backlog requiring maintainer review:
*   **[PR #364](https://redirect.github.com/vercel-labs/json-render/pull/364) & [PR #366](https://redirect.github.com/vercel-labs/json-render/pull/366):** Both submitted by `peter-cynomi` address critical discrepancies in `@json-render/react-pdf`. As they have no comments, they need maintainer review to unblock PDF rendering consistency.
*   **[PR #365](https://redirect.github.com/vercel-labs/json-render/pull/365):** Submitted by `sushanshakya77` closing issue #355. Needs review to merge responsive layout improvements into the `shadcn` adapter.
*   **[Issue #367](https://redirect.github.com/vercel-labs/json-render/issues/367):** Needs maintainer acknowledgment to confirm if directive resolution in conditions aligns with the core team's architectural vision for v0.21+.

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit Project Digest — 2026-09-30

## 1. Today's Overview
CopilotKit is experiencing highly active development, evidenced by 53 updated pull requests (27 merged/closed) and 14 updated issues in the last 24 hours. The project just shipped version v1.75.1, which introduces a breaking change for Angular web components alongside critical runtime and UI fixes. Current engineering efforts are heavily focused on cross-framework feature parity (React, Vue, Angular, React Native), deep performance optimizations for long conversation threads, and refining the developer experience for multi-agent architectures like LangGraph Supervisor. Project health appears robust, with maintainer responsiveness remaining high for critical bugs and security vulnerabilities.

## 2. Releases
- **v1.75.1** ([PR #7523](https://redirect.github.com/CopilotKit/CopilotKit/pull/7523))
  - **Features & Breaking Changes:** `feat(angular)!: render A2UI without Lit and support web component cat…` ([#7504](https://redirect.github.com/CopilotKit/CopilotKit/issues/7504)). The `!` indicates a breaking change for Angular users; migrating will require updating how web components are handled, moving away from Lit.
  - **Fixes:** 
    - Distinguished Intelligence replay errors from live failures ([#7353](https://redirect.github.com/CopilotKit/CopilotKit/pull/7353)), preventing historical errors from inappropriately clearing `isRunning` state.
    - Fixed MCP apps renderer to follow the host page's dark theme ([#7467](https://redirect.github.com/CopilotKit/CopilotKit/issues/7467)).
    - General runtime fixes.

## 3. Project Progress
Significant progress was made today on cross-framework stability, UI performance, and multi-agent ux:
- **Message Transformations:** Merged `transformMessages` API for Vue and Angular, plus React fixes ([PR #7509](https://redirect.github.com/CopilotKit/CopilotKit/pull/7509)). This directly solves the visual clutter in LangGraph Supervisor patterns by allowing developers to filter out redundant sub-agent messages.
- **Vue Performance:** Resolved a severe performance regression where deep-cloning run state caused 12-76s UI freezes in long threads ([PR #7525](https://redirect.github.com/CopilotKit/CopilotKit/pull/7525)).
- **Security & Dependencies:** Addressed CVE-2026-48818 by upgrading `starlette` ([PR #7531](https://redirect.github.com/CopilotKit/CopilotKit/pull/7531)), updated Python SDK dependencies for `ag-ui-langgraph` history guarding ([PR #7172](https://redirect.github.com/CopilotKit/CopilotKit/pull/7172)), and refreshed stale security override floors ([PR #7167](https://redirect.github.com/CopilotKit/CopilotKit/pull/7167)).
- **Starters & Docs:** Added a Claude Managed Agents starter with Learning skills ([PR #7521](https://redirect.github.com/CopilotKit/CopilotKit/pull/7521)) and clarified documentation regarding AG-UI streams and thread providers ([PR #7526](https://redirect.github.com/CopilotKit/CopilotKit/pull/7526)).

## 4. Community Hot Topics
- **LangGraph Supervisor Message Clutter** ([Issue #1959](https://redirect.github.com/CopilotKit/CopilotKit/issues/1959)):_closed: — With 7 comments and 1 reaction, this is a highly validated pain point. Users leveraging the Supervisor pattern find their chat state bloated with repeated sub-agent messages. The underlying need is better state management primitives for complex multi-agent topologies. *Addressed by PR #7509.*
- **Prompt Caching Invalidation** ([Issue #7480](https://redirect.github.com/CopilotKit/CopilotKit/issues/7480)):open: — Gaining traction with 2 comments. App context and state notes injected into `system_message` break provider-side prompt caching (e.g., Anthropic/OpenAI), driving up latency and costs. Users are asking for an architecture that allows state exposure without destroying cache hits.
- **CSS Encapsulation in Angular** ([Issue #7434](https://redirect.github.com/CopilotKit/CopilotKit/issues/7434)):open: — 3 comments. Enterprise Angular users strictly using Shadow DOM are frustrated by CopilotKit's CSS leaking out and overriding global layout styles.

## 5. Bugs & Stability
- **[High] Vue UI Freezes on Long Threads** ([Issue #7507](https://redirect.github.com/CopilotKit/CopilotKit/issues/7507)) — `getMeta()` deep-cloned run state 6x per row, consuming 84% of the main thread. **Status:** Fixed in [PR #7525](https://redirect.github.com/CopilotKit/CopilotKit/pull/7525).
- **[High] ZodError on /connect Replay After Stopping a Run** ([Issue #7527](https://redirect.github.com/CopilotKit/CopilotKit/issues/7527)) — Stopping a run stores a `RUN_FINISHED` event missing `threadId`/`runId`, crashing the client on reconnect. **Status:** Fix PR open at [PR #7530](https://redirect.github.com/CopilotKit/CopilotKit/pull/7530).
- **[Medium] Angular CSS Leaks from Shadow DOM** ([Issue #7434](https://redirect.github.com/CopilotKit/CopilotKit/issues/7434)) — `ck-input-shadow` and `:host` rules break encapsulated layouts. **Status:** Fix PR open at [PR #7528](https://redirect.github.com/CopilotKit/CopilotKit/pull/7528).
- **[Medium] Text After Tool Call Missing in v1 Client** ([Issue #7417](https://redirect.github.com/CopilotKit/CopilotKit/issues/7417)) — Assistant text emitted after a tool call in the same run is silently dropped. **Status:** No fix PR yet.
- **[Low] HEADER_RESOLUTION_FAILED Lacks Context** ([Issue #7511](https://redirect.github.com/CopilotKit/CopilotKit/issues/7511)) — Error events missing `agentId`/`threadId` make debugging auth failures difficult. **Status:**

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/linqinghao/agents-radar).*