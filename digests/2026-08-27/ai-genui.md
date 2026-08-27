# 生成式 UI 生态日报 2026-08-27

> Issues: 12 | PRs: 101 | 覆盖项目: 4 个 | 生成时间: 2026-08-27 08:15 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告 (2026-08-27)

## 1. 生态全景
当前生成式 UI 生态正从“概念验证”向“生产级基建”迈进，跨框架渲染与协议标准化成为核心攻坚方向。各项目在强化多端适配的同时，正加速补齐企业级特性（如可观测性、成本管控与安全边界），标志着生态重心已从单纯的 UI 生成转向工程化闭环与全链路稳定性建设。

## 2. 各项目活跃度对比

| 项目 | Issues 动态 | PR 动态 (更新/合并/待合并) | Release 情况 | 交付节奏特征 |
| :--- | :--- | :--- | :--- | :--- |
| **a2ui** | 6 | 37 / 4 / 33 | 无 | PR积压严重，处于v1.0前夜的重构攻坚期 |
| **OpenUI** | 1 (活跃) | 19 / 14 / 5 | 无 | 合并率极高(73.7%)，工程解耦与功能闭环提速 |
| **json-render**| 0 | 0 / 0 / 0 | 无 | 静默状态，无可见动态 |
| **CopilotKit**| 5 (活跃) | 45 / 22 / 23 | Python SDK v0.1.96 | 交付节奏快(近50%合并率)，多框架与Infra并行 |

## 3. 共同关注的功能方向

*   **跨框架渲染与 SDK 对齐**：**a2ui** 与 **CopilotKit** 均在发力多框架适配。a2ui 推进 Universal Web Components（React/Angular适配器）并补全 Swift SDK；CopilotKit 社区则强烈呼吁对齐 Angular SDK 与 React 版本的 DX 体验（引入响应式 Resource 与泛型）。
*   **底层协议与规范的标准化**：**a2ui** 在 v1.0 协议中引入 Protobuf 规范以强化跨语言序列化；**CopilotKit** 正将 MCP Apps 迁移至官方 `@modelcontextprotocol/ext-apps` 标准库。两者均在通过协议收敛提升互操作性。
*   **CLI 工程化与部署闭环**：**OpenUI** 与 **CopilotKit** 均致力于降低开发者上手与交付门槛。OpenUI 重构 CLI 模板并开发 `openui deploy`；CopilotKit 则将各类 Starters 迁移至稳定 API 并替换退役云服务配置。

## 4. 差异化定位分析

*   **a2ui —— 底层协议与跨端规范制定者**：定位偏向基础设施，聚焦于生成式 UI 的底层传输协议（Protobuf）、多语言 SDK（TS/Python/Swift）及跨框架组件移植规范，具有极强的“协议级”野心。
*   **OpenUI —— 垂直工作流与效能工具**：定位偏向开发者体验与产品闭环，专注于通过 CLI 解耦、一键部署及可观测性建设，打通从 UI 生成到云端部署的数据与工程链路，更贴近前端工程师的日常工作流。
*   **CopilotKit —— 企业级 Agent 交互框架**：定位偏向应用层与全栈集成，侧重于 Agent 与前端的双向交互（MCP桥接、HITL）、多渠道接入以及企业级成本管控，直击生产环境下的商业与技术痛点。
*   **json-render —— 轻量级/实验性探索**：当前处于静默状态，可能仅为概念验证或已停止维护，与前三者不在同一竞争量级。

## 5. 社区热度与成熟度

*   **CopilotKit 社区最活跃且最接近商业化**：PR 与 Issue 数量均居首，讨论已深入至企业级成本路由、多模型分级等生产级命题，且已有稳定的版本发布节奏，生态成熟度较高。
*   **OpenUI 处于高效迭代的开源蜜月期**：核心开发者与 AI 协同推进，PR 合并极为果断，代码库正在经历健康的大瘦身与解耦，但社区广度（Issue 互动）尚显不足。
*   **a2ui 处于架构重构的阵痛期**：社区对规范定调（如子节点 Key 缺陷）讨论深入，但巨无霸 PR 审查积压严重（33条待合并），开源协作流转存在瓶颈，急需核心团队介入定夺以防分叉风险。

