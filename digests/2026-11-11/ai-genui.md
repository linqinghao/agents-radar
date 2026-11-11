# 生成式 UI 生态日报 2026-11-11

> Issues: 25 | PRs: 123 | 覆盖项目: 4 个 | 生成时间: 2026-11-11 05:18 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告

**数据窗口：** 2026-11-10 ~ 2026-11-11（UTC，24 小时快照）
**覆盖项目：** a2ui / OpenUI / json-render / CopilotKit

---

## 1. 生态全景

当前生成式 UI 生态正集体跨越“可用”与“可依赖”的分界线：头部项目 a2ui 与 CopilotKit 同期进入大版本收口期（v1.0 / 2.0.0），重注投入协议语义收紧、破坏性变更管理与迁移工具链，标志着赛道从“框架百花齐放”走向“协议标准化”。技术焦点同步下沉——agent 输出格式的最小化（a2ui decision 格式让 agent 只输出紧凑 JSON、布局交给客户端规划器）与校验的前置化（静态 catalog 校验、fail-loudly 契约）成为新的竞争高地。应用面上，多渠道分发（CopilotKit 的 Discord/Teams/WhatsApp）与数据密集场景（OpenUI 的 Dashboard 全链路闭环）显示生成式 UI 正向企业 IM 与 BI 场景纵深渗透。与此同时，安全合规首次成为明确的采用门槛（a2ui 的 Zod CVE、CopilotKit 的供应链钉版），是生态进入企业采购视野的信号。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PRs 更新 | 待合并 PR | 版本发布 | 驱动主体 |
|---|---|---|---|---|---|
| **CopilotKit** | 1 | **60**（29 待合并 / 31 终态） | 29 | 0（2.0.0 筹备中） | 核心团队（内部冲刺） |
| **a2ui** | **23**（15 活跃 / 8 关闭） | 50（35 待合并 / 15 终态） | 35 | **5**（含 3 个 Breaking） | 维护者 + 社区双轮 |
| **OpenUI** | 1 | 11（6 待合并 / 5 终态） | 6 | 2（补丁版本） | 核心团队 + AI 机器人 |
| **json-render** | 0 | 2（2 待合并 / 0 终态） | 2 | 0 | 外部社区贡献者 |

**两点补充观察：**
- **吞吐最高 ≠ 生态最健康**：CopilotKit PR 量第一但外部输入几乎为零，属“冲刺静默期”典型形态；a2ui 是唯一 Issues/PR 双高、维护-社区双向互动均衡的项目。
- **四者不在同一竞争量级**（以 PR 编号粗估存量）：CopilotKit（#8000+）> a2ui（#4000+）> OpenUI（#1600+）> json-render（#400+），横向对比应更多看趋势与定位而非绝对数值。

---

## 3. 共同关注的功能方向

**① Schema 校验严格化与前置化**
- a2ui：v0.6.0 / v0.11.0 将 payload 校验改为静态对照 catalog（拒绝 `agentOnly` 误用、无效 `callRendererFunction`），社区在 #4162 明确要求 fail-loudly 参数契约；
- json-render：#468 修复多组件 catalog 下 `propsOf` 校验静默失效（#378 / #467 被两位用户独立报告）。
- **共同诉求：** 错误在开发期拦截，而非运行时才暴露。

**② 大版本迁移工具链**
- CopilotKit：#8315 迁移 codemod 从“标 TODO”升级为真实改写 v1 hooks/endpoints，并在 93 个官方示例上做输出类型检查；
- a2ui：#4136 将 11 个外部 genui 项目迁移经验沉淀为可复用 skill，#4047 按计划完成全 SDK 重发。
- **共同诉求：** 两大项目均把迁移支持当作一等工程问题，降低破坏性变更的采用摩擦。

**③ 渲染产物的细粒度控制（生产打磨期特征）**
- CopilotKit #8306：Teams Adaptive Card 图片尺寸透传；
- json-render #469：Link 组件 `target="_blank"` 支持；
- OpenUI #1602：图表遵循应用主题调色板；
- a2ui #4166：AccessibilityAttributes 提升为一等响应式属性。
- **共同诉求：** 四个项目同日出现“高级用户在生产环境要求渲染细节控制权”的反馈，是生态进入深水区的典型信号。

**④ Agent 输出与渲染架构的中间层演进**
- a2ui：decision 推理格式六连发 PR（#4153–#4158），“agent 输出紧凑 decision JSON + 客户端规划器负责选组件与布局”；
- CopilotKit：AG-UI 协议生态持续扩张（mcp-apps-middleware、langgraph、omnara 适配器）。
- **共同诉求：** 在 LLM 输出与最终 UI 之间建立更薄、更可控的中间层。

---

## 4. 差异化定位分析

| 维度 | a2ui | CopilotKit | OpenUI | json-render |
|---|---|---|---|---|
| **项目定位** | 跨语言协议级基础设施 | 全栈 Agent UI 框架 | AI 原生组件库 + 云协同 | 轻量 JSON→UI 渲染库 |
| **技术路线** | Catalog 组件目录 + `@` 信封键协议；声明式为主 + ReactApp 逃生舱（#4165）；客户端规划器接管布局 | AG-UI 协议 + 多渠道适配层；hooks 体系（2.0 重写） | React 组件库 + OpenUI Cloud artifact 版本管理 | zod schema 驱动 + shadcn 双端（React/Svelte） |
| **语言栈** | TS / Python / Dart / Swift 四语言对齐 | TS 为主 | TS | TS |
| **目标用户** | 多语言企业团队、genui 迁移用户 | 生产级 AI 应用开发者（含 IM 渠道场景） | 需要数据看板能力的 AI 应用开发者 | 追求类型安全的轻量集成场景 |
| **当前阶段** | v1.0 收口期 | 2.0.0 筹备期 | 0.18.x 高频补丁期 | 平稳维护期 |

**定位本质：** a2ui 押注**协议标准化**（四语言一致性、A2A 互操作、agentOnly 函数门控），目标是生成式 UI 的“协议层”；CopilotKit 押注**广度**（渠道、生态适配器、11 框架文档统一），目标是 AI 应用的统一前端层；OpenUI 押注**单场景纵深**（Dashboard 从核心修复到示例、文档、在线演示四层同步落地，commit→npm 仅 2 天）；json-render 押注**极简**（“schema 进、UI 出”最小闭环，借力 shadcn 生态）。

---

## 5. 社区热度与成熟度

**社区互动热度排序：a2ui > CopilotKit ≈ OpenUI > json-render**

- **a2ui**：互动最充分——23 条 Issue 更新、bug-bash 期间 5 评论级讨论（#3423）、单日闭环 4 个 P1；但社区最大抱怨同样来自它：v0.8/v0.9/v1.0 三线并存的版本碎片化（#3423 导入路径、#3942 pub.dev 冲突），且 Zod CVE（#4147）与流式数据损坏（#4132）两个高危项**尚无 fix PR**，是高强度冲刺下的风险敞口。
- **CopilotKit**：规模与吞吐第一，但本期社区输入近零（1 Issue），呈“核心冲刺、社区观望”形态；生产事故 24h 内完成定位→修复 PR（#8326 OOM），**运维成熟度最高**。
- **OpenUI**：社区安静但已有生产深度使用信号（#1602 用户在生产中定制图表主题、#1600 暴露文档站 28 天 958GB 流量），`dashboard-library` 尚处 0.0.2 早期。
- **json-render**：活跃度垫底但贡献质量高——外部贡献者直接提 PR 修复核心校验缺陷；短板是维护响应：Issue #378 存量积压约 90 个 PR 编号周期，今日 0 合并动作。

