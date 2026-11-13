# 生成式 UI 生态日报 2026-11-13

> Issues: 39 | PRs: 123 | 覆盖项目: 4 个 | 生成时间: 2026-11-13 05:43 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析

**数据窗口**：2026-11-13（过去 24 小时）｜ **覆盖项目**：a2ui、OpenUI、json-render、CopilotKit

---

## 1. 生态全景

生成式 UI 正从“各家私有开源演示”走向**分层化、协议化的工程体系**。最显著的信号是协议层与框架层的节奏开始咬合：a2ui 在 v1.0 冲刺的同时，CopilotKit 单日围绕 A2UI 1.0 完成协议渲染修复（v1.87.1）、google-adk 示例升级（#8384）与 playground 产品化，且 a2ui 仓库内正打磨 CopilotKit 合作文档（#4204/#4210）——双方存在实质生态协同。垂直方向上，OpenUI 以单日 8 个版本的节奏深耕 dashboard 场景，json-render 在轻量渲染内核上启动 Swift 跨端扩张（#470）。但四个项目同日集中暴露三类共性问题——**安全合规门槛显性化、发布工程滞后于主干、流式边界健壮性缺口**——说明赛道整体正处于从“能用”到“可上生产”的攻坚期。

---

## 2. 各项目活跃度对比

| 指标（24h） | a2ui | OpenUI | json-render | CopilotKit |
|---|---|---|---|---|
| Issue 更新 | 29（活跃/新开 21，关闭 8） | 2（新开 1，关闭 1） | 4（活跃 1，关闭 3） | 4（活跃 4，关闭 0） |
| PR 更新 | 50（待合并 40，合并/关闭 10） | 21（合并/关闭 17，待合并 4） | 9（待合并 4，合并/关闭 5） | 43（待合并 19，合并/关闭 24） |
| Release | 0 | 8（含 Major：dashboard-library 1.0.0） | 0 | 2（v1.87.1、python-sdk v0.1.97） |
| 粗略合并吞吐* | ~20% | ~81% | ~56% | ~56% |
| 贡献结构 | 维护者 + 企业用户 + 社区渲染器 | 核心团队 + AI 机器人，外部参与低 | 8 位贡献者，协作管道顺畅 | 核心团队 + 外部贡献者 + 学生计划 |

\* 基于 24h 更新窗口中合并/关闭占 PR 更新的比例，含存量条目更新，仅作节奏参考。

**三点观察**：
- **量与节奏错位**：a2ui 更新总量最高（79 项）却 0 发版、40 条 PR 积压，投入尚未转化为发布；OpenUI 以 23 项更新交付 8 个版本，“更新→发布”转化率断层领先。
- **json-render 是唯一零新增 Bug 报告的项目**，Issue 关闭率 75%，是四个项目中最干净的健康度样本。
- OpenUI 的 PR 产出大量来自 AI 机器人（devin-ai-integration、thesys-pr-creator），是“AI 构建 AI 基础设施”的极端样本。

---

## 3. 共同关注的功能方向

**① 安全与权限语义收紧（4 个项目中 3 个当日有安全动作，最强共性）**
- a2ui：Zod 3.25.76 含 CVE-2023-54404，三 Issue 联动（#4147/#4192/#3812），企业用户直言“不修则难以采用”；
- OpenUI：删除文档站三个无鉴权调用内部 API Key 的端点（#1618/#1619）；
- CopilotKit：默认开启的线程命名功能克隆完整 Agent（含写入工具）重跑任务（#8375），当日提交 breaking fix #8377（`runAgent({ tools: [] })` 最小权限语义）。

**② 多端 / 多语言渲染**
- a2ui：Swift/TS/Dart/Python 四语言 SDK 之上，官方 Go SDK（#4200）提交，KMP、微信小程序社区渲染器待收录（#3992/#3750），另有 SwiftUI 主题化对等诉求（#3257）；
- json-render：Swift/SwiftUI 渲染器 PR（#470），定位“一份 spec，多端渲染”；
- CopilotKit：Angular 一等公民待遇诉求（#6641）；
- OpenUI 是唯一 React 单栈、无跨端信号的项目——缺席本身即信息。

**③ 流式场景的边界健壮性**
- json-render：流式 transform 状态跨 text block 泄漏吞内容（#419→#426）；
- CopilotKit：AG-UI 事件交错致重复消息 ID（#3644，积压 7 个月）；
- a2ui：Direct JSON 流中 `updateDataModel` 参数顺序错误替换整棵数据模型（#4132）；
- OpenUI：dashboard 重载时缓存上次查询结果，避免默认零值（#1607/#1627）。

**④ 文档/示例与主干同步（发布工程）**
- a2ui：npm 最新包仍是 v0 旧格式，v1.0 字段缺失被用户公开追问（#4223）；
- json-render：5 个已合并修复未随版本发布，用户无法通过升级解困；
- OpenUI：Svelte 示例依赖漂移导致“开箱即坏”（#1626）；
- CopilotKit：同一 demo 三套 system prompt（#6936），文档迁移中修复 7,518 个 URL 里的 400 个 404（#8373）。

**⑤ 面向模型的组件契约设计**
- OpenUI：组件统一单一参数签名 + prompt 逐参数标注 `$variable`（#1621），“模型学会一个签名即可编写其余组件”；
- a2ui：Dart skill generator 按 blueprint 生成 SKILL.md（#4217），把组件能力编码为 agent 可读技能；
- json-render：声明式指令/条件语义持续增强（#367 + #458/#471 配对实现）。

---

## 4. 差异化定位分析

| 维度 | a2ui | OpenUI | json-render | CopilotKit |
|---|---|---|---|---|
| **生态位** | 协议标准 + 多语言 SDK | 垂直产品（dashboard） | 轻量渲染内核 | 全栈 agent 框架 |
| **技术路线** | catalog/envelope/ProtocolVersion，跨语言一致性优先，与 Google ADK/A2A 生态绑定 | 组件 schema + prompt 工程 + 云服务（react-headless/ui/server 分层） | spec 驱动 + 流式 transform + codegen，轻依赖 | AG-UI 事件流 + React 运行时 + LangGraph/ADK 集成 |
| **目标用户** | 需多语言多端一致渲染 agent UI 的平台/企业团队 | 要开箱即用 dashboard 生成能力的 SaaS 团队 | Vercel/Next.js 栈、追求内核可控的开发者 | 构建 agent 应用的 React 优先全栈团队 |
| **当前阶段** | v1.0 冲刺 + 生态扩张 | 产品化快速迭代 | 稳定打磨 + 跨端扩张 | 功能冲刺 + 品牌重组（→ OpenFuse） |

四个项目恰好构成生态分层的活样本：**a2ui 在定义协议层，CopilotKit 作为框架层集成 A2UI 1.0，json-render 提供可独立使用的渲染内核，OpenUI 在应用层做垂直整合**。治理风格同样分化：a2ui 近似标准委员会（跨 4 语言 API 决策悬置 36 天，#3061），CopilotKit 走企业化运营（playground 迁移 open.bot、品牌重组），OpenUI 以 AI 机器人压缩开发成本换取发布速度，json-render 保持小团队高协作密度。

---

## 5. 社区热度与成熟度

- **a2ui：参与广度最高，治理瓶颈最重**。企业用户（Coolblue）提交过渡方案、产线用户系统性反馈架构摩擦（#4161–#4163）、社区渲染器踊跃投稿；但 40 条待合并 PR、36 天无结论的跨语言决策、npm 滞后，说明“标准制定”模式的协调成本正在显现。
- **CopilotKit：吞吐健康，长尾有债**。单日关闭 24 个 PR（吞吐 56%），外部贡献者主动提交 Cookbook（#8362）；但 #3644 类 7 个月积压 bug 提示核心可靠性问题响应偏慢。
- **OpenUI：速度最快，外部基本盘最薄**。24h 内完成“发布→发现回归→修复→待再发版”闭环，执行力强；但 Issue 仅 2 条、外部贡献 1 个 PR，社区验证面窄，且 server 0.4.2 鉴权路径回归反映发布前测试覆盖不足。
- **json-render：量小质优**。0 新增 Bug、3 个存量 Bug 全部闭环、co-author 协作管道顺畅；风险集中在 ~3 周 PR 评审周期与已合并修复未发版。

**成熟度光谱**：json-render（内核稳定，打磨期）> OpenUI（产品快速成熟，Major 落地即现 5 项行为 bug，“高速迭代换稳定”）> CopilotKit（库向平台演进的过渡期）> a2ui（标准定稿前夜，协议未定稿 + 发布未跟上 = 采用风险窗口）。

---

## 6. 值得关注的趋势信号

