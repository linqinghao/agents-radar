# 生成式 UI 生态日报 2026-10-27

> Issues: 60 | PRs: 123 | 覆盖项目: 4 个 | 生成时间: 2026-10-27 04:14 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告

**数据窗口：2026-10-26 至 2026-10-27 | 覆盖项目：a2ui、OpenUI、json-render、CopilotKit**

---

## 一、生态全景

当前生成式 UI 生态呈现**"分层成形、集中收口"**的态势：渲染原语（json-render）、协议规范、声明式引擎（OpenUI）、应用框架四个抽象层级各有代表项目，且均在向下一个版本冲刺——a2ui 0.0.3、OpenUI 1.1、CopilotKit 2.0.0 同期临近。工程重心已从"能生成 UI"转向三大生产化命题：**流式正确性、安全边界、跨端一致性**。同时，"降低 LLM 依赖"（本地决策模型、MCP 直连渲染、确定性查询执行）开始进入主流路线图。全生态的共同隐忧是：**贡献供给充足，维护者审阅带宽普遍成为消化瓶颈**。

---

## 二、各项目活跃度对比

| 项目 | Issue 更新（24h） | PR 更新（24h） | 合并/关闭 | Release | 下一版本信号 |
|---|---|---|---|---|---|
| **a2ui** | 50（活跃 48 / 关闭 2） | 50（待合并 38 / 关闭 12） | 12 PR | 无 | 0.0.3 筹备中（#3633 明示为过渡方案） |
| **OpenUI** | **0**（通道完全静默） | 21（待合并 15 / 关闭 6） | 6 PR | 无 | 1.1 已落地 6/7 项子 PR，发布以"周"计 |
| **json-render** | 1 | 2（均待审） | 0 | 无（无 Releases 渠道，npm 侧 0.21.0） | 0.21.x 补丁攒批待发 |
| **CopilotKit** | 9（活跃 5 / 关闭 4） | 50（待合并 25 / 关闭 25） | 25 PR | 无 | 2.0.0 RC 流水线就绪（#8013） |

**三点观察：**
- **吞吐双雄**是 CopilotKit（单日净消化 25 PR，含 2 个数月期回归修复）与 a2ui（Issue/PR 双 50 更新，分诊机制 `first-line-handled` 运转顺畅）；
- **OpenUI 呈极端形态**："PR 高热、Issue 零活跃"，反馈可能迁移至 Discord 等渠道，或用户群尚在爬坡期——本身即是值得注意的信号；
- **json-render 量级最小**但响应链健康（issue 报告后 3 天获得社区修复 PR），瓶颈集中在审阅发布环节（#327 滞留 67 天）。

---

## 三、共同关注的功能方向

### 1. 流式渲染的正确性与容错 —— **四个项目全部在修，生态第一公约数**

| 项目 | 具体表现 |
|---|---|
| OpenUI | #1484 游离 code fence 致整页空白；#1486 流式解析在共享引用链上**指数级重建**；#1485 smoothStreaming 消除内容跳动 |
| json-render | #422/#432 缩进 patch 行空白泄漏至渲染正文 |
| a2ui | #3633 Express 默认格式补齐 `openStream`；#3634–3637 三语言流式事件修复栈 |
| CopilotKit | #7951 RN 流式 60s 强制截断；#7946 流式工具数值跳变；#7993 AG-UI 1.0.x 升级引发重连风暴 |

OpenUI 的实证数据最有说服力：**1,401 个基准 dashboard 中 310 个（22%）踩中列表数学函数缺陷**——"模型输出不规范"是生产环境常态而非边角案例。

### 2. MCP 生态集成与安全（a2ui、CopilotKit）
- a2ui：#3573/#3574 让 headless MCP 工具输出**不经 LLM 往返**直接驱动 surface；#3431 修复 iframe 隔离击穿（fix PR #3646 在途）
- CopilotKit：#8017 凭据不落日志 + CSP 域名校验；#7997 修复 MCP 示例 `srcdoc` + `allow-same-origin` 漏洞
- ⚠️ **两项目同日独立出现同型漏洞**（`allow-same-origin` 击穿 double-iframe 隔离），说明这是 MCP Apps 嵌入式架构的**行业级通病**，而非个别实现失误。

### 3. 降低推理成本 / 削减 LLM 往返（a2ui、OpenUI）
a2ui #3339 引入本地决策模型合成器（进程内 ONNX cross-encoder，低置信度回退 LLM，指向**无 LLM 合成 UI** 路径）；OpenUI #1481 让链式查询按依赖确定性执行、Query 参数直读普通语句变量。二者共同指向"LLM 做意图理解、确定性引擎做渲染与数据编排"的成本结构重构。

### 4. 多语言/多端一致性（a2ui、CopilotKit）
a2ui 以 TS/Python/Dart/Swift 四 SDK + **共享 conformance 测试**约束行为对齐（#3634–3637 成套推进）；CopilotKit 覆盖 .NET（#8014）、RN、Vue 及 LangGraph/AG2/ADK 多框架适配。用户群对"跨端行为一致"的诉求已在两边真实形成。

### 5. 供应链与隐私合规（a2ui、CopilotKit）
a2ui 面临 Zod CVE-2023-54404（#3610，**尚无升级 PR**，且 zod 3→4 major 升级有回归风险）；CopilotKit 同日推进 #8016 遥测隐私（错误原文不外泄、opt-out 即时生效）与 #8011 CORS 预检——企业合规成为框架层的显性竞争维度。

---

## 四、差异化定位分析

| 项目 | 生态定位 | 技术路线 | 目标用户 | 关键差异点 |
|---|---|---|---|---|
| **json-render** | 渲染原语层 | Web Streams transform，JSONL patch → 增量渲染 | 自建管道的库作者 | 最轻量；vercel-labs 实验性质；连 Releases 渠道都未建 |
| **a2ui** | 协议/规范层 | Agent↔UI 协议 v1.0 收口 + 声明式 catalog | 框架开发者、多端团队 | 规范先行 + 四 SDK conformance 对齐；率先探索无 LLM 合成 |
| **OpenUI** | 引擎/DSL 层 | 声明式查询语言 + 表达式引擎 | 数据/BI 类应用开发者 | 垂直 dashboard kits（电商、产品分析）；单维护者高速引擎迭代 + AI bot 自动化 |
| **CopilotKit** | 应用框架层 | AG-UI 1.0 协议底座 + 多 agent 框架适配 | 企业应用开发者 | 工程化最完备（自动化 onboarding 验证、RC 流水线、HITL）；2.0 加注 Learning 能力栈 |

**结构性判断**：四者恰好构成从底层到应用的抽象层级，**可组合而非完全互斥**——json-render 可作为自研方案的渲染原语；a2ui 的协议化路线理论上可被上层框架消费；OpenUI 与 CopilotKit 则在"专用引擎 vs 通用框架"路线上直接分流。对技术选型者而言，真正的决策变量不是"用哪个"，而是**在哪一层自建、在哪一层引入依赖**。

---

## 五、社区热度与成熟度

**第一梯队（高吞吐、多贡献者、体系化）**
- **CopilotKit**：最成熟。自动化验证闭环（PE 系列工单由 CLI 逐字执行 quickstart 发现 6 处文档缺口）、发布后冒烟测试、当天开当天关的响应案例（#7993）。短板：17 个月未解的全库最高票诉求（#1881，32 评论/15 👍），RN 平台流式方案无修复 PR。
- **a2ui**：高活跃且讨论质量高——RFC 驱动架构演进（#3416 PromptGenerator API 收敛），外部贡献者主动审计依赖 CVE，多语言用户群已真实形成。处于 v1.0 定型前的"纪律期"。

**第二梯队（快速迭代、社区结构失衡）**
- **OpenUI**：一日内完成 1.1 全部 6 个子 PR 的立项与实现，推进速度罕见；但产出集中于单一维护者 + AI bot，Issue 通道零活跃。**bus factor 与反馈渠道是最大可持续性风险**。

**第三梯队（早期、小而健康）**
- **json-render**：3 位活跃用户、issue→fix 3 天闭环，响应链健康；但全站 0 👍、67 天 PR 滞留、无发布渠道，审阅与发布是硬瓶颈。

