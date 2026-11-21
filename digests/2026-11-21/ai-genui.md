# 生成式 UI 生态日报 2026-11-21

> Issues: 22 | PRs: 90 | 覆盖项目: 4 个 | 生成时间: 2026-11-21 06:12 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告

**数据窗口**：2026-11-20 至 2026-11-21 | **覆盖项目**：a2ui、OpenUI、json-render、CopilotKit

---

## 一、生态全景

生成式 UI 生态正从"能生成"迈向"可交付"：头部项目分别处于 1.x 协议稳定化（a2ui）、2.0 大版本冲刺（CopilotKit）与企业协作场景深耕（OpenUI）阶段，行业重心明显从功能演示转向**协议正确性、安全边界与 AI 产出的可信度**。四个项目恰好分布在技术栈的不同层次——协议标准、中间表示、全栈框架、轻量渲染库——互补大于竞争，生态分工初步成形。**MCP Apps 正成为多家项目共同押注的 UI 分发渠道**。与此同时，安全响应滞后与 review 带宽不足（三家活跃项目合计 75 个待合并 PR）是当前生态的共性治理短板。

---

## 二、各项目活跃度对比

| 项目 | Issue 动态 | PR 动态 | 合并吞吐 | 版本发布 | 贡献者 | 总事件 |
|---|---|---|---|---|---|---|
| **a2ui** | 17 条更新（12 新开/活跃，5 关闭） | 50 条更新（8 合并/关闭，**42 待合并**） | 8 个 | 0（发布前整固期） | ≥14，构成多元 | **67** |
| **OpenUI** | 2 新开（0 关闭，均为生态收录请求） | 11 条更新（**0 合并/关闭**，11 待合并） | 0 | 0 | ~5 核心 + 2 外部 | 13 |
| **json-render** | 0 | 0 | 0 | 0 | 0 | 0 |
| **CopilotKit** | 3 条更新（0 关闭） | 29 条更新（7 合并/关闭，22 待合并） | 7 个 | **1（v1.90.0）** | 核心 3+ / 外部 4+ | 32 |

**读数**：a2ui 总活跃度与贡献者广度第一；CopilotKit 合并吞吐与交付节奏最稳（当日唯一发版项目）；OpenUI 呈"高产出、零合并"的冲刺中段形态；json-render 当日静默，无法据此判断。

---

## 三、共同关注的功能方向

### 1. MCP Apps：生成式 UI 的分发渠道（a2ui、CopilotKit）
- **a2ui** 投入最密集：7 个 PR 构成完整工具链——embed/mcp iframe 运行时（#4299）、`a2ui-embed build` 命令（#4300）、应用内 Markdown 渲染（#4334）及 GitHub triage 端到端示例（#4338–#4341），大概率构成下一阶段旗舰能力。
- **CopilotKit** 长线推进 #7760：`ui/request-display-mode` 全屏模式，覆盖 React/Vue/Angular 三端，已持续 42 天。
- 共性诉求：让 agent 生成的 UI 能在 MCP 应用容器中以标准化、安全的方式呈现。

### 2. 安全边界加固（a2ui、CopilotKit）
- **a2ui** #3774：agent 可经嵌套参数绕过 rendererOnly 限制执行函数（P1，悬置 3 周无修复 PR）。
- **CopilotKit** #8269：无鉴权的 probe-thread 清理端点可删除任意线程，12 天后才出现社区修复 PR（#8526）。
- 值得警惕的共性：两家对功能性问题都能快速完成 Issue→修复转化（a2ui 同日闭环两例，CopilotKit 次日出 PR），但**安全类问题的响应系统性滞后**。

### 3. 非标准渲染环境兼容（a2ui、CopilotKit、OpenUI 生态）
- **a2ui**：#4335 请求 React Native/自定义/测试渲染器支持（`A2uiSurface` 与 DOM 耦合）；#3257 指出 SwiftUI 缺少与 Web/Flutter 等价的主题定制入口，文档承诺与实现不一致。
- **CopilotKit**：#8523 Shadow DOM 下 Streamdown 表格控件静默失败。
- **OpenUI 生态**：第三方自发产出 .NET Blazor 渲染器与 MudBlazor 组件库并请求官方收录（#1683）。

### 4. AI 产出的可信度与可观测性（三家活跃项目全覆盖）
- **OpenUI** #1544：`enableProvenance` 溯源——点击任意数字可见公式、查询、结果行与过滤器；#1680 补齐会话归组。
- **CopilotKit**：v1.90.0 框架级遥测与版本上报、#8521 长会话 Trajectory 密封、#8516 保留 provider 完整错误细节。
- **a2ui** #4019：错误报告结构化（附组件 id/type）。

---

## 四、差异化定位分析

| 维度 | a2ui | OpenUI | CopilotKit | json-render |
|---|---|---|---|---|
| **生态层次** | 协议/标准层 | 中间表示 + 应用层 | 全栈框架 + 云服务 | 轻量渲染工具库 |
| **功能侧重** | v1.0 协议正确性、多版本能力协商、15 个 SDK 跨语言一致性、MCP embed 工具链 | Dashboard Agent 智能化、数据溯源、Artifact 协作与组级共享 | 2.0 大版本、Intelligence 网关、遥测、多前端框架 SDK | JSON→UI 渲染原语 |
| **目标用户** | 需要跨平台/跨语言一致 UI 协议的框架与应用团队 | 数据分析与企业团队的终端用户（AI 仪表盘消费方） | 在自有应用中嵌入 AI copilot 的开发者 | 需要轻量渲染能力的开发者 |
| **技术路线** | 规范驱动：ProtocolVersion 门控、能力协商、一致性测试审计（#3842）、决策模型实验栈 | OpenUI Lang 中间表示 + agent 构建循环（先查数据再设计）+ 权限模型 | 框架 + 云网关（版本感知、遥测）+ 边缘运行时扩张 | 工具库路线 |
| **当前阶段** | 1.x 稳定化整固 | 冲刺中段（堆叠 PR 链，0 合并） | 2.0 冲刺（当日唯一发版） | 当日无活动 |

