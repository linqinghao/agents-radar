# 生成式 UI 生态日报 2026-10-16

> Issues: 36 | PRs: 85 | 覆盖项目: 4 个 | 生成时间: 2026-10-16 03:44 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告

**报告日期：2026-10-16 | 数据窗口：过去 24 小时 | 覆盖项目：a2ui / OpenUI / json-render / CopilotKit**

---

## 1. 生态全景

生成式 UI 赛道已从单点工具竞争进入**“分层竞合”阶段**：a2ui 以协议 + 多语言 SDK 的形态占据规范层，OpenUI 与 CopilotKit 在框架/平台层各自纵深，且层间已出现事实上的依赖与谈判——**CopilotKit 内嵌 a2ui-renderer 作为渲染组件**（其 monorepo v1.79.1 修复的正是该组件的类型缺陷），**OpenUI 创始人公开提议将 OpenUI Lang 与 a2ui Express 语法统一**（a2ui #3214，4 👍）。三个活跃项目 24 小时合计处理约 121 项 Issue/PR 事件、发布 15 个版本/包，迭代强度处于行业高位。与此同时，主干 CI 红灯（a2ui 单日 5 个失败工单）、流式渲染崩溃（OpenUI #727 悬置 3 个月）、企业合规诉求（CopilotKit #6910 SEP-1865）等信号密集出现，说明行业重心正从“能力演示”转向“生产可靠性”攻坚期。json-render 持续静默，暂不构成生态变量。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | 新开 Issue | Issue 关闭 | PR 更新 | PR 合并/关闭 | PR 待合并 | Release（24h） | 事件总量 |
|---|---|---|---|---|---|---|---|---|
| **a2ui** | 32 | 15（含 5 个 bot 失败工单） | 17 | 39 | 18 | 21 | **0** | 71 |
| **OpenUI** | 2 | 0 | 0 | 19 | 16 | 3 | **10 个 npm 包**（1 minor + 9 patch） | 21 |
| **json-render** | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **CopilotKit** | 2 | 0 | 1 | 27 | 12 | 15 | **5 个版本**（2 minor + 3 patch，5 条发版线） | 29 |

**派生效率指标**：

- **PR 流转率**：OpenUI 84%（16/19）> a2ui 46%（18/39）≈ CopilotKit 44%（12/27）——OpenUI 的 Changesets + 机器人自动化发版是主要推手；
- **Issue 净收敛**：仅 a2ui 呈净收敛（关闭 17 > 新开 15），且是唯一有显著社区问题流入的项目；OpenUI 与 CopilotKit 均呈“**PR 强、Issue 弱**”的开发主导形态；
- **发布节奏**：OpenUI 与 CopilotKit 每日多包/多线发版；a2ui 本期零发布，功能主线（多 catalog、破坏性变更 `feat!`）在主干累积，符合“大版本前收敛”的特征。

---

## 3. 共同关注的功能方向

**① AI 编码代理 / Agent 深度集成**（三个活跃项目全部在投入，本期最强共识）
- OpenUI：`setup-agent` 命令将技能写入项目 `AGENTS.md`（#1430）；同日修复 coding agent / 非交互终端下 CLI 挂起（#1411 → cli 0.5.3）
- CopilotKit：AG-UI 1.0 随 channels v0.11.1 落地（#7270）；npm 10 安装事故的典型触发场景即代理环境
- a2ui：Python ADK 的 `SendA2uiToClientToolset`、社区贡献的 MCP / iframe-MCP catalog 全栈链（7 个 PR）

**② 多框架 / 多 SDK 渲染一致性**
- a2ui：Python/TS/Dart 三 SDK + React/Lit/Swift/Flutter 渲染器；**评估套件扩展至三 SDK，共享 Inspect AI harness 与数据集**（#3237），首次实现一致性的量化基线
- OpenUI：react/vue/svelte/angular-lang 并行发版（#1394 单 PR 更新 8 包），但存在版本代差（react-lang 1.0.1 vs 其他 0.4.2）
- CopilotKit：Angular v0.6.0 引入 learning 包（#7700），能力向多框架 SDK 扩展
- 佐证其为真实痛点：a2ui Swift 用户一周内报告 3+ 个与 React/Lit 端的语义偏差（真值判断、绑定渲染）

**③ 流式渲染稳定性与性能**
- OpenUI：#727 Renderer `insertBefore` 崩溃可致宿主应用崩溃，悬置 3 个月无 fix（help wanted）
- a2ui：Swift 渲染器全树重解析性能问题（#3200，2000 项列表每次输入全量重算）
- CopilotKit：socket 心跳防断连（#7568）、流式 transcript 刷新（#7832）、Runner 断连修复（#7826）

**④ 企业级与安全能力**
- CopilotKit：MCP Apps sandbox 同源违反 SEP-1865（#6910），企业安全合规诉求
- OpenUI：frontend-token 用户级会话授权落地（#1241，3 周评审）
- a2ui：`a2a-sdk` 1.x 兼容性硬阻塞（#3161），依赖锁定策略影响实际部署

---

## 4. 差异化定位分析

| 维度 | a2ui | OpenUI | CopilotKit | json-render |
|---|---|---|---|---|
| **生态层级** | 规范/协议层 | 框架 + 语言绑定层 | 端到端应用平台 | 轻量渲染库 |
| **核心资产** | 协议 v1.0、Express 格式、Catalog 架构、多语言 SDK | OpenUI Lang 1.0、多框架包、CLI 工具链 | Runtime、Automatic Learning、Channels、AG-UI 集成 | JSON → UI 渲染 |
| **技术路线** | 跨 SDK 一致性优先：ANTLR 生成解析器、三 SDK 评估框架、RFC 治理 | 文档与上手体验优先：Lang 1.0 README 全线更新、模板 starter 标准化 | 智能化优先：Learning/记忆子系统、渠道做深（聚焦 Slack+Teams） | — |
| **目标用户** | 框架/平台构建者（CopilotKit 已内嵌其 renderer） | 前端/全栈开发者、AI 应用开发者 | 企业级 Agent 应用开发者 | React 开发者 |
| **成熟度信号** | 协议定型中，Dart SDK 仍在补桩 | react-lang 1.0、其他框架 0.4.x | 5 条发版线、17 个 starter 体系、多线并行发版 | 完全静默 |

**关键交叉点（单项目报告不可见的结构性事实）**：
1. **分层已在事实上形成**——CopilotKit 依赖 a2ui 渲染器（#7800 类型缺陷即传递到 CopilotKit 用户），同时自身集成 AG-UI 1.0；a2ui 又依赖 a2a-sdk。至少四种协议（a2ui 协议、OpenUI Lang、AG-UI、A2A/MCP）在同一技术栈中叠加。
2. **OpenUI → a2ui 的语法统一提案**（#3214）恰逢 a2ui 模板 schema 契约定型（#721 关闭）——规范层正从“各自造语言”转向“谈判互操作”，a2ui 的 Express 格式已获得行业影响力背书。

---

## 5. 社区热度与成熟度

