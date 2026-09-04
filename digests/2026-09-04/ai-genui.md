# 生成式 UI 生态日报 2026-09-04

> Issues: 38 | PRs: 91 | 覆盖项目: 4 个 | 生成时间: 2026-09-04 03:36 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告 (2026-09-04)

## 1. 生态全景
当前生成式 UI 生态正处于从“概念验证”向“多端生产级可用”演进的关键期。跨语言/跨框架的一致性保障（如 Dart、TypeScript、Swift、Angular 的对齐）正取代单纯的渲染能力，成为各项目的核心基建重心。同时，Agent SDK 工具链的完善与 LLM 输出鲁棒性的防御性设计，标志着行业认知正在深化：生成式 UI 的瓶颈已不在于前端渲染本身，而在于如何可靠地桥接非确定性 LLM 输出与严格的前端组件树。然而，构建产物缺陷（如样式丢失、构建警告）与底层并发安全问题的频发，暴露出项目在快速迭代中仍面临工程化质量把控的挑战。

## 2. 各项目活跃度对比

| 项目 | 今日新增/活跃 Issues | 今日新增/活跃 PRs | 今日合并/关闭 PRs | 今日 Releases | 核心推进状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **a2ui** | 16 | 50 | 13 | 0 | 高活跃，为 v1.0 夯实多语言一致性基础 |
| **CopilotKit** | 20 | 41 | 23 | 3 | 极高活跃，V2 生态迁移与云端 Intelligence 落地 |
| **OpenUI** | 2 | 0 | 0 | 0 | 低活跃，社区诉求积压，维护暂缓 |
| **json-render**| 0 | 0 | 0 | 0 | 停滞 |

## 3. 共同关注的功能方向

*   **跨框架/跨语言行为一致性**：
    *   **a2ui**：正密集修补 Dart 与 web_core 的 DataModel 行为分歧（221个不一致），并补充跨语言一致性测试套件。
    *   **CopilotKit**：着力解决多框架端（React/Vue/Angular）的 UI 细节与事件机制割裂（如 Angular Inspector 缺失、Vue 事件监听丢失），并升级 Angular 22 适配。
    *   **OpenUI**：Vue 端组件行为与声明不符（Markdown 渲染失效）成为今日核心痛点。
*   **生态迁移与平滑升级**：
    *   **CopilotKit**：正加速将 5 个核心示例迁移至 V2 API，以缓解用户迁移陡峭的痛点。
    *   **OpenUI**：社区强烈呼吁提供从 `json-render` 迁移的官方指南，成为今日最高赞 Issue。
*   **LLM 输出解析的鲁棒性（防御性设计）**：
    *   **a2ui**：LLM 在 Tool Call 中画蛇添足包裹 Markdown 代码块导致 DSL 解析失败。
    *   **CopilotKit**：前端工具描述符解析错误时静默生成空 Schema，导致深层调用失败；多适配器（Gemini/Anthropic）工具调用中断。

## 4. 差异化定位分析

*   **a2ui：协议与多语言基建的“硬核派”**。侧重底层 DSL 解析规范>的绝对%绝对一致性与跨端 SDK 打造。目标受众是需要在多端（Web/移动端/嵌入式）实现严格 UI 协议复用的系统级开发者。技术路线重仓宏系统、AST 规范化与原生语言并发安全重构（如 Swift `@MainActor`）。
*   **CopilotKit：应用层与云端协同的“全栈派”**。侧重 AI Agent 在前端框架的快速接入及云端增强。目标受众是希望快速构建拥有自学习、多通道部署能力的 AI 应用的全栈开发者。技术路线发力 Intelligence 平台（可靠线程恢复、统一学习平台）、企业级场景（BI 仪表盘）及多 LLM 适配器支持。
*   **OpenUI：声明式渲染的“极简派”（当前停滞）**。侧重开箱即用的 JSON 到 UI 的渲染体验。目标受众原本是追求轻量的前端开发者，但目前受限于维护力度，在多框架适配和工程深度的拓展上落后。

## 5. 社区热度与成熟度

