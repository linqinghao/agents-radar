# Generative UI Ecosystem Digest 2026-09-04

> Issues: 38 | PRs: 91 | Projects covered: 4 | Generated: 2026-09-04 03:36 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## Cross-Ecosystem Comparison

## Cross-Project Comparison Report: Generative UI Ecosystem (2026-09-04)

### 1. Ecosystem Overview
The generative UI ecosystem is currently bifurcated between high-velocity, architecture-heavy platforms and stagnant or legacy renderers. Active projects are rapidly advancing beyond basic UI generation toward multi-framework parity, robust agent observability, and strict protocol stabilization. There is a clear industry pivot toward resilient, fault-tolerant parsing to handle unpredictable LLM outputs, alongside aggressive expansion into enterprise-grade features like persistent dashboards and observability inspectors. Meanwhile, earlier generations of tooling are experiencing natural attrition, with communities pushing toward more capable successors.

### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Releases (24h) |
| :--- | :--- | :--- | :--- |
| **a2ui** | 16 | 50 | 0 |
| **CopilotKit** | 20 | 41 | 3 (Core, Channels, Angular) |
| **OpenUI** | 2 | 0 | 0 |
| **json-render** | 0 | 0 | 0 |

### 3. Shared Feature Directions

*   **Multi-Framework & Language Parity**: Both **a2ui** and **CopilotKit** are dedicating significant resources to ensuring consistent behavior across environments. a2ui is rigorously aligning Dart, TypeScript, and Python SDKs via conformance testing, while CopilotKit is actively upgrading its Angular SDK to match React feature parity (e.g., DevConsole/Inspector configs). **OpenUI** is also feeling this pressure, with users demanding Vue.js rendering parity.
*   **Resilient DSL/Protocol Parsing**: As LLMs are integrated deeper into workflows, their outputs frequently break strict parsers. **a2ui** is addressing LLMs wrapping DSL in markdown code fences, while **CopilotKit** is tracking AG-UI protocol inconsistencies (e.g., `ag-ui` vs `ag_ui` keys) and empty tool schemas that cause silent rendering failures.
*   **Migration & DX Friction**: Transition paths remain painful. **OpenUI** lacks a migration guide from `json-render`, and **CopilotKit** users are experiencing friction moving from v1 to v2, requiring manual example porting.

### 4. Differentiation Analysis

*   **a2ui**: Differentiates through a **polyglot architecture and protocol-first approach**. Its primary focus is achieving v1.0 specification stability and cross-language conformance (Dart, TS, Python). It appeals to platform builders requiring a strict, reproducible DataModel and macro runtimes across mobile and web.
*   **CopilotKit**: Differentiates via an **agent-intelligence and observability stack**. The focus is shifting from raw UI rendering to agent state management, learning platforms, and executive dashboards. It targets enterprise SaaS workflows requiring persistent conversational UIs, cross-adapter reliability, and deep inspector tooling.
*   **OpenUI**: Positioned as a **lightweight, direct successor to `json-render`**. Its current differentiator is conceptual simplicity, though it currently lacks the engineering depth of a2ui or CopilotKit, struggling with basic renderer implementations (e.g., Vue markdown parsing).
*   **json-render**: Effectively a **legacy/deprecated** artifact in the current landscape, generating zero ecosystem momentum.

### 5. Community Momentum & Maturity

*   **Rapid Iteration (a2ui, CopilotKit)**: Both projects demonstrate high open-source velocity (50 and 41 PRs updated, respectively). CopilotKit shows mature release cadence with 3 simultaneous patches, while a2ui demonstrates deep architectural execution (merging 13 PRs, opening massive macro-runtime PRs). Both are tackling hard, systemic problems (concurrency, cross-language conformance).
*   **Stalled/Low Momentum (OpenUI, json-render)**: OpenUI relies entirely on community discussion with zero core team merges or PRs in the last 24 hours. Critical bugs and documentation gaps are tagged `good first issue`, indicating a reliance on external contributors rather than active internal development. json-render is entirely dormant.

### 6. Trend Signals

