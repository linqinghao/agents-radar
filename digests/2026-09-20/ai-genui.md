# 生成式 UI 生态日报 2026-09-20

> Issues: 2 | PRs: 23 | 覆盖项目: 4 个 | 生成时间: 2026-09-20 04:04 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告 (2026-09-20)

## 1. 生态全景
当前生成式 UI 生态正从“基础可用性验证”向“生产级架构重构与细粒度掌控”过渡。多端同构与跨框架核心逻辑下沉成为基建重心，项目普遍在为多平台渲染与复杂智能体交互做架构准备。同时，安全隔离与底层规范合规暴露出致命短板，生态正经历从“优先功能迭代”到“优先稳定与安全”的成熟化洗牌。

## 2. 各项目活跃度对比

| 项目 | 新增/活跃 Issues | 活跃/更新 PRs | 关闭/合并 PRs | 版本发布 | 整体态势 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **a2ui** | 0 | 2 (核心待合并) | 1 | 0 | 低活跃，聚焦底层架构对齐 |
| **OpenUI** | 0 | 0 | 1 (自动发包) | **4** (1 Minor, 3 Patch) | 低交互，高交付，静默迭代 |
| **json-render**| 0 | 1 (核心修复) | 0 | 0 | 极低活跃，平稳维护期 |
| **CopilotKit** | 2 (含1高危) | 18 | **11** (含7 Showcase修复) | 0 | 高度活跃，密集修Bug与重构 |

## 3. 共同关注的功能方向

*   **跨端/跨框架核心架构对齐**：
    *   **a2ui** 推进 Dart 端 node-resolution 层建设以对齐 TypeScript；
    *   **CopilotKit** 将附件与富 UI 事件逻辑下沉至 `@copilotkit/shared` 以统一 React/Angular/Vue 核心。
    *   *诉求*：消除多端实现差异，提升核心逻辑复用率与多端渲染一致性。
*   **智能体通信的规范化与流控**：
    *   **a2ui** 规范化 Agent 与 Renderer 双端通信 Payload 类型；
    *   **OpenUI** 提供 turn-level 的工具时间线覆盖能力；
    *   **CopilotKit** 集中处理子代理消息泄露与历史消息修剪。
    *   *诉求*：在复杂 Multi-Agent 场景下，开发者亟需对消息流向、执行时间线及数据契约的精细控制权。

## 4. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术路线差异 |
| :--- | :--- | :--- | :--- |
| **a2ui** | 多端逻辑同构与 AI 模型灵活调度 | 需跨 Web/移动端同构渲染的全栈开发者 | TS/Dart 双端协议驱动，Agent-Renderer 严格解耦 |
| **OpenUI** | AI 智能体前端交互定制与开发体验 | 追求 UI 细粒度掌控的 React 系开发者 | Headless 逻辑 + UI 组件包 + CLI 脚手架工程化 |
| **json-render** | 嵌套状态的标准化解析与安全读写 | 依赖 JSON Pointer 的状态管理库/DevTools 作者 | 严格遵循 RFC 6901 规范的底层扁平化与渲染 |
| **CopilotKit**| 全栈 AI Copilot 集成与多框架支持 | 构建复杂 Multi-Agent 工作流的企业级团队 | 多框架适配层 + 自托管运行时 + 丰富 Showcase 矩阵 |

## 5. 社区热度与成熟度

*   **高热度快速迭代期**：当前仅 **CopilotKit** 呈现高热度，单日 PR 活跃度极高。但其同时暴露出高危安全漏洞与长期阻塞性 Bug，说明项目正处于功能扩张后的“债务偿还期”，距离生产级成熟度尚有差距。
*   **稳健交付期**：**OpenUI** 处于低社区噪音、高代码交付的静默迭代阶段，自动化发包流程顺畅，架构重构与功能增量有序推进，成熟度较高。
*   **架构深耕期**：**a2ui** 活跃度低但 PR 均为战略级底层重构，处于打地基阶段，稳健性优先。
*   **长尾维护期**：**json-render** 活跃度最低，仅靠社区驱动修复边界用例，处于典型的长尾维护状态。

## 6. 值得关注的趋势信号

