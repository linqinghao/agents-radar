# 生成式 UI 生态日报 2026-11-27

> Issues: 8 | PRs: 65 | 覆盖项目: 4 个 | 生成时间: 2026-11-27 07:25 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告

**报告日期：** 2026-11-27 ｜ **覆盖项目：** a2ui / OpenUI / json-render / CopilotKit
**数据口径：** 各仓库过去 24 小时动态快照；a2ui 的「关闭」未区分合并与否，多数项目 PR 评论数缺失，结论以单日样本为限。

---

## 一、生态全景

生成式 UI 赛道整体处于「**规格演进与生态扩张并行**」的阶段：a2ui 以五连发 PR 抛出下一代 Catalog Document 格式提案（v1.0 后最大架构级信号），OpenUI 单日连发 7 个 npm 版本并向 Python SDK + MCP 生态中枢扩张，CopilotKit 投入约 12 个 PR 完成 1,028 页文档的系统治理与安全加固，json-render 则进入低活跃维护期。共性方向清晰——agent 优先（MCP、agent 工具、多 agent 协作）、Python 平权、流式语义与提示词 token 成本成为核心工程议题；共性瓶颈同样清晰——**评审带宽普遍吃紧**（a2ui 待合并 18 条、CopilotKit 24 条、json-render 大 PR 滞留 20 天），社区产出速度已超过维护者消化能力。

---

## 二、各项目活跃度对比

| 项目 | Issue 动态 | PR 动态 | Release | 今日净进展 | 待合并积压 |
|---|---|---|---|---|---|
| **a2ui** | 3 条（新开 0） | 20 条（新开 9 / 关闭 2） | **0** | 提案输入为主，**0 个修复合并落地** | 18 条（净增 +7） |
| **OpenUI** | 3 条 | 16 条（9 待合并 / 7 合并·关闭） | **7 个**（0.19.x → 0.20.x） | 功能闭环：合并→发布当日完成 | 9 条 |
| **json-render** | 1 条 | 1 条（待合并） | 0 | 零推进 | 1 条（滞留 20 天） |
| **CopilotKit** | 1 条（新开 0） | 28 条（24 待合并 / 4 合并·关闭） | 0 | 文档工程量最大（1,028 页审计、2,704 代码块核验） | 24 条 |

**补充观察：** 活跃贡献者方面，a2ui 达 9 位且方向高度集中；CopilotKit 为核心团队 + 3 位外部贡献者；json-render 依赖单一外部贡献者的大 PR。**今日仅 OpenUI 有版本发布**，且从合入到发版近零延迟，是四者中唯一实现「活动量 → 交付物」完整转化的项目。

---

## 三、共同关注的功能方向

1. **MCP / agent 生态接入**（OpenUI、CopilotKit）
   OpenUI #1736 将 `create_dashboard` 等工具内置并经 MCP 暴露；CopilotKit #6824 追踪 MCP Apps host 与 ext-apps 规范的一致性缺口（display-mode、update-model-context、theme propagation）。a2ui #4331（子 agent 更新他人创建的 surface）虽未直连 MCP，同属 agent 协作场景。

2. **提示词工程与 token 成本**（a2ui、OpenUI、CopilotKit）
   a2ui #4414 要求 prompt 只教当前活跃 catalog 用到的语法；OpenUI #698（企业诉求：提示词按需裁剪）+ #1722（设计规范写入提示词）；CopilotKit #8435 建设面向 agent 的 Markdown 端点与 `llms-full.txt`。三方不约而同将「给 agent 的提示词」视为一等工程对象。

3. **Python / 多语言 SDK**（OpenUI、a2ui）
   OpenUI #1742 推 openui-server 上 PyPI（sync + async 双客户端）；a2ui #4427 系列同步提供 TS / Dart / Swift / Python 四语言实现，#4413 反向将 Python 的 MacroExpander 移植到 TS。Python 正成为生成式 UI 基础设施的「第二官方语言」。

4. **流式渲染语义正确性**（a2ui、OpenUI、json-render）
   a2ui #3930（流式期间 `updateDataModel` 先到被误判为删除，用户可见数据丢失，fix 滞留 24 天）；OpenUI #751 revealRate 需求在 PR 关闭后悬空；json-render #457 持续扩展 `streamCard` 与任务快照。流式状态一致性是跨项目的共同硬骨头。

5. **文档与规范的一致性、错误可观测性**（a2ui、CopilotKit、OpenUI）
   a2ui #2476 文档与 schema 脱节悬置 87 天（今日对症 PR 到位）；CopilotKit 全站审计发现 431 页指南中大量走不通的路径；OpenUI recharts 3 静默出空图仅以文档缓解。静默失败（不报错、行为错误）在三项目中反复出现。

---

## 四、差异化定位分析

| 维度 | a2ui | OpenUI | json-render | CopilotKit |
|---|---|---|---|---|
| **生态层次** | 协议 / 规格层 | SDK / 产品层 | 渲染原语库 | 全栈应用框架层 |
| **核心资产** | 跨语言规格 + 四语言 SDK + 第三方渲染器目录 | react-ui / headless / dashboard-library，仪表盘 artifact | JSON→React/Vue 轻量渲染 + Chat 控件 catalog | 前端（Vue/Angular/RN）× Agent 后端（LangGraph/Mastra/ADK）集成矩阵 |
| **目标用户** | 渲染器作者、多平台 SDK 集成方 | 需要 agent 生成仪表盘 / 应用的开发者 | 已有 React/Vue 应用、想低成本加 AI 渲染的开发者 | 构建生产级 agent 应用的工程团队 |
| **技术路线** | 规格先行，v1.0 锚定，提案 RFC 化评审 | Changesets 高频发版 + stacked PR 链 | 最小依赖、轻量维护 | 栈式 PR + 文档工程化 + MCP Apps host 合规 |
| **当前阶段** | v1.0 严格性收紧 + 下一格式演进酝酿期 | 0.20.x 快速迭代期 | 低活跃维护期 | 质量收敛 / DX 打磨期 |

**关键洞察——生态已出现分层互操作：** CopilotKit 仓库内维护 Vue 侧 a2ui 渲染器组件（#8567 即其溢出修复），说明**框架层开始直接消费规格层**；OpenUI 的 DSL 被 Commonly 用作「人 + agent 协作卡片语言」（#1732）。规格（a2ui）→ 框架→ 应用（OpenUI / Commonly）的分层正在成形。同时需注意约束：第三方已密集适配 a2ui v1.0（AgnosticUI、Material 3 Expressive、Livewire），生态惯性将对 #4427 的破坏性变更幅度形成反向制约。

---

## 五、社区热度与成熟度

**活跃度排序**（按今日 PR 动态量）：CopilotKit（28）> a2ui（20）> OpenUI（16）>> json-render（2）。
**交付效率排序**（按合并与发布）：OpenUI > CopilotKit > a2ui > json-render。OpenUI 是唯一实现「当日合并 → 当日发版」的项目；a2ui 活动量高但 0 个修复合并落地，属「输入驱动型」高活跃。

