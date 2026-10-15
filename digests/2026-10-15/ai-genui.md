# 生成式 UI 生态日报 2026-10-15

> Issues: 33 | PRs: 105 | 覆盖项目: 4 个 | 生成时间: 2026-10-15 03:49 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告

**数据基准**：2026-10-15，过去 24 小时 GitHub 更新 | 覆盖项目：a2ui、OpenUI、json-render、CopilotKit

---

## 1. 生态全景

生成式 UI 赛道正从“各自建设”进入**标准竞合期**：a2ui 处于 v1.0 前的生态扩张高峰，OpenUI 刚完成 1.0 规范/文档收官，CopilotKit 以成熟框架产品形态切入原生生成式 UI（A2UI over AG-UI 原型）。最具标志性的是当日出现的两条跨项目信号——OpenUI 维护者主动向 a2ui 提议语法统一（a2ui #3214），CopilotKit 原型直接构建在 A2UI 概念之上（#7819），说明**协议层与框架层的分层结构开始显形，互操作取代单纯功能竞争成为下一战场**。MCP 正在成为公共组合层，两个项目同日推进 MCP 相关深度集成。三个活跃项目当日均零发布、但均呈发版前整固形态，是少见的同步节奏；json-render 无活动，暂列观察。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | 待合并 PR | 已合并/关闭 PR | Release |
|---|---|---|---|---|---|
| **a2ui** | 22（新开/活跃 17，关闭 5） | 50 | 29 | 21 | 0（Dart core 0.3.0 内部升版） |
| **OpenUI** | 2（0 关闭） | 30 | 9 | 21 | 0（changesets 发版 PR #1395 待合并） |
| **CopilotKit** | 9（新开 6，关闭 1） | 25 | 18 | 7 | 0 |
| **json-render** | 0 | 0 | 0 | 0 | 0 |

**要点**：
- **总量最高**：a2ui（72 项更新），多线并行开发，但 29 个待合并 PR 叠加主分支 E2E 红灯（#3228），存在验证链阻塞风险。
- **处理效率最高**：OpenUI，PR 处理率 70%，且约 45% 由 bot 完成，人类维护者聚焦规范与核心代码。
- **响应质量最优**：CopilotKit，新 Issue 多数当日获得维护者回复；P0 级问题当日关闭的先例来自 a2ui（#3229）。

---

## 3. 共同关注的功能方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **MCP 深度集成** | a2ui、CopilotKit | a2ui 的 iframe/MCP 目录已形成 schema→包→组件→指南→示例完整链路（7+ PR，含 #3226 Kanban 示例）；CopilotKit 推进 MCP Apps `ui/update-model-context`（#7811），将组件状态注入 agent run，React/Vue/Angular 同步落地 |
| **跨语言/跨框架一致性** | a2ui、OpenUI、CopilotKit | a2ui 以 TS/Python/Dart 三语言 conformance 测试驱动字节级一致；OpenUI 已覆盖 React/Vue/Svelte/Angular 运行时，社区请求 Solid（#1326）；CopilotKit 在 TS/Go/Python 三运行时统一行为 |
| **互操作与格式可读性** | a2ui、OpenUI | a2ui 用户因 capabilities 版本键不一致导致渲染器与 agent 握手失败（#3134），跨目录 `$ref` 互引开题（#3230）；OpenUI 用户要求 `.toMarkdown()` 以适配 LLM 生态与调试存储（#681） |
| **Agent-first 开发体验** | OpenUI、a2ui、CopilotKit | OpenUI 落地 CLI 非交互化（#1411）与 agent 安装提示词（#1425）；a2ui 三语言 Agent SDK 并行推进；CopilotKit 探索组件状态→RunAgentInput 注入 |
| **规模化性能** | a2ui、CopilotKit | a2ui Swift 渲染器 2000 项列表全树重解析问题（#3200 → 增量渲染 PR #3203）；CopilotKit 长线程 `fields=id` 优化（#7796）与 40MB 文档包治理（#7821/#7822） |

---

## 4. 差异化定位分析

| 项目 | 生态层次 | 技术路线 | 目标用户 | 当日重心 |
|---|---|---|---|---|
| **a2ui** | **协议/规范层** | 语言 spec + 三语言 SDK + 多端渲染器（React/Flutter/Swift），conformance 测试驱动 | AI 厂商、多端应用团队 | multi-catalog 能力、Dart 追平、MCP 目录生态 |
| **OpenUI** | **语言 + 运行时层** | lang-core + npm 包矩阵 + 多框架一方运行时，高度自动化交付 | Web 开发者、coding agent | 1.0 收官（spec/文档/README）、品牌回归 "Generative UI" 口径 |
| **CopilotKit** | **框架/产品层** | AG-UI 协议 + React 组件库 + 自托管/Hosted Intelligence 运行时 | 构建生产级 copilot 的产品与企业团队 | 可靠性加固（#7826）、类型/文档债务、A2UI 原型（#7819） |
| **json-render** | 实验性渲染库 | JSON→UI，Vercel Labs 出品 | — | 静默 |

**关键洞察**：三者呈“协议—语言运行时—框架产品”的栈式分布，且交叉已实际发生——CopilotKit 既有 `createCatalog` 的 A2UI 类型体验（#7814 在修），又在 #7819 中明确评估 A2UI over AG-UI 作为原生生成式 UI 架构；OpenUI 一边自持“开放标准”定位（tagline 回滚至 "The Open Standard for Generative UI"），一边主动寻求与 a2ui 语法统一。**a2ui 的协议设计正被上下游同时消费，其标准层卡位价值当日得到双重确认。**

---

## 5. 社区热度与成熟度

| 项目 | 成熟度阶段 | 社区特征 |
|---|---|---|
| **a2ui** | 快速迭代期（0.9→1.0 生态扩张） | 活跃度总量第一；外部战略级信号（OpenUI 合作提议获 4👍）；贡献闭环良好（#3200 报告者即修复 PR 作者）；**短板**：P2 bug 审查滞后（#3158 零维护者回复超 3 天，6 个 P2 无 fix PR） |
| **OpenUI** | 1.0 刚确立 | 合并吞吐最强（21 条/日）、自动化成熟度最高；生态声量上升（Lynx 4.0 官宣集成、Sage 加入 ADOPTERS、tweet wall 更新）；**短板**：社区 Issue 响应偏弱（日新 Issue 仅 2 条，#681 积压近 4 个月无人认领） |
| **CopilotKit** | 成熟产品，质量深水区 | Issue 响应当日化；贡献结构多元（外部“审计式”贡献者 Laptopmini 单日 6 Issue + 4 PR、QA bot 参与修复）；企业用户诉求清晰可辨（类型安全、生产 Intelligence 稳定性）——这是三者中用户生产环境压力最直接的项目 |
| **json-render** | 观察期 | 过去 24 小时无任何活动 |

---

