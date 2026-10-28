# 生成式 UI 生态日报 2026-10-28

> Issues: 73 | PRs: 146 | 覆盖项目: 4 个 | 生成时间: 2026-10-28 04:44 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告

**数据窗口：2026-10-28（过去 24 小时）｜覆盖项目：a2ui · OpenUI · json-render · CopilotKit**

---

## 一、生态全景

生成式 UI 正处于从“演示可用”转向“生产可用”的工程化深水区：四个头部项目同日合计产生 **73 条 Issue 活动、146 条 PR 活动、6 次版本发布**，投入密度未见降温。生态分层已然清晰——a2ui 冲刺协议标准（v1.0 Bug Bash）、CopilotKit 走“框架 + 平台”产品化路线（双 minor 发布）、OpenUI 与 json-render 分别在运行时和渲染原语层精耕。最具信号意义的是**跨层互操作开始真实落地**：CopilotKit v1.81.0 的原生生成式 UI 直接采用 A2UI 组件目录，A2UI Express/Playground 集成 PR 已在排队。与此同时，各项目不约而同在 **token 开销、流式健壮性、模型输出容错** 三处投入重兵——竞争焦点已从“能否渲染”转向“是否可靠、便宜、可规模化”。

---

## 二、各项目活跃度对比

| 指标（24h） | a2ui | OpenUI | json-render | CopilotKit |
|---|---|---|---|---|
| Issue 活动 | 50（活跃 49 / 关闭 1） | 2（均为新开） | 1（新开） | 20（活跃 10 / 关闭 10） |
| Issue 关闭率 | 2% | — | 0% | **50%** |
| PR 活动 | 50 | 27 | 7 | **62** |
| 待合并 / 合并关闭 | 42 / 8 | 17 / 10 | 7 / **0** | 36 / 26 |
| 当日新开 | 3 Issue + 9 PR | 2 Issue | 1 Issue + 7 PR | ≥6 Issue + ≥2 PR |
| Release | 0（core 0.4.0 / flutter wip003 筹备中） | **4**（全 patch） | 0 | **2**（v1.81.0 + v1.82.0） |
| 版本坐标 | v1.0 定稿前 | 1.0.x / 1.1 评审中 | 0.21.3 | v1.82.0 |

**关键观察：**
- **a2ui / CopilotKit 为“高吞吐均衡型”**：前者 Issue 讨论深度全场第一（单议题最高 13 条评论、存在 3.5–7 个月长周期议题）；后者是唯一实现“当日 bug → 当日 fix PR → 发布闭环”的项目（#8023 → #8042）。
- **OpenUI 为“开发驱动型”**：Issue 流入仅 2 条，但发布纪律严明（Changesets 当日 4 版本闭环），AI 智能体承担 6 个可见已合并 PR 中的 5 个。
- **json-render 为“贡献过剩型”**：7 个高质量 PR 集中在 48 小时内产生，但**合并数为 0，且 main 自 0.21.3 后零提交**——唯一一个活跃度与健康度背离的项目。
- 响应速度标杆：a2ui #3697 提案到实现 PR #3700 **间隔不足一天**。

---

## 三、共同关注的功能方向

**① Token 经济性与协议开销（4/4 项目涉及）**
- a2ui：用户原话“读到的却是协议”——schema、surface ID、JSON 校验噪音污染模型输出（#3576）；#3698 提议二进制 wire 传输
- json-render：Compact 生成 + positional JSON 格式，削减重复字段与空字段开销（#438/#439）
- CopilotKit：`includeSchema: false` 失效且 schema 默认双发（#7802）
- OpenUI：系统提示词与组件库重构压缩提示面（#1385）

**② 流式渲染的健壮性与优雅降级（3/4）**
- a2ui #2013（P1、3.5 个月、13 评论）：组件未到达时硬编码占位符不可定制/关闭，横跨全部 5 个渲染器
- OpenUI：流式解析性能随程序规模退化（#1486），1.1 系列含 smoothStreaming 顺序修复
- json-render：重载后 prose 显示漂移（#435）、逐字符 chunk 开销（#436）

**③ 对真实模型输出的容错（3/4）**
- json-render：`children: null` 路径崩溃（#433）、token 截断的 patch 被静默丢弃（#437）
- OpenUI：内联代码围栏致整段空白（#1484）、表达式未求值直接渲染语法树 JSON（#1483）、列表数学返 0 影响 **22% 基准用例**（#1482）
- a2ui：Express 格式静默丢数据——`userMessage` 丢弃、列表项函数误编译（#3598）

**④ DevTools/Inspector 可配置性（2/4，需求高度同构）**
- OpenUI #1497：调试启动器四角选择 + 拖拽，当日随 devtools 0.3.1 交付
- CopilotKit #7660：Inspector 固定右上角遮挡应用导航，**23 天未决**

**⑤ 依赖安全债务（2/4，同日撞墙）**
- a2ui #3610（P1）：Zod 锁定 3.x 受 CVE 影响，3→4 major 跳变，无 fix PR
- CopilotKit #7967：多包依赖 Zod 3，阻塞用户响应安全通告

**⑥ 包粒度与按需引入（3/4）**
- CopilotKit #7882：headless 应用被迫打包整套聊天渲染栈（修复 #8033 在途）
- OpenUI #1490：维护者主动发起拆分可复用 React 组件包
- a2ui #3623：Swift 用户仅为 BasicCatalog 的两个函数被迫信任第三方宏

---

## 四、差异化定位分析

| 维度 | a2ui | OpenUI | json-render | CopilotKit |
|---|---|---|---|---|
| **生态位** | 协议 / 规范层 | 运行时 + DX 工具链 | 轻量渲染原语 | 应用框架 + 平台 |
| **技术路线** | 多语言 core（TS/Python/Dart）× 全渲染器矩阵（React/Angular/Lit/Flutter/SwiftUI），Express 推理格式，SDD 规范-代码同步 | lang-core / react-lang 双核 + CLI + devtools，Changesets 自动发布 | JSON → 流式 UI 最小管线，无框架绑定 | React/Vue/Angular 三框架 + runtime + Intelligence 平台，AG-UI / A2UI 双协议集成 |
| **目标用户** | 框架/SDK 作者、企业平台（Google 1P 采用、Gemini Enterprise 测试信号） | 重视 DX 的全栈开发者 | Vercel 生态早期采用者、需嵌入自有栈的团队 | 构建 AI copilot 产品的工程团队 |
| **独有实践** | 三语言“镜像 PR”同步修同一契约缺陷；周度合规审计机器人 | 1,401 用例真实模型输出基准作为 1.1 发布闸门 | 堆叠式特性 PR + 可交互 playground | 当日 bug→fix→release 闭环；品牌重定位为 "Connect any agent to any user" |

**生态呈四层堆栈**：协议→ 渲染原语→ 运行时工具→ 应用框架与平台（CopilotKit）。a2ui 横向最广（5 渲染器 × 4 语言生态），CopilotKit 纵向最深（前端到 runtime 到记忆/学习平台）；OpenUI 与 json-render 以“小而快”取胜，一个重 DX、一个重极简。值得注意的是，CopilotKit 同时集成 AG-UI 与 A2UI——**应用框架正在成为协议的汇聚点，而非自造轮子**。

---

## 五、社区热度与成熟度

| 维度 | a2ui | OpenUI | json-render | CopilotKit |
|---|---|---|---|---|
| 社区热度 | **极高**（深度第一） | 中低 | 低但精 | 高（吞吐均衡） |
| 迭代速度 | 极快 | 快 | 慢（0 合并） | 极快 |
| 成熟度 | 规范冲刺期（版本号仍 0.x） | 产品稳定期（1.0.x） | 实验期（0.21.x） | **产品成熟期（1.8x）** |
| 报告健康度 | 良好（快速但受控） | 偏高 | 警惕（评审瓶颈） | 高 |
| 突出风险 | E2E 连续 4 天失败、P1 安全无 fix、7 个月 P2 积压（#963 内存泄漏） | 1.1 六 PR 评审闸门 | 评审带宽、main 冻结 | CORS 安全未修、Zod 4 无路径、31 天 PR 积压 |

- **热度 ≠ 成熟度**：a2ui 版本号最年轻（agent 0.0.3）却拥有最深的社区讨论与企业级采用信号；CopilotKit 版本最成熟，且是唯一在高吞吐下维持 50% Issue 关闭率的项目。
- **贡献者质量普遍偏高**：a2ui（最小复现 + 规范章节引用 + 完整方案设计）、CopilotKit（Laptopmini 连报 4 条高质量 issue）、json-render（报告者主动核实 main 与 tag 无代码差异）——用户群均偏专业开发者；OpenUI 社区回流刚起步（外部贡献者响应悬置 4 个月的 help wanted）。
- **快速迭代期判定**：a2ui（v1.0 攻坚）、CopilotKit（生成式 UI + Intelligence 双主线）、OpenUI（1.1 + Artifacts 储备）三者均处加速通道；json-render 是唯一活跃度与健康度背离的项目。