- **OpenUI：社区运营最成熟。** ADOPTERS 申请（#1732）+ Champions 计划（#1731），且 bug 报告者 @​Shinyaigeek 被评为首批 Champion——质量反馈与社区激励形成正循环。
- **a2ui：生态自增长，但贡献流失风险显现。** AgnosticUI / M3 Expressive / Livewire / Jupyter 四方外部作者主动适配 v1.0，非核心团队主导；但 #4389（Jupyter 集成）因 waiting-for-author-response 被关闭，#4413 同状态需警惕重蹈覆辙。
- **CopilotKit：生产就绪特征明显。** 安全加固（#8434 guard 绕过修复）、成本上限、staging→prod digest 钉版发布流程；但 24 条积压与唯一安全修复未合并构成当前风险敞口。
- **json-render：维护者带宽趋紧。** 核心特性 bug 悬置 79 天（#335）、最大功能 PR 评审滞后 20 天（#457），是四者中唯一出现「大 PR 无人评审」沉默风险的项目。

---

## 六、值得关注的趋势信号

1. **MCP 正在成为生成式 UI 的集成公约数。** OpenUI（工具经 MCP 暴露）与 CopilotKit（对齐 ext-apps 规范）殊途同归。**参考价值：** 选型时应将 MCP 兼容性列为一票否决项——UI 层正演变为「MCP 的一种输出端点」。

2. **Agent 端 token 经济学进入工程议程。** 提示词从「写死在库内」转向可组合、可裁剪、按 catalog 上下文生成（a2ui #4414、OpenUI #698/#1722）。**参考价值：** 企业规模化采用的前提是提示词可控性，评估库时优先检查提示词是否暴露配置接口。

3. **流式语义正确性是下一个战场。** 静态渲染基本成熟，难点集中在流式状态管理（a2ui #3930 数据丢失、OpenUI revealRate 悬空）。**参考价值：** 生产集成的测试资源应向流式路径倾斜，静态 happy path 测试掩盖不了流式 bug。

4. **「发版速度」比「活跃度」更能反映健康度。** 今日四项目仅 OpenUI 有 release；a2ui / CopilotKit 活动量更高但积压严重（18 / 24 条待合并）。**参考价值：** 采用方应跟踪合并吞吐而非表面热闹；贡献者应提交小颗粒 PR——文档类合并成本低（a2ui #4425、#4272），大型提案（#4427 五连发、#457）最易滞留。

5. **静默失败与错误可机读性成为共性痛点。** a2ui v1.0 严格模式静默绑定失效（#4347）、OpenUI recharts 3 静默空图（#1740）、宿主需解析英文句子才能关联错误（#4019）。**参考价值：** 依赖升级（尤其渲染 / 序列化链路）后应做输出内容断言，而非仅确认不报错。

---

**一句话总结：** a2ui 在定义「规格」、OpenUI 在定义「交付节奏」、CopilotKit 在定义「生产标准」、json-render 在等待带宽——生成式 UI 生态已从单点竞赛进入分层协作时代，而评审带宽是所有玩家共同的下一瓶颈。

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目动态日报 · 2026-11-27

> 数据来源：GitHub `a2ui-project/a2ui` 过去 24 小时动态快照
> 口径说明：PR 评论数字段缺失；「已合并/关闭」未区分合并与仅关闭；本期无 Release 记录。

---

## 1. 今日速览

