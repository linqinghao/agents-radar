# 生成式 UI 生态日报 2026-11-07

> Issues: 22 | PRs: 99 | 覆盖项目: 4 个 | 生成时间: 2026-11-07 05:13 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告（2026-11-07）

> 数据窗口统一为过去 24 小时，覆盖 a2ui、OpenUI、json-render、CopilotKit 四个项目的 GitHub 公开动态。

---

## 一、生态全景

生成式 UI 生态正从快速实验期进入**“标准化与产品化并行”**阶段：a2ui 冲刺 v1.0（规范级缺陷清零、conformance 质量门禁建设、破坏性 envelope keys 迁移），CopilotKit 启动 2.0 WIP，两大框架的大版本节奏标志着行业开始对 API 稳定性作出正式承诺。产品侧 OpenUI 保持“当日合并→当日发版”的高频节奏（单日 4 个 patch 版本），Dashboards 功能完成端到端闭环；json-render 活跃度低，处于维护节奏，生态内部分层明显。值得注意的横向信号是**协议层开始外溢**：A2UI 语义已出现在 CopilotKit（v1.85.0 修复 A2UI 渲染、ADK bridge 与 A2UI SDK 依赖对齐）和 OpenUI（a2ui 数据模型原型污染修复）的动态中，跨项目互操作正在形成。共性主线清晰：**多端渲染扩张（Angular/Swift/Lynx）、新一代模型标准化（gpt-6-luna / claude-sonnet-5.5）、安全与错误可观测性成为基础设施级需求**。

---

## 二、各项目活跃度对比

| 项目 | Issues 新开/活跃 | Issues 关闭 | PR 待合并 | PR 合并/关闭 | Release | 合计动态 |
|---|---|---|---|---|---|---|
| **a2ui** | 12 | 7（以 P1 为主） | 32 | 18 | 0 | **69** |
| **CopilotKit** | 3 | 0 | 15 | 13 | 1（v1.85.0 minor） | 31 |
| **OpenUI** | 0 | 0 | 8 | 10 | 4（全 patch） | 18 |
| **json-render** | 0 | 0 | 3 | 0 | 0 | 3 |

**关键观察：**
- **a2ui 总活跃度遥遥领先**，且是唯一 issue 通道健康的活跃项目（单日关闭 7 个 P1，社区讨论深度高）；
- **OpenUI 的活动完全集中在 PR 侧**，issue 通道为零，用户反馈渠道薄弱；
- **CopilotKit 是唯一“发版 + 大版本筹备”并行的项目**，节奏快、层次清晰；
- **json-render 单日零合并、零发版、零响应**，全部活跃来自 3 个待审 PR。

---

## 三、共同关注的功能方向

### 1. 错误处理与可观测性（a2ui / CopilotKit / json-render）
- **a2ui**：renderer 不捕获组件渲染异常、`onError` 缺组件身份（#3993/#4018），surface fallbacks API（PR #4041）待合并；
- **CopilotKit**：错误事件丢失 `agentId`/`threadId` 并吞掉后续失败事件（#7511），日志噪音问题当日获社区 fix PR（#8251→#8252）；
- **json-render**：`streamCard` 校验失败后不完整卡片残留线程（PR #456）。
- **共性本质**：模型生成 UI 的失败路径（渲染失败、校验失败、部分输出残留）是跨项目的核心痛点。

### 2. 多端与多框架渲染（a2ui / CopilotKit / OpenUI）
- CopilotKit v1.85.0 落地 **Angular 原生 Generative UI**；a2ui 坚持四语言 SDK（Python/TS/Swift/Dart）+ Web/Flutter/SwiftUI 渲染一致性；OpenUI 社区推进 **Swift SDK（#1521）与 ReactLynx（#1559）**。生成式 UI 正在走出 React Web 单一形态；json-render 是唯一保持纯 Web/TS 单端的反例。

### 3. 安全加固（OpenUI / a2ui）
- **OpenUI** 有 4 个待合并安全修复：原型污染（#1576）、react-email XSS（#1578）、URL scheme 绕过（#1577）、意外代码求值（#1579）；
- **a2ui** 新提可配置 URL 安全策略与域名 allowlist（#4045，当前仅按 scheme 过滤）；
- 共同根源：**模型可控内容（markdown / URL / JSON Pointer / 代码元素）直接进入渲染与执行管线**，传统 Web 漏洞在生成式 UI 场景重现。

### 4. 模型层治理与退役应对（CopilotKit / OpenUI / json-render）
- CopilotKit 默认模型统一为 `gpt-6-luna`（#8227），并修复 `gpt-4-turbo` 退役导致的 showcase 开箱即坏（#8130/#8078）；
- json-render 默认切换 `gpt-6-luna-fast`（#454）；OpenUI 文档统一推荐 `claude-sonnet-5.5`（#1572/#1587）。
- **上游模型退役已成为下游项目的常态化运营风险**。

### 5. 开箱即用与文档可复现性（a2ui / CopilotKit / OpenUI）
- OpenUI QA 发现四条聊天前端链路仅 `useChat` 有完整端到端文档覆盖（#1573）；CopilotKit showcase 因模型退役新检出即失败；a2ui 文档指向已 discontinued 的包（#3946），叠加 Dart 发布链问题构成完整用户流失链路。

---

## 四、差异化定位分析

| 维度 | a2ui | OpenUI | CopilotKit | json-render |
|---|---|---|---|---|
| **定位** | 规范/协议优先的跨语言框架 | 产品化平台（CLI + Cloud Dashboards + Gateway） | 全栈框架 + 云产品 | 轻量 JSON→UI 渲染库 |
| **技术路线** | 四语言 SDK + 多 renderer + conformance 测试；v1.0 破坏性 `@`-keys 迁移 | React 生态为主，向 Swift/Lynx 扩张；高度自动化（Changesets 同日闭环、bot 贡献） | 多框架集成（Angular、OpenAI Agents SDK、TanStack AI、Google ADK）+ ag-ui 协议生态 | 单一 TS 工具链，TS7/oxlint 现代化改造中 |
| **目标用户** | 框架/SDK 构建者、需要跨语言行为一致性的团队 | 借助 Thesys 平台快速交付 agent 应用的开发者 | 企业级全栈团队（含 Intelligence 云产品线） | 在文档/playground 场景嵌入生成式 UI 的开发者 |
| **成熟度** | pre-1.0 集中加固期 | 0.x 快速迭代 | v1.85 → 2.0 筹备 | 维护节奏 |

**生态分层结构**：a2ui 处于协议层，且已实际被下游消费（CopilotKit 依赖对齐、OpenUI 修复涉及其数据模型）；CopilotKit 与 OpenUI 是应用框架层的直接竞品——前者押注多框架企业集成与云服务，后者押注自家平台闭环与开发者转化漏斗；json-render 是长尾轻量选项，适合嵌入而非构建完整应用。

---

## 五、社区热度与成熟度

**热度排序（按总动态量）**：a2ui（69）> CopilotKit（31）> OpenUI（18）> json-render（3）