---

## 六、值得关注的趋势信号

**1. 协议收敛：A2UI 从规范走向采用。** CopilotKit 原生生成式 UI（#7819，已发布）基于 A2UI 标准，A2UI Playground/Express 集成在途；a2ui 承接 flutter/genui 的 issue 移植，OpenUI 的 Artifacts 移植自 genui-sdk——碎片化的 genui 生态正向“少数规范 + 框架集成”归集。**参考价值：UI schema 的可迁移性决定长期切换成本，选型时优先评估协议开放性与跨框架支持。**

**2. Token 成本升格为架构约束。** 同日三个项目推进协议瘦身（二进制 wire RFC、positional JSON、schema 去重），且 a2ui #3576 证明协议噪音不仅费钱、还直接伤害终端体验。**参考价值：将协议/prompt 开销纳入生成式 UI 的 TCO 模型，紧凑格式的落地节奏值得持续跟踪。**

**3. 模型输出容错是隐形护城河。** 四项目中三个的当期高严重度 bug 全部源于“真实模型输出 ≠ 规范输出”；OpenUI 以 1,401 用例基准量化容错并作为发布闸门，是目前最系统化的做法。**参考价值：接入前先跑自己的“真实输出回归集”；自研者应将 conformance 测试当一等公民（a2ui #3354 跨 SDK 分歧即是反例）。**

**4. AI-native 维护成型，评审带宽成为新瓶颈。** OpenUI 的 AI 智能体完成 5/6 已合并 PR，json-render 移植 technical-writer agent skill，CopilotKit 用 bot 开发布 PR；而 json-render 7 个高质量 PR 零合并恰好暴露另一面——**生成过剩、评审稀缺**。参考价值：评估项目健康度看“合并吞吐”而非“提交量”；人类维护者的价值正加速向架构裁决与评审集中。

**5. 依赖债务与安全响应成为分水岭。** a2ui 与 CopilotKit 同日卡在 Zod 3→4，且各有一个未修复安全 issue（#3610 / #8025 CORS）。**参考价值：选型尽调清单应包含核心依赖的升级路径与安全响应能力。**

**6. 开发者工具成为标配竞争点。** OpenUI 与 CopilotKit 出现几乎相同的“调试悬浮球位置”需求，前者当日交付、后者积压 23 天——同为 DX 卖点，交付速度本身就是成熟度信号。

**选型速查：**

| 场景 | 建议关注 | 关键前提 |
|---|---|---|
| 生产级 copilot 产品 / 多框架团队 | CopilotKit | 跟踪 #8025（CORS）与 #7967（Zod 4）解决进度 |
| 企业平台 / 押注协议标准 | a2ui | 等待 v1.0 定稿（#3536 规范议题）与 E2E 恢复 |
| DX 优先、接受新栈 | OpenUI | 1.1 六 PR 合并（容错补齐）后是更佳接入点 |
| 轻量嵌入自有技术栈 | json-render | 接受 vercel-labs 实验节奏与评审延迟风险 |

---

**一句话总结**：生态正处在“协议收敛 + 工程深水区攻坚”的双重拐点，未来 1–2 个版本周期（a2ui v1.0、OpenUI 1.1、json-render 0.22、CopilotKit 生成式 UI 系列落地）将是竞争格局定型的关键观察窗口。

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目动态日报

**日期：2026-10-28 | 数据来源：github.com/a2ui-project/a2ui**

---

## 1. 今日速览

