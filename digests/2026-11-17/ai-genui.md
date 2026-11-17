# 生成式 UI 生态日报 2026-11-17

> Issues: 25 | PRs: 102 | 覆盖项目: 4 个 | 生成时间: 2026-11-17 07:08 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告

**数据周期**：2026-11-17（过去 24 小时）｜**覆盖项目**：a2ui、OpenUI、json-render、CopilotKit

---

## 1. 生态全景

生成式 UI 生态当前呈现**“多端扩张”与“生产落地”双线并进**的格局：同一天内，Kotlin/JVM PoC（a2ui）、.NET Blazor 集成（OpenUI）、Android Compose 目录（json-render）、Slack/Teams 前端矩阵均在推进，多平台渲染已从口号变为实际工程投入。企业级采用开始兑现——a2ui 已被 Coolblue 用于生产环境，AI 搜索公司 Parallel 主动为 json-render 贡献集成——但供应链安全、自托管、静默失败等生产级痛点同步集中暴露。同时生态内出现**分层互操作迹象**：CopilotKit 在其仓库中维护 A2UI playground 并开展跨框架 a11y 测试，“规范层 × 框架层”的协作结构初现雏形。整体判断：赛道已跨过概念验证期，进入以**一致性、可靠性与交付节奏**为核心竞争力的工程化阶段。

---

## 2. 各项目活跃度对比

| 项目 | Issue 活动（24h） | PR 活动（24h） | Release | 当日标志性事件 |
|---|---|---|---|---|
| **a2ui** | 21 条（16 活跃 / 5 关闭，含 2 P1） | 49 条（37 待合并 / 12 完成） | 0（Dart/Python/Swift 发版在途，**npm 通道受阻**） | Kotlin 三 PoC；ReDoS 修复待审 3 天 |
| **CopilotKit** | 3 条（1 活跃 / 2 关闭） | 36 条（12 待合并 / 24 完成） | 0（**3 条 BREAKING PR** 在途） | 两个长期 Issue 闭环；AEO 评估工作流上线 |
| **OpenUI** | 1 条持续讨论（3 评论） | 15 条（10 待合并 / 5 完成） | **3 个 patch 版本** | intelligent-ui-library 新包；.NET Blazor 集成 |
| **json-render** | 0 条 | 2 条（新开待审，均外部贡献） | 0 | Parallel 搜索集成；Android 43 组件目录 |

> 注：绝对活动量受仓库形态影响（a2ui 为多语言多包 monorepo，CI/发版类 PR 天然更多），不宜直接等同于社区热度。

---

## 3. 共同关注的功能方向

**① 跨平台 / 多语言渲染矩阵（4/4 项目命中）**
- a2ui：Kotlin/JVM 三个 PoC（#4266-4268）评估第五语言；已有 TS/Dart/Python/Swift 四 SDK
- OpenUI：社区贡献 .NET Blazor 渲染器 + MudBlazor 集成（#1658，NuGet 已发 1.1.0）
- json-render：Jetpack Compose Material 3 Expressive 目录，43 个组件（#482）
- CopilotKit：React/Vue/Angular/RN/Slack/Teams 六前端文档矩阵（#8429）+ 三框架 a11y 测试（#8406）

**② 客户端本地计算，降低模型调用成本**
- OpenUI #1653：`@functions` + `$variables` 让答案在客户端本地计算、无需回传模型
- CopilotKit #8423：稳定 prompt 前缀以命中模型提供商缓存，优化多轮 token 成本
- a2ui #4251：跨四 SDK 修复 DataBinding/FunctionCall 响应式解析（绑定本身即客户端执行层）

**③ 流式渲染与异步状态机健壮性**
- OpenUI #1644：渲染器 pending 态提前挂载，消除流式生成期空白
- CopilotKit #3644：AG-UI 事件流 tool call 交错导致重复消息 ID（已修复闭环）
- a2ui #4240：时序敏感的动态表单状态流转误报 EXPRESSION_ERROR

**④ 企业级生产诉求：供应链安全与自托管**
- a2ui #4192：Coolblue 生产用户因安全公告请求 zod 临时方案，npm 发布受阻放大矛盾
- OpenUI #1635：自托管 Postgres / 数据主权争议（直指商业模式）
- CopilotKit #7826 自托管 Intelligence 可靠性大修、#8118 安全语义 BREAKING、#8309 Python 示例安全补强

**⑤ 模型直接产出结构化 UI（而非纯文本流）**
- CopilotKit #3748：LangGraph artifact 透传诉求（挂起 7 个月仍无 PR，需求旺盛）
- OpenUI：intelligent-ui-library 让模型组合出交互式答案；图表/dashboard 是高频落地载体（#1639/#1651）

---

## 4. 差异化定位分析

| 维度 | a2ui | OpenUI | json-render | CopilotKit |
|---|---|---|---|---|
| **核心定位** | 规范驱动的跨语言 UI 协议 + 多 SDK 实现 | AI 原生渲染 DSL（OpenUI Lang）+ React 组件库 | 轻量 JSON 渲染器 + 示例载体 | 全栈 agent 前端框架 + 商业平台 |
| **技术路线** | spec-first、conformance 测试版本化（#4242）、四 SDK 一致性 | 自有 DSL + React 组件，向“智能答案层”演进 | Web 优先，社区以 opt-in 目录方式补齐跨端 | AG-UI 协议、六前端矩阵、Intelligence 运行时、2.0 分支双线 |
| **目标用户** | 需多平台一致渲染的企业与 SDK 开发者 | AI 应用前端开发者（dashboard 场景高频） | 前端/全栈开发者、AI 搜索厂商 | 企业级 agent 应用团队 |
| **商业模式** | 开源（发版治理建设中） | 云端 dashboard API（已现自托管争议） | Vercel Labs 实验项目 | 商业化最成熟 |
| **当前阶段** | v0.x → v1.0 规范硬化期 | 0.18.x 快速上升期 | 早期 / 低频迭代 | 2.0.0 并行开发期 |

**关键差异点**：a2ui 的核心资产是**规范一致性**（跨 SDK conformance），但代价是多渲染端保真度 Bug 聚类（今日 Swift ×3、Dart ×2）；OpenUI 是唯一向“模型可组合答案层”做架构跃迁的项目，也是唯一今日有发版的项目；json-render 定位最轻，靠示例吸引生态贡献；CopilotKit 覆盖面与工程治理最成熟（外部贡献有专用 CI 验证通道 #8140），且正在将 A2UI 纳入其支持体系。

---

## 5. 社区热度与成熟度

**热度排序（按当日活动量）**：a2ui > CopilotKit > OpenUI > json-render

- **a2ui**：绝对量最高，贡献结构最多元——维护者战略投入 + 深度贡献者单日 3 组 bug→fix 配对（karolkulesza，#4256/#4259/#4263）+ 企业用户直接发声。**风险**：37 个待合并 PR（中位等待 3-5 天、最长 15 天）是四者中最重的 Review 积压；npm 发布权限受阻是最突出的交付风险。
- **CopilotKit**：吞吐健康（合并:待合并 = 2:1），外部贡献“提交→专用 CI 验证→合入”闭环当日完整走通。**短板**：#3748 挂起 7 个月+ 无决策，3 条 BREAKING PR 积压 18 天未定版。
- **OpenUI**：响应速度四者最快——issue→fix 仅 2-3 天，两个高危静默错误 Bug 当天出修复 PR。**短板**：社区修复 PR 悬置近 4 个月（#862/#820），存在挫伤外部贡献者的风险。
- **json-render**：低活跃（日报自评 2/5 星），但贡献者画像优质（AI 搜索公司 + 跨端开发者），当前处于观察期，48 小时内无官方响应恐流失贡献者。

