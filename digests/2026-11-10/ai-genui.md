# 生成式 UI 生态日报 2026-11-10

> Issues: 37 | PRs: 103 | 覆盖项目: 4 个 | 生成时间: 2026-11-10 06:33 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告

**数据窗口**：2026-11-10（过去 24 小时）｜ **覆盖项目**：a2ui、CopilotKit、OpenUI、json-render

---

## 一、生态全景

生成式 UI 生态正从「功能验证期」全面转入「生产化攻坚期」：四个头部项目当日重心几乎全部落在安全加固、跨端一致性与边缘路径容错上，而非新功能堆叠。安全首次成为生态级主线——URL 域名白名单（a2ui）、JSON Pointer 路径防护、渲染拒绝语义真实性（CopilotKit）分别在三个项目出现，反映「**agent 生成内容 = 不可信输入**」已成行业共识。多端覆盖竞争白热化：a2ui 以规范 + 四语言 SDK 冲刺 v1.0，CopilotKit 单日合并 Vue 与 React Native 生成式 UI，补齐四框架版图。用户报障已深入 HITL 中断、渲染拒绝、schema 越界等边缘生命周期，标志核心链路趋稳、生产级审视开始。此外，CopilotKit 对 A2UI middleware 与 playground 的持续投入，显示协议层与应用框架层正在形成新的生态分工。

---

## 二、各项目活跃度对比

| 指标 | a2ui | CopilotKit | OpenUI | json-render |
|---|---|---|---|---|
| **Issue 动态** | 30 条（新/活跃 21，关闭 9） | 5 条（新/活跃 5，关闭 **0**） | 1 条（新开，0 互动） | 1 条（新开） |
| **PR 动态** | 50 条（待合并 36，合并/关闭 14） | 37 条（待合并 27，合并/关闭 10） | 8 条（待合并 6，关闭 2） | 8 条（待合并 3，关闭 5） |
| **Release** | 0（#4047 重发布**今日到期未落地**） | 0（2.0.0 筹备中） | **1**（server@0.4.1，按时发布） | 0（0.21.4 后无发布） |
| **驱动结构** | 核心维护者 + 社区缺陷/文档贡献 | 团队 + **10+ 外部贡献者**（国际化） | **纯核心团队**（8/8 PR 内部） | 单维护者 + 社区修复 PR |
| **评审积压风险** | 中（36 条，其中 12 条属同一安全专项，结构性可控） | 中高（27 条，含多个 breaking 级大 PR） | 低（6 条，链条清晰） | 低（3 条） |

**读数**：a2ui 活动总量最高（80 条动态）且 Issue 吞吐健康；CopilotKit PR 产出最强、贡献者结构最优，但 Issue 零关闭是可见短板；OpenUI 是**唯一今日有版本发布**的项目，交付纪律最好但外部社区信号最弱；json-render 体量最小，却拥有最快的 issue→fix 响应链路（<24h）。

---

## 三、共同关注的功能方向

