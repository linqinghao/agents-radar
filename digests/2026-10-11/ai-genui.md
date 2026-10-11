# 生成式 UI 生态日报 2026-10-11

> Issues: 6 | PRs: 222 | 覆盖项目: 4 个 | 生成时间: 2026-10-11 04:48 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

基于您提供的 2026 年 10 月 11 日各主流生成式 UI 项目社区动态摘要，以下是横向对比分析报告：

### 生成式 UI 生态横向对比分析报告 (2026-10-11)

#### 1. 生态全景
当前生成式 UI 生态正处于从“概念验证”向“工程化落地”与“深度 AI 工作流融合”演进的关键拐点。各主流项目纷纷冲刺核心里程碑版本（如 OpenUI 1.0），并加速在流式渲染稳定性、跨端协议一致性等底层基建上夯实基础。同时，与 MCP（Model Context Protocol）等 AI 智能体标准的集成成为热点，标志着生成式 UI 正在从单纯的“界面展示层”向“AI 原生交互枢纽”蜕变。此外，无障碍标准（WCAG）与严格类型安全逐渐成为行业共识，预示着该生态正快速走向成熟与企业级可用。

#### 2. 各项目活跃度对比
| 项目名称 | 新增 Issues | PR 动态 (更新/新增) | 合并/关闭数 | 版本发布 | 整体态势 |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **a2ui** | 3 | 4 | 0 | 0 | 阻塞等待，CI 失败，Triage 积压严重 |
| **OpenUI** | 1+ | 23 | 13 | 10 | 高频迭代，1.0 发布前最后冲刺，密集发版 |
| **json-render** | 1 | 1 | 0 | 0 | 低活跃修整期，核心 MCP 集成受阻 |
| **CopilotKit**| 0 | 192 (待合并) | 2 | 0 | 高积压低合并，处于架构重构蓄力期 |

#### 3. 共同关注的功能方向
*   **流式渲染与状态稳定性**：**OpenUI** 和 **CopilotKit** 均在集中处理流式输出下的 UI 状态异常。前者修复了流式变量半写卡死问题，后者解决了因 React Key 错误和 Hook 序列化导致的流式渲染状态丢失与回调失效。
*   **MCP（模型上下文协议）深度集成**：**OpenUI** 社区呼吁引入 Parallel Search MCP 以接入真实 Agent 工作流；**json-render** 则直面 MCP 集成中 schema 裁剪过度导致 UI 交互失效的痛点。两者都在探索如何更好地作为 UI 桥梁接入 AI 智能体宿主。
*   **跨平台与多端一致性**：**a2ui** 聚焦于多语言 SDK（Python/Dart/Swift）的协议对齐与编译适配；**CopilotKit** 则致力于 React Native 的流式请求与 Expo 依赖优化，均反映出生态对跨端一致性体验的强烈诉求。

#### 4. 差异化定位分析
*   **a2ui**：侧重**跨平台协议规范与多语言生态对齐**。目标用户为多端智能体开发者，技术路线偏向声明式协议+原生渲染器（如 SwiftUI），当前正努力向行业合规（无障碍）迈进。
*   **OpenUI**：侧重**AI 前端基础设施与组件库协议标准化**。目标用户为前端与全栈开发者，技术路线采用多框架适配层，正通过自定义函数与动作构建可预测、可派生的 1.0 规范。
*   **json-render**：侧重**LLM 与 UI 的轻量级声明式桥接**。目标用户为 AI 应用后端及 Agent 开发者，核心依托 Zod Schema 与 MCP 协议，强调用 JSON 直接驱动可交互 UI。
*   **CopilotKit**：侧重**宿主应用深度集成与复杂 Agent 可视化**。目标用户为现有 React/RN 应用开发者，技术路线以 React Hook 为核心，强调高度 UI 定制化与多级子智能体执行过程透明化。