**成熟度光谱**：CopilotKit（商业化成熟）→ a2ui（规范硬化/工程化中）→ OpenUI（快速成长期）→ json-render（早期实验）

---

## 6. 值得关注的趋势信号

**① 多端一致渲染成为下一轮竞争焦点。** 四个不相关项目同日出现 Kotlin/.NET/Android/Slack-Teams 动作，“Web 优先假设”正在被打破（a2ui #4238 的 React Native 不可用即是反面案例）。选型时应重点考察目标项目非 Web 端成熟度与 conformance 测试体系。

**② UI 层正从“渲染层”演变为“计算执行层”。** OpenUI 的客户端 `@functions` 与 CopilotKit 的 prompt 缓存优化共同指向减少模型回传——生成式 UI 开始分担推理成本，这对高频交互场景的延迟与 token 账单有直接影响。

**③ 企业采用曲线到来，供应链治理成为分水岭。** Coolblue 的安全公告诉求撞上 a2ui 的 npm 通道阻塞、CopilotKit 连发安全相关修复，均说明：**引入此类依赖前，应审查项目的发版权限治理、依赖锁定与响应 SLA**，而非仅看功能。

**④ “静默失败”是当前生态共同的质量公敌。** 三家同日暴露同类问题：OpenUI 序列化静默算错（#1636/#1637）、a2ui Swift 双向绑定静默丢写（#4256）、CopilotKit gpt-6 参数静默丢弃（#8363）。显式失败与可观测性将成质量分水岭，建议开发者在集成层自建 round-trip 一致性校验。

**⑤ AI 搜索生态主动拥抱生成式 UI，开源营销进入 AEO 时代。** Parallel 为 json-render 贡献源卡片集成；CopilotKit 上线 AEO 工作流（用联网 agent 评估自身被推荐频率）。生成式 UI 正成为 AI 答案产品的标配输出层，项目的“被发现”渠道也从 SEO 转向 agent 推荐。

**⑥ 生态分层与互操作萌芽。** CopilotKit 在仓库内维护 A2UI playground（#8430）并做 A2UI 跨框架 a11y 测试（#8406），预示“协议× 框架× 组件库”的分层结构可能形成——规范层与实现层解耦将降低厂商锁定风险。

**选型速查**：需跨语言一致渲染 → 关注 a2ui（但等 npm 通道恢复）；需 React 快速集成 → OpenUI 迭代最快（警惕序列化静默陷阱）；轻量 JSON 渲染 → json-render（评估维护节奏）；企业级全栈 agent → CopilotKit 最成熟（需提前准备 3 条 BREAKING 迁移）。

---

*数据来源：四个项目 GitHub 仓库 2026-11-17 过去 24 小时窗口的 Issue/PR/Release 活动。*

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目日报 — 2026-11-17

---

## 1. 今日速览

