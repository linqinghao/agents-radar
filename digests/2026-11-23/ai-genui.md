# 生成式 UI 生态日报 2026-11-23

> Issues: 8 | PRs: 25 | 覆盖项目: 4 个 | 生成时间: 2026-11-23 06:31 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告

**报告日期：** 2026-11-23 ｜ **覆盖项目：** a2ui、OpenUI、json-render、CopilotKit ｜ **数据窗口：** 过去 24 小时

---

## 1. 生态全景

生成式 UI 生态已从"能否生成"进入"是否可信、可管、可恢复"的工程深水区：四个头部项目今日无一把新投入押在生成效果本身，而是全部流向**规范一致性、校验前移、生命周期管理与持久化恢复**。生态分层清晰——a2ui 做协议优先的跨平台契约层，OpenUI 走产品化与商业化路线，json-render 聚焦 LLM 输出到聊天平台的轻量渲染桥，CopilotKit 深耕 React 运行时与 durable execution。活跃度分化显著：a2ui 输入端最旺但交付吞吐为零，OpenUI 是唯一发版方，CopilotKit 在做 75 天长线 PR 的收口，json-render 处于平稳期。共同底色是 MCP/Agent 基础设施的持续加码——生成式 UI 正在成为 Agent 技术栈的标准化输出层。

---

## 2. 各项目活跃度对比

| 项目 | Issue 动态 | PR 动态 | 合并/关闭 | Release | 待合并存量 | 外部社区参与 |
|---|---|---|---|---|---|---|
| **a2ui** | 新增 2、活跃 5（共 7 条） | 新增 3、活跃 7（共 10 条） | **0 / 0** | 无 | **10** | **高**：多贡献者，外部用户报出架构级议题 |
| **OpenUI** | 新增 1（#1693） | 更新 10（在途 7 / 收口 3，含同日新开 #1696） | 3 | **@​openuidev/server@0.5.0**（minor） | 7 | 低：外部仅 1 条 Bug 报告，0 评论 |
| **json-render** | 0 | 新增 1（外部 PR #502） | 0 | 无 | 1 | 中低：1 条高质量外部修复 PR |
| **CopilotKit** | 0 | 更新 4（在途 1 / 收口 3） | 3 | 无 | 1 | 极低：Issue 全线为零 |

**关键解读：**
- **a2ui 呈"高输入、零交付"剪刀差**：17 条更新全在输入端，10 个 PR 全部积压于评审队列，叠加 main 分支 P1 CI 红灯持续 6 天（#4262），合并基线的可信度存疑。
- **OpenUI 是唯一具备完整交付闭环的项目**：合并 → Changesets 自动发版 → 0.5.0 落地，工程节奏最健康，但活跃度几乎全部由官方团队（4 名成员）驱动。
- **CopilotKit 属"收尾型"活跃**：3 条收口中含 2 条挂起约 75 天的 Open Generative UI 长线 PR，量少但信号权重高。

---

## 3. 共同关注的功能方向

**① 规范/文档与实现一致性（4/4 项目，生态级共识）**
- a2ui：#4364 协议文档 contact form 示例自身使用越界 token `YYYY`，用户"照文档抄得到错误结果"；#4352 进一步将 spec JSON Schema 变为 TS SDK 的直接校验对象。
- OpenUI：#1693 lang-core 成员访问违反 `spec/language.md` §3.1（应返回 null 却泄漏内部 `ElementNode` 字段）；#1691 将 prop 类型收敛到 JSON Schema。
- json-render：#466/#502 补齐 Slack Block Kit `action_id` 唯一性校验。
- **共同诉求**：把"文档承诺"升级为可机器执行的契约，消除规范漂移对信任度的损耗。

**② 流式渲染容错与降级（3/4 项目）**
- json-render #502：流式期间跳过无效分组而非中断渲染；CopilotKit #6985 处理 partial HTML 与 lagging streams、#6986 修复同帧到达的测量时序缺陷；a2ui #4236 是反面警示——合法 payload 即可挂起渲染器。
- **共同诉求**：在"LLM 输出天然不可靠"前提下保证消费端健壮，错误可见但不牺牲流式体验。

**③ 校验前移（fail-fast）（3/4 项目）**
- a2ui #4357→#4358 将 `@index` 越界从渲染期报错前移至校验期拦截（Python/TS/Dart 三端同步）、#4236→#4360 拒绝灾难性回溯正则（仅 Dart，TS 缺位）；json-render 以 `CardSpecError` 建立统一错误通道；OpenUI #1691 从 schema 收敛源头减少不一致。
- **共同诉求**：排障成本不后置，问题在加载/校验期即暴露。

**④ 生成结果的持久化与生命周期管理（3/4 项目）**
- OpenUI 0.5.0 的 `openui.artifacts`（list/read/update/delete/pin/unpin/share）；CopilotKit #6985 从 durable history 恢复沙箱 UI；a2ui 蓝图 commit pin 与偏差记录（治理与审计性质）。
- **共同诉求**：生成结果从"一次性渲染"变为"可管理、可恢复、可审计的资产"。

**⑤ 跨端能力对等（a2ui 权重最高，OpenUI 次之）**
- a2ui：#3257 SwiftUI 主题缺口、#4361 TextField 样式、#4362 Swift/JS 数字格式对齐、#4296 五端统一函数嵌套深度；OpenUI：服务端 API 行为与前端 token 权限语义对齐。
- **共同诉求**：消除"二等公民渲染器"体验。

---

## 4. 差异化定位分析

