# 生成式 UI 生态日报 2026-09-15

> Issues: 31 | PRs: 102 | 覆盖项目: 4 个 | 生成时间: 2026-09-15 04:01 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告 (2026-09-15)

## 1. 生态全景
当前生成式 UI 生态正处于从基础渲染能力向多语言原生智能运行时、深度 Agent 编排与生产级稳定性攻坚的关键转型期。头部项目普遍面临跨端一致性、安全合规（A11y/沙箱）及部署体验的挑战，同时 AI Agent 交互定制与学习技能分发已成为核心战略高地。底层数据规范的防御性加固与上层业务组件的规模化扩充正在双线并行，标志着该生态正加速跨过概念验证期，向企业级工程化迈进。

## 2. 各项目活跃度对比

| 项目 | 新开/关闭 Issue | 待合并/已合并 PR | 新版本发布 | 核心推进状态 |
| :--- | :--- | :--- | :--- | :--- |
| **a2ui** | 8 / 8 | 35 / 15 | 0 | v1.0 发版前密集整合与安全审计期 |
| **CopilotKit** | 7 / 7 | 20 / 28 | 5 | 多语言适配与原生运行时快速迭代期 |
| **OpenUI** | 1 / 0 | 3 / 0 | 0 | Agent 定制与 Chat 组件库功能构建期 |
| **json-render**| 0 / 0 | 1 / 0 | 0 | 核心逻辑加固的平稳维护期 |

## 3. 共同关注的功能方向

*   **AI Agent 深度交互与编排定制**：各项目均在强化 UI 对 Agent 复杂执行流的承载能力。
    *   **a2ui** 评估多轮推理架构（单体上下文 vs 子 Agent 移交），并推进 Agent SDK 演进。
    *   **OpenUI** 支持回合级 `ToolCallTimeline` 覆盖，允许开发者深度定制 Agent 工具活动 UI。
    *   **CopilotKit** 发布 Native Intelligence Runtimes 与 Learned Skill Delivery，支持技能恢复与分发。
*   **跨运行时/跨语言/跨框架一致性对齐**：消除生态碎片化是当前核心痛点。
    *   **a2ui** 致力于抹平 TS/Python 引擎分歧，并重构 Universal Components 以统一 React/Angular/Lit 实现。
    *   **CopilotKit** 补齐 Python 与 .NET 的多语言适配，并对齐 Mastra/LangGraph 运行时。
*   **生产级安全与鲁棒性加固**：从功能优先转向防御性编程。
    *   **a2ui** 集中修复 CWE 漏洞（注入、原型链污染、OOM），并推进 A11y 合规。
    *   **json-render** 强化 JSON Pointer 边界容错与不可变状态快照一致性。
    *   **CopilotKit** 推进 MCP Apps 沙箱隔离规范，修复静默崩溃与发布阻断。

## 4. 差异化定位分析

*   **a2ui**：**协议与标准的制定者**。侧重 v1.0 协议跨引擎严格一致性与跨框架组件收敛，目标用户为拥有异构技术栈的大型企业团队，技术路线强调 "Write once, run anywhere" 的规范性及 WCAG 合规。
*   **CopilotKit**：**多语言原生智能运行时提供者**。侧重后端智能框架的深度绑定与技能分发闭环，目标用户为需要将复杂 AI 逻辑快速映射到多端 UI 的全栈开发者，技术路线以 LangGraph/Mastra 等主流 Agent 框架的原生适配为核心。
*   **OpenUI**：**AI Chat 场景的富交互组件基建者**。侧重 React 生态下 AI 聊天界面的开箱即用体验与商业化转化，目标用户为追求极致 DX 与构建面向终端用户 AI 应用的开发者，技术路线偏向标准化组件扩充与 PaaS 部署闭环。
*   **json-render**：**底层数据渲染的安全基座**。侧重 JSON 结构操作的安全边界与确定性，目标用户为构建上层自定义渲染引擎的基础设施开发者，技术路线聚焦不可变数据与边界条件的极致防御。

