# 生成式 UI 生态日报 2026-10-29

> Issues: 63 | PRs: 122 | 覆盖项目: 4 个 | 生成时间: 2026-10-29 04:56 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告
**数据日期：2026-10-29 | 覆盖项目：a2ui、OpenUI、json-render、CopilotKit**

---

## 一、生态全景

生成式 UI 正从"能力演示期"进入"工程化收敛期"。协议层出现事实标准苗头——CopilotKit 已在 playground 中采用 A2UI v1.0 渲染器与 Express 格式，而 a2ui 自身正以四语言 SDK conformance 体系冲刺 v1.0。Token 效率成为核心竞争维度：json-render 的 Compact/positional JSON、a2ui 的 Express 格式毕业与"协议细节污染模型思考过程"问题（#3576），从不同角度攻击同一成本与质量瓶颈。安全议题同步升温：CopilotKit 单日两个安全发布、两个安全级 Bug 当日闭环，a2ui 沙箱/函数调用边界 P1 聚集。产品形态上，行业正从一次性生成转向可持久化、可编辑的 Artifacts，而"OSS 内核 + 云控制面"（Thesys 网关、CopilotKit Intelligence）成为主流商业化模式。

---

## 二、各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | 合并/关闭吞吐 | 版本发布 | 贡献者结构 |
|---|---|---|---|---|---|
| **a2ui** | 50（活跃 38 / 关闭 12，净增 +26） | 50（待审 37 / 关闭 13） | 13 PR + 12 Issue | 0 | 12+ 人，外部 bug bash 深度参与 |
| **CopilotKit** | 11（活跃 7 / 关闭 4） | 57（待审 37 / 关闭 20） | 20 PR + 4 Issue | **2**（含 1 安全版本） | 核心团队 + 社区"报障+修复" |
| **OpenUI** | 2（均开启，1 评论） | 12（待审 11 / 关闭 1） | **0 合并** | 0 | 核心团队 + AI bot 主导 |
| **json-render** | **0** | 3（待审 2 / 关闭 1） | 0 | 0 | 单一外部贡献者 + 维护者 |

**解读**：a2ui 与 CopilotKit 构成第一梯队但形态迥异——a2ui 处于"高摄入、高输出、净增 +26"的发散磨合期；CopilotKit 是输入输出均衡的收敛期（20 PR 落地、8 个月老 Issue 清理）。OpenUI 与 json-render 单日均零合并，**review 带宽/响应是后两者的共同瓶颈**。

---

## 三、共同关注的功能方向

**1. Token 效率与提示词卫生**（json-render、a2ui、OpenUI）
- json-render #438（目录约束的 Compact 生成 + playground）、#439（positional JSON 消除重复字段名与空字段的 token 浪费）
- a2ui Express 格式毕业为默认生产格式（#2728）；#3576 报告协议 schema/surface ID 细节污染模型思考过程
- OpenUI #1503 关闭 tools 后系统提示词残留失效规则，浪费 token 且可能诱导非法结构
- **共同判断**：协议的 token 开销既伤成本，也伤模型输出质量

**2. MCP 生态集成**（全部四个项目）
- a2ui：`@a2ui/catalog-mcp` 三件套（官方指南 / Kanban / 文件系统样例）推进为一等公民
- OpenUI：Artifacts 文档内置 MCP 数据工具示例
- CopilotKit：MCP Apps sandbox（#6910，SEP-1865 同源合规争议）
- 生成式 UI 与 agent 工具调用生态的融合已从选项变为标配

**3. 沙箱与函数调用安全**（CopilotKit、a2ui）
- CopilotKit：channels/v0.12.0 安全版本 + 原型污染 #8071、参数校验绕过 #8070，**均实现当日报告→当日 fix PR**
- a2ui：#3483（`allowedCallers` 未检查）、#3432（iframe sandbox 权限未剥离）、#3625（MIME 信任，已修复）——三者同出 v1-bug-bash，均涉及沙箱/函数调用边界

**4. Artifacts 与持久化 UI**（OpenUI、CopilotKit、a2ui）
- OpenUI：6-PR Cloud Artifacts 全栈（SSE 流式读取、pin/delete、生命周期遥测）
- CopilotKit：#8062 将 A2UI update 路由至既有 surface，避免重复创建
- a2ui：Surface 组合规则跨 SDK 统一（#3360）

**5. 流式解析健壮性**（OpenUI、json-render）
- OpenUI #1486 定位到"每 chunk 全量重扫 + 语句指数级重建"的根因；#1484 修复围栏误判导致的渲染空白
- json-render #438 要求增量编译且不回退流式与校验能力

---

## 四、差异化定位分析

| 项目 | 生态层级 | 技术路线 | 目标用户 | 当前阶段 |
|---|---|---|---|---|
| **a2ui** | 协议/标准层 | 多语言 SDK（TS/Dart/Python/Swift）+ 规范 + conformance 套件；与 Google 生态关联密切（Python SDK 同步 Google monorepo） | 框架/平台构建者、SDK 维护者 | v1.0 前稳定期；工程纪律强（蓝图治理、bug bash），但发布管线（#1307 六个月未决）与 P1 积压待收口 |
| **CopilotKit** | 全栈应用平台层 | React 组件 + AG-UI 协议 + 云服务；渠道集成面最广（Teams/Telegram/Omnara） | 从原型到生产的产品团队 | **最成熟**（v1.83.x）；安全响应当日闭环；README 重写显示定位向 agentic 全栈平台升级 |
| **OpenUI** | 应用框架层（chat 场景） | React headless + Cloud Artifacts；Thesys 网关收敛 OSS/Cloud 入口 | 在聊天应用中嵌入生成式 UI 的 SaaS 开发者 | 1.1 冲刺（流式性能 + 解析健壮性）；核心团队驱动，外部社区薄弱 |
| **json-render** | 渲染内核/工具库层 | 目录约束 JSON 生成 + 增量编译，单点聚焦 token 效率 | 库作者、集成方（Vercel 生态实验田） | 早期 labs 阶段；功能窄而深，评审响应是存续风险 |

**核心判断**：四者构成互补分层而非直接竞争——a2ui 定义"说什么"（协议），json-render 优化"怎么说更省"（序列化），OpenUI/CopilotKit 解决"怎么用"（应用框架/平台）。值得注意的是，**分层关系已在实践中发生：CopilotKit #7976 直接消费 A2UI Express 作为输出格式**。

---

## 五、社区热度与成熟度

**热度排序**：a2ui > CopilotKit > OpenUI > json-render

- **a2ui**：热度最高（50 Issue + 50 PR/日，12+ 贡献者），且外部报告质量突出——bug bash 产出普遍含可复现步骤、根因分析与规范条款对照；但净增 +26 Issue 显示摄入快于消化，#1307（npm 开箱即坏、6 个月、9 评论）是口碑消耗点。
- **CopilotKit**：互动质量最佳——xiong-wei1 同日两个安全报告均附 fix PR，社区参与已从"报障"深化为"报障+修复"，是成熟开源社区的标志形态。
- **OpenUI**：外部互动近乎为零（2 Issue / 1 评论 / 0 👍），活跃度由核心团队与 AI bot（devin、thesys-pr-creator）支撑；#819（Tabs 默认选中错误）悬置 99 天无认领是明显短板。
- **json-render**：Issue 零流量，两条核心 PR 挂起 2 天零评论，贡献者激励存在流失风险。

