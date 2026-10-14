# 生成式 UI 生态日报 2026-10-14

> Issues: 44 | PRs: 128 | 覆盖项目: 4 个 | 生成时间: 2026-10-14 04:06 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告

**报告日期**：2026-10-14 ｜ **覆盖项目**：a2ui、OpenUI、json-render、CopilotKit ｜ **数据窗口**：过去 24 小时（四项目合计 172 条动态）

---

## 1. 生态全景

生成式 UI 赛道已形成清晰的阶段分化与层级分工：**a2ui** 处于协议标准化的 v1.0 收口冲刺（四端一致性对齐、破坏性 API 重构），**OpenUI** 处于产品扩张期（搜索引荐流量约 10 倍增长、社区集成涌入），**CopilotKit** 进入生产深耕期（showcase 数据库 35GB 级运维、多框架兼容矩阵自动化），**json-render** 则步入成熟稳定期（0.21.x 补丁节奏、29 包自动同步发布）。生态互联显著加深——CopilotKit 用户已在深度定制 A2UI 渲染层（#7800/#7802），MCP 成为 a2ui 与 CopilotKit 共同的集成枢纽。整体判断：赛道正从「能不能渲染」进入「能不能上生产」阶段，**正确性、错误可观测性与协议兼容性**取代渲染能力本身，成为新的竞争焦点。

---

## 2. 各项目活跃度对比

| 项目 | Issue 动态（活跃/新增 → 关闭） | PR 动态（待合并 → 合并/关闭） | Release | 当日总量 | 贡献者结构 |
|---|---|---|---|---|---|
| **a2ui** | 30 → 3 | 38 → 12 | 0（Dart 0.3.0 打包中 #3192） | **83** | 10+ 活跃贡献者，维护者主导 |
| **OpenUI** | 3 → 0 | 21 → **25** | 0（版本 PR #1395 待合并，**发版在即**） | 49 | 核心团队 + 机器人 |
| **CopilotKit** | 7 → 0 | 19 → 12 | 0（#7789 含破坏性变更待合入） | 38 | 内外部混合，外部贡献高频且质量高 |
| **json-render** | 1 → 0 | 0 → 1 | **1**（v0.21.1，同步 29 包） | 2 | 维护者 ctate 主导 |

**关键观察**：
- a2ui 单日活跃度断层领先，且是唯一有 Issue 关闭动作的项目；但 30 条活跃 Issue 绝大多数 0 评论并带 `needs-triage`，呈**「高吞吐、低消化」**特征。
- OpenUI 关闭 25 个 PR 为四项目之最，呈典型「外围收尾 + 核心蓄力」的发版前节奏。
- CopilotKit 的 Issue 侧 7 开 0 关与 PR 侧 12 合并形成反差，**分诊带宽滞后于开发带宽**。
- json-render 量小质稳，是唯一当日发版项目，修复均为防御性正确性修复。

---

## 3. 共同关注的功能方向

**① 声明式绑定与校验的正确性（最普遍的工程主题）**
- **json-render**（v0.21.1 已修）：点分路径误判字面量邮箱/URL（#353）、数值校验过松——`"123abc"` 被接受（#389）
- **a2ui**（待修，方向相反——校验过严）：`numeric` 拒绝合法输入（#3138）、DateTimeInput min/max 永远失败（#3123）、`openUrl` 白名单被 mailto/tel 绕过（#3139）
- **OpenUI**：三元根节点下响应式绑定被当普通数据求值致输入丢失（#1382 修复中）；语言级验证表达力不足（#391，开放近 7 个月）

**② 错误上报与静默失败治理**
- **OpenUI** #1415：自定义函数抛错静默求值为 null，`Renderer.onError` 不触发；#1413：reasoning 事件端到端丢失
- **a2ui** #3165：`$ref` 不可解析静默失败、#3021 表达式错误静默丢弃（已修）
- **CopilotKit** #7590：`emit_tool_calls` 白名单被静默忽略；#6526：Zod v4 catalog 被静默清空

**③ 面向 Coding Agent 的开发者体验**
- **OpenUI**：全示例 AGENTS.md（#1406）、CLI 免提示模式（#1411）、API Key 一键生成（#1407–1409）——完整的组合拳
- **json-render**：以 shadcn skill 形式分发（#395 证实真实用户使用，同时暴露命名冲突隐患）
- **a2ui**：三端 prompt generator + 一致性测试套件（#3181），本质是提升 agent 生成 UI 的确定性

**④ MCP 生态集成**
- **a2ui**：MCP 目录治理与拆分（#3171）、iframe+MCP 双重沙箱（#3056）、MCP Web 搜索示例请求（#3137）
- **CopilotKit**：MCP Apps `ui/request-display-mode` 全屏模式（#7760），一次性覆盖 React/Vue/Angular 三前端

**⑤ 跨端一致性与依赖解耦**
- **a2ui**：四端一致性对齐（#3175/#3134/#3166）；A2A/ADK 集成拆为独立包（#3176），回应 a2a-sdk 版本 pin 阻断共存的痛点（#3161）
- **CopilotKit**：LangGraph 1.x（#7806/#7808）、AG2 1.x（#7767）、自动化兼容仪表盘（#7805）、渠道收缩（#7789 移除 Discord/Telegram）

---

## 4. 差异化定位分析

| 维度 | a2ui | OpenUI | json-render | CopilotKit |
|---|---|---|---|---|
| **生态定位** | 协议/规范层（A2UI 标准） | 语言/工具链层 | 渲染库层 | 全栈应用框架层 |
| **技术路线** | JSON 规范 + TS/Python/Dart/Swift 多端 SDK + conformance 测试 | 自有 DSL（OpenUI Lang）+ 流式渲染 + react-headless 适配器 | schema 驱动渲染 + 29 包 monorepo + shadcn/skill 集成 | React 组件 + Runtime + 托管服务 + 多框架桥接（LangGraph/AG2/A2A/AG-UI/MCP） |
| **目标用户** | 需跨语言标准化接入的协议使用方 | 以 coding agent 工作流为主的全栈开发者 | 已在 React/shadcn 栈内的开发者 | 构建生产级 AI 应用的团队（含托管服务依赖方） |
| **当前阶段** | v1.0 冲刺 | 增长期 | 成熟维护 | 生产深耕 |
| **今日重心** | 多目录 TS 移植 + Dart 0.3.0 | 核心修复蓄力 + 发版准备 | v0.21.1 发布 | 基础设施运维 + 兼容性工程 |

**结构性洞察**：四者并非平行竞品，而更接近技术栈的不同层级——**A2UI（UI 描述规范）与 AG-UI（CopilotKit 系事件协议）构成协议双子星，MCP 充当工具层枢纽**。CopilotKit 内嵌 a2ui-renderer 并出现深度定制用户，证明「框架消费协议」的链路已经打通。直接选型冲突主要发生在 OpenUI 与 CopilotKit 之间（同为应用层方案）。

---

## 5. 社区热度与成熟度

| 项目 | 热度 | 成熟阶段 | 响应能力 | 主要债务 |
|---|---|---|---|---|
| **a2ui** | ★★★★★（83 动态/日） | 标准化冲刺期 | 积压明显：20+ needs-triage 待分流 | E2E 连续失败 11 天（#3151）、React SSR 回归无修复（#3158）、Swift 一致性欠账 |
| **OpenUI** | ★★★★（49） | 快速迭代/扩张期 | **优秀**：社区请求当日闭环（#1412→#1414） | #594 开放 4.5 个月、#391 近 7 个月、商业集成悬置 20 天 |
| **CopilotKit** | ★★★★（38） | 生产成熟期 | **分化**：PR 吞吐快 / Issue 侧 7 开 0 关 | #5979 拖 3 个月（6 条评论持续追进）、安全 PR #7209 滞留 28 天 |
| **json-render** | ★★（2） | 稳定成熟期 | 稳定（发布当日清账 3 个 Issue） | 几乎无，仅 #395 skill 冲突待回应 |

