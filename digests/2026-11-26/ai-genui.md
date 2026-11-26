# 生成式 UI 生态日报 2026-11-26

> Issues: 34 | PRs: 82 | 覆盖项目: 4 个 | 生成时间: 2026-11-26 07:28 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告

**数据窗口**：2026-11-26（过去 24 小时）｜ **覆盖项目**：a2ui、OpenUI、CopilotKit、json-render

---

## 一、生态全景

生成式 UI 生态已沿技术栈完成清晰的分层分化：**a2ui** 占据规范层（多渲染器一致性承诺、冲刺 v1.0），**CopilotKit**（1.90.x）与 **OpenUI**（0.5.x）分别代表成熟框架的产品化扩张与新生代引擎的高速迭代，**json-render** 以轻量渲染原语进入平稳维护期。四个项目不约而同聚焦四个共同命题：**推理成本、消息渠道部署、AI 代理互操作（MCP/Agent Skills）、非 React 框架对等性**。同时，安全合规与依赖治理已取代功能缺失，成为企业采用的显性门槛。生态内部出现了真实的上下游消费关系——CopilotKit 在自家仓库中维护 A2UI 演示与 Vue 目录实现，分层格局开始固化。

---

## 二、各项目活跃度对比

| 项目 | 总动态 | Issue 更新（新开/关闭） | PR 更新（合并·关闭/在途） | Release | 效率与质量信号 |
|---|---|---|---|---|---|
| **a2ui** | **80** | 30（24/6） | 50（6/44 待合并） | 0 | 关闭率偏低（Issue ~20%、PR 12%）；讨论深度全场最高（热点议题 14 评论）；44 个待审 PR 形成管道压力 |
| **CopilotKit** | 20 | 1（1/0） | 19（7/12 待合并） | 0 | PR 关闭率 ~37%，含 5 条“当日开当日关”；以核心团队内驱为主 |
| **OpenUI** | 15 | 2（1/1） | 13（6/7 待合并） | **1**（@​openuidev/server@0.5.3） | PR 落地率 ~46%，全场最高；生态请求当日闭环 |
| **json-render** | 1 | 1（1/0） | 0 | 0 | 无代码推进，典型平稳维护日 |

**关键观察**：a2ui 呈“高活性、低消解率”的规范治理型形态——大量讨论但合并吞吐受限；OpenUI 与 CopilotKit 是执行型团队，产出效率高但社区互动深度弱（OpenUI 今日 Issue 评论数为 0）；json-render 活跃度垫底但无任何负面稳定性信号。

---

## 三、共同关注的功能方向

**1. 推理成本与提示词效率（a2ui、OpenUI）**
- a2ui：generative-ui-bench 量化出系统提示词 **43% 冗余（约 3,700 tokens）**，今日落地去重 PR #4421；#4414 提出“只教授当前目录实际用到的语法”；两条 issue 均带 `inference-latency` 标签，说明 token 成本已进入路线图正式管理。
- OpenUI：#1730 探索 `toolChoice: "none"` 单请求构建仪表盘——跳过工具调用与脚本执行，是成本/延迟方向的架构级信号。

**2. 消息渠道部署（OpenUI、CopilotKit）**
- OpenUI：#1724 一次性补齐 WhatsApp 5 项富消息能力（卡片头图、地图定位、输入中指示器等），已合并。
- CopilotKit：#8573 新增 iMessage/WhatsApp/SMS/RCS 四个 early-access 文档页，采用“文档先行”策略，暗示 SDK 能力即将跟进。

**3. 非 React 框架对等性（a2ui、OpenUI、CopilotKit）**
- a2ui：#3257 SwiftUI 缺失主题化通道；#1298 三渲染器 Image 不一致已悬置 7 个月。
- OpenUI：#1726 请求官方 Angular 组件库（运行时齐备但无开箱即用 UI）。
- CopilotKit：A2UI Vue 目录存在基础布局缺陷（#8565）；Svelte SDK 社区贡献 #5905 已 **140 天无回应**。

**4. AI 代理互操作与可读性（全部四项目）**
- json-render：#508 对 Agent Skills 的规范性审计，证实 SKILL.md 已成为真实使用入口。
- CopilotKit：#8577 将所有前端工具默认暴露为 WebMCP 工具，自我定位为“Web 上的 agent 工具提供方”。
- OpenUI：第三方 Commonly 经 Agent API/MCP server/CLI 三通道投递验证了互操作分层。
- a2ui：decision 模型实验栈（#4321/#4322/#4325）提供零 LLM 的工具指针绑定。

**5. 企业采用的安全与依赖治理（a2ui、CopilotKit）**
- a2ui：Zod CVE 被用户直称为“任何组织采用的前置条件”（#4147）；peer 依赖冲突已是第三次复发（#4059）。
- CopilotKit：集成示例端点未鉴权（#8526）、Node 22 运行时可靠性缺陷（#8574）、Python quickstart 上手摩擦（#8309）。

---

## 四、差异化定位分析

| 项目 | 生态定位 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|---|
| **a2ui** | 规范/协议层 | 跨平台一致性、catalog/Schema 驱动、v1.0 缺陷清扫 | 跨端团队、agent 框架集成方、企业合规敏感用户 | 官方渲染器（Lit/React/Angular）+ Flutter + SwiftUI + Python/Dart SDK；与 A2A 生态协同；实验性零 LLM 决策栈 |
| **OpenUI** | 生成引擎层 | 仪表盘生成质量、提示词形态多样化、渠道富消息、单请求低成本构建 | 数据应用/仪表盘场景开发者、消息渠道运营方 | OpenUI Lang DSL + 渲染器分层，第三方生产验证开始出现 |
| **CopilotKit** | 全栈框架/产品层 | 文档与无障碍密集打磨、WebMCP 互操作、消息渠道扩张、框架遥测 | React 优先的企业开发者、多 agent 框架用户 | React/Angular SDK + Intelligence 运行时 + WebMCP；**下游消费 A2UI 规范与目录** |
| **json-render** | 轻量渲染原语 | JSON→UI 核心渲染、Agent Skills 可消费性 | 需嵌入 JSON 渲染能力的开发者与 AI 代理 | npm scoped 包 + SKILL.md 资产，克制、稳定 |

**最值得注意的生态关系**：CopilotKit 仓库内维护 A2UI 动态演示（#8411）并自行补齐了 Vue 版 basic catalog（a2ui 官方渲染器为 Lit/React/Angular，Vue 由下游实现）——**规范层产出可移植组件目录，框架层负责产品化与渠道分发**，这条消费链是分层生态成立的直接证据。相比之下，OpenUI 走自有 DSL 路线（OpenUI Lang），存在一定的厂商锁定；json-render 则以极简原语嵌入既有体系。

---

## 五、社区热度与成熟度

