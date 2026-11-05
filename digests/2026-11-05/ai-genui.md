# 生成式 UI 生态日报 2026-11-05

> Issues: 53 | PRs: 123 | 覆盖项目: 4 个 | 生成时间: 2026-11-05 05:46 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告

**数据日期：2026-11-05** | 覆盖项目：a2ui · OpenUI · json-render · CopilotKit | 数据窗口：过去 24 小时

---

## 一、生态全景

生成式 UI 赛道正进入罕见的"版本共振期"：a2ui 冲刺 v1.0 GA、CopilotKit 收尾 2.0.0、OpenUI 刚发布 1.1、json-render 迭代至 v0.22，四项目同日分别处于发布前夜、发布当日与发布后扩展阶段，标志着赛道正从原型验证集体迈向标准化与产品化。生态分层初步成形——a2ui 沉淀为协议层（已被 CopilotKit 作为底层依赖消费），CopilotKit 占据全栈框架层，OpenUI 以语言运行时 + 一致性规范卡位，json-render 向多平台分发层延伸。竞争焦点同步从"能否渲染"转向**质量工程**（一致性套件、78k 用例差分测试、变异测试、golden-transcript E2E）与**分发广度**（Chat 平台、移动端、五渲染器）。社区侧最强烈的共同诉求集中在三件事：流式输出鲁棒性、存量框架兼容、文档与协议同步。

---

## 二、各项目活跃度对比

| 指标 | a2ui | OpenUI | json-render | CopilotKit |
|---|---|---|---|---|
| Issue 新增/活跃 | **39** | 0 | 0 | 2 |
| Issue 关闭 | 11 | 1 | 0 | 0 |
| Issue 净变化 | +28 | -1 | 0 | +2 |
| PR 更新总量 | **50** | 26 | 3 | 44 |
| PR 合并/关闭（处置率） | 12（24%） | 11（42%） | 2（67%） | **32（73%）** |
| 待合并 PR 积压 | **38** | 15 | 1 | 12 |
| 版本发布 | 0（v1.0 倒计时） | **3**（1.1.0×2、0.2.2） | 1（v0.22.0） | 0（2.0.0 WIP） |
| 驱动结构 | 维护者 + 社区 | 维护者为主 + 社区 ~1/4 | 维护者 | 核心团队主导 |
| 当前阶段 | v1.0 GA 质量加固 | 1.1 已发、Dashboards ~60-70% | 早期平台扩张 | 2.0.0 广度收尾 |

**解读**：a2ui 动态量最大但处置率最低（38 个 PR 积压），典型的发布前冲刺特征；CopilotKit 吞吐与效率双高，但几乎纯内部驱动；OpenUI 的零新 Issue 是 1.1 刚定稿后的自然间歇；json-render 数据量最小，却单日跑完"开发→文档→发布"全链路。

---

## 三、共同关注的功能方向