| 指标 | a2ui | OpenUI | CopilotKit |
|---|---|---|---|
| 社区新 Issue 流入 | **15**（唯一显著） | 0 | 0 |
| 外部生态互动 | OpenUI 创始人提议合作（4 👍） | Lynx 4.0 内置集成、推文墙维护 | a2ui-renderer 集成反馈闭环 |
| 长期悬置项 | 社区 PR 积压 3 周（iframe/MCP 链） | #391 七个月、#727 三个月 | #6146 三个月 |
| 危机响应样本 | SSR 崩溃 4 天待 review | 渲染崩溃 3 个月无 fix | **npm 10 安装事故同日闭环** |

**判断**：
- **社区热度最高：a2ui**——唯一有持续问题流入且净收敛的项目，外部项目主动寻求合作、贡献者完成端到端全栈贡献（josemontespg），但 review 带宽（7 个 iframe/MCP PR 积压 3 周）成为社区留存风险。
- **工程成熟度最高：CopilotKit**——安装事故“修复 → 发版 → 17 个 starter 同步”同日闭环，OSS-1107 打通多线发版，破坏性变更有明确迁移说明；但社区讨论流入极低，产品由开发节奏主导。
- **快速迭代期：三个活跃项目均处高位**。OpenUI 发版自动化最成熟（84% 流转率），但社区治理是明显短板——两大核心 Issue（表单校验、渲染崩溃）长期无核心团队认领。
- **json-render** 处于静默/维护模式，建议观察窗口内不再纳入重点跟踪。

---

## 6. 值得关注的趋势信号

**① 描述语言层开始收敛（信号强度：★★★★★）**
OpenUI 主动提议与 a2ui 统一语法，叠加 a2ui 模板契约刚定型、CopilotKit 集成 AG-UI/A2A——这是 LLM 工具调用与 Agent 协议标准化进程在 UI 层的重演。
*参考价值：自研 DSL 的窗口正在关闭；绑定某一 DSL 的产品应优先评估其语法契约的稳定性与互操作意向，而非仅看渲染能力。*

**② 生态分层形成，风险沿依赖链传递（★★★★☆）**
CopilotKit 用户实际遭遇了上游 a2ui 的类型缺陷（#7800），a2ui 用户被 a2a-sdk 版本锁死（#3161）。
*参考价值：选型时绘制完整依赖链（平台 → 渲染器 → 描述语言 → Agent 协议），任一环节的版本策略都会传导到你身上；本期 CopilotKit #7786 拟移除三大 IM 适配器即是上游收缩直接冲击下游的实例。*

**③ AI 编码代理成为一等公民用户（★★★★☆）**
OpenUI 将技能写入 AGENTS.md、专门修复代理环境 CLI 挂起；CopilotKit 的安装事故典型场景即 coding agent。工具链正围绕“代理即用户”重构（非交互终端支持、可刷新标记块、技能注入）。
*参考价值：评估生成式 UI 工具时，“代理能否可靠地使用与调试它”正在成为新的采购维度。*

**④ 多端一致性从“承诺”走向“量化”（★★★★☆）**
a2ui 三 SDK 共享评估数据集是方法论级信号；对照反面案例——OpenUI 框架包版本代差、a2ui Swift 端语义偏差的用户实测报告。
*参考价值：多框架覆盖的项目，是否具备跨端一致性测试基础设施，是判断其可投入生产程度的硬指标。*

**⑤ 高速迭代的质量债集中显性化（★★★★☆）**
a2ui 单日 5 个主干失败工单、SSR 回归无 fix；OpenUI 流式崩溃悬置 3 个月；CopilotKit 自托管可靠性修复中。三家同时在冲速度，可靠性将成为下一阶段分水岭。
*参考价值：考察 P0/P1 问题的响应闭环速度比看发版频率更有预测性——CopilotKit 同日闭环（正样本）与 OpenUI #727 三个月悬置（负样本）是两个极端参照。*

**⑥ 企业合规需求正式浮现（★★★☆☆）**
SEP-1865 跨源沙箱、用户级授权、依赖兼容性诉求表明生成式 UI 已进入企业采购视野。
*参考价值：金融/医疗等合规敏感场景，应将沙箱隔离模型与授权能力纳入评估清单，目前仅 CopilotKit（授权已落地）与 OpenUI（frontend-token）有对应能力。*

---

**一句话总结**：当前时点，**a2ui 是生态的“规范引力中心”、OpenUI 是“开发者体验标杆”、CopilotKit 是“生产化与可靠性标杆”**，三者分层竞合而非零和竞争；对开发者而言，最值得持续跟踪的单一事件是 OpenUI 与 a2ui 的语法统一谈判（a2ui #3214）——其走向将决定未来 12 个月生成式 UI 描述语言层的格局。

---

*数据说明：本报告基于各项目 24 小时自动采集数据；CopilotKit 的 PR 评论数缺失、json-render 无数据，相关排序基于可得信号推断。*

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目动态日报 · 2026-10-16