**要点**：
- **活跃 ≠ 健康**：a2ui 吞吐最高，但 triage 积压与 CI 不稳定同步攀升，属「边冲刺边欠债」。
- **社区产出厚度**：CopilotKit 外部贡献者自带根因分析与修复 PR（#7801），OpenUI 有生态互惠型贡献（Sage 集成当日闭环）；a2ui 互动以单点报障为主（规范引用质量高但讨论少）。
- **成熟度排序**——运行时稳定性：json-render > CopilotKit ≈ OpenUI > a2ui；工程化成熟度（发布/CI/运维自动化）：CopilotKit（兼容仪表盘）与 json-render（29 包一键同步）领先。

---

## 6. 值得关注的趋势信号

**① A2UI 协议进入「框架采纳 + 生产反馈」循环。** CopilotKit 用户一日两报 a2ui-renderer 深度定制问题，a2ui 本体同步进行四端一致性冲刺与破坏性更名（#3194）。*参考价值：选型时将 A2UI 兼容性纳入评估维度；升级需紧盯 breaking change 与规范收敛动态（#3102）。*

**② Coding agent 成为一等公民用户。** OpenUI 的 AGENTS.md + 免提示 CLI + API key 自动化是一套完整信号，json-render 以 skill 分发——生成式 UI 工具正同时服务人类与 agent。*参考价值：评估工具的 agent 可用性（非交互安装、机器可读上下文、skill 命名兼容）；分发自身能力时注意命名冲突。*

**③ 静默失败是生产化的分水岭。** 三个项目同日出现「错误被无声吞掉」类反馈，修复方向一致指向 onError 钩子与事件链完整性。*参考价值：生产上线前专项审计错误路径与 reasoning/tool 事件流完整性，勿默认「没报错就是没问题」。*

**④ 多端一致性是持续性税务，自动化是解法。** a2ui 的 Swift 欠账集中爆发，与 CopilotKit 上线自动兼容仪表盘（#7805）形成鲜明对照。*参考价值：选多 SDK/多框架方案时看 conformance 测试与兼容矩阵的维护节奏，而非单点功能对齐。*

**⑤ 依赖版本冲突推动架构解耦。** a2a-sdk pin 逼出拆包（#3176），LangGraph/AG2 1.x 引发升级潮，CopilotKit 主动收缩渠道聚焦。*参考价值：agent 框架版本 churn 剧烈，集成层需预留隔离带；关注各项目 breaking change 预警。*

**⑥ 商业化与生态治理浮出水面。** CopilotKit Hosted Intelligence 503（#7731）暴露托管服务单点风险；OpenUI 商业 provider 准入悬置 20 天（#1238）；SEO 成为开源工具的显性增长战场。*参考价值：评估托管依赖看故障响应能力；商业集成先确认准入规则。*

**⑦ 安全与无障碍欠账普遍存在。** CopilotKit 鉴权头透传修复滞留 28 天（#7209，涉安全）、a2ui 的 URL scheme 绕过（#3139）与 VoiceOver 缺失（#3120）。*参考价值：agent UI 的攻击面（URL scheme、auth 透传）与 a11y 是行业性短板，深度采用前应自查。*

---

### 附：选型速查

- **标准化、多语言接入** → a2ui（建议待 v1.0 与 CI 稳定后再大规模投产）
- **Coding agent 工作流优先** → OpenUI（发版在即，注意 reasoning 事件链 #594/#413 缺口）
- **已有 React/shadcn 栈、轻量 JSON 驱动** → json-render（0.21.1 可用，注意校验收紧后的回归测试）
- **生产级全栈 agent 应用** → CopilotKit（关注托管服务可用性与 #7789 渠道破坏性变更）

> **数据说明**：本报告基于单日窗口，a2ui/CopilotKit 的 PR 评论数据缺失，json-render 样本极小（1 Issue/1 PR/1 Release），热度与成熟度结论为方向性判断，建议结合连续多日数据验证。

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目动态日报

