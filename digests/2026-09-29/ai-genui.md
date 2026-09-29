# 生成式 UI 生态日报 2026-09-29

> Issues: 39 | PRs: 143 | 覆盖项目: 4 个 | 生成时间: 2026-09-29 04:55 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

以下是基于 2026-09-29 各大生成式 UI 项目动态的横向对比分析报告：

### 1. 生态全景
当前生成式 UI 生态正处于从“基础可用”向“企业级深度适配”跨越的关键拐点。核心项目均在大力推进多端渲染器（Web、移动端、PDF）的统一规范与底层重构，以解决复杂场景下的一致性痛点。同时，AI 智能体通信协议（如 AG-UI、MCP）的深度集成成为共识，标志着生成式 UI 正在与 Agent 工具链无缝融合。然而，随着应用场景复杂化，长对话性能瓶颈、系统级输入法兼容性及跨端状态同步等工程难题正集中显现，考验着各项目的底层基建能力。

### 2. 各项目活跃度对比
| 项目名称 | Issues 更新 | PR 更新 | 合并/关闭数 | 版本发布 | 破坏性变更 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **a2ui** | 26 | 50 | 21 | 2 (Python SDK) | 是 (模块路径与验证接口迁移) |
| **OpenUI** | 未明确 | 16 | 8 | 0 (有预备 PR) | 无 |
| **json-render** | 0 | 2 | 0 | 0 | 无 |
| **CopilotKit** | 12 | 75 | 34 | 1 (v1.75.0) | 无 |

### 3. 共同关注的功能方向
* **跨端渲染一致性与多端适配**：多个项目在着力解决 UI 在不同终端的表现差异。**a2ui** 重构了 Lit/React/Angular 的 v1.0 渲染入口，并着力修复 Dart/Flutter 端的诸多边界 Bug；**json-render** 修复了 `react-pdf` 与 `react` 在复杂条件渲染下的逻辑分歧；**CopilotKit** 则在清理 Angular 端的旧渲染器，转向原生目录渲染。
* **AI 协议与 Agent 工具链融合**：底层与 AI 的通信机制正在标准化。**CopilotKit** 深化 AG-UI 协议并修复断线重连逻辑；**json-render** 准备原生 WebMCP 迁移，以降低大模型与 JSON 驱动 UI 的对接门槛；**a2ui** 则在推进实验性推理格式的基准测试。
* **前端输入与交互体验打磨**：系统级输入交互成为共同痛点。**OpenUI** 修复了 IME 输入法延迟和 Windows 语音输入导致的文本重复问题；**CopilotKit** 社区热烈讨论并请求支持 `@` 上下文引用功能，以精准控制 Agent 上下文。

### 4. 差异化定位分析
* **a2ui**：**规范制定者与多端基建驱动者**。强标准导向（冲刺 v1.0 规范），注重 Python SDK 底层与多框架（含 Flutter/Dart）的深度兼容，目标用户是需要在复杂边缘场景下进行多端统一渲染的底层架构团队。
* **OpenUI**：**企业级 DSL 与数据可视化探索者**。侧重于通过 DSL 生成结构化构件（如图表、财报对比表格），目前正重构前端图表库（D3 替代 Recharts），目标用户是构建复杂企业级 AI 仪表盘和重度依赖数据契约的开发者。
* **json-render**：**轻量级 JSON 驱动渲染器**。聚焦于 JSON Schema 到 UI 的直接映射及跨端（Web/PDF）一致性，目前处于 MCP 适配的酝酿期，适合需要轻量、高一致性结构化渲染的场景。
* **CopilotKit**：**全栈 AI 助手 UI 框架**。聚焦于 Chat UI 及 Agent 状态管理，强调“可嵌入式”（如 Popup/Sidebar），目标用户是希望在前端应用中快速集成具备多模态、上下文感知能力的 AI 副驾驶的全栈开发者。