**迭代速度判断：** 快速迭代梯队为 OpenUI（2 天发布链路）与 a2ui（单日 5 发版 + 4 P1 闭环）、CopilotKit（60 PR/日冲刺）；**成熟度谱系**为 CopilotKit（事故响应机制化）> a2ui（工程纪律强、发布按计划落地）> OpenUI（产品打磨期）> json-render（贡献生态健康、维护带宽存疑）。

---

## 6. 值得关注的趋势信号

**① 生态进入“协议收口期”，选型看迁移承诺而非功能列表。** a2ui v1.0 与 CopilotKit 2.0.0 同期冲刺且均重投迁移工具（codemod / 迁移 skill）。开发者接入任何项目都应预留迁移成本预算，并把“作者如何处理破坏性变更”作为核心选型指标。

**② 校验从运行时全面前移到开发期。** a2ui 静态 catalog 校验、json-render 按组件粒度校验修复、社区 fail-loudly 诉求（a2ui #4162）共同指向：AI 生成 UI 的调试成本远高于手写代码，开发期拦截是降本关键。自研方案应优先建设 schema 校验层。

**③ Agent 输出“瘦身”，确定性代码接管可计算部分。** a2ui decision 格式（agent 只出紧凑 JSON，布局交给客户端规划器）与社区对“客户端函数编译进 `preact_signals computed()`、消除 LLM 往返”的赞誉，代表明确的降本方向：减少 token 消耗与往返延迟。配合 ReactApp 逃生舱（#4165），“声明式为主 + 动态逃生舱为辅”正成为务实架构共识。

**④ 安全与供应链成为企业采用硬门槛。** a2ui 的 Zod CVE 被报告者直称为“企业合规采用的硬门槛”（#4147），CopilotKit 因 middleware 自动续演重放风险紧急钉版（#8319）。库作者需建立依赖 CVE 快速升级通道；企业选型需将供应链策略纳入审计清单。

**⑤ 渠道分发与数据可视化成为新增量战场。** CopilotKit 的 IM 渠道能力（用户已深入到 Adaptive Card 渲染细节）与 OpenUI 的 Dashboard 闭环（含图表主题化诉求）显示生成式 UI 正走出 Web 聊天框。评估框架时，渠道适配层与数据可视化能力正成为新的差异化要素。

**⑥ 生产竞争进入长尾细节。** 四项目的生产级问题高度集中于并发/流式/边界场景（OpenUI 多线程编辑同步反复修复、a2ui 流式 `updateDataModel` 损坏与 null 参数静默绕过校验、CopilotKit 三渠道输入错路由）；同时无障碍（a2ui #4166/#3411）、文档债（CopilotKit 一次性清除约 240 个重复页面）、带宽成本（OpenUI 文档站占 Vercel 传输 85%）等非功能维度开始进入路线图。**生成式 UI 的工程质量差距，将越来越多体现在这些长尾维度上。**

---

> **数据说明：** 以上均来自各项目 24 小时窗口的公开动态，单日快照存在噪声（尤其对 json-render 这类低频仓库），活跃度与成熟度结论建议结合多周趋势交叉验证。

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目日报 · 2026-11-11

---

## 1. 今日速览

