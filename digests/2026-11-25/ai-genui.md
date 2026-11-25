# 生成式 UI 生态日报 2026-11-25

> Issues: 20 | PRs: 94 | 覆盖项目: 4 个 | 生成时间: 2026-11-25 07:38 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告

**日期：2026-11-25 ｜ 观察对象：a2ui（a2ui-project/a2ui）、OpenUI（thesysdev/openui）、json-render（vercel-labs/json-render）、CopilotKit（CopilotKit/CopilotKit）**

---

## 一、生态全景

生成式 UI 生态整体正从"能渲染"向"可信、可部署、可治理"过渡：四个观察项目中三个高活跃（合计约 94 条 PR 更新/24h），仅 json-render 无动态。三条演进主线并行——**协议层**（a2ui 的 v1.0 decision 内核与 Server-Side Functions 架构辩论）、**产品层**（OpenUI 的 Dashboards 全链路交付）、**部署层**（CopilotKit 向 Cloudflare 边缘运行时扩张）。与此同时，安全修复（权限绕过、XSS、凭据 CORS）与契约的运行时执行成为多项目共同议题，标志生态开始为生产环境严肃化做准备。社区反馈焦点已从"功能有无"转向"多环境兼容、降级语义与可观测性"，这是成熟度上升的明确信号。

---

## 二、各项目活跃度对比

| 项目 | Issue 更新 | 新开/活跃 Issue | 关闭 Issue | PR 更新 | 待合并 PR | 合并/关闭 PR | 版本发布 |
|---|---|---|---|---|---|---|---|
| **a2ui** | 17 | 9 | 8（关闭率约 47%） | 50 | 40 | 10 | 0 |
| **OpenUI** | 1 | 1 | 0 | 29 | 9 | 20 | **8 个 npm 包版本**（4 minor + 4 patch） |
| **CopilotKit** | 2 | 2 | 0 | 15 | 10 | 5 | 0 |
| **json-render** | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **合计** | 20 | 12 | 8 | 94 | 59 | 35 | 8 |

**解读：** a2ui 是讨论与变更输入量最大的项目（67 条/24h），但 40 个待合并 PR 暴露评审吞吐瓶颈；OpenUI 是唯一有发布的项目，且"合并/关闭 : 待合并"比达 20:9，交付效率显著领先；CopilotKit 处于无发布窗口的变更累积期；json-render 本窗口不构成可比信号。

---

## 三、共同关注的功能方向

**① 服务端会话与函数编排（三个活跃项目同日推进，最强收敛信号）**
- **a2ui**：#2104 提案以 Catalog 定义的服务端函数 + 统一 Function RPC 替换 v1.0 的 `wantResponse`/`actionResponse` 事件模型，#4323（agent 函数 RPC）已在实现中；
- **OpenUI**：#1707 新增 `openui.conversations` 服务端会话 API，消除"前端每轮铸造 token 才能读取访客会话"的架构痛点；
- **CopilotKit**：#8561 要求断线重连时透传 `lastSeenEventId` 至 AgentRunner，来自自托管生产用户。
- **共同诉求**：会话状态、函数调用与鉴权上收服务端，前端不再持有长期凭证或承担编排职责。

**② 生成内容的可信度与降级语义**
- **OpenUI**：#1544 为 Live Artifact 增加数字来源溯源（跨 5 包联动发布）；#1711 要求区分"渲染失败"与"降级成功"的错误分级；
- **a2ui**：今日新报的 #4400（`returnType` 声明无运行时校验）表明用户已将"协议即契约"视为默认预期；
- **CopilotKit**：#8562 流式参数顺序容错缺失（`initialHeight` 后到即清空画布）暴露流式健壮性短板。

**③ 跨环境/跨实现一致性**
- **a2ui**：#1298 三个 web 渲染器（React/Lit/Angular）对基础 `Image` 实现互不一致，"一次编写、处处渲染"承诺承压；同日完成两处跨语言互操作性修复（#3135、#3975）；
- **CopilotKit**：Workers 加载失败（#8539，同日两个社区修复）、Next.js 16 适配（#8192/#8557）、Angular 构建警告（#7654/#7982 挂起 31 天）——用户部署环境高度碎片化。

**④ 生成式 UI 逃出聊天窗口（嵌入与渠道化）**
- **a2ui**：4 个 `@a2ui/embed` MCP Apps 原型，聚焦"纯文本对话难以表达的结构化交互"（谈判、行程规划、多目标权衡、空间规划）；
- **CopilotKit**：Teams Adaptive Cards 尺寸映射（#8340），渠道渲染从"能渲染"走向"可控渲染"；
- **OpenUI**：`dashboard-library` 独立成包，支持 assistant-ui 宿主嵌入。

---

## 四、差异化定位分析

| 维度 | a2ui | OpenUI | CopilotKit | json-render |
|---|---|---|---|---|
| **生态角色** | 开放协议标准 + 多语言 SDK/渲染器生态 | 端到端生成式 UI 平台（服务端 API + 组件库） | 嵌入式 AI 副驾驶应用框架 | 轻量 JSON→UI 渲染 |
| **目标用户** | 跨语言 agent 开发者、渲染器实现方、vendoring 下游用户 | React/TS 全栈开发者，追求快速集成交付 | 在既有产品中嵌入 AI 能力的应用团队 | — |
| **技术路线** | 规范驱动：JSON Schema、四语言 SDK（Swift/TS/Dart/Python）、三渲染器并重框架中立 | 垂直整合：自有 lang-core 中间语言 + `/v1` 服务端 API + Changesets 版本火车 | React/Vue 组件 + runtime + AG-UI 协议，多渠道（Teams）× 多运行时（Workers/Next.js） | — |
| **当前阶段** | v0.9.1 清债期 + v1.0 设计辩论（decision 内核 4 PR） | Dashboards 功能密集交付期 | 版本蓄力期 + 边缘/文档双扩张 | 无公开动态 |
| **组织信号** | 治理强化：CODEOWNERS 2→4 人、路线图文档化 | 商业公司主导，内部工单（Linear）与公开渠道并行 | 文档 7-PR 栈投入，贡献者基数最广 | — |

**核心战略差异**：a2ui 押注**开放标准与渲染器中立**（代价是一致性债务与评审负担）；OpenUI 押注**垂直整合的交付速度**（代价是 React 中心、生态绑定）；CopilotKit 押注**渠道 × 运行时的覆盖广度**（代价是兼容性成为其第一摩擦源——这在其用户反馈中已被明确印证）。