**成熟度排序**：CopilotKit（v1.83、安全流程化、积压清理）> a2ui（v1.0 前，纪律强、债在发布管线）> OpenUI（1.1 前，核心团队单点冲刺）> json-render（labs 实验期）。

值得注意的倒挂现象：**最活跃的 a2ui 处于发布前磨合，最成熟的 CopilotKit 已进入安全/稳定性收敛**——活跃度与成熟度并非同向指标，选型时应区分"热度"与"可上生产"。

---

## 六、值得关注的趋势信号

1. **协议互操作开始发生**。CopilotKit 消费 A2UI v1.0/Express 是当日最具生态意义的信号。若 a2ui 完成 CLI 分发与跨 SDK 语义对齐，生成式 UI 有望迎来"统一交换格式"时刻。**选型时应将协议兼容性置于组件库功能之上**，避免格式层锁定。

2. **Token 成本从优化项升格为架构约束**。三个项目独立攻击同一问题（输出格式压缩、提示词卫生、思考过程污染）。紧凑格式与"协议指令对模型/终端用户的可见性"将成为硬性评估指标，直接影响运行成本与生成质量。

3. **安全响应速度成为信任分水岭**。CopilotKit 树立了"当日报告→当日修复→当日发布"的基准；a2ui 三个无修复 PR 的 P1 是反面参照。生成式 UI 的攻击面特殊——**模型生成内容直接触发函数调用与渲染**——沙箱边界、原型污染防护、参数校验必须作为一等公民审查，而非事后补丁。

4. **OSS-Cloud 双轨收敛**。OpenUI 演示站统一走 Thesys 网关（OpenRouter 直连用户需关注迁移）、CopilotKit 持续强化云服务（Intelligence、API key 体系）。自托管与云路径的边界正在重构，深度依赖方应提前评估锁定风险。

5. **Artifacts 是下一个产品战场**。从一次性生成转向可编辑、可 pin、可观测的持久 UI 对象（OpenUI 全栈布局、CopilotKit surface 复用机制）。对话式 UI 的留存价值正向"生成物本身"转移。

6. **AI 辅助研发形成自证闭环**。构建生成式 UI 的项目正用 AI agent 开发自己：OpenUI 的 devin bot、json-render 的 technical-writer skill、CopilotKit 的 Ask Kite。工具链与使用场景合流，贡献流程的 AI 化将加速，开发者可预期更低的参与门槛。

**给技术决策者的行动建议**：按层取用——协议层跟踪 a2ui 的 v1.0 收口进度，应用层优先评估 CopilotKit 的成熟度与安全记录，token 敏感场景关注 json-render 的紧凑格式实验；生产环境落地前，务必独立验证沙箱隔离与参数校验路径；预算评估中应将输出格式压缩能力纳入 TCO 测算。

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目日报 · 2026-10-29