*   **信号一：自托管与多租户安全成为生产部署红线**。CopilotKit 暴露的跨线程越权读取漏洞敲响了警钟：生成式 UI 框架在提供开箱即用的内存运行器时，**必须将线程级鉴权与数据隔离作为默认行为**，而非完全依赖应用层。开发者在选型自托管方案时，需将默认安全配置作为首要评估指标。
*   **信号二：UI 渲染的掌控权正在向“轮次级/节点级”下沉**。OpenUI 的 turn-level override 与 a2ui 的 node-resolution 层建设表明，粗粒度的整体 UI 替换已无法满足需求。开发者需要针对**单次工具调用、单个渲染节点**进行拦截、覆写与状态回传，这要求框架具备极细粒度的事件与渲染生命周期钩子。
*   **信号三：底层标准规范的违背将直接击穿上层 DevTools**。json-render 的键名碰撞缺陷证明，在状态管理中投机取巧绕开 RFC 6901 等 JSON 规范，会导致 DevTools 等上层可视化工具的数据错位与丢失。开发者在设计前端状态扁平化逻辑时，**必须严格遵循标准转义规则**，避免为边界用例埋雷。
*   **信号四：AI 模型调用从“硬编码锁定”走向“滚动追踪”**。a2ui 将默认模型切换至 `latest` 滚动别名，反映出生态对 LLM API 迭代速度的适应。开发者需权衡：采用滚动别名可第一时间获取模型能力跃迁，但也需在应用层增加容错兜底逻辑，以防模型提供商的 Breaking Change 导致 UI 渲染崩溃。

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目动态日报 (2026-09-20)

