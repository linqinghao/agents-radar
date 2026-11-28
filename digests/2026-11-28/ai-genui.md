# 生成式 UI 生态日报 2026-11-28

> Issues: 6 | PRs: 56 | 覆盖项目: 4 个 | 生成时间: 2026-11-28 06:56 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告

**数据窗口**：2026-11-28（过去 24 小时） · 覆盖项目：a2ui、OpenUI、json-render、CopilotKit

---

## 1. 生态全景

生成式 UI 赛道整体正从"渲染层"向"平台层"跃迁：OpenUI 与 CopilotKit 同日都在将能力从 Web 沙箱扩展至原生消息渠道与服务端 SDK，a2ui 则集中精力于规格治理与跨 SDK 互操作。三条主线并行推进——**渠道分发**（Discord/WhatsApp 等）、**Python 多语言服务端覆盖**、**协议与格式标准化**。工程重心普遍从功能新增转向正确性与可信度建设（校验收紧、安全加固、大规模文档审计），但评审吞吐成为全生态共性瓶颈：三个活跃项目合计 **46 个待合并 PR**。Vercel Labs 的 json-render 当日零动态，处于静默期。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 待合并 PR | 合并/关闭 | 新版本 | 活跃贡献者 | 动态总量 |
|---|---|---|---|---|---|---|---|
| **CopilotKit** | 2（活跃 1 / 关闭 1） | 25 | 21 | 4 | 0 | 未披露（含 4+ 外部贡献者） | **27** |
| **OpenUI** | 2 | 19 | 14 | 5 | **1**（`channels@0.3.0`） | 未披露（核心维护者 + 多名外部） | 21 |
| **a2ui** | 2（活跃 2 / 关闭 0） | 12 | 11 | 1 | 0 | 7（外部 5 人，过半） | 14 |
| **json-render** | 0 | 0 | — | — | 0 | 0 | 0 |

**要点**：
- **CopilotKit 动态总量最高**，但 25 条 PR 中大部分属于同一个 7-PR 文档重构栈，属于单一工程动作的密集推进，而非多点开花。
- **OpenUI 是当日唯一有版本发布的项目**（`@openuidev/channels@0.3.0`），发布流水线（changesets）运转正常，体现"小步发布、大跨研发"形态。
- **a2ui 量级最小但结构最均衡**：规格、实现、社区修复三条线并行，且贡献者外部占比过半。
- 单日零活动不足以判定 json-render 衰退，但在其他三个项目均产生 14+ 动态的背景下，其静默本身是一个信号。

---

## 3. 共同关注的功能方向

| 方向 | a2ui | OpenUI | CopilotKit |
|---|---|---|---|
| **消息渠道分发** | — | Discord Components V2（@​0.3.0），Slack/Teams/Discord 三渠道齐备，支持原地更新 | iMessage/WhatsApp/SMS/RCS early access（#8591 渠道页重写） |
| **Python / 多语言服务端** | #4432 Python catalog 实现、`a2ui-agent-sdk` extras | #1742 `openui-server` 上 PyPI（sync/async 双客户端） | #8309 Python 快速上手修复、#8593 Python LangGraph Showcase 升级 |
| **格式/协议标准化与解耦** | Catalog Document 四连 PR（spec + TS + Python + proto PoC） | OpenUI Lang 作为统一渲染内核，多渠道共享 | AG-UI 协议版本同步、依赖 `run.resumePayload` 新能力 |
| **Agent 工具与 MCP** | 决策内核 #4320（experimental） | #1736 dashboard 原生 agent 工具 + MCP 协议暴露 | sub-agents 委派叙事持续强化（#8592） |
| **流式输出鲁棒性** | #3043 流式校验语义歧义、#4435 校验宽松缺陷 | — | #8562 流式参数乱序白屏、#8481 消息管道 metadata 丢失 |
| **文档/规格大规模投入** | 单日 3 个 blueprint 同步 PR | #1740/#1741/#1750 文档线持续 | 1,028 页核验、431 页 E2E 实测修复 |

**最值得注意的交叉验证**：
- **渠道分发**是 OpenUI 与 CopilotKit 双强信号，且两者都强调"与 Web 端一致的交互模型"（原地更新 vs. 消息组件）；
- **Python 覆盖**三个活跃项目同日均有动作，已从差异化能力变为生态门槛；
- **流式鲁棒性**是 a2ui 与 CopilotKit 共同的 bug 集中区，说明流式管道是当前工程难点而非个案。

---

## 4. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术路线 | 生命周期阶段 |
|---|---|---|---|---|
| **a2ui** | 规格治理（blueprint）、跨 SDK 互操作、catalog 编写体验、渲染器矩阵（含 Angular） | SDK/渲染器实现者、平台工程团队 | **spec-first**：TS + Python 双 SDK、proto 传输层 PoC、experimental 轨道（decision 内核） | 规格收敛期：无发布、P2 Issue 悬置 52 天、治理带宽紧张 |
| **OpenUI** | 聊天内嵌生成式 UI、渠道生态、server SDK、dashboard 能力 | 构建 AI 产品的应用开发者（SMB 场景已验证：Krater、Commonly） | **单渲染内核多渠道输出**：OpenUI Lang → Slack/Teams/Discord；TS/Python 双栈 | 快速产品化期：当日唯一发布，出现 hosted 服务导流信号（#1756） |
| **CopilotKit** | 全栈 agent 框架、Open Generative UI v2、文档质量工程 | 生产级/企业级 copilot 团队（Azure 身份、成本上限、安全守卫等企业要素齐备） | **AG-UI 协议深度绑定** + 云运行时 + 多框架集成 | 规模化质量期：安全加固（#8434）、正确性修复（#8481）、千页文档审计 |
| **json-render** | 渲染层工具（当日无动态，信息不足） | — | — | 静默期，需更长窗口确认 |