a2ui 今日保持**高度活跃**：过去 24 小时 Issue 更新 21 条（新开/活跃 16、关闭 5），PR 更新 49 条（待合并 37、合并/关闭 12），无新版本发布。三条主线值得重点关注：其一，核心维护者 jacobsimionato 单日连开 **3 个 Kotlin/JVM 方向 PoC PR**（[#4266](https://redirect.github.com/a2ui-project/a2ui/pull/4266)、[#4267](https://redirect.github.com/a2ui-project/a2ui/pull/4267)、[#4268](https://redirect.github.com/a2ui-project/a2ui/pull/4268)），项目正在系统性评估平台扩展；其二，发版准备 PR [#4258](https://redirect.github.com/a2ui-project/a2ui/pull/4258) 显示 Dart/Python/Swift 多包新版本在途，但 **npm 发布通道因权限受阻**；其三，贡献者 karolkulesza 呈现"当日报 Bug + 当日提 Fix"的高质量节奏（3 组配对），但 main 分支出现一次 E2E drift CI 失败（[#4262](https://redirect.github.com/a2ui-project/a2ui/issues/4262)）待分诊。整体判断：**贡献动能强劲、修复响应迅速，但 Review 积压（37 个待合并 PR）与发布通道阻塞是需要关注的健康度风险点**。

---

## 2. 版本发布

**今日无新版本发布。**

但 [PR #4258](https://redirect.github.com/a2ui-project/a2ui/pull/4258)（chore(release)，2026-11-16 提出）正在准备下一轮发版：

| 语言/平台 | 待发版本 |
|---|---|
| Dart | 0.8.0 / 0.4.0 |
| Python | 0.7.0 / 0.12.0 / 0.4.0 |
| Swift | 0.11.0 |

⚠️ **迁移注意事项**：该 PR 明确说明 **"skipping npm while publishing access is blocked"** —— npm 侧 TypeScript 包（`@a2ui/react`、`@a2ui/web_core` 等）因发布权限受阻将**跳过本轮发版**。对于在 npm 生态中依赖 a2ui 的企业用户（如 [#4192](https://redirect.github.com/a2ui-project/a2ui/issues/4192) 中等待 zod 依赖修复的用户），这意味着安全修复与功能更新的到货时间将继续延后，属于当前最突出的交付风险。

---

## 3. 项目进展

**今日关闭 5 个 Issue（含 2 个 P1），12 个 PR 完成合并/关闭**，整体稳步向前：

**已关闭的 Issue（对应的修复应已随合并 PR 落地）：**
- [#3985](https://redirect.github.com/a2ui-project/a2ui/issues/3985) **[P1]** README.md 全面翻新 —— 仓库门面现代化完成（截图、Demo 链接、价值主张、平台支持矩阵）
- [#4224](https://redirect.github.com/a2ui-project/a2ui/issues/4224) **[P1]** Flutter CI beta 通道 76 个 `specify_nonobvious_local_variable_types` 告警导致 5 个 beta job 失败 —— 已修复，CI 恢复
- [#4173](https://redirect.github.com/a2ui-project/a2ui/issues/4173) web_core 严格校验放行了 12 个应判非法的 function call 用例 —— 校验对齐 v0.9.1 规范
- [#3447](https://redirect.github.com/a2ui-project/a2ui/issues/3447) React 文档引用不存在的 `<A2UISurface>` / `useA2UI()` —— 文档纠错（v1-bug-bash 产出）
- [#3949](https://redirect.github.com/a2ui-project/a2ui/issues/3949) Angular 多 spec 测试环境下 NG0205 注入器销毁崩溃 —— 已修复

**在途的重要推进（待合并）：**
- **跨 SDK 一致性**：[#4251](https://redirect.github.com/a2ui-project/a2ui/pull/4251) 在全部四个 Core SDK（TS/Dart/Python/Swift）中修复直接以 `DataBinding`/`FunctionCall` 作为属性 schema 时的响应式解析，直接解决挂起 16 天的 [#3809](https://redirect.github.com/a2ui-project/a2ui/issues/3809)；此前的社区单独修复 [#4249](https://redirect.github.com/a2ui-project/a2ui/pull/4249) 已被其取代关闭
- **Kotlin 战略评估**：[#4266](https://redirect.github.com/a2ui-project/a2ui/pull/4266)（core/agent SDK API 骨架，1:1 映射 blueprint 文档的 Option 3 架构评估）、[#4267](https://redirect.github.com/a2ui-project/a2ui/pull/4267)（legacy Express 升级 v1.0）、[#4268](https://redirect.github.com/a2ui-project/a2ui/pull/4268)（独立 v1.0 Express 模块）三管齐下
- **仓库结构演进**：[#4150](https://redirect.github.com/a2ui-project/a2ui/pull/4150) 将 v0.9/v0.9.1 目录统一迁入 `catalogs/`（对应 [#2700](https://redirect.github.com/a2ui-project/a2ui/issues/2700)）
- **Agent SDK 能力**：[#4184](https://redirect.github.com/a2ui-project/a2ui/pull/4184) 为 Express 推理格式补齐 `oneOf/anyOf/allOf/本地 $defs` 复合 schema 支持；本地决策模型推理格式 [PR #3339](https://redirect.github.com/a2ui-project/a2ui/pull/3339) 已关闭，该方向告一段落
- **规范测试硬化**：[#4242](https://redirect.github.com/a2ui-project/a2ui/pull/4242) 为 23 个无版本标注的 conformance 用例打标并生成 v1.0 副本

---

## 4. 社区热点

**评论数最多的讨论：**

| 条目 | 评论 | 热度来源 |
|---|---|---|
| [#3809](https://redirect.github.com/a2ui-project/a2ui/issues/3809) isDynamicDef 排除 DataBinding/FunctionCall | 3 | 挂起 16 天的 P2，社区修复（#4249）与官方跨 SDK 修复（#4251）同场竞争，今日由后者收敛 |
| [#4192](https://redirect.github.com/a2ui-project/a2ui/issues/4192) zod 安全临时方案 | 3 | 企业用户安全诉求（见下） |
| [#4230](https://redirect.github.com/a2ui-project/a2ui/issues/4230) 导出 coerceToString | 2 | Dart 生态用户 API 开放诉求 |

**热点分析：**

- **[#4192](https://redirect.github.com/a2ui-project/a2ui/issues/4192) 是今日最有分量的用户声音**：来自 Coolblue 的工程师反馈其公司在**共享聊天包中生产使用** `@a2ui/react` 与 `@a2ui/web_core`，因 GHSA-mrhx-c7xc-m3w5 安全公告，请求临时方案（依赖 zod ^4.6.6 并从 `zod/v3` 导入）。背后诉求是**企业级供应链安全 + 可预期的发布节奏**，叠加 npm 发布受阻，矛盾被放大。
- **karolkulesza 的一日冲刺**：单日报告 [#4263](https://redirect.github.com/a2ui-project/a2ui/issues/4263)、[#4259](https://redirect.github.com/a2ui-project/a2ui/issues/4259)、[#4256](https://redirect.github.com/a2ui-project/a2ui/issues/4256) 三个 Swift/Dart 渲染保真度 Bug，且前两个**当天即提交修复 PR**（[#4264](https://redirect.github.com/a2ui-project/a2ui/pull/4264)、[#4260](https://redirect.github.com/a2ui-project/a2ui/pull/4260)），是典型的深度贡献者行为模式。
- **[#4262](https://redirect.github.com/a2ui-project/a2ui/issues/4262)** E2E drift 在 main 分支 commit `1cbef31` 上失败，由 CI 机器人自动建单，目前零评论待分诊——与 karolkulesza 的 Swift 修复 PR 恰好同 commit，**可能存在关联回归，建议优先核查**。

---

## 5. Bug 与稳定性

按严重程度排列（✅ = 已有修复 PR，❌ = 暂无）：

| 严重度 | Issue | 描述 | Fix | 状态 |
|---|---|---|---|---|
| **高（潜在 DoS）** | [#4236](https://redirect.github.com/a2ui-project/a2ui/issues/4236) | `analyzeRegex` 接受 `(a?){1000}a{1000}`，导致渲染器在 256 字符输入上**永久挂起**（ReDoS 类风险） | [#4237](https://redirect.github.com/a2ui-project/a2ui/pull/4237) ✅ | 待 Review（11-14 起） |
| **高（main 分支 CI）** | [#4262](https://redirect.github.com/a2ui-project/a2ui/issues/4262) | E2E drift 在 main 失败，影响主干稳定性信号 | ❌ | needs-triage |
| P2 | [#3809](https://redirect.github.com/a2ui-project/a2ui/issues/3809) | `isDynamicDef` 因 `ZodObject` typeName 检查漏判动态定义，直接影响数据绑定 | [#4251](https://redirect.github.com/a2ui-project/a2ui/pull/4251) ✅ | 待合并 |
| P2 | [#4227](https://redirect.github.com/a2ui-project/a2ui/issues/4227) | Swift `getRendererCapabilities` 丢失 allOf 组合组件的本地属性 | [#4255](https://redirect.github.com/a2ui-project/a2ui/pull/4255) ✅ | 待 Review |
| P2（新） | [#4263](https://redirect.github.com/a2ui-project/a2ui/issues/4263) | Dart 目录展平丢失 allOf 内嵌的 oneOf/anyOf，`PayloadValidator` 误报未知属性 | [#4264](https://redirect.github.com/a2ui-project/a2ui/pull/4264) ✅ | 当日修复 |
| P2（新） | [#4259](https://redirect.github.com/a2ui-project/a2ui/issues/4259) | Swift `svgPath` 忽略 SVG 弧线命令（A/a），圆形图标渲染破损 | [#4260](https://redirect.github.com/a2ui-project/a2ui/pull/4260) ✅ | 当日修复 |
| P2（新） | [#4256](https://redirect.github.com/a2ui-project/a2ui/issues/4256) | Swift 双向绑定写入被数据模型拒绝时**静默丢弃**，错误不抵达 ActionHandling | ❌ | needs-triage |
| 中 | [#4238](https://redirect.github.com/a2ui-project/a2ui/issues/4238) | web_core v1 基础目录加载 Lit，**无 DOM 环境（React Native）下直接失败** | ❌ | 待处理 |
| 中 | [#4240](https://redirect.github.com/a2ui-project/a2ui/issues/4240) | 对数据模型尚未持有的字段做 check 时误报 `EXPRESSION_ERROR` 而非 check 失败 | ❌ | 待处理 |
| P2 | [#4245](https://redirect.github.com/a2ui-project/a2ui/issues/4245) | Python 代码生成 `$defs.theme` 别名冲突 + `_basic_catalog_id` 跨版本不同步 | ❌ | 待处理 |
| P2 | [#4247](https://redirect.github.com/a2ui-project/a2ui/issues/4247) | Python 实验性推理格式遗留 mypy 排除项，掩盖 19 个严格模式错误 | [#4248](https://redirect.github.com/a2ui-project/a2ui/pull/4248) ✅ | 待合并 |
| 低（CI） | [#4253](https://redirect.github.com/a2ui-project/a2ui/issues/4253) | `create_issue.sh` 在标签不存在时退出码 1 并丢弃失败报告 | ❌ | 待处理 |
| 低（供应链） | [#4222](https://redirect.github.com/a2ui-project/a2ui/issues/4222) | `requirements-docs.txt` 依赖未锁定版本 | [#4265](https://redirect.github.com/a2ui-project/a2ui/pull/4265) ✅ | 当日修复 |

**稳定性小结**：今日新增 Bug 呈现明显的**多渲染器保真度聚类**（Swift ×3、Dart ×2），均为 v1.0 inline catalog / 复合 schema 场景，提示 v1.0 规范在非 Web 渲染端的实现一致性仍需系统加固。两个 P1（README、Flutter CI）已在本窗口内关闭，主干质量总体可控。

---

## 6. 功能请求与路线图信号

**明确的功能请求：**

- **[#4192](https://redirect.github.com/a2ui-project/a2ui/issues/4192)**（P2）：zod ^4.6.6 + `zod/v3` 导入的安全临时方案。状态为 `first-line-handled`，但**尚无关联 PR**。考虑到用户是企业生产环境 + 安全驱动，且 npm 发版受阻是前置依赖，预计会在 npm 通道恢复后的第一个 TS 版本中处理。
- **[#4230](https://redirect.github.com/a2ui-project/a2ui/issues/4230)**（P2）：从 `a2ui_core`（Dart）导出 `coerceToString`，开放 `formatString` 内部的文本转换能力。属于低成本的 API 面扩展，用户（leoafarias）正在评估模板部件，**纳入下个 Dart 版本（0.8.0 候选，见 #4258）的可能性较高**。

**路线图信号（从 PR 推断）：**

- **Kotlin/JVM 平台化**：今日 3 个 PoC（[#4266](https://redirect.github.com/a2ui-project/a2ui/pull/4266) 明确引用 `blueprints/modules/*.blueprint.md` 做 "Option 3 架构评估"）是最强的战略信号——项目可能在下一阶段正式增加 Kotlin SDK 支持，值得持续跟踪评估结论。
- **版本节奏**：[#4258](https://redirect.github.com/a2ui-project/a2ui/pull/4258) 表明 Dart/Python/Swift 发版在即；[#4242](https://redirect.github.com/a2ui-project/a2ui/pull/4242)（conformance 版本标注）与 [#4184](https://redirect.github.com/a2ui-project/a2ui/pull/4184)（Express 复合 schema）若赶上车，将提升下版的规范测试覆盖与 Agent 能力。
- **仓库治理成熟化**：[#4150](https://redirect.github.com/a2ui-project/a2ui/pull/4150) 目录重组、[#4254](https://redirect.github.com/a2ui-project/a2ui/pull/4254) Angular 入口标准化，均属结构性清理，为多语言多包的长期维护铺路。

---

## 7. 用户反馈摘要

**真实使用场景与痛点：**

- **企业级生产采用**：Coolblue（hanstanawi-coolblue）在内部共享聊天包中同时使用 `@a2ui/react` 和 `@a2ui/web_core`——a2ui 已进入企业生产环境，但其痛点是**依赖安全审计与发版节奏不匹配**（#4192），npm 通道阻塞进一步加剧了这一摩擦。
- **React Native 兼容性断档**：[#4238](https://redirect.github.com/a2ui-project/a2ui/issues/4238) 的用户因基础目录入口硬性加载 Lit 自定义元素而无法在 RN 中使用 web_core——**"Web 优先的实现假设"正在排斥跨平台用户**。
- **动态 UI 严格性摩擦**：[#4240](https://redirect.github.com/a2ui-project/a2ui/issues/4240) 反映"字段尚未写入数据模型即触发校验"这一典型动态表单场景被判为表达式错误，说明**渐进式/时序敏感的 UI 状态流转**是现实痛点。
- **Swift/Dart 渲染保真度**：多位用户（Jimmy-Jung、karolkulesza）集中报告复合 schema 与 SVG 绘制细节问题，Swift 端还有**错误被静默吞掉**的观测性问题（#4256）。
- **API 开放度诉求**：Dart 用户希望暴露底层工具函数（#4230），而非仅通过高层 `formatString` 交互。

**正面信号**：Issue 报告质量普遍很高（含复现路径、commit hash、规范条款引用）；`v1-bug-bash` 标签显示有组织的质量活动在产出成效；外部贡献者能提交规范完整的修复 PR（如 [#4249](https://redirect.github.com/a2ui-project/a2ui/pull/4249)、[#4219](https://redirect.github.com/a2ui-project/a2ui/pull/4219) 文档站搜索键盘导航改进），社区参与深度值得肯定。

---

## 8. 待处理积压

**建议维护者优先关注：**

| 优先级 | 条目 | 积压时长 | 说明 |
|---|---|---|---|
| 🔴 | [PR #4237](https://redirect.github.com/a2ui-project/a2ui/pull/4237) | 3 天 | ReDoS 类修复，安全相关，应尽快 Review 合并 |
| 🔴 | [#4262](https://redirect.github.com/a2ui-project/a2ui/issues/4262) | 今日 | main 分支 CI 失败未分诊，需确认是否为 #4260/#4264 引入的回归 |
| 🔴 | npm 发布权限 | — | #4258 中确认受阻，阻塞所有 TS 侧安全修复交付（含 #4192 诉求） |
| 🟠 | [PR #4251](https://redirect.github.com/a2ui-project/a2ui/pull/4251) | 1 天 | 跨四 SDK 的核心绑定修复，合入后可关闭 #3809（已挂 16 天） |
| 🟠 | [PR #4150](https://redirect.github.com/a2ui-project/a2ui/pull/4150) | 7 天 | 对应 [#2700](https://redirect.github.com/a2ui-project/a2ui/issues/2700)（**自 09-18 挂起约 2 个月**），目录迁移需要尽快落地收尾 |
| 🟠 | [#4238](https://redirect.github.com/a2ui-project/a2ui/issues/4238) | 3 天 | React Native 完全不可用，无任何响应或修复 PR |
| 🟡 | [#4240](https://redirect.github.com/a2ui-project/a2ui/issues/4240) | 2 天 | EXPRESSION_ERROR 误报，无修复 PR |
| 🟡 | [#4256](https://redirect.github.com/a2ui-project/a2ui/issues/4256) | 1 天 | Swift 静默丢写，无修复 PR |
| 🟡 | [PR #3829](https://redirect.github.com/a2ui-project/a2ui/pull/3829) | **15 天** | web_core/angular 测试 mock 防护修复，今日可见的最老待审 PR |
| 🟡 | [PR #4184](https://redirect.github.com/a2ui-project/a2ui/pull/4184) | 5 天 | Express 复合 schema 支持，赶下版发版窗口需加速 |
| 🟡 | [#4192](https://redirect.github.com/a2ui-project/a2ui/issues/4192) | 5 天 | 企业安全诉求，无关联 PR |

**结构性提醒**：37 个待合并 PR 的 Review 队列已明显偏长（中位数等待约 3-5 天，最长 15 天），在发版窗口期（#4258）前后建议集中清理，避免修复与发版内容脱节。

---

*数据来源：a2ui GitHub 仓库 2026-11-17 过去 24 小时窗口的 Issue/PR 活动。链接均指向 github.com/a2ui-project/a2ui。*

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目动态日报

**项目**: [thesysdev/openui](https://github.com/thesysdev/openui) | **日期**: 2026-11-17 | **类型**: AI 智能体前端渲染框架（OpenUI Lang / React 组件库）

---

## 1. 今日速览

过去 24 小时 OpenUI 呈现**高频维护、稳步迭代**的健康状态：15 条 PR 活动更新（10 条待合并、5 条已合并/关闭）、3 个 patch 版本发布、1 条 Issue 持续讨论。核心团队（[@​udsy19](https://redirect.github.com/thesysdev/openui/pull/1657)）单日提交 4 个 `lang-core`/`react-ui` 修复 PR，一口气关闭 #1636–#1639 四个问题，Issue 到修复的响应延迟仅约 2–3 天，维护速度优异。同时 [@​ankit-thesys](https://redirect.github.com/thesysdev/openui/pull/1653) 开启了新包 `@openuidev/intelligent-ui-library` 的重磅功能 PR，预示项目正从"渲染层"向"模型可组合的智能答案层"演进。社区侧亦有新鲜血液：.NET/Blazor 生态集成 PR 于今日提交。唯一隐忧是两条 7 月提交的社区 UI 修复 PR 悬置近 4 个月仍未合入。

---

## 2. 版本发布

今日共发布 3 个版本，**全部为 patch 级别，无破坏性变更，无需迁移操作**。

| 包名 | 版本 | 关键变更 |
|---|---|---|
| [@​openuidev/react-ui](https://redirect.github.com/thesysdev/openui/pull/1644) | 0.18.9 | `LiveArtifactRenderer` / `StaticArtifactRenderer` 支持提前挂载（pending 态） |
| @​openuidev/react-headless | 0.18.9 | 无实质变更（版本对齐） |
| [@​openuidev/react-components](https://redirect.github.com/thesysdev/openui/pull/1651) | 0.0.3 | 横向滚动图表保持完整宽度 |

**重点解读**：`react-ui@0.18.9` 来自 [#1644](https://redirect.github.com/thesysdev/openui/pull/1644)（commit [`29b9de0`](https://github.com/thesysdev/openui/commit/29b9de0e3236d7a584358b4aef97471faac88a5e)）。此前在模型调用 `create_dashboard` 到工具返回之间存在空白期，渲染器因缺少 artifact id 而抛出 "This response doesn't reference an artifact" 错误；现在应用可在无 `response`/`id`/`content` 时立即挂载渲染器并展示 Pending 插槽。**对构建流式 UI 的用户是显著体验改善**。`react-components@0.0.3` 修复了应用端常见的 `svg { max-width: 100% }` 样式重置导致滚动图表被压缩、末尾类目被截断的问题。

---

## 3. 项目进展

今日合并/关闭的 5 条 PR 推进了三个方向：

**① 流式渲染体验补齐**
- [#1644](https://redirect.github.com/thesysdev/openui/pull/1644)（feat，已合并并随 0.18.9 发布）：Artifact 渲染器新增 pending 状态与 Pending 插槽，消除流式生成期间的空白面板，填平了"工具调用中"的 UX 缺口。

**② 图表渲染正确性**
- [#1651](https://redirect.github.com/thesysdev/openui/pull/1651)（fix，已合并并随 0.0.3 发布）：修复 `CartesianChartLayout` 中滚动 SVG 被挤压的问题，Bar/Line/Area 图表恢复横向滚动能力。

**③ 官网与文档升级**
- [#1640](https://redirect.github.com/thesysdev/openui/pull/1640)（docs，已关闭）：首页 tweet 墙替换为社区项目展示区（5 个精选项目轮播 + 演示视频），Demos 页面同步翻新——项目对外门面明显升级。
- [#1652](https://redirect.github.com/thesysdev/openui/pull/1652) / [#1649](https://redirect.github.com/thesysdev/openui/pull/1649)：Changesets 自动化发版 PR，随版本发布完成使命。

**整体评估**：单日完成"功能落地 → 发版上线 → 文档翻新"的完整闭环，配合待合并队列中的 4 个 lang-core 修复和 1 个新包，项目处于**快速上升通道**。

---

## 4. 社区热点

**🔥 Issue [#1635](https://redirect.github.com/thesysdev/openui/issues/1635)：Dashboard API 能否使用自托管 Postgres？**（3 条评论，11-13 创建，昨日仍有讨论）

作者 Prajwalg19 直接询问 dashboard API 能否对接本地 Postgres 而非云方案，并点出关键疑问："还是说这不在计划内，因为它与商业模式冲突？" 这条 issue 折射出**自托管用户群对数据主权和供应商锁定的核心诉求**，且评论数在项目近期 issue 中居前，说明需求具有普遍性。官方尚未给出明确答复，值得关注后续走向。

**🌟 PR [#1653](https://redirect.github.com/thesysdev/openui/pull/1653)：`@openuidev/intelligent-ui-library` 新包**（维护者 ankit-thesys 提交）

这实际上是最重磅的动向：一个模型可直接组合出交互式答案的组件库（布局、文本、输入、媒体、绘图、播放），并附带 `@functions` 机制让答案通过自身 `$variables` **在客户端本地计算、无需回传模型**。这是向"更智能、更低延迟的生成式 UI"迈出的架构级一步。

**🌐 PR [#1658](https://redirect.github.com/thesysdev/openui/pull/1658)：.NET Blazor 渲染器与 MudBlazor 组件库集成**（社区贡献者 dalefrancis88，今日提交）

将 OpenUI Lang 扩展到 .NET 生态（NuGet 包 `OpenUI.Lang.Blazor` 已发布 1.1.0），社区正在主动帮助项目**跨语言扩张**，配合后端语言集成 [#1550](https://redirect.github.com/thesysdev/openui/pull/1550) 形成完整的 .NET 故事。

---

## 5. Bug 与稳定性

今日围绕 `lang-core` 出现一组编译器级 Bug 的集中修复（均有对应 fix PR，按严重程度排列）：

| 严重度 | 问题 | 现象 | Fix PR |
|---|---|---|---|
| **高** | [#1637](https://redirect.github.com/thesysdev/openui/issues/1637) | `jsonToOpenUI` 丢失必要括号，`$a - ($b - $c)` 被序列化为 `$a - $b - $c`，**静默计算出错误结果** | [#1655](https://redirect.github.com/thesysdev/openui/pull/1655) ✅ |
| **高** | [#1636](https://redirect.github.com/thesysdev/openui/issues/1636) | 三元表达式 `:` 行尾时 else 分支被静默丢弃置为 `null`，**无任何报错** | [#1654](https://redirect.github.com/thesysdev/openui/pull/1654) ✅ |
| **中** | [#1638](https://redirect.github.com/thesysdev/openui/issues/1638) | Prompt 签名列出 `z.enum` 的键而非值，模型按提示写出 `"Small"` 后被解析器拒绝 | [#1656](https://redirect.github.com/thesysdev/openui/pull/1656) ✅ |
| **低** | [#1639](https://redirect.github.com/thesysdev/openui/issues/1639) | `ScatterChart` 声明的 `xLabel`/`yLabel` 从未传入图表，坐标轴标签不显示 | [#1657](https://redirect.github.com/thesysdev/openui/pull/1657) ✅ |
| 已修复 | — | 滚动图表 SVG 被压缩截断 | [#1651](https://redirect.github.com/thesysdev/openui/pull/1651) 已发版 ✅ |

**稳定性评估**：两个高危 Bug 均属"静默错误结果"类别（无报错、值错误），是编译器/序列化器最危险的一类缺陷，但均已在 1 天内出现修复 PR。**遗留 UI Bug**：[#862](https://redirect.github.com/thesysdev/openui/pull/862)（Accordion 静态响应下错误展开最后一项）与 [#820](https://redirect.github.com/thesysdev/openui/pull/820)（Tabs 非流式场景下自行切换标签）仍未合入，属低危但影响观感。

---

## 6. 功能请求与路线图信号

综合今日 Issue 与 PR，可辨识出四条路线图线索：

1. **客户端计算能力（强信号）**：[#1653](https://redirect.github.com/thesysdev/openui/pull/1653) 的 `@functions` + `$variables` 机制由维护者亲自操刀、代码已成形，**大概率进入下个 minor 版本**，将显著降低交互式答案的模型调用成本与延迟。
2. **自托管/数据主权（待定信号）**：[#1635](https://redirect.github.com/thesysdev/openui/issues/1635) 的自托管 Postgres 诉求尚无官方表态；鉴于其直指商业模式，短期可能仅以 FAQ/文档澄清形式回应，但社区压力值得跟踪。
3. **多语言生态扩张（进行中）**：[#1658](https://redirect.github.com/thesysdev/openui/pull/1658) 表明 .NET/Blazor 已由社区打通，叠加后端语言集成 [#1550](https://redirect.github.com/thesysdev/openui/pull/1550)，"OpenUI Lang 跨框架渲染"正在成为现实卖点。
4. **官网聚焦社区叙事**：[#1640](https://redirect.github.com/thesysdev/openui/pull/1640)（社区展示区）与待合并的 [#1650](https://redirect.github.com/thesysdev/openui/pull/1650)（移除 Lab 页、整合 Integrations 路由至 `/demos#community-projects`）显示团队正在**收敛信息架构、突出社区项目**，降低新用户认知负担。

---

## 7. 用户反馈摘要

从今日 Issue 讨论与 PR 描述中可提炼出以下真实用户画像与痛点：

- **自托管企业用户的信任焦虑**：[#1635](https://redirect.github.com/thesysdev/openui/issues/1635) 中用户对"云依赖"的敏感度很高，甚至主动提及商业模式冲突——说明 OpenUI 的目标用户（AI 应用开发者）中有相当比例**有私有化部署硬约束**，官方如何回应将影响这部分用户的去留。
- **Dashboard/图表是高频使用场景**：#1635（dashboard API）、#1639（图表轴标签）、#1651（滚动图表）连续多个问题围绕图表展开，**dashboard 类生成式 UI 是当前最主流的落地场景**，图表组件质量直接影响口碑。
- **Lang 序列化的隐蔽陷阱令人困扰**：#1636/#1637 这类"静默出错"说明有用户在深度使用 OpenUI Lang 编写/序列化程序，其挫败点在于**错误难以察觉**（不报错、值不对），建议后续考虑在序列化 round-trip 中加入一致性校验。
- **正面信号**：社区愿意为项目写完整的 .NET 集成并发布 NuGet 包（#1658），官方发起的模板自动更新（[#1629](https://redirect.github.com/thesysdev/openui/pull/1629)）也通过全部无凭证验证契约——**开发者体验和信任度整体良好**。

---

## 8. 待处理积压

以下事项建议维护者优先关注：

| 事项 | 悬置时长 | 状态与建议 |
|---|---|---|
| [PR #862](https://redirect.github.com/thesysdev/openui/pull/862) Accordion 初始挂载错误展开最后一项（修复 #861） | **约 4 个月**（2026-07-25 提交，昨日有更新） | 社区成员 Shinyaigeek 的高质量修复，昨日疑似 rebase 更新，**正是合入好时机** |
| [PR #820](https://redirect.github.com/thesysdev/openui/pull/820) Tabs 初始选中末位标签且流式结束后自行切换（修复 #819） | **约 4 个月**（2026-07-22 提交，昨日有更新） | 同上，与 #862 属同源启发式缺陷，建议一并 review |
| [Issue #1635](https://redirect.github.com/thesysdev/openui/issues/1635) 自托管 Postgres 支持 | 4 天（3 条评论，无官方结论） | 涉及定位与商业模式，建议尽快给出明确官方口径，避免社区猜测发酵 |
| [PR #1629](https://redirect.github.com/thesysdev/openui/pull/1629) 模板/示例依赖更新（bot） | 5 天 | 自动化 PR，验证契约已全部通过，建议尽快合并以保持模板新鲜度 |

---

**健康度小结**：发版节奏稳定（Changesets 自动化运转良好）、核心维护者响应迅捷（2–3 天内 issue→fix）、社区贡献持续流入——OpenUI 当前处于**非常健康的中期成长阶段**。两个改进方向：① 尽快处理积压 4 个月的社区修复 PR，避免挫伤外部贡献者积极性；② 对 #1635 反映的自托管诉求尽早表态，明确产品边界。

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render 项目动态日报

**项目**: [vercel-labs/json-render](https://github.com/vercel-labs/json-render)
**日期**: 2026-11-17
**数据周期**: 过去 24 小时

---

## 1. 今日速览

今日项目整体处于**低活跃但健康**状态：过去 24 小时无 Issue 活动（新开/活跃/关闭均为 0）、无 PR 合并、无新版本发布。唯一的增量来自 **2 条新开待审 PR**（[#485](https://redirect.github.com/vercel-labs/json-render/pull/485)、[#482](https://redirect.github.com/vercel-labs/json-render/pull/482)），且均来自社区外部贡献者。值得注意的是，这 2 条 PR 质量方向明确——一条来自 Parallel 团队（贡献者 ID `georgeatparallel`）推动搜索提供商集成，另一条为 Android 端贡献了 43 个组件的原生目录，显示项目对第三方生态贡献者仍具吸引力。今日无 Bug 报告，稳定性面无异常信号。

**活跃度评分**: ⭐⭐（2/5）— 单日数据偏低，但贡献结构（外部公司 + 跨平台开发者）是积极信号。

---

## 2. 版本发布

今日无新版本发布，无破坏性变更或迁移事项。建议关注当前 2 条待审 PR 是否会在近期合并后触发版本迭代。

---

## 3. 项目进展

今日**无 PR 合并或关闭**，主线代码零变更。但有 2 条功能型 PR 进入待审队列，构成潜在的下一波进展：

| PR | 标题 | 作者 | 状态 | 潜在影响 |
|---|---|---|---|---|
| [#485](https://redirect.github.com/vercel-labs/json-render/pull/485) | Chat example: add opt-in Parallel search and source cards | georgeatparallel | OPEN | 示例层增强 |
| [#482](https://redirect.github.com/vercel-labs/json-render/pull/482) | Add a Material 3 Expressive catalog for Jetpack Compose | maxffarrell | OPEN | 渲染器能力扩展 |

- **[#485](https://redirect.github.com/vercel-labs/json-render/pull/485)**：为 Chat 示例新增 `CHAT_SEARCH_PROVIDER=parallel` 可选配置。当前 web 搜索结果仅以合成文本形式折叠在工具输出中，用户无法在答案旁查看结构化来源链接。该 PR 引入**源卡片（source cards）**机制，采用 opt-in 设计，不改变默认行为。
- **[#482](https://redirect.github.com/vercel-labs/json-render/pull/482)（11-16 创建，今日更新）**：为 Jetpack Compose 渲染器新增 **Material 3 Expressive 组件目录，含 43 个组件名**，覆盖布局、卡片、列表、图表、表单控件、导航、菜单、对话框、加载/进度指示器等，并基于原生 AndroidX Expressive 组件实现形状变换（shape-changing）动效。若合并，将是 Android 端组件覆盖的一次大幅跃升。

---

## 4. 社区热点

今日无 Issue 讨论，热点完全集中于上述 2 条新 PR（评论数据暂缺，👍 均为 0，尚无显著互动）。从 PR 描述可提炼背后的诉求：

- **[#485](https://redirect.github.com/vercel-labs/json-render/pull/485) — 答案可溯源诉求**：作者指出典型场景——询问“Chat Example 官方文档在哪”时，用户无法检视答案附带的结构化来源链接。这反映了 AI 助手产品中“引用透明度”的普遍痛点。Parallel 团队主动为示例适配自家搜索提供商，也暗示 json-render 作为示例载体正在被 AI 搜索公司视为集成展示窗口。
- **[#482](https://redirect.github.com/vercel-labs/json-render/pull/482) — 跨端一致性诉求**：贡献者以“opt-in 目录”方式补齐 Android 端组件库，说明现有 Jetpack Compose 渲染器的组件覆盖与 Web 端存在差距，社区有动力以可选包形式弥合。

---

## 5. Bug 与稳定性

今日**无新报告的 Bug、崩溃或回归问题**（过去 24 小时 Issue 更新为 0 条）。无需 fix PR 跟进，稳定性面平稳。

---

## 6. 功能请求与路线图信号

今日虽无 Issue 形式的功能请求，但从 PR 动向可读出两条路线图信号：

1. **搜索提供商可插拔化**（[#485](https://redirect.github.com/vercel-labs/json-render/pull/485)）：`CHAT_SEARCH_PROVIDER` 环境变量的设计表明示例正在向多搜索提供商架构演进。若该模式被维护者采纳，后续可能吸引更多搜索厂商（Tavily、Exa、Brave 等）跟进贡献适配，形成示例层的“提供商生态”。
2. **Android 端组件体系化**（[#482](https://redirect.github.com/vercel-labs/json-render/pull/482)）：43 个组件 + Material 3 Expressive 原生动效，是迄今 Android 渲染器最系统的组件贡献。opt-in 的设计降低了合并阻力，**有较大概率被纳入下一版本**；若合并，Android 端或成为下阶段迭代重心。

---

## 7. 用户反馈摘要

今日数据源中无 Issue 评论可供提炼，PR 评论数亦为空。仅能从 PR 描述中间接观察到一项用户痛点：

- **痛点**：Chat 示例中搜索结果不够透明——答案与来源链接脱节，用户无法验证信息出处（来自 [#485](https://redirect.github.com/vercel-labs/json-render/pull/485) 的问题陈述）。
- **使用场景信号**：将 json-render 用于 AI 聊天界面并接入实时搜索的场景正在被真实使用和打磨。

> 注：待 PR 进入 review 阶段产生评论后，后续日报可提供更完整的反馈分析。

---

## 8. 待处理积压

- **数据局限**：本日报数据仅覆盖过去 24 小时增量，无法评估长期未响应 Issue/PR 的历史积压规模，建议维护者另行核查。
- **即时提醒**：当前 2 条待审 PR（[#485](https://redirect.github.com/vercel-labs/json-render/pull/485)、[#482](https://redirect.github.com/vercel-labs/json-render/pull/482)）均无评论互动。其中 #485 由 Parallel 团队提交，具有潜在生态合作价值；#482 体量较大（43 个组件）需尽早排期 review。建议维护者在 48 小时内完成首轮响应（即使是 CI 状态或初步意见），避免贡献者流失。

---

*数据来源：GitHub API（过去 24 小时增量）｜下期日报将持续跟踪 #485、#482 的 review 进展与合并状态*

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报 — 2026-11-17

---

## 1. 今日速览

CopilotKit 今日无新版本发布，但工程吞吐量维持高位：过去 24 小时 PR 活动达 **36 条**（12 条待合并、24 条已合并/关闭），Issues 更新 3 条（1 条活跃、2 条关闭）。两条长期悬置的 Issue（[#4775](https://redirect.github.com/CopilotKit/CopilotKit/issues/4775)、[#3644](https://redirect.github.com/CopilotKit/CopilotKit/issues/3644)）随对应修复 PR 落地正式关闭，形成"需求 → 修复 → 关闭"的完整闭环。今日工作重心集中在：文档体系完善（首页 Frontends 板块、暗色模式修复、Python 快速上手安全补强）、A2UI 示例站回归修复，以及 CI 自动化创新（新增 AEO 评估工作流）。整体呈现维护者主导、外部贡献规范接入的健康节奏。

---

## 2. 版本发布

今日无新版本发布。值得注意的是，待合并队列中已堆积 **3 条标记 BREAKING 的 PR**（[#8117](https://redirect.github.com/CopilotKit/CopilotKit/pull/8117)、[#8118](https://redirect.github.com/CopilotKit/CopilotKit/pull/8118)、[#8254](https://redirect.github.com/CopilotKit/CopilotKit/pull/8254)），预示下一次版本发布将包含需要迁移注意的 API 语义变更。

---

## 3. 项目进展

今日 24 条合并/关闭 PR 中的核心进展：

**运行时与核心修复**
- [#7868](https://redirect.github.com/CopilotKit/CopilotKit/pull/7868) `feat: support separate agent IDs and display names` — 外部贡献者 alanisnc 实现 agentId 与显示名称解耦，关闭 5 月提出的 [#4775](https://redirect.github.com/CopilotKit/CopilotKit/issues/4775)。配套的 CI 验证专用 PR [#8140](https://redirect.github.com/CopilotKit/CopilotKit/pull/8140) 同日关闭，展示了项目"锁定 commit 外部验证"的贡献接入机制。
- [#8408](https://redirect.github.com/CopilotKit/CopilotKit/pull/8408) `fix(react-core): keep all tool calls when merging duplicate messages` — 修复消息合并时丢失 tool calls 的缺陷，直接关闭 4 月报告的 Bug [#3644](https://redirect.github.com/CopilotKit/CopilotKit/issues/3644)。
- [#7826](https://redirect.github.com/CopilotKit/CopilotKit/pull/7826) `fix: Intelligence runner durability, replay failures and replayed errors` — 修复自托管 Intelligence 部署中 "Runner connection dropped" 等一系列可靠性缺陷，每项修复独立成 commit、附独立测试，便于单独评审与回滚。

**文档与示例**
- [#8429](https://redirect.github.com/CopilotKit/CopilotKit/pull/8429) 文档首页新增 **Frontends** 板块：React、Vue、Angular、React Native、Slack、Teams 六大前端的品牌色卡片矩阵。
- [#8430](https://redirect.github.com/CopilotKit/CopilotKit/pull/8430) 恢复 A2UI playground 的 Components 页面 — 修复 #8383 合并引入的示例站回归，从开 PR 到关闭仅一天，响应迅速。
- [#8428](https://redirect.github.com/CopilotKit/CopilotKit/pull/8428) 修复暗色模式下首页架构图 `currentColor` logo 不可见问题；[#7983](https://redirect.github.com/CopilotKit/CopilotKit/pull/7983) 修复 banner 布局偏移与 hydration 跳动。

**工程效能**
- [#8427](https://redirect.github.com/CopilotKit/CopilotKit/pull/8427) 从 2.0.0 分支 cherry-pick 三个 Claude agent skills（`write-cpk-docs`、`simple-english`、`i-have-adhd`）至 main，用 AI 技能标准化文档撰写流程。
- [#8406](https://redirect.github.com/CopilotKit/CopilotKit/pull/8406) A2UI 跨 React/Vue/Angular 的可访问性测试 spike（PNI-819），验证了框架无关 a11y 检查方案的可行性。

**整体评估：** 今日约 6-8 条为实质性功能/修复，其余为文档与基建配套。两个月度级别老 Issue 闭环 + Intelligence 可靠性大修落地，核心运行时稳定性前进扎实一步。

---

## 4. 社区热点

- **Issue [#3748](https://redirect.github.com/CopilotKit/CopilotKit/issues/3748)**（OPEN，今日活跃）— LangGraph 集成中无法访问 `ToolMessage.artifact` 与自定义流模式。诉求核心：LangGraph 开发者希望前端能消费 agent 返回的**结构化数据**而非仅文本流。这是当前唯一仍开放且今日有活动的 Issue，反映 LangGraph 集成深度是社区持续痛点。
- **PR [#8422](https://redirect.github.com/CopilotKit/CopilotKit/pull/8422)**（OPEN）— 新增 **AEO（Answer Engine Optimization）Web 评估**：每周一让真实联网研究型 agent 回答 10 个不点名 CopilotKit 的 prompt，统计 agent 主动推荐 CopilotKit 的频率并上报追踪。将传统 SEO 思路迁移至 AI agent 推荐时代，具行业前瞻性。
- **PR [#7868](https://redirect.github.com/CopilotKit/CopilotKit/pull/7868) + [#8140](https://redirect.github.com/CopilotKit/CopilotKit/pull/8140)** — 外部贡献全流程（贡献 → 专用 CI 验证通道 → 合入）今日完整走通，社区贡献机制运转良好。

*注：本批 PR 评论数数据缺失，以上基于更新频率与内容权重排序。*

---

## 5. Bug 与稳定性

**✅ 已修复（今日闭环）**
| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 | [#3644](https://redirect.github.com/CopilotKit/CopilotKit/issues/3644) AG-UI 事件流中 `TOOL_CALL_START` 与 `TOOL_CALL_RESULT` 交错导致前端 `messages[]` 出现重复 assistant message ID | fix PR [#8408](https://redirect.github.com/CopilotKit/CopilotKit/pull/8408) 已关闭，问题闭环 |
| 🔴 | [#7826](https://redirect.github.com/CopilotKit/CopilotKit/pull/7826) 自托管 Intelligence + LangGraph 部署 "Runner connection dropped"、重放失败与错误重放 | 修复已随 PR 关闭落地 |

**⏳ 待合并修复（按影响排序，均已有 fix PR）**
1. 🟠 [#8118](https://redirect.github.com/CopilotKit/CopilotKit/pull/8118) **安全相关**：审批恢复默认仅限工作流发起人，同时收窄 Slack 凭证作用域（BREAKING）
2. 🟠 [#8254](https://redirect.github.com/CopilotKit/CopilotKit/pull/8254) React Native 的 `headers` builder 在 render 时固化，长会话中携带过期 auth token（BREAKING）
3. 🟡 [#8363](https://redirect.github.com/CopilotKit/CopilotKit/pull/8363) `gpt-6-*` 模型静默丢弃 `reasoningEffort`，无任何警告（需提升 `@ai-sdk/openai` 至 ^3.0.140）
4. 🟡 [#8117](https://redirect.github.com/CopilotKit/CopilotKit/pull/8117) 客户端省略历史时保留内存线程消息、debug feed 改为 opt-in（BREAKING）
5. 🟡 [#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309) Python 快速上手安全补强：示例绑定回环地址 + fail-closed `authorization_scope_resolver`

---

## 6. 功能请求与路线图信号

**社区请求**
- [#3748](https://redirect.github.com/CopilotKit/CopilotKit/issues/3748) LangGraph 自定义流模式 + artifact 透传 — **尚无对应 PR**，处于积压状态。
- [#5930](https://redirect.github.com/CopilotKit/CopilotKit/issues/5930) MCP Apps 工具过滤 — 对应 PR [#8270](https://redirect.github.com/CopilotKit/CopilotKit/pull/8270)（`includeTools`/`excludeTools` 白/黑名单）已在待合并队列，**大概率随下个版本发布**。

**路线图信号（从 PR 动向推断）**
- **全前端矩阵战略明确**：[#8429](https://redirect.github.com/CopilotKit/CopilotKit/pull/8429) Frontends 文档板块 + [#8412](https://redirect.github.com/CopilotKit/CopilotKit/pull/8412) Angular 视觉回归测试 + [#8406](https://redirect.github.com/CopilotKit/CopilotKit/pull/8406) 三框架 a11y，React/Vue/Angular/RN/Slack/Teams 六端并进是既定方向。
- **2.0.0 分支并行活跃**：[#8427](https://redirect.github.com/CopilotKit/CopilotKit/pull/8427) 从 2.0.0 cherry-pick 至 main、[#8422](https://redirect.github.com/CopilotKit/CopilotKit/pull/8422) 评估同时打在 2.0.0 与 main，证实大版本分支在积极维护、基建双线同步。
- **性能优化**：[#8423](https://redirect.github.com/CopilotKit/CopilotKit/pull/8423) 保持 prompt 前缀稳定以命中模型提供商缓存 — 将易变的 context/state 移出 system message，对多轮会话的 token 成本有直接优化潜力。
- **生态扩张**：[#8351](https://redirect.github.com/CopilotKit/CopilotKit/pull/8351) 新增 Cloudflare Agents showcase 集成，依赖上游 ag-ui 适配器（`ag-ui-protocol/ag-ui#3365`）发布 npm 版本。

---

## 7. 用户反馈摘要

从 Issue 描述与 PR 动机提炼的真实场景与痛点：

- **Tool-use 重度场景的状态健壮性**（[#3644](https://redirect.github.com/CopilotKit/CopilotKit/issues/3644)）：多工具调用与结果交错是生产常态而非边缘，消息 ID 重复会让前端状态错乱 — 生产级 agent 应用对事件流状态机容错要求极高。
- **身份与展示分离**（[#4775](https://redirect.github.com/CopilotKit/CopilotKit/issues/4775)）：开发者需要 agentId 保持稳定标识（用于路由/持久化），同时显示名称可自由变化 — 典型的多 agent 平台工程需求。
- **LangGraph 结构化产出受阻**（[#3748](https://redirect.github.com/CopilotKit/CopilotKit/issues/3748)）：用户经 `@ag-ui/langgraph` 构建 agent，但 artifact 数据无法到达前端，被迫降级为纯文本 — 反映该用户群对"agent 直接产出结构化 UI 数据"的强烈期望。
- **自托管企业级痛点**（[#7826](https://redirect.github.com/CopilotKit/CopilotKit/pull/7826)）：自托管 Intelligence 用户遭遇连接中断且重放机制本身有缺陷，说明自部署已是不可忽视的用户群体。
- **"静默降级"最伤信任**（[#8363](https://redirect.github.com/CopilotKit/CopilotKit/pull/8363)）：gpt-6 用户的 reasoning 参数被无警告吞掉 — 新模型兼容问题中，缺告警比缺功能更损害信任。

---

## 8. 待处理积压

⚠️ 建议维护者关注：

1. **Issue [#3748](https://redirect.github.com/CopilotKit/CopilotKit/issues/3748)** — 开放 **7 个月+**（2026-04-10 创建，3 条评论），今日仍活跃但无实现 PR。当前最老的活跃 feature request，建议尽快给出"纳入路线图或关闭"的明确决策。
2. **PR [#8117](https://redirect.github.com/CopilotKit/CopilotKit/pull/8117) / [#8118](https://redirect.github.com/CopilotKit/CopilotKit/pull/8118)** — 2026-10-30 开放已达 **18 天**的两条 BREAKING 修复，涉及安全语义与数据保留行为，宜明确合并窗口并提前准备迁移文档。
3. **PR [#8351](https://redirect.github.com/CopilotKit/CopilotKit/pull/8351)** — Cloudflare Agents showcase 受外部阻塞（上游适配器未发 npm），需持续跟踪 `ag-ui-protocol/ag-ui#3365`。
4. **PR [#8363](https://redirect.github.com/CopilotKit/CopilotKit/pull/8363)** — gpt-6 reasoning 参数丢失对受影响用户是即时痛点，建议优先评审。

---

**健康度小结：** PR 关闭/新增比 **24:12**，外部贡献闭环机制运转正常，文档与工程基建投入显著，Bug 响应形成"报告 → 修复 → 关闭"闭环。主要风险点：3 条 BREAKING PR 积压待合并、#3748 长期未决、以及待合并修复中的两个安全相关变更（#8118、#8309）宜尽快定版。

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*