#### 5. 社区热度与成熟度
*   **快速冲刺期 (OpenUI)**：社区活跃度极高且效率惊人，单日合并 13 个 PR 并发布 10 个版本，表明项目 1.0 架构已基本收敛，进入稳定的工业化输出阶段。
*   **高关注度重构期**：高达 192 条待合并 PR 显示其社区贡献极其活跃，但核心团队审查压力巨大。项目正处于底层架构解耦（如移除内置 Markdown 渲染器）的阵痛期，短期合并效率偏低。
*   **规范成熟但工程受阻期 (a2ui)**：协议规范已演进至考虑无障碍等高级特性，但多语言 SDK 同步机制脆弱，且主分支 CI 阻塞、Triage 积压，表明其工程化落地节奏暂时滞后于规范设计。
*   **瓶颈探索期 (json-render)**：活跃度较低，单一严重 Bug（MCP schema 裁剪）阻塞了核心场景，处于亟待维护者介入重新设计 LLM Schema 策略的探索阶段。

#### 6. 值得关注的趋势信号
*   **“LLM 减负”与“UI 丰富性”的博弈**：从 json-render 的 Issue 可以看出，为了降低 LLM 理解成本而过度精简 UI Schema，会导致前端丧失状态与交互能力。未来的趋势是寻找一种平衡，既能给 LLM 提供精简的工具描述，又能保留完整的前端状态契约。
*   **复杂 Agent 工作流的可视化透明度需求**：CopilotKit 社区对“子智能体中间步骤消失”的关注表明，开发者在构建 DeepAgents 时，不仅需要 UI 能渲染最终结果，更需要 UI 能作为“调试台”可视化中间工具调用过程。
*   **企业级合规标准成为必选项**：a2ui 为 SwiftUI 引入无障碍属性映射，释放了生成式 UI 从“能用”向“行业合规”演进的信号。对于面向企业级的技术决策者而言，无障碍与严格类型校验将成为选型的硬性指标。

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目动态日报 (2026-10-11)

