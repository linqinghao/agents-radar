# 生成式 UI 生态日报 2026-11-16

> Issues: 9 | PRs: 42 | 覆盖项目: 4 个 | 生成时间: 2026-11-16 05:30 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告
**数据窗口：2026-11-15 至 2026-11-16 ｜ 覆盖项目：a2ui、OpenUI、json-render、CopilotKit**

---

## 一、生态全景

生成式 UI 正从"能否渲染"的能力验证期，进入**协议标准化、跨平台渲染、流式体验**三线并进的工程化深耕期。生态分层格局初步显现：a2ui 与 json-render 占据协议/规范层（前者以多语言合规与规范治理为纲，后者以渲染器跨平台扩张为矛），CopilotKit 与 OpenUI 走应用框架路线（聊天核心体验、agent 工具治理）。原生平台成为当日最激烈的战场——json-render 单日连发两个版本落地 Swift/SwiftUI，同日收到 Android Compose 全套社区方案；a2ui 生态新增 Cloudflare 边缘渲染器。底层依赖出现代际切换信号：zod 4 迁移压力在 a2ui 与 OpenUI 同日显现，而 CopilotKit 也在处理 AI SDK v6 兼容。跨项目互操作亦有萌芽（CopilotKit 为 A2UI 构建跨框架无障碍测试与统一示例数据），"协议—框架"的分工正在成形。

---

## 二、各项目活跃度对比

| 指标 | CopilotKit | a2ui | json-render | OpenUI |
|---|---|---|---|---|
| Issues（新开/活跃） | 3 | 3 | 0 | 2 |
| Issues（关闭） | 1 | 0 | 0 | 0 |
| PRs（待合并） | 13 | 10 | 5 | 5 |
| PRs（合并/关闭） | 1 | 2 | 5 | 1 |
| **总活动量** | **18** | **15** | **10** | **8** |
| Release | 0 | 0 | **2**（v0.23.0 / v0.23.1） | 0 |
| 评论互动 | ✅ 有（热帖 7/5/3 条） | ❌ 全部 0 条 | ❌ Issue 通道零动态 | ❌ 全部 0 条 |
| 当日亮点 | 学生计划运转 + 当天 Bug→fix | Bug 响应率 100%（3/3 同日配对） | 双版本发布 + Swift 落地 | 同日"报告+修复"闭环 |

**关键读数：**

- **总量与吞吐背离**：CopilotKit 活动量最高但合并率仅约 7%（1/14），13 个待评审 PR 形成积压；json-render 活动量居中却完成 5 项终态（50%）并连发 2 个版本，是四者中唯一处于"交付态"的项目。
- **a2ui** 的 Issue 全部为工程质量类（类型检查、代码生成、测试环境），是典型的"v1.0 前加固"形态；**OpenUI** 量最小但闭环健康，风险在零回应的数据丢失 Issue（#1646）。
- **共性**：三个项目当日均出现同日 Issue→fix PR 闭环（a2ui ×3、CopilotKit #8409→#8410、OpenUI #1642→#1643），响应文化普遍积极；除 json-render 外均无发版，变更在为下一版本蓄水。

---

## 三、共同关注的功能方向

| 共同方向 | 涉及项目 | 具体诉求与证据 |
|---|---|---|
| **zod 4 依赖代际切换** | a2ui、OpenUI | a2ui #4229（TS 包整体迁移 zod 4，已关闭待重启）；OpenUI #1642/#1643（peer range 收窄至 `^4.0.17`，避免旧版下 `cloneSchema` 运行时崩溃） |
| **流式中间态补全** | OpenUI、json-render、CopilotKit | OpenUI #1644 为 artifact 渲染器补 Pending 插槽；json-render #483 解决流式局部卡片失败后无法回收；CopilotKit #7494 修复长线程虚拟化滚动上跳（100% 复现） |
| **多平台/跨框架一致性** | a2ui、json-render、CopilotKit | a2ui #4184 oneOf/anyOf/allOf 在 TS/Dart/Python 三端对齐；json-render Swift 落地 + Android 方案进场；CopilotKit #8406 React/Vue/Angular 无障碍统一探针 |
| **上游 AI 协议/SDK 适配** | CopilotKit、OpenUI | CopilotKit #7881 修复 AI SDK v6（`ai` 6.0.308+）下系统提示词传递不兼容；OpenUI #594 补齐 AG-UI `ReasoningMessage` 渲染（悬置 5.5 个月后复活） |
| **质量与治理基建** | a2ui、CopilotKit、json-render | a2ui conformance 版本语义（#4242）+ strict mypy 盲区修复；CopilotKit Angular 视觉回归诉求（#6641）+ 遥测纠错（#8405）；json-render 修复均附回归测试 |
| **生态可见性运营** | OpenUI、a2ui | OpenUI 首页社区 showcase（#1640）+ adopters 扩充（#1641）；a2ui 第三方渲染器寻求官方目录收录（#4243） |

**补充洞察**：zod 4 的同日双现并非巧合——生成式 UI 的 TS 实现普遍依赖 schema 库校验组件/工具参数，zod 3→4 的切换正在整个生态传导，"能安装、跑不起来"（peer 声明宽松但运行时崩溃）是本轮切换的典型故障形态。

---

## 四、差异化定位分析

| 维度 | a2ui | json-render | OpenUI | CopilotKit |
|---|---|---|---|---|
| **定位** | 中立 UI 规范（协议层） | 轻量 JSON UI 协议（Vercel Labs） | 面向 AI Agent 的生成式 UI 框架 | 生产级全栈 AI 副驾框架 |
| **技术路线** | 规范文本 + 多语言 core（TS/Dart/Python）+ conformance 合规框架 + 第三方渲染器目录 | 平台无关 core（spec/流式/state/校验）+ 平台渲染器 + 原生组件目录；对 LLM 不可信输入做资源边界 | lang-core（schema 扩展）+ react-ui 渲染器 + dashboard 库，对齐 AG-UI 协议 | React 聊天组件 + runtime + MCP/CoAgents/遥测/Inspector 基础设施 |
| **目标用户** | 渲染器/框架实现者、跨端一致性需求团队 | 构建聊天产品的跨平台团队 | Agent 应用开发者（仪表盘/数据面板场景） | 企业应用团队（以聊天为中心的产品） |
| **当日重心** | v1.0 前工程加固与规范收紧 | 平台扩张（Swift 发版、Android 进场） | 依赖正确性 + 渲染体验 + 生态营销 | v2 聊天打磨 + MCP 工具治理 + 贡献者管道 |
| **破坏性变更风险** | 中（v1.0 schema、zod 4 待落地） | 低（纯新增能力为主） | 中（peer 收窄影响旧版消费者） | 低（增量向后兼容） |

**三条定位观察：**

1. **协议层双雄路线迥异**：a2ui 走"重治理"路线（规范 CODEOWNERS、conformance、多语言 core），形态接近标准组织；json-render 走"重交付"路线（Swift 从 PR 到发版仅 4 天、渲染器矩阵快速铺开），形态接近高速迭代的实验室项目。前者稳定性预期强，后者功能获得感强。
2. **框架层覆盖度不同**：CopilotKit 是全栈方案（UI + runtime + 企业级可观测性），OpenUI 战线更窄但与 AG-UI 协议对齐更紧，且以 dashboard 场景为差异化切口。
3. **分层互操作已现实例**：CopilotKit 当日同时在为 A2UI 构建跨框架测试（#8406）与统一示例（#8411）——协议层与应用层开始形成供需关系，**两层选型决策可以分离**。

---

## 五、社区热度与成熟度