**热度排名**：a2ui > CopilotKit ≈ OpenUI > json-render

| 项目 | 社区形态 | 成熟度判断 | 主要风险信号 |
|---|---|---|---|
| **a2ui** | 热度第一，外部深度用户持续输出（leoafarias 四连报生产 bug、RandalSchwartz 企业文档需求、manfredsteyer/jacobsimionato 成本度量），热点议题评论 8–14 条，是唯一有真实多方讨论的项目 | **v1.0 前夜**，“高活性 + 高治理债”并存 | 44 待审 PR、#1298 悬置 7 个月、main 分支 evals 失败 2.5 个月、CVE 未解 |
| **CopilotKit** | 高吞吐但内驱为主，社区响应是短板 | **产品成熟期**（1.90.x），文档/无障碍收尾密集 | Svelte PR 140 天沉默、安全修复滞留 5 天 |
| **OpenUI** | 小核心团队（4 名成员）极高产出，社区以生态集成申请为主，互动深度低 | **快速迭代期**（0.5.x），第三方生产验证刚起步 | PR 堆叠链存在合并周期风险；#1717 修复落地状态待确认 |
| **json-render** | 单点审计型贡献 | **稳定维护期**，无负面信号 | 24h 窗口无法判断长期积压 |

**一句话画像**：a2ui 正在用社区共识换规范公信力；OpenUI 用团队速度换生态验证；CopilotKit 用产品打磨换企业渗透；json-render 用克制换稳定。

---

## 六、值得关注的趋势信号

**1. Token 经济学进入工程化度量阶段。** 提示词体积从“优化建议”升级为带专属标签（`inference-latency`）、有基准数据（43% 冗余、3,700 tokens）、有架构方案（单请求构建）的正式指标。
→ *参考价值：选型或自研生成式 UI 时，应将系统提示词体积、工具调用链路长度纳入评测；提示词去重与“按需教学”是当前性价比最高的优化点。*

**2. MCP / Agent Skills 正在成为生成式 UI 的标准接入面。** 四个项目从不同角度靠拢：WebMCP 默认化、三通道卡片投递、SKILL.md 最佳实践、零 LLM 工具绑定。
→ *参考价值：评估方案时优先考察其能否作为 MCP 工具或 Agent Skill 被代理直接消费——这决定了它能否进入 agentic 工作流。*

**3. 生成式 UI 正走出 Web、进入消息渠道。** OpenUI 已在 WhatsApp 落地富消息，CopilotKit 以文档先行布局四渠道。
→ *参考价值：渠道覆盖（富卡片、地图、状态指示）将成为下一轮竞争点，纯 Web 方案的应用边界会收窄。*

**4. “React 之外皆二等公民”是全场性短板。** Vue 基础布局 bug、Angular 无官方库、SwiftUI 主题化缺失、Svelte 贡献长期沉默——四个项目无一例外。
→ *参考价值：非 React 团队选型前，务必验证目标框架的官方支持承诺与组件库完备度，不要被“支持 X 框架”的宣传语带过。*

**5. 标准化输出成为对冲厂商锁定的筹码。** CopilotKit 主动消费 A2UI 目录表明，跨框架/跨渠道的可移植组件目录具备真实价值，而绑定私有 DSL（如 OpenUI Lang）的方案需权衡锁定风险。

**6. 安全与依赖治理是落地的最后一公里。** CVE 阻塞企业采购、peer 冲突三连发、示例端点无鉴权——功能趋同后，生态位竞争正转向安全响应速度与版本治理能力。
→ *参考价值：企业落地前的尽调清单应包含依赖健康度（已知 CVE、peer 冲突历史）与维护者的安全响应时效。*

---

**给决策者的收敛建议**：跨端与合规优先选 a2ui 路线（但需盯紧其 CVE 与 v1.0 收口进度）；React 技术栈的企业 agent 应用优先 CopilotKit（关注 WebMCP 与渠道 SDK 的落地节奏）；仪表盘/数据场景与快速验证优先 OpenUI；轻量嵌入 JSON 渲染选 json-render。共同前提：无论选择哪条路线，都应确认其 AI 代理互操作能力（MCP/Skills）与推理成本表现。

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目动态日报