## 6. 值得关注的趋势信号

**① 标准竞合启动，互操作成为新战场。** OpenUI 提议语法统一（a2ui #3214）与 CopilotKit 的 A2UI 原型（#7819）同日出现，预示碎片化格局可能走向收敛。**开发者启示**：选型时应优先评估协议中立性与可迁移性，避免深度绑定单一私有 UI DSL；关注 a2ui 与 OpenUI 谈判进展，其结果将影响 2026 底的事实标准格局。

**② MCP 成为生成式 UI 的组合层。** a2ui 的 MCP 目录生态与 CopilotKit 的 MCP Apps 双向状态同步均指向“UI 组件/目录即 MCP 资源”的架构模式。**启示**：掌握 MCP 集成能力将成为生成式 UI 技术栈的默认要求。

**③ 兼容性“最后一公里”决定采用率。** 当日三个项目的典型摩擦全部是兼容性问题：a2ui 版本键两套命名致握手失败（#3134）、CopilotKit Zod 3/4 双版本致 1,683 个类型错误（#7816）、OpenUI npm README 仍描述 0.x API（#1394 已修）。**启示**：依赖卫生与文档-实现一致性比新功能更直接影响采用决策，企业集成前应做依赖树审计。

**④ Conformance 测试成为多语言项目的质量门槛。** a2ui 以三语言字节级一致性测试驱动开发，OpenUI 1.0 同步交付规范 + 一致性夹具 + CI 运行器（#1277）。**启示**：跨语言 SDK 团队应将“测试先行”作为多端一致性的基础设施，而非事后补齐。

**⑤ Agent-first DX 成为行业共识。** OpenUI 的 CLI 无提示化、CopilotKit 的状态注入、a2ui 的三语言 Agent SDK 表明“让 coding agent 顺畅消费你的库”已是标配投入。**启示**：库作者应将非交互 shell 兼容、agent 可读文档纳入基础质量项。

**⑥ 三项目同步逼近发版窗口。** a2ui Dart 0.3.0 待转正式 Release（29 PR 待合并）、OpenUI changesets PR（#1395）合并即发版、CopilotKit 修复型 PR 积压建议切版本。**启示**：未来 1–2 周的版本内容是最可靠的路线图验证点——a2ui 的 multi-catalog、OpenUI 的 react-ui 新 API、CopilotKit 是否推进 #7819 原型，值得持续跟踪作为选型时点判断依据。

---

**一句话结论**：生成式 UI 生态当日最值得记录的不是任何单一功能，而是**分层格局的确立与跨项目合作的开启**——a2ui 卡位协议层且被上下游双向验证，OpenUI 以工程效率完成 1.0 收官，CopilotKit 在生产可靠性深水区原生探索生成式 UI；对开发者而言，当前是观察标准收敛走向、暂缓深度绑定单一 DSL 的窗口期。

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目动态日报
**日期：2026-10-15 | 数据周期：过去 24 小时**

---

## 1. 今日速览