| 项目 | 阶段判断 | 热度/活跃证据 | 主要风险 |
|---|---|---|---|
| **CopilotKit** | 规模化运营期 | 唯一有真实评论互动（7/5/3 条）；贡献者最多元（学生计划 + 社区成员 + bot）；活动量第一 | 评审吞吐：13 个 PR 积压；#6641 悬置约 3 个月 |
| **json-render** | 快速迭代冲刺期 | 单日 2 版本；终态率 50%；外部贡献者单日 3 个重量级 PR | 版本尚浅（v0.23）；4/5 开放 PR 为当日新增，评审压力集中；#465 开放 9 天 |
| **a2ui** | 规范收敛期（v1.0 前夜） | Bug 响应率 100%；4 位外部贡献者；生态渲染器主动求收录 | **bus factor：单一维护者占 60% 活动**；3 个 needs-triage；P2 修复时延 13 天 |
| **OpenUI** | 稳态运营期 | 同日"报告+修复"闭环；adopters/showcase 持续经营 | 动能偏弱（活动量最低）；demo 站数据丢失零回应；#594 悬置 5.5 个月 |

**判断要点：**

- **讨论热度**：CopilotKit 是唯一形成用户讨论社区的项目；其余三者评论数均为 0，贡献以代码为中心，讨论氛围是普遍短板。
- **成熟度光谱因维度而异**：生产就绪度与社区运营 CopilotKit 领先；协议治理成熟度 a2ui 领先（处于 1.0 前夜的规范冻结铺垫期）；创新速度与交付节奏 json-render 领先；OpenUI 稳但缓。
- **共性瓶颈**："评审吞吐跟不上输入"是四个项目共同的结构性问题，差别仅在规模——从 a2ui 的 3 个 needs-triage 到 CopilotKit 的 13 个 PR 积压。

---

## 六、值得关注的趋势信号

**1. zod 4 是 TS schema 层的分水岭**（a2ui #4229、OpenUI #1642/#1643）
两个项目同日出现 zod 4 相关活动，迁移压力已从单点演变为生态现象。*参考价值：审计依赖树中的 zod 版本与 peer range；库维护者应主动收窄 peer 声明，避免"能安装、跑不起来"的隐性故障；预计未来半年更多生成式 UI 库跟进破坏性升级。*

**2. 生成式 UI 正在"出浏览器"**（json-render #470/#481/#480/#482、a2ui #4243）
SwiftUI 渲染器落地发版、Compose 全套方案进场、Liquid Glass / Material 3 Expressive 原生设计语言、Cloudflare workerd 边缘渲染——渲染目标正从 DOM 扩展到原生平台与边缘运行时。*参考价值：选型时应将"渲染器矩阵"（Web/iOS/Android/边缘）作为一级评估项；仅有 Web 路线的方案对跨端团队的吸引力将快速衰减。*

**3. "LLM 输出即不可信输入"成为新的安全范式**（json-render v0.23.1）
针对 spec 重复 child id 导致内存无界增长、validator 输出无上限等问题当日发版加固，并明确定位为 LLM 生成场景的安全修复。*参考价值：任何渲染 LLM 生成结构的系统都应施加资源边界（节点数、输出量、名称长度）——这是生成式 UI 特有的 DoS 攻击面，传统前端安全清单不覆盖。*

**4. 流式中间态成为 UX 标配与竞争焦点**（OpenUI #1644、json-render #483、CopilotKit #7494、OpenUI #594）
Pending 插槽、半成品卡片回收、虚拟化滚动稳定、reasoning 内容透传——四个项目同日推进"工具调用发起 → 内容就绪"空窗期的处理。*参考价值：评估框架时，把流式状态机（pending、部分内容、失败恢复、思考过程展示）作为核心考察项，而非仅看静态渲染能力。*

**5. 规范治理信号预示 1.0 稳定窗口**（a2ui CODEOWNERS #4234、conformance 版本化 #4242、v0.8 清退 #4142）
规范目录强制评审、合规测试版本语义化、遗留版本清理，是典型的发布前铺垫动作。*参考价值：观望稳定性的团队可据此预判采用时机；同时应预期 v1.0 前后的破坏性变更窗口（zod 4、v0.8 API 移除），预留迁移计划。*

**6. 贡献者运营进入工程化阶段**（CopilotKit 学生计划、OpenUI bot 提交、三家同日闭环）
"reserved for students" 标签、devin bot 自动化 adopters 收录、同日 Issue→fix 循环，显示头部项目已把社区运营当作可管理的工程系统。*参考价值：长期选型时，贡献者管道的多元度比单日活动量更可靠——a2ui 单一维护者占 60% 活动的 bus factor 风险，值得纳入持续性评估。*

---

## 结论

今日生态的最佳注脚是**"分层与出圈"**：协议层（a2ui、json-render）与应用框架层（CopilotKit、OpenUI）各自加速并开始互操作，渲染目标从浏览器扩展到原生平台与边缘运行时。对开发者而言，当下选型建议将四项作为硬性检查项：**zod 4 兼容性、流式中间态设计、渲染器矩阵覆盖、LLM 输入安全边界**；对决策者而言，需在"协议治理成熟度（a2ui）— 交付速度（json-render）— 生产完备性（CopilotKit）— 场景聚焦（OpenUI）"之间按自身阶段权衡，并将目标项目的评审吞吐与维护者集中度纳入可持续性尽调。

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目日报 · 2026-11-16

---

## 1. 今日速览

过去 24 小时项目共产生 15 项仓库活动：3 条 Issue（全部为新开/活跃，0 关闭）与 12 条 PR 更新（10 个待合并、2 个进入已合并/关闭状态），无新版本发布。核心维护者 gspencergoog 贡献了其中 9 项（约 60%），并以"开 Issue + 同日提交修复 PR"的方式闭环了 Python 类型检查与 Pydantic 代码生成两大问题，维护响应效率突出。今日工作主线为工程加固：strict mypy 覆盖、代码生成碰撞修复、Angular 测试环境注入器 Bug（P2）修复，同时 v0.8 遗留清理与规范治理持续推进。社区侧有 4 位外部贡献者活跃（casualuser、vojtech、retz8、pomahtuk），生态新增面向 Cloudflare Vinext 的渲染器。整体健康度评估：活跃度中上、Bug 修复响应率 100%，但活动高度集中于单一维护者，且有 3 个 `needs-triage` PR 尚待分诊。

---

## 2. 项目进展

过去 24 小时 2 个 PR 进入终态（对应"已合并/关闭: 2"）：