*   **CopilotKit（成熟度：中高，热度：极高）**：处于极速扩张期，PR 吞吐率惊人（23/41），且已具备商业化雏形（Intelligence 平台、Vantage 皮肤）。但高速迭代带来了并发安全（提示词泄露）和状态机缺陷（骨架屏死锁）等严重基线问题，需警惕“功能前置、稳定性后置”的风险。
*   **a2ui（成熟度：中，热度：高）**：处于 v1.0 前的阵痛期，社区对移动端和开箱即用体验呼声很高。工程严谨性在提升（引入差异化一致性测试），但存在致命的发布包可用性盲区（CSS 丢失逾 4 个月未修），CI/CD 流程成熟度亟待补齐。
*   **OpenUI（成熟度：低，热度：低迷）**：核心维护者缺位，依赖社区自发驱动。虽有潜在用户涌入（竞品迁移意愿），但长期 Issue 搁置将导致社区流失，处于危险边缘。

## 6. 值得关注的趋势信号

1.  **LLM 非标准输出是生成式 UI 的致命摩擦点**：LLM 倾向于添加冗余格式（如 Markdown 围栏）或前端工具解析静默容错，均会导致 UI 渲染链路崩溃。**参考价值**：开发者在设计 Agent SDK 时，必须在协议解析层实施“防御性编程”，增加针对 LLM 输出特征的预处理与清洗逻辑，而非假设其严格遵从 DSL 格式。
2.  **跨端一致性测试将成 v1.0 发布的行业标准门槛**：a2ui 的“单语料库多语言差异化验证”与 CopilotKit 的多框架 UI 对齐表明，仅靠单端单测已无法保证生成式 UI 的可靠性。**参考价值**：技术决策者应及早将跨语言/跨框架的 Snapshot 或 E2E 一致性测试纳入 CI 阻塞流水线。
3.  **生成式 UI 走向“有状态”与“自学习”**：CopilotKit 的 Unified Learning Platform 及 a2ui 的 Python Fluent Builder 意味着，UI 不再是无状态的 JSON 映射，而是具备复盘、技能复用与动态组装能力的实体。**参考价值**：应用架构设计需为 Agent 预留长周期状态持久化与行为偏好学习的接口，这将是下一代 AI 交互的核心护城河。

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目动态日报 (2026-09-04)