**仓库**：[a2ui-project/a2ui](https://github.com/a2ui-project/a2ui)
**统计周期**：过去 24 小时（10-15 ~ 10-16）
**本期数据**：Issue 更新 32 条（新开/活跃 15，关闭 17）｜PR 更新 39 条（待合并 21，合并/关闭 18）｜新版本发布：0

---

## 1. 今日速览

项目处于高强度、高吞吐的迭代状态：过去 24 小时共 71 项 Issue/PR 更新事件，**关闭量（17 Issue + 18 PR）超过新开量（15 Issue）**，净积压下降，维护者响应速度健康。功能主线方面，**多 Catalog 架构横跨 Python ADK 与 TypeScript Agent SDK 落地**、Dart SDK 引入 ANTLR 生成的 Express 解析器、评估框架扩展至三 SDK，是三项结构性进展。风险集中在主干质量：多个已合并 PR 触发 main 分支 Evals/E2E 失败，bot 在 24 小时内新开 5 个失败工单；同时 `@a2ui/react` 0.13.0 的 SSR 导入崩溃（[#3158](https://redirect.github.com/a2ui-project/a2ui/issues/3158)）仍处于待 review 状态。生态侧亮点是 OpenUI 团队公开提议 Express 与 OpenUI Lang 语法统一（[#3214](https://redirect.github.com/a2ui-project/a2ui/issues/3214)，4 👍）。本期无新版本发布。

---

## 2. 项目进展

### 主线一：多 Catalog 架构端到端落地（本期最重要进展）
- [PR #3239](https://redirect.github.com/a2ui-project/a2ui/pull/3239) 合入 main：`SendA2uiToClientToolset` 从单 catalog 改为支持 catalog 序列。**注意：此为破坏性变更**（`feat!`），调用方接口签名有调整，下游用户升级时需留意。
- 配套的 P1 需求 [Issue #3232](https://redirect.github.com/a2ui-project/a2ui/issues/3232)（跨 catalog `$ref` 引用）当天提出当天关闭，验证了 multi-catalog 场景的核心诉求。
- TypeScript 侧同步推进：[PR #3180](https://redirect.github.com/a2ui-project/a2ui/pull/3180)（ExpressPromptGenerator 多 catalog 规则，自 Python 移植）与 [PR #3181](https://redirect.github.com/a2ui-project/a2ui/pull/3181)（多 catalog 与 request processor 一致性测试套件）均已关闭。
- 架构根源问题同步收口：[RFC #3053](https://redirect.github.com/a2ui-project/a2ui/issues/3053)（将 Catalog 拆分为 `fromJson`/`toJson`/`validationSchema`）与由此衍生的 8 评论热点 Bug [#2933](https://redirect.github.com/a2ui-project/a2ui/issues/2933) 均已关闭。**从 10-07 RFC 提出，到一周内跨 SDK 落地，这条"问题 → RFC → 实施"闭环是本期项目前进幅度最大的证明。**
- 后续已在路上：[PR #3240](https://redirect.github.com/a2ui-project/a2ui/pull/3240)（stacked on #3239，支持任意 inference format）待合并。

### 主线二：Dart Agent SDK 加速追赶
- [PR #3225](https://redirect.github.com/a2ui-project/a2ui/pull/3225) 关闭：以 ANTLR 从 `Express.g4` 生成 Dart 解析器，替换手写 lexer/parser，与 Python SDK 的生成方式对齐；对应 [Issue #2969](https://redirect.github.com/a2ui-project/a2ui/issues/2969) 关闭。
- [PR #3242](https://redirect.github.com/a2ui-project/a2ui/pull/3242) 进行中：实现协议 v1.0 完整 API（此前仅有抛 `UnimplementedError` 的桩），推进 [Issue #2356](https://redirect.github.com/a2ui-project/a2ui/issues/2356)（Dart Agent SDK，P1）。

### 主线三：评估与 CI 基础设施
- [PR #3237](https://redirect.github.com/a2ui-project/a2ui/pull/3237) 合入 main：`eval/` 套件从单一 Python 扩展至 Python / TypeScript / Dart 三 SDK，共享 Inspect AI harness 与数据集——为三 SDK 行为一致性提供了量化基线。
- [PR #3251](https://redirect.github.com/a2ui-project/a2ui/pull/3251) 新开：将 `samples/agent/node` 接入 `ci-samples` 工作流。

### 主线四：仓库结构重组
- [PR #3241](https://redirect.github.com/a2ui-project/a2ui/pull/3241) 合入 main：TS Agent SDK 迁移至 `typescript/agents/a2ui_agent`，对齐 core/renderers/catalogs 的目录规范，对应 [Issue #3221](https://redirect.github.com/a2ui-project/a2ui/issues/3221) 关闭。

### 主线五：历史遗留集中清理
- Agent SDK 模板化路线四个跟踪 Issue（2026-02-26 创建，近 8 个月）：[#721](https://redirect.github.com/a2ui-project/a2ui/issues/721)（模板 schema）、[#722](https://redirect.github.com/a2ui-project/a2ui/issues/722)（Python inference/inflation 库）、[#723](https://redirect.github.com/a2ui-project/a2ui/issues/723)（Protocol Wrapper）、[#724](https://redirect.github.com/a2ui-project/a2ui/issues/724)（示例迁移）**全部关闭**，Template Profile 工作线正式收尾。
- 同期关闭的工程债：[#1928](https://redirect.github.com/a2ui-project/a2ui/issues/1928)（Git-Tag 驱动的 Python 动态版本）、[#3116](https://redirect.github.com/a2ui-project/a2ui/issues/3116)（移除废弃 DirectJsonStreamParser）、[#1613](https://redirect.github.com/a2ui-project/a2ui/issues/1613)（cuttable keys 可配置化）。
- Flutter/Swift 维护：[PR #3249](https://redirect.github.com/a2ui-project/a2ui/pull/3249) 当天创建并关闭，处理 Flutter beta 弃用 `material.dart` 的 CI 告警（对应 [Issue #3243](https://redirect.github.com/a2ui-project/a2ui/issues/3243) 关闭）；Swift 渲染器 Bug [#3201](https://redirect.github.com/a2ui-project/a2ui/issues/3201)、[#3164](https://redirect.github.com/a2ui-project/a2ui/issues/3164)（GenericError 校验）关闭。

**整体评估**：单日 17 条 Issue 关闭 + 18 个 PR 处置，多 catalog、三 SDK 评估、Dart 现代化三条主线同时推进，项目整体向前迈出显著一步。

---

## 3. 社区热点

| 热点 | 互动 | 状态 | 核心内容 |
|---|---|---|---|
| [Issue #2933](https://redirect.github.com/a2ui-project/a2ui/issues/2933) | 8 评论 | 已关闭 | `Catalog.catalogSchema` 无法 round-trip 从 JSON 加载的 catalog——暴露"验证 schema"与"序列化"双重职责的架构缺陷，直接催生 RFC #3053 |
| [Issue #721](https://redirect.github.com/a2ui-project/a2ui/issues/721) | 7 评论 | 已关闭 | A2UI 模板 schema 与数据绑定语法定型（Composer 与 Agent SDK 互操作契约） |
| [Issue #722](https://redirect.github.com/a2ui-project/a2ui/issues/722) / [#723](https://redirect.github.com/a2ui-project/a2ui/issues/723) | 各 5 评论 | 已关闭 | Python 推理/膨胀库与 Protocol Wrapper，模板路线核心组件 |
| [Issue #3053](https://redirect.github.com/a2ui-project/a2ui/issues/3053) | 4 评论 | 已关闭 | RFC：Catalog API 职责分离，本期架构决策的核心讨论 |
| [Issue #3214](https://redirect.github.com/a2ui-project/a2ui/issues/3214) | **4 👍** / 2 评论 | OPEN | **OpenUI（thesysdev）创始人提议统一 Express 与 OpenUI Lang 语法** |

**诉求解读**：本期讨论热度最高的内容集中两类——一是核心维护者围绕 Catalog/模板架构的收口决策（#2933 → #3053 → PR #3239 链条），显示架构治理在加速；二是外部生态（OpenUI）主动寻求语法层互操作，说明 A2UI 的 Express 格式已在生成式 UI 领域获得足够影响力，值得维护者优先回应（该帖已 cc 核心维护者 @​gspencergoog、@​jacobsimionato）。

---

## 4. Bug 与稳定性

### 🔴 主干 CI 红灯（最高优先级，今日新增 5 个失败工单）

| Issue | 失败工作流 | 触发 PR |
|---|---|---|
| [#3250](https://redirect.github.com/a2ui-project/a2ui/issues/3250) | Evals (Python SDK) | [#3241](https://redirect.github.com/a2ui-project/a2ui/pull/3241)（目录迁移） |
| [#3248](https://redirect.github.com/a2ui-project/a2ui/issues/3248) | Evals (TypeScript SDK) | [#3239](https://redirect.github.com/a2ui-project/a2ui/pull/3239)（多 catalog） |
| [#3247](https://redirect.github.com/a2ui-project/a2ui/issues/3247) | E2E tests | [#3239](https://redirect.github.com/a2ui-project/a2ui/pull/3239) |
| [#3245](https://redirect.github.com/a2ui-project/a2ui/issues/3245) | Evals (Python SDK) | [#3239](https://redirect.github.com/a2ui-project/a2ui/pull/3239) |
| [#3244](https://redirect.github.com/a2ui-project/a2ui/issues/3244) | Evals (Python SDK) | [#3237](https://redirect.github.com/a2ui-project/a2ui/pull/3237)（eval 扩展） |

**解读**：三个刚合入 main 的 PR 全部触发流水线失败，集中指向多 catalog 变更与 TS 包路径迁移，**本期未见针对性 fix PR**，建议维护者优先修复，避免失败累积。

### 🟠 P2 用户侧问题（按影响面排序，均未见 fix PR）

1. [#3158](https://redirect.github.com/a2ui-project/a2ui/issues/3158) — `@a2ui/react` 0.13.0 在无 `HTMLElement` 的 Node 环境**导入即崩溃**（0.12→0.13 回归），影响所有 SSR/服务端场景。状态 needs review。
2. [#3151](https://redirect.github.com/a2ui-project/a2ui/issues/3151) — Nightly E2E 自 **10-03 起连续 13 天失败**（restaurant_finder 启动退出，v0.8 示例校验不过），已产生 7 个重复 bot 工单噪音。状态 needs review。
3. [#3161](https://redirect.github.com/a2ui-project/a2ui/issues/3161) — `a2ui-agent-sdk` 依赖 `a2a-sdk<0.4.0`，与 a2a-sdk 1.x **无法共存安装**，属生态兼容性硬阻塞。
4. [#3149](https://redirect.github.com/a2ui-project/a2ui/issues/3149) / [#3172](https://redirect.github.com/a2ui-project/a2ui/issues/3172) — Swift v1.0 基础 catalog：`and/or/not` 将对象一律视为真值；`formatString` 渲染出 `{"path":…}` 而非绑定值。均处 waiting-for-author-response。

### ✅ 本期已处理
- [#3201](https://redirect.github.com/a2ui-project/a2ui/issues/3201)（Swift 模板 path 变更后按钮携带旧数据作用域）已关闭。

---

## 5. 功能请求与路线图信号

| 需求 | 来源/热度 | 信号强度 | 判断 |
|---|---|---|---|
| [多 catalog + 跨 catalog `$ref`](https://redirect.github.com/a2ui-project/a2ui/issues/3232)（P1） | 核心维护者 | ★★★★★ | **已落地**（PR #3239/#3180/#3181），后续 #3240 在途，大概率进入下一版本 |
| [Dart Agent SDK 1.0](https://redirect.github.com/a2ui-project/a2ui/issues/2356)（P1） | 核心维护者 | ★★★★★ | PR #3242 实现中 + ANTLR 解析器已就位，Dart 三 SDK 对齐是明确路线 |
| [Express / OpenUI Lang 语法统一](https://redirect.github.com/a2ui-project/a2ui/issues/3214) | OpenUI 团队，4 👍 | ★★★★ | 战略级生态合作议题，语法契约（#721 已关闭）恰好为谈判提供了基础，值得关注维护者表态 |
| [Swift 渲染器增量刷新](https://redirect.github.com/a2ui-project/a2ui/issues/3200)（P2） | 社区，3 评论 | ★★★ | 2000 项列表每次输入全树重解析的性能诉求，涉及渲染核心架构，属中期工程 |
| [Swift 支持 visionOS / tvOS / watchOS](https://redirect.github.com/a2ui-project/a2ui/issues/3252) | 社区，今日新开 | ★★★ | Apple 全平台覆盖诉求，尚无关联 PR |
| [a2ui-agent-sdk 兼容 a2a-sdk 1.x](https://redirect.github.com/a2ui-project/a2ui/issues/3161)（P2） | 社区 | ★★★★ | 依赖锁死影响实际部署，社区呼声明确，建议尽快排期 |

---

## 6. 用户反馈摘要

- **生态合作意愿**：OpenUI 作者明确表达对 A2UI 的认可，希望两个生成式 UI 栈在语言层互通（[#3214](https://redirect.github.com/a2ui-project/a2ui/issues/3214)）——反映 A2UI 规范的行业存在感在上升。
- **Swift 渲染器 v1.0 质量担忧**：用户 karolkulesza 在一周内密集报告 3 个以上行为不一致问题（真值判断、绑定渲染、accessibility 未生效 [#3120](https://redirect.github.com/a2ui-project/a2ui/issues/3120)），显示 **v1.0 catalog 在 Swift 端与 React/Lit 端存在语义偏差**，一致性测试价值凸显。
- **性能痛点**：用户 BBC6BAE9 指出 Swift 渲染器"每写一次数据就重解析整棵树"（[#3200](https://redirect.github.com/a2ui-project/a2ui/issues/3200)），大列表场景延迟明显；同时提出 Apple 其余平台支持（[#3252](https://redirect.github.com/a2ui-project/a2ui/issues/3252)），说明存在真实生产使用场景。
- **SSR/Node 侧回归刺痛**：`@a2ui/react` 0.13.0 导入即崩（[#3158](https://redirect.github.com/a2ui-project/a2ui/issues/3158)），影响服务端集成用户，是本期最需优先回应的社区反馈。
- **Python 依赖体验**：用户 ferponse 遭遇 `a2a-sdk` 版本冲突无法安装（[#3161](https://redirect.github.com/a2ui-project/a2ui/issues/3161)），反映依赖锁定策略过紧。
- **积极面**：贡献者 josemontespg 持续深耕 iframe/MCP catalog（schema → 包 → 组件 → 示例 → 文档全栈），社区贡献热情高但合并速度成为瓶颈（见下节）。

---

## 7. 待处理积压

| 条目 | 主题 | 开启日期 | 待处理时长 | 状态 |
|---|---|---|---|---|
| [PR #2795](https://redirect.github.com/a2ui-project/a2ui/pull/2795) / [#2797](https://redirect.github.com/a2ui-project/a2ui/pull/2797) / [#2798](https://redirect.github.com/a2ui-project/a2ui/pull/2798) | iframe catalog：schema、包与 frame bridge、WebAppFrame 组件 | 09-25 | **21 天** | OPEN |
| [PR #2803](https://redirect.github.com/a2ui-project/a2ui/pull/2803) | iframe + MCP catalog 开发者指南 | 09-25 | 21 天 | OPEN |
| [PR #3008](https://redirect.github.com/a2ui-project/a2ui/pull/3008) / [#3009](https://redirect.github.com/a2ui-project/a2ui/pull/3009) | iframe catalog 示例（tip calculator / order tracker） | 10-05 | 11 天 | OPEN |
| [PR #3226](https://redirect.github.com/a2ui-project/a2ui/pull/3226) | MCP Kanban board 全栈示例 | 10-15 | 1 天 | OPEN |
| [Issue #3158](https://redirect.github.com/a2ui-project/a2ui/issues/3158) | react SSR 导入崩溃 | 10-12 | 4 天（needs review，**无 fix PR**） | OPEN |
| [Issue #3151](https://redirect.github.com/a2ui-project/a2ui/issues/3151) | Nightly E2E 持续失败 | 10-12 | 4 天（needs review，失败根因自 10-03） | OPEN |
| [PR #3211](https://redirect.github.com/a2ui-project/a2ui/pull/3211) | dependabot：npm_and_yarn 组 16 项更新（含 js-yaml 4.3.0→4.3.2） | 10-14 | 2 天 | OPEN |

**提醒**：
1. **iframe/MCP catalog 系列（7 个 PR，其中 3 个已积压 3 周）**形成一条完整的依赖链（schema → 包 → 组件 → 示例 → 文档），贡献者已完成端到端工作，建议维护者优先批量 review，避免社区贡献流失。
2. **#3158 与 main 分支 CI 红灯（5 个失败工单）**是当前健康度的两大风险点，建议在下一次版本发布前清零。
3. #3149 / #3172 处于 waiting-for-author-response，若作者未回复可考虑转为团队认领。

---

*数据来源：GitHub Issues/PRs/Releases（过去 24 小时）。本报告基于自动采集数据生成，个别状态可能存在时延。*

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目动态日报

**仓库**: [thesysdev/openui](https://github.com/thesysdev/openui) | **报告日期**: 2026-10-16 | **数据窗口**: 过去 24 小时

---

## 1. 今日速览

OpenUI 今日处于高强度迭代期：过去 24 小时共 19 条 PR 更新，其中 16 条已合并/关闭（流转率约 **84%**），并有 **10 个 npm 包**发布新版本。工作集中在三条主线：官网/文档大规模重组、模板与示例体系刷新、Agent 集成能力（CLI `setup-agent` 命令、服务端 frontend-token）落地。Issue 侧流量偏低（2 条活跃、0 条关闭），且均为历史问题的持续讨论，无新报 Bug。发布节奏由 Changesets + thesys-pr-creator[bot] 自动化驱动，并有 Devin AI 参与文档修复，工程自动化成熟度高。**整体健康度：良好**；需关注两个带 `help wanted` 标签的老 Issue 仍无对应 fix PR。

---

## 2. 版本发布（10 个）

| 包名 | 版本 | 类型 | 来源 PR | 核心内容 |
|---|---|---|---|---|
| [@​openuidev/cli](https://redirect.github.com/thesysdev/openui/pull/1384) | 0.6.0 | **Minor** | #1384 | `create .` 支持在空目录中直接脚手架到当前目录 |
| @​openuidev/cli | 0.5.3 | Patch | [#1411](https://redirect.github.com/thesysdev/openui/pull/1411) | 修复 `create` 在 coding agent / 非交互终端下挂起或失败 |
| @​openuidev/react-ui | 0.18.1 | Patch | [#1327](https://redirect.github.com/thesysdev/openui/pull/1327) | AgentInterface 外壳刷新：折叠式侧边栏 rail |
| @​openuidev/react-headless | 0.18.1 | Patch | #1394 | 文档更新（Lang 1.0 README） |
| @​openuidev/react-lang | 1.0.1 | Patch | #1394 | 同上 |
| @​openuidev/lang-core | 1.0.1 | Patch | #1394 | 同上 |
| @​openuidev/browser-bundle | 0.2.1 | Patch | #1394 | 同上 |
| @​openuidev/vue-lang | 0.4.2 | Patch | #1394 | 同上 |
| @​openuidev/svelte-lang | 0.4.2 | Patch | #1394 | 同上 |
| @​openuidev/angular-lang | 0.4.2 | Patch | #1394 | 同上 |

**破坏性变更**：无。唯一 Minor 版本（cli 0.6.0）为新增行为，不影响既有用法；[#1394](https://redirect.github.com/thesysdev/openui/pull/1394) 波及 8 个包但均为文档级 Patch。

**迁移注意事项**：
- CLI 同日发布 0.5.3 与 0.6.0 两个版本，建议直接升级至 0.6.0（同时获得非交互终端修复）；
- 多框架包存在版本代差（react-lang 已至 1.0.1，vue/svelte/angular-lang 为 0.4.2），混用 `@openuidev/*` 依赖时注意保持版本范围一致——这正是 [#1391](https://redirect.github.com/thesysdev/openui/pull/1391) 修复的坑（lang-core 1.0.0 曾与 0.4.1 框架包产生依赖冲突）。

---

## 3. 项目进展

今日合并/关闭的 16 条 PR 可归为五类，项目明显向前推进：

**① 安全与多用户能力**
- [#1241](https://redirect.github.com/thesysdev/openui/pull/1241)：为 `@openuidev/server` 添加 frontend-token 支持，实现用户级会话访问授权。9 月 25 日开启，历时约 3 周评审今日落地，是当日最重要的功能性变更。

**② Agent 工作流集成**
- [#1430](https://redirect.github.com/thesysdev/openui/pull/1430)：新增 `openui setup-agent` 命令，将 OpenUI 技能写入项目 `AGENTS.md`（用 `<!-- openui:start/end -->` 标记块包裹，可重复刷新），进一步降低 AI 编码代理接入门槛。

**③ 模板与上手体验**
- [#1384](https://redirect.github.com/thesysdev/openui/pull/1384)：openui-cloud 模板采用 AgentInterface 新设计（品牌字标、吉祥物、模型切换器移入顶栏），与 react-ui 0.18.1 配套；
- [#1434](https://redirect.github.com/thesysdev/openui/pull/1434)：全部模板/overlay 统一三组欢迎 starter（早餐营养对比、复利增长、选车助手），覆盖图表、表格、表单能力展示；
- [#1391](https://redirect.github.com/thesysdev/openui/pull/1391)：修复 starter 依赖越界问题。

**④ 官网与文档**
- [#1426](https://redirect.github.com/thesysdev/openui/pull/1426)：官网整体简化重组（首页结构、导航、主题逻辑重构，当日多项后续 PR 均基于此 rebase）；
- [#1433](https://redirect.github.com/thesysdev/openui/pull/1433)：在 `openui.com/demo/intelligent-ui` 上线 [Open Intelligent UI](https://github.com/thesysdev/open-intelligent-ui) 演示；
- [#1419](https://redirect.github.com/thesysdev/openui/pull/1419)（新 Logo）、[#1435](https://redirect.github.com/thesysdev/openui/pull/1435)（OG 图）、[#1436](https://redirect.github.com/thesysdev/openui/pull/1436)（移动端细节）、[#1437](https://redirect.github.com/thesysdev/openui/pull/1437)（og:logo）、[#1431](https://redirect.github.com/thesysdev/openui/pull/1431)（Gateway 快速开始图重绘）。

**⑤ 发布工程**
- [#1432](https://redirect.github.com/thesysdev/openui/pull/1432)、[#1395](https://redirect.github.com/thesysdev/openui/pull/1395)：Changesets 自动 version PR，产出今日 10 个发布。

**推进评估**：单日完成授权能力、CLI 新命令、模板重构、官网改版四个层面的交付，配合 10 包发布，迭代速度显著高于常规开源项目均值。

---

## 4. 社区热点

今日活跃度最高的讨论（Issue 流量本身偏低，以下为仅有的两条，但均有更新）：

- **[#391](https://redirect.github.com/thesysdev/openui/issues/391) — OpenUI Lang 自定义表单校验**（4 条评论，10-15 更新）
  诉求：内置校验规则（必填、长度、邮箱格式等）无法表达应用特定逻辑，真实业务表单需要自定义校验钩子。带 `enhancement + help wanted` 双标签，维护者欢迎社区贡献方案。该 Issue 自 3 月开启至今讨论持续，说明是 Lang 用户的长期痛点。

- **[#727](https://redirect.github.com/thesysdev/openui/issues/727) — Renderer 提交阶段 `insertBefore` 崩溃**（2 条评论，10-15 更新）
  诉求：`react-lang@0.2.1` 的 Renderer 在流式渲染/重渲染时可能抛出 `NotFoundError: Failed to execute 'insertBefore'`，直接崩溃宿主应用。用户在 ElementErrorBoundary 重新呈现过期子节点 + index-keyed children 场景下复现。

- **[#1429](https://redirect.github.com/thesysdev/openui/pull/1429) — 首页推文墙刷新**（OPEN）
  社区生态信号集中地：拟替换为 2026 年 5–10 月的 15 条近期推文，包括 **Lynx 4.0 内置 OpenUI 与 Agent Skills 支持**（317 赞）等来自知名框架/构建者的正面反馈。

---

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#727](https://redirect.github.com/thesysdev/openui/issues/727) Renderer 提交阶段 `insertBefore` NotFoundError，流式内容重渲染时可**崩溃宿主应用** | **无 fix PR**，标签 `help wanted`，已悬置约 3 个月 |
| 🟡 中 | [#1439](https://redirect.github.com/thesysdev/openui/pull/1439) 描述的文档 System 主题半暗问题：OS 暗色模式下页面背景变暗但 fumadocs 组件（按钮、Shiki 高亮）保持亮色，文字几乎不可读 | 已有 Devin AI 提交的修复 PR，当日创建并关闭 |
| 🟢 已修复 | CLI `create` 在 coding agent / 非交互终端下挂起或失败 | [#1411](https://redirect.github.com/thesysdev/openui/pull/1411) → cli 0.5.3 已发布 |
| 🟢 已修复 | starter 中 `@openuidev/*` 依赖版本越界导致安装失败 | [#1391](https://redirect.github.com/thesysdev/openui/pull/1391) 已关闭 |

**稳定性结论**：今日无新增 Bug 报告（0 条新开 Issue），CLI 侧两个已知问题已随 0.5.3/0.6.0 修复。最大隐患是 #727 的流式渲染崩溃尚无修复计划，涉及 React 提交阶段的 DOM 操作时序，属于底层 Renderer 复杂缺陷。

---

## 6. 功能请求与路线图信号

**本期唯一功能请求**：[#391](https://redirect.github.com/thesysdev/openui/issues/391) 自定义表单校验。截至今日无关联 PR，`help wanted` 标签表明维护者开放社区认领。结合 Lang 1.0 的文档推进力度（#1394 一次更新 8 个包的 README），Lang 生态是当前投入重心，该需求**被纳入后续版本的概率中等**，但短期内更可能以社区 PR 形式出现而非核心团队自研。

**从已合并 PR 反推的路线图信号**：
- **Agent/IDE 深度集成**：#1430（`setup-agent` 写入 AGENTS.md）+ #1241（frontend-token 用户级授权）→ 明显在为"AI 编码代理直接使用 OpenUI"铺路，预计是下阶段主线；
- **多框架均衡维护**：vue/svelte/angular-lang 与 react-lang 并行发版，框架覆盖是长期承诺；
- **新手体验标准化**：#1434 统一 starter、#1384 模板重设计、#1438（进行中的模板例行更新）→ 降低 first-run 门槛；
- **生态展示窗口**：#1429 推文墙、#1433 Intelligent UI 演示页 → 对外传播投入加大。

---

## 7. 用户反馈摘要

- **痛点 1（表单能力天花板）**：#391 反映用户已将 OpenUI Lang 用于生产级表单，但通用校验规则无法覆盖业务逻辑（跨字段校验、异步校验、自定义错误提示等场景），说明用户群正从尝鲜转向实战。
- **痛点 2（流式渲染稳定性）**：#727 的复现路径（ElementErrorBoundary + index-keyed children + streaming）显示用户在**真实流式 Agent 应用**中遭遇崩溃，对宿主应用是致命级影响——这是 Lang 1.0 后必须补的稳定性课。
- **正面信号**：#1429 整理的社区推文显示 Lynx 4.0 等知名框架主动集成 OpenUI 与 Agent Skills，生态采用面在扩大；twitter 构建者社区（5–10 月）持续有自发讨论。
- **工具链反馈**：#1411 修复的"coding agent 下 CLI 挂起"问题，侧面印证大量用户正在 AI 代理环境中使用 OpenUI CLI。

---

## 8. 待处理积压

提醒维护者关注的未决事项（按紧迫度排序）：

| 事项 | 开启时间 | 悬置时长 | 状态 |
|---|---|---|---|
| [#727](https://redirect.github.com/thesysdev/openui/issues/727) Renderer 崩溃 | 2026-07-07 | **约 3 个月** | `help wanted`，无 fix PR，影响流式场景稳定性 |
| [#391](https://redirect.github.com/thesysdev/openui/issues/391) 自定义表单校验 | 2026-03-25 | **约 7 个月** | 4 条评论持续讨论，仍无方案落地 |
| [#1373](https://redirect.github.com/thesysdev/openui/pull/1373) 示例 localStorage 聊天历史 | 2026-10-12 | 4 天 | OPEN，修复切换会话/刷新后仅剩首条消息的 QA 问题，待 review |
| [#1429](https://redirect.github.com/thesysdev/openui/pull/1429) 推文墙刷新 | 2026-10-14 | 2 天 | OPEN，社区内容类 PR，待 review |
| [#1438](https://redirect.github.com/thesysdev/openui/pull/1438) 模板/示例依赖例行更新 | 2026-10-15 | 1 天 | OPEN，机器人例行 PR，低优先级 |

**建议**：#727 属于底层 Renderer 缺陷且已有用户复现细节，建议优先安排核心维护者排查或明确 bounty；#391 悬置最久，若短期无排期计划，可在 README/路线图中明确说明以管理社区预期。

---

*数据来源：GitHub API（Issues / PRs / Releases），统计窗口为 2026-10-15 至 2026-10-16。链接均指向 thesysdev/openui 仓库对应条目。*

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报

**日期：** 2026-10-16 | **仓库：** [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)

| 核心指标（24h） | 数值 |
|---|---|
| PR 活跃 | 27 条（待合并 15 / 已合并·关闭 12） |
| Issue 活跃 | 2 条（活跃 1 / 已关闭 1） |
| 版本发布 | 5 个，横跨 5 条发版线 |

---

## 1. 今日速览

CopilotKit 今日处于**高开发强度**状态：24 小时内 27 条 PR 更新、12 条合并或关闭（吞吐率约 44%），并连续发布 5 个版本，覆盖 channels、monorepo、intelligence（mastra/langgraph）与 angular 五条产品线。当日最重要事件是一起影响面较大的**安装故障**——`@copilotkit/runtime` 在 npm 10（Node 22 默认）下因 vitest 可选 peer 依赖问题导致安装直接失败，从修复到发版（channels v0.11.1）再到 17 个 starter 模板同步更新，**同日内完成闭环**，展现了较强的故障响应能力。功能层面，"Automatic Learning / Intelligence" 学习子系统明显加速（回复评分、Trajectory 证据、跨容器技能消费多点推进）。社区侧 Issue 流量偏低（仅 2 条），无新增积压。值得注意：发布基础设施修复 OSS-1107（各 scope 版本线互相冻结问题）落地后，多线并行发版通道被打通，今日"5 连发"即为例证。

---

## 2. 版本发布（5 个）

| 版本 | 级别 | 关键内容 | 来源 PR |
|---|---|---|---|
| [channels v0.11.1](https://redirect.github.com/CopilotKit/CopilotKit/pull/7842) | patch | **feat: AG-UI 1.0 for CopilotKit（#7270）**；npm 10 安装失败修复（#7834）；Intelligence socket 每 15s 心跳，防 30s 代理空闲断连（#7568）；Slack 消息点击事件回传 `state.values`（#6523） | #7842 |
| [v1.79.1 (monorepo)](https://redirect.github.com/CopilotKit/CopilotKit/pull/7833) | patch | Trajectories 服务端归入 Learning Spaces（#7601）；web-inspector 合并流式 transcript 刷新（#7832）；a2ui-renderer `RendererProps.children` 类型修正为 `(id, basePath?)`（#7801） | #7833 |
| [intelligence-mastra v1.72.0](https://redirect.github.com/CopilotKit/CopilotKit/pull/7840) | minor | 跨 SDK 从多个容器消费已学习技能（#7384）；BuiltInAgent 自动技能分发（#7254）；发布线互相冻结修复（OSS-1107，#6856） | #7840 |
| [intelligence-langgraph v1.72.0](https://redirect.github.com/CopilotKit/CopilotKit/pull/7838) | minor | 同上（与 mastra 版本对齐） | #7838 |
| [angular v0.6.0](https://redirect.github.com/CopilotKit/CopilotKit/pull/7837) | minor | 请求头在每次请求发送时求值（sync/async builders，#7510）；新增 learning 包并增强 `CopilotChatAssistantMessageRen…`（#7700）；OSS-1107 修复 | #7837 |

**迁移注意事项：**
- 本批已发布版本均为 patch/minor，**无直接破坏性变更**。
- ⚠️ **channels v0.11.0 → v0.11.1 为必升级项**：0.11.0 的可选 vitest peer 会让 npm 10 直接报错 `Cannot read properties of null (reading 'edgesOut')`。官方已同步修复 17 个锁定 0.11.0 的 starter 及其 lockfile（[PR #7844](https://redirect.github.com/CopilotKit/CopilotKit/pull/7844)），自建项目若仍在 0.11.0 需手动升级。
- ⚠️ **前瞻预警**：待合并的 [#7786](https://redirect.github.com/CopilotKit/CopilotKit/pull/7786) 将移除 Discord / Telegram / WhatsApp 适配器，channels 未来仅保留 Slack 与 Teams——属破坏性变更，尚未进入已发布版本，但现有相关渠道用户应提前规划。
- 备注：[#7843](https://redirect.github.com/CopilotKit/CopilotKit/pull/7843)（release channels v0.11.2）今日创建后即被关闭，而发布列表最新仍为 v0.11.1，该版本最终状态待确认。

---

## 3. 项目进展

今日合并/关闭的 12 条 PR 按主题推进了四条主线：

**① 安装故障当日闭环（关键进展）**
- [#7834](https://redirect.github.com/CopilotKit/CopilotKit/pull/7834)：移除 channels 的可选 vitest peer，修复 npm 10 安装失败，随 v0.11.1 发布。
- [#7844](https://redirect.github.com/CopilotKit/CopilotKit/pull/7844)：17 个 starter 的版本 pin 与 lockfile 同步升级至 0.11.1，通过 21 项依赖校验测试。

**② Automatic Learning 子系统持续成型**
- 已发布：Trajectories 归入 Learning Spaces（#7601，v1.79.1）、跨容器技能消费与自动分发（#7384 / #7254，v1.72.0）。
- 进行中：[回复点赞/点踩 + 可选评论收集](https://redirect.github.com/CopilotKit/CopilotKit/pull/7828)（#7828，零配置接入 CopilotChat/Popup/Sidebar）、[Learning Insights 展示 Trajectory 证据](https://redirect.github.com/CopilotKit/CopilotKit/pull/7812)（#7812）。

**③ Intelligence 运行时稳定性加固**
- 已发布：socket 心跳防代理断连（#7568）。
- 进行中：[Runner 连接中断、重放失败与错误重放修复](https://redirect.github.com/CopilotKit/CopilotKit/pull/7826)（#7826，逐 commit 独立可回滚）、[限流 transcript 读取重试](https://redirect.github.com/CopilotKit/CopilotKit/pull/7835)（#7835）。

**④ 测试与发布基础设施**
- [#7839](https://redirect.github.com/CopilotKit/CopilotKit/pull/7839)：注册 showcase staging runner，解除 CI 构建阻塞。
- 6 条自动化发版 PR 合并（#7833/#7836/#7837/#7838/#7840/#7842），OSS-1107 修复使各 scope 发版不再互相牵制。

整体判断：项目在功能（Learning）、稳定性（Intelligence runtime）、工程基建（测试/发版）三条战线上同步推进，今日净前进幅度较大。

---

## 4. 社区热点

> 数据说明：今日 PR 评论数缺失（undefined），Issue 仅 2 条，以下按可得信号排序。

- **[Issue #6910](https://redirect.github.com/CopilotKit/CopilotKit/issues/6910)**（3 条评论，10-15 有更新）——今日评论最多的条目。用户 yannj-fr 指出 MCP Apps sandbox 当前通过 `srcdoc` 加载代理，导致 **sandbox 与宿主同源，违反 SEP-1865 安全规范中"Host 与 Sandbox 必须不同源"的强制要求**。背后诉求是**企业级安全合规**：金融、医疗等场景下同源沙箱会被安全审计直接否决。
- **[Issue #7800](https://redirect.github.com/CopilotKit/CopilotKit/issues/7800)**（1 条评论）——社区 bug 报告的正面样本：10-13 提交 a2ui-renderer 类型缺陷，10-15 即随 v1.79.1 修复关闭，**2 天闭环**。
- **[PR #7786](https://redirect.github.com/CopilotKit/CopilotKit/pull/7786)**——移除三大 IM 渠道适配器属重大范围收缩决策，今日持续更新，预计是 Discord/Telegram/WhatsApp 现有用户的关注焦点（PR 明确承诺原生消息、按钮、回调等 API 不受影响）。
- **[PR #6146](https://github.com/CopilotKit/CopilotKit/CopilotKit/pull/6146)**——Slack/Teams 托管 JSX 图片能力，开于 7 月下旬，今日仍有更新，长期处于活跃打磨状态。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | 修复 |
|---|---|---|---|
| 🔴 严重 | **npm 10 安装失败**：`npm install @​copilotkit/runtime` 报 `Cannot read properties of null (reading 'edgesOut')`，自 2026-10-15 14:51 UTC 起影响所有新装用户，波及 17 个 starter | ✅ 已修复 | [#7834](https://redirect.github.com/CopilotKit/CopilotKit/pull/7834) → channels v0.11.1；starter 修复 [#7844](https://redirect.github.com/CopilotKit/CopilotKit/pull/7844) |
| 🟠 高 | **自托管 Intelligence run 失败**："Runner connection dropped"，LangGraph 部署场景，涉及连接耐久性与重放错误 | 🔧 Fix PR 开放中 | [#7826](https://redirect.github.com/CopilotKit/CopilotKit/pull/7826) |
| 🟠 高 | **transcript 限流读取失败**：每次 run 启动与 Channel 投递都先读线程历史，读取被限流即整体 502 `Thread history lookup failed` | 🔧 Fix PR 开放中 | [#7835](https://redirect.github.com/CopilotKit/CopilotKit/pull/7835) |
| 🟡 中 | **web-inspector 证据丢失**：Learning 生成的 Insight 显示"0 Threads"、证据面板报"Evidence is no longer available"，实际证据存在 | 🔧 Fix PR 开放中 | [#7812](https://redirect.github.com/CopilotKit/CopilotKit/pull/7812) |
| 🟢 低 | **a2ui-renderer 类型过窄**：`RendererProps.children` 类型未含 `basePath`，list 模板无法通过类型检查 | ✅ 已修复 | [#7801](https://redirect.github.com/CopilotKit/CopilotKit/pull/7801) → v1.79.1（Issue [#7800](https://redirect.github.com/CopilotKit/CopilotKit/issues/7800) 已关闭） |
| ✅ 随版本修复 | 代理 30s 空闲断连（#7568）、Slack 点击事件 state.values 丢失（#6523）、web-inspector 流式刷新抖动（#7832） | ✅ 已发布 | channels v0.11.1 / v1.79.1 |

**稳定性评估：** 今日暴露的两个高优先级问题（#7826、#7835）均已有结构化修复 PR 在途，且核心安装事故当日闭环——整体响应闭环率健康。

---

## 6. 功能请求与路线图信号

结合今日 PR 与发版内容，可识别出明确的路线图方向：

1. **Automatic Learning 是当前主轴**：评分收集（#7828，PE-836）、Trajectory 证据链（#7812、#7601）、跨容器技能消费与自动分发（#7384、#7254 已发布）多点开花，且 [angular v0.6.0 的 learning 包（#7700）](https://redirect.github.com/CopilotKit/CopilotKit/pull/7700)表明该能力正向多框架 SDK 扩展。#7828 与 #7812 极可能进入下一个 minor 版本。
2. **Channels 战略聚焦 Slack + Teams**：[#7786](https://redirect.github.com/CopilotKit/CopilotKit/pull/7786)（移除三个适配器）+ [#6146](https://redirect.github.com/CopilotKit/CopilotKit/pull/6146)（JSX 图片卡片）组合信号清晰——做深而非做广。依赖 Discord/Telegram/WhatsApp 的用户需提前迁移。
3. **AG-UI 1.0 集成已落地**（#7270，channels v0.11.1），与 AG-UI 生态的对接进入生产可用阶段。
4. **SEP-1865 合规**（[Issue #6910](https://redirect.github.com/CopilotKit/CopilotKit/issues/6910)）：MCP Apps sandbox 的跨源改造符合官方安全模型演进方向，存在被纳入路线图的可能，但尚无对应 PR。
5. **测试基建投入加码**：[Railway 测试从 Actions 触发（#7841）](https://redirect.github.com/CopilotKit/CopilotKit/pull/7841)、[生命周期与 row1 有界验证（#7709）](https://redirect.github.com/CopilotKit/CopilotKit/pull/7709)表明团队在为更大规模的集成验证铺路。

---

## 7. 用户反馈摘要

- **安全合规痛点**（[#6910](https://redirect.github.com/CopilotKit/CopilotKit/issues/6910)，yannj-fr）：用户对 MCP Apps sandbox 的安全模型有专业级认知（引用规范条款与文件路径），诉求是沙箱与宿主严格跨源。这类反馈反映 **企业/合规敏感型用户** 正在认真评估该平台。
- **TypeScript DX 痛点**（[#7800](https://redirect.github.com/CopilotKit/CopilotKit/issues/7800)，Laptopmini）：自定义 catalog 使用 ChildList 模板时类型签名不匹配，开发者需绕过类型系统。**2 天内修复关闭**，响应速度获得正面验证。
- **新用户上手受阻**（#7834 / #7844 背景）：npm 10 + Node 22 默认环境下，**克隆 starter 即安装失败**，属于对增长影响最直接的一类问题。依赖链中单一 peer 缺失即导致全线崩溃，暴露了 optional peer 的脆弱性，也促成了当日最快速的响应。
- **自托管可靠性痛点**（#7826 背景）：自托管 Intelligence + LangGraph 的用户遭遇 "Runner connection dropped"，说明**自部署路径**的健壮性仍是短板，修复中。

---

## 8. 待处理积压

| 条目 | 开启时间 | 积压时长 | 建议 |
|---|---|---|---|
| [PR #6146](https://redirect.github.com/CopilotKit/CopilotKit/pull/6146)（Slack/Teams JSX 图片） | 2026-07-24 | **约 3 个月** | 今日仍有更新但长期未合并，建议维护者给出明确的合并计划或拆分方案 |
| [Issue #6910](https://redirect.github.com/CopilotKit/CopilotKit/issues/6910)（SEP-1865 跨源沙箱） | 2026-09-04 | 约 6 周 | 涉及安全模型合规，3 条评论后无实质进展，建议给出规划立场 |
| [PR #7786](https://redirect.github.com/CopilotKit/CopilotKit/pull/7786)（移除三大适配器） | 2026-10-12 | 4 天 | 破坏性变更落地前应尽早发布迁移公告 |
| [PR #7709](https://redirect.github.com/CopilotKit/CopilotKit/pull/7709) / [#7767](https://redirect.github.com/CopilotKit/CopilotKit/pull/7767) | 10-08 / 10-12 | — | 测试整合与 AG2 1.x 迁移均待 review |
| [#7826](https://redirect.github.com/CopilotKit/CopilotKit/pull/7826) / [#7835](https://redirect.github.com/CopilotKit/CopilotKit/pull/7835) / [#7812](https://redirect.github.com/CopilotKit/CopilotKit/pull/7812) / [#7828](https://redirect.github.com/CopilotKit/CopilotKit/pull/7828) | 本周 | — | 今日活跃的高价值 PR，建议优先排期合并 |

---

**健康度小结：** 今日 CopilotKit 呈现"**高velocity、快闭环、低社区流入**"的特征——发版与修复节奏显著强于社区讨论节奏。安装事故的同日闭环、OSS-1107 打通多线发版是当日两个最有价值的工程信号；需关注的是自托管稳定性修复的落地进度，以及 #7786 破坏性变更的社区沟通是否充分。

*数据来源：GitHub API（24h 滚动窗口）。PR 评论数字段缺失，社区热度排序基于可得信号推断。*

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*