---

## 六、值得关注的趋势信号

**1. 流式容错是生成式 UI 的"生产化分水岭"。** Demo 中的理想化输出与生产环境（游离 fence、缩进 patch、超长运行、移动端网络）差距巨大。**选型建议**：实测流式解析器对非规范输出的容忍度与长程序性能，而非只看静态渲染效果。

**2. MCP Apps 正在制造一类新攻击面。** 两项目同日修同型 iframe 沙箱漏洞并非巧合：嵌入模型生成的 UI + MCP 凭据传递的组合下，`allow-same-origin`、凭据落日志、CSP 缺失是共性风险。**自建方案应将沙箱隔离与凭据治理列为 P0**。

**3. UI 生成的确定性部分正迁出 LLM 关键路径。** 本地决策模型（ONNX 回退）、MCP 直连渲染、确定性链式查询共同指向成本结构优化。**高频/低价值决策场景下，纯 LLM 方案的成本劣势将加速暴露**。

**4. 协议层竞争开启，conformance 测试是可信度标尺。** a2ui 以"规范 + 四 SDK 一致性测试"建立纪律，CopilotKit 押注 AG-UI 1.0；但 #7993 重连风暴警示了协议大版本迁移的兼容性代价，a2ui #3576 也暴露协议复杂度"泄漏"到终端体验（模型思考被 schema/校验细节淹没）的透明度成本。**采用任何协议前，考察其一致性测试覆盖、迁移工具与 prompt 开销**。

**5. Q4 将现版本发布潮，升级窗口需提前规划。** 0.0.3 / 1.1 / 2.0.0 同期临近，叠加 zod 3→4、AG-UI 1.x 等 major 升级回归风险。**建议为依赖此类库的项目预留专项回归测试预算**。

**6. 质量验证自动化成为竞争力，但 CI 债务同步累积。** CopilotKit 的自动化 onboarding 验证与 OpenUI 的 Devin bot 代表正向趋势；反例是 a2ui 的 evals 失败积压 11 天未清——**失败的测试基础设施比没有更危险，可能掩盖真实回归**。

**7. 维护者审阅带宽是全生态的共同天花板。** 四个项目无一例外呈现"贡献供给 > 审阅消化"：CopilotKit 25 PR 排队、OpenUI 全部子 PR 待单人评审、json-render 67 天滞留、a2ui 多条积压（iFrame PR 系列满月、evals 未清）。**选型启示：维护者/贡献者比例与 PR 中位滞留时长，比 star 数更能预测项目的可持续交付能力。**

---

**一句话总结**：生成式 UI 已越过"能不能"的阶段，正在"稳不稳、省不省、安不安全"三条战线上同时收口——Q4 的三场版本发布将是一次集中的能力检验，而流式容错、沙箱安全与审阅带宽，是当下最值得技术决策者盯住的三个先行指标。

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目日报（2026-10-27）

## 1. 今日速览