**1. 流式输出的鲁棒性与降级体验（四项目全部涉及，社区第一痛点）**
- a2ui：[#2013](https://redirect.github.com/a2ui-project/a2ui/issues/2013)（15 评论、4 个月未修）——五个渲染器对"缺失组件"处理糟糕，硬编码占位符直接写入 surface tree；
- OpenUI：[#1552](https://redirect.github.com/thesysdev/openui/pull/1552) 对 10 模型 × 40 dashboard 实测，发现模型常写出组件不支持的 prop 组合（如 `rightVariant: "number"`）导致空值渲染；
- CopilotKit：[#8149](https://redirect.github.com/CopilotKit/CopilotKit/issues/8149) 虚拟化聊天 prepend 历史后阅读位置跳变（2 天修复，响应最优）；
- json-render：`streamCard` 流式编辑 Chat 卡片成为 v0.22.0 核心 API。
共性：**对不完整/无效模型输出的优雅处理，正从 nice-to-have 变为生产分水岭**。

**2. 存量 React 版本兼容**
- a2ui [#2372](https://redirect.github.com/a2ui-project/a2ui/issues/2372)：peer deps 锁 `^18||^19`，React 17 用户被硬性挡住；
- json-render [#373](https://redirect.github.com/vercel-labs/json-render/pull/373)：peer 锁 `^19.2.3`，React 18 用户只能 override，修复 PR 搁置超 1 个月。
两案修复成本均极低却均未响应——生态整体"重新项目、轻存量迁移"。

**3. 多语言 / 多平台 SDK 扩张**
- a2ui：`callRendererFunction` 在 Python/TS/Dart 三端镜像落地；Lit/React/Angular/Flutter/SwiftUI 五渲染器一致性套件；
- OpenUI：社区 Swift SDK（[#1521](https://redirect.github.com/thesysdev/openui/pull/1521)）、.NET 实现（#1528 获官方生态收录）、Angular signal 化（#1558）；
- CopilotKit：四框架适配器收敛至 core（[#8207](https://redirect.github.com/CopilotKit/CopilotKit/pull/8207)）；
- json-render：Slack/Teams 原生卡片渲染。

**4. 文档重建与协议同步**
- a2ui：外部用户 josemontespg 自发 7+ 个结构化 Issue，指公开文档停留在 v0.8/v0.9、引用不存在的 API；
- CopilotKit：Fumadocs 文档站重建（#8160→#8214）+ examples 按读者意图重组（#8196）；
- OpenUI：生态文档 #1550 已合并、Dashboards 文档 #1555 在途；json-render 同步更新 docs changelog。
四项目不约而同把文档列为**发布阻断项**。

**5. Agent 框架与 AI 工具生态集成**
- a2ui：A2A/ADK 集成 PR、llms.txt、官方 agent skill（`npx skills add`）；
- CopilotKit：MCP Apps（#7811）、CrewAI、Deep Agents、Google ADK demos；
- OpenUI：Search API 文档化（#1536）+ Generative UI benchmark 口径统一（#1546）。

---

## 四、差异化定位分析

| 维度 | a2ui | OpenUI | json-render | CopilotKit |
|---|---|---|---|---|
| **核心定位** | UI 协议/规范层 | Agent UI 语言运行时 + 规范 | 轻量 JSON 渲染 → 多平台分发 | 全栈 Agent UI 框架 |
| **技术路线** | 可交换推理格式、双向 RPC、多 catalog | lang-core 解析/求值、Dashboards、数据血缘（1.2 候选） | spec→Chat 卡片、streamCard 流式编辑 | 适配器薄代理化、MCP Apps、遥测度量 |
| **目标用户** | 框架与工具集成方 | 数据密集型 agent 应用开发者 | 消息平台 bot/agent 开发者 | 构建生产级 copilot 的产品团队 |
| **生态策略** | 做标准（llms.txt、skill、跨语言一致性） | 规范开放、实现去中心化 | 平台横向扩张 | 框架纵向整合（MCP/CrewAI/Deep Agents） |
| **版本坐标** | v1.0 GA 前夜 | 1.1 已发，功能栈 60-70% | 0.22 早期 | 2.0.0 WIP |

**最关键的生态信号**：a2ui 与 CopilotKit 已形成"协议 × 框架"的上下游耦合——CopilotKit 今日将 `@a2ui/web_core` 从 0.10.4 升至 0.15.0（横跨 5 个 minor、**29 个 breaking changes**，[#8211](https://redirect.github.com/CopilotKit/CopilotKit/pull/8211)），并将文档样例迁移至 A2UI 1.0 规范（#8164）；与此同时 a2ui 侧在推进 A2A/ADK 集成。这意味着 **a2ui 的协议稳定性直接构成 CopilotKit 2.0 的发布风险**，两个项目的 GA 节奏事实上被绑定。

---

## 五、社区热度与成熟度

**社区热度排序：a2ui > OpenUI > CopilotKit > json-render**

- **a2ui（热度最高，响应最慢）**：单 Issue 15 评论（#2013）、外部用户自发完成 v1.0 文档 bug bash（7+ 个结构化 Issue），显示高关注与高预期；但 38 个 PR 积压、P1 Issue #1888 搁置 4 个月，响应带宽明显不足。
- **OpenUI（贡献质量最高）**：社区贡献占比 ~1/4 且体量大（Swift SDK 为当前最大社区 PR）；第三方 .NET 实现通过 1.0 一致性套件是**协议可信度的真实背书**；Changesets + 78k 差分测试的质量闭环运转良好。
- **CopilotKit（量大而内向）**：44 条 PR 中绝大多数来自核心团队；社区反馈少而精（v2 早期采用者提交带最小复现的高质量 bug）；修复时延 ~2 天为四项目最优，但外部 PR #7811 积压 22 天。
- **json-render（最安静）**：0 Issue、仅 1 个社区 PR 且搁置超 1 个月；维护者交付节奏稳定，但社区反馈闭环最弱。

**成熟度（产品化程度）**：CopilotKit（v2 进入生产、虚拟化长会话、遥测/商业化信号）> OpenUI（工程成熟度高，功能栈 60-70%）> a2ui（协议即将定格 1.0，运行时质量与文档债待清）> json-render（0.22 早期）。快速迭代阵营为 OpenUI 与 CopilotKit；a2ui 处于"冲刺转冻结"临界点。

---

## 六、值得关注的趋势信号

**1. 技术栈分层与协议收敛。** "协议层×框架层"分工正在事实化：CopilotKit 消费 a2ui 协议、OpenUI 规范获第三方独立验证。*参考价值：选型时应先决策"押注协议还是押注框架"——协议层投资的长尾回报依赖生态采用率。*

**2. 从渲染引擎到分发层。** json-render 进入 Slack/Teams、a2ui 铺设 SwiftUI/Flutter 移动端并产出 llms.txt/agent skill，竞争正从"渲染 JSON"转向"agent 在哪里触达用户"。*参考价值：评估库时把"目标平台覆盖面"与渲染能力同等加权。*

**3. LLM 输出鲁棒性成为生产分水岭。** OpenUI 的 40-dashboard 实测（模型写出不支持 prop → 空值）与 a2ui #2013（缺失组件 → 开发者占位符泄漏到生产）指向同一问题。*参考价值：上线前务必测试各库对无效/不完整模型输出的降级行为，这是 demo 与生产的差距所在。*

**4. 质量工程正规化，一致性成为信任货币。** 一致性套件（a2ui 五渲染器）、78k 差分测试（OpenUI 当日即捕获 1.1 回归 #1554）、变异测试、golden-transcript E2E（CopilotKit）——正确性开始由测试基建而非文档承诺来定义。

**5. AI 工具成为文档的一等消费者。** llms.txt、agent skill、benchmark 实测化（OpenUI 弃用单模型 token 节省百分比）——项目在为"agent 读文档、agent 做选型"的世界做准备。

**选型速查（短期决策参考）**：生产级全栈框架 → CopilotKit（关注 2.0.0 迁移成本与 29 个 breaking changes）；协议层/多语言一致性 → a2ui（建议等 v1.0 GA 与 #2013 修复）；数据密集型 dashboard → OpenUI（等 #1493/#1527/#1555 三件套合并后整体亮相）；Chat 平台分发 → json-render（注意 React 18 peer 限制）。**风险观察点**：a2ui main 分支 E2E 失败（#3875）、OpenUI #1554 修复未随 1.1.0 发布（升级踩坑窗口）、两家 React 旧版本兼容悬而未决。

---

**结语**：生成式 UI 的竞争已从"能不能生成界面"，转向"生成的界面能否被**信任**（一致性测试）、能否**到达用户**（分发广度）、能否在**存量世界存活**（兼容性）"。四个项目恰好分别押注了其中一极，未来 2-4 周的 v1.0 GA、2.0.0 发布与 Dashboards 亮相，将初步验证各自的路线成色。

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目动态日报
**日期：2026-11-05** | 仓库：[a2ui-project/a2ui](https://github.com/a2ui-project/a2ui)

---

## 1. 今日速览

- **活跃度：高**。过去 24 小时共产生 **100 条更新动态**（Issues 50 条：39 新开/活跃、11 关闭；PRs 50 条：38 待合并、12 已合并/关闭），无新版本发布。Issue 净增长（+28）与 PR 积压（38 待合并）表明项目处于发布前的集中冲刺期。
- **主线清晰**：今日新开的 P1 Issue [#3987](https://redirect.github.com/a2ui-project/a2ui/issues/3987) 明确要求"在公开发布公告前，将全仓库 v1.0 协议标记为 current"——**v1.0 GA 冲刺已是当前最高优先级**。
- **三条工作线并行推进**：a2ui.org 新文档站建设（一批新 P1 Issue + PR）、大规模测试/一致性基础设施投入（维护者 gspencergoog 的 6 个大型测试 PR）、跨语言双向 RPC 在 Dart/Python/TypeScript 三端同步落地。
- **今日新动向**：实验性 **a2ui-xml 推理格式**（[PR #3989](https://redirect.github.com/a2ui-project/a2ui/pull/3989)）与 v1.0 macros 演示示例 **Liner Notes**（[PR #3990](https://redirect.github.com/a2ui-project/a2ui/pull/3990)）同日提交，生态扩张信号明显。

---

## 2. 版本发布

**今日无新版本发布。** 值得注意的是，[#3987](https://redirect.github.com/a2ui-project/a2ui/issues/3987)（P1）要求在"公开发布公告（public announcements）"前完成 v1.0 状态标记，暗示 **v1.0 正式版本及对外发布活动已进入倒计时**，建议订阅用户密切关注后续 Release。

---

## 3. 项目进展

### 已关闭/合并的关键工作

| 项目 | 内容 | 意义 |
|---|---|---|
| [PR #3778](https://redirect.github.com/a2ui-project/a2ui/pull/3778) | Python Agent SDK macros 支持 v1.0 协议（schema 合成、`component` 判别器、v1.0 `$ref` 目标等） | 关闭了功能缺口 [#3776](https://redirect.github.com/a2ui-project/a2ui/issues/3776) 与 Python v1.0 macros Bug [#3626](https://redirect.github.com/a2ui-project/a2ui/issues/3626)，**补齐了 Python SDK 的 v1.0 功能完整性** |
| [PR #1148](https://redirect.github.com/a2ui-project/a2ui/pull/1148) | Agent URL 可配置化 + quickstart 文档更新 | 历时近 7 个月（2026-04-12 创建）的 onboarding 改进终于关闭 |
| [Issue #3897](https://redirect.github.com/a2ui-project/a2ui/issues/3897) | "Swappable Inference Formats" 概念指南 | 文档站核心概念页落地 |
| [Issue #3503](https://redirect.github.com/a2ui-project/a2ui/issues/3503) | v1.0 多 catalog 组合能力文档修正 | v1-bug-bash 成果之一 |

### 在途大型工作（反映投入重心）

- **测试基建"六连发"**（均为 gspencergoog 提交，覆盖面显著扩大）：
  - [#3918](https://redirect.github.com/a2ui-project/a2ui/pull/3918) golden-transcript E2E 场景中心（捕捉 agent 信封与渲染器状态间的契约漂移）
  - [#3920](https://redirect.github.com/a2ui-project/a2ui/pull/3920) 脚本化 Python/TS A2A agent + Playwright 实时对 E2E（首次覆盖真实 HTTP/SSE 传输）
  - [#3919](https://redirect.github.com/a2ui-project/a2ui/pull/3919) 特性覆盖注册表 + CI 静态/动态审计
  - [#3887](https://redirect.github.com/a2ui-project/a2ui/pull/3887) Lit/React/Angular/Flutter/SwiftUI 五渲染器全量适配一致性套件
  - [#3880](https://redirect.github.com/a2ui-project/a2ui/pull/3880) v0.9 降级、RendererState、流式处理器一致性测试
  - [#3823](https://redirect.github.com/a2ui-project/a2ui/pull/3823) 渲染器/agent/扩展三套执行清单防跳测
- **双向 RPC 落地**：[#3881](https://redirect.github.com/a2ui-project/a2ui/pull/3881)（能力协商 + 双向函数调用核心）+ [#3939](https://redirect.github.com/a2ui-project/a2ui/pull/3939)/[#3940](https://redirect.github.com/a2ui-project/a2ui/pull/3940)/[#3941](https://redirect.github.com/a2ui-project/a2ui/pull/3941)（Python/TS/Dart 三端 `callRendererFunction`）+ [#3861](https://redirect.github.com/a2ui-project/a2ui/pull/3861)、[#3795](https://redirect.github.com/a2ui-project/a2ui/pull/3795)（A2A/ADK 集成）
- **生态建设**：[#3934](https://redirect.github.com/a2ui-project/a2ui/pull/3934) llms.txt、[#3935](https://redirect.github.com/a2ui-project/a2ui/pull/3935) 官方 agent skill（`npx skills add a2ui-project/a2ui`）

**整体评估**：项目一周内向测试/一致性注入的代码量极大，配合 v1.0 状态切换与文档站重建，属于典型的**大版本发布前质量加固阶段**，推进节奏健康。

---

## 4. 社区热点

1. **[#2013](https://redirect.github.com/a2ui-project/a2ui/issues/2013)（15 评论，P2，开放近 4 个月）— 今日热度第一**
   渲染器对"缺失组件"的处理普遍糟糕，直接影响**流式输出 UX**。React 渲染器将硬编码的开发者占位符直接写入 surface tree，且无法自定义或禁用。该问题横跨 Lit/React/Angular/Flutter/SwiftUI 全部渲染器，触及 A2UI"AI 流式生成 UI"的核心使用场景，是社区最强烈的诉求之一。目前未见对应 fix PR，但 [#3887](https://redirect.github.com/a2ui-project/a2ui/pull/3887)/[#3918](https://redirect.github.com/a2ui-project/a2ui/pull/3918) 的测试基建可能为其铺路。

2. **[#2372](https://redirect.github.com/a2ui-project/a2ui/issues/2372)（5 评论）— React 17 兼容诉求**
   `@a2ui/react` 的 peerDependencies 锁定 `^18.0.0 || ^19.0.0`（0.8.0 → 0.10.2 全系），导致 React 17 存量代码库必须 `--legacy-peer-deps` 才能安装。诉求本质是**降低存量项目采用门槛**。

3. **josemontespg 的 v1-bug-bash 文档纠错系列**（[#3519](https://redirect.github.com/a2ui-project/a2ui/issues/3519)、[#3490](https://redirect.github.com/a2ui-project/a2ui/issues/3490)、[#3488](https://redirect.github.com/a2ui-project/a2ui/issues/3488)、[#3494](https://redirect.github.com/a2ui-project/a2ui/issues/3494)、[#3489](https://redirect.github.com/a2ui-project/a2ui/issues/3489)、[#3450](https://redirect.github.com/a2ui-project/a2ui/issues/3450)、[#3447](https://redirect.github.com/a2ui-project/a2ui/issues/3447)）
   系统性指出公开文档停留在 v0.8/v0.9、缺 v1.0 标签页、引用不存在的 schema 操作/导出。这是**跟随 main 分支的深度用户对文档滞后于协议演进的集中反馈**。

4. **维护者 jacobsimionato 今日连开多个 P1**：[#3984](https://redirect.github.com/a2ui-project/a2ui/issues/3984)（站点视觉"去 AI 味"改造，直言当前预览"looks like a typical LLM-generated app"）、[#3988](https://redirect.github.com/a2ui-project/a2ui/issues/3988)（删除 restaurant finder 等遗留示例）、[#3987](https://redirect.github.com/a2ui-project/a2ui/issues/3987)（v1.0 标记 current）——发布前的对外形象打磨。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| **P1** | [#3875](https://redirect.github.com/a2ui-project/a2ui/issues/3875) main 分支 commit `bbaba36` E2E 测试失败 | OPEN，needs-triage | ⚠️ 未见 |
| **P1** | [#3626](https://redirect.github.com/a2ui-project/a2ui/issues/3626) Python v1.0 macros 携带 `accessibility`/`catalogId` 时永不展开，错误被吞掉 | ✅ 已关闭 | [#3778](https://redirect.github.com/a2ui-project/a2ui/pull/3778) |
| **P2** | [#2013](https://redirect.github.com/a2ui-project/a2ui/issues/2013) 全渲染器缺失组件处理差，流式 UX 受损 | OPEN（4 个月） | ⚠️ 未见 |
| **P2** | [#1501](https://redirect.github.com/a2ui-project/a2ui/issues/1501) React explorer 缺 `package.json`，dev server 无法启动 | OPEN（5 个月，needs review） | ⚠️ 未见 |
| **P2** | [#2372](https://redirect.github.com/a2ui-project/a2ui/issues/2372) React 17 无法安装 | OPEN | ⚠️ 未见 |
| **P2** | [#1458](https://redirect.github.com/a2ui-project/a2ui/issues/1458) mkdocs 2.0 向后不兼容警告 | OPEN | 评估中 |

**稳定性信号**：main 分支 E2E 失败（#3875）与大量新测试 PR 并存，属测试基建扩张期的正常波动，但建议在 v1.0 公告前保持 main 全绿。今日关闭的 #3626 是唯一确认修复的运行时 Bug。

---

## 6. 功能请求与路线图信号

结合 Issue 诉求与在途 PR，可识别出清晰的路线图信号：

- **"可交换推理格式"成为核心卖点**：[#3989](https://redirect.github.com/a2ui-project/a2ui/pull/3989)（a2ui-xml，今日新开）与 express/Elemental/Atom 格式并列，配合概念指南 Issue [#3897](https://redirect.github.com/a2ui-project/a2ui/issues/3897) 的关闭，**多推理格式策略将在 v1.0 后持续扩展**。
- **双向 RPC 是确定的下一版本重心**：`callRendererFunction`/`callAgentFunction` 在 Python/TS/Dart 三语言 + A2A/ADK 框架层同步推进（[#3939](https://redirect.github.com/a2ui-project/a2ui/pull/3939)/[#3940](https://redirect.github.com/a2ui-project/a2ui/pull/3940)/[#3941](https://redirect.github.com/a2ui-project/a2ui/pull/3941)/[#3881](https://redirect.github.com/a2ui-project/a2ui/pull/3881)），多语言镜像式提交模式表明这是**有统一规划的路线图项**，极可能随 v1.0 周期落地。
- **面向 Coding Agent 的分发渠道**：[#3934](https://redirect.github.com/a2ui-project/a2ui/pull/3934)（llms.txt）+ [#3935](https://redirect.github.com/a2ui-project/a2ui/pull/3935)（官方 Agent Skill）显示项目主动拥抱 AI 工具生态。
- **发布阻断项**：[#3987](https://redirect.github.com/a2ui-project/a2ui/issues/3987)（v1.0 标记 current）、[#3984](https://redirect.github.com/a2ui-project/a2ui/issues/3984)（站点视觉）、[#3988](https://redirect.github.com/a2ui-project/a2ui/issues/3988)（清理遗留示例）三者同日提出，构成公开发布的 checklist。
- **待决策**：[#2372](https://redirect.github.com/a2ui-project/a2ui/issues/2372)（React 17 支持，5 条评论的用户诉求）与 [#1458](https://redirect.github.com/a2ui-project/a2ui/issues/1458)（mkdocs → properdocs）暂无维护者明确表态。

---

## 7. 用户反馈摘要

**真实痛点：**
- **文档严重滞后于协议演进**：深度用户已在用 v1.0，但公开文档大量停留在 v0.8/v0.9，`data-binding.md`、`messages.md`、`actions.md`、`client-setup.md` 等核心页面被逐一批出引用不存在的 API（如 `<A2UISurface>`、`useA2UI()`、`surfaceProperties`）（[#3447](https://redirect.github.com/a2ui-project/a2ui/issues/3447)、[#3488](https://redirect.github.com/a2ui-project/a2ui/issues/3488)、[#3489](https://redirect.github.com/a2ui-project/a2ui/issues/3489)）。
- **新手第一步就卡死**：README 指引的命令跑不通（[#1501](https://redirect.github.com/a2ui-project/a2ui/issues/1501)）；Quick Start 实为 monorepo demo 启动器，缺渐进式入门路径（[#1413](https://redirect.github.com/a2ui-project/a2ui/issues/1413)）。
- **存量项目接入壁垒**：React 17 用户被 peer deps 硬性挡住（[#2372](https://redirect.github.com/a2ui-project/a2ui/issues/2372)）。
- **流式场景的降级体验不可控**（[#2013](https://redirect.github.com/a2ui-project/a2ui/issues/2013)）——对以"AI 流式生成 UI"为核心价值的项目而言，这是产品层面的关键短板。

**积极信号：**
- 外部贡献者 josemontespg 自发完成高质量 v1.0 文档 bug bash（7+ 个结构化 Issue），说明社区对 v1.0 的关注与期待较高。
- 贡献者持续提交 onboarding/生态类 PR（[#1148](https://redirect.github.com/a2ui-project/a2ui/pull/1148)、[#3935](https://redirect.github.com/a2ui-project/a2ui/pull/3935)），社区贡献意愿良好。

---

## 8. 待处理积压

以下长期未解决的重要条目建议维护者关注（按搁置时长排序）：

| Issue | 优先级 | 创建日期 | 搁置时长 | 说明 |
|---|---|---|---|---|
| [#1413](https://redirect.github.com/a2ui-project/a2ui/issues/1413) Getting Started 路径 | P2 | 2026-05-12 | ~6 个月 | 建议与新文档站规划（[#3902](https://redirect.github.com/a2ui-project/a2ui/issues/3902)/[#3903](https://redirect.github.com/a2ui-project/a2ui/issues/3903)）显式关联，避免重复建设 |
| [#1458](https://redirect.github.com/a2ui-project/a2ui/issues/1458) mkdocs 迁移决策 | P2 | 2026-05-19 | ~6 个月 | 文档基础设施方向悬而未决 |
| [#1501](https://redirect.github.com/a2ui-project/a2ui/issues/1501) explorer 缺 package.json | P2 | 2026-05-27 | ~5 个月 | 修复成本极低（补一个文件），建议尽快清掉 |
| [#1888](https://redirect.github.com/a2ui-project/a2ui/issues/1888) genui README 死链 | **P1** | 2026-07-02 | ~4 个月 | **P1 却搁置 4 个月，与发布前文档清理目标冲突** |
| [#2013](https://redirect.github.com/a2ui-project/a2ui/issues/2013) 渲染器缺失组件处理 | P2 | 2026-07-16 | ~4 个月 | 全站热度最高 Bug（15 评论），流式 UX 核心痛点，建议排期 |
| [#2219](https://redirect.github.com/a2ui-project/a2ui/issues/2219) catalogs.md 无效 allOf | P2 | 2026-08-10 | ~3 个月 | 文档正确性 |
| [#2372](https://redirect.github.com/a2ui-project/a2ui/issues/2372) React 17 peer deps | P2 | 2026-08-22 | ~2.5 个月 | 有明确用户诉求，需给出采纳/拒绝结论 |
| [#2582](https://redirect.github.com/a2ui-project/a2ui/issues/2582) 术语与规范一致性 | P2 | 2026-09-09 | ~2 个月 | 横切性大项，建议纳入 v1.0 发布 checklist |

**发布前特别提醒**：v1-bug-bash 文档系列（[#3447](https://redirect.github.com/a2ui-project/a2ui/issues/3447)、[#3450](https://redirect.github.com/a2ui-project/a2ui/issues/3450)、[#3488](https://redirect.github.com/a2ui-project/a2ui/issues/3488)、[#3489](https://redirect.github.com/a2ui-project/a2ui/issues/3489)、[#3490](https://redirect.github.com/a2ui-project/a2ui/issues/3490)、[#3494](https://redirect.github.com/a2ui-project/a2ui/issues/3494)、[#3519](https://redirect.github.com/a2ui-project/a2ui/issues/3519)）与 [#3987](https://redirect.github.com/a2ui-project/a2ui/issues/3987) 构成对外发布的内容正确性底线，建议在公告前批量处理完毕。

---

*数据来源：GitHub 过去 24 小时 Issues/PRs 更新记录。链接均可点击跳转至对应条目。*

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目动态日报 · 2026-11-05

> **仓库**：[thesysdev/openui](https://github.com/thesysdev/openui) · **数据窗口**：过去 24 小时

---

## 1. 今日速览

今天是 OpenUI 的版本里程碑日：核心集成分支 PR [#1480（OpenUI 1.1）](https://redirect.github.com/thesysdev/openui/pull/1480) 已合并，`lang-core`、`react-lang` 升至 **1.1.0**，`browser-bundle` 升至 **0.2.2**，共 3 个包发布。过去 24 小时 PR 更新 26 条（待合并 15 / 已合并·关闭 11），合并吞吐约 42%，其中 **Dashboards（仪表盘）能力的核心管道（服务端、流式、解析、组件修复）集中落地**，功能栈已成体系。Issue 侧零新增、1 条关闭（社区 .NET 实现被官方生态文档收录），无新缺陷报告。综合判断：项目处于**高活跃、高发布节奏、社区贡献占比约 1/4** 的健康状态。

| 指标 | 数值 |
|---|---|
| PR 更新 / 合并·关闭 | 26 / 11（≈42%） |
| Issue 新增 / 关闭 | 0 / 1 |
| 版本发布 | 3 |
| 在途待合并 PR | 15 |

---

## 2. 版本发布

| 包 | 版本 | 类型 | 来源 |
|---|---|---|---|
| [@​openuidev/lang-core](https://github.com/thesysdev/openui/releases) | 1.1.0 | Minor | [#1480](https://redirect.github.com/thesysdev/openui/pull/1480) · commit `eaac246` |
| [@​openuidev/react-lang](https://github.com/thesysdev/openui/releases) | 1.1.0 | Minor | [#1480](https://redirect.github.com/thesysdev/openui/pull/1480) · commit `eaac246` |
| @​openuidev/browser-bundle | 0.2.2 | Patch | 打包上述 1.1 运行时 |

**核心更新内容**（来自 [#1480](https://redirect.github.com/thesysdev/openui/pull/1480) 的 1.1 范围）：
- **链式查询**：一个 Query 读取另一个 Query 的结果时，会等待其完成并重新执行（发布说明重点标注，作者 [@​Aditya-thesys](https://github.com/Aditya-thesys)）；
- **Query 参数读取普通语句**：`region = "EU"` 后 `Query(..., {region: region})` 直接传 "EU"（子 PR #1422）。

**破坏性变更**：无（Minor 升级）。

**迁移注意事项**：
1. `browser-bundle` 用户需升级至 0.2.2 以获取 1.1 运行时；
2. ⚠️ 需警惕 [#1554](https://redirect.github.com/thesysdev/openui/pull/1554) 修复的围栏解析缺陷——**从时间线推断该修复可能未包含在 1.1.0 中**（1.1.0 变更清单仅含链式查询，且版本 PR [#1556](https://redirect.github.com/thesysdev/openui/pull/1556) 仍处开启状态）。若升级后遇到“未加 fence 的程序中跨行字符串被截断”，请关注 #1556 触发的补丁版本。

---

## 3. 项目进展

今日已合并/关闭的重点 PR（11 条中的 8 条核心）：

| PR | 内容 | 意义 |
|---|---|---|
| [#1480](https://redirect.github.com/thesysdev/openui/pull/1480) | OpenUI 1.1 主线合并 | 1.1 正式定稿 |
| [#1488](https://redirect.github.com/thesysdev/openui/pull/1488) | 服务端 `OpenUIClient` + `defineDashboard` | Dashboard 一次定义、Agent 内创建/编辑、数据工具执行、前端 token 签发 |
| [#1487](https://redirect.github.com/thesysdev/openui/pull/1487) | react-headless 按 id 流式加载 Cloud artifact | 断线重连可从头重放并替换屏幕内容 |
| [#1543](https://redirect.github.com/thesysdev/openui/pull/1543) | 解析 ` ```openui-js ` 脚本围栏 | 渲染端对齐新 Dashboard 格式（与 muse#652、coda#1089 跨仓协同） |
| [#1552](https://redirect.github.com/thesysdev/openui/pull/1552) | dashboard-library 值格式化与图表 key 修复 | 基于 10 模型 × 4 提示词共 40 个 dashboard 的实测 |
| [#1554](https://redirect.github.com/thesysdev/openui/pull/1554) | lang-core 围栏提取缺陷修复 | 78k 用例对比 1.0.2 发现（详见第 5 节） |
| [#1550](https://redirect.github.com/thesysdev/openui/pull/1550) | 社区集成/渲染器/采用者文档 | 关闭 [Issue #1528](https://redirect.github.com/thesysdev/openui/issues/1528) |
| [#1553](https://redirect.github.com/thesysdev/openui/pull/1553) | 版本发布 PR | 产出今日 3 个版本（Changesets 自动化） |

**进展评估**：Dashboards 功能栈七层中，服务端、headless 流式、语言解析、组件库修复四层核心管道已合并，剩余 react-ui Cloud 渲染器（[#1493](https://redirect.github.com/thesysdev/openui/pull/1493)）、示例（[#1527](https://redirect.github.com/thesysdev/openui/pull/1527)）、文档（[#1555](https://redirect.github.com/thesysdev/openui/pull/1555)）三层待合并——**整体约完成 60–70%，基建先行、呈现层跟进的节奏清晰**。注意 [#1556](https://redirect.github.com/thesysdev/openui/pull/1556) 已开启，今日合并的未发布变更（含 #1554 修复与 dashboard 基建）将经由其进入下一个版本。

---

## 4. 社区热点

> 注：本窗口 PR 评论数字段缺失，以下按信号强度与代表性排序。

1. **[Issue #1528：.NET 实现通过 1.0 一致性套件](https://redirect.github.com/thesysdev/openui/issues/1528)（已关闭）**
   社区开发者 dalefrancis88 基于 1.0 规范与 conformance fixtures 独立实现了 OpenUI.Lang.Core（解析/流式/求值/合并 + 系统提示词生成）。官方的响应方式是通过 [#1550](https://redirect.github.com/thesysdev/openui/pull/1550) 将其**收录进生态文档而非合并代码**——明确划定了"规范开放、实现去中心化"的生态边界，为后续第三方语言实现树立了范式。
2. **[PR #1521：原生 Swift SDK + SwiftUI 渲染](https://redirect.github.com/thesysdev/openui/pull/1521)（开启中，社区作者 zyfn，关联 [#393](https://redirect.github.com/thesysdev/openui/issues/393)）**
   覆盖 iOS/macOS：组件库定义、提示词生成、流式渲染、Action/工具请求回传。已开启 6 天未合并，是当前体量最大的社区贡献。
3. **[PR #1558：Angular 绑定现代化](https://redirect.github.com/thesysdev/openui/pull/1558)（santoshyadavdev）**
   将 `@openuidev/angular-lang` 迁移至 signal `input()`/`output()` API，对齐当前 Angular 组件范式，反映 Angular 侧用户对一等支持的需求。
4. **[PR #1557：Discord 邀请链接修复](https://redirect.github.com/thesysdev/openui/pull/1557)**
   现有链接已过期。改动极小，但直接阻断社区用户进入官方渠道，建议当日合并。

---

## 5. Bug 与稳定性

今日 **0 条新增 Bug Issue**，修复集中在 PR 侧：

| 严重度 | 问题 | 状态 |
|---|---|---|
| **高** | [#1554](https://redirect.github.com/thesysdev/openui/pull/1554)：lang-core 围栏提取缺陷——无 fence 程序中，在未闭合括号的续行上开启、且包含以 ` ``` ` 开头行的跨行字符串会被**静默截断**（1.1 引入的回归，78k 用例对比 1.0.2 发现） | fix 已合并；补丁发布待 [#1556](https://redirect.github.com/thesysdev/openui/pull/1556) |
| **中** | [#1552](https://redirect.github.com/thesysdev/openui/pull/1552)：dashboard-library 中 EntityList 在 `rightVariant: "number"` 等模型常写的属性组合下渲染空值；图表 key 重复 | fix 已合并 |
| **低** | Discord 邀请链接过期（社区入口断链） | fix PR [#1557](https://redirect.github.com/thesysdev/openui/pull/1557) 待合并 |

**稳定性评估**：#1554 是 1.1 发布当天即被定位并修复的解析层回归，差分测试流程（78k case）有效性得到验证；但由于修复可能不在 1.1.0 内，**存在升级用户踩坑窗口**，建议尽快通过 #1556 发布 1.1.1 并在发布说明中显著标注受影响的输入形态。

---

## 6. 功能请求与路线图信号

- **Dashboards（高确定性，短期）**：[#1493](https://redirect.github.com/thesysdev/openui/pull/1493) + [#1527](https://redirect.github.com/thesysdev/openui/pull/1527) + [#1555](https://redirect.github.com/thesysdev/openui/pull/1555) 待合并即构成完整发布；[#1536](https://redirect.github.com/thesysdev/openui/pull/1536) 文档化的 web/image Search API（含定价与错误码）正在为 dashboard 数据源铺路。
- **数据溯源**：[#1544 dataSources / useDataSources](https://redirect.github.com/thesysdev/openui/pull/1544)（维护者提交）——"这个数字从哪来"的组件级数据血缘视图，可识别硬编码数值，是 **1.2 的强候选**。
- **流式顺序渲染**：[#1519 streamInOrder](https://redirect.github.com/thesysdev/openui/pull/1519) 已从 1.1 回退独立评估（原 #1485），列为下一版本候选。
- **多语言 SDK 扩张**：Swift（[#1521](https://redirect.github.com/thesysdev/openui/pull/1521)）、.NET（[#1528](https://redirect.github.com/thesysdev/openui/issues/1528) 已落地）、Angular 现代化（[#1558](https://redirect.github.com/thesysdev/openui/pull/1558)）；配合 [#1550](https://redirect.github.com/thesysdev/openui/pull/1550) 系统化收录生态实现，"任何语言客户端"战略正在兑现，[#393](https://redirect.github.com/thesysdev/openui/issues/393) 是持续观察点。
- **基准口径统一**：[#1546](https://redirect.github.com/thesysdev/openui/pull/1546) 弃用旧的单模型 token 节省百分比，全面转向 Generative UI benchmark——对外叙事走向实测化。

---

## 7. 用户反馈摘要

本窗口用户反馈样本极少（1 Issue、0 评论、0 👍），可提炼信号如下：

- **正面验证**：[#1528](https://redirect.github.com/thesysdev/openui/issues/1528) 作者明确肯定"1.0 规范 + 一致性测试夹具"的开放策略（*"规范存在的意义就是让任何语言的客户端自我校验，我照做了"*）——规范可信度获得真实第三方验证，这是生成式 UI 协议类项目最难获得的背书。
- **真实痛点（来自 [#1552](https://redirect.github.com/thesysdev/openui/pull/1552) 实测）**：对 10 个模型生成 40 个 dashboard 的测试显示，模型会写出 `rightVariant: "number"` 等组件库未完全支持的属性组合导致空值渲染——**LLM 自由输出与组件 prop 约定之间的鲁棒性间隙**，是此类生成式 UI 库的典型生产环境痛点。
- **摩擦点**：Discord 邀请链接过期（[#1557](https://redirect.github.com/thesysdev/openui/pull/1557)），社区用户进入官方频道受阻。

---

## 8. 待处理积压

Issue 侧无积压（唯一活跃 Issue 已闭环）。积压集中于 **PR 评审**，按优先级提醒维护者：

1. **[#1556](https://redirect.github.com/thesysdev/openui/pull/1556)**（版本 PR）——承载已合并未发布的 dashboard 基建与 #1554 修复，尽快合并可关闭 1.1.0 的踩坑窗口；
2. **[#1493](https://redirect.github.com/thesysdev/openui/pull/1493)**（10-27 开启，已 9 天）——react-ui Cloud 渲染器，Dashboards 对外发布的最后一块核心拼图；
3. **[#1521](https://redirect.github.com/thesysdev/openui/pull/1521)**（10-30 开启，已 6 天）——社区 Swift SDK，体量大，需要分配评审带宽；社区贡献（#1521、#1557、#1558）的响应时长直接影响外部贡献者留存；
4. **[#1527](https://redirect.github.com/thesysdev/openui/pull/1527) / [#1555](https://redirect.github.com/thesysdev/openui/pull/1555)**——示例与文档，决定 Dashboards 的对外可见性；
5. **[#1505](https://redirect.github.com/thesysdev/openui/pull/1505)**（10-28）——模板/示例依赖更新机器人 PR；
6. **[#1519](https://redirect.github.com/thesysdev/openui/pull/1519) / [#1544](https://redirect.github.com/thesysdev/openui/pull/1544)**——1.1 后候选特性，等待评估决策。

其中 [#1557](https://redirect.github.com/thesysdev/openui/pull/1557) 这类分钟级修复建议当日处理，避免社区入口持续断链。

---

**结语**：OpenUI 今日完成 1.1 发布、Dashboards 基建合龙、生态文档成型三件事，发布自动化（Changesets）与差分测试（78k case）构成的质量闭环运转良好。短期关注点是 #1554 补丁版本的发布时效，以及 Dashboards 呈现层三件套（#1493/#1527/#1555）的合并不日完成后的整体亮相。

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# 📊 json-render 项目动态日报

**日期：** 2026-11-05
**仓库：** [vercel-labs/json-render](https://github.com/vercel-labs/json-render)
**数据周期：** 过去 24 小时

---

## 1. 今日速览

项目今日完成了一次完整的版本发布周期：**v0.22.0 正式发布**，核心新增 `@json-render/chat` 包，将渲染能力从 Web 端扩展至 Slack、Teams 等 Chat SDK 平台。过去 24 小时共 3 条 PR 更新（2 条已关闭、1 条待合并），0 条 Issue 活动，整体呈"维护者驱动的发布日"特征——发布节奏紧凑，但社区侧讨论平淡。外部贡献者 mvanhorn 的 React 18 兼容性修复 PR（[#373](https://redirect.github.com/vercel-labs/json-render/pull/373)）今日有更新但仍未合并，成为当前最值得关注的待办事项。

---

## 2. 版本发布

### 🚀 v0.22.0
**链接：** [releases/tag/v0.22.0](https://github.com/vercel-labs/json-render/releases/tag/v0.22.0)

**新功能：**
- **Chat SDK 渲染器（`@json-render/chat` 首次发布）**：将 spec 渲染为 Chat SDK 卡片，一套组件 catalog 可原生发布到 Slack、Teams 及其他 Chat SDK 平台，主要 API 包括：
  - `streamCard`：将卡片流式推送到线程中，并随元素陆续到达实时编辑卡片内容（天然适配 LLM 流式输出场景）
  - `toCard`：对 spec 进行校验（发布说明在此处截断，具体校验目标请参见完整 Release Notes）

**破坏性变更：** 发布说明中未声明破坏性变更，判断为增量式更新。

**迁移注意事项：**
- 新包为可选安装，存量用户无需改动即可升级
- ⚠️ 注意：`@json-render/react` 的 peer dependency 仍要求 `react ^19.2.3`，[#373](https://redirect.github.com/vercel-labs/json-render/pull/373) 的 React 18 兼容修复**未包含在本版本中**，React 18 用户升级时仍需 override

---

## 3. 项目进展

今日关闭 2 个 PR，直接支撑 v0.22.0 落地：

| PR | 标题 | 作者 | 状态 |
|---|---|---|---|
| [#451](https://redirect.github.com/vercel-labs/json-render/pull/451) | feat(chat): add Chat SDK renderer | Railly | 已关闭（随版本发布合入） |
| [#452](https://redirect.github.com/vercel-labs/json-render/pull/452) | Prepare v0.22.0 release | Railly | 已关闭（随版本发布合入） |

**关键推进：**

- **[#451](https://redirect.github.com/vercel-labs/json-render/pull/451) Chat SDK 渲染器**：解决的核心痛点是"发富消息的 bot 需要为每种消息形态单独开发一个工具（表格工具、图表工具等）"。该 PR 让 agent 可以直接从 catalog 中挑选组件并以原生消息形式发送。这是项目生态边界的实质性扩张——从"JSON 渲染引擎"向"多平台 Agent UI 分发层"演进的关键一步。
- **[#452](https://redirect.github.com/vercel-labs/json-render/pull/452) 发布准备**：所有公共包版本号升至 0.22.0，更新 `CHANGELOG.md` 与 docs changelog，README 新增 Chat SDK renderer 章节，并将 `@json-render/chat` 纳入文档的 chat package 与 skill 列表。

**整体评估：** 单日内完成"功能开发 → 文档更新 → 版本发布"全链路，交付效率高。版本迭代至 0.22.0 表明项目处于活跃开发期。

---

## 4. 社区热点

今日 **0 条 Issue 更新**，PR 评论区无新增互动数据（评论数缺失、👍 均为 0）。唯一具备讨论价值的活跃条目：

- **[#373](https://redirect.github.com/vercel-labs/json-render/pull/373) fix: widen @​json-render/react peer to React 18 and 19**（OPEN）
  - 作者：mvanhorn（社区贡献者）｜创建于 2026-10-03，最近更新于 2026-11-04
  - **诉求分析**：这是一个典型的"采用障碍"类问题——React 18 应用安装 `@json-render/react` 时无法通过 npm peer dependency 校验，只能强行 override。它不涉及功能缺陷，却直接压低库在存量 React 项目中的可安装性。作者希望将 peer 范围从 `^19.2.3` 放宽至同时覆盖 React 18 和 19。
  - 值得注意的是，该 PR 在 v0.22.0 发布前夕仍有更新，但最终未进入本版本，社区对 React 18 支持的诉求尚未得到回应。

---

## 5. Bug 与稳定性

今日**无新报 Bug**（0 条 Issue）。存量兼容性问题如下：

| 严重程度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 🟡 中 | React 18 应用安装 `@json-render/react` 时 peer dependency 校验失败，仅能通过 override 强行安装（影响所有 React 18 用户的安装链路，不涉及运行时崩溃） | 待修复 | ✅ 已有修复 PR [#373](https://redirect.github.com/vercel-labs/json-render/pull/373)，等待 review/merge |

---

## 6. 功能请求与路线图信号

今日无显式功能请求，但可从已有动态提取路线图信号：

- **✅ 已落地：Chat 平台原生渲染**（[#451](https://redirect.github.com/vercel-labs/json-render/pull/451) → v0.22.0）。其动机描述（"agent 无法从 catalog 挑选组件并作为原生消息发送"）明确指向 AI agent 场景，暗示项目战略重心在 **Agent + 聊天平台的 UI 分发**。
- **🔄 进行中：React 18/19 双版本兼容**（[#373](https://redirect.github.com/vercel-labs/json-render/pull/373)）。社区有明确需求，修复成本低（仅改 peer 范围），合并后适合以 patch 版本（如 v0.22.1）快速发布。
- **📈 趋势推测：** `streamCard` 的"流式编辑卡片"设计表明流式 API 可能成为各渲染目标的统一范式；Slack、Teams 之外的 Chat SDK 平台覆盖面有望继续扩展。

---

## 7. 用户反馈摘要

今日无 Issue 评论数据，以下痛点提炼自 PR 描述中的真实场景：

- **安装受阻的挫败感（React 18 用户）：** "React 18 apps that depend on @​json-render/react fail npm's peer dependency check… only succeed when the peer warning is overridden" —— 用户被迫使用 override 绕过校验，体验差且在团队协作/CI 环境中存在升级风险。这是目前最明确、最具共识的用户痛点。
- **Agent 开发者的工具碎片化痛点：** "Bots that post rich messages need a separate tool per message shape (a table tool, a chart tool and so on)" —— v0.22.0 的 Chat 渲染器正是对此真实痛点的回应，说明新功能的需求来自一线 agent 开发场景而非凭空设计。

---

## 8. 待处理积压

- **⚠️ [PR #373](https://redirect.github.com/vercel-labs/json-render/pull/373) — fix: widen @​json-render/react peer to React 18 and 19**
  - 创建于 2026-10-03，**已超过 1 个月未合并**（截至 2026-11-04 仍为 OPEN）
  - 作者：mvanhorn（社区贡献者）｜👍 0｜评论数据缺失
  - **建议：** 该 PR 解决的是安装层兼容性问题，改动小、风险低，且影响 React 18 存量用户群。v0.22.0 刚发布，正是吸纳社区修复并以 v0.22.1 快速跟进的窗口期；长期搁置社区 PR 也可能挫伤外部贡献者积极性，建议维护者优先安排 review。

---

> **健康度小结：** 发布节奏稳定（v0.22.0 为近期重要增量），维护者交付活跃；但 Issue 侧零活动、社区 PR 响应偏慢（#373 积压超 1 个月），建议关注社区反馈闭环。

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报 · 2026-11-05

---

## 1. 今日速览

今日 CopilotKit 呈现典型的**核心团队冲刺日**特征：过去 24 小时 PR 活动高达 44 条，其中 32 条已合并/关闭（处置率约 73%），而 Issue 侧仅新增 2 条 Bug、0 条关闭，节奏几乎完全由内部贡献者（tylerslaton、AlemTuzlak、contextablemark 等）驱动。今日无新版本发布，但 WIP 的版本 PR [#8185 "2.0.0"](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185) 与多项破坏性重构（适配器薄代理化、A2UI 0.15 升级、Fumadocs 文档重建）共同表明 **2.0.0 正处于集中收尾阶段**。质量投入同步加码：引入 Stryker 变异测试基线（[#8216](https://redirect.github.com/CopilotKit/CopilotKit/pull/8216)）、修复 flaky 测试（[#8205](https://redirect.github.com/CopilotKit/CopilotKit/pull/8205)）。新报 Bug 中，虚拟化聊天滚动跳变（[#8149](https://redirect.github.com/CopilotKit/CopilotKit/issues/8149)）的修复 PR 已落地，从报障到修复约 2 天，响应速度优秀。**整体健康度评估：高**——开发 Velocity 高、修复时延短、测试与 CI 基建持续投资。

---

## 2. 项目进展

24 小时内 32 条 PR 合并/关闭，按主题归纳：

### 架构整合（2.0.0 核心里程碑）
- **[#8207](https://redirect.github.com/CopilotKit/CopilotKit/pull/8207) `refactor(core)!`**：将 React / Vue / Angular / React Native 四个框架的聊天适配器改造为 `@copilotkit/core` 之上的**薄代理**——连接、Provider 组装、composer、反馈、推理、滚动逻辑全部收敛到 core，适配器只订阅状态并渲染，同时顺带修复多个单框架 bug。这是 2.0 架构收敛的标志性一步。

### Bug 修复
- **[#8209](https://redirect.github.com/CopilotKit/CopilotKit/pull/8209) `fix(react-core)`**：修复虚拟化聊天中点击 "Load older messages" 后阅读位置跳到最新消息的问题（根因：前置历史被误判为新 thread 触发滚动到底）。对应 Issue [#8149](https://redirect.github.com/CopilotKit/CopilotKit/issues/8149)。
- **[#8208](https://redirect.github.com/CopilotKit/CopilotKit/pull/8208) `fix(showcase)`**：修复 CrewAI Conversational Flows 请求完成后注册表残留 flows/events、trace collector 持续缓冲已禁用 trace 的内存驻留问题。
- **[#8164](https://redirect.github.com/CopilotKit/CopilotKit/pull/8164) `fix(docs)`**：共享目录样例迁移至 A2UI 1.0 规范（修复 CopilotKit 1.84 拒绝 `"v1.0"` 版本串导致的组件预览/复制失效）。

### 测试与 CI 可信度
- **[#8216](https://redirect.github.com/CopilotKit/CopilotKit/pull/8216)**：为 `core`、`runtime`、`react-core` 引入 Stryker 变异测试并建立基线，"无法被任何变异体击溃的测试什么都测不到"——测试质量门槛的实质性提升。
- **[#8205](https://redirect.github.com/CopilotKit/CopilotKit/pull/8205)**：修复 Angular / Chart 随机失败测试及 Inspector 测试泄漏（改为等待结果本身而非固定时长）。
- **[#8212](https://redirect.github.com/CopilotKit/CopilotKit/pull/8212)**（OPEN）：staging 部署改为从配置源部署并校验镜像 digest，堵住 Railway 回放旧镜像导致 CI 假绿的漏洞。
- **[#8213](https://redirect.github.com/CopilotKit/CopilotKit/pull/8213)**：新建 docs-preview Railway 服务，作为文档 PR 预览基座。

### 文档与示例体系
- **[#8196](https://redirect.github.com/CopilotKit/CopilotKit/pull/8196) `refactor(examples)`**：`examples/` 按读者意图重组为 starters（24 个框架入门）/ demos / templates / dev，删除失维示例并更新全部路径引用。
- **[#8186](https://redirect.github.com/CopilotKit/CopilotKit/pull/8186)**：为 Deep Agents 框架补齐专属 CopilotChat 指南，修复原先渲染"不支持功能"横幅与代码块缺失的问题。
- **[#8160](https://redirect.github.com/CopilotKit/CopilotKit/pull/8160) → [#8214](https://redirect.github.com/CopilotKit/CopilotKit/pull/8214)**：shell-docs 的 Fumadocs 重建——#8160 关闭后由 #8214 在新分支重开（目的仅为触发 Railway 文档 PR 预览），文档站换代在即。

### 遥测
- **[#8215](https://redirect.github.com/CopilotKit/CopilotKit/pull/8215)**：OpenBot 遥测建设的一部分——应用可通过 `forwardedProps.__copilotkitAnalyticsContext` 归因 Intelligence 运行，且 stopped 状态可被正确记录。

**小结**：单日落地覆盖架构、测试、文档、CI、遥测五大方向，2.0.0 的"广度收尾"特征明显，项目向前推进幅度大。

---

## 3. 社区热点

今日 Issue 侧活跃度低（仅 2 条），社区讨论焦点集中在：

- **[#8149](https://redirect.github.com/CopilotKit/CopilotKit/issues/8149)（3 条评论，今日最热）**：v2 虚拟化聊天 prepend 历史后跳转到最新消息。诉求本质是**长会话生产场景下的滚动锚定与阅读位置保持**——用户使用 80 条消息的 fixture 系统性复现，说明这不是随手一报，而是真实产品中的持续困扰。官方修复（[#8209](https://redirect.github.com/CopilotKit/CopilotKit/pull/8209)）次日即落地，社区可感知的响应速度是加分项。
- **[#8218](https://redirect.github.com/CopilotKit/CopilotKit/issues/8218)（1 条评论，今日新开）**：`channels-core@0.12.0` 每轮对话都警告 `clone() dropped resolvingPeerCeiling`。用户提供了 `repro.mjs` 最小复现，且确认警告发生在任何网络请求之前——这是**新 channels 抽象层早期采用者**的反馈，诉求是干净的控制台输出与对 "dropped" 语义的澄清（是否意味着状态丢失）。
- PR 侧评论数据今日缺失（源数据为 undefined），但从 #8160 → #8214 的重开动作可推断**文档重建（Fumadocs）是当前内部协作最密集的战线**。

---

## 4. Bug 与稳定性

| 严重度 | 问题 | 状态 | 修复进展 |
|---|---|---|---|
| **中高** | [#8149](https://redirect.github.com/CopilotKit/CopilotKit/issues/8149) v2 虚拟化聊天 prepend 历史后跳至最新消息，长会话 UX 受损 | OPEN | ✅ Fix PR [#8209](https://redirect.github.com/CopilotKit/CopilotKit/pull/8209) 已关闭（待发布验证） |
| **中低** | [#8218](https://redirect.github.com/CopilotKit/CopilotKit/issues/8218) channels-core 0.12.0 + 自组 HttpAgent 每轮输出 `clone() dropped resolvingPeerCeiling` 警告 | OPEN（今日新报） | ❌ 暂无 fix PR |
| 中低 | 运行时 connect 请求中止后，Intelligence 元数据 HTTP 读取仍挂起（资源泄漏） | Fix 进行中 | 🔧 [#8217](https://redirect.github.com/CopilotKit/CopilotKit/pull/8217)（OPEN）将 `Request.signal` 贯通至 `ɵconnectThread` |

**附带的稳定性改进**：[#8207](https://redirect.github.com/CopilotKit/CopilotKit/pull/8207) 在重构中顺带修复了多个仅存在于个别框架适配器中的 bug；[#8208](https://redirect.github.com/CopilotKit/CopilotKit/pull/8208) 消除了 CrewAI Showcase 的注册表与 trace 缓冲驻留。

今日无崩溃、无回归类严重报告；两条新 Bug 均附带完整复现步骤，质量较高。

---

## 5. 功能请求与路线图信号

今日无新功能请求 Issue，但 PR 侧路线图信号密集：

- **2.0.0 发布在即**：[#8185](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185) 版本 PR 已开（WIP），配合 #8207 架构收敛与 #8211 依赖对齐，**下一个大版本进入倒计时**。
- **[#7811](https://redirect.github.com/CopilotKit/CopilotKit/pull/7811)**：MCP Apps 的 `ui/update-model-context`（React/Vue/Angular 三框架）——widget 上报自身状态（选择、过滤、购物车）并随下次 run 携带。外部贡献、已运行 3 周、多框架实现完整，**纳入概率高**，且指向 "MCP Apps + 前端组件状态感知" 的产品方向。
- **[#8211](https://redirect.github.com/CopilotKit/CopilotKit/pull/8211)**：`@a2ui/web_core` 0.10.4 → 0.15.0，横跨 5 个 minor、29 个 breaking changes（Linear: PNI-763），波及 a2ui-renderer、react-core、angular、vue——为 2.0.0 做的激进对齐，需重点评审。
- **[#8216](https://redirect.github.com/CopilotKit/CopilotKit/pull/8216)**：变异测试基线，长期质量路线图信号。
- **[#8214](https://redirect.github.com/CopilotKit/CopilotKit/pull/8214)**：Fumadocs 文档站重建，文档基础设施换代。
- **[#8215](https://redirect.github.com/CopilotKit/CopilotKit/pull/8215)**：OpenBot 遥测/分析上下文，暗示**可观测性与商业化度量**是下一个投入方向。

---

## 6. 用户反馈摘要

- **v2 已进入真实生产环境**：[#8149](https://redirect.github.com/CopilotKit/CopilotKit/issues/8149) 的报告者在使用 `@copilotkit/react-core/v2` 的 `CopilotChatView`，构建了 80 条消息（70–149 编号、稳定 ID、用户/助手交替）的长会话测试夹具，并精细控制 `autoScroll` / `isRunning` 参数——痛点集中在**虚拟化长历史下的滚动行为正确性**。
- **channels 层存在早期采用者**：[#8218](https://redirect.github.com/CopilotKit/CopilotKit/issues/8218) 的用户自行组合 `createChannel` + `FakeAdapter` + HttpAgent，并知晓 `COPILOTKIT_TELEMETRY_DISABLED` 开关——在乎**控制台整洁度与库的内部警告语义**，同时是愿意提交最小复现的高质量贡献者。
- **总体情绪**：今日无情绪化负面反馈；Bug 数量少且描述规范。结合 44:2 的 PR/Issue 比例，可判断 v2 生态尚处早期采用阶段，或当前版本质量总体稳定。

---

## 7. 待处理积压

| 项目 | 开启时间 | 积压时长 | 建议 |
|---|---|---|---|
| [#7811](https://redirect.github.com/CopilotKit/CopilotKit/pull/7811) MCP Apps `ui/update-model-context` | 2026-10-14 | **22 天** | 外部贡献者（yannj-fr）的多框架功能 PR，是最需要维护者评审关注的积压项，建议优先处理或给出明确里程碑 |
| [#7827](https://redirect.github.com/CopilotKit/CopilotKit/pull/7827) renovate GitHub Actions 更新 | 2026-10-15 | 21 天 | 例行依赖更新（download-artifact v8.0.1→v8.0.2 等），建议在 2.0.0 冻结前批量处理 |
| [#8122](https://redirect.github.com/CopilotKit/CopilotKit/pull/8122) Google ADK Python demos 增加 A2UI Express | 2026-10-30 | 6 天 | Showcase 功能增强，正常流转中 |
| [#8149](https://redirect.github.com/CopilotKit/CopilotKit/issues/8149) 虚拟化聊天滚动 Bug | 2026-11-02 | 3 天 | Fix（[#8209](https://redirect.github.com/CopilotKit/CopilotKit/pull/8209)）已合并但 Issue 仍 OPEN，建议验证后关闭或挂入 2.0.0 milestone |
| [#8211](https://redirect.github.com/CopilotKit/CopilotKit/pull/8211) A2UI 0.15.0 升级 | 2026-11-04 | 1 天 | 含 29 个 breaking changes 的高风险升级，合并前需完整回归 |

其余 OPEN PR（[#8214](https://redirect.github.com/CopilotKit/CopilotKit/pull/8214)、[#8216](https://redirect.github.com/CopilotKit/CopilotKit/pull/8216)、[#8217](https://redirect.github.com/CopilotKit/CopilotKit/pull/8217)、[#8186](https://redirect.github.com/CopilotKit/CopilotKit/pull/8186)、[#8212](https://redirect.github.com/CopilotKit/CopilotKit/pull/8212)）均为 1–2 天内新开，属正常流转。

---

**健康度结论**：今日数据描绘出一个**处于大版本发布前夜的高执行力项目**——合并吞吐高（32/24h）、修复时延短（~2 天）、测试与 CI 投入持续、文档与示例体系全面翻新。主要风险点：① 2.0.0 前累积的破坏性变更（#8207、#8211）需要充分的迁移文档与沟通；② 外部贡献者 PR（#7811）积压 3 周未决，长期将影响社区贡献意愿；③ channels 层新 Bug（#8218）尚无修复认领，建议关注其是否指向更深层的状态克隆语义问题。

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*