**项目**：[a2ui-project/a2ui](https://github.com/a2ui-project/a2ui) | **日期**：2026-10-14 | **数据窗口**：过去 24 小时

---

## 1. 今日速览

过去 24 小时项目共产生 **83 条动态**（Issues 更新 33 条：新增/活跃 30、关闭 3；PR 更新 50 条：待合并 38、合并/关闭 12），无新版本发布，**整体活跃度处于高位**，可见 10+ 位活跃贡献者。今日主线清晰： 多目录（multi-catalog）能力由 Python 向 TypeScript 的五连 PR 移植（#3177–#3181）； Dart `a2ui_core` 0.3.0 版本收尾及配套破坏性 API 重构（#3192 / #3194）； 仓库结构整合，Web 渲染器统一迁入 `typescript/`（#3193）。健康度隐忧有两处：主干 E2E 已连续 11 天夜间失败（#3151），且 Swift SDK 的 v1.0 一致性缺陷持续集中暴露；同时 30 条活跃 Issue 中绝大多数评论数为 0 并带 `needs-triage` 标签，分流积压明显上升。

---

## 2. 版本发布

今日无新版本发布（0 个）。

**预发布信号**：[#3192](https://redirect.github.com/a2ui-project/a2ui/pull/3192) 正在打包 **dart/a2ui_core 0.3.0**，将包含来自 [#3194](https://redirect.github.com/a2ui-project/a2ui/pull/3194) 的破坏性变更：`A2uiClientAction`/`A2uiClientError` 更名为 `A2uiRendererAction`/`A2uiRendererError`，`EventSource.subscribe`、`PayloadValidator` 与 `DataContext` 解析方法 API 调整。Dart 使用者需提前评估迁移。

---

## 3. 项目进展

**① 多目录（Multi-catalog）支持 — TypeScript 移植基本成型**
ditman 连发 5 个 PR，将 Python 侧已落地的能力完整对齐到 TS agent（对应 Python #3063–#3067）：
- [#3177](https://redirect.github.com/a2ui-project/a2ui/pull/3177) 共享多目录 helpers（`toCatalogList` 等）
- [#3178](https://redirect.github.com/a2ui-project/a2ui/pull/3178) ExpressCompiler 多目录编译
- [#3179](https://redirect.github.com/a2ui-project/a2ui/pull/3179) ExpressDecompiler 多目录解析与 surface 合并
- [#3180](https://redirect.github.com/a2ui-project/a2ui/pull/3180) ExpressPromptGenerator 多目录规则与示例渲染
- [#3181](https://redirect.github.com/a2ui-project/a2ui/pull/3181) 多目录 / request processor 一致性测试套件

**② Dart 核心进入 0.3.0 冲刺**：[#3194](https://redirect.github.com/a2ui-project/a2ui/pull/3194)（替代已关闭的 [#3183](https://redirect.github.com/a2ui-project/a2ui/pull/3183)）完成公共 API 重构；[#3192](https://redirect.github.com/a2ui-project/a2ui/pull/3192) 完成 Dart v0.9/v1.0 一致性对齐、模块布局，并跨 TS/Python/Dart 同步 `@` 前缀保留函数标识符规则。

**③ 协议演进**：[#3110](https://redirect.github.com/a2ui-project/a2ui/pull/3110) 已关闭——为 v1.0 `callRendererFunction` 增加可选 `surfaceId` 并在四端实现 surface 作用域求值；对应规范议题 [#3102](https://redirect.github.com/a2ui-project/a2ui/issues/3102) 仍开放。

**④ 结构整合与 SDK 瘦身**：[#3193](https://redirect.github.com/a2ui-project/a2ui/pull/3193) 将 `@a2ui/lit`、`@a2ui/angular`、`@a2ui/react`、`@a2ui/markdown-it` 迁入 `typescript/`；[#3176](https://redirect.github.com/a2ui-project/a2ui/pull/3176) 将 A2A/ADK 集成从 Python agent SDK 拆分为独立发行包（回应 [#3161](https://redirect.github.com/a2ui-project/a2ui/issues/3161)）。

**⑤ 目录治理**：[#3171](https://redirect.github.com/a2ui-project/a2ui/pull/3171)（数据变换函数移出 MCP 目录）、[#3167](https://redirect.github.com/a2ui-project/a2ui/pull/3167)（三端 prompt 生成器改用 `Catalog.to_json()` 并裁剪公共类型）、[#3168](https://redirect.github.com/a2ui-project/a2ui/pull/3168)（统一目录校验异常）、[#3166](https://redirect.github.com/a2ui-project/a2ui/pull/3166)（Swift v1.0 目录解析对齐并解除 conformance 跳过）。

**⑥ Issue 关闭（3 条）**：[#2115](https://redirect.github.com/a2ui-project/a2ui/issues/2115)（7 月底提交的 P2，inlineCatalogs 合并 bug，随多目录重构解决，历时近 3 个月）、[#3021](https://redirect.github.com/a2ui-project/a2ui/issues/3021)（Swift 表达式错误静默丢弃）、[#3132](https://redirect.github.com/a2ui-project/a2ui/issues/3132)（Swift 6.2.4 编译失败）。

**量化评估**：本窗口 12 个 PR 合并/关闭、3 个 Issue 关闭；多目录 TS 移植 + Dart 0.3.0 收尾意味着 v1.0 跨 SDK 一致性目标完成度显著提升，是近期推进幅度最大的一天之一。

---

## 4. 社区热点

按评论数排序（PR 评论数据本窗口缺失，以 Issue 为主）：

1. **[#3153](https://redirect.github.com/a2ui-project/a2ui/issues/3153)（评论 3）** — 数据变换函数从 MCP 目录拆分为 transformations 目录。诉求核心：`jmespath`/`split`/`regexCapture` 等并非 MCP 专属，目录边界应清晰；已有实施 PR [#3171](https://redirect.github.com/a2ui-project/a2ui/pull/3171)（先移入 filesystem sample，独立目录为后续步骤）。
2. **[#2115](https://redirect.github.com/a2ui-project/a2ui/issues/2115)（评论 3，已关闭）** — Python SDK schema 合并正确性，长期议题随重构关闭。
3. **[#3104](https://redirect.github.com/a2ui-project/a2ui/issues/3104)（评论 1）** — 以 `ProtocolCapabilities` 接口替换 10+ 文件中的裸 semver 比较，带 `a: api-simplicity` 标签，反映维护者对 API 可读性的持续投资。
4. **[#3120](https://redirect.github.com/a2ui-project/a2ui/issues/3120)（评论 1）** — SwiftUI 渲染器忽略 accessibility 属性，VoiceOver 不可用的无障碍诉求。
5. **[#3136](https://redirect.github.com/a2ui-project/a2ui/issues/3136)（评论 1）** — E2E 失败 bot 议题（PR #3092）。

**观察**：其余 25+ 条活跃 Issue 评论数为 0，社区互动以「报障」为主，深度讨论集中在维护者主导的架构议题；自动化噪音偏高（e2e/eval 失败 bot issue 5 条 + 周度合规审计 [#3163](https://redirect.github.com/a2ui-project/a2ui/issues/3163)）。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态/修复 |
|---|---|---|
| **P1 用户可见回归** | [#3158](https://redirect.github.com/a2ui-project/a2ui/issues/3158) `@a2ui/react` 0.13.0 在 Node/SSR 导入即抛 "HTMLElement is not defined"（0.12.0 回归） | ⚠️ 暂无修复 PR |
| **主干 CI 不稳定** | [#3151](https://redirect.github.com/a2ui-project/a2ui/issues/3151) 夜间 E2E 自 10-03 连续失败，根因 restaurant_finder v0.8 示例校验失败；[#3196](https://redirect.github.com/a2ui-project/a2ui/issues/3196) 今日新报（#3110 合入后）；同类 [#3159](https://redirect.github.com/a2ui-project/a2ui/issues/3159) / [#3136](https://redirect.github.com/a2ui-project/a2ui/issues/3136) / [#3131](https://redirect.github.com/a2ui-project/a2ui/issues/3131)；[#3119](https://redirect.github.com/a2ui-project/a2ui/issues/3119) evals 失败 | 未根治（11 天） |
| **跨 SDK 互操作** | [#3134](https://redirect.github.com/a2ui-project/a2ui/issues/3134) v0.9.1 capabilities 键名不一致（"v0.9" vs "v0.9.1"），web_core↔Python 互操作受影响；[#3175](https://redirect.github.com/a2ui-project/a2ui/issues/3175) ValidationResult 真值行为四端不一致 | 待修 |
| **Swift v1.0 正确性** | [#3172](https://redirect.github.com/a2ui-project/a2ui/issues/3172) `formatString` 渲染出 `{"path":…}` 而非绑定值；[#3149](https://redirect.github.com/a2ui-project/a2ui/issues/3149) `and/or/not` 将失败校验结果视作真值 | 部分由 [#3166](https://redirect.github.com/a2ui-project/a2ui/pull/3166) 推进 |
| **基础目录功能缺陷** | [#3138](https://redirect.github.com/a2ui-project/a2ui/issues/3138) `numeric` 拒绝 number 型 TextField 写入的字符串（输入即失败）；[#3123](https://redirect.github.com/a2ui-project/a2ui/issues/3123) Dart DateTimeInput 字面量 min/max 永远校验失败；[#3139](https://redirect.github.com/a2ui-project/a2ui/issues/3139) `openUrl` 接受 mailto/tel 违反 http/https 白名单 | 待修 |
| **可访问性** | [#3120](https://redirect.github.com/a2ui-project/a2ui/issues/3120) SwiftUI 渲染器未消费已解析的 accessibility 属性，绑定 label 亦被遗漏 | 待修 |
| **健壮性** | [#3165](https://redirect.github.com/a2ui-project/a2ui/issues/3165) inline catalog 本地 `$ref` 不可解析时静默失败、id 冲突无报告 | 与多目录栈（#3027/#3044）相关，待覆盖 |

---

## 6. 功能请求与路线图信号

- **[#3161](https://redirect.github.com/a2ui-project/a2ui/issues/3161)**（a2a-sdk 1.x 共存）→ 已有 [#3176](https://redirect.github.com/a2ui-project/a2ui/pull/3176) 依赖拆分，**采纳概率高**，或将随下个 Python SDK 版本落地。
- **[#3157](https://redirect.github.com/a2ui-project/a2ui/issues/3157)**（P2：iframe + MCP 目录）→ [#3056](https://redirect.github.com/a2ui-project/a2ui/pull/3056)（双重 iframe 沙箱）进行中，属明确 roadmap 项。
- **[#3153](https://redirect.github.com/a2ui-project/a2ui/issues/3153)** → [#3171](https://redirect.github.com/a2ui-project/a2ui/pull/3171) 已实施；**[#3155](https://redirect.github.com/a2ui-project/a2ui/issues/3155)**（prompt 公共类型去重）→ [#3167](https://redirect.github.com/a2ui-project/a2ui/pull/3167) 已实施。
- **[#3103](https://redirect.github.com/a2ui-project/a2ui/issues/3103)**（目录级 leaf `$defs` 跨 SDK 支持）→ 源自 #2724 规范放宽，属 v1.0 收尾必经项，**尚无对应 PR，建议排期**。
- **[#3137](https://redirect.github.com/a2ui-project/a2ui/issues/3137)**（MCP Web 搜索示例）→ 无 PR，但与 MCP 生态扩张方向一致。
- 代码健康投资：[#3104](https://redirect.github.com/a2ui-project/a2ui/issues/3104)（ProtocolCapabilities）、[#3190](https://redirect.github.com/a2ui-project/a2ui/issues/3190)（拆分 ~980 行的 ExpressDecompiler）、[#3116](https://redirect.github.com/a2ui-project/a2ui/issues/3116)（移除废弃 parser）——短期未必进版本，但反映 v1.0 后的重构窗口。

---

## 7. 用户反馈摘要

- **跨平台一致性是最大痛点**：[#3021](https://redirect.github.com/a2ui-project/a2ui/issues/3021)、[#3175](https://redirect.github.com/a2ui-project/a2ui/issues/3175)、[#3134](https://redirect.github.com/a2ui-project/a2ui/issues/3134) 均指向「同一 A2UI 文档在不同 SDK 行为不同」，多 SDK 用户对此高度敏感。
- **依赖过重**：[#3161](https://redirect.github.com/a2ui-project/a2ui/issues/3161) 反映 a2a-sdk 版本 pin（<0.4.0）在实际项目中阻断与 1.x 共存，用户被迫隔离环境——#3176 是对该痛点的直接回应。
- **SSR 场景有真实用户**：[#3158](https://redirect.github.com/a2ui-project/a2ui/issues/3158) 的导入期崩溃表明 React 包在服务端渲染中被实际使用。
- **「指南-实现-校验器」三方脱节**：[#3138](https://redirect.github.com/a2ui-project/a2ui/issues/3138)、[#3139](https://redirect.github.com/a2ui-project/a2ui/issues/3139)、[#3123](https://redirect.github.com/a2ui-project/a2ui/issues/3123) 显示校验过严或实现偏离指南，直接影响表单/日期输入等基础流。
- **无障碍需求真实存在**：[#3120](https://redirect.github.com/a2ui-project/a2ui/issues/3120) 以 VoiceOver 实测反馈缺失。
- **正面信号**：Issue 报告普遍含复现步骤与规范引用，社区与维护者共用同一套规范语言，协作质量高。

---

## 8. 待处理积压

1. **[#3151](https://redirect.github.com/a2ui-project/a2ui/issues/3151)** — 夜间 E2E 连续失败 **11 天未根治**，持续衍生 bot issue（#3196、#3159、#3136、#3131），建议优先修复根因或将 v0.8 示例临时隔离。
2. **[#3158](https://redirect.github.com/a2ui-project/a2ui/issues/3158)** — React 0.13.0 SSR 回归无修复 PR，用户直接受阻。
3. **[#2958](https://redirect.github.com/a2ui-project/a2ui/pull/2958)** — 自 10-02 开放 **12 天** 的 pub.dev 许可证识别修复，阻塞 Dart 包发布体验，等待 review。
4. **[#3102](https://redirect.github.com/a2ui-project/a2ui/issues/3102)** — `callRendererFunction` 执行上下文的规范定义仍开放；#3110 实现已合入，且 [#3196](https://redirect.github.com/a2ui-project/a2ui/issues/3196) 的失败与其合入时间相关，**需确认是否引入回归并推动规范收敛**。
5. **needs-triage 队列** — 20+ 条带标签未分流（#3196、#3175、#3172、#3165、#3138、#3139、#3134、#3123、#3120 等），建议安排集中 triage。
6. **Stacked PR 基准失效** — [#3183](https://redirect.github.com/a2ui-project/a2ui/pull/3183) 关闭后，[#3192](https://redirect.github.com/a2ui-project/a2ui/pull/3192) 的 stack 基准需重定向至 [#3194](https://redirect.github.com/a2ui-project/a2ui/pull/3194)；同时关注 [#3027](https://redirect.github.com/a2ui-project/a2ui/pull/3027)/[#3044](https://redirect.github.com/a2ui-project/a2ui/pull/3044) 长链合并顺序。

---

**结论**：今日开发推进强劲（多目录 TS 移植 + Dart 0.3.0 冲刺），项目向前迈出实质性一步；但 CI 稳定性与 triage 积压构成两大健康度风险，且 Swift 端 v1.0 一致性欠账仍需系统性收口。

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目日报 · 2026-10-14

**仓库**：[thesysdev/openui](https://github.com/thesysdev/openui) | **数据窗口**：过去 24 小时（截至 2026-10-13 收盘）

---

## 1. 今日速览

过去 24 小时项目处于**高活跃冲刺期**：PR 侧共 46 条更新（21 条待合并、25 条合并/关闭），Issue 侧仅 3 条且全部开放，呈"提交密集、批量收敛"的节奏。贡献主力为核心团队（ankit-thesys、zahlekhan、RahulDobhal、AbhinRustagi）与自动化机器人（devin-ai-integration、thesys-pr-creator），社区侧贡献以文档与集成为主。工作聚焦四条主线：**语言核心修复（错误上报、响应式绑定）、CLI 无交互化、reasoning 流式渲染、官网 SEO 与产品页面建设**。今日无版本发布，但 Changesets 版本 PR [#1395](https://redirect.github.com/thesysdev/openui/pull/1395) 待合并，**发版在即**。健康度信号良好：新 Issue [#1412](https://redirect.github.com/thesysdev/openui/issues/1412) 当天获维护者回应并被邀请提交 PR，6 月积压的大型 SEO PR [#615](https://redirect.github.com/thesysdev/openui/pull/615) 今日关闭，维护响应与清债速度均属一流。

---

## 2. 版本发布

今日无新版本发布。但发版信号明确：Changesets 自动生成的版本 PR [#1395](https://redirect.github.com/thesysdev/openui/pull/1395) 处于待合并状态，合并后将自动发布至 npm；配套的模板/示例依赖同步 PR [#1393](https://redirect.github.com/thesysdev/openui/pull/1393) 亦在队列中，近期累积的修复与文档改进应会集中出现在下一版本。

---

## 3. 项目进展

今日 25 条 PR 合并/关闭（数据中可见 7 条），按主题梳理：

- **示例工程标准化收敛**：三个 cookbook 的 `generate:apiKey` 脚本 PR（[#1407](https://redirect.github.com/thesysdev/openui/pull/1407)、[#1408](https://redirect.github.com/thesysdev/openui/pull/1408)、[#1409](https://redirect.github.com/thesysdev/openui/pull/1409)）与汇总性 PR [#1406](https://redirect.github.com/thesysdev/openui/pull/1406)（Angular 示例补脚本 + 全部示例添加 `AGENTS.md`）今日集中关闭。API Key 现可由 CLI 一键生成，示例仓库对 coding agent 的友好度完成系统性补齐。
- **SEO/站点基建批量落地**：6 月起长期悬挂的大型 SEO PR [#615](https://redirect.github.com/thesysdev/openui/pull/615) 今日关闭，其内容已拆解为系列小 PR 推进——[#1405](https://redirect.github.com/thesysdev/openui/pull/1405)（结构化数据与搜索标题）已关闭，[#1400](https://redirect.github.com/thesysdev/openui/pull/1400)（集成页代码化）、[#1410](https://redirect.github.com/thesysdev/openui/pull/1410)（Lighthouse 分数 + CI 防回退）、[#1372](https://redirect.github.com/thesysdev/openui/pull/1372)（JSON-LD）、[#1356](https://redirect.github.com/thesysdev/openui/pull/1356)（sitemap lastmod 修正）仍在评审。这项投入有明确数据支撑：Google 引荐流量 3.5k → 40k pageviews/月（约 10 倍增长）。
- **产品页面**：[#1402](https://redirect.github.com/thesysdev/openui/pull/1402)（AppLess 与 OUI-1 页移动端打磨、FAQ、交互插图）今日关闭；母 PR [#1364](https://redirect.github.com/thesysdev/openui/pull/1364) 继续评审，将取代 [#1363](https://redirect.github.com/thesysdev/openui/pull/1363)。
- **核心能力修复蓄力（未合并）**：[#1415](https://redirect.github.com/thesysdev/openui/pull/1415)（错误上报）、[#1382](https://redirect.github.com/thesysdev/openui/pull/1382)（响应式绑定）、[#1411](https://redirect.github.com/thesysdev/openui/pull/1411)（CLI 无提示模式）三条由团队提交的修复均处开放状态。

**整体评估**：今日关闭量集中在 docs / examples / chore 外围，语言核心修复在开放 PR 中蓄势——典型的"外围收尾 + 核心蓄力、临近发版"阶段。

---

## 4. 社区热点

- **Sage 集成申请（当日闭环）**：[#1412](https://redirect.github.com/thesysdev/openui/issues/1412)（今日新开，已有 1 条评论）——外部维护者 ZHangZHengEric 严格遵循 issue-first 贡献流程，申请将 Sage 的原生 Flutter 集成（v2.1.0）以 *Community integration* 身份列入 `ADOPTERS.md`。维护者 vishxrad 当天回应邀请提交 PR，作者随即提交 [#1414](https://redirect.github.com/thesysdev/openui/pull/1414)。诉求本质是**生态互惠展示**，同时验证了项目贡献流程的运转效率。
- **AIML API 商业集成 offer（持续悬置）**：[#1238](https://redirect.github.com/thesysdev/openui/pull/1238)（9 月 24 日开，今日仍活跃）——聚合 1000+ 模型、声称 40 万用户的服务商申请成为 verified provider，已在自有 fork 完成全部技术工作。背后是**商业 provider 准入标准尚未确立**的问题，决策已拖延约 20 天。
- **reasoning 事件链缺口（技术性追问）**：[#1413](https://redirect.github.com/thesysdev/openui/issues/1413)（今日新开）——用户 fihaaade 逐适配器追踪了 `@openuidev/react-headless` 内置流适配器不发 `REASONING_*` 事件的问题，直接关联根需求 [#414](https://redirect.github.com/thesysdev/openui/issues/414) 与进行中的渲染层 PR [#594](https://redirect.github.com/thesysdev/openui/pull/594)，是对 PR 覆盖完整性的高质量补充反馈。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| **高（用户数据丢失）** | 三元根节点下 `Input($note = $value)` 输入被清空而非保存：动态根求值把已创建的响应式绑定当普通数据求值 | 修复 PR [#1382](https://redirect.github.com/thesysdev/openui/pull/1382) 已提交（开放中） |
| **中高（静默失败）** | `Query`/`Mutation`/`Set` 中自定义函数抛错或违反返回 schema 时静默求值为 `null`，`Renderer.onError` 不触发、Errors 面板空白，问题难以定位 | 修复 PR [#1415](https://redirect.github.com/thesysdev/openui/pull/1415) 已提交（开放中） |
| **中（功能缺失）** | react-headless 内置流适配器丢弃 reasoning/thinking 输出，端到端不产生 `REASONING_*` 事件 | 渲染层修复在 [#594](https://redirect.github.com/thesysdev/openui/pull/594)（6 月起开放）；**适配器层尚无对应修复 PR**，为今日缺口 |

今日无崩溃级或回归级报告。两处核心 bug 均由维护者当日提交修复，响应速度值得肯定；**唯一风险点是 #1413 暴露的适配器层缺口目前无人认领**。

---

## 6. 功能请求与路线图信号

- **agentic 开发者体验（高概率进入下一版本）**：[#1411](https://redirect.github.com/thesysdev/openui/pull/1411) 让 `openui create` 在 agent/非交互 shell 下免提示运行（自动解析 agent 身份、补全 `--template`）。与今日关闭的 [#1406](https://redirect.github.com/thesysdev/openui/pull/1406)（全示例加 `AGENTS.md`）形成明确组合拳——**面向 coding agent 的 DX 是当前清晰的路线图方向**。
- **reasoning 渲染链（方向确定，可能拆两步）**：`#414 → #594 → #1413` 的链路显示合并意愿明确，但 #1413 暗示最终方案可能拆为"渲染层（#594）+ 适配器层（待补）"两步落地。
- **自定义表单验证（纳入短期版本概率低）**：[#391](https://redirect.github.com/thesysdev/openui/issues/391)（3 月 25 日，`help wanted`）请求 OpenUI Lang 支持应用级自定义验证逻辑（跨字段、异步校验等）。开放近 7 个月无关联 PR，今日再度活跃，值得跟踪是否被重新提上日程。
- **发版窗口**：[#1395](https://redirect.github.com/thesysdev/openui/pull/1395) + [#1393](https://redirect.github.com/thesysdev/openui/pull/1393) 组合表明近期将有一次集中发版。
- **provider 生态**：若 [#1238](https://redirect.github.com/thesysdev/openui/pull/1238) 达成准入共识，将树立第三方商业 provider 的准入先例。

---

## 7. 用户反馈摘要

- **Agent 工作流是高频真实场景**：[#1411](https://redirect.github.com/thesysdev/openui/pull/1411) 描述的痛点——agent 执行 `openui create` 时挂在交互提示或因缺少 `--template` 崩溃——印证大量用户在自动化/Coding agent 流水线中使用 OpenUI，CLI 的非交互兼容性是硬需求。
- **静默失败伤害生产信任**：[#1415](https://redirect.github.com/thesysdev/openui/pull/1415) 与 [#1413](https://redirect.github.com/thesysdev/openui/issues/1413) 共同指向同一类痛点：错误与推理内容被"无声吞掉"（Errors 面板空白、reasoning 端到端丢失），对在生产环境深度使用 react-headless 流处理的用户是排障噩梦。
- **OpenUI Lang 触及复杂度天花板**：[#391](https://redirect.github.com/thesysdev/openui/issues/391) 反映真实表单场景（超出必填/长度/格式的应用逻辑验证）无法表达，说明语言已进入复杂生产使用阶段。
- **生态吸引力与流程满意度**：Sage 作者愿按规范流程贡献并主动宣传集成（[#1412](https://redirect.github.com/thesysdev/openui/issues/1412)），AIML API 愿先行完成技术工作再谈准入（[#1238](https://redirect.github.com/thesysdev/openui/pull/1238)）；维护者当日回应社区请求的节奏获得正面体现。
- **量化亮点**：基于 PostHog 的 SEO 数据（Google 引荐 ~10 倍增长）显示官网与文档正在有效获客，是当前投入 SEO 系列改造的实证依据。

---

## 8. 待处理积压

| 条目 | 年龄 | 提醒事项 |
|---|---|---|
| [#594](https://redirect.github.com/thesysdev/openui/pull/594) reasoning 渲染 PR | **约 4.5 个月**（6/03 至今） | 长期未合并且今日被 [#1413](https://redirect.github.com/thesysdev/openui/issues/1413) 指出覆盖缺口，建议尽快决策：收尾合并或明确拆分计划 |
| [#1238](https://redirect.github.com/thesysdev/openui/pull/1238) AIML API 集成 | 约 20 天 | 商业集成申请悬置，需给出 provider 准入答复，避免类似申请持续积压 |
| [#391](https://redirect.github.com/thesysdev/openui/issues/391) 自定义表单验证 | **近 7 个月** | `help wanted` 标签长期无人认领，今日复活，建议明确接受/搁置立场 |
| [#1356](https://redirect.github.com/thesysdev/openui/pull/1356) / [#1372](https://redirect.github.com/thesysdev/openui/pull/1372) | 3–4 天 | devin 机器人 SEO PR 与人工提交的 [#1400](https://redirect.github.com/thesysdev/openui/pull/1400)/[#1410](https://redirect.github.com/thesysdev/openui/pull/1410)/[#1405](https://redirect.github.com/thesysdev/openui/pull/1405) 主题高度重叠，存在重复劳动与冲突风险，建议尽快归并排序 |
| [#1364](https://redirect.github.com/thesysdev/openui/pull/1364) 产品页 PR | 3 天 | 体量较大（移动端、FAQ、flare 文件取舍），且与 #1363/#1402 的承接关系需理清，久拖易产生冲突 |

---

**健康度小结**：开发节奏快（PR 吞吐 46/日、关闭 25）、维护响应及时（当日 bug 当日修复、社区请求当日回应）、清债能力可见（6 月大 PR 关闭）；主要风险在于 reasoning 事件链的完整性缺口与 SEO 人工/机器人 PR 的协同归并，建议在下一版本发布前优先收敛。

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render 项目动态日报

**📅 报告日期：** 2026-10-14（数据周期：过去 24 小时）
**📦 仓库：** [vercel-labs/json-render](https://github.com/vercel-labs/json-render)
**📊 活跃指标：** Issues 更新 1 条（新开 1 / 关闭 0）｜PR 更新 1 条（合并/关闭 1 / 待合并 0）｜新版本发布 1 个

---

## 1️⃣ 今日速览

json-render 今日完成 **v0.21.1 补丁版本发布**，由维护者 ctate 主导的发布准备 PR（#394）落地，同步了全部 29 个公共 `@json-render` 包。本次发布聚焦三项 bug 修复——表单点分值查找（#353）、数值验证（#389）、`s.any()` 类型推断（#390），并整合了两批文档更新。社区侧活跃度偏低，仅新增 1 个 Issue（#395，shadcn skill 命名冲突），无待合并 PR，无崩溃或回归类报告。项目当前处于**稳定维护期**，重心从功能扩展转向正确性打磨与文档完善，整体健康度良好。

---

## 2️⃣ 版本发布

### 🏷️ [v0.21.1](https://github.com/vercel-labs/json-render/releases/tag/v0.21.1)（补丁版本）

**Bug 修复：**

| 修复项 | 内容 | 关联 Issue |
|---|---|---|
| **Dotted form values** | 表单值查找时保留字面量邮箱、URL 和版本字符串，不再将其误判为缺失的状态路径 | [#353](https://redirect.github.com/vercel-labs/json-render/issues/353) |
| **Numeric validation** | 拒绝部分数字字符串（如 `"123abc"`）、空字符串及纯空白字符串 | [#389](https://redirect.github.com/vercel-labs/json-render/issues/389) |
| **`s.any()` 类型推断** | 修复类型推断问题（来自发布 PR 描述） | [#390](https://redirect.github.com/vercel-labs/json-render/issues/390) |

**其他更新：** 文档更新（[#340](https://redirect.github.com/vercel-labs/json-render/pull/340)、[#363](https://redirect.github.com/vercel-labs/json-render/pull/363)）、root 与 docs 发布说明、changelog 刷新。

**⚠️ 迁移注意事项：**
- 版本号为补丁级（0.21.0 → 0.21.1），**理论无破坏性 API 变更**，可安全升级。
- 但**数值验证行为收紧**需重点关注：此前可能被宽松接受的部分数字字符串、空串、纯空白串现在会被显式拒绝。依赖旧版宽松验证行为的表单校验逻辑，建议升级后做一轮回归测试，尤其是含用户自由输入的场景。

---

## 3️⃣ 项目进展

### ✅ PR [#394](https://redirect.github.com/vercel-labs/json-render/pull/394) "Prepare v0.21.1 release"（已关闭/合并）

- **作者：** ctate ｜ **创建/更新：** 2026-10-13
- **内容：** 整合 3 项 bug 修复（#353、#389、#390）+ 2 项文档更新（#340、#363），同步全部 29 个公共 `@json-render` 包，添加 root 与 docs 发布说明并刷新 changelog。

**进展解读：** 这是标准的版本发布流程 PR，标志 v0.21.1 正式落地。本次迭代在三个方向提升了项目成熟度：
1. **表单状态管理正确性**（点分值查找不再误伤字面量字符串）；
2. **输入验证健壮性**（堵住半数字/空串校验漏洞）；
3. **类型系统 DX**（`s.any()` 推断修复）。

29 个包的批量同步也印证了项目的 monorepo 多包发布机制运转顺畅，发布工程化程度较高。

---

## 4️⃣ 社区热点

今日社区讨论量较少（唯一新 Issue 评论数为 0），热点来自：

### 🔥 [#395](https://redirect.github.com/vercel-labs/json-render/issues/395) "shadcn skill name conflict" [OPEN]
- **作者：** slargat ｜ **创建：** 2026-10-13 ｜ **评论：** 0 ｜ **👍：** 0
- **诉求分析：** 用户安装 json-render 提供的 shadcn skill 时，因**命名与官方 shadcn skill 冲突，导致官方 skill 被覆盖**，建议重命名。这反映出两个信号：① 已有真实用户将 json-render 与 shadcn 生态深度集成使用；② skill 分发环节的命名规范尚未考虑与第三方官方组件的共存问题。若用户基数增长，此类安装冲突会直接抬高新用户接入成本，属于生态兼容性隐患。

---

## 5️⃣ Bug 与稳定性

**今日新报告（按严重程度）：**

| 严重程度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 🟡 中低 | [#395](https://redirect.github.com/vercel-labs/json-render/issues/395) shadcn skill 命名冲突，安装时覆盖官方 skill | OPEN | ❌ 暂无 |

> 该问题属**安装/分发层冲突**，不影响运行时稳定性，但会造成用户环境破坏（官方 skill 被覆盖），建议尽快响应。

**今日已修复（随 v0.21.1 发布）：**
- ✅ [#353](https://redirect.github.com/vercel-labs/json-render/issues/353) 表单点分值查找误判（影响含邮箱/URL/版本号的表单场景）
- ✅ [#389](https://redirect.github.com/vercel-labs/json-render/issues/389) 数值验证宽松漏洞（`"123abc"` 等字符串被错误接受）
- ✅ [#390](https://redirect.github.com/vercel-labs/json-render/issues/390) `s.any()` 类型推断缺陷

**稳定性评估：** 本次发布的修复均为防御性正确性修复，无崩溃/回归类新报告，稳定性趋势向好。

---

## 6️⃣ 功能请求与路线图信号

- **今日无正式功能请求。** #395 中"重命名 skill"的建议可视为轻量级改进项，实现成本低（改 skill 标识符 + 发布说明），**大概率在后续补丁版本中被采纳**。
- **路线图推断（基于发布内容）：** 维护者优先级呈现 **稳定性修复 > 文档完善 > 功能扩展** 的排序。连续的补丁迭代 + 文档更新（#340、#363）表明项目处于打磨期，短期内预计继续以小步快跑的 0.21.x 补丁形式演进，而非大版本功能跃迁。
- **架构信号：** 29 个公共包的同步机制说明发布流程高度自动化，为频繁小版本迭代提供了工程基础。

---

## 7️⃣ 用户反馈摘要

| 维度 | 内容 | 来源 |
|---|---|---|
| **痛点** | shadcn skill 安装与官方组件命名冲突、互相覆盖，集成体验受阻 | [#395](https://redirect.github.com/vercel-labs/json-render/issues/395) |
| **使用场景** | 用户实际在 shadcn 生态中部署 json-render 的 skill 能力，说明项目与主流 React 组件工作流的结合是真实需求 | [#395](https://redirect.github.com/vercel-labs/json-render/issues/395) |
| **态度** | 报告者措辞友好（"thanks for sharing"），主动提出建设性建议而非单纯抱怨，社区氛围积极 | [#395](https://redirect.github.com/vercel-labs/json-render/issues/395) |
| **负面反馈** | 今日无强烈不满或流失信号 | — |

**反馈样本量提示：** 本周期仅 1 条 Issue，用户画像代表性有限。

---

## 8️⃣ 待处理积压

- ⏳ **[#395](https://redirect.github.com/vercel-labs/json-render/issues/395)（新开，尚无维护者回复）**：虽非长期积压，但涉及安装破坏（覆盖官方 skill），建议维护者 48 小时内确认修复方案（重命名 or 加命名空间前缀），避免影响 shadcn 用户群接入。
- 📋 **积压数据说明：** 本期数据窗口（24 小时）内未发现长期未响应的历史 Issue/PR；#353、#389、#390 已随 v0.21.1 关闭清账。如需完整的积压健康度分析（如 30 天未响应项），建议扩大数据采集周期。

---

> **数据免责声明：** 本日报基于单日（2026-10-13 ~ 2026-10-14）GitHub 数据生成，样本量较小（1 Issue / 1 PR / 1 Release），趋势性结论仅供参考，建议结合多日连续数据观察。

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报

**日期：** 2026-10-14 ｜ **数据来源：** [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 1. 今日速览

过去 24 小时 CopilotKit 呈现 **"PR 侧高吞吐、Issue 侧零关闭"** 的不对称活跃状态：PR 更新 31 条（19 条待合并、12 条合并/关闭），Issue 更新 7 条（全部为开启/活跃，0 条关闭），无新版本发布。今日主线工作高度集中在 **Showcase 基础设施**——PocketBase 数据库压缩三部曲落地、LangGraph 1.x 兼容性升级与自动化兼容性仪表盘上线。社区贡献者表现突出：jpr5、contextablemark 持续高频输出，外部用户 Laptopmini 一日内连报 2 个 A2UI 问题并自带修复 PR。需要警惕的是，一条 UI 渲染 Bug（#5979）已积压约 3 个月且今日仍在活跃讨论，Issue 响应速度明显滞后于 PR 合并节奏。

---

## 2. 版本发布

今日无新版本发布（近 24 小时 Releases：0）。但需注意 [#7789](https://redirect.github.com/CopilotKit/CopilotKit/pull/7789) 带有 `!` 破坏性变更标记（移除 Discord/Telegram 渠道支持），若合入，下个版本将包含不兼容变更，详见第 6 节。

---

## 3. 项目进展

今日 12 条 PR 合并/关闭（数据口径为"已合并/关闭"，未细分），重点集群如下：

**① PocketBase 数据库压缩系列落地（基础设施健康度显著提升）**
- [#7793](https://redirect.github.com/CopilotKit/CopilotKit/pull/7793)（关闭）：copy-and-swap 压缩基础方案，解决 SQLite 删除行后空间不回收导致的数据库膨胀（生产 35GB / 预发 42GB，且 `VACUUM` 不可行）
- [#7803](https://redirect.github.com/CopilotKit/CopilotKit/pull/7803)（关闭）：改在 `/tmp` 构建、通过 rename 切换，避免写入挤占 PocketBase 数据卷（70MB/s / 3,000 IOPS 上限）造成线上写入阻塞
- [#7804](https://redirect.github.com/CopilotKit/CopilotKit/pull/7804)（关闭）：修复压缩推送的续传校验（sha256 比对）与 `dd` 错误处理等 4 处评审问题

**② LangGraph 1.x 兼容性升级（Python 侧完成）**
- [#7806](https://redirect.github.com/CopilotKit/CopilotKit/pull/7806)（关闭）：`langgraph 1.1.6→1.2.15`、`langgraph-api 0.7.101→0.16.0`，覆盖 langgraph-python 与 langgraph-fastapi
- [#7807](https://redirect.github.com/CopilotKit/CopilotKit/pull/7807)（关闭）：配套 CI 修复——等待 Railway 框架部署完成后再执行兼容性审计，避免误判

**③ 兼容性仪表盘自动化**
- [#7805](https://redirect.github.com/CopilotKit/CopilotKit/pull/7805)（关闭）：兼容性数据从"需重建 dashboard 才能更新的打包快照"改为 staging/prod 独立评估，支持每日、按需及框架部署后自动刷新

**④ Runtime 修复**
- [#6588](https://redirect.github.com/CopilotKit/CopilotKit/pull/6588)（关闭）：规范化 OpenAI 风格的 LangGraph 嵌套工具描述符，修复 [#6570](https://redirect.github.com/CopilotKit/CopilotKit/issues/6570)

**⑤ 依赖维护**：[#7798](https://redirect.github.com/CopilotKit/CopilotKit/pull/7798)（关闭）：renovate 自动升级 actionlint `v1.80.0→v1.80.1`

**进展评估：** 今日合并/关闭工作几乎全部投向 showcase 运维与框架兼容性工程，终端用户可见的功能变化有限，但数据库、CI、兼容性监控等基础设施债务被系统性清偿，为后续多框架支持铺路。

---

## 4. 社区热点

（按评论数排序；PR 侧评论数据缺失，以 Issue 为主）

| 热度 | 议题 | 数据 | 核心诉求 |
|---|---|---|---|
| 🔥🔥🔥 | [#5979](https://redirect.github.com/CopilotKit/CopilotKit/issues/5979) CopilotChat 快速滚动渲染错乱 | 6 评论 / 👍1 / 开启 3 个月 / **今日更新** | 长对话重度用户对渲染稳定性的诉求长期未被回应 |
| 🔥🔥 | [#6819](https://redirect.github.com/CopilotKit/CopilotKit/issues/6819) 为废弃的 CopilotTextarea 补 `@deprecated` 标注 | 3 评论 / **今日更新** | "学生预留"任务，反映项目的新人培养与 API 治理机制 |
| 🔥🔥 | [#7590](https://redirect.github.com/CopilotKit/CopilotKit/issues/7590) `emit_tool_calls` 白名单被 v2 路径静默忽略 | 2 评论 / good first issue | Python/JS 用户发现文档承诺（`str \| List[str]` 精细控制）与实现不符，信任损耗 |
| 🔥 | [#7354](https://redirect.github.com/CopilotKit/CopilotKit/issues/7354) BuiltInAgent 模型文档/类型误导 | 2 评论 | 用户误以为 Responses API 与新版 OpenAI 模型不受支持 |
| 🔥 | [#7731](https://redirect.github.com/CopilotKit/CopilotKit/issues/7731) Hosted Intelligence 返回 503 | 1 评论 / **今日更新** | 托管服务用户被完全阻断，可用性焦虑 |

PR 侧今日最活跃：[#7808](https://redirect.github.com/CopilotKit/CopilotKit/pull/7808)（LangGraph TS showcase 升级至 langgraph-api 1.5，今日新建）、[#7506](https://redirect.github.com/CopilotKit/CopilotKit/pull/7506)（自管理 React+FastAPI 示例，今日更新）。

**信号解读：** 热点从"功能不可用"转向"文档/类型契约与实际行为不一致"及"长尾 UI 稳定性"，说明核心功能已趋成熟，质量摩擦点向后移。

---

## 5. Bug 与稳定性

按严重程度排列（今日活跃或新报告）：

| 严重度 | Issue | 问题概述 | Fix PR 状态 |
|---|---|---|---|
| **高** | [#7731](https://redirect.github.com/CopilotKit/CopilotKit/issues/7731) | Hosted Intelligence 返回 HTTP 503，阻断 OpenDots 会话创建与 CLI 项目列表（今日更新） | ❌ 暂无——托管服务侧故障，需官方处理 |
| **中** | [#5979](https://redirect.github.com/CopilotKit/CopilotKit/issues/5979) | 快速滚动/切换标签页后消息重叠、渲染错位；3 个月未修 | ❌ 暂无 |
| **中** | [#7802](https://redirect.github.com/CopilotKit/CopilotKit/issues/7802) | `includeSchema: false` 仍发送全部自定义组件 JSON schema，默认路径重复发送两次（payload/token 膨胀，昨日新报） | ❌ 暂无（同作者 [#7801](https://redirect.github.com/CopilotKit/CopilotKit/pull/7801) 针对 #7800，非本条） |
| **中** | [#7590](https://redirect.github.com/CopilotKit/CopilotKit/issues/7590) | `emit_tool_calls` 字符串/列表白名单在 AG-UI 路径静默失效 | ❌ 暂无（good first issue 待认领） |
| **中低** | [#7800](https://redirect.github.com/CopilotKit/CopilotKit/issues/7800) | a2ui-renderer `RendererProps.children` 类型缺 `basePath`，列表模板无法正确解析相对绑定 | ✅ [#7801](https://redirect.github.com/CopilotKit/CopilotKit/pull/7801) 同日提交，待合并 |
| **低** | [#7354](https://redirect.github.com/CopilotKit/CopilotKit/issues/7354) | BuiltInAgent 模型契约未在类型/文档/测试中体现 | ❌ 暂无 |
| **低** | [#6819](https://redirect.github.com/CopilotKit/CopilotKit/issues/6819) | 废弃组件缺 `@deprecated` JSDoc | ❌ 学生预留任务无人认领 |

**修复存量（待合并 PR，对应历史 Bug）：** [#7209](https://redirect.github.com/CopilotKit/CopilotKit/pull/7209)（修复 [#3170](https://redirect.github.com/CopilotKit/CopilotKit/issues/3170)，A2A Agent 的 Authorization 头未透传，**涉安全**）、[#6550](https://redirect.github.com/CopilotKit/CopilotKit/pull/6550)（修复 [#6526](https://redirect.github.com/CopilotKit/CopilotKit/issues/6526)，Zod v4 catalog 被静默清空）。

---

## 6. 功能请求与路线图信号

结合待合并 PR 判断可能的下一版本方向：

- **MCP Apps 交互升级（可能性高）**：[#7760](https://redirect.github.com/CopilotKit/CopilotKit/pull/7760) 实现 `ui/request-display-mode` 全屏模式，一次性覆盖 React/Vue/Angular 三前端——MCP Apps 是当前明确的投入方向
- **Channels 战略收缩（破坏性变更预警）**：[#7789](https://redirect.github.com/CopilotKit/CopilotKit/pull/7789) 修复 Teams mentions 并**移除 Discord/Telegram 支持**，渠道支持聚焦 Teams + WhatsApp；依赖这两个渠道的集成方需提前准备迁移
- **框架兼容矩阵持续扩张**：[#7767](https://redirect.github.com/CopilotKit/CopilotKit/pull/7767)（AG2 1.x 迁移）+ 今日落地的 [#7805](https://redirect.github.com/CopilotKit/CopilotKit/pull/7805)/[#7806](https://redirect.github.com/CopilotKit/CopilotKit/pull/7806) + 进行中的 [#7808](https://redirect.github.com/CopilotKit/CopilotKit/pull/7808)，配合自动化兼容仪表盘，表明"主流 Agent 框架版本兼容"是明确的路线图支柱
- **自管理部署路径**：[#7506](https://redirect.github.com/CopilotKit/CopilotKit/pull/7506) 提供无需 CopilotKit Node runtime 的 React+FastAPI 直连 `/ag-ui` 示例，响应 self-hosted 社区诉求
- **性能优化**：[#7748](https://redirect.github.com/CopilotKit/CopilotKit/pull/7748) 消除并行工具调用的重复修复扫描（request-local `Set<Message>` 去重）
- **模型契约透明化**：[#7354](https://redirect.github.com/CopilotKit/CopilotKit/issues/7354) 暗示将明确 Responses API 与新 OpenAI 模型支持契约

---

## 7. 用户反馈摘要

- **长会话重度用户的不满：** [#5979](https://redirect.github.com/CopilotKit/CopilotKit/issues/5979) 中用户反复复现快速滚动 + 标签切换后的消息堆叠错乱，3 个月未有修复进展，挫败感在累积（6 条评论持续追进）
- **托管服务依赖方的可用性焦虑：** [#7731](https://redirect.github.com/CopilotKit/CopilotKit/issues/7731) 用户配置好 `CPK_INTELLIGENCE_API_KEY` 后仍被 503 阻断，OpenDots 与 CLI 双双不可用
- **A2UI 出现深度定制用户群（重要信号）：** 贡献者 Laptopmini 一日内围绕自定义 catalog 提报 [#7800](https://redirect.github.com/CopilotKit/CopilotKit/issues/7800)/[#7802](https://redirect.github.com/CopilotKit/CopilotKit/issues/7802)——摩擦点集中在列表模板类型表达力与 schema payload 控制（`includeSchema`），说明 A2UI 正从早期采用走向生产级深度使用
- **"文档说有但实际没有"是信任损耗点：** [#7590](https://redirect.github.com/CopilotKit/CopilotKit/issues/7590) 的 `emit_tool_calls` 白名单、[#7354](https://redirect.github.com/CopilotKit/CopilotKit/issues/7354) 的模型支持范围，均属文档承诺与实现脱节
- **正向信号：** 外部贡献者（jpr5、contextablemark、yannj-fr、ZenAlexa 等）产出高频且质量高（PR 均含详尽根因分析）；用户报 Bug 自带修复 PR（[#7801](https://redirect.github.com/CopilotKit/CopilotKit/pull/7801)），社区工程素养优秀

---

## 8. 待处理积压

建议维护者优先关注以下长期未响应项目：

| 项目 | 类型 | 开启时间 | 积压时长 | 关注理由 |
|---|---|---|---|---|
| [#5979](https://redirect.github.com/CopilotKit/CopilotKit/issues/5979) | Issue | 2026-07-15 | **~3 个月** | 6 评论持续活跃，今日仍更新，无 fix PR，社区信任风险最高 |
| [#6271](https://redirect.github.com/CopilotKit/CopilotKit/pull/6271) | PR | 2026-07-31 | ~75 天 | Angular 审计修复（query_data 数据集缺失导致静默 mock 数据），今日更新 |
| [#6550](https://redirect.github.com/CopilotKit/CopilotKit/pull/6550) | PR | 2026-08-18 | ~57 天 | 修复 Zod v4 catalog 被清空，直接影响 a2ui 用户可用性 |
| [#6819](https://redirect.github.com/CopilotKit/CopilotKit/issues/6819) | Issue | 2026-09-01 | ~43 天 | 学生预留任务持续无人认领，今日更新 |
| [#6856](https://redirect.github.com/CopilotKit/CopilotKit/pull/6856) | PR | 2026-09-02 | ~42 天 | 发布流程缺陷（scope 版本线互相冻结），影响 Angular 包发布节奏 |
| [#7209](https://redirect.github.com/CopilotKit/CopilotKit/pull/7209) | PR | 2026-09-16 | ~28 天 | **安全相关**：A2A Agent 鉴权头未透传（修复 #3170），建议加速评审 |
| [#7503](https://redirect.github.com/CopilotKit/CopilotKit/pull/7503) | PR | 2026-09-28 | ~16 天 | 与今日已关闭的 [#7806](https://github.com/CopilotKit/CopilotKit/CopilotKit/pull/7806) 目标重叠，建议明确去留并告知贡献者 |

**积压结构特征：** Issue 侧"7 开 0 关"表明分诊/响应能力不足；PR 侧 19 条待合并中有 4+ 条超一个月未决，评审带宽可能是瓶颈。安全相关 PR（#7209）与高活跃 Bug（#5979）应列入维护者本周优先队列。

---

*本报告基于 2026-10-13 至 2026-10-14 的 GitHub 公开数据自动汇总，PR "合并/关闭"为统一口径，未细分合并与未合关闭。*

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*