a2ui 今日保持高强度活跃：过去 24 小时共更新 **50 条 Issue**（新增/活跃 49，关闭 1）与 **50 条 PR**（待合并 42，已合并/关闭 8），今日新开 3 个 Issue、9 个 PR，无新版本发布。项目正处于 **v1.0 Bug Bash 集中攻坚期**，多条 `v1-bug-bash` 标签的 P1 问题（Express 格式缺陷、宏展开失败、函数路由缺失）被密集讨论并快速配套修复 PR。维护团队呈现明显的多语言同步纪律——TypeScript/Python/Dart 三语言以"镜像 PR"方式同步修复同一缺陷契约。健康度总体良好：triage 标签体系（`first-line-handled`/`needs-triage`/`waiting-for-author-response`）运转规范，每周合规审计机器人持续产出（[#3652](https://redirect.github.com/a2ui-project/a2ui/issues/3652)）；但需警惕两个风险点：main 分支 E2E 自 10-24 起持续失败（[#3595](https://redirect.github.com/a2ui-project/a2ui/issues/3595)），以及一个尚无修复 PR 的 P1 安全依赖问题（[#3610](https://redirect.github.com/a2ui-project/a2ui/issues/3610)）。

---

## 2. 版本发布

今日无 Release。但有两个明确的发布信号：

- [PR #3695](https://redirect.github.com/a2ui-project/a2ui/pull/3695)：准备 **`a2ui_core 0.4.0`** 与 **`a2ui_flutter 0.0.1-wip003`**（pub.dev 预览版），遵循仓库发布流程文档。若合并，将是 Flutter 适配器的第三个 WIP 预览版。
- `@a2ui/agent` 0.0.3 正在通过 Express 修复系列（[#3633](https://redirect.github.com/a2ui-project/a2ui/pull/3633)–[#3636](https://redirect.github.com/a2ui-project/a2ui/pull/3636)）酝酿，目标是让 Express 继续作为默认推理格式的同时补上流式能力（过渡方案）。

---

## 3. 项目进展

统计口径下过去 24 小时合并/关闭 8 个 PR（均未进入评论数 Top 20 榜单），但今日新开的 9 个 PR 清晰勾勒出五条并行主线：

**① Express 格式三语言同步修复**（响应 P1 [#3598](https://redirect.github.com/a2ui-project/a2ui/issues/3598)）
- [#3634](https://redirect.github.com/a2ui-project/a2ui/pull/3634)(TS) / [#3635](https://redirect.github.com/a2ui-project/a2ui/pull/3635)(Python) / [#3636](https://redirect.github.com/a2ui-project/a2ui/pull/3636)(Dart)：三个镜像 PR，同契约修复 `Event` 丢弃 `userMessage`、列表项内函数调用误编译两处数据静默丢失。
- [#3633](https://redirect.github.com/a2ui-project/a2ui/pull/3633)：TS agent Express 逐块流式输出，作为流式编译器设计完成前的过渡方案。

**② Web 渲染器 NodeResolver 架构迁移**（[@​gspencergoog](https://github.com/a2ui-project/a2ui)）
- [#3691](https://redirect.github.com/a2ui-project/a2ui/pull/3691)(Lit/web_core)、[#3692](https://redirect.github.com/a2ui-project/a2ui/pull/3692)(Angular)：组件树解析统一收敛到 `NodeResolver` + `ComponentNode` 直接绑定。
- [#3658](https://redirect.github.com/a2ui-project/a2ui/pull/3658)：恢复被 1.0 API 变更破坏的 v0.9 调用点（不改 1.0 签名），为大规模迁移铺路。

**③ CLI 二进制分发基础设施**
- Issue [#3697](https://redirect.github.com/a2ui-project/a2ui/issues/3697)（今晨提出）→ 当天即有实现 [PR #3700](https://redirect.github.com/a2ui-project/a2ui/pull/3700)：多平台（Mac/Linux/Windows）二进制编译 + 防篡改发布流水线，移除对 Dart SDK 的安装依赖。**从提案到实现 PR 间隔不足一天**，落地节奏极快。

**④ E2E 稳定性专项**（[@​polina-c](https://github.com/a2ui-project/a2ui)，响应 [#3595](https://redirect.github.com/a2ui-project/a2ui/issues/3595)）
- [#3701](https://redirect.github.com/a2ui-project/a2ui/pull/3701)：修复 sample agents 仍在使用 #3269 已删除的 API（餐厅 finder 示例直接 ImportError 退出），并纳入 CI 测试。
- [#3702](https://redirect.github.com/a2ui-project/a2ui/pull/3702)：修正失败 issue 归因机制（此前误将后续无关合并 PR 记为故障源）。
- [#3703](https://redirect.github.com/a2ui-project/a2ui/pull/3703)：共享 Gemini key 配额耗尽（429）时跳过模型测试，消除假阴性。

**⑤ API 补齐与流程强化**
- [#3688](https://redirect.github.com/a2ui-project/a2ui/pull/3688)：为"浏览器内自渲染 chat"这类双角色应用补齐 TS SDK API，可消除样例应用中约 1/3 的 A2UI 样板代码（贡献于 #3597）。
- [#3693](https://redirect.github.com/a2ui-project/a2ui/pull/3693)：SDD blueprint schema 支持 per-feature commit SHA 固定，覆盖 12 个 codebase blueprints，进一步收紧规范-代码同步。

**整体评估**：v1.0 主线在推理格式、渲染器架构、分发基建三个方向同时推进，本周合入节奏（8 PR/24h）配合周度合规审计，项目处于快速但受控的演进状态。

---

## 4. 社区热点

按评论数排序的活跃议题：

| # | Issue | 评论数 | 优先级 | 龄期 |
|---|---|---|---|---|
| 1 | [#2013](https://redirect.github.com/a2ui-project/a2ui/issues/2013) 渲染器对缺失组件处理不当，流式 UX 差 | 13 | P1 | ~3.5 个月 |
| 2 | [#963](https://redirect.github.com/a2ui-project/a2ui/issues/963) web_core/React/Angular 内存泄漏与订阅生命周期 | 12 | P2 | ~7 个月 |
| 3 | [#931](https://redirect.github.com/a2ui-project/a2ui/issues/931) 以 Web Components 集中化 Basic Catalog 实现 | 7 | P2 | ~7 个月 |
| 4 | [#3536](https://redirect.github.com/a2ui-project/a2ui/issues/3536) [v1.0][spec] 无法声明 agent 侧函数 | 6 | P1 | 6 天 |
| 5 | [#1327](https://redirect.github.com/a2ui-project/a2ui/issues/1327) 禁用 Object.entries() 等不安全反射 | 5 | P2 | ~6 个月 |

**诉求分析**：
- **#2013** 是热度最高的痛点：所有渲染器在组件缺失时渲染硬编码开发者占位符，无法定制或关闭，且横跨 React/Angular/Lit/Flutter/SwiftUI 全部渲染器（标签覆盖 7 个组件域）。本质是**流式场景下的优雅降级策略缺失**。
- **#3536** 是 v1.0 规范层的结构性缺口：`callAgentFunction` 的路由逻辑（仅当函数未本地注册时才路由到 agent）与 `allowedCallers` 的语义相互矛盾，涉及 agent SDK 与多语言 core 的联动设计，6 天内积累 6 条评论，是 v1.0 定稿前必须解决的定义性问题。
- **#931 / #963** 均指向同一根源：**各框架渲染器重复实现导致的碎片化**（视觉不一致、内存行为不一致）。值得注意的是 #931 提出了相当完整的"入口隔离 + Web Components"方案设计。
- **#1327** 的提交者附带了 Google 内部（1P）测试上下文链接，暗示存在大型内部采用方对代码压缩/属性重命名安全的硬性要求。

---

## 5. Bug 与稳定性

按严重程度排列（⚠️ = 尚无关联 fix PR）：

**P1**
| 问题 | 状态 |
|---|---|
| [#3610](https://redirect.github.com/a2ui-project/a2ui/issues/3610) **安全**：Zod 受 CVE-2023-54404 影响，web_core 仍锁定 `^3.25.76`，建议升至 ≥4.6.6 | ⚠️ 无 fix PR。注意 3→4 为 major 跳变，存在破坏性，建议作为安全专项处理 |
| [#3598](https://redirect.github.com/a2ui-project/a2ui/issues/3598) Express 三缺口：丢 `userMessage`、列表项函数调用误编译、不支持流式（TS/Dart） | ✅ 已有 [#3634](https://redirect.github.com/a2ui-project/a2ui/pull/3634)/[#3635](https://redirect.github.com/a2ui-project/a2ui/pull/3635)/[#3636](https://redirect.github.com/a2ui-project/a2ui/pull/3636) + 流式过渡 [#3633](https://redirect.github.com/a2ui-project/a2ui/pull/3633) |
| [#3626](https://redirect.github.com/a2ui-project/a2ui/issues/3626) Python 宏：携带 `accessibility`/`catalogId` 的宏实例永不展开，`TypeError` 被吞掉 | ⚠️ 无 fix PR |
| [#3415](https://redirect.github.com/a2ui-project/a2ui/issues/3415) web_core v1.0：未注册函数未按规范路由至 `callAgentFunction`，绑定静默解析为 undefined | ⚠️ 无 fix PR，与 #3536 规范讨论联动 |
| [#2013](https://redirect.github.com/a2ui-project/a2ui/issues/2013) 渲染器缺失组件占位符问题（长期 P1） | ⚠️ 持续讨论中 |

**P2**
| 问题 | 状态 |
|---|---|
| [#3595](https://redirect.github.com/a2ui-project/a2ui/issues/3595) main 分支 E2E 自 10-24 持续失败（根因：#3269 API 移除后样例未迁移） | ✅ 今日三个 PR 响应：[#3701](https://redirect.github.com/a2ui-project/a2ui/pull/3701)/[#3702](https://redirect.github.com/a2ui-project/a2ui/pull/3702)/[#3703](https://redirect.github.com/a2ui-project/a2ui/pull/3703) |
| [#3623](https://redirect.github.com/a2ui-project/a2ui/issues/3623) Swift：仅依赖 BasicCatalog 也被迫信任 `JSONSchemaMacro`，Xcode 拒绝构建 | ⚠️ 等待作者响应 |
| [#3354](https://redirect.github.com/a2ui-project/a2ui/issues/3354) Python/TS/Dart core 对 "Surface" 组合规则判定不一致，同一 payload 跨 SDK 结果不同 | ⚠️ 无 fix PR |
| [#3061](https://redirect.github.com/a2ui-project/a2ui/issues/3061) `componentEnvelopeRef` 致多版本能力协商时 schema 损坏 | ⚠️ needs-triage |

**稳定性观察**：今日 bug 报告集中于两类——v1.0 新协议路径上的功能正确性（路由/宏/Express），以及跨 SDK 行为一致性（#3354、#3354 所代表的"规范歧义→实现分歧"模式）。后者建议通过 conformance test 扩展系统性收敛。

---

## 6. 功能请求与路线图信号

**今日新提案**：
- [#3698](https://redirect.github.com/a2ui-project/a2ui/issues/3698)：支持二进制 wire 传输与不透明类型化组件载荷（跨全部渲染器）。JSON 保留为开放默认值，为高性能场景提供可选通道——方向性 RFC，涉及 TS/Dart/Swift 三线 SDK 与规范层。
- [#3697](https://redirect.github.com/a2ui-project/a2ui/issues/3697)：CLI 二进制分发 → **当天即有实现 [PR #3700](https://redirect.github.com/a2ui-project/a2ui/pull/3700)**，纳入下一迭代概率极高。
- [#3690](https://redirect.github.com/a2ui-project/a2ui/issues/3690)：Express prompt 规则 8 教授 `Event userMessage=` 用法，与 #3634–#3636 修复形成"编译器 + 提示词"配套。

**近期活跃请求**：
- [#3607](https://redirect.github.com/a2ui-project/a2ui/issues/3607)：Python 组件 builder 强制校验 `returnType` 兼容性（CLI 已解析但 Emitter 未检查）。
- [#3608](https://redirect.github.com/a2ui-project/a2ui/issues/3608)：为 Gemini Enterprise 生产级 catalog 建立 JSON 往返测试（可考虑实时拉取线上 catalog）。
- [#3624](https://redirect.github.com/a2ui-project/a2ui/issues/3624)：Swift sample gallery 引入 v1.0 basic-catalog 示例并全量测试。
- [#3062](https://redirect.github.com/a2ui-project/a2ui/issues/3062) / [#3097](https://redirect.github.com/a2ui-project/a2ui/issues/3097)：跨 v0.9/v1.0 双版本 catalog 的 API 与文档；统一版本号为裸 `1.0`。

**路线图判断**：
- **短期（0.0.3 / a2ui_core 0.4.0）**：Express 修复三件套 + 逐块流式（#3633–#3636）几乎确定进入；CLI 二进制（#3700）若及时合入将显著降低上手门槛。
- **v1.0 定稿前必答的规范议题**：#3536（agent 函数声明模型）、#3097（版本字符串统一）、#3061/#3062（多版本协商与双版本 catalog 支持）。

---

## 7. 用户反馈摘要

**核心痛点**：
- **流式体验**：组件尚未到达时，渲染器展示的是开发者占位符而非有意义的中间态，且无法关闭——"React renderer 渲染硬编码开发者占位符，且没有办法定制或禁用"（[#2013](https://redirect.github.com/a2ui-project/a2ui/issues/2013)）。
- **长会话资源泄漏**：长时间存活的 surface 内存无限增长，组件卸载后 timer 等后台进程泄漏（[#963](https://redirect.github.com/a2ui-project/a2ui/issues/963)）——对 chat 类长连接场景是硬伤。
- **终端用户可感知的"协议噪音"**：*"用户问的是自己的问题，读到的却是协议"*——模型思考过程被 schema、surface ID、JSON 校验等 A2UI 细节淹没（[#3576](https://redirect.github.com/a2ui-project/a2ui/issues/3576)）。这条反馈同时暴露了 prompt 效率与 token 成本问题，值得关注。
- **Swift 开发者上手摩擦**：仅仅为了 `formatString` 和 `pluralize` 依赖 BasicCatalog，就被迫信任第三方宏，否则 Xcode 拒绝构建（[#3623](https://redirect.github.com/a2ui-project/a2ui/issues/3623)）。
- **跟随主线的破坏性冲击**：#3269 移除 API 后，样例 agent（餐厅 finder）直接 ImportError 退出且未被发现，直到 E2E 报警（[#3701](https://redirect.github.com/a2ui-project/a2ui/pull/3701) 修复）——反映出主干快速演进对下游使用者的迁移压力。

**正面信号**：
- 反馈质量高：多位报告者附最小复现、规范章节引用与方案设计（如 #931 的入口隔离设计、#1327 附内部测试上下文），社区构成偏向专业开发者。
- 从 flutter/genui 移植的 issue（[#1845](https://redirect.github.com/a2ui-project/a2ui/issues/1845)、[#1894](https://redirect.github.com/a2ui-project/a2ui/issues/1894)）显示上游生态正在向本仓库归集。
- 企业级采用迹象：Gemini Enterprise 生产 catalog 被作为测试基准提上日程（#3608），Google 1P 场景参与代码健壮性讨论（#1327）。

---

## 8. 待处理积压

**⚠️ 建议维护者优先关注**：

| Issue | 创建 | 龄期 | 优先级 | 备注 |
|---|---|---|---|---|
| [#2013](https://redirect.github.com/a2ui-project/a2ui/issues/2013) | 07-16 | ~3.5 个月 | **P1** | 13 条评论、覆盖全部渲染器，积压中最应排期 |
| [#3097](https://redirect.github.com/a2ui-project/a2ui/issues/3097) | 10-09 | ~3 周 | **P1** | 仍处 needs-triage，v1.0 定稿依赖项 |
| [#963](https://redirect.github.com/a2ui-project/a2ui/issues/963) | 03-24 | ~7 个月 | P2 | 12 条评论，内存泄漏影响生产可用性 |
| [#931](https://redirect.github.com/a2ui-project/a2ui/issues/931) | 03-22 | ~7 个月 | P2 | 架构级提案悬置，与 #963 同根因 |
| [#966](https://redirect.github.com/a2ui-project/a2ui/issues/966) | 03-24 | ~7 个月 | P2 | 样例重构（改用 @​a2a-js/sdk） |
| [#1327](https://redirect.github.com/a2ui-project/a2ui/issues/1327) | 05-02 | ~6 个月 | P2 | 关系 1P 采用方的压缩安全 |
| [#1346](https://redirect.github.com/a2ui-project/a2ui/issues/1346) | 05-06 | ~6 个月 | P2 | lint 规则启用 |
| [#1656](https://redirect.github.com/a2ui-project/a2ui/issues/1656) / [#1657](https://redirect.github.com/a2ui-project/a2ui/issues/1657) | 06-15 | ~4.5 个月 | P2/P3 | 文档与样例整理 |
| [#1845](https://redirect.github.com/a2ui-project/a2ui/issues/1845) / [#1894](https://redirect.github.com/a2ui-project/a2ui/issues/1894) | 07-02 | ~4 个月 | P3/P2 | 自 flutter/genui 移植 |

**PR 积压**：
- Dependabot 5 个 npm_and_yarn 组更新待处理：[#2790](https://redirect.github.com/a2ui-project/a2ui/pull/2790)（自 09-24 起反复 rebase，冲突风险累积）、[#3210](https://redirect.github.com/a2ui-project/a2ui/pull/3210)/[#3211](https://redirect.github.com/a2ui-project/a2ui/pull/3211)/[#3213](https://redirect.github.com/a2ui-project/a2ui/pull/3213)/[#3222](https://redirect.github.com/a2ui-project/a2ui/pull/3222)（自 10-14 起挂起）。其中 dompurify、js-yaml 等安全敏感依赖的升级建议与 #3610 一并纳入安全清理批次。
- [#3598](https://redirect.github.com/a2ui-project/a2ui/issues/3598) 修复三件套（#3634–#3636）已开 2 天待 review，建议尽快合入以解锁 0.0.3。

---

*本报告基于 2026-10-28 GitHub 公开数据自动分析生成。链接均为 a2ui-project/a2ui 仓库对应 Issue/PR。*

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目日报 — 2026-10-28

> 仓库：[thesysdev/openui](https://github.com/thesysdev/openui) | 数据窗口：过去 24 小时（以 2026-10-27 活动为主）

---

## 1. 今日速览

OpenUI 今日保持高开发强度：过去 24 小时 PR 活动达 **27 条**（待合并 17、已合并/关闭 10），并一次性发布 **4 个补丁版本**，基于 Changesets 的发布流水线运转顺畅。两条特性主线并行推进：[Aditya-thesys](https://redirect.github.com/thesysdev/openui/pull/1485) 的 6 个 PR 组成的 **OpenUI 1.1 运行时修复系列**，以及 [AbhinRustagi](https://redirect.github.com/thesysdev/openui/pull/1488) 的 4 个 PR 组成的 **Artifacts 全栈特性**。社区侧出现积极信号：外部贡献者 harshbhx 为悬置 4 个月、带 `help wanted` 标签的 [Issue #681](https://redirect.github.com/thesysdev/openui/issues/681) 提交了完整实现（[PR #1502](https://redirect.github.com/thesysdev/openui/pull/1502)）。Issue 流入量低（2 条），项目呈典型"开发驱动"形态，且 AI 智能体承担了可观的修复与杂务工作量，健康度评估：**偏高**。

---

## 2. 版本发布

今日共发布 4 个版本，**全部为 patch 级别，无破坏性变更，无需迁移操作**：

| 包名 | 版本 | 关联 PR | 更新内容 |
|---|---|---|---|
| `@openuidev/react-lang` | 1.0.2 | [#1500](https://redirect.github.com/thesysdev/openui/pull/1500) | Renderer 中途卸载时正确结算 devtools 流式行（commit `d4711b2`） |
| `@openuidev/lang-core` | 1.0.2 | [#1499](https://redirect.github.com/thesysdev/openui/pull/1499) | CLI 与 lang-core 共享 telemetry 状态读写模块（commit `6fbaf91`） |
| `@openuidev/devtools` | 0.3.1 | [#1497](https://redirect.github.com/thesysdev/openui/pull/1497) | Inspect 设置新增 Position 选项，支持四角选择与拖拽启动器（commit `e2ae4f1`） |
| `@openuidev/cli` | 0.6.1 | [#1499](https://redirect.github.com/thesysdev/openui/pull/1499) | 同 lang-core 的 telemetry 共享模块改造 |

**注意事项（非破坏性但值得知晓）：**
- [#1498](https://redirect.github.com/thesysdev/openui/pull/1498) 将 `~/.config/openui/telemetry.json` 的读写统一为共享模块，改为**原子写入且仅在内容变化时写入**，消除了 CLI 与 lang-core 各持一份副本代码的隐患。
- [#1497](https://redirect.github.com/thesysdev/openui/pull/1497) 用**手动位置选择 + 拖拽**取代了 #1373 引入的启动器自动避让宿主控件行为——依赖旧行为的开发者需留意此交互变化（仍以 patch 发布）。

---

## 3. 项目进展

今日合并/关闭的可见 PR 共 6 条（另有约 4 条关闭 PR 在展示列表之外）：

| PR | 内容 | 意义 |
|---|---|---|
| [#1461](https://redirect.github.com/thesysdev/openui/pull/1461) | version packages（Changesets 发布 PR） | 触发今日全部 4 个版本发布，发布管线健康 |
| [#1498](https://redirect.github.com/thesysdev/openui/pull/1498) | CLI 与 lang-core 共享 telemetry 状态处理 | 消除重复代码，原子化写入 |
| [#1499](https://redirect.github.com/thesysdev/openui/pull/1499) | 补充 #1498 遗漏的 changeset | 保障 #1498 实际进入发布——流程自查能力的体现 |
| [#1497](https://redirect.github.com/thesysdev/openui/pull/1497) | devtools 启动器位置自定义 | devtools UX 持续打磨 |
| [#1500](https://redirect.github.com/thesysdev/openui/pull/1500) | 修复流式行卡死在 "Streaming" 的 bug | 稳定性修复（详见第 5 节） |
| [#1476](https://redirect.github.com/thesysdev/openui/pull/1476) | 文档站 SEO 修复（缺失 H1、重复标题、localhost 链接、重定向/404 内链） | 官网质量基建 |

**进展评估：** 今日合并以修复、工具链与文档为主，属于"清障式"推进。真正的重量级工作——OpenUI 1.1 系列（6 PR）与 Artifacts 全家桶（4 PR）——全部处于待评审状态，构成 **17 个待合并 PR** 的储备。当日关闭率约 37%（10/27），评审吞吐正常，但下个版本（尤其是 1.1）的发布节奏将取决于这批 PR 的合并速度。

---

## 4. 社区热点

> 说明：PR 评论数数据缺失，以下按更新活跃度与议题热度排序。

- **[Issue #681](https://redirect.github.com/thesysdev/openui/issues/681) — `.toMarkdown()` 支持**（5 条评论，2026-06-26 创建，`enhancement` + `help wanted`）
  今日最热的社区议题。悬置 4 个月后，社区成员 harshbhx 提交 [PR #1502](https://redirect.github.com/thesysdev/openui/pull/1502) 直接响应。背后诉求：将 OpenUI 响应序列化为 Markdown，用于调试、离线存储，以及免于二次模型调用即可将上下文回传 LLM。
- **[Issue #1490](https://redirect.github.com/thesysdev/openui/issues/1490) — 拆分可复用 React 组件包**（维护者 ankit-thesys 今日新开）
  架构方向性讨论：消费者希望只取可复用视觉原语与主题，而非被迫接受 chat 组合或旧 `react-ui` 的联合样式面；维护者也需在"可复用组件"与"独立演进的 kits"之间划清边界。
- **Artifacts 四连 PR**（[#1488](https://redirect.github.com/thesysdev/openui/pull/1488) / [#1493](https://redirect.github.com/thesysdev/openui/pull/1493) / [#1494](https://redirect.github.com/thesysdev/openui/pull/1494) / [#1495](https://redirect.github.com/thesysdev/openui/pull/1495)）
  当日最密集的特性工作流，server 端到文档的完整垂直切片（详见第 6 节）。
- **[PR #1385](https://redirect.github.com/thesysdev/openui/pull/1385) — genui 组件库与系统提示词重构**（10-12 开启，今日仍有更新）
  长周期大重构，旨在消除重叠的卡片块体系，与 #1490 的包结构诉求同向。

---

## 5. Bug 与稳定性

今日 Issue 区**无新增用户报告的 Bug、崩溃或回归**。活跃 bug 修复主要来自 OpenUI 1.1 系列（均为待合并修复 PR），按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | **[#1484](https://redirect.github.com/thesysdev/openui/pull/1484)** `stripFences` 将任意三反引号视为围栏起始，模型输出内联/单行/游离代码围栏时**整段内容渲染为空**——属高频模型输出模式 | 修复 PR 开放中 |
| 🔴 高 | **[#1483](https://redirect.github.com/thesysdev/openui/pull/1483)** 表达式状态默认值未求值，`$total = 1 + 2` 直接渲染出 `{"k":"BinOp",...}` 语法树 JSON | 修复 PR 开放中 |
| 🔴 高 | **[#1482](https://redirect.github.com/thesysdev/openui/pull/1482)** `@Round/@​Abs/@​Floor/@​Ceil` 作用于列表时统一返回 `0`，影响 **310/1,401（约 22%）基准 dashboard 用例**——模型常以此格式化整列数据 | 修复 PR 开放中 |
| 🔴 高 | **[#1481](https://redirect.github.com/thesysdev/openui/pull/1481)** 链式 Query 仅在流结束时以默认参数（`{ids: null}`）执行一次且不再重跑，数据依赖型应用断链 | 修复 PR 开放中 |
| 🟡 中 | **[#1486](https://redirect.github.com/thesysdev/openui/pull/1486)** 流式解析随程序规模增大而显著变慢：每 chunk 全量重剥围栏/注释，共享引用链存在指数级重建 | 性能修复 PR 开放中 |
| 🟡 中 | **[#1500](https://redirect.github.com/thesysdev/openui/pull/1500)** Renderer 中途卸载时 devtools 流式行永远停留 "Streaming" 并持续计时 | ✅ 已修复，随 react-lang@1.0.2 发布 |

**小结：** 无生产崩溃类问题；核心风险集中在 **lang-core 对真实模型输出的容错性**（围栏、列表数学、表达式求值），1.1 系列正是在系统性补这块短板。

---

## 6. 功能请求与路线图信号

结合今日 Issue 与 PR 布局，可辨识出清晰的版本演进方向：

1. **`toMarkdown()`**（[Issue #681](https://redirect.github.com/thesysdev/openui/issues/681) → [PR #1502](https://redirect.github.com/thesysdev/openui/pull/1502)）
   社区实现已就绪且直接关联 `help wanted` 议题。**判断：大概率进入下个 lang-core 版本（patch/minor）。**
2. **Artifacts 特性栈**（[#1488](https://redirect.github.com/thesysdev/openui/pull/1488) server 端 `OpenUIClient` + 解释器、[#1493](https://redirect.github.com/thesysdev/openui/pull/1493) `react-ui/cloud` 渲染器、[#1494](https://redirect.github.com/thesysdev/openui/pull/1494) 云端生命周期事件、[#1495](https://redirect.github.com/thesysdev/openui/pull/1495) 完整文档）
   从 genui-sdk#218 移植并基于 react-headless 重建，server/前端/可观测性/文档四层齐备。**判断：下一个显著版本的主打特性候选。**
3. **OpenUI 1.1**（追踪 Issue [#1480](https://redirect.github.com/thesysdev/openui/issues/1480)，PR #1481–#1486 共 6 个）
   覆盖流式顺序（smoothStreaming）、列表数学内建、表达式求值、查询依赖序、流式性能、围栏容错。**判断：这 6 个 PR 是 1.1 的发布闸门。**
4. **包结构重组**（[Issue #1490](https://redirect.github.com/thesysdev/openui/issues/1490) + [PR #1385](https://redirect.github.com/thesysdev/openui/pull/1385)）
   维护者发起，预示将出现独立于 chat kits 的可复用 React 组件包（新 `@openuidev/react-*` 命名空间）。**判断：中期架构主线。**
5. **CLI 开发体验**（[PR #1501](https://redirect.github.com/thesysdev/openui/pull/1501)）
   `generate-api-key` 后自动启动 dev server（`--no-dev` 可跳过，60 秒超时保护而非挂起）。

---

## 7. 用户反馈摘要

> 今日活跃 Issue 仅 2 条，样本面较窄，以下为可信提炼：

- **痛点一：响应格式的可读性孤岛**（源自 [#681](https://redirect.github.com/thesysdev/openui/issues/681) 的 5 条评论）
  用户需要以人类/LLM 可读格式序列化 OpenUI 响应：用于调试排障、离线存储做后续分析；更关键的是，LLM 处理 Markdown 的能力优于 OpenUI 原生格式，用户希望**省掉一次额外的模型调用**来"剥离 UI"回传上下文。[PR #1502](https://redirect.github.com/thesysdev/openui/pull/1502) 的设计正对此痛点。
- **痛点二：包粒度过粗**（源自 [#1490](https://redirect.github.com/thesysdev/openui/issues/1490)）
  消费者反映只想复用组件与主题，却被强制带入 chat 特定组合或旧 `react-ui` 的耦合样式面——这是典型的 npm 生态"按需取用"诉求。
- **正向信号：** devtools 的高频小步打磨（位置自定义、流状态修复）与 CLI 一键起服务的改进，显示团队对开发者体验的投入在持续兑现。

---

## 8. 待处理积压

| 项目 | 年龄 | 状态与建议 |
|---|---|---|
| [Issue #681](https://redirect.github.com/thesysdev/openui/issues/681) | **4 个月+**（2026-06-26 开） | 已有社区 PR [#1502](https://redirect.github.com/thesysdev/openui/pull/1502) 待评审。**建议优先处理**，避免外部贡献者热情冷却 |
| [PR #1385](https://redirect.github.com/thesysdev/openui/pull/1385) | 16 天（2026-10-12 开） | genui 组件库 + 系统提示词大重构，体量大、影响面广，建议切分评审 |
| [PR #1438](https://redirect.github.com/thesysdev/openui/pull/1438) | 13 天（2026-10-15 开） | 模板/示例依赖刷新（bot 发起，凭据无关验证已通过），阻塞模板用户获取最新依赖，**建议尽快合并** |
| PR #1481–#1486 | 2 天 | 尚不构成积压，但作为 OpenUI 1.1 发布闸门，评审吞吐直接决定版本节奏 |

今日活跃 Issue 仅 2 条，**未见长期无响应的 Issue 暴露**；积压压力主要在 PR 评审侧而非 Issue 响应侧。

---

**健康度总评：** 活跃度高（27 PR/日）、发布纪律严明（Changesets 全自动、当日闭环）、人机分工清晰（AI 智能体承担 6 个可见 PR 中的 5 个已合并项，人类主导架构与特性）、社区贡献开始回流。短期关注点：1.1 系列 6 个 PR 的评审进度与 #1502 社区 PR 的及时合入。

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render 项目日报 · 2026-10-28

> 数据来源：github.com/vercel-labs/json-render 过去 24 小时 GitHub 活动

---

## 1. 今日速览

过去 24 小时项目保持**中高入站活跃度**：新增 1 个 Issue（[#433](https://redirect.github.com/vercel-labs/json-render/issues/433)）、新开/活跃 7 个 PR（全部待合并），但**合并数与关闭数均为 0**，且无版本发布。贡献呈三条清晰主线：**xubenqiang** 一人提交 4 个核心管线修复/增强（[#434](https://redirect.github.com/vercel-labs/json-render/pull/434)–[#437](https://redirect.github.com/vercel-labs/json-render/pull/437)）、**lahfir** 提交堆叠式特性系列（[#438](https://redirect.github.com/vercel-labs/json-render/pull/438)→[#439](https://redirect.github.com/vercel-labs/json-render/pull/439)）主攻 Compact 生成与 token 成本、**bensabic** 补充文档工程化（[#441](https://redirect.github.com/vercel-labs/json-render/pull/441)）。社区响应速度值得肯定：昨日报告的崩溃 Issue #433 当天即出现根因吻合的修复 PR。需要警惕的信号是：据 #433 报告者核实，`main` 分支自 0.21.3 发布后尚无新提交，叠加本窗口 0 合并，**维护者评审吞吐量是当前项目健康度的最大变量**。

---

## 2. 项目进展（合并与关闭）

今日**无 PR 合并、无 Issue 关闭**，实际推进全部停留在评审队列中，但入站贡献密度较高：

| PR | 类型 | 作者 | 关联 | 核心内容 | 状态 |
|---|---|---|---|---|---|
| [#434](https://redirect.github.com/vercel-labs/json-render/pull/434) | fix(core) | xubenqiang | 疑似修复 [#433](https://redirect.github.com/vercel-labs/json-render/issues/433) | 修复 `typeof null === "object"` 导致路径无法穿越 null 中间值的问题 | Open |
| [#435](https://redirect.github.com/vercel-labs/json-render/pull/435) | fix(core) | xubenqiang | 修复 [#423](https://redirect.github.com/vercel-labs/json-render/issues/423) | 混合解析器重建的 prose 与流式输出保持一致，消除重载后的显示漂移 | Open |
| [#436](https://redirect.github.com/vercel-labs/json-render/pull/436) | fix(core) | xubenqiang | 修复 [#421](https://redirect.github.com/vercel-labs/json-render/issues/421) | prose delta 批量化，替代逐字符 enquire（原 `"Hello world.\n"` 会拆成 13 个 chunk） | Open |
| [#437](https://redirect.github.com/vercel-labs/json-render/pull/437) | feat(core) | xubenqiang | 修复 [#420](https://redirect.github.com/vercel-labs/json-render/issues/420) | 上报无法解析的 patch 行（如被 token 截断的 replace），不再静默丢弃 | Open |
| [#438](https://redirect.github.com/vercel-labs/json-render/pull/438) | feat | lahfir | 无关联 Issue | catalog 约束的嵌套 JSON 生成 + 增量编译 + Compact playground（含实时响应式预览） | Open |
| [#439](https://redirect.github.com/vercel-labs/json-render/pull/439) | perf | lahfir | 基于 #438 | 以单一 positional JSON 格式替代 native/strict 两种变体，削减重复字段名与空字段的 token 开销 | Open |
| [#441](https://redirect.github.com/vercel-labs/json-render/pull/441) | chore(docs) | bensabic | — | 从 vercel/chat 移植 `technical-writer` agent skill 用于文档与 PR 描述 | Open |

**整体判断**：项目正沿两条轴线推进——核心流式管线的**健壮性与可观测性**（#434/#435/#437）与 **LLM token 经济性**（#438/#439）。若评审通过，#434–#437 足以构成一个修复型 patch 版本的主体。

---

## 3. 社区热点

本窗口内 Issue 评论数为 0、PR 评论数据缺失，无显式讨论热帖，热点基于更新活动与内容权重判断：

- **[#438](https://redirect.github.com/vercel-labs/json-render/pull/438) / [#439](https://redirect.github.com/vercel-labs/json-render/pull/439)**：过去 24 小时内持续更新的唯一特性系列，#438 附带可交互 playground demo。背后诉求明确——**降低模型生成 UI 的 token 成本**（当前要求模型产出 element ID 与引用），以及**更快的迭代反馈**（增量编译、响应式预览）。
- **[#433](https://redirect.github.com/vercel-labs/json-render/issues/433)**：唯一新增 Issue，报告质量高（跨版本复现 + 核实 main 无新提交），折射出用户在真实流式生成场景中对 **LLM 输出容错性**的核心诉求。

---

## 4. Bug 与稳定性

按严重程度排列（注：以下修复 PR 均**未合并**，线上 0.21.3 仍携带全部问题）：

1. 🔴 **高｜[#433](https://redirect.github.com/vercel-labs/json-render/issues/433)** — `compileSpecStream` 对路径穿过 `null` 的 patch 抛出未捕获 `TypeError`（如 `{"type":"Section","props":{},"children":null}`）。直接影响流式 UI 生成主链路，属运行时崩溃。
   ✅ 已有修复 PR：[#434](https://redirect.github.com/vercel-labs/json-render/pull/434)（Open；PR 描述与 #433 根因一致但未显式写 "Fixes #433"，建议维护者补关联）
2. 🟡 **中｜[#420](https://redirect.github.com/vercel-labs/json-render/issues/420)** — 无法解析的 patch 行（如被 token 上限截断的 replace）在 spec fence 内被**静默丢弃**、fence 外被当作正文渲染，属静默数据丢失。
   ✅ 已有修复 PR：[#437](https://redirect.github.com/vercel-labs/json-render/pull/437)（Open）
3. 🟡 **中｜[#423](https://redirect.github.com/vercel-labs/json-render/issues/423)** — 混合解析器重建的 prose 与流式输出不一致，存储 raw transcript 后重新切分可能导致**重载后显示内容漂移**，属一致性/正确性问题。
   ✅ 已有修复 PR：[#435](https://redirect.github.com/vercel-labs/json-render/pull/435)（Open）
4. 🟢 **低（性能）｜[#421](https://redirect.github.com/vercel-labs/json-render/issues/421)** — `createJsonRenderTransform` 逐字符 enquire `text-delta`，产生不必要的 chunk 开销，不涉及正确性。
   ✅ 已有修复 PR：[#436](https://redirect.github.com/vercel-labs/json-render/pull/436)（Open）

---

## 5. 功能请求与路线图信号

- **Compact 生成 + positional JSON（[#438](https://redirect.github.com/vercel-labs/json-render/pull/438)、[#439](https://redirect.github.com/vercel-labs/json-render/pull/439)）**：非用户 Issue 驱动，而是贡献者主动推进，但精准切中 token 开销痛点，方向与"AI 生成 UI"的项目定位一致。注意 #439 **移除 native/strict 两种变体**、统一为 positional 格式——若合入属对外行为变更，需评估破坏性影响并配迁移说明，更可能进入 0.22 而非 patch 版本。
- **补丁解析错误上报（[#437](https://redirect.github.com/vercel-labs/json-render/pull/437)）**：与 #420 痛点闭环，改善可观测性与 DX，属低风险高收益，合入概率高。
- **维护流程 AI 化（[#441](https://redirect.github.com/vercel-labs/json-render/pull/441)）**：移植 vercel/chat 已验证的 `technical-writer` skill，信号意义大于功能本身——仓库维护正向 AI 辅助工作流靠拢。
- **版本预判**：#434–#437 若全部合入，可支撑一个以稳定性为主的 0.21.4；#438/#439 体量大、含格式变更，需独立排期。

---

## 6. 用户反馈摘要

- **唯一新增用户声音来自 [#433](https://redirect.github.com/vercel-labs/json-render/issues/433)（grayashh）**：在 0.21.3 与 0.21.1 上复现，并主动核实 `main`（eeb0424）与 0.21.3 之间无代码差异。这表明用户群体技术水位较高、以深度使用者的方式参与；痛点是**模型产出 `null` 中间值（如 `children: null`）时运行时崩溃**，本质上是对 LLM 非规范输出的容错不足。
- 本窗口 Issue 评论为 0，直接反馈量有限；但从 PR 描述可提炼共性痛点：**token 上限截断补丁导致的静默数据丢失**（#437）、**重复字段名与空字段的 token 浪费**（#439）、**重载后 prose 显示不一致**（#435）、**逐字符分块的性能开销**（#436）。
- 无负面情绪、无弃用倾向的报告；整体满意度信号中性偏正面。

---

## 7. 待处理积压（提醒维护者关注）

- **评审队列积压**：7 个 open PR 集中在过去 48 小时内产生，本窗口合并数为 0，且 `main` 自 0.21.3 后无提交——评审带宽是当前最需关注的瓶颈，建议优先处理 4 个核心修复（#434–#437）。
- **堆叠 PR 依赖**：[#439](https://redirect.github.com/vercel-labs/json-render/pull/439) 基于 [#438](https://redirect.github.com/vercel-labs/json-render/pull/438)，需按序评审；应尽早裁决 #438 的方向（catalog 约束生成 + playground）以解锁后续。
- **Issue–PR 关联缺失**：[#434](https://redirect.github.com/vercel-labs/json-render/pull/434) 与 [#433](https://redirect.github.com/vercel-labs/json-render/issues/433) 根因一致但无显式 "Fixes" 关联，建议维护者补链接并打标签，避免修复合入后 Issue 悬挂。
- **破坏性变更评估**：#439 的变体移除（native/strict → positional）需要明确的版本策略与迁移文档。
- **历史 Issue 收尾**：[#420](https://redirect.github.com/vercel-labs/json-render/issues/420)、[#421](https://redirect.github.com/vercel-labs/json-render/issues/421)、[#423](https://redirect.github.com/vercel-labs/json-render/issues/423) 均已有修复 PR 在途，建议随下一版本发布一并验证关闭。

---

*本报告基于过去 24 小时 GitHub 数据生成；长期积压趋势需结合更长窗口数据判断。*

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报

**日期：2026-10-28 | 数据来源：github.com/CopilotKit/CopilotKit**

---

## 1. 今日速览

CopilotKit 今日维持高活跃度：过去 24 小时 Issue 更新 20 条（新开/活跃 10、关闭 10），PR 更新 62 条（待合并 36、已合并/关闭 26），Issue 关闭率达 50%，吞吐与消化能力均衡。项目在窗口期内连续发布 **v1.81.0 与 v1.82.0** 两个 minor 版本，发布节奏明显加快，其中 v1.81.0 落地了本周期最重磅的**原生生成式 UI（Generative UI）**。工程侧呈现清晰的"issue → PR → release"闭环（i18n 标签、A2UI 暗色模式均已修复合入）。需要重点提示：**一条 runtime CORS 安全问题（[#8025](https://redirect.github.com/CopilotKit/CopilotKit/issues/8025)）今日新报且尚无修复 PR**，建议维护者优先处理。

---

## 2. 版本发布

### v1.82.0（[Release 链接](https://github.com/CopilotKit/CopilotKit/releases/tag/v1.82.0)）

| 类型 | 内容 | 关联 PR |
|---|---|---|
| Feature | runtime：Intelligence 锁调用为每个用户请求发送单一 request id，修正此前每次前端工具往返被计为新请求的统计口径（PE-933） | [#7936](https://redirect.github.com/CopilotKit/CopilotKit/pull/7936)（已合并） |
| Feature | react-core/vue/angular：聊天剩余硬编码字符串（"Thinking…"、屏幕阅读器标签等）接入 `labels` 配置 | [#7867](https://redirect.github.com/CopilotKit/CopilotKit/pull/7867)（已合并） |
| Feature | showcase：新增可运行的 Vue 文档 | [#6222](https://redirect.github.com/CopilotKit/CopilotKit/pull/6222)（长期 PR 落地） |

### v1.81.0（[Release 链接](https://github.com/CopilotKit/CopilotKit/releases/tag/v1.81.0)）

| 类型 | 内容 | 关联 PR |
|---|---|---|
| Feature | **原生生成式 UI**：`createGenerativeUI`、tool 与 markdown 传输、标准组件目录、inspector 面板 | [#7819](https://redirect.github.com/CopilotKit/CopilotKit/pull/7819) |
| Feature | runtime：服务端 Learning 管理方法 | [#7977](https://redirect.github.com/CopilotKit/CopilotKit/pull/7977) |
| Fix | inspector：接受本地 dashboard 并重试 Learning 存储（发布说明截断） | — |

**迁移注意事项**：两个版本均为 minor 升级，无标注破坏性变更。但两点值得留意：① 需要完整本地化的应用升级 v1.82.0 后应检查新增的 label keys（`reasoningMessageThinkingLabel` 等）；② v1.81.0 的原生生成式 UI 为新增 API 面，存量代码不受影响，但 A2UI 用户建议关注随后的 [#7866](https://redirect.github.com/CopilotKit/CopilotKit/pull/7866) 暗色模式修复（已包含在后续版本中）。

---

## 3. 项目进展

今日 26 条 PR 合并/关闭，重点如下：

**已进入发布的合并：**
- [#7936](https://redirect.github.com/CopilotKit/CopilotKit/pull/7936)：Intelligence request id（v1.82.0）
- [#7867](https://redirect.github.com/CopilotKit/CopilotKit/pull/7867)：三框架 labels i18n 补全，关闭 [#7864](https://redirect.github.com/CopilotKit/CopilotKit/issues/7864)（v1.82.0）
- [#7866](https://redirect.github.com/CopilotKit/CopilotKit/pull/7866)：A2UI 基础目录暗色模式修复（React/Vue 对齐 Angular 行为），关闭 [#7863](https://redirect.github.com/CopilotKit/CopilotKit/issues/7863)
- [#8031](https://redirect.github.com/CopilotKit/CopilotKit/pull/8031)：v1.82.0 monorepo 自动化发布 PR（已关闭）

**其他关闭：**
- [#8037](https://redirect.github.com/CopilotKit/CopilotKit/pull/8037)：docs 补充 `toolCallsView` slot 文档并链接 Storybook

**待合并中的高价值 PR：**
- [#8042](https://redirect.github.com/CopilotKit/CopilotKit/pull/8042)：修复停止 run 后未应答的 tool call（对应今日新报 bug，响应速度极快）
- [#8033](https://redirect.github.com/CopilotKit/CopilotKit/pull/8033)：新增 `CopilotKitHeadlessProvider`，解决 headless 打包问题
- [#8032](https://redirect.github.com/CopilotKit/CopilotKit/pull/8032)：Angular popup/sidebar 标签接入 labels

**整体评估**：今日合并内容直接清偿了 i18n 完整性与暗色模式两类社区反馈，形成完整闭环。v1.81.0 的原生生成式 UI 为排队中的 A2UI Playground（[#7965](https://redirect.github.com/CopilotKit/CopilotKit/pull/7965)、[#7976](https://redirect.github.com/CopilotKit/CopilotKit/pull/7976)）与标准目录文档（[#8039](https://redirect.github.com/CopilotKit/CopilotKit/pull/8039)）铺路——项目正处于"**生成式 UI + Intelligence 平台化**"双主线的快速推进期。

---

## 4. 社区热点

按评论活跃度排序（24h 内有更新的议题）：

| 议题 | 状态 | 评论数 | 核心诉求 |
|---|---|---|---|
| [#7882](https://redirect.github.com/CopilotKit/CopilotKit/issues/7882) headless 入口缺少 web provider | OPEN | 5 | 自带 UI 的应用被迫打包整套聊天渲染栈 |
| [#7802](https://redirect.github.com/CopilotKit/CopilotKit/issues/7802) `includeSchema: false` 仍发送 schema 且默认发两次 | CLOSED | 5 | 协议冗余、token 浪费 |
| [#7846](https://redirect.github.com/CopilotKit/CopilotKit/issues/7846) BuiltInAgent 系统提示词混入 `messages` | CLOSED | 4 | 触发 AI SDK v6 注入警告，协议卫生问题 |
| [#7660](https://redirect.github.com/CopilotKit/CopilotKit/issues/7660) Inspector launcher 位置不可配置 | OPEN | 4 | 固定右上角遮挡应用自身导航 |
| [#7859](https://redirect.github.com/CopilotKit/CopilotKit/issues/7859) 无公开 API 按 CopilotChat 方式发消息 | CLOSED | 4 | 工具调用内组件需要主动触发对话 |

**背后诉求分析**：贡献者 Laptopmini 连续报告 4 条高质量 issue（#7882、#7802、#7846、#7825），集中反映**资深用户对"按需引入、协议干净、与 AI SDK 生态无缝对接"** 的高期待；#7660 则代表嵌入式集成场景下的 UI 可配置性诉求。团队响应积极，多数热点已有对应 PR。

---

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| 🔴 高 | [#8025](https://redirect.github.com/CopilotKit/CopilotKit/issues/8025) v2 runtime 内置 CORS 在 `credentials: true` 且未配置 `origin` 时反射**任意 origin**，存在跨站凭证泄漏风险（今日新报） | OPEN | ❌ 暂无 |
| 🟠 中高 | [#8023](https://redirect.github.com/CopilotKit/CopilotKit/issues/8023) 停止的 run 中前端 tool call 未应答，导致**下一轮对话失败**（今日新报） | OPEN | ✅ [#8042](https://redirect.github.com/CopilotKit/CopilotKit/pull/8042)（当日提交） |
| 🟠 中高 | [#7967](https://redirect.github.com/CopilotKit/CopilotKit/issues/7967) 多个包仍依赖 Zod 3，阻塞用户响应 Zod 安全通告 GHSA-mrhx-c7xc 的升级 | OPEN | ❌ 暂无 |
| 🟡 中 | [#7882](https://redirect.github.com/CopilotKit/CopilotKit/issues/7882) headless 应用打包冗余 | OPEN | ✅ [#8033](https://redirect.github.com/CopilotKit/CopilotKit/pull/8033) 待合并 |
| 🟢 低 | [#7825](https://redirect.github.com/CopilotKit/CopilotKit/issues/7825) docs 站 banner 水合后渲染导致 40px 布局跳动（CLS） | OPEN | ❌ 暂无（相关体验 PR [#7824](https://redirect.github.com/CopilotKit/CopilotKit/pull/7824) 进行中但不直接修复） |

**今日修复验证**：#7863（A2UI 暗色不可读）→ PR #7866 已合并；#7627、#7625（Slate 编辑器文本边界处理）均已关闭。

---

## 6. 功能请求与路线图信号

**今日新开的功能请求：**
- [#8036](https://redirect.github.com/CopilotKit/CopilotKit/issues/8036)：Pixeltable 多模态 agent 记忆 Cookbook——聊天附件（视频/图片/PDF）跨会话存储与检索，社区贡献意愿强
- [#8030](https://redirect.github.com/CopilotKit/CopilotKit/issues/8030)：Angular popup/sidebar 标签接入 labels——**PR [#8032](https://redirect.github.com/CopilotKit/CopilotKit/pull/8032) 当日已提交，大概率进入下一版本**

**路线图信号（基于 PR 流向推断）：**
1. **生成式 UI 持续加码**：#7819（已发布）→ A2UI Playground [#7965](https://redirect.github.com/CopilotKit/CopilotKit/pull/7965)、A2UI Express [#7976](https://redirect.github.com/CopilotKit/CopilotKit/pull/7976)、标准目录参考文档 [#8039](https://redirect.github.com/CopilotKit/CopilotKit/pull/8039)，构成清晰的后续版本主线
2. **Intelligence 平台化**：request id（#7936）+ 服务端 Learning 管理（#7977）
3. **多端扩张**：Flutter CLI 模板源码 [#8038](https://redirect.github.com/CopilotKit/CopilotKit/pull/8038)（Claude Managed Agents）
4. **品牌重定位**：README 围绕 "Connect any agent to any user" 重写（[#8040](https://redirect.github.com/CopilotKit/CopilotKit/pull/8040)），明示 AG-UI、CopilotKit Intelligence、AI coworker 的产品栈叙事
5. **生态集成**：Omnara starter [#7942](https://redirect.github.com/CopilotKit/CopilotKit/pull/7942)、Antigravity Repo Doctor [#7886](https://redirect.github.com/CopilotKit/CopilotKit/pull/7886)、AG2 1.x 迁移 [#7767](https://redirect.github.com/CopilotKit/CopilotKit/pull/7767)
6. channels 子包 v0.12.0 发布 PR [#8041](https://redirect.github.com/CopilotKit/CopilotKit/pull/8041) 已由 bot 开出，又一版本在路上

---

## 7. 用户反馈摘要

**痛点提炼：**
- **包体积与按需引入**：headless 用户被迫打包整套聊天渲染栈（[#7882](https://redirect.github.com/CopilotKit/CopilotKit/issues/7882)），是本周最高声量的反馈主题
- **协议卫生**：schema 重复发送（[#7802](https://redirect.github.com/CopilotKit/CopilotKit/issues/7802)）、系统提示词位置不当（[#7846](https://redirect.github.com/CopilotKit/CopilotKit/issues/7846)），反映深度用户对与 AI SDK 生态"干净互操作"的强诉求
- **本地化完整性**：labels 覆盖不齐（#7864 已修，#8030 Angular 遗留），多语言产品用户受影响
- **依赖安全**：Zod 3 锁死导致无法响应安全通告（[#7967](https://redirect.github.com/CopilotKit/CopilotKit/issues/7967)）
- **主题一致性**：A2UI 暗色模式曾不可用（#7863，已修）

**满意点：**
- 响应速度出色：#8023 当日报告当日有修复 PR（#8042）；#7882 一周内出现修复 PR（#8033）
- 贡献者生态健康：Laptopmini、BenTaylorDev、Mordris、contextablemark 等高频产出高质量 issue 与 PR；团队成员以 issue 追踪 PR review 遗留项（[#8034](https://redirect.github.com/CopilotKit/CopilotKit/issues/8034)、[#8035](https://redirect.github.com/CopilotKit/CopilotKit/issues/8035)），工程流程规范透明

**使用场景信号**：用户正在构建自带 UI 的 headless 应用、多框架（含 Angular）本地化产品、以及将聊天附件作为长期记忆的 agent 应用（#8036）。

---

## 8. 待处理积压

| 项目 | 开启时长 | 状态 | 建议 |
|---|---|---|---|
| [#7660](https://redirect.github.com/CopilotKit/CopilotKit/issues/7660) inspectorDefaultAnchor | 23 天（10-05 起），4 评论 | 无修复 PR | 最长未决功能诉求，建议维护者给出排期或回应 |
| PR [#7462](https://redirect.github.com/CopilotKit/CopilotKit/pull/7462) threads drawer 重设计 | **31 天**（09-27 起） | 未合并 | 积压最久的 PR，建议推动 review 或拆分 |
| [#7825](https://redirect.github.com/CopilotKit/CopilotKit/issues/7825) docs banner CLS | 14 天，4 评论 | 无专项修复 | 影响 docs 首屏体验 |
| [#7882](https://redirect.github.com/CopilotKit/CopilotKit/issues/7882) headless provider | 9 天 | PR [#8033](https://redirect.github.com/CopilotKit/CopilotKit/pull/8033) 待合并 | 声量最高，建议优先 review |
| [#7967](https://redirect.github.com/CopilotKit/CopilotKit/issues/7967) Zod 4 支持 | 4 天 | 无 PR | 涉及安全通告，建议明确升级路径 |
| PR [#7998](https://redirect.github.com/CopilotKit/CopilotKit/pull/7998) 中断恢复结果复用 | 2 天 | 衍生跟踪 issue #8034/#8035 | 合并前需厘清 canonical 结果查找与中断保留语义 |

---

**健康度小结**：今日数据（50% issue 关闭率、当日 bug 当日 fix、双版本发布、活跃的多框架贡献者）显示项目处于**高健康度的快速迭代期**；主要风险点为 CORS 安全问题（#8025）尚无修复、Zod 4 依赖升级路径未明，以及少量长期积压（#7660、PR #7462）需要维护者关注。

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*