# 生成式 UI 生态日报 2026-09-22

> Issues: 30 | PRs: 99 | 覆盖项目: 4 个 | 生成时间: 2026-09-22 03:59 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告 (2026-09-22)

## 1. 生态全景
当前生成式 UI 生态正处于从“渲染基建”向“多框架适配与 AI 智能体深度集成”演进的关键期。服务端驱动与声明式 JSON 渲染范式在带来跨端一致性的同时，正面临复杂交互与异步副作用的架构摩擦。各项目在发力 v1.0 规范确立、底层协议升级（如 AG-UI 1.0）和多语言 SDK 铺设之际，普遍暴露出工程化成熟度不足的阵痛，如&产物校验缺失、依赖硬耦合及 CI 稳定性下降等共性挑战。

## 2. 各项目活跃度对比

| 项目 | Issues 变动 (新/活/关) | PRs 变动 (待/合/关) | Release 情况 | 核心推进状态 |
| :--- | :--- | :--- | :--- | :--- |
| **a2ui** | 14 / 6 / 8 (共22) | 32 / 0 / 9 (共41) | 无 | v1.0 规范确立期，架构重构与 SDK 铺设并行 |
| **OpenUI** | 0 / 2 / 0 (共2) | 6 / 0 / 9 (共15) | `devtools'3.2.2` (Patch) | 生态补齐与&工程化提效期，迭代紧凑健康 |
| **json-render**| 0 / 0 / 0 (.0) | 1 / 0 / 2 (共3) | 无 | 低频稳步推进，重心在文档基建与 Agent �'集成 |
| **CopilotKit** | 1 / 0 / 3 (共4) | 13 / 0 / 27 (共40) | `v1.73.1` (预备中) | 依赖解耦与协议升级期，伴随大规模基建回滚 |

## 3. 共同关注的功能方向

- **异步与生命周期能力扩展**：声明式 UI 框架普遍遭遇“动态交互”瓶颈。**a2ui** 社区强烈诉求跨组件联动（#302）与生命周期 Action（#2712）；**json-render** 用户亟需组件挂载时的异步数据加载（#245）与异步校验（#291）。如何在不破坏声明式范式的前提下引入副作用，是共性难题。
- **多框架/多端生态补齐**：为扩大适用面，各项目均在横向扩展运行时。**a2ui** 正在铺设 Dart/TS Agent SDK 以接入 Flutter 生态（#2244）；**OpenUI** 今日正式落地了 Angular 运行时及配套文档；**CopilotKit** 则致力于解耦 Express 等硬依赖以兼容更多 Node 框架。
- **AI Agent 专属协议与路由基建**：将 UI 框架作为*'为 Agent 服务的“外设”成为共识。**Cop-ilotKit** 正全面适配 AG-UI7.0 协议；**json-render** 在文档中新增 SEO/Agent Routes；**a2ui** 也在强化 Agent SDK 的蓝图建设。

## 4.? 差异化定位分析

- **a2ui**：**协议与规范-驱动**。强规范约束（目录 Schema、协议关键字保留），追求跨端渲染的一致性，痛点也源于此（跨端布局歧义、客户端交互受限）。适合对跨原生端一致性要求极高的重度 Agent 交互场景。
C
- **OpenUI**：**渲染容错与商业化-导向**。侧重前端渲染层的高可靠容错（如 ErrorBoundary 隔离），深度集成 Vercel 生态与 Autofix 管道。适合依托 Verc5生态、追求开箱即用与高可观测性的 B 端应用。

- **json-render**：**极简声明式渲染**。架构最轻，坚守 JSON Schema 驱动，正发力 AI 可发现性（Geistdocs）。但受限于同步范式，业务拓展能力较弱。适合静态或弱交互的 Agent 可7调结构化 UI 场景。

- **CopilotKit**>**：**全栈 AI 应用运行时**。最偏应用层，直击 HITL（Human-in-the-loop）、MCP 多租户鉴权、自托管等企业级 SaaS 需求。适合需要快速构建包含复杂权限与数据持久化的 AI Copilot 产品团队。

## 5. 社区热度与成熟度

