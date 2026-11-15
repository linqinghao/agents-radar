# 生成式 UI 生态日报 2026-11-15

> Issues: 6 | PRs: 24 | 覆盖项目: 4 个 | 生成时间: 2026-11-15 05:30 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告

**数据基线**：2026-11-15，覆盖 a2ui / OpenUI / json-render / CopilotKit 四个项目的 24 小时社区动态

---

## 1. 生态全景

生成式 UI 赛道正从概念验证期进入工程化深耕期：跨平台原生渲染是当前最明确的扩张方向——同一天内，SwiftUI 渲染器、Kotlin Multiplatform 端口、React Native 适配、Svelte SDK 四条路线在不同项目并行推进。各项目的工作重心已明显从功能新增转向流式正确性、校验语义与运行时稳定性等工程质量议题，且社区报告的 Bug 多为“静默出错”类边界问题，说明真实生产使用已相当深入。但需注意：四个项目当日 Release 合计为零、约 24 条 PR 更新无一确认合并，“社区输入活跃、审查吞吐不足”的剪刀差是全生态的共同画像。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | Release | 贡献者规模 | 当日特征 |
|---|---|---|---|---|---|
| **a2ui** | 3（全活跃，0 关闭） | 10（8 待合并 / 2 关闭） | 0 | ~10 人 | 两组当日 bug→fix 闭环，焦点集中于 web_core |
| **CopilotKit** | 2（全 OPEN） | 10（全待合并，0 合并/关闭） | 0 | 多位（含学生贡献计划） | 输入端活跃、合并吞吐为零 |
| **json-render** | 1（新开高质量 bug） | 1（待合并，SwiftUI 大型 PR） | 0 | 2 人 | 低量高质，战略性强 |
| **OpenUI** | 0 | 3（1 关闭 / 2 待合并） | 0 | 2 人（含 1 机器人） | 典型低强度维护日 |

**合计**：6 条 Issue、24 条 PR 更新、0 次发布。活跃度梯度清晰：a2ui ≈ CopilotKit > json-render > OpenUI。

---

## 3. 共同关注的功能方向

**① 跨平台 / 原生渲染（最强共识，3/4 项目）**
- **a2ui**：#4239 为 React Native 提供无 Lit 依赖入口、#3992 收录 a2ui-kmp 社区端口、#4026 优化 Swift core 流式解析性能
- **json-render**：#470 投入完整的 Swift/SwiftUI 原生渲染器（平台无关核心 + 渲染器 + 组件目录）
- **CopilotKit**：#5905 Svelte 5 SDK（积压 129 天）、#7760/#7811 功能同步覆盖 React/Vue/Angular 三端
- OpenUI 为唯一例外，其服务化定位不涉及渲染端

**② 流式场景下的正确性（隐性共识）**
- **a2ui**：#4240 流式数据未到位时的校验语义、#4026 渐进式解析避免超线性耗时
- **CopilotKit**：#8399 流式 Markdown 补全缺陷、#7494 虚拟化长线程滚动跳跃（48 天未决）
- **json-render**：Swift 核心设计已内置 JSONL 流式处理

**③ Schema / 校验层现代化**
- **a2ui**：#4229 zod 3→4 破坏性迁移、#3809 类型判定误排除
- **CopilotKit**：#8401 JSON Schema 转换器崩溃修复
- **json-render**：用户复现脚本即依赖 zod，生态通用基座地位可见一斑

**④ 运行时动态性与组件通信协议**
- **CopilotKit**：MCP Apps 协议体系化（#7811 模型上下文上报、#7760 全屏模式请求）
- **a2ui**：#3304 MessageProcessor 后置追加 catalog（待评审 4 周）

**⑤ 文档与上手体验**：四项目当日均有文档类活动（a2ui #4219/#4058、CopilotKit 四条文档 PR、OpenUI #1536 搜索 API 文档闭环）。

---

## 4. 差异化定位分析

| 维度 | a2ui | OpenUI | json-render | CopilotKit |
|---|---|---|---|---|
| **技术形态** | 多语言核心（TS/Dart/Swift）+ catalog 组件协议 | Gateway API 服务 + CLI 脚手架 + SDK | 轻量"JSON spec → UI"库 + directives 层 | 全栈 AI 副驾驶框架（前端 SDK + Python/LangGraph 后端） |
| **跨平台路线** | 各语言独立实现核心，强调跨核行为对齐 | 不适用（服务化定位） | 平台无关核心 + 渲染器适配器，预留 Kotlin/Compose、Flutter 空间 | 前端框架 SDK 矩阵横向铺开 |
| **目标用户** | 构建跨平台 agent UI 的开发者 | 使用生成/搜索 API 的商业化客户 | 需要声明式 UI 的 Web 开发者，正向 Apple 生态延伸 | 在应用中嵌入 AI 助手的全栈开发者（含企业自托管） |
| **成熟度信号** | 高修复密度迭代期，但 Release 节奏停滞 | 已商业化（搜索 API 计费文档化），社区参与度低 | 0.22.0 早期，架构先行 | v2 + 企业生产用户，审查债重 |

**关键架构分野**：a2ui 与 json-render 对跨平台给出了相反答案——前者是“多语言核心 + 行为对齐”（TS 核心向 Dart 核心既有规则看齐），后者是“单一平台无关核心 + 多渲染器适配”。CopilotKit 则在框架层做 SDK 矩阵，OpenUI 干脆绕开渲染端做服务化。四种路线尚无胜者，选型时应以目标平台与团队技术栈为锚。

---

## 5. 社区热度与成熟度

**热度排序：a2ui ≥ CopilotKit > json-render > OpenUI**

