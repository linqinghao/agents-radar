# 生成式 UI 生态日报 2026-11-12

> Issues: 55 | PRs: 102 | 覆盖项目: 4 个 | 生成时间: 2026-11-12 06:23 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告 · 2026-11-12

---

## 1. 生态全景

生成式 UI 生态正整体从概念验证期进入工程化深水区:a2ui 专注 v1.0 规范硬化，CopilotKit 以 v1.87.0 深化 A2UI 协议集成，OpenUI 处于发版前整理期，json-render 静默扩展多端渲染版图。今日最具战略意义的信号是**协议层收敛开始发生**——OpenUI 团队主动提议将 OpenUI Lang 与 a2ui Express 格式统一(a2ui#3214,全列表最高 👍 数)，CopilotKit 已让 A2UI 1.0 原生支持随正式版本落地，叠加 json-render 的 SwiftUI 渲染器，“一份协议、多端渲染”的产业分工正在成形。与此同时，各项目共同暴露的瓶颈已从功能可用性转向工程质量：**安全合规、数据保真与评审带宽**，正在取代“能不能渲染”，成为下一阶段竞争的胜负手。

---

## 2. 各项目活跃度对比

| 指标 | a2ui | CopilotKit | OpenUI | json-render |
|---|---|---|---|---|
| Issue 更新(活跃/关闭) | **50**(32/18) | 3(3/0) | 2(1/1) | 0 |
| Issue 关闭率 | 36% | 0% | 50% | — |
| PR 更新(待合并/已解决) | 50(48/2) | **40**(24/16) | 9(4/5) | 3(3/0) |
| PR 解决率 | **4%** | 40% | **56%** | 0% |
| Release | 无 | **v1.87.0** | 无(发版 PR #1615 在途) | 无 |
| 24h 更新总量 | **100** | 43 | 11 | 3 |

**三点观察**:
- **a2ui 量最大但结构失衡**：Issue 侧推进稳健，PR 合并率仅 4%,48 条积压中含 4 个月陈案(#2088),代码落地速度是明确瓶颈；
- **CopilotKit 是唯一发版的项目**，单日 16 条 PR 完成，节奏最接近成熟商业开源；
- **OpenUI 效率最高**:9 条 PR 中 6 条来自自动化机器人，Issue 当日闭环，“AI 原生”流水线运转顺畅。

---

## 3. 共同关注的功能方向

**① A2UI 协议收敛(三项目联动，今日最强信号)**
- a2ui:协议源头，v1.0 硬化中，收到 OpenUI 团队语法统一提案(#3214,4 👍);
- CopilotKit:v1.87.0 落地 A2UI 1.0 原生 operations,#8348/#8350/#8341/#8354 组成 2.0 统一冲刺队列；
- OpenUI:主动求统一——**竞争者向协议靠拢本身即是风向标**。

**② 多端原生渲染(Web-only 已不够用)**
- a2ui:Swift 渲染器性能优化收尾(#3200)、a2ui_flutter 三包、TS/Swift/Dart/Python 四端 SDK;
- json-render:#470 新增 Swift 包 + SwiftUI 渲染器 + 原生组件目录。两项目独立推进 Apple 原生支持。

**③ 流式数据通路与保真**
- a2ui #4132(流式乱序可致整个数据模型被替换)、json-render JSONL 流式支持、OpenUI 的 AG-UI 流式前端定位——“边生成边渲染”已是标配，**正确性成为新战场**。

**④ 校验严格性与静默失真**
- a2ui #4173(STRICT_VALIDATION 仍放行非法消息)、OpenUI #1611/#1612(图表缺失值静默归零、可空字段元素丢弃)——生产用户对“不报错但语义错误”零容忍。

**⑤ 安全合规与入门体验**
- 安全侧：a2ui 的 Zod CVE(#4147)被明确表述为企业采用前提；CopilotKit 出现 token 转发安全问题(#8361)与 actions.lock 诉求(#8359);
- 文档侧：a2ui Quickstart 开箱即坏(#3752)、Dart 包无法共存(#3942);CopilotKit 重建文档体系(#8327);OpenUI 文档站 28 天消耗 958GB——**文档是全生态最重的消费入口与获客战场**。

---

## 4. 差异化定位分析

| 维度 | a2ui | CopilotKit | OpenUI | json-render |
|---|---|---|---|---|
| 生态层次 | 协议/规范层 | 应用框架层 | 工具链+组件库 | 轻量渲染库 |
| 技术路线 | schema 驱动声明式协议，多版本协商(v0.9→1.0) | React 框架+运行时，**消费** A2UI 协议 | 自有 DSL(OpenUI Lang)+ react-ui 组件套件 | JSON spec + 表达式/指令/状态系统 |
| 多端策略 | 四语言 SDK + 第三方渲染器 | 多**运行时**(Python/Go/Ruby/.NET 对齐) | 聚焦 React/Web | Web → SwiftUI(#470) |
| 目标用户 | 框架构建者、合规敏感企业 | 快速搭建 AI Copilot 的应用团队 | Agent 前端/仪表盘开发者 | server-driven UI 极简场景 |
| 生态策略 | 开放接收第三方渲染器提案 | 集成目录扩张(OpenAI Agents SDK 已上线 prod) | showcase/adopters 展示驱动 | Vercel Labs 实验性扩展 |
| 当前阶段 | v1.0 硬化期 | 高频稳定迭代(v1.87.x) | 发版前整理 | 早期多端探索 |

**一句话画像**：a2ui 定义协议、CopilotKit 基于协议造框架、OpenUI 造工具与组件、json-render 造渲染引擎——四者初步形成上下游分工而非完全同质竞争；真正的正面交锋发生在“谁的语法成为标准”(a2ui vs OpenUI 的 #3214 谈判)。

---

## 5. 社区热度与成熟度

**热度排序(24h 更新总量)**：a2ui(100)> CopilotKit(43)> OpenUI(11)> json-render(3)

但热度 ≠ 健康度，四项目呈现四种形态：

- **CopilotKit|成熟稳定**：唯一当日发版，PR 解决率 40%,集成实现代码→文档→prod 上线全链路闭环，零陈年 Issue 积压；风险在 24 条待审队列与依赖层缺陷(#8356 无修复路径)。
- **a2ui|高热但失衡**：讨论量与外部贡献质量最高(含规范测试对照的 Bug 报告、生产级 Flutter 用户反哺架构讨论)，但 4% 合并率与 48 条积压表明维护吞吐跟不上社区热情，正处于 v1.0 落地的关键质量窗口。
- **OpenUI|小而敏捷**：Issue 当日闭环、PR 快速消化、6/9 自动化贡献，下游采用信号(Bub、The HN Times)持续增长，属健康的快速迭代期项目。
- **json-render|静默深耕**：零 Issue、零评论、零合并，但供给侧不弱(单 PR 即为生态级扩展)，瓶颈完全在维护者 review 带宽，社区基础尚薄。

---

## 6. 值得关注的趋势信号

**① 协议标准之战已经开幕。** A2UI 正形成重力场：规范源头+ 最大框架消费者+ 竞争者主动求统一。若 #3214 达成，协议层投资风险将大幅下降；而 CopilotKit 计划移除 v0.9 客户端(#8348),**深度绑定旧协议版本的集成应立即启动迁移评估**。

**② “静默失败”零容忍成为生产验收线。** CopilotKit #8356(参数无告警丢弃，用户原话强调“没有任何警告或错误”)与 OpenUI #1611(缺失值归零误导读数)同类：用户已越过“能渲染”阶段，要求**数据语义正确**。做生成式 UI 数据层，可空/缺失值与流式乱序是当前共同雷区，需自建防御性校验。

**③ 安全合规是 To B 第一闸门，且在加速硬化。** a2ui 因 Zod CVE 被企业明确拒之门外，CopilotKit 用户主动要求供应链进阶措施(actions.lock)——依赖治理的响应速度正成为开源项目的硬竞争力。

**④ AI 构建 AI 工具已是现实，但人类评审成为新瓶颈。** OpenUI 6/9 PR 来自机器人、a2ui 在测试自动化分诊工具；与此同时 a2ui 48 条、CopilotKit 24 条 PR 积压。生态约束正从“代码供给”转向“评审带宽”——**小而聚焦的 PR(如 json-render #458)合并概率显著高于大 PR**。

**⑤ 文档与“黄金 5 分钟”是增长的隐形战场。** OpenUI 文档站单月近 1TB 流量、a2ui Quickstart 损坏直接流失新用户。对项目方，文档 ROI 正超过功能宣传；对开发者，选型时应把“Quickstart 是否开箱即用”当作质量代理指标。

**开发者选型速查**:

| 需求场景 | 建议 |
|---|---|
| 协议层稳定 + 企业合规 | 观望 a2ui CVE 修复(#4147/#4185)后进入 |
| 快速搭建 AI Copilot 应用 | CopilotKit v1.87.0,但需跟踪 2.0 破坏性变更路线 |
| Agent 仪表盘/前端组件 | OpenUI(发版窗口在即，关注 #1607) |
| 轻量 JSON→UI、含 Apple 原生 | json-render(确认 #470 review 进度后再深度依赖) |

---

*数据来源：四项目 GitHub Issues/PRs 24 小时窗口(截至 2026-11-12)。单日数据存在噪声，结构性结论(协议收敛、评审瓶颈、合规门槛)基于多项目交叉验证。*

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目动态日报 · 2026-11-12

---

## 1. 今日速览

a2ui 今日保持高活跃度：过去 24 小时内共有 **50 条 Issue 更新（32 新开/活跃、18 关闭）** 和 **50 条 PR 更新（48 待合并、2 已合并/关闭）**，无新版本发布。社区讨论焦点集中在 v1.0 硬化、Swift/Dart 渲染器生态兼容性，以及来自 OpenUI 团队的语法统一提案（#3214，获列表中最高 👍 数）。Issue 侧处理效率良好（关闭率 36%），但 **PR 合并吞吐明显滞后（仅 4%）**，48 个待合并 PR 中包含多个超过一个月的积压，代码侧推进速度成为当前主要瓶颈。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日 Issue 侧清理成效显著（18 个关闭），多个高关注度 Bug 落幕：

- **[#2872](https://redirect.github.com/a2ui-project/a2ui/issues/2872)**（7 条评论，本周讨论最多的 Bug）已关闭——schema 合法组件（如 `Slider` 的 `min`/`max` 边界值）导致整个 surface 崩溃的问题得到处理，配套回归测试 PR **[#4108](https://redirect.github.com/a2ui-project/a2ui/pull/4108)** 将 `flutter/genui#1050` 的全部崩溃案例转化为 a2ui_flutter v0.9/v1.0 目录的测试用例，验证了 a2ui_core 的 schema 校验在字面量类型错误时能正确拦截。
- **[#3200](https://redirect.github.com/a2ui-project/a2ui/issues/3200)** 已关闭——Swift 渲染器"每次数据写入全树重解析"的性能问题（2,000 项列表场景）已有结论，这是移动端大列表场景的关键优化方向。
- **[#3423](https://redirect.github.com/a2ui-project/a2ui/issues/3423)** 已关闭——`@a2ui/react@0.14.0` 硬编码 `v0_9` 导入导致 v1.0 surface 无法通过 typecheck 的兼容性问题解决。
- **[#3259](https://redirect.github.com/a2ui-project/a2ui/issues/3259)** 已关闭——restaurant_finder 样例中 Gemini 返回 `finish_reason=RECITATION` 导致 `<a2ui-json>` 标签解析失败的问题。
- CI 噪音类 Issue（[#3875](https://redirect.github.com/a2ui-project/a2ui/issues/3875)、[#3292](https://redirect.github.com/a2ui-project/a2ui/issues/3292)、[#3250](https://redirect.github.com/a2ui-project/a2ui/issues/3250)）批量关闭，推测后续运行已恢复。

**值得注意的工程投入信号**：团队成员（polina-c）今日关闭了两个测试 Issue（[#4064](https://redirect.github.com/a2ui-project/a2ui/issues/4064)、[#4065](https://redirect.github.com/a2ui-project/a2ui/issues/4065)），显示团队正在测试一套**新的 Issue 分诊（triage）工具**，与大量 Issue 携带的 `status: first-line-handled` 标签相互印证。

**整体评估**：Issue 侧推进稳健（v1.0 bug bash 持续收尾），但今日仅 2 个 PR 合并（且未进入评论数前 20 榜单），大量修复与文档 PR 仍滞留队列，代码落地速度与 Issue 关闭速度不匹配。

---

## 4. 社区热点

| 排名 | Issue/PR | 热度 | 状态 | 主题 |
|---|---|---|---|---|
| 1 | [#2872](https://redirect.github.com/a2ui-project/a2ui/issues/2872) | 7 评论 | 已关闭 | schema 合法组件可击溃渲染 surface |
| 2 | [#3200](https://redirect.github.com/a2ui-project/a2ui/issues/3200) | 6 评论 | 已关闭 | Swift 渲染器应仅刷新变化部分 |
| 3 | [#3061](https://redirect.github.com/a2ui-project/a2ui/issues/3061) | 6 评论 | 开放（needs-team-input） | 移除废弃的 `componentEnvelopeRef` 配置 |
| 4 | [#3214](https://redirect.github.com/a2ui-project/a2ui/issues/3214) | 5 评论 / **4 👍** | 开放 | 统一 Express 与 OpenUI Lang 语法 |
| 5 | [#3687](https://redirect.github.com/a2ui-project/a2ui/issues/3687) | 5 评论 | 开放 | main 分支 evals 失败（PR #3677） |
| 6 | [#3423](https://redirect.github.com/a2ui-project/a2ui/issues/3423) | 5 评论 | 已关闭 | React 适配器 v1.0 导入路径断裂 |

**热点分析**：

- **[#3214](https://redirect.github.com/a2ui-project/a2ui/issues/3214) 是今日最具战略意义的讨论**。OpenUI（thesysdev，MIT 协议生成式 UI 技术栈）团队主动提议将 A2UI 的 Express 格式与其 OpenUI Lang 统一为一套语法，并 @ 了核心维护者。这代表了**跨项目生态整合意向**，是本列表中唯一获得 4 个 👍 的提案——若达成，将直接扩大 A2UI 在生成式 UI 领域的语法标准话语权，建议维护者优先回应。
- **[#3061](https://redirect.github.com/a2ui-project/a2ui/issues/3061)** 指出 TypeScript/Python SDK 中废弃的 `CapabilitiesOptions.componentEnvelopeRef` 会在多版本能力协商中造成 schema 损坏，涉及 TS/Swift/Dart/Python 四端，处于 "needs-team-input" 状态，是跨语言一致性的核心议题。
- **[#3687](https://redirect.github.com/a2ui-project/a2ui/issues/3687)** 反映 main 分支 evals CI 自 10-28 起处于失败状态，持续吸引关注（见第 8 节积压提醒）。

---

## 5. Bug 与稳定性

按严重程度排列（标注修复 PR 情况）：

**🔴 安全合规（企业采用阻断项）**
- **[#4147](https://redirect.github.com/a2ui-project/a2ui/issues/4147)**：最新 SDK 使用 Zod 3.25.76，存在 CVE-2023-54404（Zod 4.6.6+ 修复）。报告者明确指出这是**组织级采用的合规硬性要求**。⚠️ 暂无针对性 fix PR；今日 Dependabot 批量更新 PR [#4185](https://redirect.github.com/a2ui-project/a2ui/pull/4185)（17 项 npm 依赖）可能部分覆盖，建议优先核查。

**🔴 数据完整性**
- **[#4132](https://redirect.github.com/a2ui-project/a2ui/issues/4132)**：Direct JSON 流式响应中，`updateDataModel` 若 `value` 先于 `path` 到达，会发出无 `path` 的消息，导致**整个数据模型被替换**——流式场景下的数据破坏级缺陷。⚠️ 无 fix PR。
- **[#4173](https://redirect.github.com/a2ui-project/a2ui/issues/4173)**（11-11 新报）：`STRICT_VALIDATION` 下 `@a2ui/web_core@0.15.0` 接受了 12 条 v0.9.1 规范测试标记为 `valid: false` 的 `server_to_client` 消息（函数调用 `returnType` 错误/参数无效）。⚠️ 相关校验强化 PR [#3558](https://redirect.github.com/a2ui-project/a2ui/pull/3558)（metadata 校验）仍在队列中。

**🟠 生态兼容性**
- **[#3942](https://redirect.github.com/a2ui-project/a2ui/issues/3942)**：pub.dev 上 `a2ui_flutter`、`a2ui_core`、`a2ui_agent`（genui 替代包）**无法同时安装**，Flutter 应用基本无法使用。状态：waiting-for-author-response。
- **[#3752](https://redirect.github.com/a2ui-project/a2ui/issues/3752)**：PR #3269 移除 `parse_response_to_parts` 后，**官网 Quickstart 主打的 Restaurant Finder Python 样例启动即失败**——直接影响新用户转化。
- **[#3942](https://redirect.github.com/a2ui-project/a2ui/issues/3942) / [#3809](https://redirect.github.com/a2ui-project/a2ui/issues/3809)**：`isDynamicDef` 因 `ZodObject` typeName 检查排除了直接作为 schema 的 `DataBinding`/`FunctionCall`。

**🟡 工具链（今日新报）**
- **[#4188](https://redirect.github.com/a2ui-project/a2ui/issues/4188)**（11-12 当天提交）：Dart `json_schema_builder` 遇到 `$id`/`$anchor`/`$dynamicAnchor` 命名属性时抛 `TypeError`，导致无法用 `catalog_definition.json` 校验目录。

**🟢 今日已解决**：[#2872](https://redirect.github.com/a2ui-project/a2ui/issues/2872)（surface 崩溃）、[#3423](https://redirect.github.com/a2ui-project/a2ui/issues/3423)（React v1.0 导入）、[#3259](https://redirect.github.com/a2ui-project/a2ui/issues/3259)（样例解析失败）均已关闭。

---

## 6. 功能请求与路线图信号

- **[#3214](https://redirect.github.com/a2ui-project/a2ui/issues/3214)｜Express/OpenUI Lang 语法统一**——4 👍，社区信号最强。已有 `feature: express format` 标签体系支撑，若维护者回应积极，可能成为 v1.x 的标志性演进方向。
- **[#4075](https://redirect.github.com/a2ui-project/a2ui/issues/4075)｜`ComponentCommon` 增加声明式 `visible` 属性**——针对角色分区、渐进披露等通用 UI 模式，属低争议、高普适性的规范级增强。
- **[#3257](https://redirect.github.com/a2ui-project/a2ui/issues/3257)｜SwiftUI 渲染器 Basic Catalog 样式定制**——对齐 Web（CSS 变量）与 Flutter（`ThemeData`）的既有能力，补齐三端一致性短板。
- **[#3081](https://redirect.github.com/a2ui-project/a2ui/issues/3081)｜渲染器透出 `warning`/`info` 级校验结果**（Angular binder 遗漏 `validationResults`）——协议 v1.0 校验体系闭环所需。
- **文档架构类**：[#4162](https://redirect.github.com/a2ui-project/a2ui/issues/4162)、[#4163](https://redirect.github.com/a2ui-project/a2ui/issues/4163)（客户端函数纯度契约、目录设计最佳实践）来自生产级 Flutter 采用者，反映 Dart 生态深度使用已形成，文档需求向架构层升级。

**判断**：`visible` 属性（#4075）与校验结果透出（#3081）实现路径清晰、依赖少，最可能率先进入下一版本；#3214 需要跨团队协商，周期较长但战略价值最高。

---

## 7. 用户反馈摘要

**核心痛点**：
1. **企业安全门槛**：Zod CVE（#4147）被明确表述为"任何组织采用的前提"，安全合规是 To B 落地的第一道闸门。
2. **v1.0 文档严重滞后**：多个文档问题集中在 v0.8/v0.9 内容未更新——数据绑定指南误标版本（[#3490](https://redirect.github.com/a2ui-project/a2ui/issues/3490)）、Agent 开发指南引用不存在的 schema 操作且止于未完成 TODO（[#3519](https://redirect.github.com/a2ui-project/a2ui/issues/3519)）。文档 PR [#4058](https://redirect.github.com/a2ui-project/a2ui/pull/4058) 证实 React 指南中的组件名与 Hook 名均与实际导出不符。
3. **入门链路断裂**：Quickstart 主打的 Python 样例开箱即坏（#3752）、Dart 三包无法共存（#3942）——新用户的"黄金 5 分钟"体验正在流失。
4. **流式与校验边界**：生产用户持续暴露流式顺序（#4132）、严格校验漏洞（#4173）等规范实现与规范的偏差。

**满意/积极信号**：
- 外部贡献者报告质量高、可复现性强（含规范测试用例对照）。
- OpenUI 团队主动寻求整合（#3214），社区渲染器（a2ui-bindjs，PR [#3313](https://redirect.github.com/a2ui-project/a2ui/pull/3313)）、Genkit 集成指南（PR [#2686](https://redirect.github.com/a2ui-project/a2ui/pull/2686)）等生态贡献持续流入。
- 生产级 Flutter 用户开始反哺架构级最佳实践讨论（#4161–#4163），说明核心能力经受住了真实场景考验。

---

## 8. 待处理积压

**⚠️ 建议维护者优先关注：**

| 项目 | 积压时长 | 风险说明 |
|---|---|---|
| PR [#2088](https://redirect.github.com/a2ui-project/a2ui/pull/2088)（三端共享渲染器回退机制） | **约 4 个月**（07-24 起） | 已有设计共识（#2013），阻塞终端用户看到调试占位符的问题 |
| Issue [#3687](https://redirect.github.com/a2ui-project/a2ui/issues/3687)（main evals 失败） | 15 天（10-28 起） | main 分支 CI 红灯持续，可能掩盖新回归 |
| Issue [#3752](https://redirect.github.com/a2ui-project/a2ui/issues/3752)（Quickstart 样例失败） | 14 天 | 直接损害项目第一印象，建议提升优先级 |
| Issue [#3942](https://redirect.github.com/a2ui-project/a2ui/issues/3942)（pub.dev 包冲突） | 9 天 | Dart 生态用户被完全阻断 |
| PR [#2554](https://redirect.github.com/a2ui-project/a2ui/pull/2554)（法律文档 diff 示例） | 约 2 个月 | 等待 #2620 设计决策，贡献者已明确请求维护者表态 |
| PR [#2686](https://redirect.github.com/a2ui-project/a2ui/pull/2686)（Genkit 官方集成文档） | 约 2 个月 | 涉及 Google 生态集成，滞留过久不利于合作关系 |
| Issue [#3931](https://redirect.github.com/a2ui-project/a2ui/issues/3931)（11-03 合规审计周报） | 9 天 | 长期处于 "needs review"，治理流程自身积压 |

**结构性提醒**：当前 48 个待合并 PR 中含 4 个 Dependabot 批量更新（[#4185](https://redirect.github.com/a2ui-project/a2ui/pull/4185)、[#3222](https://redirect.github.com/a2ui-project/a2ui/pull/3222)、[#3213](https://redirect.github.com/a2ui-project/a2ui/pull/3213)、[#3211](https://redirect.github.com/a2ui-project/a2ui/pull/3211)）。鉴于 Zod CVE（#4147）已在阻塞企业采用，**建议将依赖更新与 Zod 升级作为 PR 队列的最优先项处理**，以低成本快速解除安全合规障碍。

---

*数据来源：GitHub Issues/PRs（截至 2026-11-12）｜ 本报告基于过去 24 小时更新数据自动汇总分析*

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目日报 · 2026-11-12

**仓库**：[thesysdev/openui](https://github.com/thesysdev/openui) ｜ **统计周期**：过去 24 小时
**数据速记**：Issues 2 条（新开/活跃 1，关闭 1）｜ PRs 9 条（待合并 4，已关闭/合并 5）｜ Releases 0

---

## 一、今日速览

今日 OpenUI 呈现**中等偏活跃、以工程效能与文档基建为主**的节奏：24 小时内 9 条 PR 更新、2 条 Issue 更新，无新版本发布。最值得关注的信号是 Changesets 自动开启的版本打包 PR [#1615](https://redirect.github.com/thesysdev/openui/pull/1615) 于今日创建，叠加多条 feat/chore 变更落地，**预示一次 npm 发版已进入准备阶段**。活动结构上，9 条 PR 中有 6 条来自自动化机器人（devin-ai-integration、thesys-pr-creator），显示这个 AI Agent 领域项目自身的"AI 原生"研发流水线运转顺畅；核心维护者（zahlekhan、Aditya-thesys）与社区贡献者均有产出。Issue 侧响应迅速（[#1612](https://redirect.github.com/thesysdev/openui/issues/1612) 当日创建当日关闭），整体健康度良好。

## 二、版本发布

今日无新 Release。但 [#1615 "chore: version packages"](https://redirect.github.com/thesysdev/openui/pull/1615) 由 Changesets release action 自动开启——该 PR 合并后包将自动发布至 npm，**下一次发版进入倒计时**。

结合近日已落地/在途变更，预计新版本可能包含：

- `react-lang`：Renderer 错误日志合并为单条 `console.error` 并附可靠性文档链接（[#1613](https://redirect.github.com/thesysdev/openui/pull/1613)，已关闭）
- `react-ui` / `react-headless`：仪表盘重载时保留上次结果（[#1607](https://redirect.github.com/thesysdev/openui/pull/1607)，评审中，能否赶上本次发版取决于合并时机）
- CLI 模板与示例的 `@openuidev/*` 依赖刷新（[#1589](https://redirect.github.com/thesysdev/openui/pull/1589)）

**迁移提示**：暂无破坏性变更迹象；#1613 将默认日志级别从 `console.warn` 改为 `console.error`，依赖控制台日志做告警分级的外部工具链升级时需留意。

## 三、项目进展

过去 24 小时关闭/合并 5 条 PR（数据未严格区分"合并"与"仅关闭"，以下结合上下文推断）：

| PR | 内容 | 意义 |
|---|---|---|
| [#1600](https://redirect.github.com/thesysdev/openui/pull/1600) | docs: 削减 openui.com 带宽 | **今日收益最大的一项**：修复首页 LangShowcase GIF 轮播重复拉取 bug、治理重 GIF/视频与共享 JS。文档站 28 天消耗 958 GB（约占团队 Vercel 流量 85%），本 PR 直击成本根因 |
| [#1613](https://redirect.github.com/thesysdev/openui/pull/1613) | feat(react-lang): 错误日志整合 | Renderer 无 `onError` 时从"每错一条 warn"改为"单条 `console.error` 汇总 + 可靠性文档链接"，降低日志噪音、引导自助排障，属 DX 改进 |
| [#1610](https://redirect.github.com/thesysdev/openui/pull/1610) | docs: 收录 Bub | 将插件化 Agent 运行时 Bub 加入 adopters、社区项目与 Integrations 页；其 AG-UI 集成指南以 OpenUI 作为流式聊天前端 |
| [#1609](https://redirect.github.com/thesysdev/openui/pull/1609) | docs: 收录 The HN Times | 官方 Demo 页与页脚新增 The HN Times 展示项目 |
| [#517](https://redirect.github.com/thesysdev/openui/pull/517) | 关闭陈旧 PR | 挂起 **181 天**的"迁移到 Assembly 语言"玩笑式重构 PR 今日关闭，队列减负 |

**待合并 4 条**：

- [#1607](https://redirect.github.com/thesysdev/openui/pull/1607) feat：仪表盘各磁贴在重载期间显示上次结果而非默认零值，`ArtifactStorage` 新增两个可选方法并区分云端实现——**今日最核心的功能推进**
- [#1614](https://redirect.github.com/thesysdev/openui/pull/1614) docs：#1600 后续——关闭 `next/link` 全站预取、受控视频显示首帧
- [#1589](https://redirect.github.com/thesysdev/openui/pull/1589) chore：CLI 模板/overlay/示例依赖更新（11-07 开启，凭据无关的验证合同已全部通过）
- [#1615](https://redirect.github.com/thesysdev/openui/pull/1615) chore：版本打包

**小结**：今日无重大功能落地，主线为"文档站降本 + DX 打磨 + 生态展示 + 积压清理"，属典型的**发版前整理期**；#1607 若顺利合并，将成为下版本用户可感知的最大改进。

## 四、社区热点

- **[#1611 LineChart 将缺失值绘制为 0](https://redirect.github.com/thesysdev/openui/issues/1611)**（今日唯一带评论的 Issue，1 条评论）：用户 markdov 精确定位到 `LineChart.tsx:101` 与 `parts/LineSeries.tsx:45` 的 `Number(row[key]) || 0` 逻辑——`null`/`undefined`/`NaN` 被折算为真实零值并连线。诉求本质是**数据保真**：真实业务数据普遍存在缺失观测，折线应留空而非"跳水归零"，否则会系统性误导读数。该反馈质量高（直接给出代码行号），也说明 LineChart 已被用于含缺失数据的真实分析场景。
- **[#1600 文档站带宽治理](https://redirect.github.com/thesysdev/openui/pull/1600)**：958 GB/28 天的流量数据与根因分析是今日工程侧的讨论焦点，侧面印证文档站访问量可观。
- **Bub 集成（[#1610](https://redirect.github.com/thesysdev/openui/pull/1610)）**：第三方 Agent 运行时以 OpenUI 作为 AG-UI 协议下的聊天前端，"OpenUI 嵌入 Agent 生态"的下游用法在增长。

## 五、Bug 与稳定性

| 严重度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 🟠 中 | [#1611](https://redirect.github.com/thesysdev/openui/issues/1611)：`@openuidev/react-ui` LineChart 将 null/undefined/NaN 绘为 0，折线穿过缺失点 | OPEN（今日新建，1 评论） | **暂无**（#1607 虽涉及 react-ui，但面向仪表盘加载体验，与本 bug 无关） |
| 🟡 待确认 | [#1612](https://redirect.github.com/thesysdev/openui/issues/1612)：lang-core 丢弃含"必填可空数值字段"的数组元素（潜在数据丢失） | **当日创建当日关闭**，0 评论，摘要缺失 | 关闭原因未知（已修复 / 判为重复 / 无法复现均有可能） |

- **#1611 属"静默数据失真"类缺陷**：不崩溃、无报错，但在时序/指标看板中会持续误导结论，建议优先排期；原文提示 `ChartData` 类型定义疑似也未覆盖可空值，修复时需同步类型层。
- **#1612** 标题指向 lang-core 数据丢失，本应严重度更高，但当日即关闭且无评论记录。**建议维护者补充关闭说明**，便于遇到同类问题的用户检索。
- 今日无崩溃、回归或安全类报告。

## 六、功能请求与路线图信号

- **仪表盘数据体验**：[#1607](https://redirect.github.com/thesysdev/openui/pull/1607)（维护者 Aditya-thesys 提交）让每个磁贴在重载时保留上次结果、新数据到达即时切换，替代"闪回全零默认值"；已扩展 `ArtifactStorage` 接口并区分云端/本地实现——**大概率进入下一版本**。
- **发版节奏**：[#1615](https://redirect.github.com/thesysdev/openui/pull/1615) 今日开启，说明近期变更（至少含 #1613 的 react-lang 改动）已进入发版管线。
- **文档站性能路线**：#1600 → [#1614](https://redirect.github.com/thesysdev/openui/pull/1614) 形成连续两轮优化（媒体体积/共享 JS → 预取策略），显示团队对站点成本与性能有持续治理计划。
- **生态方向**：Bub（AG-UI 集成）、The HN Times 相继进入官方展示页，integrations/adopters 板块或成常态化更新方向，强化"AI Agent 前端基础设施"的定位。
- 今日 Issue 中无显式新功能请求；#1611 隐含对**缺失值可视化策略（留空/断线）**的规格需求，可作为图表组件的路线图输入。

## 七、用户反馈摘要

- **数据可视化保真诉求（[#1611](https://redirect.github.com/thesysdev/openui/issues/1611)）**：用户在含缺失观测的数据集上期望折线留空而非归零。痛点在于"图看起来正常但语义错误"——这类静默错误最难被发现；报告者直接给出代码行号，属高质量贡献型反馈。
- **Schema 边界场景（[#1612](https://redirect.github.com/thesysdev/openui/issues/1612)）**：有用户在 lang-core 中使用"必填但可空的数值字段"数组结构时遭遇元素丢弃，说明真实接入方的数据模型比默认假设更复杂，nullable 语义是高频雷区。
- **文档/演示重度消费（#1600 佐证）**：28 天近 1 TB 的文档站流量表明 showcase、demo、博客是被重度消费的入口；首屏体积、GIF 体积、预取策略等站点体验问题直接影响获客效率。
- **正反馈信号**：Bub 与 The HN Times 主动集成并入选官方页面，属下游认可；#1613 将报错与可靠性文档打通，反映团队重视"用户报错后能否自助解决"。
- *注：今日多数 PR 评论数据缺失，以上提炼主要来自 Issue 正文与 PR 描述，样本有限。*

## 八、待处理积压

- 🔔 **[#1607](https://redirect.github.com/thesysdev/openui/pull/1607)**（11-10 开启，2 天）：核心功能 PR，横跨 react-ui/react-headless 双包并扩展存储接口，若希望赶上 #1615 触发的发版窗口，建议尽快完成评审。
- 🔔 **[#1589](https://redirect.github.com/thesysdev/openui/pull/1589)**（11-07 开启，5 天）：机器人提交的依赖刷新 PR，验证合同已全部通过，属低风险快车道项，可加速合并。
- [#1614](https://redirect.github.com/thesysdev/openui/pull/1614) / [#1615](https://redirect.github.com/thesysdev/openui/pull/1615)（今日开启）：正常评审周期内，暂不构成积压。
- 今日窗口内**无长期未响应的 Issue**；唯一陈旧积压 #517（挂起 181 天）已于今日清理完毕。
- **建议**：为 #1611 分派处理人并排期；为 #1612 的当日关闭补充结论说明，避免社区信息断层。

---

**健康度小结**：Issue 当日闭环、PR 当日合入、Changesets 发版管线就绪、自动化贡献占比 6/9——响应速度与工程自动化两项指标表现突出。短期需关注 #1611 这类静默数据正确性缺陷的排期，以及 #1607 / #1589 的评审推进，以把握即将到来的发版窗口。

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render 项目日报

> **仓库**：[vercel-labs/json-render](https://github.com/vercel-labs/json-render) ｜ **日期**：2026-11-12
> **核心数据**：Issues 更新 0 条 ｜ PR 更新 3 条（待合并 3 / 已合并 0）｜ 新版本发布 0 个

---

## 一、今日速览

今日项目呈"贡献者驱动、静默推进"态势：无新开或关闭的 Issue、无版本发布，活动全部集中在 PR 侧——3 个 PR 在过去 24 小时内有更新，且均处于 OPEN 待合并状态，合并吞吐为 0。更新内容横跨三条主线：生态扩展（Swift/SwiftUI 渲染器 [#470](https://redirect.github.com/vercel-labs/json-render/pull/470)）、核心语义修复（条件右侧自定义指令解析 [#458](https://redirect.github.com/vercel-labs/json-render/pull/458)）、工具链现代化（TypeScript 7 升级 [#455](https://redirect.github.com/vercel-labs/json-render/pull/455)）。社区互动信号偏弱：所有条目评论数未记录、点赞均为 0，说明当前推进以核心贡献者为主，处于"代码先行、讨论较少"的阶段。**活跃度评估：中低强度、高信息密度**——变更数量少，但单个 PR（尤其 #470）体量与战略意义较大，项目健康度的关键变量是维护者的 review 带宽。

---

## 二、版本发布

今日无新版本发布，仓库最近亦无 Release 记录。值得注意的是，当前待合并的 3 个 PR（#455 / #458 / #470）内容足以构成下一个版本的主体，版本发布节奏可能正在等待这批 PR 的合并落地。

---

## 三、项目进展

今日**无合并/关闭的 PR**，实质进展体现为 review 队列中存量 PR 的持续打磨：

| PR | 主题 | 作者 | 状态 | 创建 → 最近更新 |
|---|---|---|---|---|
| [#470](https://redirect.github.com/vercel-labs/json-render/pull/470) | Swift 包与 SwiftUI 渲染器 | ctate | 🟢 OPEN | 11-11 → 11-12 |
| [#458](https://redirect.github.com/vercel-labs/json-render/pull/458) | 条件右侧自定义指令解析 | harold18m | 🟢 OPEN | 11-07 → 11-12 |
| [#455](https://redirect.github.com/vercel-labs/json-render/pull/455) | 升级 TypeScript 7 | ctate | 🟢 OPEN | 11-06 → 11-11 |

**#470 —— 生态边界扩展（今日分量最重）**：新增 `swift/JSONRender`，包含平台无关的 `JSONRenderCore`（spec 解码、校验、表达式、actions、state、JSONL 流式、渲染树）、`JSONRenderSwiftUI` 渲染器，以及原生 SwiftUI 组件目录（卡片、指标、徽章、警示、列表、进度、开关、Swift Charts）。若合并，json-render 将从 Web 端延伸至 Apple 原生端，"一份 JSON 规范、多端渲染"的定位进一步坐实；JSONL 流式支持亦暗示对 AI 生成 UI / 流式渲染场景的前瞻布局。

**#458 —— 核心语义修复（#367 的 Part 1）**：修复比较操作符（`eq`/`neq`/`gt`/`gte`/`lt`/`lte`）右侧操作数此前仅解析 `{ "$state" }` 的问题——自定义指令曾被当作原始对象参与比较，导致条件判断失真。现在 `resolveComparisonValue` 会像 `resolvePropValue` 处理 props 那样，从指令注册表中查找并解析操作数。这是指令系统可组合性的关键补齐。

**#455 —— 工具链现代化**：将 packages 与文档站升级至 TypeScript 7；类型产出从 tsup 的 dts 改为 tsc 声明；文档站与 UI 包的 ESLint 替换为 oxlint；Svelte 包与示例因工具链依赖其 API 暂留 TS 5。预期收益是构建与 lint 提速，代价是仓库内短期存在双 TS 版本并行。

**进展评估**：今日向前迈进的幅度有限（0 合并），但三个 PR 均有实质动作（#470、#458 今日更新，#455 昨日更新后待审），pipeline 存量质量高。其中 #458 改动聚焦、边界清晰，最接近可合并状态。

---

## 四、社区热点

需要说明：今日无 Issue、无评论数据（均显示 undefined）、无 👍 反应，**无法按互动热度排序**。以下按体量与战略权重列出最值得关注的项目：

1. **[#470 Swift 包与 SwiftUI 渲染器](https://redirect.github.com/vercel-labs/json-render/pull/470)**（昨日创建、今日更新）
   背后诉求：将 JSON 驱动的 server-driven UI 扩展到 iOS/macOS 原生应用。组件目录的选择（metrics、charts、alerts、badges、progress、switches）指向仪表盘/卡片式产品界面这一典型场景；JSONL 流式支持则指向"边生成边渲染"的 AI 驱动 UI 管线。

2. **[#367 指令系统增强（#458 的父 Issue）](https://redirect.github.com/vercel-labs/json-render/issues/367)**
   背后诉求：自定义指令需要与条件系统深度集成——现有机制在"基于指令值控制显隐/分支"等复杂交互上存在表达力缺口，#458 是该方向的第一步。

3. **[#455 TypeScript 7 升级](https://redirect.github.com/vercel-labs/json-render/pull/455)**
   诉求偏维护侧：跟进 TS7 原生编译器与 oxlint 等性能导向工具，属于基础设施投资。

---

## 五、Bug 与稳定性

今日**无新报 Bug**（Issue 数为 0），用户侧稳定性信号缺失。但有以下两项与稳定性直接相关：

1. 🟡 **【中】条件比较中自定义指令被当作原始对象比较**（隐性正确性缺陷）
   - 影响：任何在 `eq`/`neq`/`gt`/`gte`/`lt`/`lte` 右侧直接使用自定义指令的规范，求值结果均不可靠（如 visibility 判断失效）。
   - 修复 PR：[#458](https://redirect.github.com/vercel-labs/json-render/pull/458)（OPEN，待合并），**已有 fix**。
   - 合并前的临时规避：以 `$state` 引用替代指令直用。

2. 🟢 **【低/风险类】#455 工具链迁移的潜在回归面**（[链接](https://redirect.github.com/vercel-labs/json-render/pull/455)）
   - 类型产出方式由 tsup dts 切换为 tsc 声明，可能改变发布类型的形态（导出结构、路径映射等）；TS7 与 TS5 并行也增加了 CI 矩阵复杂度。目前无回归报告，合并后需重点验证下游包的类型兼容性。

---

## 六、功能请求与路线图信号

- **多端渲染路线**：[#470](https://redirect.github.com/vercel-labs/json-render/pull/470) 若合并，"官方 Swift 支持"大概率成为下一版本的核心卖点；后续可关注 Kotlin/Compose、Flutter 等方向的跟进信号，判断这是单点扩展还是系统性多端战略。
- **指令系统增强路线**：#458 自述为 [#367](https://redirect.github.com/vercel-labs/json-render/issues/367) 的 **Part 1**，意味着后续还有 Part 2+，方向是让自定义指令在所有求值路径（props 已支持、conditions 本次补齐）中获得一致解析。该改动聚焦、风险可控，**纳入下一版本的概率最高**。
- **工具链路线**：TS7 + oxlint 通常不直接面向终端用户，但可能引入破坏性的类型/导出变化，届时需在 changelog 中明示迁移事项。

**综合判断**：#458 最可能率先进入下一版本；#455 次之（需验证类型产物）；#470 体量大、review 周期长，更适合作为独立的大版本或里程碑发布。

---

## 七、用户反馈摘要

今日数据中**没有新增 Issue 或 Issue 评论，无法提炼直接的用户声音**（数据层面保持诚实）。可从 PR 内容间接推断两类潜在诉求：

- **组合表达力痛点**：#458 修复的点暗示有贡献者在"自定义指令 + 比较条件"的组合场景受挫（例如用指令值控制元素显隐），说明指令机制的用户心智模型与实际求值行为之间存在落差。
- **典型使用场景画像**：#470 的组件选型（指标卡、图表、警示、进度）反映用户主要将 json-render 用于**数据展示型卡片界面**；JSONL 流式支持则印证"AI 生成 UI、渐进渲染"是真实存在的使用场景。

> 提示：如需获取一手用户痛点，建议持续跟踪 [#367](https://redirect.github.com/vercel-labs/json-render/issues/367) 的讨论串及后续 Issue 涌入情况。

---

## 八、待处理积压

| 条目 | 积压时长 | 状态 | 建议动作 |
|---|---|---|---|
| [#455 TS7 升级](https://redirect.github.com/vercel-labs/json-render/pull/455) | 开仓 6 天（11-06 创建），无评论记录 | 待审 | 维护者 review 缺位，阻塞工具链统一，建议优先排期 |
| [#458 条件指令解析](https://redirect.github.com/vercel-labs/json-render/pull/458) | 开仓 5 天（11-07 创建），无评论记录 | 待审 | 合并后方可推进 #367 的 Part 2，建议优先 review |
| [#470 Swift 渲染器](https://redirect.github.com/vercel-labs/json-render/pull/470) | 开仓 1 天，diff 横跨 core / 渲染器 / 组件目录三层 | 待审 | 建议制定分块 review 计划或考虑拆分 PR，避免大 PR 长期滞留 |
| [#367 父 Issue](https://redirect.github.com/vercel-labs/json-render/issues/367) | — | 开放中 | 需跟踪剩余 Part 的拆解与排期 |

**健康度小结**：当前"3 个 PR 待审、0 评论、0 合并"的形态表明瓶颈在**维护者 review 带宽**而非贡献供给——供给侧（含生态级贡献 #470）依然活跃。建议将未来 1–2 周的合并节奏与 #367 的推进速度作为项目健康度的先行指标持续观察。

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目日报 · 2026-11-12

---

## 一、今日速览

CopilotKit 今日呈典型的"开发驱动型"高强度活跃日：过去 24 小时 PR 更新达 40 条（24 条待合并、16 条已合并/关闭），并发布 **v1.87.0**；Issue 侧仅新增 3 条、关闭 0 条。工作主线清晰集中在三条：**A2UI 1.0/2.0 生成式 UI 协议统一**（#8353 已随版本落地，多个破坏性 PR 排队中）、**基于 Fumadocs 的文档体系重建**（#8327 收束此前 5 个分散 PR）、**集成生态扩张**（OpenAI Agents SDK Python 版全量上线，Cloudflare Agents、Omnara、boxd 等候场）。社区侧出现第三方平台（boxd）主动贡献配方的正面信号，但 24 条待审 PR 的评审队列值得持续关注。**整体健康度：良好。**

---

## 二、版本发布

**[v1.87.0](https://github.com/CopilotKit/CopilotKit/releases/tag/v1.87.0)**（发布 PR：[#8355](https://redirect.github.com/CopilotKit/CopilotKit/pull/8355)，由 release workflow 自动创建）

- **核心更新**：渲染器支持 A2UI 1.0 原生 operations 与既有 v0.9 协议并存（落地自 [#8353](https://redirect.github.com/CopilotKit/CopilotKit/pull/8353)）。此前 ADK 等输出原生 1.0 surface 的 agent 在 `A2UIMessageRenderer` 中 catalog 查找失败、无法渲染，本版修复该问题。
- **实现方式**：向 SDK 既有的多版本处理器注册原生 React basic catalog，渲染器按 surface 记录协议版本。
- **破坏性变更**：无。v0.9 默认 catalog 与行为完整保留，存量集成无需任何动作。
- **迁移注意事项**：使用自定义 catalog 的用户可显式注册 1.0 catalog；另外，本版本是通往 [#8348](https://redirect.github.com/CopilotKit/CopilotKit/pull/8348)（移除 v0.9 客户端、generative UI 成为唯一客户端路径）的过渡步骤，**v0.9 深度用户建议提前评估迁移计划**。

---

## 三、项目进展

今日 16 条 PR 完成合并/关闭，按主题归类：

**1. 协议与版本发布**
- [#8353](https://redirect.github.com/CopilotKit/CopilotKit/pull/8353) 已合并 — A2UI 1.0 原生渲染支持，随 v1.87.0 发布
- [#8355](https://redirect.github.com/CopilotKit/CopilotKit/pull/8355) 已合并 — 自动化发布流程运转正常

**2. 文档体系重建（重要基础设施变更）**
- [#8327](https://redirect.github.com/CopilotKit/CopilotKit/pull/8327) 已关闭 — 以 Fumadocs 重建替换 shell-docs，一次性收束了此前漂移在两个分支上的 5 个 PR（#8214、#8320、#8321、#8322、#8325），旧分支保留为归档。文档栈的碎片化问题就此清理
- [#8339](https://redirect.github.com/CopilotKit/CopilotKit/pull/8339) 已合并 — OpenBot 迁移至独立域名 open.bot 后的全站链接更新

**3. 集成生态落地**
- [#8347](https://redirect.github.com/CopilotKit/CopilotKit/pull/8347) 已合并 — OpenAI Agents SDK (Python) starter，为 `copilotkit init --framework openai-agents-py` CLI 脚手架提供落点
- [#8245](https://redirect.github.com/CopilotKit/CopilotKit/pull/8245) 已合并 — 对应文档页。配合 [#8360](https://redirect.github.com/CopilotKit/CopilotKit/pull/8360) 的描述可确认该集成**已在 prod 上线且测试全绿**，一个主要集成完成从代码到文档到部署的全链路闭环

**4. 多运行时对齐（未完成，方向明确）**
- [#8350](https://redirect.github.com/CopilotKit/CopilotKit/pull/8350) 已关闭（Draft 状态）— Python 部分已完成，Go/Ruby/.NET 移植未竟，预计拆分后重新提交

**进展评估**：单日完成一次版本发布 + 一个主要集成全量上线 + 文档基础设施收束 + 大量修复 PR 提交，推进节奏在同类开源项目中属于高频。#8348/#8350/#8341 等 A2UI 2.0 系列 PR 表明下一个大版本的主题已经成型。

---

## 四、社区热点

> 注：PR 评论数据缺失，热点分析基于 Issue 侧数据。

**1. [Issue #8356](https://redirect.github.com/CopilotKit/CopilotKit/issues/8356)（2 条评论，今日持续活跃）— gpt-6 模型 reasoningEffort 被静默忽略**
诉求最尖锐的一条。用户报告 `BuiltInAgent` 搭配 OpenAI `gpt-6-*` 模型时，`reasoningEffort` 参数静默失效——请求发往 Responses API 时根本没有 `reasoning` 字段，且**无任何警告或报错**。根因定位到 lockfile 固定的 `@ai-sdk/openai@3.0.36` 不将 gpt-6 视为推理模型。用户附带了完整根因分析，质量很高。背后诉求：紧跟最新 OpenAI 推理模型 + 拒绝静默失败。

**2. [Issue #8306](https://redirect.github.com/CopilotKit/CopilotKit/issues/8306)（2 条评论）— Teams 卡片图片尺寸硬编码为 Auto**
`@copilotkit/channels` 的 `ImageProps` 仅支持 `{ url, alt? }`，Teams 渲染器硬编码 `size: Auto`。反映的是**企业级 IM 渠道部署**用户对渲染精细度的生产化诉求。

**3. [Issue #8359](https://redirect.github.com/CopilotKit/CopilotKit/issues/8359)（1 条评论）— 用 actions.lock 锁定 workflow 传递依赖**
用户认可项目已按 commit SHA pin 所有 action，但指出 SHA pin 不覆盖 action 内部再调用的依赖（如 `subosito/flutter-action`），建议启用 GitHub 的 actions.lock。供应链安全意识的进阶诉求。

**4. [PR #8362](https://redirect.github.com/CopilotKit/CopilotKit/pull/8362) — boxd 官方人员贡献 Cookbook 配方**
贡献者自我介绍为 boxd 团队成员，提交了在 boxd 沙箱中运行 agent 代码的配方。第三方平台主动靠拢，是生态吸引力的正面信号。

---

## 五、Bug 与稳定性

按严重程度排列（今日新增 bug Issue 仅 #8356，其余为针对已知/新发现问题的修复 PR）：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#8356](https://redirect.github.com/CopilotKit/CopilotKit/issues/8356) gpt-6 的 reasoningEffort 静默失效（core 依赖层缺陷，静默降级无告警） | **尚无关联 fix PR** |
| 🟠 中高 | [#8361](https://redirect.github.com/CopilotKit/CopilotKit/pull/8361) Mastra auth demo 将登录 bearer token 转发给模型（**安全问题**，prod 红 18 天，PNI-698） | 修复 PR 已开（今日提交） |
| 🟠 中 | [#8346](https://redirect.github.com/CopilotKit/CopilotKit/pull/8346) 未安装 maplibre-gl 的应用构建失败，`next dev` 返回 500（构建阻断级） | 修复 PR 已开（今日提交） |
| 🟡 中低 | [#8352](https://redirect.github.com/CopilotKit/CopilotKit/pull/8352) CORS 拒绝/省略 Allow-Origin 时不发送 `Vary: Origin`（缓存正确性风险） | 修复 PR 已开（今日提交） |
| 🟡 低 | [#8360](https://redirect.github.com/CopilotKit/CopilotKit/pull/8360) 集成上线后 showcase/docs 双 404（发布流程 ops 问题） | 修复 PR 已开（今日提交） |

**稳定性小结**：除 #8356 外，今日所有已知问题均有对应修复 PR 在途，响应速度健康。#8356 涉及上游依赖版本策略，需维护者决策是升级 `@ai-sdk/openai` 还是打补丁绕过。

---

## 六、功能请求与路线图信号

**今日新功能请求（2 条）：**
- [#8359](https://redirect.github.com/CopilotKit/CopilotKit/issues/8359) actions.lock — 与项目既有 SHA pin 实践一脉相承，纯 workflow 层改动、风险低，**采纳概率高**
- [#8306](https://redirect.github.com/CopilotKit/CopilotKit/issues/8306) `<Image>` 支持 size prop — 范围小而明确，**channels 下个补丁版本的现实候选**

**从 PR 流向推断的路线图信号：**

1. **A2UI 2.0 统一冲刺（最强烈信号）**：[#8348](https://redirect.github.com/CopilotKit/CopilotKit/pull/8348)（v0.9 客户端整体移除、运行时双向协议转换）、[#8350](https://redirect.github.com/CopilotKit/CopilotKit/pull/8350)（Python/Go/Ruby/.NET 四运行时对齐）、[#8341](https://redirect.github.com/CopilotKit/CopilotKit/pull/8341)（7 个 A2UI starter 升级至 2.0 generative UI）、[#8354](https://redirect.github.com/CopilotKit/CopilotKit/pull/8354)（Python 后端 A2UI 注入文档）形成完整攻坚队列——**下个大版本的主题已明确**，且将是破坏性变更（`a2ui` prop、`@copilotkit/angular/a2ui`、`@copilotkit/a2ui-renderer` 等将移除）
2. **运行时能力扩展**：[#8357](https://redirect.github.com/CopilotKit/CopilotKit/pull/8357) 在 QuickJS 沙箱中执行 Intelligence 学习技能附带的脚本（仅 Node 运行时），延伸 agent 自主能力边界
3. **集成目录持续扩容**：[#8351](https://redirect.github.com/CopilotKit/CopilotKit/pull/8351) Cloudflare Agents、[#8286](https://redirect.github.com/CopilotKit/CopilotKit/pull/8286) Omnara、[#8362](https://redirect.github.com/CopilotKit/CopilotKit/pull/8362) boxd 配方——Showcase 正在成为框架生态的集中展示面

---

## 七、用户反馈摘要

**痛点：**
- **静默失败不可接受**（#8356）：用户原话强调 "There is no warning or error"——参数被丢弃时宁可要显式报错，静默降级的调试成本最高
- **企业渠道的细节决定采用**（#8306）：Teams 部署场景中卡片观感直接影响内部推广，硬编码 `size: Auto` 被视为生产化阻碍
- **文档/站点一致性是反复出现的摩擦点**：[#7607](https://redirect.github.com/CopilotKit/CopilotKit/pull/7607)（WhatsApp demo 死链）、[#8360](https://redirect.github.com/CopilotKit/CopilotKit/pull/8360)（集成上线后双 404）、[#8358](https://redirect.github.com/CopilotKit/CopilotKit/pull/8358)（playground 指向 Railway 临时域名）——新用户接入路径上的"最后一公里"问题值得系统性治理

**满意/正面信号：**
- 用户对项目的**供应链安全姿态给予认可并主动加码**（#8359），说明安全实践已被社区注意到
- Issue 报告质量高：#8356 用户直接定位到 lockfile 中的依赖版本，降低了维护者的排查成本
- 第三方平台（boxd）主动贡献集成配方，生态引力初显

---

## 八、待处理积压

| 项目 | 等待时长 | 建议 |
|---|---|---|
| [PR #7607](https://redirect.github.com/CopilotKit/CopilotKit/pull/7607) WhatsApp 文档死链修复 | **约 6 周**（2026-10-03 开启） | 低风险纯文档修复，建议维护者尽快合并或给出反馈 |
| [Issue #8356](https://redirect.github.com/CopilotKit/CopilotKit/issues/8356) gpt-6 reasoningEffort | 1 天，无 fix PR | 核心依赖层缺陷，建议尽快 triage 并明确依赖升级策略 |
| **24 条待审 PR 队列** | 含 #8348、#8350（需重提）、#8327 后续等多个大型/破坏性 PR | 评审带宽是当前最大瓶颈风险 |
| [Issue #8306](https://redirect.github.com/CopilotKit/CopilotKit/issues/8306)、[#8359](https://redirect.github.com/CopilotKit/CopilotKit/issues/8359) | 1–3 天，已有讨论 | 暂不构成积压，但建议给出明确 triage 结论 |

**健康度小结**：单日 PR 解决率 40%（16/40 触达）、发布节奏稳定、新 Issue 平均年龄不足 3 天、零陈年 Issue 积压。主要风险点有二：评审队列长度（24 条待合并），以及 #8356 这类位于依赖层的核心缺陷尚无修复路径——前者关乎节奏，后者关乎最新模型用户的核心体验。

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*