**解读**：四者分别占据协议层、表示层、框架层与工具层，短期直接竞争有限。a2ui 的核心资产是跨 SDK 一致性与规范级变更执行力；OpenUI 的差异化在"数据感知的 UI 生成 + 企业协作闭环"；CopilotKit 凭借云网关、遥测体系与多框架 SDK 形成最深的商业化护城河；json-render 定位最轻、当日无数据。

---

## 五、社区热度与成熟度

**热度排序**：a2ui（67 事件）> CopilotKit（32）> OpenUI（13）> json-render（0）。

- **a2ui — 高活跃、规范级协作能力强，但治理债抬头**。贡献者基础最多元，"同日报障 + 同日修复"两例体现响应链路高效；跨 TS/Python/Swift/Dart 的多 SDK 协同修复（#3061）是典型的规范级变更闭环。风险在于 42 个 PR 积压、两个未闭环 P1（安全 #3774、主干 CI drift #4262），以及大规模目录下的 Python 校验性能劣化（#4314）——后者恰恰说明已有用户跑到生产规模。
- **CopilotKit — 商业化最成熟，交付节奏最稳**。唯一保持版本化发布节奏，外部贡献管线健康（4+ 外部成员独立提交安全/框架修复），且已被外部 AI 审查工具（Tessl）主动扫描，侧面反映行业能见度。短板在 Issue 侧：当日关闭数为 0，安全 Issue 悬置 12 天，分诊节奏落后于 PR 侧吞吐。
- **OpenUI — 核心团队驱动、零 Bug，社区参与停留在生态收录层**。当日 0 合并、0 Bug，稳定性良好；外部信号是 .NET 生态与 agentic IDE 插件的自发采纳，中间表示定位获第三方认可。但社区 docs PR 悬置 4 天、合并队列深度达 3，review 吞吐是明显瓶颈。
- **json-render** — 单日无数据，无法区分稳定维护期与低活跃，建议延长观察窗口。

**成熟度判断**：CopilotKit（商业成熟）> a2ui（协议成熟中）≈ OpenUI（产品成熟中）；三家同处高产出的快速迭代期，且都撞上 review 带宽这同一堵墙。

---

## 六、值得关注的趋势信号

**1. MCP Apps 成为生成式 UI 的分发主战场。** a2ui 以 7 个 PR 构建 embed 工具链并配端到端示例，CopilotKit 长线推进 `ui/request-display-mode`。*开发者参考*：为 agent 配 UI 能力时，应尽早验证目标框架在 MCP 容器内的隔离行为（iframe/sandbox，参见 a2ui #4328）与显示模式协商支持，避免绑定单一嵌入形态。

**2. UI 生成从"指令驱动"转向"数据/决策驱动"。** OpenUI 明确重构为"先决定传达什么、再决定长什么样"，让 agent 在构建中实时调用用户数据工具（#1686/#1678）；a2ui 探索 gated templates 与 prose-to-surface，追求纯文本 agent 零指令获得伴随界面。*开发者参考*：一次性 prompt→UI 的架构正在过时，新架构需为 agent 预留数据工具接口与 UI 决策回路。

**3. 可信与安全成为企业采用门槛，也是选型指标。** 溯源（OpenUI）、遥测与轨迹密封（CopilotKit）、结构化错误（a2ui）都在回应"AI 生成的数字能不能信、错了能不能查"。同时，两家安全响应滞后（3 周 / 12 天）与功能修复的高效形成鲜明反差；CopilotKit #8269 还揭示 showcase 示例代码被直接复用至生产的普遍现象。*开发者参考*：选型时应考察项目的安全修复 SLA 与示例代码的默认安全 posture，而非仅看功能列表。

**4. 多渲染器一致性正成为质量护城河。** a2ui 的 SwiftUI 主题缺口（文档承诺与实现不符）、15 个 SDK 的一致性测试审计，CopilotKit 的 React/Vue/Angular 并行实现漂移（Vue 端 #8512 修复），OpenUI 生态的第三方 Blazor 渲染器，都指向同一问题：**能力在渲染器间的对齐程度**。*开发者参考*：按自身技术栈核查目标框架的渲染器能力矩阵与文档兑现度——文档承诺 ≠ 实现能力。

**5. 嵌入式与边缘场景快速扩张。** Shadow DOM/web component（CopilotKit #8523）、无 DOM 的 SSR/Node 环境（a2ui #3158 回归已修）、Cloudflare Agents（CopilotKit #8351）、iframe sandbox（a2ui #4328）——生成式 UI 正离开"标准浏览器整页"的舒适区。*开发者参考*：将嵌入第三方页面、边缘运行时、SSR 等场景纳入冒烟测试基线；同时留意 OpenUI #1681 组件库迁移这类破坏性变更对下游 import 路径的影响。

---

*数据说明：本报告基于单日窗口的仓库动态，样本量有限；OpenUI 的 PR 评论数据缺失，其社区互动热度可能被低估；json-render 当日无活动，相关结论待更长时间窗口验证。*

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目日报 · 2026-11-21

## 1. 今日速览