---

## 五、社区热度与成熟度

- **讨论热度最高：a2ui**——单日 67 条更新，#2160（Zod 解耦提案）11 评论/4 👍 是本期全生态最热讨论串，外部贡献者深度参与架构辩论；但 40 个待合并 PR 与 2 个积压 7-8 个月的 P2 渲染器 bug（#1023、#1298）显示"高输入、受限输出"。
- **迭代速度最快：OpenUI**——单日 8 包发布、20 个 PR 合并/关闭、批量清理 9 个 3-9 个月陈旧 PR，版本火车与仓库卫生双优；但公开 Issue 渠道流量极低（24h 仅 1 条），核心反馈疑似经 Linear 内部流转，社区公开反馈渠道有待培育。
- **贡献者多样性最好：CopilotKit**——单日 6+ 名外部贡献者（egg119、laoyyu、0xArx 等）跨安全/生态/UX/渠道四个维度产出；但 Issue 端零关闭，核心卖点 bug #8562 无修复在途，分诊节奏偏慢。
- **正面样板**：OpenUI 的 #1711 从社区报告到社区修复 PR（#1719）仅约 48 小时，是本期全生态响应闭环最快的案例。

**成熟度光谱**：OpenUI（快速迭代期）→ CopilotKit（蓄力扩张期）→ a2ui（标准形成期）→ json-render（本窗口静默）。

---

## 六、值得关注的趋势信号

1. **自托管 → 边缘部署正在落地**：CopilotKit 单日 4 个 Workers 相关动作（showcase #8351、测试闭环 #8563、两个社区修复 #8559/#8560），且出现自托管生产用户的重连诉求。**参考价值**：评估生成式 UI 方案时，将"模块加载期 Node API 依赖、`import.meta.url` 处理"列入边缘就绪检查清单；两套社区修复方案并存，说明该问题在真实部署中普遍。
2. **"协议即契约"从文档走向运行时强制**：a2ui #4400 与 OpenUI #1711 共同反映——用户不再接受"声明仅供参考"。**参考价值**：自研生成式 UI 层应将校验缺口视为 P2 级技术债，并设计 fail/degrade 双轨错误语义（降级成功时需告知被丢弃的内容）。
3. **服务端化架构收敛**：三个活跃项目同一窗口推进服务端会话/函数编排。**参考价值**：前端持有 token、客户端负责编排的架构将成为迁移负债；选型时应重点考察服务端会话 API 与断线恢复（事件去重/续传）语义的完备度。
4. **MCP 生态交汇点浮现**：a2ui 的 4 个 `@a2ui/embed` 原型明确瞄准 MCP Apps 场景。**参考价值**：生成式 UI 与 MCP 工具生态的集成是下一阶段值得押注的接口面，尤其面向"结构化交互"场景。
5. **依赖面即采用门槛**：a2ui 的 vendoring 用户被 `zod ^3.25` 硬依赖卡住（#2160），框架中立性质疑（#3204）虽被关闭但感知仍在。**参考价值**：库作者应最小化运行时硬依赖并提供框架中立核心；应用方选型时应评估关键子集的可 vendoring 性。
6. **安全响应速度成为社区信任变量**：a2ui 的 XSS 修复从报告到 PR 历时约 3 个月被社区视为偏慢，而 P1 权限绕过与 CopilotKit 凭据 CORS 均已闭环。**参考价值**：沙箱、HTML 消毒、凭据 CORS 应作为生成式 UI 的默认设计而非事后修补；CopilotKit #8493 属行为变更（强制显式 `origin`），依赖隐式来源反射的部署需在下个版本前自查。

---

**选型速览**：需要跨语言标准与渲染器中立 → 关注 a2ui（紧盯 v1.0 收敛节点与 #1298 一致性修复）；需要最快出产品 → OpenUI（Dashboards 能力链路已完整上 npm）；需要在既有应用嵌入并覆盖多渠道/边缘 → CopilotKit（关注 #8562 修复与 Workers 支持正式化）。json-render 本期无动态，暂不构成决策输入。

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目动态日报