**一句话画像**：a2ui 在做"**协议与标准**"，OpenUI 在做"**渠道与产品**"，CopilotKit 在做"**框架与企业可信度**"——三者恰好覆盖生态栈的不同层次，当前直接竞争度低于表面相似度；但 OpenUI 与 CopilotKit 在消息渠道方向已正面交汇。

---

## 5. 社区热度与成熟度

**按动态总量排序**：CopilotKit（27）> OpenUI（21）> a2ui（14）> json-render（0）。但需区分"工程产出"与"社区热度"：

| 维度 | 表现最优 | 依据 |
|---|---|---|
| 社区自供给 | **a2ui** | 7 位贡献者中外部 5 人；用户报障 → 修复 PR 响应 < 24h（#4435 → #4436） |
| 社区互动健康度 | **OpenUI** | 自助式 adopter 申请（Krater 自带 PR、Commonly 一日闭环）；无负面情绪、无投诉类 issue |
| 外部 Issue 流入 | **CopilotKit 最弱** | 活跃 Issue 仅 1 条，呈"工程高产出、社区低流入"格局——热度主要来自维护者内部推进 |
| 发布成熟度 | **OpenUI** | 唯一当日发布，流水线自动化验证通过 |

**成熟度分层**：OpenUI 处于快速迭代 + 商业化萌芽期；CopilotKit 处于规模质量期（投入头部水平的文档工程，431 页逐页实测）；a2ui 处于 pre-release 规格治理期，triage 及时性是短板（多条 needs-triage 未分诊）。

**全生态共性风险**：
1. 评审吞吐不足（合计 46 个待合并 PR）；
2. 社区贡献者流失隐患——OpenUI #1502 挂起 **32 天**、a2ui #4054/#4057 挂起 **20 天**、CopilotKit #8309 挂起 **18 天**，均无评审互动；
3. 堆叠式交付（a2ui Catalog 四连栈、OpenUI 服务端五连栈、CopilotKit 文档七连栈）对 review 顺序强依赖，放大单一核心维护者（gspencergoog、AbhinRustagi）的瓶颈效应。

---

## 6. 值得关注的趋势信号

1. **生成式 UI 正在离开浏览器**。Discord Components V2 原地更新复刻了 Web 交互模型，CopilotKit 则押注 iMessage/WhatsApp/SMS/RCS。消息平台正在成为生成式 UI 的第二运行时。**参考价值**：做渠道选型时，"交互模型一致性"与"第三方依赖大版本兼容"（如 recharts 3 导致图表输出空白 PNG 的教训）应纳入评估清单。

2. **"结构化答案块优于纯文本"获得生产级验证**。Krater（500+ 模型回复中内联图表/表单）与 Commonly（agent 发卡片）均以此为核心价值主张；同时 Markdown 回灌需求长期存在（#681/#1502）。**参考价值**：同一份生成内容需要**双输出格式**（渲染卡片 + 纯文本），架构设计时应预留。

3. **Python parity 从加分项变为门槛项**。三个活跃项目同日均有 Python 侧动作（PyPI 发包、快速上手修复、Showcase 升级），印证 Python 是 AI 后端事实标准入口。

4. **协议碎片化与 MCP 收敛并存**。AG-UI、OpenUI Lang、a2ui catalog/proto 各自演进，格式层竞争加剧；但 agent 工具层正向 MCP 收敛（OpenUI #1736）。跨仓库协议依赖（CopilotKit #8588 阻塞于上游 AG-UI 发布）正成为新的工程协调成本。

5. **流式管道是正确性风险集中区**。参数乱序（#8562）、消息快照恢复丢 metadata（#8481）、流式校验语义两义（#3043）——三个不同项目命中同一类问题。**参考价值**：流式 UX 的鲁棒性应作为框架选型的硬性测试项；无法规避时，需在应用层做参数乱序兜底。

6. **生态进入"可信度建设期"**。校验器真正校验（a2ui #4435）、公共端点安全守卫与成本上限（CopilotKit #8434）、千页文档与实际版本一致性审计——行业重心正从"demo 可用"转向"生产可信"。**参考价值**：技术选型时，"校验严格度、安全默认值、文档与发布版本一致性"应作为与功能清单同等重要的评估维度；对早期采用者，密切关注各项目 experimental 轨道（a2ui Catalog/decision、CopilotKit 消息渠道 early access）可作为提前布局的窗口。

---

**结语**：本期三个活跃项目合计 62 条动态、1 次发布、0 次崩溃级事故，生态基本面健康；真正的约束不在代码质量，而在**评审带宽**——堆叠式交付已成主流工程模式，谁能先解决 review 吞吐（扩容评审者、拆栈、社区 PR 快速分诊），谁就能在下一轮功能合并周期中占得先机。

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目动态日报 · 2026-11-28