- **高活跃 - 快速迭代期**：**a2ui** 与 **CopilotKit**。Issue/PR 数量庞大，核心功能推进迅猛，但均暴露出工程化阵痛（a2ui 的主分支 CI 连续报红与 P1 Bug 积压；CopilotKit 为稳定性被迫单日回滚 46 个 Showcase PR）。
- **中活跃 - 稳健成熟期**：**OpenUI**。交互频次中等，但 PR 流转极快，发版规律，核心 Bug 修复与生态扩展有条不紊，项目健康度最佳。
- **低活跃 - 探索蓄力期**：**json-render**。社区发声少，核心 PR 多为文档与基建，长期功能 Issue 积压严重，维护团队对破坏性特性引入持极谨慎态度。

## 6. 值得关注的趋势信号

- **趋势1：纯粹的“静态 JSON 渲染”已触及天花板，框架必须向“动态异步”妥协**。无论是 a2ui 的生命周期 Action，还是 json-render 的动态加载诉求，均表明 Agent 需要的不仅是“展示面”，更是能触发 API、执行校验的“控制面”。**参考价值**：开发者在选型时，需重点验证框架在异步表单校验、跨组件状态联动等“反声明式”场景下的 Workaround，避免遭遇架构性硬阻断。

- **趋势2：依赖解耦与 Peer Dependencies 规范正成为框架级生存红线**。CopilotKit 因 Express 硬依赖引发企业用户升级阻断，a2ui 因产物构建差异导致线上样式全量失效。**参考价值**：生成式 UI 库必须尊重宿主环境，采用 Peer Dependencies 降级耦合，并在 CI 阶段强制校验 NPM 产物与源码的一致性，这是被社区痛点倒逼出的基建底线。

- **趋势3：AI Agent 的多租户与动态鉴权成为落地关键卡点**。CopilotKit 社区对 MCP 动态 API Keys 的强烈诉求（#2407）揭示：生成式 UI 在走向生产环境时，无法回避 SaaS 场景下的租户隔离与鉴权问题。**参考价值**：架构设计需将 per-request 级别的上下文注入（如动态 Token、API Key）作为一等公民支持，避免运行时单例模式导致的鉴权越权风险。

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目动态日报 (2026-09-22)

## 1. 今日速览
过去 24 小时内，a2ui 项目保持了极高的社区活跃度，共产生 22 条 Issue 更新（14 新开/活跃，8 关闭）与 41 条 PR 更新（32 待合并，9 合并/关闭）。项目当前正处于 v1.0 规范确立与多语言 SDK 构建的关键时期，核心开发精力集中在架构重构（如 React 渲染器去重）、Dart/TS Agent SDK 铺设以及协议规范放宽上。然而，主分支近期连续出现 E2E 测试与 Evals 评估失败，CI/CD 稳定性亟待修复；同时，一个影响线上用户的 P1 级 React 样式丢失 Bug 仍在待审状态，需核心团队优先介入。

## 2. 版本发布
无