## 1. 今日速览
今日 a2ui 项目整体呈现低活跃度但聚焦底层架构的运行状态，无新增 Issue 和版本发布。Pull Request 活动主要围绕 Dart 核心层（`a2ui_core`）的消息类型定义与节点解析层构建，共有 1 个 PR 顺利关闭，2 个核心 PR 处于待合并状态。项目当前的重心明显向多端（TypeScript/Dart）架构对齐与 AI 模型调用灵活性倾斜，整体代码质量与架构稳健性正在稳步提升。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
今日关闭了 1 个重要 PR，项目在 Dart 端核心通信协议的规范化上向前迈进一步：
- **已关闭 PR [#2683](https://redirect.github.com/a2ui-project/a2ui/pull/2683)**：`Add payload entry-point types to Dart a2ui_core`。该 PR 为 Dart 核心库添加了 `AgentToRendererMessagePayload` 和 `RendererToAgentMessagePayload` 两个关键入口载荷类型，并重构了消息入口结构。此举完善了 Agent 与 Renderer 之间的数据通信契约，为后续跨端消息传递的稳定性提供了类型保障。

## 4. 社区热点
由于今日无新增 Issue 且当前活跃 PR 暂无密集评论，热点主要反映在近期持续活跃的架构级 PR 上，体现出开发组内部的重点演进方向：
- **PR [#2669](https://redirect.github.com/a2ui-project/a2ui/pull/2669)**：引入 Dart 端的 node-resolution 层，这是实现跨平台节点树解析的关键功能，昨日有更新活动，备受底层架构开发关注。
- **PR [#2573](https://redirect.github.com/a2ui-project/a2ui/pull/2573)**：调整 Composer 的 Gemini 模型默认配置，昨日有更新，反映出项目在适配外部 AI 模型 API 方面的持续优化。

## 5. Bug 与稳定性
*过去 24 小时内未报告新的 Bug、崩溃或回归问题，项目稳定性保持良好。*

## 6. 功能请求与路线图信号
结合现有活跃及近期关闭的 PR，可以识别出明确的路线图信号：
- **Dart 核心架构全面对齐 TypeScript**：PR [#2669](https://redirect.github.com/a2ui-project/a2ui/pull/2669)（关联 Issue [#1282](https://redirect.github.com/a2ui-project/a2ui/issues/1282)）正在将 TypeScript 端已实现的 node-resolution 层移植到 Dart 端，这是实现双端渲染与逻辑同构的核心前置任务，极大概率被纳入下一阶段版本重点。
- **规范双端通信 Payload**：由已关闭的 PR [#2683](https://redirect.github.com/a2ui-project/a2ui/pull/2683)（关联 Issue [#2356](https://redirect.github.com/a2ui-project/a2ui/issues/2356) 与 [#2373](https://redirect.github.com/a2ui-project/a2ui/issues/2373)）可知，规范化 Agent 与 Renderer 的消息载荷类型是当前迭代的明确目标，为后续更复杂的 UI 交互下发与状态回传奠定基础。

## 7. 用户反馈摘要
*今日无直接的用户 Issue 反馈。但从 PR 动态可提炼间接诉求：*
- **模型版本锁定痛点**：由 PR [#2573](https://redirect.github.com/a2ui-project/a2ui/pull/2573) 的修改（将默认模型从硬编码的 `google/gemini-2.5-flash` 改为滚动别名 `google/gemini-flash-latest`）推断，此前硬编码特定版本可能导致用户在使用 Composer 时无法及时获取 Google 最新的 Flash 模型能力，或遭遇旧版模型停用引发的兼容性问题。采用滚动别名能更好地满足用户对“开箱即用且始终保持最新”的默认模型调用诉求。

## 8. 待处理积压
以下待合并 PR 已开放数日至十余日不等，建议维护者跟进 Review 以防阻断后续开发：
- **PR [#2573](https://redirect.github.com/a2ui-project/a2ui/pull/2573)**：自 9 月 9 日创建至今已逾 10 天，涉及 Composer 默认行为变更，需评估直接使用 `latest` 滚动别名是否可能给生产环境带来不可控的模型 Breaking Change 风险，建议尽快推进合并或提出修改意见。
- **PR [#2669](https://redirect.github.com/a2ui-project/a2ui/pull/2669)**：自 9 月 15 日创建，作为 Dart 侧架构级功能 PR，可能是后续多端渲染适配的基础依赖，建议优先安排 Code Review 以解除积压。

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目动态日报 (2026-09-20)

**项目地址**：[github.com/thesysdev/openui](https://github.com/thesysdev/openui)

---

## 1. 今日速览
OpenUI 项目今日整体呈现“低交互、高交付”的态势，核心开发聚焦于底层架构优化与 AI 智能体交互能力迭代。过去 24 小时内无新增或活跃的 Issue，仅关闭 1 条自动化的版本发布 PR，社区前端互动较为平静。然而，项目一次性发布了 4 个新版本（含 1 个 Minor 更新和 2 个 Patch 更新），涵盖 CLI 架构重构、Agent 界面定制及开发者工具体验优化，显示出维护者在内部代码质量与产品易用性上的持续推进。

## 2. 版本发布
今日共发布 4 个新版本，无破坏性变更，但 CLI 架构调整需开发者留意：

- **[@​openuidev/cli@0.4.0](https://github.com/thesysdev/openui/releases)** (Minor)
  - **更新内容**：CLI 内部架构重构，每个命令独立为文件夹，并提取了共享逻辑。
  - **影响评估**：虽为 Minor 版本，但属于内部重构，对外部 API 无破坏性影响；对于参与 CLI 源码贡献的开发者，需适应新的目录结构与模块划分。
  - **关联 PR**：[#1174](https://redirect.github.com/thesysdev/openui/pull/1174)

- **[@​openuidev/react-ui@0.16.2](https://github.com/thesysdev/openui/releases)** (Patch)
  - **更新内容**：为 `AgentInterface` 新增 turn-level（轮次级别）的工具时间线覆盖能力，允许开发者更细粒度地自定义 Agent 的执行流程展示。
  - **影响评估**：纯增量更新，提升 AI 智能体前端交互的灵活性。
  - **关联 PR**：[#1170](https://redirect.github.com/thesysdev/openui/pull/1170)

- **[@​openuidev/devtools@0.2.1](https://github.com/thesysdev/openui/releases)** (Patch)
  - **更新内容**：增加可关闭的本地部署提示，并对 Inspect 卡片的间距进行了对齐优化。
  - **影响评估**：改善开发者本地调试体验，减少 UI 视觉干扰。
  - **关联 PR**：[#1172](https://redirect.github.com/thesysdev/openui/pull/1172)

- **[@​openuidev/react-headless@0.16.2](https://github.com/thesysdev/openui/releases)** (Patch)
  - **更新内容**：无代码变更，仅跟随版本号对齐发布。

## 3. 项目进展
今日合并/关闭的 PR 共 1 条，属于自动化发布流程：

- **[CLOSED] [chore: version packages #1201](https://redirect.github.com/thesysdev/openui/pull/1201)**
  - **详情**：由 `changesets` 机器人自动创建的发布 PR。该 PR 的关闭标志着上述 4 个版本已成功打包并自动发布至 npm。
  - **进展评估**：项目通过自动化工具保障了发包的规范与效率。从底层逻辑看，今日交付的核心进展由此前已合并的 [#1170](https://redirect.github.com/thesysdev/openui/pull/1170)、[#1172](https://redirect.github.com/thesysdev/openui/pull/1172) 和 [#1174](https://redirect.github.com/thesysdev/openui/pull/1174) 共同推进，项目在 AI 交互组件定制化与工程化治理上迈出了坚实一步。

## 4. 社区热点
过去 24 小时内无新增 Issue 或产生新评论的 PR，社区暂无热议话题。当前项目处于功能迭代期的“静默开发”阶段，用户侧较为稳定。

## 5. Bug 与稳定性
今日无新增 Bug 报告、崩溃或回归问题记录。结合发布内容（均为功能新增与 UI 细节优化，无底层核心逻辑重写），项目当前处于稳定状态，Headless 逻辑与 UI 层未出现可见的解耦故障。

## 6. 功能请求与路线图信号
今日无用户发起的显性功能请求，但从合并的代码可提炼出强烈的路线图信号：

- **智能体交互细粒度掌控**：`react-ui` 中 `AgentInterface` 支持 turn-level timeline override（[#1170](https://redirect.github.com/thesysdev/openui/pull/1170)），表明 OpenUI 正在迎合复杂 AI Agent 场景下“多步工具调用可视化”的定制需求，未来可能会提供更多生命周期钩子。
- **工程化与可扩展性准备**：CLI 架构重构为多命令文件夹模式（[#1174](https://redirect.github.com/thesysdev/openui/pull/1174)），通常是为后续接入更多脚手架命令（如插件生成、特定模板初始化等）做架构铺垫，属于先修地基后建高楼的典型信号。

## 7. 用户反馈摘要
由于今日无活跃的 Issue 评论，暂无直接的用户反馈可提取。从近期更新侧重于“本地部署提示可关闭”和“UI 间距对齐”推测，维护者正在积极消化早期关于 DevTools 视觉体验与本地开发环境干扰的隐性反馈。

## 8. 待处理积压
基于今日数据切片，未见长期未响应的阻塞性 Issue 或停滞的 PR。但需提醒维护者关注：
- 随 `@openuidev/cli@0.4.0` 的结构重构发布，需留意社区开发者升级后是否存在路径引用或自定义插件兼容性异常的反馈，建议在后续 README 或 Changelog 中补充架构变更说明。

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render 项目日报 - 2026-09-20

## 1. 今日速览
项目今日整体活跃度较低，未观测到新开 Issue 或版本发布。唯一动态为社区开发者提交的一项核心修复 PR，旨在解决 `flattenToPointers` 函数中 JSON Pointer 键名碰撞及特殊字符转义问题。项目目前处于平稳维护期，核心功能迭代暂缓，社区今日贡献主要聚焦于底层稳定性与边界用例修复。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日无已合并或关闭的 PR，项目整体进展平稳。目前有 1 条待合并的修复 PR 正在审查中：
- [PR #345](https://redirect.github.com/vercel-labs/json-render/pull/345) `fix(core): escape JSON Pointer keys in flattenToPointers`：该 PR 修复了核心路径扁平化逻辑中的严重缺陷。若被合并，将解决包含特殊字符（`/` 和 `~`）的键名在解析时导致的路径碰撞与读写不一致问题，进而修复 DevTools 状态面板中的内联编辑失效隐患。

## 4. 社区热点
本日社区无明显热点讨论。唯一活跃的 PR [PR #345](https://redirect.github.com/vercel-labs/json-render/pull/345) 暂无评论与点赞，但其所涉及的 DevTools 状态展示与编辑问题是前端状态管理库常见的开发者体验痛点，精准击中了底层 API 规范（RFC 6901 JSON Pointer）在复杂对象结构下的实现盲区，值得维护者重点关注。

## 5. Bug 与稳定性
- **[中高] JSON Pointer 键名碰撞与特殊字符解析错误**：当对象键名包含 `/` 或 `~` 时，`flattenToPointers` 产生的路径无法通过 `store.get` 正确回读；且存在同名键覆盖异名键的严重逻辑漏洞（如 `{"a/b": 1}` 与 `{a: {b: 2}}` 扁平化后均指向 `"/a/b"` 导致前者丢失）。此缺陷直接影响 DevTools 状态面板的内联编辑功能，可能导致开发者误写数据或状态项被隐藏。
  - 状态：**已有修复 PR** -> [PR #345](https://redirect.github.com/vercel-labs/json-render/pull/345)

## 6. 功能请求与路线图信号
本日无新增功能请求，无法从中提取明确的路线图信号。

## 7. 用户反馈摘要
今日无直接的用户 Issue 反馈。但从 [PR #345](https://redirect.github.com/vercel-labs/json-render/pull/345) 的描述可间接推断：开发者在利用 DevTools 调试复杂嵌套状态（键名包含路径分隔符或转义字符）时遭遇了数据丢失或修改错位的问题，反映出底层 `flattenToPointers` API 在边缘用例下与 JSON Pointer 规范的偏离，以及对上层 DevTools 可靠性的直接影响。

## 8. 待处理积压
目前存在 1 条待审查的 PR，提醒维护者关注：
- [PR #345](https://redirect.github.com/vercel-labs/json-render/pull/345)：核心转义修复，涉及 RFC 6901 规范对 `~` 和 `/` 的转义要求，需维护者尽快 Review 以恢复 DevTools 在复杂 Key 场景下的稳定性，并验证该修复对现有 `store.get` 及内联编辑逻辑的副作用。

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报 (2026-09-20)

## 1. 今日速览
CopilotKit 今日整体保持高度活跃，过去 24 小时内共有 18 个 PR 更新（其中 11 个已合并/关闭），同时处理了 2 个 Issue 更新。项目当前处于密集的缺陷修复与架构重构期，重点发力方向包括：Spring AI 与 LlamaIndex 展示用例的批量修复、多框架核心稳定性的提升，以及一个高危自托管安全漏洞的闭环。今日无新版本发布，但大量待合并的架构级 PR 预示着下一次版本更新将包含重要的跨框架复用与稳定性改进。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日合并/关闭的 PR 显著提升了项目 Showcase 的可用性及核心组件的稳定性，具体进展如下：
*   **Showcase 演示矩阵批量修复**：贡献者 `jpr5` 集中关闭了 7 个 Showcase 修复 PR，彻底解决了 Spring AI 和 LlamaIndex 演示中的停滞与显示错误。包括：标记 Spring AI 流式状态为不支持 ([#7308](https://redirect.github.com/CopilotKit/CopilotKit/pull/7308))、修复规划器状态与有界错误 ([#7307](https://redirect.github.com/CopilotKit/CopilotKit/pull/7307))、纠正天气单位与叙述 ([#7306](https://redirect.github.com/CopilotKit/CopilotKit/pull/7306))、保留 MCP 与混合工具调用 ([#7305](https://redirect.github.com/CopilotKit/CopilotKit/pull/7305))、恢复声明式销售演示 ([#7304](https://redirect.github.com/CopilotKit/CopilotKit/pull/7304))、渲染无头收入图表 ([#7303](https://redirect.github.com/CopilotKit/CopilotKit/pull/7303))，以及完成 LlamaIndex 自定义工具轮次 ([#7301](https://redirect.github.com/CopilotKit/CopilotKit/pull/7301)) 和无头工具流 ([#7300](https://redirect.github.com/CopilotKit/CopilotKit/pull/7300))。
*   **框架核心与工具修复**：Vue 修复了作用域插槽监听器在状态转换后丢失的缺陷 ([#7188](https://redirect.github.com/CopilotKit/CopilotKit/pull/7188))；Web Inspector 增加了 Intelligence 访问入口 ([#7194](https://redirect.github.com/CopilotKit/CopilotKit/pull/7194))；文档新增了 Jev 生成式 UI 食谱 ([#7302](https://redirect.github.com/CopilotKit/CopilotKit/pull/7302))。

## 4. 社区热点
*   [Issue #7198](https://redirect.github.com/CopilotKit/CopilotKit/issues/7198) (6 comments)：**默认内存运行器存在未授权跨线程读取和全局擦除漏洞**。在多用户自托管部署中，该缺陷被证实可导致跨方对话内容泄露（高危）。该 Issue 引起了社区对自托管鉴权默认值的强烈关注，目前已关闭，说明官方已迅速响应并处理。
*   [Issue #3861](https://redirect.github.com/CopilotKit/CopilotKit/issues/3861) (3 comments)：**子代理消息泄露至前端**。使用 LangGraph 时，`MessagesSnapshotEvent` 将内部 Agent 间通信的 `ToolMessage` 暴露给了前端 UI。该问题反映了用户在构建复杂 Multi-Agent 架构时对消息元数据隔离的强烈诉求。

## 5. Bug 与稳定性
按严重程度排列今日报告或处理的 Bug：
1.  **高危 - 自托管越权读取**：默认 in-memory runner 缺乏线程级鉴权，导致跨用户数据泄露 ([Issue #7198](https://redirect.github.com/CopilotKit/CopilotKit/issues/7198))。**状态：已关闭**。
2.  **中危 - 前端消息泄露**：子代理内部工具消息突破 `emit-messages` 元数据限制，污染前端 UI ([Issue #3861](https://redirect.github.com/CopilotKit/CopilotKit/issues/3861))。**状态：Open，暂无 Fix PR**。
3.  **低危 - Vue 监听器失效**：Vue 组件在 `idle → running` 切换时，静态声明的 `@stop` 监听器丢失 ([PR #7188](https://redirect.github.com/CopilotKit/CopilotKit/pull/7188))。**状态：已通过 PR 修复并关闭**。
4.  **低危 - React 插槽类型过窄**：Input 和 Header 插槽类型限制过严，拒绝普通组件传入 ([PR #7170](https://redirect.github.com/CopilotKit/CopilotKit/pull/7170))。**状态：Fix PR 已提交，待合并**。

## 6. 功能请求与路线图信号
结合今日活跃的 Open PR，可洞察项目近期的演进路线：
*   **跨框架架构重构**：[PR #7272](https://redirect.github.com/CopilotKit/CopilotKit/pull/7272) 将附件构造与富 UI 事件转换逻辑下沉至 `@copilotkit/shared`，以在 React/Angular/Vue 间复用。这释放出强烈信号：项目正致力于消除多端实现差异，向统一核心架构演进。
*   **运行时容错与重连增强**：[PR #6891](https://redirect.github.com/CopilotKit/CopilotKit/pull/6891) 修复了中断线程在事件丢失或重连后永久不可用的问题。这表明 CopilotKit 正在加强底层通信在弱网环境下的韧性，属于下一版本的关键稳定性基石。
*   **历史消息管理规范化**：[PR #6898](https://redirect.github.com/CopilotKit/CopilotKit/pull/6898) 提供了面向自管历史 Agent 的修剪配方，旨在解决长达 18 个月的历史消息重复顽疾，可能成为后续版本文档或默认行为的最佳实践。

## 7. 用户反馈摘要
*   **自托管安全隔离痛点**：从 #7198 的反馈提炼，自托管用户对多线程/多租户环境下的数据隔离极度敏感。官方文档虽声明将鉴权交由应用层，但默认运行器未设防导致了实际部署中的严重隐患，用户期望框架能提供更安全的默认配置。
*   **复杂 Agent 流控的无力感**：#3861 暴露出用户在编排子代理时，缺乏对消息流向的精细控制权。内部系统提示和工具调用频繁“溢出”到终端用户界面，破坏了用户体验的封装性。

## 8. 待处理积压
以下长期悬而未决的重要 PR/Issue 需维护者优先关注：
*   [PR #6856](https://redirect.github.com/CopilotKit/CopilotKit/pull/6856) (已开启 18 天)：修复发布作用域相互冻结版本的问题。该问题阻塞了 `@copilotkit/angular` 的正常发布流，是工具链级别的严重阻碍，需尽快 Review 合并。
*   [PR #6891](https://redirect.github.com/CopilotKit/CopilotKit/pull/6891) (已开启 16 天)：修复线程中断后永久失效缺陷。影响跨框架核心运行时稳定性，建议排期合并。
*   [Issue #3861](https://redirect.github.com/CopilotKit/CopilotKit/issues/3861) (已开启超 5 个月)：子代理消息泄露至前端。该长期 Bug 严重影响了 LangGraph 等复杂场景的生产可用性，亟需架构层面的修复方案。

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*