**日期：** 2026-11-25 | **仓库：** [a2ui-project/a2ui](https://github.com/a2ui-project/a2ui) | **领域：** AI 智能体 UI 协议与渲染器生态

---

## 1. 今日速览

a2ui 过去 24 小时保持高活跃度：**17 条 Issue 更新**（9 新开/活跃、8 关闭，关闭率约 47%）与 **50 条 PR 更新**（40 待合并、10 合并/关闭），无新版本发布。今日三条主线清晰：**v0.9.1 协议一致性债务集中清偿**（capabilities 键名与 schema `$id` 两项修复随 [#3135](https://redirect.github.com/a2ui-project/a2ui/pull/3135)、[#3975](https://redirect.github.com/a2ui-project/a2ui/pull/3975) 关闭落地）；**安全修复提速**（8 月报告的 a2a-chat-canvas XSS 漏洞获得今日提交的修复 PR [#4409](https://redirect.github.com/a2ui-project/a2ui/pull/4409)）；**v1.0 实验特性与 MCP Apps 原型并行推进**（decision 内核系列与 4 个 @​a2ui/embed 原型）。需注意的是，40 个待合并 PR 显示评审队列压力较大，且今日新报的 web_core 返回值校验缺失（[#4400](https://redirect.github.com/a2ui-project/a2ui/issues/4400)）尚无修复方案。

---

## 2. 版本发布

本期无新版本发布。当前生态处于 v0.9.1 之后的修复整合期，v1.0 相关特性（decision 内核、Server-Side Functions 提案）仍在讨论与实验 PR 阶段，预计距下一个版本发布仍有距离。

---

## 3. 项目进展

### 今日合并/关闭的 PR（数据概览共 10 条，以下为本期可见数据中确认的 4 条）

| PR | 内容 | 影响 |
|---|---|---|
| [#3135](https://redirect.github.com/a2ui-project/a2ui/pull/3135) | fix(spec,python)：统一 v0.9.1 capabilities 键名为 `v0.9.1` | 关闭 [#3134](https://redirect.github.com/a2ui-project/a2ui/issues/3134)，修复 v0.9.1 渲染器与 Python agent 互操作性断裂 |
| [#3975](https://redirect.github.com/a2ui-project/a2ui/pull/3975) | fix(spec,python)：为 v0.9.1 schemas 配置独立 `$id` | 关闭 [#3974](https://redirect.github.com/a2ui-project/a2ui/issues/3974)，修复 a2ui.org 发布的 schema 引用解析回退到 v0.9 的问题 |
| [#4394](https://redirect.github.com/a2ui-project/a2ui/pull/4394) | docs：更新根 README 链接与五阶段路线图 | 关闭 [#4393](https://redirect.github.com/a2ui-project/a2ui/issues/4393)，完成 Astro 文档站上线后的遗留清理 |
| [#4388](https://redirect.github.com/a2ui-project/a2ui/pull/4388) | chore：新增 `@yjbanov`、`@nan-yu` 为 specification CODEOWNERS | 规范评审权从 2 人扩展至 4 人，降低 `/specification/` 变更评审瓶颈 |

### 同日关闭的 Issues（共 8 条）

- [#3774](https://redirect.github.com/a2ui-project/a2ui/issues/3774) — **P1 权限绕过 bug 关闭**（详见第 5 节）
- [#1263](https://redirect.github.com/a2ui-project/a2ui/issues/1263) — Zod v4 迁移讨论关闭；与 [#2160](https://redirect.github.com/a2ui-project/a2ui/issues/2160)（Zod 解耦提案，同日活跃更新）时间线吻合，讨论疑似已收敛至解耦方案
- [#602](https://redirect.github.com/a2ui-project/a2ui/issues/602) — Lit 渲染器 `hintedStyles` 假设导致 `additionalStyles` 被忽略（2 月报告，历经 9 个月关闭）
- [#3165](https://redirect.github.com/a2ui-project/a2ui/issues/3165) — inline catalog 不可解析本地 ref 的加载期拒绝与 id 冲突报告
- [#3204](https://redirect.github.com/a2ui-project/a2ui/issues/3204) — "Why React?" 框架选择质疑（详见第 7 节）

**进展评估：** 今日完成的是 v0.9.1 协议一致性债务的集中清偿——两处"文档与 schema 说法不一致"类问题修复后，渲染器与 agent SDK 的跨语言互操作性风险显著下降。配合 CODEOWNERS 扩容与 README 路线图更新，项目在"无 release 窗口"内保持了稳定的工程节奏。

---

## 4. 社区热点

**🔥 热度第一：Zod 依赖解耦提案 [#2160](https://redirect.github.com/a2ui-project/a2ui/issues/2160)**（评论 11、👍 4，今日活跃）

本期讨论最热烈的 Issue。`@a2ui/web_core` 硬依赖 `zod ^3.25`，提案计划引入 schema 抽象层解除耦合。背后诉求来自**下游 vendoring 用户群体**：他们 vendor 了最小子集的渲染器代码，被 Zod 大版本迁移节奏卡住（[#1263](https://redirect.github.com/a2ui-project/a2ui/issues/1263)、[#1222](https://redirect.github.com/a2ui-project/a2ui/issues/1222) 均为同一痛点）。该提案今天持续有讨论更新，是依赖架构演进的核心讨论帖。

**🔥 热度第二：v1.0 架构再设计提案 [#2104](https://redirect.github.com/a2ui-project/a2ui/issues/2104)**（评论 9，今日活跃）

jacobsimionato 提交的完整设计文档，主张用 **Catalog 定义的服务端函数（Server-Side Functions）+ 统一 Function RPC** 替换 draft v1.0 的 `wantResponse`/`actionResponse` 事件模型。这是对 v1.0 核心交互契约的重构级讨论，与今日进行中的 [#4323](https://redirect.github.com/a2ui-project/a2ui/pull/4323)（agent 函数 RPC）存在路线关联，值得持续跟踪。

**其他活跃讨论：** Lit 渲染器 `requestUpdate` 缺失 bug [#1023](https://redirect.github.com/a2ui-project/a2ui/issues/1023)（评论 4）、Zod v4 升级时机 [#1222](https://redirect.github.com/a2ui-project/a2ui/issues/1222)（评论 4）。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 状态 | 修复 PR | 摘要 |
|---|---|---|---|---|
| **P1** | [#3774](https://redirect.github.com/a2ui-project/a2ui/issues/3774) | ✅ 已关闭 | 修复已在未展示的合并 PR 中落地 | Agent 可通过在 `callRendererFunction` 参数中嵌套 `rendererOnly` 函数绕过 `allowedCallers` 检查——**权限模型绕过**，涉及 core SDK 四语言（Swift/TS/Dart/Python） |
| **P2** | [#2294](https://redirect.github.com/a2ui-project/a2ui/issues/2294) | 🔴 OPEN | ⚠️ **有**：[#4409](https://redirect.github.com/a2ui-project/a2ui/pull/4409)（今日提交，待评审） | a2a-chat-canvas 样本默认文本渲染器调用 `bypassSecurityTrustHtml` 绕过 Angular 消毒，构成 **CWE-79 XSS**；#4409 对 Markdown 输出增加消毒处理 |
| **P2** | [#4400](https://redirect.github.com/a2ui-project/a2ui/issues/4400) | 🆕 新报告 | ❌ **无** | web_core 不校验函数结果与 catalog 声明的 `returnType`：声明 `number` 可返回 `"hello"` 且渲染端成功接收。契约执行缺口，建议尽快 triage |
| **P2** | [#1298](https://redirect.github.com/a2ui-project/a2ui/issues/1298) | 🔴 OPEN（7 个月积压） | ❌ 无 | 三个 web 渲染器对基础 catalog `Image` 的实现互不一致，且与 spec 默认 `fit` 值冲突 |
| **P2** | [#1023](https://redirect.github.com/a2ui-project/a2ui/issues/1023) | 🔴 OPEN（8 个月积压） | ❌ 无 | Lit v0.8 交互组件 `setData()` 后缺失 `requestUpdate()`，组件不重渲染 |

**今日修复关闭：** [#3134](https://redirect.github.com/a2ui-project/a2ui/issues/3134)（capabilities 键名不一致）、[#3974](https://redirect.github.com/a2ui-project/a2ui/issues/3974)（v0.9.1 schema `$id` 错误）、[#602](https://redirect.github.com/a2ui-project/a2ui/issues/602)、[#3165](https://redirect.github.com/a2ui-project/a2ui/issues/3165)。

**稳定性判断：** 安全响应态势总体积极——P1 权限 bug 已闭环，XSS 有修复 PR 在途；但 #2294 从 8 月报告到今日才出现修复 PR（约 3 个月），且 #4400 揭示的"契约声明不强制执行"是系统性健壮性问题的信号。

---

## 6. 功能请求与路线图信号

**① Decision 内核工作线（v1.0 方向，最值得关注的路线图信号）**

维护者 gspencergoog 于 11-20 密集开出 4 个系统性 PR，今日全部保持活跃：

- [#4320](https://redirect.github.com/a2ui-project/a2ui/pull/4320) — 共享 decision kernel + `@macro` 父子放置约束 + CI barrel guard
- [#4321](https://redirect.github.com/a2ui-project/a2ui/pull/4321) — `DecisionCascadeRouter`：单批 UI 门控、模板选择与目录剪枝
- [#4323](https://redirect.github.com/a2ui-project/a2ui/pull/4323) — submit-time 命名谓词决策函数 RPC（含速率限制与错误模型）
- [#4342](https://redirect.github.com/a2ui-project/a2ui/pull/4342) — 门控模板求值器与剪枝器

四者共享同一 decision kernel，均标记 experimental，明确指向 **A2UI v1.0 的"推理格式决策/门控"能力**——这是判断 v1.0 形态的最强信号。

**② @​a2ui/embed + MCP Apps 嵌入式交互**

josemontespg 今日一次性提交 4 个原型 PR（均标注 *Prototype, do not merge*）：[#4404](https://redirect.github.com/a2ui-project/a2ui/pull/4404)（租约/报价谈判）、[#4405](https://redirect.github.com/a2ui-project/a2ui/pull/4405)（行程规划）、[#4406](https://redirect.github.com/a2ui-project/a2ui/pull/4406)（多目标权衡）、[#4407](https://redirect.github.com/a2ui-project/a2ui/pull/4407)（空间/座位规划），配套文档 PR [#4403](https://redirect.github.com/a2ui-project/a2ui/pull/4403)（MCP Apps 指南收录 @​a2ui/embed）。原型场景高度聚焦"纯文本对话难以表达的结构化交互"，方向一致性极强。

**③ Dart 生态补齐**：[#4217](https://redirect.github.com/a2ui-project/a2ui/pull/4217)（Dart skill generator，contributes #4376）、[#4387](https://redirect.github.com/a2ui-project/a2ui/pull/4387)（reactive bindings 追踪 `Future` 结果）、新请求 [#4401](https://redirect.github.com/a2ui-project/a2ui/issues/4401)（嵌套解析错误返回字段路径）。

**④ 运维自动化**：[#3981](https://redirect.github.com/a2ui-project/a2ui/pull/3981)（自动化分诊流程，已开 3 周仍在评审）。

---

## 7. 用户反馈摘要

- **依赖锁定焦虑（最强痛点）**：vendoring 最小渲染器子集的下游用户明确表达被 `zod ^3.25` 硬依赖卡住——升 v4 怕 breaking、不升怕落后（[#1263](https://redirect.github.com/a2ui-project/a2ui/issues/1263)、[#1222](https://redirect.github.com/a2ui-project/a2ui/issues/1222)）。[#2160](https://redirect.github.com/a2ui-project/a2ui/issues/2160) 的解耦方案获 11 评论/4 👍，说明这是真实且广泛的需求。
- **框架中立性质疑**：用户 trusktr 在 [#3204](https://redirect.github.com/a2ui-project/a2ui/issues/3204) 批评示例偏向 React，主张标准对齐、无构建链的 Custom Element 方案，认为 React 绑定抬高 web-based AI 厂商的集成门槛。该 issue 今日关闭，但"渲染器中立性"的社区感知仍需通过文档与生态页持续强化。
- **"一次编写、处处渲染"承诺承压**：[#1298](https://redirect.github.com/a2ui-project/a2ui/issues/1298) 指出同一 A2UI 输入在 React/Lit/Angular 三个渲染器上渲染结果可见不一致，直接影响跨渲染器可互换性的核心价值主张。
- **契约健壮性预期**：[#4400](https://redirect.github.com/a2ui-project/a2ui/issues/4400) 用户期望 `returnType` 声明被运行时强制执行而非仅作文档——反映下游对"协议即契约"的信任预期。
- **Dart 开发者体验**：[#4401](https://redirect.github.com/a2ui-project/a2ui/issues/4401) 期望错误信息携带字段路径，降低调试成本。

---

## 8. 待处理积压

| 项 | 开启时间 | 状态 | 提醒 |
|---|---|---|---|
| [#1023](https://redirect.github.com/a2ui-project/a2ui/issues/1023)（P2 Lit bug） | 2026-03-29 | needs review | **积压 8 个月**，社区贡献者已给出根因诊断与受影响组件清单，修复成本可能不高 |
| [#1298](https://redirect.github.com/a2ui-project/a2ui/issues/1298)（P2 Image 不一致） | 2026-04-28 | needs-triage | 积压 7 个月，涉及 3 个渲染器 + spec 修订，建议纳入规范治理流程 |
| [#1222](https://redirect.github.com/a2ui-project/a2ui/issues/1222)（P3 Zod v4 时机） | 2026-04-17 | needs review | 依赖 [#2160](https://redirect.github.com/a2ui-project/a2ui/issues/2160) 决策，建议合并处置并给出官方时间表 |
| [#2160](https://redirect.github.com/a2ui-project/a2ui/issues/2160)（P2 Zod 解耦提案） | 2026-08-03 | **needs-triage** | 高热度提案（11 评论/4 👍）仍未完成 triage，建议尽快定调 |
| [#2104](https://redirect.github.com/a2ui-project/a2ui/issues/2104)（v1.0 架构提案） | 2026-07-27 | 讨论中 | 9 条评论、4 个月讨论，与 decision 系列 PR 路线耦合，建议给出收敛节点 |
| [PR #3313](https://redirect.github.com/a2ui-project/a2ui/pull/3313)（a2ui-bindjs 收录） | 2026-10-19 | **waiting-for-author-response** | 社区渲染器收录停滞 1 个月+，生态页收录拖延可能抑制第三方贡献者积极性 |
| [PR #3981](https://redirect.github.com/a2ui-project/a2ui/pull/3981)（分诊自动化） | 2026-11-04 | 评审中 | 在 40 个待合并 PR 的当前评审压力下，该自动化 PR 的优先级应上调 |
| [PR #4286](https://redirect.github.com/a2ui-project/a2ui/pull/4286)（shadow DOM 样式修复） | 2026-11-18 | 待评审 | 已等待 7 天，来自社区贡献者，涉及 Streamlit/Web Components 集成场景 |

---

**健康度小结：** 活跃度健康（67 条/24h，外部贡献者参与度高），issue 关闭及时（47%）；主要风险为 **40 个待合并 PR 的评审吞吐瓶颈** 与 **2 个 7-8 个月未修的 P2 渲染器 bug**。安全响应（P1 权限绕过、XSS）方向正确，建议对 [#4400](https://redirect.github.com/a2ui-project/a2ui/issues/4400) 尽快 triage 并为 [#4409](https://redirect.github.com/a2ui-project/a2ui/pull/4409) 安排加急评审。

*数据说明：本报告基于过去 24 小时可见的 17 条 Issue 与 20 条展示 PR 数据（PR 总更新 50 条，其余 30 条未在本期数据中展示）；PR 评论数数据缺失，热度排序以 Issue 评论数为准。*

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目动态日报

**项目**：[thesysdev/openui](https://github.com/thesysdev/openui) | **日期**：2026-11-25 | **健康度评估**：🟢 良好

---

## 一、今日速览

过去 24 小时 OpenUI 呈现**高活跃度、强节奏**的状态：PR 更新 29 条（9 条待合并、20 条已合并/关闭），Issue 更新 1 条，单日发布 8 个 npm 包版本。今日的主旋律是 **Dashboards 功能的集中发布**——从服务端 API（`/v1/dashboard/chat/completions`）、数据溯源展示，到打开态自动刷新与示例更新，一条完整的功能链路在本周期落地。版本火车（Changesets 自动化）运转顺畅，核心团队 5 名成员（AbhinRustagi、Aditya-thesys、ankit-thesys、abhithesys、rahuldoval）均有产出，且出现了高质量社区贡献：外部贡献者在 Bug 报告后 48 小时内提交了修复 PR。维护者今日还集中关闭了约 10 个历史积压 PR，仓库卫生状况明显改善。

---

## 二、版本发布

今日一次性发布 8 个包版本，由发版 PR [#1708](https://redirect.github.com/thesysdev/openui/pull/1708)（Changesets 自动生成）合并触发：

| 包名 | 版本 | 类型 | 核心变更 | 来源 PR |
|---|---|---|---|---|
| `@openuidev/server` | 0.5.2 | Patch | Dashboards 改为构建于 `/v1/dashboard/chat/completions` 之上 | [#1678](https://redirect.github.com/thesysdev/openui/pull/1678) |
| `@openuidev/react-ui` | 0.19.0 | Minor | Live Artifact 数字来源展示（`LiveArtifactRenderer`） | [#1544](https://redirect.github.com/thesysdev/openui/pull/1544) |
| `@openuidev/react-lang` | 1.2.0 | Minor | 同上（数据溯源） | [#1544](https://redirect.github.com/thesysdev/openui/pull/1544) |
| `@openuidev/lang-core` | 1.2.0 | Minor | 同上（数据溯源） | [#1544](https://redirect.github.com/thesysdev/openui/pull/1544) |
| `@openuidev/dashboard-library` | 1.1.0 | Minor | 同上（数据溯源） | [#1544](https://redirect.github.com/thesysdev/openui/pull/1544) |
| `@openuidev/assistant-ui` | 0.2.1 | Patch | 同上（数据溯源） | [#1544](https://redirect.github.com/thesysdev/openui/pull/1544) |
| `@openuidev/react-headless` | 0.19.0 | Patch | Artifact 打开期间每 30 秒自动刷新保持最新 | [#1679](https://redirect.github.com/thesysdev/openui/pull/1679) |
| `@openuidev/browser-bundle` | 0.2.3 | Patch | 依赖同步更新 | — |

**破坏性变更**：无。全部为 minor/patch 级别，API 为增量式扩展。

**迁移注意事项**：
- 无需立即迁移，升级安全；
- [#1544](https://redirect.github.com/thesysdev/openui/pull/1544) 为跨 5 个包的联动发布，建议整组同步升级以获得完整的数据溯源能力；
- 待合并的文档 PR [#1712](https://redirect.github.com/thesysdev/openui/pull/1712) 与示例 PR [#1716](https://redirect.github.com/thesysdev/openui/pull/1716) 明确以"发布已上 npm"为合并前提，该条件现已满足。

---

## 三、项目进展

**1. 发版与 Dashboards 功能闭环**
- [#1708](https://redirect.github.com/thesysdev/openui/pull/1708)（version packages）合并并完成发布，Dashboards 能力链路（API → 渲染 → 刷新 → 溯源）全部上线；
- [#1718](https://redirect.github.com/thesysdev/openui/pull/1718)：修复图表隐藏数据表（`SrTable`）导致宿主页面与渲染器内容框**双重滚动**的问题——屏读表格置于 `<table>` 本身的 visually-hidden 类无法约束高度，已修复关闭；
- [#1692](https://redirect.github.com/thesysdev/openui/pull/1692)：Dashboards API 文档页新增"Share and edit"与"See the sources"两个动画演示卡片，强化协作编辑与数据来源两个卖点。

**2. 存量修复收尾**
- [#1601](https://redirect.github.com/thesysdev/openui/pull/1601)（`useArtifactList` 刷新时列表抖动）、[#1595](https://redirect.github.com/thesysdev/openui/pull/1595)（示例中 dashboard 卡片与面板状态不同步）于今日关闭，11 月上旬的 QA 批次基本清零。

**3. 历史积压集中清理** ⭐
今日批量关闭了 9 个跨越 3-9 个月的陈旧 PR，明显是一次主动的仓库卫生行动：
- [#322](https://redirect.github.com/thesysdev/openui/pull/322)（structured outputs，挂起 8 个月）、[#850](https://redirect.github.com/thesysdev/openui/pull/850)（release management）、[#856](https://redirect.github.com/thesysdev/openui/pull/856)（文档链接）、[#790](https://redirect.github.com/thesysdev/openui/pull/790)（ThreadStorage updateMessage）、[#812](https://redirect.github.com/thesysdev/openui/pull/812)（后台线程）、[#1048](https://redirect.github.com/thesysdev/openui/pull/1048)（事件注册表）、[#1049](https://redirect.github.com/thesysdev/openui/pull/1049)（Devtools Inspect Groups）、[#1052](https://redirect.github.com/thesysdev/openui/pull/1052)（切换会话时流稳定）、[#1260](https://redirect.github.com/thesysdev/openui/pull/1260)（Cloud 模板迁移）。

这批 PR 多与线程管理、事件系统、模板等方向相关，疑似已被后续实现取代或以未合并方式清理。**整体判断：项目 review 队列负担显著下降，迭代焦点进一步收敛到 Dashboards 主线。**

---

## 四、社区热点

> 注：本期数据中 PR 评论数缺失，以下基于更新时间、互动信号与内容关联度判断。

1. **Issue [#1711](https://redirect.github.com/thesysdev/openui/issues/1711)（lang-core excess-args 错误分级）**——本期唯一活跃 Issue（👍 1）。用户 MacJedi42 指出组件调用传参超出签名时，`excess-args` 被报告为无 severity 的纯错误，但元素实际完整渲染、多余参数被静默丢弃。该 Issue 引来了外部贡献者 AyhamJo7 当日提交的修复 PR [#1719](https://redirect.github.com/thesysdev/openui/pull/1719)，**从报告到社区修复提交仅约 48 小时**，是本项目社区响应速度的正面信号。背后的诉求：lang-core 的验证错误语义需要区分"渲染失败"与"降级成功"，且错误信息应说明丢弃了什么。
2. **PR [#1707](https://redirect.github.com/thesysdev/openui/pull/1707)（`openui.conversations` 服务端 API）**——持续活跃至今日的核心特性 PR，解决"前端每轮都要铸造 token 才能读取访客会话"的架构痛点，是当前最值得关注的待合并变更。

---

## 五、Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 中（DX 误导） | [#1711](https://redirect.github.com/thesysdev/openui/issues/1711)：`excess-args` 无 severity 直接报错，宿主应用在元素渲染成功的情况下向用户展示失败；错误信息未说明被丢弃的参数 | 🔧 已有社区修复 PR [#1719](https://redirect.github.com/thesysdev/openui/pull/1719)（改为 warning），**待维护者审核** |
| 中（UI） | [#1718](https://redirect.github.com/thesysdev/openui/pull/1718)：长图表 dashboard 双重滚动（屏读表格 `SrTable` 引发） | ✅ 已修复关闭（未列入本次 release notes，预计随下个补丁版本发布） |
| 低（UX 抖动） | [#1601](https://redirect.github.com/thesysdev/openui/pull/1601)：`refresh()` 期间 `useArtifactList` 列表项先坠底再跳回顶部 | ✅ 已关闭 |
| 低（示例不一致） | [#1595](https://redirect.github.com/thesysdev/openui/pull/1595)：assistant-ui-dashboards 示例中卡片与面板状态不同步（"Generating" / "Live" / "Couldn't load" 错位） | ✅ 已关闭 |

**稳定性总评**：今日无崩溃或回归级问题报告；Bug 集中在错误语义与渲染细节层面，均已有处置路径。

---

## 六、功能请求与路线图信号

结合开放 PR 判断，下一版本可能纳入的方向：

1. **服务端会话管理 API（最接近合并）**——[#1707](https://redirect.github.com/thesysdev/openui/pull/1707)：新增 `openui.conversations` 及 `openui.chat`、`openui.langgraph`，支持读取会话并校验归属用户，解决多轮 demo 中反复铸造前端 token 的痛点。
2. **Artifact 渲染器统一状态行**——[#1713](https://redirect.github.com/thesysdev/openui/pull/1713)（基于已合入 main 的 #1709）：构建期间卡片、进度条、骨架屏各自表述不一的问题将被统一，失败状态将直接呈现在卡片上。UX 打磨方向明确。
3. **Dashboards 可调参数浮出水面**——文档 PR [#1712](https://redirect.github.com/thesysdev/openui/pull/1712) 透露了 `maxToolRounds` 与 `reasoningEffort` 两个新参数，以及工具轮次（生成通常 20-40 秒）的流式构建说明；示例 PR [#1716](https://redirect.github.com/thesysdev/openui/pull/1716) 将示例的 `maxDuration` 提至 300 秒。两者合并前置条件（npm 发布）今日已满足。
4. **路线图信号**：[#322](https://redirect.github.com/thesysdev/openui/pull/322)（structured outputs）今日被关闭，这一悬置 8 个月的方向有了明确处置，暗示结构化输出能力可能已由 lang-core 的其他演进展盖或被正式移出优先级。

---

## 七、用户反馈摘要

本期 Issue 反馈量少但质量高，可提炼出以下真实痛点：

- **错误语义影响宿主应用体验**（[#1711](https://redirect.github.com/thesysdev/openui/issues/1711)）：MacJedi42 的场景是宿主程序直接向用户展示 lang-core 报错——当 `Table([...], null)` 实际完整渲染时却报"错误"，造成误导。用户明确引用了 `ValidationError` 的 severity 文档注释，说明用户群体偏资深、对 API 契约敏感。诉求有二：错误应降级为 warning；错误信息应说明被丢弃的参数是什么。
- **隐性行为不可见**：参数被静默丢弃而不告知，是同一 Issue 反映的第二层痛点——可观测性不足。
- **正向信号**：社区贡献者 AyhamJo7 能在两天内读懂 issue 并按"预期行为"提交 PR，说明代码库对外部贡献者的可进入性较好。

---

## 八、待处理积压

整体积压控制良好，无长期失联的 Issue。以下事项建议维护者优先关注：

| 事项 | 挂起时长 | 建议 |
|---|---|---|
| PR [#1719](https://redirect.github.com/thesysdev/openui/pull/1719)（修复 #1711） | 0 天（今日提交） | 社区贡献修复，建议尽快审核，避免热度流失；注意与 issue 中"expected behavior"的契合度 |
| PR [#1707](https://redirect.github.com/thesysdev/openui/pull/1707)（conversations API） | 2 天 | 核心架构变更，建议安排核心 review |
| PR [#1712](https://redirect.github.com/thesysdev/openui/pull/1712) / [#1716](https://redirect.github.com/thesysdev/openui/pull/1716) | 1 天 | **合并前置条件（npm 发布）今日已满足，可推进合并** |
| PR [#1629](https://redirect.github.com/thesysdev/openui/pull/1629)（bot：模板/示例依赖刷新） | 13 天 | 依赖本轮发布，建议随发版后一并处理 |
| PR [#1713](https://redirect.github.com/thesysdev/openui/pull/1713)（统一状态行） | 1 天 | 依赖 #1709（已合入 main），可进入正常 review 流程 |

**风险提示**：Issue 流量极低（24h 仅 1 条）一方面说明问题响应闭环快，另一方面也可能反映公开 Issue 渠道使用率不足——核心反馈或更多经由 Linear（PR 描述中可见 TH-2025 等内部工单）流转，建议关注社区公开反馈渠道的培育。

---

*数据来源：GitHub API（Issues / PRs / Releases），统计窗口为过去 24 小时。*

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报
**日期：2026-11-25** | 数据窗口：过去 24 小时 | 仓库：[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 1. 今日速览

过去 24 小时 CopilotKit 呈现「修复与扩展并行」的健康节奏：**15 个 PR 更新（10 个待合并、5 个关闭）、2 个新开 Issue、0 个新版本发布**。当日三条主线清晰：① **Cloudflare Workers 边缘兼容**成为最热方向——同日出现两个独立社区修复 PR，且 Cloudflare Agents showcase 及其测试 fixture 已落地；② **安全加固**——凭据 CORS 来源反射漏洞修复关闭；③ **文档体系 7-PR 大栈**持续推进。外部贡献者参与度高（egg119、laoyyu、0xArx、Kelpy2004、shteynu、devbymak 等均有活动），单日关闭 5 个 PR 显示维护吞吐良好；但 Issue 端零关闭、两条新 Issue 尚待官方分诊，响应略有滞后。

---

## 2. 版本发布

今日无新版本发布。需注意：已关闭的 CORS 修复 [#8493](https://redirect.github.com/CopilotKit/CopilotKit/pull/8493) 属**行为变更**（`credentials: true` 时强制要求显式 `origin`），下一版本发布时预计出现在 release notes 中，依赖隐式来源反射的部署需提前自查配置。

---

## 3. 项目进展

今日关闭 5 个 PR（注：数据未区分「合并」与「关闭不合并」，以关闭状态呈现）：

| PR | 主题 | 作者 | 存续时长 | 意义 |
|---|---|---|---|---|
| [#8493](https://redirect.github.com/CopilotKit/CopilotKit/pull/8493) | 凭据 CORS 必须显式指定 origin | egg119 | 6 天 | **安全**：修复 [#8025](https://redirect.github.com/CopilotKit/CopilotKit/issues/8025) 发现的来源反射漏洞——原逻辑在 `credentials: true` 且未配 origin 时自动反射请求自身 Origin，导致任意来源均被放行 |
| [#8351](https://redirect.github.com/CopilotKit/CopilotKit/pull/8351) | 新增 Cloudflare Agents 集成 showcase | mme | 13 天 | **生态**：基于 `@ag-ui/cloudflare-agents` 0.1.0，将运行时版图扩展至 Cloudflare Worker 边缘环境 |
| [#8563](https://redirect.github.com/CopilotKit/CopilotKit/pull/8563) | 补齐 cloudflare-agents 的 D4 chat fixture | mme | 当日开当日关 | **测试**：为 #8351 修复 D4 探针失败，边缘集成形成「示例 + 测试」闭环 |
| [#8473](https://redirect.github.com/CopilotKit/CopilotKit/pull/8473) | 拖拽区仅对携带文件的拖拽开启 | egg119 | 7 天 | **UX**：`useAttachments` 此前拦截一切 dragover（含文本选区拖拽），React/Vue 双端修复 |
| [#8340](https://redirect.github.com/CopilotKit/CopilotKit/pull/8340) | Teams Adaptive Cards 支持 `<Image size>` | egg119 | 14 天 | **渠道功能**：修复 [#8306](https://redirect.github.com/CopilotKit/CopilotKit/issues/8306)，渲染器支持 small/medium/large 尺寸映射 |

**进展评估**：单日关闭量覆盖安全、生态、UX、渠道四个维度，Cloudflare Agents 集成从 showcase 到测试闭环一次完成。叠加 10 个活跃 PR（文档栈、Workers 兼容、Next.js 16 适配），项目处于无发布期的变更累积阶段，整体向前推进稳健。

---

## 4. 社区热点

今日评论热度整体温和（两条 Issue 各 1 条评论，PR 评论数未提供），但**主题聚集度**指向明确：

- **Cloudflare Workers 兼容（[#8539](https://redirect.github.com/CopilotKit/CopilotKit/issues/8539)）—— 当日最强信号**：两位外部贡献者同日提交高度重叠的修复：
  - [#8559](https://redirect.github.com/CopilotKit/CopilotKit/pull/8559)（0xArx）：修复模块加载期调用 `createRequire(import.meta.url)` 等 two 个阻断加载的问题；
  - [#8560](https://redirect.github.com/CopilotKit/CopilotKit/pull/8560)（laoyyu）：包元数据改为 Channel 启动时懒加载，Worker 运行时无 `import.meta.url` 时安全降级。
  - **诉求解读**：自托管走向边缘部署的用户在快速增长，「一题两解」需要维护者尽快协调取舍，避免社区精力浪费。
- [#8562](https://redirect.github.com/CopilotKit/CopilotKit/issues/8562)（1 评论）：Generative UI 画布清空 Bug，直接命中产品核心卖点。
- [#8561](https://redirect.github.com/CopilotKit/CopilotKit/issues/8561)（1 评论）：断线重连语义的功能请求，来自自托管用户。
- 文档 7-PR 大栈（[#8432](https://redirect.github.com/CopilotKit/CopilotKit/pull/8432) + 预览 PR [#8483](https://redirect.github.com/CopilotKit/CopilotKit/pull/8483)）：tylerslaton 的搜索→SEO→Ask AI 加固→agent markdown→内容×3 全链路重构。

---

## 5. Bug 与稳定性

按严重程度排列（标注 fix PR 状态）：

| 级别 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | **[#8562](https://redirect.github.com/CopilotKit/CopilotKit/issues/8562)** Open Generative UI 画布被清空为空白：模型按 `html`→`css`→`initialHeight` 顺序输出参数时，`generateSandboxedUi` 画布被抹成白盒。根因指向 `open-generative-ui-middleware.ts` 的初始化 `ACTIVITY_SNAPSHOT` 时序问题（摘要截断，详见原文） | **无 fix PR**，需优先分诊 |
| 🟠 中高 | **[#8192](https://redirect.github.com/CopilotKit/CopilotKit/issues/8192)** Next.js 16 `cacheComponents` 下 `<CopilotChat>` 完全失效（agent discovery 不触发、发送按钮禁用） | 部分修复：[#8557](https://redirect.github.com/CopilotKit/CopilotKit/pull/8557)（今日新开，待审） |
| 🟠 中 | **[#8539](https://redirect.github.com/CopilotKit/CopilotKit/issues/8539)** channels-core / runtime 在 Cloudflare Workers 无法加载 | 两个 fix PR 待协调：[#8559](https://redirect.github.com/CopilotKit/CopilotKit/pull/8559)、[#8560](https://redirect.github.com/CopilotKit/CopilotKit/pull/8560) |
| 🟡 中低 | **[#7654](https://redirect.github.com/CopilotKit/CopilotKit/issues/7654)** Angular 构建因 CJS-only 依赖（`partial-json`/`semver`）触发优化 bailout 警告 | fix PR [#7982](https://redirect.github.com/CopilotKit/CopilotKit/pull/7982) 挂起约 1 个月 |
| 🟢 已修复 | CORS 凭据来源反射（#8025）→ [#8493](https://redirect.github.com/CopilotKit/CopilotKit/pull/8493)；showcase D4 探针失败 → [#8563](https://redirect.github.com/CopilotKit/CopilotKit/pull/8563) | 今日关闭 |

**稳定性判断**：无崩溃/回归级事故；主要风险集中在「多运行时环境兼容」与「流式参数顺序容错」两类，且多数已有修复在途，唯独 #8562 尚无对应 PR。

---

## 6. 功能请求与路线图信号

- **断线重连**：[#8561](https://redirect.github.com/CopilotKit/CopilotKit/issues/8561) 请求将 `lastSeenEventId` 从 `/connect` 透传至 `AgentRunner.connect`。`parseConnectRequest` 已解析该值但未传递，改动范围小、实现路径清晰（`agent-utils.ts` + AgentRunner 接口），属「低成本高价值」，**纳入下版本概率中高**，暂无关联 PR。
- **边缘运行时**：#8351（showcase 落地）+ #8563（测试闭环）+ #8559/#8560（兼容修复）——单日 4 个 PR 聚集，强烈暗示 **Cloudflare/边缘部署将进入正式支持范围**，是下一阶段最明确的路线图信号。
- **渠道渲染精细化**：#8340 的 Adaptive Card 尺寸映射已关闭，channels 生态正从「能渲染」向「可控渲染」演进。
- **上手体验重投入**：7-PR 文档栈 + [#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309)（Python quickstart 补全，含 fail-closed 鉴权示例）+ [#8564](https://redirect.github.com/CopilotKit/CopilotKit/pull/8564)（AG2 文档对齐）预示下次发布可能伴随文档站大改版。
- **安全基线上移**：#8493 的行为变更意味着后续配置校验将更严格。

---

## 7. 用户反馈摘要

- **流式容错不足**（#8562）：模型输出参数顺序不可控，`initialHeight` 后到即触发画布清空——真实生产中 Generative UI 可用性受损，是今日最尖锐的痛点。
- **自托管可靠性**（#8561）：存在生产环境自托管用户，关切断线后的事件恢复/去重，说明 runtime 已被用于严肃场景。
- **前沿框架适配滞后**（#8557 / #8192）：Next.js 16 用户升级 `cacheComponents` 后聊天组件直接不可用，新框架版本适配速度是摩擦点。
- **跨框架细节问题**（#7982 / #7654）：Angular 用户的构建警告长期未合并，耐心在消耗。
- **正面信号**：文档 quickstart 修正、AG2 示例对齐、langgraph-fastapi-auth starter（[#7971](https://redirect.github.com/CopilotKit/CopilotKit/pull/7971)）等贡献持续涌入，反映**新用户仍在快速流入**，Python/LangGraph 用户群真实存在。
- **整体画像**：用户部署环境高度碎片化（Workers / Next.js 16 / Angular / 自托管 / FastAPI），**兼容性是当前第一摩擦源**，而非功能缺失。

---

## 8. 待处理积压

| 条目 | 主题 | 开启日期 | 已等待 | 近况 |
|---|---|---|---|---|
| [#7982](https://redirect.github.com/CopilotKit/CopilotKit/pull/7982) | Angular CJS 依赖打包 | 2026-10-25 | **31 天** | 11-24 有更新，已有共识（#7654），建议尽快评审 |
| [#7971](https://redirect.github.com/CopilotKit/CopilotKit/pull/7971) | langgraph-fastapi-auth starter | 2026-10-24 | **32 天** | 11-24 有更新，集成示例积压超月 |
| [#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309) | Python quickstart 补全 | 2026-11-10 | 15 天 | 今日有更新，为文档栈底座，随栈序推进 |
| [#8432](https://redirect.github.com/CopilotKit/CopilotKit/pull/8432) | 文档搜索排序 | 2026-11-17 | 8 天 | 文档栈底层 PR，按栈序合并 |
| [#8478](https://redirect.github.com/CopilotKit/CopilotKit/pull/8478) | renovate：GitHub Actions 更新 | 2026-11-18 | 7 天 | 例行依赖更新 |
| [#8483](https://redirect.github.com/CopilotKit/CopilotKit/pull/8483) | 文档栈全量预览 | 2026-11-19 | 6 天 | 作者已标注 **do not merge**，仅供 Railway 预览 |

**Issue 分诊提醒**：[#8562](https://redirect.github.com/CopilotKit/CopilotKit/issues/8562) 影响 Generative UI 核心体验且无修复在途，建议维护者今日优先确认并立项。

---

**健康度小结**：✅ PR 吞吐良好（日关 5、外部贡献多元）、安全响应闭环、边缘方向布局清晰；⚠️ 两个 30+ 天的社区 PR 待评审、重叠的 Workers 修复需要决策、Issue 分诊节奏偏慢。综合评估：**活跃且健康，处于下一版本发布前的蓄力期**。

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*