1. **协议分层成型，“选层”比“选型”更重要**。a2ui 出协议、CopilotKit 集成、json-render 独立 spec、OpenUI 自建 schema——生成式 UI 正在重演前端生态“标准 + 框架 + 渲染器 + 组件库”的分层史。*参考价值*：选型时优先评估对开放协议（A2UI 等）的兼容性，避免私有 schema 锁定；协议兼容的渲染器将获得生态杠杆。

2. **安全语义从加分项变为准入门槛**。三项目当日均有安全动作，CopilotKit 以 breaking change 修正“隐形 Agent 携带写入工具执行”是标志性事件。*参考价值*：把“Agent 意外执行副作用操作”纳入威胁模型；SDK 依赖锁定（如 a2ui 的 Zod 3.x）会传导为下游合规风险，评估时应检查依赖 CVE 链与升级路径。

3. **多端渲染是下一竞争点**。Swift 渲染器同日出现在两个项目，KMP、微信小程序等社区渲染器涌现。*参考价值*：Web-only 方案在移动/桌面诉求出现时将面临架构性补课；有多端规划者优先考察 spec 的平台无关性。

4. **“为模型设计 API”成为工程纪律**。单一参数签名、`$variable` 标注、SKILL.md 生成，本质都是把组件契约的“模型可学习性”作为一等设计目标。*参考价值*：自建组件库时应统一签名模式并提供机器可读的参数说明。

5. **发布工程是普遍短板，“主干 ≠ 可用”**。四个项目全部存在代码先行、包/文档滞后。*参考价值*：生产选型看 release 节奏与 changelog 质量而非 main 分支；Major 版本（如 dashboard-library 1.0.0）建议等首个 patch 再采用——当日数据里它还有 5 项行为 bug 等待 1.0.1。

6. **AI 机器人深度参与基建开发**。OpenUI 的贡献主体为核心团队 + AI agent，且当日修复闭环高度依赖自动化流水线。*参考价值*：评估项目健康度时应区分人类评审与机器人产出的比例；“AI 产出 + 快速人审”可能成为高迭代项目的标配，但其质量保障模式与传统社区评审不同，需区别对待。

---

*本报告基于 2026-11-13 单日 24h 窗口的公开 Issue/PR/Release 数据，方向性结论建议结合更长周期验证；各条目状态以仓库实际为准。*

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# 📊 a2ui 项目动态日报

