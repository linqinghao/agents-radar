# 生成式 UI 生态日报 2026-11-18

> Issues: 32 | PRs: 99 | 覆盖项目: 4 个 | 生成时间: 2026-11-18 06:32 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告

**数据日期：2026-11-18 ｜ 覆盖项目：a2ui · CopilotKit · OpenUI · json-render**

---

## 一、生态全景

生成式 UI 生态正集体从"能力扩张期"迈入"规范收敛与生产加固期"：a2ui 单日连发 5 个版本（4 个 BREAKING）推进 v1.0 规范一致性，CopilotKit 以 6 条 2.0 收口 PR 进入大版本冲刺，两者分别是"开放规范"与"应用框架"两条路线走向成熟的标志性节点。与此同时，各项目当日处理的缺陷高度集中于流式渲染边界、Unicode/国际化、会话安全隔离等生产级问题——战场已从"能不能渲染"转移到"渲染得可靠、可控、可审计"。企业级信号开始密集出现（用户在生产环境跑 npm audit、代码导入 Google 内部仓库、Kaltura 基于规范自建目录与渲染器），生态进入商业化前夜的典型特征。全生态 24 小时共产生约 **131 条动态、6 次版本发布**，活跃度与方向一致性均为近期高点。

---

## 二、各项目活跃度对比

| 指标 | a2ui | CopilotKit | OpenUI | json-render |
|---|---|---|---|---|
| Issues（24h） | **31**（关闭 7，关闭率 23%） | 0 | 0 | 1（更新） |
| PRs（24h） | **41**（处置 13，处置率 32%） | **43**（合并/关闭 20，吞吐 ~46.5%） | 11（合并 5） | 4（合并 2） |
| Release | **5 个**（4 个 BREAKING） | v1.89.0（前日发布） | 0 | 0（最新 0.22.0） |
| 外部贡献者参与度 | 高（多组 Issue+修复 PR 配对） | 低（核心团队主导） | 中（待合并 PR 中外部修复占相当比例） | 高（4/5 活跃 PR 来自社区） |
| 当前阶段 | v1.0 发布前加固 | 2.0 发布前冲刺 | 能力扩张期 | 生产可用性打磨 |

**两点提示**：① a2ui 是四者中唯一有真实 Issue 流的项目（31 条 vs 其余合计 1 条），但 CopilotKit/OpenUI 的零 Issue 可能是单日波动，建议连续观察 2–3 天再下结论；② 活跃度与"健康度"不能画等号——CopilotKit 吞吐最高但社区侧静默，OpenUI 活跃度中等但存在外部 PR 积压 4 个月的结构性问题（见第五节）。

---

## 三、共同关注的功能方向

**1. 流式渲染的边界正确性（4/4 项目，当日最强公约数）**
- a2ui：数据模型未加载时 check 报 `EXPRESSION_ERROR`（#4240）、历史回放后 Surface 状态存活（#2932）
- OpenUI：Tabs/Accordion 的"内容增长即跟随"启发式在静态响应与流结束后误触发（#819/#861）
- json-render：streamCard 最终校验失败后已发布卡片无法操作、`limits` 仅约束最终卡片的隐性语义（#456/#483）
- CopilotKit：长线程回放碎片化、Safari 布局错乱（#8247）
- **共性洞察**：流式已成默认路径，"静态完整响应"与"流结束后的世界"反而成了被系统性忽视的边缘案例。

**2. 安全与权限模型加固（a2ui、CopilotKit）**
a2ui 当日闭环了 dompurify critical 漏洞（#4278→#4284 当日响应），但 `rendererOnly` 函数嵌套调用旁路（#3774，P1，挂起 3 周）仍未修复；CopilotKit 同日在处理公网 demo 会话隔离（#8459）、审批权限默认值收紧（#8118）、Slack 凭证作用域。权限模型正在成为生成式 UI 的新攻击面。

**3. 非 React / 多框架生态扩展（a2ui、CopilotKit、OpenUI）**
CopilotKit 将 Vue 2.0 API 上移至包根并配套 `.vue` codemod；OpenUI 收录 .NET Blazor + MudBlazor 官方集成（NuGet 1.1.0 已发布）；a2ui 持续对齐 TS/Swift/Dart/Python 四语言行为（如 #3341）。多框架覆盖正从加分项变为必选项。

**4. 版本迁移与升级体验（a2ui、CopilotKit）**
a2ui 的 `@` 前缀信封字段 BREAKING 变更要求渲染器适配，且 CLI 与 core 存在强制同步升级约束；CopilotKit 则以 codemod（React+Vue）+ 弃用别名 + 迁移指南三件套平滑过渡。**降低大版本升级成本正在成为直接的竞争力差异**。

**5. 减少模型往返与上下文复用（OpenUI、CopilotKit）**
OpenUI 的 `$variables` 本地计算让答案无需回环请求模型；CopilotKit 通过回放事件 coalesce 与 MCP model-context 共享削减重复开销。渲染层正在吸收一部分"计算"职责，以对冲延迟与 token 成本。

---

## 四、差异化定位分析

| 维度 | a2ui | CopilotKit | OpenUI | json-render |
|---|---|---|---|---|
| 生态定位 | **规范层**：开放 UI 规范 + 多语言 SDK | **框架层**：全栈 Agent 应用框架 | **运行时层**：智能答案运行时 | **原语层**：轻量 JSON→React 渲染库 |
| 技术路线 | 声明式 JSON Schema 目录 + `@` 信封字段，四语言并行 + 一致性测试 | React/Vue 组件 + AG-UI 协议 + MCP 多 Agent 编排 | React 组件库 + 本地变量计算，从聊天 UI 演进 | JSON 映射 + directives（$t/$truncate 等本地原语） |
| 目标用户 | 渲染器开发者、多端/嵌入式宿主（Streamlit、React Native、Web Components） | 构建生产级 Agent 应用的全栈团队 | 聊天/答案类产品团队（正扩展至多用户协作） | 已有 React 代码库的轻量集成者 |
| 背景形态 | 规范联盟式社区项目 | 商业公司主导，发布工程高度自动化 | 商业公司（thesysdev）主导 | Vercel Labs 实验项目 |

**一个有用的分析框架**：四个项目恰好构成生成式 UI 技术栈的四个层次——json-render 提供渲染原语，a2ui 定义可移植规范，OpenUI 构建场景化运行时，CopilotKit 输出完整应用框架。它们今天是互补大于竞争，但每一层都在向相邻层渗透（CopilotKit 集成 a2ui 选项、OpenUI 自建组件库），未来交汇点大概率在"chat 场景的标准化渲染"上。

---

## 五、社区热度与成熟度

| 维度 | a2ui | CopilotKit | OpenUI | json-render |
|---|---|---|---|---|
| 社区热度 | ★★★★★ | ★★☆☆☆ | ★★★☆☆ | ★★★★☆ |
| 响应闭环速度 | 快（安全漏洞当日修复） | 快（发布链路成熟） | **慢（外部 PR 积压 119 天）** | **最快（报告→修复 1–3 天）** |
| 成熟阶段 | v1.0 前夜 | v1.89 → 2.0 | 扩张期 | 0.22，小而稳 |
| 主要风险 | 多包版本协同（peer 冲突已是第三次）、P1 安全问题排期 | 社区互动缺位、破坏性 PR 挂单 19 天 | 外部贡献者体验恶化、文档 IA 刚起步 | 社区规模小、缺认领协调机制（同题双 PR） |

**热度排序**：a2ui（外部贡献者 Issue+PR 配对、Kaltura 等厂商入场）> json-render（量小质高，两个外部贡献者为同一痛点先后提交修复）> OpenUI ≈ CopilotKit（核心团队驱动，社区侧静默）。

**成熟度排序（按工程体系）**：CopilotKit（codemod/CI 兜底/自动发布三件套齐备）> a2ui（规范成熟但 17 个 changelog 手工维护，发布工程正在补课 #4215）> json-render（范围克制，契约收紧稳步推进）> OpenUI（新包快速落地，但 review 机制与文档体系滞后于扩张速度）。

