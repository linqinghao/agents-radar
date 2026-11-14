# 生成式 UI 生态日报 2026-11-14

> Issues: 29 | PRs: 102 | 覆盖项目: 4 个 | 生成时间: 2026-11-14 05:33 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告

**数据窗口：2026-11-13 至 2026-11-14 ｜ 覆盖项目：a2ui、OpenUI、json-render、CopilotKit**

---

## 1. 生态全景

生成式 UI 赛道整体处于**"从演示走向生产"的临界期**：四个代表性项目 24 小时内合计产生超 120 条 Issue/PR 动态、44 个 PR 合并/关闭、3 次版本发布，无一陷入停滞。架构层面，行业正从"LLM 直接输出 UI JSON"向**结构化、可评测、可持久化**的生成管线演进——a2ui 的 decision 推理格式六连 PR、OpenUI 用户以语言规范为锚的逐条验收、CopilotKit 的服务端 Agent 运行时，是同一方向的三种实现路径。平台层面，Swift/Apple 原生、微信小程序、Lynx 等多端渲染在同日多点开花，**渲染目标覆盖度正在成为新的竞争轴**。与此同时，企业级硬约束（依赖安全、自托管、最小权限）与正确性债务（状态重放、静默错误）成为跨项目的共同摩擦点，标志着用户群体已从早期尝鲜者切换为生产环境的严肃集成方。

---

## 2. 各项目活跃度对比

| 项目 | Issue 动态（24h） | PR 动态（24h） | Release | 关键健康信号 |
|---|---|---|---|---|
| **a2ui** | 18 条更新，3 条关闭，新增 ≥3 条（#4230/#4232/#4236） | 47 条更新：13 合并/关闭，34 待合并 | ❌ 无（**发布缺口**：主分支领先 npm，#4223 用户催问） | 活跃度高；安全响应分化——#4236 当日报告当日修复 vs **P1 权限绕过 #3774 挂起 15 天** |
| **OpenUI** | 新增 6 条，关闭 0（**开闭比 6:0**） | 13 条：11 合并/关闭，2 待合并 | ✅ 2 个 patch（server@0.4.3、dashboard-library@1.0.1） | 交付速度最快；但 lang-core 四条缺陷（#1636–#1639）**零回应、零 fix PR** |
| **json-render** | 新增 1 条（#473），关闭 0 | 4 条：2 关闭，2 在办 | ❌ 无（v0.21.0 准备 PR #344 已关闭但**无对应 Release 记录**，发布链路存疑） | 中等活跃；#453 约 8 天闭环；文档一致性债务第三波重复报告 |
| **CopilotKit** | 4 条更新，3 条关闭（**关闭率 75%**） | 38 条更新：18 合并/关闭，20 待合并 | ✅ **v1.88.0**（含 1 项破坏性变更） | 响应最优：#8375 约 1 天闭环并随版发布；积压最长项约 2 个月 |

> 注：各项目日报统计口径略有差异（a2ui/CopilotKit 计"更新条数"含评论活动，OpenUI 计"新增 Issue"），跨项目比较建议以量级与比值参考为主。

---

## 3. 共同关注的功能方向

**① 原生多端渲染扩张（a2ui / OpenUI / json-render）**
Swift/Apple 生态在同日被三个项目推进：json-render #470（Swift/SwiftUI 渲染器，出自核心维护者，属官方路线图）、OpenUI #1521（原生 Swift SDK 覆盖 iOS/macOS）、a2ui 的 SwiftUI API 规范性议题（#4195/#4227，表明 swift 线已有真实用户）。此外 a2ui 收录首个微信小程序渲染器（#3750，触达 10 亿+ MAU 平台），OpenUI 合入 ReactLynx 示例（#1559）。

**② UI 状态的持久化 / 重放 / 往返正确性（全部四项目，同日命中）**
这是本周期最强的共性信号：a2ui #2932（post-action 状态在 history replay 后丢失，6 周无设计结论）、json-render #453（spec 重放按引用改写 message parts 本体）、CopilotKit #8394（channel 重连从头重放改为游标恢复）+ #8256（历史消息 prepend 丢阅读位置）、OpenUI 用户对"解析→序列化→再解析无损往返"的严格要求（#1636/#1637）。共同背景：**从存储的消息历史重建 UI（典型聊天产品形态）是所有项目的共性宿主场景**。

**③ AI Agent 与 LLM 作为一等消费者（全部四项目）**
json-render 的 SKILL.md 被 Agent 逐字执行（"文档即代码"，#473 报告者明确指出 agents follow it as written）；a2ui 将 skill 与 CLI 产品化（#4156）并建设四格式推理对比 playground（#4158）；OpenUI #1638 揭示 prompt 签名错误直接导致 LLM 生成链路失败；CopilotKit 推进 MCP Apps 状态同步（#7811）。

**④ 企业级采用的硬约束（a2ui / OpenUI / CopilotKit）**
依赖安全：a2ui #4192/#4231（zod 3.x 安全公告阻塞企业用户 Coolblue 的 Dependabot 告警消除）；部署自主性：OpenUI #1635（自托管 Postgres 之问，直指 OSS/Cloud 商业边界）；最小权限：CopilotKit #8375（后台"起标题"操作触发带生产写权限的完整 Agent 运行，以破坏性变更修复）。

**⑤ 文档与代码的同步漂移治理（全部四项目）**
a2ui #3519（主指南停留 v0.8/v0.9、引用不存在的操作，6 条评论居社区热度榜首，今日关闭）；json-render #473（包级 README 与 SKILL.md 崩溃示例，根 README 修复后未同步的第三波报告）；CopilotKit #8396 文档信息架构重构 + #8309 Python quickstart 补全；OpenUI 批量清理 devin 历史文档 PR。

---

## 4. 差异化定位分析

| 项目 | 核心定位 | 技术路线特征 | 目标用户 / 场景 | 版本坐标 |
|---|---|---|---|---|
| **a2ui** | 跨语言**规范驱动**的生成式 UI 协议 | ts/dart/swift/python 四语言 core + 渲染器生态；v1.0 收敛期推进 decision 推理格式（两阶段 LayoutPlanner + DecisionSynthesizer + 111-case 评测基准）；`/specification/` 设 CODEOWNERS 强制评审 | 需在多语言、多平台宿主中嵌入 Agent UI 的平台工程团队 | @​0.15.0 → v1.0 冲刺 |
| **OpenUI** | 商业支撑的 **UI DSL + Dashboard 产品线** | OpenUI Lang 自有语言规范（用户逐条对照 §1.4/§9.2 验收）+ server API + dashboard-library；自有产品 dogfood 驱动（opendashboards.com）；OSS + Cloud 双轨 | 数据看板 / 企业 dashboard 场景、多端 App 开发者 | dashboard 1.0.x / server 0.4.3 |
| **json-render** | 轻量**流式 spec + patches** 渲染格式 | 基于 message parts 的 spec 与增量 patch，天然适配聊天流式输出；react/vue/solid 三框架，Swift 扩张中；SKILL.md 使 AI Agent 成为明确用户画像 | 在聊天产品中嵌入 AI 生成 UI 的 Web 团队 | v0.21.0（早期） |
| **CopilotKit** | 从前端集成框架演进的**全栈 Agent 平台** | Intelligence 服务端运行时（runAgentInThread）+ HITL 工作流 + MCP Apps；React/Angular/Vue 三框架行为一致性；企业自托管能力 | 构建生产级 Agent 应用的全栈 / 企业团队 | v1.88.0（最成熟、最高频发版） |

**哲学分野**：a2ui 与 OpenUI 属 **spec-first**（先定义规范再约束实现，前者跨语言、后者单语言深耕）；json-render 属 **传输格式优先**（为流式消息通道设计的轻量协议）；CopilotKit 属 **runtime-first**（以运行时能力与框架集成为中心）。选型时这比功能清单更能预示长期演进方向。

---

## 5. 社区热度与成熟度