- **a2ui — 社区输入最活跃**：10+ 贡献者参与，issue 讨论触及规范级深度（#3536 七条评论的自洽性缺陷）。风险信号明确：**32 个待审 PR（含多个大型基建变更）构成评审带宽瓶颈**。
- **CopilotKit — 贡献质量标杆**：出现“当日报 bug、当日交带复现脚本的 fix PR”的样本；但 "reserved for students" 标签导致部分 issue 人为搁置（#7511 已 5 周）。
- **OpenUI — 迭代与自动化成熟度最高，但社区输入缺失**：单日 18 PR + 4 版本同日闭环，bot 贡献占比高；短板是 **issue 通道为零 + 4 个安全修复（含原型污染/XSS）未合并**，安全响应滞后于漏洞公开速度。
- **json-render — 接近维护模式**：3 个 PR 全部零评论、维护端零响应，“贡献有输入、响应端静默”。

**阶段划分**：快速迭代期——OpenUI（patch 高频）、CopilotKit（minor + 2.0 筹备）；成熟收敛期——a2ui（v1.0 前清障）；低速维护期——json-render。

---

## 六、值得关注的趋势信号

1. **大版本密集期将至，升级窗口需提前规划**。a2ui v1.0（`@`-前缀 envelope keys，影响全部 agent SDK）与 CopilotKit 2.0（多个 `!` 标记 PR 蓄势）都在路上。→ 开发者应锁定版本、跟踪迁移指引，把破坏性变更成本纳入 2026 年 Q4–2027 年 Q1 的技术规划。

2. **协议层开始外溢，互操作性萌芽**。A2UI 语义同时出现在 CopilotKit 与 OpenUI 的修复动态中。→ 选型时优先评估与开放协议对齐的方案，可降低框架锁定风险；协议本身（A2UI、AG-UI 并存）的走向值得持续跟踪。

3. **安全是生成式 UI 的内禀属性，不是附加项**。原型污染、XSS、scheme 绕过、代码求值在 OpenUI 集中暴露，a2ui 同步补 URL 安全策略。→ 接入方不能只依赖上游修复：模型可控内容进入渲染管线前，应自带输入消毒、域名 allowlist 与渲染沙箱。

4. **上游模型退役成为常态化运营风险**。三个项目同日处理模型切换/退役（gpt-6-luna 系、claude-sonnet-5.5 成为新默认；gpt-4-turbo 退役致 showcase 故障）。→ 应用层应抽象模型配置、避免硬编码模型名，并将文档/showcase 纳入模型退役监控；默认模型正向“支持 tool use 的低成本快速档”集中。

5. **AI 辅助贡献改变协作形态，评审带宽成为全生态瓶颈**。devin bot 单日提交 4 个安全修复，但漏洞细节在修复合并前已公开于 PR；同时 a2ui 32 个 PR 积压、OpenUI Swift SDK 挂起 8 天、CopilotKit #7591 挂起 5 周。→ 自动化提升吞吐的另一面是人工评审能力不足；安全类修复应建立私有披露通道，大型开源贡献方需建立 reviewer 轮值机制。

6. **错误可观测性正从“功能请求”变为“基线能力”**。fallbacks UI、组件级错误身份、流式部分输出清理在 a2ui/CopilotKit/json-render 同期出现。→ 技术选型评估表中建议新增“组件级错误隔离与回退”维度；对生产环境部署而言，这项能力的优先级应高于新组件数量。

---

*本报告基于四份项目日报的公开 GitHub 数据交叉分析生成，所有 Issue/PR 编号均可在对应仓库溯源。*

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目动态日报 — 2026-11-07

> 数据窗口：过去 24 小时 | Issues 更新 19 条（新开/活跃 12，关闭 7）| PR 更新 50 条（待合并 32，已合并/关闭 18）| 新版本发布 0 个

---

## 1. 今日速览

a2ui 今日保持**高活跃度**：19 条 Issue 更新与 50 条 PR 更新，参与者涵盖 innkuika、ditman、gspencergoog、jacobsimionato、nan-yu、karolkulesza 等十余位贡献者，社区生态健康。项目当前处于**v1.0 发布前的集中加固期**——"v1-bug-bash" 系列多个 P1 规范/SDK 缺陷今日集中关闭，同时破坏性的 `@`-前缀 envelope keys 迁移和 conformance 质量门禁建设持续推进。今日主旋律是**跨语言协同修复**：ditman 提交的 formatString catalogId 继承修复一次性覆盖 Python/TypeScript/Swift/Dart 四端加 conformance 测试。需要警惕的信号是：**待审 PR 积压达 32 个**，其中包含多个大型基础设施变更，评审带宽可能成为 v1.0 前的瓶颈。

---

## 2. 版本发布

今日无新版本发布。