**仓库**：[a2ui-project/a2ui](https://github.com/a2ui-project/a2ui) | **报告周期**：过去 24 小时 | **本周期无新版本发布**

---

## 一、今日速览

项目处于 v1.0 发布前的密集稳定期：过去 24 小时 Issue 更新 50 条（新开/活跃 38，关闭 12），PR 更新 50 条（待合并 37，合并/关闭 13），无版本发布。今日最突出的工程动作是 **nan-yu 一日之内提交 5 个堆叠 PR（[#3735](https://redirect.github.com/a2ui-project/a2ui/pull/3735)–[#3742](https://redirect.github.com/a2ui-project/a2ui/pull/3742)），将"渲染器无法执行的函数调用回传 agent"的路由语义在 TypeScript/Dart/Python/Swift 四个 SDK 统一落地**；同时 CLI 官方分发体系（[#3700](https://redirect.github.com/a2ui-project/a2ui/pull/3700)、[#3738](https://redirect.github.com/a2ui-project/a2ui/pull/3738)）持续推进。活跃度评估：**非常高**（12+ 位贡献者参与，Issue 闭环率 24%、PR 闭环率 26%），但 Issue 净增 +26、三个 P1 安全/正确性问题暂无修复 PR，且存在 6 个月未决的 P1 打包问题（[#1307](https://redirect.github.com/a2ui-project/a2ui/issues/1307)），v1.0 收敛压力较大。

---

## 二、项目进展

### 今日合并/关闭的 PR（13 个，可见代表项）

- **[#2728](https://redirect.github.com/a2ui-project/a2ui/pull/2728) — Express 推理格式从实验性毕业为生产格式**：横跨代码库、规范与文档的整体迁移。结合 [#3725](https://redirect.github.com/a2ui-project/a2ui/issues/3725) 中"Express 现已是默认格式"的表述，该格式毕业工作至此画上句号，是 v1.0 的重要里程碑。
- **[#2416](https://redirect.github.com/a2ui-project/a2ui/pull/2416) — Python SDK 改用抽象集合类型**：为同步上游 Google monorepo 滚动升级所需（见关联 [#2415](https://redirect.github.com/a2ui-project/a2ui/issues/2415)）——侧面印证 a2ui Python SDK 与 Google 生态的紧密关联。

### 今日新增的关键 PR

**1. 跨 SDK 函数调用路由统一系列（nan-yu，5 连发，全部今日创建）**

| PR | 内容 |
|---|---|
| [#3735](https://redirect.github.com/a2ui-project/a2ui/pull/3735) | web_core：未实现函数以 `callAgentFunction` 回传 agent（修复 [#3415](https://redirect.github.com/a2ui-project/a2ui/issues/3415)） |
| [#3739](https://redirect.github.com/a2ui-project/a2ui/pull/3739) | Dart：仅函数 miss 才路由，并附带解析后的 catalogId |
| [#3740](https://redirect.github.com/a2ui-project/a2ui/pull/3740) | Python：此前 `DataContext` 直接报 "Function not found"，现正确回传 |
| [#3741](https://redirect.github.com/a2ui-project/a2ui/pull/3741) | Swift：此前即使有 `outboundListener` 也报错，现对齐 |
| [#3742](https://redirect.github.com/a2ui-project/a2ui/pull/3742) | 新增共享 conformance 用例，锁定该行为 |

这是 [#3536](https://redirect.github.com/a2ui-project/a2ui/issues/3536) SDK 级修复计划的第一步，**消除了 v1.0 协议核心语义在四个语言实现间的行为分歧**，是多语言协议项目一致性的关键推进。

**2. CLI 分发体系（jacobsimionato）**：[#3738](https://redirect.github.com/a2ui-project/a2ui/pull/3738)（今日新增，curl/powershell 一键安装脚本）+ [#3700](https://redirect.github.com/a2ui-project/a2ui/pull/3700)（多平台二进制编译发布流水线，对应 [#3697](https://redirect.github.com/a2ui-project/a2ui/issues/3697) 的 P0/P1 需求）。落地后用户无需安装 Dart/Flutter SDK，开发体验门槛大幅降低。

**3. 在途大型工作（今日活跃更新）**：错误映射与 conformance 三部曲 [#3580](https://redirect.github.com/a2ui-project/a2ui/pull/3580)/[#3581](https://redirect.github.com/a2ui-project/a2ui/pull/3581)/[#3582](https://redirect.github.com/a2ui-project/a2ui/pull/3582) + 覆盖全部 5 个渲染器的 error/adapter/a11y 套件 [#3583](https://redirect.github.com/a2ui-project/a2ui/pull/3583)；MCP 生态三件套 [#3642](https://redirect.github.com/a2ui-project/a2ui/pull/3642)/[#3648](https://redirect.github.com/a2ui-project/a2ui/pull/3648)/[#3577](https://redirect.github.com/a2ui-project/a2ui/pull/3577)；Surface 组合规则修复 [#3360](https://redirect.github.com/a2ui-project/a2ui/pull/3360)；Flutter 破坏性变更 [#3714](https://redirect.github.com/a2ui-project/a2ui/pull/3714)（未解析组件默认渲染为空，不再向终端用户展示 spinner/debug 占位）。

### 今日关闭的代表性 Issue（12 个）

含 1 个 P1 安全修复落地（[#3625](https://redirect.github.com/a2ui-project/a2ui/issues/3625) file_resolve MIME 信任）、Express 数据模型写入语义修复（[#3367](https://redirect.github.com/a2ui-project/a2ui/issues/3367)）、协议版本字符串统一（[#3097](https://redirect.github.com/a2ui-project/a2ui/issues/3097)）、目录重命名（[#2042](https://redirect.github.com/a2ui-project/a2ui/issues/2042)），以及一批积压清理：[#400](https://redirect.github.com/a2ui-project/a2ui/issues/400)、[#534](https://redirect.github.com/a2ui-project/a2ui/issues/534)、[#539](https://redirect.github.com/a2ui-project/a2ui/issues/539)、[#2723](https://redirect.github.com/a2ui-project/a2ui/issues/2723)、[#3595](https://redirect.github.com/a2ui-project/a2ui/issues/3595)。

**推进幅度评估**：单日完成 1 个 P1 安全修复 + Express 格式收尾 + 5 SDK 路由对齐方案提交，属于高产出日；但大型 conformance 系列（4 个 PR）与路由系列（5 个 PR）均未合并，review 带宽是当前吞吐瓶颈。

---

## 三、社区热点

1. **[#1307](https://redirect.github.com/a2ui-project/a2ui/issues/1307)（9 评论，今日更新）— react@0.9.1 发布包样式失效**：npm 安装的 `@a2ui/react@0.9.1` 中 Button/TextField/ChoicePicker 渲染为 `class="undefined undefined"`。**自 4 月 30 日提出至今 6 个月未决，是全库评论最多的 Issue**。诉求本质是发布管线（打包/发布配置）质量——"npm 装完开箱即坏"是最伤口碑的故障类型，9 条评论反映用户反复跟进无果。
2. **[#3416](https://redirect.github.com/a2ui-project/a2ui/issues/3416)（6 评论）— RFC：统一 prompt 与 skill 生成公共 API**：ditman 指出 Agent SDK 存在 `PromptGenerator` 与 skill 生成两套并行 API，涉及全部语言实现，属架构级收敛讨论。
3. **[#3576](https://redirect.github.com/a2ui-project/a2ui/issues/3576)（2 评论）— 模型思考过程被 A2UI 协议细节污染**："用户问自己的问题，读到的却是协议（schema、surface ID、JSON 校验）"。触及 AI-UI 生成协议的核心体验张力：协议指令开销对终端用户可见。
4. **[#3698](https://redirect.github.com/a2ui-project/a2ui/issues/3698)（2 评论）— 二进制 wire 传输与不透明类型化载荷提案**：维护者 jacobsimionato 提出，在 JSON 之外支持二进制格式，路线图信号明确。
5. **[#3687](https://redirect.github.com/a2ui-project/a2ui/issues/3687)（2 评论）— main 分支 Evals 失败**（关联 PR #3677）：CI 健康告警，需关注是否阻塞他人合并。

---

## 四、Bug 与稳定性

### P1（按风险排序）

| Issue | 问题 | 修复状态 |
|---|---|---|
| [#3485](https://redirect.github.com/a2ui-project/a2ui/issues/3485) | web_core `ErrorMessageSchema` 因 schema 生成脚本对 `oneOf` 的错误转换（`!z.any().safeParse().success`），**拒绝 100% 的错误消息** | ⚠️ 未见修复 PR |
| [#3483](https://redirect.github.com/a2ui-project/a2ui/issues/3483) | `createCatalogInvoker` 未检查 `allowedCallers === 'agentOnly'`，**UI 绑定/动作可执行仅限 agent 的函数**（违反协议规范第 327 行） | ⚠️ 未见修复 PR |
| [#3432](https://redirect.github.com/a2ui-project/a2ui/issues/3432) | sandbox.ts 未剥离 `allow-top-navigation`/`allow-popups`，与代码内声明的安全架构注释不符，存在 frame-busting/clickjacking 风险 | ⚠️ 未见修复 PR |
| [#3725](https://redirect.github.com/a2ui-project/a2ui/issues/3725) | Express 无法表达 `@index` 函数（语法错误 + 反编译失败 + 提示词未提及）；Express 已是默认格式，直接影响列表行序号场景 | ⚠️ 未见修复 PR |
| [#1307](https://redirect.github.com/a2ui-project/a2ui/issues/1307) | react 发布包 CSS-module 引用为空 | 6 个月未决 |
| [#3625](https://redirect.github.com/a2ui-project/a2ui/issues/3625) | file_resolve 信任调用方声称的 MIME（SVG 标记为 PNG 可绕过 `image/*` 策略） | ✅ 今日关闭 |

### P2

- **Swift 质量系列**（karolkulesza）：[#3377](https://redirect.github.com/a2ui-project/a2ui/issues/3377) DateTimeInput 丢弃合法 ISO 8601 时间、[#3379](https://redirect.github.com/a2ui-project/a2ui/issues/3379) formatDate 结果依赖设备时区、[#3375](https://redirect.github.com/a2ui-project/a2ui/issues/3375) 缺少 scaling conformance runner（本地实测部分用例超标）
- [#3423](https://redirect.github.com/a2ui-project/a2ui/issues/3423)：`@a2ui/react@0.14.0` 硬编码 `v0_9` 导入、缺 `./v1_0` 子路径
- [#3479](https://redirect.github.com/a2ui-project/a2ui/issues/3479)：ExpressParser 词法器配置与文法不一致，注释含撇号时吞噬 `</a2ui>`
- [#3354](https://redirect.github.com/a2ui-project/a2ui/issues/3354)：SDK 间 Surface 组合规则判定不一致（同一 payload 被 A SDK 接受、B SDK 拒绝）→ **修复 PR [#3360](https://redirect.github.com/a2ui-project/a2ui/pull/3360) 待合并**
- [#3513](https://redirect.github.com/a2ui-project/a2ui/issues/3513)：`Catalog.toJson()` 注入 `unevaluatedProperties: false` 破坏 round-trip
- [#3289](https://redirect.github.com/a2ui-project/a2ui/issues/3289)：a2ui_core 声明 Dart 3.5 下限但实际仅 Dart 3.10+ 可解析

**安全主题聚类提示**：[#3483](https://redirect.github.com/a2ui-project/a2ui/issues/3483)、[#3432](https://redirect.github.com/a2ui-project/a2ui/issues/3432)、（已修复的）[#3625](https://redirect.github.com/a2ui-project/a2ui/issues/3625) 均出自 v1-bug-bash、均涉及沙箱/函数调用边界，建议作为一组集中审查。CI 方面 main 分支 evals 当前为红（[#3687](https://redirect.github.com/a2ui-project/a2ui/issues/3687)）。

---

## 五、功能请求与路线图信号

**已进入实施（有在途 PR，大概率进入下一版本）：**
- **CLI 官方分发**：[#3697](https://redirect.github.com/a2ui-project/a2ui/issues/3697) → [#3700](https://redirect.github.com/a2ui-project/a2ui/pull/3700) + [#3738](https://redirect.github.com/a2ui-project/a2ui/pull/3738)
- **MCP catalog 生态**：[#3642](https://redirect.github.com/a2ui-project/a2ui/pull/3642)（官方指南）、[#3648](https://redirect.github.com/a2ui-project/a2ui/pull/3648)（Kanban 样例）、[#3577](https://redirect.github.com/a2ui-project/a2ui/pull/3577)（文件系统样例 v1.0 迁移）——`@a2ui/catalog-mcp` 正在成为一等公民，是 Agent 工具调用场景的关键布局
- **元数据访问 API**（getMetadata/setMetadata/onMetadataChanged）：[#3708](https://redirect.github.com/a2ui-project/a2ui/issues/3708)（gspencergoog，P1，规范已定义、待 SDK 实现）

**讨论中（RFC/蓝图）：**
- [#3416](https://redirect.github.com/a2ui-project/a2ui/issues/3416)：统一 prompt/skill 生成 API（P3，架构级）
- [#3698](https://redirect.github.com/a2ui-project/a2ui/issues/3698)：二进制传输与类型化载荷（维护者提出，方向性信号强）
- [#3732](https://redirect.github.com/a2ui-project/a2ui/issues/3732)：node resolution 特性蓝图并入核心 SDK 模块蓝图（蓝图治理体系演进）
- [#3535](https://redirect.github.com/a2ui-project/a2ui/issues/3535)：Agent SDK 缺 RPC 辅助函数，"每个 agent 都得手搓 RPC 管线"——与今日 [#3735](https://redirect.github.com/a2ui-project/a2ui/pull/3735)–[#3742](https://redirect.github.com/a2ui-project/a2ui/pull/3742) 系列方向一致，可能一并承接
- [#2356](https://redirect.github.com/a2ui-project/a2ui/issues/2356)：Dart Agent SDK（8 月立项，持续推进中）

**社区长期诉求（今日关闭，去向待观察）**：Vue 适配（[#400](https://redirect.github.com/a2ui-project/a2ui/issues/400)，3 👍）、文件上传组件（[#534](https://redirect.github.com/a2ui-project/a2ui/issues/534)）、Go SDK（[#539](https://redirect.github.com/a2ui-project/a2ui/issues/539)，评论中指向 google/A2UI 仓库）——三者均于今日关闭，后续版本是否会以其他形式承接值得跟踪。

---

## 六、用户反馈摘要

**痛点：**
1. **开箱体验受损**：[#1307](https://redirect.github.com/a2ui-project/a2ui/issues/1307) npm 安装后组件无样式，6 个月未解决，是当前最响亮的不满信号
2. **上手摩擦**：[#3419](https://redirect.github.com/a2ui-project/a2ui/pull/3419) 指出 Lit shell 样例 README 缺 API key 配置步骤，新用户按文档无法跑通
3. **协议开销可见**：[#3576](https://redirect.github.com/a2ui-project/a2ui/issues/3576) 终端用户在等待回答时看到的全是协议细节而非问题本身
4. **多语言实现不对齐**：[#3354](https://redirect.github.com/a2ui-project/a2ui/issues/3354) 同一 payload 在不同 SDK 间被区别对待；[#3289](https://redirect.github.com/a2ui-project/a2ui/issues/3289)、[#3423](https://redirect.github.com/a2ui-project/a2ui/issues/3423) 版本声明与实际能力不符
5. **Agent 开发者人体工学**：[#3535](https://redirect.github.com/a2ui-project/a2ui/issues/3535) RPC 管线需手工搭建

**积极信号：**
- v1.0 bug bash 吸引外部贡献者深度审查——innkuika、josemontespg、karolkulesza 提交的报告普遍**含可复现步骤、根因分析与规范条款对照**，质量很高
- 社区对生态扩张持续有热情（Vue/Go SDK、文件上传等请求不断）
- 出现自发的小型文档/工程卫生贡献（parvezk 的 [#3419](https://redirect.github.com/a2ui-project/a2ui/pull/3419)、[#3418](https://redirect.github.com/a2ui-project/a2ui/pull/3418)），说明入门贡献通道畅通

---

## 七、待处理积压

| 项目 | 年龄 | 风险 | 建议 |
|---|---|---|---|
| [#1307](https://redirect.github.com/a2ui-project/a2ui/issues/1307) react 发布包样式失效 | **6 个月** | P1，npm 用户开箱即坏，9 评论 | **最高优先**：发布管线专项排查，公开时间表 |
| [#3485](https://redirect.github.com/a2ui-project/a2ui/issues/3485) / [#3483](https://redirect.github.com/a2ui-project/a2ui/issues/3483) / [#3432](https://redirect.github.com/a2ui-project/a2ui/issues/3432) | 7 天 | P1 正确性/安全，均无修复 PR | 列入 bug bash 收口清单前列 |
| [#3687](https://redirect.github.com/a2ui-project/a2ui/issues/3687) main 分支 Evals 失败 | 1 天 | CI 红，可能掩盖后续回归 | 立即处理 |
| [#3289](https://redirect.github.com/a2ui-project/a2ui/issues/3289) Dart SDK 下限不符 | 13 天 | 兼容性承诺失效 | 澄清下限或修复依赖 |
| [#3576](https://redirect.github.com/a2ui-project/a2ui/issues/3576) 思考过程污染 | 6 天 | 触及核心体验，仍 needs-triage | 尽快定性（提示词精简 vs 展示层过滤） |
| [#2356](https://redirect.github.com/a2ui-project/a2ui/issues/2356) Dart Agent SDK | 2 个月+ | 主线功能 | 明确里程碑 |
| PR 队列 | — | 37 个待合并，含 conformance 四部曲与路由五连发 | review 带宽是吞吐瓶颈 |

---

### 健康度小结

**活跃度：高**（50 Issue + 50 PR 更新/日，12+ 贡献者）｜**动能：强**（跨 SDK 对齐、CLI 分发、MCP 生态三条主线并行）｜**风险点**：P1 安全/正确性积压无修复 PR、CI 红、6 个月未决的发布质量问题、Issue 净增 +26 显示 bug bash 摄入快于消化。整体判断：项目处于典型的"发布前硬磨合期"，工程纪律（conformance 套件、蓝图治理、bug bash）扎实，但需在 v1.0 定稿前优先收口安全类 P1 与发布管线问题，否则将直接消耗 npm 生态用户的信任。

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目动态日报

**仓库**：[thesysdev/openui](https://github.com/thesysdev/openui) | **报告日期**：2026-10-29 | **统计窗口**：过去 24 小时

---

## 1. 今日速览

过去 24 小时 OpenUI 共有 **12 个 PR 更新（11 待审 / 1 关闭，0 合并）** 与 **2 个 Issue 更新（均为 OPEN）**，无新版本发布。最突出的事件是核心开发者 AbhinRustagi 提交的 **6 个相互配套的 Cloud Artifacts 系列 PR**（#1487–#1495），从 headless 基座、服务端客户端、云配置、React 渲染器到可观测性与文档一次到位，构成完整新功能栈；同时归属 **OpenUI 1.1 里程碑（[#1480](https://redirect.github.com/thesysdev/openui/issues/1480)）** 的流式性能优化与围栏渲染修复两个 PR 持续推进。社区侧互动偏弱：仅 2 个 Bug 类 Issue 有活动，其一为 7 月遗留旧 Issue 复活。**整体判断：功能研发推进力强（单日 8 个功能/修复类 PR 待审），但 review 吞吐与 Bug 响应是当前瓶颈——今日 main 分支零落地。**

---

## 2. 版本发布

本报告期内**无新版本发布**。需关注的是，[#1486](https://redirect.github.com/thesysdev/openui/pull/1486) 与 [#1484](https://redirect.github.com/thesysdev/openui/pull/1484) 均显式标注 "Part of #1480 (OpenUI 1.1)"，表明下一版本的主题（流式性能 + 渲染健壮性）已进入 PR 冲刺阶段，详见第 6 节路线图信号。

---

## 3. 项目进展

今日**无 PR 合并**；唯一关闭的 [#1438](https://redirect.github.com/thesysdev/openui/pull/1438)（模板/示例依赖刷新，10-15 开启）为未合并关闭，由同标题同作者的 [#1505](https://redirect.github.com/thesysdev/openui/pull/1505) 同日重提替代。进展主要体现在待审管道的充实：

**① Cloud Artifacts 全栈（6 PR，今日待审管道的半数以上）**

| PR | 层级 | 核心内容 |
|---|---|---|
| [#1487](https://redirect.github.com/thesysdev/openui/pull/1487) | react-headless | `ArtifactStorage.stream(id)` SSE 流式读取、`Last-Event-ID` 断点续传；list / pin / delete |
| [#1492](https://redirect.github.com/thesysdev/openui/pull/1492) | lang-core | 云配置新增 `script`（工具定义）、`baseResponse`（编辑基准）、`meta`（命名） |
| [#1488](https://redirect.github.com/thesysdev/openui/pull/1488) | server | `OpenUIClient`（读取 `THESYS_API_KEY`）+ `createInterpreter` 运行数据工具；createLive/Static/Slides/Report/edit |
| [#1493](https://redirect.github.com/thesysdev/openui/pull/1493) | react-ui/cloud | `LiveArtifactRenderer` / `StaticArtifactRenderer`（自 genui-sdk#218 移植至 react-headless 基座） |
| [#1494](https://redirect.github.com/thesysdev/openui/pull/1494) | observability | artifact 生命周期事件（outcome / error code / TTFC / duration / reconnects / resumed / edit）上报 Cloud |
| [#1495](https://redirect.github.com/thesysdev/openui/pull/1495) | docs | 《Artifacts in your chat app》完整指南，含 MCP 数据工具与自建存储示例 |

**② OpenUI 1.1 相关（持续更新）**
- [#1486](https://redirect.github.com/thesysdev/openui/pull/1486)（perf）：定位到流式解析器每个 chunk 对整个 buffer 重扫 fences/comments、共享引用链上语句指数级重建的根因，直指"大程序越流越慢"问题。
- [#1484](https://redirect.github.com/thesysdev/openui/pull/1484)（fix）：`stripFences` 将任意三个反引号误判为围栏开头，导致三类常见模型输出渲染为空白，附 Before/After 对照表。

**③ 自动化流水线**
- [#1505](https://redirect.github.com/thesysdev/openui/pull/1505)（thesys-pr-creator[bot]）：CLI 模板、overlay、示例依赖批量刷新，替代 #1438。
- [#1504](https://redirect.github.com/thesysdev/openui/pull/1504)（devin-ai-integration[bot]）：openui.com 演示 API 由直连 OpenRouter 改为经 Thesys 网关，并移除未使用的 OSS chat 界面。
- [#1501](https://redirect.github.com/thesysdev/openui/pull/1501)（devin-ai-integration[bot]）：`generate-api-key` 完成后自动启动 dev server（`--no-dev` 可跳过）。

**净评估**：今日 main 分支零变更，但待审管道中已积压一个端到端大型能力（Artifacts）+ 一轮性能/正确性修复，一旦 review 放行，项目能力面将一次性显著扩展。

---

## 4. 社区热点

今日社区讨论热度整体偏低（2 个 Issue 合计仅 1 条评论，无高 👍 内容）：

- **[#819](https://redirect.github.com/thesysdev/openui/issues/819) Tabs 初始挂载选中最后一项**：7 月 22 日由 Shinyaigeek 提交，昨日有新评论使其重新活跃。该 Issue 附带仅依赖已发布 npm 包的独立复现仓库，质量很高，但开启超 3 个月仅 1 条评论、无维护者认领。诉求本质：`@openuidev/react-ui` 在**非流式静态场景**下的组件基础正确性。
- **[#1503](https://redirect.github.com/thesysdev/openui/issues/1503) 无 tools 时静态 prompt 残留失效规则**：昨日新开，暂无任何回应，作者逐条比对了 System Prompts 文档与实际产物。

其余活跃度集中于维护者自身的 Artifacts PR 系列，属开发推进而非社区讨论。**当前项目活跃度由核心团队与自动化 bot（thesys-pr-creator、devin-ai-integration）主导，外部社区参与度有待提升。**

---

## 5. Bug 与稳定性

按严重程度排列（今日无崩溃、安全或回归类报告）：

1. **[中高] 大程序流式渲染随规模增长持续变慢** — 根因：每 chunk 全量重扫 buffer + 共享引用链指数级重建。**已有 fix PR：[#1486](https://redirect.github.com/thesysdev/openui/pull/1486)**，待审，属 1.1 里程碑，建议优先 review。
2. **[中] 三类常见模型输出渲染为空白** — inline 围栏、单行围栏、杂散围栏场景下 `stripFences` 误判导致内容丢失。**已有 fix PR：[#1484](https://redirect.github.com/thesysdev/openui/pull/1484)**，待审。
3. **[中] Tabs 初始挂载选中最后一项（[#819](https://redirect.github.com/thesysdev/openui/issues/819)）** — 核心组件默认行为错误，影响所有静态渲染场景，有独立复现。**尚无 fix PR**，已悬置约 99 天。
4. **[中低] 无 tools 时系统提示词残留 $variables/@​Set/Query/@​Count 规则（[#1503](https://redirect.github.com/thesysdev/openui/issues/1503)）** — 与文档声明的裁剪行为不一致，可能诱导模型生成非法结构或浪费 token。**尚无 fix PR**，昨日新报待 triage。

---

## 6. 功能请求与路线图信号

今日 Issue 均为 Bug 报告，**无显式社区功能请求**；路线图信号全部来自团队 PR：

- **OpenUI 1.1（[#1480](https://redirect.github.com/thesysdev/openui/issues/1480)）**：#1486、#1484 显式归属该里程碑且 10-28 仍在更新，可确认 1.1 的两大主题为**流式性能**与**围栏解析健壮性**，是最可能率先合入下一版本的内容。
- **Cloud Artifacts 方向**：#1487–#1495 表明"在聊天应用中创建/编辑/持久化 artifact（live/static/幻灯片/报告、pin、删除、生命周期遥测、MCP 数据工具）"是 1.1 之后的主要功能赌注，实现已全链路完成，落地节奏取决于 review。
- **Thesys 网关整合（[#1504](https://redirect.github.com/thesysdev/openui/pull/1504)）**：官方演示站统一走 `api.thesys.dev` + `THESYS_API_KEY`，并移除冗余 OSS chat 界面——"OSS 与 Cloud 收敛入口"的架构信号，自建 demo 且依赖 OpenRouter 直连的使用者需关注后续迁移。
- **CLI DX（[#1501](https://redirect.github.com/thesysdev/openui/pull/1501)）**：密钥生成后自动起服务，降低新手 onboarding 摩擦的小步优化。

---

## 7. 用户反馈摘要

- **Shinyaigeek（#819）**：提供仅用已发布包的完整复现。痛点是 Tabs 在静态响应下默认选中项错误；隐含场景是**将 `@openuidev/react-ui` 当通用组件库用于非流式页面**——对"开箱即默认正确"有硬性要求。3 个月未修复是明确的满意度扣分点。
- **Var1ck（#1503）**：逐节审计 `openuiLibrary.prompt()` 产物与文档的差异。痛点是关闭 `tools` 后主 prompt 节正确裁剪、但组件组备注仍引用已禁用特性；隐含场景是**精细控制 token 预算与提示词卫生**的进阶用户群体，"文档说了但没做到"是最刺眼的信任损耗。

综合画像：反馈者均为深度用户（建复现、验 prompt），对正确性与一致性的容忍度低于对功能广度的要求。

---

## 8. 待处理积压

- **[#819](https://redirect.github.com/thesysdev/openui/issues/819)**：开启 99 天、有复现、昨日再度活跃，但无认领、无关联 fix PR。核心组件默认行为错误长期悬置，建议优先 triage。
- **[#1503](https://redirect.github.com/thesysdev/openui/issues/1503)**：新报 0 回应，修复点明确（裁剪组件组备注中的失效规则），预计成本低，适合快速关闭。
- **11 个待审 PR**：Artifacts 六件套彼此依赖，建议按 #1487 → #1492 → #1488 → #1493 → #1494 → #1495 顺序成批 review；叠加 1.1 的 #1486/#1484，review 队列已达 8 个功能/修复 PR——今日零合并即是吞吐瓶颈的直接信号。
- **#1438 → #1505 依赖刷新循环**：bot 每 1–2 周重开一轮，机制正常但占用 review 名额，可考虑设置 auto-merge 条件减少人工介入。

---

### 健康度速记

| 维度 | 评估 | 依据 |
|---|---|---|
| 研发活跃度 | **高** | 24h 内 8 个功能/修复 PR 推进，含 6-PR 功能栈 |
| 合并吞吐 | **低** | 0 合并、11 待审 |
| 社区互动 | **低** | 2 Issue / 1 评论 / 0 👍 |
| Bug 响应 | **偏慢** | #819 悬置 99 天；#1503 待 triage |

**关注建议**：短期看 #1486/#1484 能否合入（1.1 前置条件），中期看 Artifacts 栈的 review 进度，长期看 Thesys 网关整合对 OSS 用户部署路径的影响。

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render 项目动态日报

**仓库**：[vercel-labs/json-render](https://github.com/vercel-labs/json-render)
**日期**：2026-10-29 ｜ **统计窗口**：过去 24 小时

| 指标 | 数值 |
|---|---|
| Issue 更新 | 0（新开 0 / 活跃 0 / 关闭 0） |
| PR 更新 | 3（待合并 2 / 已合并或关闭 1） |
| 新版本发布 | 0 |
| 记录到的评论 / 👍 | 0 / 0 |

---

## 一、今日速览

过去 24 小时，json-render 呈现「PR 驱动、讨论沉寂」的格局：Issue 侧零动态（新开/活跃/关闭均为 0），无新版本发布，全部活动集中于 3 条 PR（2 开 1 关）。开发焦点高度收敛于同一主题——**压缩 LLM 生成 UI 的 token 开销**，即贡献者 lahfir 提交的 Compact JSON 生成（[#438](https://redirect.github.com/vercel-labs/json-render/pull/438)）与 positional JSON 编码（[#439](https://redirect.github.com/vercel-labs/json-render/pull/439)）两条链式 PR。活跃度评估为**中等偏低**：代码贡献流仍在（外部贡献者持续投入实质性功能开发），但评论、点赞等互动信号缺失，社区讨论面狭窄。项目无负面稳定性信号。

## 二、项目进展

**今日关闭：[#441](https://redirect.github.com/vercel-labs/json-render/pull/441) `chore(docs): add Technical Writer agent skill`**
- 作者 bensabic，10-28 提交，今日（10-29）关闭。
- 内容：将 [vercel/chat](https://github.com/vercel/chat/tree/main/.agents/skills/technical-writer) 中已运行两个月的 `technical-writer` agent skill 移植至本仓库 `.agents/skills/`，用于指导文档、README 与 PR 描述的撰写，仅调整了 skill 描述文案。
- 状态判读：PR 标记为 **CLOSED 而非 MERGED**，倾向于「未合入直接关闭」；关闭原因未见公开说明。若确未合入，则今日主干分支无实际代码增量。

**评审中：Compact JSON 生成系列（决定近期进展的两条 PR）**
- [#438](https://redirect.github.com/vercel-labs/json-render/pull/438) `feat: add compact JSON generation and playground mode`：引入目录约束（catalog-constrained）的嵌套 JSON 生成与增量编译，并新增带响应式预览的 Compact playground 模式；针对的现有痛点是「UI 生成要求模型产出元素 ID 与引用」。
- [#439](https://redirect.github.com/vercel-labs/json-render/pull/439) `perf: reduce Compact output tokens with positional JSON`：基于 #438，用统一的 positional JSON 格式替换 native 与 strict 两种变体，在保留流式输出与校验能力的前提下，消除重复字段名与空字段造成的 token 浪费。
- 两者为同一作者的链式贡献（#439 builds on #438），目前均无评论记录，等待维护者评审。

**进展评估**：今日无确认合入主干的变更，功能推进停留在评审管道中；但若 #438/#439 落地，将同时覆盖「输出格式压缩、token 成本优化、调试体验（playground）」三个维度，属于一次中等规模的能力升级。

## 三、社区热点

今日互动热度**接近零**：0 条 Issue、PR 评论数未记录、全部条目 👍 为 0，无「讨论最活跃」条目可列。若以变更影响力衡量，焦点集中于 [#438](https://redirect.github.com/vercel-labs/json-render/pull/438) / [#439](https://redirect.github.com/vercel-labs/json-render/pull/439) 组合，其背后诉求可归纳为三类：

1. **降本**：LLM 生成 UI 时，重复字段名与空字段造成 token 浪费；
2. **效率**：现有生成流程要求模型维护元素 ID 与引用，输出冗长；
3. **体验**：需要可即时验证的 playground（含响应式预览），且不能牺牲流式渲染与校验能力。

## 四、Bug 与稳定性

过去 24 小时**无任何 Bug、崩溃或回归报告**（Issue 新开为 0），无稳定性相关负面信号，亦无需跟踪的 fix PR。需要说明：Issue 流量为零更多反映社区互动低迷，不宜据此直接推断「零缺陷」。

## 五、功能请求与路线图信号

今日无 Issue 形式的新功能请求，路线图信号主要来自开放 PR：

- **token 效率是明确的下一步主题**：[#438](https://redirect.github.com/vercel-labs/json-render/pull/438)（Compact 生成 + playground）与 [#439](https://redirect.github.com/vercel-labs/json-render/pull/439)（positional JSON）若通过评审，大概率捆绑构成下一个版本的核心内容。
- **潜在破坏性变更预警**：#439 明确提出「以单一 positional JSON 格式替换 native 与 strict 变体」。若这两种变体属于现有对外 API，合并即构成破坏性变更，需提前规划发布说明与迁移指南；若仅是 #438 新引入的内部形态，则影响可控。建议维护者在评审时明确其影响面。
- **工程效能方向**：[#441](https://redirect.github.com/vercel-labs/json-render/pull/441)（agent skill）虽被关闭，但显示仓库在探索 AI 辅助文档工作流，该方向后续可能以其他形式回归。

## 六、用户反馈摘要

今日**无可供提炼的 Issue 评论**（0 条 Issue，PR 评论数据缺失）。唯一可参考的间接信号来自 PR 描述中贡献者自述的动机：

- **痛点**：模型生成 UI 必须输出元素 ID 与引用（#438）；Compact 生成中重复字段名、空字段消耗额外 token（#439）。
- **期望能力**：目录约束的嵌套 JSON 生成、增量编译、带响应式预览的 playground、流式与校验能力不回退。

需强调：以上为贡献者/开发者视角，非终端用户反馈，代表性有限。

## 七、待处理积压

- [#438](https://redirect.github.com/vercel-labs/json-render/pull/438)：10-27 提交，挂起约 2 天、零评论记录，等待维护者评审——**当前最高优先级事项**。
- [#439](https://redirect.github.com/vercel-labs/json-render/pull/439)：10-27 提交，依赖 #438 且在方案上替换其部分设计（positional JSON 取代 native/strict 变体），建议与 #438 **合并评审**，避免 #438 先行合入后再返工。
- [#441](https://redirect.github.com/vercel-labs/json-render/pull/441)：今日关闭且（据状态标记）大概率未合入，`technical-writer` skill 的去留需要明确结论（拒绝、另辟途径引入，或重提 PR）。
- 本窗口内无 Issue 数据，无法识别长期未响应的 Issue 积压；如需完整积压视图，建议回看更长周期的 Issue 列表。

---

**健康度小结**：json-render 当前处于「低噪、专注」的推进期——外部贡献者围绕 token 效率持续输出实质功能，无稳定性负面信号；短板在于**评审响应与社区互动**（两条核心 PR 无任何评论记录，Issue 侧零流量）。建议维护者尽快评审 #438/#439，并就 #441 的关闭给出公开说明，以维持贡献者积极性。

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报
**日期：2026-10-29 | 数据来源：[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)（过去 24 小时）**

---

## 1. 今日速览

CopilotKit 今日保持高活跃度：24 小时内 PR 更新 **57 条**（待合并 37 / 已合并关闭 20），Issues 更新 **11 条**（新开及活跃 7 / 关闭 4），并发布 **2 个新版本**。**安全是今日主线**——[channels/v0.12.0](https://github.com/CopilotKit/CopilotKit/releases/tag/channels/v0.12.0) 专门修复 Teams 等 Channels 集成的安全问题，主仓 [v1.83.0](https://github.com/CopilotKit/CopilotKit/releases/tag/v1.83.0) 以 "Merge commit from fork" 方式合入（GitHub 安全披露修复的典型流程），社区同日还报告了原型污染（[#8071](https://redirect.github.com/CopilotKit/CopilotKit/issues/8071)）与参数校验绕过（[#8070](https://redirect.github.com/CopilotKit/CopilotKit/issues/8070)）两个安全级 Bug。多个 Bug 实现"当日报告 → 当日 fix PR"闭环（#8070→#8072、#8071→#8073、#8045→#8048），响应速度优秀；一个搁置 8 个多月的老 Issue（#3221）今日关闭，积压清理在推进。整体项目健康度：**良好**。

---

## 2. 版本发布

### [v1.83.0](https://github.com/CopilotKit/CopilotKit/releases/tag/v1.83.0)
- 更新日志仅一条 "**Merge commit from fork (4693af4)**"——这是 GitHub Security Advisory 私有修复分支的典型合并方式。结合同日 channels 安全版本发布，本次**大概率包含未公开披露的安全修复**（此为基于发布形态的推断，官方未说明细节）。
- 无破坏性变更说明，建议常规跟进升级。

### [channels/v0.12.0](https://github.com/CopilotKit/CopilotKit/releases/tag/channels/v0.12.0) ⚠️ 安全版本
- 修复 **Teams 及其他 Channels 集成**的安全问题。
- **迁移注意**：官方建议将应用中所有 `@copilotkit/channels*` 包升级至 `0.12.0`，包括 `@copilotkit/channels` 和 `@copilotkit/channels-teams`；**Telegram 集成用户**需查阅完整 Release Notes（摘要被截断）确认额外操作。纯版本升级、无 API 变更，关键是确保相关包**同步全部升级**。

---

## 3. 项目进展

今日合并/关闭 20 条 PR（数据未细分合并与拒绝，以下为已关闭条目及对应进展）：

**A2UI 渲染管线持续演进**
- [#7976](https://redirect.github.com/CopilotKit/CopilotKit/pull/7976)（已关闭）：playground 新增 **A2UI Express** 输出模式，与 JSON 模式共用 A2UI v1.0 渲染器、绑定、动作与持久化。
- [#7973](https://redirect.github.com/CopilotKit/CopilotKit/pull/7973)（已关闭）：聊天气泡保留用户请求视图的徽章，提升多视图切换的可追溯性。
- [#8062](https://redirect.github.com/CopilotKit/CopilotKit/pull/8062)（进行中）：将 A2UI update 操作路由到既有 `createSurface` 所有者，避免每次生成活动渲染全新 surface。

**运行时正确性修复**
- [#7998](https://redirect.github.com/CopilotKit/CopilotKit/pull/7998)（已关闭）：中断恢复时复用前端工具结果，消除重复追加 tool result 的问题。
- [#8065](https://redirect.github.com/CopilotKit/CopilotKit/pull/8065)、[#8043](https://redirect.github.com/CopilotKit/CopilotKit/pull/8043)（进行中）：重连场景恢复后端重发的未决工具调用；以 batch generation 比较防止过期 resume 清掉新审批状态。

**发布工程与开发者体验**
- [#8047](https://redirect.github.com/CopilotKit/CopilotKit/pull/8047)（已关闭）：修复 release runner 在 React hydration 完成前输入被清空的问题，绑定 #7709 的 runner 修复。
- [#8067](https://redirect.github.com/CopilotKit/CopilotKit/pull/8067)、[#8068](https://redirect.github.com/CopilotKit/CopilotKit/pull/8068)：修正 issue 模板与贡献指南中的错误链接（`docs.copilot.ai`→`docs.copilotkit.ai`；issue 入口从 AG-UI tracker 指回本仓）。
- [#8064](https://redirect.github.com/CopilotKit/CopilotKit/pull/8064)：用 Next standalone 输出缩减 docs 运行时镜像体积。

**配套关闭的 4 个 Issue 印证进展落地**：[#3221](https://redirect.github.com/CopilotKit/CopilotKit/issues/3221)（云部署 API key 鉴权，8 个多月老 Issue）、[#7439](https://redirect.github.com/CopilotKit/CopilotKit/issues/7439)（Python gateway 静默吞错）、[#7997](https://redirect.github.com/CopilotKit/CopilotKit/issues/7997)（MCP 预览 iframe 同源）、[#7158](https://redirect.github.com/CopilotKit/CopilotKit/issues/7158)（slot 拒绝普通 FC）。

---

## 4. 社区热点

| Issue | 热度 | 核心诉求 |
|---|---|---|
| [#3221](https://redirect.github.com/CopilotKit/CopilotKit/issues/3221)（已关闭） | 8 评论 | 云部署后 API key 立即报"无权访问关联组织"，此前正常。自 2026-02-16 持续讨论至今，反映**云版 key 与组织绑定关系的配置与诊断体验**让用户困扰，今日终于关闭 |
| [#6910](https://redirect.github.com/CopilotKit/CopilotKit/issues/6910)（open） | 6 评论 | MCP Apps sandbox 代理经 `srcdoc` 加载导致**与宿主同源，违反 SEP-1865 规范**（Host 与 Sandbox 必须不同源）。涉及沙箱架构级调整，讨论已持续近 2 个月 |
| [#7951](https://redirect.github.com/CopilotKit/CopilotKit/issues/7951)（open） | 3 评论 | React Native/Expo 下包在 **import 时即安装 fetch shim**，替换掉本已支持流式的原生 fetch；无需 runtime 即可复现，痛点是 import 副作用无可逃逸 |
| [#7891](https://redirect.github.com/CopilotKit/CopilotKit/issues/7891)（open） | 3 评论 | `ɵrepairToolCallPairs` 对复用 call id 配对错误、按 id 去重、撤销用户过滤编辑——来自 #7877 review 确认的 main 分支既有缺陷 |
| [#8023](https://redirect.github.com/CopilotKit/CopilotKit/issues/8023)（open） | 2 评论 | 流式中途按 Stop 后前端工具调用无应答，**下一轮对话直接失败** |

社区诉求集中指向：云服务鉴权可诊断性、移动端（Expo）兼容性、v2 聊天在高频/自动化输入下的健壮性。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 问题 | Fix 状态 |
|---|---|---|---|
| 🔴 高（安全） | [#8071](https://redirect.github.com/CopilotKit/CopilotKit/issues/8071) | STATE_DELTA normalizer 对 `__proto__` 路径段无防护，`add` 操作会静默替换被跟踪 state 的原型（**原型污染**，且 delta 来自模型生成内容） | ✅ [#8073](https://redirect.github.com/CopilotKit/CopilotKit/pull/8073) 已提交 |
| 🔴 高（安全） | [#8070](https://redirect.github.com/CopilotKit/CopilotKit/issues/8070) | BuiltInAgent 对 Valibot/ArkType 等**非 Zod Standard Schema 工具跳过参数校验**，非法模型生成参数直达 handler | ✅ [#8072](https://redirect.github.com/CopilotKit/CopilotKit/pull/8072) 已提交 |
| 🟠 中高 | [#8023](https://redirect.github.com/CopilotKit/CopilotKit/issues/8023) | Stop 与工具调用完成的竞态导致调用悬空、下一轮失败 | 🔶 [#8010](https://redirect.github.com/CopilotKit/CopilotKit/pull/8010) 覆盖相邻场景（工具已注销），本 issue 的 Stop 时序竞态未明确覆盖 |
| 🟡 中 | [#8045](https://redirect.github.com/CopilotKit/CopilotKit/issues/8045) | 快速输入突发（>50 events 未 yield 调度器）触发 "Maximum update depth exceeded" 并丢字，E2E 自动化必现 | ✅ [#8048](https://redirect.github.com/CopilotKit/CopilotKit/pull/8048) 已提交 |
| 🟡 中 | [#7951](https://redirect.github.com/CopilotKit/CopilotKit/issues/7951) | Expo 下 fetch shim 破坏原生流式 | ❌ 暂无 fix PR |
| ⚪ 中低 | [#7891](https://redirect.github.com/CopilotKit/CopilotKit/issues/7891) | messageFilter 修复逻辑配对/dedup 缺陷，撤销用户编辑 | ❌ 暂无 fix PR（已知遗留） |

**观察**：#8070、#8071 由同一贡献者 xiong-wei1 同日报告并附 fix PR，与 channels 安全版本发布同日出现，疑似协调披露，建议维护者优先 review 两个 fix PR 并尽快随补丁版本发布。

---

## 6. 功能请求与路线图信号

- **沙箱安全架构（SEP-1865 合规）**：[#6910](https://redirect.github.com/CopilotKit/CopilotKit/issues/6910) 要求 sandbox 与宿主不同源。结合今日关闭的 #7997（iframe 同源问题）与 channels 安全版本，**"集成/沙箱安全加固"是明确的当前工作流**，#6910 被纳入近期版本的概率较高。
- **产品叙事升级**：[#8040](https://redirect.github.com/CopilotKit/CopilotKit/pull/8040) 围绕完整 agentic 产品栈（开源 SDK、AG-UI、CopilotKit Intelligence、AI coworker 应用）重写 README——门面级变更，反映项目定位从组件库向全栈平台演进。
- **文档智能化**：[#8069](https://redirect.github.com/CopilotKit/CopilotKit/pull/8069) 新增 **Ask Kite**（按项目栈描述推荐文档指南的 `/kite` 页面 + onboarding guide）。
- **生态集成扩展**：[#7942](https://redirect.github.com/CopilotKit/CopilotKit/pull/7942) 添加基于 `@ag-ui/omnara` 适配器的 Omnara starter。
- **下一版本预期**：#8060（附件能力校验）、#8062、#8065、#8043、#8048 等一批 v2 聊天与 A2UI 边缘场景修复正在排队，叠加两个安全 fix，**下个补丁版本大概率聚焦"安全 + 稳定性收敛"**。

---

## 7. 用户反馈摘要

- **云版鉴权困惑**（#3221，8 评论）：部署上云后 API key 报组织权限错误且无从排查，用户需要更透明的 key-组织绑定关系与诊断路径。
- **移动端/Expo 痛点**（#7951）：import 副作用破坏原生流式能力，React Native 用户缺乏禁用 shim 的逃生口。
- **自动化测试受阻**（#8045）：E2E 逐字符输入触发 React 更新深度超限并丢字，直接影响 CI 可靠性——这也是官方自身 release runner 遇到过的问题（#8047）。
- **可观测性缺失**（#7439，已关闭）：Python gateway 的 Telemetry 实例构造后从不调用、连接错误被静默吞掉，自托管用户排障成本高。
- **深定制开发者摩擦**（#7891、#7158）：使用 messageFilter、自定义 slot 的高级用户持续遇到边界缺陷，核心抽象在灵活性与可预测性间仍需打磨。
- **正面信号**：BenTaylorDev、xiong-wei1、naicud 等多位 issue 报告者同时提交高质量 fix PR，社区参与正从"报障"深化为"报障 + 修复"。

---

## 8. 待处理积压

- **[#6910](https://redirect.github.com/CopilotKit/CopilotKit/issues/6910)**（SEP-1865 沙箱不同源）：已开约 8 周、6 条评论，属安全规范合规项，建议维护者给出排期或里程碑标注。
- **[#7891](https://redirect.github.com/CopilotKit/CopilotKit/issues/7891)**（messageFilter 配对缺陷）：10-20 提出，确认为 main 分支既有问题且无人认领。
- **[#7951](https://redirect.github.com/CopilotKit/CopilotKit/issues/7951)**（Expo fetch shim）：开放 6 天无 fix PR，影响 React Native 用户群。
- **PR 积压（37 条待合并）**：[#7942](https://redirect.github.com/CopilotKit/CopilotKit/pull/7942)（10-22 起）、[#8010](https://redirect.github.com/CopilotKit/CopilotKit/pull/8010)（10-26 起）、[#8040](https://redirect.github.com/CopilotKit/CopilotKit/pull/8040)（README 重写）等等待 review 时间较长；**安全相关 fix PR [#8072](https://redirect.github.com/CopilotKit/CopilotKit/pull/8072) / [#8073](https://redirect.github.com/CopilotKit/CopilotKit/pull/8073) 建议优先 review**，以便随安全补丁尽快发布。

---

*本报告基于 24 小时窗口的 GitHub 公开数据生成；"合并/关闭"PR 未逐条区分最终状态，以仓库实际记录为准。*

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*