### 5. 社区热度与成熟度
* **快速迭代与高活跃期**：**CopilotKit**（75 PR, 34 合并）与 **a2ui**（50 PR, 26 Issues）处于极高强度的迭代期，分别聚焦于 Chat UI 大重构和 v1.0 规范铺设，表明它们在快速抢占市场但同时面临边跑边修引擎的挑战。
* **健康扩展与功能深化期**：**OpenUI** 活跃度高且稳步推进，吸引了外部模型平台主动寻求集成，显示出良好的生态吸引力。
* **低位酝酿与架构审查期**：**json-render** 活跃度最低，无新 Issue 与合并，处于底层架构（MCP）迁移的审阅阶段，成熟度较高但社区互动偏冷。

### 6. 值得关注的趋势信号
* **长对话与复杂状态引发前端性能危机**：CopilotKit 暴露的 Vue 端长对话界面冻结（占 84% 主线程）及虚拟列表异常上跳问题，是生成式 UI 领域的预警信号。**建议开发者**：在评估 Gen UI 框架时，不能仅看 Demo 效果，必须将“万级 Token 流式渲染性能”和“虚拟化列表状态管理”作为核心压测指标。
* **确定性与一致性成为深度用户底线**：OpenUI 用户对流式与最终态解析不一致的焦虑，以及 json-render 跨端渲染过滤失效，表明开发者对 AI 生成 UI 的“不可控性”容忍度正在降低。**建议开发者**：优先选择提供明确验证接口（如 a2ui 的 `A2uiCatalog.validate_components`）和解析行为一致性的框架。
* **AI 界面正向“可嵌入式仪表盘”演进**：OpenUI 暴露受控 React 渲染器，CopilotKit 专注可嵌入 Popup/Sidebar 重构。**参考价值**：未来 AI UI 将不再局限于独立聊天框，而是作为细粒度控件深度寄生在宿主业务系统中，开发者需关注框架的“宿主环境控制权让渡”能力。

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目动态日报 (2026-09-29)

## 1. 今日速览
a2ui 项目今日维持高活跃度，过去 24 小时内共有 50 个 PR 更新与 26 个 Issue 更新，并发布了 2 个包含破坏性变更的 Python SDK 新版本。项目当前正处于向 v1.0 规范迈进的关键阶段，多个核心渲染器（Lit、React、Angular）的 v1.0 入口点及基础目录支持正在密集重构与合并。同时，社区对 genui (Dart/Flutter) 组件的边界条件和无障碍访问提交了密集的 Bug 报告，反映出实际使用场景的深化。

## 2. 版本发布
今日发布了 2 个 Python 核心包的新版本，均包含**破坏性变更**，升级时需注意迁移：