a2ui 今日呈 **PR 驱动型高活跃**：24 小时内 PR 动态 20 条（新开 9、关闭 2、存量活跃 9），Issue 动态 3 条（均为存量活跃，无新开），新版本 0 个。头条事件是贡献者 jacobsimionato 的 **五连发提案**——[#4427](https://redirect.github.com/a2ui-project/a2ui/pull/4427) 提出「解耦式 A2UI Catalog Document 格式」规格变更，并同步提交 TypeScript / Dart / Swift / Python 四语言实现（[#4431](https://redirect.github.com/a2ui-project/a2ui/pull/4431) / [#4430](https://redirect.github.com/a2ui-project/a2ui/pull/4430) / [#4429](https://redirect.github.com/a2ui-project/a2ui/pull/4429) / [#4432](https://redirect.github.com/a2ui-project/a2ui/pull/4432)），直指现有 JSON Schema 目录表示的样板负担与 SDK 依赖耦合，是近期体量最大的架构级信号。同时，retz8 的 5 个 v1.0 严格性 / 流式语义修复持续停留在 review 队列；生态侧（AgnosticUI、Material 3 Expressive、Livewire）第三方渲染器接入热度不减。**健康度评估**：9 位贡献者活跃、方向高度集中（v1.0 收紧 + 下一轮格式演进），但待合并队列达 18 个且今日净增 7，**review 带宽是当前最明显的瓶颈**。

---

## 2. 版本发布

今日无新版本发布。当前代码库处于「v1.0 严格性修复在途 + 目录格式提案进入评审」的并行期，下一次发布节奏预计取决于 [#4427](https://redirect.github.com/a2ui-project/a2ui/pull/4427) 系列与 retz8 修复系列的评审结论。

---

## 3. 项目进展

### 今日关闭（2 个，状态均标记 CLOSED，未区分是否合并）

- [#4389](https://redirect.github.com/a2ui-project/a2ui/pull/4389) **Enhance A2UI Jupyter integration**（MRYingLEE，11-24 提出）——新增 `a2ui-jupyter` 包（JupyterLab 渲染器 + Python kernel 支持 + 示例 notebook）。该 PR 长期处于 `waiting-for-author-response` 后关闭，属**未落地的生态贡献**：Jupyter / 数据科学场景集成需求就此悬空。
- [#4402](https://redirect.github.com/a2ui-project/a2ui/pull/4402) **docs: add acip/a2ui-livewire to community renderers**（acip，11-24 提出）——将 Laravel/Livewire（PHP 服务端渲染）渲染器 `acip/a2ui-livewire`（Apache-2.0，targeting v1.0）加入社区渲染器目录。若为合并，则生态版图补上 PHP 一席；若为关闭，则与 #4389 同属生态贡献流失信号。

### 今日实质推进（新开 9 个 PR 中的关键项）

- **[#4425](https://redirect.github.com/a2ui-project/a2ui/pull/4425) docs: align a2uiClientCapabilities docs with version-keyed schemas**（gspencergoog）——直接修复悬置 87 天的文档 Issue [#2476](https://redirect.github.com/a2ui-project/a2ui/issues/2476)：v0.9 / v0.9.1 协议文档中 `supportedCatalogIds` / `inlineCatalogs` 未按 schema 要求包裹在 `"v0.9"` / `"v0.9.1"` 版本键下。**今日唯一「对症存量问题」的落地性修复**（待合并）。
- **[#4427](https://redirect.github.com/a2ui-project/a2ui/pull/4427) + 四语言实现系列**（jacobsimionato）——规格级提案，详见第 6 节。
- 例行维护：[#4424](https://redirect.github.com/a2ui-project/a2ui/pull/4424)（Material 3 Expressive 渲染器收录更新至 v1.0）、[#4426](https://redirect.github.com/a2ui-project/a2ui/pull/4426) / [#4428](https://redirect.github.com/a2ui-project/a2ui/pull/4428)（blueprint 契约 pin 同步，前者附带新增 `renderer_state_of_test.dart` 单测）。

### 量化评估

今日 **0 个修复被合并落地**；队列净变化 +7（9 开 2 关）至 18 个待合并。项目「前进」主要体现为**提案输入与文档债清偿启动**——真正的里程碑（Catalog Document 方向定夺、v1.0 严格性修复合集）目前全部压在 review 队列中。

---

## 4. 社区热点

*（热度依据：Issue 评论数 #4414 ×3、#3724 ×2、#2476 ×1；PR 评论数不可得，按规模与主题集中度推断；所有条目 👍 均为 0）*

1. **Issue [#4414](https://redirect.github.com/a2ui-project/a2ui/issues/4414)（3 条评论，本日最热）**：manfredsteyer 提出 Express promptSnippet 应**只教当前活跃 catalog 实际用到的语法**而非整套 grammar。背后诉求：降低 agent 端 token 消耗、提升宏目录（macro-only inference catalog）下的输出准确率——与其 TS 宏移植 PR [#4413](https://redirect.github.com/a2ui-project/a2ui/pull/4413) 构成「agent 提示工程优化」主线的两翼。
2. **PR [#4427](https://redirect.github.com/a2ui-project/a2ui/pull/4427) Catalog Document 提案系列（5 个 PR 同日连发）**：今日最大讨论场。诉求高度一致——catalog 作者被 JSON Schema Draft 2020-12 样板拖累（`component:{const}`、`@call:{const}`、`allOf` 包 `Checkable`、`$defs.anyComponent/anyFunction`）；TS 侧还被 Zod 内部 AST 耦合（#4431）、Dart 侧被迫依赖 `json_schema_builder`（#4430）。
3. **Issue [#3724](https://redirect.github.com/a2ui-project/a2ui/issues/3724)（2 条评论）**：ditman 报告 Express action-slot 嵌套解析的两个 schema 遍历边缘 case（combinator 属性应先于 `additionalProperties` 处理、局部 `$ref` 别名），源自 [#3635](https://redirect.github.com/a2ui-project/a2ui/pull/3635) review，诉求是**跨语言行为一致性**。
4. **Issue [#2476](https://redirect.github.com/a2ui-project/a2ui/issues/2476)（今日更新）**：用户按官方文档编写 `a2uiClientCapabilities` 直接失败（文档与 schema 结构不一致）；今日 [#4425](https://redirect.github.com/a2ui-project/a2ui/pull/4425) 对症开药，闭环在望。

---

## 5. Bug 与稳定性

**今日无新开 bug issue、无崩溃 / 回归报告**——稳定性表面平静，工作重心是存量修复的在途推进。按严重程度排列：

| 严重度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| P2（文档/spec） | [#2476](https://redirect.github.com/a2ui-project/a2ui/issues/2476) v0.9/v0.9.1 文档 `a2uiClientCapabilities` 缺版本键包裹，与 schema 不符 | 存量 87 天，今日活跃 | ✅ [#4425](https://redirect.github.com/a2ui-project/a2ui/pull/4425)（今日新开） |
| 高（用户可见数据丢失） | [#3930](https://redirect.github.com/a2ui-project/a2ui/pull/3930) 流式回复中 `updateDataModel` 先于 `value` 到达，web_core 按删除处理（清 path 处数据或整个数据模型） | fix 在 review，已挂 24 天 | 该 PR 本身即 fix |
| 中 | [#4347](https://redirect.github.com/a2ui-project/a2ui/pull/4347) v1.0 严格模式下仍接受 v0.9 的 `path`/`call` 键 → 绑定/调用**静默失效**（surface 渲染对象本身） | fix 在 review | 该 PR（关联 [issue #4346](https://redirect.github.com/a2ui-project/a2ui/issues/4346)） |
| 中 | [#4349](https://redirect.github.com/a2ui-project/a2ui/pull/4349) v1.0 catalog 的 `common_types` 引用以 v0.9+v1.0 运行时超集解析，放过非法 check 规则 | fix 在 review | 该 PR |
| 中 | [#4241](https://redirect.github.com/a2ui-project/a2ui/pull/4241) required check 先于数据到达时，每次求值报 `EXPRESSION_ERROR` 而非优雅失败 | fix 在 review | 该 PR |
| 待定 | [#3724](https://redirect.github.com/a2ui-project/a2ui/issues/3724) Express action-slot 解析边缘 case | 30 天，needs-triage | ❌ **无对应 fix PR** |
| 回归防护 | [#4108](https://redirect.github.com/a2ui-project/a2ui/pull/4108) a2ui_flutter 对 agent 提供错误类型属性的测试覆盖（当前不崩溃） | 在 review | 该 PR |

---

## 6. 功能请求与路线图信号

1. **[#4427](https://redirect.github.com/a2ui-project/a2ui/pull/4427) 解耦式 Catalog Document 格式——最强版本路线图信号**。要点：以一等公民的 Catalog Document 取代 JSON Schema 目录表示；各语言 SDK 获零依赖目录模型（TS 去 Zod、Dart/Flutter 去 `json_schema_builder`、Python 统一 `CatalogModel`、Swift `Sendable` 规范模型）；双 codec 兼容 v0.9 / v0.9.1 / v1.0 旧目录。若采纳，几乎必然构成**下一个大版本的核心破坏性变更**，需 RFC 级专项评审与迁移指南。
2. **[#4414](https://redirect.github.com/a2ui-project/a2ui/issues/4414)（P3）+ [#4413](https://redirect.github.com/a2ui-project/a2ui/pull/4413) 宏移植**：同一作者的连贯路线——先把 Python 独有的 `MacroExpander` 移植到 `@a2ui/agent`，再让 prompt 生成器按活跃 catalog 裁剪语法教学。**纳入下一版本概率高**（#4413 已进 review 流程，#4414 是其自然延伸）。注意 #4413 当前标记 `waiting-for-author-response`，作者需及时响应，以免重蹈 #4389 被关的覆辙。
3. **[#4331](https://redirect.github.com/a2ui-project/a2ui/pull/4331) RendererState assumeUnknownSurfaces**（Python/Dart/TS 三语言同步，修复 #3318）：允许子 agent 向他人创建的 surface 发送更新——明确指向**多 agent 协作场景**，已 assigned-for-triage，落地概率较高。
4. **retz8 v1.0 严格性系列**（[#3930](https://redirect.github.com/a2ui-project/a2ui/pull/3930) / [#4347](https://redirect.github.com/a2ui-project/a2ui/pull/4347) / [#4349](https://redirect.github.com/a2ui-project/a2ui/pull/4349) / [#4241](https://redirect.github.com/a2ui-project/a2ui/pull/4241) / [#4019](https://redirect.github.com/a2ui-project/a2ui/pull/4019)）：统一指向「v1.0 语义收紧 + 错误可观测性」，形态上像一个 v1.0.x 补丁合集，可能打包进下一次 patch 发布。
5. **生态信号**：[#4272](https://redirect.github.com/a2ui-project/a2ui/pull/4272)（AgnosticUI 多框架 catalog + Lit/React/Vue 渲染器）、[#4424](https://redirect.github.com/a2ui-project/a2ui/pull/4424)（Material 3 Expressive 升 v1.0）、[#4402](https://redirect.github.com/a2ui-project/a2ui/pull/4402)（Livewire PHP）——第三方密集适配 **v1.0**，社区已将 v1.0 视为稳定锚点，这将对 #4427 的格式演进形成兼容性约束。

---

## 7. 用户反馈摘要

*（样本提示：本日 Issue 评论合计 6 条、PR 评论不可得、所有条目 👍 为 0，情绪信号以文本讨论为主，样本偏小）*

**痛点**
- **Token 成本**：#4414 讨论核心——Express snippet 教整套语法浪费上下文窗口，宏目录场景尤甚；用户要「按需教学」的 prompt 生成。
- **JSON Schema 编写负担**：#4427 / #4430 / #4431 的问题陈述一致——catalog 作者被 `allOf`/`Checkable`/`$defs` 样板套娃拖累，SDK 被验证库内部实现（Zod AST、`json_schema_builder`）绑定。
- **流式语义坑**：#3930 描述对生产 agent 是硬伤——流式输出期间数据模型被当删除处理，用户看到字段甚至整个模型「消失」。
- **错误不可机读**：#4019 指出宿主须解析英文句子，才能把 `UNKNOWN_COMPONENT_TYPE` 等报告关联到具体组件。
- **文档与 schema 脱节**：#2476 用户照官方文档写配置即失败。

**正面信号**
- **生态自增长**：AgnosticUI、Material 3 Expressive、Livewire、Jupyter 四方外部作者在数日窗口内主动提交 v1.0 适配，非核心团队主导——v1.0 规格的第三方吸引力得到验证。
- **跨语言一致性文化**：多处显式强调「跨语言 follow-up」（#3724、#4331、#4108），贡献者认同四语言并进的契约纪律。

---

## 8. 待处理积压（截至 2026-11-27）

| 项目 | 类型 | 挂起时长 | 状态 | 建议 |
|---|---|---|---|---|
| [#2476](https://redirect.github.com/a2ui-project/a2ui/issues/2476) | Issue（P2，docs） | **87 天** | first-line-handled | 对症 PR #4425 已到，**建议优先 review 并关闭** |
| [#3724](https://redirect.github.com/a2ui-project/a2ui/issues/3724) | Issue（agent sdk） | **30 天** | needs-triage | 无 fix PR，跨语言跟进承诺未兑现，需排期 |
| [#3930](https://redirect.github.com/a2ui-project/a2ui/pull/3930) | PR（bug 修复） | **24 天** | needs review | 涉及用户可见数据丢失，建议提级 |
| [#4108](https://redirect.github.com/a2ui-project/a2ui/pull/4108) | PR（测试） | 17 天 | assigned-for-triage | 排期 triage |
| [#4241](https://redirect.github.com/a2ui-project/a2ui/pull/4241) | PR（bug 修复） | 12 天 | needs review | 与 #4347/#4349 同主题，可打包评审 |
| [#4272](https://redirect.github.com/a2ui-project/a2ui/pull/4272) | PR（docs） | 10 天 | needs review | 纯文档收录，合并成本低、生态收益高 |
| [#4331](https://redirect.github.com/a2ui-project/a2ui/pull/4331) | PR（feature） | 7 天 | assigned-for-triage | 三语言 feature，尽快 triage |
| [#4413](https://redirect.github.com/a2ui-project/a2ui/pull/4413) | PR（feature） | 2 天 | waiting-for-author-response | 作者需尽快响应 review，避免复刻 #4389 结局 |

**积压画像与消化建议**：18 个待合并 PR 中至少 7 个带 `needs review`，今日又净增 7（含 5 个大型提案）。建议分三队列处理——① 小型 docs PR（#4424 / #4425 / #4272）快速合并；② retz8 修复系列（#3930 / #4347 / #4349 / #4241 / #4019）作为「v1.0 严格性合集」统一评审；③ [#4427](https://redirect.github.com/a2ui-project/a2ui/pull/4427) 系列按 RFC 级提案安排专项评审与明确决策时间表，避免其长期滞留挤压普通队列。

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目动态日报
**项目**: [thesysdev/openui](https://github.com/thesysdev/openui) | **日期**: 2026-11-27 | **数据窗口**: 过去 24 小时

---

## 1. 今日速览

过去 24 小时 OpenUI 处于**高活跃状态**：PR 更新 16 条（9 条待合并、7 条合并/关闭），Issue 更新 3 条，并通过 Changesets 管道一口气发布 **7 个 npm 版本**，版本主线从 0.19.x 推进至 **0.20.x**。功能侧完成了 artifact 渲染器"构建 feed"（#1713）与 Sources 对话式重构（#1729）的落地闭环；同时一条战略性大 PR 提交——**Python 版 openui-server 上 PyPI**（#1742），配合 agent 工具/MCP 支持（#1736），项目正从 JS/TS 单生态向多语言、agent 生态中枢方向扩张。当日还修复了阻塞发版的 Release workflow 故障（#1733），并出现新采用方申请（#1732）与 Champions 计划（#1731）等社区增长信号，**项目健康度：良好偏强**。

---

## 2. 版本发布（7 个）

| 包名 | 版本 | 类型 | 关键变更 | 来源 PR |
|---|---|---|---|---|
| @​openuidev/react-ui | 0.20.0 | **Minor** | `LiveArtifactRenderer`/`StaticArtifactRenderer` 新增构建 feed（命名步骤 + 失败仪表盘在卡片上显示错误） | [#1713](https://redirect.github.com/thesysdev/openui/pull/1713) |
| @​openuidev/react-ui | 0.20.1 | Patch | Sources 原位展示数据来源，配合 inspect mode hover card | [#1729](https://redirect.github.com/thesysdev/openui/pull/1729) |
| @​openuidev/react-headless | 0.20.0 | Patch | 构建中无工具/脚本的 `step` 会被保留 | [#1713](https://redirect.github.com/thesysdev/openui/pull/1713) |
| @​openuidev/react-headless | 0.20.1 | — | 无实质变更（随固定组同步发布） | — |
| @​openuidev/dashboard-library | 1.1.1 | Patch | 提示词新增页面排序（答案→解释→细节）、筛选、前期对比与标签规范（约 +3.4k 字符） | [#1722](https://redirect.github.com/thesysdev/openui/pull/1722) |
| @​openuidev/browser-bundle | 0.2.4 | Patch | 依赖同步至 react-ui 0.20.0 | — |
| @​openuidev/assistant-ui | 0.2.2 | Patch | peer 依赖窗口移至 react-ui / react-headless 0.20 | [#1733](https://redirect.github.com/thesysdev/openui/pull/1733) |

**迁移注意事项**：
- `react-ui` 与 `react-headless` 为 **changesets 固定组（fixed group）**，必须同步升级到 0.20.x，不可单独升其中一个。
- 使用 `@openuidev/assistant-ui` 的项目需**先升级至 0.2.2**，否则 peer 依赖窗口不匹配（#1733 即为修复此问题）。
- dashboard-library 1.1.1 的提示词变更会**改变 LLM 生成仪表盘的行为**（页面结构、头条数字、筛选逻辑），依赖旧提示词行为的集成方需回归验证。
- 无显式破坏性 API 变更，但 react-ui 0.20.0 为 Minor 版本，渲染表现有可见变化（构建 feed、卡片错误展示、Sources 交互形态）。

---

## 3. 项目进展

今日 7 条 PR 合并/关闭，其中 4 条功能性/修复性 PR 直接转化为同日发版——从合入到发布近乎零延迟，发布管道效率出色。

**已落地（合并并发布）**：
- **[#1713](https://redirect.github.com/thesysdev/openui/pull/1713) 构建 feed**：仪表盘构建过程中，卡片与打开的仪表盘展示同一份命名步骤 feed，失败时卡片同步显示错误。构建透明度是 agent 生成 UI 场景的关键体验，随 0.20.0 发布。
- **[#1729](https://redirect.github.com/thesysdev/openui/pull/1729) Sources 交互重构**：从 320px 停靠面板改为居中对话框（移动端 bottom sheet）+ inspect mode hover card，解决窄容器和手机端挤压仪表盘的可用性问题，随 0.20.1 发布。
- **[#1722](https://redirect.github.com/thesysdev/openui/pull/1722) 提示词设计规范**：将 #1686 中验证有效的设计指导浓缩进 dashboard-library 提示词，随 1.1.1 发布。
- **[#1733](https://redirect.github.com/thesysdev/openui/pull/1733) 发版链路修复**：恢复 #1713 合入后中断的 Release workflow，当日闭环。

**在途的大工程（stacked PR 链 #1707 → #1736 → #1720 → #1742）**：
- **[#1736](https://redirect.github.com/thesysdev/openui/pull/1736)**：仪表盘自带 agent 工具（`create_dashboard`/`edit_dashboard`/`get_dashboard`），可作为框架工具或经 MCP 暴露，规则内置于工具描述中——把"手写工具"负担从应用方转移给库。
- **[#1720](https://redirect.github.com/thesysdev/openui/pull/1720)**：server 端按功能域重构（core/artifacts/conversations/interpreter/autofix）+ 客户端 Autofix。
- **[#1742](https://redirect.github.com/thesysdev/openui/pull/1742)**：`openui-server` Python 版，sync `OpenUIClient` 与 async `AsyncOpenUIClient` 双客户端，覆盖 artifacts、conversations（含 Chat Completions 与 LangGraph 消息）。

**整体判断**：渲染器体验层（feed + Sources）今日完成"开发→发布"闭环；server 层三大 PR 构成下一版本主轴，项目单日推进幅度**明显大于日常节奏**。

---

## 4. 社区热点

- **[#698 仅生成提示词的 library 部分（已关闭，5 评论 / 3 👍，讨论热度最高）](https://redirect.github.com/thesysdev/openui/issues/698)**
  企业级 agent 系统集成方对提示词的**显式控制诉求**：认可 `@openuidev/react-lang` 提示词生成器中"组件描述"部分的价值，但希望其余部分可裁剪。该 Issue 自 6 月 30 日挂起近 5 个月后今日关闭——是功能落地还是仅作答复，建议维护者跟进确认（见第 6 节分析）。
- **[#1732 申请将 Commonly 加入 ADOPTERS（新开）](https://redirect.github.com/thesysdev/openui/issues/1732)**
  开源项目 [Commonly](https://github.com/Team-Commonly/commonly)（团队与 agent 共享 pod 的工作区）用 OpenUI Lang 作为 agent 卡片语言并用 `@openuidev/react-lang` 渲染——验证了 OpenUI 在"人 + agent 协作"真实团队工具中的落地，是生态扩张的积极信号。
- **[#1731 OpenUI Champions 页面（待合并）](https://redirect.github.com/thesysdev/openui/pull/1731)**
  首批两位社区 Champion：@​Shinyaigeek 与 @​shogun444。值得注意 @​Shinyaigeek 正是 bug #1687 的报告者——深度质量反馈者被官方认可，社区运营与缺陷发现形成了正循环。
- **[#1740 recharts 2 版本约束说明（待合并）](https://redirect.github.com/thesysdev/openui/pull/1740)**
  暴露了用户在图表栅格化上的实际踩坑（详见第 5 节），以文档而非代码方式缓解。

---

## 5. Bug 与稳定性

按严重程度排列：

1. 🔴 **Release workflow 在 main 上持续失败 —— 已修复（当日闭环）**
   #1713 合入后自动发版中断，无人为干预将阻塞所有发布。[#1733](https://redirect.github.com/thesysdev/openui/pull/1733) 当日修复并恢复发版，从发现到修复的响应速度值得肯定。
2. 🟡 **图表栅格化在 recharts 3 下静默失败 —— 开放中，仅文档缓解**
   [#1740](https://redirect.github.com/thesysdev/openui/pull/1740)：`renderChartPng`（`@openuidev/channels/ui/charts`）在 recharts 3 下只渲染空的 `<div class="recharts-wrapper">`——recharts 3 将图表布局存入由 `useEffect` 填充的 store，而 effects 在 `renderToStaticMarkup` 中不执行。当前方案是文档注明**需要 recharts 2**，暂无对 recharts 3 的代码级兼容方案。失败是静默的（不报错、只出空图），隐蔽性高。
3. 🟡 **图表坐标轴小数刻度重复 —— 开放中，暂无 fix PR**
   [#1687](https://redirect.github.com/thesysdev/openui/issues/1687)：`numberTickFormatter`（`Charts/utils/styleUtils.ts`）对 0.01–0.03 区间的小数刻度打印重复数值（如 0.005 的刻度显示为 `0.01`），属于**数据展示正确性**问题，对比率类分析仪表盘影响直接。
4. 🟢 **示例构建失败 —— 修复在途**
   [#1735](https://redirect.github.com/thesysdev/openui/pull/1735) 通过刷新 lockfile 顺带修复 #1716 的 `build-examples` 失败。

今日无崩溃/回归类事故；风险集中在发版链路（已闭环）与 recharts 3 兼容（仅文档级缓解，建议排期评估真兼容方案）。

---

## 6. 功能请求与路线图信号

**明确的需求信号**：
- **提示词模块化输出**（[#698](https://redirect.github.com/thesysdev/openui/issues/698)，已关闭）：企业用户要"只生成库部分提示词"的选项。若关闭意味着采纳，落地位置大概率在 `promptOptions.ts` —— 与刚合并的 #1722 修改同一文件区域，方向吻合，值得观察 1.1.x 后续版本。
- **渐显节奏控制 revealRate**（原 #751，PR #752 今日关闭）：DSL 突发到达或传输合并写入时的渲染节奏诉求。#752 关闭且今日 7 个发版说明均未包含 revealRate，推测为未合并的陈旧关闭，该需求目前**重新处于无 PR 状态**。
- **ADOPTERS 补录**（[#1732](https://redirect.github.com/thesysdev/openui/issues/1732)）：纯文档变更，接受概率高。

**从在途 PR 推断的路线图主线**：
- **Agent 工具 + MCP**（#1736）与营销页"Works with the agent you already have"（[#1737](https://redirect.github.com/thesysdev/openui/pull/1737)）相互印证——产品定位正加速向"任意 agent/任意模型均可接入"的生态中枢迁移。
- **Python 生态**（#1742）：openui-server 上 PyPI 是从 JS/TS 走向多语言的关键一步，直接扩大可触达开发者群体。
- **开发者教育**（[#1741](https://redirect.github.com/thesysdev/openui/pull/1741)）："自建 live AI 仪表盘要做的十件事"博文 + Dashboards API 文档，降低采用门槛。
- **判断**：#1736 / #1720 / #1742 为 stacked 链，按依赖顺序，agent 工具与 server 重构大概率构成下一版本（server 0.5.x → dashboard-library 1.2 线）主轴，Python SDK 紧随其后。

---

## 7. 用户反馈摘要

- **企业集成方**（#698）：满意点集中在组件描述提示词的质量与实用性；痛点是其余提示词部分不可控、无法按需裁剪——**提示词可组合性是企业规模化采用的前提**。
- **图表用户**（#1687）：小数场景（比率类指标 0.01–0.03）刻度标签误导，直接影响数据可信度。
- **图表栅格化用户**（#1740 背景）：升级 recharts 3 后 PNG 导出静默产出空图，故障不报错、难定位，需要明确的版本约束指引。
- **采用方 Commonly**（#1732）：将 OpenUI Lang 作为人与 agent 协作的卡片语言，**正面验证了"agent 产出 UI、人消费 UI"的核心使用场景**在真实团队工具中的可行性。
- **整体画像**：满意度集中在 DSL / 组件描述 / 渲染能力的成熟度；不满集中在**提示词可控性、图表细节正确性、第三方依赖（recharts）兼容性**三个方向。

---

## 8. 待处理积压

- **stacked PR 链 #1707 → #1736 → #1720 → #1742**：链底 [#1707](https://redirect.github.com/thesysdev/openui/pull/1707) 未被今日数据覆盖更新详情，整链合入周期有拉长风险，建议维护者明确各层合入时间表。
- **[#1687](https://redirect.github.com/thesysdev/openui/issues/1687) 刻度重复 bug**：已挂 6 天、暂无认领修复的 PR，图表是仪表盘的核心展示路径，建议排期。
- **#698 关闭后的落地追踪**：企业提示词裁剪诉求挂了近 5 个月才关闭，若仅为答复性关闭，建议转化为明确的 issue/changeset，避免需求流失。
- **#751（revealRate）能力悬空**：#752 关闭后该渲染节奏需求无人认领，是否由核心团队另行实现需澄清。
- **[#1735](https://redirect.github.com/thesysdev/openui/pull/1735)**：修复 #1716 构建失败的变更仍待合并，且 stacked 依赖关系（#1716 → #1735）需理顺，避免示例 CI 长期红灯。

---

*数据来源：GitHub Issues / PRs / Releases 公开数据（过去 24 小时）。链接均指向 thesysdev/openui 仓库对应条目。*

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render 项目动态日报

**项目**: [vercel-labs/json-render](https://github.com/vercel-labs/json-render) | **日期**: 2026-11-27

---

## 1. 今日速览

今日为典型的**低活跃度维护日**：过去 24 小时仅 1 条 Issue 更新、1 条 PR 更新（待合并），无 PR 合并、无 Issue 关闭、无新版本发布。活跃焦点集中在两处：长期悬置的 Vue DevTools 渲染 Bug（[#335](https://redirect.github.com/vercel-labs/json-render/issues/335)，已开放 79 天，今日再度活跃）与大型功能 PR（[#457](https://redirect.github.com/vercel-labs/json-render/pull/457)，等待评审约 20 天）。以合并代码计，项目主线今日推进幅度为零；健康度方面需警惕的信号是：**核心 Bug 修复周期偏长 + 大型贡献 PR 评审滞后**，可能反映维护者带宽趋紧。

---

## 2. 版本发布

本期无新版本发布（故省略详细说明）。当前发布节奏暂停，最新功能面变化预计需待 [#457](https://redirect.github.com/vercel-labs/json-render/pull/457) 合并后才会体现。

---

## 3. 项目进展

今日**无 PR 合并/关闭**，代码主线无实质推进。当前唯一活跃的开发线程：

- **[#457](https://redirect.github.com/vercel-labs/json-render/pull/457) feat(chat): add portable layouts, choices, tasks, and feedback**（OPEN，待合并）
  - 作者：maxffarrell | 创建于 2026-11-07，最近更新 2026-11-26
  - 内容：扩展共享组件 catalog 及 `toCard`/`streamCard` API，新增 `Select`、`RadioSelect`、`Link`、`Columns`、`Carousel`、任务快照（task snapshots）与响应反馈等 Chat SDK 可移植控件
  - 状态：尚无合并迹象，评论数据缺失，评审进度不透明

**评估**：今日净进展为 0，但 #457 体量较大（涉及 catalog 与公共 API 双重扩展），一旦落地将是 chat 渲染能力的显著升级，建议关注其评审动态作为下一版本的风向标。

---

## 4. 社区热点

- **[#335] about @​json-render/devtools-vue problem**（3 条评论，今日更新）— [链接](https://redirect.github.com/vercel-labs/json-render/issues/335)
  - 今日最活跃的讨论线程。自 2026-09-09 创建以来持续被追问，今日（11-27）再度出现新动态，说明用户对该问题的诉求未消退。
  - **背后诉求**：Vue 生态用户期望 `@json-render/devtools-vue` 能开箱即用地与主库协同，目前集成即产生 DOM 渲染损坏，调试工具链在 Vue 侧基本不可用。
- **[#457]（PR）** — [链接](https://redirect.github.com/vercel-labs/json-render/pull/457)
  - 社区贡献者提交的功能大礼包，👍 为 0、评论数据缺失，讨论热度无法量化，存在"大 PR 无人评审"的沉默风险。

---

## 5. Bug 与稳定性

今日无新增崩溃/回归报告，仅一条存量 Bug 持续发酵：

| 严重度 | 问题 | 状态 |
|---|---|---|
| **中等** | [#335](https://redirect.github.com/vercel-labs/json-render/issues/335)：集成 `@json-render/devtools-vue` 后页面 DOM 渲染错误，inline style 中被注入 `display:'content'` | 开放 79 天，**无关联 fix PR** |

**分析**：
- 影响面评估：该问题位于 devtools（开发期工具）层，不直接污染生产渲染核心，故定为中等而非高危；但它使 Vue 用户的调试工作流完全受阻。
- 技术线索：CSS 标准值为 `display: contents`（带 s），issue 中报告的 `display:'content'` 为非法值或拼写异常，指向 devtools 样式注入逻辑存在错误，可作为排查切入点。
- 今日有讨论但未见官方修复动作或修复计划表态。

---

## 6. 功能请求与路线图信号

- **Chat 方向持续加码**（明确信号）：[#457](https://redirect.github.com/vercel-labs/json-render/pull/457) 覆盖 Select/RadioSelect（选择类交互）、Columns/Carousel（分组布局）、Link、任务快照、响应反馈，统一收敛到共享 catalog 与 `toCard`/`streamCard` API。**若该 PR 合并，这些能力大概率构成下一版本的主体内容**。
- **DevTools-Vue 修复需求**（隐含信号）：[#335](https://redirect.github.com/vercel-labs/json-render/issues/335) 持续活跃暗示 devtools 包需要一个兼容性/正确性 patch 版本。

**路线图判断**：下一版本预计以 chat 能力扩展为主轴（取决于 #457 评审进度）；devtools-vue 修复可能以独立 patch 形式跟进，但目前无任何 fix PR 落地迹象。

---

## 7. 用户反馈摘要

- **痛点**：用户 Undefined100 在 Vue 项目中集成 `@json-render/devtools-vue` 后遭遇 DOM 显示异常（inline style 生成 `display:'content'`），表明 **devtools 的 Vue 集成开箱体验存在硬性摩擦**。
- **使用场景**：Vue 技术栈开发者，将 devtools-vue 作为 json-render 渲染结果的调试/可视化配套工具。
- **情绪信号**：该 issue 持续 79 天未解决、今日仍有人跟进，3 条评论、0 👍，整体呈"受阻等待"状态——用户未流失（仍在追问），但满意度显然受损。
- **数据局限**：今日活跃 Issue 样本仅 1 条，无法据此评估更广泛的用户满意度分布。

---

## 8. 待处理积压

| 条目 | 类型 | 开放时长 | 当前状态 | 建议动作 |
|---|---|---|---|---|
| [#335](https://redirect.github.com/vercel-labs/json-render/issues/335) | Bug（devtools-vue） | **79 天** | 今日仍有活动，无 fix PR | 维护者确认复现，给出修复时间表或 workaround |
| [#457](https://redirect.github.com/vercel-labs/json-render/pull/457) | 功能 PR | **20 天** | 待评审，无合并迹象 | 优先安排 review，避免大 PR 陈化引发冲突与贡献者流失 |

**提醒**：两条积压项 👍 均为 0，表面社区信号偏弱，但 #335 的长周期持续追问表明其为真实用户阻塞点；#457 则是当前最大的增量功能来源。二者同处悬置状态，建议维护者本周内分别给予 triage 响应，以维持项目响应力指标。

---

*数据来源：GitHub 过去 24 小时 Issue/PR 更新流水；统计窗口内样本量较小，个别结论（如社区热度、满意度）仅供参考。*

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报

**日期：** 2026-11-27 ｜ **仓库：** [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) ｜ **统计窗口：** 过去 24 小时

---

## 1. 今日速览

过去 24 小时项目无新版本发布，Issue 侧非常安静（仅 1 条更新、0 条关闭），但 PR 侧高度活跃：28 条更新，其中 24 条待合并、4 条已合并/关闭。活动重心几乎全部集中在**文档工程**——tylerslaton 的文档栈（原计划 7 个 PR，已扩展至约 12 个）对全站 1,028+ 页面进行系统性审计，多数 PR 今日（11-27）仍在持续更新。社区贡献保持健康：3 位外部贡献者（sarankumar1325、egg119、justin-john）分别提交了文档 typo、拖拽行为与 Vue 渲染修复。整体判断：项目处于**质量收敛 / DX 打磨期**，开发吞吐量高，但核心运行时功能变更少，合并积压达 24 条，评审带宽可能成为瓶颈。

---

## 2. 版本发布

今日无新版本发布（过去 24 小时 Releases: 0），省略详细说明。发布侧相关动态：文档站生产发布 PR [#8582](https://redirect.github.com/CopilotKit/CopilotKit/pull/8582) 已就绪（Staging 全绿，待合并以将 `docs.copilotkit.ai` 钉到指定 digest），详见下节。

---

## 3. 项目进展

**合并/关闭情况：** 过去 24 小时有 4 条 PR 合并/关闭，但具体编号未进入展示列表，无法逐一确认；结合 [#8582](https://redirect.github.com/CopilotKit/CopilotKit/pull/8582) 的描述（Staging 已验证通过、待合并钉版）判断，合并动作大概率与文档发布管线相关。

**主线：文档栈进入收尾阶段（今日最大进展）**

| PR | 内容 |
|---|---|
| [#8438](https://redirect.github.com/CopilotKit/CopilotKit/pull/8438) | API 参考与 Intelligence 页面与源码同步（194 + 35 页，发现未文档化的新 props 及一个错误默认值） |
| [#8432](https://redirect.github.com/CopilotKit/CopilotKit/pull/8432) | 站内搜索按页面分级排名，具名页面优先 |
| [#8433](https://redirect.github.com/CopilotKit/CopilotKit/pull/8433) | SEO 治理：1,029 个 sitemap URL 爬取后发现 24 个页面标题均为 "Quickstart"，进行去重与信号修正 |
| [#8434](https://redirect.github.com/CopilotKit/CopilotKit/pull/8434) | Ask AI 公共端点安全加固与成本上限（详见第 5 节） |
| [#8435](https://redirect.github.com/CopilotKit/CopilotKit/pull/8435) | Agent 侧 Markdown（`.md` URL、`llms-full.txt`、MCP `get_page`）与部署指南修复 |
| [#8436](https://redirect.github.com/CopilotKit/CopilotKit/pull/8436) | Quickstart、框架落地页与运行时页内容审计（多个"从零开始"路径在第一步即失败） |
| [#8437](https://redirect.github.com/CopilotKit/CopilotKit/pull/8437) | 功能指南与非 React 前端页（Vue/Angular/RN/Slack/Teams）审计，核验所有 `@copilotkit/*` 导入真实存在 |
| [#8440](https://redirect.github.com/CopilotKit/CopilotKit/pull/8440) | 全站 2,704 个唯一代码块与当前安装包逐一核验 |
| [#8451](https://redirect.github.com/CopilotKit/CopilotKit/pull/8451) | 全站文风统一（8 个板块写手共用一份风格指南） |
| [#8468](https://redirect.github.com/CopilotKit/CopilotKit/pull/8468) | 431 页非 Intelligence 指南端到端实测（aimock + Playwright 验证宣传效果真实出现） |
| [#8486](https://redirect.github.com/CopilotKit/CopilotKit/pull/8486) | 前端 × 框架全组合真实 Quickstart，淘汰框架落地页 |
| [#8483](https://redirect.github.com/CopilotKit/CopilotKit/pull/8483) | 全栈预览 PR（明确标注 do-not-merge） |
| [#8582](https://redirect.github.com/CopilotKit/CopilotKit/pull/8582) | 文档生产发布（digest 钉版） |

**功能面与其他进展：**
- [#8580](https://redirect.github.com/CopilotKit/CopilotKit/pull/8580)：早期访问渠道页（iMessage / WhatsApp / SMS / RCS，含 demo booker），将消息渠道视为"普通前端"——[#8573](https://redirect.github.com/CopilotKit/CopilotKit/pull/8573) 的替代方案。
- [#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309)：Python Agent Quickstart 完整化（补 azure-identity、`single_user=True`、fail-closed `authorization_scope_resolver` 示例）。
- [#8567](https://redirect.github.com/CopilotKit/CopilotKit/pull/8567)：Vue a2ui-renderer 组件溢出修复（今日仍在更新）。
- [#8585](https://redirect.github.com/CopilotKit/CopilotKit/pull/8585)：Mastra × React Native 前端工具文档对齐。

**量化评估：** 展示的 20 条 PR 中 13 条今日有更新；文档栈贡献了大部分活动。本轮"前进"主要体现在开发者体验与文档可信度（1,028 页审计、2,704 代码块核验、431 页端到端走查），而非新运行时能力——这是一次罕见规模的文档治理投入。

---

## 4. 社区热点

**1）[Issue #6824](https://redirect.github.com/CopilotKit/CopilotKit/issues/6824) — MCP Apps host 规范一致性追踪（今日唯一活跃 Issue，累计 6 条评论，11-26 更新）**

追踪 CopilotKit 作为 MCP Apps host 与规范（`@modelcontextprotocol/ext-apps`，协议版本 2026-01-26）之间的一致性缺口：**display-mode、update-model-context、host-context、theme propagation** 等。背景：[#6707](https://redirect.github.com/CopilotKit/CopilotKit/pull/6707) 已将 React host 迁移至 ext-apps `AppBridge`，核心协议已接通，剩余为 host 侧表面积能力。诉求本质是**生态互操作性**——让第三方 MCP Apps 在 CopilotKit 中获得与规范一致的显示模式、上下文更新与主题传递体验。

**2）PR 侧热点：文档栈 + 渠道方案之争**

- PR 评论数在数据中不可用（undefined），按更新时间与工作量判断，文档栈系列是当前最活跃工作流。
- [#8580](https://redirect.github.com/CopilotKit/CopilotKit/pull/8580) 与 [#8573](https://redirect.github.com/CopilotKit/CopilotKit/pull/8573) 构成明确的"二选一"关系（作者注明 *merge one and close the other*），维护者需尽快决策，避免两个实现分叉漂移。

---

## 5. Bug 与稳定性

今日**无新增 Bug / 崩溃 / 回归 Issue**（新开 Issue 为 0）。在途 Bug 修复 PR 按严重程度排列：

| 严重度 | 问题 | Fix PR | 状态 |
|---|---|---|---|
| 🔴 高（安全） | **Ask AI guard 绕过**：single-route 模式下 runtime 接受字符串形式的 `body` 并在 guard 之后解析，绕过对 `messages`/`context`/`tools` 的校验；同时公共端点缺乏成本上限 | [#8434](https://redirect.github.com/CopilotKit/CopilotKit/pull/8434) | 有 fix PR，**待合并——建议最高优先级评审** |
| 🟡 中（行为） | `useAttachments` 拦截一切拖拽：`handleDragOver/Leave/Drop` 在检查 `dataTransfer.types` 前即 `preventDefault + stopPropagation`，导致拖动文本选区经过聊天区也触发附件 drop zone | [#8473](https://redirect.github.com/CopilotKit/CopilotKit/pull/8473)（社区） | 有 fix PR，待评审 |
| 🟢 低（UI） | Vue a2ui-renderer：`width:100%` 组件叠加两侧 8px margin，总宽超出容器 16px，Column/垂直 List 中右缘溢出 8px | [#8567](https://redirect.github.com/CopilotKit/CopilotKit/pull/8567) | 有 fix PR，今日持续更新 |
| 🟢 低（文档/安全指引） | Python Quickstart 缺 `azure-identity` 依赖、未声明 `single_user=True`、缺 fail-closed 鉴权示例 | [#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309) | 有 fix PR |
| ⚪ 微 | ADK 示例拼写错误（其一位于 system prompt 内，模型会读到拼写错误的指令）；`CODE_OF_CONDUCT.md` TOC 锚点因标题带编号而全部失效 | [#8584](https://redirect.github.com/CopilotKit/CopilotKit/pull/8584) / [#8583](https://redirect.github.com/CopilotKit/CopilotKit/pull/8583) | 有 fix PR |

**稳定性评估：** 无崩溃或回归报告，Issue 侧表面平静。最大风险点是 [#8434](https://redirect.github.com/CopilotKit/CopilotKit/pull/8434) 的安全修复尚未合并——公开端点的 guard 绕过与成本失控缺口当前仍处于暴露状态。

---

## 6. 功能请求与路线图信号

今日无用户提出的新功能请求（唯一 Issue 为追踪性质）。从在途 PR 可读出明确的路线图信号：

1. **MCP Apps 完全合规**（[#6824](https://redirect.github.com/CopilotKit/CopilotKit/issues/6824)）：下一阶段大概率围绕 display-mode、update-model-context、host-context、theme propagation 四类 host 能力补齐，从"协议接通"走向"完全符合 spec"——这是与 MCP 生态互操作的战略性投入，很可能构成下一个功能版本的主题。
2. **消息渠道扩展**（[#8580](https://redirect.github.com/CopilotKit/CopilotKit/pull/8580) / [#8573](https://redirect.github.com/CopilotKit/CopilotKit/pull/8573)）：iMessage、WhatsApp、SMS、RCS 作为"普通前端"接入的早期访问页已两版方案在途，暗示产品方向从 Web chat 走向多渠道消息平台，且离合并不远。
3. **框架矩阵平权**（[#8486](https://redirect.github.com/CopilotKit/CopilotKit/pull/8486)）：前端（Vue/Angular/RN/React SPA）× Agent 后端全组合真实 Quickstart，说明多框架支持是持续投入方向。
4. **发布与端点工程化**（[#8582](https://redirect.github.com/CopilotKit/CopilotKit/pull/8582) digest 钉版发布、[#8434](https://redirect.github.com/CopilotKit/CopilotKit/pull/8434) 端点加固）：指向生产就绪与成本治理。

---

## 7. 用户反馈摘要

> **数据局限说明：** 今日仅 1 条 Issue 活动，其评论正文未包含在数据中，直接用户反馈样本极少。以下痛点从 PR 描述（审计中发现的真实用户可感知问题）间接提炼，可信度较高但非 Issue 渠道原声。

- **搜索找不到该找的内容**：搜 "mastra" 排在首位的是 Intelligence 页而非 Mastra 文档；搜 "human in the loop" 完全不返回 HITL 页面（[#8432](https://redirect.github.com/CopilotKit/CopilotKit/pull/8432)）。
- **跟着文档走不通**：多个"从零开始"路径第一步即失败（[#8436](https://redirect.github.com/CopilotKit/CopilotKit/pull/8436)）；431 页指南端到端走查发现大量断链与失效步骤（[#8468](https://redirect.github.com/CopilotKit/CopilotKit/pull/8468)）。
- **示例代码与实际安装包不匹配**：2,704 个代码块与当前发布版本核对后发现偏差（[#8440](https://redirect.github.com/CopilotKit/CopilotKit/pull/8440)）。
- **导航与 SEO 混乱**：24 个页面标题均叫 "Quickstart"，无法区分（[#8433](https://github.com/CopilotKit/CopilotKit/CopilotKit/pull/8433)）。
- **Vue 渲染细节**：目录组件在 Column/List 中右缘溢出 8px（[#8567](https://redirect.github.com/CopilotKit/CopilotKit/pull/8567)）。
- **拖拽误触**：拖动文本选区经过聊天区会弹出附件 drop zone（[#8473](https://redirect.github.com/CopilotKit/CopilotKit/pull/8473)）。
- **使用场景画像**：用户正在 Vue / Angular / React Native 前端 + LangGraph / Mastra / ADK 后端的组合矩阵中使用 CopilotKit——文档栈专门为这些组合修复 Quickstart 即为佐证；Python 侧用户对鉴权与安全配置指引有明确需求（[#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309)）。

---

## 8. 待处理积压

| 项目 | 开启时间 | 积压时长 | 关注建议 |
|---|---|---|---|
| [#6824](https://redirect.github.com/CopilotKit/CopilotKit/issues/6824) MCP Apps 一致性追踪 | 2026-09-01 | ~3 个月 | 虽 11-26 仍有更新（不算失联），但建议拆分子任务并绑定目标版本，避免长期开放导致优先级模糊 |
| [#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309) Python Quickstart 修复 | 2026-11-10 | 17 天 | 文档栈中最久未合并的 PR，含安全指引内容，建议随栈尽早落地 |
| [#8473](https://redirect.github.com/CopilotKit/CopilotKit/pull/8473) 拖拽区修复（社区 PR） | 2026-11-18 | 9 天 | 社区贡献待评审，长时间无回应会挫伤外部贡献者 |
| 文档栈整体（~12 个 PR） | 2026-11-17 起 | ~10 天 | 栈式 PR 依赖严格合并顺序，24 条待合并积压的主要构成；[#8483](https://redirect.github.com/CopilotKit/CopilotKit/pull/8483) 为 do-not-merge 预览 PR，栈合入后需及时关闭清理 |
| [#8580](https://redirect.github.com/CopilotKit/CopilotKit/pull/8580) / [#8573](https://redirect.github.com/CopilotKit/CopilotKit/pull/8573) 双方案并存 | 2026-11-26 | 1 天 | 需尽快二选一并关闭另一个，防止 17 个增量提交造成分叉 |

---

**健康度小结：** 贡献者结构良好（核心团队 + 3 位社区贡献者 + 自动化 bot），PR 吞吐量高、工程纪律强（栈式 PR、staged→prod 发布流程、端到端验证）；风险在于合并积压（24 条）与唯一的安全修复 [#8434](https://redirect.github.com/CopilotKit/CopilotKit/pull/8434) 尚未落地。建议维护者优先处理：① #8434 安全合并；② #8580/#8573 方案决策；③ 文档栈按序合入并完成 #8582 生产发布。

---
*本报告基于 GitHub 快照数据自动生成；PR 评论数缺失（undefined），热点排序以更新时间与工作量为依据。*

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*