**项目**: [a2ui-project/a2ui](https://github.com/a2ui-project/a2ui)
**日期**: 2026-11-26 | **数据窗口**: 过去 24 小时

---

## 一、今日速览

过去 24 小时仓库共产生 **80 条动态**：Issues 更新 30 条（新开/活跃 24、关闭 6），PR 更新 50 条（待合并 44、合并/关闭 6），无新版本发布。社区活跃度处于高位，讨论焦点集中在三条主线：**Zod 依赖解耦与安全升级**（[#2160](https://redirect.github.com/a2ui-project/a2ui/issues/2160)，14 条评论为今日之最）、**Express 提示词体积与推理延迟优化**（今日新开 PR #4421 直接响应 #3403）、以及 **Dart/Flutter 生态生产化 bug 集中暴露**。核心维护者 gspencergoog 单日提交 2 个新 PR，同时推进"decision 模型"实验栈。整体健康度良好：Issue 关闭率约为当日更新量的 20%，存量在有序消化；但 **44 个待合并 PR 形成审查管道压力**，多个 10 月末的 PR 仍处 needs review 状态。

---

## 二、版本发布

**今日无新版本发布。**

⚠️ 注意：`@a2ui/web_core@0.15.0` 与 `@a2ui/markdown-it@0.2.2` 的 peer 依赖冲突（[#4059](https://redirect.github.com/a2ui-project/a2ui/issues/4059)）尚未通过发版解决，修复 PR [#4073](https://redirect.github.com/a2ui-project/a2ui/pull/4073) 仍在审查中。

---

## 三、项目进展

今日关闭 6 个 Issue、合并/关闭 6 个 PR，项目处于 **v1.0 收尾打磨期**（#3490 携带 `v1-bug-bash` 标签，显示正在进行有组织的 v1.0 缺陷清扫）。

**Issue 关闭（架构与兼容性决策落地）**：
- [#2104](https://redirect.github.com/a2ui-project/a2ui/issues/2104)（P1）— "Server-Side Functions 与统一函数 RPC"架构提案在 10 条评论的团队讨论后关闭。该提案旨在重构 v1.0 草案中的 `wantResponse`/`actionResponse` 事件机制，是规范层面的重要决策节点。
- [#3161](https://redirect.github.com/a2ui-project/a2ui/issues/3161) — Python `a2ui-agent-sdk` 与 `a2a-sdk` 1.x 的版本钉死（`<0.4.0`）问题关闭，解除 Python 生态组合安装限制。
- [#3780](https://redirect.github.com/a2ui-project/a2ui/issues/3780) 与对应 PR [#4055](https://redirect.github.com/a2ui-project/a2ui/pull/4055) 同步关闭 — GenericBinder action closure 暴露原始 payload 的诉求闭环。
- [#3807](https://redirect.github.com/a2ui-project/a2ui/issues/3807)（P2）— Modal 被宿主 UI 层叠上下文遮蔽的 bug 关闭。
- [#2304](https://redirect.github.com/a2ui-project/a2ui/issues/2304)、[#1222](https://redirect.github.com/a2ui-project/a2ui/issues/1222) — Python SDK 版本号注入、Zod 4 升级时间表两个存量问题关闭。

**新工作进入管道（今日新开 PR，均出自 gspencergoog）**：
- [#4421](https://redirect.github.com/a2ui-project/a2ui/pull/4421) — Express 提示词去重，落地 [#3403](https://redirect.github.com/a2ui-project/a2ui/issues/3403) 的发现：共享属性描述（如 `weight`）在 70 组件目录中重复 70 次，占系统提示词 43%（约 3,700 tokens）。**这是今日对推理成本影响最大的一次推进。**
- [#4420](https://redirect.github.com/a2ui-project/a2ui/pull/4420) — Lit 渲染器蓝图文档与代码库同步。

**持续主线的可见进展**：
- **Decision 模型实验栈**（Python agent 侧零 LLM 绑定）：[#4321](https://redirect.github.com/a2ui-project/a2ui/pull/4321) 决策级联路由、[#4322](https://redirect.github.com/a2ui-project/a2ui/pull/4322) ToolPointerBinder + ADK 回调、[#4325](https://redirect.github.com/a2ui-project/a2ui/pull/4325) 交互式 playground 示例，三者构成完整的技术验证闭环。
- **跨平台一致性**：[#3917](https://redirect.github.com/a2ui-project/a2ui/pull/3917)（Web 校验 warning/info 提示）、[#3963](https://redirect.github.com/a2ui-project/a2ui/pull/3963)（Flutter `data:` 图片）、[#3788](https://redirect.github.com/a2ui-project/a2ui/pull/3788)（Flutter 语义树标题标记）等待审查。

---

## 四、社区热点

| 排名 | 条目 | 热度 | 讨论焦点 |
|---|---|---|---|
| 1 | [#2160](https://redirect.github.com/a2ui-project/a2ui/issues/2160) Zod 抽象与解耦计划 | 14 评论 / 4 👍 | `web_core` 锁定 `zod ^3.25` 阻碍升级与安全修复，需引入 Schema 抽象层 |
| 2 | [#2104](https://redirect.github.com/a2ui-project/a2ui/issues/2104) 服务端函数提案（已关闭） | 10 评论 | v1.0 ActionResponse 机制重构方向 |
| 3 | [#3257](https://redirect.github.com/a2ui-project/a2ui/issues/3257) SwiftUI Basic Catalog 样式定制 | 8 评论 | Web 有 CSS 变量、Flutter 读 ThemeData，SwiftUI 缺失对等主题化通道，平台能力对齐诉求 |
| 4 | [#1298](https://redirect.github.com/a2ui-project/a2ui/issues/1298) 三个 Web 渲染器 Image 实现不一致 | 5 评论 | 同一 A2UI 输入在 Lit/React/Angular 渲染结果不同，且与规范的默认 `fit` 值有偏差 |
| 5 | [#4059](https://redirect.github.com/a2ui-project/a2ui/issues/4059) markdown-it peer 依赖冲突 | 4 评论 | 0.15.0 用户安装即报错，为 #1766/#1930 的复发性问题 |

**背后诉求分析**：Zod 议题（#2160 + 已关闭的 #1222 + #4147）实为同一痛点——依赖锁定既挡住安全升级也阻碍企业采用；#3257 与 #1298 共同指向"**多渲染器架构的规范一致性承诺**"这一核心信任问题，是规范型项目能否被生产采用的关键。

---

## 五、Bug 与稳定性

| Issue | 严重度 | 描述 | 修复状态 |
|---|---|---|---|
| [#3404](https://redirect.github.com/a2ui-project/a2ui/issues/3404) | **P1** | Express Rule 14 强制所有 action 附加 dummy `Event("click")`，基准测试显示增加模型推理摩擦 | 待修复 |
| [#4400](https://redirect.github.com/a2ui-project/a2ui/issues/4400) | P2 | v1.0 中 `web_core` 不校验函数结果与 catalog 声明的 `returnType` 一致性，声明 `number` 可返回 `"hello"` | 待修复 |
| [#4415](https://redirect.github.com/a2ui-project/a2ui/issues/4415) | P2 | **新报**：v0.9.1 basic catalog 沿用 v0.9 的 `catalogId` 但内容已漂移（自 #3956 起），43 个示例受影响 | assigned-for-triage |
| [#4147](https://redirect.github.com/a2ui-project/a2ui/issues/4147) | 安全 | Zod 3.25.76 存在 CVE-2023-54404，修复需 4.6.6+，阻塞企业合规采用 | 与 #2160 解耦计划关联，未见 fix PR |
| [#4059](https://redirect.github.com/a2ui-project/a2ui/issues/4059) | P2 | markdown-it 0.2.2 peer 冲突导致 0.15.0 项目安装失败 | ✅ fix PR [#4073](https://redirect.github.com/a2ui-project/a2ui/pull/4073) 审查中 |
| [#4132](https://redirect.github.com/a2ui-project/a2ui/issues/4132) | P2 | 流式 `updateDataModel` 的 `value` 先于 `path` 到达时，整个数据模型被替换 | ✅ fix PR [#3930](https://redirect.github.com/a2ui-project/a2ui/pull/3930) 审查中 |
| [#4378](https://redirect.github.com/a2ui-project/a2ui/issues/4378) | P2 | Dart `json_schema_builder` 不支持 `\p{...}` Unicode 转义，拒绝合法扩展键 | 待修复 |
| [#4380](https://redirect.github.com/a2ui-project/a2ui/issues/4380) | P2 | `a2ui_core` 绑定本地函数的 `Future` 对象本身而非其解析值，绑定永不 settle | 待修复 |
| [#4188](https://redirect.github.com/a2ui-project/a2ui/issues/4188) | P2 | `json_schema_builder` 遇 `$id` 命名属性抛 TypeError，无法校验 catalog 定义 | 待修复 |
| [#1298](https://redirect.github.com/a2ui-project/a2ui/issues/1298) | P2 | 渲染器间 Image 实现不一致 | ⚠️ 自 4 月悬置，见第八节 |
| [#2570](https://redirect.github.com/a2ui-project/a2ui/issues/2570) | P2 | main 分支 evals 失败（PR #2549 引入） | ⚠️ 基础设施健康风险 |
| [#3490](https://redirect.github.com/a2ui-project/a2ui/issues/3490) | P3 | data-binding.md 将 v0.9 语法误标为"v0.9 及以后"，遗漏 v1.0 的 `@path`/`@call`/`@index` | 待修复 |

**趋势判断**：Dart 侧 bug（#4378/#4380/#4188/#4401）集中来自同一贡献者的生产实践，属深度使用暴露而非表层问题；[#4400](https://redirect.github.com/a2ui-project/a2ui/issues/4400) 的函数返回值校验缺失在 v1.0 语境下值得优先，因其触及协议校验完整性。

---

## 六、功能请求与路线图信号

结合 issue 需求与已有 PR 的对应关系，判断纳入下一版本的可能性：

- **高概率（已有实现 PR）**：
  - Express 提示词去重：[#3403](https://redirect.github.com/a2ui-project/a2ui/issues/3403) → PR [#4421](https://redirect.github.com/a2ui-project/a2ui/pull/4421)（今日新开，同方向还有新 issue [#4414](https://redirect.github.com/a2ui-project/a2ui/issues/4414)：promptSnippet 只教授当前目录实际用到的语法）——**推理延迟优化是明确路线图方向**，两个 issue 均带 `inference-latency` 标签。
  - 校验结果分级展示：[#3081](https://redirect.github.com/a2ui-project/a2ui/issues/3081) → PR [#3917](https://redirect.github.com/a2ui-project/a2ui/pull/3917)。
- **进行中的实验性路线**：decision 模型栈（#4321/#4322/#4325）提供零 LLM 的工具指针绑定，属 `experimental` 命名空间，短期不进稳定版但代表 agent 侧架构演进方向。
- **待规划**：[#4075](https://redirect.github.com/a2ui-project/a2ui/issues/4075) `ComponentCommon` 增加声明式 `visible` 属性（角色可见性/渐进披露场景，需求明确）；[#3104](https://redirect.github.com/a2ui-project/a2ui/issues/3104) 用 ProtocolCapabilities 接口替换散落的 `>= 1.0` semver 判断（技术债清理）；[#3257](https://redirect.github.com/a2ui-project/a2ui/issues/3257) SwiftUI 主题化。
- **文档路线**：RandalSchwartz 连提三项企业落地文档需求（[#4162](https://redirect.github.com/a2ui-project/a2ui/issues/4162) 表达式纯度与事务权威、[#4163](https://redirect.github.com/a2ui-project/a2ui/issues/4163) Catalog 设计最佳实践、[#4161](https://redirect.github.com/a2ui-project/a2ui/issues/4161) 未解析参数静默绕过校验），配合 PR [#3824](https://redirect.github.com/a2ui-project/a2ui/pull/3824) 的 starter app playbook，指向**降低企业采用门槛**的文档战略。

---

## 七、用户反馈摘要

从今日活跃 issue 中提炼的真实用户痛点：

1. **依赖地狱是最大安装摩擦**：zoharbabin（#4059）报告 0.15.0 项目执行 `npm install` 即冲突，这已是同类问题第三次出现（#1766、#1930）；ferponse（#3161）在 Python 侧遇到 `a2a-sdk` 版本钉死。**跨语言的版本兼容治理是用户最先碰到的墙。**
2. **安全合规阻塞企业采用**：derek-kam（#4147）直言 Zod CVE "是任何组织采用的前置条件"，呼应了 #2160 长达 4 个月的解耦讨论——社区要的不是补丁而是架构解耦。
3. **Dart/Flutter 生产深水区**：leoafarias 四连报（#4378/#4380/#4401/#4188）显示 `a2ui_core` + `json_schema_builder` 在真实 Flutter 应用中暴露 Unicode schema、Future 语义、错误路径等深层缺陷，反映 **Dart SDK 成熟度落后于 TS 侧**。
4. **性能与 token 成本敏感**：manfredsteyer（#4414）指出宏目录不需要完整语法教学；jacobsimionato 的 generative-ui-bench 基准（#3403）量化出 43% 提示词冗余——**推理成本已被用户当作核心指标度量**。
5. **平台对等性期待**：BBC6BAE9（#3257）按官方主题化文档逐平台比对后发现 SwiftUI 无对等能力，和rewkolos（#1298）的渲染器不一致观察共同表明：**"同一 A2UI 输入处处一致"的承诺尚未完全兑现**。

---

## 八、待处理积压

**长期未解决的 Issue（按悬置时长排序）**：

| Issue | 创建时间 | 悬置时长 | 说明 |
|---|---|---|---|
| [#1298](https://redirect.github.com/a2ui-project/a2ui/issues/1298) | 2026-04-28 | **约 7 个月** | 三渲染器 Image 不一致，影响规范公信力，建议优先分派 |
| [#2160](https://redirect.github.com/a2ui-project/a2ui/issues/2160) | 2026-08-03 | 约 4 个月 | Zod 解耦计划有完整设计文档（14 评论/4 👍）但未落地，关联 CVE #4147，建议明确时间表 |
| [#2570](https://redirect.github.com/a2ui-project/a2ui/issues/2570) | 2026-09-09 | 约 2.5 个月 | **main 分支 evals 持续失败**，CI 健康度风险，建议排查 |
| [#3404](https://redirect.github.com/a2ui-project/a2ui/issues/3404) | 2026-10-22 | 约 1 个月 | 唯一在列 P1，标记 size: small，具备快速修复条件 |
| [#3842](https://redirect.github.com/a2ui-project/a2ui/issues/3842) | 2026-11-02 | 约 3.5 周 | 15 个 SDK 包的一致性测试跳过审计，工程量大的系统性事项 |

**PR 审查管道**：44 个待合并 PR 中，多个 10 月末至 11 月初的 PR 长期停留 needs review：[#3787](https://redirect.github.com/a2ui-project/a2ui/pull/3787)、[#3788](https://redirect.github.com/a2ui-project/a2ui/pull/3788)、[#3824](https://redirect.github.com/a2ui-project/a2ui/pull/3824)、[#3917](https://redirect.github.com/a2ui-project/a2ui/pull/3917)、[#3930](https://redirect.github.com/a2ui-project/a2ui/pull/3930)、[#3963](https://redirect.github.com/a2ui-project/a2ui/pull/3963)（其中 #3930 阻塞 #4132 的用户可见 bug 修复）。另建议对 [#2320](https://redirect.github.com/a2ui-project/a2ui/pull/2320)（8 月开出的 "first draft"，无描述、无进展）做关闭或激活处理，保持管道信噪比。

---

*本日报基于 GitHub 公开动态数据生成，所有链接指向 a2ui-project/a2ui 仓库对应条目。*

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目动态日报

**项目**: [thesysdev/openui](https://github.com/thesysdev/openui) · **日期**: 2026-11-26 · **数据窗口**: 过去 24 小时

| 指标 | 数值 |
|---|---|
| Issue 更新 | 2（新开 1 / 关闭 1） |
| PR 更新 | 13（待合并 7 / 合并·关闭 6） |
| 版本发布 | 1（@​openuidev/server@0.5.3） |
| PR 落地率 | 6/13 ≈ 46% |
| Issue 即时关闭率 | 1/2（#1725 当天提出当天关闭） |

---

## 1. 今日速览

过去 24 小时 OpenUI 处于**高产出状态**：6 条 PR 合并/关闭并发布 1 个补丁版本，开发管线中仍有 7 条 PR 在途，吞吐健康。今日工作主线清晰——**仪表盘生成质量与端侧体验**：从 `defineDashboard` 的业务上下文 API（#1715，已发版）到提示词形态多样化（#1723）、编辑流式期间的数据保留修复（#1717）。外部社区信号正面：Commonly 项目主动申请收录，且当天即由维护者完成文档落地（#1727），显示**生态集成响应速度极快**。需要留意的是，今日所有 Issue 评论数均为 0、PR 评论数据缺失，社区互动深度仍以核心团队（AbhinRustagi、Aditya-thesys、ankit-thesys、vishxrad）驱动为主。

## 2. 版本发布

**[@​openuidev/server@0.5.3](https://github.com/thesysdev/openui/releases)** — Patch 版本

- **核心变更**：`openui.defineDashboard()` 新增 `instructions` 参数，允许以单一字符串传入业务上下文（business context），对所有用户一致，并随每次 create/edit 请求发送。服务端将其插入 config 块之后（与 `generateSystemPrompt({ cloud: true, instructions })` 的位置一致），无需调用方自行拼接。
- **对应实现**：[PR #1715](https://redirect.github.com/thesysdev/openui/pull/1715)（已合并，commit [`8b5ad9c`](https://github.com/thesysdev/openui/commit/8b5ad9c5689390c58ffaf8a29dc319107e7c92de)，作者 @​AbhinRustagi）
- **破坏性变更**：无。纯增量 API，Patch 级别。
- **迁移注意**：无需强制迁移。建议使用者尽早将品牌口径、业务术语、数据定义等背景写入 `instructions`，以提升生成仪表盘的领域准确度；配套的 Best Practices 指南在 [PR #1714](https://redirect.github.com/thesysdev/openui/pull/1714)（待合并）中跟进。

## 3. 项目进展

**已合并/关闭（6 条）**：

| PR | 类型 | 内容 |
|---|---|---|
| [#1715](https://redirect.github.com/thesysdev/openui/pull/1715) | feat(server) | `defineDashboard` 支持 `instructions` 业务上下文，已随 0.5.3 发布 |
| [#1724](https://redirect.github.com/thesysdev/openui/pull/1724) | feat(channels) | WhatsApp 富消息：列表第二行、卡片头图/页脚/照片、地图定位、深色图表、输入中指示器，大幅补齐 Cloud API 消息面覆盖 |
| [#1723](https://redirect.github.com/thesysdev/openui/pull/1723) | feat(dashboard-library) | 提示词示例改为三种不同形态，避免生成仪表盘千篇一律复刻同一布局 |
| [#1727](https://redirect.github.com/thesysdev/openui/pull/1727) | docs | 收录 Commonly 为社区项目，同步关闭 #1725 |
| [#1721](https://redirect.github.com/thesysdev/openui/pull/1721) | chore | Changesets 自动发版 PR，产出 0.5.3 |
| [#1717](https://redirect.github.com/thesysdev/openui/pull/1717) | fix | 修复编辑流式期间仪表盘退化为骨架屏的问题（见第 5 节） |

**待合并（7 条）**：[#1730](https://redirect.github.com/thesysdev/openui/pull/1730)（toolChoice "none" 单请求构建）、[#1729](https://redirect.github.com/thesysdev/openui/pull/1729)（Sources 改为对话框交互）、[#1728](https://redirect.github.com/thesysdev/openui/pull/1728)（文档 CI 修复）、[#1722](https://redirect.github.com/thesysdev/openui/pull/1722)（提示词设计规范）、[#1720](https://redirect.github.com/thesysdev/openui/pull/1720)（服务端架构重构）、[#1713](https://redirect.github.com/thesysdev/openui/pull/1713)（构建过程 feed）、[#1714](https://redirect.github.com/thesysdev/openui/pull/1714)（Best Practices 文档）。

**进展评估**：单日 6 条落地 + 1 个版本，覆盖服务端 API、渠道能力、生成质量、生态文档与发版流水线，属于**高产出日**。仪表盘生成质量方向形成完整推进链（API 层 #1715 已发版 → 提示词层 #1722/#1723 → 可视化层 #1713），WhatsApp 渠道一次性补齐 5 项消息能力，成熟度明显提升。

## 4. 社区热点

今日**无高评论/高反应条目**（Issue 评论数均为 0，PR 评论数据未采集到），互动热度偏低，但以下两件事值得关注：

- **[Issue #1725](https://redirect.github.com/thesysdev/openui/issues/1725)（已关闭，当天闭环）**：[Commonly](https://github.com/Team-Commonly/commonly)（Apache-2.0，团队与 Agent 共享 pod 的开源工作区）申请在 Integrations 与 Demos 收录。其已通过 Agent API、MCP server 和 CLI 三种方式投递 OpenUI Lang 卡片，服务端用 `@openuidev/lang-core` 解析、`@openuidev/react-lang` 渲染——诉求是**获得官方曝光位**，背后反映 OpenUI Lang 的语言/渲染分层设计已在第三方生产场景得到验证。维护者当天以 [PR #1727](https://redirect.github.com/thesysdev/openui/pull/1727) 响应，服务效率是今日最佳信号。
- **[PR #1730](https://redirect.github.com/thesysdev/openui/pull/1730)（今日新开）**：核心成员提出 `toolChoice: "none"` 单请求构建仪表盘——模型直接依据 prompt + 工具定义 + 示例输出产出完整仪表盘，跳过工具调用与脚本执行，仅作用于构建的首个请求。这是**成本/延迟方向的重要架构信号**。

## 5. Bug 与稳定性

按严重程度排列：

1. **【中 · 修复 PR 待合并】文档质量护栏失效** — [PR #1728](https://redirect.github.com/thesysdev/openui/pull/1728) 指出 `docs` 包的 lint 与 format 检查在 `main` 上失败，且无任何 CI 工作流兜底；clean install 时 `docs/package.json` 未声明 `eslint` 依赖导致 lint 根本无法运行。修复 PR（含新增 CI workflow）已开但未合入，**合并前 main 分支文档检查持续处于无保护状态**，建议优先处理。
2. **【中 · 已关闭，落地路径待确认】编辑期间数据丢失视觉回归** — [PR #1717](https://redirect.github.com/thesysdev/openui/pull/1717)：编辑打开的仪表盘时，尽管旧数据仍在，所有 KPI 与图表却退化为骨架屏，原因是渲染器在编辑期间持续传递 `isStreaming`。该 PR 状态为关闭，**建议确认修复是否已随其它变更进入主干**，防止问题残留。
3. **【低 · 已随 #1724 修复】** 图表 caption 被错误地作为顶层 `caption` 字段发送的问题，随 WhatsApp 富消息改造一并处理。

今日无崩溃类、数据损坏类报告，稳定性整体可控，问题集中在 UX 回归与工程基础设施层面。

## 6. 功能请求与路线图信号

**新功能请求**：
- [Issue #1726](https://redirect.github.com/thesysdev/openui/issues/1726)：提供内置 Angular 组件库 `@openuidev/angular-ui`。作者指出 `@openuidev/angular-lang` 已具备核心运行时（`defineComponent`、`createLibrary`、`<openui-renderer>`），`examples/app-frameworks/angular` 也演示了自定义组件路径，但 Angular 开发者缺少开箱即用的官方 UI 库。
- **判断**：`framework-ports` 包结构已存在，React 侧已有 `react-ui` 先例，Angular 对等物是合理演进方向；但**当前无关联 PR，短期内更可能进入 backlog**，而非下一个版本。

**路线图信号（从在途 PR 推断）**：
- 服务端大重构 [PR #1720](https://redirect.github.com/thesysdev/openui/pull/1720)（feature folders / 单一构建 / Autofix 前移至客户端），堆叠于 #1707 之上，是为后续功能铺路的结构性投入。
- 生成质量持续加码：#1722（提示词 +3.4k 字符设计规范）+ #1713（构建 feed 可视化）。
- #1730（单请求生成）与 #1729（Sources 对话框化）具备成为下一个 minor 版本亮点的潜质。

## 7. 用户反馈摘要

（今日两条 Issue 均无评论互动，反馈提炼自 Issue 正文）

- **生态采用 · 正面**：Commonly 的申请材料展示了完整集成链路——Agent 侧三种投递通道（Agent API / MCP server / CLI）+ 服务端 `lang-core` 解析 + `react-lang` 渲染。这验证了 OpenUI「语言 + 渲染器」分层的**第三方可用性**，也是今日最有分量的用户侧信号。
- **框架缺口 · 痛点**：Angular 开发者（vipulcodess）明确反馈「核心运行时齐全，但没有内置组件库」，必须参照示例手写组件才能拼出完整界面。这是**非 React 框架用户的典型落差体验**，与 React 生态的成熟度形成明显反差，与 #1726 的诉求互为印证。

## 8. 待处理积压

本窗口内**未发现长期（>30 天）未响应条目**——所有活跃条目均在 24 小时内有更新，整体积压状况良好。但以下事项建议维护者近期关注：

1. **[Issue #1726](https://redirect.github.com/thesysdev/openui/issues/1726) 待 triage**：昨日新开、尚无维护者回复，建议尽快给出意向（官方实现 / 接受社区 PR / 暂缓），避免框架用户流失印象。
2. **堆叠 PR 链待 retarget**：[#1714](https://redirect.github.com/thesysdev/openui/pull/1714) 堆叠于已合并的 #1715，需按作者说明 retarget 至 `main`；[#1720](https://redirect.github.com/thesysdev/openui/pull/1720) 依赖 #1707、[#1713](https://redirect.github.com/thesysdev/openui/pull/1713) 跟随 #1709——需关注父 PR 推进节奏，防止链式阻塞拉长合并周期。
3. **[#1728](https://redirect.github.com/thesysdev/openui/pull/1728) 建议优先合入**：文档 CI 属于低成本、即时收益的「护栏」型修复。
4. **[#1717](https://redirect.github.com/thesysdev/openui/pull/1717) 状态确认**：关闭但未明确合并，需验证流式编辑修复是否实际生效于主干。

---

*本报告基于 2026-11-26 GitHub 数据快照生成；PR 评论数据存在缺失，社区互动分析以 Issue 数据为准。*

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render 项目动态日报

**日期**：2026-11-26 ｜ **仓库**：[vercel-labs/json-render](https://github.com/vercel-labs/json-render)

| 指标 | 数值（近 24h） |
|---|---|
| Issues 更新 | 1（新开 1 / 关闭 0） |
| PRs 更新 | 0（合并 0 / 关闭 0） |
| 新版本发布 | 0 |
| 新 Issue 评论 / 👍 | 0 / 0 |

---

## 1. 今日速览

今日项目整体活跃度**偏低**，处于典型的平稳维护期。过去 24 小时内唯一的动态来自社区贡献者 peterostrander2 新开的 Issue [#508](https://redirect.github.com/vercel-labs/json-render/issues/508)——一份针对仓库内 2 个 Agent Skills 的编写规范审计报告。PR 侧无任何新增、合并或关闭动作，代码库无实质推进；Release 通道亦无新版本发布。无 Bug、崩溃或回归报告，稳定性信号中性偏正面。综合评估：项目健康度稳定，今日互动以"文档/规范质量"类贡献为主，缺少功能演进信号。

---

## 2. 项目进展

- **PR 动态（24h）**：0 条。无待合并 PR 更新，无合并或关闭记录，项目代码基线维持不变。
- **隐性进展信号**：从 #508 的审计对象可推断，仓库近期已引入 Agent Skills 资产（如 `json-render-core` skill），且已有外部社区成员开始主动审计这些新增资产的规范性——说明项目在"AI 代理可用性"维度上已产生真实的生态触达，尽管今日无代码层面的量化进展。

---

## 3. 社区热点

本期唯一活跃条目：

**[#508 · Skill authoring audit: suggested fixes for 2 skills](https://redirect.github.com/vercel-labs/json-render/issues/508)**
作者：peterostrander2 ｜ 创建/更新：2026-11-25 ｜ 评论：0 ｜ 👍：0 ｜ 状态：OPEN

- **内容**：对照 [Anthropic Agent Skills 编写最佳实践](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)，对仓库内已安装的 2 个 skill 进行审计（建议性质，行号以被审计副本为准）。涉及 skill 之一为 `json-render-core`，核心建议包括补充 `"npm install @​json-render/co..."` 等安装指引（摘要截断）。
- **诉求分析**：这是一类典型的"AI 可读文档质量"诉求。随着越来越多开发者通过 AI 编码代理消费 json-render，SKILL.md 类资产是否包含完整的依赖安装步骤，会直接影响代理的调用成功率。审计者的隐含期待是：维护者补齐 skill 中的关键上下文（安装命令、使用边界等）。
- **热度**：目前 0 评论、0 反应，处于"新开待响应"状态，尚未形成讨论氛围，属单点信号而非热点。

---

## 4. Bug 与稳定性

- 本期**无新增 Bug、崩溃或回归报告**，严重程度队列为空。
- 无对应 fix PR 需求，24h 内亦无稳定性相关 Issue 被关闭。
- 结论：本报告期内无负面稳定性信号，无需维护者介入的紧急事项。

---

## 5. 功能请求与路线图信号

- **#508 属文档/规范改进，而非典型功能请求**，但可作为下一阶段维护方向的参考信号：
  - 为 skill 补充 npm scoped 包安装说明（`@json-render/co...`）→ 属**低成本、高收益**的文档修复，不涉及破坏性变更；若维护者采纳，大概率以独立 docs PR 形式快速落地。
  - 当前**无对应 PR 存在**，纳入"下一版本"的判断依据仅 issue 本身——建议标记为 `good first issue` 或 `documentation` 以吸引社区认领。
- 本期无其他功能请求或路线图讨论，对下一版本内容预测的置信度较低。

---

## 6. 用户反馈摘要

本期可提取的真实反馈极少（1 条 Issue、0 条评论），但仍有两点值得注意：

- **使用场景信号**：有用户（或其 AI 代理）正通过 Agent Skills 渠道消费 json-render，证明 skill 文件已成为项目的实际使用入口之一，而非摆设。
- **痛点**：skill 文档未完全遵循官方最佳实践（如缺少安装步骤），可能导致下游代理在执行时缺失关键上下文。
- **情绪基调**：建设性、审计型反馈，非抱怨型，社区态度整体积极。

---

## 7. 待处理积压

- **[#508](https://redirect.github.com/vercel-labs/json-render/issues/508)**（2026-11-25 提交）：至今 0 评论、无维护者回应，处于**待分诊**状态。建议维护者尽快确认两点：① 审计建议是否采纳；② 是否邀请提交者附带 PR。该 issue 虽非紧急，但响应速度会影响"社区审计型贡献者"的留存意愿。
- **数据局限说明**：本期数据窗口仅覆盖 24 小时，无法呈现更长期的未响应 Issue/PR 全量画像。建议维护者另行开展一次基于 label（如 `needs-triage`）和 issue 寿命的全量积压梳理。

---

*数据来源：GitHub API（vercel-labs/json-render），统计区间为 2026-11-25 至 2026-11-26。本报告仅基于所示数据生成，涉及动机与趋势的表述为分析推断。*

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报

**日期：** 2026-11-26 · **数据来源：** [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)

**核心数据：** PR 更新 19 条（新开 5 / 关闭 7 / 待合并 12）｜Issue 更新 1 条｜新版本发布 0 个

---

## 1. 今日速览

过去 24 小时 CopilotKit 呈现**高 PR 吞吐、低 Issue 流入**的典型内驱开发形态：19 条 PR 更新中 7 条已关闭（关闭率约 37%），其中 ataibarkai 一人完成 5 条"当日创建、当日关闭"的高速迭代；Issue 端仅 1 条新增，且当天即出现配套修复 PR。项目当前处于**双线推进**阶段：一是文档站（docs.copilotkit.ai）大规模体验与无障碍重构，二是核心能力扩展——WebMCP 默认暴露前端工具（#8577）、消息渠道布局（#8573）、Intelligence 运行时可靠性修复（#8574）。本日无新版本发布，主线版本停留在 1.90.x（示例启动器已升至 1.90.2）。需警惕的信号是 Svelte SDK 社区 PR（#5905）已挂起约 140 天无实质回应。

---

## 2. 版本发布

本日无新 Release。版本上下文参考：#8568 将集成示例启动器从 `@copilotkit/*` 1.79.0 升至 1.90.2，以启用 1.90.0 引入的 `oss.runtime.agent_identified` 遥测。

---

## 3. 项目进展

今日关闭/落地的 7 条 PR（注：数据未区分 merged 与 rejected，但内容均为完成态工作）：

| PR | 内容 | 意义 |
|---|---|---|
| [#8411](https://redirect.github.com/CopilotKit/CopilotKit/pull/8411) | A2UI 动态演示统一采用 Vantage Threads 人设、销售数据集与仪表盘组合规则；12 个 React 演示与 Angular 声明式路由共享前端数据集 | 挂起 10 天的大型 showcase 数据整合落地，显著提升演示一致性 |
| [#8571](https://redirect.github.com/CopilotKit/CopilotKit/pull/8571) | Quickstart 菜单支持从前端（Frontend）启动，此前仅支持 agent 框架入口 | 文档上手路径覆盖前端优先的用户群 |
| [#8570](https://redirect.github.com/CopilotKit/CopilotKit/pull/8570) | 修复点击 Intelligence 等入口时丢失读者的技术栈选择（React + 框架记忆错乱） | 消除多栈文档的核心导航缺陷 |
| [#8572](https://redirect.github.com/CopilotKit/CopilotKit/pull/8572) | 为 `role="combobox"` 的 quickstart 按钮补充屏幕阅读器可访问名称 | 无障碍 |
| [#8575](https://redirect.github.com/CopilotKit/CopilotKit/pull/8575) | 栈选择器出现/变化时播放视觉提示（丁香紫渐隐 + 环形 ping ×2） | 引导用户发现关键控件 |
| [#8576](https://redirect.github.com/CopilotKit/CopilotKit/pull/8576) | 触屏 quickstart 菜单行高从 36px 增至 44px 触控目标（对齐 PRODUCT.md 无障碍规范） | 无障碍 |
| [#8568](https://redirect.github.com/CopilotKit/CopilotKit/pull/8568) | 集成启动器升版 1.90.2，激活 agent 框架识别遥测 | 官方获得按框架的数据洞察基础 |

**整体判断：** 本日落地工作以文档站体验/无障碍打磨为主（7 条中 5 条），叠加一条展示层数据整合。真正改变产品形态的工作仍在开放中：tylerslaton 的 7-PR 文档栈（#8432 为栈底）、WebMCP 默认化（#8577）、Node 22 socket 重试（#8574）。单日净推进属于**中等偏稳**——广度大（文档、安全、运行时、WebMCP 四条线）但尚未有版本级收口。

---

## 4. 社区热点

本日讨论量整体偏低（多数 PR 评论数未披露），热点集中在：

- **Issue [#8565](https://redirect.github.com/CopilotKit/CopilotKit/issues/8565)**（1 条评论，本日唯一活跃 Issue）：A2UI Vue `vueBasicCatalog` 中 `TextField` 宽度溢出容器 16px。作者 justin-john 给出了根因级描述（`width: 100%` 叠加每侧 8px margin），并在**同日提交修复 PR [#8567](https://redirect.github.com/CopilotKit/CopilotKit/pull/8567)**。诉求清晰：Vue 端 A2UI 基础组件目录需要达到与 React 端一致的布局质量——这是 A2UI 早期采用者的典型深度 QA 反馈。
- **PR [#8577](https://redirect.github.com/CopilotKit/CopilotKit/pull/8577)**（AlemTuzlak，今日新开）：所有 CopilotKit 前端工具默认注册为 WebMCP 工具，新增 `defaultWebMCPTools` 配置面（`CopilotKitCore`、`setDefaultWebMCPTools()` 等）。这是涉及核心 API 语义的架构级变更（"任何兼容的浏览器 agent 都能调用站内工具"），预计成为评审讨论焦点。
- **PR [#8432](https://redirect.github.com/CopilotKit/CopilotKit/pull/8432)**：作为 7-PR 文档栈的栈底，承载整栈的合并顺序，是当前文档重构线的评审枢纽。

---

## 5. Bug 与稳定性（按严重程度排列）

1. **【较高 · 安全】示例端点未鉴权** — `POST /api/probe-threads`（langgraph-python/fastapi/typescript 三个集成共用）无调用方认证，无 `Authorization` 的请求即可触发线程清理（关联旧 Issue [#8269](https://redirect.github.com/CopilotKit/CopilotKit/issues/8269)）。
   ✅ 修复 PR：[#8526](https://redirect.github.com/CopilotKit/CopilotKit/pull/8526)（egg119，已挂 5 天未合并，**建议优先处理**）。属示例/集成层而非核心 runtime，故未评最高级。
2. **【中高 · 生产可靠性】Node 22 下 Intelligence socket 握手失败无重试** — 客户 runtime 每个 run 持有一条到 Intelligence server 的 socket，服务重启或网关返回 502/503/504/401、拒绝连接时直接失败。
   ✅ 修复 PR：[#8574](https://redirect.github.com/CopilotKit/CopilotKit/pull/8574)（jpr5，今日新开）。
3. **【低 · UI】A2UI Vue TextField 溢出 16px** — 右缘超出表面 8px，因 activity renderer `overflow: auto` 可滚动而部分掩盖。
   ✅ 修复 PR：[#8567](https://redirect.github.com/CopilotKit/CopilotKit/pull/8567)（与 Issue 同作者，issue→fix 当日闭环）。
4. **【低 · 文档】Python quickstart 上手失败** — 缺 `azure-identity` 依赖（即使选 OpenAI 也在导入）、缺 `single_user=True` 与 fail-closed `authorization_scope_resolver` 示例：[#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309)（修复 PR 开放中，已挂 16 天）。
5. **【低 · 文档】站内搜索排序错乱** — 搜 "mastra" 时 Intelligence 页排在 Mastra 文档之上，"human in the loop" 完全搜不到 HITL 页：[#8432](https://redirect.github.com/CopilotKit/CopilotKit/pull/8432)（修复中）。

---

## 6. 功能请求与路线图信号

- **消息渠道扩张（强信号）**：[#8573](https://redirect.github.com/CopilotKit/CopilotKit/pull/8573) 在 docs 站新增 **iMessage / WhatsApp / SMS / RCS** 四个 early-access 页面，每页内嵌 25 分钟演示预约（demo booker）。文档先行 + "early-access" 措辞表明 agent 部署向消息渠道延伸是明确的下一步产品方向，后续版本很可能配套 SDK 能力。
- **WebMCP 互操作战略**：[#8577](https://redirect.github.com/CopilotKit/CopilotKit/pull/8577) 将前端工具默认暴露给任何兼容浏览器 agent——CopilotKit 正在把自己定位为 Web 上的 agent 工具提供方，而非封闭 SDK。大概率进入下个 minor 版本。
- **框架数据驱动投入**：#8568 的遥测升版（`agent_identified`）意味着官方将开始量化各 agent 框架的真实使用占比，为路线图提供依据；配套的 [#8569](https://redirect.github.com/CopilotKit/CopilotKit/pull/8569)（Agno 共享状态文档补全）显示 Agno 生态受到持续照顾。
- **Svelte 社区需求（未决）**：[#5905](https://redirect.github.com/CopilotKit/CopilotKit/pull/5905) 提供完整 Svelte 5 SDK（独立 `community/svelte/` 包结构），需求真实但无维护者表态，是否纳入官方路线图仍不明朗。

---

## 7. 用户反馈摘要

- **A2UI Vue 早期采用者（justin-john）**：正面信号——反馈细致到 CSS 根因、自带修复 PR、响应速度快；负面痛点是 Vue basic catalog 的基础布局质量（margin + width 组合这类低级错误），提示 Vue 端组件缺少与 React 端同等的视觉回归覆盖。
- **生产环境客户（#8574 场景）**：以 Node 22 + 每 run 单 socket 长连 Intelligence server 的企业级用法，在服务重启/网关异常时遭遇硬失败——可靠性诉求强烈，属真实生产反馈。
- **Python 新用户（#8309 场景）**：照 quickstart 操作仍报错（缺依赖、缺安全配置示例），上手摩擦点集中在安装完整性与安全默认值示范。
- **文档读者（#8432 / #8570 场景）**：搜索不准、栈选择丢失等细节问题持续削弱文档可信度，这是本日关闭/在办 PR 集中回应的痛点。

---

## 8. 待处理积压

| 项目 | 挂起时长 | 状态与建议 |
|---|---|---|
| [PR #5905](https://redirect.github.com/CopilotKit/CopilotKit/pull/5905) Svelte SDK | **约 140 天**（2026-07-09 至今） | 本日最大积压。社区完整贡献长期无回应，建议维护者明确接受/搁置决策，避免贡献者流失 |
| [PR #8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309) Python quickstart 修复 | 16 天 | 含安全配置示范，且直接阻断新用户上手，优先级应高于其在文档栈中的位置 |
| [PR #8432](https://redirect.github.com/CopilotKit/CopilotKit/pull/8432) 搜索排序 | 9 天 | 7-PR 文档栈栈底，阻塞其上 6 个 PR 的合并顺序，是整条文档线的咽喉 |
| [PR #8526](https://redirect.github.com/CopilotKit/CopilotKit/pull/8526) 鉴权修复 | 5 天 | 安全相关，建议尽快合并 |
| [PR #8478](https://redirect.github.com/CopilotKit/CopilotKit/pull/8478) renovate 依赖更新 | 8 天 | 例行维护，无风险，可顺手清理 |

> 注：[#8483](https://redirect.github.com/CopilotKit/CopilotKit/pull/8483) 标注 "do not merge"，是整栈 Railway 预览专用 PR，不计入积压。

---

**健康度小结：** 开发动能充足（日关闭 7 PR、多线并行、issue→fix 当日闭环），文档与无障碍投入进入收尾密集期；短板在于社区侧响应（Svelte PR 长期沉默、安全修复滞留 5 天）与版本发布节奏放缓。下个观察点：7-PR 文档栈能否在近期整栈落地，以及 #8577 WebMCP 默认化是否伴随 minor 版本发布。

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*