## 6. 值得关注的趋势信号

1.  **“可预测渲染”成为刚需**：a2ui 的子节点 Key 缺陷与 CopilotKit 的 Markdown 换行丢失，均暴露出动态流式渲染下状态调和的痛点。**启示**：开发者在选型或自研时，必须关注底层协议对 List Diff 和流式分块的支持，仅靠前端补丁无法根治。
2.  **多模型路由与成本管控迫在眉睫**：CopilotKit 社区呼吁按用户分级的模型端点。**启示**：生成式 UI 的 Infra 正从“能用”转向“省着用”，引入网关层的模型路由与 Token 限流设计将是后续架构标配。
3.  **部署即集成**：OpenUI 的 deploy 命令和 CopilotKit 的 Starter 迁移表明，生成式 UI 不再是孤立组件，而是全栈应用的起点。**启示**：工具链提供方需提供从脚手架到云托管的一键闭环，降低全链路接入摩擦力。
4.  **安全边界不可忽视**：a2ui 暴露的文件越权写入 Bug 为行业敲响警钟。**启示**：Agent 具备了执行动作的能力，生成式 UI 框架必须在沙箱隔离、文件系统权限和网络请求侧增加强制校验，避免“越权生成”引发安全事故。

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目动态日报 (2026-08-27)