*   **Conformance Testing is the New Standard**: As generative UI scales, "it works on my machine" is insufficient. The emergence of cross-language conformance tests (a2ui Issue #2150) and cross-adapter reliability suites (CopilotKit Issue #2979) signals that spec-rigor and deterministic rendering across environments are becoming baseline requirements.
*   **LLMs are Leaky Abstractions Requiring Defensive Parsers**: Production deployments are exposing that LLMs cannot be trusted to output pristine DSL (a2ui Issue #2514). Frameworks must implement fault-tolerant, strip-and-sanitize parsing logic to handle markdown-fenced DSL or malformed protocol keys.
*   **From Generation to Observation**: The UI generation problem is considered largely solved; the frontier is observability. The introduction of Inspector Learning Views and persistent A2UI dashboard surfaces (CopilotKit PRs #6875, #6876) indicates that enterprise users now prioritize debugging agent state and pinning generated UIs over the initial rendering capability.
*   **Build/Packaging Pipelines are the New Bottleneck**: The most critical open bugs (a2ui Issue #1307 for React CSS, CopilotKit Issue #4151 for Vite 7 module resolution) are not logic errors, but build and packaging pipeline failures. As these frameworks support more targets (Angular, Dart, React Native), the bundler complexity is outpacing engineering bandwidth.

---

## Per-Project Reports

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

1. **Today's Overview**
The a2ui project is experiencing a surge in development activity, with 50 pull requests and 16 issues updated in the last 24 hours. A significant portion of this effort is dedicated to achieving multi-language parity and cross-platform conformance, specifically aligning the Dart and TypeScript (web_core) implementations of the DataModel and expression parsers. Concurrently, there is a major architectural expansion underway for the Python Agent SDK, introducing fluent builders, macro runtimes, and new CLI tooling. With 13 PRs merged/closed and high issue engagement, project health and momentum appear strong, though a long-standing P1 React styling bug remains unresolved.

2. **Releases**
No new releases were published today.

3. **Project Progress**
Thirteen PRs were merged or closed today, advancing bug fixes and foundational architecture. A key merged fix was [PR #2371](https://redirect.github.com/a2ui-project/a2ui/pull/2371), which resolved [Issue #2369](https://redirect.github.com/a2ui-project/a2ui/issues/2369) by ensuring the generated Express parser is reproducible from source builds. Active progress was made on cross-language stability via open PRs: [PR #2499](https://redirect.github.com/a2ui-project/a2ui/pull/2499) (fixing DataModel primitive write divergences), [PR #2497](https://redirect.github.com/a2ui-project/a2ui/pull/2497) (cross-language expression parser conformance), [PR #2494](https://redirect.github.com/a2ui-project/a2ui/pull/2494) (adding Dart CI coverage), and [PR #2491](https://redirect.github.com/a2ui-project/a2ui/pull/2491)/[PR #2492](https://redirect.github.com/a2ui-project/a2ui/pull/2492) (fixing the expression parser recursion guard). On the feature front, a massive multi-layered Python builder and macro stack ([PR #2425](https://redirect.github.com/a2ui-project/a2ui/pull/2425), [PR #2519](https://redirect.github.com/a2ui-project/a2ui/pull/2519), [PR #2520](https://redirect.github.com/a2ui-project/a2ui/pull/2520), [PR #2521](https://redirect.github.com/a2ui-project/a2ui/pull/2521), [PR #2523](https://redirect.github.com/a2ui-project/a2ui/pull/2523)) and Skill/evaluation frameworks ([PR #2516](https://redirect.github.com/a2ui-project/a2ui/pull/2516), [PR #2517](https://redirect.github.com/a2ui-project/a2ui/pull/2517), [PR #2518](https://redirect.github.com/a2ui-project/a2ui/pull/2518)) are actively being pushed.

4. **Community Hot Topics**
The most actively discussed items center on UI rendering failures and framework testing rigor:
*   [Issue #1307](https://redirect.github.com/a2ui-project/a2ui/issues/1307) (5 comments): A critical P1 bug where the published `@a2ui/react@0.9.1` bundle ships empty CSS-module class refs, causing core components (Button, TextField, ChoicePicker) to render unstyled. The ongoing discussion highlights friction in the React renderer's build/packaging pipeline.
*   [Issue #2150](https://redirect.github.com/a2ui-project/a2ui/issues/2150) (3 comments): A P1 feature request to add initial conformance tests to the core SDK. This reflects a strong community and maintainer consensus that spec rigor is needed as the framework scales.
*   [Issue #428](https://redirect.github.com/a2ui-project/a2ui/issues/428) (3 comments, 1 👍): The React Native renderer implementation request. Discussion underscores clear user demand for mobile agent UI capabilities, though it remains pending team input.

5. **Bugs & Stability**
Stability efforts today focused heavily on cross-language parser and data model divergences:
*   **P1 - [Issue #1307](https://redirect.github.com/a2ui-project/a2ui/issues/1307)**: Published React bundle ships unstyled components due to empty CSS class refs. *No fix PR yet.*
*   **P2 - [Issue #2514](https://redirect.github.com/a2ui-project/a2ui/issues/2514)**: LLM outputs markdown code fences around A2UI DSL when skills are retrieved via tool responses, breaking the parser. *No fix PR yet.*
*   **P2 - [Issue #2498](https://redirect.github.com/a2ui-project/a2ui/issues/2498)**: Dart and web_core DataModels diverge on 221 of 1,392 operations. *Fix PR open: [PR #2499](https://redirect.github.com/a2ui-project/a2ui/pull/2499)*.
*   **P2 - [Issue #2496](https://redirect.github.com/a2ui-project/a2ui/issues/2496)**: Dart and web_core expression parsers disagree on 408 of 2,592 templates. *Fix PR open: [PR #2497](https://redirect.github.com/a2ui-project/a2ui/pull/2497)*.
*   **P2 - [Issue #2490](https://redirect.github.com/a2ui-project/a2ui/issues/2490)**: Expression parser recursion depth guard is unreachable in Dart and web_core. *Fix PRs open: [PR #2491](https://redirect.github.com/a2ui-project/a2ui/pull/2491), [PR #2492](https://redirect.github.com/a2ui-project/a2ui/pull/2492)*.
*   **P2 - [Issue #2500](https://redirect.github.com/a2ui-project/a2ui/issues/2500)**: Non-ASCII data model keys are unreachable from templates in Dart, web_core, and Python. *No fix PR yet*.
*   **Resolved - [Issue #2369](https://redirect.github.com/a2ui-project/a2ui/issues/2369)**: From-source build cannot reproduce committed Express parser. *Closed by [PR #2371](https://redirect.github.com/a2ui-project/a2ui/pull/2371)*.

6. **Feature Requests & Roadmap Signals**
The roadmap signals an aggressive push toward **v1.0 protocol stability** and **multi-language SDK parity**. [PR #2466](https://redirect.github.com/a2ui-project/a2ui/pull/2466) (protocol-version-agnostic catalogs) and [PR #2438](https://redirect.github.com/a2ui-project/a2ui/pull/2438) (catalog versioning/deprecation) indicate active preparation for a stable specification. The **Dart Agent SDK** completion is a P1 priority ([Issue #2356](https://redirect.github.com/a2ui-project/a2ui/issues/2356)), and the new Dart CLI ([PR #2521](https://redirect.github.com/a2ui-project/a2ui/pull/2521)) shows this is nearing realization. The **Python Agent SDK** is undergoing a massive expansion with Pydantic fluent builders ([Issue #2524](https://redirect.github.com/a2ui-project/a2ui/issues/2524)) and a macro runtime ([PR #2519](https://redirect.github.com/a2ui-project/a2ui/pull/2519)). Finally, **cross-language conformance testing** is emerging as a core strategic pillar, requested in [Issue #2150](https://redirect.github.com/a2ui-project/a2ui/issues/2150) and [Issue #2501](https://redirect.github.com/a2ui-project/a2ui/issues/2501), and already being implemented in [PR #2497](https://redirect.github.com/a2ui-project/a2ui/pull/2497).

7. **User Feedback Summary**
Developers using the React renderer are experiencing critical friction out-of-the-box due to broken styling in the published npm package ([Issue #1307](https://redirect.github.com/a2ui-project/a2ui/issues/1307)). Agent developers are hitting parsing edge cases in production, specifically LLMs wrapping DSL output in markdown code fences ([Issue #2514](https://redirect.github.com/a2ui-project/a2ui/issues/2514)), revealing a need for more resilient, fault-tolerant parsing logic. Internationalization pain points are also evident, as users utilizing non-ASCII data model keys find them unreachable ([Issue #2500](https://redirect.github.com/a2ui-project/a2ui/issues/2500)). Positively, there is strong community engagement around expanding UI platform coverage, particularly for React Native ([Issue #428](https://redirect.github.com/a2ui-project/a2ui/issues/428)) and Angular Web Components ([PR #2273](https://redirect.github.com/a2ui-project/a2ui/pull/2273)).

8. **Backlog Watch**
*   [Issue #1307](https://redirect.github.com/a2ui-project/a2ui/issues/1307): This P1 React styling bug has been open since April 2026. Despite being updated today and marked "needs-team-input", it remains unresolved and is a major blocker for React adopters.
*   [Issue #428](https://redirect.github.com/a2ui-project/a2ui/issues/428): The React Native renderer request has been open since Jan 2026 with community demand, but lacks a linked PR or core team assignee.
*   [Issue #2356](https://redirect.github.com/a2ui-project/a2ui/issues/2356): The P1 Dart Agent SDK implementation has been open since Aug 2026 and is partially complete, but requires continued core attention to reach the 0.9 milestone.

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

1. **Today's Overview**
As of 2026-09-04, OpenUI exhibits low codebase activity with no new pull requests, merges, or releases in the past 24 hours. Community engagement remains solely focused on existing open issues, with two issues receiving updates and comments today but no resolution. The absence of recent PRs or releases suggests a potentially stable but slow-moving development phase, or a temporary lull in maintainer merging activity. Overall, the project's current momentum relies on community discussion rather than active code commits.

2. **Releases**
*(Omitted as there are no new releases)*

3. **Project Progress**
No pull requests were merged or closed today. Consequently, no new features were advanced, and no bugs were fixed in the codebase over the last 24 hours.

4. **Community Hot Topics**
The most active community discussions center around ecosystem transitions and framework-specific compatibility. 
* [Issue #354](https://redirect.github.com/thesysdev/openui/issues/354) (3 👍, 2 comments) highlights a strong underlying need for developer onboarding resources, specifically for users migrating from `json-render` to OpenUI. 
* [Issue #728](https://redirect.github.com/thesysdev/openui/issues/728) (1 👍, 2 comments) reflects a demand for robust Vue.js support, revealing friction where documented capabilities (markdown rendering in `TextContent`) do not match the actual component behavior in the Vue ecosystem.

5. **Bugs & Stability**
* [Issue #728](https://redirect.github.com/thesysdev/openui/issues/728): **Severity - Low/Medium**. The `TextContent` component in the Vue chat example claims markdown support but renders markdown syntax literally (unformatted) to the user. This disrupts the chat UI experience but does not cause a crash. No fix PRs are currently linked or available for this issue.

6. **Feature Requests & Roadmap Signals**
* [Issue #354](https://redirect.github.com/thesysdev/openui/issues/354) requests a dedicated migration guide from `json-render` on the documentation website. Given its `documentation` and `good first issue` labels, alongside 3 thumbs-up reactions, this is a strong candidate for community contribution and likely inclusion in an upcoming documentation update.
* [Issue #728](https://redirect.github.com/thesysdev/openui/issues/728) serves as an implicit feature request to fully implement or fix the markdown parsing capability within the Vue `TextContent` component to align with the AI model's instructions. 

7. **User Feedback Summary**
Users express enthusiasm for OpenUI as a promising upgrade over existing generative UI tools like `json-render`, indicating satisfaction with the core concept. However, pain points exist around onboarding friction due to missing migration documentation. Additionally, Vue developers are experiencing unmet expectations regarding feature parity; the AI model is instructed to use markdown, but the local Vue renderer fails to parse it, leading to a degraded end-user chat experience and developer frustration.

8. **Backlog Watch**
* [Issue #354](https://redirect.github.com/thesysdev/openui/issues/354) has been open since March 2026 without a formal migration guide being published, indicating a growing gap in documentation that maintainers should prioritize to ease framework adoption.
* [Issue #728](https://redirect.github.com/thesysdev/openui/issues/728), open since July 2026, highlights a persisting Vue-specific rendering mismatch. Both issues are tagged as `good first issue`, suggesting they are acknowledged by maintainers but are still awaiting either community or core team action.

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

1. **Today's Overview**
CopilotKit exhibits high development velocity, with 41 pull requests updated and 20 issues actively discussed in the last 24 hours. The core team and contributors are heavily focused on maturing the "Intelligence" platform features, evidenced by the closure of massive epics like the Unified Learning Platform and Reliable Thread Restore. Simultaneously, significant effort is being directed toward framework parity—specifically upgrading Angular support (v0.5.1 released) and porting core examples to v2. The project shows healthy open-source maintenance patterns, actively merging community fixes while triaging student-reserved bugs.

2. **Releases**
Three new versions were published today:
*   **[v1.70.1](https://github.com/CopilotKit/CopilotKit/releases/tag/v1.70.1)**: Core patch release.
*   **[channels/v0.9.2](https://github.com/CopilotKit/CopilotKit/releases/tag/channels/v0.9.2)**: Update to the channels package (likely addressing platforms like Telegram, given recent bug reports).
*   **[angular/v0.5.1](https://github.com/CopilotKit/CopilotKit/releases/tag/angular/v0.5.1)**: Angular SDK patch, likely incorporating recent feature parity requests like DevConsole/Inspector configurations and effect dependency refactoring.

3. **Project Progress**
Today saw 23 PRs merged/closed, indicating rapid integration of critical features and fixes:
*   **Intelligence & Learning Platform**: Merged the foundational contracts, SDKs, and adapters for the Unified Learning Platform ([PR #6164](https://redirect.github.com/CopilotKit/CopilotKit/pull/6164)), alongside reliable/recoverable thread restore V1 ([PR #6450](https://redirect.github.com/CopilotKit/CopilotKit/pull/6450)) and compact thread restore negotiation ([PR #6468](https://redirect.github.com/CopilotKit/CopilotKit/pull/6468)).
*   **Documentation & DX**: Merged an Intelligence landing page ([PR #6866](https://redirect.github.com/CopilotKit/CopilotKit/pull/6866)), docs sidebar reorganization ([PR #6880](https://redirect.github.com/CopilotKit/CopilotKit/pull/6880)), content layout refinements ([PR #6879](https://redirect.github.com/CopilotKit/CopilotKit/pull/6879)), and a WebMCP prompt CTA ([PR #6872](https://redirect.github.com/CopilotKit/CopilotKit/pull/6872)).
*   **Runtime Fixes**: Closed a fix routing proxied MCP reads over SSE ([PR #5810](https://redirect.github.com/CopilotKit/CopilotKit/pull/5810)).
*   **CI/Release**: Resolved a timeout issue in the sync-promote import-guard test ([PR #6882](https://redirect.github.com/CopilotKit/CopilotKit/pull/6882)) and released Angular v0.5.1 ([PR #6877](https://redirect.github.com/CopilotKit/CopilotKit/pull/6877)).

4. **Community Hot Topics**
*   **Angular 22 ADK Upgrade** - [Issue #6643](https://redirect.github.com/CopilotKit/CopilotKit/issues/6643) (6 comments) and [PR #6878](https://redirect.github.com/CopilotKit/CopilotKit/pull/6878): The community is actively pushing to modernize the Angular ADK starter, replacing deprecated `lucide-angular` and moving to Angular 22/TypeScript 6.
*   **Angular UI Config Parity** - [Issue #3172](https://redirect.github.com/CopilotKit/CopilotKit/issues/3172) (7 comments, Closed): Users requested `showDevConsole` and `enableInspector` configs for Angular to match React. This sparked significant discussion before being closed, likely addressed in the new `angular/v0.5.1` release.
*   **Vite 7 Node.js Build Warnings** - [Issue #4151](https://redirect.github.com/CopilotKit/CopilotKit/issues/4151) (5 comments, 👍 2): Ongoing friction regarding Vite browser builds resolving Node.js modules, affecting modern Vite 7 adopters.

5. **Bugs & Stability**
Several high-impact A2UI and AG-UI protocol bugs are currently being tracked, many reserved for student contributors:
*   **Critical (A2UI Rendering/Protocol)**: AG-UI state key `ag-ui` vs `ag_ui` inconsistency causes rendering failures ([Issue #5463](https://redirect.github.com/CopilotKit/CopilotKit/issues/5463)); Frontend tool descriptors yielding empty schemas silently ([Issue #6570](https://redirect.github.com/CopilotKit/CopilotKit/issues/6570)); A2UI skeleton "Building interface" never resolving ([Issue #6526](https://redirect.github.com/CopilotKit/CopilotKit/issues/6526)).
*   **High (Concurrency/Logic)**: MAF showcase agents mutating shared singleton default options, leaking system prompts under concurrent load ([Issue #5659](https://redirect.github.com/CopilotKit/CopilotKit/issues/5659)); Langgraph canvas example self-looping with no iteration guard ([Issue #5606](https://redirect.github.com/CopilotKit/CopilotKit/issues/5606)).
*   **Medium (UI/Integration)**: Duplicate assistant message IDs during interleaved tool calls ([Issue #3644](https://redirect.github.com/CopilotKit/CopilotKit/issues/3644)); Vue `@stop` listener lost via scoped-slot ([Issue #5934](https://redirect.github.com/CopilotKit/CopilotKit/issues/5934)); Popup wrapper masking inner rounded corners ([Issue #6472](https://redirect.github.com/CopilotKit/CopilotKit/issues/6472)).
*   **Fix PRs Available**: A fix for Gemini tool schema validation failures is currently open ([PR #6883](https://redirect.github.com/CopilotKit/CopilotKit/pull/6883)), directly addressing adapter tool breakage.

6. **Feature Requests & Roadmap Signals**
*   **Inspector Learning View** - [PR #6875](https://redirect.github.com/CopilotKit/CopilotKit/pull/6875): Introduces a "Learning" guide inside Web Inspector to onboard users via setup prompts, threads, and analytics. Signals a strong pivot toward agent observability and UX guidance.
*   **Conversational Dashboard Composition** - [PR #6876](https://redirect.github.com/CopilotKit/CopilotKit/pull/6876): Adds an "exec" skin (Vantage) allowing agents to render metric blocks as A2UI surfaces and pin them to a persistent layout. Shows expansion into domain-specific exec UIs.
*   **Event Hooks** - [Issue #4152](https://redirect.github.com/CopilotKit/CopilotKit/issues/4152): Request for `onConnected`/`onReady` events to better synchronize agent state initialization.
*   **Context Arrays** - [Issue #3891](https://redirect.github.com/CopilotKit/CopilotKit/issues/3891): Request for `useAgentContext` to accept arrays instead of single items for cleaner multi-context injection.
*   **Marketplace Entitlements** - [PR #6789](https://redirect.github.com/CopilotKit/CopilotKit/pull/6789): Signals upcoming support for AWS Marketplace deployment licensing.

7. **User Feedback Summary**
*   **Pain Points**: Users are experiencing friction with cross-adapter tool reliability (tools working in Anthropic but breaking in Gemini) ([Issue #2979](https://redirect.github.com/CopilotKit/CopilotKit/issues/2979)). Vite 7 module resolution warnings remain an unresolved thorn for modern frontend stacks. Additionally, A2UI rendering inconsistencies (keys, empty schemas) are causing silent failures that are hard to debug.
*   **Use Cases**: Enterprise/dashboard users are clearly driving features like persistent conversational dashboards ([PR #6876](https://redirect.github.com/CopilotKit/CopilotKit/pull/6876)) and AWS marketplace licensing ([PR #6789](https://redirect.github.com/CopilotKit/CopilotKit/pull/6789)).
*   **Satisfaction**: High engagement on v2 migrations and Angular upgrades shows strong adoption momentum, though the need to manually port examples ([PR #6808](https://redirect.github.com/CopilotKit/CopilotKit/pull/6808)) implies the v1-to-v2 transition has been rocky for some users.

8. **Backlog Watch**
*   [Issue #2653](https://redirect.github.com/CopilotKit/CopilotKit/issues/2653): Chat loading state bug while agent state loads. Created in Oct 2025, still open with no PR. Affects basic UX.
*   [Issue #2979](https://redirect.github.com/CopilotKit/CopilotKit/issues/2979): Tools breaking across different adapters. Created in Jan 2026. Critical for multi-model workflows, currently lacking a comprehensive cross-adapter test suite (though a Gemini-specific fix is incoming).
*   [Issue #4151](https://redirect.github.com/CopilotKit/CopilotKit/issues/4151): Vite Node.js module resolution warning. Created Apr 2026. Upvoted by users, but still reserved for students without a merged resolution.
*   [Issue #4152](https://redirect.github.com/CopilotKit/CopilotKit/issues/4152): `onConnected`/`onReady` event request. Created Apr 2026, labeled "help wanted", but unaddressed in recent PRs.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/linqinghao/agents-radar).*