**最值得警惕的信号**：OpenUI 同为 7 月提交的 PR，内部成员的当日处理完毕、外部贡献者的悬置近 4 个月——同类贡献的处理速度分化会直接导致优质修复流失。

---

## 六、值得关注的趋势信号

**1. 生成式 UI 进入企业采购视野，安全审计成为门槛项。** 生产环境 npm audit 上报 critical 通告、代码导入 Google 内部仓库、公网 demo 需要会话隔离与凭证绑定——这些不再是边缘诉求。*参考价值：引入此类库前，应将项目的安全响应 SLA（如 a2ui 当日闭环 vs #3774 挂起 3 周）纳入选型评估。*

**2. 大版本迁移体验成为新的竞争壁垒。** CopilotKit 用 codemod + 弃用别名 + 迁移指南对冲 BREAKING 痛苦，a2ui 则用连续 BREAKING 版本换取规范纯度。*参考价值：选型时评估项目的迁移工具链完备度，比评估功能列表更能预测长期维护成本。*

**3. "流式优先"架构开始反噬。** 四个项目不约而同暴露静态渲染与流结束后的状态正确性问题。*参考价值：自研生成式 UI 时，测试矩阵必须显式覆盖"非流式完整响应"与"流结束后的持久状态"两类场景。*

**4. AI 生成内容把 Unicode/国际化边界放大为新 bug 前沿。** json-render 的 emoji 代理对截断、占位符二次替换等问题，本质是"不可预测的机器生成内容"撞上了传统 i18n 的边界假设。*参考价值：对 AI 输出做渲染层处理时，按 code point 而非 code unit 处理文本应成为默认。*

**5. 渲染层正在吸收计算职责。** `$variables` 本地计算（OpenUI）、回放事件 coalesce 与 MCP 上下文共享（CopilotKit）、本地 directives 原语（json-render）共同指向一个方向：**减少模型往返以对冲延迟与成本**。这是从"渲染"到"轻量运行时"的定位跃迁。

**6. 标准化与互操作萌芽值得长期押注。** a2ui 的 v1.0 规范 + A2A 协议能力协商（`renderer_capabilities_from_message`）、CopilotKit 的 AG-UI + MCP 矩阵、多渲染器目录生态，都指向生成式 UI 的"HTML 时刻"可能在酝酿。*参考价值：跨框架、跨端可移植性（而非单一框架绑定）应成为架构决策中越来越重的权重；同时关注 a2ui 的多包版本协同问题——它是所有走"规范 + 多 SDK"路线项目的前车之鉴。*

---

**一句话总结**：这一天，生态在同时做两件事——**向上冲刺大版本（a2ui v1.0、CopilotKit 2.0），向下夯实生产地基（安全、流式边界、迁移体验）**；对开发者而言，当前是选型观察窗口期：跟进大版本迁移成本，同时把安全响应与流式正确性作为评估基线。

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目动态日报