- **a2ui-core v0.2.0** ([Release 链接](https://github.com/a2ui-project/a2ui/releases/tag/python/a2ui-core/v0.2.0))
  - **破坏性变更**: 模块路径与验证接口发生迁移。目前对重命名的公共模块路径提供了弃用垫片，导入时会触发 `DeprecationWarning` 并提示新路径。**注意**：这些垫片将在 `v0.3.0` 中被彻底移除。
- **a2ui-agent-sdk v0.7.0** ([Release 链接](https://github.com/a2ui-project/a2ui/releases/tag/python/a2ui-agent-sdk/v0.7.0))
  - **破坏性变更**: 移除了 `a2ui.validation.*` 和 `a2ui.schema.validator` 验证模块。开发者需改用 `A2uiCatalog.validate_components` 进行组件树验证。
  - **破坏性变更**: `A2uiCatalog.validator` 的返回值变更为单一目录的 `PayloadValidator` 实例（位于 `a2ui.core.validation`）。

## 3. 项目进展
今日项目在 v1.0 规范支持与底层工具链建设上取得重大进展，共关闭/合并 21 个 PR：
- **v1.0 渲染器生态铺设**：重新发起了针对 v1.0 规范的渲染器支持 PR Stack，目前新的 PR 已全部开启并处于待合并状态，包括：web_core v1.0 基础目录 Custom Elements ([#2859](https://redirect.github.com/a2ui-project/a2ui/pull/2859))、Lit v1.0 入口点 ([#2860](https://redirect.github.com/a2ui-project/a2ui/pull/2860))、React v1.0 入口点 ([#2861](https://redirect.github.com/a2ui-project/a2ui/pull/2861)) 及 Angular v1.0 入口点 ([#2862](https://redirect.github.com/a2ui-project/a2ui/pull/2862))。这标志着 A2UI 在多端统一渲染上完成了底层闭环。
- **底层兼容性修复**：合并了降低 Dart SDK 基线的 PR ([#2819](https://redirect.github.com/a2ui-project/a2ui/pull/2819))，使 `a2ui_core` 能够支持 Dart 3.5+ / Flutter 3.24+，大幅拓宽了 Flutter 开发者的兼容性范围。
- **实验性推理格式推进**：发起了针对实验性 "Vertical 推理格式" 的评估套件与基准测试 PR ([#2867](https://redirect.github.com/a2ui-project/a2ui/pull/2867))，旨在对比边缘模型 (Gemma 4 E2B) 与云端模型在 Vertical 格式与基线 Express 格式下的推理表现。

## 4. 社区热点
- **React 0.9.1 打包样式丢失问题** ([Issue #1307](https://redirect.github.com/a2ui-project/a2ui/issues/1307))：获得 9 条评论，是今日互动最多的 Issue。从 npm tarball 安装的包中，CSS-module 类名引用全空，导致核心组件无样式。这直接影响了前端开发者的开箱体验，目前已有针对 Closure 优化的修复 PR ([#2869](https://redirect.github.com/a2ui-project/a2ui/pull/2869)) 提交。
- **架构提案：统一目录转换与消息翻译** ([Issue #2865](https://redirect.github.com/a2ui-project/a2ui/issues/2865))：由核心成员 jacobsimionato 提出，旨在通过 `CatalogMessageTransformer` 解决 LLM 生成的高级抽象 UI 与不同终端渲染器（如特殊网站、Slack、手表应用）之间的适配问题，引发了关于服务端多渲染器目录转换的架构讨论。
- **genui (Dart/Flutter) 缺陷集中爆发**：用户 Jungliiana 在今日密集提交了 10 个关于 genui 的 Bug（如 #2827 到 #2836），详细指出了 Widget 溢出、本地化缺失、状态捕获陈旧等问题，表明 genui 正在被深度用于复杂场景，但也暴露出其在边缘条件下的脆弱性。

## 5. Bug 与稳定性
今日报告的关键 Bug 及修复状态（按严重程度排序）：
- **P1 / 致命级**:
  - [Issue #1307](https://redirect.github.com/a2ui-project/a2ui/issues/1307): `@a2ui/react@0.9.1` 发布的 bundle 丢失所有 CSS 样式。**修复进行中**: [PR #2869](https://redirect.github.com/a2ui-project/a2ui/pull/2869) 尝试通过 Closure `@nocollapse` 保留静态样式。
  - [Issue #2854](https://redirect.github.com/a2ui-project/a2ui/issues/2854): genui 的邮箱校验正则表达式错误，导致拒绝所有真实邮箱地址。
  - *(已关闭)* [Issue #2622](https://redirect.github.com/a2ui-project/a2ui/issues/2622): Python DataModel 未通过 37 个共享数据模型一致性测试中的 7 个，今日已确认修复并关闭。
- **P2 / 高优先级**:
  - [Issue #2853](https://redirect.github.com/a2ui-project/a2ui/issues/2853): genui 的验证检查从不失败，允许用户留空必填字段并报告为有效。
  - [Issue #2837](https://redirect.github.com/a2ui-project/a2ui/issues/2837): web_core 将 `functionCall` 动作作为 `onAction` 事件发出，而没有在本地执行函数。**修复进行中**: [PR #2846](https://redirect.github.com/a2ui-project/a2ui/pull/2846) 已在 Dart 客户端修复本地执行逻辑。
  - [Issue #2828](https://redirect.github.com/a2ui-project/a2ui/issues/2828): Modal 组件在 `showModalBottomSheet` 中捕获了陈旧的 Surface 状态，触发器卸载时会导致崩溃。
- **P3 / 一般级**:
  - 包含多个由 Jungliiana 报告的 genui UI 适配问题，如在 2.0x 无障碍文本缩放下的 `RenderFlex` 垂直溢出 ([Issue #2833](https://redirect.github.com/a2ui-project/a2ui/issues/2833))、`DateTimeInput` 占位符硬编码为英文 ([Issue #2835](https://redirect.github.com/a2ui-project/a2ui/issues/2835)) 等。

## 6. 功能请求与路线图信号
- **标准 JSON Schema 类型替换** ([Issue #2822](https://redirect.github.com/a2ui-project/a2ui/issues/2822)): 提

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

以下是 OpenUI 项目 2026-09-29 的动态日报：

### 1. 今日速览
OpenUI 项目在过去 24 小时内保持高度活跃，虽然没有发布新版本，但代码库迎来了 16 个 PR 的更新（其中 8 个已合并/关闭，8 个待合并）。项目重点推进了前端图表库的底层重构、Cookbook 示例的丰富以及输入法/语音输入的兼容性修复。核心开发者 vishxrad 和 AbhinRustagi 主导了今日的代码合并与功能迭代，成功关闭了一个存在已久的核心解析器 Bug（Issue #1127）。整体来看，项目正处于功能横向扩展（如新增 D3 图表、丰富企业级用例）与前端交互稳定性纵向打磨并重的健康阶段。

### 2. 版本发布
无。今日无新版本发布。但有一个由 Changesets 自动生成的版本发布准备 PR（[#1257](https://redirect.github.com/thesysdev/openui/pull/1257)）处于开启状态，等待维护者在准备好后合并以发布到 npm。

### 3. 项目进展
今日共有 8 个 PR 被合并或关闭，项目在以下方面取得了实质性进展：
*   **核心解析器一致性修复**：PR [#1140](https://redirect.github.com/thesysdev/openui/pull/1140) 修复了流式解析器在处理重复语句 ID 时的行为，使其与批量解析器保持一致（最后一次完整定义生效），成功解决了 Issue #1127。
*   **企业级示例补充**：合并了多个 Cookbook 相关 PR，包括文档比较和预订助手（PR [#1250](https://redirect.github.com/thesysdev/openui/pull/1250)、[#1254](https://redirect.github.com/thesysdev/openui/pull/1254)、[#1253](https://redirect.github.com/thesysdev/openui/pull/1253)），以及将对话分析迁移至 Chat Completions API（PR [#1256](https://redirect.github.com/thesysdev/openui/pull/1256)）。
*   **前端样式与状态修复**：PR [#1252](https://redirect.github.com/thesysdev/openui/pull/1252) 统一了 React UI CSS 的导入路径；PR [#1228](https://redirect.github.com/thesysdev/openui/pull/1228) 修复了语音输入延迟导致已发送草稿恢复的 Bug；PR [#1247](https://redirect.github.com/thesysdev/openui/pull/1247) 修复了网站头部 GitHub Star 数不显示的问题。

### 4. 社区热点
今日社区活跃主要体现在功能演进与外部集成意向：
*   **外部 Provider 主动寻求集成**：来自 AIML API 的开发者提交了 PR [#1238](https://redirect.github.com/thesysdev/openui/pull/1238)，希望将其覆盖 1000+ 模型的 API 作为 OpenUI 的验证提供者。这反映出 OpenUI 作为 AI 智能体界面的生态吸引力正在上升，外部模型平台有较强的接入诉求。
*   **底层图表库重构讨论**：PR [#1248](https://redirect.github.com/thesysdev/openui/pull/1248) 提出在 React UI 中引入 D3Charts 与现有的 Recharts 并存。作为替换 Recharts 的第一步，此举可能涉及后续大量组件的迁移与数据契约的统一，是前端架构演进的重要信号。

### 5. Bug 与稳定性
今日修复了多个影响交互体验和核心逻辑的 Bug，按严重程度排列如下：
*   **[高] 核心解析器逻辑分歧**：Issue [#1127](https://redirect.github.com/thesysdev/openui/pull/1140) 指出 `createStreamParser()` 和 `parse()` 在处理重复定义的语句 ID 时结果不一致（流式表现为"首定义生效"，批量表现为"末定义生效"）。**状态：已修复** (PR [#1140](https://redirect.github.com/thesysdev/openui/pull/1140))。
*   **[中] Windows 语音输入导致文本重复**：PR [#1251](https://redirect.github.com/thesysdev/openui/pull/1251) 指出使用 Win+H 语音输入并中途按回车或发送时，会导致草稿文本重复（如 "welcome to Welcome to my house"）或吞没后续语音。**状态：已有修复 PR 待合并**。
*   **[中] IME 输入法延迟事件导致草稿恢复**：PR [#1228](https://redirect.github.com/thesysdev/openui/pull/1228) 修复了 IME 组合输入的延迟事件在消息发送后重新填回当前草稿的问题。**状态：已修复并关闭**。
*   **[低] 网站 Header Star 数量丢失**：PR [#1247](https://redirect.github.com/thesysdev/openui/pull/1247) 修复了因 GitHub API 限流或浏览器直调导致的前端 Star 数不显示问题，改为同源 CDN 缓存代理。**状态：已修复并关闭**。

### 6. 功能请求与路线图信号
结合今日的开闭 PR，可以提取出以下路线图信号：
*   **会话存储架构优化**：PR [#1258](https://redirect.github.com/thesysdev/openui/pull/1258) 正在将所有 Cookbook 的线程列表统一接入 Gateway Conversations API 进行存储。结合此前将分析示例从 Responses API 迁至 Chat Completions API 的动作，项目正在明确划分“云端会话存储”与“本地内存会话”的架构边界，这将是下一版本的重点。
*   **React 渲染器控制能力增强**：PR [#1242](https://redirect.github.com/thesysdev/openui/pull/1242) 暴露了受控的 React 渲染器，允许 Dashboard 宿主在渲染内容之外显示查询活动、错误和刷新控件。这表明 OpenUI 正在向“可嵌入式 AI 仪表盘”方向演进，提供更细粒度的宿主控制权。

### 7. 用户反馈摘要
从近期的 Issue 和 PR 描述中，可提炼出真实用户痛点：
*   **复杂 DSL 编写的确定性焦虑**：用户 seshuthota 反馈在编写包含重复 ID 的 OpenUI Lang 程序时，流式预览和最终结果不一致。这表明深度用户在使用 DSL 开发复杂界面时，极度依赖解析器行为的确定性，任何流式与最终态的分歧都会破坏开发信任。
*   **系统级输入法兼容性痛点**：多位用户（及开发者）受困于操作系统自带的语音输入（Win+H）和 IME 输入法在 React Composer 中的表现。典型的痛点包括“文本幽灵重复”、“发送后文字闪回”等，这是前端 AI 输入框普遍面临的挑战，OpenUI 正在着力解决这一体验瑕疵。
*   **企业级场景的深度诉求**：从新合并的 Cookbook 看，用户群体不仅在做简单的 Chatbot，还在尝试对比 NVIDIA/AMD 等公司的 10-K 财报、通过对话预订行程。这些高级场景要求 AI 能够返回带页面引用的表格、自适应表单等结构化构件。

### 8. 待处理积压
以下重要 PR 创建数日但尚未合并，需要维护者关注：
*   **PR [#1242](https://redirect.github.com/thesysdev/openui/pull/1242)**：`feat(react): add renderer controls and preserve dashboard artifact identity`。该 PR 涉及暴露底层 React 渲染器控件及保留仪表板 Artifact 身份，架构改动较深，自 09-25 创建以来处于 Open 状态，需进行代码审查。
*   **PR [#1244](https://github.com

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render 项目动态日报 (2026-09-29)

## 1. 今日速览
json-render 项目今日整体活跃度处于低位平稳状态，未发生新 Issue 交互与代码合并。过去 24 小时内，项目仅有 2 个处于 Open 状态的 Pull Request 更新，无新版本发布。整体来看，项目当前正处于功能迭代的酝酿期，核心开发者与社区贡献者正聚焦于底层架构（MCP 适配）与跨端渲染一致性的代码审阅阶段，主分支代码暂未向前推进。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日无已合并或已关闭的 PR。主分支代码无实质性向前推进，当前的 2 个待合并 PR 正处于审查阶段，尚未转化为项目的实际产出。

## 4. 社区热点
由于今日无新开 Issue 且现有 PR 均无评论与点赞（👍为0），社区讨论热度较低。相对而言，涉及架构演进的 PR 具备较高的潜在关注度：
*   **[PR #363](https://redirect.github.com/vercel-labs/json-render/pull/363) `docs: prepare native WebMCP migration`**：该 PR 涉及向原生 WebMCP 迁移的文档及底层适配准备，标志着项目正在积极拥抱 AI 智能体领域的 MCP（Model Context Protocol）标准，这是项目未来提升与 AI 工具链互操作性的重要信号。

## 5. Bug 与稳定性
今日报告了 1 项跨端渲染逻辑缺陷，已有对应修复 PR：
*   **[中等] `@json-render/react-pdf` 中 repeat 与 visible 条件联合使用时过滤逻辑失效**：在 `react-pdf` 渲染器中，当使用 `repeat` 循环并通过 `$item`/`$index` 设置 `visible` 条件时，walker 未能正确过滤列表项，导致预期隐藏的元素依然渲染。该 Bug 暴露了 `@json-render/react` 与 `@json-render/react-pdf` 在复杂条件渲染下的一致性问题。
    *   **状态**：已有修复 PR → [PR #364](https://redirect.github.com/vercel-labs/json-render/pull/364)

## 6. 功能请求与路线图信号
今日无显性的新功能请求 Issue，但从提交的 PR 动态中可提取出明确的路线图信号：
*   **原生 WebMCP 适配**：[PR #363](https://redirect.github.com/vercel-labs/json-render/pull/363) 引入了原生的 `/api/mcp` 适配器及发现/搜索检查逻辑。这暗示项目正在将 AI 智能体交互能力内置到渲染链路中，未来极有可能作为核心特性纳入下个大版本，显著降低 JSON 驱动 UI 与大模型对接的门槛。

## 7. 用户反馈摘要
过去 24 小时内无用户在 Issue 区留下评论。但从 [PR #364](https://redirect.github.com/vercel-labs/json-render/pull/364) 的背景可侧面推断：已有用户在深度使用 JSON Schema 驱动复杂 UI（特别是结合 `repeat` 和 `visible` 进行动态列表过滤的场景），且在实际生产中遭遇了 Web 端与 PDF 端渲染结果不一致的痛点，说明项目在多端渲染一致性方面仍存在优化空间。

## 8. 待处理积压
当前有 2 个待合并 PR 需要维护团队关注与推进，避免流转周期过长：
*   **[PR #363](https://redirect.github.com/vercel-labs/json-render/pull/363)**：已创建 4 天，涉及底层文档与 MCP 架构迁移，作为后续 AI 能力演进的基线，建议优先安排 Review。
*   **[PR #364](https://redirect.github.com/vercel-labs/json-render/pull/364)**：针对 `react-pdf` 渲染逻辑的 Bug 修复，直接影响部分用户的动态列表渲染可用性，建议尽快完成代码审查并合入以修复稳定性问题。

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报 (2026-09-29)

## 1. 今日速览
CopilotKit 今日保持高度活跃，24小时内 PR 更新量高达 75 条（其中 34 条已合并/关闭），项目正处于 **Chat UI 大规模重构与多端适配** 的密集交付期。Issues 活跃度为 12 条，但 0 条关闭，显示社区反馈踊跃但维护者关闭 Issue 的速度稍显滞后。项目发布了 [v1.75.0](https://github.com/CopilotKit/CopilotKit/releases/tag/v1.75.0)，聚焦于消息视图的扩展能力与连接稳定性修复。整体来看，项目在“AG-UI 协议深化”和“前端体验打磨”双线上强力推进，但长对话场景下的性能瓶颈开始显现。

## 2. 版本发布
**[v1.75.0](https://github.com/CopilotKit/CopilotKit/releases/tag/v1.75.0)** 已发布，无破坏性变更，建议平滑升级：
- **新功能**：`CopilotChatMessageView` 新增 `transformMessages` 属性 ([#7488](https://redirect.github.com/CopilotKit/CopilotKit/pull/7488))，允许开发者在渲染前对消息进行自定义转换，极大增强了 UI 层的数据操控灵活性。
- **修复**：修复控制帧重复旧检查点时重连游标丢失的问题 ([#7490](https://redirect.github.com/CopilotKit/CopilotKit/pull/7490))，提升了断线重连场景的稳定性。
- **修复**：在单路由模式下强制执行 `basePath` 段边界 ([#7341](https://redirect.github.com/CopilotKit/CopilotKit/pull/7341))，修复了路由解析异常的边界情况。

## 3. 项目进展
今日合并/关闭的 34 个 PR 主要推进了以下几个重大进展：
- **Chat UI 设计重构全面落地**：核心开发者 @​tylerslaton 推进了大量设计刷新 PR。今日合并的 [#7482](https://redirect.github.com/CopilotKit/CopilotKit/pull/7482) 确保了整个设计刷新栈的向后兼容性；[#7473](https://redirect.github.com/CopilotKit/CopilotKit/pull/7473) 修复了 Popup/Sidebar 抽屉切换线程失败的问题；[#7472](https://redirect.github.com/CopilotKit/CopilotKit/pull/7472) 修复了 Composer 滚动条与 Markdown 预览未对齐的视觉瑕疵。
- **架构演进与清理**：[#7504](https://redirect.github.com/CopilotKit/CopilotKit/pull/7504) 移除了 Angular 端基于 Lit 的 A2UI 渲染器，全面转向原生 Angular 目录渲染；[#6808](https://redirect.github.com/CopilotKit/CopilotKit/pull/6808) 将 6 个核心示例应用从 v1 API 迁移至 v2，降低了新用户的接入门槛。

## 4. 社区热点
- **[Issue #1962](https://redirect.github.com/CopilotKit/CopilotKit/issues/1962) (👍0, 评论10)**：请求 CopilotChat 支持 `@` 上下文引用（类似 Trae/Cursor）。这是企业级智能助手的高频刚需，用户希望借此精准控制传递给 Agent 的上下文范围，讨论十分热烈。
- **[Issue #2845](https://redirect.github.com/CopilotKit/CopilotKit/issues/2845) (👍0, 评论8)**：`CancellationToken` 导入错误。由于 `@ag-ui/client` 与 `@copilotkit/react-core` 的版本依赖冲突导致，直接阻断了部分用户的正常编译。
- **[Issue #2577](https://redirect.github.com/CopilotKit/CopilotKit/issues/2577) (👍2, 评论8)**：AG-UI 模式下图片上传未转发给 PydanticAI Agent。反映了多模态数据在前端捕获后，未能通过 AG-UI 协议正确穿透到后端 Agent 的痛点。

## 5. Bug 与稳定性
按严重程度排列今日报告的 Bug：
- **严重 (P0)**：[Issue #7507](https://redirect.github.com/CopilotKit/CopilotKit/issues/7507) - Vue 端长对话卡顿严重。`message-after` slot 每行每渲染调用 6 次 `getMeta()` 并深拷贝完整运行状态，占用 84% 主线程时间，导致 12-76 秒的界面冻结。**暂无 Fix PR**。
- **高 (P1)**：[Issue #7494](https://redirect.github.com/CopilotKit/CopilotKit/issues/7494) - v2 长对话发送消息时，虚拟化列表视图会异常上跳 10-20 条消息再回底，体验割裂。**暂无 Fix PR**。
- **中 (P2)**：[Issue #7

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*