## 1. 今日速览
2026-08-27，a2ui 项目保持高度活跃的开发态势。过去24小时内，PR 更新达 37 条（其中 33 条待合并），显示出开发团队正在密集推进多项核心功能；Issues 更新 6 条，整体社区交互平稳。项目当前重心明确聚焦于跨框架渲染架构的统一、Swift SDK 的补全，以及 v1.0 协议分支的集成准备。今日无新版本发布。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 4 个 PR 被合并或关闭，项目在 v1.0 筹备和工程化基础设施上取得实质进展：
*   **v1.0 分支整合**：[#2410](https://redirect.github.com/a2ui-project/a2ui/pull/2410) 完成了 `main` 分支向 `v1_0` 协议特性分支的合并，解决了跨 TypeScript/Web Core、Python Agent SDK、Swift 和 CI 工作流的合并冲突，为 v1.0 的正式发布铺平道路。
*   **社区治理优化**：[#2394](https://redirect.github.com/a2ui-project/a2ui/pull/2394) 更新了分流（triage）文档，明确了优先级定义和自动化机器人规则，提升了开源协作的流转效率。
*   **依赖更新**：[#2154](https://redirect.github.com/a2ui-project/a2ui/pull/2154) 完成了跨目录的 npm_and_yarn 依赖批量升级，保障了 Web 端生态的安全性。

*注：尽管合并数不多，但今日有大量关键 PR 活跃更新（如 Protobuf 规范支持 [#2409](https://redirect.github.com/a2ui-project/a2ui/pull/2409)、React Node 层渲染 [#2393](https://redirect.github.com/a2ui-project/a2ui/pull/2393)），预示着下一波大体积功能合入即将到来。*

## 4. 社区热点
今日社区讨论主要围绕底层规范与跨框架架构展开：
*   **跨框架组件架构落地**：[#1270](https://redirect.github.com/a2ui-project/a2ui/issues/1270)（支持“可移植 A2UI Web 组件”安装到任意框架适配器）于今日关闭。该 Issue 共有 4 条评论，其诉求直接催生了后续一系列 Universal Web Components 的 PR（如 #2283, #2190），表明社区对“一次编写，多框架运行”的强烈渴望，且该愿景已进入实质性代码实现阶段。
*   **规范层核心缺陷**：[#1745](https://redirect.github.com/a2ui-project/a2ui/issues/1745)（规范中子节点缺少 key，导致无法正确移动子节点）保持活跃，有 4 条评论。该问题触及 A2UI 集合作用域的底层设计，直接影响动态列表渲染的正确性，亟待规范层面的定调。

## 5. Bug 与稳定性
今日新增及活跃的 Bug 集中在文件系统安全与 UI 渲染稳定性上：
*   **[高风险] 文件越权写入**：[#2370](https://redirect.github.com/a2ui-project/a2ui/issues/2370) 指出 `archive_run` 在无法检测到仓库根目录时，会通过猜测父目录写入文件，可能导致数据写出到项目预期范围之外。目前已有初步处理标记，尚无对应 Fix PR。
*   **[常规] UI 滚动异常**：[#2404](https://redirect.github.com/a2ui-project/a2ui/issues/2404) 报告了内部 A2UI 滚动问题，发生在 Cloud Run 注册的 Agent 交互场景中，尚处待分流状态，无修复 PR。

## 6. 功能请求与路线图信号
今日的功能请求和开发动态释放出明确的 v1.0 及多语言 SDK 演进信号：
*   **Python SDK 类型系统优化**：[#2415](https://redirect.github.com/a2ui-project/a2ui/issues/2415) 请求在 Python SDK 中使用 `Sequence` 和 `Mapping` 替代具体的 `list` 和 `dict`，以提高接口的抽象度和健壮性。对应的修复 PR [#2416](https://redirect.github.com/a2ui-project/a2ui/pull/2416) 已在同一日提交，极大概率被纳入下个版本。
*   **Swift SDK 架构对齐**：[#2401](https://redirect.github.com/a2ui-project/a2ui/issues/2401) 提出 Swift 中 `ComponentAPI` 应重构为 `protocol` 以与蓝图对齐，这与今日活跃的 Swift Catalog 注册表 PR [#2377](https://redirect.github.com/a2ui-project/a2ui/pull/2377) 及一致性测试 PR [#2414](https://redirect.github.com/a2ui-project/a2ui/pull/2414) 形成呼应，预示 Swift SDK 即将迎来架构级重构。
*   **v1.0 协议层演进**：[#2409](https://redirect.github.com/a2ui-project/a2ui/pull/2409) 为 v1.0 引入了 Protobuf 规范与序列化支持，结合 #2410 的分支合并，表明 v1.0 版本正在强化跨语言序列化和传输性能。

## 7. 用户反馈摘要
从 Issues 互动中提炼出以下真实用户痛点：
*   **动态数据渲染局限**：用户在使用集合作用域时，因规范中子节点无 key，导致重新排序或移动子项时行为异常（[#1745](https://redirect.github.com/a2ui-project/a2ui/issues/1745)），这严重影响了复杂动态列表的开发体验。
*   **本地运行安全隐患**：在本地运行 Agent 并使用归档功能时，由于根目录检测失败导致文件写出到不可控的父级目录，引发对文件系统安全的担忧（[#2370](https://redirect.github.com/a2ui-project/a2ui/issues/2370)）。
*   **云端 UI 交互卡顿**：在 Cloud Run 环境下与 Agent 交互时遇到滚动异常，影响终端用户的对话体验（[#2404](https://redirect.github.com/a2ui-project/a2ui/issues/2404)）。

## 8. 待处理积压
以下长期未决或需要重点关注的事项提醒维护者：
*   **核心规范缺陷悬而未决**：[#1745](https://redirect.github.com/a2ui-project/a2ui/issues/1745) 自 6 月提出至今仍处于 `needs-triage` 状态。作为 P1 级别的规范层缺陷，它制约了动态列表的正确渲染，建议核心团队尽早排期定夺。
*   **重构巨无霸 PR 审查积压**：跨框架 Web Component 的系列重构 PR（如 [#2190](https://redirect.github.com/a2ui-project/a2ui/pull/2190) 迁移 Lit 基础目录、[#2273](https://redirect.github.com/a2ui-project/a2ui/pull/2273) Angular 渲染器支持、[#2283](https://redirect.github.com/a2ui-project/a2ui/pull/2283) React 渲染器支持）已开启超过 10 天，涉及大规模架构调整，亟需核心维护者推进 Code Review 以避免合并地狱。

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目动态日报 (2026-08-27)

## 1. 今日速览
今日 OpenUI 项目整体呈现高度活跃状态，过去24小时内 PR 更新量高达 19 条，其中 14 条已合并或关闭，合并率极高。核心开发者与 AI 集成机器人协同推进了大量功能迭代，重点聚焦于 CLI 架构解耦（模板外部化与新增部署命令）、可观测性能力建设及 Benchmark 体系重构。项目当前处于功能快速演进与内部工程优化的双轨并进阶段，开源社区健康度良好。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日合并/关闭的 PR 极大地推进了项目的基础设施与功能闭环，主要进展如下：

- **CLI 架构深度解耦**：[#952](https://redirect.github.com/thesysdev/openui/pull/952), [#953](https://redirect.github.com/thesysdev/openui/pull/953), [#954](https://redirect.github.com/thesysdev/openui/pull/954) 三部曲组合拳完成了模板系统的外部化。CLI 脚手架功能改为运行时从 `openui-templates` 仓库动态拉取，移除了主仓库内的冗余模板代码，并引入了发布后的自动化版本同步 CI，大幅减轻了主仓库的维护负担。
- **可观测性与埋点增强**：[#1090](https://redirect.github.com/thesysdev/openui/pull/1090) 与 [#1091](https://redirect.github.com/thesysdev/openui/pull/1091) 将 `@openuidev/observability-cloud` SDK 接入示例与文档站点，填补了生产环境生成质量监控的空白；[#1083](https://redirect.github.com/thesysdev/openui/pull/1083) 为 devtools 的 CTA 链接增加 UTM 追踪，完善了产品转化漏斗的数据分析能力。
- **基准测试体系重构**：[#1080](https://redirect.github.com/thesysdev/openui/pull/1080) 将庞大的基准测试代码（3900+文件）剥离至独立仓库；[#1079](https://redirect.github.com/thesysdev/openui/pull/1079) 在 Benchmark 主图新增了模型对比视图，提升了多模型评估的直观性。
- **工程稳定性修复**：[#1082](https://redirect.github.com/thesysdev/openui/pull/1082) 修复了 `jsxs` 映射错误导致的 React key 警告；[#1076](https://redirect.github.com/thesysdev/openui/pull/1076) 将 examples 从主 workspace 独立，解决了依赖耦合问题。

## 4. 社区热点
今日数据中未见评论数极高的爆发性讨论，但以下条目反映了核心动向：

- **[Issue #554](https://redirect.github.com/thesysdev/openui/issues/554)**：请求为 CLI 辅助函数添加单元测试，被标记为 `good first issue`，是当前唯一活跃的 Issue，反映了社区对 CLI 代码质量保障的诉求。
- **[PR #1085](https://redirect.github.com/thesysdev/openui/pull/1085)**：正在开发中的 `openui deploy` 命令，旨在简化 Vercel 部署流程，作为 CLI 生态的重要闭环，预计将受到开发者的广泛关注。

## 5. Bug 与稳定性
今日修复了若干影响开发体验和数据准确性的缺陷：

- **低 - UI 渲染/数据异常**：[#1089](https://redirect.github.com/thesysdev/openui/pull/1089) 修复了基准测试代理数据集中 `provenance.model_board.note` 字段的乱码文本残留，**已合并**。
- **低 - 前端控制台警告**：[#1082](https://redirect.github.com/thesysdev/openui/pull/1082) 修复了浏览器 bundle 中 `jsxs` 错误映射导致的 React `key` prop 误报，**已合并**。
- **低 - 图表标签越界**：[#1088](https://redirect.github.com/thesysdev/openui/pull/1088) 修复了基准测试图表中模型标签溢出到坐标轴沟槽外的问题（Hotfix for #1079），**已有 Fix PR 待合并**。

## 6. 功能请求与路线图信号
结合今日活跃的 Issue 与开放中的 PR，CLI 能力扩展与一体化部署是明确的下一步路线图信号：

- **CLI 部署闭环**：[#1085](https://redirect.github.com/thesysdev/openui/pull/1085) 正在开发 `openui deploy` 命令，内嵌 Vercel 部署能力，极有可能在完善后纳入下一版本。
- **模板与示例丰富**：[#1084](https://redirect.github.com/thesysdev/openui/pull/1084) 和 [#1086](https://redirect.github.com/thesysdev/openui/pull/1086) 正在为 CLI 增加 Vercel Eve Backend 模板及精选示例功能，表明项目致力于降低新用户上手门槛。
- **基准能力可视化**：[#1077](https://redirect.github.com/thesysdev/openui/pull/1077) 旨在新增 Generative UI 基准测试页面，并提供多格式数据暴露，强化项目在模型评估领域的权威性。

## 7. 用户反馈摘要
从今日提交记录与 Issue 提炼出以下用户/开发者痛点与场景：

- **CLI 可靠性痛点**：从 [Issue #554](https://redirect.github.com/thesysdev/openui/issues/554) 可知，当前 CLI 缺乏单元测试导致开发者对脚手架流程缺乏信心，需要运行完整流程才能验证，反映出 CLI 健壮性有待提升。
- **Cloud/部署场景优先级高**：[#1023](https://redirect.github.com/thesysdev/openui/pull/1023) 使用 Recipe Remix Cloud 替代了旧的 Finance 快速入门，配合 `openui deploy` 的开发，表明用户在实际场景中对一键云端部署与集成的诉求远超本地静态示例。

## 8. 待处理积压
- **[Issue #554](https://redirect.github.com/thesysdev/openui/issues/554)**：该单测请求自 5 月提出至今仍为 Open 状态，虽已标记为 `good first issue`，但在目前 CLI 正在进行大规模重构与功能扩充（deploy 命令、模板拉取重构）的背景下，维护者应优先落实此测试框架的搭建，以防代码债累积导致后续重构回归风险增高。

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报 (2026-08-27)

## 1. 今日速览
CopilotKit 今日保持高度活跃，PR 更新达 45 条，其中 22 条已顺利合并或关闭，合并推进率接近 50%，显示出较强的交付节奏。虽然 5 条新增/活跃 Issue 均未关闭（存在一定积压），但社区围绕 Angular SDK、Slack 集成和企业级成本架构展开了深度讨论。项目今日发布了 Python SDK v0.1.96 修复生命周期问题，并在 MCP 协议标准化、多框架 starter 迁移及运行时健壮性上取得实质性进展，整体项目健康度良好。

## 2. 版本发布
- **[python-sdk/v0.1.96](https://pypi.org/project/copilotkit/0.1.96/)**
  - **更新内容**：主要修复了 Python SDK 的生命周期问题，解决了前端与 MCP 工具调用桥接的拦截异常。
  - **迁移注意事项**：无破坏性变更。依赖 LangGraph Python starter 的项目建议尽快将 `copilotkit` 升级至 `0.1.96`，并适配 `ag-ui-langgraph==0.0.43` / `ag-ui-protocol==0.1.19`，以避免生命周期阻断问题（详见 [PR #6728](https://redirect.github.com/CopilotKit/CopilotKit/pull/6728) 与 [PR #6729](https://redirect.github.com/CopilotKit/CopilotKit/pull/6729)）。

## 3. 项目进展
今日合并/关闭的 22 个 PR 主要推进了以下进展：
- **SDK 生命周期与稳定性修复**：[PR #6728](https://redirect.github.com/CopilotKit/CopilotKit/pull/6728) 成功发布 Python SDK 0.1.96，修复底层拦截逻辑；[PR #6697](https://redirect.github.com/CopilotKit/CopilotKit/pull/6697) 修复了 Runtime 获取未记录 Thread 时错误返回 500 的问题，优化为返回空列表，提升了系统容错性。
- **框架适配与 Starter 迁移**：[PR #6723](https://redirect.github.com/CopilotKit/CopilotKit/pull/6723) 将 Microsoft Agent Framework Python starter 从退役的 Beta API 迁移至当前稳定版；[PR #6730](https://redirect.github.com/CopilotKit/CopilotKit/pull/6730) 同步替换了已退役的 GitHub Models 设置，改为直接对接 OpenAI。
- **文档与示例闭环**：[PR #6611](https://redirect.github.com/CopilotKit/CopilotKit/pull/6611) 补齐了 Google ADK 状态流式传输的停止回调文档；[PR #6726](https://redirect.github.com/CopilotKit/CopilotKit/pull/6726) 为 Agno showcase 配置了 SQLite session storage，修复了暂停的 HITL 运行无法恢复的问题。

## 4. 社区热点
- **[#3330 Markdown 代码块渲染丢失换行](https://redirect.github.com/CopilotKit/CopilotKit/issues/3330)**（👍 0，评论 6）：这是今日评论最活跃的 Issue。虽然是 3 月份创建的老问题，但今日再次引发讨论。这反映了流式输出场景下，前端 Markdown 解析在处理换行符时存在持续的体验痛点。
- **[#6677 agUiResource 提案](https://redirect.github.com/CopilotKit/CopilotKit/issues/6677)**（👍 0，评论 3）：社区成员提议为 Angular 引入声明式的 `agUiResource`，通过一次调用设置 Agent 及其工具组件，并返回响应式 `Resource<Message[]>`。这体现了 Angular 生态对更优雅、符合框架习惯的 API 设计的强烈诉求。
- **[#6714 Angular SDK DX 与 API 反馈](https://redirect.github.com/CopilotKit/CopilotKit/issues/6714)**（👍 0，评论 2）：针对 Angular SDK 的 API 设计（如 `injectAgentStore` 的泛型支持、ID 缺省等）展开讨论，反映出核心开发者对跨框架 API 一致性和类型安全的深度关切。

## 5. Bug 与稳定性
1. **高危**：[Slack 频道无法主动/定时触发 Agent](https://redirect.github.com/CopilotKit/CopilotKit/issues/6709)。由于 `channels-slack` 的对话存储始终从实时 Slack 消息重建历史，导致无法支持定时或主动触发的 Agent 响应，严重制约了异步调度场景的落地。暂无 Fix PR。
2. **中危**：[Runtime 对未知 Thread 返回 500 错误](https://redirect.github.com/CopilotKit/CopilotKit/pull/6697)。客户端生成平台未知的 ThreadId 时触发异常捕获并返回 500。**已有 Fix PR #6697**，优化为正常返回空事件列表。
3. **低危**：[Markdown 渲染不保留换行](https://redirect.github.com/CopilotKit/CopilotKit/issues/3330)。UI 层面的渲染细节问题，影响代码块展示体验，长期未修复。

## 6. 功能请求与路线图信号
- **企业级成本控制与模型路由**：[Issue #6705](https://redirect.github.com/CopilotKit/CopilotKit/issues/6705) 提出生产环境下的按用户模型分级需求，呼吁官方提供“单一端点，多层级模型”的路由策略及成本基准测试。这暗示企业级用户对 Infra 层的精细化管理需求正在上升。
- **MCP 协议标准化迁移**：[PR #6707](https://redirect.github.com/CopilotKit/CopilotKit/pull/6707) 正在将 MCP Apps host 从手工协议迁移至官方 `@modelcontextprotocol/ext-apps` 库。这是对 MCP 标准演进的必要跟进，极大概率在下个版本合入主线。
- **Angular 生态深度重构**：结合 #6677 和 #6714 的讨论，Angular SDK 极有可能在后续版本中引入响应式 `Resource` 模式和完整的泛型类型支持，以对齐 React 版本的 DX 体验。

## 7. 用户反馈摘要
- **架构分层获认可，但生产成本成痛点**：用户高度认可 AG-UI 作为 Agent 交互层的架构设计，但在实际落地时，缺乏多模型路由和成本控制的官方最佳实践。
- **集成场景遭遇架构边界限制**：使用 Slack 集成的开发者在构建定时/主动触达 Agent 时遇到阻碍，现有 `channels-slack` 过度依赖入站事件，无法满足异步调度需求。
- **Angular 开发者体验有待提升**：Angular 用户对当前 SDK 不够“Idiomatic”表达不满，希望补齐类型推断，并引入符合 Angular Signal/Resource 响应式范式的高级 API。

## 8. 待处理积压
- **老旧 UI Bug 积压**：[#3330 Markdown换行丢失](https://redirect.github.com/CopilotKit/CopilotKit/issues/3330) 自 3 月创建至今已达半年，仍有用户持续复现，建议前端维护者排期修复。
- **大型 Infrastructure PR 滞留**：[#6098 托管 Intelligence 权限改造](https://redirect.github.com/CopilotKit/CopilotKit/pull/6098) 与 [#6188 对齐托管 Intelligence starters](https://redirect.github.com/CopilotKit/CopilotKit/pull/6188) 均已开放超过一个月且未合并，涉及核心商业逻辑与 API Key 管理，需警惕长期不合并导致的冲突风险。
- **Open PR 数量偏高**：当前有 23 个 PR 处于 Open 状态，其中包含大量文档修复和小型重构（如 #6732, #6733, #6734），建议维护团队集中清理合入以降低仓库维护负担。

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*