**日期：2026-11-18** | 数据来源：[a2ui-project/a2ui](https://github.com/a2ui-project/a2ui)

---

## 1. 今日速览

a2ui 今日保持高度活跃：过去 24 小时内共产生 **72 条更新**（Issues 31 条 + PRs 41 条），其中 7 个 Issue 被关闭、13 个 PR 完成合并/关闭，处置效率（Issue 关闭率 23%、PR 处置率 32%）处于健康水平。项目单日发布 **5 个新版本**（Swift、Python 三件套、CLI），且多个版本包含 BREAKING CHANGE，核心主题高度一致——**收紧 JSON Schema 校验与 v1.0 规范一致性**，明显处于 v1.0 发布前的加固阶段。值得肯定的是，昨日报告的 dompurify 安全漏洞（[#4278](https://redirect.github.com/a2ui-project/a2ui/issues/4278)）当日即有修复 PR（[#4284](https://redirect.github.com/a2ui-project/a2ui/pull/4284)）提交，社区响应迅速。多位外部贡献者（jihanurrahman33、karolkulesza、roblevintennis 等）当日提交了 Issue+修复 PR 配对，社区参与度良好。

---

## 2. 版本发布（5 个）

| 包 | 版本 | 性质 |
|---|---|---|
| Swift SDK | v0.11.0+swift | ⚠️ BREAKING |
| a2ui-core (Python) | v0.7.0 | ⚠️ BREAKING |
| a2ui-agent-sdk (Python) | v0.12.0 | ⚠️ BREAKING |
| a2ui-a2a (Python) | v0.4.0 | 新增功能 |
| A2UI CLI | v0.4.0 | ⚠️ BREAKING |

**核心变更与迁移注意事项：**

- **Swift v0.11.0**：`PayloadValidator` 现在强制执行对象级（`anyOf`、`additionalProperties: false`）与数组级（`minItems`、`maxItems`、`prefixItems`）JSON Schema 约束（针对含动态绑定的函数参数），并对嵌套函数声明的 `returnType` 进行校验。依赖宽松 schema 的目录将开始校验失败。
- **a2ui-core 0.7.0**：`StrictBaseModel`、`SchemaValidator`、`PayloadValidator` 全面执行目录函数参数与返回类型校验，**拒绝在纯 `int`/`float` 字段（如 `length.min`、`numeric.max`）传入 `str`/`bool`**。使用字符串传数值的旧目录需要修正。
- **a2ui-agent-sdk 0.12.0**：v1.0 组件在 `ExpressCompiler`、`AtomCompiler`、`ElementalCompiler`、`MacroExpander`、`RendererState` 及 Pydantic builder 中统一输出 `@catalogId`、`@metadata`、`@accessibility`、`@checks` 前缀字段。这是 [#4082](https://redirect.github.com/a2ui-project/a2ui/issues/4082)（移除旧版裸键回退）的前置步骤，**消费 v1.0 输出的渲染器需适配 `@` 前缀信封字段**。
- **a2ui-a2a 0.4.0**：新增 `renderer_capabilities_from_message(message, version)`，可从入站 A2A `Message` 的 `message.metadata`、`DataPart.metadata` 及旧版 `DataPart.data["metadata"]` 读取并校验渲染器能力（来自 [PR #4013](https://redirect.github.com/a2ui-project/a2ui/pull/4013)）。
- **CLI v0.4.0**：要求 `a2ui_core ^0.8.0`（CLI 公共 API 暴露了 core 类型），**升级 CLI 必须同步升级 core**；`CatalogAnalyzer` 会从组件 builder 属性中过滤 `@catalogId`/`@metadata`/`@accessibility`，并通过 `@checks` 检测可校验组件。

> 整体迁移提示：本次五个版本共同指向"更严格的 schema 校验 + v1.0 `@` 前缀信封字段"两个方向，建议使用者先在 CI 中跑一遍目录校验再升级。相关 changelog 由 [PR #4276](https://redirect.github.com/a2ui-project/a2ui/pull/4276) 落地。

---

## 3. 项目进展

过去 24 小时 **13 个 PR 合并/关闭**，可见的关键进展：

- **Swift 公共 API 收紧**：[#4275](https://redirect.github.com/a2ui-project/a2ui/pull/4275) 将 `a2uiCatalogs`、`a2uiDefaultCatalogID`、`a2uiSurfaceMetadata` 改为 `public internal(set)`，修复 P1 问题 [#4195](https://redirect.github.com/a2ui-project/a2ui/issues/4195)（Surface 注入的 EnvironmentValues 不应可被外部写入），随 Swift 0.11.0 发布。
- **仓库结构统一**：[#4150](https://redirect.github.com/a2ui-project/a2ui/pull/4150) 将 v0.9 / v0.9.1 目录从 `specification/` 迁移至 `catalogs/`，关闭跟踪 Issue [#2700](https://redirect.github.com/a2ui-project/a2ui/issues/2700)，所有维护中的目录现集中于顶层 `catalogs/` 目录。
- **规范一致性加固**：[#4274](https://redirect.github.com/a2ui-project/a2ui/pull/4274) 移除 `@a2ui/web_core` 与 `@a2ui/angular` 中非规范的 `@path` ChildList 回退，并补充 v1.0 一致性测试（DataBinding 在 v1.0 中已迁移到 `@path`，模板内则要求纯 `path`）。
- **发布工程改进**：[#4215](https://redirect.github.com/a2ui-project/a2ui/pull/4215)（开放中）引入 `release_notes.py` 与发布包清单，未来 feature PR 无需手工维护 17 个 changelog 文件——这是对发布流程规模化的重要投资。
- **文档与样例清理**：[#4283](https://redirect.github.com/a2ui-project/a2ui/pull/4283) 清理 MCP 样例中过期的 `@a2ui/angular` path override；文档类 Issue [#3494](https://redirect.github.com/a2ui-project/a2ui/issues/3494)（renderer-development.md 与规范不符）、[#3946](https://redirect.github.com/a2ui-project/a2ui/issues/3946)（文档仍指向已废弃的 genui）、[#4247](https://redirect.github.com/a2ui-project/a2ui/issues/4247)（mypy strict 覆盖）均已关闭。

**评估**：当日进展围绕"v1.0 规范收敛 + 工程基础设施"两条主线，配合 5 个版本发布，属于典型的发布日节奏，推进扎实。

---

## 4. 社区热点

| Issue/PR | 评论数 | 状态 | 主题 |
|---|---|---|---|
| [#3085](https://redirect.github.com/a2ui-project/a2ui/issues/3085) | 4 | OPEN | 源码拼写错误防护 |
| [#4059](https://redirect.github.com/a2ui-project/a2ui/issues/4059) | 3 | OPEN | markdown-it peer 依赖冲突 |
| [#4195](https://redirect.github.com/a2ui-project/a2ui/issues/4195) | 3 | CLOSED | SwiftUI EnvironmentValues 可写性 |
| [#2932](https://redirect.github.com/a2ui-project/a2ui/issues/2932) | 3 | OPEN | 历史回放后 Surface 状态持久化 |
| [#3341](https://redirect.github.com/a2ui-project/a2ui/issues/3341) | 3 | OPEN | Dart Express 多目录未拒绝 |

**分析：**

- **[#3085](https://redirect.github.com/a2ui-project/a2ui/issues/3085)**（P3/CI-CD）：源于将代码导入 Google 内部测试时被标记的拼写问题，讨论焦点是是否引入拼写检查 lint。虽然是低优先级，但作为评论区最活跃的 Issue，反映出维护团队对代码入库企业环境的重视。
- **[#4059](https://redirect.github.com/a2ui-project/a2ui/issues/4059)**（P2）：`@a2ui/markdown-it@0.2.2` peer 依赖锁死 `web_core ^0.14.0`，与 0.15.0 冲突——这是继 #1766、#1930 之后的**第三次同类问题**，用户诉求直指包版本协同发布策略，值得维护者系统性解决。
- **[#2932](https://redirect.github.com/a2ui-project/a2ui/issues/2932)**（P2）：探讨 action 后的 Surface 状态在宿主重建 UI（历史回放）时如何存活，属于架构层面的开放设计问题，当前状态为 waiting-for-author-response。
- **[#3341](https://redirect.github.com/a2ui-project/a2ui/issues/3341)**：Dart 版 `ExpressFormat` 未按规范拒绝多个 v0.9 目录（Python/TS 已实现）。好消息是当日已有社区修复 PR [#4277](https://redirect.github.com/a2ui-project/a2ui/pull/4277) 对齐三语言行为。

---

## 5. Bug 与稳定性

**按严重程度排列：**

**🔴 安全（最高优先）**
- [#4278](https://redirect.github.com/a2ui-project/a2ui/issues/4278)：`@a2ui/markdown-it` 锁定 `dompurify 3.4.11`，存在已披露的安全通告，最严重为 **critical 级（GHSA-cg2g-xh64-v4q7）**。→ **已有修复 PR [#4284](https://redirect.github.com/a2ui-project/a2ui/pull/4284)**（升级至 `^3.4.17`），当日响应。

**🟠 P1**
- [#3774](https://redirect.github.com/a2ui-project/a2ui/issues/3774)：**Agent 可通过在 `callRendererFunction` 参数中嵌套调用来执行 `rendererOnly` 函数**（渲染器只校验外层函数的 `allowedCallers`）——这是权限模型旁路问题，涉及 TS/Swift/Dart/Python 全线核心 SDK。**⚠️ 尚未见修复 PR，建议优先处理。**
- [#4262](https://redirect.github.com/a2ui-project/a2ui/issues/4262)：E2E drift 工作流在 main 分支 commit 1cbef31 上失败（CI 稳定性）。未见表态。

**🟡 P2（含修复进展）**
- [#4240](https://redirect.github.com/a2ui-project/a2ui/issues/4240)：数据模型尚未加载字段时 check 报 `EXPRESSION_ERROR` → 修复 PR [#4241](https://redirect.github.com/a2ui-project/a2ui/pull/4241)（对齐 Dart 行为，待评审）。
- [#4238](https://redirect.github.com/a2ui-project/a2ui/issues/4238)：basic catalog v1 入口加载 Lit，导致 React Native（无 DOM）崩溃 → 修复 PR [#4239](https://redirect.github.com/a2ui-project/a2ui/pull/4239)（提供 Lit-free 入口）。
- [#4279](https://redirect.github.com/a2ui-project/a2ui/issues/4279)：basic catalog 样式无条件注入 document，破坏 shadow DOM 场景（Streamlit 等）→ 修复 PR [#4286](https://redirect.github.com/a2ui-project/a2ui/pull/4286)。
- [#4236](https://redirect.github.com/a2ui-project/a2ui/issues/4236)：`analyzeRegex` 接受灾难性回溯正则 `(a?){1000}a{1000}`，可导致渲染器在 256 字符输入上挂起（类 ReDoS）。**未见修复 PR。**
- [#4259](https://redirect.github.com/a2ui-project/a2ui/issues/4259)：Swift 渲染器 `svgPath` 不支持 SVG 圆弧命令（A/a），圆形图标渲染破损。未修复。
- [#4256](https://redirect.github.com/a2ui-project/a2ui/issues/4256)：Swift 双向绑定写入被数据模型拒绝时**静默丢弃**，无错误上抛。未修复。
- [#4263](https://redirect.github.com/a2ui-project/a2ui/issues/4263)：Dart 目录扁平化丢失 `allOf` 内嵌的 `oneOf`/`anyOf`。未修复。
- [#4059](https://redirect.github.com/a2ui-project/a2ui/issues/4059)：peer 依赖冲突，阻塞 0.15 用户。未修复。

**🟢 已解决**
- [#4195](https://redirect.github.com/a2ui-project/a2ui/issues/4195)（P1，Swift）→ [#4275](https://redirect.github.com/a2ui-project/a2ui/pull/4275) 已关闭并随 v0.11.0 发布。

---

## 6. 功能请求与路线图信号

结合 Issue 需求与在途 PR，判断纳入下一版本的可能性：

| 需求 | Issue | 在途 PR | 可能性 |
|---|---|---|---|
| Flutter 迁移至 `material_ui`（弃用 `flutter/material.dart`） | [#3235](https://redirect.github.com/a2ui-project/a2ui/issues/3235) | [#4280](https://redirect.github.com/a2ui-project/a2ui/pull/4280)、样例 [#4281](https://redirect.github.com/a2ui-project/a2ui/pull/4281) | **高**，PR 已就绪待评审 |
| Dart `a2ui_core` 导出 `coerceToString`（`formatString` 的文本转换逻辑公开化） | [#4230](https://redirect.github.com/a2ui-project/a2ui/issues/4230) | — | 中，社区明确 API 诉求 |
| `formatString` 目录作用域与 v1.0 AST 解析去特化 | [#4046](https://redirect.github.com/a2ui-project/a2ui/issues/4044)（[#4046](https://redirect.github.com/a2ui-project/a2ui/issues/4046)） | — | 中，架构方向已确认 |
| Express 支持嵌套 `oneOf`/`anyOf`/`allOf`/本地 `$defs`（三语言） | #3400 | [#4184](https://redirect.github.com/a2ui-project/a2ui/pull/4184) | **高**，跨语言大 PR 持续推进 |
| 文档新增 "Surfaces" 概念页 | [#3967](https://redirect.github.com/a2ui-project/a2ui/issues/3967) | — | 中，社区文档缺口已被多次提及 |
| 社区渲染器目录页重构（可扫描性/平台筛选） | [#4232](https://redirect.github.com/a2ui-project/a2ui/issues/4232) | 相关 PR [#4208](https://redirect.github.com/a2ui-project/a2ui/pull/4208)（新增 Kaltura 目录条目） | 中 |
| 移除 v1.0 裸键回退 | [#4082](https://redirect.github.com/a2ui-project/a2ui/issues/4082) | 前置已随 agent-sdk 0.12.0 落地 | **高**，条件成熟后执行 |

**路线图信号解读**：三条主线清晰——**v1.0 规范收敛**（`@` 前缀信封字段、校验收紧、一致性测试）、**渲染器矩阵现代化**（Flutter material_ui、Angular 清理 [#4148](https://redirect.github.com/a2ui-project/a2ui/issues/4148)、React Native 兼容）、**发布工程自动化**（[#4215](https://redirect.github.com/a2ui-project/a2ui/pull/4215)）。另有工程治理类 RFC：docs/site 改用 yarn（[#4220](https://redirect.github.com/a2ui-project/a2ui/issues/4220)）、文档依赖锁定（[#4222](https://redirect.github.com/a2ui-project/a2ui/issues/4222)）。

---

## 7. 用户反馈摘要

从今日 Issue 描述与讨论中提炼的真实痛点：

1. **包版本协同是最大摩擦源**：`markdown-it` 与 `web_core` 的 peer 冲突（[#4059](https://redirect.github.com/a2ui-project/a2ui/issues/4059)）、pub.dev 上 `a2ui_flutter`/`a2ui_core`/`a2ui_agent` 无法共装（[#3942](https://redirect.github.com/a2ui-project/a2ui/issues/3942)，已关闭）、文档仍引导用户安装已标记 discontinued 的 `flutter_genui`（[#3946](https://redirect.github.com/a2ui-project/a2ui/issues/3946)，已关闭）——**monorepo 多包发布节奏不同步在持续消耗用户信任**，今日 BREAKING 版本发布后此类风险需重点关注。
2. **嵌入式/非标准宿主场景需求强烈**：Streamlit 与 Web Components 场景下的 shadow DOM 样式隔离（[#4279](https://redirect.github.com/a2ui-project/a2ui/issues/4279)）、React Native 无 DOM 环境加载失败（[#4238](https://redirect.github.com/a2ui-project/a2ui/issues/4238)），说明相当比例用户在把 A2UI 嵌入第三方宿主而非独立 Web 应用。
3. **企业级安全审计成为常态**：用户在生产环境中运行 `npm audit` 并上报 critical 通告（[#4278](https://redirect.github.com/a2ui-project/a2ui/issues/4278)）、将代码导入 Google 内部仓库（[#3085](https://redirect.github.com/a2ui-project/a2ui/issues/3085)），表明项目已进入企业采购/评估视野。
4. **文档准确性直接影响采用决策**：renderer-development.md 与规范不符（[#3494](https://redirect.github.com/a2ui-project/a2ui/issues/3494)）、核心概念 "Surfaces" 缺少专页（[#3967](https://redirect.github.com/a2ui-project/a2ui/issues/3967)）被用户主动指出，说明文档是当前采用漏斗中的短板。
5. **生态在扩张**：Kaltura 提交了自己的 A2UI 1.0 目录及 React/Web Components 渲染器（[PR #4208](https://redirect.github.com/a2ui-project/a2ui/pull/4208)），第三方厂商开始基于 a2ui 构建产品，是生态健康度的积极信号。

---

## 8. 待处理积压

提醒维护者关注以下长期挂起事项：

| 项目 | 挂起时长 | 风险/说明 |
|---|---|---|
| [#3774](https://redirect.github.com/a2ui-project/a2ui/issues/3774)（P1，`rendererOnly` 函数旁路） | 自 10-30，约 3 周 | **最高优先**：权限模型安全问题，跨四语言核心 SDK，尚无修复 PR |
| [#3085](https://redirect.github.com/a2ui-project/a2ui/issues/3085)（拼写防护） | 自 10-08，约 6 周 | 评论区最活跃的 Issue（4 评论），状态 first-line-handled 后无实质推进 |
| [#2932](https://redirect.github.com/a2ui-project/a2ui/issues/2932)（Surface 状态回放） | 自 10-01，约 7 周 | waiting-for-author-response，涉及核心架构决策，长期搁置将影响宿主集成方案选型 |
| [#4059](https://redirect.github.com/a2ui-project/a2ui/issues/4059)（peer 依赖冲突） | 自 11-08，10 天 | needs review；已是第三次同类问题，建议连同发布流程一并解决 |
| [PR #3210](https://redirect.github.com/a2ui-project/a2ui/pull/3210) / [PR #3211](https://redirect.github.com/a2ui-project/a2ui/pull/3211)（dependabot 依赖批量升级） | 自 10-14，约 5 周 | needs-triage，含 dompurify 3.4.11→3.4.16 升级——与今日 #4278/#4284 存在重叠，建议合并处置避免冲突 |
| [#4236](https://redirect.github.com/a2ui-project/a2ui/issues/4236)（灾难性正则挂起） | 自 11-14 | 渲染器可被单条输入打挂，潜在 DoS 面，建议排期 |
| [#4046](https://redirect.github.com/a2ui-project/a2ui/issues/4046) / [#3732](https://redirect.github.com/a2ui-project/a2ui/issues/3732) / [#4148](https://redirect.github.com/a2ui-project/a2ui/issues/4148) | 2-3 周 | 长期跟踪类重构任务，无急迫风险但需路线图锚点 |

---

**健康度小结**：今日 a2ui 呈现"发布日"特征——多语言同步发版、破坏性变更密集但方向一致（v1.0 加固）、安全响应当日闭环、社区贡献活跃。主要风险点集中在**多包版本协同策略**与 **P1 权限旁路问题 [#3774] 的修复排期**上，建议作为明日优先事项。

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目日报

**项目**: [thesysdev/openui](https://github.com/thesysdev/openui) | **报告日期**: 2026-11-18 | **数据窗口**: 过去 24 小时

---

## 1. 今日速览

过去 24 小时，OpenUI 共产生 **11 条 PR 更新**（待合并 6 条，合并/关闭 5 条），**Issue 活动为 0**，无新版本发布。今日活跃度集中于两条主线：一是**核心能力扩展**——新的 `@openuidev/intelligent-ui-library` 包落地（[#1653](https://redirect.github.com/thesysdev/openui/pull/1653)），跨仓库的 artifact 分享功能进入 WIP 阶段（[#1659](https://redirect.github.com/thesysdev/openui/pull/1659)）；二是**文档信息架构大收敛**——Lab 页面与独立 Integrations 页面被移除并统一归入 docs（[#1650](https://redirect.github.com/thesysdev/openui/pull/1650)、[#1661](https://redirect.github.com/thesysdev/openui/pull/1661)）。需要关注的健康度信号：两条 7 月提交的 react-ui 组件修复 PR（[#820](https://redirect.github.com/thesysdev/openui/pull/820)、[#862](https://redirect.github.com/thesysdev/openui/pull/862)）已积压约 **4 个月**未合并。整体判断：项目处于积极迭代期，核心团队精力投向架构级功能，但基础组件 Bug 的 review 响应存在滞后。

---

## 2. 版本发布

无新版本发布。值得注意的是，[#1659](https://redirect.github.com/thesysdev/openui/pull/1659) 明确依赖 ``thesysdev/prolog#303`` 与 ``thesysdev/coda#1109`` 的部署，提示下一次功能发布可能存在跨仓库的发布顺序约束。

---

## 3. 项目进展

今日合并/关闭 5 条 PR，其中包含 1 个新核心包与 1 个长期悬置的架构重构，推进幅度较大：

| PR | 标题 | 作者 | 生命周期 |
|---|---|---|---|
| [#1653](https://redirect.github.com/thesysdev/openui/pull/1653) | feat(intelligent-ui-library) | ankit-thesys | 1 天 |
| [#824](https://redirect.github.com/thesysdev/openui/pull/824) | feat(react-ui): no-flash color scheme | ankit-thesys | ~4 个月 |
| [#1650](https://redirect.github.com/thesysdev/openui/pull/1650) | docs: remove Lab & standalone Integrations | vishxrad | 1 天 |
| [#1660](https://redirect.github.com/thesysdev/openui/pull/1660) | fix(docs): 架构图移动端堆叠布局 | abhithesys | 当日 |
| [#517](https://redirect.github.com/thesysdev/openui/pull/517) | Refactor: Unified codebase（玩笑 PR） | vishxrad | ~6 个月 |

**重点解读：**

- **[#1653](https://redirect.github.com/thesysdev/openui/pull/1653) 是今日最重要的落地**：新增 `@openuidev/intelligent-ui-library`——一个供模型组合成交互式答案的组件库（布局、文本、输入、媒体、绘图、play），并引入 `@functions` 机制，允许答案使用自己的 `$variables` 本地计算而无需回环请求模型。这标志着项目从"聊天 UI 渲染层"向"智能答案运行时"的实质性演进。
- **[#824](https://redirect.github.com/thesysdev/openui/pull/824)** 关闭了 7 月开启的暗色模式闪白问题（fixes #736，替代旧方案 #737），将全局 color-scheme 偏好与作用域主题 token 渲染解耦，属于 react-ui 主题架构层面的长期改进。
- **[#1650](https://redirect.github.com/thesysdev/openui/pull/1650)** 移除 `/lab` 路由及 `/projects`、`/showcase`、`/ecosystem`、`/registry`、`/add-ons` 等历史路径，统一重定向至 `/docs/integrations`，完成文档入口收敛。
- **[#517](https://redirect.github.com/thesysdev/openui/pull/517)** 为社区幽默：作者声称"在论坛看到汇编是最快的语言"而将整个项目迁移为汇编，存活 186 天后今日关闭，无技术影响，但侧面反映维护者近期在清理积压队列。

---

## 4. 社区热点

⚠️ *数据限制：本期抓取的 PR 评论数与 Reactions 均为空，且过去 24 小时无 Issue 活动，无法按互动量排名。以下按内容影响力排序。*

- **[#1659](https://redirect.github.com/thesysdev/openui/pull/1659) artifact 分享（WIP）** — 三段式功能的第三段，涉及 server / react-headless / react-ui 三端，需等待 `prolog#303` 与 `coda#1109` 部署（旧版 coda 会静默丢弃新字段）。这是当前最明确的路线图载体，反映项目正向多用户协作场景演进。
- **[#1658](https://redirect.github.com/thesysdev/openui/pull/1658) .NET Blazor 集成** — 社区贡献者 dalefrancis88 提交，将 Blazor 渲染器与 MudBlazor 组件库纳入官方 Integrations 文档，对应 NuGet 包已于 2026-11-16 发布 1.1.0。诉求明确：.NET 开发者希望用熟悉技术栈构建智能 UI，无需 React。
- **[#1653](https://redirect.github.com/thesysdev/openui/pull/1653) intelligent-ui-library** — 新包落地方向，$variables 本地计算能力直击"减少模型往返"这一核心成本诉求。

---

## 5. Bug 与稳定性

过去 24 小时**无新报告 Issue**。基于 PR 数据按严重程度排列：

1. **【中】Tabs 流式跟随逻辑误触发**（[#820](https://redirect.github.com/thesysdev/openui/pull/820)，fixes #819）：挂载时选中最后一个 tab，且响应结束后仍会自行切换。根因是 `TabsRenderer` 的"内容增长即跟随"启发式在两处不应触发的场景生效。**已有 fix PR，待合并，积压 119 天**。
2. **【中】Accordion 初始挂载展开末项**（[#862](https://redirect.github.com/thesysdev/openui/pull/862)，fixes #861）：静态（非流式）完整响应下，自动展开分支将"基线渲染时项目数从 0 增长"误判为流式新内容到达。**已有 fix PR，待合并，积压 116 天**。
3. **【低·已修复】博客架构图移动端挤压重叠**（[#1660](https://redirect.github.com/thesysdev/openui/pull/1660)）：五列布局在手机上标签与连接线重叠，CSS 修复今日已关闭。
4. **【低·已修复】暗色模式闪白**（#736，由 [#824](https://redirect.github.com/thesysdev/openui/pull/824) 解决）：今日随 no-flash 架构落地而关闭。

**稳定性洞察**：#820 与 #862 本质是**同一类问题**——react-ui 中"跟随流式内容增长"的启发式在静态渲染与响应结束后的边界场景失效，且出自同一作者。建议维护者系统性审视所有使用该模式的组件（而不仅 Tabs/Accordion），避免同类 Bug 在其他渲染器中潜伏。

---

## 6. 功能请求与路线图信号

| 信号 | 来源 PR | 判断 |
|---|---|---|
| **Artifact 协作分享** | [#1659](https://redirect.github.com/thesysdev/openui/pull/1659)（WIP） | 明确的三段式规划 + 跨仓库部署依赖，**高概率进入下一版本**；token 机制新增 `groupIds`/`group_ids` 字段，涉及 API 变更，升级时需注意旧版 coda 的兼容性（会静默丢字段） |
| **智能答案运行时** | [#1653](https://redirect.github.com/thesysdev/openui/pull/1653)（已关闭） | dashboard 包之后的又一垂直场景包，$variables 本地计算方向已落地，后续或将持续扩充组件面 |
| **多语言生态扩展** | [#1658](https://redirect.github.com/thesysdev/openui/pull/1658) | .NET 侧渲染器已进入官方文档（此前 #1550 已收录 .NET 后端），多框架生态是持续投入方向 |
| **文档 IA 收敛** | [#1650](https://redirect.github.com/thesysdev/openui/pull/1650) + [#1661](https://redirect.github.com/thesysdev/openui/pull/1661) | 12 个集成指南页迁入 docs，Lab 下线，为集成数量增长做信息架构铺垫 |

---

## 7. 用户反馈摘要

过去 24 小时无 Issue 新增或评论，**无法直接提取用户声音**。从 PR 上下文可间接推断的痛点：

- **移动端体验此前验证不足**：博客架构图在手机上"每行仅几个字符、标签与连接线重叠"（[#1660](https://redirect.github.com/thesysdev/openui/pull/1660)），说明 docs 内容多按桌面端制作。
- **静态响应场景成为边缘案例**：#819 / #861 反映非流式完整响应下组件初始状态错误——当流式成为主流路径，静态渲染的正确性容易被忽视。
- **暗色模式闪白是长期困扰**（#736）：历经 #737 到 #824 两轮方案迭代才解决，用户对首屏视觉一致性要求高。
- **非 React 开发者的接入诉求**（[#1658](https://redirect.github.com/thesysdev/openui/pull/1658)）：.NET 社区希望以 Blazor/MudBlazor 参与生态。

*建议：若需更完整的用户声音分析，需补充 Issue 评论数据源。*

---

## 8. 待处理积压

| PR | 状态 | 等待时长 | 说明 |
|---|---|---|---|
| [#820](https://redirect.github.com/thesysdev/openui/pull/820) | OPEN | **119 天**（自 2026-07-22） | Tabs 修复，根因分析清晰、方案明确，建议优先 review |
| [#862](https://redirect.github.com/thesysdev/openui/pull/862) | OPEN | **116 天**（自 2026-07-25） | Accordion 修复，同上 |
| [#1629](https://redirect.github.com/thesysdev/openui/pull/1629) | OPEN | 6 天（自 2026-11-12） | 机器人依赖更新 PR，验证合同已全部通过，可批量处理 |
| [#1659](https://redirect.github.com/thesysdev/openui/pull/1659) | OPEN (WIP) | 1 天 | 计划内阻塞（等待外部仓库部署），非遗忘，无需干预 |

**⚠️ 维护者提醒**：#820 / #862 与今日关闭的 #824 同为 7 月下旬提交——ankit-thesys 的 PR 已处理完毕，而社区/外部贡献者 Shinyaigeek 的两条修复仍悬置近 4 个月。同类同期的贡献出现明显的处理速度分化，建议关注 review 排序机制与外部贡献者体验，避免优质修复流失。

---

*数据来源：GitHub API（过去 24 小时窗口）。链接格式：`github.com/thesysdev/openui/pull/<number>`。*

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render 项目动态日报

**仓库**：[vercel-labs/json-render](https://github.com/vercel-labs/json-render)
**日期**：2026-11-18 ｜ **统计窗口**：过去 24 小时 ｜ **数据源**：GitHub Issues / PRs / Releases

---

## 1. 今日速览

项目保持稳定的中等活跃度：过去 24 小时共 5 条动态（1 条 Issue 更新、4 条 PR 更新），无新版本发布。本期主线非常聚焦——**流式渲染与多语言内容下的健壮性打磨**：directives 双 bug（[#474](https://redirect.github.com/vercel-labs/json-render/issues/474)）在报告 3 天内即迎来修复 PR [#487](https://redirect.github.com/vercel-labs/json-render/pull/487)，chat 模块 streamCard 的错误处理缺口也由两条社区 PR（[#456](https://redirect.github.com/vercel-labs/json-render/pull/456) / [#483](https://redirect.github.com/vercel-labs/json-render/pull/483)）推进至关闭。另有第三方贡献者提交 Chat 示例的 Parallel 搜索集成（[#485](https://redirect.github.com/vercel-labs/json-render/pull/485)），显示项目生态吸引力在向外延伸。整体判断：报告质量高、响应闭环快、无安全/崩溃级问题，项目健康度良好。

---

## 2. 版本发布

本期无新版本发布。最新版本仍为 `@json-render/core` / `@json-render/directives` **0.22.0**（Issue #474 报告者确认 0.22.0 为 latest，main 分支 `f5c1240`）。

前瞻提示：本期已落地的 streamCard 修复与待合并的 PR #487 均为小粒度行为修正，下个 patch 版本发布概率较高；其中 $t 改为字面替换属于**语义收紧**，对依赖 "$ 符号动态展开" 行为的调用方可能构成轻微行为变更，发布时需关注 changelog。

---

## 3. 项目进展

今日 2 条 PR 关闭/合并，2 条新 PR 待合并：

| PR | 状态 | 主题 | 作者 | 时间线 |
|---|---|---|---|---|
| [#483](https://redirect.github.com/vercel-labs/json-render/pull/483) | 已关闭/合并 | `CardSpecError` 附加已发布消息句柄 | Railly | 11-16 提交 → 11-17 关闭 |
| [#456](https://redirect.github.com/vercel-labs/json-render/pull/456) | 已关闭 | 同一问题的早期修复尝试 | sachinmour | 11-07 提交 → 11-17 关闭 |
| [#487](https://redirect.github.com/vercel-labs/json-render/pull/487) | OPEN | $t 字面替换 + $truncate 按 code point 截断 | mvanhorn | 11-17 提交 |
| [#485](https://redirect.github.com/vercel-labs/json-render/pull/485) | OPEN | Chat 示例 Parallel 搜索与来源卡片 | georgeatparallel | 11-17 提交 |

**streamCard 错误恢复链路补强（本期核心进展）**：`streamCard` 会在流结束前先发布部分卡片，最终 spec 校验失败（如 `limits` 仅约束最终卡片）时抛出的 `CardSpecError` 缺少已发布消息的句柄，导致调用方无法按文档承诺对残留卡片执行 retry/edit。#483 让 `CardSpecError` 接受可选的 `posted` 参数补齐了这一契约缺口。从时间线与方案完整度看，#456（早期路线）大概率是被 #483 取代的关闭，而非双双落空——两位外部贡献者在 10 天窗口内先后为同一痛点提交修复，本身即说明该缺口被广泛踩到。

**净进展评估**：本期无新能力面扩张，聚焦于消除两类会让开发者踩坑的契约缺口，属于典型的"生产可用性打磨"阶段推进。

---

## 4. 社区热点

- **Issue [#474](https://redirect.github.com/vercel-labs/json-render/issues/474)（1 评论，11-17 更新）**：本期唯一活跃 Issue，也是讨论焦点。报告者 trackoor 提供了高质量报告——明确的版本矩阵（0.22.0 + main `f5c1240`）、可直接运行的 `repro.mjs` 复现脚本。issue 创建（11-14）后 3 天内即出现修复 PR #487（11-17），形成"报告 → 复现 → 修复"的高效闭环。
- **诉求分析**：$t（i18n 替换）与 $truncate（截断）是渲染层基础原语，本次暴露的边界——$ 符号转义、嵌套占位符、参数名特殊字符、emoji 代理对——恰是 AI 生成内容的高频形态。用户正在多语言 + 富 Unicode 场景下将 json-render 用于真实业务，而非 demo 级使用。
- PR 侧虽无评论数据，但 #456 / #483 双 PR 并行是一种无声的"社区投票"：streamCard 错误处理是当前 chat 场景最被踩到的痛点。

---

## 5. Bug 与稳定性

本期无崩溃、无数据丢失、无安全问题，均为**正确性缺陷**，按严重程度排列：

**🟠 中等 1｜directives：$t 替换污染 + $truncate 分割代理对** — [Issue #474](https://redirect.github.com/vercel-labs/json-render/issues/474)
- `$t`：参数值含 `$` 会被改写；值内含占位符会被**二次替换**；参数名含括号触发 `SyntaxError`；参数名含点可能替换错误的占位符
- `$truncate`：在增补平面字符（emoji 等）中间截断，产生乱码
- 影响：国际化与 emoji 内容渲染错误，属静默出错、不易排查
- 修复状态：✅ **已有 fix PR [#487](https://redirect.github.com/vercel-labs/json-render/pull/487)**（字面替换 + 按 code point 截断），待 review 合并

**🟠 中等 2｜chat：streamCard 校验失败后无法操作已发布卡片** — [#456](https://redirect.github.com/vercel-labs/json-render/pull/456) / [#483](https://redirect.github.com/vercel-labs/json-render/pull/483)
- `CardSpecError` 不携带已发布消息句柄，与文档承诺的 retry/edit 行为不符，流式失败时线程残留残缺卡片且无法程序化清理
- 修复状态：✅ **已修复**（#483 关闭/合并，#456 为重复路线关闭）

---

## 6. 功能请求与路线图信号

- **PR [#485](https://redirect.github.com/vercel-labs/json-render/pull/485)（OPEN）：Chat 示例新增 opt-in Parallel 搜索与来源卡片**。作者 georgeatparallel（从命名与方案推测为 Parallel 搜索 API 方的主动集成）提出通过 `CHAT_SEARCH_PROVIDER=parallel` 环境变量，将搜索结果从"可展开工具输出中的合成文本"升级为**结构化来源卡片**，让用户在答案旁直接检视源链接。
  - 判断：opt-in 设计、仅动示例层，合并阻力低，大概率进入下个迭代；若"来源引用卡片"被抽象为通用组件，可能演化为 chat 场景的正式能力方向。
- **PR #487** 虽为 bug fix，但"字面替换、按 code point 截断"的语义确定化实质是 directives 契约的收紧，可视为 0.x 阶段向更高稳定性迈进的信号。
- **版本节奏推断**：#487 与已落地的 streamCard 修复同属 patch 粒度，下一个版本（0.22.x）发布窗口临近，值得持续关注。

---

## 7. 用户反馈摘要

从本期 Issue/PR 描述中提炼的真实痛点：

1. **"文档承诺了，API 做不到"**：文档称 `CardSpecError` 后可 retry/edit 已发布消息，但错误对象不含消息句柄（#456/#483 两处描述均直指此落差）——契约不一致比功能缺失更损伤开发者信任。
2. **`limits` 与流式的隐性语义差**：limits 仅作用于最终卡片，流式过程中合法的内容在结束时校验失败，用户以踩坑方式发现这一隐性契约（#456）。
3. **Unicode/国际化边界是刚需**：$t/$truncate 的 bug 表明用户在真实处理 emoji、多语言、特殊字符内容（#474）。
4. **信息溯源诉求**：Chat 示例用户希望"答案 + 结构化来源链接"并存，而非阅读工具输出长文本（#485）。

正面信号：报告者附带完整版本矩阵与可运行复现脚本，反映用户群体工程素养高、有长期投入意愿；issue 到 fix 的响应在 1–3 天内完成，社区对响应速度的信任度应持续上行。

---

## 8. 待处理积压

本期数据内**无长期积压**（全部条目活跃于近 10 天内），但以下事项建议维护者优先跟进：

| 事项 | 状态 | 建议 |
|---|---|---|
| PR [#487](https://redirect.github.com/vercel-labs/json-render/pull/487) | OPEN（11-17） | 尽快 review 合并并随 patch 版本发布，避免 #474 报告者持续受阻；合并后关闭 #474 并注明修复版本号 |
| PR [#485](https://redirect.github.com/vercel-labs/json-render/pull/485) | OPEN（11-17） | 确认示例集成边界：新增环境变量文档、Parallel API key 说明、是否纳入默认示例矩阵 |
| Issue [#474](https://redirect.github.com/vercel-labs/json-render/issues/474) | OPEN（1 评论） | 修复落地前可先回复报告者 fix 进展，管理预期 |

**流程观察**：PR #456 从提交（11-07）到关闭（11-17）历时 10 天，社区 PR 的 review 反馈周期存在压缩空间；两位外部贡献者为同一问题各写一个 PR，也提示 issue 与 PR 之间缺少"认领 / 进行中"的协调机制（如 in-progress 标签），可考虑引入以减少重复劳动。

---

**健康度小结**：缺陷响应 ⭐⭐⭐⭐⭐ ｜ 报告质量 ⭐⭐⭐⭐⭐ ｜ 社区参与 ⭐⭐⭐⭐ ｜ 版本节奏 ⭐⭐⭐（本期无发布，修复在途，预计下版本集中释放）

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报
**日期：2026-11-18** | 数据来源：github.com/CopilotKit/CopilotKit

---

## 1. 今日速览

今日 CopilotKit 呈现「开发端高热、社区端静默」的鲜明反差：过去 24 小时 **PR 更新达 43 条**（其中 20 条已合并/关闭，23 条待合并），但 **Issues 活动为零**。项目于昨日发布 **v1.89.0**，聚焦长 Intelligence 线程性能与 MCP Apps 能力扩展。更值得关注的是，今日合并的 PR 中有 **6 条直指 2.0.0 大版本**（Vue 2.0 API 上移至包根、移除旧 `Copilot*` 运行时导出、v2 迁移 codemod 扩展至 Vue 等），结合伞形 PR [#8185](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185) 的持续推进，**2.0.0 正处于发布前的密集冲刺阶段**。合并吞吐率约 46.5%，核心维护团队（AlemTuzlak、tylerslaton、mme 等）产出节奏健康。

---

## 2. 版本发布

### v1.89.0（2026-11-17 发布）

**核心更新：**

1. **长 Intelligence 线程性能与可靠性提升** — 对应已合并 PR [#8247](https://redirect.github.com/CopilotKit/CopilotKit/pull/8247)：`IntelligenceAgent` 现将回放的历史事件持有至 `replay_complete` 后一次性（`coalesce`）交给 AG-UI，避免长线程的碎片化渲染；同时修复了重连游标跟随事件的问题，以及 **Safari 下聊天布局错乱**的兼容性缺陷。
2. **Agent 独立显示名称支持** — 多 Agent 场景下可为不同 agent 配置区分度更高的展示名。
3. **MCP Apps 扩展 model-context 共享** — 深化 MCP 应用间的上下文复用能力。

**破坏性变更：** 无。本次为 minor 版本（1.88 → 1.89），向后兼容。

**迁移注意事项：** 常规升级即可。但需留意：若你使用 OpenAI `gpt-6-*` 模型，[#8363](https://redirect.github.com/CopilotKit/CopilotKit/pull/8363) 指出当前运行时依赖的 `@ai-sdk/openai` 3.0.36 会**静默丢弃** `reasoningEffort` 参数，该修复（最低版本要求提升至 `^3.0.140`）尚未合入本版本，gpt-6 用户建议关注下一个 patch。

**发布流程：** 由自动化工作流 [PR #8457](https://redirect.github.com/CopilotKit/CopilotKit/pull/8457) 完成版本 bump 与 AI 增强版 release notes 生成，流程规范。

---

## 3. 项目进展

今日 20 条已合并/关闭的 PR 按主题归类如下：

### 🚀 2.0.0 主版本冲刺（6 条，今日最大主线）
| PR | 内容 | 意义 |
|---|---|---|
| [#8450](https://redirect.github.com/CopilotKit/CopilotKit/pull/8450) | `feat(vue)!` 2.0 API 从 `/v2` 子路径上移至 `@copilotkit/vue` 包根 | Vue 与 React 入口对齐，移除 v1 hooks（`CopilotKit` 保留为 `CopilotKitProvider` 别名，模板兼容） |
| [#8449](https://redirect.github.com/CopilotKit/CopilotKit/pull/8449) | `feat(runtime)!` 移除旧 `Copilot*` 运行时导出名 | 清除 RC 版本中的弃用别名，保证大版本 API 面干净 |
| [#8454](https://redirect.github.com/CopilotKit/CopilotKit/pull/8454) | `/v2` 子路径与 `a2ui` 选项保留为弃用别名 | 1.x 应用平滑过渡的兼容层 |
| [#8452](https://redirect.github.com/CopilotKit/CopilotKit/pull/8452) | v2 迁移 codemod 支持 Vue 应用（含 `.vue` 单文件组件 `<script>` 块） | 迁移工具链补齐最后一块拼图 |
| [#8447](https://redirect.github.com/CopilotKit/CopilotKit/pull/8447) | 新增 2.0 迁移指南 `migrate/agents-2.0` | 覆盖 `langgraph` runtime、`remoteEndpoints`、服务端 `actions` 三类 1.x 接入方式 |
| [#8453](https://redirect.github.com/CopilotKit/CopilotKit/pull/8453) | CI 补跑 v2-migration codemod 测试并修复 Nx 缓存失效问题 | 保障迁移工具质量，此前 codemod 测试从未在 CI 中真正执行 |

**评估：** 破坏性变更落地 + codemod 全覆盖（React/Vue）+ 迁移文档 + CI 兜底，四要素齐备，**2.0.0 距离正式发布可能仅差伞形 PR #8185 的最终收口**。

### 📦 v1.89.0 交付与发布工程（3 条）
- [#8247](https://redirect.github.com/CopilotKit/CopilotKit/pull/8247)（`perf`）：长线程一次性加载，本版本核心卖点
- [#8457](https://redirect.github.com/CopilotKit/CopilotKit/pull/8457)：monorepo 发布自动化
- [#8250](https://redirect.github.com/CopilotKit/CopilotKit/pull/8250)：文档生产环境发布固定 digest

### 🔌 集成生态（2 条）
- [#8286](https://redirect.github.com/CopilotKit/CopilotKit/pull/8286)：Omnara 正式注册进 Showcase，带来 agentic chat、前端工具、默认工具渲染三个独立 demo（基于 `@ag-ui/omnara` 适配器）
- [#8398](https://redirect.github.com/CopilotKit/CopilotKit/pull/8398)：OpenFuse 仓库由 `OpenMuse` 更名后同步 README 链接与 star 徽章

### 📚 文档（1 条）
- [#8455](https://redirect.github.com/CopilotKit/CopilotKit/pull/8455)：OpenAI Agents SDK 快速入门补齐 CLI starter 路径，与 Google Antigravity 快速入门保持一致的「双路径」结构

**整体推进：** 单日合并 20 条 PR 且集中在 2.0 收尾，属于冲刺期的高强度产出，项目前进幅度显著。

---

## 4. 社区热点

> ⚠️ 数据说明：本期抓取的 PR 评论数均为 `undefined`，且 24 小时内无 Issue 活动，以下基于 PR 更新时间、涉及范围与作者权重排序。

1. **[PR #8185 "2.0.0"](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185)**（作者 tylerslaton，11-03 创建，持续更新）
   标记 "Work in progress, do not merge"，是 2.0 大版本的聚合 PR。今日其依赖的系列子 PR（#8450/#8449/#8447/#8452 等）密集落地，说明这是当前全仓库关注度最高的工作流。社区对 2.0 的核心诉求隐含在 #8454 的设计中：**旧代码不要一夜之间坏掉**。

2. **[PR #8118 `fix(channels)!` 限制审批恢复权默认归属发起人](https://redirect.github.com/CopilotKit/CopilotKit/pull/8118)**（ayuxy027，10-30 创建，已挂单 19 天）
   涉及权限模型默认行为的破坏性变更：审批恢复默认仅限工作流发起人，团队审批需显式声明 `answerableBy: "conversation"`。同时收紧 Slack 下载凭证作用域。这是待合并 PR 中影响面最大的安全向变更，**长期未合并值得维护者关注**。

3. **[PR #8459 Omnara 访客会话隔离](https://redirect.github.com/CopilotKit/CopilotKit/pull/8459)**（contextablemark，昨日创建）
   针对刚合入的 Omnara demos（#8286）的安全加固：为 demo 签发与线程绑定的服务端凭证，运行前校验 scope。反映出团队对**公网 demo 被滥用/会话串扰**风险的快速响应。

---

## 5. Bug 与稳定性

按严重程度排列（今日无 Issue 报障，以下均来自 fix 类 PR）：

| 级别 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 🔴 中高 | **gpt-6 推理参数静默丢失**：`@ai-sdk/openai` 3.0.36 不识别 `gpt-6-*` 为推理模型，`reasoningEffort` 被无警告丢弃 | Fix 开放中，未进 v1.89.0 | [#8363](https://redirect.github.com/CopilotKit/CopilotKit/pull/8363)（OPEN） |
| 🟠 中 | **Omnara 公网 demo 会话未隔离**：访客身份可跨线程/跨操作复用 | Fix 开放中 | [#8459](https://redirect.github.com/CopilotKit/CopilotKit/pull/8459)（OPEN） |
| 🟠 中 | **Python 快速入门开箱即坏**：缺 `azure-identity` 依赖；本地示例未绑定 loopback；共享应用缺少 fail-closed 的授权示例 | Fix 开放中 | [#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309)（OPEN） |
| 🟡 低 | **Inspector 下拉筛选器状态丢失**：AG-UI Events 视图重渲染后 agent/事件类型筛选回退为 "All" | Fix 开放中 | [#8403](https://redirect.github.com/CopilotKit/CopilotKit/pull/8403)（OPEN） |
| ✅ 已修复 | **Safari 长线程布局错乱 + 重连游标漂移** | 已随 v1.89.0 发布 | [#8247](https://redirect.github.com/CopilotKit/CopilotKit/pull/8247)（CLOSED） |
| ✅ 已修复 | **v2 codemod 测试从未在 CI 运行、Nx 可能用陈旧缓存放行** | 已合并 | [#8453](https://redirect.github.com/CopilotKit/CopilotKit/pull/8453)（CLOSED） |

**稳定性小结：** 无崩溃级问题报告；gpt-6 兼容性问题因「静默失败」特性对生产用户最危险，建议优先合入。

---

## 6. 功能请求与路线图信号

本期无新开 Issue，路线图信号主要来自已合并 PR 的方向推断：

- **2.0.0（确定性极高，短期）**：[#8185](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185) 蓄势待发。今日落地内容已明确 2.0 的三大支柱——统一包根入口（React/Vue 对齐）、迁移自动化（codemod 全栈覆盖）、弃用别名过渡期。
- **Channels 安全与协作治理（中期）**：[#8118](https://redirect.github.com/CopilotKit/CopilotKit/pull/8118) 引入 `thread.assertCanResume()` 门控 API 与 `answerableBy` 细粒度审批语义，预示团队在为**多人共享会话场景**加固权限模型。
- **模型生态跟进（短期）**：[#8363](https://redirect.github.com/CopilotKit/CopilotKit/pull/8363) 表明项目对 OpenAI 新模型的适配在快速跟进中，gpt-6 支持大概率进入下个版本。
- **MCP Apps 持续加码（中期）**：v1.89.0 的 model-context 共享是连续第三个版本左右的相关演进，配合 Omnara/AG-UI 集成矩阵扩张，显示 **MCP + 多 Agent 编排**是战略主线。
- **Vue 一等公民化（已落地）**：#8450 + #8452 + [#8456](https://redirect.github.com/CopilotKit/CopilotKit/pull/8456)（Vue 子代理委托日志文档示例，OPEN）共同印证 Vue 生态投入在加码。

---

## 7. 用户反馈摘要

> ⚠️ 今日无 Issue 活动，无法提取直接用户评论。以下从 PR 描述中**间接推断**的用户痛点：

- **迁移成本焦虑**：#8454 特意保留 `/v2` 子路径与 `a2ui` 选项作为弃用别名、#8452 将 codemod 扩展到 `.vue` 文件——这些工作的存在本身说明**大量 1.x 用户无法承受一步到位的破坏性迁移**，社区对渐进式升级路径有明确诉求。
- **长会话体验痛点**：#8247 同时修复「长线程加载慢」与「Safari 布局错乱」，说明使用 CopilotKit 构建长时间运行 Agent 应用的用户已达相当规模，且对回放流畅度敏感。
- **新手上手摩擦**：#8309 揭示 Python 快速入门存在依赖缺失与安全配置缺省不当的问题，指向**后端/Python 用户群体的入门流失风险**。
- **对 OpenAI 最新模型即开即用的期望**：#8363 的静默失败场景表明用户默认 `gpt-6-*` 应与 `o*`/`gpt-5*` 行为一致，对模型兼容性的容错预期为零。

---

## 8. 待处理积压

以下 PR 按挂单时长排列，提醒维护者优先处理：

| PR | 挂单时长 | 事项 | 建议 |
|---|---|---|---|
| [#8118](https://redirect.github.com/CopilotKit/CopilotKit/pull/8118) | **19 天**（10-30 起） | `fix(channels)!` 审批权限默认值收紧（破坏性） | 影响面大且含安全语义，若目标进 2.0 应尽快评审定论，避免与 #8185 冲突 |
| [#8185](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185) | 15 天（11-03 起） | 2.0.0 伞形 PR（WIP） | 子 PR 已基本齐备，建议明确收口时间表 |
| [#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309) | 8 天（11-10 起） | Python 快速入门修复 | 文档级修复，影响新用户转化，宜速合 |
| [#8363](https://redirect.github.com/CopilotKit/CopilotKit/pull/8363) | 6 天（11-12 起） | gpt-6 推理参数修复 | 静默失败类缺陷，建议随下个 patch 发布 |
| [#8403](https://redirect.github.com/CopilotKit/CopilotKit/pull/8403) | 3 天（11-15 起） | Inspector 筛选器状态修复 | 低风险 UI 修复 |
| [#8459](https://redirect.github.com/CopilotKit/CopilotKit/pull/8459) | 1 天 | Omnara demo 会话隔离 | 公网 demo 安全加固，建议优先 |
| [#8458](https://redirect.github.com/CopilotKit/CopilotKit/pull/8458) | 1 天 | 文档生产发布（staging 已绿） | 待人工确认合并 |

---

## 健康度速评

- **开发活跃度：★★★★☆** — 单日 43 条 PR 更新、20 条合并，冲刺节奏明确
- **发布节奏：★★★★★** — v1.89.0 按期发布，自动化发布链路成熟
- **社区互动：★★☆☆☆** — Issues 零活动（可能为单日波动，建议持续观察 2-3 天）
- **积压风险：★★★☆☆** — 破坏性 PR #8118 挂单近三周，是当前最需决策的事项
- **整体判断：** 项目处于 **2.0 大版本发布前夜**，工程纪律（codemod、迁移文档、CI 兜底、弃用别名）执行到位，短期最大变量是 2.0 的最终发布时点与迁移期社区反馈。

---
*本报告基于 2026-11-18 抓取的 GitHub 数据自动生成，评论数字段缺失处已作说明。*

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*