## 1. 今日速览
过去 24 小时内，a2ui 项目保持着极高的开发活跃度，共更新了 50 个 PR（其中 13 个已合并/关闭）和 16 个 Issue（1 个已关闭）。项目当前的核心推进方向呈现双线并行的态势：一方面，核心贡献者正在大规模推进 Python Agent SDK 的宏、流式构建器及 CLI 工具链建设；另一方面，跨语言（Dart 与 TypeScript/web_core）的一致性与 CI 覆盖补全工作正密集展开。整体来看，项目正为下一阶段（v1.0）的协议规范化与多端一致化夯实基础，健康度与推进力强劲。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 13 个 PR 被合并或关闭，项目在以下方面取得了实质性进展：
*   **构建可复现性修复**：PR [#2371](https://redirect.github.com/a2ui-project/a2ui/pull/2371) 被关闭/合并，修复了从源码构建时生成的 Express 解析器不可复现的问题，对应关闭了 Issue [#2369](https://redirect.github.com/a2ui-project/a2ui/issues/2369)。
*   **跨语言一致性及 CI 补底**：针对 Dart 与 web_core 的行为分歧，提交了多个关键修复与测试 PR，包括修复通过原始值写入路径的错误 ([#2499](https://redirect.github.com/a2ui-project/a2ui/pull/2499))、增加表达式解析器跨语言一致性测试套件 ([#2497](https://redirect.github.com/a2ui-project/a2ui/pull/2497))、使递归深度保护生效 ([#2491](https://redirect.github.com/a2ui-project/a2ui/pull/2491), [#2492](https://redirect.github.com/a2ui-project/a2ui/pull/2492))，以及为 Dart 包添加缺失的 CI 流水线 ([#2494](https://redirect.github.com/a2ui-project/a2ui/pull/2494))。
*   **Python SDK 与宏系统架构搭建**：jacobsimionato 提交了一系列连贯的 PR（Layer 1 到 5），涵盖 Python 基础构建器 ([#2425](https://redirect.github.com/a2ui-project/a2ui/pull/2425))、宏运行时 ([#2519](https://redirect.github.com/a2ui-project/a2ui/pull/2519))、社区示例 ([#2520](https://redirect.github.com/a2ui-project/a2ui/pull/2520))、Dart CLI ([#2521](https://redirect.github.com/a2ui-project/a2ui/pull/2521)) 及 TypeScript CLI ([#2523](https://redirect.github.com/a2ui-project/a2ui/pull/2523))，标志着 SDK 工具链架构已基本成型。
*   **Swift 并发安全重构**：PR [#2502](https://redirect.github.com/a2ui-project/a2ui/pull/2502) 将 Swift 端的 `DataModel` 从手动锁迁移至 `@MainActor` 隔离，提升了内存安全与架构现代性。

## 4. 社区热点
*   **React 渲染器样式丢失问题**：Issue [#1307](https://redirect.github.com/a2ui-project/a2ui/issues/1307) 是今日评论数最多的 Issue（5 条）。该 P1 级 Bug 指出 `@a2ui/react@0.9.1` 的 npm 包中 CSS 模块类名引用丢失，导致核心组件无样式渲染。此问题直接阻断前端用户体验，引发团队和社区的高度关注与介入。
*   **React Native 渲染器需求**：Issue [#428](https://redirect.github.com/a2ui-project/a2ui/issues/428)（3 条评论，1 个 👍）再度活跃，社区开发者持续推进 A2UI 的 React Native 渲染端实现，反映出移动端 AI 智能体 UI 的强烈诉求。
*   **核心 SDK 一致性测试**：Issue [#2150](https://redirect.github.com/a2ui-project/a2ui/issues/2150)（3 条评论）讨论为 Core SDK 添加初始一致性测试，该议题与近期的跨语言对齐工作高度呼应，预示着测试架构的标准化即将启动。

## 5. Bug 与稳定性
按严重程度及影响面排列今日报告/活跃的 Bug：
1.  **[P1] React 发布包样式丢失**：[#1307](https://redirect.github.com/a2ui-project/a2ui/issues/1307) - 发布的 bundle 中 CSS 类名呈 `undefined`，致组件裸奔。**暂无修复 PR**，需紧急排查构建流程。
2.  **[P2] LLM 输出包裹 Markdown 代码围栏**：[#2514](https://redirect.github.com/a2ui-project/a2ui/issues/2514) - 当通过 Tool Response 获取 Skills 时，LLM 倾向于在 A2UI DSL 外层包裹 markdown 代码块，导致解析失败。**暂无修复 PR**。
3.  **[P2] Dart 与 web_core DataModel 行为分歧**：[#2498](https://redirect.github.com/a2ui-project/a2ui/issues/2498) - 1392 个操作程序中有 221 个结果不一致。**已有修复 PR** [#2499](https://redirect.github.com/a2ui-project/a2ui/pull/2499)。
4.  **[Bug] 表达式解析器递归深度保护失效**：[#2490](https://redirect.github.com/a2ui-project/a2ui/issues/2490) - 声明的最大深度限制因递归绕过检查而未生效。**已有修复 PR** [#2491](https://redirect.github.com/a2ui-project/a2ui/pull/2491), [#2492](https://redirect.github.com/a2ui-project/a2ui/pull/2492)。
5.  **[Bug] 非 ASCII 数据模型键不可达**：[#2500](https://redirect.github.com/a2ui-project/a2ui/issues/2500) - 模板中引用含非英文字符（如 `${café}`）的键会导致解析错误。**暂无修复 PR**。
6.  **[Bug] Dart 包缺乏 CI 保护**：[#2493](https://redirect.github.com/a2ui-project/a2ui/issues/2493) - `dart/` 目录下的核心包完全未接入 CI。**已有修复 PR** [#2494](https://redirect.github.com/a2ui-project/a2ui/pull/2494)。

## 6. 功能请求与路线图信号
*   **Python Fluent Builder 与宏系统**：jacobsimionato 提出的 Feature [#2524](https://redirect.github.com/a2ui-project/a2ui/issues/2524) (双向 AST 反序列化) 及 [#2525](https://redirect.github.com/a2ui-project/a2ui/issues/2525) (数据模型更新支持) 结合已提交的 PR 链，勾勒出 Python SDK 下一版本的核心形态：高度类型安全、支持宏编程的流式构建器。
*   **跨语言差异化一致性测试**：Feature [#2501](https://redirect.github.com/a2ui-project/a2ui/issues/2501) 提出“在一个语料库上运行所有语言的组件实现进行差异化一致性验证”。结合当日密集的相关 Bug 修复与测试 PR，这极有可能被正式纳入 v1.0 发布的阻塞门槛。
*   **协议版本不可知论**：PR [#2466](https://redirect.github.com/a2ui-project/a2ui/pull/2466) 试图让 Catalog 定义与具体协议版本解耦，配合 Catalog 弃用策略的规范化 ([#2438](https://redirect.github.com/a2ui-project/a2ui/pull/2438))，释放出项目正在为 v1.0 后的向前兼容做架构准备的强烈信号。

## 7. 用户反馈摘要
*   **痛点：开箱即用体验受损**：前端开发者直接使用 `@a2ui/react` npm 包时遭遇样式完全失效（[#1307](https://redirect.github.com/a2ui-project/a2ui/issues/1307)），暴露出项目在 CI/CD 中缺乏对发布包实际可用性的端到端校验。
*   **痛点：LLM 现实交互的摩擦**：开发者发现 LLM 在 Tool Call 场景下会“画蛇添足”地添加 markdown 格式（[#2514](https://redirect.github.com/a2ui-project/a2ui/issues/2514)），这反映了 A2UI DSL 解析器在应对 LLM 非标准输出时鲁棒性不足，需在 SDK 层做防御性处理。
*   **痛点：依赖版本收紧引发的兼容焦虑**：`@a2ui/react` 收窄了 React 的 peer dependency 版本要求，导致部分用户项目无法直接升级（[#2522](https://redirect.github.com/a2ui-project/a2ui/issues/2522)）。
*   **满意/期待：移动端扩展**：社区对 React Native 渲染器（[#428](https://redirect.github.com/a2ui-project/a2ui/issues/428)）的关注度持续走高，印证了 A2UI 在跨端 AI 交互场景的潜力受到认可。

## 8. 待处理积压
*   **Issue [#1307](https://redirect.github.com/a2ui-project/a2ui/issues/1307)**：自 4 月 30 日提交至今已逾 4 个月，作为 P1 级且直接影响前端用户首屏体验的 Bug，仍处于 `needs-team-input` 状态。鉴于其高优先级，强烈建议维护团队立即介入排查构建产物。
*   **Issue [#2356](https://redirect.github.com/a2ui-project/a2ui/issues/2356)**：Dart Agent SDK 的实现进度自 8 月下旬以来缺乏更新，作为 P1 级核心模块蓝图，需同步当前进展或拆分子任务以保持推进节奏。
*   **Issue [#2500](https://redirect.github.com/a2ui-project/a2ui/issues/2500)**：非 ASCII 字符在多语言实现中均无法解析，影响国际化场景，目前仅有 Triage 标签，尚无开发者认领。

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

**OpenUI 项目动态日报 - 2026-09-04**

**1. 今日速览**
2026年9月4日，OpenUI 项目整体处于低活跃度状态，无新版本发布、无新增或合并的 Pull Request。过去24小时内，项目仅有 2 个历史 Issue 产生新动态，且无任何 Issue 被关闭。尽管代码提交侧静默，但社区针对跨框架迁移和 Vue 端渲染缺陷的讨论仍在持续，反映出项目在生态扩展与多端一致性上仍有改进空间。整体项目健康度暂稳，但维护者需关注社区积压诉求。

**2. 版本发布**
今日无新版本发布。

**3. 项目进展**
今日无合并或关闭的 PR，项目代码库无向前推进的实质性进展。

**4. 社区热点**
今日讨论活跃的 Issue 主要围绕开发者体验与框架兼容性展开：
*   **[Issue #354](https://redirect.github.com/thesysdev/openui/issues/354) Migration guide from json-render**：今日更新并获得 3 个 👍，是今日最受关注的讨论。用户从 `json-render` 迁移至此，反映出 OpenUI 在生成式 UI 领域的吸引力正在上升，但缺乏官方迁移指南成为核心痛点。
*   **[Issue #728](https://redirect.github.com/thesysdev/openui/issues/728) Vue chat TextContent claims markdown support but renders markdown literally**：今日更新且有 2 条评论。聚焦 Vue 端组件行为与声明不符的问题，用户期望在 Vue 示例中获得开箱即用的 Markdown 渲染体验，凸显了多框架适配时的文档/行为一致性需求。

**5. Bug 与稳定性**
*   **[中] Vue 端 Markdown 渲染失效**：[Issue #728](https://redirect.github.com/thesysdev/openui/issues/728) 报告 Vue chat 的 `TextContent` 组件声明支持 Markdown，但实际按字面量渲染标记符号。此缺陷属于文档声明与组件库实际行为不一致，影响 Vue 技术栈用户的正常使用。**目前尚无关联的 Fix PR 提交。**

**6. 功能请求与路线图信号**
*   **[文档/迁移支持] 请求提供从 `json-render` 迁移的指南**：[Issue #354](https://redirect.github.com/thesysdev/openui/issues/354) 提出此需求，并被标记为 `good first issue`。随着生成式 UI 趋势演进，提供竞品迁移指南是降低用户转化成本、扩大市场份额的关键信号。目前无相关 PR，但鉴于其高赞数和入门友好标签，极有可能被纳入近期的文档迭代路线图或等待社区贡献者认领。

**7. 用户反馈摘要**
*   **跨库迁移意愿强烈**：用户明确表示 OpenUI "seems more promising"（更具前景），认可项目的技术潜力，但迁移成本的未知性阻碍了其深度采用，急需官方文档指引。
*   **框架生态体验割裂**：Vue 端用户在使用 Chat 组件时，发现示例与实际渲染能力脱节（Markdown 渲染失效），对多语言/多框架支持的一致性表示担忧，期望核心组件能力与主流框架端对齐。

**8. 待处理积压**
*   **[Issue #354](https://redirect.github.com/thesysdev/openui/issues/354)**：已开放近 6 个月（自 2026-03-18），虽被标记为 `good first issue` 且获赞最多，但官方尚未推进或认领。建议维护者提供迁移文档大纲，或主动指派社区贡献者跟进。
*   **[Issue #728](https://redirect.github.com/thesysdev/openui/issues/728)**：已开放近 2 个月（自 2026-07-07），标记为 `help wanted`。作为影响 Vue 端基础体验的缺陷，长期缺乏官方修复跟进可能导致 Vue 生态早期开发者流失，需提高优先级。

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报 (2026-09-04)

## 1. 今日速览
过去 24 小时内，CopilotKit 项目保持了极高的开发与社区活跃度，共更新 20 条 Issue（新开/活跃 19 条，关闭 1 条）与 41 条 PR（待合并 18 条，已合并/关闭 23 条），合并吞吐率表现优异。项目今日一口气发布了 3 个新版本（核心库 v1.70.1、channels v0.9.2 及 angular v0.5.1），标志着多端适配与通道能力的最新迭代。核心进展集中在 Intelligence 平台的可靠性与学习功能的落地，以及 V2 生态的迁移和 CI 基建修复，整体项目健康度良好，正向 V2 稳定版稳步推进。

## 2. 版本发布
今日共发布 3 个新版本，无重大破坏性变更，主要为缺陷修复与生态适配更新：
- **v1.70.1**: 核心库 patch 更新，主要包含近期合并的稳定性修复与 Intelligence 功能适配。
- **channels/v0.9.2**: 通道包小版本升级，针对 Telegram 等渠道的流式渲染逻辑进行了修复（关联 Issue [#6602](https://redirect.github.com/CopilotKit/CopilotKit/issues/6602)）。
- **angular/v0.5.1**: Angular 生态适配包 patch 更新，由 PR [#6877](https://redirect.github.com/CopilotKit/CopilotKit/pull/6877) 触发，配合 Angular 22 升级及依赖声明优化。

## 3. 项目进展
今日共合并/关闭 23 个 PR，项目在以下几个重大方向取得实质性推进：
- **Intelligence 平台核心基建落地**：合并了超大型 Epic PR，包括可靠线程恢复 V1/V2 合约实现 ([#6450](https://redirect.github.com/CopilotKit/CopilotKit/pull/6450), [#6468](https://redirect.github.com/CopilotKit/CopilotKit/pull/6468)) 以及统一学习平台（Unified Learning Platform）的 SDK 与适配器落地 ([#6164](https://redirect.github.com/CopilotKit/CopilotKit/pull/6164))。这标志着 CopilotKit 云端协同与自学习能力的架构成型。
- **V2 生态迁移加速**：合并了将 5 个核心公共示例迁移至 v2 API 的重要 PR ([#6808](https://redirect.github.com/CopilotKit/CopilotKit/pull/6808) - 已关闭/合并)，大幅降低了用户从 v1 升级到 v2 的门槛。
- **MCP 与文档体验优化**：修复了代理 MCP 读取路由问题 ([#5810](https://redirect.github.com/CopilotKit/CopilotKit/pull/5810))；重构了文档侧边栏与页面布局 ([#6880](https://redirect.github.com/CopilotKit/CopilotKit/pull/6880), [#6879](https://redirect.github.com/CopilotKit/CopilotKit/pull/6879))；新增了 Intelligence 落地页 ([#6866](https://redirect.github.com/CopilotKit/CopilotKit/pull/6866))。

## 4. 社区热点
今日讨论最活跃的 Issue 集中在跨端能力对齐与构建工具兼容性上：
- **[#3172](https://redirect.github.com/CopilotKit/CopilotKit/issues/3172) [CLOSED]**：Angular 包暴露 DevConsole 与 Inspector 配置项的请求（7 条评论）。反映出 Angular 用户强烈要求与 React 端拥有对等的调试与隐藏 UI 的能力，该 Issue 已随 angular v0.5.1 发布关闭。
- **[#6643](https://redirect.github.com/CopilotKit/CopilotKit/issues/6643) [OPEN]**：将 ADK Angular 启动器升级至 Angular 22（6 条评论）。核心维护者 rainerhahnekamp 发起，社区积极响应，目前已有对应 PR [#6878](https://redirect.github.com/CopilotKit/CopilotKit/pull/6878) 提交。
- **[#4151](https://redirect.github.com/CopilotKit/CopilotKit/issues/4151) [OPEN]**：Vite 7 浏览器构建时出现 Node.js 模块解析警告（5 条评论，2 赞）。此为影响前端打包体验的关键痛点，目前标记为 `reserved for students`，期待社区认领修复。

## 5. Bug 与稳定性
今日报告的 Bug 多涉及底层协议、并发安全与跨端一致性，部分严重问题已有对应修复 PR：
1. **并发导致系统提示词泄露** (严重): [#5659](https://redirect.github.com/CopilotKit/CopilotKit/issues/5659) 指出 MAF showcase 中的单例 agent 在并发请求下会互相污染 `default_options`，导致系统提示词跨用户泄露。暂无 Fix PR。
2. **A2UI 骨架屏死锁** (较严重): [#6526](https://redirect.github.com/CopilotKit/CopilotKit/issues/6526) 指出 A2UI 界面常驻 "Building interface" 且无法解析，原因是 BuiltInAgent 未发射正确的 Snapshot 事件。暂无 Fix PR。
3. **多适配器工具调用中断** (较严重): [#2979](https://redirect.github.com/CopilotKit/CopilotKit/issues/2979) 使用不同 LLM 适配器（如 Gemini 与 Anthropic）时工具调用易失败。**已有 Fix PR**：[#6883](https://redirect.github.com/CopilotKit/CopilotKit/pull/6883) 专门修复了 Gemini 工具的参数 Schema 验证失败问题。
4. **AG-UI 状态键连字符不一致** (中等): [#5463](https://redirect.github.com/CopilotKit/CopilotKit/issues/5463) 指出 SDK 中 `ag-ui` 与 `ag_ui` 的混用导致 A2UI 渲染失败。暂无 Fix PR。
5. **LangGraph 自环图崩溃** (中等): [#5606](https://redirect.github.com/CopilotKit/CopilotKit/issues/5606) 示例中缺乏迭代保护，劣化 LLM 输出会导致图崩溃。暂无 Fix PR。

## 6. 功能请求与路线图信号
结合新开 Issue 与活跃 PR，可观测到项目接下来的发力方向：
- **Inspector 与 Learning 融合**：PR [#6875](https://redirect.github.com/CopilotKit/CopilotKit/pull/6875) 为 Web Inspector 增加了 Learning 视图，配合已合并的统一学习平台 Epic，"Inspect -> Learn -> Skill 复用" 将是下版本核心卖点。
- **A2UI 业务场景深化**：PR [#6876](https://redirect.github.com/CopilotKit/CopilotKit/pull/6876) 引入了 Vantage 皮肤，实现对话式仪表盘组合，预示 A2UI 在企业级 BI 场景的落地。
- **连接生命周期与多上下文支持**：Issue [#4152](https://redirect.github.com/CopilotKit/CopilotKit/issues/4152) 请求 `onConnected/onReady` 事件，Issue [#3891](https://redirect.github.com/CopilotKit/CopilotKit/issues/3891) 请求 `useAgentContext` 支持数组传入。这暴露出当前 Agent 状态机在多上下文组合与连接就绪判断上的 API 缺口，有望在后续 v1.71 或 v2.0 正式纳入。
- **去标识化与解耦**：Issue [#4775](https://redirect.github.com/CopilotKit/CopilotKit/issues/4775) 提出 `agentId != name`，要求解除运行时 ID 与友好名称的强绑定，这是走向企业级动态 Agent 编排的必经之路。

## 7. 用户反馈摘要
- **痛点 1：V1 到 V2 迁移陡峭**：大量示例和文档曾停留在 v1，用户难以参照编写 v2 代码（PR [#6808](https://redirect.github.com/CopilotKit/CopilotKit/pull/6808) 已着手解决此问题）。
- **痛点 2：前端工具 Schema 静默失效**：Issue [#6570](https://redirect.github.com/CopilotKit/CopilotKit/issues/6570) 反映前端工具描述符解析错误时不会报错，而是生成空 Schema，导致 Agent 无参调用工具并在深层渲染时才报错，调试极其困难。
- **痛点 3：UI 细节打磨不足**：如弹窗圆角被背景遮罩遮盖 ([#6472](https://redirect.github.com/CopilotKit/CopilotKit/issues/6472))、Vue 中 `@stop` 事件监听丢失 ([#5934](https://redirect.github.com/CopilotKit/CopilotKit/issues/5934)) 等，表明跨框架（React/Vue/Angular）的 UI 一致性与事件冒泡机制仍有瑕疵。
- **场景：结构化数据透传**：Issue [#3748](https://redirect.github.com/CopilotKit/CopilotKit/issues/3748) 呼吁支持 LangGraph 中的 `ToolMessage.artifact` 与自定义流模式，反映出高阶用户在复杂工作流中对富数据透传到前端的迫切需求。

## 8. 待处理积压
以下长期悬而未决的重要 Issue 影响项目基线稳定性，提醒维护者优先排期或引导社区攻坚：
- **[#2653](https://redirect.github.com/CopilotKit/CopilotKit/issues/2653)** (悬置近 11 个月)：聊天在 Agent 加载时应显示 Loading 态，目前交互可能导致异常，严重影响基础用户体验。
- **[#4151](https://redirect.github.com/CopilotKit/CopilotKit/issues/4151)** (悬置近 5 个月)：Vite 7 构建警告问题，作为前端核心构建工具，该警告会降低开发者接入信心。
- **[#3644](https://redirect.github.com/CopilotKit/CopilotKit/issues/3644)** (悬置近 5 个月)：交错 Tool Call 导致前端生成重复的 Assistant Message ID，威胁消息状态树的稳定性。
- **PR [#6578](https://redirect.github.com/CopilotKit/CopilotKit/pull/6578)** (开放 15 天)：Angular effect 显式依赖重构，是提升 Angular 响应式稳定性的关键改进，目前未合并，需关注其 CI 状态与 Review 进度。

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*