⚠️ **前瞻提示**：[PR #4044](https://redirect.github.com/a2ui-project/a2ui/pull/4044)（`feat!`）一旦合入，将把 v1.0 组件 envelope 键切换为 `@catalogId`、`@metadata`、`@accessibility`、`@checks`，**影响全部 agent SDK**，属破坏性变更，建议关注后续 Release Notes 与迁移指引。

---

## 3. 项目进展

### 已合并/关闭的 PR（数据概览显示共 18 个，以下为可见重点）

- **[PR #3964](https://redirect.github.com/a2ui-project/a2ui/pull/3964)**（ditman）：`@a2ui/react` peer dependency 扩展至 `^17.0.0 || ^18.0.0 || ^19.0.0`，内置 `useSyncExternalStore`/`useId` 的 React 17 fallback，并新增 `test:react17` CI 步骤。对应关闭 [Issue #2372](https://redirect.github.com/a2ui-project/a2ui/issues/2372)。
- **[PR #3816](https://redirect.github.com/a2ui-project/a2ui/pull/3816)**（jacobsimionato）：新增 "Actions, Events and Functions" 概念页（`/concepts/actions-and-functions/`），修复 StarlightHeader.astro 中 Mermaid 代码块替换导致样式脚本脱落的问题。关闭 [Issue #3894](https://redirect.github.com/a2ui-project/a2ui/issues/3894)。
- **[PR #4017](https://redirect.github.com/a2ui-project/a2ui/pull/4017)**（jacobsimionato）：移除文档导航中的内部 P0 里程碑徽章，a2ui.org 面向公众的完成度提升。
- **[PR #4042](https://redirect.github.com/a2ui-project/a2ui/pull/4042)**（yjbanov）：当日提交并关闭——更新落地页 hero 标语，将 A2UI 定位为 "framework"（与 [PR #4039](https://redirect.github.com/a2ui-project/a2ui/pull/4039) 的 Core WG 措辞讨论相呼应）。

### Issue 层面的推进（v1.0 bug bash 收官信号）

单日关闭 7 个 Issue，且以 P1 为主，质量收尾扎实：[#3536](https://redirect.github.com/a2ui-project/a2ui/issues/3536)（agent-hosted functions 无法声明）、[#3535](https://redirect.github.com/a2ui-project/a2ui/issues/3535)（Python SDK 缺 RPC helpers）、[#3534](https://redirect.github.com/a2ui-project/a2ui/issues/3534)（validate_payload 不校验 callRendererFunction）、[#1923](https://redirect.github.com/a2ui-project/a2ui/issues/1923)（SchemaManager 模块化）、[#3894](https://redirect.github.com/a2ui-project/a2ui/issues/3894) / [#3895](https://redirect.github.com/a2ui-project/a2ui/issues/3895)（文档）。

### 待合并的重磅工作（32 个 open PR 中的关键项）

| PR | 内容 | 意义 |
|---|---|---|
| [#4044](https://redirect.github.com/a2ui-project/a2ui/pull/4044) / [#4037](https://redirect.github.com/a2ui-project/a2ui/pull/4037)（gspencergoog） | `@`-前缀 envelope keys 迁移（#4012 计划第二步/第一步） | v1.0 破坏性变更序列 |
| [#4043](https://redirect.github.com/a2ui-project/a2ui/pull/4043)（gspencergoog） | golden-transcript e2e 场景与 runner | 首次打通"agent SDK 解析结果在各 renderer 一致渲染"的端到端验证 |
| [#4036](https://redirect.github.com/a2ui-project/a2ui/pull/4036)（gspencergoog） | feature-coverage registry 与 CI 覆盖检查 | 发布前质量门禁 |
| [#4025](https://redirect.github.com/a2ui-project/a2ui/pull/4025)（karolkulesza） | Express 支持 v1.0 `@index` 系统函数（fixes [#3725](https://redirect.github.com/a2ui-project/a2ui/issues/3725)） | 解除默认格式核心功能缺失 |
| [#4027](https://redirect.github.com/a2ui-project/a2ui/pull/4027)–[#4031](https://redirect.github.com/a2ui-project/a2ui/pull/4031)（ditman） | 四语言 formatString catalogId 继承修复 + conformance 用例（关联 #3727） | 跨语言一致性 |
| [#4041](https://redirect.github.com/a2ui-project/a2ui/pull/4041)（innkuika） | surface fallbacks API（pending/error 组件回退 UI） | 渲染容错能力 |
| [#3831](https://redirect.github.com/a2ui-project/a2ui/pull/3831)（gspencergoog） | `a2ui lint` catalog schema 校验命令 | 工具链完善 |

---

## 4. 社区热点

按评论数排序：

1. **[Issue #3536](https://redirect.github.com/a2ui-project/a2ui/issues/3536)（7 评论，已关闭，P1）** — v1.0 规范中 agent-hosted functions 的声明机制不自洽：`callAgentFunction` 要求函数在 catalog 中声明，但 renderer 仅在函数*未本地注册*时才路由到 agent，`allowedCallers` 语义又只覆盖 renderer 侧。该问题横跨 spec、agent SDK、react adapter 与四种语言，是 v1-bug-bash 中讨论最深的规范级缺陷，今日关闭表明规范层已收敛。
2. **[Issue #2372](https://redirect.github.com/a2ui-project/a2ui/issues/2372)（6 评论，已关闭）** — React 17 用户长期被 peer deps 阻塞（0.8.0→0.10.2 全部版本），实际运行时特性完全兼容。诉求是降低存量代码库接入门槛，已由 #3964 落地。
3. **[Issue #4015](https://redirect.github.com/a2ui-project/a2ui/issues/4015)（4 评论，开放）** — TS/Dart 的 `MessageProcessor` 出站路由 API 割裂（`actionHandler`/`onAction` vs `outboundListener`），典型的 API 简化诉求。
4. **[Issue #3725](https://redirect.github.com/a2ui-project/a2ui/issues/3725)（3 评论，开放，P1）** — Express（现为默认格式）无法表达 `@index` 函数，导致带行位置的列表组件无法生成；修复 PR #4025 已就绪待审。
5. **[Issue #1045](https://redirect.github.com/a2ui-project/a2ui/issues/1045)（3 评论，开放）** — `generate_system_prompt()` 无条件注入 `<a2ui-json>` 指令，与 `SendA2uiToClientToolset` 冲突导致非确定性工具调用，长期未解。

---

## 5. Bug 与稳定性

按严重程度排列：

| Issue | 级别 | 问题 | Fix 状态 |
|---|---|---|---|
| [#3725](https://redirect.github.com/a2ui-project/a2ui/issues/3725) | P1 | Express 无法表达 `@index`（功能缺失性 bug） | ✅ [PR #4025](https://redirect.github.com/a2ui-project/a2ui/pull/4025) 待合并 |
| [#3945](https://redirect.github.com/a2ui-project/a2ui/issues/3945) | P1 | pub.dev 上已发布的 Dart 三包无法组合使用，CI 从源码解析故无法拦截 | ❌ 无 fix PR，需补发布产物 CI 验证 |
| [#3944](https://redirect.github.com/a2ui-project/a2ui/issues/3944) | P1 | `a2ui_core` 破坏性发布未同步提升 workspace 依赖约束，pub 解析失败（作者称已发生两次） | ❌ 无 fix PR，需固化发布流程 |
| [#3993](https://redirect.github.com/a2ui-project/a2ui/issues/3993) | P2 (bug) | 三个 web renderer 均不捕获组件渲染异常，`surface.onError` 拿不到组件身份 | ❌ 相关增强 [#4018](https://redirect.github.com/a2ui-project/a2ui/issues/4018)，无直接 fix |
| [#3949](https://redirect.github.com/a2ui-project/a2ui/issues/3949) | P2 (bug) | Angular 多 spec 测试环境 NG0205（Injector already destroyed），injector 缓存未随 TestBed 刷新 | ❌ 无 fix PR |
| [#1045](https://redirect.github.com/a2ui-project/a2ui/issues/1045) | P2 (bug) | 系统提示与工具集冲突，非确定性工具使用 | ❌ needs review，已滞留 7 个月 |

值得肯定的是：#3944/#3945 两个 Dart 发布链路问题虽未修复但已被识别并标 P1；而 [#3946](https://redirect.github.com/a2ui-project/a2ui/issues/3946)（文档仍指向已 discontinued 的 `genui`）与之叠加，构成当前 Flutter 用户完整的受阻链路。

---

## 6. 功能请求与路线图信号

**今日新提：**
- **[Issue #4046](https://redirect.github.com/a2ui-project/a2ui/issues/4046)**（ditman）：将 `formatString` 的 catalog 作用域与 v1.0 AST 解析"去特殊化"——与作者自身的 #3727 系列修复同源，**落地概率高**。
- **[Issue #4045](https://redirect.github.com/a2ui-project/a2ui/issues/4045)**（nan-yu）：可配置 URL 安全策略与域名 allowlist（当前仅按 scheme 过滤，存在数据外泄面）——横跨四语言 SDK 的安全增强，契合 v1.0 加固主线，**纳入可能性较高**。

**近期活跃、有方向支撑：**
- **[Issue #4018](https://redirect.github.com/a2ui-project/a2ui/issues/4018)**（retz8）：onError 报告附带 `componentId`/`componentType`——与 #3993 及 fallbacks PR #4041 共同构成错误可观测性主题。
- **[Issue #3257](https://redirect.github.com/a2ui-project/a2ui/issues/3257)**：SwiftUI renderer 的 Basic Catalog 样式定制（对齐 Web 的 CSS 变量与 Flutter 的 `ThemeData`）——渲染器一致性诉求，暂无 PR。

**路线图信号（v1.0 倒计时特征明显）：**
1. `@`-前缀 envelope keys 两步计划（#4037 → #4044，master plan #4012）——明确的破坏性变更序列；
2. conformance 基础设施三连（#4043 golden e2e、#4036 coverage registry、#4031 用例）——发布前质量门禁建设；
3. v1-bug-bash P1 批量关闭——规范级缺陷清零。

**综合判断**：v1.0 是下一个版本的明确目标，上述 PR 的合并进度可直接视作 v1.0 就绪度指标。

---

## 7. 用户反馈摘要

- **存量代码接入门槛**：React 17 用户（#2372）长期需 `--legacy-peer-deps` 强装，今日修复后痛点消除，反映社区对渐进采用的强烈需求。
- **Flutter 新用户体验受损**：官网与 README 引导安装 pub.dev 上已 discontinued 的 `flutter_genui`（#3946），叠加发布包不可组合使用（#3945），这是当前最完整、最紧急的**用户流失链路**。
- **Agent 开发者负担重**：v1.0 前每个 agent 需手写 RPC plumbing（#3535）；system prompt 与工具集冲突导致行为不确定（#1045）——agent SDK 易用性仍是短板。
- **错误可观测性不足**：组件渲染抛错时无捕获、无组件身份（#3993、#4018），开发者排查困难，期待结构化错误上报。
- **多语言一致性期望**：用户默认 TS/Dart/Swift/Python 行为一致（#4015、#3257），任何单语言滞后都会被迅速报告——这也是项目坚持 conformance 测试的社区基础。

---

## 8. 待处理积压

- **[Issue #1045](https://redirect.github.com/a2ui-project/a2ui/issues/1045)**（P2 bug，2026-04-01 创建，**已滞留 7 个月**）：状态 needs review + first-line-handled，3 条评论后停滞，影响所有 tool-based A2UI emission 用户，建议优先排期。
- **Dart 发布链路三连（均 P1，2026-11-03 创建，评论 0–1 条）**：[#3944](https://redirect.github.com/a2ui-project/a2ui/issues/3944)、[#3945](https://redirect.github.com/a2ui-project/a2ui/issues/3945)、[#3946](https://redirect.github.com/a2ui-project/a2ui/issues/3946)。作者 andrewkolos 注明 #3944 "已出现两次"，值得流程级修复而非个案处理。
- **PR 评审积压：32 个待合并**，其中含多个大体量变更——[#4044](https://redirect.github.com/a2ui-project/a2ui/pull/4044)（破坏性、跨全部 SDK）、[#4043](https://redirect.github.com/a2ui-project/a2ui/pull/4043)（新 e2e 基建）、[#3831](https://redirect.github.com/a2ui-project/a2ui/pull/3831)（新 CLI 命令）、[#3938](https://redirect.github.com/a2ui-project/a2ui/pull/3938)（web_core schema 解析重构）。评审带宽可能成为 v1.0 前的主要瓶颈，建议分批评审或建立 reviewer 轮值机制。
- **[#3725](https://redirect.github.com/a2ui-project/a2ui/issues/3725) + [PR #4025](https://redirect.github.com/a2ui-project/a2ui/pull/4025)**：P1 且修复已就绪，建议尽快评审合并，解除 Express 默认格式下的核心功能缺失。

---

*本报告基于 GitHub 公开数据自动生成，Issue/PR 链接均指向 a2ui-project/a2ui 仓库。评论数为数据抓取时点值。*

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目日报 · 2026-11-07

> 数据来源：github.com/thesysdev/openui 过去 24 小时活动统计

---

## 1. 今日速览

过去 24 小时仓库共处理 **18 条 PR 更新**（待合并 8 条，合并/关闭 10 条），并发布 **4 个新版本**，继续保持高频迭代节奏。Issue 通道零新增、零活跃，社区互动完全集中在 PR 侧。当日工作呈现三条主线：**Dashboards 功能全链路打磨**（渲染器、文档、示例、模型推荐）、**CLI 脚手架体验优化**（登录时机、埋点、AGENTS.md 清理）、以及由 devin-ai-integration[bot] 单日提交的 **4 个安全修复 PR**（原型污染、XSS、URL scheme 绕过等）。整体健康度良好——Changesets 驱动的"合并→发版"同日闭环运转顺畅；但 4 个安全修复均未合并，建议列为最高优先级。

---

## 2. 版本发布

共 4 个版本，**全部为 patch 级，无破坏性变更**。

| 包名 | 版本 | 关键变更 | 关联 PR |
|---|---|---|---|
| @​openuidev/react-ui | 0.18.5 | 新增 `defineLiveArtifactRenderer`，Cloud Dashboards 可开箱接入 AgentInterface | [#1575](https://redirect.github.com/thesysdev/openui/pull/1575) |
| @​openuidev/react-headless | 0.18.5 | 无实质变更（随 workspace 版本对齐发布） | — |
| @​openuidev/dashboard-library | 0.0.2 | `DashboardCardHeader` 标题与 `EntityList` 值支持数字类型 | [#1581](https://redirect.github.com/thesysdev/openui/pull/1581) |
| @​openuidev/cli | 0.6.3 | `setup-agent` 不再向 `AGENTS.md` 写入刷新提示注释 | [#1583](https://redirect.github.com/thesysdev/openui/pull/1583) |

**迁移注意事项：**
- **dashboard-library 用户务必升级**：0.0.1 于 11 月 3 日发布，早于数字值修复 [#1552](https://redirect.github.com/thesysdev/openui/pull/1552) 的合并，因此 0.0.1 不含该修复，直接升到 0.0.2 即可（[#1580](https://redirect.github.com/thesysdev/openui/pull/1580)/[#1581](https://redirect.github.com/thesysdev/openui/pull/1581) 的发布说明明确了这一间隙）。
- **CLI 0.6.3**：因 Claude Code 会剥离 HTML 注释，原 `AGENTS.md` 中的注释提示改为纯文本写入 skill 末尾；`openui:start` / `openui:end` 标记保留，依赖这些标记的自定义脚本不受影响。

---

## 3. 项目进展

> 说明：数据源未区分"已合并"与"已关闭"；其中 #1575 / #1581 / #1583 / #1582 已通过发布说明确认为合并，其余为当日关闭。

### 已合并/关闭（10 条）

**Dashboards 主线（5 条）——当日最大推进方向**
- [#1575](https://redirect.github.com/thesysdev/openui/pull/1575) **feat(react-ui): `defineLiveArtifactRenderer`**：此前 Cloud Dashboards 接入 AgentInterface 需手写 `defineArtifactRenderer` 包装 `LiveArtifactRenderer`，现提供与 slides/report 渲染器一致的官方封装。已随 react-ui@0.18.5 发布。
- [#1586](https://redirect.github.com/thesysdev/openui/pull/1586) 首页 hero 对比、Dashboards 页、Gateway hero 的设计打磨（[#1541](https://redirect.github.com/thesysdev/openui/pull/1541) 后续）。
- [#1587](https://redirect.github.com/thesysdev/openui/pull/1587) 文档与示例统一推荐 `anthropic/claude-sonnet-5.5`，并标注 credits 说明。
- [#1572](https://redirect.github.com/thesysdev/openui/pull/1572) assistant-ui-dashboards 示例默认模型由 sonnet-4.6 升至 sonnet-5.5。
- [#1581](https://redirect.github.com/thesysdev/openui/pull/1581) / [#1580](https://redirect.github.com/thesysdev/openui/pull/1580) dashboard-library 0.0.2 的 changeset 发布 PR（#1580 为重复提交，已关闭）。

**CLI 体验主线（3 条）**
- [#1574](https://redirect.github.com/thesysdev/openui/pull/1574) `openui create` 将登录移至脚手架与依赖安装之后的最后一步（任意键生成 API key，Esc 跳过）。
- [#1584](https://redirect.github.com/thesysdev/openui/pull/1584) 补齐 create 漏斗埋点，保持 `funnel_version` 与 step key 不变，兼容既有 PostHog 看板。
- [#1583](https://redirect.github.com/thesysdev/openui/pull/1583) 移除 `AGENTS.md` 刷新注释。

**发布流程（1 条）**
- [#1582](https://redirect.github.com/thesysdev/openui/pull/1582) Changesets 自动发版 PR，合并后产出上述 4 个版本。

**小结**：Dashboards 已完成"组件库 → 渲染器 → 文档 → 示例 → 模型推荐"的端到端闭环，单日落地 5 个相关 PR + 1 个组件库版本，处于收尾冲刺阶段。

### 待合并（8 条）
- [#1573](https://redirect.github.com/thesysdev/openui/pull/1573) Dashboards 接入四种聊天前端（AgentInterface / assistant-ui / CopilotKit / AI SDK `useChat`）的文档补齐——QA 仅凭文档构建 4 个应用验证，发现仅 `useChat` 路径有端到端覆盖。
- [#1576](https://redirect.github.com/thesysdev/openui/pull/1576)–[#1579](https://redirect.github.com/thesysdev/openui/pull/1579) 四个安全修复（详见第 5 节）。
- [#1521](https://redirect.github.com/thesysdev/openui/pull/1521) Swift SDK、[#1559](https://redirect.github.com/thesysdev/openui/pull/1559) ReactLynx 示例、[#1567](https://redirect.github.com/thesysdev/openui/pull/1567) 模板更新（详见第 6/8 节）。

---

## 4. 社区热点

今日无 Issue 活动，数据源亦未提供评论数，无法按互动量排序。值得关注的信号：

- **社区大额贡献**：[#1521](https://redirect.github.com/thesysdev/openui/pull/1521)（@​zyfn）原生 Swift SDK，将 OpenUI Lang 引入 iOS/macOS + SwiftUI 渲染，关联 [#393](https://redirect.github.com/thesysdev/openui/issues/393)，自 10-30 开放至今仍在评审；[#1559](https://redirect.github.com/thesysdev/openui/pull/1559)（@​gaoachao）ReactLynx 全栈聊天示例，基于官方 `@lynx-js/genui/openui` 运行时，取代更早的 [#778](https://redirect.github.com/thesysdev/openui/pull/778)。
- **自动化贡献占比高**：devin-ai-integration[bot] 单日提交 5 个 PR（含 4 个安全修复），thesys-pr-creator[bot] 承担发版与模板刷新，工程自动化程度高——但也提示人工评审带宽可能成为吞吐瓶颈。
- **核心团队全链路活跃**：@​AbhinRustagi 单日主导 4 个 PR，@​i-subham23、@​ankit-thesys、@​pd-builds、@​abhithesys 各有产出。

**诉求推断**（因无用户输入，仅为维护者动作反推）：当前优先级是 Dashboards 的开发者体验（文档可复现性、模型选型指引）与 CLI 激活漏斗的度量完善。

---

## 5. Bug 与稳定性

今日无用户报告的 Bug（0 Issue），但存在 **4 个尚未合并的安全修复 PR**，按严重程度排列：

| 严重度 | PR | 问题 | 状态 |
|---|---|---|---|
| 🔴 高 | [#1576](https://redirect.github.com/thesysdev/openui/pull/1576) | **a2ui 原型污染**：`applyDataModelUpdate` 的 JSON Pointer 解析对 `/__proto__/polluted` 类路径无防护，一条 `updateDataModel` 消息即可污染共享 `Object.prototype` | 待合并 |
| 🔴 高 | [#1578](https://redirect.github.com/thesysdev/openui/pull/1578) | **react-email XSS**：`EmailMarkdown` 将模型生成的 markdown 经 marked 转换后通过 `dangerouslySetInnerHTML` 直接注入且无消毒；模型可控的 style 值亦未校验 | 待合并 |
| 🟠 中高 | [#1577](https://redirect.github.com/thesysdev/openui/pull/1577) | **URL scheme 绕过**：`@OpenUrl` 动作未走 `safeOpenUrl` 统一入口，可绕过 `javascript:`/`data:`/`vbscript:`/`file:` 黑名单（含控制字符混淆） | 待合并 |
| 🟡 中 | [#1579](https://redirect.github.com/thesysdev/openui/pull/1579) | **lang-core 意外代码求值**：运行时按 JSON 形状判断"是否为代码"，元素形数据可能被误判并求值 | 待合并 |

**已修复并随版发布**：dashboard-library 数字值问题（[#1552](https://redirect.github.com/thesysdev/openui/pull/1552)，随 0.0.2 发布）；CLI create 漏斗埋点缺失/错发（[#1584](https://redirect.github.com/thesysdev/openui/pull/1584)）。

**建议**：#1576/#1578 属可由外部输入远程触发的安全缺陷，且漏洞细节已在公开 PR 中描述，建议维护者优先评审合入，并在发布说明中标注受影响版本范围。

---

## 6. 功能请求与路线图信号

今日无新功能请求 Issue，从 PR 流可读出四条路线图信号：

1. **多端原生渲染扩展**：[#1521](https://redirect.github.com/thesysdev/openui/pull/1521)（Swift/SwiftUI）与 [#1559](https://redirect.github.com/thesysdev/openui/pull/1559)（ReactLynx）若相继合入，OpenUI 将从 React Web 生态扩展至 iOS/macOS 与 Lynx 原生端，属平台级扩张信号。
2. **Dashboards 全前端覆盖**：[#1573](https://redirect.github.com/thesysdev/openui/pull/1573) 表明官方目标是让四条聊天前端链路均有可复现文档，预计随下个文档更新落地。
3. **模型选型标准化**：[#1572](https://redirect.github.com/thesysdev/openui/pull/1572)/[#1587](https://redirect.github.com/thesysdev/openui/pull/1587) 集中推荐 `anthropic/claude-sonnet-5.5` 并完善 `OPENUI_DASHBOARD_MODEL` 说明，后续示例与文档预计围绕该模型调优。
4. **CLI 转化漏斗系统化优化**：[#1574](https://redirect.github.com/thesysdev/openui/pull/1574)（登录后置）+ [#1584](https://redirect.github.com/thesysdev/openui/pull/1584)（埋点补全）显示团队在用数据驱动 onboarding 改进，后续可能继续调整 create 流程步骤。

---

## 7. 用户反馈摘要

**数据受限说明**：今日 Issue 为 0、评论数缺失，无直接用户评论可供提炼。可用的间接信号：

- [#1573](https://redirect.github.com/thesysdev/openui/pull/1573) 的 QA 过程（仅凭文档从零构建 4 个应用）侧面反映：**目前仅 AI SDK `useChat` 路径可完全按文档复现**，使用 AgentInterface、assistant-ui、CopilotKit 的开发者在对接 Dashboards 时可能遭遇文档断点——这正是该 PR 要解决的问题。
- dashboard-library 0.0.1→0.0.2 的发布间隙说明已有开发者实际向 `DashboardCardHeader`/`EntityList` 传入数字值并触发问题，属于真实使用场景暴露的缺陷。

建议持续观察 Issue 通道恢复活跃后的反馈；当前窗口的痛点主要需从 docs QA 与修复 PR 的触发场景反推。

---

## 8. 待处理积压

| 项目 | 开放时长 | 类型 | 风险/价值 | 建议 |
|---|---|---|---|---|
| [#1521](https://redirect.github.com/thesysdev/openui/pull/1521) Swift SDK | 8 天（10-30 起） | 社区大型特性 PR | 高价值（iOS/macOS 生态） | 长期未合并易挫伤贡献者，建议给出评审结论或里程碑 |
| [#1576](https://redirect.github.com/thesysdev/openui/pull/1576) / [#1578](https://redirect.github.com/thesysdev/openui/pull/1578) 安全修复 | 1 天 | 原型污染 / XSS | 高风险 | **优先评审** |
| [#1577](https://redirect.github.com/thesysdev/openui/pull/1577) / [#1579](https://redirect.github.com/thesysdev/openui/pull/1579) 安全修复 | 1 天 | scheme 绕过 / 意外求值 | 中高风险 | 优先评审 |
| [#1559](https://redirect.github.com/thesysdev/openui/pull/1559) ReactLynx 示例 | 2 天 | 社区示例 PR | 中价值（其取代的 #778 挂起更久） | 评审合并或给出反馈 |
| [#1567](https://redirect.github.com/thesysdev/openui/pull/1567) 模板/示例更新 | 2 天 | 机器人 chore PR | 低风险例行更新 | 例行合入 |

> 注：Issue 通道今日无数据，无法识别长期未响应的 Issue；如需完整积压视图，建议补充 Issue 侧 stale 列表。

---

**健康度小结**：迭代速度 ⭐⭐⭐⭐⭐（18 PR/日 + 4 版本同日发布）｜自动化成熟度 ⭐⭐⭐⭐⭐（Changesets + 机器人贡献）｜安全响应待加强（4 个安全 PR 待合）｜社区输入今日缺失（0 Issue），长期需关注用户反馈通道的活跃度。

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render 项目动态日报

**日期**：2026-11-07 ｜ **仓库**：[vercel-labs/json-render](https://github.com/vercel-labs/json-render)

| 指标 | 数值 |
|---|---|
| Issues（24h） | 0 新开 / 0 活跃 / 0 关闭 |
| PRs（24h） | 3 活跃（3 待合并，0 合并/关闭） |
| Releases | 0 |

---

## 1. 今日速览

项目今日活跃度**中等偏低**：过去 24 小时无新增 Issue、无版本发布，也无任何 PR 被合并或关闭。全部活跃信号来自 3 个处于 Open 状态的待审 PR——[#456](https://redirect.github.com/vercel-labs/json-render/pull/456)（chat 流式卡片错误处理修复）、[#455](https://redirect.github.com/vercel-labs/json-render/pull/455)（TypeScript 7 升级）、[#454](https://redirect.github.com/vercel-labs/json-render/pull/454)（默认推理模型切换）。三个 PR 均无评论与 Reactions，社区互动近乎静默，项目当前呈现"**贡献有输入、维护端待响应**"的态势。

## 2. 项目进展

今日**无合并/关闭事件**，主分支代码零变更，项目未有实质性向前推进。但待审 PR 的内容价值值得关注：

- **[#456](https://redirect.github.com/vercel-labs/json-render/pull/456) `fix(chat): give CardSpecError the message streamCard already posted`**（作者：sachinmour，今日创建）
  修复 `streamCard` 的时序缺陷：当前实现在校验最终 spec **之前**就将部分卡片（partial card）post 到线程，一旦最终 spec 校验失败（如 `limits` 仅作用于最终卡片），`CardSpecError` 抛出时不完整卡片已残留在对话中，与文档"可 retry 或 edit 该消息"的承诺不符。
- **[#455](https://redirect.github.com/vercel-labs/json-render/pull/455) `Upgrade to TypeScript 7`**（作者：ctate，11-06 创建）
  影响面较大的工程改造：packages 与 docs 站点迁移至 TS 7；以 `tsc` declarations 替换 tsup 的 dts 产物；docs 站点与 UI 包以 oxlint 替换 ESLint。Svelte 相关包与 examples 因工具链依赖 TS 5 API 暂缓迁移。
- **[#454](https://redirect.github.com/vercel-labs/json-render/pull/454) `Use openai/gpt-6-luna-fast for docs chat and playground`**（作者：lahfir，11-06 创建）
  将 docs chat 与 playground 默认模型由 `anthropic/claude-haiku-4.5` 切换为 `openai/gpt-6-luna-fast`（AI Gateway ID，支持 tool use），并同步更新 `apps/web/.env.example`；`AI_GATEWAY_MODEL` 覆盖机制保留。

## 3. 社区热点

今日 **0 条 Issue 更新**，3 个 PR 评论数与 Reactions 均为零，**无真正意义上的讨论热点**。从 PR 主题可推断潜在关注方向：

- **API 可靠性**（[#456](https://redirect.github.com/vercel-labs/json-render/pull/456)）：流式卡片生成的错误恢复语义是贡献者关注点；
- **工具链现代化**（[#455](https://redirect.github.com/vercel-labs/json-render/pull/455)）：TS 7 + oxlint 的组合指向构建与 lint 链路简化；
- **推理成本/性能**（[#454](https://redirect.github.com/vercel-labs/json-render/pull/454)）：默认模型切换反映对 playground/docs 场景延迟与成本的持续调优。

## 4. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 中 | `streamCard` 在最终 spec 校验前 post 部分卡片；校验失败（如 `limits` 触发）时，`CardSpecError` 抛出但**不完整卡片已残留在对话线程中**，错误恢复行为与文档描述不一致 | **已有 fix PR** [#456](https://redirect.github.com/vercel-labs/json-render/pull/456)，等待审查 |

- 该问题影响流式卡片生成的错误路径：用户按文档指引 retry/edit 时，线程中已存在无效/不完整的 UI 卡片，可能污染对话上下文。
- 今日无其他新报告的崩溃或回归问题。

## 5. 功能请求与路线图信号

今日无功能请求 Issue，但结合 PR 可读出三条路线图信号：

1. **工程基础升级**：[#455](https://redirect.github.com/vercel-labs/json-render/pull/455) 的 TS 7 迁移若合并，将为后续版本提供新语言特性与更快类型检查的基础，但需关注 tsup dts → tsc declarations 的类型产物兼容性。
2. **模型层解耦与多供应商支持**：[#454](https://redirect.github.com/vercel-labs/json-render/pull/454) 保留 `AI_GATEWAY_MODEL` 覆盖机制，表明可配置多模型仍是设计原则，默认模型向支持 tool use 的低成本快速模型倾斜。
3. **流式 API 语义打磨**：[#456](https://redirect.github.com/vercel-labs/json-render/pull/456) 属于正确性修复，暗示 chat/streaming API 的错误处理是近期打磨重点，有可能随下个版本一同发布。

## 6. 用户反馈摘要

今日**无 Issue 评论数据可供提炼**，无法直接还原用户痛点。间接信号：

- [#456](https://redirect.github.com/vercel-labs/json-render/pull/456) 描述的场景（`limits` 仅约束最终卡片 + 流式部分卡片已先行 post）来自真实使用路径，说明有用户在实际使用中触发了流式卡片的校验失败分支，且对**文档承诺与运行时行为的一致性**有明确期待。

## 7. 待处理积压

- **3 个 PR 等待维护者首轮 review**，建议处理优先级：
  1. [#456](https://redirect.github.com/vercel-labs/json-render/pull/456) — bug fix，直接影响用户错误恢复体验，宜优先；
  2. [#455](https://redirect.github.com/vercel-labs/json-render/pull/455) — 多包工程迁移，变更面大，建议尽快安排审查并确认 CI 覆盖；
  3. [#454](https://redirect.github.com/vercel-labs/json-render/pull/454) — 配置级变更，风险较低。
- 本次数据窗口未包含长期未响应的 Issue/PR 列表，**无法评估历史积压**；建议拉取 30 天以上无活动的条目以获得完整积压画像。

---

**健康度小结**：输入端贡献稳定但单薄（3 PR），维护响应今日为零（0 合并/0 关闭），社区互动静默（0 评论/0 Reactions），发布节奏暂停。短期需关注三个待审 PR 的审查进度，尤其是 [#456](https://redirect.github.com/vercel-labs/json-render/pull/456) 的 bug 修复落地速度，这将直接影响流式卡片用户的使用体验。

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目日报
**日期：2026-11-07 ｜ 数据窗口：过去 24 小时**

---

## 1. 今日速览

过去 24 小时 CopilotKit 呈现高活跃、快节奏状态：PR 更新 28 条（已合并/关闭 13 条、待合并 15 条），Issues 活跃 3 条（关闭 0 条），并发布了新版本 v1.85.0。项目主线清晰——"发布落地 + 生态扩张"：新版带来 Angular 原生 Generative UI 与 Intelligence 可靠性修复，同日出现 [2.0.0 WIP PR（#8185）](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185)，释放大版本筹备信号。社区贡献质量突出：有贡献者当日"报 bug 即交 fix PR"（#8251 → #8252），另有多个社区 PR 主动跟进 OpenAI 模型退役等外部依赖变更。Issue 侧反馈集中在错误可观测性、可访问性与日志噪音，无崩溃级报告。综合 PR 吞吐（触达 PR 中约 46% 已关闭）、自动化流水线（copilotkit-bot、renovate）运转正常来看，项目健康度较高。

---

## 2. 版本发布

### v1.85.0（2026-11-06 发布）
🔗 [Release Notes](https://github.com/CopilotKit/CopilotKit/releases/tag/v1.85.0) ｜ 发布 PR：[#8246](https://redirect.github.com/CopilotKit/CopilotKit/pull/8246)

**更新内容：**
- **Angular 原生 Generative UI**：Generative UI 能力正式扩展至 Angular 生态；
- **Intelligence analytics context 转发**：Intelligence 运行现在会转发分析上下文；
- **可靠性修复**：修复 Intelligence run 中途停止（run stops）及 A2UI 渲染相关的多个问题。

**迁移注意事项：**
- 本版 Release Notes 未标注破坏性变更，预计可平滑升级；
- 但需关注**下一版本可能引入的破坏性变更**：[#8254](https://redirect.github.com/CopilotKit/CopilotKit/pull/8254)（React Native `headers` builder 求值时机改为请求发送时，带 `!` 破坏性标记）与 [#7591](https://redirect.github.com/CopilotKit/CopilotKit/pull/7591)（`emit_tool_calls` 类型收窄为 boolean）目前均为待合并状态，建议提前评估依赖面。

---

## 3. 项目进展

**本窗口已合并/关闭（13 条）中的重点：**

| PR | 内容 | 意义 |
|---|---|---|
| [#8246](https://redirect.github.com/CopilotKit/CopilotKit/pull/8246) | v1.85.0 发布 | 例行 minor 版本交付 |
| [#8224](https://redirect.github.com/CopilotKit/CopilotKit/pull/8224) | `BuiltInAgent` 可运行于 TanStack AI `chat()`，选项由 model adapter 类型化（`!` 破坏性标记） | 运行时与 TanStack AI 生态深度打通，类型安全增强 |
| [#8227](https://redirect.github.com/CopilotKit/CopilotKit/pull/8227) | OpenAI chat/Responses 默认模型统一为 `gpt-6-luna` | 默认模型策略收敛（保留覆盖能力） |
| [#8249](https://redirect.github.com/CopilotKit/CopilotKit/pull/8249) | 修复 Google Antigravity logo 占位符问题 | 文档质量修补 |
| [#8130](https://redirect.github.com/CopilotKit/CopilotKit/pull/8130) / [#8078](https://redirect.github.com/CopilotKit/CopilotKit/pull/8078) | 替换 deep-agents-job-search 中已退役的 `gpt-4-turbo` | 修复 showcase 开箱即坏问题 |
| [#8248](https://redirect.github.com/CopilotKit/CopilotKit/pull/8248) / [#8170](https://redirect.github.com/CopilotKit/CopilotKit/pull/8170) | docs 生产发布 | 文档流水线例行运转 |

**待合并（15 条）中的关键推进：**
- [#8185](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185) **"2.0.0"（WIP）**——大版本筹备启动；
- [#8242](https://redirect.github.com/CopilotKit/CopilotKit/pull/8242) + [#8245](https://redirect.github.com/CopilotKit/CopilotKit/pull/8245)：**OpenAI Agents SDK (Python) 集成** showcase 与配套文档（文档已 stack 在集成 PR 上，合入临近）；
- [#8247](https://redirect.github.com/CopilotKit/CopilotKit/pull/8247)：Intelligence 长线程一次性爆发加载（`coalesce`）+ Safari 布局修复——性能重点投入；
- [#8252](https://redirect.github.com/CopilotKit/CopilotKit/pull/8252)：修复 #8251 日志告警问题；
- [#8254](https://redirect.github.com/CopilotKit/CopilotKit/pull/8254)：RN `headers` builder 求值时机与 #7510 对齐；
- [#8255](https://redirect.github.com/CopilotKit/CopilotKit/pull/8255)：Google ADK Python bridge 与 A2UI SDK 依赖对齐，regenerate starter lockfiles。

**整体评估：** 单日关闭 13 个 PR + 交付一个 minor 版本，同时 2.0.0 与新集成并行推进，工程节奏快、层次清晰（功能 / 修复 / 文档 / 依赖自动化四线并进）。

---

## 4. 社区热点

** 🔥 评论最多：[#7511](https://redirect.github.com/CopilotKit/CopilotKit/issues/7511)（3 条评论，今日仍有更新）**
`HEADER_RESOLUTION_FAILED` 事件丢失 agent/thread 上下文——当 `headers` builder 失败时，core 只上报一条带 `context: { source: "headers" }` 的事件并吞掉后续的 `AGENT_RUN_FAILED` / `AGENT_CONNECT_FAILED`，且事件不带 `agentId`/`threadId`，导致多 agent 场景下无法定位失败来源。**诉求本质是错误可观测性**：错误应只报一次，但不能丢失定位信息。值得注意的是该 issue 带有 "reserved for students" 标签（疑似留给学生贡献者计划的认领任务），已开放约 5 周。

**[#8239](https://redirect.github.com/CopilotKit/CopilotKit/issues/8239)（1 条评论）：** Inspector 新闻/公告控件未通过对比度与可访问名称（accessible-name）检查，由 Omnara starter PR [#7942](https://redirect.github.com/CopilotKit/CopilotKit/pull/7942) 引入的全页 axe 扫描暴露，且有 CI 失败证据。反映社区对**无障碍合规与 CI 质量门禁**的诉求。

**[#8251](https://redirect.github.com/CopilotKit/CopilotKit/issues/8251)（0 评论，但响应链最快）：** Intelligence 网关为转发事件附加 `organization_id`/`project_id`，导致每事件触发两条 `[ag-ui][enforce]` 警告。报告者 Laptopmini **当日即提交带最小复现脚本的修复 PR [#8252](https://redirect.github.com/CopilotKit/CopilotKit/pull/8252)**——高质量社区贡献的典型样本。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 状态 | 问题 | Fix PR |
|---|---|---|---|---|
| 🟠 中 | [#7511](https://redirect.github.com/CopilotKit/CopilotKit/issues/7511) | OPEN（2026-09-29 起，今日活跃） | 错误事件缺 `agentId`/`threadId` 且吞掉后续失败事件，影响生产排障 | **部分**：[#8254](https://redirect.github.com/CopilotKit/CopilotKit/pull/8254) 修复 RN 侧 headers 求值时机（对齐 #7510），但事件上下文透传尚无针对性 PR |
| 🟠 中 | [#8239](https://redirect.github.com/CopilotKit/CopilotKit/issues/8239) | OPEN | Inspector 可访问性违规，已实际阻塞 Omnara starter CI | 未见 |
| 🟡 低 | [#8251](https://redirect.github.com/CopilotKit/CopilotKit/issues/8251) | OPEN | Intelligence 每事件两条 `[ag-ui][enforce]` 日志告警，日志噪音 | [#8252](https://redirect.github.com/CopilotKit/CopilotKit/pull/8252) 已当日提交 |
| 🟡 低（外部依赖） | — | 已修复 | `gpt-4-turbo` 于 2026-10-23 退役，导致 deep-agents-job-search 新检出即失败 | [#8130](https://redirect.github.com/CopilotKit/CopilotKit/pull/8130) / [#8078](https://redirect.github.com/CopilotKit/CopilotKit/pull/8078) 已关闭 |

**稳定性小结：** 无崩溃级报告；问题集中在错误可观测性、无障碍与日志噪音，风险可控。v1.85.0 本身已包含 Intelligence run stops 与 A2UI 渲染修复，稳定性在主动改善通道中。

---

## 6. 功能请求与路线图信号

- **2.0.0 大版本**：[#8185](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185)（WIP，明确 "do not merge"）。结合同期的破坏性 PR（[#8254](https://redirect.github.com/CopilotKit/CopilotKit/pull/8254)、[#8224](https://redirect.github.com/CopilotKit/CopilotKit/pull/8224) 的 `!` 标记、[#7591](https://redirect.github.com/CopilotKit/CopilotKit/pull/7591) 类型收窄），推测 2.0 将集中处理 **API 规范化与行为一致性**；
- **新框架集成**：[#8242](https://redirect.github.com/CopilotKit/CopilotKit/pull/8242)（OpenAI Agents SDK Python showcase，基于当日发布的 `ag-ui-openai-agents` 0.1.0）+ [#8245](https://redirect.github.com/CopilotKit/CopilotKit/pull/8245)（配套文档已 stack）——文档先行通常是合入前兆，**预计短期内进入主线**；
- **Angular/ADK 路线持续加码**：v1.85.0 的 Angular Generative UI + [#8255](https://redirect.github.com/CopilotKit/CopilotKit/pull/8255) 的 ADK 依赖对齐，方向一致；
- **Intelligence 性能投入**：[#8247](https://redirect.github.com/CopilotKit/CopilotKit/pull/8247) 针对长线程加载与 Safari 布局优化，表明 Intelligence（云产品线）是核心投入方向；
- **模型策略跟进**：[#8227](https://redirect.github.com/CopilotKit/CopilotKit/pull/8227)（统一 `gpt-6-luna`）与 #8130/#8078（迁移替代模型）显示项目在主动跟随 OpenAI 模型退役节奏。

---

## 7. 用户反馈摘要

- **开箱即用性痛点**：用户按 README 新检出 deep-agents-job-search 会因 `gpt-4-turbo` 退役直接失败（[#8130](https://redirect.github.com/CopilotKit/CopilotKit/pull/8130)）——文档与 showcase 的默认模型更新滞后于上游 API 变化，是真实用户最先撞到的问题；
- **程序化嵌入场景**：[#8251](https://redirect.github.com/CopilotKit/CopilotKit/issues/8251) 的复现脚本显示有用户以 `CopilotRuntime` + `CopilotKitIntelligence` + 无 LLM agent 做最小化集成测试，这类用户对日志干净度与 API 行为可预测性敏感；
- **合规/企业场景**：有贡献者在 starter 中引入全页 axe 扫描作为 CI 门禁（[#8239](https://redirect.github.com/CopilotKit/CopilotKit/issues/8239)），说明无障碍合规已是部分用户的硬性要求；
- **多 agent 排障困难**：[#7511](https://redirect.github.com/CopilotKit/CopilotKit/issues/7511) 反映用户在多 agent 部署中需要错误事件携带 agent/thread 标识才能定位问题；
- **满意面**：社区贡献者响应快、质量高（带复现脚本、直接交 fix PR），间接说明项目的贡献流程与开发者体验获得认可。

> 注：今日 issue 总量仅 3 条，样本有限，以上为可得信号。

---

## 8. 待处理积压

| 项目 | 开启时间 | 积压时长 | 建议 |
|---|---|---|---|
| [Issue #7511](https://redirect.github.com/CopilotKit/CopilotKit/issues/7511) | 2026-09-29 | ~5 周 | "reserved for students" 可能导致人为搁置；若短期无认领，建议拆分上下文透传部分直接修复 |
| [PR #7591](https://redirect.github.com/CopilotKit/CopilotKit/pull/7591)（修复 [#7590](https://redirect.github.com/CopilotKit/CopilotKit/issues/7590)） | 2026-10-02 | ~5 周 | 疑似在等 2.0 窗口，建议给出明确合入计划避免贡献者流失 |
| [PR #7827](https://redirect.github.com/CopilotKit/CopilotKit/pull/7827)（renovate：GitHub Actions 更新） | 2026-10-15 | ~3 周 | 低风险自动化更新，建议尽快处理避免 CI 依赖滞后 |
| [PR #8189](https://redirect.github.com/CopilotKit/CopilotKit/pull/8189)（OpenBot 链接指向 open.bot） | 2026-11-03 | 4 天 | 文档小改，可快速合入 |
| [PR #8185](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185)（2.0.0 WIP） | 2026-11-03 | — | 非积压问题，但作为大版本 WIP，建议关注里程碑定义与对外沟通节奏 |

---

*数据来源：GitHub（Issues / PRs / Releases 公开数据）。已合并/关闭 PR 因接口未区分合并与关闭状态，本报告统一以"合并/关闭"表述。*

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*