过去 24 小时仓库共产生 **67 条动态**（17 条 Issue 更新 + 50 条 PR 更新），其中 12 条 Issue 新开/活跃、5 条关闭，8 个 PR 合并/关闭、42 个待合并，单日活跃度处于高位，至少 14 位独立贡献者有产出。今日主线有三：**web_core v1.0 校验严格化**（两对"同日报障 + 同日修复 PR"）、**@​a2ui/embed 面向 MCP Apps 的完整工具链**（运行时、构建命令、Markdown 渲染及 GitHub triage 示例共 7 个 PR 同步推进）、**实验性决策模型栈**（gated templates、prose-to-surface 升级器）。无新版本发布。需关注的健康度信号：待合并 PR 积压达 42 个，且 main 分支 E2E drift 失败问题（[#4262](https://redirect.github.com/a2ui-project/a2ui/issues/4262)）仍未闭环。

## 2. 版本发布

今日无新版本发布。从关闭项看（Angular 22 迁移、SSR 回归修复、协议协商清理），仓库正处于下一版本发布前的集中整固期。

## 3. 项目进展

过去 24 小时共 8 个 PR 合并/关闭。从今日关闭的 5 个 Issue 可确认以下工作已落地：

- **多版本能力协商清理完成**：[#3061](https://redirect.github.com/a2ui-project/a2ui/issues/3061) 关闭（8 条评论，今日讨论最热烈）。移除废弃配置项 `CapabilitiesOptions.componentEnvelopeRef`，目录格式完全由 `ProtocolVersion` 门控，消除了跨版本能力协商时的 schema 损坏，横跨 TS/Python/Swift/Dart 多 SDK。
- **SSR 导入崩溃回归修复**：[#3158](https://redirect.github.com/a2ui-project/a2ui/issues/3158) 关闭——`@a2ui/react` 0.13.0 在无 `HTMLElement` 的 Node 环境下"import 即崩"的回归已修复。
- **运行时目录注入**：[#3303](https://redirect.github.com/a2ui-project/a2ui/issues/3303) 关闭——`MessageProcessor` 支持构建后添加 catalog，客户端可在运行时注册目录，提升了集成灵活性。
- **Angular 22 迁移完成**：[#3405](https://redirect.github.com/a2ui-project/a2ui/issues/3405) 关闭——`@a2ui/angular` 及全部 Angular 工作区从 ^21.2.5 升级至 Angular 22 稳定版。
- **协议错误路径修复**：[#4194](https://redirect.github.com/a2ui-project/a2ui/issues/4194) 关闭——未知 envelope key 与不支持版本不再共用 `/version` 错误路径，提升协议诊断准确性。

整体看，今日关闭项集中在 **v1.0 协议正确性** 与 **适配层框架现代化**，属于面向 1.x 稳定化的基础工作。

## 4. 社区热点

按评论数与今日活跃度排序：

1. **[#3061](https://redirect.github.com/a2ui-project/a2ui/issues/3061)（8 评论，今日关闭）**——多版本协商 schema 损坏问题，涉及规范（standard catalog specification）与全部核心 SDK 的联动修改，讨论跨 10 月初至今，最终以多语言协同修复收尾，是典型的"规范级"变更闭环。
2. **[#3257](https://redirect.github.com/a2ui-project/a2ui/issues/3257)（5 评论，今日活跃）**——SwiftUI 渲染器缺乏 Basic Catalog 样式定制能力。用户指出 Theming 文档承诺"宿主可定制"，Web 有 CSS 变量、Flutter 读 `ThemeData`，唯独 SwiftUI 无等价机制，**文档承诺与实现不一致**是核心诉求。
3. **[#3085](https://redirect.github.com/a2ui-project/a2ui/issues/3085)（5 评论）**——源于向 Google 内部导入代码时被标记的拼写问题，诉求是在 CI 中增加拼写检查。
4. **[#4262](https://redirect.github.com/a2ui-project/a2ui/issues/4262)（4 评论，今日活跃）**——main 分支 E2E drift CI 失败（commit 1cbef31），社区在跟进后续 run 是否恢复。
5. **[#3842](https://redirect.github.com/a2ui-project/a2ui/issues/3842)（3 评论，今日活跃）**——对全部 15 个 SDK 包的一致性测试跳过/xfail/静默断言绕过的系统审计，是 1.x 质量保障的关键输入。

另有一条隐性"热点流"：josemontespg 的 **@​a2ui/embed 系列**今日 7 个 PR 集中更新（[#4299](https://redirect.github.com/a2ui-project/a2ui/pull/4299)、[#4300](https://redirect.github.com/a2ui-project/a2ui/pull/4300)、[#4334](https://redirect.github.com/a2ui-project/a2ui/pull/4334)、[#4338](https://redirect.github.com/a2ui-project/a2ui/pull/4338)–[#4341](https://redirect.github.com/a2ui-project/a2ui/pull/4341)），是当前投入最密集的开发方向。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 | 修复进展 |
|---|---|---|---|
| P1 | [#4262](https://redirect.github.com/a2ui-project/a2ui/issues/4262) main 分支 E2E drift CI 失败 | Open，今日活跃 | 未见直接 fix PR；[#4350](https://redirect.github.com/a2ui-project/a2ui/pull/4350)（Flutter golden 固定）或为相关整固动作 |
| P1 | [#3774](https://redirect.github.com/a2ui-project/a2ui/issues/3774) agent 可通过嵌套参数执行 rendererOnly 函数（安全相关） | Open，10-30 提出 | **无 fix PR，已 open 三周，建议优先** |
| P1 | [#4314](https://redirect.github.com/a2ui-project/a2ui/issues/4314) Python 校验 schema 每次读取 deep-copy，成本随组件数×目录规模增长 | Open，今日更新 | 未见 fix PR |
| P1 | [#4222](https://redirect.github.com/a2ui-project/a2ui/issues/4222) 文档构建 Python 依赖未固定版本 | Open | 标记 size: small，属低风险卫生问题 |
| 未分级 | [#4346](https://redirect.github.com/a2ui-project/a2ui/issues/4346) / [#4348](https://redirect.github.com/a2ui-project/a2ui/issues/4348) web_core v1.0 校验过松（接受 v0.9 的 `path`/`call` 键、接受字面布尔 condition 与未定义键） | Open，今日新报 | **同日 fix PR：[#4347](https://redirect.github.com/a2ui-project/a2ui/pull/4347)、[#4349](https://redirect.github.com/a2ui-project/a2ui/pull/4349)** |
| 未分级 | [#4328](https://redirect.github.com/a2ui-project/a2ui/issues/4328) sandbox proxy 拒绝 allow-same-origin 外部 frame 的 postMessage | Open，待 triage | — |

已修复关闭：[#3158](https://redirect.github.com/a2ui-project/a2ui/issues/3158)（SSR 导入崩溃）、[#4194](https://redirect.github.com/a2ui-project/a2ui/issues/4194)（错误路径冲突）。

**点评**：retz8 今日对 web_core 校验宽松问题的"报障 + 修复"同日闭环，响应速度突出；但 **#3774（allowedCallers 检查缺陷，可导致越权执行）** 作为 P1 安全相关问题长期未排期，叠加 main 分支 drift 未恢复，构成当前两大稳定性风险点。

## 6. 功能请求与路线图信号

结合 Issue 需求与在途 PR，可识别出清晰的路线图方向：

- **A2UI in MCP Apps（最强信号）**：[#4299](https://redirect.github.com/a2ui-project/a2ui/pull/4299)（embed/mcp iframe 运行时）→ [#4300](https://redirect.github.com/a2ui-project/a2ui/pull/4300)（`a2ui-embed build` 命令）→ [#4334](https://redirect.github.com/a2ui-project/a2ui/pull/4334)（应用内 Markdown 渲染）→ [#4338](https://redirect.github.com/a2ui-project/a2ui/pull/4338)–[#4341](https://redirect.github.com/a2ui-project/a2ui/pull/4341)（GitHub triage 完整示例：数据层/catalog/views/MCP server + e2e）。四个示例 PR 标注 "Prototype, do not merge"，处于 M1 验证阶段，**大概率构成下一阶段的旗舰能力**。
- **决策模型实验栈**：[#4342](https://redirect.github.com/a2ui-project/a2ui/pull/4342)（gated template 求值与剪枝）、[#4344](https://redirect.github.com/a2ui-project/a2ui/pull/4344)（让纯文本 agent 零 A2UI 指令获得伴随界面）、[#4325](https://redirect.github.com/a2ui-project/a2ui/pull/4325)（decision_playground 交互示例），配合 #4320–#4323 的独立内核，形成完整的"无指令 UI 生成"探索线。
- **非 DOM React 渲染器支持**：[#4335](https://redirect.github.com/a2ui-project/a2ui/issues/4335)（今日新报）——React Native、自定义渲染器、测试渲染器场景，尚无在途 PR，预计进入 triage 队列。
- **SwiftUI 主题定制**：[#3257](https://redirect.github.com/a2ui-project/a2ui/issues/3257) 讨论活跃但无 PR，诉求是跨渲染器 API 一致性，属体验对齐类需求。
- **协议 API 现代化**：[#3104](https://redirect.github.com/a2ui-project/a2ui/issues/3104)（以 `ProtocolCapabilities` 接口替代散落 10+ 文件的 `>= 1.0` semver 比较）已 assigned-for-triage；[#4296](https://redirect.github.com/a2ui-project/a2ui/pull/4296)（移除函数调用嵌套 5 层硬限制，统一收敛到全局深度 50）横跨全部 5 个 SDK。
- Angular 22 迁移已落地，下一版本适配层将基于最新框架基线发布。

## 7. 用户反馈摘要

从 Issue 正文与评论提炼的真实用户痛点：

- **SSR/Node 用户**（zoharbabin，[#3158](https://redirect.github.com/a2ui-project/a2ui/issues/3158)）：0.13.0 升级后"import 即崩"，属典型升级阻断型回归；虽已修复，但反映发布前缺少 Node/SSR 冒烟测试。
- **SwiftUI 开发者**（BBC6BAE9，[#3257](https://redirect.github.com/a2ui-project/a2ui/issues/3257)）：官方文档承诺与实现能力不匹配带来挫败感，希望获得与 Web/Flutter 等价的样式定制入口。
- **大规模目录用户**（konstagap，[#4314](https://redirect.github.com/a2ui-project/a2ui/issues/4314)）：Python 端校验成本随规模劣化——说明已有用户在真实生产规模下运行，性能开始成为采用障碍。
- **企业评估信号**（ditman，[#3085](https://redirect.github.com/a2ui-project/a2ui/issues/3085)）：Google 内部代码导入流程标记拼写问题，侧面印证大型企业的内部镜像/评估行为。
- **React Native 用户**（sarthak96agarwal，[#4335](https://redirect.github.com/a2ui-project/a2ui/issues/4335)）：`A2uiSurface` 与 DOM 耦合限制了非浏览器场景扩展。

**整体画像**：用户对多语言 SDK 覆盖面与协议设计满意，痛点集中在 **渲染器间能力一致性**、**SSR/边缘环境兼容**、**大规模性能** 三个维度。

## 8. 待处理积压

当前 **42 个待合并 PR**，以下长期项建议维护者优先关注：

**PR 侧：**
- [#3602](https://redirect.github.com/a2ui-project/a2ui/pull/3602)（10-24 提出，近 4 周，needs review）：Lit/React 客户端将 MIME 类型写入 part metadata 的修复——当前导致 Python `a2a-sdk` 侧 `is_a2ui_part` 判定全部失败，**属互操作性 bug fix，建议提升 review 优先级**。
- [#4054](https://redirect.github.com/a2ui-project/a2ui/pull/4054) / [#4055](https://redirect.github.com/a2ui-project/a2ui/pull/4055) / [#4057](https://redirect.github.com/a2ui-project/a2ui/pull/4057)（11-08 提出，两周，assigned-for-triage）：web_core 类型安全与 JSON Schema 校验补齐（`minProperties`/`maxProperties`/typeless `not`）。
- [#4019](https://redirect.github.com/a2ui-project/a2ui/pull/4019)（11-06 提出）：错误报告结构化（附组件 id/type），改善宿主错误处理体验。

**Issue 侧：**
- [#3774](https://redirect.github.com/a2ui-project/a2ui/issues/3774)（P1，安全相关，10-30 提出）：rendererOnly 函数嵌套绕过——建议尽快排期修复或发布临时缓解指引。
- [#4262](https://redirect.github.com/a2ui-project/a2ui/issues/4262)：main 分支 drift 失败持续更新中，需尽快恢复主干绿色。
- [#3842](https://redirect.github.com/a2ui-project/a2ui/issues/3842)（11-02 提出）：15 个 SDK 包的一致性测试审计，是 1.x 质量门槛的关键依赖。
- [#3085](https://redirect.github.com/a2ui-project/a2ui/issues/3085)（10-08）/ [#3104](https://redirect.github.com/a2ui-project/a2ui/issues/3104)（10-09）：10 月初的 CI 拼写检查与 semver 重构请求仍在排队。

**健康度小结**：贡献者基础多元且响应链路高效（Issue→同日 fix PR 两例），新方向（MCP Apps、决策模型）推进力度大；主要风险为 **PR 审查积压（42 个）** 与 **两个未闭环的 P1（#3774 安全、#4262 主干 CI）**，建议在下一版本发布前集中清理。

---

*数据来源：a2ui GitHub 仓库 2026-11-20 至 2026-11-21 窗口内 Issues/PRs/Releases 动态。*

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目动态日报
**仓库**: [thesysdev/openui](https://github.com/thesysdev/openui) | **日期**: 2026-11-21

---

## 一、今日速览

过去 24 小时项目呈现「**开发高活跃、合并零吞吐**」的状态：共 11 条 PR 更新（新增/活跃）、2 条新 Issue、0 个版本发布，且**无任何 PR 被合并或关闭**。从贡献者构成看，核心团队（Aditya-thesys、ankit-thesys、AbhinRustagi、rahuldoval 等）正沿三条主线密集推进——Dashboard Agent 智能化、Artifact 共享与管理生命周期、组件库向 `@openuidev/intelligent-ui-library` 迁移；外部生态贡献者（dalefrancis88、MuhammadAhsan-Careem）则以「提案 Issue + 配套 PR」的成熟模式寻求官方文档曝光。今日**零 Bug 报告**，Issue 入口全部为生态收录请求，侧面反映项目稳定性处于良好区间，但 11 个 PR 积压待审也提示 review 带宽可能趋紧。

| 指标 | 数值 |
|---|---|
| Issue 新增/活跃 | 2（关闭 0） |
| PR 活跃 | 11（合并/关闭 0） |
| 版本发布 | 0 |
| Bug 报告 | 0 |

---

## 二、项目进展

**本期无 PR 合并或关闭**，但开放 PR 的活动揭示了清晰的阶段性进展，整体沿四条主线推进：

**1. Dashboard Agent 智能化（今日最活跃主线）**
- [#1686](https://redirect.github.com/thesysdev/openui/pull/1686)（今日新开，rahuldoval）：重构仪表盘构建逻辑——**先决定"传达什么"，再决定"长什么样"**。修复了此前 chat agent 在未见过数据的情况下就设计仪表盘（sections、charts、filters）、Dashboard agent 固定叙事顺序的问题。
- [#1678](https://redirect.github.com/thesysdev/openui/pull/1678)（Aditya-thesys）：服务端 SDK 侧支持 `create()`/`edit()` 构建过程中**实时调用用户数据工具**，仅回传新增结果，避免重复传输。
- [#1544](https://redirect.github.com/thesysdev/openui/pull/1544)（Aditya-thesys，11-03 创建、**今日仍有更新**）：`enableProvenance` 数据溯源能力——用户开启 inspect 模式点击任意数字/组件，即可查看其公式、查询语句及调用结果行、所读取的过滤器。

**2. Artifact 管理三部曲（堆叠式 PR 链）**
- [#1659](https://redirect.github.com/thesysdev/openui/pull/1659)（AbhinRustagi，基座 PR）：artifact 支持按用户和组共享，`groupIds` 贯穿 token 铸造、编辑与脚本运行。
- [#1677](https://redirect.github.com/thesysdev/openui/pull/1677)（堆叠于 #1659）：新增 `openui.artifacts` API，支持列出、读取、共享和管理已保存的 artifact。
- [#1679](https://redirect.github.com/thesysdev/openui/pull/1679)（堆叠于 #1659）：已打开的仪表盘**免刷新**感知编辑、重命名与权限变更，轮询默认 30s、隐藏标签页自动暂停、失败退避。

**3. 组件库架构迁移**
- [#1681](https://redirect.github.com/thesysdev/openui/pull/1681)（ankit-thesys）：examples 与模板从 react-ui 旧组件集迁移至 `@openuidev/intelligent-ui-library`。
- [#1682](https://redirect.github.com/thesysdev/openui/pull/1682)（堆叠于 #1681）：文档站同步迁移。

**4. DX 改进**
- [#1680](https://redirect.github.com/thesysdev/openui/pull/1680)（ankur-mittal95）：所有示例发送 session ID，使 OpenUI Cloud 控制台能将同一会话的多轮请求正确归组。

**进展评估**：虽然本期合并数为零，但三条堆叠链（#1659→#1677/#1679、#1681→#1682）与多个跨仓库依赖（`thesysdev/muse#672`、coda#1110/#1109/#1120、prolog#303）表明团队在执行有纪律的合并排序，属于**冲刺中段的典型形态**，项目整体能力面（Agent 智能化、协作、可观测性）均在实质推进。

---

## 三、社区热点

今日两条 Issue 均为 **0 评论**，无高讨论量话题，社区互动以代码贡献为主。热点集中在生态收录：

- **[#1683](https://redirect.github.com/thesysdev/openui/issues/1683)**（dalefrancis88）：请求在 Integrations 页收录 .NET Blazor 原生渲染器与 MudBlazor 组件库（NuGet 1.1.0，11-16 发布）。配套 PR [#1658](https://redirect.github.com/thesysdev/openui/pull/1658) 已等待 **4 天**未合并。
- **[#1684](https://redirect.github.com/thesysdev/openui/issues/1684)**（MuhammadAhsan-Careem）：请求在 Demos 页收录 bb Dashboards——面向 bb（agentic IDE）的社区插件。配套 PR [#1685](https://redirect.github.com/thesysdev/openui/pull/1685) 提交于同日，响应速度极快。

**诉求分析**：两位贡献者均为「自带 Issue + 自带 PR」模式，核心诉求是**生态曝光**而非功能索取。这传递出积极信号——OpenUI Lang 作为「AI 生成 UI 的中间表示」正被第三方工具链（.NET 生态、agentic IDE 插件）主动采纳，项目已从单纯吸纳用户转向**培育生态**阶段。

---

## 四、Bug 与稳定性

**今日无 Bug、崩溃或回归报告**（2 条新 Issue 均为文档收录请求）。需留意的稳定性相关事项：

1. **已知兼容性风险（非新 Bug）**：[#1659](https://redirect.github.com/thesysdev/openui/pull/1659) 描述中明确指出「an older coda silently drops the new fields」——旧版 coda 后端会**静默丢弃**新增的 `group_ids` 字段。该 PR 已标注须在 `thesysdev/prolog#303` 与 `thesysdev/coda#1109` 部署后再上线，属受控的部署顺序风险，但值得运维侧警惕。
2. **容错设计**：[#1679](https://redirect.github.com/thesysdev/openui/pull/1679) 的轮询机制内置失败退避与隐藏标签页暂停，工程健壮性考虑充分。

---

## 五、功能请求与路线图信号

**来自 Issue 的需求**（均为文档类，配套 PR 已就绪，大概率随下次 docs 更新合入）：
- .NET Blazor 渲染器 + MudBlazor 组件库收录（[#1683](https://redirect.github.com/thesysdev/openui/issues/1683) / PR [#1658](https://redirect.github.com/thesysdev/openui/pull/1658)）
- bb Dashboards 社区项目收录（[#1684](https://redirect.github.com/thesysdev/openui/issues/1684) / PR [#1685](https://redirect.github.com/thesysdev/openui/pull/1685)）

**来自 PR 的路线图信号**（更能反映下一版本方向）：

| 主题 | 相关 PR | 信号解读 |
|---|---|---|
| AI 生成内容可信化 | [#1544](https://redirect.github.com/thesysdev/openui/pull/1544) | 溯源/inspect 模式直指「AI 仪表盘的数字能不能信」这一核心信任问题 |
| 构建时数据接入 | [#1678](https://redirect.github.com/thesysdev/openui/pull/1678) + [#1686](https://redirect.github.com/thesysdev/openui/pull/1686) | Agent 从「盲设计」转向「看数据再设计」，是 Dashboard Agent 的架构级升级 |
| 协作与权限 | [#1659](https://redirect.github.com/thesysdev/openui/pull/1659) → [#1677](https://redirect.github.com/thesysdev/openui/pull/1677) / [#1679](https://redirect.github.com/thesysdev/openui/pull/1679) | 指向**团队/企业协作场景**，group 级共享 + 管理 API + 实时同步是完整拼图 |
| 会话可观测性 | [#1680](https://redirect.github.com/thesysdev/openui/pull/1680) | 改善 Cloud 控制台对多轮会话的追踪能力 |

**迁移预警**：[#1681](https://redirect.github.com/thesysdev/openui/pull/1681) 将 examples/模板从 `openuiLibrary`、`openuiChatLibrary`、`openuiPromptOptions` 迁至 `@openuidev/intelligent-ui-library`（react-ui 仅保留 AgentInterface、adapters、theming 等聊天窗口能力）。**依赖旧组件集 import 路径的下游项目应提前关注此变更，预计伴随潜在的破坏性调整。**

**预判**：低风险 docs/examples 类 PR（#1658、#1680、#1685）将率先合入；Artifact 链（#1659 系）在后端依赖部署完成后解封；Dashboard Agent 系列构成下一个版本的主打特性。

---

## 六、用户反馈摘要

今日 Issue 评论数为 0、PR 评论数据缺失，直接用户反馈样本有限，以下从 Issue/PR 描述中提炼真实场景与痛点：

- **.NET 生态采纳意愿**（[#1683](https://redirect.github.com/thesysdev/openui/issues/1683)）：OpenUI Lang for .NET 已自发出两枚 NuGet 包（Blazor 原生渲染器、MudBlazor 组件库），贡献者持续请求官方收录——反映 .NET/企业开发者群体对在现有技术栈中使用 OpenUI 的实际需求，且该生态此前已通过 #1528/#1550 进入官方列表，属于**持续性增长**而非一次性曝光。
- **AI IDE 集成场景**（[#1684](https://redirect.github.com/thesysdev/openui/issues/1684)）：bb 插件让 agent 以 OpenUI Lang 编写仪表盘、逐步校验并按变更保存新版本——验证了 OpenUI Lang 作为 agent 工具链中间层的**真实生产用法**。
- **DX 痛点（官方自查）**（[#1680](https://redirect.github.com/thesysdev/openui/pull/1680)）：此前所有官方示例均未发送 session ID，导致控制台 Sessions 页中每个请求孤立显示、无法归组会话——这是官方主动发现并修复的可观测性短板。
- **信任痛点**（[#1544](https://redirect.github.com/thesysdev/openui/pull/1544)）：AI 生成仪表盘的数字来源不可见，用户无法验证——provenance 功能（公式 + 查询 + 结果行 + 过滤器）是对「AI 产出可审计性」诉求的直接回应。

---

## 七、待处理积压

⚠️ 以下事项建议维护者优先关注：

1. **[#1544](https://redirect.github.com/thesysdev/openui/pull/1544)**（11-03 创建，**已滞留 18 天**）：本期最老 PR，今日仍有更新说明在推进，但长期占用 review 带宽。建议评估是否拆分或明确合并窗口。
2. **[#1659](https://redirect.github.com/thesysdev/openui/pull/1659)**（11-17，WIP）：阻塞于跨仓库部署（`thesysdev/prolog#303`、`thesysdev/coda#1109`），且 [#1677](https://redirect.github.com/thesysdev/openui/pull/1677)、[#1679](https://redirect.github.com/thesysdev/openui/pull/1679) 均堆叠其上，**合并队列深度达 3**，是当前最大的结构性瓶颈。
3. **[#1681](https://redirect.github.com/thesysdev/openui/pull/1681) → [#1682](https://redirect.github.com/thesysdev/openui/pull/1682)**：文档站迁移完全依赖 examples 迁移先行合并，链式阻塞需有序解封。
4. **[#1658](https://redirect.github.com/thesysdev/openui/pull/1658)**（11-17，**纯文档变更已等待 4 天**）：低风险、社区贡献者提交，长期悬置会挫伤外部贡献积极性。同理 [#1685](https://redirect.github.com/thesysdev/openui/pull/1685) 亦为社区 docs PR，建议尽快给出 review 意见。

**整体积压画像**：11 个 open PR、0 合并，且其中约半数为深度耦合的堆叠链。核心团队产出能力健康，但**review/合并吞吐是当前最需补齐的短板**——尤其两条社区 PR 的响应速度直接关系生态贡献者的留存意愿。

---

*数据来源：GitHub API（过去 24 小时窗口）。本报告基于 Issue/PR 元数据与描述生成，PR 评论数据缺失，社区互动热度判断可能存在偏差。*

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报

**项目**：[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | **日期**：2026-11-21

---

## 1. 今日速览

过去 24 小时 CopilotKit 保持高活跃度：PR 更新 29 条（22 条待合并、7 条已合并/关闭），Issue 更新 3 条，并发布 v1.90.0。项目主线明显聚焦 **2.0.0 大版本冲刺**（[#8185](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185) 及配套文档大修 [#8511](https://redirect.github.com/CopilotKit/CopilotKit/pull/8511)），同时 1.x 线持续迭代，新增框架级遥测与版本上报。社区响应速度值得称道：悬置 12 天的安全问题 [#8269](https://redirect.github.com/CopilotKit/CopilotKit/issues/8269) 和昨日新提的 Streamdown 2.x 兼容请求 [#8523](https://redirect.github.com/CopilotKit/CopilotKit/issues/8523)，今日均已出现社区贡献的修复 PR。贡献者结构健康，核心团队（tylerslaton、AlemTuzlak、MikeRyanDev 等）与外部贡献者（egg119、aftab8052tech、chuenchen309 等）并行推进。整体判断：项目处于“大版本冲刺 + 安全与生态补强”阶段，健康度良好。

---

## 2. 版本发布

### v1.90.0（[Release 链接](https://github.com/CopilotKit/CopilotKit/releases/tag/v1.90.0)）

- **更新内容**：为运行时（runtime）新增框架级遥测（framework-level telemetry），并向 Intelligence 网关上报 CopilotKit 客户端版本号，使网关能针对客户端版本定制行为。
- **破坏性变更**：无（次版本更新，向后兼容）。
- **迁移注意事项**：
  - 新增遥测意味着新的数据上报路径，对数据合规敏感的部署方建议审查相关配置及是否提供关闭选项；
  - 版本感知能力与正在准备的 2.0.0 形成呼应——网关可按版本差异化处理，预计将为 1.x → 2.0 过渡期的兼容性管理铺路，建议团队提前关注后续 2.0 迁移指南。

---

## 3. 项目进展

今日共 **7 个 PR 完成合并/关闭**，数据中可见的关闭项包括：

| PR | 内容 | 意义 |
|---|---|---|
| [#8516](https://redirect.github.com/CopilotKit/CopilotKit/pull/8516) | fix(runtime)：TanStack 模型调用失败（如 OpenAI 429）时，BuiltInAgent 结束 run 的错误保留 provider 完整细节而非仅 message | 显著改善生产排障体验 |
| [#8517](https://redirect.github.com/CopilotKit/CopilotKit/pull/8517) | feat(runtime)：`createSafeUrlDownload` 移除 `ai` 包依赖，改由 `@copilotkit/runtime/agent` 导出 | 依赖解耦，适配 2.0 中 BuiltInAgent 的附件 URL 处理方式 |
| [#8521](https://redirect.github.com/CopilotKit/CopilotKit/pull/8521) | feat(core)：浏览器断连超 120 秒后 Intelligence 密封 Trajectory（409 TRAJECTORY_CLOSED），capture 转入新 Trajectory 继续 | 提升长会话/弱网场景健壮性 |

**仍在推进的主线**：

- **2.0.0 主线**：[#8185](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185)（11-03 起，标记 WIP）；11 个文档栈 PR（#8432–#8486）压缩为单提交 [#8511](https://redirect.github.com/CopilotKit/CopilotKit/pull/8511)，待确认后一步合入并进入 2.0.0；
- **文档生产发布**：[#8525](https://redirect.github.com/CopilotKit/CopilotKit/pull/8525) 将 docs.copilotkit.ai 固定到已验证 digest；
- **在途修复**：聊天虚拟化修复 [#8407](https://redirect.github.com/CopilotKit/CopilotKit/pull/8407)、Python SDK middleware 状态修复 [#8492](https://redirect.github.com/CopilotKit/CopilotKit/pull/8492) 今日均有更新。

**进度评估**：单日 7 个 PR 收口 + 1 个版本发布，且安全修复、2.0 准备、文档治理三线并进，推进速度可观。

---

## 4. 社区热点

1. **[#8269](https://redirect.github.com/CopilotKit/CopilotKit/issues/8269) Unauthenticated probe-thread cleanup deletes threads**（2 条评论，11-09 提出、今日更新）
   安全研究员式报告：probe-thread 清理端点以路由处理器形式直接导出，无任何鉴权。不带 `Authorization` 或 cookie 的请求可传入任意 probe `testId` 与线程 UUID，触发对 LangGraph agent 的 `DELETE /threads/{id}`。**今日由社区成员 egg119 提交修复 PR [#8526](https://redirect.github.com/CopilotKit/CopilotKit/pull/8526)**（要求 probe token），影响面覆盖 `langgraph-python`、`langgraph-fastapi`、`langgraph-typescript` 三个 showcase 集成。背后诉求：showcase 示例代码正被直接复用到生产环境，社区期待官方示例自带鉴权最佳实践。

2. **[#8523](https://redirect.github.com/CopilotKit/CopilotKit/issues/8523) Support Streamdown 2.x in @​copilotkit/react-core**（1 条评论）
   v2 聊天 UI 挂载于 Shadow DOM（web component / 可嵌入聊天 widget）时，Streamdown 1.x 的表格 CSV/TSV 复制与下载控件**静默失败**。次日即有修复 PR [#8527](https://redirect.github.com/CopilotKit/CopilotKit/pull/8527) 放宽依赖至 `^1.3.0 || ^2.0.0`，Issue→PR 转化链路极快。

3. **[#8513](https://redirect.github.com/CopilotKit/CopilotKit/issues/8513) tool-hook dependency comparison overflows on cyclic plain objects**（1 条评论）
   来自 Tessl Code Review 的自动化分析结果：[#7830](https://redirect.github.com/CopilotKit/CopilotKit/pull/7830) 引入的依赖比较器在比较两个不同的循环引用普通对象时会无限递归。外部 AI 代码审查工具主动扫描并反馈，反映仓库已成为 AI 审查工具的活跃测试标的。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 修复状态 |
|---|---|---|
| 🔴 高（安全） | [#8269](https://redirect.github.com/CopilotKit/CopilotKit/issues/8269)：probe-thread 清理端点无鉴权，可删除任意线程 | ✅ 修复 PR [#8526](https://redirect.github.com/CopilotKit/CopilotKit/pull/8526) 已提交（OPEN，待评审合并） |
| 🟠 中 | [#8513](https://redirect.github.com/CopilotKit/CopilotKit/issues/8513)：依赖比较器对循环引用对象无限递归（源自 #7830 的回归） | ⚠️ 暂无专门修复 PR |
| 🟡 中低 | [#8523](https://redirect.github.com/CopilotKit/CopilotKit/issues/8523)：Shadow DOM 下 Streamdown 表格控件静默失败 | ✅ 修复 PR [#8527](https://redirect.github.com/CopilotKit/CopilotKit/pull/8527) 已提交 |
| 🟡 低 | v2 长聊天虚拟化中发送消息时视图先跳向历史再滑回底部（行高估算失效） | 🔄 [#8407](https://redirect.github.com/CopilotKit/CopilotKit/pull/8407) 在途，今日有更新 |

**在途稳定性修复（PR 层面）**：[#8492](https://redirect.github.com/CopilotKit/CopilotKit/pull/8492)（Python SDK middleware 拦截前端工具调用时丢失 context/actions 状态）、[#8512](https://redirect.github.com/CopilotKit/CopilotKit/pull/8512)（Vue 端去重消息合并时丢失 `toolCalls`）。

**稳定性观察**：今日无崩溃类报告；问题集中在安全边界、循环引用边界条件和嵌入式场景兼容性，且多数已有对应修复在途，风险可控。

---

## 6. 功能请求与路线图信号

- **Streamdown 2.x 支持**（[#8523](https://redirect.github.com/CopilotKit/CopilotKit/issues/8523) → [#8527](https://redirect.github.com/CopilotKit/CopilotKit/pull/8527)）：依赖放宽方案已就位，通过测试后大概率随下个 patch/minor 版本发布。
- **Cloudflare Agents 集成**（[#8351](https://redirect.github.com/CopilotKit/CopilotKit/pull/8351)，今日更新）：基于 `@ag-ui/cloudflare-agents` 0.1.0，信号明确指向**边缘运行时生态扩张**。
- **MCP Apps 全屏模式**（[#7760](https://redirect.github.com/CopilotKit/CopilotKit/pull/7760)）：React/Vue/Angular 三端实现 `ui/request-display-mode`，跨度 42 天仍在推进，属长线功能。
- **2.0.0 主线**（[#8185](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185) + [#8511](https://redirect.github.com/CopilotKit/CopilotKit/pull/8511) 文档端到端大修，覆盖搜索/SEO/全部 quickstart 与指南）：将随 2.0 一并落地。

**路线图判断**：近期小版本焦点预计为安全修复 + Streamdown 2.x 兼容 + 文档批量收口；Cloudflare Agents 与 MCP Apps 全屏仍在打磨中；2.0.0 是明确的下一个大节点。

---

## 7. 用户反馈摘要

- **嵌入式场景是真实痛点**：gariggio（#8523）在 Shadow DOM / web component 中挂载聊天 UI，属"将 CopilotKit 聊天嵌入第三方页面"的典型用例，对**无报错的静默功能失效**尤其不满——此类问题难以自排查。
- **安全可审计性受关注**：soarkit（#8269）以专业审计格式报告问题，印证 showcase 示例代码存在被直接投入生产的趋势，社区期待官方示例默认携带鉴权示范。
- **外部工具生态参与度上升**：fernandezbaptiste（#8513）代表 Tessl Code Review 主动分享扫描结果，属于高质量的"工具驱动型"反馈渠道。
- **贡献氛围积极**：从修复 PR 作者构成看（egg119、aftab8052tech、chuenchen309、DZH166 等外部成员独立提交安全修复、React/Vue 修复与文档修正），项目对外部贡献者的友好度和 Issue→PR 转化效率均处于较高水平。

---

## 8. 待处理积压

| 条目 | 开启日期 | 悬置时长 | 建议 |
|---|---|---|---|
| [#7760](https://redirect.github.com/CopilotKit/CopilotKit/pull/7760) MCP Apps 全屏 | 10-10 | **42 天**，仍 OPEN（今日有活动） | 建议维护者给出明确评审结论或纳入里程碑 |
| [#8269](https://redirect.github.com/CopilotKit/CopilotKit/issues/8269) 安全问题 | 11-09 | **12 天**后才出现修复 PR，且 [#8526](https://redirect.github.com/CopilotKit/CopilotKit/pull/8526) 尚未合并 | 鉴于安全属性，建议最高优先级评审合并 |
| [#8185](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185) 2.0.0 | 11-03 | 18 天 WIP | 建议明确合并时间窗，避免文档栈 [#8511](https://redirect.github.com/CopilotKit/CopilotKit/pull/8511) 长期悬置 |
| [#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309) Python quickstart 文档修复 | 11-10 | 11 天，今日有更新但未合并 | 含鉴权最佳实践内容，建议走文档快速通道 |
| [#8351](https://redirect.github.com/CopilotKit/CopilotKit/pull/8351) Cloudflare Agents | 11-11 | 10 天，今日有活动 | 属正常评审周期，暂无需干预 |

**今日 Issue 关闭数为 0**，且安全 Issue #8269 悬置时间偏长，建议加强 Issue 分诊节奏，与 PR 侧的高吞吐形成匹配。

---

*数据来源：GitHub 公开数据（截至 2026-11-21）。本报告基于过去 24 小时窗口内的 Issue/PR/Release 活动生成。*

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*