| 维度 | a2ui | OpenUI | json-render | CopilotKit |
|---|---|---|---|---|
| **功能侧重** | 协议优先的跨平台渲染器矩阵（Swift/Flutter/Web）+ 多语言 Agent SDK（Python/TS/Dart/Kotlin/Swift） | 服务端/前端全栈 SDK + Dashboards 产品，生成资产全生命周期管理 | JSON spec → 聊天平台卡片（Slack Block Kit）的轻量渲染桥 | React 运行时 + 沙箱化生成式 HTML UI + durable execution |
| **目标用户** | 需要跨端行为严格一致的严肃集成方、Agent 工具链构建者 | 构建组织级数据仪表盘、期望商业化路径的团队 | "LLM → 结构化卡片 → 聊天平台"链路的集成方 | 在生产级 React 应用中嵌入 AI 副驾驶的工程团队 |
| **技术路线** | 蓝图文档为架构源头、JSON Schema 契约、破坏性变更走版本规划（#4352） | Changesets 自动发版、自研 lang-core 语言层、provenance 溯源 | 轻量库 + CardSpecError 校验通道 + 流式降级策略 | 中间件执行路径、历史投影器、docs digest 固定流水线 |
| **商业化信号** | 无（治理与规范投入为主） | **明确加速**：官网营销三件套、CTA 组件统一、Dashboards 展示页 | Vercel Labs 实验属性 | 自动化成熟度高，未见明确表态 |
| **当日突出短板** | 评审吞吐为零 + CI 红灯 6 天 | 外部社区单薄（1 条 issue、0 回应） | 低活跃，维护者响应待观察 | 社区侧完全静默 |

---

## 5. 社区热度与成熟度

**热度梯队：**
- **第一梯队 — a2ui**：17 条更新、贡献者多元（gspencergoog 2 Issue + 2 PR、karolkulesza 3 PR），外部用户持续产出高质量议题（#4236 ReDoS、#4364 文档漂移均为外部报告）。
- **第二梯队 — OpenUI**：10 条 PR 更新几乎全部来自官方团队，外部输入仅 1 条且 0 回应——工程热、社区冷。
- **第三梯队 — CopilotKit / json-render**：前者 Issue 全线为零但工程收尾扎实；后者仅 1 条外部 PR，但质量高（关联规范合规缺口）。

**成熟度画像：**
- **工程自动化**：CopilotKit 最高（staging→prod digest 固定 + Renovate）；OpenUI 次之（自动发版落地 0.5.0）。
- **快速迭代期**：a2ui（功能横向铺开：SwiftUI 样式、三端校验、schema 无关化）与 OpenUI（0.5.0 发版 + provenance 实现/叙事双线推进）。
- **成长阵痛**：a2ui 的"10 PR 待合并 + 零合并 + CI 红灯 6 天 + 19/41 天积压"是典型的**输入能力与治理能力错配**，是当前生态内最清晰的运营风险。
- **跨生态用户信号**：贡献者 itsklimov 在 CopilotKit 收口 75 天长线 PR 的同日，在 a2ui 报告文档漂移 Issue——头部开发者正在跨框架评估与组合使用，生态已进入可横向比选的阶段。

---

## 6. 值得关注的趋势信号

**信号一：规范可信度成为核心竞争壁垒。** 四项目同日出现规范/实现漂移类问题，而"照文档抄却出错"（a2ui #4364）对信任度伤害最大。解法方向已收敛：schema 化契约（a2ui #4352、OpenUI #1691）。**参考价值**：选型时将"spec 是否可机器校验、文档示例是否有测试覆盖"列为硬指标。

**信号二：生成式 UI 进入生产可用性攻坚期。** durable history 恢复（CopilotKit）、artifacts 全生命周期（OpenUI）、会话回放/审计场景成为投入重心。**参考价值**：评估方案时必问三个问题——刷新后能否恢复、能否审计、生成资产能否管理。

**信号三："默认不信任 LLM 输出"的工程范式确立。** 校验前移 + 流式降级（显式报错但不中断）正在成为标配设计模式。**参考价值**：自建集成时应复制"校验期拦截 + 局部降级跳过"组合，而非依赖渲染期兜底。

**信号四：合法 payload 即攻击面。** 256 字符输入挂起渲染器（a2ui #4236 ReDoS）、内部字段泄漏（OpenUI #1693）、重复 ID 被下游 API 拒绝（json-render #466）——LLM 生成内容放大了三类风险：资源耗尽、信息泄漏、下游合规失败。**参考价值**：渲染器输入应按不可信输入做安全评审。

**信号五：MCP/Agent 底座合流。** a2ui 批量升级 litellm/mcp 依赖，OpenUI 在构建期调用用户数据工具。**参考价值**：生成式 UI 的选型需纳入与 MCP 生态的互操作性考量。

**信号六：外部贡献响应速度是社区健康领先指标。** OpenUI #1693 与 json-render #502 均处 0 回应状态；CopilotKit 长线 PR 周期达 75 天。**参考价值**：依赖开源生成式 UI 项目时，将维护者响应延迟纳入风险评估；贡献者的等待期决定了项目能否从"输入活跃"走向"社区留存"。

**选型速查：**

| 需求场景 | 建议关注 |
|---|---|
| 跨 Swift/Flutter/Web 的协议级一致性（可容忍治理阵痛） | a2ui |
| 服务端管理生成资产、组织级仪表盘、商业化路线 | OpenUI |
| LLM → Slack 等聊天平台的卡片管道 | json-render |
| 生产级 React 应用 + 沙箱生成 UI + 会话恢复 | CopilotKit |

---
*数据来源：四项目 GitHub 仓库 24 小时动态快照（截至 2026-11-23）。所有判断基于单日窗口，趋势结论建议结合多期数据交叉验证。*

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目日报 — 2026-11-23

## 1. 今日速览