## 1. 今日速览
a2ui 项目在过去 24 小时内维持了较高的社区提交活跃度，共新增 3 条 Issue 和 4 条 PR，但整体推进节奏受阻：今日无任何 PR 被合并或 Issue 被关闭，且主分支出现 E2E 测试失败。项目当前的核心焦点集中在多语言 SDK 与规范的一致性对齐（特别是 v0.9.1 版本的键名分歧），以及 Swift 生态向 6.2.4 版本迁移的并发编译适配。大量新增 PR/Issue 仍处于 `needs-triage` 状态，亟需核心维护者介入审查。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日**无 PR 合并或 Issue 关闭**，项目代码库整体处于冻结等待状态。尽管如此，社区提交的修复 PR 正在为后续版本积蓄力量：
- **规范与多语言 SDK 对齐**：retz8 提交了针对 v0.9.1 capabilities 键名不一致的修复 PR（[#3135](https://redirect.github.com/a2ui-project/a2ui/pull/3135)），旨在消除规范、Python SDK 与 web_core 之间的割裂。
- **Swift 生态适配与增强**：karolkulesza 连提 3 个 PR，分别修复 Swift 6.2.4 编译失败问题（[#3133](https://redirect.github.com/a2ui-project/a2ui/pull/3133)）、Dart 端 JSON Schema 格式校验遗漏（[#3124](https://redirect.github.com/a2ui-project/a2ui/pull/3124)），以及为 SwiftUI 渲染器引入无障碍属性支持（[#3121](https://redirect.github.com/a2ui-project/a2ui/pull/3121)）。

这些进展反映出项目正致力于提升跨平台渲染的健壮性与合规性，但需维护者尽快完成 Review 以推动实质性落地。

## 4. 社区热点
今日讨论最具实质影响的议题是 **v0.9.1 capabilities 键名不一致问题（[#3134](https://redirect.github.com/a2ui-project/a2ui/issues/3134)）**。
- **背后诉求**：在 AI 智能体交互协议中，版本的精确匹配是多端互通的基石。Schemas/Python SDK 要求键名为 `v0.9`，而官方指南/web_core 却使用 `v0.9.1`，这直接导致 Python agent 拒绝了 web_core 渲染器发送的 capabilities。该 Bug 暴露了项目在多语言 SDK 同步发布时的校验缺失，开发者强烈呼吁确立单一事实来源。

## 5. Bug 与稳定性
按严重程度排列今日报告的 Bug 与稳定性问题：

1. **🔴 高：主分支 E2E 测试失败** 
   - Issue: [#3136](https://redirect.github.com/a2ui-project/a2ui/issues/3136)
   - 状况：针对 PR #3092 的 E2E 测试在主分支跑失败，可能存在回归或环境问题。
   - Fix PR：**尚无**

2. **🟠 中：v0.9.1 Capabilities 键名版本割裂导致多端通信失败**
   - Issue: [#3134](https://redirect.github.com/a2ui-project/a2ui/issues/3134)
   - 状况：Python agent SDK 与 web_core 渲染器因键名不匹配无法互通，属于严重的协议层级破坏性缺陷。
   - Fix PR：[PR #3135](https://redirect.github.com/a2ui-project/a2ui/pull/3135) (已提交，待审查)

3. **🟡 中：Swift 6.2.4 并发编译错误**
   - Issue: [#3132](https://redirect.github.com/a2ui-project/a2ui/issues/3132)
   - 状况：Swift 6.2.4 引入了更严格的 SendDingRisksDataRace 检查，导致一致性测试编译失败，阻碍 Swift 生态用户升级。
   - Fix PR：[PR #3133](https://redirect.github.com/a2ui-project/a2ui/pull/3133) (已提交，待审查)

## 6. 功能请求与路线图信号
- **无障碍支持向原生渲染层渗透**：[PR #3121](https://redirect.github.com/a2ui-project/a2ui/pull/3121) 为 SwiftUI 渲染器实现了 `accessibility` 属性映射。这释放出强烈的路线图信号：a2ui 正从“能用”向“符合行业合规标准（如 WCAG）”迈进，无障碍支持大概率将成为 v1.0 正式版的必选项（v0.9.1/v1.0 common types 已预留相关字段）。
- **输入校验趋严**：[PR #3124](https://redirect.github.com/a2ui-project/a2ui/pull/3124) 修复了 Dart 端未启用 `strictFormat` 的问题，表明项目正在强化各端对 JSON Schema 的严格合规校验，减少类型模糊带来的潜在渲染异常。

## 7. 用户反馈摘要
从今日 Issues 可提炼出以下真实痛点：
- **协议规范与实现脱节引发挫败感**：开发者参照指南写出的代码，被 SDK 以“不符合 Schema”为由拒绝，这种规范自相矛盾是目前最大的痛点。
- **基础工具链升级带来阻塞性体验**：Apple 生态的开发者在跟进 Xcode 26.3 / Swift 6.2.4 时直接遭遇编译阻断，严重影响了 Swift 端智能体的开发进度，反映出 a2ui 对上游语言版本特性的响应存在滞后。
- **多语言 SDK 行为不一致**：同一套协议，Python 与 Dart/Web 的处理逻辑存在差异，增加了跨端智能体开发者的心智负担。

## 8. 待处理积压
- **🔥 需立即响应的 CI 阻塞**：主分支 E2E 测试失败（[#3136](https://redirect.github.com/a2ui-project/a2ui/issues/3136)）处于 Open 状态且无修复 PR，这可能阻塞后续所有 PR 的合并流程，需维护者优先排查。
- **⚠️ Triaging 积压**：今日新增的 3 个 Issues 和 4 个 PRs **全部处于 `needs-triage` 状态**，尤其是涉及协议修复的 [PR #3135](https://redirect.github.com/a2ui-project/a2ui/pull/3135) 和阻断 Swift 生态的 [PR #3133](https://redirect.github.com/a2ui-project/a2ui/pull/3133)，已处于停滞状态，建议维护者尽快分配审查资源，避免社区贡献者因等待过长而流失。

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目动态日报 (2026-10-11)

## 1. 今日速览
OpenUI 项目今日呈现极高的开发活跃度，过去 24 小时内 PR 更新高达 23 条（其中 13 条已合并/关闭），并密集发布了 10 个新版本。项目当前正处于 **OpenUI 1.0 发布前的最后冲刺阶段**，核心维护者大量合并了与 1.0 规范、底层架构及文档相关的基础性 PR。同时，针对流式输出和表单状态的稳定性修复被迅速落地并发布，反映出团队在保障 1.0 质量上的坚决态度。

## 2. 版本发布
今日共发布 10 个新版本，主要涉及 `lang-core` 及各前端框架适配层的升级，以及针对 Renderer 和依赖兼容性的修复：

- **@​openuidev/server@0.2.0** (Minor): 新增可选的 Renderer 插槽，用于处理内容、查询加载和错误状态 ([#1268](https://redirect.github.com/thesysdev/openui/pull/1268))。
- **@​openuidev/react-lang@0.4.0** (Minor): 同步新增 Renderer 插槽功能；**@​openuidev/react-lang@0.4.1** (Patch): 修复了在没有响应式绑定的情况下，表单字段在输入后呈现冻结状态的 Bug ([#1349](https://redirect.github.com/thesysdev/openui/pull/1349))。
- **@​openuidev/react-ui@0.17.1** & **@​openuidev/react-email@0.3.1** (Patch): 拓宽了内部 `react-lang` 的 peer dependencies 窗口至 `<0.5.0`，修复了版本锁定导致的 CI 发布失败问题 ([#1343](https://redirect.github.com/thesysdev/openui/pull/1343))。
- **@​openuidev/vue-lang@0.4.0 / 0.4.1** & **@​openuidev/svelte-lang@0.4.0 / 0.4.1**: 均为 Patch 更新，跟随 `@openuidev/lang-core` 的版本基线进行依赖同步。
- **@​openuidev/react-headless@0.17.1**: 无实质性代码变更，仅做版本对齐。

## 3. 项目进展
今日合并/关闭的 PR 极大地推动了 1.0 版本的落地，主要进展如下：

- **1.0 架构合并与清理**：[#1345](https://redirect.github.com/thesysdev/openui/pull/1345) 将主分支代码及联合修复合并至 1.0 发布分支；[#1350](https://redirect.github.com/thesysdev/openui/pull/1350) 清理了 1.0 前不再使用的 lang-core 内部导出（如 `isASTNode`, `Token` 等），为稳定版 API 做减法；[#1346](https://redirect.github.com/thesysdev/openui/pull/1346) 敲定了 1.0 各包的版本号和 Release Notes。
- **关键流式 Bug 修复**：[#1353](https://redirect.github.com/thesysdev/openui/pull/1353) 解决了历史遗留 Bug (#767)，修复了流式 `$state` 在响应中途卡在半写状态（如 `$d` 或 `$ingredients = ["500 g (ab`）的问题，极大提升了 AI 生成界面的稳定性。
- **CLI 易用性提升**：[#1342](https://redirect.github.com/thesysdev/openui/pull/1342) 允许 `openui create` 命令直接从 `thesysdev` 旗下的 GitHub 仓库拉取示例，降低了开发者体验门槛。

## 4. 社区热点
由于今日核心 PR 多为 1.0 发布的系列重构，评论数据暂未完全释放，但从体量与依赖关系来看，以下两项为近期核心关注点：

- **OpenUI 1.0 里程碑 PR**：[#1348](https://redirect.github.com/thesysdev/openui/pull/1348) 作为 1.0 的主汇总 PR，汇聚了自定义函数、动作、上下文等所有核心子特性，是项目演进的最核心热点。
- **MCP 搜索集成需求**：新开 Issue [#1354](https://redirect.github.com/thesysdev/openui/issues/1354) 提出在 Vercel AI SDK 示例中引入 Parallel Search MCP。这反映了开发者将 OpenUI 接入真实 AI Agent 网络搜索工作流的迫切诉求。

## 5. Bug 与稳定性
今日暴露并修复了两个影响前端交互体验的严重 Bug，目前均已有 Fix 并发版：

1. **[严重] 流式状态默认值半写卡死**：AI 流式输出时，未写完的变量会被错误地作为最终状态存储，导致 UI 渲染错乱。已通过 [#1353](https://redirect.github.com/thesysdev/openui/pull/1353) 修复。
2. **[中等] 独立 Renderer 表单状态冻结**：在接入 Renderer 插槽后，无响应式绑定的表单输入框在打字后失去响应（视觉冻结）。已通过 [#1349](https://redirect.github.com/thesysdev/openui/pull/1349) 修复。
3. **[低] CI/CD 发布阻断**：由于 peer dependencies 版本窗口过窄，导致 CI 验证失败无法发布新版本。已通过 [#1343](https://redirect.github.com/thesysdev/openui/pull/1343) 放宽版本限制修复。

## 6. 功能请求与路线图信号
- **新增 MCP 支持诉求**：用户在 [#1354](https://redirect.github.com/thesysdev/openui/issues/1354) 中请求将 Parallel Search MCP 作为可选功能加入 Vercel AI SDK 示例。目前 SDK 示例仅有 mock 数据，结合当前 OpenUI 1.0 正在重构动作与上下文（[#1298](https://redirect.github.com/thesysdev/openui/pull/1298)），此需求极有可能在 1.0 正式发布后作为官方示例扩展被纳入。
- **1.0 规范与扩展能力**：从 [#1277](https://redirect.github.com/thesysdev/openui/pull/1277)（1.0 规范）和 [#1307](https://redirect.github.com/thesysdev/openui/pull/1307)（`library.extend`）可以看出，OpenUI 正在构建一套可预测、可派生的组件库协议，这是其作为 AI 前端基础设施的核心壁垒。

## 7. 用户反馈摘要
- **真实场景的接口打通痛点**：开发者表示，目前的示例偏向 UI 展示，缺乏真实 AI Agent 工作流的串联。他们需要“不仅仅是 Mock，而是能直接接入实时搜索和研究助手场景”的参考实现（来自 [#1354](https://redirect.github.com/thesysdev/openui/issues/1354)）。
- **流式渲染的一致性体验**：半写状态卡死的 Bug 反映出用户在长文本或复杂组件流式生成时曾遭遇挫败感，今日的修复大幅增强了产品的鲁棒性。

## 8. 待处理积压
随着 1.0 分支的收编，以下重要的 Open PR 处于待合并状态，部分已开启多日，需要维护者重点关注以解除阻塞：

- **[#1244](https://redirect.github.com/thesysdev/openui/pull/1244)** chore: update OpenUI templates and examples（开启超 15 天，依赖验证中）
- **[#1296](https://redirect.github.com/thesysdev/openui/pull/1296)** lang-core: custom functions with defineFunction（1.0 基石特性）
- **[#1297](https://redirect.github.com/thesysdev/openui/pull/1297)** lang-core: custom actions with defineAction（1.0 基石特性）
- **[#1298](https://redirect.github.com/thesysdev/openui/pull/1298)** lang-core: @​ToAssistant context, single-step actions, action slots（1.0 基石特性）
- **[#1352](https://redirect.github.com/thesysdev/openui/pull/1352)** OpenUI 1.0: docs（文档主 PR，依赖于 #1348 合并）

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render 项目动态日报 (2026-10-11)

## 1. 今日速览
`json-render` 项目今日整体活跃度较低，过去24小时内无新版本发布，无 PR 合并或 Issue 关闭。社区动态仅包含1条新开 Issue 和1条已有 PR 的更新，反映出项目目前在 MCP（Model Context Protocol）集成体验与核心类型推断方面存在需要优先解决的痛点。整体来看，项目短期内处于修整与问题暴露阶段，维护者介入处理积压的节奏有待提升。

## 2. 版本发布
无

## 3. 项目进展
今日无合并或关闭的 PR/Issue。项目在代码合并层面今日处于停滞状态。目前唯一活跃的代码进展是 [PR #390](https://redirect.github.com/vercel-labs/json-render/pull/390)，该 PR 旨在修复核心的类型推断问题，若顺利合并将改善开发者的类型体验，减少不必要的类型强转，但目前仍未获得维护者的审查与合并。

## 4. 社区热点
今日最受关注的新动态是 [Issue #393](https://redirect.github.com/vercel-labs/json-render/issues/393)。该 Issue 直指 `@json-render/mcp` 0.21.0 版本在 AI 智能体宿主环境中的严重缺陷。背后的核心诉求是：MCP 工具的 schema 生成逻辑不应剥离 `state`、`on`、`watch` 等核心状态与交互属性，且工具描述需更精准地暴露 catalog 信息，以确保 AI 智能体调用 json-render 时能够渲染出完整、可交互的 UI，而非“空壳”。

## 5. Bug 与稳定性
- **严重**：MCP 集成导致生成 UI 失效（[Issue #393](https://redirect.github.com/vercel-labs/json-render/issues/393)）
  - **现象**：`@json-render/mcp` 中的 `createMcpApp` 将 `catalog.zodSchema()` 作为工具输入时，剥离了 `state`、`on` 和 `watch`，同时工具描述隐藏了 catalog，导致在 MCP Apps 主机中生成的大多数 UI 为空或无响应（inert）。
  - **修复状态**：尚无对应 fix PR。
- **一般**：核心类型推断不符合预期（[PR #390](https://redirect.github.com/vercel-labs/json-render/pull/390)）
  - **现象**：`InferSpecField` 将 `SchemaType<"any">` 映射为 `unknown`，导致包含 `s.any()` 字段的 schema 经过 `catalog.validate()` 后的数据无法直接分配给 `Spec` 类型，强制要求开发者使用 `as unknown as Spec` 进行双重类型断言。
  - **修复状态**：已有 PR #390 将推断类型修正为 `any`（与 `z.any()` 对齐）并添加了测试，待合并。

## 6. 功能请求与路线图信号
[Issue #393](https://redirect.github.com/vercel-labs/json-render/issues/393) 虽以 Bug 形式报告，但释放了明确的路线图信号：随着 AI 智能体生态的扩展，`@json-render/mcp` 作为连接 UI 渲染与 LLM 的桥梁，其 schema 序列化与描述能力需要重新设计。未来版本需在“供 LLM 理解的精简 schema”与“保留 UI 完整状态的丰富 schema”之间找到平衡点，这是项目深入 AI 智能体领域的必经之路。

## 7. 用户反馈摘要
从 [Issue #393](https://redirect.github.com/vercel-labs/json-render/issues/393) 可提炼出真实用户痛点：尝试将 json-render 与 MCP Apps 主机（AI 智能体环境）集成的开发者，目前遭遇了阻断性体验——生成的 UI 组件要么内容为空，要么失去交互能力。这说明当前 MCP 集成层出于给 LLM “减负”目的而做的 schema 裁剪，过度牺牲了前端渲染的完整性，严重偏离了开发者对“声明式 UI 自动生成联动”的预期。

## 8. 待处理积压
- **[PR #390](https://redirect.github.com/vercel-labs/json-render/pull/390)**：该 PR 已打开 4 天（创建于 10-07），修复了核心 schema 的类型推断问题并包含测试用例，但至今维护者 0 评论、0 审查。建议维护者优先评估合并，以降低下游用户的类型体操成本。
- **[Issue #393](https://redirect.github.com/vercel-labs/json-render/issues/393)**：作为影响 MCP 核心可用性的阻断级缺陷，今日新开但仍处于 0 评论状态。急需维护者确认复现条件，并评估是否需要调整 `registerJsonRenderTool` 的底层 schema 生成逻辑。

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报 (2026-10-11)

## 1. 今日速览
今日 CopilotKit 项目整体呈现“高积压、低合并”的态势。过去 24 小时内，PR 活跃度极高（192 条待合并），但实际合并/关闭仅 2 条，表明社区贡献源源不断，但核心团队的审查与合并压力较大。Issues 端相对沉寂，无新开 Issue，仅有 1 条历史 Bug 被关闭。项目当前无新版本发布，处于功能迭代与架构重构的蓄力期，大量前端 UI 定制化与底层运行时重构的 PR 正在等待最终合入。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日实际合并进度缓慢，仅 2 条 PR 发生状态变更（多为关闭）。尽管如此，大量长期活跃的 PR 更新了代码，持续推进项目整体发展，重点聚焦于以下方向：
*   **前端渲染架构解耦**：推进移除内置 Streamdown，引入可插拔 Markdown 渲染器 ([#5147](https://redirect.github.com/CopilotKit/CopilotKit/pull/5147))，以及 Open Generative UI 文档装配器与设计系统构建 ([#5377](https://redirect.github.com/CopilotKit/CopilotKit/pull/5377))。
*   **跨平台适配优化**：针对 React Native 的底层流式请求修复 ([#7438](https://redirect.github.com/CopilotKit/CopilotKit/pull/7438)) 及 Expo 依赖懒加载改造 ([#5247](https://redirect.github.com/CopilotKit/CopilotKit/pull/5247)) 持续迭代。
*   **底层稳定性修复**：解决了由于 Hook 依赖序列化错误导致的回调失效问题 ([#7647](https://redirect.github.com/CopilotKit/CopilotKit/pull/7647)) 及消息列表 React Key 导致的状态丢失问题 ([#7634](https://redirect.github.com/CopilotKit/CopilotKit/pull/7634))。

## 4. 社区热点
今日最引人关注的 Issue 是被关闭的 **[#3462](https://redirect.github.com/CopilotKit/CopilotKit/issues/3462) `[bug] Sub-agent intermediate tool calls disappear from CopilotKit UI after task completion`**。
*   **背后诉求**：该 Issue 获得了 3 个赞和 8 条评论，反映出开发者在使用 DeepAgents（多级子智能体）工作流时，对**执行过程可视化**的强烈需求。子智能体执行的中间步骤（工具调用）在任务完成后从 UI 消失，严重影响了复杂 Agent 工作流的调试透明度与用户信任度。该 Bug 的关闭意味着官方可能在近期版本中已定位或解决了这一痛点。

## 5. Bug 与稳定性
今日无新上报 Bug，但多个修复历史 Bug 的 PR 处于活跃状态，按严重程度排列如下：
*   **高危 - 核心逻辑失效**：`useFrontendTool` 使用 `JSON.stringify` 处理依赖，导致函数映射为 `null` 且遇循环引用报错，使得回调永远无法重新注册。已有 Fix PR ([#7647](https://redirect.github.com/CopilotKit/CopilotKit/pull/7647))。
*   **高危 - 渲染状态丢失**：`Messages.tsx` 使用 `index` 作为 React key，导致消息流式输入时组件重新挂载与状态丢失。已有 Fix PR ([#7634](https://redirect.github.com/CopilotKit/CopilotKit/pull/7634))。
*   **中危 - 内存泄漏与网络异常**：React Native 端流式请求取消时未移除 Abort 监听器，且非 2xx 响应未关闭 body。已有 Fix PR ([#7438](https://redirect.github.com/CopilotKit/CopilotKit/pull/7438))。
*   **低危 - UI 交互阻断**：免责声明插槽（disclaimer slot）被 `pointer-events: none` 遮挡导致无法点击 ([#4960](https://redirect.github.com/CopilotKit/CopilotKit/pull/4960))；窄布局下滚动条遮挡输入框 ([#4965](https://redirect.github.com/CopilotKit/CopilotKit/pull/4965))。

## 6. 功能请求与路线图信号
结合当前开放的 PR，项目未来的迭代路线图释放出以下强烈信号：
*   **UI 高度可定制化**：通过 CSS 变量暴露主题定制能力 ([#5317](https://redirect.github.com/CopilotKit/CopilotKit/pull/5317)) 及推出 Agent Design System 展示 ([#5315](https://redirect.github.com/CopilotKit/CopilotKit/pull/5315))，表明官方正致力于让 CopilotKit 无缝融入宿主应用的设计系统。
*   **类型安全增强**：通过 Register augmentation 实现编译期强类型 `agentId` ([#3280](https://redirect.github.com/CopilotKit/CopilotKit/pull/3

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*