> 仓库：[a2ui-project/a2ui](https://github.com/a2ui-project/a2ui) · 报告周期：过去 24 小时

| 指标 | 数值 |
|---|---|
| Issue 更新 | 2（新开/活跃 2 · 关闭 0） |
| PR 更新 | 12（待合并 11 · 合并/关闭 1） |
| 新版本发布 | 0 |
| 窗口内活跃贡献者 | 7 人 |

---

## 1. 今日速览

过去 24 小时项目保持**中高活跃度**：共 14 条动态（12 条 PR、2 条 Issue），无新版本发布。核心维护者 gspencergoog 单日连提 3 个 blueprint 文档同步 PR（[#4437](https://redirect.github.com/a2ui-project/a2ui/pull/4437)/[#4438](https://redirect.github.com/a2ui-project/a2ui/pull/4438)/[#4439](https://redirect.github.com/a2ui-project/a2ui/pull/4439)），规格治理明显提速。悬置 **52 天**的 P2 Issue [#3043](https://redirect.github.com/a2ui-project/a2ui/issues/3043)（流式 surface 默认图校验语义）今日迎来对应修复 PR；社区还出现了"用户报障 → 当日修复"的自愈闭环（[#4435](https://redirect.github.com/a2ui-project/a2ui/issues/4435) → [#4436](https://redirect.github.com/a2ui-project/a2ui/pull/4436)）。需警惕的是 **11 个 PR 待合并**，评审吞吐量是当前最明显的健康度短板。

---

## 2. 项目进展

**进入终态的 PR（1 个）：**
- [#3406](https://redirect.github.com/a2ui-project/a2ui/pull/3406)（Angular 22 渲染器升级，closes #3405）于 11-27 关闭，历时约 5 周。该 PR 将 Angular 升至 `^22.2.3` 并全仓捆绑 TypeScript 6.0.3，属破坏性变更。**注意**：其终态标签为 CLOSED 而非 MERGED，数据无法确认是否实际合入——若为直接关闭，Angular 22 迁移尚未落地，建议维护者确认后续路径（重开/拆分/替代方案）。

**今日无功能性合并，推进主要发生在规格与评审管线：**
- [#4438](https://redirect.github.com/a2ui-project/a2ui/pull/4438)：将 a2ui_core 蓝图中"默认严格 ValidationConfig"与"无 config 即跳过图校验"的矛盾表述收敛为唯一规则，直接消除各 SDK 行为分叉的规格依据（响应 Issue #3043）。
- [#4437](https://redirect.github.com/a2ui-project/a2ui/pull/4437)：修复 agent 蓝图滞后（落后 `agent_renderer_app`、遗漏 `agent_functions` 记录、catalog 序列化描述过期等）。
- [#4439](https://redirect.github.com/a2ui-project/a2ui/pull/4439)：修复 Angular 渲染器蓝图 stale pins（`node_resolution` 落后 2 commits、`universal_custom_elements` 落后 6 commits）及错误 import 路径。
- 长线特性 PR [#4320](https://redirect.github.com/a2ui-project/a2ui/pull/4320)（决策内核，11-20 提交）今日有更新，仍待评审。
- 体量最大的动作来自 jacobsimionato 的 **Catalog Document 解耦四连 PR**（[#4427](https://redirect.github.com/a2ui-project/a2ui/pull/4427) spec 提案 / [#4431](https://redirect.github.com/a2ui-project/a2ui/pull/4431) TS 实现 / [#4432](https://redirect.github.com/a2ui-project/a2ui/pull/4432) Python 实现 / [#4433](https://redirect.github.com/a2ui-project/a2ui/pull/4433) proto PoC），一次性覆盖规范、双语言 SDK 与传输层。

**综合评估**：今日推进以"规格一致性 + 社区修复"为主，无版本功能落地，整体向前迈进幅度中等，重心在为下一轮功能合并清障。

---

## 3. 社区热点

> 本期各 Issue 评论数均为 1 条、PR 评论数据缺失，热度排序依据跨引用联动与响应速度。

1. **Catalog Document 解耦系列**（[#4427](https://redirect.github.com/a2ui-project/a2ui/pull/4427) / [#4431](https://redirect.github.com/a2ui-project/a2ui/pull/4431) / [#4432](https://redirect.github.com/a2ui-project/a2ui/pull/4432) / [#4433](https://redirect.github.com/a2ui-project/a2ui/pull/4433)）：本期影响面最大的讨论主题。**诉求分析**：catalog 作者当前需手写大量 JSON Schema plumbing（`component: {const}`、`allOf` 包裹、`$defs` 等）；TS 侧 catalog 与 Zod 强耦合；Python 侧在 reference mapping、binding 分类、校验、结果 coerce 等多个子系统**重复解析** `$ref/allOf/oneOf/anyOf` 树。核心诉求是降低编写门槛、解耦运行时依赖、为 proto 传输铺路。
2. **Issue [#3043](https://redirect.github.com/a2ui-project/a2ui/issues/3043) + PR [#4438](https://redirect.github.com/a2ui-project/a2ui/pull/4438)**：核心蓝图歧义导致 SDK 实际分叉（渲染器：无 config 即跳过图校验；agent：默认严格）。诉求是规格明确性与跨 SDK 互操作一致性。
3. **Issue [#4435](https://redirect.github.com/a2ui-project/a2ui/issues/4435) + PR [#4436](https://redirect.github.com/a2ui-project/a2ui/pull/4436)**：用户在生产组合 `@a2ui/agent 0.2.1` + `@a2ui/web_core 0.16.1` 上报校验宽松缺陷，另一贡献者当日提交修复——**报告到修复响应 < 24h**，是本期最健康的社区互动样本。

---

## 4. Bug 与稳定性

无崩溃、回归或安全类报告；今日风险集中于"协议校验宽松 / 规格两义"主题。按严重程度排列：

| 问题 | 严重程度 | 说明 | 修复状态 |
|---|---|---|---|
| [#3043](https://redirect.github.com/a2ui-project/a2ui/issues/3043) 流式 surface 默认图校验语义歧义 | **P2**（官方已标注） | 规格两读导致 SDK 分叉，影响跨 SDK 互操作 | 修复 PR [#4438](https://redirect.github.com/a2ui-project/a2ui/pull/4438) 今日提交，待评审 ✅ |
| [#4435](https://redirect.github.com/a2ui-project/a2ui/issues/4435) `validatePayload` 接受 v1.0 未声明的 `@accessibility` / `@checks` 键 | 中 | 校验宽松类缺陷：静默放行非法 payload，可能掩盖下游渲染/无障碍异常；非崩溃类 | 修复 PR [#4436](https://redirect.github.com/a2ui-project/a2ui/pull/4436) 已提交，needs-triage ✅ |
| [#4057](https://redirect.github.com/a2ui-project/a2ui/pull/4057) schema 校验缺失 `minProperties`/`maxProperties`/typeless `not` | 中偏低（含正确性缺陷） | 对应 #3998 表格行 1/2/6，其中行 6 会**拒绝合法值**，直接影响用户 | 修复即该 PR 本身，11-08 提交仍 open ⏳ |
| [#4054](https://redirect.github.com/a2ui-project/a2ui/pull/4054) `DataModel.get` 在重载 callee 下的类型推断错误 | 低 | TS 类型 ergonomics 边界 case（`expect` + a11y matcher 场景），不影响运行时 | 修复即该 PR 本身，11-08 提交仍 open ⏳ |

---

## 5. 功能请求与路线图信号

| 信号 | 依据 | 纳入判断 |
|---|---|---|
| Catalog Document 格式解耦 | [#4427](https://redirect.github.com/a2ui-project/a2ui/pull/4427)（spec）+ [#4431](https://redirect.github.com/a2ui-project/a2ui/pull/4431)/[#4432](https://redirect.github.com/a2ui-project/a2ui/pull/4432)（双语言实现）+ [#4433](https://redirect.github.com/a2ui-project/a2ui/pull/4433)（proto PoC），全栈铺开 | 信号强度最高；因破坏 catalog 编写方式与 SDK 内部模型，更可能走 **experimental / next-major** 轨道 |
| 决策能力实验化 | [#4320](https://redirect.github.com/a2ui-project/a2ui/pull/4320)：`a2ui.inference_formats.experimental.decision` 内核、`@macro` 放置约束、`a2ui-agent-sdk[decision]` extras（httpx gating） | 已自标 experimental，随实验轨道推进 |
| 渲染器栈升级 | [#3406](https://redirect.github.com/a2ui-project/a2ui/pull/3406)：Angular 22 + TS 6 repo 级绑定 | 已关闭，落地形式待确认后重排 |
| 校验收紧与规格澄清 | [#4436](https://redirect.github.com/a2ui-project/a2ui/pull/4436)、[#4438](https://redirect.github.com/a2ui-project/a2ui/pull/4438)、[#4057](https://redirect.github.com/a2ui-project/a2ui/pull/4057) | **大概率进入下个补丁/次版本**，属低风险合规性修复 |

---

## 6. 用户反馈摘要

- **痛点 1 · 校验器不校验**（[#4435](https://redirect.github.com/a2ui-project/a2ui/issues/4435)）：用户将 `validatePayload` 作为 v1.0 合规门禁，发现未声明键被静默放行，打破"schema 声明即约束"的预期。
- **痛点 2 · 规格两义造成实现分歧**（[#3043](https://redirect.github.com/a2ui-project/a2ui/issues/3043)）：SDK 实现者指出 renderers 与 agents 行为已分叉，需要 blueprint 给出唯一答案。
- **痛点 3 · catalog 编写与维护负担**（[#4427](https://redirect.github.com/a2ui-project/a2ui/pull/4427)/[#4432](https://redirect.github.com/a2ui-project/a2ui/pull/4432) 陈述）：JSON Schema plumbing 繁重、Python 侧多子系统重复解析复合 schema 树，维护与性能成本高。
- **正面信号**：报障→修复响应 < 24h；窗口内 7 位贡献者中外部贡献者（hualu00、Anoshor、andreascorti、SebDam2k、jacobsimionato）占比过半，社区自供给能力良好。
- **数据局限**：Issue 评论数各仅 1 条、PR 评论缺失，样本不足以支撑更细颗粒的满意度结论。

---

## 7. 待处理积压

| 条目 | 年龄/状态 | 建议动作 |
|---|---|---|
| [#4054](https://redirect.github.com/a2ui-project/a2ui/pull/4054) / [#4057](https://redirect.github.com/a2ui-project/a2ui/pull/4057) | **20 天**未合（assigned-for-triage） | 均为 self-contained 小修复，尽快排期评审 |
| [#4320](https://redirect.github.com/a2ui-project/a2ui/pull/4320) | 8 天，大体积 + CI 变更 | 尽早表态采纳意向，避免与 Catalog 系列争夺评审资源 |
| [#3043](https://redirect.github.com/a2ui-project/a2ui/issues/3043)（P2） | 10-07 创建（**52 天**），今日才有 PR 响应 | 加速 #4438 评审，并推动各 SDK 行为同步 |
| [#4435](https://redirect.github.com/a2ui-project/a2ui/issues/4435) / [#4436](https://redirect.github.com/a2ui-project/a2ui/pull/4436) | needs-triage | 尽快分诊打标，保持社区修复者动力 |
| Catalog 四连 PR | 11-27 新提，stacked（#4433 依赖 #4431） | **先裁定 spec 层 #4427 的方向性**，再决定实现栈评审顺序，避免栈式评审返工 |
| [#3406](https://redirect.github.com/a2ui-project/a2ui/pull/3406) | 10-22 提交，11-27 关闭（约 5 周） | 确认合入还是直接关闭；若未合入，明确 Angular 22 后续路径及 #3405 的真实状态 |

---

**健康度小结**：活跃度中高、贡献者结构多元（7 人）、社区响应速度优异（当日报障当日修复）；短板在**评审吞吐**（11 个 PR 待合并、#4054/#4057 20 天未合）与 **triage 及时性**（多条 needs-triage 未分诊），且本期零发布。建议优先扩容评审带宽，并尽快对 Catalog 系列作出方向性裁定。

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目日报 · 2026-11-28

---

## 1️⃣ 今日速览

过去 24 小时项目共产生 **21 项动态**（Issues 2 + PRs 19），其中 5 个 PR 合并/关闭、1 个新版本发布、14 个 PR 待合并，整体处于**高活跃区间**。核心事件是 **@​openuidev/channels@0.3.0 发布**，新增 Discord Components V2 渠道，消息平台覆盖从 Slack/Teams 扩展至三家。研发重心明显向服务端倾斜：维护者 AbhinRustagi 的 **5 个堆叠 PR 组成的 server SDK 重构栈**（#1720→#1745→#1707→#1750→#1736）加 Python 版 SDK（#1742）同步推进。社区侧，Krater 集成申请（#1754）与 Commonly adopters 收录（#1732/#1744）先后落地，生态采用持续正增长。无用户侧严重故障报告，已知 bug 均有 fix PR 在途。

---

## 2️⃣ 版本发布

### [@​openuidev/channels@0.3.0](https://github.com/thesysdev/openui/releases)（发布于 2026-11-27）

- **新增内容**：`@openuidev/channels/discord`（来自 [#1748](https://redirect.github.com/thesysdev/openui/pull/1748)，作者 @​vishxrad）——将 OpenUI Lang 渲染为 [Discord Components V2](https://docs.discord.com/developers/components/reference) 消息，并在用户交互时**原地更新**消息，交互模型与 Slack/Teams 渠道完全一致；未改动共享渲染引擎。
- **破坏性变更**：**无**（minor 版本，纯增量导出）。
- **迁移注意事项**：升级风险低，但配套文档（[#1740](https://redirect.github.com/thesysdev/openui/pull/1740)）明确 `renderChartPng`（`@openuidev/channels/ui/charts`）**需要 recharts 2**——recharts 3 将图表布局移入由 `useEffect` 填充的 store，在 `renderToStaticMarkup` 下只会产出空的 `recharts-wrapper` div，最终输出空白 PNG。使用图表栅格化的用户请先确认依赖版本。

---

## 3️⃣ 项目进展

本日合并/关闭的 5 个 PR：

| PR | 内容 | 影响 |
|---|---|---|
| [#1748](https://redirect.github.com/thesysdev/openui/pull/1748) | Discord Components V2 渠道 | **已随 0.3.0 发布**，渠道生态第三块拼图落地 |
| [#1752](https://redirect.github.com/thesysdev/openui/pull/1752) | version packages（changesets 自动化） | 触发本次 npm 发布，发布流水线运转正常 |
| [#1744](https://redirect.github.com/thesysdev/openui/pull/1744) | Commonly 加入 ADOPTERS.md | 修复 [#1732](https://redirect.github.com/thesysdev/openui/issues/1732)，issue→PR 一日内闭环 |
| [#1741](https://redirect.github.com/thesysdev/openui/pull/1741) | 博客：自建 live AI dashboards 的成本清单 | 开发者教育与内容营销持续推进 |
| [#1740](https://redirect.github.com/thesysdev/openui/pull/1740) | 补充 recharts 2 依赖说明 | 修复文档缺口 |

**进展评估**：本周期已落地的增量集中在 channels 生态与文档侧；真正的体量担当——server SDK 五连栈（重构→测试→conversations→文档→dashboard 工具+MCP）**全部处于 open 状态**，合入后 `@openuidev/server` 预计将迎来一次跨 minor 的大版本演进。项目当前呈现"**小步发布、大跨研发**"的健康形态。

---

## 4️⃣ 社区热点

- **[#1754 [integrations] List Krater in the community projects](https://redirect.github.com/thesysdev/openui/issues/1754)**（2 条评论，本周期唯一有讨论的 issue）+ 作者自带 PR [#1755](https://redirect.github.com/thesysdev/openui/pull/1755)
  Krater.ai 申请进入 Demos 页社区项目展示位。其诉求颇具代表性：面向中小企业的 AI 平台（500+ 模型聚合 + Agent + 建站 Studio），用 OpenUI Lang 在聊天回复中**内联图表/表格/KPI 行/图片卡片轮播/表单**。属于"自助式集成申请"，维护成本极低，参照 #1732/#1744 先例，预计很快合入。
- **服务端堆叠 PR 群**（[#1720](https://redirect.github.com/thesysdev/openui/pull/1720) / [#1745](https://redirect.github.com/thesysdev/openui/pull/1745) / [#1707](https://redirect.github.com/thesysdev/openui/pull/1707) / [#1750](https://redirect.github.com/thesysdev/openui/pull/1750) / [#1736](https://redirect.github.com/thesysdev/openui/pull/1736)）：描述中互相引用、层级明确，构成当前讨论密度最高的技术脉络，方向为"feature-folder 重构 → 测试兜底 → 会话能力 → 文档 → agent 工具与 MCP"。

---

## 5️⃣ Bug 与稳定性

按严重程度排列：

1. **中（UI 信息误导）** · [#1747](https://redirect.github.com/thesysdev/openui/pull/1747) fix(react-ui)：查询失败时卡片显示 "This data didn't load"，但 Sources 面板却显示 "No rows returned · 0 rows · 0 fields"。根因是失败查询返回默认空结果、失败信息记录在独立列表，Sources 只读取了前者。**✅ fix PR 已提交（ankit-thesys，今日仍有更新），待合并。**
2. **中低（CI 债务）** · [#1728](https://redirect.github.com/thesysdev/openui/pull/1728)：docs 包在 main 上 lint/format 双双失败，且无 CI workflow 兜底；PR 补齐依赖声明并新增检查工作流。**⏳ fix 在途，open 自 11-25。**
3. **低（已知限制，文档化处理）** · [#1740](https://redirect.github.com/thesysdev/openui/pull/1740)：recharts 3 与 `renderChartPng` 不兼容——以文档说明方式关闭，非代码级修复。
4. **低（示例构建）** · #1716 的 build-examples 失败（pnpm lockfile 过期）由 [#1735](https://redirect.github.com/thesysdev/openui/pull/1735) 刷新 lockfile 顺带修复，**⏳ PR 仍 open**。

本周期**无崩溃、无数据损坏级**问题报告。

---

## 6️⃣ 功能请求与路线图信号

| PR | 信号 | 纳入下版可能性 |
|---|---|---|
| [#1742](https://redirect.github.com/thesysdev/openui/pull/1742) | `openui-server` 上 PyPI，sync/async 双客户端，API 与 TS 版对齐 | **高**——Python 是最大 AI 后端用户池，多语言扩张是明确的路线图方向 |
| [#1736](https://redirect.github.com/thesysdev/openui/pull/1736) | dashboard 原生 agent 工具（create/edit/get_dashboard）+ MCP 协议暴露 | **高**——同时押注 agent 生态与 MCP 标准 |
| [#1707](https://redirect.github.com/thesysdev/openui/pull/1707) | `openui.conversations` / `openui.chat` / `openui.langgraph` | **高**——会话持久化是 server SDK 的能力拼图 |
| [#1502](https://redirect.github.com/thesysdev/openui/pull/1502) | lang-core 新增 `toMarkdown()`（关闭 [#681](https://redirect.github.com/thesysdev/openui/issues/681)），OpenUI 响应转纯 Markdown，供日志/存储/回灌 LLM | 中——真实痛点，但社区 PR 已等待 32 天 |
| [#1756](https://redirect.github.com/thesysdev/openui/pull/1756)（今日新开） | /dashboards 页新增 Open Dashboards 卡片 | 中——demo 向商业化 hosted 服务导流的布局 |
| [#1746](https://redirect.github.com/thesysdev/openui/pull/1746) | cookbooks/Autofix 示例/`openui create` 模板迁移至新 server SDK | 高——暗示旧 helper 将进入弃用周期 |

**下一版本预估**：`@openuidev/server` 大版本（堆叠栈合入后）+ `openui-server` Python 首发包。

---

## 7️⃣ 用户反馈摘要

- **采用场景持续验证**：两个新 adopter 均将 OpenUI Lang 定位为"聊天中的生成式 UI 渲染层"——[Krater](https://redirect.github.com/thesysdev/openui/issues/1754) 在 500+ 模型的回复中内联图表/表格/KPI/轮播/表单（"when a chart explains better than text"）；[Commonly](https://redirect.github.com/thesysdev/openui/issues/1732) 在团队与 agent 共享工作区中让 agent 发卡片、以 `@openuidev/react-lang` 渲染。核心价值主张（**结构化答案块优于纯文本**）在真实产品中被反复验证。
- **隐性痛点（从 PR 侧面提炼）**：
  - [#1747](https://redirect.github.com/thesysdev/openui/pull/1747)：错误路径信息呈现不一致，说明生产环境有用户在用 Sources 认真调试数据问题；
  - [#1740](https://redirect.github.com/thesysdev/openui/pull/1740)：第三方依赖大版本升级（recharts 3）兼容性是渠道用户的实际摩擦点；
  - [#1502](https://redirect.github.com/thesysdev/openui/pull/1502) / #681：将 OpenUI 响应转纯文本回灌 LLM 的管道场景长期存在需求。
- 本周期**无负面情绪反馈、无投诉类 issue**，满意度信号偏正面。

---

## 8️⃣ 待处理积压

- ⚠️ **[#1502](https://redirect.github.com/thesysdev/openui/pull/1502)**（2026-10-27 开启，**已积压 32 天**）：社区贡献的 `toMarkdown()` PR，关联老 issue #681，期间无评论互动，存在贡献者流失风险。**建议维护者优先 triage。**
- ⚠️ **服务端五连栈**（[#1720](https://redirect.github.com/thesysdev/openui/pull/1720) ← [#1745](https://redirect.github.com/thesysdev/openui/pull/1745) ← [#1707](https://redirect.github.com/thesysdev/openui/pull/1707) ← [#1750](https://redirect.github.com/thesysdev/openui/pull/1750) ← [#1736](https://redirect.github.com/thesysdev/openui/pull/1736)）：堆叠式交付对 review 顺序强依赖，最早的 #1707 已 open 5 天，建议按栈序分批尽快合入，避免 rebase 成本滚雪球。
- [#1747](https://redirect.github.com/thesysdev/openui/pull/1747)：bug fix 今日仍在更新，接近可合状态。
- [#1728](https://redirect.github.com/thesysdev/openui/pull/1728)（11-25 起）：main 分支 docs lint 破损且无 CI 防护的**风险窗口持续存在**，建议加速合入。

---

**健康度小结**：本周期 OpenUI 呈现"发布节奏稳定 + 研发纵深大 + 社区贡献自助化"的三重健康特征；主要风险点不在代码质量，而在于**大型堆叠 PR 的 review 吞吐**与**单个社区 PR 的长期挂起**。

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报

**日期**：2026-11-28 | **数据窗口**：过去 24 小时
**概要数据**：Issues 更新 2 条（活跃 1 / 关闭 1）· PR 更新 25 条（待合并 21 / 合并或关闭 4）· 新版本 0 个

---

## 1. 今日速览

今日 CopilotKit 呈现 **"工程高产出、社区低流入"** 的格局：24 小时内 PR 活动密集（25 条更新、21 条待合并），但绝大部分集中在一项罕见规模的大规模文档体系重构（7-PR 堆叠栈及延伸 PR）；Issues 侧仅 1 条活跃、1 条长龄 Issue 关闭。运行时核心有一条修复关闭（#8481 工具结果元数据保留），另有今日新开的 AG-UI 适配器升级 PR（#8593）。无版本发布。整体健康度评价：**维护者推进力强、外部贡献者持续参与**，但 21 条待合并 PR 构成较大评审积压，且新特性 Open Generative UI 存在一例尚无修复的渲染回归（#8562），是当前最值得关注的稳定性风险点。

## 2. 版本发布

本期无新版本发布（Release 数：0）。文档大栈、#8434 安全修复及 #8593 适配器升级均处于待合并状态，未观察到 tag/release 变动。

## 3. 项目进展

**已关闭/合并（4 条，Top 20 中可见 2 条）：**
- [#8481](https://redirect.github.com/CopilotKit/CopilotKit/pull/8481) `fix(core)`：run 结束时 `reconcilePendingResults` 此前逐字段重建工具消息，导致 `TOOL_CALL_RESULT` 事件的 `metadata` 丢失（涉及被 `MESSAGES_SNAPSHOT` 丢弃后恢复、以及 "Forwarded to client" 占位符提升两条路径）；现已保留元数据。核心消息管道的一次正确性修复落地。
- [#8590](https://redirect.github.com/CopilotKit/CopilotKit/pull/8590)：与 [#8589](https://redirect.github.com/CopilotKit/CopilotKit/pull/8589) 同名的 stack picker 动效 PR 被关闭，由 #8589 接替提交。
- 其余 2 条关闭 PR 未进入本次 Top 20 展示，明细待查。

**今日新增：**
- [#8593](https://redirect.github.com/CopilotKit/CopilotKit/pull/8593) `chore(showcase)`：Mastra 集成升级至 `@ag-ui/mastra` 2.1.0，两个 Python LangGraph Showcase 升级至 `ag-ui-langgraph` 0.1.0 + `ag-ui-protocol` 0.1.22，并对齐 peer 依赖——AG-UI 生态依赖保持版本同步。

**主线：文档体系大重构（持续推进中）**
以 [#8432](https://redirect.github.com/CopilotKit/CopilotKit/pull/8432)（栈底）→ [#8438](https://redirect.github.com/CopilotKit/CopilotKit/pull/8438)（栈顶）的 7-PR 文档栈为核心，叠加 [#8440](https://redirect.github.com/CopilotKit/CopilotKit/pull/8440)、[#8451](https://redirect.github.com/CopilotKit/CopilotKit/pull/8451)、[#8468](https://redirect.github.com/CopilotKit/CopilotKit/pull/8468)、[#8486](https://redirect.github.com/CopilotKit/CopilotKit/pull/8486) 等延伸 PR 与 [#8483](https://redirect.github.com/CopilotKit/CopilotKit/pull/8483) 全栈预览。按 PR 描述披露的量化口径，这轮重构覆盖：
- **1,028 个页面** / **2,704 个唯一代码块** 与读者实际安装版本的可用性核验（#8440）
- **431 页指南**用 mock LLM + Playwright 端到端实测并修复（#8468）
- 194 页 Reference + 35 页 Intelligence 与源码对齐（#8438）
- Ask AI 安全加固（[#8434](https://redirect.github.com/CopilotKit/CopilotKit/pull/8434)）、搜索结果排序（#8432）、面向 agent 的 Markdown 输出修复（[#8435](https://redirect.github.com/CopilotKit/CopilotKit/pull/8435)）、全站文风统一（#8451）
- [#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309)：Python 快速上手补齐（`azure-identity` 依赖、`single_user` 回环绑定、fail-closed `authorization_scope_resolver` 示例）

**其他：** [#8588](https://redirect.github.com/CopilotKit/CopilotKit/pull/8588) Cloudflare 中断恢复改用 `run.resumePayload`（draft，阻塞于上游发布）；[#8591](https://redirect.github.com/CopilotKit/CopilotKit/pull/8591)、[#8592](https://redirect.github.com/CopilotKit/CopilotKit/pull/8592) 文档侧持续打磨。

**整体评估**：本阶段项目重心明确转向"文档即产品"的质量工程，投入规模在开源项目中属头部水平；运行时核心以小步正确性修复为主，AG-UI 适配层保持同步。功能面推进有限，属蓄力期。

## 4. 社区热点

- **Issue [#8562](https://redirect.github.com/CopilotKit/CopilotKit/issues/8562)（2 评论，本期评论最多的 Issue）**：Open Generative UI 的 `generateSandboxedUi` 在流式输出中，当模型在 `html`/`css` 之后才发出 `initialHeight` 时，画布被清空为白框——根因指向 `open-generative-ui-middleware.ts` 初始化 `ACTIVITY_SNAPSHOT` 的触发时机。诉求本质是**新生成式 UI 特性对流式参数乱序的鲁棒性**。尚无关联修复 PR。
- **Issue [#3748](https://redirect.github.com/CopilotKit/CopilotKit/issues/3748)（3 评论，今日关闭）**：2026-04-10 提交的 LangGraph 集成功能请求（自定义 stream 模式 + `ToolMessage.artifact` 透传），挂起约 **7.6 个月（232 天）** 后于今日关闭。诉求指向 LangGraph 消息中结构化数据（artifact / additional_kwargs）到前端的透传能力。数据未注明关闭原因，建议关注是否有关联实现落地。
- **说明**：本数据源未提供各 PR 的评论数（undefined），PR 侧无法按评论热度排序；从更新时间看，今日有动作的 PR 为 #8432、#8309、#8483、#8473、#8481、#8593。

## 5. Bug 与稳定性（按严重程度排列）

| 级别 | 问题 | 状态 |
|---|---|---|
| 🔴 安全 | [#8434](https://redirect.github.com/CopilotKit/CopilotKit/pull/8434)：Ask AI 单路由模式下 runtime 接受 JSON **字符串**形式的 body 并二次解析，绕过对 `messages`/`context`/`tools` 的守卫；PR 同时为公共端点增加成本上限 | **fix PR 开放中，未合并，建议最高优先级评审** |
| 🔴 功能回归 | [#8562](https://redirect.github.com/CopilotKit/CopilotKit/issues/8562)：Open Generative UI 画布整屏清空为白框 | **开放中，无 fix PR** |
| 🟡 体验缺陷 | [#8473](https://redirect.github.com/CopilotKit/CopilotKit/pull/8473)：`useAttachments` 对所有拖拽（含文本选区拖动）一律 `preventDefault`+`stopPropagation`，误开 drop zone | fix PR 开放中 |
| 🟡 已修复 | [#8481](https://redirect.github.com/CopilotKit/CopilotKit/pull/8481)：`reconcilePendingResults` 丢失工具结果 metadata | **已关闭** |
| 🟡 潜在风险 | [#8588](https://redirect.github.com/CopilotKit/CopilotKit/pull/8588) 附注：CI 绿色部分因 Worker 构建不做 typecheck；在 `@ag-ui/cloudflare-agents` 0.1.0 上中断演示实际是坏的 | 阻塞于上游 0.2.0 发布 |
| 🟢 文档缺陷 | [#8468](https://redirect.github.com/CopilotKit/CopilotKit/pull/8468) / [#8440](https://redirect.github.com/CopilotKit/CopilotKit/pull/8440) / [#8436](https://redirect.github.com/CopilotKit/CopilotKit/pull/8436) 审计发现：快速上手第一步即失败、代码示例与安装版本不符、搜索错位 | fix 待合并 |

## 6. 功能请求与路线图信号

- **消息渠道扩张（强信号）**：#8580 已落地的 iMessage / WhatsApp / SMS / RCS "early access" 渠道页，由 [#8591](https://redirect.github.com/CopilotKit/CopilotKit/pull/8591) 重写为读者视角——CopilotKit 正把 agent 分发从 Web 延伸至消息渠道，处于早期访问阶段，大概率是下一阶段发布重点。
- **Open Generative UI v2（强信号）**：`src/v2/runtime/open-generative-ui-middleware.ts` 路径与 #8562 的出现，表明 v2 生成式 UI 运行时中间件处于活跃开发与真实用户验证期。
- **AG-UI 协议深度绑定（持续信号）**：#8593 升级适配器、#8588 依赖 `run.resumePayload` 新协议能力——项目路线图与 AG-UI 协议演进强耦合，跨仓库协调日益重要。
- **Sub-agents（中等信号）**：[#8592](https://redirect.github.com/CopilotKit/CopilotKit/pull/8592) 为 React Native 增加 subagent 委派日志示例，多 agent 委派叙事在文档层持续强化。
- **LangGraph artifact 透传（待观察）**：#3748 今日关闭；若关闭原因系上游 `ag-ui-langgraph` 0.1.0 已支持（#8593 恰于今日升级），则需求已满足——数据无法确认，建议核对关闭说明。

## 7. 用户反馈摘要

- **痛点 · 流式渲染脆弱性**：用户 wenxinzhang 使用 `generateSandboxedUi` 时遭遇参数顺序导致的整屏清空——真实约束是模型流式输出参数顺序不受控，用户侧无法规避（#8562）。
- **痛点 · LangGraph 结构化数据**：用户 SP-John 需要 `ToolMessage.artifact` / `AIMessage.additional_kwargs` 中的结构化数据在前端可访问，等待逾 7 个月（#3748）——反映 LangGraph 深度用户对消息元数据透传的刚需。
- **痛点 · 文档可信度（间接印证）**：docs 栈审计结论侧面证实了用户此前的挫败——快速上手"第一步就失败"、示例与安装版本不符、搜索找不到目标页（#8432/#8436/#8440）；Python 用户漏装 `azure-identity` 即报错（#8309）。这批修复合并后预期显著降低上手摩擦。
- **积极面**：外部贡献者（egg119、aditigaur27、contextablemark、mme 等）持续提交核心/Showcase 级修复与依赖升级，社区参与质量较高；团队对 431 页指南逐页实测的做法是高质量承诺的信号。

## 8. 待处理积压

| 项目 | 主题 | 已挂起 | 状态 |
|---|---|---|---|
| [#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309) | Python 快速上手补齐 | **18 天** | 待合并 |
| #8432–#8451 文档栈 | 搜索/安全/审计/文风（含 #8434 安全修复） | 11 天 | 待合并，堆叠结构需按序合并 |
| #8468 / #8486 | 端到端实测 / 各框架快速上手 | 9–10 天 | 待合并 |
| [#8588](https://redirect.github.com/CopilotKit/CopilotKit/pull/8588) | Cloudflare `resumePayload` | 1 天 | draft，阻塞于 `ag-ui-protocol/ag-ui#3488`（`@ag-ui/cloudflare-agents` 0.2.0） |
| [#8562](https://redirect.github.com/CopilotKit/CopilotKit/issues/8562) | Open Generative UI 画布清空 | 4 天 | 无 fix PR，建议尽快指派 |

**维护者提醒**：
1. **评审积压达 21 条待合并 PR**，其中 #8434（公共端点安全修复）不应受堆叠合并顺序约束，建议插队处理；
2. #8483 为 "do not merge" 的全栈预览 PR，栈合并完成后需及时清理；
3. #3748 关闭时建议补充原因说明（已实现/已拒绝），避免社区误读；
4. #8588 的跨仓库依赖（上游 AG-UI 发布）需要主动跟进，避免长期悬挂。

---
*数据来源：GitHub（CopilotKit/CopilotKit）过去 24 小时窗口。PR 评论数在本数据源中缺失（undefined），相关排序以 Issue 评论数与更新时间为准。*

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*