过去 24 小时项目共记录 **17 条更新**（7 条 Issue + 10 条 PR），全部为新增或活跃状态，**0 条关闭、0 条合并、0 个新版本发布**。社区输入端保持旺盛：今日新增 2 个 Issue（[#4364](https://redirect.github.com/a2ui-project/a2ui/issues/4364)、[#4365](https://redirect.github.com/a2ui-project/a2ui/issues/4365)）和 3 个 PR（[#4362](https://redirect.github.com/a2ui-project/a2ui/pull/4362)、[#4363](https://redirect.github.com/a2ui-project/a2ui/pull/4363)、[#4366](https://redirect.github.com/a2ui-project/a2ui/pull/4366)），工作重心集中在 SwiftUI/Swift 渲染器跨平台一致性、蓝图文档同步与依赖升级。贡献者阵容多元，gspencergoog（2 Issue + 2 PR）与 karolkulesza（3 PR）是今日核心推动者。需要警惕的两个信号：**P1 级 CI 故障 #4262 已在 main 分支持续 6 天未关闭**，且今日合并吞吐为零，在途工作全部积压于评审队列。

## 2. 版本发布

本日无新版本发布（省略详述）。

## 3. 项目进展

今日 **无 PR 合并、无 Issue 关闭**，10 个待合并 PR 构成当前全部在途进展：

- **SwiftUI 样式体系继续拼图**：[#4361](https://redirect.github.com/a2ui-project/a2ui/pull/4361) 为 Basic Catalog 的 TextField 引入 `A2UITextFieldStyle`，是继 #4024（Button/Card 样式）后的第三块拼图；配合 [#4362](https://redirect.github.com/a2ui-project/a2ui/pull/4362) 修复 Swift 数字转文本行为与 JavaScript 的偏差，Swift 渲染器向跨平台行为一致的目标又推进一步。
- **正则安全加固进入修复阶段**：[#4360](https://redirect.github.com/a2ui-project/a2ui/pull/4360) 在 Dart `analyzeRegex` 守卫中拒绝歧义可空组的重复（`(a?){1000}a{1000}` 类模式），直接回应 Issue [#4236](https://redirect.github.com/a2ui-project/a2ui/issues/4236) 的灾难性回溯问题。
- **Agent SDK 校验强化**：[#4358](https://redirect.github.com/a2ui-project/a2ui/pull/4358) 在 Python/TypeScript/Dart 三端统一实现 RendererState 拓扑校验中对列表模板外 `@index` 调用的拒绝，对应 Issue [#4357](https://redirect.github.com/a2ui-project/a2ui/issues/4357)。
- **架构级重构（破坏性变更候选）**：[#4352](https://redirect.github.com/a2ui-project/a2ui/pull/4352)（`feat!`）使 TS SDK 彻底摆脱 zod 依赖，改为应用侧注入校验引擎、直接对 spec JSON Schema 校验，与 Python/Dart/Kotlin SDK "文档即契约"的立场对齐，落地提案 #2160。
- **文档与依赖维护**：[#4366](https://redirect.github.com/a2ui-project/a2ui/pull/4366) 补齐 Swift/SwiftUI 蓝图中适配器偏差与 commit pin 记录；[#4363](https://redirect.github.com/a2ui-project/a2ui/pull/4363) 为 dependabot 批量升级（litellm `1.90.1→1.100.4`、mcp `1.28.1→1.30.0` 等 8 项）；[#4359](https://redirect.github.com/a2ui-project/a2ui/pull/4359) 修复 schema helper 描述折叠进 `REF:` 标记时的丢失问题。

**整体评估**：功能面在横向铺开（SwiftUI 样式、跨 SDK 校验一致性、schema 无关化），方向清晰，但单日零落地意味着项目"进"靠贡献者、"稳"靠评审——当前瓶颈在维护者侧的评审与合并吞吐。

## 4. 社区热点

按评论数排序，今日讨论最集中的三个条目：

| 条目 | 评论数 | 主题 |
|---|---|---|
| [#4262](https://redirect.github.com/a2ui-project/a2ui/issues/4262)（P1, bug） | 6 | E2E drift 在 main 分支失败，持续 6 天，今日仍有活动 |
| [#3257](https://redirect.github.com/a2ui-project/a2ui/issues/3257)（P2, feature） | 6 | SwiftUI 渲染器样式自定义缺口 |
| [#4236](https://redirect.github.com/a2ui-project/a2ui/issues/4236)（P2, bug） | 3 | 正则校验接受灾难性回溯模式，可挂起渲染器 |

**诉求分析**：
- **#4262** 由 CI 机器人自动上报，main 分支 e2e drift 失败累计 6 天未收敛，6 条评论显示社区在持续追查。CI 红灯直接威胁所有在途 PR 的可验证性——积压的 10 个 PR 缺乏可信的合并基线，这可能是今日零合并的隐性原因之一。
- **#3257** 反映的是**跨渲染器能力对等**诉求：Theming 指南承诺宿主应用可定制外观，Web 暴露 CSS 变量、Flutter 读取 `ThemeData`，唯独 SwiftUI 无路径。该 Issue 虽已开 38 天，但 #4024 → #4361 的组件级推进轨迹表明它被系统性消化中，社区耐心仍在。
- **#4236** 是安全类痛点：`validateRegex` 编译的 `RegExp` 在 256 字符输入上永不返回，校验层缺陷直接转化为终端用户侧 UI 冻结。

## 5. Bug 与稳定性（按严重度排列）

| 严重度 | 条目 | 描述 | Fix PR |
|---|---|---|---|
| **P1** | [#4262](https://redirect.github.com/a2ui-project/a2ui/issues/4262) | E2E drift workflow 在 main（commit 1cbef31）失败，11-17 起未收敛 | ❌ 暂无 |
| **P2** | [#4236](https://redirect.github.com/a2ui-project/a2ui/issues/4236) | `analyzeRegex` 接受 `(a?){1000}a{1000}`，渲染器挂起 | ⚠️ [#4360](https://redirect.github.com/a2ui-project/a2ui/pull/4360) 仅覆盖 **Dart** 侧；Issue 标记 `lang: typescript`，TS 侧修复尚未可见 |
| **P2** | [#4357](https://redirect.github.com/a2ui-project/a2ui/issues/4357) | `@index` 越界调用仅在渲染期报 `EXPRESSION_ERROR`，校验期不拦截 | ✅ [#4358](https://redirect.github.com/a2ui-project/a2ui/pull/4358)（Python/TS/Dart） |
| **新报（待分级）** | [#4364](https://redirect.github.com/a2ui-project/a2ui/issues/4364) | `formatDate` 将 token 列表外的字母原样输出为文本，且**协议文档自身的 contact form 示例使用了越界 token `YYYY`** | ❌ 暂无，`needs-triage` |
| **由 PR 直接修复** | [#4362](https://redirect.github.com/a2ui-project/a2ui/pull/4362) | Swift 以 `Double.description` 输出数字，极小/极大数值表示与 JS 不一致（`formatString` 插值与 `DynamicString` 强转两处） | ✅ 本身即修复 PR |

**稳定性小结**：新增 Bug 呈"规格与实现漂移"特征（#4364 的文档示例越界、#4365 的蓝图过时），叠加 main 分支 CI 红灯未消，建议维护者优先处理 #4262，并对 #4236 的 TypeScript 侧给出修复排期。

## 6. 功能请求与路线图信号

- **SwiftUI 主题定制（[#3257](https://redirect.github.com/a2ui-project/a2ui/issues/3257)）**：推进轨迹明确（#4024 Button/Card → [#4361](https://redirect.github.com/a2ui-project/a2ui/pull/4361) TextField，剩余 Text、Image），**大概率进入下一版本**。建议维护者规划剩余两个组件的 PR 以收敛该 Issue。
- **Schema 校验库无关化（[#4352](https://redirect.github.com/a2ui-project/a2ui/pull/4352)，`feat!` 破坏性变更）**：TS SDK 去除 zod、改为应用侧注入校验引擎。若合并，需要版本号跳升与迁移指南，**是下一个版本节点的关键决策项**。
- **开发者人机工学（[#4296](https://redirect.github.com/a2ui-project/a2ui/pull/4296)）**：移除函数调用嵌套深度 5 的独立上限（保留全局深度 50），横跨 Python/TS/Dart/Swift 及旧版 Kotlin SDK 五端同步——体现核心团队对跨 SDK 契约一致性的强约束。
- **Agent/MCP 技术栈投入信号**：[#4363](https://redirect.github.com/a2ui-project/a2ui/pull/4363) 中 litellm、mcp（modelcontextprotocol python-sdk）的批量升级表明 Agent SDK 的 AI 集成底座是持续维护重点。
- **蓝图文档作为架构源头的治理投入**：[#4365](https://redirect.github.com/a2ui-project/a2ui/issues/4365) / [#4366](https://redirect.github.com/a2ui-project/a2ui/pull/4366) 同日 Issue+PR 成对出现，补齐 Swift/SwiftUI 适配器偏差与 `b1dd6507`、`b161f9bd` commit pin 记录——文档与代码的强同步是这个项目的路线图信号本身。

## 7. 用户反馈摘要

从今日 Issue 描述中提炼的用户痛点（本日无评论原文披露）：

- **校验缺陷直接转化为 UI 冻结**（[#4236](https://redirect.github.com/a2ui-project/a2ui/issues/4236)，AndreAlmeidaDC）：一段 256 字符的常规输入值即可让渲染器永久挂起，用户对"合法 payload 即可打死渲染器"的攻击面感到担忧。
- **"照文档抄却得到错误结果"**（[#4364](https://redirect.github.com/a2ui-project/a2ui/issues/4364)，itsklimov）：用户按协议文档 contact form 示例格式化日期，因示例使用了实现不支持 token 而输出错误文本。对一个以协议规范为核心的项目，**文档示例即 API**，此类漂移伤害信任度最高。
- **跨渲染器体验不对等**（[#3257](https://redirect.github.com/a2ui-project/a2ui/issues/3257)，BBC6BAE9）：Theming 指南承诺的宿主定制能力在 SwiftUI 侧缺失，Swift 开发者感到被降级对待。
- **静默失败抬高排查成本**（[#3165](https://redirect.github.com/a2ui-project/a2ui/issues/3165)，nan-yu）：内联 catalog 的不可解析本地 `$ref` 晚失败、id 冲突静默丢弃，开发者期望在加载期即获得明确报错。

## 8. 待处理积压

| 条目 | 开启时长 | 风险与提醒 |
|---|---|---|
| [#4262](https://redirect.github.com/a2ui-project/a2ui/issues/4262)（P1, CI） | **6 天** | main 分支 CI 红灯，可能阻塞全部 10 个在途 PR 的安全合并。**最高优先级**。 |
| PR [#3981](https://redirect.github.com/a2ui-project/a2ui/pull/3981)（automations/triage-bot） | **19 天**（11-04 起） | 定义自动化与 triage-bot 技能的治理型 PR 长期未合并，拖得越久与仓库现状偏离越大。 |
| [#3165](https://redirect.github.com/a2ui-project/a2ui/issues/3165)（inline catalog 校验） | **41 天**（10-13 起） | 状态 `coding-agent-working` 但 **0 条评论**、今日有更新却无可见产出——需人工确认编码智能体是否实际在处理，避免"挂机"状态掩盖停滞。 |
| [#3257](https://redirect.github.com/a2ui-project/a2ui/issues/3257)（SwiftUI 样式） | 38 天 | 虽有 PR 持续推进，建议在 Text/Image 样式补齐后拆分或收敛关闭，避免巨型追踪 Issue 失焦。 |
| [#4236](https://redirect.github.com/a2ui-project/a2ui/issues/4236)（ReDoS） | 9 天 | Dart 侧修复已在 [#4360](https://redirect.github.com/a2ui-project/a2ui/pull/4360)，**TypeScript 侧（Issue 原始报告语言）尚无对应 PR**。 |

**健康度总评**：输入端活跃、贡献者多元、议题质量高（多为架构级一致性与规格漂移问题），项目基本面健康；但 **"10 PR 待合并 + 零合并吞吐 + main CI 红灯 6 天"** 构成当前最清晰的运营风险。建议维护者优先修复 #4262 恢复合并基线，随后按 P1→破坏性变更（#4352 需版本规划）→长期积压（#3981、#3165）的顺序清理队列。

---
*数据来源：GitHub（a2ui-project/a2ui），统计窗口为过去 24 小时（截至 2026-11-23）。*

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目动态日报

**项目**: [thesysdev/openui](https://github.com/thesysdev/openui)
**日期**: 2026-11-23
**数据来源**: GitHub Issues / PRs / Releases（过去 24 小时）

---

## 1. 今日速览

OpenUI 今日整体活跃度**中等偏高**：过去 24 小时共有 10 条 PR 更新（7 条待合并、3 条已合并/关闭）与 1 条新开 Issue，并发布了 1 个新版本 `@openuidev/server@0.5.0`，保持稳定的发版节奏。开发重心集中在三条线：**服务端 SDK 的 artifacts 生命周期管理**（已落地发版）、**lang-core 的规范一致性改进**，以及**官网/Dashboards 产品页的营销打磨**。值得注意的是，今日活跃 PR 几乎全部来自官方团队成员（Aditya-thesys、pd-builds、rahuldoval、AbhinRustagi），外部社区贡献与反馈流入较少（仅 1 条外部 Bug 报告，0 评论），社区互动是当前相对薄弱的一环。

---

## 2. 版本发布

### @​openuidev/server@0.5.0（Minor 版本）

- **发布 PR**: [#1677](https://redirect.github.com/thesysdev/openui/pull/1677)（作者 [@​AbhinRustagi](https://github.com/AbhinRustagi)，commit [`526efee`](https://github.com/thesysdev/openui/commit/526efee96c04111ed52babe0ebc8c949c5432df3)）
- **核心变更**: 新增 `openui.artifacts` API，服务端 SDK 现可对已保存的 artifacts（仪表盘等）进行 **list / read / update / delete / pin / unpin / share** 全生命周期管理。
- **设计语义**: 不传 `userId` 时操作覆盖整个组织（org-wide）；传入 `userId` 时以该用户身份执行（等价于其前端 token 的权限行为），与前端行为保持一致。
- **依赖关系**: 该功能构建于 #1659（sharing）之上，标志着服务端 SDK 从“只能创建/编辑仪表盘”扩展到“完整管理已保存内容”。
- **破坏性变更**: 无（Minor 版本，符合 semver 约定）。
- **迁移建议**: 无需强制迁移。建议服务端集成方升级后评估用 `openui.artifacts` 替换自行实现的列表/管理逻辑。发版流程由 Changesets 自动化（[#1690](https://redirect.github.com/thesysdev/openui/pull/1690)），升级方式：`npm i @​openuidev/server@0.5.0`。

---

## 3. 项目进展

今日 3 条 PR 关闭/合并，项目在**服务端 SDK 能力闭环**上迈出实质性一步：

| PR | 状态 | 意义 |
|---|---|---|
| [#1677](https://redirect.github.com/thesysdev/openui/pull/1677) feat(server): openui.artifacts | 已合并 | 服务端 SDK 补齐 artifacts 管理能力，直接产出 0.5.0 版本 |
| [#1690](https://redirect.github.com/thesysdev/openui/pull/1690) chore: version packages | 已关闭 | Changesets 自动发版 PR，落地 0.5.0 发布 |
| [#1695](https://redirect.github.com/thesysdev/openui/pull/1695) feat(site): /dashboards 卡片 | 已关闭 | 被同日新开的 [#1696](https://redirect.github.com/thesysdev/openui/pull/1696) 取代（同标题重构提交），属于快速迭代而非成果合并 |

**整体评估**：0.5.0 的发布使 `@openuidev/server` 形成“创建 → 编辑 → 共享 → 管理”的完整链路，服务端集成场景的核心缺口已被填补。此外，7 条待合并 PR 覆盖 lang-core 类型系统（[#1691](https://redirect.github.com/thesysdev/openui/pull/1691)）、数据溯源（[#1544](https://redirect.github.com/thesysdev/openui/pull/1544)）、构建期数据工具调用（[#1678](https://redirect.github.com/thesysdev/openui/pull/1678)）及官网三件套（[#1692](https://redirect.github.com/thesysdev/openui/pull/1692)、[#1694](https://redirect.github.com/thesysdev/openui/pull/1694)、[#1696](https://redirect.github.com/thesysdev/openui/pull/1696)），功能管道储备充足。

---

## 4. 社区热点

今日社区讨论热度**偏低**——唯一的外部活动是 Bug 报告 [#1693](https://redirect.github.com/thesysdev/openui/issues/1693)，暂无评论与点赞；其余活跃 PR 均为团队内部推进。

- **[#1693](https://redirect.github.com/thesysdev/openui/issues/1693)** [bug] lang-core: 组件实例的成员访问读取内部字段而非返回 null（作者：leninworld，0 评论 / 0 👍）
  报告者引用了 `spec/language.md` 第 3.1 节的规范原文，指出 evaluator 对 `toNumber` 已正确返回 0，但成员访问泄漏了内部 `ElementNode` 字段而非按规范返回 null。**诉求解读**：这是一位深度阅读语言规范并做边界测试的开发者，反映出 lang-core 用户群对“规范承诺 vs 实现行为”一致性的高要求——此类用户通常是构建严肃工具链的早期采用者，值得优先回应以建立规范公信力。

---

## 5. Bug 与稳定性

今日新增 Bug 1 条，无崩溃/回归类报告，整体稳定性平稳：

| 严重程度 | Issue | 描述 | 修复状态 |
|---|---|---|---|
| 🟡 中 | [#1693](https://redirect.github.com/thesysdev/openui/issues/1693) | lang-core evaluator 中组件实例的成员访问读取内部 `ElementNode` 字段而非按规范返回 null | **尚无对应 fix PR**（截至发稿 0 评论） |

**分析**：该问题属于**规范一致性缺陷**而非崩溃类 Bug，但存在内部字段意外泄漏的风险，可能让依赖 null 语义的防御性代码（如 `if (x.foo === null)`）产生不可预期分支。考虑到 lang-core 是底层组件，且 #1691 正在改动手上的是 lang-core 的类型/schema 体系，建议维护者评估是否可在该 PR 中顺带修复。

---

## 6. 功能请求与路线图信号

今日无新功能请求 Issue，但 **PR 动向本身是清晰的路线图信号**：

1. **服务端数据集成深化**：[#1678](https://redirect.github.com/thesysdev/openui/pull/1678)（dashboards 构建期间调用用户数据工具并预运行数据脚本）+ 已合并的 #1677，指向“agent 驱动 + 真实数据校验”的仪表盘生成链路，**大概率进入下一个小版本**。
2. **数据透明度/溯源（Provenance）**：[#1544](https://redirect.github.com/thesysdev/openui/pull/1544)（`dataSources` / `useDataSources` / `enableProvenance`，已持续 20 天仍在活跃更新）与官网侧 [#1692](https://redirect.github.com/thesysdev/openui/pull/1692)（在 API 页突出 sharing 与 source inspection）相互呼应，说明**溯源功能正处于“实现 + 叙事”双线推进的发布前阶段**。
3. **lang-core 类型系统打磨**：[#1691](https://redirect.github.com/thesysdev/openui/pull/1691) 将命名 prop 类型收敛到库级 JSON schema，减少 prompt 签名与 schema 的不一致，是降低 token 消耗与提升一致性的基础工程。
4. **营销与产品化**：三条 site PR（[#1692](https://redirect.github.com/thesysdev/openui/pull/1692)、[#1694](https://redirect.github.com/thesysdev/openui/pull/1694)、[#1696](https://redirect.github.com/thesysdev/openui/pull/1696)）统一 CTA 组件、新增 OpenDashboards 展示卡片，表明项目正处于**商业化/获客加速期**。

---

## 7. 用户反馈摘要

今日可用反馈样本极少（仅 1 条 Issue、0 条评论），提炼如下：

- **痛点**：lang-core 的规范文档与实现存在偏差（#1693），用户在按文档编写表达式时会命中未定义的内部字段行为，影响对语言语义的信任。
- **使用场景信号**：报告者直接研读 `spec/language.md` 并测试组件实例的类型转换边界，说明存在将 lang-core 作为**可编程组件语言**深度集成的用户群体，而非仅停留在 UI 生成层面。
- **无法评估项**：满意/不满意的量化反馈今日缺失——这本身也是一个信号：项目需加强 issue 模板引导与社区运营，降低外部用户参与门槛。

---

## 8. 待处理积压

以下条目需维护者关注（按滞留时长排序）：

| 条目 | 类型 | 滞留时长 | 状态与风险 |
|---|---|---|---|
| [#1544](https://redirect.github.com/thesysdev/openui/pull/1544) dataSources/provenance 特性 | 大型功能 PR | **20 天**（11-03 至今） | 今日仍在更新，属活跃长周期 PR；体量大、涉及 renderer API，建议拆分评审以避免合并风险堆积 |
| [#1629](https://redirect.github.com/thesysdev/openui/pull/1629) 模板与示例依赖更新 | Bot PR | **11 天**（11-12 至今） | 昨日有更新，所有免凭证验证已通过；依赖更新滞留易造成模板与最新 0.5.0 SDK 脱节，建议尽快合并 |
| [#1678](https://redirect.github.com/thesysdev/openui/pull/1678) 构建期数据工具调用 | 功能 PR | 4 天 | 正常评审周期内，暂无风险 |
| [#1693](https://redirect.github.com/thesysdev/openui/issues/1693) lang-core 成员访问 Bug | Bug | 新报 | **0 回应**，建议维护者至少先做规范符合性确认并打上 triage 标签 |

---

**健康度小结**：交付节奏 ✅ 稳定（自动发版 + 0.5.0 落地）｜功能管道 ✅ 充足（7 条待合并 PR）｜代码质量 ⚠️ 存在规范一致性缺口（#1693）｜社区活跃度 ⚠️ 偏低（外部反馈仅 1 条，0 讨论）。建议优先事项：修复 #1693、合并 #1629 依赖同步、推进 #1544 拆分评审。

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render 项目动态日报

**报告日期：** 2026-11-23 | **数据周期：** 过去 24 小时

---

## 1. 今日速览

今日 json-render 项目整体处于**低活跃度平稳期**：无新开 Issue、无新版本发布、无 PR 合并，唯一动态是社区贡献者 [zhangkom](https://redirect.github.com/vercel-labs/json-render/pull/502) 提交了一条 Bug 修复 PR。值得注意的是，该 PR 针对的是 Slack Actions 按钮组中重复 `action_id` 的合规性问题（关联 Issue [#466](https://redirect.github.com/vercel-labs/json-render/issues/466)），涉及流式渲染容错与规范校验两个核心场景，质量较高。从维护节奏看，项目今日无维护者侧动作，待审 PR 队列净增 1 条。整体健康度：无异常信号，但需关注外部贡献的审查响应速度。

---

## 2. 版本发布

今日无新版本发布。无破坏性变更或迁移事项。

---

## 3. 项目进展

今日**无 PR 被合并或关闭**，项目主干无增量变更。

待审进展方面，PR [#502](https://redirect.github.com/vercel-labs/json-render/pull/502) 的提出为 Issue #466 的修复提供了具体实现方案，将重复按钮 ID 的校验纳入 `CardSpecError` 错误体系，并在流式传输部分卡片期间跳过无效分组。若该 PR 通过审查并合并，将补齐 Slack Block Kit 规范中 `action_id` 唯一性约束这一校验缺口，属于**正确性与健壮性层面的边际改进**，对项目路线影响为增量级。

---

## 4. 社区热点

今日唯一活跃条目为 PR [#502 [OPEN] fix(chat): reject repeated button IDs within an Actions group](https://redirect.github.com/vercel-labs/json-render/pull/502)：

- **作者：** zhangkom
- **状态：** OPEN，待合并（今日新建，暂无评论、无 👍）
- **核心内容：** 当重复的 `Actions` 元素导致同一按钮 ID 多次实例化时，Slack 要求每个 actions block 内的 `action_id` 必须唯一。该 PR 通过 `CardSpecError` 上报重复项，并在部分卡片流式输出期间省略无效分组，以保证流式渲染不中断。

**诉求分析：** 该 PR 反映出两类真实使用痛点——其一，下游用户（很可能是将 json-render 输出对接 Slack 的集成方）在生产中遇到了因 LLM 生成重复 `Actions` 元素而被 Slack API 拒绝的问题；其二，修复方案选择了"报错 + 流式降级跳过"而非中断渲染，说明**流式场景下的容错性**是该项目用户的核心关注点。该 PR 尚无维护者回应，建议关注后续审查进展。

---

## 5. Bug 与稳定性

今日**无新增 Bug 报告**（Issue 通道 0 条）。存量相关 Bug：

| 严重程度 | 问题 | 状态 | 修复进展 |
|---|---|---|---|
| 中 | [#466](https://redirect.github.com/vercel-labs/json-render/issues/466)：重复 `Actions` 元素实例化同一按钮 ID，违反 Slack `action_id` 唯一性要求，导致生成卡片被 Slack 拒绝 | 待修复 | ✅ 已有 fix PR [#502](https://redirect.github.com/vercel-labs/json-render/pull/502)（OPEN，待审查合并） |

该问题严重程度评估为**中等**：不影响渲染库本身运行，但会导致下游 Slack 集成失败，且在 AI 生成卡片（重复元素概率天然偏高）的场景下触发率可能不低。流式期间跳过无效分组的处理方式可将影响降级为局部降级而非整体失败。

---

## 6. 功能请求与路线图信号

今日无新功能请求。

从 PR #502 可提取的**隐性路线图信号**：社区方向正朝向**规范合规校验体系**演进——`CardSpecError` 作为统一错误上报通道，配合流式降级策略，暗示未来可能有更多针对目标平台（如 Slack Block Kit）约束的校验规则被系统性纳入。若维护者采纳该模式，"多平台规范校验"或成为下一阶段的功能主线之一。此判断基于单一 PR，置信度中等，待维护者反馈验证。

---

## 7. 用户反馈摘要

今日 Issue 评论通道无新增内容，可提炼的反馈信号来自 PR #502 的上下文：

- **使用场景：** 用户在**流式渲染 AI 生成卡片**并对接 **Slack** 的场景下触发问题，表明 json-render 的典型用户群包含"LLM → 结构化卡片 → 聊天平台"链路的集成方。
- **痛点：** 生成端（LLM/模型）可能产出重复的 `Actions` 元素，而库此前缺少拦截机制，问题在消费端（Slack API）才暴露，排障成本后置。
- **对修复方案的偏好：** 期望"显式报错 + 流式不中断"的组合行为，说明用户重视错误可见性，但更不愿意牺牲流式输出体验。

> 注：以上为基于 PR 描述的推断性摘要，今日无直接用户评论数据可供原文引用。

---

## 8. 待处理积压

| 条目 | 状态 | 积压时长 | 建议 |
|---|---|---|---|
| PR [#502](https://redirect.github.com/vercel-labs/json-render/pull/502) | OPEN 待审 | 今日新建 | 尚属正常响应窗口内，建议维护者在近期安排审查；该 PR 关联 #466，合并后可同步关闭 Issue |
| Issue [#466](https://redirect.github.com/vercel-labs/json-render/issues/466) | OPEN | 未知（今日无活动） | 已有候选修复，建议维护者在审查 PR #502 时一并确认 #466 的复现路径是否被完全覆盖 |

**今日无长期未响应条目新增**。鉴于今日项目活动基数极小，建议维护者重点确保 PR #502 的审查闭环，避免外部贡献者（zhangkom）的修复热情因响应延迟而流失——这是低活跃期维持社区贡献黏性的关键。

---

*数据来源：GitHub API 快照（Issues / PR / Releases），统计周期为 2026-11-22 至 2026-11-23。链接均指向 vercel-labs/json-render 仓库。*

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报

**日期：** 2026-11-23 ｜ **数据来源：** [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)（过去 24 小时）

| 指标 | 数值 |
|---|---|
| Issues 更新 | 0（新开 0 / 活跃 0 / 关闭 0） |
| PR 更新 | 4（待合并 1 / 已合并·关闭 3） |
| 新版本发布 | 0 |

---

## 1. 今日速览

今日仓库呈现「工程收尾为主、社区侧静默」的格局：Issues 24 小时内零新增、零活跃、零关闭，PR 侧共 4 条更新、3 条收口。最值得关注的是两条挂起约 75 天的 **Open Generative UI** 相关 PR（[#6985](https://redirect.github.com/CopilotKit/CopilotKit/pull/6985)、[#6986](https://redirect.github.com/CopilotKit/CopilotKit/pull/6986)）于今日集中关闭，标志着该特性线（持久化历史恢复 + 渲染高度同步）完成阶段性闭环。自动化设施运转正常：docs 发布流水线与 Renovate 依赖机器人均有产出。今日无新版本发布。

---

## 2. 版本发布

本期无新版本发布，近 24 小时 Release 无变动。

---

## 3. 项目进展

今日共 3 条 PR 合并/关闭，整体属于「清理与收尾型」推进日：

- **[#6985](https://redirect.github.com/CopilotKit/CopilotKit/pull/6985) `feat(runtime): restore Open Generative UI from durable history`**（itsklimov，2026-09-09 创建，今日关闭，历时约 75 天）
  为 `generateSandboxedUi` 引入纯函数式「历史投影器」（history projector）并挂载到中间件执行路径，使从持久化历史恢复的生成式 UI 调用能复用流式解析器的完整展示逻辑（含 partial HTML 与 completion flags），并在滞后流（lagging streams）中保留活跃调用。这是 runtime 层面向 **durable execution / 会话回放** 的重要能力补齐。

- **[#6986](https://redirect.github.com/CopilotKit/CopilotKit/pull/6986) `fix(react-core): keep the Open Generative UI frame height in sync with its content`**（itsklimov，同日创建，今日关闭）
  修复沙箱 body 高度仅在 `generating` 翻转为 false 时测量一次的时序缺陷：当 HTML 与完成标志在同一渲染帧到达时测量被跳过，frame 会停留在 `initialHeight`。属 react-core 渲染稳定性修复。

- **[#8537](https://redirect.github.com/CopilotKit/CopilotKit/pull/8537) `[docs-release] chore: release docs to prod`**（copilotkit-bot，11-22 关闭）
  Staging 校验通过后合并，将 `docs.copilotkit.ai` 固定到指定 digest。文档发布流水线（staging 验证 → prod 固定）健康运转。

**整体评估：** Open Generative UI 特性簇（生成、恢复、渲染细节）完成闭环，配合 0 条 Issue 消化，单日工程净推进量中等偏上。

> ⚠️ 说明：数据源未区分「merged」与「closed without merge」，上述 3 条 PR 建议以仓库 commit 记录确认最终落地方式（亦不排除 #6985/#6986 被新实现替代而关闭的可能）。

---

## 4. 社区热点

本窗口内无活跃 Issue、PR 评论数据缺失，**今日无可提炼的社区讨论热点**。就工程关注度而言，事件集中于：

- [#6985](https://redirect.github.com/CopilotKit/CopilotKit/pull/6985)：75 天长线 PR 今日收口，是本日最高信号量事件。
- [#6986](https://redirect.github.com/CopilotKit/CopilotKit/pull/6986)：与 #6985 同作者、同日期创建、同日关闭，明显属于同一特性工作流的配套修复。

**诉求分析（基于 PR 内容而非评论）：** 「从持久化历史恢复生成式 UI」对应生产环境的真实场景——页面刷新、会话恢复、审计回放时，已生成的沙箱 UI 必须可重现；「frame 高度同步」则对应生成式 UI 嵌入宿主应用时的布局稳定性。两者共同指向同一个目标：**生成式 UI 的生产可用性**。

---

## 5. Bug 与稳定性

今日 **无新增 Bug 报告**（Issues 为 0 条）。窗口内唯一缺陷修复为：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 中低（视觉/布局类，不涉及崩溃或数据损坏） | Open Generative UI frame 高度不同步：HTML 与完成标志同帧到达时测量被跳过，frame 停留 `initialHeight` | ✅ 已有 fix PR [#6986](https://redirect.github.com/CopilotKit/CopilotKit/pull/6986)，现已关闭 |

无崩溃、回归或安全问题报告。

---

## 6. 功能请求与路线图信号

今日无新增功能请求（Issues 0 条）。从 PR 动向可推断的路线图信号：

- **Durable execution 深化**：[#6985](https://redirect.github.com/CopilotKit/CopilotKit/pull/6985) 中的 `durable history`、`middleware run path`、`lagging streams` 等关键词表明 runtime 正系统性地向持久化执行与状态回放演进。若已合入，**极可能构成下一个版本的核心卖点**。
- **发版节奏预期**：两条 feature/fix PR 集中收口 + 本期无 Release，存在「收口后择机发版」的可能，建议未来数日重点关注 [Releases 页面](https://github.com/CopilotKit/CopilotKit/releases)。
- **工程化持续投入**：docs staging→prod 的 digest 固定流程（[#8537](https://redirect.github.com/CopilotKit/CopilotKit/pull/8537)）与 Renovate 自动依赖管理（[#8478](https://redirect.github.com/CopilotKit/CopilotKit/pull/8478)）显示基础设施自动化成熟度较高。

---

## 7. 用户反馈摘要

本数据窗口内无 Issue 评论数据（Issues 0 条，PR 评论字段缺失），**无法提炼真实用户反馈，本期不做主观概括以避免失真**。

跟踪建议：Open Generative UI 是近期工程投入的明确重心，该能力（LLM 生成沙箱 UI + 历史恢复）上线后，用户对**沙箱安全性、恢复一致性、跨端渲染**的反馈值得下一周期重点监测，可结合 Discord / 社区论坛等站外渠道补充信号。

---

## 8. 待处理积压

- **[#8478](https://redirect.github.com/CopilotKit/CopilotKit/pull/8478) `chore(deps): update github actions`**（Renovate，11-18 开启，**已挂起 5 天**）
  内容为 GitHub Actions 小版本升级（`actions/create-github-app-token` v3.3.0 → v3.4.0、`astral-sh/setup-uv` 等）。风险低、工作量小，建议维护者尽快过审合并，避免自动化依赖更新形成堆积。
- **流程观察**：#6985 / #6986 从创建到关闭历时约 75 天，反映大型特性 PR 的评审/迭代周期偏长。虽已收口，后续类似长线 PR 建议拆分为更小粒度或设置阶段性 checkpoint，以降低评审延迟风险。
- 本窗口数据中未显示长期未响应的 Issue，暂无其他可列积压项。

---

### 健康度小结

| 维度 | 评级 | 依据 |
|---|---|---|
| 工程进展 | ★★★★☆ | 3 条 PR 收口，含 1 条重要 runtime 特性 |
| 社区活跃度 | ★☆☆☆☆ | Issues 全线为零 |
| 自动化成熟度 | ★★★★★ | docs 发布 + 依赖机器人均正常产出 |
| 积压风险 | ★★☆☆☆ | 仅 1 条低风险 dep PR 待合并 |

**结论：** 今日是典型的「工程收尾日」——核心特性线收口、基础设施顺畅、社区侧静默。短期关注点：#8478 的合并处置，以及 Open Generative UI 持久化能力是否随下一次版本发布正式落地。

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*