- **活跃度排序**：a2ui（65 条动态）> CopilotKit（42）> OpenUI（19）> json-render（5）。
- **工程响应速度**：CopilotKit 最优（当日关闭率 75%、修复附回归测试、大 PR 主动拆分、破坏性变更随版发布）；a2ui 呈**两极分化**（社区贡献者报告即修复的 #4236→#4237 当日闭环，但 P1 安全 #3774 已 15 天无分诊）；json-render 中等（核心修复约 8 天闭环）；OpenUI 今日 6:0 零闭环，lang-core 缺陷分诊缺位是最明显短板。
- **成熟度坐标**：CopilotKit 流程最成熟，且学生/研究员贡献计划在系统性产出高质量修复；a2ui 处于 pre-1.0 收敛期，规范治理严格但**发版节奏与主分支脱节**；OpenUI 交付与 dogfood 闭环意识好，但 Issue 分诊能力未跟上交付速度；json-render 早期阶段，4 位贡献者驱动 5 条动态，小而健康，唯文档债务反复消耗信任。
- **快速迭代阶段项目**：OpenUI dashboard 线（1.0.0→1.0.1 数日极速补丁）、a2ui v1.0 收敛（34 个待合并 PR 的主体为 decision 六连系列）、CopilotKit 保持周级发版节奏。
- **风险提示**：OpenUI 的单一深度用户（udsy19）单日报告 4 条核心缺陷且零回应，存在口碑资产流失与债务累积的双重风险；OpenUI #1635 涉及商业模式表态的沉默，易被社区解读为"默认拒绝"。

---

## 6. 值得关注的趋势信号

1. **生成管线走向"决策分层 + 可评测"**。a2ui 的 decision 系列（布局规划器、111-case 基准、离线校准 CLI、四格式 playground）代表"LLM 直接生成 UI"向"决策驱动 + 布局规划"混合架构的演进，且评测工具链与架构同步建设。**参考**：选型时应考察项目是否提供生成质量的量化基准；自研方案应尽早建立评测集，而非事后补课。

2. **Agent 是一等用户，文档即代码**。SKILL.md、prompt 签名、错误路径语义的正确性会直接转化为 Agent 行为的正确性——json-render 三波文档崩溃报告与 OpenUI #1638（enum keys/values 混淆致生成失败）均为例证。**参考**：面向 AI 消费者的文档与 prompt 生成物应纳入 CI 测试（json-render #472 的 docs 测试夹具模式可复用）。

3. **"从消息历史重建 UI"的 replay 正确性是共性硬问题**。四个项目同日命中同类缺陷（状态丢失、重放污染、往返不保真、重连风暴）。**参考**：聊天形态产品选型时，重点验证 replay / 重连 / 序列化往返语义，并关注项目是否提供官方持久化模式（a2ui #2932 悬置 6 周说明这尚未有行业标准答案）。

4. **静默错误是当前最危险的缺陷类别**。OpenUI #1636/#1637（无报错但结果错误，波及流式解析，直接影响 LLM 生成 UI 的正确性）是典型样本。**参考**：尽早引入 round-trip 属性测试与 golden case 基准，"能跑通"不等于"正确"。

5. **企业采用的三道闸门已清晰化**：依赖安全（上游公告响应与发版节奏）、部署自主性（自托管能力）、最小权限（后台任务不应触发带写权限的 Agent）。**参考**：企业集成前应审计上游的发布工程成熟度——a2ui 的"主分支领先 npm"与 json-render 的"发布 PR 关闭但无 Release 记录"都是预警信号；CopilotKit #8375 的快速破坏性变更则展示了健康的响应范式。

6. **多端渲染覆盖成为选型差异轴**。Swift（三项目同日推进）、微信小程序、Lynx 与 CopilotKit 的 Angular/Vue 框架对齐，显示各家正沿不同维度扩张平台矩阵。**参考**：按目标平台矩阵选型，并优先考察渲染器生态的目录治理与收录质量（a2ui 的社区目录 + CODEOWNERS 管控是较好的治理样本）。

---

*数据来源：四项目 2026-11-14 日报（基于 GitHub 公开 Issue/PR/Release 数据）。跨项目统计口径存在差异，个别 PR 终态以仓库 commit 记录为准。*

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目日报 · 2026-11-14

---

## 一、今日速览

a2ui 今日整体活跃度**高**：过去 24 小时共产生 65 条 Issue/PR 动态（18 条 Issue 更新 + 47 条 PR 更新），其中 13 个 PR 合并/关闭、34 个 PR 处于待合并状态，3 个 Issue 关闭。当日无新版本发布。三条主线值得关注：其一，gspencergoog 推动的 **"decision 推理格式"六连 PR**（#4153–#4158）持续更新，构成 v1.0 的核心架构演进；其二，社区贡献者 AndreAlmeidaDC **当日报告并当日提交修复**了 `analyzeRegex` 正则挂死问题（#4236 → #4237），安全响应速度优秀；其三，Dart/Flutter beta CI 因新 lint 规则出现 P1 级失败（#4224），出现 #4233 / #4225 两个并行修复。健康度隐忧：主分支已领先于 npm 发布（#4223 用户催问 @ 前缀信封字段），P1 安全问题 #3774 已挂起约两周未分诊。

---

## 二、版本发布