## 5. 社区热度与成熟度

*   **高热度/快速重构期**：**CopilotKit** 与 **a2ui**。两者 Issue/PR 处理量大，社区讨论密集（如 CopilotKit 的运行时摩擦、a2ui 的 A11y 争议）。CopilotKit 单日 5 发版，迭代极速但伴随破坏性变更与依赖阻断；a2ui 处于 v1.0 前夜，PR 积压严重，架构重构与分支同步带来短期阵痛。
*   **稳健成长期**：**OpenUI**。核心团队执行力强，PR 业务价值高且方向明确，虽暂无大量社区讨论，但对开发者体验断层等要害问题响应迅速，项目健康度良好。
*   **低热度/成熟维护期**：**json-render**。社区几乎无互动，属于典型的自驱动维护状态，关注点内聚于核心算法的严密性，代码质量高但生态扩展暂缓。

## 6. 值得关注的趋势信号

*   **趋势一：生成式 UI 正在演变为“有状态运行时”而非纯视图层**。CopilotKit 的“技能分发与恢复”和 a2ui 的“多轮推理架构评估”表明，UI 层需承担 Agent 挂起、恢复、上下文移交等复杂状态机职责。**参考价值**：开发者需摒弃传统无状态组件思维，在设计应用架构时为 UI 层引入运行时状态快照与并发幂等机制。
*   **趋势二：“严格一致性”与“深度定制化”的路线博弈**。a2ui 试图通过 Universal Components 消灭框架差异，而 OpenUI/CopilotKit 则通过暴露更细粒度的 Hook/覆盖点迎合特定框架特性。**参考价值**：企业选型时需评估自身技术栈的统一度——强统一管控选 a2ui，追求特定框架极致表达力选 CopilotKit/OpenUI。
*   **趋势三：Edge Runtime 与安全沙箱成为工程化新壁垒**。CopilotKit 在 Cloudflare Workers 的 SSE 编码失效，以及 MCP Apps 要求第二源加载隔离，印证了生成式 UI 在向服务端延伸时遭遇的 Web 标准与安全摩擦。**参考价值**：依赖 Edge 部署的团队需审慎评估各运行时的 Web Streams API 兼容性；接入 MCP 生态时，需提前布局沙箱隔离方案以满足合规要求。

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目动态日报 (2026-09-15)