**日期：2026-11-13** ｜ 仓库：[a2ui-project/a2ui](https://github.com/a2ui-project/a2ui) ｜ 数据窗口：过去 24 小时

---

## 1. 今日速览

a2ui 今日保持高活跃状态：24 小时内 **Issue 更新 29 条**（新开/活跃 21、关闭 8）、**PR 更新 50 条**（待合并 40、合并/关闭 10），无新版本发布。今日主线清晰：**a2ui.org 文档站完成 MkDocs → Astro 迁移收官**（3 个清理 PR 合并、追踪 Issue 闭环），但迁移引发部署依赖回归，当日即出现热修复 PR。与此同时，**Zod 4 升级与安全漏洞（CVE-2023-54404）** 形成三 Issue 联动的议题集群，**官方 Go SDK（PR #4200）、Dart skill generator** 等生态扩张 PR 集中提交。整体看，项目处于 v1.0 冲刺与生态扩张并行的活跃开发期，维护者一线响应（first-line-handled）覆盖率高、docsite 迁移 48 小时闭环体现强执行力；但 **40 条待合并 PR 的评审积压**与 npm 发布滞后于主干，是当前两个值得关注的健康度信号。

---

## 2. 版本发布

今日无新版本发布。两个发布相关信号值得记录：

- [PR #4215](https://redirect.github.com/a2ui-project/a2ui/pull/4215) 引入 `release_notes.py` 与发布包清单，使发布 PR 可从历史自动生成 17 个包的 CHANGELOG——**发布流程自动化重构已启动**；
- [Issue #4223](https://redirect.github.com/a2ui-project/a2ui/issues/4223) 反映：上游源码已支持 v1.0 `@` 前缀 envelope 字段（`@catalogId`/`@accessibility`/`@metadata`/`@checks`），但 npm 上最新的 `@a2ui/web_core@0.15.0` 仍为旧格式，用户已公开追问发布计划——**发布节奏滞后于主干开发**。

---

## 3. 项目进展

### 3.1 文档站迁移（MkDocs → Astro）完成收尾 ✅

由 ditman 主导的 docsite 退休计划在约 48 小时内快速闭环：

| 项目 | 内容 | 状态 |
|---|---|---|
| [Issue #4209](https://redirect.github.com/a2ui-project/a2ui/issues/4209) | 清理旧 docsite 追踪 Issue | 已关闭 |
| [PR #4211](https://redirect.github.com/a2ui-project/a2ui/pull/4211) | 迁移活跃资源与 CNAME 出 `docs/public/` | 已合并 |
| [PR #4212](https://redirect.github.com/a2ui-project/a2ui/pull/4212) | 重定向 workflows/context7/仓库链接 | 已合并 |
| [PR #4213](https://redirect.github.com/a2ui-project/a2ui/pull/4213) | 删除 `docs/public/` 与 MkDocs 脚手架 | 已合并 |
| [Issue #1458](https://redirect.github.com/a2ui-project/a2ui/issues/1458) | 5 月提出的 "替换 mkdocs" 议题 | 随之关闭 |

a2ui.org 现完全由 `docs/site/`（Astro）构建部署。**后续跟进**：#4213 移除依赖时误删 `ghp-import`，导致 Docs workflow 无法部署 gh-pages，[PR #4221](https://redirect.github.com/a2ui-project/a2ui/pull/4221) 当日提交热修复；[Issue #4222](https://redirect.github.com/a2ui-project/a2ui/issues/4222)（锁定 `requirements-docs.txt` 依赖版本）与 [Issue #4220](https://redirect.github.com/a2ui-project/a2ui/issues/4220)（RFC：`docs/site` 改用 Yarn 并入根 workspace）作为流程改进同日提出。

### 3.2 渲染器健壮性

悬置近 4 个月的 [PR #2088](https://redirect.github.com/a2ui-project/a2ui/pull/2088)（共享渲染器 fallback 机制，[Issue #2013](https://redirect.github.com/a2ui-project/a2ui/issues/2013) 的设计落地）今日关闭：为 web_core 引入类型级契约，使 React 等三个 web 渲染器在未知组件场景下展示统一降级 UI，而非向终端用户暴露 `[Loading {id}...]` 调试占位符与红色错误文案。

### 3.3 问题闭环（8 个 Issue 关闭）

- [#3687](https://redirect.github.com/a2ui-project/a2ui/issues/3687)：main 分支 eval 失败（关联 PR #3677）——CI 质量门禁恢复
- [#3752](https://redirect.github.com/a2ui-project/a2ui/issues/3752)：Quickstart 主打的 Restaurant Finder 等 Python 示例 agent 因 #3269 API 移除而崩溃——新手引导修复
- [#3743](https://redirect.github.com/a2ui-project/a2ui/issues/3743)：Lit DateTimeInput 可选属性在严格模板检查下报错
- [#3492](https://redirect.github.com/a2ui-project/a2ui/issues/3492)：v1.0 custom functions 文档未发布 + 示例缺 `allowedCallers`
- [#2590](https://redirect.github.com/a2ui-project/a2ui/issues/2590)：TypeScript 包通配符 barrel export → 显式命名导出重构
- [#3931](https://redirect.github.com/a2ui-project/a2ui/issues/3931)：周度合规报告归档

**小结**：今日合并/关闭以文档基础设施现代化为主轴、辅以多语言 bug 闭环与示例修复，v1.0 前的清理工作稳步推进。

---

## 4. 社区热点

**1. [Issue #3061](https://redirect.github.com/a2ui-project/a2ui/issues/3061)（💬 7 评论 ｜ 10-08 提出 ｜ needs-team-input）— 今日讨论最热**
移除 `CapabilitiesOptions.componentEnvelopeRef`、以 `ProtocolVersion` 纯粹门控 catalog format。这是横跨 **Swift/TypeScript/Dart/Python** 四语言的核心 SDK 变更，源于多版本 capabilities 协商时的 schema 损坏。36 天未决的背后，是**跨语言 API 一致性决策成本高**的现实。

**2. [Issue #3687](https://redirect.github.com/a2ui-project/a2ui/issues/3687)（💬 6 评论 ｜ 已关闭）**
main 分支 eval 失败引发的 CI 稳定性讨论，已随修复闭环。

**3. [Issue #3519](https://redirect.github.com/a2ui-project/a2ui/issues/3519)（💬 4 评论）**
官方 Agent 开发指南仅覆盖 v0.8/v0.9、引用不存在的 `render`/`update` 操作、结尾遗留 TODO。诉求明确：**v1.0 时代文档必须跟上**——[PR #4199](https://redirect.github.com/a2ui-project/a2ui/pull/4199) 已提交针对性更新，等待合并。

**4. [Issue #3257](https://redirect.github.com/a2ui-project/a2ui/issues/3257)（💬 4 评论）**
SwiftUI 渲染器无法自定义 Basic Catalog 样式（Web 有 CSS 变量、Flutter 读 ThemeData、SwiftUI 缺位）。诉求：**三大客户端平台主题化能力对等**。

**5. Zod 议题集群（3 条 Issue 联动）**
[#3812](https://redirect.github.com/a2ui-project/a2ui/issues/3812)（💬 3）、[#4147](https://redirect.github.com/a2ui-project/a2ui/issues/4147)（💬 2）、[#4192](https://redirect.github.com/a2ui-project/a2ui/issues/4192) 联合指向同一矛盾：**SDK 锁定 Zod 3.25.76（含 CVE），而 Zod 4 又破坏 web_core 校验错误格式化**，企业用户被迫自带过渡方案。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| **P1** | [#4195](https://redirect.github.com/a2ui-project/a2ui/issues/4195) | SwiftUI `EnvironmentValues`（a2uiCatalogs/a2uiDefaultCatalogID）公开可写，破坏 “仅由 Surface 设置” 的封装约定 | ❌ 无 fix PR |
| **P2·安全** | [#4147](https://redirect.github.com/a2ui-project/a2ui/issues/4147) | Zod 3.25.76 含 CVE-2023-54404（4.6.6+ 修复），阻塞企业安全合规采用 | ❌ waiting-for-author-response |
| **P2·安全** | [#4192](https://redirect.github.com/a2ui-project/a2ui/issues/4192) | 社区过渡提案：依赖 `zod ^4.6.6` + 从 `zod/v3` 子路径导入 | 提案中 |
| **P2** | [#3812](https://redirect.github.com/a2ui-project/a2ui/issues/3812) | web_core 0.14.0 在 zod 4 下 `result.error.errors` 为 undefined，校验失败抛 TypeError | ❌ needs review |
| **P2** | [#4173](https://redirect.github.com/a2ui-project/a2ui/issues/4173) | web_core v0.9 严格校验仍放行 returnType 错误/参数无效的函数调用（12 个 spec 用例应判 invalid） | ❌ |
| **P2** | [#4132](https://redirect.github.com/a2ui-project/a2ui/issues/4132) | Direct JSON 流中 `updateDataModel` 先 value 后 path 时整棵数据模型被替换 | ❌ |
| **P2** | [#4188](https://redirect.github.com/a2ui-project/a2ui/issues/4188) | `json_schema_builder` 遇 `$id`/`$anchor` 属性名抛 TypeError，catalog 无法用 catalog_definition.json 自校验 | ❌ |
| **P2** | [#4059](https://redirect.github.com/a2ui-project/a2ui/issues/4059) | `@a2ui/markdown-it@0.2.2` peer 依赖与 web_core 0.15.0 冲突（#1766/#1930 老问题复发） | ❌ |
| **P2** | [#3158](https://redirect.github.com/a2ui-project/a2ui/issues/3158) | `@a2ui/react` 0.13.0 在无 DOM 环境（SSR/Node）import 即崩 | ✅ [PR #3197](https://redirect.github.com/a2ui-project/a2ui/pull/3197) 待 review |
| **P3** | [#4193](https://redirect.github.com/a2ui-project/a2ui/issues/4193) | a2ui_core `formatString` 将 ≥2^63 整数打印为 int64 上限值 | ❌ |
| **P3** | [#4194](https://redirect.github.com/a2ui-project/a2ui/issues/4194) | 未知 envelope key 与不支持的 version 报告相同 `/version` 路径，错误定位混乱 | ❌ |
| **CI** | 文档部署回归 | `ghp-import` 被误删致 Docs workflow 失败 | ✅ [PR #4221](https://redirect.github.com/a2ui-project/a2ui/pull/4221) 待合并 |

**风险研判**：P1 SwiftUI 封装问题与 Zod 安全集群是最需维护者投入的两条线。另外，[leoafarias](https://redirect.github.com/a2ui-project/a2ui/issues/4188) 两日内连报 3 个核心层缺陷（#4188/#4193/#4194），提示**校验层在边界输入下的健壮性需要系统性加固**（可结合 #4173 的 12 个 spec 用例缺口与 [PR #4216](https://redirect.github.com/a2ui-project/a2ui/pull/4216) 的 Dart conformance 全覆盖工作统筹考虑）。

---

## 6. 功能请求与路线图信号

**生态扩张（最强信号）**
- [PR #4200](https://redirect.github.com/a2ui-project/a2ui/pull/4200)：**官方 Go A2UI SDK**（含 Go ADK v2 + A2A restaurant finder 示例）——若合并将新增一种官方服务端语言
- [PR #4217](https://redirect.github.com/a2ui-project/a2ui/pull/4217)：Dart **skill generator**（按 blueprint 生成 SKILL.md）
- [PR #3992](https://redirect.github.com/a2ui-project/a2ui/pull/3992) / [PR #3750](https://redirect.github.com/a2ui-project/a2ui/pull/3750)：Kotlin Multiplatform、微信小程序社区渲染器收录

**v1.0 冲刺信号**
- [PR #4126](https://redirect.github.com/a2ui-project/a2ui/pull/4126)：删除 Lit v0.8 适配器（v1.0 清理）
- [PR #4184](https://redirect.github.com/a2ui-project/a2ui/pull/4184)：Express 格式支持 `oneOf`/`anyOf`/`allOf`/`$defs`（跨 TS/Dart/Python）——真实 catalog schema 兼容性补齐
- [PR #4199](https://redirect.github.com/a2ui-project/a2ui/pull/4199)：Agent 开发指南 v1.0 化

**组件能力请求**
- [Issue #4075](https://redirect.github.com/a2ui-project/a2ui/issues/4075)：`ComponentCommon` 增加声明式 `visible` 属性（角色可见性/渐进披露场景）
- [Issue #3257](https://redirect.github.com/a2ui-project/a2ui/issues/3257)：SwiftUI 主题化能力

**企业级实践文档**（产线用户反馈）
- [Issue #4162](https://redirect.github.com/a2ui-project/a2ui/issues/4162)：客户端函数表达式纯度、fail-loudly 参数契约、服务端事务权威
- [Issue #4163](https://redirect.github.com/a2ui-project/a2ui/issues/4163)：Catalog 设计最佳实践（防腐层建模、语义粒度、协议 vs 数据版本化）

**路线图判断**：结合 Go SDK、Dart 工具链（#4216/#4217）、发布自动化（#4215）与 v1.0 清理/文档 PR 的密度，下一阶段大概率是 **v1.0 系列的规模化正式发布**（同步解决 #4223 反映的 npm 滞后）；`visible` 属性、SwiftUI 主题化等组件级需求尚处收集阶段，短期内进入版本的可能性中等。

---

## 7. 用户反馈摘要

**真实痛点**
1. **企业安全合规是硬门槛**：[#4147](https://redirect.github.com/a2ui-project/a2ui/issues/4147) 直言不修复 CVE 则企业难以采用；[#4192](https://redirect.github.com/a2ui-project/a2ui/issues/4192)（来自 Coolblue 共享聊天包团队）被迫自带过渡方案——**安全升级路径缺失正在劝退企业用户**。
2. **非浏览器环境工程化受挫**：SSR import 崩溃（[#3158](https://redirect.github.com/a2ui-project/a2ui/issues/3158)）、zod 4 冲突（[#3812](https://redirect.github.com/a2ui-project/a2ui/issues/3812)）、peer 依赖冲突（[#4059](https://redirect.github.com/a2ui-project/a2ui/issues/4059)，与 #1766/#1930 同型反复出现）——**npm 版本兼容性管理是持续性痛点**。
3. **发布滞后削弱信任**：[#4223](https://redirect.github.com/a2ui-project/a2ui/issues/4223) 用户对照源码与 npm 包发现 v1.0 字段缺失，公开追问发布状态。
4. **新手路径断裂**：Quickstart 示例崩溃（[#3752](https://redirect.github.com/a2ui-project/a2ui/issues/3752)，已修）、核心指南停留在 v0.9（[#3519](https://redirect.github.com/a2ui-project/a2ui/issues/3519)）。
5. **生产级深度使用暴露边界**：RandalSchwartz 报告 Dart 响应式求值中**未解析（null）必填参数静默绕过 argumentSchema 校验**（[#4161](https://redirect.github.com/a2ui-project/a2ui/issues/4161)），并系统提出企业迁移中的 DTO 直搬、粒度设计等架构摩擦（#4162/#4163）。

**正面信号**
- 客户端函数架构（Dart 函数编译为 preact_signals computed、消除 LLM 往返延迟）被产线用户评为 "major architectural win"（#4162）
- 社区移植热情高：KMP、微信小程序（10 亿 MAU 平台）等渲染器涌现；CopilotKit 相关合作文档持续打磨（[PR #4204](https://redirect.github.com/a2ui-project/a2ui/pull/4204)、[PR #4210](https://redirect.github.com/a2ui-project/a2ui/pull/4210)）
- 维护者响应速度快，docsite 迁移 48 小时闭环体现强执行力

---

## 8. 待处理积压

| 项目 | 悬置时长 | 状态 | 关注理由 |
|---|---|---|---|
| [Issue #3061](https://redirect.github.com/a2ui-project/a2ui/issues/3061) | 36 天 | needs-team-input | 跨 4 语言核心 API 变更，讨论最热（💬7）却无结论 |
| [PR #3197](https://redirect.github.com/a2ui-project/a2ui/pull/3197)（修 #3158） | 30 天 | needs review | React SSR 崩溃修复悬置一月，影响所有 Node/SSR 用户 |
| [Issue #3257](https://redirect.github.com/a2ui-project/a2ui/issues/3257) | 28 天 | needs-team-input | SwiftUI 主题化，平台能力对等诉求 |
| [Issue #3519](https://redirect.github.com/a2ui-project/a2ui/issues/3519) | 22 天 | needs-team-input | 修复 PR #4199 已就绪，建议合并闭环 |
| [Issue #3812](https://redirect.github.com/a2ui-project/a2ui/issues/3812) | 11 天 | needs review | Zod 4 兼容，安全集群组成部分 |
| [Issue #4147](https://redirect.github.com/a2ui-project/a2ui/issues/4147) | 3 天 | waiting-for-author-response | 安全敏感，建议与 #4192/#3812 统一制定 Zod 4 迁移方案 |
| [PR #3750](https://redirect.github.com/a2ui-project/a2ui/pull/3750) / [PR #3992](https://redirect.github.com/a2ui-project/a2ui/pull/3992) | 15 / 8 天 | 待合并 | 社区渲染器收录，低成本高 goodwill |
| [PR #4200](https://redirect.github.com/a2ui-project/a2ui/pull/4200) | 1 天 | needs-triage | Go SDK 大型 PR，需尽早明确评审计划 |

**结构性提醒**：当前 40 条待合并 PR 中大量处于 needs-triage/needs review 状态，**评审吞吐量是项目最明显的瓶颈**。建议优先级排序：安全（Zod 集群）→ P1（#4195）→ 用户体验回归（#3158/#3197）→ 文档闭环（#4199）。

---

*数据截至 2026-11-13，基于 GitHub 过去 24 小时 Issue/PR 更新与 Releases 数据生成。*

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目日报

**仓库**：[thesysdev/openui](https://github.com/thesysdev/openui) | **报告日期**：2026-11-13 | **统计窗口**：过去 24 小时

---

## 1. 今日速览

OpenUI 今日保持高强度迭代：24 小时内 21 个 PR 更新（17 个已合并/关闭、4 个待合并）、发布 8 个新版本、Issue 更新 2 条（1 新开、1 关闭）。今日头条是 **[@​openuidev/dashboard-library](https://redirect.github.com/thesysdev/openui/pull/1620) 1.0.0 正式发布**——45 个组件、10 个分组的全新仪表盘组件库，配套 4 个精修 PR 同日完成。项目还在 24 小时内完成了一个完整的「发布 → 发现回归/文档不符 → 修复 → 再发布」闭环（react-headless 0.18.7→0.18.8），并修复了文档站 3 个无鉴权调用内部 API Key 的安全漏洞。活跃度评估：**高**；贡献以核心团队（Aditya-thesys、ankit-thesys、AbhinRustagi、zahlekhan）与自动化机器人（devin-ai-integration、thesys-pr-creator）为主，外部社区参与度偏低（仅 1 个新 Issue、1 个已合并的外部贡献者 PR）。

---

## 2. 版本发布

今日发布 8 个版本，含 1 个 Major：

| 包名@版本 | 类型 | 关键变更 | 关联 PR |
|---|---|---|---|
| `@openuidev/dashboard-library@1.0.0` | **Major** | 全新仪表盘组件库：45 组件 / 10 分组，替代 0.0.x 组件集 | [#1620](https://redirect.github.com/thesysdev/openui/pull/1620) |
| `@openuidev/server@0.4.2` | Patch | dashboard `create`/`edit` 改为直接发送 `context.userId`，不再铸造 frontend token | [#1616](https://redirect.github.com/thesysdev/openui/pull/1616) |
| `@openuidev/react-headless@0.18.7` | Patch | dashboard 重载时显示上次查询结果 | [#1607](https://redirect.github.com/thesysdev/openui/pull/1607) |
| `@openuidev/react-ui@0.18.7` | Patch | 同上（UI 层透传） | [#1607](https://redirect.github.com/thesysdev/openui/pull/1607) |
| `@openuidev/react-headless@0.18.8` | Patch | `cacheQueryResults` 现可传入 `useOpenuiCloudStorage` / `OpenUICloudProvider` | [#1627](https://redirect.github.com/thesysdev/openui/pull/1627) |
| `@openuidev/react-ui@0.18.8` | Patch | 依赖 react-headless 0.18.8 | — |
| `@openuidev/react-lang@1.1.1` | Patch | `Renderer` 未设置 `onError` 时的错误呈现行为改进 | [#1613](https://redirect.github.com/thesysdev/openui/pull/1613) |
| `@openuidev/lang-core@1.1.1` | Patch | 无实质变更（版本对齐） | — |

**破坏性变更与迁移注意事项：**

- **dashboard-library 1.0.0（破坏性）**：完全替换 0.0.x 组件集，组件统一为单一参数模式，prompt 文本逐个标注 `$variable` 参数（[#1621](https://redirect.github.com/thesysdev/openui/pull/1621)）；`SearchFilter` 组件保留但暂不注册进 schema，模型不会生成它（[#1623](https://redirect.github.com/thesysdev/openui/pull/1623)）。组件计数由 PR 初稿的 41 修正为 45（[#1625](https://redirect.github.com/thesysdev/openui/pull/1625)）。从 0.0.x 升级需对照 README 迁移组件引用。⚠️ 刚发布的 1.0.0 存在若干行为 bug，修复 PR [#1624](https://redirect.github.com/thesysdev/openui/pull/1624) 尚未合入，非急需可等 1.0.1。
- **server 0.4.2（回归警告）**：0.4.1 通过 frontend token 携带客户端 `appId`，0.4.2 移除 token 后 `appId` 一并丢失——设置 `appId` 的客户升级后**旧 dashboard 编辑丢失**，app 级 frontend token **无法新建 dashboard**。修复 PR [#1630](https://redirect.github.com/thesysdev/openui/pull/1630) 已于今日关闭（推断已合并，等待随下一次发版，见 [#1631](https://redirect.github.com/thesysdev/openui/pull/1631)）。**使用 `appId` 的用户建议暂缓升级 0.4.2。**
- **react-headless 0.18.7 → 0.18.8**：0.18.7 发布说明承诺的 `cacheQueryResults: false` 选项实际无法传入（位于未导出的 `cloudArtifactStorage` 上）。已在 0.18.7 上尝试该选项无效的用户请升级 0.18.8。

---

## 3. 项目进展

17 个 PR 合并/关闭，推进集中在四个方向：

**a) Dashboard Library 1.0.0 落地（重大里程碑）**
- [#1620](https://redirect.github.com/thesysdev/openui/pull/1620)：基础版本，41 组件 / 10 分组，基于 dashboards-ui-library 设计
- [#1621](https://redirect.github.com/thesysdev/openui/pull/1621)：统一组件参数模式 + prompt 文本标注每个 `$variable` 参数，目标是模型学会一个签名即可编写其余组件
- [#1623](https://redirect.github.com/thesysdev/openui/pull/1623)：SearchFilter 暂时移出 schema（外部贡献者 i-subham23）
- [#1625](https://redirect.github.com/thesysdev/openui/pull/1625)：README / changeset 组件计数修正为 45

**b) Dashboard 数据加载体验**
- [#1607](https://redirect.github.com/thesysdev/openui/pull/1607)：dashboard 重开时各 tile 显示上次结果而非查询默认值（常为零），新数据到达即切换；`ArtifactStorage` 新增两个可选方法
- [#1627](https://redirect.github.com/thesysdev/openui/pull/1627)：修复 `cacheQueryResults` 无法传入的问题
- [#1608](https://redirect.github.com/thesysdev/openui/pull/1608)（仍 open，stacked on #1607）：重开的 dashboard 保持在用户离开时的筛选器状态——进行中

**c) Server 鉴权简化与回归修复**
- [#1616](https://redirect.github.com/thesysdev/openui/pull/1616)：`create`/`edit` 不再铸造 frontend token，改为发送 `user_id`；客户端 `appId` 不再发送（一个 API key 对应一个 app）
- [#1630](https://redirect.github.com/thesysdev/openui/pull/1630)：修复 0.4.2 丢失 `appId` 的回归

**d) 文档站安全与性能**
- [#1618](https://redirect.github.com/thesysdev/openui/pull/1618)：删除公开的 `/api/playground/stream`（无登录、无限流、model 由调用方指定，使用 `THESYS_API_KEY`）
- [#1619](https://redirect.github.com/thesysdev/openui/pull/1619)：删除 `/api/chat`（无 origin 校验）与 `/api/openui-cloud/chat`（校验不完整）
- [#1617](https://redirect.github.com/thesysdev/openui/pull/1617)：未知 slug（含 U+00FF 以上字符）由 500 改为 404，避免解码路径泄漏进 `x-next-cache-tags`
- [#1614](https://redirect.github.com/thesysdev/openui/pull/1614)：停用 `next/link` 对站点导航的预取，避免 docs 路由 bundle 被拉入无关页面

**e) 自动化运维**：模板/示例更新 PR [#1589](https://redirect.github.com/thesysdev/openui/pull/1589) 关闭、[#1629](https://redirect.github.com/thesysdev/openui/pull/1629) 待合并；changesets 发版 PR [#1615](https://redirect.github.com/thesysdev/openui/pull/1615)、[#1628](https://redirect.github.com/thesysdev/openui/pull/1628) 关闭、[#1631](https://redirect.github.com/thesysdev/openui/pull/1631) 待合并。

**整体评估**：单日完成 1 个 Major 版本落地、1 个完整的修复闭环、3 项安全修复，推进幅度显著。

---

## 4. 社区热点

*（说明：本期数据未提供各 PR/Issue 评论数，以下按内容重要性与关联度筛选）*

- **[Issue #1626](https://redirect.github.com/thesysdev/openui/issues/1626)（新开）**：Svelte 示例搭配 `@ai-sdk/openai-compatible` 时 Render 完全不渲染，升级 ai-sdk v7 + `@openuidev/lang-core@1.1.0` 后恢复。诉求明确：示例代码版本滞后，希望官方 bump。与机器人示例更新流水线（[#1629](https://redirect.github.com/thesysdev/openui/pull/1629)）高度相关，很可能借此解决。
- **[Issue #418](https://redirect.github.com/thesysdev/openui/issues/418)（关闭）**：多智能体支持示例需求（4 月提出）：基于 Vercel AI SDK 的主 Agent 委托子 Agent、Generated UI 与文本内联返回。悬置约 7 个月后今日关闭，数据中未见关闭原因说明。
- **[PR #517](https://redirect.github.com/thesysdev/openui/pull/517)（关闭）**：5 月提交的「迁移至汇编语言提升性能」PR（玩笑性质，作者自述 diff 巨大），拖了 6 个月后今日关闭；作者与 Issue #418 同为 vishxrad。
- **安全三连 [#1618](https://redirect.github.com/thesysdev/openui/pull/1618) / [#1619](https://redirect.github.com/thesysdev/openui/pull/1619) / [#1617](https://redirect.github.com/thesysdev/openui/pull/1617)** 值得自托管文档站/复用其 docs 代码的用户关注。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| **高（回归）** | server 0.4.2 丢失 `appId`：设置 `appId` 的客户升级后旧 dashboard 编辑丢失，app 级 token 无法新建 dashboard（0.4.2 上线测试中发现） | 修复 PR [#1630](https://redirect.github.com/thesysdev/openui/pull/1630) 已关闭，**待发版**（关注 [#1631](https://redirect.github.com/thesysdev/openui/pull/1631)） |
| **高（安全）** | 文档站 `/api/playground/stream`、`/api/chat`、`/api/openui-cloud/chat` 无鉴权/无限流调用 `THESYS_API_KEY`，model 可由调用方指定 | ✅ 已修复：[#1618](https://redirect.github.com/thesysdev/openui/pull/1618)、[#1619](https://redirect.github.com/thesysdev/openui/pull/1619)（路由删除） |
| **中** | react-headless 0.18.7 的 `cacheQueryResults` 选项无法传入（发布说明与实现不符） | ✅ 已修复并发布 0.18.8：[#1627](https://redirect.github.com/thesysdev/openui/pull/1627) |
| **中** | dashboard-library 1.0.0：筛选器变更会重置卡片状态、筛选器不显示 `$variable` 当前值等 **5 项行为 bug** + 4 处 prompt 修正 | ⏳ 修复 PR [#1624](https://redirect.github.com/thesysdev/openui/pull/1624) open，未发布 |
| 低 | 文档站未知 slug 返回 500 且泄漏解码路径 | ✅ 已修复 [#1617](https://redirect.github.com/thesysdev/openui/pull/1617) |
| 低 | `next/link` 预取导致 docs bundle 全站加载 | ✅ 已修复 [#1614](https://redirect.github.com/thesysdev/openui/pull/1614) |

**稳定性观察**：0.18.7→0.18.8 与 0.4.2→（待发版修复）均属「发布后快速发现、快速修复」，响应速度优秀；但 server 鉴权路径的回归随版本发布（#1630），提示该路径的发布前测试覆盖仍有提升空间。

---

## 6. 功能请求与路线图信号

- **Dashboard 是当前明确的路线图重心**：1.0.0 组件库（已发布）→ 结果缓存（[#1607](https://redirect.github.com/thesysdev/openui/pull/1607)/[#1627](https://redirect.github.com/thesysdev/openui/pull/1627) 已发布）→ 筛选器状态持久化（[#1608](https://redirect.github.com/thesysdev/openui/pull/1608) open，依赖的 #1607 已合并，**大概率随下个 0.18.x 发布**）→ 行为修正（[#1624](https://redirect.github.com/thesysdev/openui/pull/1624)，预计 1.0.1）。
- **Issue [#1626](https://redirect.github.com/thesysdev/openui/issues/1626)（bump Svelte 示例）**：与既有自动化示例更新机制（[#1589](https://redirect.github.com/thesysdev/openui/pull/1589)→[#1629](https://redirect.github.com/thesysdev/openui/pull/1629) 的循环模式）高度吻合，**纳入概率高**——#1629 正在更新 `@openuidev/*` 依赖，合并后该诉求基本消解。
- **Issue [#418](https://redirect.github.com/thesysdev/openui/issues/418)（多智能体示例）**：已关闭，去向不明。若为「未计划」关闭，鉴于其描述的「主 Agent 委托子 Agent + Generated UI 内联」是 agent 编排场景的真实企业需求，建议以 cookbook/文档形式承接。
- **鉴权 API 仍在快速演进**（frontend token → `user_id` → 恢复 `appId`），0.4.x 尚未稳定，短期内预计还有 patch。

---

## 7. 用户反馈摘要

*（本期窗口内 Issue 仅 2 条、评论 1 条，样本有限，结论供参考）*

- **版本漂移痛点**（[#1626](https://redirect.github.com/thesysdev/openui/issues/1626)，Prajwalg19）：Svelte 示例 + `@ai-sdk/openai-compatible` 环境下 Render 完全不渲染且无明确报错线索；自行升级 ai-sdk v7 与 lang-core 1.1.0 后恢复正常。核心功能在版本对齐后可用，但示例与包版本滞后会造成「开箱即坏」的新用户体验，是潜在流失风险点。
- **多智能体场景需求**（[#418](https://redirect.github.com/thesysdev/openui/issues/418)，vishxrad）：用户在构建需要 AI 分析能力的多 Agent 聊天应用，希望官方提供「主 Agent 委托专业子 Agent、Generated UI 与普通文本内联返回」的 Vercel AI SDK 示例——反映 OpenUI 在 agent 编排场景的真实采用诉求。
- **积极信号**：#1626 用户通过自行排查解决问题并主动回馈升级建议，说明社区存在愿意深度调试的用户基础。

---

## 8. 待处理积压

- **[PR #1624](https://redirect.github.com/thesysdev/openui/pull/1624)**：dashboard-library 1.0.0 的 5 项行为修复（11-12 开启），针对刚发布的 Major 版本，时效性强，建议优先评审并发 1.0.1。
- **[PR #1631](https://redirect.github.com/thesysdev/openui/pull/1631)**：待合并的发版 PR，含 `appId` 回归修复（#1630）的 changesets；**建议尽快发版**，缩短受回归影响用户的时间窗口。
- **[PR #1608](https://redirect.github.com/thesysdev/openui/pull/1608)**：筛选器状态持久化（11-11 开启），其依赖 #1607 已合并发布，建议推进评审。
- **[PR #1629](https://redirect.github.com/thesysdev/openui/pull/1629)**：模板/示例更新（含依赖 bump），合并后可顺带回应 Issue #1626。
- **[Issue #1626](https://redirect.github.com/thesysdev/openui/issues/1626)**：0 评论、0 👍，尚无维护者响应，建议 triage 并关联 #1629。
- **提醒**：[Issue #418](https://redirect.github.com/thesysdev/openui/issues/418) 关闭原因不明（4 月创建、仅 1 条评论），若为未计划关闭，多智能体示例的需求仍悬空，值得维护者确认后续承接方式。

---

*数据来源：GitHub API（Issues / PRs / Releases），统计截至 2026-11-13。个别 PR 状态为「已关闭」，是否合并以仓库实际提交记录为准；带 ⚠️ 标注的回归问题请以官方下一个 patch 版本发布说明为最终确认。*

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render 项目日报

**仓库**：[vercel-labs/json-render](https://github.com/vercel-labs/json-render) ｜ **日期**：2026-11-13
**数据窗口**：过去 24 小时 ｜ Issue 更新 4 条（活跃 1 / 关闭 3）｜ PR 更新 9 条（待合并 4 / 已合并·关闭 5）｜ 发版 0

---

## 一、今日速览

过去 24 小时项目共 13 项 Issue/PR 更新，呈「集中清偿存量 + 特性冲刺」的双重态势：3 个 Bug 类 Issue 关闭、5 个修复类 PR 合并/关闭、1 个新 PR 开出，无新版本发布。主线进展是社区功能请求 [#367](https://redirect.github.com/vercel-labs/json-render/issues/367)（条件中解析自定义指令）进入实现冲刺——今日新开的 [#471](https://redirect.github.com/vercel-labs/json-render/pull/471) 与在途的 [#458](https://redirect.github.com/vercel-labs/json-render/pull/458) 配对覆盖其左右两侧语义。同时 [#426](https://redirect.github.com/vercel-labs/json-render/pull/426)–[#430](https://redirect.github.com/vercel-labs/json-render/pull/430) 一批修复集中闭环，覆盖 codegen 非法 JSX、流式 transform 状态泄漏、Next.js 文档错误与两处表单校验问题。本窗口内 8 位不同贡献者参与（含 2 位 co-author），Issue 关闭率 75%（3/4），且无新增 Bug 报告。综合评估：活跃度**中高**，健康度**良好**；主要待办是 4 个 Open PR 的评审推进与一次聚合发版。

---

## 二、版本发布

本日无新版本发布。值得注意的是，[#426](https://redirect.github.com/vercel-labs/json-render/pull/426)–[#430](https://redirect.github.com/vercel-labs/json-render/pull/430) 五个修复已集中关闭但尚未随版本发出，若 [#458](https://redirect.github.com/vercel-labs/json-render/pull/458)/[#471](https://redirect.github.com/vercel-labs/json-render/pull/471) 合并，项目已具备发布一个「聚合修复 + 条件指令特性」版本（推断为 0.21.x patch 或 0.22 minor）的条件，建议关注近期 tag 动向。

---

## 三、项目进展

### 已合并/关闭（5 个，均由 lahfir 提交，2026-10-23 开出、约 3 周评审周期后关闭）

| PR | 类型 | 内容 | 关联 |
|---|---|---|---|
| [#427](https://redirect.github.com/vercel-labs/json-render/pull/427) | fix(codegen) | 字符串 props 改以 JSX 表达式输出（`title={"..."}`），消除引号/反斜杠/换行导致的非法 JSX | 修复 [#379](https://redirect.github.com/vercel-labs/json-render/issues/379) |
| [#426](https://redirect.github.com/vercel-labs/json-render/pull/426) | fix(core/YAML) | 流式 transform 在 text-start / text-end / start-step / error / abort 五类边界重置 spec fence 与行缓冲状态 | 修复 [#419](https://redirect.github.com/vercel-labs/json-render/issues/419) |
| [#428](https://redirect.github.com/vercel-labs/json-render/pull/428) | docs(next) | 快速上手改为 `page.tsx` 调用 `getPageData` 并渲染 `PageRenderer` | 修复 [#380](https://redirect.github.com/vercel-labs/json-render/issues/380) |
| [#429](https://redirect.github.com/vercel-labs/json-render/pull/429) | fix(core) | `min`/`max` 接受数字字符串，与 `numeric` 共用同一解析器（"5px"、空串仍判定失败） | 基于 [#318](https://redirect.github.com/vercel-labs/json-render/pull/318) |
| [#430](https://redirect.github.com/vercel-labs/json-render/pull/430) | fix(core) | email 校验忽略首尾空白，与 url/required 行为对齐 | 取代 [#351](https://redirect.github.com/vercel-labs/json-render/pull/351) |

**量化进展**：数据窗口内可见的 3 个用户报告 Bug 全部闭环（Issue 净减少 3）；表单校验两处 UX 修复落地；多个 PR 带 `Co-authored by` 标记（kevin9327、KennyMcSimpson），显示「外部贡献 → 协作整合 → 维护者合并」的管道运转顺畅。

### 在途推进（4 个 Open PR）

- **[#471](https://redirect.github.com/vercel-labs/json-render/pull/471)（今日新开）**：条件左侧（LHS）新增 `$value` 作为显式取值来源，使指令或 `$computed` 结果无需拷入 `$state` 即可直接参与条件判断——#367 的左半部分；
- **[#458](https://redirect.github.com/vercel-labs/json-render/pull/458)**：比较操作数（`eq/neq/gt/gte/lt/lte`）右侧（RHS）接入指令注册表解析，与 `resolvePropValue` 行为对齐——#367 的 Part 1。两 PR 配对即完成 #367 全量实现；
- **[#470](https://redirect.github.com/vercel-labs/json-render/pull/470)**：新增 `swift/JSONRender` Swift 包（平台无关 Core + SwiftUI 渲染器 + 原生组件目录），今日有更新、处于评审中——若合并将标志项目跨出 JS 生态；
- **[#454](https://redirect.github.com/vercel-labs/json-render/pull/454)**：docs chat 与 playground 默认模型由 anthropic/claude-haiku-4.5 切换为 openai/gpt-6-luna-fast（AI Gateway ID，支持 tool use）。

---

## 四、社区热点

**[#367 [Feature request] Resolve directives in conditions (visible, $cond)](https://redirect.github.com/vercel-labs/json-render/issues/367)** —— 本周期讨论量最高的条目（5 条评论），创建于 2026-09-30，今日仍有讨论更新，跨度约 6 周。

**诉求分析**：
- **API 一致性缺口**：指令（`defineDirective`）已在 props 与 action params 中解析（经 `resolvePropValue`），但条件（`visible`/`$cond`）不支持，用户被迫先将指令结果拷贝进 `$state` 再比较，产生样板代码；
- **真实使用场景**：用户以指令承载异步/计算值，并用其驱动组件可见性——典型的动态/服务端驱动 UI 用法；
- **协作闭环**：esardeiro 提出需求 → harold18m 以 #458 + #471 双 PR 实现全部语义，从讨论到落地的周期值得肯定。

次热点：[#470 Swift/SwiftUI 渲染器](https://redirect.github.com/vercel-labs/json-render/pull/470)（架构级贡献，扩大项目边界）与 [#454 默认模型切换](https://redirect.github.com/vercel-labs/json-render/pull/454)（涉及默认供应商决策，建议维护者明确表态）。

---

## 五、Bug 与稳定性

过去 24 小时**无新增 Bug 报告**；3 个存量 Bug 全部闭环，按严重程度排列：

| 严重度 | Issue | 症状与影响 | 修复 PR | 状态 |
|---|---|---|---|---|
| 高 | [#379](https://redirect.github.com/vercel-labs/json-render/issues/379) | codegen 对含双引号的字符串 props 生成非法 JSX，esbuild 无法解析——直接阻断下游构建 | [#427](https://redirect.github.com/vercel-labs/json-render/pull/427) | ✅ 已闭环 |
| 中高 | [#419](https://redirect.github.com/vercel-labs/json-render/issues/419) | `createJsonRenderTransform` 的 fence/行缓冲状态跨 text block 泄漏，未闭合 fence 会吞掉后续文本或重试 step 的输出——流式场景内容丢失 | [#426](https://redirect.github.com/vercel-labs/json-render/pull/426) | ✅ 已闭环 |
| 中 | [#380](https://redirect.github.com/vercel-labs/json-render/issues/380) | Next 快速上手文档导出不存在的 `Page`，照做即构建失败——新用户上手阻断 | [#428](https://redirect.github.com/vercel-labs/json-render/pull/428) | ✅ 已闭环 |

**稳定性评估**：本期修复均源自用户真实报告且全部落地，无回归迹象，可见 Bug 积压处于低位。需注意 #379/#380 从报告到闭环约 40 天，响应延迟中等，但 PR 评审周期（约 3 周）是当前主要瓶颈。

---

## 六、功能请求与路线图信号

1. **条件中解析指令（[#367](https://redirect.github.com/vercel-labs/json-render/issues/367)）——最可能进入下一版本**。#458（RHS 指令解析）+ #471（LHS `$value` 源）已配对覆盖全部场景，且 #471 为今日新开、推进节奏明确。若合并，将与已落地的校验修复共同构成下个版本的主打内容；
2. **跨平台渲染（[#470](https://redirect.github.com/vercel-labs/json-render/pull/470)）——路线图级信号**。平台无关 Core（spec 解码/校验/表达式/actions/state/JSONL 流式/render tree）+ SwiftUI 渲染器 + 原生组件目录（cards、metrics、badges、alerts、lists、progress、switches、Swift Charts），若合并意味着「一份 spec，多端渲染」的定位正式成立；
3. **AI 集成深化（[#454](https://redirect.github.com/vercel-labs/json-render/pull/454)）**：默认模型切换 + AI Gateway + tool use 支持，结合流式 transform 链路（#419/#426），显示「LLM 流式输出 → UI 渲染」是项目核心场景；
4. 表单校验细节（#429 数字字符串、#430 邮箱空白容忍）已关闭，属打磨性质，无遗留信号。

---

## 七、用户反馈摘要

- **满意度正面信号**：esardeiro 在 #367 中明确表示 *"directives have been really useful for us"*——指令机制是受认可的核心能力；
- **痛点 1｜条件能力缺口**（[#367](https://redirect.github.com/vercel-labs/json-render/issues/367)）：指令值不能直接用于 `visible`/`$cond`，`$state` 拷贝 workaround 增加样板代码；
- **痛点 2｜codegen 与主流构建链兼容性**（[#379](https://redirect.github.com/vercel-labs/json-render/issues/379)）：与 esbuild 组合即产出非法 JSX，说明用户正将 codegen 纳入真实构建管线；
- **痛点 3｜流式消费的边界健壮性**（[#419](https://redirect.github.com/vercel-labs/json-render/issues/419)）：文本块中途结束、step 重试/中止时内容被吞——用户在 agent/LLM 流式输出中混合文本与 UI spec，对边界行为要求高；
- **痛点 4｜表单现实脏数据**（#429/#430 背景）：文本输入产生 `"7"`、带空白的邮箱等值导致校验误报——反映表单密集型使用；
- **痛点 5｜上手文档可用性**（[#380](https://redirect.github.com/vercel-labs/json-render/issues/380)）：照官方 quick start 操作即构建失败，对新用户不友好，已修复；
- **整体画像**：用户主要将 json-render 用于 Next.js 集成、LLM 流式渲染与表单场景；问题集中在生态边界（esbuild、流式协议、框架 API 约定）而非核心渲染引擎，属健康信号。

---

## 八、待处理积压

| 条目 | 开出时间 | 状态 | 关注建议 |
|---|---|---|---|
| [#367](https://redirect.github.com/vercel-labs/json-render/issues/367) | 2026-09-30（约 6 周） | Open，实现 PR 在途 | 推进 [#458](https://redirect.github.com/vercel-labs/json-render/pull/458)/[#471](https://redirect.github.com/vercel-labs/json-render/pull/471) 的评审，注意二者为配对实现，建议同步合并避免特性只落地一半 |
| [#470](https://redirect.github.com/vercel-labs/json-render/pull/470) | 2026-11-11 | Open，今日活跃 | 大体量跨平台贡献，建议尽快组织评审并明确是否纳入官方 monorepo 及后续维护责任 |
| [#454](https://redirect.github.com/vercel-labs/json-render/pull/454) | 2026-11-06（约 1 周） | Open | 涉及默认模型/供应商切换，需维护者决策后合并 |
| [#471](https://redirect.github.com/vercel-labs/json-render/pull/471) / [#458](https://redirect.github.com/vercel-labs/json-render/pull/458) | 2026-11-13 / 2026-11-07 | Open | 本周期最高优先级的特性 PR |

**发版提醒**：5 个已关闭的修复 PR 尚未伴随任何版本发布，[#379](https://redirect.github.com/vercel-labs/json-render/issues/379)/[#419](https://redirect.github.com/vercel-labs/json-render/issues/419)/[#380](https://redirect.github.com/vercel-labs/json-render/issues/380) 的受影响用户目前无法通过升级解困，建议尽快切一个 patch 版本。

---

*数据来源：GitHub 公开 Issue/PR 记录（过去 24 小时更新窗口）；分析推断部分（如合并状态、发版预期）已标注，请以仓库实际状态为准。*

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报 · 2026-11-13

---

## 一、今日速览

CopilotKit 今日呈现高活跃度：过去 24 小时 PR 更新达 **43 条**（19 条待合并、24 条已合并/关闭），合并吞吐量约 56%，节奏健康；Issues 更新 4 条（全部为活跃状态，无关闭），并发布 **2 个新版本**（monorepo v1.87.1 与 Python SDK v0.1.97）。工作重心高度聚焦 **A2UI（Agent-to-UI）生态**——从 v1.87.1 修复 A2UI 1.0 协议渲染、playground 站点产品化重构并迁移至 open.bot 域名，到 google-adk 示例全面升级 A2UI 1.0，显示项目正借 Google A2UI 发布窗口集中冲刺。值得注意的是，昨日报告的运行时问题 [#8375](https://redirect.github.com/CopilotKit/CopilotKit/issues/8375)（线程命名会以完整工具集运行应用 Agent）**同日即提交了破坏性修复 PR [#8377](https://redirect.github.com/CopilotKit/CopilotKit/pull/8377)**，问题响应速度值得肯定。整体看，项目处于「功能冲刺 + 文档迁移收尾 + 安全语义收紧」并行推进的阶段。

---

## 二、版本发布

### 1. v1.87.1（patch）
🔗 [Release](https://github.com/CopilotKit/CopilotKit/releases/tag/v1.87.1) | 发布 PR：[#8380](https://redirect.github.com/CopilotKit/CopilotKit/pull/8380)

- **更新内容**：修复当流式传输 Direct JSON 时，声明 protocol version 1.0 的 catalog 的 A2UI 渲染问题。
- **破坏性变更**：无（patch 级别）。
- **迁移注意**：直接升级即可。该版本是 A2UI 1.0 迁移链路的关键前置——待合并 PR [#8384](https://redirect.github.com/CopilotKit/CopilotKit/pull/8384) 明确依赖 1.87.1 的 A2UI 1.0 surface 渲染能力。

### 2. python-sdk/v0.1.97
🔗 [Release](https://github.com/CopilotKit/CopilotKit/releases/tag/python-sdk/v0.1.97) | [PyPI](https://pypi.org/project/copilotkit/0.1.97/)

- Python SDK 例行版本迭代，0.1.x 系列发布频率较高，维持稳定交付节奏。

---

## 三、项目进展

今日已合并/关闭的 PR（24 条中的代表性 7 条）可归为四条主线：

**① A2UI Playground 产品化（基本成型）**
- [#8379](https://redirect.github.com/CopilotKit/CopilotKit/pull/8379)：重构 playground 落地页、composer 与 Get started——空聊天改为居中 landing + 四个起始提示，首个提示即展示完整 A2UI 体验。
- [#8383](https://redirect.github.com/CopilotKit/CopilotKit/pull/8383)：移除 playground 的搜索与 Components 标签页，站点精简为 workbench + Get started，砍掉大量冗余维护面。

**② 文档站迁移收尾**
- [#8373](https://redirect.github.com/CopilotKit/CopilotKit/pull/8373)：系统性修复旧文档站 404——对照 staging 核查 **7,518 个 URL**，发现 400 个 404，修复后 **398 个恢复正常（覆盖率 99.5%）**，规模化的迁移质量保障。
- [#8385](https://redirect.github.com/CopilotKit/CopilotKit/pull/8385)：shell-docs 设计微调，侧边栏回归正式文档结构。

**③ React Core 体验修复**
- [#8381](https://redirect.github.com/CopilotKit/CopilotKit/pull/8381)：修复回复中 `Thought for 2 seconds` 思考行未随工具调用一起折叠进 `Worked for 29s` 摘要的问题，对话 UI 整洁度提升。

**④ 发布与资产**
- [#8380](https://redirect.github.com/CopilotKit/CopilotKit/pull/8380)：v1.87.1 自动化发布流程。
- [#8374](https://redirect.github.com/CopilotKit/CopilotKit/pull/8374)：补充 Built-in Agent demo 缺失的 logo SVG 资源（修复生产环境 404）。

**进展评估**：单日关闭 24 个 PR，A2UI playground 从「演示页」进化为「可对外承接流量的产品页」，文档站大迁移进入收尾期，项目整体向前推进明显。

---

## 四、社区热点

今日 Issue 评论数排序（PR 评论数据暂缺，按更新活跃度补充）：

| 热度 | 条目 | 评论数 | 核心诉求 |
|---|---|---|---|
| 1 | [#3644](https://redirect.github.com/CopilotKit/CopilotKit/issues/3644) | 4 | AG-UI 事件流语义正确性：多个 `TOOL_CALL_START` 与 `TOOL_CALL_RESULT` 交错时前端出现重复 assistant message ID |
| 2 | [#6936](https://redirect.github.com/CopilotKit/CopilotKit/issues/6936) | 3 | 示例漂移：dynamic-A2UI demo 在各集成间运行三套不同 system prompt，OSS-136 改造仅完成部分迁移 |
| 3 | [#6641](https://redirect.github.com/CopilotKit/CopilotKit/issues/6641) | 2 | 框架覆盖：Angular demo 缺乏自动化视觉回归保护，Angular 22 升级期间被迫手动跳过检查 |
| 4 | [#8375](https://redirect.github.com/CopilotKit/CopilotKit/issues/8375) | 1 | 评论虽少但影响最大（见下节） |

**PR 侧活跃条目**：[#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309)（Python quickstart 补全）、[#8254](https://redirect.github.com/CopilotKit/CopilotKit/pull/8254) / [#8235](https://redirect.github.com/CopilotKit/CopilotKit/pull/8235)（headers 语义系列修复）持续多日更新。

**背后诉求分析**：社区关注点集中在三方面——**(a)** AG-UI 流式协议在复杂交错场景下的状态一致性（核心可靠性的长尾问题）；**(b)** 示例/文档与实际代码的同步维护（showcase 漂移增加新手上手成本）；**(c)** 非 React 框架（Angular）的一等公民待遇。

---

## 五、Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#8375](https://redirect.github.com/CopilotKit/CopilotKit/issues/8375)：默认开启的线程命名功能（`generateThreadNames`）会克隆应用自身的 Agent 来生成标题——LangGraph Agent 保留 server 端工具、system prompt 与 skills，导致「起标题」变成**重复执行用户任务、调用写入工具、甚至死循环** | Open（11-12 新报） | ✅ 已有 [#8377](https://redirect.github.com/CopilotKit/CopilotKit/pull/8377)（**breaking change**，`runAgent({ tools: [] })` 语义修正），同日提交，待合并 |
| 🟡 中 | [#3644](https://redirect.github.com/CopilotKit/CopilotKit/issues/3644)：AG-UI 流中同一条 assistant message 的多个 `TOOL_CALL_START` 与 `TOOL_CALL_RESULT` 交错时，前端 `messages[]` 出现重复消息 ID | Open（4 月至今） | ❌ 暂无，标记 reserved for students |
| 🟢 低 | [#8381](https://redirect.github.com/CopilotKit/CopilotKit/pull/8381)：思考行未折叠进工作摘要 | ✅ 已合并 | — |
| 🟢 低 | [#8374](https://redirect.github.com/CopilotKit/CopilotKit/pull/8374)：logo 资源 404 | ✅ 已合并 | — |

**稳定性提示**：#8375 属于「默认开启功能产生非预期副作用执行」类问题，涉及数据写入风险，建议用户在 fix 发布前关注 [#8377](https://redirect.github.com/CopilotKit/CopilotKit/pull/8377) 合并进展；其 `!` 标记意味着后续版本将有行为变更，需留意迁移说明。

---

## 六、功能请求与路线图信号

结合今日 Issue 与待合并 PR，可识别出以下路线图方向：

1. **A2UI 1.0 全面铺开（确定性强）**：[#8384](https://redirect.github.com/CopilotKit/CopilotKit/pull/8384) 将 google-adk 的 declarative-gen-ui 与 a2ui-recovery demo 升级至 A2UI 1.0（依赖 ag-ui-adk 0.13.0 + CopilotKit 1.87.1），配合 playground 迁移 open.bot（[#8388](https://redirect.github.com/CopilotKit/CopilotKit/pull/8388)、[#8387](https://redirect.github.com/CopilotKit/CopilotKit/pull/8387)），**下一版本大概率继续以 A2UI 1.0 为核心**。
2. **安全默认值收紧**：[#8377](https://redirect.github.com/CopilotKit/CopilotKit/pull/8377)（runtime）与 [#8254](https://redirect.github.com/CopilotKit/CopilotKit/pull/8254)（react-native headers 按请求时求值）均为带 `!` 的行为修正，指向「token 轮换 / 权限作用域」的安全语义统一。
3. **企业级认证模板**：[#7971](https://redirect.github.com/CopilotKit/CopilotKit/pull/7971) 贡献 langgraph-fastapi-auth starter（用户身份注入 Agent、AG-UI over FastAPI），反映生产部署中的 auth 刚需，有望作为官方示例纳入。
4. **Angular 测试覆盖**：[#6641](https://redirect.github.com/CopilotKit/CopilotKit/issues/6641) 请求将 Angular 纳入自动化视觉回归测试，暂无对应 PR，短期内更可能由学生贡献计划承接。
5. **学习遥测增强**：[#8378](https://redirect.github.com/CopilotKit/CopilotKit/pull/8378) 为 Learning collector 增加编辑事件字段标签、SDK/应用版本与页面错误捕获。
6. **品牌重组信号**：[#8376](https://redirect.github.com/CopilotKit/CopilotKit/pull/8376) 将 README 中的项目更名 **OpenFuse**（仓库将改名 `CopilotKit/OpenFuse`），组织内子项目品牌架构调整进行中。

---

## 七、用户反馈摘要

从今日 Issue/PR 描述中提炼的真实用户痛点与场景：

- **复杂流式场景的可靠性**：开发者在使用 AG-UI 事件流进行多工具调用交错时遭遇重复消息 ID（[#3644](https://redirect.github.com/CopilotKit/CopilotKit/issues/3644)），说明真实生产工作流远比线性 demo 复杂。
- **「隐形 Agent 运行」的信任危机**：LangGraph 用户发现仅打开会话，线程命名就默默用完整 Agent 重跑了一遍任务、还写了数据（[#8375](https://redirect.github.com/CopilotKit/CopilotKit/issues/8375)）——既是体验问题（卡顿、循环）也是安全问题（意外写入）。
- **示例与文档的漂移增加认知负担**：同一 demo 在不同集成下 prompt 不一致（[#6936](https://redirect.github.com/CopilotKit/CopilotKit/issues/6936)），新用户难以判断「正确用法」是什么。
- **非 React 生态的次等体验**：Angular 用户在框架升级时因缺乏视觉回归保护而被迫裸奔（[#6641](https://redirect.github.com/CopilotKit/CopilotKit/issues/6641)）。
- **Python 上手路径的补课**：quickstart 缺 `azure-identity` 依赖、本地示例未绑定回环、缺少 fail-closed 授权示例（[#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309)），反映 Python 开发者对「安全默认值 + 开箱即用」的双重期待。
- **正面信号**：第三方（boxd）主动贡献 Cookbook 集成配方（[#8362](https://redirect.github.com/CopilotKit/CopilotKit/pull/8362)），生态吸引力在增强。

---

## 八、待处理积压

以下条目长期处于待响应状态，建议维护者关注：

| 条目 | 类型 | 开启时间 | 积压时长 | 状态 |
|---|---|---|---|---|
| [#3644](https://redirect.github.com/CopilotKit/CopilotKit/issues/3644) | Bug | 2026-04-07 | **约 7 个月** | 4 条评论，无 fix PR，reserved for students |
| [#6641](https://redirect.github.com/CopilotKit/CopilotKit/issues/6641) | Feature | 2026-08-21 | 约 3 个月 | 2 条评论，无对应 PR |
| [#6936](https://redirect.github.com/CopilotKit/CopilotKit/issues/6936) | Showcase | 2026-09-07 | 约 2 个月 | 3 条评论，迁移未完成 |
| [#7971](https://redirect.github.com/CopilotKit/CopilotKit/pull/7971) | PR | 2026-10-24 | 约 3 周 | 待 review 的完整集成 starter |
| [#8254](https://redirect.github.com/CopilotKit/CopilotKit/pull/8254) / [#8235](https://redirect.github.com/CopilotKit/CopilotKit/pull/8235) | PR | 2026-11-06 | 约 1 周 | headers 语义系列（#7510/#7512 后续），待合并 |
| [#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309) | PR | 2026-11-10 | 3 天 | Python quickstart 修复，待合并 |

**给维护者的优先级建议**：
1. **优先 review [#8377](https://redirect.github.com/CopilotKit/CopilotKit/pull/8377)**——安全相关的 breaking fix，直接影响生产用户数据安全；
2. 尽快合并 [#8384](https://redirect.github.com/CopilotKit/CopilotKit/pull/8384) 以打通 A2UI 1.0 迁移链路；
3. 对 #3644 这类积压 7 个月的核心 Bug，建议明确学生计划的交付时间线或由核心团队接手；
4. #7971 这类高质量社区贡献若长期无回应，可能挫伤外部贡献者积极性。

---

*数据来源：CopilotKit GitHub 仓库（2026-11-12 ~ 2026-11-13 窗口）。本报告基于公开 Issue/PR/Release 数据生成，评论数与状态以生成时点为准。*

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*