过去 24 小时 a2ui 维持高强度开发节奏：22 条 Issue 更新（17 条新开/活跃，5 条关闭）、50 条 PR 更新（29 条待合并，21 条已合并/关闭），无新版本发布。开发呈三条主线并行推进：TypeScript Agent SDK 的多目录能力移植、iframe/MCP 目录生态建设（7+ PR 形成完整链路）、Dart SDK 一致性补齐。稳定性方面出现两处波动：主分支 E2E 测试失败（[#3228](https://redirect.github.com/a2ui-project/a2ui/issues/3228)）与 genui CI P0 故障（[#3229](https://redirect.github.com/a2ui-project/a2ui/issues/3229)，当日即关闭，响应迅速）。社区侧出现高质量外部信号：OpenUI 维护者提议语法统一（[#3214](https://redirect.github.com/a2ui-project/a2ui/issues/3214)，4 👍）。整体评估：**项目处于 v1.0 生态扩张期，活跃度高，但主分支 CI 红灯与若干待审 P2 bug 需要及时处理。**

---

## 2. 版本发布

本期无新版本发布（已省略）。注：已合并的 [#3192](https://redirect.github.com/a2ui-project/a2ui/pull/3192) 在内部将 `dart/a2ui_core` 升至 0.3.0，预计近期将形成正式 Release。

---

## 3. 项目进展

**已合并/关闭的重要 PR**（数据中可见部分，24h 内合计 21 条合并/关闭）：

- **[#3192](https://redirect.github.com/a2ui-project/a2ui/pull/3192)**（gspencergoog）：`dart/a2ui_core` 完成 v0.9/v1.0 一致性与模块布局对齐，统一 TS/Python/Dart 三语言的 `@` 前缀保留函数规则，并升版 0.3.0 —— **Dart SDK 追平 TS/Python 的关键里程碑**。⚠️ 但其关联提交触发主分支 E2E 失败（[#3228](https://redirect.github.com/a2ui-project/a2ui/issues/3228)），需跟进。
- **[#3088](https://redirect.github.com/a2ui-project/a2ui/pull/3088)**（andrewkolos）：`a2ui_flutter` v0.9 基础目录（18 个 Material 组件）关闭，Flutter 渲染器功能基座落地；配套 [#3223](https://redirect.github.com/a2ui-project/a2ui/pull/3223) 当日跟进修复 API 重命名导致的编译断裂，迭代速度可观。
- **[#3207](https://redirect.github.com/a2ui-project/a2ui/pull/3207)**（nan-yu）：六个规范 schema 键序标准化并移除 Python 特有 override，进一步收紧三语言实现的字节级一致性。
- **[#3178](https://redirect.github.com/a2ui-project/a2ui/pull/3178)**（ditman）：ts_agent `ExpressCompiler` 多目录解析已关闭，同系列 [#3179](https://redirect.github.com/a2ui-project/a2ui/pull/3179)/[#3180](https://redirect.github.com/a2ui-project/a2ui/pull/3180)/[#3181](https://redirect.github.com/a2ui-project/a2ui/pull/3181) 仍在待合并，多目录能力正分模块落地。

**今日新开 PR**：

- **[#3230](https://redirect.github.com/a2ui-project/a2ui/pull/3230)**（nan-yu）：跨目录 `$ref` 解析（peer catalogs 互引），覆盖 Python/TS/Dart 并附多语言一致性测试 —— 互操作性重大功能开题。
- **[#3226](https://redirect.github.com/a2ui-project/a2ui/pull/3226)**（josemontespg）：Kanban board MCP 示例，串联 Node MCP server + Python ADK/A2A agent + Lit host 四条通信路径。
- **[#3225](https://redirect.github.com/a2ui-project/a2ui/pull/3225)**（polina-c）：ANTLR 从 `Express.g4` 生成 Dart 解析器（修复 #2969），Dart Agent SDK 前置工程。
- **[#3224](https://redirect.github.com/a2ui-project/a2ui/pull/3224)**（nan-yu）：移除 Python 的 `a2ui.schema` 包，架构清理。

**已关闭 Issues**：[#3153](https://redirect.github.com/a2ui-project/a2ui/issues/3153)（数据变换函数从 MCP 目录拆分）、[#3137](https://redirect.github.com/a2ui-project/a2ui/issues/3137)（web-search MCP 示例）、[#3036](https://redirect.github.com/a2ui-project/a2ui/issues/3036)（Python `allOf` 扁平化）、[#2957](https://redirect.github.com/a2ui-project/a2ui/issues/2957)（pub.dev 打包分数）、[#3229](https://redirect.github.com/a2ui-project/a2ui/issues/3229)（P0 CI）。

**推进幅度评估**：iframe/MCP 目录线已覆盖 schema → 包 → 组件 → 指南 → 示例的完整交付链条；ts_agent 多目录 4-PR 系列接近收尾；Dart 线完成大版本一致性节点。三大工作流均在收敛期，下一版本轮廓清晰。

---

## 4. 社区热点

- **[#3214 统一 Express 与 OpenUI Lang 语法](https://redirect.github.com/a2ui-project/a2ui/issues/3214)**（4 👍，今日新开）：OpenUI（thesysdev，MIT 协议）维护者主动 cc 核心维护者，提议两套生成式 UI 语言统一为一种语法。诉求实质是**生态互操作与避免语言碎片化** —— 这是外部同类项目主动寻求战略合作的明确信号，值得社区层面认真回应。
- **[#3204 "为什么是 React？"](https://redirect.github.com/a2ui-project/a2ui/issues/3204)**：用户 trusktr 质疑 React 依赖（非标准、需构建工具），主张基于 Web 标准的 Custom Elements 方案。诉求是**降低 Web 端 AI 厂商的接入门槛**，反映一部分开发者对技术选型的抵触情绪。
- **[#3200 Swift 渲染器应只刷新变化部分](https://redirect.github.com/a2ui-project/a2ui/issues/3200)**：2000 项列表场景下每次数据写入全树重解析的性能问题，已有配套 PR [#3203](https://redirect.github.com/a2ui-project/a2ui/pull/3203)（叠加于 #3209）在途，报告者即 PR 作者，社区贡献闭环良好。
- **[#3153](https://redirect.github.com/a2ui-project/a2ui/issues/3153) / [#3137](https://redirect.github.com/a2ui-project/a2ui/issues/3137)**（各 3 评论，均已关闭）：MCP 目录模块化拆分与 web-search 示例 —— MCP 用户群的真实实践需求集中体现。

> 数据说明：本期 PR 评论数字段缺失，热点排序以 Issue 的 👍 与评论数为准。

---

## 5. Bug 与稳定性（按严重程度排列）

| 级别 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| **P0** | [#3229](https://redirect.github.com/a2ui-project/a2ui/issues/3229) genui CI 全量失败：Flutter beta 弃用 `material.dart`，`flutter analyze --fatal-infos` 下所有导入包报错 | **当日关闭**，处置极快 | ✅ 已处置 |
| **P0 级影响** | [#3228](https://redirect.github.com/a2ui-project/a2ui/issues/3228) 主分支 E2E 测试失败（commit bf10897，关联已合并 PR #3192） | OPEN，待 triage | ❗ 未见 fix PR，需立即关注 |
| P2 | [#3158](https://redirect.github.com/a2ui-project/a2ui/issues/3158) `@a2ui/react` 0.13.0 在 Node 导入即崩 "HTMLElement is not defined"（0.12.0 回归，非 #2080 的 SSR 问题） | needs review | ❗ 未见 fix PR |
| P2 | [#3139](https://redirect.github.com/a2ui-project/a2ui/issues/3139) `openUrl` 接受 `mailto:`/`tel:`，违反 guide 强制的 http/https 白名单（安全相关） | needs review | 未见 |
| P2 | [#3149](https://redirect.github.com/a2ui-project/a2ui/issues/3149) Swift v1.0 `and`/`or`/`not` 将失败的 ValidationResult 操作数判为 true（逻辑正确性） | needs review | 未见 |
| P2 | [#3134](https://redirect.github.com/a2ui-project/a2ui/issues/3134) v0.9.1 capabilities 版本键两套命名（schemas/Python 用 "v0.9"，guide/web_core 用 "v0.9.1"），导致 web_core 渲染器与 Python agent 无法握手 | OPEN | 未见 |
| P2 | [#3138](https://redirect.github.com/a2ui-project/a2ui/issues/3138) `numeric` 校验拒绝 number `TextField` 写入的字符串值 | needs review | 未见 |
| P2 | [#3201](https://redirect.github.com/a2ui-project/a2ui/issues/3201) Swift 渲染器：模板 path 变化后按钮仍派发旧 data scope（脏数据风险） | needs-triage | 未见 |
| P3 | [#2835](https://redirect.github.com/a2ui-project/a2ui/issues/2835) genui `DateTimeInput` 占位文本硬编码英文，缺本地化 | OPEN | 未见 |

**在途修复**：[#3203](https://redirect.github.com/a2ui-project/a2ui/pull/3203)（Swift 按组件增量渲染，属破坏性变更 `feat(swift)!`，解决 #3200 性能问题）；[#3223](https://redirect.github.com/a2ui-project/a2ui/pull/3223)（已关闭，Flutter 重命名适配）。

**稳定性小结**：P0 CI 问题响应速度值得肯定，但主分支 E2E 红灯发生在 Dart 0.3.0 升版合并之后，若不尽快修复可能阻塞后续 29 个待合并 PR 的验证流程。

---

## 6. 功能请求与路线图信号

- **iframe + MCP 目录（[#3157](https://redirect.github.com/a2ui-project/a2ui/issues/3157)，P2）**：关联 PR 覆盖 [#2795](https://redirect.github.com/a2ui-project/a2ui/pull/2795) schema → [#2797](https://redirect.github.com/a2ui-project/a2ui/pull/2797) 包与沙箱桥接 → [#2798](https://redirect.github.com/a2ui-project/a2ui/pull/2798) 组件 → [#2803](https://redirect.github.com/a2ui-project/a2ui/pull/2803) 指南 → [#3008](https://redirect.github.com/a2ui-project/a2ui/pull/3008)/[#3009](https://redirect.github.com/a2ui-project/a2ui/pull/3009) 示例 → [#3226](https://redirect.github.com/a2ui-project/a2ui/pull/3226) Kanban 展示。**交付链条完整度极高，几乎确定构成下一版本主体内容**；配套架构调整（#3153 拆分 transformations catalog）已完成。
- **多目录能力**：ts_agent 系列（#3178–#3181）+ [#3230](https://redirect.github.com/a2ui-project/a2ui/pull/3230) 跨目录 `$ref` + [#3219](https://redirect.github.com/a2ui-project/a2ui/issues/3219) 多 v0.9 catalog 一致性测试，表明 **multi-catalog 是明确的下一版本核心能力**，且以三语言 conformance 测试驱动。
- **Swift 增量渲染**（[#3200](https://redirect.github.com/a2ui-project/a2ui/issues/3200)）：PR [#3203](https://redirect.github.com/a2ui-project/a2ui/pull/3203) 为两步计划的第二步，性能优化路线明确。
- **Dart Agent SDK（[#2356](https://redirect.github.com/a2ui-project/a2ui/issues/2356)，P1）**：今日活跃，配合 [#3225](https://redirect.github.com/a2ui-project/a2ui/pull/3225) ANTLR 解析器落地，持续推进中。
- **#3214 语法统一**：尚处讨论期，但外部合作意向明确，属于战略级路线图信号，短期 unlikely 进版本、中期值得关注。
- **#3221](https://redirect.github.com/a2ui-project/a2ui/issues/3221)（agent_sdk 迁移至 `agents/` 子目录）**：仓库结构调整信号，与 renderers 的组织方式对齐。

---

## 7. 用户反馈摘要

- **互操作性是最大痛点**：[#3134](https://redirect.github.com/a2ui-project/a2ui/issues/3134) 用户因 capabilities 版本键不一致导致 web_core 渲染器与 Python agent 无法协同；[#3217](https://redirect.github.com/a2ui-project/a2ui/issues/3217) Express 中变量持有带 `catalogId` 的函数调用时编译失败。跨语言/跨目录一致性直接决定可用性。
- **SSR/服务端场景受阻断**：[#3158](https://redirect.github.com/a2ui-project/a2ui/issues/3158) 用户在任意无 DOM 的 Node 环境导入即崩，且能精确区分这是与 #2080 不同的新回归 —— 属于 0.12→0.13 升级直接伤害存量用户的问题。
- **大数据量性能焦虑**：[#3200](https://redirect.github.com/a2ui-project/a2ui/issues/3200) 描述了搜索框绑定 + 2000 项列表的典型场景，全树重解析造成明显卡顿。
- **技术栈偏好分歧**：[#3204](https://redirect.github.com/a2ui-project/a2ui/issues/3204) 代表一类"反构建工具、亲 Web 标准"的开发者，React 依赖成为其接入的心理与技术门槛。
- **生态合作意愿**：[#3214](https://redirect.github.com/a2ui-project/a2ui/issues/3214) 来自 OpenUI 的合作提议表明 a2ui 的协议设计已获得同类项目关注。
- **以 guide 为契约的用户受挫**：[#3138](https://redirect.github.com/a2ui-project/a2ui/issues/3138)/[#3139](https://redirect.github.com/a2ui-project/a2ui/issues/3139) 显示 guide 与实现不匹配时，严格按文档做校验的用户会直接踩坑 —— 文档-实现一致性是信任基础。
- **Dart 分发质量**：[#2957](https://redirect.github.com/a2ui-project/a2ui/issues/2957)（已关闭）反映 LICENSE 格式等打包细节拖累 pub.dev 分数约 30 分，影响包的可发现性与可信度。

---

## 8. 待处理积压

- **[#3228](https://redirect.github.com/a2ui-project/a2ui/issues/3228)（e2e_failure，今日新增）**：主分支红灯状态，最高优先级，建议立即 triage，避免阻塞 29 个待合并 PR。
- **[#3158](https://redirect.github.com/a2ui-project/a2ui/issues/3158)（needs review，10-12 起）**：用户可复现的回归 bug，至今 0 条维护者回复，建议优先认领。
- **[#3138](https://redirect.github.com/a2ui-project/a2ui/issues/3138) / [#3139](https://redirect.github.com/a2ui-project/a2ui/issues/3139) / [#3149](https://redirect.github.com/a2ui-project/a2ui/issues/3149)（均为 P2 + needs review，10-12 起）**：三个基础目录/Swift 正确性 bug 停留在待审状态超过 3 天。
- **[#2835](https://redirect.github.com/a2ui-project/a2ui/issues/2835)（P3，09-28 起）**：i18n bug 近三周仅 1 条评论，无实质进展。
- **[#2356](https://redirect.github.com/a2ui-project/a2ui/issues/2356)（P1，08-20 起）**：Dart Agent SDK 作为长周期任务已近两个月，虽有持续活动（今日再更新），建议在 roadmap 中明确阶段性里程碑。
- **PR 积压风险**：iframe 目录系列 [#2795](https://redirect.github.com/a2ui-project/a2ui/pull/2795)/[#2797](https://redirect.github.com/a2ui-project/a2ui/pull/2797)/[#2798](https://redirect.github.com/a2ui-project/a2ui/pull/2798)/[#2803](https://redirect.github.com/a2ui-project/a2ui/pull/2803) 自 09-25 起 open 近 20 天；Swift 渲染栈 [#3203](https://redirect.github.com/a2ui-project/a2ui/pull/3203) 依赖 #3209 先行合并。**29 个待合并 PR 中含多个功能栈，建议维护者安排集中 review 窗口，防止堆叠 PR 因基线漂移而反复 rebase。**

---

*数据说明：本报告基于过去 24 小时 GitHub 更新数据生成；PR 评论数字段缺失，互动热度以 Issue 数据为准；"已合并/关闭"的 21 条 PR 中仅部分可见于展示列表，合并细节以仓库实际状态为准。*

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目动态日报

**仓库**：[thesysdev/openui](https://github.com/thesysdev/openui) | **报告日期**：2026-10-15 | **数据窗口**：过去 24 小时（截至 2026-10-14 更新）

---

## 1. 今日速览

- 项目处于**高强度活跃期**：过去 24 小时 PR 更新 30 条，其中 21 条已合并/关闭（处理率 70%）、9 条待合并；Issue 更新 2 条，无新关闭；无新版本发布。
- 今日主线清晰：**OpenUI 1.0 发布后的系统性收尾**——1.0 规范（[#1277](https://redirect.github.com/thesysdev/openui/pull/1277)）、1.0 文档（[#1352](https://redirect.github.com/thesysdev/openui/pull/1352)）、npm README 重写（[#1394](https://redirect.github.com/thesysdev/openui/pull/1394)）三个大型 PR 于今日集中关闭，项目完成从"代码发布"到"规范 + 文档 + 生态配套"的关键跨越。
- **自动化程度高**：展示的 20 条 PR 中约 45% 由 `devin-ai-integration[bot]` 与 `thesys-pr-creator[bot]` 提交，集中在文档、CI、依赖维护领域，人类贡献者聚焦规范、核心代码与产品决策。
- Changesets 发版 PR [#1395](https://redirect.github.com/thesysdev/openui/pull/1395) 仍待合并，**预示一次 npm 发版临近**。
- 稳定性方面：无新 Bug Issue 报告，但 lang-core 存在一处工具参数值解析为 null 的缺陷，修复 PR [#1422](https://redirect.github.com/thesysdev/openui/pull/1422) 已提交待审。

---

## 2. 版本发布

无新版本发布（今日 0 个 Release）。发版信号详见第 6 节。

---

## 3. 项目进展

今日 21 条 PR 合并/关闭，按主题梳理如下：

### 1.0 里程碑收尾（核心进展）
| PR | 内容 | 意义 |
|---|---|---|
| [#1277](https://redirect.github.com/thesysdev/openui/pull/1277) | OpenUI 1.0 规范 + 一致性测试夹具 + CI 运行器 | 9-30 提交、今日关闭，历时 2 周。正式固化 `@openuidev/lang-core` / `react-lang` 1.0.0 已交付内容的语言规范，为第三方实现提供可验证基准 |
| [#1352](https://redirect.github.com/thesysdev/openui/pull/1352) | OpenUI 1.0 全量文档 | 新增 "What's New in 1.0" 等页面，覆盖 1.0 全部变更，是用户迁移的主要入口 |
| [#1394](https://redirect.github.com/thesysdev/openui/pull/1394) | lang-core / react-lang / react-ui / browser-bundle 的 npm README 重写 | 修复 npm 上文档仍描述 0.x API、示例无法编译运行的问题，补齐 `toolProvider`、`onError`、`defineFunction` 等新 API 文档 |

**评估**：三项合并意味着 1.0 的"规范—文档—包描述"链条完整闭合，项目正式进入 1.x 维护与生态扩展阶段。

### 开发者体验（DX）
- [#1411](https://redirect.github.com/thesysdev/openui/pull/1411)（feat(cli)）：解决 `openui create` 在 AI agent / 非交互 shell 下挂起或崩溃的问题，文档化命令现在可直接运行。**面向 agent 场景的 CLI 无提示化是明确的产品方向**。

### 文档与 SEO
- [#1400](https://redirect.github.com/thesysdev/openui/pull/1400)：19 个 `/integrations` 集成页从"无代码简介"改造为带完整代码的 how-to 指南并接入页脚。
- [#1423](https://redirect.github.com/thesysdev/openui/pull/1423)：8 个集成页 meta description 精简化，不改动正文。
- [#1428](https://redirect.github.com/thesysdev/openui/pull/1428)：首页与博客索引改用品牌化分享图，修复 `?v=` 缓存键不随文件更新的问题。
- [#1425](https://redirect.github.com/thesysdev/openui/pull/1425)：首页 Claude/Cursor/Codex 按钮复制的 agent 提示词从一句话升级为完整命令 + 步骤。
- [#1421](https://redirect.github.com/thesysdev/openui/pull/1421)：`/chat` 欢迎页提示词模板改用卡片布局。

### 产品与品牌
- [#1364](https://redirect.github.com/thesysdev/openui/pull/1364)：新增 `/oui-1` 与 `/appless` 两个产品页（吸收并取代 [#1363](https://redirect.github.com/thesysdev/openui/pull/1363) 的设计）。
- [#1424](https://redirect.github.com/thesysdev/openui/pull/1424)：**回滚** #1320 的 tagline 变更，站点定位回到 "The Open Standard for Generative UI"（而非 "Intelligent UI"）。品牌口径的一次重要回调，值得持续关注。

### CI 与社区
- [#1427](https://redirect.github.com/thesysdev/openui/pull/1427)：Lighthouse 仅在 push 到 main 且 `docs/**` 变更时运行，缩减 CI 开销。
- [#1414](https://redirect.github.com/thesysdev/openui/pull/1414)：Sage 以"Community integration"身份加入 ADOPTERS.md，生态采用持续增长。

**整体评估**：今日合并量级（21 条）与主题集中度显示维护团队吞吐能力强；代码功能层面推进约 1 个 CLI 特性 + 1 个待审核心修复，其余为文档/品牌矩阵补齐——典型的版本发布后整固期形态。

---

## 4. 社区热点

今日仅 2 条 Issue 更新，且均为活跃讨论（各 2 条评论、均于 10-14 有新动态）：

1. **[#681](https://redirect.github.com/thesysdev/openui/issues/681) — 为 OpenUI Responses 增加 `.toMarkdown()` 支持**（enhancement / help wanted，2026-06-26 创建，今日再次活跃）
   诉求：用户在生产中需要将 OpenUI 响应转为 Markdown 以便**调试与离线存储改进**，并指出 LLM 处理 Markdown 的能力强于原生 OpenUI 响应格式——本质是**OpenUI 原生格式与 LLM 生态的互操作性缺口**。该 Issue 已开放近 4 个月，今日活跃可能预示讨论重启或社区认领酝酿中。

2. **[#1326](https://redirect.github.com/thesysdev/openui/issues/1326) — 请求 Solid 2.0 官方运行时（`@openuidev/solid-lang`）**（2026-10-08 创建，今日有更新）
   诉求：作者已自行核查历史 issue（对照 Vue #318、Svelte 先例）后提出，指出 OpenUI 已有 React/Vue/Svelte/Angular 一方运行时，唯独缺 Solid。反映**框架运行时覆盖完整性**的社区期待。

**热点 PR**（按跨天持续更新判断评审活跃度）：
- [#1393](https://redirect.github.com/thesysdev/openui/pull/1393)（模板/示例依赖升级，10-12 提交、连续 3 天有更新）与 [#1384](https://redirect.github.com/thesysdev/openui/pull/1384)（AgentInterface 模板重设计，同样跨天更新）显示维护者正在进行多轮评审。
- [#1429](https://redirect.github.com/thesysdev/openui/pull/1429) 将首页 tweet wall 更新为 2026 年 5-10 月的社区推文（含 Lynx 4.0 集成 OpenUI 等高赞内容），侧面印证**社区传播热度处于上升期**。

---

## 5. Bug 与稳定性

今日无新增崩溃/回归类 Issue（2 条 Issue 均为功能请求），存量问题如下：

| 严重程度 | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| **中高** | lang-core 中值引用在 Query/Mutation 工具参数中解析为 `null`：UI 渲染正确但 `q = Query("save", {amount: amount})` 收到 `{amount: null}`；链式引用、引用工具名、状态引用同样受影响——直接影响 agent 工具调用可靠性 | 修复进行中 | ✅ [PR #1422](https://redirect.github.com/thesysdev/openui/pull/1422)（ankit-thesys，今日提交，OPEN 待审） |
| 中 | CLI 在 agent / 非交互环境下挂起或以 `Missing required argument --template` 崩溃 | **已修复** | ✅ [PR #1411](https://redirect.github.com/thesysdev/openui/pull/1411) 已关闭 |
| 低 | 分享图 `?v=` 缓存键不随文件变化导致链接预览陈旧 | **已修复** | ✅ [PR #1428](https://redirect.github.com/thesysdev/openui/pull/1428) 已关闭 |

**稳定性判断**：`#1422` 属核心运行时正确性问题，建议优先评审合并；该问题可能随 1.0 新用户流入被更多报告，宜在下次发版前解决。

---

## 6. 功能请求与路线图信号

结合今日 Issue 与 PR 动态，可识别以下路线图信号：

1. **下一次 npm 发版临近**：Changesets PR [#1395](https://redirect.github.com/thesysdev/openui/pull/1395) 待合并，合并即自动发布；依赖升级 PR [#1393](https://redirect.github.com/thesysdev/openui/pull/1393) 同步待审，两者构成发版前置。
2. **react-ui 新 API 即将发布**：[#1384](https://redirect.github.com/thesysdev/openui/pull/1384) 明确说明其被"未发布的 react-ui API"阻塞，无法过 pinned 包的 cli-e2e——意味着模板侧 AgentInterface 重设计（品牌 wordmark、WelcomeMascot、卡片启动器、模型切换器入 Toolbar 等）将随新版本解封。这是**下一版本内容的最强信号**。
3. **`.toMarkdown()`（[#681](https://redirect.github.com/thesysdev/openui/issues/681)）**：带 `help wanted` 标签，维护者已开放社区认领，但尚无对应 PR。属低成本高价值的序列化 API 补齐，有可能以社区 PR 形式进入下一版本。
4. **Solid 运行时（[#1326](https://redirect.github.com/thesysdev/openui/issues/1326)）**：官方态度可参考 Vue/Svelte 先例与 #1414 对社区集成的开放姿态；短期内更可能以社区贡献/Community integration 形式落地，而非官方一方运行时。
5. **Agent-first 工具链持续深化**：#1411（CLI 无提示运行）+ #1425（agent 安装提示词完善）连续落地，"让 coding agent 顺畅使用 OpenUI"是确定性投入方向。
6. **品牌方向回调**：#1424 回滚 "Intelligent UI" tagline，暗示品牌叙事回归 "Generative UI" 主线；配合待审的 logo 更新 [#1419](https://redirect.github.com/thesysdev/openui/pull/1419) 与 WIP 的网站重组 [#1426](https://redirect.github.com/thesysdev/openui/pull/1426)，站点层面将有一轮整体改版。

---

## 7. 用户反馈摘要

基于今日活跃 Issue 的摘要与评论内容提炼：

- **调试与持久化痛点（#681）**：真实用户在开发流程中需要"看懂并存下"OpenUI 响应——`.toMarkdown()` 被描述为服务于 debuggability 与 offline improvements。隐含反馈：**OpenUI 原生响应格式对人类和 LLM 都不够"可读"，与 Markdown 生态的双向转换能力是生产刚需**。
- **框架选型受限（#1326）**：Solid 用户的迁移意愿被官方运行时缺失阻挡；提问者主动调研历史 issue 的行为表明，**框架运行时覆盖度直接影响采用决策**。
- **生态正面信号**：Lynx 4.0 官宣集成 OpenUI、知名 builder 公开分享（见 [#1429](https://redirect.github.com/thesysdev/openui/pull/1429) 的 tweet wall 更新），以及 Sage 团队主动申请加入 ADOPTERS（[#1414](https://redirect.github.com/thesysdev/openui/pull/1414)），显示**真实采用与口碑传播在增长**。
- **文档质量曾被诟病**：#1394 承认 npm README 仍描述 0.x API 且多处示例无法编译运行——今日已修复，但这解释了此前用户的上手摩擦；#1400 也确认 19 个集成页"有索引无排名"的 SEO 短板，正被系统性补救。

*注：今日数据中 Issue 评论数有限（各 2 条），以上反馈主要来自 Issue 正文与 PR 描述，样本量偏小，结论供参考。*

---

## 8. 待处理积压

以下为需要维护者关注的滞留项，按紧急度排列：

| 项目 | 滞留时长 | 风险/建议 |
|---|---|---|
| [Issue #681](https://redirect.github.com/thesysdev/openui/issues/681) `.toMarkdown()` | **约 3.7 个月**（2026-06-26 至今），`help wanted` 无人认领 | 长期积压且今日重新活跃，建议维护者明确分配或发布 good-first-issue 引导 |
| [PR #1384](https://redirect.github.com/thesysdev/openui/pull/1384) 模板 AgentInterface 重设计 | 3 天 | 被 react-ui 未发布 API 阻塞，建议随 #1395 发版尽快解封，避免与 #1426 网站重组产生冲突 |
| [PR #1395](https://redirect.github.com/thesysdev/openui/pull/1395) Changesets 发版 | 2 天 | 发版节奏锚点，积压过久会造成 changesets 冲突与 #1393 依赖过期 |
| [PR #1393](https://redirect.github.com/thesysdev/openui/pull/1393) 模板/示例依赖升级 | 3 天 | 同上，属发版前置链路 |
| [PR #1422](https://redirect.github.com/thesysdev/openui/pull/1422) lang-core 修复 | 今日新开 | 核心正确性 bug，建议优先评审 |
| [PR #1426](https://redirect.github.com/thesysdev/openui/pull/1426) 网站重组（WIP） | 今日新开 | 大型 WIP，与 #1419/#1429 等站点 PR 存在范围重叠，需尽早对齐边界避免返工 |

---

### 健康度小结

| 维度 | 评估 |
|---|---|
| 维护吞吐 | ★★★★★ 24h 内处理 21 条 PR，响应迅速 |
| 自动化成熟度 | ★★★★☆ 近半 PR 由 bot 完成，人力聚焦核心 |
| 文档完备性 | ★★★★☆ 1.0 文档/规范/README 今日集中补齐 |
| 社区 issue 响应 | ★★★☆☆ 新 Issue 少（2 条/日），存量 #681 积压近 4 个月 |
| 发版节奏 | ★★★☆☆ 无新 Release，但发版 PR 待合并，节奏正常 |

**一句话总结**：OpenUI 今日完成 1.0 规范与文档体系的正式收官，合并吞吐强劲、生态声量上升；下一观察重点是 #1395 触发的发版内容、#1422 核心修复的落地，以及 #681 长期积压的响应。

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报

**日期：** 2026-10-15 | **仓库：** [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)

**核心数据：** Issue 更新 9 条（新开 6 / 存量活跃 2 / 关闭 1）· PR 更新 25 条（待合并 18 / 合并·关闭 7）· 新版本发布 0 个

---

## 1. 今日速览

过去 24 小时项目活跃度处于**中高水平**：7 个 PR 合并/关闭，6 个新 Issue 落地，issue 响应及时（多数新 Issue 当日即有维护者回复）。但本期**无版本发布**，工程重心明显偏向**测试/CI 加固与文档性能治理**，而非用户可见的功能交付。当日最大亮点是外部贡献者 [Laptopmini](https://github.com/Laptopmini) 单日提交 6 个高质量类型/性能 Issue 并配套 4 个修复 PR，形成罕见的"审计式"贡献；核心方向上，Intelligence 运行时可靠性（[#7826](https://redirect.github.com/CopilotKit/CopilotKit/pull/7826)）与生成式 UI 原型（[#7819](https://redirect.github.com/CopilotKit/CopilotKit/pull/7819)）持续推进。

## 2. 版本发布

本报告期内无新版本发布（Releases: 0）。

## 3. 项目进展

今日 7 个 PR 合并/关闭（列表可见 5 个），集中在**质量加固、示例完整性与测试基础设施**三个方向：

**已关闭：**
- [#7813](https://redirect.github.com/CopilotKit/CopilotKit/pull/7813) — 补齐各 starter 的模型环境变量缺口（PE-701），使 CLI 克隆的每个 starter 仅凭 env 即可运行于 openai / anthropic / google / OpenAI 兼容 provider。
- [#7820](https://redirect.github.com/CopilotKit/CopilotKit/pull/7820) — 通过"伪 vendor 服务器探针"验证各 starter 实际请求体，确认 PE-728 问题已不存在，并使 crewai-flows 跑通 Anthropic/Gemini、llamaindex 跑通 Claude 4.5。
- [#7809](https://redirect.github.com/CopilotKit/CopilotKit/pull/7809) — 堵住 CI 盲区：`showcase/shared/python/tests` 此前从未被任何 job 执行，8 个测试在 main 上已漂移失败，本 PR 接入 CI 并全部修复。
- [#7710](https://redirect.github.com/CopilotKit/CopilotKit/pull/7710) — 落地 PNI-605 一次性 Railway provider 与 row5 重启证据，扩展复合服务的 E2E 验证设施。
- [#7592](https://redirect.github.com/CopilotKit/CopilotKit/pull/7592) — 为 core 新增两个回归测试，锁定 `processAgentResult` 中"阻止重复发射 tool-call 循环"的历史查找行为。

**推进中的重要 PR：**
- [#7826](https://redirect.github.com/CopilotKit/CopilotKit/pull/7826)（今日新建）— 修复自托管 Intelligence + LangGraph 场景 "Runner connection dropped" 背后的多项 runner 持久性/重放缺陷，每项修复独立成 commit + 独立测试。
- [#7819](https://redirect.github.com/CopilotKit/CopilotKit/pull/7819) — 生成式 UI 原型（详见第 6 节）。
- [#7811](https://redirect.github.com/CopilotKit/CopilotKit/pull/7811) — MCP Apps `ui/update-model-context` 三框架（React/Vue/Angular）实现。
- [#7822](https://redirect.github.com/CopilotKit/CopilotKit/pull/7822) — 文档站 40 MB bundle 修复（服务端渲染 DemoSource）。
- [#7796](https://redirect.github.com/CopilotKit/CopilotKit/pull/7796) — TS/Go/Python 三运行时统一优化：run 启动历史查询改用 `fields=id`，避免长线程全量拉取。

**整体判断：** 单日 7 个 PR 关闭 + 密集的质量型投入，项目在**可靠性/工程化维度明显前进**；功能侧以原型与草稿为主，本日无可发布增量。

## 4. 社区热点

- **评论最多的 Issue：** [#7590](https://redirect.github.com/CopilotKit/CopilotKit/issues/7590)（3 评论，good first issue）— `emit_tool_calls` 宣传支持 `str | List[str]` 白名单，但 v2/AG-UI 路径静默忽略该形式，仅 `False` 生效。文档承诺与实现不符，相关回归测试已随 [#7592](https://redirect.github.com/CopilotKit/CopilotKit/pull/7592) 进入，但语义层面的修复仍悬而未决。
- [#6819](https://redirect.github.com/CopilotKit/CopilotKit/issues/6819)（3 评论）— 为 `CopilotTextarea` 声明补 `@deprecated` JSDoc，标记为"预留学生"的 chore。社区新人管道存在，但该 Issue 开放 6 周仍无人认领。
- **当日事件级贡献：** [Laptopmini](https://github.com/Laptopmini) 在 24 小时内提交 6 个 Issue + 4 个 PR，覆盖严格 TypeScript 编译、发布包依赖声明、文档性能与体验：
  - Issues: [#7816](https://redirect.github.com/CopilotKit/CopilotKit/issues/7816)、[#7817](https://redirect.github.com/CopilotKit/CopilotKit/issues/7817)、[#7814](https://redirect.github.com/CopilotKit/CopilotKit/issues/7814)、[#7821](https://redirect.github.com/CopilotKit/CopilotKit/issues/7821)、[#7825](https://redirect.github.com/CopilotKit/CopilotKit/issues/7825)、[#7823](https://redirect.github.com/CopilotKit/CopilotKit/issues/7823)
  - 对应修复 PR: [#7818](https://redirect.github.com/CopilotKit/CopilotKit/pull/7818)、[#7815](https://redirect.github.com/CopilotKit/CopilotKit/pull/7815)、[#7822](https://redirect.github.com/CopilotKit/CopilotKit/pull/7822)、[#7824](https://redirect.github.com/CopilotKit/CopilotKit/pull/7824)
- [#7731](https://redirect.github.com/CopilotKit/CopilotKit/issues/7731) — Hosted Intelligence 返回 HTTP 503、阻塞 OpenDots 会话创建与 CLI 项目列表，**今日已关闭**，服务端问题得到响应处理。

## 5. Bug 与稳定性

按严重程度排列（★ 越多越严重）：

| 严重度 | 问题 | 影响 | 修复状态 |
|---|---|---|---|
| ★★★ | [#7816](https://redirect.github.com/CopilotKit/CopilotKit/issues/7816) react-core / mcp-apps-renderer 的 `.d.mts` 按 Zod 3 编写，应用使用 zod 4 时（`skipLibCheck: false`）产生 **1,683 个类型错误**；根因是 `@ag-ui/core` 顶层引入 zod 4.6.7、`@ag-ui/client` 嵌套 zod 3.25.76 的双版本并存 | 严格 TS 用户无法编译 | ⚠️ 无直接修复 PR（[#7818](https://redirect.github.com/CopilotKit/CopilotKit/pull/7818) 仅解决依赖声明问题） |
| ★★★ | [#7731](https://redirect.github.com/CopilotKit/CopilotKit/issues/7731) Hosted Intelligence HTTP 503 | 曾完全阻塞 OpenDots 与 CLI | ✅ 已关闭 |
| ★★ | [#7814](https://redirect.github.com/CopilotKit/CopilotKit/issues/7814) `createCatalog` renderer props 按原始 schema 类型化：Action props 不可调用、绑定值未解析、`set<Prop>` 缺失 | A2UI 类型体验 | ✅ 修复 PR [#7815](https://redirect.github.com/CopilotKit/CopilotKit/pull/7815) |
| ★★ | [#7817](https://redirect.github.com/CopilotKit/CopilotKit/issues/7817) runtime-client-gql 发布类型 import 仅在 devDependencies 中的 `graphql` 与 `@graphql-typed-document-node/core` | 消费方类型解析失败 | ✅ 修复 PR [#7818](https://redirect.github.com/CopilotKit/CopilotKit/pull/7818) |
| ★★ | [#7821](https://redirect.github.com/CopilotKit/CopilotKit/issues/7821) 文档站多数页面向浏览器下发全量 `demo-content.json`（raw 41.2 MB / gzip 约 8.8 MB；842 demos、6,563 文件），且导航时重复下载 | 首访性能严重劣化 | ✅ 修复 PR [#7822](https://redirect.github.com/CopilotKit/CopilotKit/pull/7822) |
| ★★ | [#7590](https://redirect.github.com/CopilotKit/CopilotKit/issues/7590) `emit_tool_calls` 字符串/列表白名单被 v2 路径静默忽略 | 文档与行为不一致 | 🔄 相关测试已随 [#7592](https://redirect.github.com/CopilotKit/CopilotKit/pull/7592) 合入，语义修复待定 |
| ★ | [#7825](https://redirect.github.com/CopilotKit/CopilotKit/issues/7825) 文档站公告 banner 水合后才渲染，每次加载页头/内容跳动 40px（1280px 以下最明显） | 轻微 CLS | ❓ 暂无专属修复 PR |
| — | PR [#7826](https://redirect.github.com/CopilotKit/CopilotKit/pull/7826) 披露自托管 Intelligence + LangGraph 的 "Runner connection dropped" 及重放失败/错误重放等多项运行时缺陷（无独立 Issue，随 PR 逐项修复） | 生产部署稳定性 | 🔄 修复进行中 |

## 6. 功能请求与路线图信号

- [#7823](https://redirect.github.com/CopilotKit/CopilotKit/issues/7823) 文档导航进度条 → **实现 PR [#7824](https://redirect.github.com/CopilotKit/CopilotKit/pull/7824) 已提交且今日活跃**，纳入概率高。
- **[#7819](https://redirect.github.com/CopilotKit/CopilotKit/pull/7819) 生成式 UI 原型 — 本期最强路线图信号**：基于 A2UI over AG-UI 的原生 Generative UI 架构，wire contract 已进入 `@copilotkit/shared`（`generative-ui-surface` activity），覆盖函数绑定与流式渲染。明确标注"实验性、排除 Intelligence 与 QuickJS、为 API/可行性验证草稿"——预示 CopilotKit 正在评估原生生成式 UI 方向，值得持续跟踪。
- [#7811](https://redirect.github.com/CopilotKit/CopilotKit/pull/7811) MCP Apps `ui/update-model-context`：组件状态（选择、筛选、购物车）随下一次 run 注入 `RunAgentInput`，React/Vue/Angular 同步推进，指向 MCP Apps 双向交互模型的深化。
- [#6146](https://redirect.github.com/CopilotKit/CopilotKit/pull/6146) managed Slack/Teams 的 JSX 图片与图文混排卡片——7 月底开启、今日仍有更新，属长期在途能力。
- [#7796](https://redirect.github.com/CopilotKit/CopilotKit/pull/7796) 三运行时统一的 `fields=id` 历史查询优化，指向长会话/大规模线程场景的延迟与成本路线。

## 7. 用户反馈摘要

- **严格 TypeScript 用户被"劝退"：** 有用户在全新项目中安装 `@copilotkit/react-core@1.79.0` 后，`skipLibCheck: false` 下遭遇 1,683 个类型错误，根因是依赖树中 Zod 3/4 双版本并存（[#7816](https://redirect.github.com/CopilotKit/CopilotKit/issues/7816)）——类型安全敏感的企业用户的核心痛点。
- **Intelligence 可靠性是生产用户最大关切：** Hosted 503 中断（[#7731](https://redirect.github.com/CopilotKit/CopilotKit/issues/7731)）与自托管场景 "Runner connection dropped"、重放失败（[#7826](https://redirect.github.com/CopilotKit/CopilotKit/pull/7826)）均直接影响线上业务。
- **文档站即门面，体验受损：** 每页 40 MB JS、点击链接无任何反馈、加载时 40px 跳动（[#7821](https://redirect.github.com/CopilotKit/CopilotKit/issues/7821) / [#7823](https://redirect.github.com/CopilotKit/CopilotKit/issues/7823) / [#7825](https://redirect.github.com/CopilotKit/CopilotKit/issues/7825)）——首访与弱网用户体验明显受损。
- **Starter 可用性诉求明确：** 用户期望"仅凭环境变量即可在 openai/anthropic/google 上跑通"，团队以 PE-701/PE-733 专项逐 starter 补齐（[#7813](https://redirect.github.com/CopilotKit/CopilotKit/pull/7813) / [#7820](https://redirect.github.com/CopilotKit/CopilotKit/pull/7820)）。
- **正面信号：** 外部用户愿意做逐包类型审计并自带修复 PR（Laptopmini），QA bot 也在贡献修复（[#7799](https://redirect.github.com/CopilotKit/CopilotKit/pull/7799)），社区工程参与深度高于同类项目。

## 8. 待处理积压

| 条目 | 开放时长 | 说明 |
|---|---|---|
| [#6146](https://redirect.github.com/CopilotKit/CopilotKit/pull/6146) Slack/Teams JSX 图片 | **约 83 天**（2026-07-24 起） | 今日仍有更新但长期未合并，建议给出收敛时间表 |
| [#6819](https://redirect.github.com/CopilotKit/CopilotKit/issues/6819) 学生专属 chore | 约 6 周 | 无人认领，建议社区渠道再曝光 |
| [#7209](https://redirect.github.com/CopilotKit/CopilotKit/pull/7209) forward headers 重构 | 约 4 周 | 今日活跃但未合并，涉及 `/run` `/suggest` `/connect` 三端点统一 |
| [#7590](https://redirect.github.com/CopilotKit/CopilotKit/issues/7590) emit_tool_calls 语义 | 13 天 | good first issue，需明确决策：v2 路径支持白名单，或修正文档 |
| [#7672](https://redirect.github.com/CopilotKit/CopilotKit/pull/7672) TanStack 加密 reasoning 保留 | 9 天 | 今日活跃，是 OpenDots #58 的 SDK 前置，建议优先评审 |

---

**健康度小结：** Issue 响应迅速、贡献者来源多元（核心成员 / 外部深度贡献者 / QA bot）、质量投资密集，整体工程健康度良好。需关注两点：其一，本期 0 发布，多个修复型 PR（#7818/#7815/#7822 等）积压待合并，建议尽快切版本释放；其二，Zod 3/4 双版本问题（#7816）尚无系统修复方案，是当前对外暴露面最大的类型兼容风险。

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*