## 1. 今日速览
今日 a2ui 项目整体保持高度活跃，共处理 16 条 Issue（8 开 8 闭）和 50 条 PR（35 待合并，15 已合并/关闭），无新版本发布。项目核心推进了两条主线：一是 **v1.0 协议一致性审计与跨引擎对齐**，TS 与 Python 引擎的分歧正在被系统性抹平；二是 **跨框架 Universal Components 架构重构**，旨在消除 React/Angular/Lit 中的组件重复实现。同时，安全性与稳定性迎来重要里程碑，集中关闭了一批涉及 CWE 漏洞的核心 Bug。当前待合并 PR 积压较多（35个），项目正处于 v1.0 发版前的密集整合与重构期。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日合并/关闭的 PR 和 Issue 标志着项目在安全性、架构整洁度和分支管理上的重要进展：
*   **核心安全与稳定性修复落地**：集中关闭了 7 个 `@a2ui/web_core` 的底层漏洞 Issue，包括 CSS 注入（[CWE-20 #2293](https://redirect.github.com/a2ui-project/a2ui/issues/2293)）、V8 堆栈信息泄露（[CWE-209 #2385](https://redirect.github.com/a2ui-project/a2ui/issues/2385)）、原型链污染（[CWE-200 #2299](https://redirect.github.com/a2ui-project/a2ui/issues/2299)）以及多个未限制资源消耗导致的 OOM/挂起问题（[CWE-400 #2384](https://redirect.github.com/a2ui-project/a2ui/issues/2384), [#2386](https://redirect.github.com/a2ui-project/a2ui/issues/2386), [#2387](https://redirect.github.com/a2ui-project/a2ui/issues/2387), [#2389](https://redirect.github.com/a2ui-project/a2ui/issues/2389)）。
*   **Swift SDK 架构确定**：关闭了 [Issue #2090](https://redirect.github.com/a2ui-project/a2ui/issues/2090)，明确 Swift 的 Node 解析架构将遵循分离关注点原则，放入单独的类中。
*   **v1.0 分支同步**：[PR #2662](https://redirect.github.com/a2ui-project/a2ui/pull/2662) 将 `main` 分支的安全与修复代码合并回 `v1_0`，保持了发版分支的代码同步。
*   **Lit 渲染器重构辅助**：[PR #2313](https://redirect.github.com/a2ui-project/a2ui/pull/2313) 关闭，完成了 `web_core` 中 Web Component 实现辅助函数的导出，为后续重构铺平道路。

## 4. 社区热点
*   **无障碍访问（A11y）标准争议**：[Issue #1410](https://redirect.github.com/a2ui-project/a2ui/issues/1410)（14条评论）持续活跃。社区对 Basic Catalog 组件未渲染 A11y 属性（如多个 "Book Now" 按钮缺乏区分度）违反 WCAG 2.4.6 标准的问题展开深入讨论，反映出企业级用户对 UI 语义化与合规性的强烈诉求。
*   **v1.0 一致性对齐攻坚**：由 gspencergoog 发起的 4 层 PR Stack（[PR #2537](https://redirect.github.com/a2ui-project/a2ui/pull/2537), [#2657](https://redirect.github.com/a2ui-project/a2ui/pull/2657), [#2658](https://redirect.github.com/a2ui-project/a2ui/pull/2658), [#2659](https://redirect.github.com/a2ui-project/a2ui/pull/2659)）引发了大量关注。该系列 PR 旨在抹平 TS 与 Python 引擎在数据验证、格式化本地化及函数实现上的差异，是目前推进 v1.0 发布的最核心工作。

## 5. Bug 与稳定性
**新报告的高优先级 Bug：**
1.  **[P1] Python DataModel 一致性缺失**：[Issue #2622](https://redirect.github.com/a2ui-project/a2ui/issues/2622) 指出 Python 的 DataModel 未通过 37 个共享用例中的 7 个，严重阻碍了跨引擎一致性目标，暂无 Fix PR。
2.  **[E2E] 主干测试失败**：[Issue #2663](https://redirect.github.com/a2ui-project/a2ui/issues/2663) 报告由 [PR #2272](https://redirect.github.com/a2ui-project/a2ui/pull/2272) 引入的提交导致 E2E �效失败，需立即排查回归原因。
3.  **Python SDK 校验逻辑错误**：[Issue #2645](https://redirect.github.com/a2ui-project/a2ui/issues/2645) 报告 Python v0.9/v0.9.1 catalogs 错误地使用 v1.0 的 shape 来校验 `FunctionCall.returnType`，导致合法调用被拒。

**历史重大安全 Bug 今日修复（已关闭）：**
*   资源无限制消耗：[#2384](https://redirect.github.com/a2ui-project/a2ui/issues/2384), [#2386](https://redirect.github.com/a2ui-project/a2ui/issues/2386), [#2387](https://redirect.github.com/a2ui-project/a2ui/issues/2387), [#2389](https://redirect.github.com/a2ui-project/a2ui/issues/2389)
*   输入校验与信息泄露：[#2293](https://redirect.github.com/a2ui-project/a2ui/issues/2293), [#2385](https://redirect.github.com/a2ui-project/a2ui/issues/2385), [#2299](https://redirect.github.com/a2ui-project/a2ui/issues/2299)

## 6. 功能请求与路线图信号
*   **Agent SDK 演进**：[Issue #2574](https://redirect.github.com/a2ui-project/a2ui/issues/2574) 提出在 `SkillGenerator` 中支持 `InferenceFormatFactory`，结合 [PR #2651](https://redirect.github.com/a2ui-project/a2ui/pull/2651) 新增 `a2ui_agent` TS 包的动作，明确释放了项目将在 v1.0 后重点发力 **AI Agent 生成与编排** 领域的信号。
*   **多轮推理架构评估**：[Issue #2664](https://redirect.github.com/a2ui-project/a2ui/issues/2664) 提议对“单体上下文膨胀”与“子 Agent UI 移交”两种多轮推理策略进行基准测试，这将是决定 a2ui 复杂任务 UI 渲染架构走向的关键路线图节点。
*   **组件命名空间规范化**：[Issue #2653](https://redirect.github.com/a2ui-project/a2ui/issues/2653) 呼吁统一各渲染器的 Tag 和 Selector 命名空间（目前 web_core 用 `a2ui-basic-`，Angular 用 `a2ui-v09-`），这对[PR #2488](https://redirect.github.com/a2ui-project/a2ui/pull/2488)（Universal Components 子模块）的最终合并至关重要。

## 7. 用户反馈摘要
*   **痛点：跨 SDK 行为不一致**：开发者对 TS/Python/Dart 引擎在边界情况下的校验与渲染差异感到困扰（[Issue #2622](https://redirect.github.com/a2ui-project/a2ui/issues/2622), [#2645](https://redirect.github.com/a2ui-project/a2ui/issues/2645)），强烈期望“Write once, run anywhere”的严格一致性。
*   **痛点：安全与鲁棒性缺位**：核心贡献者 ez-lbz 集中暴露了 `web_core` 在处理极端输入（超大数组、深层原型链、无限参数）时的脆弱性，反映出过去的设计偏重功能实现，缺乏生产环境必要的边界守卫。
*   **诉求：框架原生体验保留**：在 [PR #2630](https://redirect.github.com/a2ui-project/a2ui/pull/2630)（删除 React 基础目录实现）等重构中，社区倾向于通过 Universal Components 减少重复代码，但同时要求必须无缝支持各框架的原生容器与 DI 特性（如 [PR #2274](https://redirect.github.com/a2ui-project/a2ui/pull/2274) 所示）。

## 8. 待处理积压
*   **[P1 长期未决] 无障碍访问合规**：[Issue #1410](https://redirect.github.com/a2ui-project/a2ui/issues/1410) 自 5 月创建至今未解决，涉及核心 Catalog 的 A11y 缺陷，严重影响可访问性合规，需维护者尽快排期。
*   **[架构重构阻塞] Universal Components 依赖链**：[PR #2273](https://redirect.github.com/a2ui-project/a2ui/pull/2273) (Angular 支持) 和 [PR #2283](https://redirect.github.com/a2ui-project/a2ui/pull/2283) (React 支持) 自 8 月开启至今未合并，它们是后续诸多 Sample 和 Refactor PR 的前置依赖，长期积压将严重拖延 v1.0 架构重构的完成。
*   **[CI/CD 异常] Dart 格式化检查失效**：[Issue #2463](https://redirect.github.com/a2ui-project/a2ui/issues/2463) 表明 CI 中的 dart format 检查可能并未按预期工作，存在代码风格失守的风险，需尽快修复 CI 脚本。

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

**OpenUI 项目动态日报 - 2026-09-15**

**1. 今日速览**
OpenUI 项目今日呈现稳健的开发活跃度，核心团队集中推送了 3 个重要 PR，重点发力于智能体交互定制、开发者体验（DX）优化与 React UI 组件库的规模化扩充。过去 24 小时内虽无 PR 合并或新版本发布，但提交的代码变更均具备较高业务价值，显示出项目正处于功能密集构建期。新增的 1 条 Issue 准确指向了当前部署链路的体验断层与遥测缺失，且已有对应 PR 进行接管，响应迅速。整体来看，项目健康度良好，核心开发方向明确且执行力强。

**2. 版本发布**
（省略，今日无新版本发布）

**3. 项目进展**
今日无合并或关闭的 PR，但有 3 个关键 PR 处于待合并状态，标志着项目在以下维度的显著推进：
*   **智能体交互深度定制**：[#1170](https://redirect.github.com/thesysdev/openui/pull/1170) 为 `AgentInterface` 引入了回合级别的 `ToolCallTimeline` 覆盖能力，允许开发者在实时工具活动中替换默认时间线组件，增强了构建复杂 AI Agent 时的 UI 灵活性。
*   **开发者体验与数据闭环**：[#1172](https://redirect.github.com/thesysdev/openui/pull/1172) 系统性改善了部署发现机制与遥测链路，旨在打通从本地开发到线上托管的引导断层，并补齐转化漏斗的数据度量能力。
*   **前端组件库生态扩充**：[#1173](https://redirect.github.com/thesysdev/openui/pull/1173) 为 `openuiChatLibrary` 批量添加了十余个新原语组件（如 `EditableTable`, `Chips`, `EntityList`, `MetricIndicatorInline` 等），大幅丰富了基于 React 的 AI 聊天界面构建基建。

**4. 社区热点**
今日社区最核心的议题为 Issue [#1171](https://redirect.github.com/thesysdev/openui/issues/1171)（Improve deployment discovery, developer experience, and funnel measurement）。尽管目前评论与点赞数为 0，但该 Issue 提出的痛点直击开源项目推广转化的要害：开发者难以顺滑地从本地体验过渡到线上部署，且项目方缺乏漏斗数据来衡量转化率。该诉求已被 PR [#1172](https://redirect.github.com/thesysdev/openui/pull/1172) 完整承接，体现了核心团队对2C（开发者）体验与项目增长指标的高度重视。

**5. Bug 与稳定性**
*   **已修复 Bug#1128（待合并）**G：PR [#1170](https://redirect.github.com/thesysdev/openui/pull/1170) 明确修复了 Issue [#1128](https://redirect.github.com/thesysdev/openui/issues/1128)。该问题导致了 `AgentInterface` 在处理自定义工具调用时缺乏时间线层面的覆盖能力。目前修复 PR 已提交并包含变更集（patch changeset），等待合并。
*   **新增 Bug/崩溃**：今日无新报告的崩溃或严重回归问题，项目稳定性维持良好。

**6. 功能请求与路线图信号**
*   **部署体验与增长基建**：Issue [#1171](https://redirect.github.com/thesysdev/openui/issues/1171) 提出的部署发现与漏斗测量需求，已通过 PR [#1172](https://redirect.github.com/thesysdev/openui/pull/1172) 落地。此方向极大概率被纳入下一版本，标志着 OpenUI 正从纯开发者工具向兼顾商业/增长漏斗的 PaaS 形态演进。
*   **Chat UI 组件体系扩充**：PR [#1173](https://redirect.github.com/thesysdev/openui/pull/1173) 释放了强烈的路线图信号——OpenUI 正在快速标准化 AI Chat 场景下的富交互组件（如可编辑表格、指标卡、实体列表等）。这预示着下一版本将提供一个开箱即用、具备企业级表现力的 Chat 组件库。

**7. 用户反馈摘要**
从今日的 Issue 提取核心用户/开发者反馈：
*   **痛点**：现有的部署命令和快速上手提示之间存在体验割裂，开发者难以完成从 "本地跑通" 到 "线上托管" 的安全过渡（Safe local-to-hosted journey）。
*   **诉求**：需要一个规范、权威的部署指南，并在首页及侧边栏提供明确的入口；同时，项目方需要可靠的遥测数据来验证开发者的部署转化漏斗是否通畅。

**8. 待处理积压**
当前有 3 个高价值 PR 处于 Open 状态等待 Review 与 Merge，建议维护者重点关注以避免阻断后续功能迭代：
*   [PR #1173](https://redirect.github.com/thesysdev/openui/pull/1173)：组件库大批量更新，需重点审查组件 API 设计的一致性与类型声明。
*   [PR #1172](https://redirect.github.com/thesysdev/openui/pull/1172)：涉及 DX 与遥测，需确认对现有部署流程无破坏性变更。
*   [PR #1170](https://redirect.github.com/thesysdev/openui/pull/1170)：Agent 接口修改，需验证默认降级逻辑的稳健性。

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render 项目动态日报 (2026-09-15)

## 1. 今日速览
json-render 项目今日整体活跃度较低，未观测到新版本发布或 Issues 动态。核心进展集中在代码稳定性增强，新增 1 个待合并的修复 PR，旨在强化 JSON Pointer 路径处理逻辑。项目当前处于平稳迭代期，核心库的健壮性与边界情况容错率是当前关注的焦点。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日无已合并或关闭的 PR。项目推进主要体现在新增的待合并 PR：
- [PR #336 fix(core): harden JSON Pointer path handling](https://redirect.github.com/vercel-labs/json-render/pull/336)：该 PR 大幅推进了核心路径解析的健壮性。它严格限制了数组索引仅接受规范十进制格式，将形似数字的 token 保留为字面量对象键，并将格式错误的数组读写操作转为安全的 no-ops（空操作）。此外，不可变状态存储和共享适配器在写入被拒时能保持快照一致性，仅应用有效的批量写入条目。此修复若合并，将显著提升底层数据操作的安全边界。

## 4. 社区热点
今日社区讨论活跃度较低，无高热度议题。唯一的动态 [PR #336](https://redirect.github.com/vercel-labs/json-render/pull/336) 当前评论数和点赞数均为 0，尚未引发广泛讨论，更多属于维护者/贡献者自驱动的代码质量完善。

## 5. Bug 与稳定性
今日无用户通过 Issue 报告的新 Bug。但通过 [PR #336](https://redirect.github.com/vercel-labs/json-render/pull/336) 暴露出底层存在的潜在稳定性隐患：JSON Pointer 路径处理在面对非规范十进制数组索引或数字外观的对象键时，容易产生非预期的行为。该 PR 已针对此隐含缺陷提供修复（当前状态为 OPEN，待合并），将畸形读写转化为安全静默操作，从而防范潜在的运行时异常。

## 6. 功能请求与路线图信号
今日无新增功能请求。从 [PR #336](https://redirect.github.com/vercel-labs/json-render/pull/336) 的技术方向推断，项目近期的路线图信号侧重于**内部核心机制的加固与规范化**（如不可变状态快照一致性、边界条件防御性编程），而非向外扩展新功能。

## 7. 用户反馈摘要
今日无新增 Issue 或评论，暂无可提炼的用户痛点或使用场景反馈。

## 8. 待处理积压
当前存在 1 个需要维护者关注的待处理 PR：
- [PR #336](https://redirect.github.com/vercel-labs/json-render/pull/336)：处于 OPEN 状态，需维护者进行 Code Review 并评估合并。鉴于其涉及核心状态存储与路径解析的防错逻辑，建议尽快推进合入，以提升主干分支的稳定性。

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报 (2026-09-15)

## 1. 今日速览
过去 24 小时内，CopilotKit 项目保持了极高的开发活跃度，共处理了 14 条 Issue（7 开 7 闭）和 48 条 PR（20 待合并，28 已合并/关闭），并发布了 5 个新版本。项目核心正全面向 **Native Intelligence Runtimes（原生智能运行时）** 和 **Learned Skill Delivery（学习技能分发）** 演进，新增了对 Mastra 和 LangGraph 的原生支持，并补齐了 Python 与 .NET 的多语言适配。同时，维护者正积极修复 v1.50.0 遗留的静默崩溃问题及发布流水线中的依赖阻断 Bug，整体项目健康度与迭代速度优秀。

## 2. 版本发布
今日共发布 5 个版本，核心聚焦于 Native Intelligence 运行时与跨框架技能分发对齐：

- **[v1.71.2](https://github.com/CopilotKit/CopilotKit/releases)**: 
  - **更新内容**：为 `@copilotkit/runtime` 添加原生 Intelligence 运行时支持；改进 Inspector 对临时线程的处理；TypeScript 运行时接入 `@ag-ui/mcp-apps-middleware@^0.1`。
- **[intelligence-mastra/v1.71.2](https://redirect.github.com/CopilotKit/CopilotKit/pull/7129)** 与 **[intelligence-langgraph/v1.71.2](https://redirect.github.com/CopilotKit/CopilotKit/pull/7072)**: 
  - **更新内容**：将包版本与核心 v1.71.2 对齐（API 与实现与 v0.1.0 一致）。
  - **前置特性 (v0.1.0)**：初始发布，引入原生处理器、技能工具和代理包装器，支持经验证的技能分发及恢复工具执行。
- **迁移注意事项**：若项目中锁定了 `intelligence-mastra@0.1.0` 或 `intelligence-langgraph@0.1.0`，需注意其已直接跃升至 `1.71.2` 以与 monorepo 保持同步，建议放宽版本依赖或跟随升级。

## 3. 项目进展
今日合入/关闭的 28 个 PR 极大推进了多语言支持与系统稳定性：

- **多语言技能分发落地**：[feat: add Python and .NET learned-skill transport and adapters #7088](https://redirect.github.com/CopilotKit/CopilotKit/pull/7088) 已合并，为 Python LangGraph、Google ADK 和 .NET Agent Framework 提供了原生学习快照传输与集成，标志着 CopilotKit 跨越 TS 生态限制。
- **Mastra 与 LangGraph 适配合入**：[feat: add Mastra learned skill delivery #7129](https://redirect.github.com/CopilotKit/CopilotKit/pull/7129) 与 [feat: deliver learned skills to native TS LangGraph agents #7072](https://redirect.github.com/CopilotKit/CopilotKit/pull/7072) 关闭，TS 生态的原生智能分发闭环完成。
- **历史遗留缺陷大修**：[fix: repair the v1.50.0 orphans that fail silently #6931](https://redirect.github.com/CopilotKit/CopilotKit/pull/6931) 合并，修复了 MCP auth、adapters、textarea 等模块在重构后静默失败的严重问题。
- **破坏性重构**：[refactor(react-native)!: replace the useRenderTool shim with react-core's hook #7118](https://redirect.github.com/CopilotKit/CopilotKit/pull/7118) 合并，移除了 RN 中的废弃兼容层，统一使用 react-core 的 hook。
- **发布流水线紧急修复**：[fix(release): bring mcp-apps-renderer to the monorepo scope version #7131](https://redirect.github.com/CopilotKit/CopilotKit/pull/7131) 合并，解决了 `@copilotkit/core@1.71.2` 在 npm 上因缺失 `shared@1.71.2` 导致的安装阻断问题。

## 4. 社区热点
讨论最活跃的 Issue 反映了社区对核心执行流与运行时的强烈关注：

- **[Issue #2671](https://redirect.github.com/CopilotKit/CopilotKit/issues/2671) (12 comments, 已关闭)**: 请求 LangGraph 的 `ToolRuntime` 支持返回 `Command`。随着 LangGraph Intelligence 适配的落地，此长期需求已得到解决。
- **[Issue #2587](https://redirect.github.com/CopilotKit/CopilotKit/issues/2587) (10 comments, 已关闭)**: 工具并发调用导致 `TOOL_CALL_START` 事件报错。该痛点在近期执行流重构中被修复。
- **[Issue #2845](https://redirect.github.com/CopilotKit/CopilotKit/issues/2845) (7 comments, 仍开启)**: `@ag-ui/client` 与 `@copilotkit/react-core` 混用时 `CancellationToken` 导入错误。表明 AG-UI 协议层与 CopilotKit 核心层的模块打包/导出存在摩擦，是目前集成侧的最大阻碍。

## 5. Bug 与稳定性
按严重程度排序，今日暴露及处理的 Bug 如下：

1. **致命 - npm 安装阻断**：`@copilotkit/core` 依赖未发布的 `shared@1.71.2`。**(已修复: [PR #7131](https://redirect.github.com/CopilotKit/CopilotKit/pull/7131))**
2. **严重 - Cloudflare Workers 运行时 SSE 失效**：[Issue #6919](https://redirect.github.com/CopilotKit/CopilotKit/issues/6919) 报告 v2 runtime 在 Workers 环境返回 200 但 Body 为空，由于 `EventEncoder` 将字符串写入字节流导致。**(尚无修复 PR，影响 Edge 部署)**
3. **严重 - Intelligence 运行时状态脏读**：[Issue #7130](https://redirect.github.com/CopilotKit/CopilotKit/issues/7130) 报告 `ProxiedCopilotRuntimeAgent` 在 `/info` 响应从 `intelligence` 降级为 `sse` 时保留旧 `runtimeMode`，导致请求路由失败。**(尚无修复 PR)**
4. **中等 - React Native 废弃 API 移除**：[Issue #6976](https://redirect.github.com/CopilotKit/CopilotKit/issues/6976) 移除了 `useRenderTool` 垫片。**(已修复: [PR #7118](https://redirect.github.com/CopilotKit/CopilotKit/pull/7118)，破坏性变更)**
5. **低 - TS 类型定义错误**：[Issue #7126](https://redirect.github.com/CopilotKit/CopilotKit/issues/7126) 报告 `chatView` 插槽类型校验错误，阻碍强类型组件注入。**(尚无修复 PR)**

## 6. 功能请求与路线图信号
- **MCP Apps 沙箱安全隔离**：[Issue #6910](https://redirect.github.com/CopilotKit/CopilotKit/issues/6910) 与 [Issue #7119](https://redirect.github.com/CopilotKit/CopilotKit/issues/7119) 提出 MCP Apps 沙箱需满足 SEP-1865 规范，从同源改为真实第二源加载代理。这是后续安全合规的重点方向。
- **类型安全的 Agent ID**：[PR #3280](https://redirect.github.com/CopilotKit/CopilotKit/pull/3280) 提议通过 `Register` 扩展实现编译期拦截未知 `agentId`。该 PR 自 2 月开启至今，今日重现活跃，有望在 v2 正式版落地。
- **运行时中断恢复机制优化**：[PR #7001](https://redirect.github.com/CopilotKit/CopilotKit/pull/7001) 与 [PR #7134](https://redirect.github.com/CopilotKit/CopilotKit/pull/7134) 正在重写中断与初始化期间的运行流控，暗示 v2 Runtime 正在夯实并发与幂等性。

## 7. 用户反馈摘要
- **痛点：跨包版本兼容**：用户在升级至 1.50+ 及集成 `@ag-ui` 时频繁遭遇导出缺失与依赖冲突（#2845, #2930），Monorepo 的发布校验仍需加强。
- **痛点：Edge Runtime 适配**：Cloudflare Workers 环境的 SSE 编码问题（#6919）暴露了核心运行时对 Web 标准 API 假设过于 Node.js 化。
- **满意度：LangGraph 生态融合**：社区对 LangGraph 工具运行时的支持呼声极高（#2671），今日原生适配的发布是对该诉求的强有力回应。

## 8. 待处理积压
- **[Issue #2845](https://redirect.github.com/CopilotKit/CopilotKit/issues/2845)**：`CancellationToken` 导入错误，7 条评论但无官方 Assignee，阻塞了前端与 AG-UI 的混合使用。
- **[Issue #6919](https://redirect.github.com/CopilotKit/CopilotKit/issues/6919)**：Cloudflare Workers SSE 空响应，需运行时层修复 Web Streams 兼容性。
- **[PR #7084](https://redirect.github.com/CopilotKit/CopilotKit/pull/7084)**：将 MS Agents SDK 设为可选对等依赖，涉及破坏性变更，需维护者进一步评审合入时机。
- **[PR #3280](https://redirect.github.com/CopilotKit/CopilotKit/pull/3280)**：类型安全 Agent ID，开启超过半年，需要核心团队给出最终架构意见以推进合入。

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*