- **a2ui**：当日最活跃。24 小时约 10 位贡献者、两组“报障者即修复者”的当日闭环（#4240→#4241、#4238→#4239），自服务文化成熟；5 项在途 bug 中 4 项已有修复 PR，响应链路通畅。隐忧是 Release 停滞与 triage 积压。
- **CopilotKit**：输入端极为健康——当日新提 5 个 PR、学生贡献计划运转、#8399 报障当天即有社区修复跟进。但 10 个活跃 PR 零合并、6 个超过 3 周，审查带宽是明确瓶颈。
- **json-render**：量小质高。用户提交带最小复现脚本的精确版本锁定报告，贡献者愿意投入平台级 PR（#470 三级 Swift 包结构），社区深度虽小但忠诚度高。
- **OpenUI**：本窗口内唯一人类社区信号是一个沉寂 140 天的 PR 更新（#685），其余为机器人与维护者活动，社区参与度是四者中最弱的。

**成熟度谱系**：CopilotKit 最商业化成熟（企业自托管、付费场景）→ OpenUI 商业化运营但社区空心化 → a2ui 处于快速迭代扩张期 → json-render 处于早期战略布局期。共同风险：审查积压（最长待决 PR：OpenUI 140 天、CopilotKit 129 天、a2ui 约 4 周）。

---

## 6. 值得关注的趋势信号

**① 原生渲染成为下一主战场。** SwiftUI、KMP、RN 三线同日推进并非巧合。对开发者的参考：选型时务必核查目标平台渲染器的可用性与路线图，Web-only 的框架天花板正在显现。

**② Widget/模型通信协议标准化萌芽。** CopilotKit 的 MCP Apps 协议（状态上报、显示模式请求）与 a2ui 的 catalog 动态扩展，本质上都在解决“生成式组件如何与宿主和模型对话”。若 MCP Apps 演化为事实标准，将影响整个生态的组件接口设计。

**③ 流式正确性是新的质量分水岭。** 三个项目的核心 bug 均发生在流式过程中（校验时机、渐进解析、部分 Markdown 补全、虚拟化滚动）。评估框架时，应重点考察其在流式场景下的测试覆盖与语义定义，而非静态渲染能力。

**④ Schema 栈迁移波将至。** a2ui 的 zod 4 破坏性迁移（#4229）一旦合并，所有自建 catalog 的用户都需要跟进。依赖深度定制 schema 的团队应预留迁移窗口，并关注各项目的 breaking change 政策。

**⑤ 注入面与 Unicode 安全浮出水面。** json-render 的 `$t` 参数二次替换构成格式字符串注入面、a2ui 的正则可空组计数可构造永不返回的 RegExp、`$truncate` 切断代理对——生成式 UI 直接消费 LLM 输出与用户数据，其注入面与编码安全值得专项审计。

**⑥ 审查吞吐是比 star 数更真实的健康度指标。** 四项目当日零合并、零发布，贡献者挫败风险正在累积（OpenUI 的 140 天与 CopilotKit 的 129 天 PR 是警示样本）。开发者在选型时，建议将 merge 频率、PR 中位年龄纳入评估——一个输入活跃但无法收敛的项目，功能兑现周期可能远超预期。

---

**一句话总结**：生成式 UI 的竞争正从“能否把 JSON 渲染成界面”转向“能否在流式、跨平台、不可信输入的约束下稳定地渲染”，工程深度与社区治理能力将取代功能清单，成为下一阶段的胜负手。

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目动态日报