a2ui 今日处于**高强度冲刺状态**：24 小时内 PR 更新 50 条（35 条待合并、15 条已合并/关闭），Issue 更新 23 条（15 条活跃、8 条关闭），并按计划（[#4047](https://redirect.github.com/a2ui-project/a2ui/issues/4047)）完成 **5 个 SDK 版本发布**。当日主线非常清晰：① v1.0 协议收紧——`@` 前缀信封键与 metadata 语义门控（[#4037](https://redirect.github.com/a2ui-project/a2ui/pull/4037) → [#4044](https://redirect.github.com/a2ui-project/a2ui/pull/4044)）；② v0.8 适配器全面退役（[#2952](https://redirect.github.com/a2ui-project/a2ui/issues/2952)、[#4109](https://redirect.github.com/a2ui-project/a2ui/issues/4109)、[#4160](https://redirect.github.com/a2ui-project/a2ui/pull/4160)、[#4142](https://redirect.github.com/a2ui-project/a2ui/pull/4142)）；③ 全新 **decision 推理格式**技术栈六连发 PR（gspencergoog）。健康度评估：**4 个 P1 问题当日闭环**、发布按时落地，维护响应迅速；但安全漏洞 [#4147](https://redirect.github.com/a2ui-project/a2ui/issues/4147)（Zod CVE）与流式数据损坏 [#4132](https://redirect.github.com/a2ui-project/a2ui/issues/4132) 尚无 fix PR，需提级关注。

---

## 2. 版本发布（5 个）

| 包 | 版本 | 类型 | 核心变更 |
|---|---|---|---|
| [cli](https://github.com/a2ui-project/a2ui/releases) | v0.3.0 | ⚠️ Breaking | 依赖 `a2ui_core ^0.7.0`（CLI 公共 API 暴露 core 类型）；**新增 `a2ui lint`**（`LintCommand`/`lintCatalog`/`CatalogLintFinding`/`LintSeverity`），按确定性协议规则校验 catalog JSON schema，输出带 JSON Pointer 定位 |
| [python/a2ui-core](https://github.com/a2ui-project/a2ui) | v0.6.0 | ⚠️ Breaking | v1_0 组件验证（`PayloadValidator.validate_component` 及跨 catalog 调用的 `MessageProcessor`）将**拒绝在 property binding / check / action 中调用 `allowedCallers=agentOnly` 的函数** |
| [python/a2ui-agent-sdk](https://github.com/a2ui-project/a2ui) | v0.11.0 | ⚠️ Breaking | `validate_payload` 与 `RendererState.apply` 改为**静态对照 catalog 校验** `callRendererFunction`（拒绝不存在的 surface、未激活 catalog、会被渲染器拒绝的函数），而非实际执行 |
| [python/a2ui-adk](https://github.com/a2ui-project/a2ui) | v0.3.0 | 变更 | `a2ui_rpc_callback` 签名调整：接收 `renderer_calls`（如 `A2uiRendererCallsStore.get`），`catalogs` 变为可选 |
| [python/a2ui-a2a](https://github.com/a2ui-project/a2ui) | v0.3.0 | 新增 | 新增 `get_a2ui_messages` / `create_a2ui_parts`，支持在 A2A 消息的 A2UI parts 中提取与封装 A2UI 消息 |

**迁移注意事项：**
- CLI 用户必须同步升级 `a2ui_core` 至 `^0.7.0`，否则依赖解析失败；
- Python 用户升级后，agent 生成的 payload 中若存在 `agentOnly` 函数误用或无效 `callRendererFunction`，将**直接校验失败**（此前是运行时才暴露），建议先在测试环境跑全量 payload 验证；
- 本批破坏性变更与 Dart 侧发版 PR [#4152](https://redirect.github.com/a2ui-project/a2ui/pull/4152)（`a2ui_core` 0.6.0→0.7.0，含 v0.9 metadata 修复 #4140、`MessageProcessor.unifiedOutbound` #4079）语义对齐，属于 v1.0 前多语言协议一致性收紧的统一行动。

---

## 3. 项目进展

**当日合并/关闭的关键 PR：**

- **[#3938](https://redirect.github.com/a2ui-project/a2ui/pull/3938)**（fix/web_core）：重构 `extractRefFields` / `buildComponentRefMap`，修复 NodeResolver 对**复合、开放、未注解 schema** 的子组件引用与绑定解析——闭环 P1 问题 [#3783](https://redirect.github.com/a2ui-project/a2ui/issues/3783)（动态 schema 空 shape 无法解析 children），是 web_core 渲染正确性的重要修复。
- **[#4037](https://redirect.github.com/a2ui-project/a2ui/pull/4037)**（feat/core）：将组件 `metadata`/`catalogId` 信封处理**门控到 v1.0+ surface**，pre-1.0 恢复为普通属性；同时双读 `@` 前缀信封 mixin——一次性闭环 [#4012](https://redirect.github.com/a2ui-project/a2ui/issues/4012) 与 [#4137](https://redirect.github.com/a2ui-project/a2ui/issues/4137)（v0.9 surface 上自定义组件 `metadata` 属性被剥离/误校验，影响 TS/Dart/Swift 三端），并为全面切换 [#4044](https://redirect.github.com/a2ui-project/a2ui/pull/4044) 铺路。
- **[#4136](https://redirect.github.com/a2ui-project/a2ui/pull/4136)**（docs/skills）：将 11 个外部 genui 依赖项目（genui 0.6–0.10）的迁移经验沉淀进迁移 skill——关闭 P1 迁移任务 [#3297](https://redirect.github.com/a2ui-project/a2ui/issues/3297)。
- **[#4152](https://redirect.github.com/a2ui-project/a2ui/pull/4152)**（release/dart）：Dart 四包发版准备（`a2ui_core` 0.7.0 / `a2ui_agent` 0.3.0 / `a2ui_flutter` 0.3.0 / `a2ui_cli` 0.3.0）。
- **[#4164](https://redirect.github.com/a2ui-project/a2ui/pull/4164)**（docs/site）：以 Google Maps Agentic UI toolkit 作为 catalog 官方示例。

**整体判断：** 单日闭环 4 个 P1（[#3783](https://redirect.github.com/a2ui-project/a2ui/issues/3783)、[#4012](https://redirect.github.com/a2ui-project/a2ui/issues/4012)、[#4137](https://redirect.github.com/a2ui-project/a2ui/issues/4137)、[#3297](https://redirect.github.com/a2ui-project/a2ui/issues/3297)）+ 2 个 P1 任务（[#4047](https://redirect.github.com/a2ui-project/a2ui/issues/4047) 全 SDK 重发、[#4048](https://redirect.github.com/a2ui-project/a2ui/issues/4048) 官网切换），v1.0 的 schema/信封语义在 TS/Python/Dart/Swift 四语言间的对齐明显提速，项目正处在 **v1.0 发布前的收口期**。

---

## 4. 社区热点

| Issue/PR | 热度 | 讨论焦点 |
|---|---|---|
| [#3423](https://redirect.github.com/a2ui-project/a2ui/issues/3423) | 5 评论（最活跃） | `@a2ui/react@0.14.0` 硬编码 `@a2ui/web_core/v0_9/*` 导入，v1.0 surface 上 `yarn typecheck` 失败——`package.json` 导出未跟上 web_core 0.14 的 `./v1_0`。标签含 v1-bug-bash，是 **v1.0 发布阻塞项** |
| [#2952](https://redirect.github.com/a2ui-project/a2ui/issues/2952) / [#4109](https://redirect.github.com/a2ui-project/a2ui/issues/4109) | 各 4 / 3 评论 | 删除 Lit / React v0.8 适配器：官方明确不再支持 v0.8，讨论集中在依赖检查、示例应用迁移与 v0.9 内联策略；配套 PR [#4160](https://redirect.github.com/a2ui-project/a2ui/pull/4160)、[#4142](https://redirect.github.com/a2ui-project/a2ui/pull/4142) 已跟进 |
| [#4015](https://redirect.github.com/a2ui-project/a2ui/issues/4015) | 4 评论（已关闭） | TS/Dart `MessageProcessor` 出站消息路由统一（`actionHandler`/`outboundListener` 分裂）——API 简化诉求，已随 `unifiedOutbound`（#4079）落地进入 Dart 0.7.0 |
| [#3783](https://redirect.github.com/a2ui-project/a2ui/issues/3783) | 3 评论（已关闭） | 动态/开放 schema 子组件解析失败，流式场景真实用户痛点，已由 [#3938](https://redirect.github.com/a2ui-project/a2ui/pull/3938) 修复 |
| [#2937](https://redirect.github.com/a2ui-project/a2ui/issues/2937) | 3 评论 | `formatDate` 自 0.12.0 移除 date-fns 后破坏 TR35 引号字面量与 `EE`/`EEE`——修复 PR [#3787](https://redirect.github.com/a2ui-project/a2ui/pull/3787) 已挂起 12 天待 review |

**背后诉求：** 社区讨论高度集中于**版本碎片化**（v0.8/v0.9/v1.0 三线并存的导出路径、适配器维护成本）与 **v1.0 质量**（bug-bash 期间类型检查、schema 解析等基础正确性）。

---

## 5. Bug 与稳定性（按严重度排列）

**🔴 安全（最高优先）：**
- **[#4147](https://redirect.github.com/a2ui-project/a2ui/issues/4147)**（2026-11-10，待 triage）：SDK 依赖 Zod 3.25.76 存在 **CVE-2023-54404**，需升级至 4.6.6+。报告者明确指出这是企业合规采用的硬门槛。**暂无 fix PR。**

**🟠 数据正确性：**
- **[#4132](https://redirect.github.com/a2ui-project/a2ui/issues/4132)**（2026-11-10，新报，待 triage）：Direct JSON 流中 `updateDataModel` 先写 `value` 后写 `path` 时，**整个 data model 被替换**（发出无 `path` 的消息导致渲染异常）——流式响应数据损坏级 bug。**暂无 fix PR。**
- **[#4161](https://redirect.github.com/a2ui-project/a2ui/issues/4161)**（今日新开）：Dart `a2ui_core` 中未解析（null）的必填参数在响应式求值时**静默绕过 `argumentSchema` 检查**——生产环境安全边界问题，讨论中。
- **[#3423](https://redirect.github.com/a2ui-project/a2ui/issues/3423)**（P2，v1-bug-bash）：React v1.0 类型检查失败，**暂无专属 fix PR**。

**🟡 P2 / 已有 fix 待合并：**
- **[#2937](https://redirect.github.com/a2ui-project/a2ui/issues/2937)**：`formatDate` TR35 兼容性 → fix PR [#3787](https://redirect.github.com/a2ui-project/a2ui/pull/3787) 待合并。
- **[#3942](https://redirect.github.com/a2ui-project/a2ui/issues/3942)**（waiting-for-author-response）：pub.dev 上 `a2ui_agent` 与 `a2ui_flutter` 版本约束冲突无法共存安装，直接阻碍 genui 迁移用户。

**✅ 今日已闭环（建议纳入回归验证）：** [#3783](https://redirect.github.com/a2ui-project/a2ui/issues/3783)（P1，fix [#3938](https://redirect.github.com/a2ui-project/a2ui/pull/3938)）、[#4012](https://redirect.github.com/a2ui-project/a2ui/issues/4012) / [#4137](https://redirect.github.com/a2ui-project/a2ui/issues/4137)（P1，fix [#4037](https://redirect.github.com/a2ui-project/a2ui/pull/4037)）、[#3727](https://redirect.github.com/a2ui-project/a2ui/issues/3727)（P2，Express 混合 catalog 默认 catalog 缺失）。

---

## 6. 功能请求与路线图信号

**今日新开的功能请求：**
- **[#4166](https://redirect.github.com/a2ui-project/a2ui/issues/4166)**（P2，维护者提出）：在 `ComponentNode` 上以一等响应式属性暴露已解析的 `AccessibilityAttributes`（`label`/`description`/`live`/`hidden`），替代 `props['@​accessibility']`——与 [#4044](https://redirect.github.com/a2ui-project/a2ui/pull/4044) 的 `@accessibility` 信封键直接配套，**大概率随 v1.0 信封工作纳入下一版本**。
- **[#4148](https://redirect.github.com/a2ui-project/a2ui/issues/4148)**：移除 Angular 渲染器的 `useUniversalComponents` 与原生 Basic Catalog——v0.8/v0.9 清理路线的 Angular 篇章。
- **[#4163](https://redirect.github.com/a2ui-project/a2ui/issues/4163)** / **[#4162](https://redirect.github.com/a2ui-project/a2ui/issues/4162)**（社区）：Catalog 设计最佳实践（anti-corruption layer 建模、语义粒度、协议 vs 数据版本化）与表达式纯度 / fail-loudly 参数契约文档。

**路线图强信号——decision 推理格式技术栈（六连发，明显是下一阶段重点）：**
- [#4153](https://redirect.github.com/a2ui-project/a2ui/pull/4153)：实验性 v1.0 decision 布局文法 + Basic Catalog patterns（含 `grammarVersion` 与 experimental 标记）；
- [#4154](https://redirect.github.com/a2ui-project/a2ui/pull/4154)：decision 数据模型、payload inspector、catalog graph、单次调用后端（统一 `decide(batch)` 接口 + 模型钉扎）；
- [#4155](https://redirect.github.com/a2ui-project/a2ui/pull/4155)：两阶段 `LayoutPlanner` + `DecisionUiSynthesizer` + `a2ui-decision` 格式——**agent 只输出紧凑 decision JSON，客户端规划器负责选组件与布局**；
- [#4156](https://redirect.github.com/a2ui-project/a2ui/pull/4156)：catalog patterns 生成 skill 与校验 CLI；
- [#4157](https://redirect.github.com/a2ui-project/a2ui/pull/4157)：decision 评测策略、layout 基准与离线校准 CLI；
- [#4158](https://redirect.github.com/a2ui-project/a2ui/pull/4158)：ADK format playground 示例，支持 `decision`/`express`/`elemental`/`atom`/`direct_json` 五格式多轮对比。

**另值得注意：** [#4165](https://redirect.github.com/a2ui-project/a2ui/pull/4165)（ReactApp escape hatch 原型 + 运行时 + 端到端演示）显示项目对"声明式组件模型为主 + 动态 UI 逃生舱为辅"的务实定位。

---

## 7. 用户反馈摘要

**真实痛点：**
- **企业迁移摩擦**：团队用 OpenAPI/Protobuf 生成器直出 DTO 进 catalog，导致 primitive obsession，缺少 anti-corruption layer 建模与语义粒度指引（[#4163](https://redirect.github.com/a2ui-project/a2ui/issues/4163)）；
- **生产边界不清**：客户端函数的表达式纯度、参数校验 fail-loudly 契约、服务端事务权威边界缺乏明确规范（[#4162](https://redirect.github.com/a2ui-project/a2ui/issues/4162)、[#4161](https://redirect.github.com/a2ui-project/a2ui/issues/4161)）；
- **包管理体验**：pub.dev 版本冲突使 genui 迁移用户装不上三件套（[#3942](https://redirect.github.com/a2ui-project/a2ui/issues/3942)）；
- **安全合规**：Zod CVE 直接阻断组织采用（[#4147](https://redirect.github.com/a2ui-project/a2ui/issues/4147)）；
- **版本碎片化**：v0.8/v0.9/v1.0 并存带来的导入路径与适配器混乱（[#3423](https://redirect.github.com/a2ui-project/a2ui/issues/3423)）。

**满意与认可：**
- 客户端函数将确定性 Dart 函数编译进 `preact_signals` `computed()` 节点，被社区称为"重大架构胜利"——同时消除 LLM 往返延迟与异步 widget 胶水（[#4162](https://redirect.github.com/a2ui-project/a2ui/issues/4162)）；
- 流式渐进渲染被视为核心价值，社区积极推动 partial components 尽早可用（[#4052](https://redirect.github.com/a2ui-project/a2ui/pull/4052)）；
- genui → a2ui 迁移路径获得系统性投入，11 个外部项目经验已沉淀为可复用 skill（[#4136](https://redirect.github.com/a2ui-project/a2ui/pull/4136)）；
- 无障碍细节受重视：Flutter slider 命名修复显著改善屏幕阅读器体验（[#3411](https://redirect.github.com/a2ui-project/a2ui/pull/3411)）。

---

## 8. 待处理积压（请维护者关注）

**高优先、长时间未闭环：**

| 条目 | 开启日期 | 积压时长 | 状态 |
|---|---|---|---|
| [#3423](https://redirect.github.com/a2ui-project/a2ui/issues/3423)（P2，React v1.0 typecheck） | 10-22 | **20 天** | 无 fix PR，v1-bug-bash 阻塞项 |
| fix PR [#3411](https://redirect.github.com/a2ui-project/a2ui/pull/3411)（Flutter slider 无障碍） | 10-22 | **20 天** | 待 review（@​andrewkolos） |
| fix PR [#3558](https://redirect.github.com/a2ui-project/a2ui/pull/3558)（PayloadValidator metadata 校验） | 10-23 | **19 天** | 待 review，与 #4044 存在合并顺序耦合 |
| fix PR [#3787](https://redirect.github.com/a2ui-project/a2ui/pull/3787)（formatDate TR35） | 10-30 | **12 天** | 待 review |
| [#4044](https://redirect.github.com/a2ui-project/a2ui/pull/4044)（全线 `@` 前缀信封键） | 11-07 | 4 天 | **当前最大破坏性变更**，位于 35 条待合并 PR 之首，需尽快排期以解锁下游（含 #3558、#4166） |

**低互动陈年项：**
- [#2700](https://redirect.github.com/a2ui-project/a2ui/issues/2700)（09-18 开启，**54 天**，0 评论）：v0.9/v0.9.1 catalog 目录从 `specification/` 迁至 `catalogs/`——无人认领；
- [#2952](https://redirect.github.com/a2ui-project/a2ui/issues/2952)：Lit v0.8 删除——React/Composer 侧已有动作（[#4160](https://redirect.github.com/a2ui-project/a2ui/pull/4160)、[#4142](https://redirect.github.com/a2ui-project/a2ui/pull/4142)），Lit 侧待跟进；
- [#3942](https://redirect.github.com/a2ui-project/a2ui/issues/3942)：waiting-for-author-response——建议维护者主动验证 pub.dev 约束，避免阻塞 genui 迁移用户；
- [#4065](https://redirect.github.com/a2ui-project/a2ui/issues/4065)：测试 issue，建议直接关闭。

---

*数据来源：a2ui GitHub Issues / PRs / Releases（2026-11-10 ~ 2026-11-11 窗口）。链接均为 a2ui-project/a2ui 仓库内条目。*

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目动态日报

**日期：** 2026-11-11 | **项目：** [thesysdev/openui](https://github.com/thesysdev/openui) | **类型：** AI 智能体前端 / 生成式 UI 框架

---

## 1. 今日速览

过去 24 小时项目共产生 **12 条动态**（1 条 Issue + 11 条 PR），其中 5 条 PR 合并/关闭、6 条待合并、2 个补丁版本发布，开发节奏密集且吞吐高效。所有工作几乎都围绕 **Dashboard（仪表盘）能力**展开：核心库修复、数据加载 UX、示例对齐、文档与在线演示形成完整闭环。开发主力为内部团队（Aditya-thesys、AbhinRustagi、ankit-thesys、zahlekhan），并深度借助 AI 自动化机器人处理修复与发布事务。社区侧输入较平静（仅 1 条新 Issue、0 评论），整体呈现"**内部驱动、高速迭代、发布管线顺畅**"的健康状态。

---

## 2. 版本发布

今日通过 Changesets 发布 2 个补丁版本（发布 PR：[#1604](https://redirect.github.com/thesysdev/openui/pull/1604)）：

- **[@​openuidev/react-ui@0.18.6](https://github.com/thesysdev/openui/releases)**
- **[@​openuidev/react-headless@0.18.6](https://github.com/thesysdev/openui/releases)**

**更新内容**（均来自 [#1594](https://redirect.github.com/thesysdev/openui/pull/1594)，commit [`19bb0c9`](https://github.com/thesysdev/openui/commit/19bb0c9849c3669d26da9eb5287178be7f5fb081)，作者 @​Aditya-thesys）：
- 打开的 Dashboard 可跟随编辑实时更新，artifact 流会记录版本信息，消除"dashboard changed since it was shown"报错与强制刷新。

**破坏性变更：** 无（Patch 版本）。
**迁移注意：** 直接升级即可，无需代码改动。**建议所有使用 Dashboard 功能的用户尽快升级**，以获得编辑后的无缝同步体验。

---

## 3. 项目进展

今日合并/关闭 5 条 PR，沿两条主线推进：

**核心体验线**
- [#1594](https://redirect.github.com/thesysdev/openui/pull/1594)（已合并并随 0.18.6 发布）：修复编辑后打开的 Dashboard 因携带旧版本号被 OpenUI Cloud 拒绝查询的问题。现在编辑后 Dashboard 无缝切换到新版本及其数据，无报错、无重载。**今日最重要的核心修复**。
- [#1599](https://redirect.github.com/thesysdev/openui/pull/1599)（已关闭，stacked on #1595）：修复 assistant-ui-dashboards 示例中两个编辑缺陷——多 Dashboard 线程中编辑可能发送到错误对象；编辑期间面板状态保持。

**文档与演示线**
- [#1603](https://redirect.github.com/thesysdev/openui/pull/1603)（已关闭）：新增 Sales Dashboard 在线演示（`openui.com/demo/sales-dashboard`），置于 Demos 页首，并移除旧 GitHub dashboards demo。
- [#1605](https://redirect.github.com/thesysdev/openui/pull/1605)（已关闭）：在 `/docs/dashboards` 视频下方添加"Try the live demo →"入口链接。
- [#1604](https://redirect.github.com/thesysdev/openui/pull/1604)（已关闭）：Changesets 版本发布 PR。

**进展评估：** 从 #1594 提交（11-08）到 npm 发布（11-10）仅 **2 天**，发布链路高效；Dashboard 能力在"核心修复 → 示例 → 文档 → 演示"四层同步落地，功能成熟度显著提升。

---

## 4. 社区热点

今日社区讨论平静，无高评论/高反应条目。值得关注的话题：

- **[#1602](https://redirect.github.com/thesysdev/openui/issues/1602)**（0 评论 / 0 👍）：唯一新 Issue，指出 `dashboard-library` 图表忽略主题调色板、分类调色板按"中间向外"顺序分配。诉求本质是**外观可定制性**——用户已在真实项目中需要图表颜色与应用主题协调。
- **[#1600](https://redirect.github.com/thesysdev/openui/pull/1600)**：揭示团队运营痛点——openui-docs 过去 28 天消耗 **958 GB 流量**，约占团队 Vercel 传输量 **85%**，主因是首页 `LangShowcase` 轮播 GIF 时附加 `?play=N` 参数导致缓存失效重复下载，以及多张重量级 GIF。
- 活跃度最高动态为核心团队 PR：[#1607](https://redirect.github.com/thesysdev/openui/pull/1607)（今日仍在更新）、[#1589](https://redirect.github.com/thesysdev/openui/pull/1589)（跨 4 天持续更新）。

---

## 5. Bug 与稳定性

按严重程度排列（无崩溃/回归报告，问题集中在 Dashboard 链路的 UX 细节）：

| 严重度 | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| 高（已修复） | 编辑后打开的 Dashboard 报 stale version 错误，需手动刷新 | ✅ 已随 0.18.6 发布 | [#1594](https://redirect.github.com/thesysdev/openui/pull/1594) |
| 中 | `FilterBar` 右侧过滤器在窄屏下破坏布局：换行后 `margin-left: auto` 导致错位，且 `flex: 0 0 auto` 使其无法收缩 | 🔧 修复中 | [#1606](https://redirect.github.com/thesysdev/openui/pull/1606)（open） |
| 中 | `useArtifactList` 在 `refresh()` 期间列表瞬间重排（新建 artifact 掉到底部再跳回顶部） | 🔧 修复中 | [#1601](https://redirect.github.com/thesysdev/openui/pull/1601)（open） |
| 低 | 示例中 Dashboard 卡片与面板状态不同步（显示 "Live" 但实际在生成/失败） | 🔧 修复中 | [#1595](https://redirect.github.com/thesysdev/openui/pull/1595)（open） |
| 低（体验） | 图表无法跟随主题调色板 | ⏳ 待响应 | 暂无（见 [#1602](https://redirect.github.com/thesysdev/openui/issues/1602)） |

---

## 6. 功能请求与路线图信号

- **图表主题化**（[#1602](https://redirect.github.com/thesysdev/openui/issues/1602)）：用户要求 Dashboard 图表遵循主题调色板 + 改进分类调色板分配逻辑。目前无关联 PR，但 `dashboard-library` 尚处 0.0.2 早期阶段且本周迭代极快，属于**高概率纳入路线图**的方向，建议维护者确认排期。
- **Dashboard 重载时保留上次结果**（[#1607](https://redirect.github.com/thesysdev/openui/pull/1607)）：核心成员开发中——Dashboard 重新打开时各 tile 先展示上次结果而非查询默认值（常为零），新数据到达后逐 tile 切换；`ArtifactStorage` 将新增两个可选方法。该 PR 今日仍在活跃更新，**大概率进入下一个补丁版本**。
- **带宽预算机制**（[#1600](https://redirect.github.com/thesysdev/openui/pull/1600)）：在修复带宽 bug 的同时引入 bandwidth budget 检查，若合入将成为 CI 长期约束，属于工程基础设施的路线图信号。

---

## 7. 用户反馈摘要

今日用户侧直接输入有限（1 条 Issue、0 评论），可提炼的痛点：

- **主题一致性是当前最大缺口**（来自 [#1602](https://redirect.github.com/thesysdev/openui/issues/1602)）：用户集成 `dashboard-library` (0.0.2) 时发现所有图表颜色被锁死为库内置的固定蓝色渐变（`customPalette` 硬编码），无法与应用主题协调；分类调色板"middle-out"分配顺序也违背常见的前向直觉。这表明**已有用户在生产环境中深度定制 Dashboard 外观**，库具备真实采用场景。
- **间接信号**（来自团队 QA，见 [#1595](https://redirect.github.com/thesysdev/openui/pull/1595) / [#1599](https://redirect.github.com/thesysdev/openui/pull/1599)）：多线程切换、编辑、失败重试等边界场景下的状态同步问题反复出现并需要多轮修复，说明这些路径对真实用户可见且体验敏感，是当前稳定性投入的重点区域。

---

## 8. 待处理积压

- **[#1589](https://redirect.github.com/thesysdev/openui/pull/1589)**（chore: 更新 OpenUI 模板与示例）：由 thesys-pr-creator[bot] 于 **11-07** 开启，至今 **4 天**未合并。虽为依赖刷新类 PR，但阻塞 CLI 模板用户获取最新 `@openuidev/*` 依赖（含今日 0.18.6 的 Dashboard 修复），**建议优先审查合并**。
- **[#1602](https://redirect.github.com/thesysdev/openui/issues/1602)**（图表主题化）：11-10 提出后暂无维护者回应，作为今日唯一外部用户 Issue，建议尽快 triage 并给出排期意向。
- **[#1595](https://redirect.github.com/thesysdev/openui/pull/1595)**（示例修复）：11-09 开启至今未合并；其 stacked PR #1599 已关闭，需确认分支重排后无提交遗漏。

其余待合并 PR（[#1607](https://redirect.github.com/thesysdev/openui/pull/1607)、[#1606](https://redirect.github.com/thesysdev/openui/pull/1606)、[#1601](https://redirect.github.com/thesysdev/openui/pull/1601)、[#1600](https://redirect.github.com/thesysdev/openui/pull/1600)）均为 11-10 新开，处于正常审查周期内，无积压风险。

---

*数据统计窗口：2026-11-10 至 2026-11-11（UTC）。本报告基于 GitHub 公开动态生成，评论数为 undefined 的 PR 表示暂无评论数据。*

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render 项目动态日报

**项目**：[vercel-labs/json-render](https://github.com/vercel-labs/json-render)
**日期**：2026-11-11 ｜ **统计窗口**：过去 24 小时

---

## 1. 今日速览

今日项目呈现「低流量、高质量」的外部贡献型活跃状态：无新 Issue、无版本发布，但收到 **2 条来自社区贡献者的待合并 PR**（[#468](https://redirect.github.com/vercel-labs/json-render/pull/468)、[#469](https://redirect.github.com/vercel-labs/json-render/pull/469)），分别修复核心校验缺陷和补齐 shadcn 层链接能力。过去 24 小时无任何 PR 被合并或关闭、无 Issue 被回应，维护者侧的评审动作缺失是当前最明显的短板。值得注意的是，#468 修复的是被两位用户独立报告（#378、#467）的存量缺陷，属于补账性质。整体活跃度评估：**中等偏低但贡献质量较高**，两条 PR 均直指真实使用痛点。

---

## 2. 版本发布

今日无新版本发布。前瞻提示：若 [#468](https://redirect.github.com/vercel-labs/json-render/pull/468)（核心校验修复）合并，建议随下一个 patch/minor 版本尽快发布，以解决存量校验缺陷。

---

## 3. 项目进展

今日**无 PR 合并或关闭**，进展体现在新增的两条待合并 PR：

- **[PR #468](https://redirect.github.com/vercel-labs/json-render/pull/468)** `fix(core): check props per component in multi-component catalogs`（作者：TanmayShah29）
  - 修复多组件目录（multi-component catalog）下 `propsOf` 字段校验失效的问题：当目录包含两个及以上组件时，spec schema 中 `propsOf` 被定义为宽松的 `z.record(z.string(), z.unknown())`，导致 `catalog.validate()` 和 `catalog.zodSchema()` 接受任意 props；单组件目录则不受影响。修复后校验恢复至按组件粒度执行。
  - 关联修复：[#378](https://redirect.github.com/vercel-labs/json-render/issues/378)、[#467](https://redirect.github.com/vercel-labs/json-render/issues/467)。

- **[PR #469](https://redirect.github.com/vercel-labs/json-render/pull/469)** `feat(shadcn): add target prop to Link`（作者：Amronos）
  - 为 `@json-render/shadcn` 与 `@json-render/shadcn-svelte` 的 `Link` 组件新增 `target: "_self" | "_blank"` 属性，可空且与其他可选属性保持一致；使用 `_blank` 时会同步设置 `rel` 属性以保证安全。

**进展评估**：两 PR 均未合并，项目今日实际向前推进幅度为 0；但若合并，将同时补上核心校验的正确性缺口与 shadcn 层的链接交互短板，属于小步快跑式迭代。

---

## 4. 社区热点

今日无 Issue 活动，互动数据（评论数、👍）均为 0，无争议性话题，项目处于平稳期。仅有的讨论载体是两条新 PR：

- [PR #468](https://redirect.github.com/vercel-labs/json-render/pull/468)：本身 0 评论，但其关联的 [#378](https://redirect.github.com/vercel-labs/json-render/issues/378) 与 [#467](https://redirect.github.com/vercel-labs/json-render/issues/467) 表明该问题被至少两位用户独立报告，是真实存在的高频痛点。
- [PR #469](https://redirect.github.com/vercel-labs/json-render/pull/469)：0 评论，反映的是「渲染结果需要与外部页面交互」这一典型使用诉求。

**诉求分析**：两条 PR 共同指向「渲染产物的交互完整性」——用户在实际应用中既需要 Link 跳转外部页面时不脱离应用（`target="_blank"`），也依赖 schema 校验在开发期拦截错误 props，而当前多组件目录下校验形同虚设，直接推高了排查成本。

---

## 5. Bug 与稳定性

今日无新增 Bug 报告（新开 Issue 为 0），无崩溃或回归类问题。存量缺陷及修复状态如下：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 中等 | **多组件 catalog 的 `propsOf` 校验失效**（[#378](https://redirect.github.com/vercel-labs/json-render/issues/378)，重复报告 [#467](https://redirect.github.com/vercel-labs/json-render/issues/467)）：目录含 ≥2 个组件时，错误 props 可静默通过 `catalog.validate()` / `catalog.zodSchema()`，开发期无法拦截；单组件目录正常 | ✅ 已有 fix PR [#468](https://redirect.github.com/vercel-labs/json-render/pull/468)（今日提交，待评审） |

**稳定性评估**：该缺陷属于校验层（开发期）而非运行时渲染层，不会直接导致崩溃，但会削弱项目的类型安全承诺。在 #468 合并前，使用多组件目录的用户需自行留意 props 拼写与取值合法性。

---

## 6. 功能请求与路线图信号

- **[已进入实现阶段] Link 新标签页打开**（[PR #469](https://redirect.github.com/vercel-labs/json-render/pull/469)）：`target` 属性可空、默认行为不变（当前 tab），`_blank` 时自动附加 `rel`。实现同时覆盖 React（shadcn）与 Svelte（shadcn-svelte）双端，**合并后大概率随下个版本发布**，是本周期最明确的功能增量。
- **[隐含信号] 校验严格化**（[PR #468](https://redirect.github.com/vercel-labs/json-render/pull/468)）：将校验粒度下沉到组件级别，与项目深度集成 zod、主打开发期类型安全的定位一致，预示后续版本可能继续收紧 schema 校验。
- 今日无新功能请求 Issue，路线图新增信号有限，主要由贡献者 PR 驱动。

---

## 7. 用户反馈摘要

今日无 Issue 评论数据（0 条更新），以下反馈信号提炼自 PR 描述及其关联 Issue：

- **痛点 1（交互受限）**：`@json-render/shadcn` / `shadcn-svelte` 的 `Link` 此前始终在当前 tab 打开，spec 无法引导用户前往外部页面且不脱离应用——典型的混合渲染/内嵌场景需求（来源：[#469](https://redirect.github.com/vercel-labs/json-render/pull/469) 动机描述）。
- **痛点 2（校验失效）**：依赖 `catalog.validate()` 做开发期校验的用户发现多组件目录下校验静默放行，错误配置无法暴露，问题被两位用户独立报告（[#378](https://redirect.github.com/vercel-labs/json-render/issues/378)、[#467](https://redirect.github.com/vercel-labs/json-render/issues/467)），说明并非个例。
- **正面信号**：两位贡献者（Amronos、TanmayShah29）均以「直接提交 PR」而非仅报告问题的方式参与，说明项目代码结构清晰、社区上手门槛低，贡献生态健康。

---

## 8. 待处理积压

- **[Issue #378](https://redirect.github.com/vercel-labs/json-render/issues/378)**：长期未修复的存量缺陷——当前 PR 编号已至 469，该 Issue 编号为 378，编号跨度约 90，推测已积压较长时间。今日已有修复 PR [#468](https://redirect.github.com/vercel-labs/json-render/pull/468) 提交，**建议维护者优先评审合并**。
- **[Issue #467](https://redirect.github.com/vercel-labs/json-render/issues/467)**：#378 的重复报告，待 #468 合并后应一并关闭，避免残留。
- **[PR #468](https://redirect.github.com/vercel-labs/json-render/pull/468) / [PR #469](https://redirect.github.com/vercel-labs/json-render/pull/469)**：均为今日提交、零评论、待评审状态。鉴于 #378 的前车之鉴，建议维护者在 1–2 个工作日内响应，避免评审积压重演。
- **整体提醒**：今日评审管道中已有 2 条待处理 PR 且无任何合并/关闭动作，维护者响应速度是当前影响项目健康度的首要变量。

---

*数据来源：GitHub API（过去 24 小时窗口）。评论数显示为 undefined 的条目按 0 处理。*

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报

**日期：** 2026-11-11 | **数据来源：** github.com/CopilotKit/CopilotKit

| 指标 | 数值 |
|---|---|
| Issues 更新（24h） | 1 条（新开/活跃 1，关闭 0） |
| PRs 更新（24h） | 60 条（待合并 29，已合并/关闭 31） |
| 新版本发布 | 0 个 |

---

## 1. 今日速览

今日 CopilotKit 呈现典型的**大版本冲刺形态**：24 小时内 60 条 PR 更新（31 条进入终态）对比仅 1 条 Issue 更新，开发节奏完全由核心团队（tylerslaton、AlemTuzlak、contextablemark）驱动，外部议题流入处于低位。四条主线并行推进：**文档体系 Fumadocs 重建收敛为单一 PR**、**2.0.0 发布准备（迁移 codemod + 依赖钉版）**、**多渠道（Discord/Teams/WhatsApp）能力扩展**、**Showcase 基础设施稳定性修复**。值得注意的是，6-8 月遗留的多个长期 PR 今日集中关闭，仓库积压显著清空——结合处于 WIP 状态的 [2.0.0 主 PR #8185](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185)，临近重大版本发布的信号明确。此外昨夜发生一次 Showcase 生产事故（langgraph-typescript OOM），修复 PR 已在数小时内提出，响应速度值得肯定。

---

## 2. 版本发布

本日无新版本发布。但 [PR #8185 "2.0.0"](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185)（2026-11-03 开启，标注 "Work in progress, do not merge"）持续活跃，配合今日落地的迁移 codemod 与依赖钉版 PR，**2.0.0 的发布准备已进入尾声**。详见第 6 节路线图信号。

---

## 3. 项目进展

### A. 文档体系重建：从 5 个 PR 收敛为 1 个（今日最大动作）

原本分散在 4 层 stack + 1 个预览 PR 的文档重建工作，今日全部关闭并**合并收敛为单一 PR** [#8327](https://redirect.github.com/CopilotKit/CopilotKit/pull/8327)（open）：

- [#8320](https://redirect.github.com/CopilotKit/CopilotKit/pull/8320)（Part 1，已关闭）：将各框架的手写文档副本折叠进共享页面——此前 `docs/integrations/` 下 449 个页面中约 240 个是同一主题的换名复制
- [#8321](https://redirect.github.com/CopilotKit/CopilotKit/pull/8321)（Part 2，已关闭）：每个前端框架拥有独立页面、每页仅索引一次，废除了 10 套重叠的页面过滤机制（含一个 86 条目的 Angular allowlist）
- [#8322](https://redirect.github.com/CopilotKit/CopilotKit/pull/8322)（Part 3，已关闭）：补齐 React Native 一等公民文档页，并将 Angular 页面 URL 与 React 对齐
- [#8325](https://redirect.github.com/CopilotKit/CopilotKit/pull/8325)（Part 4，已关闭）：修复 8 个集成中全页聊天被压缩在页面顶部的问题
- [#8214](https://redirect.github.com/CopilotKit/CopilotKit/pull/8214)（已关闭）：被 #8327 取代的旧预览分支

**净效果**：约 240 个重复文档页被消除，11 个框架的文档统一进 Fumadocs 重建版。这是对文档债务的一次性大清算，但注意**重建内容尚未真正落地主干**，全部工作现押在 #8327 一个 PR 上。

### B. 2.0.0 发布准备

- [#8315](https://redirect.github.com/CopilotKit/CopilotKit/pull/8315)（已关闭）：v2 迁移 codemod 从"只标 TODO"升级为**真正改写最常用的 v1 hooks 与 endpoints**，新增 e2e 流程在 main 分支全部 93 个示例上对 codemod 输出做类型检查；过程中顺手消除了三处 2.0 API 摩擦点（含 sync tool handlers）
- [#8319](https://redirect.github.com/CopilotKit/CopilotKit/pull/8319)（已关闭，release-prep）：将 `@ag-ui/mcp-apps-middleware` 钉死在精确版本 `0.1.1`，阻止新安装选中存在自动续演（automatic continuations）重放风险的 0.1.2/0.1.3

### C. 长期积压集中清空

多个 6-8 月开启的 PR 今日进入终态：[#6382](https://redirect.github.com/CopilotKit/CopilotKit/pull/6382)（Discord 原生与托管双模式支持：原生 JSX 渲染、Components V2、图表、文件、流式、reactions、用户查询、modals、默认拒绝的 mention 策略）、[#6402](https://redirect.github.com/CopilotKit/CopilotKit/pull/6402)（Next.js 根 body 的 hydration 竞态防护）、[#6210](https://redirect.github.com/CopilotKit/CopilotKit/pull/6210)、[#5842](https://redirect.github.com/CopilotKit/CopilotKit/pull/5842)、[#5589](https://redirect.github.com/CopilotKit/CopilotKit/pull/5589)。这批关闭与 2.0.0 主线收尾高度相关。

### D. Showcase / 基础设施

- [#8324](https://redirect.github.com/CopilotKit/CopilotKit/pull/8324)（已关闭）：aimock 基础镜像钉版 1.48.0，修复 AG2 多模态 fixture 不匹配
- [#8318](https://redirect.github.com/CopilotKit/CopilotKit/pull/8318)（已关闭）：兼容性审计保留完整的 NuGet 诊断信息，不再降级为笼统报错

**整体评估**：项目单日前进了显著一步——文档债务清偿方案定型、迁移工具链就绪、长期积压出清；风险点是关键工作高度集中在少数未合并 PR 上。

---

## 4. 社区热点

> 注：本期数据中 PR 评论数缺失，以下基于内容权重而非评论数排序。

1. **[#8306](https://redirect.github.com/CopilotKit/CopilotKit/issues/8306)（Issue，OPEN，1 评论）**——今日唯一社区议题。用户 Dolat-Hamza 报告 `@copilotkit/channels` 0.11.0 中 `channels-ui` 的 `ImageProps` 仅有 `{ url, alt? }`，而 Teams 渲染器在 `adaptive-card.js` 中硬编码图片尺寸为 `Auto`，请求为 `<Image>` 增加尺寸属性。**诉求本质**：在 Teams Adaptive Cards 生产集成中，用户需要渲染粒度控制权。该报告质量高（含包版本、代码定位），且与当前活跃的 channels 工作流（#8297）方向吻合，被快速接纳的概率较大。
2. **[#8327](https://redirect.github.com/CopilotKit/CopilotKit/pull/8327)（PR，OPEN）**——内部最大热点，文档重建的最终载体，合并后整个文档站将切换到 Fumadocs。
3. **[#8185](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185)（PR，OPEN）**——2.0.0 主 PR，全仓关注的焦点。

社区侧今日整体安静，与"核心团队冲刺、社区观望大版本"的阶段特征一致。

---

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 🔴 严重 | [#8326](https://redirect.github.com/CopilotKit/CopilotKit/pull/8326)：`showcase-langgraph-typescript` 生产环境于 2026-11-10 23:48Z 硬宕机（PNI-799）——LangGraph agent 运行 39.8 小时后触及 V8 堆上限（exit 134），部署的 ON_FAILURE/10 次重试预算已在早期 OOM 中耗尽 | 修复 PR 已开（即本 PR，含停止 store 序列化、释放 probe 线程） | ✅ 待合并 |
| 🟠 高 | [#8297](https://redirect.github.com/CopilotKit/CopilotKit/pull/8297)：三个渠道适配器丢失或错路由用户输入——Teams 从未触发 `onMention`、Teams `Action.Execute` 点击无法到达处理器、WhatsApp 超过 10 项的菜单无法应答 | 修复 PR 已开，待评审 | ✅ 待合并 |
| 🟠 高（已修） | [#8319](https://redirect.github.com/CopilotKit/CopilotKit/pull/8319)：`@ag-ui/mcp-apps-middleware` 0.1.2/0.1.3 的自动续演可能重放消息（供应链回归风险） | 已关闭 | ✅ 钉版 0.1.1 |
| 🟡 中 | [#8306](https://redirect.github.com/CopilotKit/CopilotKit/issues/8306)：Teams 卡片图片尺寸恒为 `Auto` | Issue 开放中 | ❌ 暂无专属 fix |
| 🟡 中（已修） | [#8325](https://redirect.github.com/CopilotKit/CopilotKit/pull/8325)：8 个集成中全页聊天被压在页面顶部 | 已关闭（并入 #8327） | ✅ |
| 🟢 低（已修） | [#8324](https://redirect.github.com/CopilotKit/CopilotKit/pull/8324)：AG2 多模态 fixture 与 aimock 镜像不匹配（测试基础设施） | 已关闭 | ✅ |
| 🟢 低（已修） | [#6402](https://redirect.github.com/CopilotKit/CopilotKit/pull/6402)：浏览器扩展引发的 Next.js 根 body hydration 竞态 | 已关闭 | ✅ |

**稳定性总评**：生产事故响应链路（事故 → 定位 → 修复 PR）在一个工作日内闭环，健康度良好；渠道层的输入路由缺陷（#8297）对 Teams/WhatsApp 用户影响面较大，建议优先合并。

---

## 6. 功能请求与路线图信号

1. **2.0.0 临近，破坏性变更在即**：[#8185](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185) + [#8315](https://redirect.github.com/CopilotKit/CopilotKit/pull/8315) codemod + [#8319](https://redirect.github.com/CopilotKit/CopilotKit/pull/8319) release-prep 钉版 + 长尾 PR 清仓，四项证据共同指向大版本即将发布。**迁移提示**：v1 hooks/endpoints 将被重写，建议用户提前在分支上试跑 codemod（已在 93 个官方示例上验证）。
2. **Channels 多平台扩张持续**：Discord 双模式支持（[#6382](https://redirect.github.com/CopilotKit/CopilotKit/pull/6382)，已收尾）+ Teams/WhatsApp 修复（#8297）+ 今日的 Image 尺寸请求（#8306）构成完整脉络。**#8306 很可能搭上 channels 工作流的下一班车**，进入后续 `@copilotkit/channels` 版本。
3. **文档站即将切换 Fumadocs**：[#8327](https://redirect.github.com/CopilotKit/CopilotKit/pull/8327) 落地后，11 个框架共享受文档源、React Native 升为一等文档公民。
4. **生态集成扩张**：[#8286](https://redirect.github.com/CopilotKit/CopilotKit/pull/8286) 为 Omnara 注册三个演示，基于已发布的 `@ag-ui/omnara` 适配器。

---

## 7. 用户反馈摘要

本期社区样本量小（仅 1 条 Issue），提炼如下：

- **使用场景**：用户正基于 `@copilotkit/channels-ui` + `channels-teams` 构建面向 Microsoft Teams 的生产级集成，直接消费 Adaptive Card 渲染层（能定位到 `dist/render/adaptive-card.js` 中的硬编码），说明 channels 包已进入深度使用阶段。
- **痛点**：抽象层的渲染控制粒度不足——图片尺寸这类基础属性（Adaptive Card 原生支持）未透传给用户。
- **性质判断**：这是**增量式补全请求而非架构性不满**，且报告规范、指向精确，属于健康生态中典型的"高级用户打磨细节"型反馈；该 Issue 已有 1 条评论，说明维护侧已有初步接触。

---

## 8. 待处理积压

| 条目 | 状态 | 提请关注 |
|---|---|---|
| [#8326](https://redirect.github.com/CopilotKit/CopilotKit/pull/8326) | OPEN | **生产事故修复，时效敏感**，建议最优先合并 |
| [#8297](https://redirect.github.com/CopilotKit/CopilotKit/pull/8297) | OPEN（11-10 开启） | 影响 Teams/WhatsApp 三个输入路由缺陷，等待评审 |
| [#8306](https://redirect.github.com/CopilotKit/CopilotKit/issues/8306) | OPEN（11-10 开启，1 评论） | 需维护者正式 triage 并确认是否纳入 channels 后续版本 |
| [#8317](https://redirect.github.com/CopilotKit/CopilotKit/pull/8317) | OPEN，**明确标注 "Blocked: do not merge"** | 依赖上游 ag-ui 修复 `@ag-ui/langgraph`，需持续跟踪上游进展，避免与 #8319 的钉版策略冲突 |
| [#8286](https://redirect.github.com/CopilotKit/CopilotKit/pull/8286) | OPEN | Omnara 演示处于未部署状态，等待注册决策 |
| [#8185](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185) | OPEN，WIP | 2.0.0 主 PR，合并前置条件（codemod #8315、钉版 #8319）已就绪 |

**积压健康度**：今日一次性关闭了 6-8 月遗留的至少 5 个长期 PR，积压水位明显下降；现存 open PR 多为本周新开、处于活跃迭代中，无"僵尸条目"。整体待处理队列短且优先级清晰，**项目维护响应健康度：良好**。

---

*数据说明：本期 PR 评论数字段缺失；"已合并/关闭"为 GitHub 终态合计，其中部分 PR（如 #8214、#8320-8325）为被 #8327 取代后关闭，而非直接合入主干。*

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*