今日无新版本发布。⚠️ 注意到发布缺口信号：[#4223](https://redirect.github.com/a2ui-project/a2ui/issues/4223) 指出主分支已支持 `@catalogId`/`@accessibility`/`@metadata`/`@checks`，但最新 npm 包 `@a2ui/web_core@0.15.0` 仍使用裸字段——下游用户已开始催促发布（详见第六、八节）。

---

## 三、项目进展

今日 13 个 PR 合并/关闭，覆盖功能、修复、CI 与生态四个方向：

**功能与修复**
- [#4143](https://redirect.github.com/a2ui-project/a2ui/pull/4143) feat(angular)：新增 `onElementConnected` 钩子，应用无需子类化即可装饰非自有 universal elements（如注入 analytics 属性）——Angular 适配器可扩展性增强
- [#4205](https://redirect.github.com/a2ui-project/a2ui/pull/4205) fix(web_core)：修复 surface actions 与 group action listeners 的 settle 时机问题，`SurfaceGroupModel.addSurface` 的 Promise 传播链路修正
- [#4216](https://redirect.github.com/a2ui-project/a2ui/pull/4216)：Dart 一致性测试 harness 现将每个执行/跳过的 case 记入 manifest 并由 CI 校验，**消除静默漏跑 case 的风险**——测试基础设施质量提升
- [#4233](https://redirect.github.com/a2ui-project/a2ui/pull/4233) fix(dart)：为 `specify_nonobvious_local_variable_types` lint 补充显式类型注解（与 [#4225](https://redirect.github.com/a2ui-project/a2ui/pull/4225) 为并行方案，后者仍开放）

**文档与生态**
- [#3750](https://redirect.github.com/a2ui-project/a2ui/pull/3750)：**WeChat 小程序渲染器 a2ui-miniprogram 收录进社区目录**——首个覆盖微信小程序平台（10 亿+ MAU）的渲染器，生态版图显著扩展
- [#4199](https://redirect.github.com/a2ui-project/a2ui/pull/4199)：新增 "Parse JSON-only model output" 指南章节，覆盖 `wrapped: false` 场景
- [#4235](https://redirect.github.com/a2ui-project/a2ui/pull/4235)：官网首页 closing CTA 文案更新（当日开当日关）

**在途大型工作（活跃更新中）**
- decision 推理格式系列 #4153–#4158（详见第六节）
- 规范目录重构系列：[#4150](https://redirect.github.com/a2ui-project/a2ui/pull/4150)（v0.9/v0.9.1 catalog 迁移至顶层 `catalogs/`）、[#4149](https://redirect.github.com/a2ui-project/a2ui/pull/4149)（Kotlin BundledCatalogProvider 与仓库路径解耦），均关联母任务 #2700

**总体评估**：今日推进节奏稳健——1 个适配器功能、2 个稳定性修复、1 个测试体系加固、1 个生态收录；叠加在途的 decision 系列与规范重构，项目处于 v1.0 收敛期的密集开发阶段。

---

## 四、社区热点

| 排名 | 条目 | 热度 | 核心诉求 |
|---|---|---|---|
| 1 | [#3519](https://redirect.github.com/a2ui-project/a2ui/issues/3519)（6 评论，今日关闭） | 🔥🔥🔥 | Agent 开发主指南严重过期：仅覆盖 v0.8/v0.9、引用不存在的 `render`/`update` 操作、遗留未完成 TODO。反映 **v1.0 时代文档同步滞后** 是社区最大摩擦点之一，今日关闭表明已处理 |
| 2 | [#4192](https://redirect.github.com/a2ui-project/a2ui/issues/4192) + [#4231](https://redirect.github.com/a2ui-project/a2ui/issues/4231)（各 2 评论，#4231 今日关闭） | 🔥🔥 | **企业用户（Coolblue）因 zod 3.x 的安全公告 GHSA-mrhx-c7xc-m3w5 在下游项目触发 Dependabot 告警**，且 zod 3 无补丁版本。请求升级至 `zod ^4.6.6` 并从 `zod/v3` 子路径导入。依赖安全是硬性阻塞诉求 |
| 3 | [#4195](https://redirect.github.com/a2ui-project/a2ui/issues/4195)（2 评论） | 🔥 | SwiftUI `EnvironmentValues`（a2uiCatalogs/a2uiDefaultCatalogID）公开可写违背 API 设计意图，应只读——Swift 生态 API 规范性诉求 |
| 4 | [#2932](https://redirect.github.com/a2ui-project/a2ui/issues/2932)（2 评论） | 🔥 | Post-action 状态在 history replay 后丢失：**架构级设计问题**，涉及一次性/临时 surface 的状态生命周期定义，需要官方给出推荐模式 |
| 5 | [#4236](https://redirect.github.com/a2ui-project/a2ui/issues/4236) → [#4237](https://redirect.github.com/a2ui-project/a2ui/pull/4237)（今日新增） | 🔥 | 渲染器正则挂死，报告与修复同日完成，展示高质量贡献闭环 |

---

## 五、Bug 与稳定性

今日报告/活跃的 Bug 按严重程度排列：

| 严重度 | Issue | 问题 | Fix 状态 |
|---|---|---|---|
| **P1 · 安全** | [#3774](https://redirect.github.com/a2ui-project/a2ui/issues/3774) | Agent 可通过在 `callRendererFunction` 参数中**嵌套 `rendererOnly` 函数绕过 `allowedCallers` 权限检查**（影响 swift/ts/dart/python 全线 core） | ❌ 无 fix PR，needs-triage 已 15 天 |
| **P0 级影响 · 今日新增** | [#4236](https://redirect.github.com/a2ui-project/a2ui/issues/4236) | `analyzeRegex` 接受 `(a?){1000}a{1000}`，编译后的 RegExp 在 256 字符输入上**永不返回**（类 ReDoS 拒绝服务向量） | ✅ 当日已有 fix PR [#4237](https://redirect.github.com/a2ui-project/a2ui/pull/4237)（拒绝可空组的计数重复） |
| **P1 · CI** | [#4224](https://redirect.github.com/a2ui-project/a2ui/issues/4224) | Flutter beta CI 五个 job 失败，76 个 `specify_nonobvious_local_variable_types` 诊断（Dart 3.15 扩展了该 lint 至模式变量） | ✅ 修复进行中：[#4233](https://redirect.github.com/a2ui-project/a2ui/pull/4233)（已关闭）与 [#4225](https://redirect.github.com/a2ui-project/a2ui/pull/4225)（开放）并行 |
| **P1 · API** | [#4195](https://redirect.github.com/a2ui-project/a2ui/issues/4195) | SwiftUI EnvironmentValues 不应公开可写 | ❌ 无 fix PR，needs review |
| **P2 · core** | [#4188](https://redirect.github.com/a2ui-project/a2ui/issues/4188) | `json_schema_builder` 遇 `$id`/`$anchor`/`$dynamicAnchor` 属性抛 TypeError，无法用 catalog_definition.json 校验 catalog | ❌ 无 fix PR |
| **P2 · core** | [#4193](https://redirect.github.com/a2ui-project/a2ui/issues/4193) | `formatString` 将 ≥2^63 整数打印为 int64 上限 `9223372036854775807` | ❌ 无 fix PR |
| **P2 · core** | [#4194](https://redirect.github.com/a2ui-project/a2ui/issues/4194) | 未知 envelope key 报告的 path `/version` 与"版本不支持"错误路径冲突，误导 agent | ❌ 无 fix PR |
| P2 · swift | [#4227](https://redirect.github.com/a2ui-project/a2ui/issues/4227) | `getRendererCapabilities` 丢弃 allOf 组合组件的属性（inline catalogs + v1.0） | ❌ 无 fix PR |
| 低 | [#4222](https://redirect.github.com/a2ui-project/a2ui/issues/4222) | `requirements-docs.txt` 依赖未 pin（可复现性） | ❌ 待处理 |

**稳定性小结**：新增 Bug 中 1 个安全向量已当日闭环（#4236），CI 问题有双修复在途；但 **#3774 权限绕过问题（P1、跨语言）是当前最大的未闭环风险**。

---

## 六、功能请求与路线图信号

**今日新功能请求**
- [#4230](https://redirect.github.com/a2ui-project/a2ui/issues/4230)：从 `a2ui_core`（Dart）导出 `coerceToString`，暴露 `formatString` 内部文本转换逻辑——便于第三方做模板求值工具
- [#4232](https://redirect.github.com/a2ui-project/a2ui/issues/4232)：重构社区渲染器目录页（20+ 条目的 5 列平铺表格 → 可扫描 + 平台过滤）
- [#4220](https://redirect.github.com/a2ui-project/a2ui/issues/4220)：RFC 建议文档站点改用 yarn（消除 npm/yarn 双包管理器并存）
- [#4192](https://redirect.github.com/a2ui-project/a2ui/issues/4192)：zod ^4.6.6 依赖升级（stopgap 方案：`zod/v3` 子路径导入）
- [#2932](https://redirect.github.com/a2ui-project/a2ui/issues/2932)：post-action 状态跨 history replay 的持久化模式

**路线图信号（强）**

1. **Decision 推理格式**——v1.0 核心方向，六连 PR 构成完整闭环，全部处于活跃 review：
   - [#4153](https://redirect.github.com/a2ui-project/a2ui/pull/4153) 实验性布局语法 + Basic Catalog v1.0 patterns
   - [#4154](https://redirect.github.com/a2ui-project/a2ui/pull/4154) agent-sdk 核心类型 / payload inspector / 单次调用后端
   - [#4155](https://redirect.github.com/a2ui-project/a2ui/pull/4155) **两阶段 LayoutPlanner + DecisionSynthesizer + DecisionFormat 入口**
   - [#4156](https://redirect.github.com/a2ui-project/a2ui/pull/4156) `a2ui-generate-catalog-patterns` skill 与 CLI
   - [#4157](https://redirect.github.com/a2ui-project/a2ui/pull/4157) 111-case 验证基准 + 多后端记分卡 + 离线校准 CLI
   - [#4158](https://redirect.github.com/a2ui-project/a2ui/pull/4158) ADK format playground 示例（可对比 decision/express/direct/tool 四种推理格式）

   信号解读：项目正从"LLM 直接生成 UI JSON"扩展至**决策驱动 + 布局规划**的混合架构，且评测、校准工具链同步建设——工程成熟度高，大概率随 v1.0 落地。

2. **规范治理收紧**：[#4234](https://redirect.github.com/a2ui-project/a2ui/pull/4234) 为 `/specification/` 添加 CODEOWNERS（@​jacobsimionato / @​gspencergoog 强制 review），配合 #2700 目录重构，显示规范进入严格管控期。

3. **下一版本内容预测**（结合主分支状态与用户诉求）：`@` 前缀组件信封字段（#4223）、zod 依赖升级（#4192/#4231）、Angular `onElementConnected`（#4143 已合并）均为主分支已有或高优先诉求，是下个 npm 版本的合理候选。

---

## 七、用户反馈摘要

**痛点**
- **依赖安全阻塞企业采用**（#4192）：Coolblue 在共享 chat 包中使用 `@a2ui/react` + `@a2ui/web_core`，zod 3.x 的两个安全公告导致其内部 Dependabot 告警无法消除——"上游不升级，下游无解"是企业集成的典型硬约束
- **核心 SDK 边缘路径成熟度不足**：leoafarias 连续报告 4 个 Dart core 问题（#4188/#4193/#4194/#4230），集中于大数格式化、错误路径语义、JSON Schema 特殊关键字等非主线路径——表明有用户在**深度构建 a2ui_core 之上的工具链**，但踩坑较密
- **发布节奏与主分支脱节**（#4223）：用户明确列出时间线追问 npm 版本计划，"功能在 main 上却用不到"削弱信任
- **架构级文档空白**（#2932）：从存储消息重建 UI 的宿主（典型聊天产品形态）缺少 post-action 状态持久化的官方推荐模式
- **文档版本漂移**（#3519，6 条评论的热度佐证）：主公开指南停留在 v0.8/v0.9 并引用不存在的操作，是社区反复确认的痛点

**积极面**
- 生态多元化：WeChat 小程序渲染器入列（#3750），Swift/Dart/社区侧均有新问题与新 PR 涌入
- 贡献质量高：AndreAlmeidaDC 报告即修复（#4236→#4237）、r0nik123 补文档缺口（#4199）、abdallahshaban557 持续打磨站点搜索体验（#4219/#4232）
- 用户对文档的细致反馈（#3519 六条评论）本身反映社区**深度使用与投入意愿**

---

## 八、待处理积压

| 条目 | 状态 | 风险提示 |
|---|---|---|
| [#3774](https://redirect.github.com/a2ui-project/a2ui/issues/3774) | P1 安全，2026-10-30 创建，仅 1 评论，needs-triage | **最高优先**：权限绕过影响全部语言 core，已 15 天无进展，建议立即分诊并评估 v1.0 修复方案 |
| [#2932](https://redirect.github.com/a2ui-project/a2ui/issues/2932) | 2026-10-01 创建，needs-triage | **6 周无设计结论**，涉及一次性 surface 的规范定义，长期悬置将影响宿主集成决策 |
| [#4195](https://redirect.github.com/a2ui-project/a2ui/issues/4195) | P1，needs review | SwiftUI API 设计问题，趁发布前修正可避免破坏性变更 |
| [#4188](https://redirect.github.com/a2ui-project/a2ui/issues/4188) / [#4193](https://redirect.github.com/a2ui-project/a2ui/issues/4193) / [#4194](https://redirect.github.com/a2ui-project/a2ui/issues/4194) | P2，needs review | 同一活跃贡献者的系列报告，均无回应存在流失风险 |
| #4153–#4158（decision 系列） | 34 个待合并 PR 的主体 | 六连 PR 体量大，建议公布 review 里程碑，避免长期积压挫伤推进者 |
| **发布缺口**（#4223 / #4192） | 无版本计划公开 | 主分支领先 npm 至少一个功能版本，建议尽快发布含 `@` 前缀字段与 zod 升级的补丁版本，回应企业用户的安全诉求 |

---

*数据来源：GitHub（a2ui-project/a2ui），统计窗口为 2026-11-13 至 2026-11-14。本报告基于公开 Issue/PR 数据生成，合并状态以仓库实际为准。*

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目动态日报

**仓库**：[thesysdev/openui](https://github.com/thesysdev/openui) | **日期**：2026-11-14 | **统计周期**：过去 24 小时

---

## 一、今日速览

OpenUI 今日保持中高活跃度的维护节奏：发布 **2 个补丁版本**、处理 **13 条 PR**（11 条已合并/关闭、2 条待合并）、新增 **6 条 Issue**（全部处于 OPEN 状态，0 条关闭）。工作重心明显向 **dashboard 生态**倾斜——版本发布与修复均围绕 `dashboard-library` 与 server API 展开，且团队基于自有产品（opendashboards.com、openui.com 销售看板）的实测反馈进行了快速迭代。值得关注的信号是：单一用户 udsy19 单日提交 **4 条 lang-core 深层缺陷报告**（解析器、序列化器、prompt 生成均有涉及），Issue 净增长为 +6，核心语言层的正确性债务需引起维护者重视。整体判断：项目处于「快速交付 + 积极修复」的健康阶段，AI 辅助开发（devin-ai-integration）与机器人自动化（changesets、模板更新）已成为工程运转常态。

---

## 二、版本发布

### [@​openuidev/server@0.4.3](https://redirect.github.com/thesysdev/openui/pull/1630)（Patch）
- Dashboard 的 `create` 与 `edit` 操作改为将客户端 `appId` 以 `app_id` 字段发送（PR [#1630](https://redirect.github.com/thesysdev/openui/pull/1630)，commit `4d24e02`）。
- **迁移提示**：虽为 patch 版本，但涉及参数命名从 camelCase 对齐为 snake_case——直接消费该 HTTP 接口的集成方需核对字段名；通过官方 SDK 调用的用户基本无感。

### [@​openuidev/dashboard-library@1.0.1](https://redirect.github.com/thesysdev/openui/pull/1632)（Patch）
- 修复 1.0.0 在真实环境实测（opendashboards.com 与 openui.com 销售看板 demo）中暴露的布局与格式化问题，重点覆盖 **Table、KeyValues、Donut 卡片的适配**（PR [#1632](https://redirect.github.com/thesysdev/openui/pull/1632)，commit `0c067d8`）。
- 1.0.0 → 1.0.1 补丁间隔极短，反映该产品线处于密集打磨期。

**两个版本均为 patch，无破坏性变更，常规升级即可。**

---

## 三、项目进展

今日 11 条 PR 合并/关闭，推进情况如下：

**确定落地（随版本发布）**
- [#1631](https://redirect.github.com/thesysdev/openui/pull/1631)（changesets 自动发版）：合并后触发上述两个 npm 版本发布，发布流水线运转顺畅。
- [#1632](https://redirect.github.com/thesysdev/openui/pull/1632)：22 个文件（全部位于 `packages/libraries/dashboard/src`）的布局修复，直接产出 dashboard-library 1.0.1。

**核心正确性/安全修复**
- [#1579](https://redirect.github.com/thesysdev/openui/pull/1579)：lang-core 运行时修复——为解析器构建的元素添加品牌标记，使「元素形状」的 JSON 数据不再被 `evaluatePropValue` 误判为代码递归求值，属数据/代码混淆类的防御性加固。

**生态扩展（社区贡献，今日关闭）**
- [#1521](https://redirect.github.com/thesysdev/openui/pull/1521)：原生 **Swift SDK**（OpenUI Lang + SwiftUI，覆盖 iOS/macOS，关联 Issue [#393](https://redirect.github.com/thesysdev/openui/issues/393)）。
- [#1559](https://redirect.github.com/thesysdev/openui/pull/1559)：**ReactLynx 全栈 chat 示例**，基于官方 `@lynx-js/genui/openui` 运行时（取代 [#778](https://redirect.github.com/thesysdev/openui/pull/778)）。

**文档 / 增长 / CI（devin-ai 历史 PR 集中处理）**
[#1466](https://redirect.github.com/thesysdev/openui/pull/1466)（react-ui 从营销/文档页剥离，减重约 2.2 MB raw / 530 KB gz）、[#987](https://redirect.github.com/thesysdev/openui/pull/987)（文档化 `web_search`/`image_search` 工具）、[#1356](https://redirect.github.com/thesysdev/openui/pull/1356)（sitemap lastmod 修正）、[#1285](https://redirect.github.com/thesysdev/openui/pull/1285)（Wikidata JSON-LD）、[#1314](https://redirect.github.com/thesysdev/openui/pull/1314)（Crayon 遗留包弃用发布 workflow）、[#1134](https://redirect.github.com/thesysdev/openui/pull/1134)（UTM campaign 按 oss/cloud 拆分）。
> 注：以上多条 8–10 月创建的 devin PR 于同日集中关闭，模式上更接近一次批量合并/清理，确切落地状态建议以仓库 commit 记录为准。

**待合并（2 条）**：[#1629](https://redirect.github.com/thesysdev/openui/pull/1629)（bot 自动刷新模板/示例依赖）、[#1633](https://redirect.github.com/thesysdev/openui/pull/1633)（CI 强制社区 PR 关联 Issue，见下文）。

**小结**：单日 11 条 PR 处理 + 2 版本发布，交付速度可观；本日主题可概括为「1.0 之后的收尾打磨 + 文档与官网优化 + 贡献治理建设」。

---

## 四、社区热点

1. **[#1634](https://redirect.github.com/thesysdev/openui/issues/1634) —— 今日唯一有评论互动的 Issue（1 条）**：`OverviewCardItem` 将可选参数 `id` 置于必填 `top` 之前，而 OpenUI Lang 按位置映射参数，导致调用时 `top` 落入 `id` 槽位。这是组件 API 设计与语言位置参数机制之间的系统性摩擦，值得讨论。
2. **udsy19 的 lang-core 四连报（[#1636](https://redirect.github.com/thesysdev/openui/issues/1636)–[#1639](https://redirect.github.com/thesysdev/openui/issues/1639)）**：单日 4 条高质量报告，直接引用语言规范章节（§1.4、§9.2）并给出最小复现。背后诉求非常明确——**深度用户在生产级使用 OpenUI Lang，要求「解析→序列化→再解析」往返无损、流式解析与规范语义一致**。
3. **[#1635](https://redirect.github.com/thesysdev/openui/issues/1635)**：用户询问 dashboard API 能否对接自托管 Postgres，并直言「还是说这不在计划内，因为与商业模式冲突？」——OSS 与 Cloud 的边界是社区情绪敏感点，官方表态缺位。
4. **[#1633](https://redirect.github.com/thesysdev/openui/pull/1633)（社区成员 vishxrad）**：提案用 CI 自动关闭未关联 Issue 的社区 PR，呼应了维护者对贡献质量管控的需求，属于治理类热点。
5. **跨端生态贡献**：Swift（[#1521](https://redirect.github.com/thesysdev/openui/pull/1521)）、ReactLynx（[#1559](https://redirect.github.com/thesysdev/openui/pull/1559)）均来自社区，显示 OpenUI 的多端渲染能力吸引了原生 App 开发者群体。

---

## 五、Bug 与稳定性

今日新增 5 条 Bug（无一条有关联 fix PR）+ 1 条咨询，按严重程度排列：

| 优先级 | Issue | 问题 | 影响 | Fix PR |
|---|---|---|---|---|
| 🔴 高 | [#1637](https://redirect.github.com/thesysdev/openui/issues/1637) | `jsonToOpenUI` 丢弃必要括号，序列化后的表达式分组改变、**静默计算出不同结果**（规范 §9.2 示例即复现） | lang-core 序列化往返不保真，波及所有存档/传输场景 | ❌ 无 |
| 🔴 高 | [#1636](https://redirect.github.com/thesysdev/openui/issues/1636) | 行尾 `:` 的三元表达式**静默丢失 else 分支**（变为 `null`），违反规范 §1.4 规则 3 | 批量解析器、**流式解析器**、`mergeStatements` 三条路径同时受影响——直接影响 LLM 流式生成 UI 的正确性 | ❌ 无 |
| 🟠 中高 | [#1638](https://redirect.github.com/thesysdev/openui/issues/1638) | prompt 签名列出 `z.enum` 的 **keys 而非 values**，模型照 prompt 写 key 后被解析器拒绝 | 所有使用 TS enum / 对象 enum 的组件库，生成链路报错 | ❌ 无 |
| 🟡 中 | [#1634](https://redirect.github.com/thesysdev/openui/issues/1634) | `OverviewCardItem` 可选 `id` 前置于必填 `top`，位置参数映射错位 | dashboard-library 使用者/模型调用易踩坑 | ❌ 无 |
| 🟡 中低 | [#1639](https://redirect.github.com/thesysdev/openui/issues/1639) | `ScatterChart` 声明了 `xLabel`/`yLabel` 但实现忽略 | react-ui 图表坐标轴标注缺失 | ❌ 无 |

**共性风险**：#1636/#1637 属「静默错误」类（无报错、结果错误），是最危险的缺陷类型；且今日 6 条 Issue **零关闭**，lang-core 缺陷目前无人认领分诊。好的一面是 [#1579](https://redirect.github.com/thesysdev/openui/pull/1579) 的合并表明团队对「数据被误判为代码」类核心问题有响应意愿和能力。

---

## 六、功能请求与路线图信号

- **自托管数据库（[#1635](https://redirect.github.com/thesysdev/openui/issues/1635)）**：与 Cloud 商业模式存在天然张力；当前 server 0.4.3 正加强 dashboard 云 API，短期纳入概率低，但「BYO-Postgres」可作为观察点。建议官方明确回应，避免社区误解发酵。
- **Swift SDK（[#1521](https://redirect.github.com/thesysdev/openui/pull/1521)，关联 [#393](https://redirect.github.com/thesysdev/openui/issues/393)）**：若确认合入，路线图将正式覆盖 Apple 生态，是本日最具战略意义的候选变更。
- **Lynx 原生渲染（[#1559](https://redirect.github.com/thesysdev/openui/pull/1559)）**：官方 `@lynx-js/genui/openui` 绑定的出现表明原生 App 框架集成是既定扩展方向。
- **贡献治理（[#1633](https://redirect.github.com/thesysdev/openui/pull/1633)）**：与 bot 自动化（[#1629](https://redirect.github.com/thesysdev/openui/pull/1629)）共同指向「降低维护成本」的工程策略。
- **Dashboard 为当前主线**：1.0.0 → 1.0.1 的极速补丁 + server 端 API 对齐（[#1630](https://redirect.github.com/thesysdev/openui/pull/1630)）表明 dashboard-library 是投入最重的产品线；[#1634](https://redirect.github.com/thesysdev/openui/issues/1634) 的组件签名问题很可能在近期版本中被修正（预期为 API 签名重排）。

---

## 七、用户反馈摘要

- **深度用户在「啃硬骨头」**：udsy19 的报告覆盖序列化往返、流式解析、enum prompt 生成等核心链路并逐条对照规范章节，说明已有用户在生产级场景中严肃依赖 OpenUI Lang 的语义精确性——这是口碑资产，也是稳定性压力来源。
- **组件 API 人体工学**：djanito 期望内置组件遵循「必填参数在前」的通用惯例，位置参数机制放大了签名设计失误的代价。
- **部署自主性焦虑**：Prajwalg19 代表自托管用户群体，关心数据是否必须留在云端方案中。
- **生态广度需求真实存在**：Swift（zyfn）、Lynx（gaoachao）贡献者的出现说明社区希望 OpenUI 从 Web 走向更多原生平台。
- **正面信号**：团队自己 dogfood（opendashboards.com、销售看板 demo）并在数日内发布修复，质量闭环意识良好。

---

## 八、待处理积压

- 🔴 **lang-core 缺陷分诊缺位**：[#1636](https://redirect.github.com/thesysdev/openui/issues/1636)、[#1637](https://redirect.github.com/thesysdev/openui/issues/1637)、[#1638](https://redirect.github.com/thesysdev/openui/issues/1638)、[#1639](https://redirect.github.com/thesysdev/openui/issues/1639) 均 0 回应、0 fix PR，建议维护者优先认领两条「静默错误」类问题。
- 🟠 **[#1635](https://redirect.github.com/thesysdev/openui/issues/1635)**：0 回应且涉及商业模式表态，长时间沉默易被解读为「默认拒绝」。
- 🟡 **PR 待 review**：[#1629](https://redirect.github.com/thesysdev/openui/pull/1629)（bot，11-12 开启）、[#1633](https://redirect.github.com/thesysdev/openui/pull/1633)（治理提案，影响后续所有社区贡献流程，宜尽快定夺）。
- 🟡 **历史条目收尾**：[#393](https://redirect.github.com/thesysdev/openui/issues/393)（Swift SDK 需求，随 #1521 处理需确认闭环）、[#778](https://redirect.github.com/thesysdev/openui/pull/778)（已被 #1559 取代，可关闭）。
- 📊 **健康度提醒**：本周期 Issue 开闭比为 **6:0**，若 lang-core 缺陷持续积压，建议关注 Issue 闭环率与分诊响应时长两项指标。

---

*数据来源：GitHub（thesysdev/openui）过去 24 小时 Issue/PR/Release 更新记录。本报告基于公开仓库数据生成，个别 PR 的最终合并状态请以仓库 commit 记录为准。*

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render 项目日报

**日期**：2026-11-14 ｜ **仓库**：[vercel-labs/json-render](https://github.com/vercel-labs/json-render) ｜ **数据窗口**：过去 24 小时

---

## 1. 今日速览

项目今日处于**中等活跃度、以"文档质量清偿 + 生态扩张"为主线**的状态。过去 24 小时共 5 条动态：1 条新开 Issue（关闭 0）与 4 条 PR 更新（2 个在办、2 个进入关闭态），净增 1 个 open Issue，PR 审阅队列净变化为 0，**无新版本发布**。今日实时活跃的是新 Bug 报告 [#473](https://redirect.github.com/vercel-labs/json-render/issues/473)（React 包 README 与 Agent Skill 示例崩溃）与大型功能 PR [#470](https://redirect.github.com/vercel-labs/json-render/pull/470)（Swift/SwiftUI 渲染器）。贡献者结构健康（4 位不同作者驱动 5 条动态），但"根 README 已修、包级 README 与 SKILL.md 未同步"的文档一致性债务正在重复消耗社区信任，是当前最值得警惕的信号。

---

## 2. 项目进展

### 已关闭 PR（2 条，数据未区分"合并/拒绝"，建议核实终态）

**[#453](https://redirect.github.com/vercel-labs/json-render/pull/453) — fix: stop spec replay from mutating message parts**
- **问题**：`buildSpecFromParts`（react/vue/solid 三框架）与 devtools 的 `extractSpecFromParts` 按引用应用 patch 值，导致后续补丁直接写入 message parts 本体；在组件重挂载或 devtools 生成版本切换器中重建 spec 时，会重复应用索引与补丁。
- **意义**：消除一类**跨 react/vue/solid + devtools 的隐式状态污染缺陷**，是本周期最重要的运行时正确性修复。
- **节奏**：11-05 提交 → 11-13 关闭，约 8 天闭环，响应速度健康。

**[#344](https://redirect.github.com/vercel-labs/json-render/pull/344) — chore(release): prepare v0.21.0**
- **内容**：全部公开包升级至 0.21.0 并撰写 release highlights；补齐缺失的 devtools adapter skills；更新 web 文档；校验版本同步与 workspace 类型安全。
- **风险信号**：该 PR 自 09-18 挂起近 **2 个月**后于 11-13 关闭，但 release feed 中并无对应版本——**"PR 关闭但 Release 未产出"的发布链路断点需要维护者确认**（tag 是否已打、npm 是否已发）。

### 在办 PR（2 条）
- [#470](https://redirect.github.com/vercel-labs/json-render/pull/470) Swift 包（详见第 5 节）；[#472](https://redirect.github.com/vercel-labs/json-render/pull/472) shadcn 文档（详见第 5 节）。

**进展评估**：项目以"清偿旧债（#453、#344）+ 承接新方向（#470）"的方式小幅前进；真正的增量在于跨框架状态修复与平台扩张，整体向前推进了一小步但方向明确。

---

## 3. 社区热点

今日窗口内**无高评论量讨论串**（唯一新 Issue 评论数为 0，各条目 👍 均为 0，PR 评论数据缺失），热度按实质内容与更新时间排序：

1. **[#473](https://redirect.github.com/vercel-labs/json-render/issues/473)（今日新建）** — React 包 README 与 `skills/react/SKILL.md` 的 Quick Start 崩溃、嵌套 spec 示例错误、JSONUIProvider props 问题。这是继 [#443](https://redirect.github.com/vercel-labs/json-render/issues/443)、[#445](https://redirect.github.com/vercel-labs/json-render/issues/445)（修复根 `README.md` 裸 `<Renderer>` 示例）之后的**第三波同类报告**。核心诉求：**SKILL.md 会被 AI Agent 逐字执行，文档即代码**——其正确性优先级应高于普通文档。报告者已对照 `main`（f5c124…）逐一验证，质量较高。
2. **[#470](https://redirect.github.com/vercel-labs/json-render/pull/470)（今日有更新）** — 当前体量最大、战略意义最高的在办变更，今日更新表明评审互动仍在推进。

---

## 4. Bug 与稳定性

按严重程度排列：

| 优先级 | 问题 | 严重度 | 影响面 | Fix 状态 |
|---|---|---|---|---|
| 1 | [#453](https://redirect.github.com/vercel-labs/json-render/pull/453)：spec 重放按引用应用 patch，**改写 message parts 本体**；重挂载/devtools 切换生成版本时补丁被重复应用 | 高（数据正确性） | react / vue / solid + devtools | ✅ 修复 PR 已关闭（11-13），待随版本发布验证 |
| 2 | [#473](https://redirect.github.com/vercel-labs/json-render/issues/473)：裸 `<Renderer>` 用法仍存在于 `packages/react/README.md` 与 `skills/react/SKILL.md`；嵌套 spec 示例与 JSONUIProvider props 有误 | 中高（阻断新用户上手 & Agent 逐字执行出错） | React 包文档 + Agent Skill | ❌ **暂无 fix PR**（Issue 今日新开，0 回复） |
| 3 | [#472](https://redirect.github.com/vercel-labs/json-render/pull/472) 相关：Tailwind 4 应用中 shadcn 的 cards/inputs/buttons 无样式，需手动补一行 CSS | 中低（集成摩擦，非代码缺陷） | shadcn 集成用户 | 🔄 文档级 fix PR 在办 |

**稳定性判断**：今日无新增崩溃/回归类运行时报告；唯一的运行时级缺陷（#453）已有闭环动作。当前主要风险源是**文档与 Skill 的"隐性不稳定性"**——示例代码错误对 Agent 用户的破坏力等同于代码 bug。

---

## 5. 功能请求与路线图信号

- **平台扩张 → Apple 原生生态**：[#470](https://redirect.github.com/vercel-labs/json-render/pull/470) 新增 `swift/JSONRender`：平台无关的 `JSONRenderCore`（spec 解码、校验、表达式、actions、状态、JSONL 流式、渲染树）+ `JSONRenderSwiftUI` 渲染器 + 原生组件目录（cards、metrics、badges、alerts、lists、progress、switches、Swift Charts）。作者 ctate 同时是 v0.21.0 发布 PR 的作者，**大概率为核心维护者**——这反映的是官方路线图而非社区单方面愿望，**纳入下一里程碑的概率高**。
- **下一版本内容信号**：若 #344（版本 bump + devtools adapter skills + web 文档）确为合并，则与 #453（状态污染修复）、#472（shadcn/Tailwind 4 文档）共同构成 v0.21.x 的候选变更集。
- **Agent Skill 成为一等发布物**：仓库内置 `skills/react/SKILL.md` 等技能文件，#473 明确指出 "agents follow it as written"，#344 又在补齐 devtools adapter skills——可推断项目正将 **AI Agent 可用性纳入发布检查项**。建议后续把 skills 文件纳入 docs 测试夹具（#472 已为 API 页面建立此模式，可复用）。
- **集成摩擦治理**：#472 属于降低 Tailwind 4 + shadcn 上手成本的低成本改进，方向上服务于"开箱即用"的体验目标。

---

## 6. 用户反馈摘要

> 基于今日 Issue/PR 正文提炼（窗口内 Issue 评论数为 0，PR 评论数据缺失，样本有限，结论需后续验证）。

- **上手即崩溃的挫败感**：用户按 `packages/react/README.md` 的 Quick Start 操作会直接报错——根 README 的问题在 #443/#445 修复后**未同步**到包级文档与 Skill 文件（[#473](https://redirect.github.com/vercel-labs/json-render/issues/473)）。
- **Agent 用户是独特且关键的反馈群体**：`SKILL.md` 被 Agent 逐字遵循，文档错误会直接转化为 Agent 行为错误——这是 json-render 区别于普通 UI 库的用户画像，也是文档债务被反复报告的根本原因。
- **隐式状态 bug 的调试痛苦**：#453 背后的真实场景是"重挂载组件或切换 devtools 生成版本时补丁被重复应用"，这类非确定性表现对 devtools 重度用户干扰明显。
- **集成体验的"最后一公里"**：shadcn + Tailwind 4 用户反馈组件无样式，直到发现需手动添加的 CSS 行（[#472](https://redirect.github.com/vercel-labs/json-render/pull/472) 修复中）。

---

## 7. 待处理积压

> 基于 24 小时窗口可见条目；窗口内暂无"长期零响应"的条目（#470 今日仍在更新、#472/#473 均为新近提交），以下为需维护者关注的近期事项：

- **[#473](https://redirect.github.com/vercel-labs/json-render/issues/473)**（今日新开，0 回复）：建议尽快分派。可参照 #443/#445 的修复模式出 fix PR，并**顺带审查其余 `skills/**/SKILL.md` 是否存在同类失修**，避免第四波重复报告。
- **[#470](https://redirect.github.com/vercel-labs/json-render/pull/470)**（11-11 开启，在办 3 天，今日活跃）：体量大（核心库 + 渲染器 + 组件目录），将持续占用评审带宽，建议设定分阶段评审里程碑（如 core → renderer → catalog）。
- **[#472](https://redirect.github.com/vercel-labs/json-render/pull/472)**（11-13 开启）：小体量纯文档 PR、含测试夹具更新，风险低，属**快速合并候选**。
- **发布链路核查**：#344 已关闭但无对应 Release 记录，建议核对 tag/GitHub Release/npm 发布状态，避免社区对版本号认知混乱。

---

### 健康度速记

| 维度 | 评估 |
|---|---|
| 活跃度 | 中等（24h 内 5 条动态，4 位贡献者） |
| 缺陷响应 | 良好（#453 约 8 天闭环；#473 待响应） |
| 发布节奏 | ⚠️ 待观察（v0.21.0 准备 PR 挂起 2 个月，Release 产出待确认） |
| 主要风险 | 文档/Skill 一致性债务（3/5 条动态涉及文档）、发布流程可见性 |

*数据说明：本报告基于过去 24 小时 GitHub 动态快照；PR 评论数缺失，"已关闭"条目未区分合并/拒绝，相关表述已作保守处理。*

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报

**日期：** 2026-11-14 | **数据窗口：** 过去 24 小时

---

## 1. 今日速览

CopilotKit 今日发布 **v1.88.0**，核心亮点是通过 Intelligence 实现服务端 Agent 运行能力（无客户端附着），标志着项目从纯前端集成框架向完整 Agent 平台的持续演进。过去 24 小时共 **38 条 PR 更新（18 条已合并/关闭，20 条待合并）**、**4 条 Issue 更新（3 条关闭）**，问题关闭率 75%，且 #8375 从创建到关闭仅用约 1 天，维护者响应速度优秀。今日工作重心集中在三条主线：**HITL（human-in-the-loop）中断语义的跨框架统一**（React/Angular/Vue 三套 PR 并行推进）、**Intelligence 运行时可靠性**（channel 重连、runner 持久性）、以及**文档体系大规模重构**。整体项目健康度：**高**。

---

## 2. 版本发布

### v1.88.0（2026-11-13 发布，[Release PR #8397](https://redirect.github.com/CopilotKit/CopilotKit/pull/8397)）

**新增能力：**
- **服务端 Agent 运行**：新增 `runAgentInThread` 导出（来自 [PR #8392](https://redirect.github.com/CopilotKit/CopilotKit/pull/8392)），可在 Intelligence Thread 中从服务端发起 Agent 运行，无需客户端连接。这为定时任务、Agent 间 hand-off、等待人工答复后恢复运行等场景打下架构基础，运行状态完全持久化在 Thread 中。
- **更丰富的 Learning capture**：增强了用户行为/偏好学习能力。

**修复：**
- 聊天渲染修复：虚拟化聊天行改用 row key 而非 index 作为键（[PR #8188](https://redirect.github.com/CopilotKit/CopilotKit/pull/8188)，修复行高估算错乱问题）。
- 工具调用处理修复：`useAgent` header 依赖改为基于 header source generation 而非序列化快照（[PR #8235](https://redirect.github.com/CopilotKit/CopilotKit/pull/8235)，关闭 [#7512](https://redirect.github.com/CopilotKit/CopilotKit/issues/7512)）。

**⚠️ 破坏性变更（需重点迁移）：**
- **Thread 命名行为变更**：旧版 `generateThreadNames`（默认开启）会直接运行应用自身的 Agent 来生成标题，导致 LangGraph Agent 连同其服务端工具、系统提示词一起执行"标题任务"——可能重复执行用户任务、调用生产工具甚至造成数据写入（详见 [#8375](https://redirect.github.com/CopilotKit/CopilotKit/issues/8375)）。升级用户应验证 thread 命名不再触发完整 Agent 运行，并检查是否有代码依赖旧的隐式行为。

---

## 3. 项目进展

今日 18 条 PR 合并/关闭，以下为关键进展：

| PR | 内容 | 意义 |
|---|---|---|
| [#8392](https://redirect.github.com/CopilotKit/CopilotKit/pull/8392) | 导出 `runAgentInThread`，支持无客户端的服务端运行 | **架构级能力**：解锁定时运行、Agent hand-off、断点恢复三大场景，是 v1.88.0 核心 |
| [#8394](https://redirect.github.com/CopilotKit/CopilotKit/pull/8394) | Intelligence channel 重连从确认游标恢复，而非从头重放 | 修复 phoenix.js 重连风暴，显著提升自托管部署稳定性 |
| [#8188](https://redirect.github.com/CopilotKit/CopilotKit/pull/8188) | 虚拟化聊天按 row key 而非 index 键控 | 修复长对话滚动渲染错乱，从 #7826 拆分独立合并 |
| [#8235](https://redirect.github.com/CopilotKit/CopilotKit/pull/8235) | `useAgent` header 工作改为基于 source generation | 修复 token 轮换后 agent memo 无谓重跑，附回归测试 |
| [#8018](https://redirect.github.com/CopilotKit/CopilotKit/pull/8018) | CI：showcase 自动审批全量文件校验 + 恢复发布后冒烟测试 | 工程质量护栏修复 |
| [#8396](https://redirect.github.com/CopilotKit/CopilotKit/pull/8396) | 文档大规模重构：`/reference` 独立总览页、sidebar 重组、playground 简化 | 文档信息架构升级 |
| [#8395](https://redirect.github.com/CopilotKit/CopilotKit/pull/8395) | README 中个人 Agent 产品更名为 **OpenFuse**（原 OpenMuse） | 产品品牌信号（见第 6 节） |

**进展评估：** 服务端运行 + 重连恢复 + 渲染修复三线并进，v1.88.0 是一次"平台能力 + 稳定性"双轮驱动的版本，项目向生产可用性明显迈进。

---

## 4. 社区热点

1. **[#8375](https://redirect.github.com/CopilotKit/CopilotKit/issues/8375)（已关闭）— Thread 命名触发完整 Agent 运行**：今日最受关注的问题。默认开启的 `generateThreadNames` 会让 LangGraph Agent 带着服务端工具去"起标题"，实际却重复执行用户任务，存在**数据误写风险**。该 Issue 由 BenTaylorDev 于 11-12 提出、11-13 即关闭，并直接催生 v1.88.0 的破坏性变更——体现了维护者对安全/数据完整性问题的快速响应。

2. **HITL 中断语义 PR 三部曲（贡献者 HoussemDjeghri）**：[#8267](https://redirect.github.com/CopilotKit/CopilotKit/pull/8267)（React）、[#8275](https://redirect.github.com/CopilotKit/CopilotKit/pull/8275)（Angular）、[#8277](https://redirect.github.com/CopilotKit/CopilotKit/pull/8277)（Vue）同步推进，统一解决"用户按 Stop 后，HITL 卡片的 `result` 收到错误文本、被渲染器当作用户答案显示"的语义缺陷。均为 breaking change，反映社区对**多框架行为一致性**的强烈诉求。

3. **[#7811](https://redirect.github.com/CopilotKit/CopilotKit/pull/7811)（长线特性 PR）— MCP Apps 的 `ui/update-model-context`**：允许 widget（选择器、过滤器、购物车）上报状态并随下次运行携带，不污染聊天流。三框架支持 + 默认关闭的 opt-in 设计，讨论已持续一个月，是 MCP Apps 方向的标杆性 PR。

> 📌 观察：多位贡献者（HoussemDjeghri、yuxuanx-rain、tomwangcn、HrushiYadav 等）的 PR 与 Issue 中出现 "reserved for students"、OSS-XXX 编号等标记，显示项目可能运行中的**学生/研究员贡献计划**正在系统性地产出高质量修复。

---

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#8375](https://redirect.github.com/CopilotKit/CopilotKit/issues/8375) Thread 命名复用应用 Agent，LangGraph 可能循环执行并**写入数据** | ✅ 已随 v1.88.0 修复（含破坏性变更） |
| 🟠 中高 | [#8009](https://redirect.github.com/CopilotKit/CopilotKit/issues/8009) 前端工具运行中组件卸载后 tool call 永久挂起、**线程无法继续** | Issue 已关闭；相关中断语义修复 [#8267](https://redirect.github.com/CopilotKit/CopilotKit/pull/8267)/[#8275](https://redirect.github.com/CopilotKit/CopilotKit/pull/8275)/[#8277](https://redirect.github.com/CopilotKit/CopilotKit/pull/8277) 仍在待合并 |
| 🟠 中高 | [#7826](https://redirect.github.com/CopilotKit/CopilotKit/pull/7826) 自托管 Intelligence + LangGraph 出现 "Runner connection dropped"，含多缺陷修复 | 🔧 修复 PR 开放中（已拆分 #8188 先行合并） |
| 🟡 中 | [#7512](https://redirect.github.com/CopilotKit/CopilotKit/issues/7512) token 轮换触发 `useAgent` header effect 重跑 | ✅ 已由 [#8235](https://redirect.github.com/CopilotKit/CopilotKit/pull/8235) 修复 |
| 🟡 中 | [#8256](https://redirect.github.com/CopilotKit/CopilotKit/pull/8256) 虚拟化聊天在 prepend 历史消息时丢失阅读位置 | 🔧 修复 PR 开放中 |
| 🟡 中 | [#8150](https://redirect.github.com/CopilotKit/CopilotKit/pull/8150) 宿主 `errorBoundary.fallback` 未覆盖全部 Generative UI 节点失败路径（4 种中 3 种仍显示默认红框） | 🔧 修复 PR 开放中 |
| 🟢 低 | [#8011](https://redirect.github.com/CopilotKit/CopilotKit/pull/8011) 带凭据的跨域请求 CORS 预检失败（`Access-Control-Allow-Headers: *` 通配符不适用于 credentialed 请求） | 🔧 修复 PR 开放中 |

**稳定性趋势：** 今日 4 个 Issue 中 3 个当日关闭，核心 bug 均有对应 fix PR 在途，无发现新崩溃/回归类报告。

---

## 6. 功能请求与路线图信号

结合今日动态，可识别以下路线图方向：

1. **Intelligence 服务端运行时（已落地）**：[#8392](https://redirect.github.com/CopilotKit/CopilotKit/pull/8392) 的 `runAgentInThread` + Learning capture 增强，预示**定时/后台 Agent 运行、多 Agent hand-off** 将是近期主线。
2. **MCP Apps 状态同步**：[#7811](https://redirect.github.com/CopilotKit/CopilotKit/pull/7811) 的 `ui/update-model-context` 若合并，将实现 UI widget 状态与模型上下文的无感同步，是 MCP Apps 生态的关键拼图。
3. **Agent 身份模型细化**：[#7868](https://redirect.github.com/CopilotKit/CopilotKit/pull/7868)（分离 Agent ID 与显示名）开放近一个月，指向多 Agent 管理场景的 UX 改进，有望进入下个 minor 版本。
4. **产品品牌信号**：[#8395](https://redirect.github.com/CopilotKit/CopilotKit/pull/8395) 确认个人 Agent 产品由 **OpenMuse 更名为 OpenFuse**，README/apps 表已同步，值得关注其独立产品化动向。
5. **文档即产品**：[#8396](https://redirect.github.com/CopilotKit/CopilotKit/pull/8396) 的 reference 信息架构重构 + [#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309) 补全 Python quickstart（含 `authorization_scope_resolver` fail-closed 示例），显示对**多语言开发者入门与安全默认值**的投入。

---

## 7. 用户反馈摘要

从今日 Issue/PR 讨论中提炼的真实痛点：

- **HITL 工作流脆弱性是最高频痛点**：用户（如 HoussemDjeghri）反复报告中断场景下的语义混乱——"Stop 之后卡片显示的错误文本看起来像用户的答案"、组件卸载导致线程死锁。真实使用场景是**审批流/表单确认类应用**，用户对中断后状态的正确性极其敏感。
- **自托管生产环境的运维焦虑**："Runner connection dropped"（#7826）反映自托管 Intelligence 用户在生产 LangGraph 部署中遭遇连接中断且难以排查，诉求是**企业级可靠性**。
- **数据安全隐忧**：#8375 中用户担心"起个标题"这样的后台操作竟能触发带写权限的完整 Agent 运行——反映社区对**最小权限原则**的期待，v1.88.0 的破坏性变更是正面回应。
- **长对话体验**：虚拟化聊天丢位置（#8256）、排队消息不显示（[#8266](https://redirect.github.com/CopilotKit/CopilotKit/pull/8266)）说明重度用户已在生产环境中处理**大规模会话历史**。
- **入门摩擦**：Python quickstart 缺依赖、绑定配置不完整（#8309），提示非 JS 技术栈用户的 onboarding 仍有短板。
- **满意点**：Issue 响应速度（当日关闭）、修复附回归测试、大 PR 主动拆分以便评审（#7826 → #8188），社区对工程流程评价积极。

---

## 8. 待处理积压

以下长期开放事项建议维护者关注：

| 事项 | 开放时长 | 说明 |
|---|---|---|
| [#6936](https://redirect.github.com/CopilotKit/CopilotKit/issues/6936) | **~2 个月**（09-07 起） | showcase drift：dynamic-A2UI demo 三套集成使用不同 system prompt，标注 reserved for students，近期有活动但仍未分配 |
| [#7811](https://redirect.github.com/CopilotKit/CopilotKit/pull/7811) | ~1 个月（10-14 起） | MCP Apps `ui/update-model-context`，跨三框架的大特性 PR，建议明确合并时间表 |
| [#7826](https://redirect.github.com/CopilotKit/CopilotKit/pull/7826) | ~1 个月（10-15 起） | Intelligence runner 持久性系列修复，自托管用户痛点，剩余部分待评审 |
| [#7868](https://redirect.github.com/CopilotKit/CopilotKit/pull/7868) | ~1 个月（10-19 起） | Agent ID/显示名分离，特性 PR 待推进 |
| [#8011](https://redirect.github.com/CopilotKit/CopilotKit/pull/8011) | ~3 周（10-26 起） | CORS credentialed 预检修复，影响跨域生产部署 |
| [#8150](https://redirect.github.com/CopilotKit/CopilotKit/pull/8150) | ~2 周（11-02 起） | errorBoundary fallback 覆盖不全，关闭 #8145 |

**积压健康度评估：** 最老开放事项约 2 个月，无超过一个季度的僵尸 Issue；20 条待合并 PR 中约半数为 11 月新提交，流水线周转正常。主要风险在于 **HITL 三框架 breaking change PR 组**（#8267/#8275/#8277）与 #7811、#7826 等大块头 PR 的评审带宽，建议优先排期以避免破坏性变更窗口堆积。

---

*数据来源：CopilotKit GitHub 仓库（github.com/CopilotKit/CopilotKit）过去 24 小时公开活动。本报告基于截止 2026-11-14 的快照数据生成。*

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*