- **[#4142](https://redirect.github.com/a2ui-project/a2ui/pull/4142) chore: remove React shell and explorer v0.8 references**（jacobsimionato）— 清除 `samples/client/react/shell` 与 `a2ui_explorer` 中对遗留 `@a2ui/react/v0_8`、`@a2ui/react/styles` 导出的引用（关联 [#4109](https://redirect.github.com/a2ui-project/a2ui/issues/4109)），延续 v0.8 退场清理主线。
- **[#4229](https://redirect.github.com/a2ui-project/a2ui/pull/4229) feat(web_core)!: migrate the TypeScript packages to zod 4**（pomahtuk）— 将 TS 包从 zod 3.25 + `zod-to-json-schema` 迁移至 zod 4（`^4.6.7`），改用 zod 原生 JSON Schema 能力，修复 [#3812](https://redirect.github.com/a2ui-project/a2ui/issues/3812)。**破坏性变更**：自建 catalog 的组件/函数 schema 必须改用 zod 4。该 PR 已关闭，其迁移方向后续是否以其他形式落地值得关注。

**进展评估**：两个终态 PR 分别覆盖"遗留清理"与"依赖现代化"两条线；叠加待合并队列中的 [#4184](https://redirect.github.com/a2ui-project/a2ui/pull/4184)（oneOf/anyOf/allOf 跨三语言支持）与当日三项修复 PR，项目在 **v1.0 schema 兼容性**与**类型安全**两个维度均有实质推进。

---

## 3. 社区热点

今日所有条目评论数与 👍 均为 0，无讨论型热点，活跃度主要体现为代码提交。按内容影响力排序：

- **[#4184](https://redirect.github.com/a2ui-project/a2ui/pull/4184) Express 的 oneOf/anyOf/allOf/local $defs 支持（TS/Dart/Python 三端）** — 修复 prompt 生成与编译假设 catalog 属性为扁平 JSON Schema 的局限；真实 catalog 与 v1.0 组件 schema 均依赖这些组合形状，属 v1.0 兼容关键项，已持续活跃 4 天。
- **[#4243](https://github.com/a2ui-project/a2ui-pull/a2ui/pull/4243) 生态文档新增 [@​webomage/a2ui-vinext](https://github.com/webomage/a2ui-vinext) 渲染器**（casualuser）— 覆盖 v0.8/v0.9.x/v1.0（React 19 RSC / Cloudflare Vinext `workerd`）并附线上 demo。诉求明确：第三方渲染器希望进入官方生态目录获得曝光，反映**边缘/serverless 渲染场景的真实需求**。
- **[#4242](https://redirect.github.com/a2ui-project/a2ui/pull/4242) conformance 用例版本歧义**（vojtech）— 21 个未标 `protocolVersion` 的用例期望 v0.9 行为：按 v1.0 解读必失败、按 v0.9 解读可通过，而 `conformance_schema.json` 与 README 均未定义默认值。诉求：合规测试需要确定性的版本语义。
- **[#4229](https://redirect.github.com/a2ui-project/a2ui/pull/4229) zod 4 迁移（已关闭）** — TS 生态用户的依赖升级压力集中体现。

---

## 4. Bug 与稳定性

按严重程度排列（4 项全部有修复在途，覆盖率 100%）：

| 严重度 | 问题 | 描述 | 修复状态 |
|---|---|---|---|
| **P2**（官方标注） | [#3949](https://redirect.github.com/a2ui-project/a2ui/issues/3949) Angular NG0205 | `initializeAngularReactivity` 缓存首个 `EnvironmentInjector`，`TestBed` 销毁后 `@a2ui/web_core` 仍绑定已销毁注入器，多 spec 测试报 "Injector has already been destroyed" | ✅ 当日修复 PR [#4244](https://redirect.github.com/a2ui-project/a2ui/pull/4244) |
| **高**（阻塞类型检查/构建） | [#4245](https://redirect.github.com/a2ui-project/a2ui/issues/4245) Pydantic 代码生成碰撞 | `$defs.theme` 与 `styles.Theme` 产生重复 `Theme` 别名（mypy 冲突）；`v0_8`/`v0_9` 的 `_basic_catalog_id` 缺 `ver_dir`，跨版本目录标识不同步 | ✅ 当日修复 PR [#4246](https://redirect.github.com/a2ui-project/a2ui/pull/4246) |
| **中**（19 个潜在类型错误） | [#4247](https://redirect.github.com/a2ui-project/a2ui/issues/4247) strict mypy 盲区 | `pyproject.toml` 过期排除项（`experimental/`、已移除的 `docs/public/hooks.py`）掩盖 6 个 atom/elemental 文件中的 strict 错误 | ✅ 当日修复 PR [#4248](https://redirect.github.com/a2ui-project/a2ui/pull/4248) |
| **中** | [#4241](https://redirect.github.com/a2ui-project/a2ui/pull/4241) web_core 表达式求值 | 字段数据未到达时（如 `required` 检查先于 `updateDataModel`），每次求值抛 `EXPRESSION_ERROR` 而非普通失败，与 Dart `a2ui_core` 行为不一致 | PR 本身即修复，等待分诊 |

**稳定性小结**：今日无崩溃/回归类报告；需关注的时延信号——P2 的 #3949 自 11-03 提出，**存活 13 天**后才于今日获得修复 PR。

---

## 5. 功能请求与路线图信号

- **Schema 组合形状支持（[#4184](https://redirect.github.com/a2ui-project/a2ui/pull/4184)，关联 [#3400](https://redirect.github.com/a2ui-project/a2ui/issues/3400)）**：oneOf/anyOf/allOf/local $defs 是 v1.0 组件 schema 的实际形态，此 PR 是 v1.0 兼容的关键拼图，且持续更新中，**进入下一版本概率高**。
- **zod 4 迁移（[#4229](https://redirect.github.com/a2ui-project/a2ui/pull/4229)）**：若后续落地将构成下一版本的破坏性变更与迁移重点（自建 catalog 需迁 zod 4）；当前已关闭，需观察是否重开或由维护者拆分实现。
- **规范治理收紧（[#4234](https://redirect.github.com/a2ui-project/a2ui/pull/4234)）**：为 `/specification/` 添加 CODEOWNERS（@​jacobsimionato、@​gspencergoog 强制评审），是规范进入严控/准冻结阶段的典型信号，通常为版本发布前的铺垫动作。
- **Conformance 版本化（[#4242](https://redirect.github.com/a2ui-project/a2ui/pull/4242)）**：v0.9→v1.0 行为差异的治理需求，指向多版本共存期合规框架的演进方向。
- **生态扩张与 v0.8 收缩并行（[#4243](https://redirect.github.com/a2ui-project/a2ui/pull/4243) + [#4142](https://redirect.github.com/a2ui-project/a2ui/pull/4142)）**：路线图明显聚焦 **v1.0 单主线**。

---

## 6. 用户反馈摘要

*数据说明：今日所有条目评论数为 0，以下痛点系从提交内容与场景描述中提炼，非评论区原文。*

- **Angular 测试开发者**：Jasmine/Karma + `TestBed` 多 spec 场景下注入器生命周期管理是真实痛点，直接影响测试套件可靠性（[#3949](https://redirect.github.com/a2ui-project/a2ui/issues/3949)）。
- **边缘渲染用户**：Cloudflare `workerd` / React 19 RSC 环境缺少官方渲染器，社区自建后寻求官方文档收录以获得可信度（[#4243](https://redirect.github.com/a2ui-project/a2ui/pull/4243)）。
- **跨语言一致性诉求**：web_core 与 Dart `a2ui_core` 对"函数参数未解析"行为不一致，多端开发者预期被打乱（[#4241](https://redirect.github.com/a2ui-project/a2ui/pull/4241)）。
- **conformance 实现者**：版本默认规则缺失导致合规结果不可解释，阻碍第三方实现对接（[#4242](https://redirect.github.com/a2ui-project/a2ui/pull/4242)）。

---

## 7. 待处理积压

- **3 个 `needs-triage` PR 无人认领**（自提交起未获维护者回应）：[#4243](https://redirect.github.com/a2ui-project/a2ui/pull/4243)（社区生态贡献，建议优先响应以维护贡献者积极性）、[#4242](https://redirect.github.com/a2ui-project/a2ui/pull/4242)、[#4241](https://redirect.github.com/a2ui-project/a2ui/pull/4241)。
- **[#4184](https://redirect.github.com/a2ui-project/a2ui/pull/4184)**：跨 TS/Dart/Python 三语言的大型修复，已待合并 4 天，需要评审资源倾斜。
- **[#4186](https://redirect.github.com/a2ui-project/a2ui/pull/4186) / [#4226](https://redirect.github.com/a2ui-project/a2ui/pull/4226)**：blueprint 哈希同步类文档 PR（已分别等待 4/3 天），机械性变更，快速合并即可消除 `check_compliance.py` 的 Out of Date 报告。
- **[#3949](https://redirect.github.com/a2ui-project/a2ui/issues/3949)**：P2 Bug 13 天分诊时延，建议关注中优先级问题的响应 SLA。

---

### 健康度速记

| 指标 | 今日数值 | 评价 |
|---|---|---|
| Bug→修复 PR 响应率 | 3/3（100%，均同日配对） | 优秀 |
| 待分诊 PR | 3 个 | 需关注 |
| 活动集中度 | 单一维护者占 60% | 有 bus factor 风险 |
| 讨论/互动 | 0 评论、0 反应 | 社区互动偏弱，贡献以代码为主 |

*数据来源：a2ui-project/a2ui GitHub 仓库，统计窗口为 2026-11-15 至 2026-11-16。*

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目动态日报

**日期**： 2026-11-16 | **仓库**： [thesysdev/openui](https://github.com/thesysdev/openui)（面向 AI Agent 的开源生成式 UI 框架）

| 指标 | 过去 24 小时 |
|---|---|
| Issues 更新 | 2 条（新开/活跃 2，关闭 0）|
| PRs 更新 | 6 条（待合并 5，终态 1）|
| 新版本发布 | 0 个 |
| 评论互动 | 0 条（全部条目评论数为 0）|

---

## 1. 今日速览

过去 24 小时项目呈中等、以“创建型”活动为主的社区活跃度：新增 2 条高质量 Issue（1 条端侧数据丢失 Bug、1 条依赖范围错误报告），PR 侧 6 条更新中 5 条待合并、1 条到达终态，无新版本发布。技术主线集中在三处：**lang-core 的 zod peer 依赖修复**、**react-ui artifact 渲染器 Pending 态补齐**、**文档与官网的生态化焕新**。社区贡献闭环表现健康——Issue [#1642](https://redirect.github.com/thesysdev/openui/issues/1642) 与修复 PR [#1643](https://redirect.github.com/thesysdev/openui/pull/1643) 由同一贡献者在同日完成“报告+修复”，响应链路高效。需留意两点：全部条目评论数为 0，讨论热度偏低；托管 demo 站点出现聊天历史丢失的用户反馈（[#1646](https://redirect.github.com/thesysdev/openui/issues/1646)）尚无维护者响应。

---

## 2. 版本发布

今日无新版本发布，仓库无新增 Release 动作。建议 lang-core 的 peer 依赖修复（PR #1643）随下一个补丁版本尽快发布，收窄消费者踩坑窗口。

---

## 3. 项目进展

**今日唯一终态 PR（已关闭）**

- **[#1645](https://redirect.github.com/thesysdev/openui/pull/1645)** docs(dashboards): call OpenUI's script runtime the JS interpreter（作者 abhithesys，ID 显示疑似官方成员）—— 将 OpenUI 中运行生成脚本的运行时在 Dashboards 文档中统一改称 "JS interpreter"，避免被读作泛指的"interpreter"；改动覆盖 Overview（Computed fields）、How it works（Load data / Key concepts）、Connect data 等章节。注：数据状态为 CLOSED 而非 MERGED，是否已合入建议在 PR 页确认。

**待合并（按重要性排序）**

1. **[#1644](https://redirect.github.com/thesysdev/openui/pull/1644)** feat(react-ui): pending state and Pending slot for artifact renderers —— 填补模型发起 `create_dashboard` 到工具返回之间的渲染真空。当前渲染器在无 id 时无法挂载，直接抛出 "This response doesn't reference an artifact."；本 PR 允许在无 `response`/`id`/`content` 时立即挂载并展示 Pending 插槽，对生成式 UI 的流式观感是实打实的升级。
2. **[#1643](https://redirect.github.com/thesysdev/openui/pull/1643)** fix(lang-core): require zod >= 4.0.17 as a peer（Closes #1642）—— peer 范围从 `^3.25.0 || ^4.0.0` 收窄至 `^4.0.17`，与 `src/extend.ts` 中 `cloneSchema` 使用的 `z.util.mergeDefs`（zod 4.0.17 才引入）对齐。
3. **[#1640](https://redirect.github.com/thesysdev/openui/pull/1640)** docs: replace the homepage tweet wall with a community showcase —— 官网首页 tweet wall 替换为 "Featured projects people are building with OpenUI"：5 个精选社区项目以播放列表形式轮播，选中项目的演示视频在侧栏播放、播完自动切换。
4. **[#1641](https://redirect.github.com/thesysdev/openui/pull/1641)** docs: add Fleet Prime to adopters —— 新增采用者 [Fleet Prime](https://github.com/Qredence/fleet-prime-agent)（Qredence 出品的本地浏览器 coding/research 工作区），其基于 `@openuidev/react-lang`、`react-ui`、`dashboard-library` 渲染 agent 仪表盘与内联 UI。由 devin-ai-integration[bot] 提交。
5. **[#594](https://redirect.github.com/thesysdev/openui/pull/594)** feat: render streaming reasoning content —— 创建于 2026-06-03、沉寂数月后于本周期内重新活跃：将 AG-UI 协议定义但被 OpenUI 丢弃的 `ReasoningMessage` / `REASONING_*` 事件以独立消息流渲染在 assistant 输出之前，修复长期 Issue #414。

**整体评估**： 今日无核心代码合入主干（#1645 为文档改动且状态待确认），进展属“稳态输入”——依赖正确性、渲染体验、生态运营三条线各有增量，但无里程碑级合并，项目前进幅度为**小幅正向**。

---

## 4. 社区热点

> 数据说明：本周期所有 Issue/PR 的评论数与 👍 均为 0，无传统意义上“高讨论”条目，以下按内容权重与信号强度排序。

1. **[#1646](https://redirect.github.com/thesysdev/openui/issues/1646) — demo 站体验与数据丢失（最具用户价值信号）**：用户 r4679295-a11y 报告 `openui.com/demo/chat` 在移动端 Chrome 登录后聊天历史不保存；叠加“首条消息即需登录 + 每日消息限额”后，会话中途被切断、历史线程全部消失。诉求分三层：历史可靠持久化、更低试用门槛、透明的限额策略。
2. **[#1642](https://redirect.github.com/thesysdev/openui/issues/1642) → [#1643](https://redirect.github.com/thesysdev/openui/pull/1643) — 同日“报告+修复”闭环**：HitanshuShah1001 先指出 peer range 与实际 API 使用不匹配，随后亲自提交收窄修复。背后是 SDK 深度使用者对包元数据正确性、依赖解析可预期性的诉求——这类用户往往已在做 schema 层的深度集成。
3. **[#594](https://redirect.github.com/thesysdev/openui/pull/594) 复活 — reasoning 渲染的长期诉求**：开启 5 个多月后再次更新，指向社区对推理模型（thinking）内容透传的持续需求（关联 #414），今日动态或预示其进入评审轨道。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 🔴 高（用户数据丢失） | demo 站移动端 Chrome 聊天历史不保存 | 待 triage | **无** |
| 🟠 中高（SDK 运行时风险） | zod peer range 失配，旧版 zod 下 `cloneSchema` 运行时崩溃 | 已确认 | [#1643](https://redirect.github.com/thesysdev/openui/pull/1643)（待合并）|
| 🟡 中（体验缺陷） | dashboard 生成期间 artifact 渲染器抛错 | 设计缺口 | [#1644](https://redirect.github.com/thesysdev/openui/pull/1644)（待合并）|

1. **[#1646](https://redirect.github.com/thesysdev/openui/issues/1646)（高，暂无修复）**：影响面为托管 demo 的移动端 Chrome 用户；登录后历史仍不持久化，在强制登录 + 每日限额的放大下构成“会话中途丢失全部上下文”的数据丢失级体验故障。范围限于 demo 站，是否波及自部署场景尚待定位（前端存储 / 会话同步 / 账户体系）。
2. **[#1642](https://redirect.github.com/thesysdev/openui/issues/1642)（中高，修复在途）**：`@openuidev/lang-core` 声明 zod peer 为 `^3.25.0 || ^4.0.0`，但 `extend.ts` 的 `cloneSchema` 调用 `zod/v4/core` 的 `z.util.mergeDefs`（4.0.17 才引入）。安装 3.25.x 或 4.0.0–4.0.16 的消费者会在运行时崩溃——典型“能安装、跑不起来”。修复 PR 已就绪。
3. **关联缺陷（中）**：由 PR #1644 的描述间接确认的现有行为——`create_dashboard` 调用期间面板空白并抛 "This response doesn't reference an artifact."，非崩溃级但对核心场景观感损伤明显。

本周期无崩溃/回归类报告，无安全类问题。

---

## 6. 功能请求与路线图信号

1. **生成式 UI 流式体验打磨（[#1644](https://redirect.github.com/thesysdev/openui/pull/1644)）**：Pending 态 + Pending 插槽补齐工具调用即时反馈的空窗，属低争议、高确定性合入候选，**大概率进入下个 minor 版本**。
2. **推理内容透传（[#594](https://redirect.github.com/thesysdev/openui/pull/594) / #414）**：补齐 AG-UI 协议中 `ReasoningMessage` 与 `REASONING_*` 事件的渲染。今日更新是 5 个多月来首个活跃信号，若评审通过将是下个版本对 reasoning 模型体验的最大增量。
3. **托管 demo 策略（#1646 反馈部分）**：“首条消息即登录 + 每日限额 + 历史不保存”的组合直接影响新用户转化。可能的后续方向：游客可用模式、本地优先的历史持久化、更清晰的限额说明。目前无对应 PR，属观察项。
4. **生态运营（[#1640](https://redirect.github.com/thesysdev/openui/pull/1640) / [#1641](https://redirect.github.com/thesysdev/openui/pull/1641)）**：首页向社区 showcase 演进 + adopters 目录持续扩充，显示项目在有意识经营生态可见性，第三方集成案例储备充足。

---

## 7. 用户反馈摘要

> 说明：本周期 Issue/PR 评论数均为 0，以下提炼自 Issue 正文与 PR 描述中的使用场景。

- **终端用户痛点（[#1646](https://redirect.github.com/thesysdev/openui/issues/1646)）**：新用户试用路径摩擦大——尚未体验即需注册；每日限额使对话中途被切断；登录后历史在移动端 Chrome 仍然丢失（原文："chats get cut off midway and all previous threads disappear"）。真实场景：想快速评估 OpenUI 能力的用户被门槛与数据丢失劝退，第一印象受损。
- **开发者痛点（[#1642](https://redirect.github.com/thesysdev/openui/issues/1642)）**：peer 声明宽松但代码依赖高版本内部 API（`zod/v4/core`），造成“看似兼容、实际运行时崩溃”的隐性坑，对 monorepo / pnpm catalog 用户尤其隐蔽。
- **正面信号（生态采用，[#1641](https://redirect.github.com/thesysdev/openui/pull/1641)）**：Qredence 的 Fleet Prime 在产品中实际使用 `react-lang` / `react-ui` / `dashboard-library` 渲染 agent 输出，核心包已进入第三方生产集成；配合 #1640 的社区 showcase，可展示的社区项目储备充足。
- **整体满意度判断**：核心库无重大崩溃类反馈，口碑稳；摩擦集中在托管 demo 体验与依赖元数据两个边缘环节，均属可快速修复范畴。

---

## 8. 待处理积压

1. **PR [#594](https://redirect.github.com/thesysdev/openui/pull/594)**（2026-06-03 开启，约 5.5 个月未合并，本周期内有更新）：reasoning 流式渲染。建议维护者给出明确评审结论或拆分方案；关联长期 Issue [#414](https://redirect.github.com/thesysdev/openui/issues/414)，若合入可一并闭环。
2. **Issue [#1646](https://redirect.github.com/thesysdev/openui/issues/1646)**（今日新增，0 回复）：等待维护者 triage——需确认移动端 Chrome 复现路径，并归因前端存储还是账户同步。
3. **PR [#1643](https://redirect.github.com/thesysdev/openui/pull/1643)**：修复内容明确、影响发布正确性，建议优先评审合并，并随 lang-core 补丁版本尽快发布。
4. **PR [#1644](https://redirect.github.com/thesysdev/openui/pull/1644) / [#1640](https://redirect.github.com/thesysdev/openui/pull/1640) / [#1641](https://redirect.github.com/thesysdev/openui/pull/1641)**：待评审。#1641 为 bot（devin-ai-integration[bot]）提交，建议按 adopters 准入标准人工核对项目真实性与描述准确性。
5. **Issue #414**（据 #594 描述的长期追踪项）：reasoning 内容未透传至 UI，依赖 #594 落地。

---

**健康度速记**：今日活跃度中等，贡献来源多元（个人贡献者、疑似团队成员、自动化 bot），“报告→修复”闭环迅速（#1642→#1643 同日完成）；主要风险不在代码质量，而在**托管 demo 的第一印象**（#1646）与**发布节奏**（0 release 窗口内已积累待发布的依赖修复）。

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render 项目动态日报

**日期：** 2026-11-16 ｜ **仓库：** [vercel-labs/json-render](https://github.com/vercel-labs/json-render) ｜ **数据窗口：** 过去 24 小时

---

## 1. 今日速览

项目今日处于**高活跃冲刺状态**：24 小时内共 10 条 PR 更新（5 条已合并/关闭、5 条待处理），连续发布 2 个新版本（v0.23.0、v0.23.1），但 Issue 通道零动态（新开/活跃/关闭均为 0）。维护者 ctate 完成了官方 Swift 包与 SwiftUI 渲染器从合并、发版到补丁修复的完整闭环，标志着项目从纯 Web 方案正式跨入 iOS/macOS 原生平台。与此同时，社区贡献者 maxffarrell 单日连开 3 个重量级 PR（Jetpack Compose 渲染器、Material 3 Expressive 目录、Liquid Glass 外观），Android 原生支持路线已现雏形。整体健康度评估：**优秀**——发版节奏紧凑，Swift 内存边界问题从修复（[#477](https://redirect.github.com/vercel-labs/json-render/pull/477)）到随 v0.23.1 发布仅隔约 1 天，响应速度值得称道。

---

## 2. 版本发布

### 🔖 v0.23.1（Bug 修复版）
**链接：** [v0.23.1 Release](https://github.com/vercel-labs/json-render/releases)

- **Swift 渲染树内存边界加固**：约束单次 build 持有的 child id 数量——此前一个 spec 若将同一 child 重复列出多次并携带长 state 值，会为每个 child 持有一份该值副本，存在资源耗尽风险；现在会在达到上限时停止。
- **验证器输出边界**：限制 validator 上报的 issue 数量及其消息字节数，并对 spec 提供的过长名称做截断处理。
- **迁移注意**：无破坏性 API 变更。但若下游代码依赖"无上限的验证 issue 完整输出"，升级后输出可能被截断。鉴于 json-render 的 spec 常由 LLM 生成（不可信输入场景），本次加固属于**安全相关的重要修复，建议 Swift 用户立即升级**。

### 🔖 v0.23.0（功能版本）
**链接：** [v0.23.0 Release](https://github.com/vercel-labs/json-render/releases)

- **全新 `JSONRender` Swift 包**，包含两个模块：
  - `JSONRenderCore`：平台无关的核心模型，覆盖 spec 解码、流式处理、state、表达式、actions、可见性与校验；
  - `JSONRenderSwiftUI`：原生 SwiftUI 渲染器，含内置视图、原生组件目录、macOS 与流式示例。
- 配套改进（详见已合并 PR）：spec 回放、流式 spec 围栏、代码生成、校验修复；SwiftPM 支持[通过 URL 直接安装](https://redirect.github.com/vercel-labs/json-render/pull/478)。
- **迁移注意**：纯新增能力，无破坏性变更；所有 `@json-render/*` 公共包同步升至 0.23.0。

---

## 3. 项目进展

今日 5 条 PR 完成合并/关闭，构成一条完整的"Swift 原生化"交付链：

| PR | 内容 | 意义 |
|---|---|---|
| [#470](https://redirect.github.com/vercel-labs/json-render/pull/470) | Swift 包与 SwiftUI 渲染器 | ⭐ 今日最大进展，11-11 创建、11-15 合并，历时 4 天 |
| [#478](https://redirect.github.com/vercel-labs/json-render/pull/478) | 根目录 `Package.swift`，支持 SwiftPM/Xcode 按 URL 安装 | 降低 Swift 生态接入门槛 |
| [#477](https://redirect.github.com/vercel-labs/json-render/pull/477) | Swift 渲染树 child id 与校验输出边界 | 资源安全加固 |
| [#476](https://redirect.github.com/vercel-labs/json-render/pull/476) | v0.23.0 发版准备 | 版本管理 |
| [#479](https://redirect.github.com/vercel-labs/json-render/pull/479) | v0.23.1 发版准备 | 版本管理 |

**整体推进评估：** 项目完成了从"Web 渲染方案"到"跨平台（Web + iOS/macOS）JSON UI 协议"的架构跃迁。核心沉淀为平台无关层（spec/streaming/state/校验）+ 平台渲染器 + 原生组件目录的三层结构，为后续 Android 等平台复用同一模式打下了模板基础。

---

## 4. 社区热点

> ⚠️ 数据说明：今日 Issue 为零动态，且抓取数据中评论数不可用，以下按提交时间与技术含量排序。

今日最值得关注的是 **maxffarrell 的"三连发"**，全部创建于 11-16：

1. **[#481 新增原生 Jetpack Compose 渲染器](https://redirect.github.com/vercel-labs/json-render/pull/481)**（热度最高）
   Foundation 目录注册 26 个组件名（布局、内容、图表、输入、控件），支持完整 spec 与 JSONL patch 流，应用可直接使用或注册自定义 composable。**几乎完整复刻了 Swift 渲染器的架构蓝图**，是社区对"json-render 应该上 Android"诉求的最直接回应。

2. **[#482 Material 3 Expressive 组件目录](https://redirect.github.com/vercel-labs/json-render/pull/482)**
   可选目录提供 43 个组件（布局、卡片、列表、图表、表单控件、导航、菜单、对话框、加载进度），基于原生 AndroidX Expressive 组件实现形状变换。

3. **[#480 SwiftUI Liquid Glass 外观](https://redirect.github.com/vercel-labs/json-render/pull/480)**
   通过 `.jsonRenderCatalogAppearance(.liquidGlass)` 为 iOS 26 / macOS 26+ 提供系统级玻璃质感按钮样式与卡片/指标表面。

**诉求分析：** 三者共同指向一个信号——用户不满足于"能渲染"，而要求**平台原生观感**（Liquid Glass、Material 3 Expressive 均为各平台最新设计语言）。SwiftUI 目录 +1 个 PR、Android 从零到 2 个 PR，说明"原生外观目录"已成为与"渲染器本体"并行的贡献热点。

---

## 5. Bug 与稳定性

按严重程度排列：

1. **🔴 高｜Swift 渲染树内存无界增长（已修复，随 v0.23.1 发布）**
   攻击/故障路径：spec 将同一 child 重复列举多次并携带长 state 值 → 每个 child id 持有一份副本 → 内存膨胀。验证器 issue 与消息字节同样无界。由于 spec 常来自 LLM 输出（不可控输入），此问题具备实际的资源耗尽风险。
   修复 PR：[#477](https://redirect.github.com/vercel-labs/json-render/pull/477)（含两个回归测试）✅

2. **🟡 中｜streamCard 异常时无法回收已发出的局部卡片（fix PR 开放中）**
   场景：`streamCard` 在流结束前先行 post 局部卡片；若最终 spec 无效抛出 `CardSpecError`，错误对象不携带已发布消息的句柄，调用方无法编辑或替换那张"半成品"卡片，会在聊天界面留下残缺内容。
   修复 PR：[#483](https://redirect.github.com/vercel-labs/json-render/pull/483)（Railly，今日新开，待评审）⏳

3. **🟢 低｜今日无新增崩溃/回归类 Issue 报告。** Issue 通道零动态，v0.23.0 发布后 24 小时内未见升级引发的反馈，初判发版平稳。

---

## 6. 功能请求与路线图信号

结合已合并 PR 的演进模式（Swift 渲染器 [#470] → 目录增强 [#480 前身] → 发版），可推断：

- **Android 原生支持**（[#481](https://redirect.github.com/vercel-labs/json-render/pull/481) + [#482](https://redirect.github.com/vercel-labs/json-render/pull/482)）：结构与 Swift 落地路径（core + 渲染器 + 原生目录）高度对齐，若评审通过，**很可能构成 v0.24.0 的主题**。这是目前最明确的路线图信号。
- **SwiftUI 外观体系扩展**（[#480](https://redirect.github.com/vercel-labs/json-render/pull/480)）：Liquid Glass 以"可选 appearance"形式接入，暗示外观主题化将成为 SwiftUI 目录的常态化扩展点。
- **Web 端地理组件**（[#465](https://redirect.github.com/vercel-labs/json-render/pull/465)）：Mapbox 地图组件（相机、标记弹窗、GeoJSON 图层、路线 + 距离/时长信息、等时圈）瞄准 LLM 对话中的位置类交互场景，是"AI 助手可视化"方向的能力补全。

---

## 7. 用户反馈摘要

> 今日无 Issue 评论数据，以下从 PR 描述与提交行为中提炼开发者真实使用情境：

- **流式聊天是核心使用场景，且对"失败恢复"敏感**：[#483](https://redirect.github.com/vercel-labs/json-render/pull/483) 揭示了流式输出中断后调用方需要编辑/替换已展示内容的真实痛点——用户在构建 chat 产品，而不仅仅是渲染静态卡片。
- **原生平台集成需求强烈**：社区在 Swift 版发布后 1 天内即提交 Android 全套方案（[#481](https://redirect.github.com/vercel-labs/json-render/pull/481)），说明跨平台团队希望前后端共用同一套 JSON UI 协议。
- **可扩展目录是采用关键**：多个 PR 均强调"开箱即用 or 注册自定义组件"（SwiftUI 目录、Compose Foundation 目录），开发者期待的是**可裁剪的默认集**而非黑盒。
- **实用主义倾向明显**：地图/路线/等时圈（[#465](https://redirect.github.com/vercel-labs/json-render/pull/465)）这类贴近真实产品功能的贡献，反映用户在用 json-render 构建面向终端用户的应用。

---

## 8. 待处理积压

| PR | 状态 | 关注点 | 建议 |
|---|---|---|---|
| [#465](https://redirect.github.com/vercel-labs/json-render/pull/465) Mapbox Map 组件 | 开放 **9 天**（11-07 创建，今日有更新） | 长期未合并的最老 PR，今日仍活跃但无进展迹象 | ⚠️ 建议维护者尽快评审或反馈阻塞原因 |
| [#483](https://redirect.github.com/vercel-labs/json-render/pull/483) CardSpecError 修复 | 今日新开 | 小型 bug 修复，改动聚焦 | 建议快通道处理 |
| [#481](https://redirect.github.com/vercel-labs/json-render/pull/481) Jetpack Compose 渲染器 | 今日新开 | 体量大、架构决策性强（Android 代码组织、与 `swift/` 目录的对称性） | 需要维护者优先做结构性评审，避免返工 |
| [#482](https://redirect.github.com/vercel-labs/json-render/pull/482) Material 3 Expressive 目录 | 今日新开 | 依赖 #481 的落点 | 建议与 #481 统一排期 |
| [#480](https://redirect.github.com/vercel-labs/json-render/pull/480) Liquid Glass 外观 | 今日新开 | 涉及 iOS 26/macOS 26 版本门槛 | 常规评审即可 |

**积压风险提示：** 当前 5 个开放 PR 中 4 个创建于今日，短期评审压力集中。其中 #481/#482 为大体量功能贡献，若评审周期过长可能挫伤这位高产出贡献者的积极性——Swift 版从 PR 到发版仅 4 天，建议保持同等响应水准。

---

*数据来源：GitHub API 抓取（过去 24 小时窗口）。评论数与 Reactions 数据本次不可用，社区热度判断基于提交活动与 PR 内容权重，仅供参考。*

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报

**日期：** 2026-11-16 ｜ **数据来源：** [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 一、今日速览

CopilotKit 今日维持中高活跃度：24 小时内 4 条 Issue 更新（3 新开/活跃、1 关闭）、14 条 PR 更新（13 待合并、1 关闭），无新版本发布，变更持续为下一版本蓄水。开发重心集中在四个方向：**v2 聊天组件的虚拟化滚动体验、运行时遥测与 MCP 工具治理、文档站（shell-docs）体验打磨、A2UI 跨框架无障碍测试**。社区贡献呈现明显的"项目制"特征——多位新贡献者（anishanne、miah7、xtong629、burrows99 等）在同一窗口期各自认领独立领域的修复，配合 Issue 上的 "reserved for students" 标签，表明项目正通过学生贡献计划系统性扩充贡献者管道。尤为亮眼的信号是出现了**当天报 Bug、当天出修复 PR** 的响应闭环（[#8409](https://redirect.github.com/CopilotKit/CopilotKit/issues/8409) → [#8410](https://redirect.github.com/CopilotKit/CopilotKit/pull/8410)）。当前 13 个在途 PR 构成较大评审队列，评审吞吐量是短期需关注的瓶颈。

---

## 二、版本发布

本日无新版本发布。（在途变更详见第三节，预计将随下一个版本集中释放。）

---

## 三、项目进展

**今日终态：**

- **PR [#7881](https://redirect.github.com/CopilotKit/CopilotKit/pull/7881)**（fix(runtime): 通过 `streamText` 的 `system` 参数而非 `messages` 传递 BuiltInAgent 系统提示词）今日关闭。该 PR 修复 [#7846](https://redirect.github.com/CopilotKit/CopilotKit/issues/7846)——经典配置下 `BuiltInAgent` 将系统提示词与 learned-skills 目录 `unshift` 进 `messages`，与新版 AI SDK（`ai` 6.0.308+）行为不兼容。此项解决了项目对 AI SDK v6 的一个关键兼容风险。（注：数据口径为"已合并/关闭"，建议确认最终落地形态。）
- **Issue [#7825](https://redirect.github.com/CopilotKit/CopilotKit/issues/7825)**（文档站公告横幅水合后才渲染、导致每次加载页头跳动 40px）今日关闭，悬置约 33 天的文档站 CLS 问题画上句号。

**在途关键进展（按推进方向归类）：**

| 方向 | PR | 内容 |
|---|---|---|
| 聊天核心体验 | [#8407](https://redirect.github.com/CopilotKit/CopilotKit/pull/8407) | 修复虚拟化长线程发消息时视图上跳（详见第五节） |
| 聊天核心体验 | [#8404](https://redirect.github.com/CopilotKit/CopilotKit/pull/8404) | 性能优化：注册渲染器时停止逐消息克隆 run state，延续 #7243 的优化 |
| 运行时 | [#8270](https://redirect.github.com/CopilotKit/CopilotKit/pull/8270) | MCP Apps 工具 `includeTools`/`excludeTools` 过滤，补齐 #5930 诉求 |
| 运行时 | [#8405](https://redirect.github.com/CopilotKit/CopilotKit/pull/8405) | SSE 遥测将流内 RUN_ERROR 正确计为 `stream_errored` |
| 文档/示例 | [#8410](https://redirect.github.com/CopilotKit/CopilotKit/pull/8410)、[#7824](https://redirect.github.com/CopilotKit/CopilotKit/pull/7824)、[#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309)、[#8411](https://redirect.github.com/CopilotKit/CopilotKit/pull/8411) | 图标插件修复、导航进度条、Python 快速上手补全、A2UI 示例数据落地 |
| 质量基建 | [#8406](https://redirect.github.com/CopilotKit/CopilotKit/pull/8406) | A2UI 无障碍跨 React/Vue/Angular 探针（PNI-819） |

**整体评估：** 今日单条 PR 落地终态 + 一条陈旧 Issue 关闭，绝对合并量不大；但 13 个在途 PR 覆盖修复、性能、功能、测试四个维度，管道充盈，项目处于"广积粮"阶段，向前推进的斜率健康。

---

## 四、社区热点

1. **[#7494](https://redirect.github.com/CopilotKit/CopilotKit/issues/7494)**（7 条评论，本日最热）— v2 虚拟化聊天线程发消息时视图上跳约 10–20 条消息、屏幕短暂大面积空白、约 1.5 秒后才滑回底部，**10 次运行 100% 复现**。该 Issue 挂有 "reserved for students" 标签，由学生贡献者认领，修复 PR [#8407](https://redirect.github.com/CopilotKit/CopilotKit/pull/8407) 已于昨日提交并在今日持续更新。诉求本质：v2 聊天在长会话（>50 条消息触发虚拟化）场景下的滚动稳定性是生产可用性的硬指标。
2. **[#7825](https://redirect.github.com/CopilotKit/CopilotKit/issues/7825)**（5 条评论，今日关闭）— 文档站横幅水合时序导致的 40px 布局跳动，在 <1280px 移动端导航下最明显。高频文档贡献者 Laptopmini 报告并推动闭环，其关联的文档导航体验 PR [#7824](https://redirect.github.com/CopilotKit/CopilotKit/pull/7824) 仍在途。
3. **[#6641](https://redirect.github.com/CopilotKit/CopilotKit/issues/6641)**（3 条评论，今日有更新）— 由 Angular 社区知名人士 rainerhahnekamp 提出的 **Angular 自动化视觉回归测试**诉求，指出 Angular 22 升级（#6521）期间 Lucide 迁移因缺视觉回归覆盖而风险裸奔。悬置近 3 个月，反映 Angular 用户对"二等公民"待遇的焦虑。
4. **[#8409](https://redirect.github.com/CopilotKit/CopilotKit/issues/8409)**（今日新开）— shell-docs 构建输出约 **240 条 "Unknown icon detected" 警告**，且运行时首页请求会再次打印。当日即有修复 PR [#8410](https://redirect.github.com/CopilotKit/CopilotKit/pull/8410) 跟进，社区响应速度值得称道。

---

## 五、Bug 与稳定性

按严重程度排列（★ 为本日新报告）：

| 严重度 | 问题 | 编号 | 修复 PR | 状态 |
|---|---|---|---|---|
| 🔴 高 | 虚拟化长线程发消息视图上跳 10–20 条、白屏约 1.5s，100% 复现，悬置 7 周 | [#7494](https://redirect.github.com/CopilotKit/CopilotKit/issues/7494) | [#8407](https://redirect.github.com/CopilotKit/CopilotKit/pull/8407) | 修复 PR 待评审 |
| 🔴 高 | 合并重复消息时丢失全部 tool calls（影响 Agent 轨迹数据完整性） | 经 PR 报告 | [#8408](https://redirect.github.com/CopilotKit/CopilotKit/pull/8408) | 待评审 |
| 🟡 中 | `/run` 上失败的 agent run 在 SSE 遥测中被记为成功（观测性数据失真） | 经 PR 报告 | [#8405](https://redirect.github.com/CopilotKit/CopilotKit/pull/8405) | 待评审 |
| 🟡 中 | Inspector UI 头部解析失败被静默吞掉 | 经 PR 报告 | [#8271](https://redirect.github.com/CopilotKit/CopilotKit/pull/8271) | 待评审 |
| 🟡 中 | AI SDK v6（`ai` 6.0.308+）下 BuiltInAgent 系统提示词传递方式不兼容 | #7846 | [#7881](https://redirect.github.com/CopilotKit/CopilotKit/pull/7881) | ✅ 今日关闭 |
| 🟢 中低 ★ | shell-docs 构建约 240 条图标解析警告，噪音掩盖真实问题 | [#8409](https://redirect.github.com/CopilotKit/CopilotKit/issues/8409) | [#8410](https://redirect.github.com/CopilotKit/CopilotKit/pull/8410) | 当天出修复，待评审 |
| 🟢 低 | Inspector AG-UI Events 筛选下拉在视图重渲染后重置 | 经 PR 报告 | [#8403](https://redirect.github.com/CopilotKit/CopilotKit/pull/8403) | 待评审 |
| 🟢 低 | 文档站横幅水合后渲染致 40px CLS | [#7825](https://redirect.github.com/CopilotKit/CopilotKit/issues/7825) | — | ✅ 今日关闭 |

**稳定性小结：** 本日无崩溃/回归级报告；主要风险集中在 **v2 聊天渲染路径**（#7494、#8404 性能克隆、#8408 tool calls 丢失三条 PR 同时指向该区域），提示 v2 聊天组件正处于高频打磨期，建议在下一版本前集中回归。积极面：所有在报 Bug 均已有对应修复 PR 或已关闭，无"裸奔"缺陷。

---

## 六、功能请求与路线图信号

- **MCP 工具治理**：[#8270](https://redirect.github.com/CopilotKit/CopilotKit/pull/8270) 为 `mcpApps.servers` 引入 `includeTools`/`excludeTools` 白/黑名单（补齐 [#5930](https://redirect.github.com/CopilotKit/CopilotKit/issues/5930)）。MCP Apps 的细粒度工具暴露控制是企业落地的刚需，该 PR 今日仍在更新，**大概率进入下一版本**。
- **聊天 UI 打磨**：[#8258](https://redirect.github.com/CopilotKit/CopilotKit/pull/8258) 提供 opt-in 的 `showTimestamps` 与 `formatTimestamp`（响应 [#5892](https://redirect.github.com/CopilotKit/CopilotKit/issues/5892)），默认关闭、无破坏性，与 #8407 滚动修复同属 v2 聊天体验包，**有望同版本交付**。
- **多框架质量基建**：[#6641](https://redirect.github.com/CopilotKit/CopilotKit/issues/6641)（Angular 视觉回归）尚无直接 PR，但 [#8406](https://redirect.github.com/CopilotKit/CopilotKit/pull/8406) 的 A2UI 跨框架（React/Vue/Angular）统一测试探针是通往该目标的基础设施铺垫——内部工单编号 PNI-819 暗示无障碍已是路线图正式条目。
- **开发者体验/可观测性**：[#8405](https://redirect.github.com/CopilotKit/CopilotKit/pull/8405)（遥测纠错）、[#8403](https://redirect.github.com/CopilotKit/CopilotKit/pull/8403)/[#8271](https://redirect.github.com/CopilotKit/CopilotKit/pull/8271)（Inspector 可用性）共同指向 Inspector/遥测工具链的成熟化。
- **文档与示例工程化**：[#8411](https://redirect.github.com/CopilotKit/CopilotKit/pull/8411)（A2UI 示例统一到 Vantage Threads 数据集，关联 #6936）与 [#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309)（Python 快速上手补全）显示示例质量被纳入工程化管理。

**信号解读：** 下一版本的主题轮廓初步清晰——v2 聊天体验包 + MCP 工具过滤 + 可观测性修正，均为向后兼容的增量变更，暂未发现破坏性变更迹象。

---

## 七、用户反馈摘要

- **长会话聊天体验是最大痛点**：#7494 报告者以 10 次连跑验证 100% 复现，"屏幕大面积空白 1.5 秒"的描述反映出重度用户对 v2 虚拟化实现的不满已到临界点。
- **文档站细节被高频审视**：横幅 40px 跳动（#7825）、点击导航后"页面毫无反应直到新页到达"（#7824 的动机）、构建期 240 条警告（#8409）——文档用户对加载反馈与稳定性的敏感度高于预期，且社区愿意为此深度投入。
- **Angular 阵营的边缘感**：#6641 提出者（Angular 社区教育者）明确指出视觉回归缺失使框架升级"无保护网"，代表多框架用户要求测试覆盖对齐的诉求。
- **Python 新手路径摩擦**：#8309 修复的快速上手问题（缺少 `azure-identity` 依赖、`single_user` 安全默认值不清晰、缺少 fail-closed 的 `authorization_scope_resolver` 示例）表明非 TS 技术栈的入门文档曾存在"照抄即报错"及安全示范不足的硬伤。
- **信任类问题**：#8405 揭示"失败的 agent run 在遥测里显示为成功"——对依赖遥测做告警/SLA 的运维用户而言，这是信任级缺陷。
- **正面情绪**：Issue 报告普遍附完整复现步骤与版本信息，"当天 Issue → 当天 fix PR"的节奏、以及学生贡献计划的有序运转，显示社区与维护者的协作氛围良好。

---

## 八、待处理积压

| 项目 | 悬置时长 | 状态与建议 |
|---|---|---|
| [#6641](https://redirect.github.com/CopilotKit/CopilotKit/issues/6641) Angular 视觉回归测试 | **~3 个月**（2026-08-21 起） | 无修复 PR。积压最久的功能诉求，建议维护者明确认领人或拆解范围，与 #8406 的测试基建协同推进 |
| [#7494](https://redirect.github.com/CopilotKit/CopilotKit/issues/7494) 虚拟化滚动上跳 | ~7 周（2026-09-28 起） | 修复 PR [#8407](https://redirect.github.com/CopilotKit/CopilotKit/pull/8407) 已就绪，**建议优先评审**以终结这一高复现 UX 缺陷 |
| [#7824](https://redirect.github.com/CopilotKit/CopilotKit/pull/7824) 文档导航进度条 | ~33 天（2026-10-14 起） | 纯增量 UI 改进、风险低，可加快合并 |
| [#8271](https://redirect.github.com/CopilotKit/CopilotKit/pull/8271) Inspector 头部失败静默 | 7 天 | 待评审，与 #8403 同属 Inspector 打磨包 |
| [#8270](https://redirect.github.com/CopilotKit/CopilotKit/pull/8270) MCP 工具过滤 / [#8258](https://redirect.github.com/CopilotKit/CopilotKit/pull/8258) 时间戳 | 8–7 天 | 功能 PR 持续更新中，等待维护者裁决 |
| [#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309) Python 快速上手 | 6 天 | 影响新用户转化，建议优先处理 |

**维护者提醒：** 13 个待合并 PR 已形成评审积压，其中 4 个为高价值 Bug 修复（#8407、#8408、#8405、#8410）。建议按"高复现 UX 缺陷 → 数据完整性 → 遥测正确性"顺序清理，避免修复在队列中过期需 rebase。

---

**健康度小结：** 贡献者管道多元且有序（学生计划 + 高产社区成员），Bug 响应形成闭环，无裸奔缺陷；短板在于**合并吞吐偏低与个别 Issue 长期悬置**。整体呈稳中向好态势。

*本报告基于 24 小时 GitHub 数据快照自动生成，链接均指向对应 Issue/PR 原文。*

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*