**1. 不可信输入的安全隔离（生态最集中议题，4/4 项目涉及）**
- **a2ui**：[#4045](https://redirect.github.com/a2ui-project/a2ui/issues/4045) URL 安全策略与域名白名单（单日 12 个堆叠 PR）——当前 SDK 仅过滤 scheme 不限 host，嵌入不可信 agent 的宿主面临数据外泄风险；配套 MCP CSP、Vega 图表 URL 管控。
- **json-render**：JSON Pointer 安全三部曲（#336/#352/#371）——原型链污染、不可信路径越权写入、token 转义。
- **CopilotKit**：[#8272](https://redirect.github.com/CopilotKit/CopilotKit/issues/8272) render_ui 全部操作被拒时仍返回 "rendered"，污染 agent 反馈回路。
- **OpenUI**：沙箱资源上限治理（工具调用 48 次上限、并发 16 上限），属执行层安全。
- **共性本质**：生成式 UI 的组件名、路径、URL、props 均由 LLM 产出，安全模型必须按不可信输入设计。

**2. 跨语言 / 跨框架一致性**
- **a2ui**：TS/Python/Dart/Swift 四 SDK + 语言无关 conformance 套件；但 Swift 连续报告行为偏离规范（#4098、#4096），pub.dev 已发布包互不兼容（#3945，CI 无法发现）。
- **CopilotKit**：React/Angular/Vue/RN 四端；今日 #8276/#8274 为同一作者报告的同根因跨框架缺陷（Vue/Angular HITL 中断渲染）。
- **json-render**：React/Svelte 双包，Svelte 因依赖 TS5 API 暂缓 TS7 迁移。

**3. 渲染容错与故障隔离**
- **a2ui** [#2872](https://redirect.github.com/a2ui-project/a2ui/issues/2872)（P2，悬置 42 天）：单个通过 schema 校验的组件（如 Slider 越界）可击穿整个 surface——社区核心诉求「单个坏组件不应拖垮全局」。
- **CopilotKit** #8272：被拒渲染需诚实反馈，否则 agent 陷入无效渲染循环。
- **json-render** #467/#378：catalog.validate() 多组件场景静默放行，校验 API 可信度受损（二次报告的复发缺陷）。
- 共同方向：组件级故障隔离 + 结构化错误报告（cf. a2ui #4018 要求 componentId/componentType）。

**4. Agent-工具循环的资源与反馈治理**
- **OpenUI**：工具调用上限 16→48（附 Sonnet 5.5 生成正确率基准论证）+ 单轮并发 16 上限，属「放宽总量、收紧并发」组合拳。
- **CopilotKit**：渲染工具结果的真实性（#8272）。

**5. 文档与上手成本**
- a2ui 官网上线 + Quick Start/Agent 集成指南 + 生产应用截图（Alation/Atlassian/ByteDance）；CopilotKit Fumadocs 文档站重建；OpenUI 文档站成本治理。

---

## 四、差异化定位分析

| 维度 | a2ui | CopilotKit | OpenUI | json-render |
|---|---|---|---|---|
| **生态层次** | 协议/规范层 | 应用框架层 | 应用平台层 | 渲染库层 |
| **核心资产** | A2UI 规范 + conformance 套件 | 聊天 + GenUI + HITL + learning 全栈 | 仪表盘 + 服务端沙箱 + 自有 DSL（lang-core） | JSON Pointer + catalog 校验 |
| **技术路线** | 语言无关规范，四语言 SDK 各自实现 | 多框架 SDK（React/Angular/Vue/RN，Vue 目录含 69 组件） | BYO 工具库 + 沙箱脚本执行 | React/Svelte 轻量库，TS7 迁移中 |
| **目标用户** | 嵌入不可信 agent UI 的宿主与企业 | 构建生产级 AI 应用的全栈/前端团队 | 数据仪表盘与 agent-app 构建者 | 需要声明式 JSON 渲染的前端开发者 |
| **安全重心** | 网络层（URL/host 白名单） | 协议层（渲染拒绝语义） | 执行层（沙箱资源上限） | 数据层（路径注入防护） |
| **当前阶段** | v1.0 冲刺 + v0.8 日落（破坏性变更在即） | 2.0.0 筹备 + 平台化成熟 | 仪表盘能力打磨 | 库稳定 + 工具链现代化 |

**关键结构信号**：CopilotKit 的 A2UI middleware（0.0.14 已现行为变更）与 A2UI playground 系列 PR，表明应用框架正把协议实现作为**可插拔选项**——「agent 生成 UI」的技术栈正在分化为 *协议标准（a2ui）→ 应用框架（CopilotKit）→ 垂直场景（OpenUI）→ 底层渲染原语（json-render）* 的分层格局，四者竞争性与互补性并存。

---

## 五、社区热度与成熟度

| 项目 | 热度画像 | 成熟度判断 |
|---|---|---|
| **a2ui** | 活动量第一（30 Issue + 50 PR）；维护者主导架构、社区供给缺陷报告与文档 | 接近 v1.0，工程纪律佳（堆叠 PR、评审驱动拆分）；短板是**发布管道**——重发布到期未落地、P2 崩溃缺陷悬置 42 天、pub.dev 包互不兼容且 CI 盲区 |
| **CopilotKit** | 贡献者多样性最佳：10+ 活跃人类贡献者、国际化（中文/Windows 用户群有实证）；生产用户已在做跨框架边界测试 | **最成熟**：主流程稳定、进入平台化与 2.0 周期；风险在 27 条待审 PR 与今日 3 个新 Bug 零认领（全部落在快速扩张的 GenUI/HITL 面上） |
| **OpenUI** | 外部热度最低：唯一社区 Issue 零互动，8/8 PR 来自核心团队 | **快速迭代期**：仪表盘能力从「可用」向「编辑闭环 + 资源安全」推进；数据驱动文化突出（基准测试、28 天 958 GB 流量披露）；社区建设是明显短板 |
| **json-render** | 规模最小但质量最高：Issue 报告含版本/复现/根因，24h 内出现社区修复 PR | 稳定打磨期；风险为单维护者瓶颈、修复长期未随版本交付（0.21.4 后零 release）、5 个安全/校验 PR 关闭但合并状态不明 |

---

## 六、值得关注的趋势信号

**1. 安全是生成式 UI 的下一个竞争维度。** 四个项目在同一天分别在网络层、数据层、协议层、执行层处理安全问题。**参考价值**：选型时应将 URL/host 策略、路径校验、CSP 支持、沙箱限额列入评估清单；自建方案的团队需自查「LLM 产出即不可信输入」的假设是否成立。

**2. 「诚实反馈」是 agent 自我纠错的前提。** CopilotKit 谎报 "rendered"、OpenUI 词法器报出与真实原因完全不符的错误——错误信息质量直接决定 agent 循环能否收敛。**参考价值**：为 agent 构建工具/渲染接口时，拒绝路径的返回值设计与成功路径同等重要。

**3. 边缘路径报障 = 生产采用的风向标。** HITL 中断、渲染拒绝、schema 合法但越界——用户开始以生产严苛度检验细节，说明核心链路已被信任。**参考价值**：评估项目成熟度时，「报什么 Bug」比「报多少 Bug」更有信息量。

**4. 多端一致性的维护税开始显现。** 四 SDK / 四框架的扩张带来跨语言行为偏离、发布不同步、包管理器互不兼容等系统性成本。**参考价值**：跨端 SDK 项目应优先建设 conformance 套件与「发布产物级」CI（而非源码级），a2ui 的 #3945 是反面教材。

**5. 基础设施成本首次进入工程约束。** OpenUI 因文档站 28 天 958 GB（占 Vercel 传输 85%）引入带宽预算 CI 检查。**参考价值**：含大量媒体/演示内容的开源项目应前置成本可观测性。

**6. 协议层与应用层开始分工。** CopilotKit 集成 A2UI 作为可插拔协议选项，暗示「agent 生成 UI」的标准化接口正在形成。**参考价值**：应用层项目绑定开放协议可降低锁定风险；关注 a2ui v1.0 落地节奏。

**7. 发布纪律成为隐性差异化因素。** a2ui 重发布延期直接阻塞依赖冲突用户（#4059），json-render 修复完成但无版本交付——「修了但没发布」对用户等于没修。

**选型速查**：需要跨语言协议级安全能力 → **a2ui**（建议等待其 SDK 重发布落地）；React 生态全栈 AI 应用 → **CopilotKit**（预留 2.0.0 迁移窗口）；数据仪表盘场景 → **OpenUI**；轻量声明式渲染 → **json-render**（注意 core 校验缺陷修复尚未发版）。

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目日报（2026-11-10）

> 数据窗口：过去 24 小时 ｜ 仓库：[a2ui-project/a2ui](https://github.com/a2ui-project/a2ui)
> 活动量：Issue 更新 30 条（新开/活跃 21，关闭 9）｜ PR 更新 50 条（待合并 36，合并/关闭 14）｜ Release 0 个

---

## 今日速览

今日 a2ui 呈现明显的「v1.0 发布前冲刺」特征，三条主线并行推进：**官网正式上线**（[a2ui.org](https://a2ui.org) 新站提升至根域名）、**URL 安全策略跨 SDK 落地**（12 个堆叠式 PR 组成的体系化提交）、**v0.8 遗产清理启动**（Lit/React 旧适配器进入删除流程）。过去 24 小时共 50 条 PR 更新、30 条 Issue 更新，活跃度处于高位；但 36 个待合并 PR 形成结构性评审积压（其中 12 个来自同一安全专项，属可控范围）。值得警惕的是：今天正是 [#4047](https://redirect.github.com/a2ui-project/a2ui/issues/4047) 计划的「全 SDK 重新发布日」，截至发稿仍无任何 Release 落地，且 P2 崩溃类缺陷 [#2872](https://redirect.github.com/a2ui-project/a2ui/issues/2872) 已悬置 42 天无修复 PR。

---

## 项目进展

**1. 官网发布（今日最大里程碑）**
- [PR #4103](https://redirect.github.com/a2ui-project/a2ui/pull/4103) 已关闭：Astro + Starlight 新文档站从 `a2ui.org/preview/` 正式提升至 `a2ui.org` 根域名，兑现 [Issue #4048](https://redirect.github.com/a2ui-project/a2ui/issues/4048) 的目标。
- 配套收尾同步完成：[PR #4110](https://redirect.github.com/a2ui-project/a2ui/pull/4110)（恢复 README 的 A2UI H1 标题与 tagline，部分响应 [#3985](https://redirect.github.com/a2ui-project/a2ui/issues/3985)）、[PR #4111](https://redirect.github.com/a2ui-project/a2ui/pull/4111) 与 [PR #4118](https://redirect.github.com/a2ui-project/a2ui/pull/4118)（旧 MkDocs URL 重定向，避免外链失效）。

**2. v0.8 遗产清理进入执行期**
- [PR #4112](https://redirect.github.com/a2ui-project/a2ui/pull/4112)（大爆炸式删除 Lit v0.8）关闭后，被评审流程拆分为三个更小的可审 PR：[#4126](https://redirect.github.com/a2ui-project/a2ui/pull/4126)（适配器+文档）、[#4125](https://redirect.github.com/a2ui-project/a2ui/pull/4125)（editor/inspector/visual-parity 等工具）、[#4124](https://redirect.github.com/a2ui-project/a2ui/pull/4124)（samples），体现了良好的工程拆分纪律。
- 同日新开 [Issue #4109](https://redirect.github.com/a2ui-project/a2ui/issues/4109)：删除 React v0.8 适配器，v0.8 日落路线全面铺开。

**3. URL 安全策略体系（今日最重工程投入，尚在评审）**
- 围绕 [Issue #4045](https://redirect.github.com/a2ui-project/a2ui/issues/4045)（可配置 URL 安全策略与域名白名单，防数据外泄），nan-yu 单日提交 12 个堆叠 PR，结构清晰：
  - 规范层：[#4102](https://redirect.github.com/a2ui-project/a2ui/pull/4102)（提案 + 语言无关 conformance 套件）
  - 核心 SDK：[#4104](https://redirect.github.com/a2ui-project/a2ui/pull/4104)（TS 参考实现）、[#4119](https://redirect.github.com/a2ui-project/a2ui/pull/4119)（Python）、[#4114](https://redirect.github.com/a2ui-project/a2ui/pull/4114)（Dart）、[#4121](https://redirect.github.com/a2ui-project/a2ui/pull/4121)（Swift）
  - 渲染/适配层：[#4115](https://redirect.github.com/a2ui-project/a2ui/pull/4115)（web renderers）、[#4120](https://redirect.github.com/a2ui-project/a2ui/pull/4120)（Flutter）、[#4123](https://redirect.github.com/a2ui-project/a2ui/pull/4123)（SwiftUI）
  - 工具与目录：[#4116](https://redirect.github.com/a2ui-project/a2ui/pull/4116)（目录工具告警 + agent 发送前检查）、[#4117](https://redirect.github.com/a2ui-project/a2ui/pull/4117)（MCP CSP 与 Vega 图表 URL 管控）、[#4122](https://redirect.github.com/a2ui-project/a2ui/pull/4122)（Python agent 检查）
  - 文档：[#4113](https://redirect.github.com/a2ui-project/a2ui/pull/4113)（URL 安全指南）

**4. Issue 层面的完成项（9 个关闭）**
- [Issue #2356](https://redirect.github.com/a2ui-project/a2ui/issues/2356)：Dart A2UI Agent SDK 完成（8 月立项的长线任务收官）。
- [Issue #4003](https://redirect.github.com/a2ui-project/a2ui/issues/4003)：Swift/SwiftUI 库可通过 SwiftPM + release tag 获取，补齐 Swift 生态分发。
- [Issue #3725](https://redirect.github.com/a2ui-project/a2ui/issues/3725)（P1）：Express 无法表达 `@index` 函数——已关闭。
- [Issue #4086](https://redirect.github.com/a2ui-project/a2ui/issues/4086)（P1）：Binder 误判 action 的跨语言缺陷——创建当日即关闭。
- [Issue #3878](https://redirect.github.com/a2ui-project/a2ui/issues/3878)：labs 仓库公开前的合规准备完成（即将接受合作方 PR）。
- 文档四连：[#3889](https://redirect.github.com/a2ui-project/a2ui/issues/3889)（Quick Start）、[#3903](https://redirect.github.com/a2ui-project/a2ui/issues/3903)（Agent 服务端集成指南）、[#3488](https://redirect.github.com/a2ui-project/a2ui/issues/3488)（messages 参考补齐 v1.0 tab）、[#4063](https://redirect.github.com/a2ui-project/a2ui/issues/4063)（Alation/Atlassian/ByteDance 等生产应用截图）。

**5. 安全与 CI 治理**
- 新开 [Issue #4100](https://redirect.github.com/a2ui-project/a2ui/issues/4100)：按安全合规要求整改 legacy genui triage 工作流中的 `pull_request_target`，**截止 2026-12-02**，有时间硬约束。

**整体推进评估**：单日关闭 14 个 PR + 9 个 Issue；官网、安全架构、版本清理三条线均有实质落点。若 URL 安全系列合并，将一次性为 TS/Python/Dart/Swift 四大核心 SDK 带来统一的域名白名单能力，是迈向 v1.0 稳定版的关键一步。

---

## 社区热点

| 议题 | 热度 | 状态 |
|---|---|---|
| [Issue #2872](https://redirect.github.com/a2ui-project/a2ui/issues/2872)：schema 合法的组件可击穿渲染 surface（典型：`Slider` 的 min/max/value 越界） | 5 评论（今日更新） | 开放，9-29 创建 |
| [Issue #2952](https://redirect.github.com/a2ui-project/a2ui/issues/2952)：删除 Lit v0.8 适配器 | 4 评论（今日派生 4 个 PR） | 执行中 |
| [Issue #4015](https://redirect.github.com/a2ui-project/a2ui/issues/4015)：统一 TS/Dart 的 `MessageProcessor` 出站消息路由（`actionHandler` vs `outboundListener`） | 4 评论 | 讨论中 |
| [Issue #4045](https://redirect.github.com/a2ui-project/a2ui/issues/4045)：URL 安全策略与域名白名单 | 2 评论，但派生 **12 个 PR** | 评审中 |
| [Issue #4107](https://redirect.github.com/a2ui-project/a2ui/issues/4107)：PR 预览与主站在 gh-pages 上部署竞争 | 2 评论（今日新开） | 待修复 |

**诉求解读**：今日热点几乎全部由架构治理驱动——核心维护者（jacobsimionato、nan-yu）聚焦安全加固、API 跨语言一致性（#4015）与版本日落（#2952/#4109）；而 #2872 的持续讨论反映社区对「**单个坏组件不应拖垮整个 surface**」的容错诉求，是渲染器健壮性的核心期待。

---

## Bug 与稳定性

按严重程度排列（修复 PR 情况基于当前可见数据）：

| 优先级 | 问题 | 状态 | 修复情况 |
|---|---|---|---|
| P1 | [#4086](https://redirect.github.com/a2ui-project/a2ui/issues/4086) Binder 将任何含 `event`/`functionCall` 属性的对象误判为 action（TS/Dart/Python） | 已关闭 | 创建当日关闭，推定已修复 |
| P1 | [#3725](https://redirect.github.com/a2ui-project/a2ui/issues/3725) Express 无法表达 v1.0 `@index`，影响带行位置的列表 UI | 已关闭 | 推定已修复 |
| P2 | [#2872](https://redirect.github.com/a2ui-project/a2ui/issues/2872) schema 合法组件可致整个 surface 崩溃（Flutter genui SDK 路径） | **开放 42 天** | ⚠️ 暂无修复 PR |
| P2 | [#4107](https://redirect.github.com/a2ui-project/a2ui/issues/4107) gh-pages 上 PR 预览与主站部署竞争，致构建取消/超时 | 今日新报 | 暂无修复 PR |
| P2 | [#4059](https://redirect.github.com/a2ui-project/a2ui/issues/4059) `@a2ui/markdown-it@0.2.2` peer 依赖与 `web_core@0.15.0` 冲突，npm 安装失败 | 开放 | 预期随 [#4047](https://redirect.github.com/a2ui-project/a2ui/issues/4047) 重发布解决 |
| P2 | [#4098](https://redirect.github.com/a2ui-project/a2ui/issues/4098) Swift 在 relaxed 模式下拒绝携带 `theme` 的 `createSurface`（规范要求降级丢弃） | 今日新报 | 待 triage |
| — | [#4096](https://redirect.github.com/a2ui-project/a2ui/issues/4096) SwiftUI `Image.fit` 为 fill/none 时裁剪，偏离 CSS `object-fit` 语义 | 昨日新报 | 待 triage |

**稳定性关联风险**：[#3945](https://redirect.github.com/a2ui-project/a2ui/issues/3945) 指出 CI 通过 pub workspace 从源码解析 Dart 包，导致 **pub.dev 上已发布的 `a2ui_core`/`a2ui_agent`/`a2ui_flutter` 无法共同安装**——发布管道存在盲区，与今日的重发布任务直接相关。

---

## 功能请求与路线图信号

**高确定性纳入下一版本（已有 PR 支撑）：**
- **URL 安全策略体系**（[#4045](https://redirect.github.com/a2ui-project/a2ui/issues/4045) → 12 个堆叠 PR）：含规范、四语言核心实现、渲染层接入、agent 发送前检查与文档，落地即为跨 SDK 的统一安全能力。
- **v0.8 适配器移除**（[#2952](https://redirect.github.com/a2ui-project/a2ui/issues/2952) → [#4124](https://redirect.github.com/a2ui-project/a2ui/pull/4124)/[#4125](https://redirect.github.com/a2ui-project/a2ui/pull/4125)/[#4126](https://redirect.github.com/a2ui-project/a2ui/pull/4126)；[#4109](https://redirect.github.com/a2ui-project/a2ui/issues/4109)）：明确的破坏性变更信号——**下游 v0.8 用户需尽快迁移至 v0.9/v1.0**。
- [#4082](https://redirect.github.com/a2ui-project/a2ui/issues/4082)：移除 v1.0 组件 envelope 的裸键回退（`@catalogId` 等改名后的清尾工作）。

**讨论中/待排期：**
- [#4015](https://redirect.github.com/a2ui-project/a2ui/issues/4015)：`MessageProcessor` 出站路由 API 统一（4 条评论，尚无 PR）。
- [#4075](https://redirect.github.com/a2ui-project/a2ui/issues/4075)：为 `ComponentCommon` 增加声明式 `visible` 属性（角色分区、渐进披露场景，今日新提）。
- [#4018](https://redirect.github.com/a2ui-project/a2ui/issues/4018)：`surface.onError` 报告增加结构化 `componentId`/`componentType`。
- [#4009](https://redirect.github.com/a2ui-project/a2ui/issues/4009)：Angular 适配器支持 `<a2ui-surface>` 选择器跨协议版本。
- [#3753](https://redirect.github.com/a2ui-project/a2ui/issues/3753)：CI 夜间全量调度；[#3157](https://redirect.github.com/a2ui-project/a2ui/issues/3157)：iframe 与 MCP sandbox 目录。

**发布节奏信号**：[#4047](https://redirect.github.com/a2ui-project/a2ui/issues/4047) 计划今日重发布全部 SDK——若如期执行，下一批 patch 版本将携带近期累积的修复（含 #4059 所需的 markdown-it 兼容更新）。

---

## 用户反馈摘要

- **依赖摩擦是高频痛点**：[#4059](https://redirect.github.com/a2ui-project/a2ui/issues/4059) 报告 `npm install @​a2ui/react@0.15.0` 因 markdown-it peer 冲突失败，且为 [#1766](https://redirect.github.com/a2ui-project/a2ui/issues/1766)/[#1930](https://redirect.github.com/a2ui-project/a2ui/issues/1930) 同型复发——用户升级路径被阻断。
- **渲染容错性期待**：[#2872](https://redirect.github.com/a2ui-project/a2ui/issues/2872) 反映「一个通过 schema 校验的组件仍能打崩整个 surface」，社区期望组件级故障隔离而非全局崩溃。
- **跨语言一致性落差**：Swift 用户连续报告行为偏离规范（[#4098](https://redirect.github.com/a2ui-project/a2ui/issues/4098) relaxed 模式、[#4096](https://redirect.github.com/a2ui-project/a2ui/issues/4096) object-fit），叠加 [#3945](https://redirect.github.com/a2ui-project/a2ui/issues/3945) 的 pub.dev 包互不兼容，显示非 TS 实现的成熟度与发布纪律仍落后于 web 参考实现。
- **安全是真实宿主需求**：[#4045](https://redirect.github.com/a2ui-project/a2ui/issues/4045) 明确指出当前 SDK 仅按 URL scheme 过滤、不限 host，嵌入不可信 agent 生成 UI 的宿主面临数据外泄风险——该需求直接催生了今日 12 个 PR。
- **工具链集成诉求**：[#4018](https://redirect.github.com/a2ui-project/a2ui/issues/4018) 希望错误报告携带机器可读的组件标识而非自然语言 message。
- **正面信号**：Quick Start 与 Agent 集成指南落地、SwiftPM 可用性（[#4003](https://redirect.github.com/a2ui-project/a2ui/issues/4003)）、官网焕新，显著降低了新开发者的上手成本；生产合作伙伴（Alation、Atlassian、ByteDance）的应用截图进入官网，显示真实采用。

---

## 待处理积压（建议维护者关注）

1. **[Issue #4047](https://redirect.github.com/a2ui-project/a2ui/issues/4047)（P1）— 今日到期**：全 SDK 重发布任务仍开放、0 个 Release 落地，直接阻塞 [#4059](https://redirect.github.com/a2ui-project/a2ui/issues/4059) 等依赖冲突用户的解脱。
2. **[Issue #2872](https://redirect.github.com/a2ui-project/a2ui/issues/2872)（P2）— 悬置 42 天**：项目当前最老的活动 bug，5 条评论、无修复 PR，属崩溃级缺陷，建议优先排期。
3. **[Issue #3945](https://redirect.github.com/a2ui-project/a2ui/issues/3945)（P2）**：pub.dev 已发布包互不兼容，且 CI 无法发现——**建议纳入今日重发布前的检查项**。
4. **[Issue #4015](https://redirect.github.com/a2ui-project/a2ui/issues/4015)（P2）**：4 条评论的 API 统一讨论尚无结论或 PR。
5. **[Issue #3157](https://redirect.github.com/a2ui-project/a2ui/issues/3157)（P2，29 天）**：iframe/MCP 目录跟踪 issue 长期低活跃，但 [#4117](https://redirect.github.com/a2ui-project/a2ui/pull/4117) 已触及 MCP URL 安全，可考虑联动推进。
6. **[Issue #3753](https://redirect.github.com/a2ui-project/a2ui/issues/3753)（P2，12 天）**：夜间 CI 调度无进展——鉴于 [#4107](https://redirect.github.com/a2ui-project/a2ui/issues/4107) 暴露的部署竞争问题，CI 可观测性值得提前投入。
7. **[Issue #4048](https://redirect.github.com/a2ui-project/a2ui/issues/4048)（P1）**：目标已由 [PR #4103](https://redirect.github.com/a2ui-project/a2ui/pull/4103) 兑现，可关闭清理看板。

---

**健康度小结**：项目处于高活跃、高纪律的发布冲刺期——贡献结构健康（核心维护者主导架构、社区持续供给缺陷报告与文档 PR）、工程方法成熟（堆叠 PR、conformance 套件、评审驱动拆分）。短期需关注三点：36 个待评审 PR 的消化速度、今日到期尚未落地的 SDK 重发布、以及 P2 崩溃缺陷 #2872 的修复滞后期。

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目日报 · 2026-11-10

> 数据来源：thesysdev/openui 过去 24 小时 GitHub 活动追踪

---

## 1. 今日速览

过去 24 小时项目共发生 **9 项仓库活动**（1 条 Issue、8 条 PR 更新）及 **1 个版本发布**，整体处于**中高强度的内部驱动开发状态**。核心团队（Aditya-thesys、ankit-thesys、AbhinRustagi、zahlekhan）贡献了全部 8 条 PR，工作主线高度聚焦于 **Dashboards（仪表盘）能力的可靠性打磨**：工具调用上限提升（已随版本发布）、仪表盘编辑状态同步、并发执行保护。社区侧入站信号偏弱——仅 1 条外部 Issue（[#1597](https://redirect.github.com/thesysdev/openui/issues/1597)），暂无评论互动。6 条待合并 PR 形成健康的交付管道，加上补丁版本的按时发布，项目**发布节奏稳定、健康度良好**，但外部社区参与度有待提升。

---

## 2. 版本发布

### [@​openuidev/server@0.4.1](https://github.com/thesysdev/openui/releases)（Patch）

| 项目 | 内容 |
|---|---|
| 类型 | 补丁版本 |
| 关联 PR | [#1560](https://redirect.github.com/thesysdev/openui/pull/1560) · commit `2454f68` |
| 作者 | @​Aditya-thesys |

**更新内容：**
- **仪表盘脚本单次运行的工具调用上限从 16 次提升至 48 次**（实际限制交由沙箱控制，服务端保留 256 次的兜底上限）。
- 直接收益场景：自带工具库（BYO library）的仪表盘在**分页遍历 Stripe、Postgres、GitHub 等外部 API** 时，不再于第 17 次调用处失败。
- 官方基准数据：在 16 次上限下，Sonnet 5.5 单次生成的正确率为 12/15，提升上限后生成质量显著改善（PR 描述中附完整基准）。

**破坏性变更：** 无。
**迁移注意事项：** 无需迁移，直接升级即可；行为变化仅为上限放宽，对既有调用方完全向后兼容。

---

## 3. 项目进展

今日完成关闭 2 条 PR，其中 1 条随版本落地：

- **[#1560](https://redirect.github.com/thesysdev/openui/pull/1560)（已合并 → 发布为 0.4.1）**：工具调用限制策略重构——把每次脚本运行的上限决定权交给沙箱（默认 48 次），服务端仅保留 256 次硬性兜底。这是对仪表盘长链路数据加载能力的实质性增强，是本日最重要的交付。
- **[#1598](https://redirect.github.com/thesysdev/openui/pull/1598)（已关闭）**：Changesets 自动化版本 PR，随 0.4.1 发布流程关闭，属例行发布流水线操作。

**管道内待合并 6 条 PR** 构成三条清晰的推进线：

| 推进线 | PR | 状态 |
|---|---|---|
| 仪表盘编辑体验（核心包） | [#1594](https://redirect.github.com/thesysdev/openui/pull/1594) | 待合并 |
| 仪表盘示例修复 | [#1595](https://redirect.github.com/thesysdev/openui/pull/1595) → [#1599](https://redirect.github.com/thesysdev/openui/pull/1599)（堆叠于 #1595） | 待合并 |
| 服务端稳定性 + 文档站成本 | [#1596](https://redirect.github.com/thesysdev/openui/pull/1596)、[#1600](https://redirect.github.com/thesysdev/openui/pull/1600) | 待合并 |

整体看，项目正在从"功能可用"向"**编辑迭代闭环 + 资源安全**"阶段推进，距离仪表盘全生命周期体验完善约剩 2-3 个 PR 的距离。

---

## 4. 社区热点

今日社区讨论**整体清淡**，无高评论量条目，唯一外部信号为：

- **[#1597](https://redirect.github.com/thesysdev/openui/issues/1597)**（👍 0 · 评论 0 · OPEN）——由外部用户 @​Edigorin 提交的 `lang-core` 词法分析器问题。虽然尚无互动，但它是今日唯一来自社区的质量报告，直指**语言工具链的错误诊断可信度**，值得维护者优先响应（详见第 5 节）。

讨论热度实际集中在核心团队 PR 内部：[#1560](https://redirect.github.com/thesysdev/openui/pull/1560) 的 PR 描述包含详尽的基准测试论证（调用上限与生成正确率的量化关系），体现了团队**数据驱动决策**的工程文化；[#1600](https://redirect.github.com/thesysdev/openui/pull/1600) 首次披露了文档站 28 天 958 GB 流量、占团队 Vercel 传输 85% 的运营数据，透明度较高。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 位置 | 修复状态 |
|---|---|---|---|
| **中** | [#1597](https://redirect.github.com/thesysdev/openui/issues/1597) 词法分析器静默吞掉未终结字符串：当字符串用另一种引号闭合时，扫描会一路读到输入末尾，吞掉包括语句闭合括号在内的剩余程序，并报出误导性的 "ends in the middle of a statement" 错误 | `packages/lang-core` (1.0.2) | ⚠️ **尚无 fix PR** |
| **中** | [#1594](https://redirect.github.com/thesysdev/openui/pull/1594) 编辑后已打开的仪表盘因版本过期查询被拒，报 "The dashboard changed since it was shown" 并强制重载 | `react-headless` / `react-ui` | ✅ fix PR 已开启（即其自身） |
| **中低** | [#1595](https://redirect.github.com/thesysdev/openui/pull/1595) / [#1599](https://redirect.github.com/thesysdev/openui/pull/1599) 示例缺陷：卡片状态与面板不同步（过早显示 "Live"）；编辑操作发到错误的仪表盘；切换会话后面板残留 | `examples/assistant-ui-dashboards` | ✅ fix PR 已开启 |
| **低（成本类）** | [#1600](https://redirect.github.com/thesysdev/openui/pull/1600) 首页 `LangShowcase` 的 `?play=N` 参数 bug + 重型 GIF 导致文档站 28 天消耗 958 GB 带宽 | 文档站 | ✅ fix PR 已开启，并新增带宽预算检查 |
| **加固类** | [#1596](https://redirect.github.com/thesysdev/openui/pull/1596) 服务端用 `Promise.all` 一次性启动一轮全部工具调用，单轮并发无上限 | `@openuidev/server` | ✅ fix PR 已开启（限单轮最多 16 个并发） |

**关键提醒：** #1597 是今日唯一**无修复对应**的缺陷，且涉及语言核心包，建议排期处理。

---

## 6. 功能请求与路线图信号

今日无显式功能请求，但从 PR 布局可读出明确的路线图信号：

1. **工具调用可靠性双部曲（最可能进入下一版本）**：[#1560](https://redirect.github.com/thesysdev/openui/pull/1560)（已发布）放宽单次运行上限至 48，配套的 [#1596](https://redirect.github.com/thesysdev/openui/pull/1596) 将单轮并发限制为 16——二者是一对"放宽总量、收紧并发"的组合拳，#1596 大概率随下一个 server 补丁/次版本落地。
2. **仪表盘编辑闭环**：[#1594](https://redirect.github.com/thesysdev/openui/pull/1594)（核心包）+ [#1595](https://redirect.github.com/thesysdev/openui/pull/1595)/[#1599](https://redirect.github.com/thesysdev/openui/pull/1599)（示例）三连击，表明"编辑已打开的仪表盘而不报错/不重载"是当前冲刺重点，预计带来 `react-headless`、`react-ui` 的版本更新。
3. **运营成本治理**：[#1600](https://redirect.github.com/thesysdev/openui/pull/1600) 引入**带宽预算 CI 检查**，是一个制度化信号——随着流量增长，基础设施成本首次被纳入工程约束。
4. **生态保鲜自动化**：[#1589](https://redirect.github.com/thesysdev/openui/pull/1589) 机器人定期刷新 CLI 模板与示例依赖，保障新用户体验与最新包对齐。

---

## 7. 用户反馈摘要

今日可提炼的外部用户反馈样本仅 1 条，但信息密度较高：

- **痛点（来自 [#1597](https://redirect.github.com/thesysdev/openui/issues/1597)）**：用户在编写 OpenUI 语言程序时，若误用另一种引号闭合字符串，得到的报错（"语句在中途结束"）与真实原因（引号错配）完全不符，导致**排错方向被误导**。诉求是词法分析器要么在异种引号处终止字符串，要么给出指向真实问题的错误信息。
- **使用场景信号**：该用户深入到了 `lang-core` 词法层细节，说明存在**深度自定义脚本编写者**群体，他们对诊断质量的要求将随语言能力扩展而上升。
- **间接反馈（来自 #1560 的动机描述）**：真实用户痛点为"仪表盘分页拉取外部 API 时在第 17 次工具调用处失败"，该问题已在本版本修复，属于已兑现的满意度提升点。

---

## 8. 待处理积压

| 条目 | 开启时间 | 状态 | 建议 |
|---|---|---|---|
| [#1597](https://redirect.github.com/thesysdev/openui/issues/1597) | 11-09（1 天） | 0 评论、0 反应、无负责人 | **优先**：今日唯一社区质量报告，涉及语言核心，建议维护者尽早确认并回复，避免社区信号流失 |
| [#1589](https://redirect.github.com/thesysdev/openui/pull/1589) | 11-07（3 天） | 机器人 PR，验证合约已通过 | 例行依赖刷新，可择机批量合并，避免模板与已发布包版本持续漂移 |
| [#1594](https://redirect.github.com/thesysdev/openui/pull/1594) | 11-08（2 天） | 待评审 | 核心包（react-headless/react-ui）变更，建议优先评审，因 #1595/#1599 的示例修复与其主题关联 |
| [#1595](https://redirect.github.com/thesysdev/openui/pull/1595) → [#1599](https://redirect.github.com/thesysdev/openui/pull/1599) | 11-09 | 存在堆叠依赖 | 注意**合并顺序**：须先合 #1595 再处理 #1599，避免示例修复链条阻塞 |

---

*本报告基于过去 24 小时 GitHub 数据自动生成；社区互动数据（评论/反应）截至 2026-11-10。*

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render 项目动态日报

> **项目**：[vercel-labs/json-render](https://github.com/vercel-labs/json-render) ｜ **日期**：2026-11-10 ｜ **数据窗口**：过去 24 小时
> **关键数字**：Issue 动态 1（新开 1 / 关闭 0）· PR 动态 8（新增 1 / 待合并 3 / 关闭 5）· Releases 0

---

## 一、今日速览

今日项目活跃度中等偏高，重心明显在 PR 侧：维护者 ctate 集中关闭了 5 个自 2026 年 9-10 月起挂起（39–57 天）的历史 PR，主题高度聚焦于 JSON Pointer 安全加固与 React 校验生命周期修复，同期 TypeScript 7 迁移（[#455](https://redirect.github.com/vercel-labs/json-render/pull/455)）持续更新。社区侧响应迅速：昨日新报的 catalog 校验缺陷（[#467](https://redirect.github.com/vercel-labs/json-render/issues/467)）当日即获得贡献者 TanmayShah29 提交的修复 PR（[#468](https://redirect.github.com/vercel-labs/json-render/pull/468)），并顺带覆盖更早的 [#378](https://redirect.github.com/vercel-labs/json-render/issues/378)。总体健康度良好——Issue 到修复的转化链路通畅，社区贡献占比高（待合并 3 个 PR 中 2 个来自社区）。但 core 包近期连续暴露校验类缺陷、且无版本发布消化已完成的修复，是值得关注的信号。

## 二、版本发布

本日无新版本发布。据 [#467](https://redirect.github.com/vercel-labs/json-render/issues/467) 报告，社区当前使用版本为 `@json-render/core` / `@json-render/react` **0.21.4**。待合并队列中的 [#468](https://redirect.github.com/vercel-labs/json-render/pull/468) 与 [#429](https://redirect.github.com/vercel-labs/json-render/pull/429) 均为 core 补丁级修复，合入后预计将催生一次 patch 发布。

## 三、项目进展

### 3.1 今日集中关闭的 5 个 PR（均为 ctate 提交，挂起 39–57 天后于今日处理）

| PR | 主题 | 核心内容 |
|---|---|---|
| [#336](https://redirect.github.com/vercel-labs/json-render/pull/336) | fix(core): 加固 JSON Pointer 路径处理 | 路径工具仅接受规范十进制数组索引，数字样式 token 保留为字面量对象键；畸形数组读写变为安全 no-op；不可变状态存储对被拒绝写入保持快照一致性 |
| [#371](https://redirect.github.com/vercel-labs/json-render/pull/371) | fix(core): 拒绝不安全 JSON Pointer 路径 | 修复 helpers 沿继承属性遍历、允许不可信路径越权写入的问题；遍历前校验解码段、拒绝原型相关命名、限定 own properties；patch 操作双向校验路径 |
| [#352](https://redirect.github.com/vercel-labs/json-render/pull/352) | fix(core): 展平路径 token 转义 | `flattenToPointers` 追加对象键时将 `~`→`~0`、`/`→`~1`，保证字面键与嵌套路径可区分、可往返读写 |
| [#341](https://redirect.github.com/vercel-labs/json-render/pull/341) | fix(react): 卸载时注销校验字段 | 按挂载控件跨生命周期跟踪注册；清除残留错误而不删除值或共享路径校验；覆盖条件字段、Tab、共享路径、绑定变更等场景 |
| [#343](https://redirect.github.com/vercel-labs/json-render/pull/343) | 消除 Jev Playground 布局抖动 | 新生成内容不再按临时 catalog 顺序排布后重排，改为流式输出决策元数据、一次性呈现最终树 |

**进展解读**：#336 / #352 / #371 构成一组完整的 JSON Pointer 安全三部曲（索引规范化 → token 转义 → 原型链防护），若以合并方式落地，core 对不可信路径输入的防御能力将有实质跃升。⚠️ 注意：5 个 PR 状态均显示 **CLOSED**，数据源未区分“合并”与“未合并关闭”；集中关闭时点与 TS7 迁移的活跃更新重合，不排除是为迁移清理队列、待重做。**若属未合并关闭，上述安全修复尚未进入主线**，建议跟踪维护者后续说明。

### 3.2 待合并队列（3 个）

- [#468](https://redirect.github.com/vercel-labs/json-render/pull/468) — 多组件 catalog 逐组件校验 props（今日新增，详见第五节）
- [#455](https://redirect.github.com/vercel-labs/json-render/pull/455) — TS7 升级：包与文档站迁移 TS7、tsup dts → tsc 声明、ESLint → oxlint（docs 站与 UI 包）；Svelte 包与示例因工具链依赖 TS5 API 暂缓
- [#429](https://redirect.github.com/vercel-labs/json-render/pull/429) — min/max 接受数字字符串（详见第五节）

**整体评估**：若 5 个关闭 PR 为合并落地，单日推进幅度较大（安全 + 稳定性双线收尾）；即便为关闭待重做，加上 #468 的即时修复与 #455 的持续推进，项目仍处上升通道，当前节奏明显受 TS7 迁移主导。

## 四、社区热点

今日无高评论量讨论线程（新 Issue 评论数为 0），热度体现在“行动”而非“讨论”：

1. **#467 → #468 修复链（今日最热事件）**：Issue [#467](https://redirect.github.com/vercel-labs/json-render/issues/467)（crispearson）报告后不到 24 小时即出现修复 PR [#468](https://redirect.github.com/vercel-labs/json-render/pull/468)（TanmayShah29），同时修复更早的 [#378](https://redirect.github.com/vercel-labs/json-render/issues/378)。**诉求分析**：用户将 `catalog.validate()` 作为 JSON 内容合法性把关手段，多组件场景下任意 props 被静默放行，直接削弱校验 API 可信度；且该缺陷此前已被报告过一次，属复发性痛点。
2. **[#455](https://redirect.github.com/vercel-labs/json-render/pull/455) TypeScript 7 迁移**（今日仍有更新）：技术决策细致——Svelte 生态因依赖 TS5 API 暂缓迁移，显示维护者对依赖兼容性有清醒权衡，是当前最大的工程投入方向。

## 五、Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | 修复状态 |
|---|---|---|
| 🔴 高（待确认） | JSON Pointer 原型链污染 / 不可信路径越权写入（[#371](https://redirect.github.com/vercel-labs/json-render/pull/371) 所修复的问题） | PR 今日关闭，合并与否待确认；若未合入则风险仍在主线 |
| 🟠 中（若用于不可信输入把关则升级） | [#467](https://redirect.github.com/vercel-labs/json-render/issues/467)（即 [#378](https://redirect.github.com/vercel-labs/json-render/issues/378)）：`catalog.validate()` 在 ≥2 组件时跳过逐组件 props 校验，属静默失败型数据完整性缺陷，影响 0.21.4 | ✅ 已有修复 PR [#468](https://redirect.github.com/vercel-labs/json-render/pull/468)（今日提交，待评审） |
| 🟡 中低 | [#429](https://redirect.github.com/vercel-labs/json-render/pull/429)：min/max 不接受 "7" 等数字字符串，绑定 `min: 5` 的文本输入永无效 | 修复 PR 开放中（10-23 提交，含 co-author） |
| 🟡 中低 | React 控件卸载后校验字段未注销、残留错误（[#341](https://redirect.github.com/vercel-labs/json-render/pull/341) 所修复的问题） | PR 今日关闭，合并与否待确认 |

**稳定性观察**：今日暴露/处理的缺陷集中于“校验正确性”与“路径安全”两条线，且多为静默失败（校验放行、越权写入）而非显性崩溃——对依赖校验 API 做数据把关的用户伤害更大，建议加强多组件 catalog 与不可信输入的测试覆盖。

## 六、功能请求与路线图信号

今日无新增显性功能请求，从 PR 动向可提炼：

1. **工具链现代化（明确主线）**：[#455](https://redirect.github.com/vercel-labs/json-render/pull/455) TS7 迁移。注意类型产物从 tsup dts 切换为 tsc 声明可能影响下游；Svelte 包暂留 TS5 表明迁移分阶段推进，短期内或影响其他 PR 的合并节奏。
2. **校验易用性工作流（延续信号）**：[#429](https://redirect.github.com/vercel-labs/json-render/pull/429) 与其基础 [#318](https://redirect.github.com/vercel-labs/json-render/pull/318) 显示社区在推动"min/max/numeric 共享数字解析器、数字字符串按数值比较、'5px' 仍拒绝”的宽松化方向，与 #468 的严格化修复互补，合入概率较高。
3. **安全加固收尾信号**：JSON Pointer 三部曲若落地，标志“路径安全”专项告一段落，可关注是否补充安全公告。
4. **下一版本预测**：[#468](https://redirect.github.com/vercel-labs/json-render/pull/468)（修复两个已跟踪 issue，优先级高）+ [#429](https://redirect.github.com/vercel-labs/json-render/pull/429) 最可能进入下一个 patch 版本；#455 体量大，更可能独立成里程碑。

## 七、用户反馈摘要

今日 Issue 评论数为 0，缺少讨论型反馈，以下痛点从 Issue/PR 正文提炼：

- **校验 API 可信度**（crispearson，[#467](https://redirect.github.com/vercel-labs/json-render/issues/467)）：使用场景为多组件 catalog 的 schema 校验；痛点是“以为校验通过了，其实根本没校验”——静默放行比报错更伤信任，且该问题已二次报告（#378）。
- **表单输入兼容性**（lahfir 相关，[#429](https://redirect.github.com/vercel-labs/json-render/pull/429) 背景）：文本输入绑定 min/max 时校验永不过；用户期望“合理宽松”（"7" 按数值比较，"5px"、空串仍拒绝）。
- **正面信号**：Issue 报告质量高（含版本、复现条件、根因分析），24 小时内出现对应修复 PR，核心用户群技术深度好、协作链路顺畅。

## 八、待处理积压

| 项目 | 状态 | 建议 |
|---|---|---|
| [#429](https://redirect.github.com/vercel-labs/json-render/pull/429) | 开放 18 天 | 社区 PR、有 co-author、依赖链清晰，建议维护者优先评审，避免贡献者流失 |
| [#378](https://redirect.github.com/vercel-labs/json-render/issues/378) | 已被 #468 覆盖 | 待 #468 合并后同步关闭并验证 |
| [#318](https://redirect.github.com/vercel-labs/json-render/pull/318) | 状态未在今日数据中 | 建议核查合入情况，确认 #429 的依赖是否就绪 |
| #336 / #341 / #343 / #352 / #371 底层修复 | 今日集中关闭 | 若为未合并关闭，原型链污染防护（#371）等安全修复仍未进入主线，且 TS7 迁移可能要求重做——建议维护者公开处置说明 |
| [#455](https://redirect.github.com/vercel-labs/json-render/pull/455) | 开放 4 天，活跃 | 影响面广（类型产物、lint 工具链），关注其是否阻塞其他 PR 合并 |

**健康度小结**：响应速度优（issue → fix PR < 24h）、社区贡献活跃、维护者方向明确；风险点在于校验类缺陷系统性出现、已完成的修复长期未随版本发布交付（0.21.4 后无 release），以及 TS7 迁移对合并节奏的潜在影响。建议重点关注 #468 的评审进展与下一次版本发布时点。

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报

**项目**: [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) · **日期**: 2026-11-10 · **数据窗口**: 过去 24 小时

---

## 1. 今日速览

项目处于功能密集交付期，活跃度高位运行：过去 24 小时 PR 动态 37 条（10 条已合并/关闭，27 条待合并），新增/活跃 Issue 5 条（0 条关闭），无新版本发布。最重要的里程碑是**生成式 UI（Generative UI）完成跨框架版图**——Vue 原生实现与 React Native 自定义原生目录先后落定，与既有的 React、Angular 形成四端覆盖。社区侧今日集中报告 3 个 Bug，全部集中于 human-in-the-loop 中断与渲染拒绝等边缘生命周期场景。核心维护者 tylerslaton 的 "2.0.0" 预发布 PR 仍在推进，大版本临近。整体健康度良好，但 27 个待审 PR 与零 Issue 关闭率对维护带宽构成可见压力。

**健康度指标**: PR 吞吐 ✅ 强（单日 10 条合并/关闭）| 评审积压 ⚠️ 偏高（27 条待合并）| Issue 响应 ⚠️ 滞后（5 新 0 关）| 贡献者多样性 ✅ 10+ 位活跃人类贡献者 | 发布节奏 ➖ 静默蓄力（2.0.0 WIP）

---

## 2. 版本发布

过去 24 小时无新版本发布。需关注版本前兆：[#8185 "2.0.0"](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185)（2026-11-03 开启，明确标注 WIP / do not merge）正在筹备，结合带 breaking 标记的文档站重建与 A2UI middleware 行为变更（见第 6 节），预计下一个大版本包含破坏性变更，用户应提前关注迁移指南。

---

## 3. 项目进展

今日 10 条 PR 合并/关闭，主线推进显著：

**生成式 UI 四端版图收口**
- [#8280](https://redirect.github.com/CopilotKit/CopilotKit/pull/8280)（已合并/关闭）: **Vue 原生生成式 UI**——Vue 应用可让 agent 在聊天或页面命名位置渲染自己的 Vue 组件，包含标准目录全部 69 个组件，能力对齐 React（[#7819](https://redirect.github.com/CopilotKit/CopilotKit/pull/7819)）与 Angular（[#8105](https://redirect.github.com/CopilotKit/CopilotKit/pull/8105)）。
- [#8260](https://redirect.github.com/CopilotKit/CopilotKit/pull/8260)（已合并/关闭）: **React Native 生成式 UI**，支持自定义原生组件目录（catalogs + surfaces），RN 应用首次可让 agent 渲染原生组件。

**示例与演示体验**
- [#8285](https://redirect.github.com/CopilotKit/CopilotKit/pull/8285)（已关闭）: A2UI playground 在设计系统切换时实时重绘回答（附 GIF/MP4 演示）。
- [#8100](https://redirect.github.com/CopilotKit/CopilotKit/pull/8100)（已关闭）: "观看 agent 编写 A2UI、由任意设计系统渲染" 示例收尾。

**CI / 基础设施加固**
- [#8228](https://redirect.github.com/CopilotKit/CopilotKit/pull/8228)（已关闭）: 修复 shell 镜像构建因 Playwright 1.65.0 浮动解析失败（ETARGET）导致的 CI 中断，锁定 showcase/scripts 依赖。

**在途大型 PR**: Fumadocs 文档站重建（[#8214](https://redirect.github.com/CopilotKit/CopilotKit/pull/8214)，breaking）、Intelligence 长线程一次性加载性能优化（[#8247](https://redirect.github.com/CopilotKit/CopilotKit/pull/8247)）、全量暗色模式覆盖 22 个 React 集成 + Angular/Vue（[#8098](https://redirect.github.com/CopilotKit/CopilotKit/pull/8098)）、OpenAI Agents SDK (Python) 集成（[#8242](https://redirect.github.com/CopilotKit/CopilotKit/pull/8242)）。

**整体判断**: 单日补齐生成式 UI 最后两块拼图，功能主线从 React 生态扩展至多框架与移动端，叠加 2.0.0 筹备与文档/性能/生态并进，项目进入平台化成熟阶段。

---

## 4. 社区热点

> 数据说明：今日 5 条 Issue 均为 1 条评论，PR 评论数未披露，以下按内容影响与关联度排序。

1. **HITL 中断渲染缺陷成对出现**：[#8276](https://redirect.github.com/CopilotKit/CopilotKit/issues/8276)（Vue）与 [#8274](https://redirect.github.com/CopilotKit/CopilotKit/issues/8274)（Angular）由同一作者 HoussemDjeghri 提交，复现路径一致——agent 发起 human-in-the-loop 请求等待用户期间执行 `stopAgent`，被放弃的请求在 UI 中被渲染成"用户的回答"。诉求指向中断生命周期与消息状态机的一致性，大概率是同一根因的跨框架表现。
2. **render_ui 工具结果失真**（[#8272](https://redirect.github.com/CopilotKit/CopilotKit/issues/8272)）: 所有渲染操作被拒绝时（目录外组件、禁用 agent 函数调用时的 `callRendererFunction`），runtime 仍向 agent 返回 "rendered"。核心关注点是工具反馈的真实性——agent 依赖该结果决定后续行为。
3. **学习管线扩展性诉求**（[#8284](https://redirect.github.com/CopilotKit/CopilotKit/issues/8284)）: 用户指出 learning 采集侧已可插拔（`createCollector({ sink })` 接任意 `LearningSink`），但 BuiltInAgent 的 learned-skill **投递侧**不支持自定义来源，要求补齐对称扩展点。
4. **文档与定价信息不一致**（[#8283](https://redirect.github.com/CopilotKit/CopilotKit/issues/8283)）: 多个自托管文档页要求 "Team Self-hosted" 计划，但公开定价页未列出该计划，引发商业化授权信息困惑。

---

## 5. Bug 与稳定性

按严重程度排列（今日 3 条新 Bug，**均暂无关联修复 PR**）：

| 严重度 | Issue | 问题 | Fix PR |
|---|---|---|---|
| 高 | [#8272](https://redirect.github.com/CopilotKit/CopilotKit/issues/8272) | `render_ui` 在全部操作被拒时仍返回 "rendered"，位于 runtime 的 `GenerativeUIMiddleware`，错误反馈可能诱导 agent 进入无效渲染循环 | ❌ 暂无 |
| 中 | [#8276](https://redirect.github.com/CopilotKit/CopilotKit/issues/8276) / [#8274](https://redirect.github.com/CopilotKit/CopilotKit/issues/8274) | Vue/Angular 中被放弃的 HITL 请求渲染为用户回答，误导会话历史认知，跨两框架的同源缺陷 | ❌ 暂无 |
| 低 | [#8283](https://redirect.github.com/CopilotKit/CopilotKit/issues/8283) | 文档计划名与定价页不一致，不影响运行时 | ❌ 暂无 |

**其他稳定性信号（来自 PR）**:
- [#8281](https://redirect.github.com/CopilotKit/CopilotKit/pull/8281) 揭示 main 分支在 Windows + zh-CN 区域下核心测试失败（货币符号 `US$` vs `$`、路径分隔符），该 PR 即修复，✅ 已有 fix。
- [#8137](https://redirect.github.com/CopilotKit/CopilotKit/pull/8137) 提示 A2UI middleware 0.0.14 存在**行为变更**（render 调用后 agent 行为变化），升级需回归验证。
- [#8212](https://redirect.github.com/CopilotKit/CopilotKit/pull/8212) 修复 staging CI 在 Railway 回放旧镜像快照时误报成功的问题——CI 可信度加固。

**风险提示**: 三个新 Bug 全部落在生成式 UI / HITL 领域，恰是今日快速扩张的功能面，功能铺开速度与边缘路径测试覆盖之间存在张力。

---

## 6. 功能请求与路线图信号

- **2.0.0 明确在途**: [#8185](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185) 为版本 PR；[#8214](https://redirect.github.com/CopilotKit/CopilotKit/pull/8214)（文档站 breaking 重建）与 [#8137](https://redirect.github.com/CopilotKit/CopilotKit/pull/8137)（A2UI 0.0.14 行为变更）极可能随 2.0.0 一并落地。
- **#8284 技能投递自定义来源**: 与现有 `LearningSink` 可插拔架构天然对齐，属架构补全型需求，方向上大概率纳入后续迭代（尚无关联 PR）。
- **[#8258](https://redirect.github.com/CopilotKit/CopilotKit/pull/8258) 聊天消息时间戳**: opt-in `showTimestamps` + 自定义 `formatTimestamp`，覆盖 CopilotChat/Popup/Sidebar，兑现长期 Issue #5892，已进入评审。
- **[#8270](https://redirect.github.com/CopilotKit/CopilotKit/pull/8270) mcpApps 工具过滤**: `includeTools`/`excludeTools` 服务级白/黑名单，兑现 Issue #5930，已进入评审。
- **生态扩张**: [#8242](https://redirect.github.com/CopilotKit/CopilotKit/pull/8242)（OpenAI Agents SDK Python，基于新发布的 ag-ui-openai-agents 0.1.0）、[#8286](https://redirect.github.com/CopilotKit/CopilotKit/pull/8286)（Omnara 共享演示注册）、[#8247](https://redirect.github.com/CopilotKit/CopilotKit/pull/8247)（长线程性能）显示路线图重心在多框架接入与 Intelligence 体验打磨。

---

## 7. 用户反馈摘要

- **多框架重度用户已出现**: HoussemDjeghri 同时在 Vue 与 Angular 上做生产级边界测试（HITL 中断、渲染拒绝），表明非 React 框架已有深度使用者，且对一等公民支持的质量敏感。
- **高级用户追求架构对称性**: Laptopmini 的两条 Issue（[#8284](https://redirect.github.com/CopilotKit/CopilotKit/issues/8284)、[#8283](https://redirect.github.com/CopilotKit/CopilotKit/issues/8283)）显示其深度使用 learning/skill 管线，期望"采集可插拔、投递也可插拔"；同时对自托管商业信息的透明度提出诉求。
- **贡献者群体国际化且持续**: ZYZ666-RGB（时间戳、MCP 过滤）、GPT-AGI（Windows zh-CN 测试修复）等外部贡献者活跃，[#8281](https://redirect.github.com/CopilotKit/CopilotKit/pull/8281) 间接印证中文/Windows 用户群真实存在。
- **痛点集中于边缘生命周期而非主流程**: 今日全部 Bug 均为中断/拒绝/放弃路径，说明核心链路已趋稳定，用户开始以生产严苛度检验细节——这是产品成熟期的典型信号。
- **演示即获客**: A2UI 系列 PR（[#8285](https://redirect.github.com/CopilotKit/CopilotKit/pull/8285)、[#8100](https://redirect.github.com/CopilotKit/CopilotKit/pull/8100)）标配 GIF/MP4 与托管预览，团队明显将可视化说服力投入置于高优先级。

---

## 8. 待处理积压

- **[#7827](https://redirect.github.com/CopilotKit/CopilotKit/pull/7827) Renovate GitHub Actions 更新**: 2026-10-15 开启，已悬挂约 **26 天**，涉及 `actions/download-artifact` 等多个 action 升级，建议尽快分批合并，避免 CI 安全补丁滞后。
- **评审队列偏大且含重磅改动**: 27 条待合并 PR 中包括 [#8214](https://redirect.github.com/CopilotKit/CopilotKit/pull/8214)（Fumadocs 重建，已挂 6 天，breaking）、[#8098](https://redirect.github.com/CopilotKit/CopilotKit/pull/8098)（暗色模式，已挂 11 天）、[#8247](https://redirect.github.com/CopilotKit/CopilotKit/pull/8247)、[#8185](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185)（2.0.0），评审带宽或成交付瓶颈。
- **今日 3 个 Bug 零认领**: [#8276](https://redirect.github.com/CopilotKit/CopilotKit/issues/8276)/[#8274](https://redirect.github.com/CopilotKit/CopilotKit/issues/8274) 疑似同根因，建议维护者优先归因并考虑一次性跨框架修复；[#8272](https://redirect.github.com/CopilotKit/CopilotKit/issues/8272) 影响 agent 反馈回路，宜排期修复。
- **长期社区请求待闭环**: #5892（时间戳）、#5930（MCP 工具过滤）已有实现 PR（[#8258](https://redirect.github.com/CopilotKit/CopilotKit/pull/8258)、[#8270](https://redirect.github.com/CopilotKit/CopilotKit/pull/8270)），建议加快评审合并，兑现承诺并留住社区贡献者。

---

*本报告基于 GitHub 过去 24 小时公开数据生成，PR 合并/关闭状态以仓库最终状态为准。*

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*