- 项目维持**高活跃度**：过去 24 小时 Issues 更新 50 条（新开/活跃 48，关闭 2），PR 更新 50 条（待合并 38，合并/关闭 12），无新版本发布。
- 当前主线是**多语言 SDK（TypeScript / Python / Dart / Swift）并行维护与 Express 推理格式稳定化**：核心贡献者 ditman 提交了跨三语言的成套修复栈（[#3633](https://redirect.github.com/a2ui-project/a2ui/pull/3633)–[#3637](https://redirect.github.com/a2ui-project/a2ui/pull/3637)），今日又有 polina-c 新开规范一致性 PR [#3650](https://redirect.github.com/a2ui-project/a2ui/pull/3650)。
- **安全双线索**：Zod 依赖受 CVE-2023-54404 影响（P1，[#3610](https://redirect.github.com/a2ui-project/a2ui/issues/3610)）；MCP App 示例沙箱缺陷已有修复 PR（[#3646](https://redirect.github.com/a2ui-project/a2ui/pull/3646)）。
- **CI 噪音需关注**：今日新增 main 分支 e2e 失败（[#3651](https://redirect.github.com/a2ui-project/a2ui/issues/3651)），叠加历史累积的 8 条 evals 失败工单未关闭。
- 整体健康度良好：新 Issue 普遍被迅速打上 `first-line-handled` 标签，分诊机制运转顺畅；社区外部贡献者持续提交安全与兼容性反馈。

## 2. 版本发布

无新版本发布。

值得注意的路线图信号：[#3633](https://redirect.github.com/a2ui-project/a2ui/pull/3633) 明确提到该修复是"让 **0.0.3** 能保留 Express 为默认推理格式"的过渡方案，暗示 `@a2ui/agent` 0.0.3 正在筹备中。

## 3. 项目进展

过去 24 小时 12 个 PR 被合并/关闭。展示数据中 Top 20 PR 均为 OPEN 状态，但从 Issue 关闭情况可确认两项落地：

- [#3155](https://redirect.github.com/a2ui-project/a2ui/issues/3155)（已关闭）：Direct JSON prompt 中公共类型（`DynamicString`、`Action`、`CheckRule` 等）在每个 catalog 中重复打包的问题解决——多 catalog 场景下 prompt 体积显著优化。
- [#3144](https://redirect.github.com/a2ui-project/a2ui/issues/3144)（已关闭）：Swift `BasicCatalog` 的 `formatNumber`/`formatCurrency`/`pluralize` 从 `Locale.current` 回归确定性 `en-US` 默认值——Swift 渲染端格式化行为可预测。

**待合并但明显推进主线的 PR 栈：**

| 主题 | PR | 说明 |
|---|---|---|
| Express Event 修复（跨 SDK） | [#3634](https://redirect.github.com/a2ui-project/a2ui/pull/3634)(TS) / [#3635](https://redirect.github.com/a2ui-project/a2ui/pull/3635)(Py) / [#3636](https://redirect.github.com/a2ui-project/a2ui/pull/3636)(Dart) / [#3637](https://redirect.github.com/a2ui-project/a2ui/pull/3637)(conformance) | 三语言实现 + 共享一致性测试同步推进，体现"同一契约、多 SDK 对齐"的工程纪律 |
| Express 流式响应 | [#3633](https://redirect.github.com/a2ui-project/a2ui/pull/3633) | 移除 0.0.2 起 Express 作为默认格式却不支持 `openStream` 的硬伤 |
| catalogId 规范一致性 | [#3650](https://redirect.github.com/a2ui-project/a2ui/pull/3650)（今日新开） | 解决 v1.0 规范自相矛盾：schema 要求 `catalogId` 必填，协议文档却说回复 `INVALID_FUNCTION_CALL`（fixes #3596），与实现侧修复 [#3555](https://redirect.github.com/a2ui-project/a2ui/pull/3555) 形成规范+实现闭环 |
| MCP headless 工具函数 | [#3573](https://redirect.github.com/a2ui-project/a2ui/pull/3573) / [#3574](https://redirect.github.com/a2ui-project/a2ui/pull/3574) / [#3578](https://redirect.github.com/a2ui-project/a2ui/pull/3578) | 让 surface 直接消费 headless MCP 工具输出（parseJson / jmespath / updateDataModel / split / regexCapture 等），无需 LLM 往返 |
| Dart/Flutter 稳定性 | [#3614](https://redirect.github.com/a2ui-project/a2ui/pull/3614) / [#3616](https://redirect.github.com/a2ui-project/a2ui/pull/3616) / [#3627](https://redirect.github.com/a2ui-project/a2ui/pull/3627) | 错误经 microtask 交付、problem delivery 规则文档化、regex 错误可 JSON 编码 |

**净评估**：项目处于"v1 收口 + 多 SDK 对齐"阶段，PR 吞吐以修复与一致性为主、新功能为辅，节奏稳健。

## 4. 社区热点

- **[#3416](https://redirect.github.com/a2ui-project/a2ui/issues/3416)（4 评论，热度第一）**：ditman 发起 RFC，提议将 `PromptGenerator` 与 skill 生成统一到单一公共 API。当前 Agent SDK 暴露两套并行 API（Python 的 `prompt_snippet` / TS 的 `generateSystemPrompt()`）。诉求核心是 **Agent SDK API 面收敛**，与 [#3538](https://redirect.github.com/a2ui-project/a2ui/issues/3538)（SkillSet 内存模型与文件系统导出分离）同属一条架构主线，预计是近期最重要的设计讨论。
- **[#3610](https://redirect.github.com/a2ui-project/a2ui/issues/3610)（3 评论）**：外部贡献者 gilliangdp 报告 web_core 的 `zod ^3.25.76` 受 CVE-2023-54404 影响，建议至少升至 4.6.6。诉求是**下游供应链安全**；注意 zod 3→4 为 major 升级，可能牵动整个校验层。
- **[#3623](https://redirect.github.com/a2ui-project/a2ui/issues/3623)（2 评论，新 Issue）**：Swift 生态摩擦——`BasicCatalog` 传递依赖 `JSONSchemaBuilder` 但并未使用，导致 Xcode 强制要求信任 `JSONSchemaMacro` 宏才能构建。反映**依赖最小化**诉求。
- **[#3104](https://redirect.github.com/a2ui-project/a2ui/issues/3104) / [#3085](https://redirect.github.com/a2ui-project/a2ui/issues/3085)（各 2 评论）**：代码质量治理——用 `ProtocolCapabilities` 接口替代散落 10+ 文件的裸 semver 比较；CI 拦截常见拼写错误（源于向 Google 内部导入代码时的反馈）。

## 5. Bug 与稳定性

按严重程度排列：

1. **P1 安全｜[#3610](https://redirect.github.com/a2ui-project/a2ui/issues/3610)** Zod CVE-2023-54404。⚠️ 数据中**未见对应升级 PR**，且 major 升级存在回归风险，建议优先处理。
2. **P1 安全｜[#3431](https://redirect.github.com/a2ui-project/a2ui/issues/3431)** Lit MCP App 示例内层 iframe 携带 `allow-same-origin`，击穿 double-iframe 隔离设计。✅ 已有 fix PR [#3646](https://redirect.github.com/a2ui-project/a2ui/pull/3646)（剥离 `allow-same-origin`/`allow-popups`，收紧 token allowlist），待合并。
3. **CI 回归（今日新增）｜[#3651](https://redirect.github.com/a2ui-project/a2ui/issues/3651)** main 分支 e2e 测试失败，关联 PR #3639。尚无修复。
4. **Express 缺陷簇（#3598）** `Event.userMessage` 静默丢弃、列表项 action 槽位丢失、默认格式不支持流式。✅ 修复栈 #3634/#3635/#3636/#3637 + #3633 已提交。
5. **协议歧义｜[#3596](https://redirect.github.com/a2ui-project/a2ui/issues/3596)** ✅ 规范修复 [#3650](https://redirect.github.com/a2ui-project/a2ui/pull/3650)（今日开 PR）+ 实现修复 [#3555](https://redirect.github.com/a2ui-project/a2ui/pull/3555)。
6. **Dart 运行时｜#3612** 渲染期错误监听者需自行排队 microtask，否则在 Flutter build 中 `setState` 崩溃。✅ fix PR [#3614](https://redirect.github.com/a2ui-project/a2ui/pull/3614)（标记 breaking change）。
7. **P2 UX｜[#3576](https://redirect.github.com/a2ui-project/a2ui/issues/3576)** 模型可见"思考过程"被 A2UI 协议细节（schema、surface ID、JSON 校验）淹没。无 fix PR。
8. **P2 文档｜[#3447](https://redirect.github.com/a2ui-project/a2ui/issues/3447)** `client-setup.md` 引用不存在的 `<A2UISurface>`、`useA2UI()`。无 fix PR。
9. **背景噪音**：8 条 evals 失败工单长期 open（[#3248](https://redirect.github.com/a2ui-project/a2ui/issues/3248)、[#3250](https://redirect.github.com/a2ui-project/a2ui/issues/3250)、[#3291](https://redirect.github.com/a2ui-project/a2ui/issues/3291)、[#3292](https://redirect.github.com/a2ui-project/a2ui/issues/3292)、[#3296](https://redirect.github.com/a2ui-project/a2ui/issues/3296)、[#3335](https://redirect.github.com/a2ui-project/a2ui/issues/3335)、[#3408](https://redirect.github.com/a2ui-project/a2ui/issues/3408) 等），横跨 TS/Python/Dart 三套 evals，最早追溯至 10-16。

## 6. 功能请求与路线图信号

- **0.0.3 轮廓浮现**：[#3633](https://redirect.github.com/a2ui-project/a2ui/pull/3633) 为 0.0.3 铺路（Express 保持默认 + 块级流式），叠加 #3634–#3637 修复栈，下个小版本内容渐清晰。
- **本地决策模型 UI 合成器**：[#3339](https://redirect.github.com/a2ui-project/a2ui/pull/3339)（gspencergoog，10-20 开，今日仍活跃）新增 `a2ui.inference_formats.decision`——catalog 无关的本地推理格式，支持进程内 ONNX cross-encoder 或 HTTP endpoint，低置信度回退 LLM。若合并，A2UI 将具备**无 LLM 合成 UI** 的能力路径，属方向性功能。
- **MCP 直连渲染层**：[#3573](https://redirect.github.com/a2ui-project/a2ui/pull/3573)/[#3574](https://redirect.github.com/a2ui-project/a2ui/pull/3574) 让 headless MCP 工具（文件系统、git server、CLI 封装）不经 LLM 往返直接驱动 UI——与 #3339 同属"降低推理成本"主线，纳入下一版本概率高。
- **v1.0 规范收敛项**（持续滚动）：[#3097](https://redirect.github.com/a2ui-project/a2ui/issues/3097)（协议版本统一裸 `1.0`）、[#3103](https://redirect.github.com/a2ui-project/a2ui/issues/3103)（catalog 级 `$defs` 跨 SDK 支持）、[#3102](https://redirect.github.com/a2ui-project/a2ui/issues/3102)（`callRendererFunction` 执行上下文）、[#3175](https://redirect.github.com/a2ui-project/a2ui/issues/3175)（`ValidationResult` 真值语义对齐）。
- **Dart Agent SDK（P1）**：[#2356](https://redirect.github.com/a2ui-project/a2ui/issues/2356) 持续推进，#3636 即其 Express 修复镜像。

## 7. 用户反馈摘要

- **协议复杂度正在"泄漏"到终端用户**：[#3576](https://redirect.github.com/a2ui-project/a2ui/issues/3576) 直指核心矛盾——用户问业务问题，看到的却是模型处理 A2UI schema/校验的思考过程。这是框架类产品典型的"透明度成本"反馈。
- **Swift 构建摩擦**：[#3623](https://redirect.github.com/a2ui-project/a2ui/issues/3623) 显示宏信任机制（`JSONSchemaMacro`）成为实际阻断点，即便依赖未被使用——依赖树最小化是真实诉求。
- **文档可信度缺口**：[#3447](https://redirect.github.com/a2ui-project/a2ui/issues/3447) 中 React 文档引用不存在的导出，与 [#3163](https://redirect.github.com/a2ui-project/a2ui/issues/3163) 周度合规审计跟踪的"文档-代码同步"维度互相印证。
- **下游安全意识强**：[#3610](https://redirect.github.com/a2ui-project/a2ui/issues/3610) 表明有用户主动审计依赖 CVE，反馈渠道畅通且响应迅速。
- **高价值 dogfooding 反馈**：andrewkolos 在 v0.9 chat 示例实测中发现的 regex 错误不可 JSON 编码、double 范围溢出（[#3627](https://redirect.github.com/a2ui-project/a2ui/pull/3627) 修复）及 Flutter 错误交付时序问题（#3612/#3614），均为可执行性强的集成层反馈。
- **积极面**：社区反复强调跨 SDK 行为一致性（#3175、[#3341](https://redirect.github.com/a2ui-project/a2ui/issues/3341)），说明多语言用户群已真实形成，conformance 测试体系获得认可。

## 8. 待处理积压

提醒维护者关注：

- **evals 失败积压（7-8 条，最早 10-16）**：#3248、#3250、#3291、#3292、#3296、#3335、#3408——三套 SDK 的 evals 在 main 上反复失败未关闭，存在掩盖真实回归的风险，建议集中清查。
- **iFrame catalog PR 系列**（josemontespg）：[#2798](https://redirect.github.com/a2ui-project/a2ui/pull/2798)、[#2803](https://redirect.github.com/a2ui-project/a2ui/pull/2803)（9-25 开，已满月）、[#3008](https://redirect.github.com/a2ui-project/a2ui/pull/3008)、[#3009](https://redirect.github.com/a2ui-project/a2ui/pull/3009)——功能链完整但长期未合并，建议明确阻塞原因或拆批落地。
- **[#3339](https://redirect.github.com/a2ui-project/a2ui/pull/3339)**（decision-model synthesizer，10-20 开）：方向性大功能，需要架构层面的评审决策。
- **[#2356](https://redirect.github.com/a2ui-project/a2ui/issues/2356)**（P1，8-20 开，约 68 天）：虽持续有子 PR 推进，主 Issue 宜更新里程碑状态。
- **[#3289](https://redirect.github.com/a2ui-project/a2ui/issues/3289)**：`a2ui_core` 声明 Dart 3.5 下限但受 `json_schema_builder` 依赖实际只能解析 Dart 3.10+，影响 Flutter 3.24–3.9 用户。
- **[#3175](https://redirect.github.com/a2ui-project/a2ui/issues/3175)**：四 SDK `ValidationResult` 行为不一致，属规范级问题，宜与 #3102/#3097 一并排期。

---

*数据来源：GitHub API（a2ui-project/a2ui），统计窗口 2026-10-26 至 2026-10-27。链接均为 github.com/a2ui-project/a2ui 下对应 Issue/PR。*

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目动态日报

**项目**：[thesysdev/openui](https://github.com/thesysdev/openui) | **日期**：2026-10-27 | **数据窗口**：过去 24 小时

---

## 1. 今日速览

- 过去 24 小时项目呈 **"PR 高热、Issue 静默"** 的鲜明特征：21 条 PR 更新（15 条待合并、6 条已合并/关闭），Issue 侧零活动（新开/活跃/关闭均为 0），无新版本发布。
- 最大动向是核心维护者 **Aditya-thesys 于 10-26 一日内发起 [OpenUI 1.1 版本总纲 PR #1480](https://redirect.github.com/thesysdev/openui/pull/1480) 及 6 个子 PR**，集中改进流式性能、链式查询、代码围栏容错等语言引擎核心能力。
- 官网/文档侧由 Devin AI 机器人驱动的质量整备（SEO、404 修复、包体积优化）密集落地，显示项目工程自动化程度较高。
- 健康度判断：**开发吞吐量强（一日内推进 7 条核心引擎 PR），但评审带宽可能成为瓶颈**——15 条待合并 PR 中大量来自单一维护者与机器人，且社区 Issue 通道完全静默，外部反馈信号偏弱。

---

## 2. 版本发布

今日无新版本发布。但两个信号表明**下一次发布已临近**：

- [#1461 chore: version packages](https://redirect.github.com/thesysdev/openui/pull/1461)：Changesets 机器人于 10-23 开启的版本 PR 仍处待合并状态，合并后将自动发布 npm 包。
- [#1480 OpenUI 1.1](https://redirect.github.com/thesysdev/openui/pull/1480)：1.1 采用"子 PR 逐个合入 → 发布时整体并入 main"的模式，本身即发布载体，预计随子 PR 评审完成后触发版本动作。

---

## 3. 项目进展

### 今日关闭的 6 条 PR（数据未区分"合入"与"关闭拒绝"，状态均标记为 CLOSED）

| PR | 内容 | 意义 |
|---|---|---|
| [#1470](https://redirect.github.com/thesysdev/openui/pull/1470) | 新增 `@openuidev/dashboard-kits`：电商（Sundial Goods）与产品分析（Relay）两套领域套件 | 社区贡献者 i-subham23 的实质性功能交付，扩展了垂直场景开箱能力 |
| [#1468](https://redirect.github.com/thesysdev/openui/pull/1468) | 修复 telemetry 身份在重装/CI/容器场景下丢失的问题：CLI 与 Lang Core 共享状态、原子化创建、复用包管理器缓存 | 真实用户痛点修复，影响数据统计准确性 |
| [#1479](https://redirect.github.com/thesysdev/openui/pull/1479) | Intelligent UI 演示链接统一走 `openui.com/demo/intelligent-ui` 代理 | 品牌与链接一致性 |
| [#1474](https://redirect.github.com/thesysdev/openui/pull/1474) | 首页展示面板"Ikea"更名为"Intelligent UI" | 修正易误解为 IKEA 机器人的品牌口径 |
| [#1472](https://redirect.github.com/thesysdev/openui/pull/1472) | 修复 `/cloud/app` 与游离 `library.ts` 两个 404 URL | 爬虫可抓取性 |
| [#1473](https://redirect.github.com/thesysdev/openui/pull/1473) | telemetry 逻辑标准化（被同作者重开的 [#1475](https://redirect.github.com/thesysdev/openui/pull/1475) 接替） | 迭代过程中的自我修正 |

### 在途进展

- **OpenUI 1.1 引擎升级全面铺开**：[#1480](https://redirect.github.com/thesysdev/openui/pull/1480) 总纲下的 6 个子 PR（详见第 5、6 节）在一天内完成立项与实现，推进速度罕见，覆盖流式性能（[#1486](https://redirect.github.com/thesysdev/openui/pull/1486)）、渲染顺序（[#1485](https://redirect.github.com/thesysdev/openui/pull/1485)）、链式查询（[#1481](https://redirect.github.com/thesysdev/openui/pull/1481)）等核心能力。
- **官网性能优化在途**：[#1466](https://redirect.github.com/thesysdev/openui/pull/1466) 计划将 `@openuidev/react-ui`（约 2.2 MB 原始 / 530 KB gzip）从营销、文档、博客页面中移除，若合入将显著改善首屏加载。
- **信息架构收敛**：[#1477](https://redirect.github.com/thesysdev/openui/pull/1477) 移除独立的 `/components/*` 设计系统页面并 301 重定向至 `/docs`。

**整体评估**：今日关闭项以文档/品牌/telemetry 修复为主，属"卫生型"推进；真正的功能纵深在 1.1 子 PR 群，项目在语言引擎层面迈出了实质一步，但成果兑现取决于评审合并节奏。

---

## 4. 社区热点

> ⚠️ 数据说明：今日 Issue 数为 0，且全部 PR 的评论数均缺失，无法按互动量排序。以下按内容实质与作者影响力代替排序。

- **[OpenUI 1.1 总纲 #1480](https://redirect.github.com/thesysdev/openui/pull/1480)**（Aditya-thesys）：今日最重要讨论载体，采用 scope 表格逐项追踪，是观察项目路线图的最佳入口。
- **[#1482 列表数学内建函数修复](https://redirect.github.com/thesysdev/openui/pull/1482)**：PR 引用了一组关键量化数据——**1,401 个基准测试的 dashboard 回答中有 310 个（约 22%）踩中 `@Round` 列表返回 0 的缺陷**，说明"模型生成整列格式化代码"是高频真实场景，引擎容错需求强烈。
- **[#1486 流式性能](https://redirect.github.com/thesysdev/openui/pull/1486)**：指出当前流式解析在共享引用链上存在**指数级重建**，且随程序增大持续劣化——直指生成式 UI 在大型程序下的可用性核心痛点。
- **社区贡献者动向**：zahlekhan 的 telemetry 系列连续迭代（[#1473](https://redirect.github.com/thesysdev/openui/pull/1473) → [#1475](https://redirect.github.com/thesysdev/openui/pull/1475)）、rabisg 的 [#1468](https://redirect.github.com/thesysdev/openui/pull/1468)、i-subham23 的 [#1470](https://redirect.github.com/thesysdev/openui/pull/1470)，显示外部贡献集中在 **telemetry 健壮性与垂直领域模板**两个方向。

---

## 5. Bug 与稳定性

今日 Issue 通道无新增 Bug 报告，但 1.1 子 PR 的 Problem 描述系统性披露了一批现存缺陷（均已有对应修复 PR 在途）：

| 严重度 | 问题 | 修复 PR | 状态 |
|---|---|---|---|
| 🔴 高 | **模型输出渲染为空白**：`stripFences` 把任意三个反引号当作围栏起始，行内/单行/游离 code fence 三类常见模型输出直接丢失（[#1484](https://redirect.github.com/thesysdev/openui/pull/1484)） | [#1484](https://redirect.github.com/thesysdev/openui/pull/1484) | ✅ 已有，待合并 |
| 🔴 高 | **列表数学函数返回错误值**：`@Round/@​Abs/@​Floor/@​Ceil` 传入列表时整体变 0，影响 310/1,401 基准 dashboard（[#1482](https://redirect.github.com/thesysdev/openui/pull/1482)） | [#1482](https://redirect.github.com/thesysdev/openui/pull/1482) | ✅ 已有，待合并 |
| 🔴 高 | **表达式默认值渲染为 AST JSON**：`$total = 1 + 2` 显示 `{"k":"BinOp",...}` 而非 `3`（[#1483](https://redirect.github.com/thesysdev/openui/pull/1483)） | [#1483](https://redirect.github.com/thesysdev/openui/pull/1483) | ✅ 已有，待合并 |
| 🟠 中高 | **链式查询数据不正确**：读取前序查询结果的 Query 只执行一次且携带默认参数（`{ids: null}`），不随依赖更新（[#1481](https://redirect.github.com/thesysdev/openui/pull/1481)） | [#1481](https://redirect.github.com/thesysdev/openui/pull/1481) | ✅ 已有，待合并 |
| 🟠 中 | **流式性能劣化**：每个 chunk 全量重扫 buffer，共享引用链上指数级重建语句（[#1486](https://redirect.github.com/thesysdev/openui/pull/1486)） | [#1486](https://redirect.github.com/thesysdev/openui/pull/1486) | ✅ 已有，待合并 |
| 🟡 中 | **telemetry 身份跨安装不保**：重装/CI/容器导致标识重建、统计失真（[#1468](https://redirect.github.com/thesysdev/openui/pull/1468)） | 已于今日关闭 | ✅ 已修复 |
| 🟡 低（站点） | 全站打包 react-ui 约 530 KB gzip（[#1466](https://redirect.github.com/thesysdev/openui/pull/1466)） | [#1466](https://redirect.github.com/thesysdev/openui/pull/1466) | ⏳ 待合并 |

**结论**：引擎层正确性缺陷（渲染空白、数值错误）集中且已全部配齐修复 PR，响应姿态积极；风险在于这批修复依赖 1.1 一次性合并节奏，用户在 1.1 发布前将持续暴露于上述问题。

---

## 6. 功能请求与路线图信号

今日无用户功能请求（0 Issue），路线图信号完全来自官方动作：

**OpenUI 1.1 已明确的 scope**（依据 [#1480](https://redirect.github.com/thesysdev/openui/pull/1480) 表格，括号内为对应子 PR）：
1. Query 参数支持读取普通语句变量（如 `region = "EU"` 直接传参）
2. 更快的流式解析（[#1486](https://redirect.github.com/thesysdev/openui/pull/1486)）✅ 已有子 PR
3. `smoothStreaming` 按书写顺序呈现流式内容，消除内容跳动（[#1485](https://redirect.github.com/thesysdev/openui/pull/1485)）✅
4. 链式查询按依赖顺序执行（[#1481](https://redirect.github.com/thesysdev/openui/pull/1481)）✅
5. 代码围栏容错渲染（[#1484](https://redirect.github.com/thesysdev/openui/pull/1484)）✅
6. 表达式状态默认值一次求值（[#1483](https://redirect.github.com/thesysdev/openui/pull/1483)）✅
7. `@Round/@​Abs/@​Floor/@​Ceil` 列表逐元素运算（[#1482](https://redirect.github.com/thesysdev/openui/pull/1482)）✅

**判断**：上述 7 项中 6 项已有实现落地为子 PR，**几乎必然构成 1.1 的发布内容**；结合待合并的 [#1461](https://redirect.github.com/thesysdev/openui/pull/1461) 版本 PR，下一版本周期应以"周"为单位临近。

**其他信号**：[#1470](https://redirect.github.com/thesysdev/openui/pull/1470) 的领域套件模式暗示项目可能沿"垂直 dashboard kits"方向扩展生态；[#1438](https://redirect.github.com/thesysdev/openui/pull/1438) 持续刷新模板与示例依赖，表明官方重视下游新用户的首跑体验。

---

## 7. 用户反馈摘要

今日 Issue 评论为 0，**无法直接提炼用户声音**——这本身是一个值得关注的信号（可能与项目反馈主要发生在 Discord/社区渠道，或用户群体尚在爬坡期有关）。可提取的间接信号：

- **痛点集中于"模型输出不规范"场景**：1.1 多个修复 PR 的 Problem 均源于真实模型行为（游离 code fence、对整列数据调用 `@Round`、链式查询依赖），且引用了 1,401 条基准 dashboard 回答的实证统计，说明用户实际使用中"AI 生成代码 → 渲染异常/数值错误"是主要摩擦点。
- **企业/CI 环境诉求**：[#1468](https://redirect.github.com/thesysdev/openui/pull/1468) 专门处理 CI 与容器场景下的 telemetry 状态，指向存在在受限环境中批量部署 OpenUI CLI 的用户群。
- **官网性能感知**：[#1466](https://redirect.github.com/thesysdev/openui/pull/1466) 主动量化并修复全站 530 KB gzip 冗余，反映获客页面加载体验被内部视为重要指标。

**建议**：连续多日 Issue 零活跃值得维护者核查 issue 模板、反馈入口可达性与社区渠道引流情况。

---

## 8. 待处理积压

| PR | 开启日期 | 积压时长 | 提醒事项 |
|---|---|---|---|
| [#1438 chore: update templates and examples](https://redirect.github.com/thesysdev/openui/pull/1438) | 10-15 | **12 天** | 机器人 PR，自述已通过全部无凭据验证契约，长期未合并可能造成模板与已发布包版本持续脱节 |
| [#1461 chore: version packages](https://redirect.github.com/thesysdev/openui/pull/1461) | 10-23 | 4 天 | **阻塞发布**——若继续延迟，已积累的 changesets 将与 1.1 发布节奏纠缠 |
| [#1466 docs: keep react-ui off marketing pages](https://redirect.github.com/thesysdev/openui/pull/1466) | 10-24 | 3 天 | 530 KB gzip 优化，越早合入对获客页转化越有利 |
| [#1475 Standardize telemetry code](https://redirect.github.com/thesysdev/openui/pull/1475) | 10-26 | 1 天 | ⚠️ PR 模板未填写（测试计划与检查清单均未勾选），建议作者补全说明或维护者标注要求 |
| 1.1 六个子 PR（#1481–#1486） | 10-26 | 1 天 | 属正常评审周期，但全部由单一维护者产出，**评审带宽是 1.1 能否按期落地的最大变量** |

Issue 侧今日无数据，无法评估 issue 积压；建议后续日报补充 issue 年龄分布维度。

---

## 数据口径说明

- "已合并/关闭"的 6 条 PR 在原始数据中状态均为 `CLOSED`，无法区分实际合入 main 与被拒绝，本文统一表述为"已关闭"。
- 所有 PR 评论数、👍 数缺失（undefined），第 4 节热度排序为基于内容实质的替代方案。
- 来源：GitHub API 抓取，统计窗口为 2026-10-26 至 2026-10-27。

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render 项目动态日报

**日期：** 2026-10-27 | **仓库：** [vercel-labs/json-render](https://github.com/vercel-labs/json-render)

---

## 一、今日速览

今日项目呈现**低强度、质量导向**的活跃状态：过去 24 小时无代码合并、无版本发布，共 1 条 Issue 更新与 2 条 PR 活跃。核心热点是流式转换器正确性问题——[Issue #422](https://redirect.github.com/vercel-labs/json-render/issues/422)（缩进 patch 行的空白泄漏至正文）在报告后 3 天内即获得社区贡献者提交的修复 [PR #432](https://redirect.github.com/vercel-labs/json-render/pull/432)，issue→fix 响应链条健康。此外，搁置 67 天的数组路径校验修复 [PR #327](https://redirect.github.com/vercel-labs/json-render/pull/327) 今日出现更新迹象，或预示积压清理启动。整体判断：项目处于「修复攒批、待集中合入」阶段，外部贡献参与度尚可（今日涉及 3 位不同用户），但合并吞吐与社区反应量（各条目 👍 均为 0）仍有提升空间。

---

## 二、项目进展

今日**无 PR 合并或关闭**，两条活跃 PR 均处于待审状态，但形成了明确的推进信号：

- **[PR #432](https://redirect.github.com/vercel-labs/json-render/pull/432) fix(core): keep patch indentation out of streamed prose**
  由社区贡献者 Jassi2004 于 10-26 提交，直接修复 Issue #422。方案：在流式转换器中**暂存行首空白直至该行可被分类**——若判定为 patch 行或 spec fence 分隔符则丢弃空白，若为普通文本则原样输出。修复后，issue 中的示例输入将正确产出 `"x\ny"` 而非 `"x\n   y"`。这是对流式渲染输出保真度的直接补强。

- **[PR #327](https://redirect.github.com/vercel-labs/json-render/pull/327) fix(core): reject malformed array path indexes**
  开放 67 天后今日出现更新活动。该 PR 将数组索引 token 处理从 `parseInt` 强制转换改为**显式拒绝非法/不安全值**，同时保留任意 JSON Pointer 成员名遍历、对齐不可变 state-store 的写入语义与 no-op 行为，并补充回归测试。

**进展评估：** 今日无"落袋"代码增量，但攒下 2 个 core 修复 + 1 个已确认 bug 的完整闭环。若两条 PR 近期合入，`@json-render/core` 有望迎来一次集中的小版本修复发布。

---

## 三、社区热点

**[Issue #422](https://redirect.github.com/vercel-labs/json-render/issues/422) ↔ [PR #432](https://redirect.github.com/vercel-labs/json-render/pull/432) 联动**是今日唯一热点线程（issue 累计 1 条评论，10-26 有更新）：

- **问题本质：** LLM 流式输出中，patch 行常带缩进（如嵌于代码块或混排在自然语言中），`createJsonRenderTransform` 在遇到 `{` 开始缓冲前就把行首空白当作正文输出，导致渲染文本残留杂散空格。
- **背后诉求：** 用户需要库**容忍真实世界（而非理想化）的 LLM 输出格式**——缩进、混排、fence 包裹都是生产环境常态。
- **响应质量：** issue 报告附带最小复现与精确版本号（0.21.0），3 天内获得社区修复方案，属于高质量的问题响应范例；当前瓶颈在维护者审阅环节。

---

## 四、Bug 与稳定性

按严重程度排列（今日无崩溃、回归或安全类报告）：

| 严重度 | 问题 | 状态 | 链接 |
|---|---|---|---|
| **中** | 数组路径索引经 `parseInt` 强转，非法 token（如 `"1abc"`、负值）可能被静默接受，导致数据错位或非预期行为 | 修复 PR #327 已开 67 天，今日有活动，**未合并** | [PR #327](https://redirect.github.com/vercel-labs/json-render/pull/327) |
| **中低** | 缩进 patch 行的行首空白泄漏至渲染正文（影响 `@json-render/core` 0.21.0，非崩溃类，但污染输出保真度） | 修复 PR #432 已提交（10-26），**未合并** | [Issue #422](https://redirect.github.com/vercel-labs/json-render/issues/422) / [PR #432](https://redirect.github.com/vercel-labs/json-render/pull/432) |

两个 bug 均已有对应 fix PR，社区侧修复供给充足，**当前风险集中在修复未能及时合入发布**。

---

## 五、功能请求与路线图信号

今日无显式功能请求，但从修复主题可提炼两条路线图信号：

1. **流式输入容错加固**（源自 [#422](https://redirect.github.com/vercel-labs/json-render/issues/422) / [#432](https://redirect.github.com/vercel-labs/json-render/pull/432)）：社区在真实场景中大量遭遇"非规范化"流式输出（缩进、混排、fence）。#432 若尽快合入，大概率进入下一个 0.21.x 补丁版本；长期看可考虑更系统的输入规整层（fence 检测、空白策略可配置化）。
2. **路径语义收紧**（源自 [#327](https://redirect.github.com/vercel-labs/json-render/pull/327)）：合并后 JSON Pointer / 数组索引校验将趋严，属于**接近破坏性变更的行为修正**（依赖宽松解析的下游代码行为可能改变）。建议纳入下一版本时在发布说明中显著标注，提示用户自查。

---

## 六、用户反馈摘要

- **使用场景：** 从 #422 复现用例（`x\n   {"op":"add","path":"/root",...}\ny`）可见，用户在流式管道中混合输出自然语言与 JSONL patch，即典型的 **"LLM 结构化输出 + 增量渲染"** 工作流，深度依赖 `createJsonRenderTransform`。
- **核心痛点：** 对**输出保真度**高度敏感——杂散空白会直接出现在最终渲染产物中；用户默认库应对缩进等常见格式噪声免疫。
- **满意度信号：** issue 报告规范（最小复现 + 版本号）、响应迅速，问题处理体验良好；但该 issue 仅 1 条评论、0 👍，提示该痛点影响面尚属小众，或项目整体社区曝光度有限。

---

## 七、待处理积压

- **[PR #327](https://redirect.github.com/vercel-labs/json-render/pull/327) — 高优先级提醒维护者**
  开放 **67 天**（2026-08-21 至今）未合并，今日虽有更新但长期滞留。该 PR 涉及核心路径解析正确性且自带回归测试，久拖将挫伤贡献者积极性，并使线上用户持续暴露于宽松解析行为。
- **[PR #432](https://redirect.github.com/vercel-labs/json-render/pull/432) — 建议抓住窗口期 review**
  虽仅开放 1 天，但对应 issue 复现清晰、修复方案描述完整，建议尽快审阅以维持当前良性的 issue→fix 响应节奏。
- **发布渠道：** 数据源中 GitHub Releases 无任何记录，版本信息仅能从 npm 侧面获知（用户报告为 0.21.0）。建议维护者补齐 Release Notes 渠道，便于用户跟踪变更与迁移。

---

### 健康度小结

| 维度 | 评级 | 依据 |
|---|---|---|
| 问题响应速度 | ★★★★☆ | #422 报告后 3 天获修复 PR |
| 代码合入吞吐 | ★★☆☆☆ | 24h 零合并，PR #327 滞留 67 天 |
| 社区参与广度 | ★★☆☆☆ | 3 位活跃用户，全站 👍 为 0 |
| 稳定性 | ★★★★☆ | 无崩溃/回归/安全报告，已知 bug 均有 fix 在途 |

**一句话结论：** 修复供给充足、响应链条健康，但**审阅与发布是当前瓶颈**——维护者若能尽快消化 #327 与 #432，项目可完成一次高质量的集中小版本迭代。

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报

**日期：2026-10-27** | 数据来源：[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 1. 今日速览

过去 24 小时，CopilotKit 共有 **9 条 Issue 更新**（5 开放/活跃、4 关闭）与 **50 条 PR 更新**（25 待合并、25 已合并/关闭），无新版本发布。单日 50 条 PR 活动、半数完成合并/关闭，吞吐量在同类开源项目中处于高位，维护节奏健康。今日主线清晰：**稳定性与安全加固**（CORS 预检、遥测隐私、MCP 凭据泄露、AG-UI 状态同步）+ **一批由自动化验证驱动的快速上手文档修复** + **2.0.0 发布流水线搭建**。多个 Bug 呈现"当天报告、当天关闭"的响应速度（如 [#7993](https://redirect.github.com/CopilotKit/CopilotKit/issues/7993)），但 React Native 流式 shim 问题（[#7951](https://redirect.github.com/CopilotKit/CopilotKit/issues/7951)）尚无修复 PR，是当前最需关注的开放风险。

---

## 2. 版本发布

今日无新版本发布。

> 注：[#8013](https://redirect.github.com/CopilotKit/CopilotKit/pull/8013) 已将 `2.0.0` 分支接入 RC 自动发布流水线，正式版本临近，详见第 6 节。

---

## 3. 项目进展

*注：数据源未区分"合并"与"关闭"，以下结合关联 Issue 状态与 PR 内容判断落地情况。*

### 关键修复落地（已关闭）

- **[#7756](https://redirect.github.com/CopilotKit/CopilotKit/pull/7756) — v1 服务适配器回归修复**：恢复 v1 service adapter 走自身 `process()` 的路径，关闭了自 v1.50.0 起困扰用户约 8.5 个月的 LangChainAdapter 崩溃回归（[#3217](https://redirect.github.com/CopilotKit/CopilotKit/issues/3217)），并关联 v1 兼容性清单 #6408 第 11 项。**今日最重要的运行时修复。**
- **[#8014](https://redirect.github.com/CopilotKit/CopilotKit/pull/8014) — .NET AG-UI 状态发布修复（PNI-700）**：修复 .NET 包装器合并状态后 UI 收不到更新的断点。
- **6 个快速上手修复（PE-1047 ~ PE-1053，均关闭）**：[#8003](https://redirect.github.com/CopilotKit/CopilotKit/pull/8003)（LangGraph quickstart 路由模式与 langchain 版本钉死）、[#8004](https://redirect.github.com/CopilotKit/CopilotKit/pull/8004)（Deep Agents quickstart）、[#8005](https://redirect.github.com/CopilotKit/CopilotKit/pull/8005)（生成式 UI 前端工具绑定文档）、[#8006](https://redirect.github.com/CopilotKit/CopilotKit/pull/8006)（voice 的 openai 5.x 类型）、[#8007](https://redirect.github.com/CopilotKit/CopilotKit/pull/8007)（research-canvas 示例依赖锁）、[#8008](https://redirect.github.com/CopilotKit/CopilotKit/pull/8008)（Vue CopilotChat flex 布局）。**亮点：均由自动化 onboarding run（CLI 4.29/4.31）逐字执行 quickstart 后发现的缺口，显示项目已建立系统化的上手体验验证闭环。**
- **[#7977](https://redirect.github.com/CopilotKit/CopilotKit/pull/7977) / [#7966](https://redirect.github.com/CopilotKit/CopilotKit/pull/7966)（Learning 相关）**：服务端 Learning 管理方法与 Inspector 支持两个 PR 今日关闭，从描述看经历了 exact-head 校验与评审流程；"Learning" 作为新能力栈正在推进（是否合入建议以 main 分支为准）。

### 进行中（开放 PR，等待评审）

- [#8010](https://redirect.github.com/CopilotKit/CopilotKit/pull/8010)：修复工具运行中卸载导致线程卡死（对应 [#8009](https://redirect.github.com/CopilotKit/CopilotKit/issues/8009)）
- [#8011](https://redirect.github.com/CopilotKit/CopilotKit/pull/8011)：带凭据跨域 CORS 预检正确回显请求头
- [#8012](https://redirect.github.com/CopilotKit/CopilotKit/pull/8012)：仅在配置 `afterRequestMiddleware` 时克隆响应，降低内存开销
- [#8016](https://redirect.github.com/CopilotKit/CopilotKit/pull/8016)：遥测不携带错误消息原文、延迟 opt-out 生效
- [#8017](https://redirect.github.com/CopilotKit/CopilotKit/pull/8017)：MCP URL 凭据不进日志 + MCP Apps CSP 域名校验
- [#7767](https://redirect.github.com/CopilotKit/CopilotKit/pull/7767)：AG2 showcase 迁移至 AG2 1.x（10-12 开启，持续推进）

### CI / 发布工程

[#8013](https://redirect.github.com/CopilotKit/CopilotKit/pull/8013)（2.0.0 RC 自动发布）、[#8015](https://redirect.github.com/CopilotKit/CopilotKit/pull/8015)（发布线分支补齐 CI）、[#8018](https://redirect.github.com/CopilotKit/CopilotKit/pull/8018)（showcase 自动审批全文件检查 + 恢复发布后冒烟测试）、[#8019](https://redirect.github.com/CopilotKit/CopilotKit/pull/8019)（生产 starter 验证提效）。

**进展评估**：今日净消化 25 个 PR、关闭 4 个 Issue（含 2 个多月期回归 Bug），同时覆盖核心运行时、.NET SDK、文档、CI/发布工程四个层面，属"高交付日"。

---

## 4. 社区热点

- **[#1881](https://redirect.github.com/CopilotKit/CopilotKit/issues/1881) Mastra Message History Support** — **32 条评论、15 👍**，2025-05-27 创建，今日仍有讨论更新。诉求：CopilotChat 对 Mastra CoAgents 提供与 LangGraph 对等的会话历史支持。这是全库讨论量最高的 Issue 之一，背后是 Mastra 生态采用增长与"多框架对等支持"的社区预期，但**至今约 17 个月仍无对应 PR**。
- **[#7951](https://redirect.github.com/CopilotKit/CopilotKit/issues/7951) React Native streaming-fetch shim** — 包导入即全局替换 fetch，且 60s `xhr.timeout` 截断 Android 上所有超过 60 秒的 agent 运行。Issue 提供了无需 runtime 即可复现的最小用例，说明影响所有 RN/Expo 用户；"import 即生效"的设计也引发对副作用边界的讨论。
- **[#7993](https://redirect.github.com/CopilotKit/CopilotKit/issues/7993) @​ag-ui/client 1.0.x 升级重连风暴** — 单轮对话触发 80+ 重复请求、回答永不渲染。当天开当天关，既体现了快速响应，也折射出 2.0/AG-UI 1.0 迁移期的兼容性阵痛是社区焦点。
- **[#8009](https://redirect.github.com/CopilotKit/CopilotKit/issues/8009) 前端工具运行中卸载致线程卡死** — HITL 场景（条件渲染工具、页面切换）真实痛点，当天即有修复 PR [#8010](https://redirect.github.com/CopilotKit/CopilotKit/pull/8010) 响应。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 | 修复情况 |
|---|---|---|---|
| 🔴 高 | [#7951](https://redirect.github.com/CopilotKit/CopilotKit/issues/7951) RN/Android 上 60s 流超时截断每次 agent 运行，且 shim 全局替换 Expo fetch | OPEN | **暂无修复 PR，需重点关注** |
| 🔴 高 | [#8009](https://redirect.github.com/CopilotKit/CopilotKit/issues/8009) 工具中途卸载后调用无响应、线程无法继续 | OPEN | [#8010](https://redirect.github.com/CopilotKit/CopilotKit/pull/8010) 已提交，待评审 |
| 🟠 中（安全） | [#7997](https://redirect.github.com/CopilotKit/CopilotKit/issues/7997) open-mcp-client 示例的 `srcdoc` + `allow-same-origin` iframe 运行在宿主源上 | OPEN | 相关平台加固见 [#8017](https://redirect.github.com/CopilotKit/CopilotKit/pull/8017)，示例本身待修 |
| 🟠 中 | [#7993](https://redirect.github.com/CopilotKit/CopilotKit/issues/7993) AG-UI client 1.0.x 升级引发重连风暴 | **今日关闭** | — |
| 🟠 中 | [#3132](https://redirect.github.com/CopilotKit/CopilotKit/issues/3132) ADK `setState` 不与后端状态同步（2026-01-30 提出） | **今日关闭** | 同期 AG-UI 状态发布链路有 [#8014](https://redirect.github.com/CopilotKit/CopilotKit/pull/8014) 修复 |
| 🟠 中 | [#3217](https://redirect.github.com/CopilotKit/CopilotKit/issues/3217) v1.50.0+ LangChainAdapter 回归 | **今日关闭** | [#7756](https://redirect.github.com/CopilotKit/CopilotKit/pull/7756) |
| 🟢 低 | [#7946](https://redirect.github.com/CopilotKit/CopilotKit/issues/7946) 流式工具渲染数值截断跳变 | **今日关闭** | — |
| 🟢 低 | [#7825](https://redirect.github.com/CopilotKit/CopilotKit/issues/7825) 文档站横幅水合后下移 40px（CLS） | OPEN（10-14 起） | 暂无 |

**稳定性趋势**：今日 4 个关闭 Issue 全部为 Bug，其中 2 个是开放数月的回归；另有 4 个预防性加固 PR（CORS、内存、遥测隐私、凭据安全）在途。Bug 消化速度明显快于新增速度（新增 3 / 关闭 4），净方向向好。

---

## 6. 功能请求与路线图信号

- **2.0.0 正式版临近**：[#8013](https://redirect.github.com/CopilotKit/CopilotKit/pull/8013) 将 `2.0.0` 分支定义为发布线——push 触及 `packages/**` 即自动发布 `2.0.0-rc.N`（`rc` dist-tag）；[#8015](https://redirect.github.com/CopilotKit/CopilotKit/pull/8015) 为发布线分支补齐 17 个 PR 检查工作流。结合 [#7993](https://redirect.github.com/CopilotKit/CopilotKit/issues/7993) 反映的 AG-UI client 1.0.x 切换阵痛，**2.0 是以 AG-UI 1.0 为底座的大版本，升级迁移成本需要提前评估**。
- **"Learning" 能力栈成形**：[#7977](https://redirect.github.com/CopilotKit/CopilotKit/pull/7977)（服务端 Learning 管理方法）与 [#7966](https://redirect.github.com/CopilotKit/CopilotKit/pull/7966)（Inspector 集成）指向一个面向智能体学习/记忆管理的新能力，可能成为 2.0 周期的功能主线之一。
- **Mastra 支持（[#1881](https://redirect.github.com/CopilotKit/CopilotKit/issues/1881)）**：15 👍 / 32 评论的高票需求。库内已有多框架投入先例（AG2 1.x 迁移 [#7767](https://redirect.github.com/CopilotKit/CopilotKit/pull/7767)、.NET 修复 [#8014](https://redirect.github.com/CopilotKit/CopilotKit/pull/8014)），Mastra 历史消息对等支持存在纳入路线图的可能，但目前无 PR 迹象。
- **MCP 生态安全收紧**：[#8017](https://redirect.github.com/CopilotKit/CopilotKit/pull/8017)（凭据不落日志、CSP 域名白名单）与 [#7997](https://redirect.github.com/CopilotKit/CopilotKit/issues/7997) 显示 MCP Apps 是重点投入方向，且正在补安全边界。
- **企业采用友好信号**：[#8016](https://redirect.github.com/CopilotKit/CopilotKit/pull/8016) 确保遥测默认不含应用内容、opt-out 随时生效，符合企业合规预期。

---

## 7. 用户反馈摘要

**痛点**
- **移动端可用性**：RN/Android 用户流式连接 60 秒被强制掐断，且 import 即替换全局 fetch 的副作用令用户措手不及（[#7951](https://redirect.github.com/CopilotKit/CopilotKit/issues/7951)）；最小复现无需 runtime，说明影响面覆盖全部移动端用户。
- **升级成本高**：v1.50.0 的 LangChainAdapter 崩溃（[#3217](https://redirect.github.com/CopilotKit/CopilotKit/issues/3217)，2 月提出今日才修复）与 AG-UI 1.0.x 重连风暴（[#7993](https://redirect.github.com/CopilotKit/CopilotKit/issues/7993)）表明用户在版本升级上持续付出排查成本。
- **工具生命周期管理**：条件渲染的前端工具在运行中卸载会卡死整个线程（[#8009](https://redirect.github.com/CopilotKit/CopilotKit/issues/8009)）——反映动态 UI + HITL 生产应用的真实场景。
- **文档与实际行为有出入**：多个 quickstart 逐字执行失败（路由模式错误、代码块标题与路径不符、依赖未钉版本），今日 6 个 PR 集中修复即是证明。

**满意点**
- 响应速度快：[#7993](https://redirect.github.com/CopilotKit/CopilotKit/issues/7993) 当天开当天关；[#8009](https://redirect.github.com/CopilotKit/CopilotKit/issues/8009) 当天出修复 PR。
- 长期回归终于落地：[#3217](https://redirect.github.com/CopilotKit/CopilotKit/issues/3217)（约 8.5 个月）、[#3132](https://redirect.github.com/CopilotKit/CopilotKit/issues/3132)（约 9 个月）今日双双关闭。
- 工程化程度高：自动化 onboarding 验证（PE 系列工单）、exact-head 预览与安装校验、发布后冒烟测试，用户报告的问题均有可复现的验证记录支撑。

**典型使用场景**（从 Issue 提取）：仪表盘类前端工具渲染（[#7946](https://redirect.github.com/CopilotKit/CopilotKit/issues/7946)）、Google ADK + AG-UI 状态共享（[#3132](https://redirect.github.com/CopilotKit/CopilotKit/issues/3132)）、.NET 后端集成（[#8014](https://redirect.github.com/CopilotKit/CopilotKit/pull/8014)）、跨域带凭据部署（[#8011](https://redirect.github.com/CopilotKit/CopilotKit/pull/8011)）、Expo/Android 移动端（[#7951](https://redirect.github.com/CopilotKit/CopilotKit/issues/7951)）。

---

## 8. 待处理积压

- **[#1881](https://redirect.github.com/CopilotKit/CopilotKit/issues/1881)（约 17 个月，32 评论 / 15 👍）**：Mastra 历史消息支持——全库最高社区诉求之一，长期无维护者路线图表态，建议优先回应。
- **[#7951](https://redirect.github.com/CopilotKit/CopilotKit/issues/7951)（10-23 起）**：RN 流式 shim——高影响、无修复 PR，且涉及设计取舍（全局 fetch 替换、超时策略），需要维护者层面决策。
- **[#7767](https://redirect.github.com/CopilotKit/CopilotKit/pull/7767)（10-12 起，15 天）**：AG2 1.x 迁移 PR 待评审。
- **[#7825](https://redirect.github.com/CopilotKit/CopilotKit/issues/7825)（10-14 起，13 天）**：文档站横幅 CLS——小修复，建议顺手处理。
- **评审带宽**：当前待合并 PR 共 25 个，其中今日新提的 [#8010](https://redirect.github.com/CopilotKit/CopilotKit/pull/8010)、[#8011](https://redirect.github.com/CopilotKit/CopilotKit/pull/8011)、[#8012](https://redirect.github.com/CopilotKit/CopilotKit/pull/8012)、[#8016](https://redirect.github.com/CopilotKit/CopilotKit/pull/8016)、[#8017](https://redirect.github.com/CopilotKit/CopilotKit/pull/8017)、[#8018](https://redirect.github.com/CopilotKit/CopilotKit/pull/8018)、[#8019](https://redirect.github.com/CopilotKit/CopilotKit/pull/8019) 均在排队；评审速度是当前主要瓶颈。
- **隐性积压**：[#7756](https://redirect.github.com/CopilotKit/CopilotKit/pull/7756) 引用的 #6408 是 v1 兼容性跟踪清单（今日仅解决第 11 项），其余条目建议纳入监控。

---

### 健康度小结

| 维度 | 评估 |
|---|---|
| 活跃度 | ⭐⭐⭐⭐⭐ 单日 50 PR / 9 Issue 更新，多贡献者并行 |
| 响应速度 | ⭐⭐⭐⭐ 当天闭环案例存在，但长期积压仍在 |
| 稳定性 | ⭐⭐⭐⭐ 回归修复密集落地，RN 平台是短板 |
| 路线图 | 2.0.0 RC 流水线就绪，Learning/MCP 是可见方向 |
| 风险点 | AG-UI 1.0 迁移回归、RN 流式方案、25 个 PR 评审积压 |

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*