## 3. 项目进展
今日共有 9 个 PR 被合并/关闭，8 个 Issue 被关闭，主要推进了以下工作：
- **Agent SDK 蓝图与基础设施落地**：合并了 [PR #2718](https://redirect.github.com/a2ui-project/a2ui/pull/2718)（更新 `a2ui_agent` 模块蓝图以对齐实现）与 [PR #2651](https://redirect.github.com/a2ui-project/a2ui/pull/2651)（添加空的 TS `a2ui_agent` 包及设计文档），为后续 Dart/TS Agent SDK 的实质代码注入打下基础。
- **核心运行时严重 Bug 修复**：关闭了 [Issue #2388](https://redirect.github.com/a2ui-project/a2ui/issues/2388)，解决了运行时解析器中嵌套 `{call}` 参数缺乏深度守卫导致的栈溢出崩溃问题（CWE-674）。
- **基础目录能力扩展与规范化**：关闭了 3 个关于基础目录缺失原语的 Issue（[Issue #2674](https://redirect.github.com/a2ui-project/a2ui/issues/2674) 表格数据展示、[Issue #2673](https://redirect.github.com/a2ui-project/a2ui/issues/2673) 富选项选择、[Issue #2672](https://redirect.github.com/a2ui-project/a2ui/issues/2672) 步进器状态原语），以及 [Issue #2197](https://redirect.github.com/a2ui-project/a2ui/issues/2197)（语义动作类声明）和 [Issue #2702](https://redirect.github.com/a2ui-project/a2ui/issues/2702)（示例 JSON 与目录图标不一致）。

## 4. 社区热点
- **[Issue #302](https://redirect.github.com/a2ui-project/a2ui/issues/302) (9 评论)**：关于“声明客户端事件处理，使一个组件能影响另一个组件”的特性提案。由于 A2UI 采用服务端驱动的 UI 范式，客户端侧的跨组件联动一直是架构痛点，该讨论反映了社区对复杂交互场景（非全量往返服务端）的强烈诉求。
- **[Issue #1307](https://redirect.github.com/a2ui-project/a2ui/issues/1307) (7 评论)**：React `@0.9.1` 发布包中 CSS Module 类名丢失导致组件无样式的严重 Bug。讨论集中在构建产物与源码行为的差异上，直接影响开发者体验。
- **[Issue #210](https://redirect.github.com/a2ui-project/a2ui/issues/210) (7 评论)**：请求在 TypeScript 代码中集中定义 A2UI 扩展 URI，以避免多硬编码导致的版本不同步问题，属于架构优化的典型讨论。
- **[Issue #2674](https://redirect.github.com/a2ui-project/a2ui/issues/2674) (1 👍, 2 评论)**：基础目录缺乏表格化或定量数据展示原语。由于 Agent 经常需要输出消费统计、对比矩阵等结构化数值数据，该 Issue 获得了社区认可并已顺利关闭。

## 5. Bug 与稳定性
按严重程度排列：
1. **P1 | [Issue #1307](https://redirect.github.com/a2ui-project/a2ui/issues/1307)**：`@a2ui/react@0.9.1` 发布包 CSS 类名全量失效（Button/TextField/ChoicePicker 渲染为无样式裸标签）。状态：待审核，暂无修复 PR。
2. **P2 | [Issue #2388](https://redirect.github.com/a2ui-project/a2ui/issues/2388)**：运行时解析器对嵌套 `{call}` 无限递归导致栈溢出。状态：已关闭（已修复）。
3. **P2 | [Issue #2702](https://redirect.github.com/a2ui-project/a2ui/issues/2702)**：规范示例 JSON 中使用了基础目录未定义的图标，导致 Compose 渲染器崩溃。状态：已关闭。
4. **CI/CD 不稳定**：主分支近期连续触发测试失败报警，暂无对应修复 PR 合入：
   - [Issue #2722](https://redirect.github.com/a2ui-project/a2ui/issues/2722)：E2E 测试失败 (关联 PR #2713)
   - [Issue #2714](https://redirect.github.com/a2ui-project/a2ui/issues/2714)：Evals 评估失败 (关联 PR #2703，使用 `gemini-3.8-flash` 模型)
   - [Issue #2709](https://redirect.github.com/a2ui-project/a2ui/issues/2709)：E2E 测试失败 (关联 PR #2683)

## 6. 功能请求与路线图信号
- **v1.0 Catalog 规范放宽**：[Issue #2723](https://redirect.github.com/a2ui-project/a2ui/issues/2723) 提出放宽 v1.0 目录 Schema 规则以允许设计令牌、叶节点 `$defs` 和元数据扩展，同日已提交对应实现 [PR #2724](https://redirect.github.com/a2ui-project/a2ui/pull/2724)。这表明 v1.0 将正式兼容 Material 3 等现代设计系统，这是迈向 1.0 的关键规范变更。
- **v1.0 协议关键字保留与转义**：[Issue #2692](https://redirect.github.com/a2ui-project/a2ui/issues/2692) 建议在 v1.0 中为保留关键字（如 `path`、`call`）增加 `$` 或 `@` 前缀以避免与 MCP Server 冲突，涉及底层协议破坏性变更，正在讨论中。
- **生命周期 Action 支持**：[Issue #2712](https://redirect.github.com/a2ui-project/a2ui/issues/2712) 请求在 v1.0 提供标准的启动/挂载时触发 Action 的方式。当前协议仅支持显式组件事件，缺乏应用初始化入口点。
- **Dart 生态扩展**：[Issue #2244](https://redirect.github.com/a2ui-project/a2ui/issues/2244) 请求为 Flutter 提供纯 Dart 适配器；[Issue #2643](https://redirect.github.com/a2ui-project/a2ui/issues/2643) 请求放宽 `preact_signals` 依赖约束至 `^7.0.0`（已关闭）。

## 7. 用户反馈摘要
- **发布产物质量痛点**：开发者直接使用 npm 发布包时遭遇样式完全失效（#1307），暴露出项目在 CI 阶段对发布产物校验的缺失，用户不得不回退或锁定特定 commit sha。
- **Agent 实际场景受限**：多个 Issue 反映当前基础目录“过于基础”，缺乏 Agent 输出最常用的一些模式：数值/表格呈现（#2674）、多步骤状态展示（#2672）、富卡片选择（#2673）。用户目前只能用 Row/Column 硬对齐或输出纯文本，严重影响 Agent 交互体验。
- **布局一致性困惑**：[Issue #2710](https://redirect.github.com/a2ui-project/a2ui/issues/2710) 反映 Row/Column 在不同原生布局引擎（如 Jetpack Compose）中默认对齐和调整大小行为存在歧义，导致跨端渲染回归。

## 8. 待处理积压
- **[Issue #1307](https://redirect.github.com/a2ui-project/a2ui/issues/1307)**：P1 级 React 渲染样式失效问题自 4 月底提交至今仍在 `needs review`，严重影响 0.9.x 线用户，亟需团队排期修复。
- **[Issue #2356](https://redirect.github.com/a2ui-project/a2ui/issues/2356) & [Issue #2373](https://redirect.github.com/a2ui-project/a2ui/issues/2373)**：Dart `a2ui_agent` SDK 的实现及其前置工作（P1 级），自 8 月开启以来进度缓慢，是 v1.0 多语言对齐的核心卡点。
- **主分支 CI 持续报红**：[Issue #2722](https://redirect.github.com/a2ui-project/a2ui/issues/2722)、[#2714](https://redirect.github.com/a2ui-project/a2ui/issues/2714)、[#2709](https://redirect.github.com/a2ui-project/a2ui/issues/2709) 连续报警，若无紧急修复将严重阻碍后续 PR 合并与迭代效率。

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目动态日报 (2026-09-22)

## 1. 今日速览
OpenUI 项目今日保持高度活跃，过去 24 小时内共处理了 15 个 PR（其中 9 个已合并/关闭）与 2 个 Issue，并成功发布 1 个新版本。项目当前的重心明确集中在**生态补齐（Angular 支持）、AI 容错管道封装以及工程化提效（CI 优化与依赖升级）**上。总体而言，项目迭代节奏紧凑，健康度良好，核心功能推进与稳定性修复并行不悖。

## 2. 版本发布
- **@​openuidev/devtools@0.2.2**
  - **更新类型**：Patch 更新
  - **更新内容**：拆分了 DevTools 可靠性横幅的 CTA。原先单一的 "Autofix errors" 链接被拆分为主要操作 "Get API key" 和次要操作 "View docs"，为已了解 Autofix 的用户提供了直接获取密钥的快捷路径。
  - **破坏性变更/迁移注意事项**：无。
  - **关联 PR**：[#1207](https://redirect.github.com/thesysdev/openui/pull/1207)

## 3. 项目进展
今日共合并/关闭 9 个 PR，项目在框架支持、运行时稳定性与工程化方面迈进了一大步：
- **Angular 生态落地**：随着 [#1167](https://redirect.github.com/thesysdev/openui/pull/1167)（Angular 语言包脚手架）和 [#1217](https://redirect.github.com/thesysdev/openui/pull/1217)（Angular Cloud 聊天示例与 API 文档）的关闭，OpenUI 正式完成了 Angular 运行时的发布及配套文档示例的补齐。
- **关键稳定性修复**：[#744](https://redirect.github.com/thesysdev/openui/pull/744) 修复了 `ElementErrorBoundary` 在 React 提交阶段因重插旧节点导致宿主环境崩溃的严重问题，显著提升了运行时容错性。
- **UI 一致性优化**：[#1208](https://redirect.github.com/thesysdev/openui/pull/1208) 为 DevTools 组件内置了 Inter 字体的 Latin 子集，避免了未加载该字体时降级为系统字体导致的排版不一致。
- **工程化与 CI 提效**：[#1212](https://redirect.github.com/thesysdev/openui/pull/1212) 将 Example 检查移至路径过滤工作流，减少无关 PR 的资源消耗；[#1210](https://redirect.github.com/thesysdev/openui/pull/1210) 将 JS 构建环境的 Node 版本锁定至 v24.21.0。

## 4. 社区热点
今日数据的显式互动（评论/点赞）较少，但从开启的重量级 PR 可以洞察核心团队与社区的工作焦点：
- **服务端 AI 管道封装**：[#1194](https://redirect.github.com/thesysdev/openui/pull/1194)（Add Autofix helpers）与 [#1205](https://redirect.github.com/thesysdev/openui/pull/1205)（Persist Chat Completions history）反映出项目正在将“校验-流式修复-持久化”的复杂逻辑下沉到 `@openuidev/server` 中，大幅降低应用层接入成本。
- **官网产品化展示升级**：[#1206](https://redirect.github.com/thesysdev/openui/pull/1206) 与 [#1211](https://redirect.github.com/thesysdev/openui/pull/1211) 正在重构首页与可观测性页面，用真实产品图替换占位符并优化移动端 CTA，标志着项目商业化展示的成熟。

## 5. Bug 与稳定性
- **[已修复] React 宿主环境崩溃**：[#744](https://redirect.github.com/thesysdev/openui/pull/744) 解决了 `ElementErrorBoundary` 捕获渲染错误后复用旧 Fiber 节点引发的 `insertBefore` DOM 异常，该修复防止了局部错误扩散至整个宿主应用崩溃。
- **[隐患] 依赖废弃警告**：[#1219](https://redirect.github.com/thesysdev/openui/issues/1219) 指出 `@openuidev/react-ui` 仍依赖已废弃的 `recharts@v2`，虽非功能性 Bug，但会在安装时产生 npm 警告，且存在长期的安全与兼容性风险。目前尚无修复 PR。

## 6. 功能请求与路线图信号
- **Recharts v3 升级需求**：用户在 [#1219](https://redirect.github.com/thesysdev/openui/issues/1219) 提出对 Recharts v3 的支持诉求。鉴于 v2 已停止维护，该依赖升级极有可能在下一版本迭代中被纳入。
- **Vercel 生态深度集成**：[#1205](https://redirect.github.com/thesysdev/openui/pull/1205) 提出在 Vercel Cloud 模板中整合历史记录持久化与 Autofix 修复能力，预示着 OpenUI 正将自身定位为 AI SDK 在前端渲染层的高可靠搭档。
- **CI 智能触发**：[#1215](https://redirect.github.com/thesysdev/openui/pull/1215) 提出 Release 仅在真实发包时才触发 Starters 更新，这属于典型的项目成熟期基础设施治理信号。

## 7. 用户反馈摘要
- **依赖健康度痛点**：开发者对安装时的废弃警告敏感，认为依赖滞后（如 Recharts v2）会影响自身项目的合规性评估（来源：[#1219](https://redirect.github.com/thesysdev/openui/issues/1219)）。
- **开箱即用的文档渴求**：当新运行时（Angular）发布时，社区立刻跟进要求提供可运行示例与 API Reference，说明用户对框架的冷启动成本高度关注（来源：[#1216](https://redirect.github.com/thesysdev/openui/issues/1216)）。

## 8. 待处理积压
- **核心 Autofix PR 阻塞风险**：[#1194](https://redirect.github.com/thesysdev/openui/pull/1194) 自 09-17 开启至今仍未合并，而 [#1205](https://redirect.github.com/thesysdev/openui/pull/1205) 的逻辑可能与之存在依赖，建议维护团队优先 Review 推进，避免后续 Vercel 模板集成受阻。
- **首页重构依赖链**：[#1211](https://redirect.github.com/thesysdev/openui/pull/1211) 明确依赖了 [#1206](https://redirect.github.com/thesysdev/openui/pull/1206)（首页重构）中的 `FadedDither` 组件。若 #1206 延迟合入，将导致可观测性页面重构持续停滞，需关注合并顺序。

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render 项目动态日报 (2026-09-22)

## 1. 今日速览
过去 24 小时，`json-render` 项目整体处于低频稳步推进状态，无新版本发布。项目当前核心精力似乎集中在文档基建与 AI 智能体生态集成上，最显著的动态是文档系统向 Geistdocs 迁移的 PR 进入待合并状态。社区侧，两个关于异步与动态数据加载的长期活跃 Issue 再次被唤醒，反映出用户在复杂业务场景下对框架异步能力扩展的强烈诉求。整体来看，项目健康度平稳，但核心功能的社区需求积压需维护团队引起重视。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日有 2 个 PR 状态更新为 CLOSED，1 个重要文档 PR 处于 OPEN 待合并状态：
*   **[CLOSED] PR #334 [feat(tanstack-start): add renderer](https://redirect.github.com/vercel-labs/json-render/pull/334)**：该 PR 试图为 TanStack Start 添加渲染器支持（含全应用路由、SSR 数据辅助、元数据等），已于今日关闭。这暗示该特性可能因架构调整或方案重构被暂缓或拒绝。
*   **[CLOSED] PR #267 [update release process](https://redirect.github.com/vercel-labs/json-render/pull/267)**：发布流程更新 PR 于今日关闭，推测项目已在内部完成了发版流水线的重构。
*   **[OPEN] PR #340 [docs: migrate to Geistdocs](https://redirect.github.com/vercel-labs/json-render/pull/340)**：这是一项重大的基建升级，将文档迁移至 Geistdocs，保留了 56 个页面和 760 个锚点，并**新增了 SEO/agent routes**。这标志着项目正在强化其文档对 AI Agent 的可发现性与交互能力，进一步靠拢 AI 智能体生态。

## 4. 社区热点
今日讨论最活跃的焦点集中在异步与动态渲染能力的缺失：
*   **[Issue #245] [Support dynamic data loading on UIElement mount](https://redirect.github.com/vercel-labs/json-render/issues/245)**（👍 2，评论 1）：作者 `tserdeiro` 希望从 JSON 层面定义组件在挂载时调用外部 API 填充状态的能力。这触及了声明式 JSON 渲染与命令式副作用的边界，是高级使用场景的核心痛点。
*   **[Issue #291] [Custom validation checks do not support async implementation](https://redirect.github.com/vercel-labs/json-render/issues/291)**（评论 2）：作者 `amiigas` 指出文档声称支持异步自定义校验，但实际并未实现。文档与实现的割裂引发了社区困惑。

## 5. Bug 与稳定性
*   **中等严重度：异步校验功能缺失且文档误导** —— [Issue #291](https://redirect.github.com/vercel-labs/json-render/issues/291)。官方文档的 `@json-render/react` 章节给出了 `isUniqueEmail: async (value) => {...}` 的代码片段，但实际运行不支持，导致开发者预期落空。**目前尚无对应 fix PR**。

## 6. 功能请求与路线图信号
*   **UIElement 生命周期的动态数据加载**（[Issue #245](https://redirect.github.com/vercel-labs/json-render/issues/245)）：用户强烈需要 JSON Schema 具备触发异步副作用（如 API 请求）的能力。虽然今日关闭的 [PR #334](https://redirect.github.com/vercel-labs/json-render/pull/334) 曾试图引入 SSR data helpers，但该 PR 已被关闭，表明此能力的引入路径仍在探索中，短期内难见分晓。
*   **AI Agent 路由基建**（[PR #340](https://redirect.github.com/vercel-labs/json-render/pull/340)）：PR 中明确提及添加 `SEO/agent routes` 及保留 `existing assistant`。作为 JSON 驱动 UI 的项目，为 Agent 提供专属路由和结构化文档访问能力是明确的路线图信号，预示项目正将自身定位为 LLM/Agent 调用前端组件的关键桥梁。

## 7. 用户反馈摘要
*   **痛点 1：异步范式支持薄弱**。用户在现实业务中难以回避异步校验（如查重）和异步数据初始化，当前 `json-render` 的同步范式成为主要卡点。
*   **痛点 2：文档与实现存在漂移**。API 文档中出现的 Async 代码片段让用户误以为已支持该特性，暴露出项目在文档同步审核机制上的漏洞。
*   **场景洞察**：用户正尝试将 `json-render` 用于需要与外部 API 深度交互的动态表单与复杂 UI 联动场景，而非仅仅是静态 JSON 渲染。

## 8. 待处理积压
以下长期 OPEN 的核心 Issue 近期虽有社区活跃迹象，但均无官方明确排期或修复 PR，提醒维护者关注：
*   **[Issue #291](https://redirect.github.com/vercel-labs/json-render/issues/291)**：已开放超 4 个月，文档与实现不一致，影响开发体验，建议优先修正文档或排期实现异步校验。
*   **[Issue #245](https://redirect.github.com/vercel-labs/json-render/issues/245)**：已开放超 6 个月，获得 2 个 👍，代表了社区对 JSON Schema 动态化能力的高频诉求，需维护者给出官方设计态度或 Workaround。

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报 (2026-09-22)

## 1. 今日速览
过去 24 小时内，CopilotKit 仓库保持高度活跃，共有 40 个 PR 更新（其中 27 个已合并/关闭）和 4 个 Issue 更新（3 个已关闭）。项目核心开发聚焦于运行时依赖解耦（Express 5 兼容）、Showcase 测试基建修复与大规模回滚操作，以及 AG-UI 协议 1.0 的升级适配。目前 `v1.73.1` 补丁版本的发布 PR 已就绪，整体项目健康度良好，社区痛点（如 MCP 动态鉴权与 Express 5 兼容）正被快速响应和修复。

## 2. 版本发布
今日无正式版本发布。但自动化发版机器人已提交 [PR #7338](https://redirect.github.com/CopilotKit/CopilotKit/pull/7338) 准备发布 **monorepo v1.73.1**。该版本定位为 Patch 更新，预计将包含近几日合并的 Express 依赖修复及 Showcase 稳定性修复等关键内容。

## 3. 项目进展
今日合并/关闭的 PR 极大推进了运行时兼容性、测试基建与文档完善，主要进展如下：

*   **运行时与依赖修复**：合并了 [PR #7278](https://redirect.github.com/CopilotKit/CopilotKit/pull/7278) 与 [PR #7331](https://redirect.github.com/CopilotKit/CopilotKit/pull/7331)，彻底将 Express 从硬依赖降级为可选 peer 依赖，并放宽了 channels 包的 Express 版本下限，解决了 Express 5 应用的类型检查与编译失败问题。合并 [PR #7271](https://redirect.github.com/CopilotKit/CopilotKit/pull/7271)，修复了前端 HITL（Human-in-the-loop）工具在重放后丢失响应处理器的缺陷。
*   **Showcase 与测试基建**：为恢复此前的稳定报告与运行时契约，合并了 [PR #7340](https://redirect.github.com/CopilotKit/CopilotKit/pull/7340)，**选择性回滚了 46 个 Showcase PR**；同时合并 [PR #7335](https://redirect.github.com/CopilotKit/CopilotKit/pull/7335) 解决了结果超出 PocketBase 字段限制的问题，以及 [PR #7333](https://redirect.github.com/CopilotKit/CopilotKit/pull/7333) 修复了 Showcase 绿灯状态误判的 Bug。此外，[PR #7219](https://redirect.github.com/CopilotKit/CopilotKit/pull/7219) 为 6 种学习技能适配器新增了独立兼容性测试。
*   **文档与 UI 规范化**：合并了 [PR #7330](https://redirect.github.com/CopilotKit/CopilotKit/pull/7330) 统一 Intelligence 功能命名；[PR #7339](https://redirect.github.com/CopilotKit/CopilotKit/pull/7339) 新增了 ECS/Fargate 自托管指南；[PR #7334](https://redirect.github.com/CopilotKit/CopilotKit/pull/7334) 与 [PR #7336](https://redirect.github.com/CopilotKit/CopilotKit/pull/7336) 优化了 Inspector 布局并允许内嵌页面控制线程标题显示。

## 4. 社区热点
*   **[Issue #2407](https://redirect.github.com/CopilotKit/CopilotKit/issues/2407) [CLOSED]**：请求 MCP 服务器支持动态 API Keys（👍 2，评论 6）。这是目前反响最热烈的 Issue，用户需要在多租户场景下根据请求传递不同的 API Key 进行权限验证。该 Issue 已关闭，结合今日关闭的 [Issue #7116](https://redirect.github.com/CopilotKit/CopilotKit/issues/7116)（v1 运行时仅解析一次 Agent 导致无法实现 per-request MCP），推测 v2 运行时的相关改造已满足此动态鉴权诉求。
*   **[Issue #7276](https://redirect.github.com/CopilotKit/CopilotKit/issues/7116) [CLOSED]**：Express/Hono 被作为硬依赖引入导致 Express 5 应用无法类型检查（评论 5）。该问题直击企业级用户升级 Web 框架的痛点，目前已被 [PR #7278](https://redirect.github.com/CopilotKit/CopilotKit/pull/7278) 完美解决。

## 5. Bug 与稳定性
按严重程度及影响面排列今日相关 Bug：

1.  **[严重] 路由 basePath 边界校验缺失**：[PR #7341](https://redirect.github.com/CopilotKit/CopilotKit/pull/7341) 指出，单路由模式下 `basePath` 使用了裸 `startsWith`，导致类似 `/api/copilotkit-extra` 的路径也会被误识别为运行时端点。**已有修复 PR，待合并**。
2.  **[较高] v1 运行时 Agent 单次解析缺陷**：[Issue #7116](https://redirect.github.com/CopilotKit/CopilotKit/issues/7116) 指出 v1 `CopilotRuntime` 仅解析一次 Agent，导致 MCP 客户端和动态 actions 无法按请求隔离。**Issue 已关闭**（v2 已支持 per-request 工厂模式）。
3.  **[中等] Express 5 类型检查崩溃**：[Issue #7276](https://redirect.github.com/CopilotKit/CopilotKit/issues/7276) 硬依赖导致类型冲突。**已通过 PR 修复并合并**。
4.  **[中等] 前端 HITL 工具重放失效**：重载 Intelligence 线程后，用户能看到审批 UI 但无法操作。**已通过 [PR #7271](https://redirect.github.com/CopilotKit/CopilotKit/pull/7271) 修复并合并**。

## 6. 功能请求与路线图信号
*   **AG-UI 协议 1.0 升级**：[PR #7342](https://redirect.github.com/CopilotKit/CopilotKit/pull/7342) 正在将 `@ag-ui` 依赖全面升级至 protocol 1.0.0，并适配运行时与 React 消费端的事件类型。这是底座级升级，预计将成为下&下个版本的核心亮点。
*   **聊天时间戳**：[PR #6283](https://redirect.github.com/CopilotKit/CopilotKit/pull/6283) 提出为用户和助手的聊天消息增加可选的时间戳支持，并保留了 Coagent 桥接渲染的兼容性，目前待合并。
*   **AG2 1.0 文档适配**：[PR #7109](https://redirect.github.com/CopilotKit/CopilotKit/pull/7109) 指出当前文档存在 127 处对 AG2 0.x 废弃 API 的引用，正在全面重构文档与示例代码。

## 7. 用户反馈摘要
*   **多租户 MCP 鉴权痛点**：用户在使用自托管 CopilotKit 运行行时，强依赖中心化的 MCP 服务器，但当前架构缺乏按请求注入鉴权凭据的能力，阻碍了 SaaS 化名多租户场景的落地。
*   **框架升级锁定**：用户对 CopilotKit 锁定底层 Web 框架版本（Express 4）表示不满，当自身项目升级至 Express 5 时，遭遇严重的类型不兼容问题，呼吁项目遵循 Node.js 生态的 Peer Dependencies 规范。

## 8. 待处理积压
*   **[PR #6283](https://redirect.github.com/CopilotKit/CopilotKit/pull/6283)** (开启于 08-01)：聊天时间戳功能 PR 已开启近 2 个月，持续有更新但迟迟未合并，建议维护者评估其合并阻力并推进。
*   **[PR #7109](https://redirect.github.com/CopilotKit/CopilotKit/pull/7109) & [PR #6956](https://redirect.github.com/CopilotKit/CopilotKit/pull/6956)**：AG2 1.0 文档重构与 Inspector 通知功能 PR 均停滞超 10 天，需关注是否遭遇设计卡点或 Review 瓶颈。

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*