**仓库**：[a2ui-project/a2ui](https://github.com/a2ui-project/a2ui) | **日期**：2026-11-15 | **数据窗口**：过去 24 小时

**核心数字**：Issue 更新 3 条（新开/活跃 3，关闭 0）｜PR 更新 10 条（待合并 8，合并/关闭 2）｜版本发布 0｜涉及独立贡献者约 10 人

---

## 1. 今日速览

- 今日活跃度**中高**：13 条议题流更新、约 10 位不同贡献者参与，覆盖 web_core、Swift core、catalog-mcp、文档站与生态目录。
- **web_core 是绝对焦点**：3 条 Issue 全部指向 web_core，10 条 PR 中 7 条涉及 web_core，TypeScript 核心处于高密度迭代期。
- 出现**两组“报 bug + 自提修复”闭环**：[#4240](https://redirect.github.com/a2ui-project/a2ui/issues/4240)→[#4241](https://redirect.github.com/a2ui-project/a2ui/pull/4241)（同日完成）、[#4238](https://redirect.github.com/a2ui-project/a2ui/issues/4238)→[#4239](https://redirect.github.com/a2ui-project/a2ui/pull/4239)（隔日完成），报告者即修复者，贡献者自服务文化成熟。
- 社区诉求集中向**跨平台兼容**（React Native、Kotlin Multiplatform）与**运行时动态扩展**（MessageProcessor 后置 catalog）两条主线汇聚。
- 今日无版本发布，且近期无 Release 记录；破坏性变更 PR #4229（zod 4 迁移）在途，预计将定义 TS 包下一次重大升级的主题。

---

## 2. 项目进展

### 2.1 今日结束生命周期的 PR（2 条）

| PR | 内容 | 意义 |
|---|---|---|
| [#4026](https://redirect.github.com/a2ui-project/a2ui/pull/4026) | perf(swift/core)：子组件到达时仅解析变化的子槽位 | 针对流式 agent 场景的渐进式解析，消除父组件全量子树重解析带来的超线性耗时，是流式渲染性能的关键优化 |
| [#4058](https://redirect.github.com/a2ui-project/a2ui/pull/4058) | docs(react)：修正客户端安装指南 React 章节 | 修正错误导出名（实际为 `A2uiSurface`、`useA2uiSurface`）及 `MessageProcessor` 描述错误 |

> 注：两条 PR 仓库状态均为 CLOSED（而非 MERGED），合并与否建议在仓库页面二次确认；无论合并还是另案处理，均已走完评审闭环。

### 2.2 待合并 PR 中的重要推进（8 条择要）

- **[#4241](https://redirect.github.com/a2ui-project/a2ui/pull/4241)（今日新开）**：未解析的函数参数交还函数本身处理，而非抛 `EXPRESSION_ERROR`；使 TS web_core 对齐 Dart `a2ui_core` 的既有规则，属跨核心行为一致性补齐。
- **[#4237](https://redirect.github.com/a2ui-project/a2ui/pull/4237)（今日更新）**：`analyzeRegex` 拒绝"可空组的计数重复"模式，消除构造出永不返回的 RegExp 的可能，关闭 [#4236](https://redirect.github.com/a2ui-project/a2ui/issues/4236)。
- **[#3304](https://redirect.github.com/a2ui-project/a2ui/pull/3304)（今日更新）**：允许 `MessageProcessor` 构建后追加 catalog，避免客户端为新增 catalog 重建处理器、丢失全部已挂载 surface。已等待评审约 4 周。
- **[#3992](https://redirect.github.com/a2ui-project/a2ui/pull/3992)（今日更新）**：将 [a2ui-kmp](https://github.com/BinaryTape/a2ui-kmp)（Kotlin Multiplatform 渲染器移植）纳入社区渲染器目录。
- **[#4239](https://redirect.github.com/a2ui-project/a2ui/pull/4239)**：为 basic catalog v1 新增无 Lit 依赖的 API 入口，直击 React Native 无 DOM 场景。
- **[#4229](https://redirect.github.com/a2ui-project/a2ui/pull/4229)**：TS 包从 zod 3.25 + `zod-to-json-schema` 迁移至 zod 4，**破坏性变更**（自建 catalog 的 schema 必须改用 zod 4），修复 #3812。
- **[#3808](https://redirect.github.com/a2ui-project/a2ui/pull/3808)**：basic catalog Modal 改用 top layer 渲染，修复宿主 UI 创建层叠上下文时遮挡弹窗的问题（#3807）。
- **[#4219](https://redirect.github.com/a2ui-project/a2ui/pull/4219)**：文档站搜索弹窗补齐键盘导航与空状态。

**整体判断**：今日无合并落地的功能性变更，但修复管道充盈——待合并的 8 条 PR 中 5 条为 bug 修复、2 条为平台/生态扩展、1 条为破坏性升级，项目处于“修复密度高于功能密度”的稳定化阶段。

---

## 3. 社区热点

**① Issue [#3809](https://redirect.github.com/a2ui-project/a2ui/issues/3809)（3 条评论，今日仍有更新，P2）**
当前唯一有评论互动的条目：`generic-binder.ts` 中 `isDynamicDef` 因 `typeName !== 'ZodObject'` 判断，将直接作为 schema 使用的 `DataBinding` 与 `FunctionCall` 错误排除。该问题与 [#4229](https://redirect.github.com/a2ui-project/a2ui/pull/4229) 的 zod 4 迁移同属 schema 层重构主题，存在协同修复空间——这是其持续被讨论的深层原因：**社区在等待 schema 层的统一定调**。

**② PR [#4229](https://redirect.github.com/a2ui-project/a2ui/pull/4229)（zod 4 迁移，今日有更新）**
唯一带 `!`（breaking）标记的 PR，影响所有以自定义 zod 构建 catalog 的用户，是当前最具“下一版本风向标”意义的变更。

**③ [#4240](https://redirect.github.com/a2ui-project/a2ui/issues/4240) → [#4241](https://redirect.github.com/a2ui-project/a2ui/pull/4241) 快速闭环**
retz8（同时是 #3304 的作者）当日报障、当日提修，显示核心贡献者深度投入，也印证流式数据场景下的校验体验是高频真实痛点。

> 数据说明：本期所有条目 👍 反应数均为 0，热度判断主要基于评论数与更新频率。

---

## 4. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 修复状态 |
|---|---|---|
| **高** | [#4236](https://redirect.github.com/a2ui-project/a2ui/issues/4236)：正则可空组的计数重复导致 RegExp 对合法输入永不返回（挂起 / 潜在 ReDoS 类风险） | 修复 PR [#4237](https://redirect.github.com/a2ui-project/a2ui/pull/4237) 待合并，今日活跃 |
| **高**（平台阻断） | [#4238](https://redirect.github.com/a2ui-project/a2ui/issues/4238)：React Native（Metro + `browser` 条件、无 DOM）下 basic catalog 加载 Lit 报 `ReferenceError: HTMLElement is not defined` | 修复 PR [#4239](https://redirect.github.com/a2ui-project/a2ui/pull/4239) 已提交，报告者自提 |
| **中** | [#4240](https://redirect.github.com/a2ui-project/a2ui/issues/4240)（**今日新报**）：数据未到位时字段校验触发 `EXPRESSION_ERROR` 而非正常校验失败 | 修复 PR [#4241](https://redirect.github.com/a2ui-project/a2ui/pull/4241) **当日提交** |
| **中** | #3807：Modal 在宿主创建层叠上下文时被宿主 UI 遮挡，且无键盘焦点管理 | 修复 PR [#3808](https://redirect.github.com/a2ui-project/a2ui/pull/3808) 评审中（已 2 周） |
| **中**（P2） | [#3809](https://redirect.github.com/a2ui-project/a2ui/issues/3809)：`isDynamicDef` 误排除 `DataBinding`/`FunctionCall` 的直接 schema 用法 | 暂无专属修复 PR；可借 #4229 zod 4 迁移一并处理，需维护者确认 |

**稳定性结论**：今日无崩溃/回归类报告，问题集中在**边界输入、无 DOM 运行环境、层叠上下文**三类；5 项中 4 项已有修复 PR 在途，修复响应覆盖率良好。

---

## 5. 功能请求与路线图信号

| 信号 | 来源 | 判断 |
|---|---|---|
| 运行时动态扩展 | [#3304](https://redirect.github.com/a2ui-project/a2ui/pull/3304)：MessageProcessor 后置 catalog | 需求明确、实现就绪、仅卡在评审；若合并将显著改善动态 agent 客户端的扩展模型，**建议优先纳入下一版本** |
| 跨平台渲染矩阵 | [#4239](https://redirect.github.com/a2ui-project/a2ui/pull/4239)（RN 无 Lit 入口）＋ [#3992](https://redirect.github.com/a2ui-project/a2ui/pull/3992)（KMP 社区端口） | "web 之外”的平台支持是明确趋势，官方入口与社区端口双线推进 |
| Schema 栈现代化 | [#4229](https://redirect.github.com/a2ui-project/a2ui/pull/4229)：zod 4 | 一旦合并将锁定 TS 包下个大版本主题，所有 catalog 构建方需迁移 schema |
| 文档体验 | [#4219](https://redirect.github.com/a2ui-project/a2ui/pull/4219)、[#4058](https://redirect.github.com/a2ui-project/a2ui/pull/4058) | 低风险持续改进，新人上手体验在稳步补齐 |

**综合判断**：下一版本大概率围绕 **zod 4 迁移 + 跨平台入口 + MessageProcessor 动态性** 三条主线。

---

## 6. 用户反馈摘要

- **流式数据下的校验语义**（[#4240](https://redirect.github.com/a2ui-project/a2ui/issues/4240)）：agent 逐条推送数据时，“数据未到先画校验”导致每轮求值抛 `EXPRESSION_ERROR`；用户明确期望与 Dart `a2ui_core` 行为对齐——**多语言核心行为一致性**是核心用户的强预期。
- **React Native 集成受阻**（[#4238](https://redirect.github.com/a2ui-project/a2ui/issues/4238)）：真实用户在 RN/Metro 环境被 DOM 依赖直接阻断，说明 web_core 的“浏览器条件解析”假设在混合端失效；报告者当日自提修复，反映需求紧迫度高。
- **高级 schema 组合的边界**（[#3809](https://redirect.github.com/a2ui-project/a2ui/issues/3809)）：深度用户已在将 `DataBinding`/`FunctionCall` 直接用作 schema，触发类型判定误排除——工具链需要跟上实际用法复杂度。
- **生态外溢**（[#3992](https://redirect.github.com/a2ui-project/a2ui/pull/3992)）：Kotlin Multiplatform 端口已落地（Android 用官方产物、桌面 JVM/iOS 编译上游源码），渲染端生态正向多平台复制。
- **文档准确性高度敏感**（[#4058](https://redirect.github.com/a2ui-project/a2ui/pull/4058)）：导出名大小写不符（`A2UISurface` vs `A2uiSurface`）即导致集成失败——API 命名一致性与文档同步是被低估的体验成本。

---

## 7. 待处理积压

| 项目 | 开启日期 | 等待时长 | 状态 | 建议 |
|---|---|---|---|---|
| PR [#3304](https://redirect.github.com/a2ui-project/a2ui/pull/3304) | 2026-10-17 | ~4 周 | needs review | 完整度高、解决明确痛点，建议尽快安排评审 |
| Issue [#3809](https://redirect.github.com/a2ui-project/a2ui/issues/3809) | 2026-11-01 | 2 周 | P2、3 评论、今日仍活跃 | 与 #4229 同域，建议合并定调、协同修复 |
| PR [#3808](https://redirect.github.com/a2ui-project/a2ui/pull/3808) | 2026-11-01 | 2 周 | needs review | 修复 #3807 的视觉阻断，Angular 用户可直接感知 |
| PR [#4229](https://redirect.github.com/a2ui-project/a2ui/pull/4229) | 2026-11-13 | 2 天 | needs-triage | 破坏性变更，越早定夺越能减少用户重复迁移成本 |
| [#4237](https://redirect.github.com/a2ui-project/a2ui/pull/4237) / [#4239](https://redirect.github.com/a2ui-project/a2ui/pull/4239) 等 | — | — | needs-triage | triage 标签持续积压，建议例行清理 |

---

## 健康度小结

**积极面**：贡献者多样性好（24h 内约 10 人）、两组 bug→fix 闭环速度极快、5 项在途 bug 中 4 项已有修复 PR，响应链路通畅；社区从 web 延伸至 RN、KMP，生态外扩信号明确。

**风险面**：Release 节奏停滞（近期无任何发布记录），评审与 triage 积压上升——若 #3304、#4229 等关键 PR 长期悬置，当前的参与热度可能转化为贡献者挫败感。**建议维护者优先处理评审队列，并规划一次包含 zod 4 迁移的版本发布以收敛破坏性变更预期。**

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目动态日报

**日期：** 2026-11-15 ｜ **仓库：** [thesysdev/openui](https://github.com/thesysdev/openui) ｜ **统计窗口：** 过去 24 小时

---

## 1. 今日速览

今日 OpenUI 呈现典型的低强度维护日形态：过去 24 小时无新增 Issue、无新版本发布，活动全部集中在 PR 侧（3 条更新：1 条已关闭，2 条待合并）。唯一完结的工作是 Gateway 搜索 API 文档 PR 的关闭；其余两条均为 chore 类维护（依赖刷新与工具链版本统一）。值得注意的是，沉寂约 140 天的社区 PR #685 在今日重新出现更新，是本日最值得关注的社区信号。整体活跃度偏低，但无任何负面事件，项目健康度平稳。

---

## 2. 项目进展

### 已关闭：Gateway 搜索 API 文档（PR #1536）
- **链接：** https://redirect.github.com/thesysdev/openui/pull/1536 ｜ 作者： ritvik-thesys ｜ 11-03 创建 → 11-14 关闭，生命周期 11 天
- **内容：** 新增 `gateway/api/web-search.mdx` 与 `gateway/api/image-search.mdx` 两个文档页，覆盖 `POST /v1/search/web` 和 `POST /v1/search/images` 的请求/响应结构、工具调用示例、数据格式、计费与错误码；同步更新 `gateway/pricing-credits.mdx`（摘要截断，细节以 PR 页面为准）。
- **意义：** 若已合入主线，则 Gateway 的 Web/图片搜索能力完成了"端点 + 计费口径 + 错误语义"的完整文档闭环，对外可用性显著提升。
- **说明：** 数据标签为 CLOSED，未区分"已合并"与"关闭未合并"，建议在仓库页面确认最终合并状态。

### 待合并：模板与示例依赖刷新（PR #1629）
- **链接：** https://redirect.github.com/thesysdev/openui/pull/1629 ｜ 作者： thesys-pr-creator[bot] ｜ 11-12 创建 → 11-14 更新
- **内容：** 将 CLI templates、overlays、examples 升级至 `@openuidev/*` 最新已发布版本，刷新 npm lockfile，且 credential-free 验证契约全部通过。
- **意义：** 自动化维护流水线运转正常；同时侧面印证上游 `@openuidev/*` 包近期有新发布动作。

### 待合并：pnpm catalog 统一 tsx 版本（PR #685）
- **链接：** https://redirect.github.com/thesysdev/openui/pull/685 ｜ 作者： Shinyaigeek ｜ 06-28 创建 → 11-14 更新
- **内容：** 将 `tsx: ^4.19.2` 收敛进 `pnpm-workspace.yaml` 的 `catalog:`，`react-ui` 通过 `catalog:` 协议引用，使 tsx 与其他已集中管理的 devDependencies 保持一致。
- **意义：** 今日更新可能为 rebase 或分支同步，等待维护者审阅。

**净进展评估：** 单日增量为"文档补全 1 个 API 域 + 维护性 PR 2 项推进"，属稳态维护节奏，无功能性大步进。

---

## 3. 社区热点

本日无 Issue 更新，且 PR 评论数据未采集（显示 undefined）、所有条目 👍 均为 0，因此**不存在传统意义上的讨论热点**。可圈可点的信号如下：

- **[PR #685](https://redirect.github.com/thesysdev/openui/pull/685)**（Shinyaigeek）：创建于 2026-06-28 的社区 PR 在今日重新出现活动，是本窗口内唯一由人类社区贡献者驱动的条目。其诉求是 devDependencies 的版本单一事实源（pnpm catalog 集中管理），属于工程一致性诉求而非功能诉求。
- **[PR #1629](https://redirect.github.com/thesysdev/openui/pull/1629)**（机器人）：0 reaction、无讨论，属流水线常规产物，不构成热点。

---

## 4. Bug 与稳定性

- **过去 24 小时无新增 Bug、崩溃或回归报告（0 条 Issue）。**
- 间接稳定性信号：
  - [PR #1629](https://redirect.github.com/thesysdev/openui/pull/1629) 的 credential-free 验证契约全部通过，表明模板/示例的自动化回归验证链路健康；
  - [PR #685](https://redirect.github.com/thesysdev/openui/pull/685) 落地后将消除 `tsx` 版本漂移风险（开发工具链层面，严重度：低）。
- **提示：** 零 Issue 日不能直接等同于零缺陷，仅说明本窗口内无用户上报，建议结合周级趋势观察。

---

## 5. 功能请求与路线图信号

本日无新功能请求（0 条 Issue），以下为基于 PR 活动的**推断性信号**（置信度中等，无用户需求输入可交叉验证）：

1. **搜索 API 持续产品化**（依据 [PR #1536](https://redirect.github.com/thesysdev/openui/pull/1536)）：文档同时覆盖 pricing/credits，暗示 web/image search 端点正从能力建设走向计费化、规模化服务，可能是 Gateway 近期的重点方向。
2. **CLI 脚手架生态保持发布节奏**（依据 [PR #1629](https://redirect.github.com/thesysdev/openui/pull/1629)）：模板需对齐 `@openuidev/*` 的"最新已发布版本"，说明上游包近期有发布，模板维护被作为发布后的例行收尾，可预期脚手架体验持续小幅迭代。
3. **工程基础设施收敛**（依据 [PR #685](https://redirect.github.com/thesysdev/openui/pull/685)）：若 pnpm catalog 集中版本管理被合并，将成为后续依赖治理的基线。

---

## 6. 用户反馈摘要

本窗口内无 Issue 评论、无新 Issue，**无可靠的用户反馈数据可供提炼**。为避免臆测，本节今日从略；待后续出现带评论的 Issue/PR 后再行汇总。

---

## 7. 待处理积压

| 条目 | 状态 | 未决时长 | 风险与建议 |
|---|---|---|---|
| [PR #685](https://redirect.github.com/thesysdev/openui/pull/685) | OPEN，待审 | 自 2026-06-28 起 **约 140 天** | ⚠️ **主要积压项**。社区贡献长期悬置会挫伤外部贡献者积极性；建议维护者尽快 review/merge 或给出明确修改意见 |
| [PR #1629](https://redirect.github.com/thesysdev/openui/pull/1629) | OPEN，待批 | 3 天 | 机器人依赖刷新 PR 等待人工批准；若长期滞留会推迟模板使用者获得上游修复，建议纳入例行审批 |

**数据局限说明：** 本日报仅覆盖 24 小时窗口，无法枚举完整的 Issue 积压清单；建议每周对全部 open issues 及无响应条目做一次全量扫描以补充本节。

---

## 当日健康度小结

- **活跃度：** 低（0 Issue / 3 PR / 0 Release）
- **维护连续性：** 良好（机器人依赖维护 + 维护者文档推进双轨并行）
- **风险项：** 单一长期未决社区 PR（#685）
- **整体判断：** 平稳维护态，无红灯信号。

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render 项目动态日报

**日期**：2026-11-15 | **仓库**：[vercel-labs/json-render](https://github.com/vercel-labs/json-render)

**数据速览**：Issues 更新 1 条（新开 1 / 关闭 0）｜PR 更新 1 条（待合并 1 / 合并 0）｜新版本发布 0 个

---

## 一、今日速览

过去 24 小时项目处于**平静迭代期**，无新版本发布、无 PR 合并。社区活动由两条高质量内容构成：一条针对 `@json-render/directives` 0.22.0 的正确性 Bug 报告（[#474](https://redirect.github.com/vercel-labs/json-render/issues/474)），以及持续打磨中的 Swift/SwiftUI 原生渲染器大型 PR（[#470](https://redirect.github.com/vercel-labs/json-render/pull/470)，今日仍有更新）。活跃度绝对值偏低（1 Issue + 1 PR），但两条内容均具战略意义：前者指向 i18n 场景下的静默出错风险，后者代表项目向 Apple 生态的跨平台扩张。整体健康度良好，无紧急事故。

## 二、版本发布

今日无新版本发布。当前最新版本仍为 `@json-render/core` 与 `@json-render/directives` 的 **0.22.0**（据 Issue #474 报告确认）。若 #474 中的缺陷确认，预计维护者需发布 0.22.1 级别的 patch。

## 三、项目进展

今日**无 PR 被合并或关闭**，项目代码主干无增量。但需注意：

- **PR #470（Swift package + SwiftUI renderer）** 自 11-11 创建以来持续更新至今（第 4 天），仍处于待合并状态。该 PR 新增 `swift/JSONRender` 目录，包含平台无关核心（spec 解码、校验、表达式、actions、状态管理、JSONL 流式处理、渲染树）+ `JSONRenderSwiftUI` 渲染器 + 原生 SwiftUI 组件目录（cards、metrics、badges、alerts、lists、progress、switches、Swift Charts），体量相当于一次平台级扩展。

短期内项目向前推进有限，#470 的持续活跃表明跨平台路线仍在推进中，但尚未落地到主干。

## 四、社区热点

今日仅两条活跃内容，均列为热点：

**1. [Issue #474](https://redirect.github.com/vercel-labs/json-render/issues/474) — directives 双缺陷报告**（trackoor，11-14 创建）
- 报告质量高：锁定精确版本（directives/core 0.22.0 + main `f5c1240`）、提供 `repro.mjs` 最小复现脚本、明确依赖（zod）
- 目前 0 评论、0 👍，尚未获得维护者 triage（提交未满 24 小时，属正常）
- **背后诉求**：用户已在生产环境将 directives 层用于 i18n（`$t`）与文本截断（`$truncate`）组合场景，需要可靠的多语言文本渲染能力

**2. [PR #470](https://redirect.github.com/vercel-labs/json-render/pull/470) — Swift/SwiftUI 原生渲染器**（ctate，11-11 创建）
- 本周最活跃的 PR，持续迭代更新中
- **背后诉求**：将 json-render 的 "JSON spec → UI" 能力从 Web 延伸至 iOS/macOS 原生应用，服务 Apple 生态开发者与 AI 生成 UI 的原生落地场景

## 五、Bug 与稳定性

今日新增 1 条 Bug 报告，含两个缺陷，**均无关联 fix PR**，按严重程度排列：

**🔴 中高 | `$t` 参数再替换缺陷**（[Issue #474](https://redirect.github.com/vercel-labs/json-render/issues/474)）
`$t` 指令在展开翻译字符串中的替换模式后，会对参数值**再次执行模式替换与参数代入**。后果：
- 参数中若含有占位符样式文本，会被意外展开，导致输出内容被静默改写（正确性问题，无报错、排查成本高）
- 若参数来自不可信输入（如用户昵称、动态内容），构成**格式字符串注入面**，可干扰最终渲染结果

**🟡 中 | `$truncate` 切断代理对**（[Issue #474](https://redirect.github.com/vercel-labs/json-render/issues/474)）
截断逻辑按 UTF-16 码元切分，可能在代理对中间截断（emoji、BMP 之外的 CJK 扩展字符等），产生含孤立代理项的非法 Unicode 字符串，引发下游渲染乱码或异常。

> 建议：`$t` 问题涉及潜在注入语义，优先 triage；`$truncate` 修复方案明确（按 code point 边界截断），可与前者打包为一次 patch 发布。

## 六、功能请求与路线图信号

- **SwiftUI 原生渲染器（PR #470）是最强路线图信号**。一旦合并，json-render 将从 JS/Web 库升级为跨平台 UI 协议实现。尤其值得注意的是其**平台无关核心（`JSONRenderCore`）的架构设计**——这为后续 Kotlin/Compose、Flutter 等其他原生渲染器预留了空间。若该架构方向被维护团队采纳，可能定义项目下一阶段的主线，值得在下次版本说明或 RFC 中关注官方表态。
- Issue #474 虽为 Bug 报告，但其 i18n + truncate 的组合使用场景侧面反映**国际化深度使用需求**，修复过程中顺带建立 directives 层的 Unicode 安全处理规范（占位符转义、码点安全操作）将是合理衍生方向。

## 七、用户反馈摘要

今日无 Issue 评论增量（#474 评论数为 0），反馈提炼自 Issue 正文与 PR 内容：

- **痛点**：directives 层的两个缺陷均属"**静默出错**"类——不抛异常但输出错误内容，且发生在 i18n 多语言文本这种对正确性高度敏感的场景，用户排查成本高
- **正面信号 1**：社区用户工程素养高（精确版本锁定 + 最小复现脚本），同时反映项目的版本管理与文档足够清晰，用户能快速定位问题版本
- **正面信号 2**：PR #470 作者投入了完整的 core + renderer + 组件目录三级 Swift 包结构，说明深度用户愿意为项目贡献**平台级**扩展，社区贡献意愿强

## 八、待处理积压

基于本次 24 小时增量数据可见的待办（注：完整长期积压清单需结合全量 open issues/PRs 分析）：

| 条目 | 状态 | 建议动作 |
|---|---|---|
| [Issue #474](https://redirect.github.com/vercel-labs/json-render/issues/474) | 开启 1 天，0 回应 | 尽快 triage；`$t` 注入语义需评估是否升级为 security 议题 |
| [PR #470](https://redirect.github.com/vercel-labs/json-render/pull/470) | 开启 4 天，持续更新 | 体量大、review 成本高，建议维护者给出明确 review 时间表或**分批合并策略**（如先合 core，再合 renderer/组件目录），避免长期悬置导致贡献者疲劳 |

---

*本报告基于过去 24 小时 GitHub 增量数据自动生成，链接均指向对应 Issue/PR 原文。*

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报

**项目**: [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | **日期**: 2026-11-15

---

## 1. 今日速览

过去 24 小时，CopilotKit 呈现**社区贡献输入活跃、但合并吞吐为零**的典型状态：2 条 Issue 更新（全部 OPEN），10 条 PR 更新（全部待合并，无一合并或关闭），无新版本发布。值得注意的是，10 个活跃 PR 中有 5 个是昨日（11-14）新提交的，且集中于小型修复与文档修正，来自多位不同贡献者，叠加 #7494 上 "reserved for students" 标签，显示出社区冲刺/学生贡献计划的活跃迹象。Bug 响应链条值得关注：Issue [#8399](https://redirect.github.com/CopilotKit/CopilotKit/issues/8399) 提出当天即有社区修复 PR [#8400](https://redirect.github.com/CopilotKit/CopilotKit/pull/8400) 跟进，体现了健康的社区互助氛围。主要隐忧是 PR 审查积压——多个功能 PR 已停留 3 周以上，维护者审查带宽可能成为瓶颈。

---

## 2. 版本发布

今日无新版本发布。最新主干变更仍停留在审查管线中，未进入发布通道。

---

## 3. 项目进展

**今日无任何 PR 被合并或关闭（0/10）**，但活跃 PR 管线内容扎实，可按方向归类如下：

| 类别 | PR | 内容 | 状态 |
|---|---|---|---|
| MCP Apps | [#7811](https://redirect.github.com/CopilotKit/CopilotKit/pull/7811) | `ui/update-model-context`：widget 向模型上报自身状态（React/Vue/Angular） | 待审查，开放 32 天 |
| MCP Apps | [#7760](https://redirect.github.com/CopilotKit/CopilotKit/pull/7760) | `ui/request-display-mode`：widget 请求全屏显示模式 | 待审查，开放 36 天 |
| 框架扩张 | [#5905](https://redirect.github.com/CopilotKit/CopilotKit/pull/5905) | Svelte 5 SDK 初始支持 | 待审查，开放 129 天 |
| 运行时修复 | [#7826](https://redirect.github.com/CopilotKit/CopilotKit/pull/7826) | Intelligence Runner 持久性、重放失败与重放错误修复（多 commit 分离，可独立回滚） | 待审查，开放 31 天 |
| 核心修复 | [#8400](https://redirect.github.com/CopilotKit/CopilotKit/pull/8400) / [#8401](https://redirect.github.com/CopilotKit/CopilotKit/pull/8401) | Markdown 补全缺陷 / JSON Schema 转换器崩溃修复 | 昨日新提交 |
| 文档/示例 | [#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309) / [#7971](https://redirect.github.com/CopilotKit/CopilotKit/pull/7971) / [#8398](https://redirect.github.com/CopilotKit/CopilotKit/pull/8398) / [#8402](https://redirect.github.com/CopilotKit/CopilotKit/pull/8402) | Python 快速上手补全 / FastAPI 认证 starter / OpenFuse 更名链接 / 死链修复 | 待审查 |

**评估**：项目功能层面正沿「MCP Apps 协议完善 + 多框架覆盖 + Python 生态」三条线推进，但今日实际落地进度为零，全部进展停留在候选状态。

---

## 4. 社区热点

**🔥 最活跃：[#7494](https://redirect.github.com/CopilotKit/CopilotKit/issues/7494) — v2 聊天虚拟化线程发送消息时视图上跳**（5 条评论，今日有更新）

该 Issue 开放已 48 天，是当前讨论热度最高的话题。核心诉求：长对话（>50 条消息触发虚拟化）场景下发送消息会导致视图上跳 10–20 条消息、屏幕短暂大面积空白，约 1.5 秒后才滑回底部，**10 次运行 100% 复现**。"reserved for students" 标签表明其可能已被纳入学生贡献计划分配处理。用户对 v2 `CopilotChat` 的滚动稳定性有明确的不满，且该问题直击聊天产品的核心体验。

**⚡ 快速响应案例：[#8399](https://redirect.github.com/CopilotKit/CopilotKit/issues/8399) → [#8400](https://redirect.github.com/CopilotKit/CopilotKit/pull/8400)**

`completePartialMarkdown` 渲染缺陷（详见下节）在 11-14 报告当天即由社区贡献者 tomwangcn 提交修复 PR，形成「报告—修复」闭环，是社区自愈能力的正面样本。

---

## 5. Bug 与稳定性

按严重程度排列（标注修复状态）：

| 严重度 | 问题 | 来源 | 修复状态 |
|---|---|---|---|
| 🔴 高 | 自托管 Intelligence + LangGraph 部署中运行失败，报 "Runner connection dropped"，背后涉及多个运行时缺陷 | PR [#7826](https://redirect.github.com/CopilotKit/CopilotKit/pull/7826) 描述 | ✅ 有 fix PR，待审查 |
| 🔴 高 | JSON Schema 转换器遇无类型数组/缺失 items 时抛 `TypeError: Cannot read properties of undefined (reading '$ref')` 崩溃 | PR [#8401](https://redirect.github.com/CopilotKit/CopilotKit/pull/8401) 描述 | ✅ 有 fix PR，待审查 |
| 🟡 中 | [#7494](https://redirect.github.com/CopilotKit/CopilotKit/issues/7494)：v2 虚拟化长线程发送消息视图上跳，10/10 复现 | Issue | ❌ 未见对应 fix PR |
| 🟡 中低 | [#8399](https://redirect.github.com/CopilotKit/CopilotKit/issues/8399)：`completePartialMarkdown` 对已完整文本追加多余闭合标记，渲染出 `snake_case_`、`2 * 3 = 6*`、`arr[0] to read it.]`、`- [ ] buy milk]` 等字面残留 | Issue | ✅ 有 fix PR [#8400](https://redirect.github.com/CopilotKit/CopilotKit/pull/8400)，待审查 |

**要点**：两个高严重度问题均通过 fix PR 描述暴露（用户未单独开 Issue），其中 #7826 影响生产环境的自托管部署，修复拆分为独立 commit 并各自带测试，工程质量较高；#8400/#8401 为当日新增修复，审查后可快速止血。**#7494 是当前唯一无修复方案且持续活跃的 Bug**，需要重点关注。

---

## 6. 功能请求与路线图信号

结合 PR 方向，可识别出三条清晰的路线图信号：

1. **MCP Apps 协议体系化推进**：贡献者 yannj-fr 连续提交 [#7760](https://redirect.github.com/CopilotKit/CopilotKit/pull/7760)（全屏显示模式）与 [#7811](https://redirect.github.com/CopilotKit/CopilotKit/pull/7811)（模型上下文上报），均覆盖 React/Vue/Angular 三端，且 #7811 采用默认关闭的 opt-in 设计。两个 PR 显示 MCP Apps widget 通信协议正被系统性补全，是当前最明确的投入方向。
2. **框架版图扩张**：[#5905](https://redirect.github.com/CopilotKit/CopilotKit/pull/5905) 的 Svelte 5 SDK 支持若合并，将把前端框架覆盖从 React/Vue/Angular 扩展至第四极，但该 PR 已积压 4 个多月，纳入节奏存疑。
3. **Python/LangGraph 生态深耕**：[#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309)（Python 快速上手安全补全）与 [#7971](https://redirect.github.com/CopilotKit/CopilotKit/pull/7971)（FastAPI 认证 starter，含用户身份注入 agent 的示例）共同指向对 Python 后端开发者的获取投入。

**下一版本预判**：#8400/#8401 两类小型核心修复最可能先行进入下一个 patch 版本；MCP Apps 两项能力若完成审查，有望构成下一个 minor 版本的功能主体。

---

## 7. 用户反馈摘要

从 Issue 与 PR 描述中提炼的真实用户痛点：

- **长会话体验受损**（#7494）：重度用户在 50+ 消息的长线程中每次发消息都会遭遇视图跳动与空白屏，等待 1.5 秒才恢复。反馈语气显示这是高频、稳定复现的体验硬伤，影响对 v2 Chat 的信任。
- **渲染细节挑剔度上升**（#8399）：用户已细致到关注 `snake_case`、数学表达式 `2 * 3`、数组索引 `arr[0]`、任务列表等场景下的标点残留——说明 v2 的 Markdown 流式渲染已被投入实际生产使用，用户对文本保真度有生产级要求（该函数被 Angular 端每条 assistant 消息调用，波及面不小）。
- **自托管稳定性焦虑**（#7826）：自托管 Intelligence + LangGraph 的企业级用户遭遇 run 失败与连接中断，直接影响生产可用性，属于付费/重度场景的刚性诉求。
- **文档可用性反馈**：Python 快速上手缺少依赖、缺少安全配置说明（#8309），以及文档死链（#8402）、README 链接过期（#8398）均被用户主动指出，说明文档流量可观、读者认真。

---

## 8. 待处理积压

以下 PR/Issue 长期处于待响应状态，建议维护者优先分配审查资源：

| 条目 | 类型 | 开放时长 | 说明 |
|---|---|---|---|
| [#5905](https://redirect.github.com/CopilotKit/CopilotKit/pull/5905) Svelte SDK | feat PR | **129 天（4 个月+）** | 社区框架扩张的核心诉求，独立 pnpm 工程结构可能需维护者明确归属决策 |
| [#7494](https://redirect.github.com/CopilotKit/CopilotKit/issues/7494) 虚拟化滚动跳跃 | bug Issue | **48 天** | 唯一无 fix 的高活跃 Bug，已标记学生认领，建议确认进展 |
| [#7760](https://redirect.github.com/CopilotKit/CopilotKit/pull/7760) 全屏显示模式 | feat PR | 36 天 | 功能完整、覆盖三端，是路线图关键件 |
| [#7811](https://redirect.github.com/CopilotKit/CopilotKit/pull/7811) model-context 上报 | feat PR | 32 天 | 同上，与 #7760 同作者，可考虑批量审查 |
| [#7826](https://redirect.github.com/CopilotKit/CopilotKit/pull/7826) Runner 持久性修复 | fix PR | 31 天 | 影响生产用户，优先级应最高 |
| [#7971](https://redirect.github.com/CopilotKit/CopilotKit/pull/7971) FastAPI 认证 starter | feat PR | 22 天 | Python 生态获取的战略性示例 |

**健康度总评**：社区输入端（Bug 报告质量、修复响应速度、功能贡献覆盖面）表现优秀；瓶颈在**审查与合并吞吐**——10 个活跃 PR 全部待决、其中 6 个超过 3 周，且连续 24 小时零合并。建议关注维护者带宽与 PR 积压的剪刀差走势。

---
*数据来源：GitHub API（Issues/PRs/Releases），统计窗口为过去 24 小时。*

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*