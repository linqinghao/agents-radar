# 生成式 UI 生态日报 2026-11-24

> Issues: 84 | PRs: 125 | 覆盖项目: 4 个 | 生成时间: 2026-11-24 09:00 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告

**报告日期**：2026-11-24 | **数据窗口**：过去 24 小时 | **覆盖项目**：a2ui、OpenUI、json-render、CopilotKit

---

## 一、生态全景

生成式 UI 正在集体从“技术验证期”迈入“生产就绪期”：a2ui 完成 v1.0 后进入密集加固期并出现企业生产阻塞案例，CopilotKit 冲刺 2.0 大版本，OpenUI 以高频补丁快速迭代并将产品叙事升级为“可审计的生成式 Dashboard”。互操作规范（MCP Apps、AG-UI）成为多个项目社区的核心议题，供应链安全（Zod CVE）首次演变为生态级压力事件。json-render 处于稳定静默维护期，仅做品牌与文档基建。整体看，赛道进入“拼工程成熟度与生态治理”而非“拼概念验证”的阶段。

---

## 二、各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | Release | 当前阶段 |
|---|---|---|---|---|
| **a2ui** | 30（新开/活跃 21，关闭 9） | 50（在途 44，完成 6） | 4（含 2 个破坏性变更） | v1.0 后加固期 |
| **OpenUI** | 50（新开/活跃 48，关闭 2） | 27（在途 9，完成 18） | 9（全部 patch 级） | 快速迭代期 |
| **json-render** | 0 | 4（全部当日完成） | 0 | 稳定维护期 |
| **CopilotKit** | 4 | 44（在途 30，完成 14） | 3（含 1 个破坏性变更） | 2.0 发布冲刺期 |

**关键派生指标**：

- **Issue 关闭率**：a2ui 30% vs OpenUI 仅 4%（2/48）——OpenUI 社区报告量最大，但流入远超消化，存在 bug 积压风险（lang-core 解析器簇 8 条）；
- **PR 合并吞吐**：OpenUI 67%（18/27）最高，反映小步快跑节奏；a2ui 12%（6/50）偏低，44 条在途构成评审积压；CopilotKit 32%，其中约 1/3 已等待超 2 周；
- **社区结构差异**：a2ui 与 CopilotKit 呈“核心团队 + 外部贡献者”双轮驱动（今日 a2ui 新开 8 条 PR 多数来自社区；CopilotKit 有当日 issue→修复 PR 闭环 #8551/#8552）；json-render 社区互动为零，活跃度信号需外部渠道（npm 下载量、Discord）交叉验证。

---

## 三、共同关注的功能方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **渲染目标与运行时矩阵扩展** | a2ui、CopilotKit、OpenUI | a2ui 社区自发扩展 Jupyter（PR #4389）、Cloudflare workerd（PR #4243）、React Native（#4335）；CopilotKit 用户要求 Channels 跑在 Cloudflare Workers（#8539，当前被 Node 专用 API 阻断）；OpenUI 社区请求 Solid 2.0 运行时（#1326） |
| **主题化与样式定制统一** | a2ui、OpenUI、CopilotKit | a2ui SwiftUI 主题化系列（#3257，Button/Card→TextField）；OpenUI theme provider 合一与去 goober（#1700/#1705）；CopilotKit 用户要求 MCP Apps 规范的 theme propagation（#6824） |
| **LLM 输出健壮性与防御性解析** | a2ui、OpenUI、CopilotKit | CopilotKit 截断 tool call arguments 崩溃（#8551）；OpenUI 流式解析边角失败簇（#1440/#1445/#1597）与 prompt-解析器不一致（#1638）；a2ui v1.0 严格模式校验缺口（#4346/#4348） |
| **Zod 依赖治理** | a2ui、OpenUI | a2ui 遭遇 Zod CVE（GHSA-mrhx-c7xc-m3w5）且解耦计划 #2160 拖延 4 个月；OpenUI zod peer 声明范围虚宽（#1642）。两个独立项目同日暴露同一依赖的治理问题，值得警惕 |
| **Token 成本与可信度** | a2ui、OpenUI、CopilotKit | a2ui 用户在 generative-ui-bench 中指出 Rule 14 强制 dummy `Event("click")` 造成 token 浪费（#3404）；OpenUI 用户请求 token usage 回调（#1078）；OpenUI Dashboard 溯源特性树与 CopilotKit thread history/debug events 均指向“可审计的生成结果” |

此外，**集成文档缺口**（a2ui Angular 文档 #4369、CopilotKit 2.0 安装指引错误 #8555、OpenUI channels API 文档 #1710）在三个活跃项目中同时出现，说明生态扩张速度快于文档建设。

---

## 四、差异化定位分析

| 维度 | a2ui | OpenUI | json-render | CopilotKit |
|---|---|---|---|---|
| **功能侧重** | 协议规范 + 多语言 SDK（TS/Dart/Python/Swift）+ 渲染器矩阵 | LLM 原生自定义 DSL + 生成式 Dashboard | 轻量 JSON 渲染库 | 全栈 Copilot 框架 + runtime 服务器 |
| **目标用户** | 需要“一次定义、多端一致渲染”的协议采用方与企业 | 构建 AI 聊天/分析产品的前端团队 | Vercel 生态开发者 | 向现有应用嵌入 AI 助手的企业 |
| **技术路线** | JSON 协议 + 跨 SDK conformance 一致性 | 自定义 DSL（有意避开 JSON，获用户正面评价 #613） | JSON + React 优先 | 框架主导 + MCP Apps/AG-UI 协议适配 |

**定位细节**：

- **a2ui 走“协议标准化”路线**：核心资产是跨语言行为一致性（如 Dart/Python 数字解析对齐 PR #3847），但这也是其最大风险——#1298（三渲染器输出互不一致）与 PR #3135（v0.9.1 互操作阻断逾月）直接损害“多端一致”这一核心承诺。实验性决策推理内核（PR #4320）显示其正向 agentic 推理层扩展。
- **OpenUI 走“生成原生”路线**：DSL 对 LLM 更友好（社区明确认可），但代价是解析器成为技术债重灾区；商业实体（thesysdev）背书带来开发效率，也引发 self-host 用户对云依赖的信任焦虑（#1635）。
- **CopilotKit 走“应用框架”路线**：2.0 大版本（codemod 迁移、1.x/2.0 互通、官方文档栈）+ MCP Apps 规范对齐构成双主线，集成模板矩阵持续扩张（LangGraph/FastAPI 认证 starter 等）。
- **格式哲学的分歧是生态结构性差异**：a2ui 需向社区解释“为何用 JSON 而非 Protobuf”（#4354），OpenUI 用户则称赞“避开 JSON 的 DSL 是正确选择”——两条路线短期内不会收敛，选型时应按团队技术栈对齐。

---

## 五、社区热度与成熟度

**热度梯队**（按互动与贡献结构）：

1. **第一梯队：a2ui、OpenUI、CopilotKit** —— 三者日动态量均在 30+ 条以上，但结构迥异；
2. **第二梯队：json-render** —— 零社区互动，维护者单方面推进品牌基建。

**成熟度画像**：

- **a2ui（成熟期）**：企业生产采用已发生（Zod CVE 阻塞案例）、P1 修复闭环约 5 天、8 个月积压开始清偿（#1023）、出现长期架构讨论（#2160 持续 4 个月）——典型的生产期治理特征；
- **CopilotKit（快速成长期）**：核心团队主导冲刺（Issue 仅 4 条 vs PR 44 条），社区响应速度快（当日出修复 PR），但发布工程刚经历阵痛（#8550/#8549），2.0 落地质量待观察；
- **OpenUI（高速迭代期）**：发版最频繁（9 版/日）、外部贡献当日合入当日发版（#1689），但**唯一存在“可致宿主崩溃”的 5 个月存量 bug（#727）**，且 issue 消化率 4% 是四项目最低，社区反馈质量与维护消化能力出现剪刀差；
- **json-render（维护期）**：无功能演进信号，短期无风险但需关注长期定位。

---

## 六、值得关注的趋势信号

1. **“生产就绪”成为分水岭，安全响应速度等于用户留存**。a2ui 企业用户因 Zod CVE 无法升级而恳求 stopgap；CopilotKit 同期在收紧 CORS 凭据边界（#8493）与 demo 凭据隔离（#8459）。早期采用者已进入生产环境，安全与治理能力从加分项变为准入门槛。

2. **“LLM 输出不可信”成为工程共识前提**。三个活跃项目同日暴露解析/校验健壮性问题（截断 JSON、流式边角输入、严格模式漏网），且呈现两种失败极性：a2ui 是“校验不够严”（非法输入被接受），OpenUI 是“解析不够稳”（合法输入被搞坏）。**参考价值**：自研生成式 UI 管线时，prompt 签名、解析器、校验器三者的双向一致性应作为一等测试对象，而非事后补丁。

3. **互操作规范成为集成摩擦的主源头**。OpenUI 用户被 AG-UI schema 拒收（#613），CopilotKit 在追赶 MCP Apps 规范（#6824 拖近 3 个月），a2ui 面临跨 SDK conformance 挑战。**参考价值**：选型时应评估项目对开放规范（MCP Apps、AG-UI）的跟进速度与合规姿态，这直接决定与自建后端/多 Agent 框架的集成成本。

4. **Edge/Serverless 运行时从可选变刚需**。Cloudflare Workers 在 a2ui（社区主动为其建渲染器 #4243）与 CopilotKit（被 `createRequire` 阻断 #8539）呈现镜像案例。**参考价值**：部署目标含 edge 的团队，应优先验证运行时是否依赖 Node 专属 API。

5. **评测维度从“渲染效果”扩展到“token 成本与推理摩擦”**。generative-ui-bench 类基准出现，用户开始量化 prompt 冗余规则造成的模型推理浪费（a2ui #3404）。**参考价值**：生成式 UI 的 ROI 评估应纳入推理延迟与 token 成本，而非仅视觉还原度。

6. **依赖治理小事件可放大为生态级风险**。单一库（zod）的安全漏洞同时冲击两个不相关项目的路线图。**参考价值**：评估任一项目时，检查其核心依赖的锁定版本与解耦计划（a2ui #2160 的教训）。

**选型速查**：追求协议标准与多端一致选 **a2ui**（注意 Zod CVE 修复进度与 PR #3135 互操作阻断）；构建 LLM 原生分析产品选 **OpenUI**（注意解析器稳定性，建议避开流式边角场景）；嵌入企业应用可等待 **CopilotKit 2.0** 稳定版（RC 安装需 `@next` 标签）；**json-render** 当前信号不足，建议结合 npm 趋势与外部社区再判断。

---

*本报告基于四项目过去 24 小时 GitHub 公开数据快照生成；活跃度与结论受单日窗口限制，趋势判断建议结合多日数据交叉验证。*

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目动态日报

**项目**: [a2ui-project/a2ui](https://github.com/a2ui-project/a2ui) | **日期**: 2026-11-24 | **领域**: AI 智能体 UI 协议与多语言渲染器生态

---

## 一、今日速览

今日 a2ui 延续高活跃度：过去 24 小时共 **30 条 Issue 更新**（21 条新开/重新活跃、9 条关闭）、**50 条 PR 更新**（44 条待合并、6 条合并/关闭），并发布 **4 个新版本**，横跨 Swift、Python（core / agent-sdk）与 CLI 四条产品线。项目整体处于 **v1.0 发布后的密集加固期**——本日合并的修复集中在 JSON Schema 兼容与 Python 性能优化，而新提交的 PR 则围绕跨 SDK 行为一致性、RPC 安全边界与渲染器生态扩展（Jupyter、Cloudflare Vinext）。外部贡献者流入明显：今日新开的 8 条 PR 中多数来自社区成员（oyobbeb、josemontespg、MRYingLEE 等）。P1 性能问题 [#4314](https://redirect.github.com/a2ui-project/a2ui/issues/4314) 从报告到合并修复仅约 5 天，修复闭环速度较快，项目健康度良好。

---

## 二、版本发布（4 个）

### 1. Swift 0.12.0（v0.12.0+swift）⚠️ 含破坏性变更
- `EnvironmentValues.a2uiCatalogs`、`a2uiDefaultCatalogID`、`a2uiSurfaceMetadata` 在 `A2UISwiftUI` 中改为**只读**（`public internal(set)`），并移除 `A2UICatalogsKey` 与 `A2UIDefaultCatalogIDKey`。
- **迁移注意**：宿主 App 不能再直接写入这些 Environment Values 或引用被移除的 Key 类型，catalog 与 surface metadata 的注入需改走框架内部支持的路径。这是继 SwiftUI 主题化系列（[#3257](https://redirect.github.com/a2ui-project/a2ui/issues/3257)）之后的又一 API 收紧动作。

### 2. a2ui-core 0.7.1（Python）
- 新增 `MessageProcessor.add_catalog(catalog)`，允许在 processor 构建完成后追加 catalog。此后 `createSurface` 消息、renderer 函数调用与 `get_renderer_capabilities` 均可见该 catalog；**已创建的 surface 保持其创建时的 catalog 集合**，需注意新旧 surface 的行为差异。

### 3. a2ui-agent-sdk 0.12.1（Python）
- `DirectJsonParser` 对超出 double 范围的数字（如 `1e400`）抛出 `A2uiParseError`，与 Dart SDK 行为对齐。此前会被读作 `inf`，再经 `json.dumps` 输出 `Infinity`——一个 JSON 规范中不存在的 token。修复见 [PR #3847](https://redirect.github.com/a2ui-project/a2ui/pull/3847)。跨语言解析一致性持续收敛。

### 4. A2UI CLI v0.5.0 ⚠️ 含破坏性变更
- 要求 `a2ui_core ^0.9.0`（CLI 公共 API 暴露了 core 类型，版本联动）。
- 源码构建的最低 Dart SDK 从 `3.10.0` 提升至 `3.13.0`；**预编译二进制用户不受影响**。详见 [PR #4305](https://redirect.github.com/a2ui-project/a2ui/pull/4305)。

> 查看全部发布：[Releases](https://github.com/a2ui-project/a2ui/releases)

---

## 三、项目进展

**今日合并/关闭的关键 PR（抽样可见 2 条，合计 6 条完成合并/关闭）：**

| PR | 内容 | 意义 |
|---|---|---|
| [#4184](https://redirect.github.com/a2ui-project/a2ui/pull/4184) | Express 全面支持 `oneOf`/`anyOf`/`allOf`/本地 `$defs`（TS/Dart/Python 三端） | 关闭 [#3400](https://redirect.github.com/a2ui-project/a2ui/issues/3400)。此前 Express 假设 catalog 属性是扁平 JSON Schema，真实 catalog 普遍用 `oneOf` 包装结构，导致 prompt 遗漏与校验失败——此修复解锁了标准 JSON Schema 写法的 catalog 作者 |
| [#4326](https://redirect.github.com/a2ui-project/a2ui/pull/4326) | Python core 消除逐组件 `validation_schema` 深拷贝 | 关闭 P1 性能问题 [#4314](https://redirect.github.com/a2ui-project/a2ui/issues/4314)。原实现对每个组件最多读取 3 次深拷贝 schema，验证成本随组件数 × catalog 规模放大 |

**今日关闭的 9 条 Issue** 中值得关注的还包括：
- [#4262](https://redirect.github.com/a2ui-project/a2ui/issues/4262)：main 分支 E2E drift CI 失败（P1），已关闭，后续运行恢复通过；
- [#4328](https://redirect.github.com/a2ui-project/a2ui/issues/4328)：sandbox proxy 误拒外部 url frame 的 `postMessage`；
- [#4307](https://redirect.github.com/a2ui-project/a2ui/issues/4307)：Python `ComponentNode.on_updated` 遗漏 check-only 更新；
- [#3204](https://redirect.github.com/a2ui-project/a2ui/issues/3204) / [#4354](https://redirect.github.com/a2ui-project/a2ui/issues/4354)：两条架构质疑讨论（"Why React?"、"Why JSON?"）以官方回应收尾。

**在途管线（44 条待合并）**：今日新开 8 条 PR（#4388–#4397），包括 Lit 重渲染修复 [#4390](https://redirect.github.com/a2ui-project/a2ui/pull/4390)、RPC 调用者边界强化 [#4336](https://redirect.github.com/a2ui-project/a2ui/pull/4336)、实验性决策推理内核 [#4320](https://redirect.github.com/a2ui-project/a2ui/pull/4320) 与 Jupyter 渲染器 [#4389](https://redirect.github.com/a2ui-project/a2ui/pull/4389)。整体节奏：**修复吞吐稳定、生态扩展加速**。

---

## 四、社区热点

| 排名 | 议题 | 热度 | 分析 |
|---|---|---|---|
| 1 | [#2160](https://redirect.github.com/a2ui-project/a2ui/issues/2160) Zod 依赖抽象与解耦计划 | 10 评论 / 4 👍，8 月至今，今日再度活跃 | 社区最长寿的架构讨论。`web_core` 锁定 `zod ^3.25.x` 引发的解耦计划，与今日 Zod 安全事件 [#4192](https://redirect.github.com/a2ui-project/a2ui/issues/4192) 形成叠加压力，长期方案优先级或将上调 |
| 2 | [#3257](https://redirect.github.com/a2ui-project/a2ui/issues/3257) SwiftUI Basic Catalog 样式定制 | 7 评论 | 诉求：Web 有 CSS 变量、Flutter 读 `ThemeData`，SwiftUI 缺少对等主题化入口。进展可见：`A2UIButtonStyle`/`A2UICardStyle`（#4024）已落地，[PR #4361](https://redirect.github.com/a2ui-project/a2ui/pull/4361)（TextField）今日仍在推进，Text/Image 待做 |
| 3 | [#4262](https://redirect.github.com/a2ui-project/a2ui/issues/4262) main 分支 E2E drift 失败 | 6 评论，已关闭 | CI 稳定性受关注，好在后续运行恢复，维护者响应及时 |
| 4 | [#4192](https://redirect.github.com/a2ui-project/a2ui/issues/4192) Zod CVE（GHSA-mrhx-c7xc-m3w5）stopgap 方案 | 5 评论 | 企业用户提出：升级 `zod ^4.6.6` 并从 `"zod/v3"` 导入。安全事件正倒逼依赖治理，与 #2160 互为表里 |
| 5 | [#1023](https://redirect.github.com/a2ui-project/a2ui/issues/1023) Lit v0.8 组件 setData 后不重渲染 | 4 评论，3 月至今 | 拖延 8 个月的老 bug，**今日由维护者提交修复 [PR #4390](https://redirect.github.com/a2ui-project/a2ui/pull/4390)**，积压清偿信号积极 |
| 生态 | [PR #4243](https://redirect.github.com/a2ui-project/a2ui/pull/4243)（Cloudflare Vinext 渲染器）、[PR #4389](https://redirect.github.com/a2ui-project/a2ui/pull/4389)（Jupyter 渲染器） | — | 社区自发扩展渲染目标至 workerd / React 19 RSC / Jupyter，说明协议层已具备生态吸引力 |

**热点背后的主线**：(a) Zod 依赖的架构与安全双重压力；(b) 渲染器主题化/可定制性；(c) v1.0 严格模式下的向后兼容问题——三者共同反映用户从评估期进入**生产就绪期**的关切转移。

---

## 五、Bug 与稳定性

**按严重程度排列（今日新报 + 活跃）：**

| 级别 | Issue | 问题 | 修复状态 |
|---|---|---|---|
| P1 | [#4376](https://redirect.github.com/a2ui-project/a2ui/issues/4376) | Dart 端 conformance 测试未全量运行（内部规划提出，关联 PR #4216/#4217/#4377） | ⏳ 无修复 PR |
| P1 | [#4314](https://redirect.github.com/a2ui-project/a2ui/issues/4314) | Python `validation_schema` 逐组件深拷贝，验证成本随 catalog 规模放大 | ✅ [PR #4326](https://redirect.github.com/a2ui-project/a2ui/pull/4326) 已合并 |
| P1 | [#4262](https://redirect.github.com/a2ui-project/a2ui/issues/4262) | main 分支 E2E drift 失败 | ✅ 已关闭（后续运行通过） |
| P2 | [#4380](https://redirect.github.com/a2ui-project/a2ui/issues/4380) | `a2ui_core` 绑定返回 `Future` 的函数时持有 Future 本身而非值，绑定永不 settle | ⏳ 待修复 |
| P2 | [#4378](https://redirect.github.com/a2ui-project/a2ui/issues/4378) | `json_schema_builder` 不支持 `\p{...}` Unicode 转义，拒绝合法 A2UI 扩展 key | ⏳ 待修复 |
| P2 | [#4364](https://redirect.github.com/a2ui-project/a2ui/issues/4364) | `formatDate` 将 token 之外的字母原样输出，而**规范自带示例**用了 `YYYY` | ⏳ 待修复（规范与实现互相打架） |
| P2 | [#4346](https://redirect.github.com/a2ui-project/a2ui/issues/4346) | web_core 在 v1.0 严格模式下接受 v0.9 的 `"path"`/`"call"` 键并渲染为字面量对象 | ⏳ 待修复 |
| P2 | [#4348](https://redirect.github.com/a2ui-project/a2ui/issues/4348) | `Catalog.fromJson` 接受非法 check 规则（字面量布尔条件、多余 key） | ⏳ 待修复 |
| P2 | [#1023](https://redirect.github.com/a2ui-project/a2ui/issues/1023) | Lit v0.8 多个交互组件 `setData` 后缺 `requestUpdate` 不重渲染 | 🔧 修复 [PR #4390](https://redirect.github.com/a2ui-project/a2ui/pull/4390) 今日提交 |

**在途修复 PR**（从积压中主动捡起）：[#4395](https://redirect.github.com/a2ui-project/a2ui/pull/4395)（非布尔 `valid` 的跨 SDK 不一致，#3175）、[#4397](https://redirect.github.com/a2ui-project/a2ui/pull/4397)（number/currency formatter 缓存无限增长，#2298）、[#4360](https://redirect.github.com/a2ui-project/a2ui/pull/4360)（正则守卫拒绝歧义可空组重复以防空回溯，#4236）。

**安全相关**：[#4192](https://redirect.github.com/a2ui-project/a2ui/issues/4192)（Zod CVE stopgap）与 [PR #4336](https://redirect.github.com/a2ui-project/a2ui/pull/4336)（RPC 嵌套 `callRendererFunction` 参数的 agent 调用者边界强化）值得关注，后者修正 v1.0 嵌套表达式以 renderer 身份执行的越权隐患。

---

## 六、功能请求与路线图信号

- **非 DOM React 渲染器**（[#4335](https://redirect.github.com/a2ui-project/a2ui/issues/4335)）：支持 React Native 与自定义/测试渲染器，需求真实、尚无 PR，是渲染器矩阵的自然延伸。
- **CLI 自更新与匿名分析**（[#3769](https://redirect.github.com/a2ui-project/a2ui/issues/3769)、[#3768](https://redirect.github.com/a2ui-project/a2ui/issues/3768)）：CLI v0.5.0 今日刚发布，且作者注明将遵循隐私设计流程——CLI 线投入持续，两项功能有望进入后续版本。
- **分诊自动化**（[#4379](https://redirect.github.com/a2ui-project/a2ui/issues/4379)）：确定性 + AI 混合的 issue 分诊系统，Flutter UI 已有 [PR #3981](https://redirect.github.com/a2ui-project/a2ui/pull/3981)——项目治理工具化的信号。
- **实验性决策推理内核**（[PR #4320](https://redirect.github.com/a2ui-project/a2ui/pull/4320)、[PR #4325](https://redirect.github.com/a2ui-project/a2ui/pull/4325)）：decision-model kernel + cascade router + 零 LLM 工具指针绑定 + playground 样例，指向 agentic 推理能力的下一阶段方向。
- **Jupyter 渲染器**（[PR #4389](https://redirect.github.com/a2ui-project/a2ui/pull/4389)）：社区贡献完整包 + 文档 + 示例 notebook，若合入将新增 Python 侧前端目标。
- **文档与路线图刷新**（[PR #4394](https://redirect.github.com/a2ui-project/a2ui/pull/4394)、[#4393](https://redirect.github.com/a2ui-project/a2ui/issues/4393)）：README 五阶段路线图更新在即；[#4369](https://redirect.github.com/a2ui-project/a2ui/issues/4369)（Angular v1.0 集成文档请求）暴露了 v1.0 后的文档缺口。
- **SwiftUI 主题化系列**（[#3257](https://redirect.github.com/a2ui-project/a2ui/issues/3257)）：Button/Card → TextField（[PR #4361](https://redirect.github.com/a2ui-project/a2ui/pull/4361)）→ Text/Image，节奏清晰。

---

## 七、用户反馈摘要

- **企业生产阻塞**：有公司在共享 chat package 中使用 `@a2ui/react` + `@a2ui/web_core`，因 Zod CVE（GHSA-mrhx-c7xc-m3w5）无法升级，恳求 stopgap（[#4192](https://redirect.github.com/a2ui-project/a2ui/issues/4192)）——**真实生产采用已发生，安全响应速度成为 retention 关键**。
- **框架与格式质疑**：用户质疑为何绑定 React 而非标准 Web Components/免构建方案（[#3204](https://redirect.github.com/a2ui-project/a2ui/issues/3204)），以及为何用 JSON 而非 Protobuf 等紧凑格式（[#4354](https://redirect.github.com/a2ui-project/a2ui/issues/4354)）。两条均以关闭/回应收尾，但反映**非 React 阵营与性能敏感用户**的潜在需求。
- **Angular 采用者困惑**：团队已将 Angular 定为主前端框架探索 v1.0 集成，但官方文档缺少 Angular 特定的 UI/UX、主题与定制指导（[#4369](https://redirect.github.com/a2ui-project/a2ui/issues/4369)）。
- **LLM 侧效率**：在 generative-ui-bench 基准评测中发现 Express Rule 14 强制所有 action 附带 dummy `Event("click")` 造成模型推理摩擦与 token 浪费（[#3404](https://redirect.github.com/a2ui-project/a2ui/issues/3404)）——用户在意**推理延迟与 token 成本**，而非仅渲染效果。
- **嵌入场景摩擦**：Streamlit / Web Component shadow DOM 中基础样式注入错误（[PR #4286](https://redirect.github.com/a2ui-project/a2ui/pull/4286)）；Cloudflare workerd 运行时需求催生社区渲染器（[PR #4243](https://redirect.github.com/a2ui-project/a2ui/pull/4243)）。
- **新手体验**：规范自带的联系人表单示例使用 `YYYY` 日期 pattern，而 `formatDate` 并不支持（[#4364](https://redirect.github.com/a2ui-project/a2ui/issues/4364)）——照抄官方示例即踩坑。

---

## 八、待处理积压

| 项目 | 开启时间 | 状态 | 提醒 |
|---|---|---|---|
| [#1023](https://redirect.github.com/a2ui-project/a2ui/issues/1023) Lit 重渲染 bug | 2026-03-29（约 8 个月） | needs review | 修复 [PR #4390](https://redirect.github.com/a2ui-project/a2ui/pull/4390) 今日提交，**建议尽快 review 合并** |
| [#1298](https://redirect.github.com/a2ui-project/a2ui/issues/1298) 三大 web 渲染器 `Image` 实现互不一致且偏离 spec | 2026-04-28（约 7 个月） | needs-triage | 同一输入三个渲染器输出可见不同，损害协议"一次定义多端渲染"核心承诺，长期未分诊 |
| [#2160](https://redirect.github.com/a2ui-project/a2ui/issues/2160) Zod 解耦计划 | 2026-08-03 | needs-triage | 叠加 #4192 安全压力，建议明确长期方案时间表 |
| [PR #3135](https://redirect.github.com/a2ui-project/a2ui/pull/3135) v0.9.1 capabilities key 不一致 | 2026-10-10 | needs review | Python agent SDK 会拒绝 v0.9.1 renderer 发送的能力声明——**互操作性阻断**，逾月未合 |
| [PR #3808](https://redirect.github.com/a2ui-project/a2ui/pull/3808) Modal 渲染至 top layer | 2026-11-01 | needs review | stacking context 导致 modal 被宿主 UI 遮挡，用户可见问题 |
| [#4346](https://redirect.github.com/a2ui-project/a2ui/issues/4346) / [#4348](https://redirect.github.com/a2ui-project/a2ui/issues/4348) v1.0 严格模式校验漏洞 | 2026-11-21 | needs review | 同一报告者系统性地找出 strict 校验缺口，与 v1.0 校验一致性直接相关 |

---

**健康度小结**：今日数据呈现典型的**成熟期开源项目特征**——发布节奏稳定（4 版本/日）、P1 修复闭环约 5 天、外部贡献者持续流入、生态自发扩张（Jupyter、Cloudflare）。风险点集中在：v1.0 严格模式校验缺口（#4346/#4348 类）、Zod 依赖的安全与架构双重债务、以及渲染器间一致性（#1298）这条协议核心承诺上的老问题。建议维护者优先处理 PR #3135（互操作阻断）与 PR #4390（8 个月积压清偿）。

*数据来源：GitHub 过去 24 小时 Issue/PR/Release 更新快照。*

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目日报 | 2026-11-24

> 仓库：[thesysdev/openui](https://github.com/thesysdev/openui) | 数据窗口：过去 24 小时

---

## 1. 今日速览

OpenUI 今日保持高活跃度：过去 24 小时 Issue 更新 **50 条**（新开/活跃 48，关闭 2），PR 更新 **27 条**（待合并 9，已合并/关闭 18），单日发布 **9 个补丁版本**，呈现典型的"多批次小步快跑"发版节奏。核心团队（AbhinRustagi、ankit-thesys、Aditya-thesys、vishxrad 等）今日重心明显落在**样式架构统一**（主题 Provider 合一、去 goober）与 **Dashboard 数据溯源（Provenance）特性树**上。社区侧亮点是外部贡献者 mlubbad 的 RTL 修复 [#1689](https://redirect.github.com/thesysdev/openui/pull/1689) 当日合入、当日发版，贡献闭环高效。风险面：**lang-core 解析器/词法器相关 Bug 持续累积**（今日活跃 Issue 中至少 8 条），且多数尚无对应修复 PR，构成当前最大的稳定性技术债。

---

## 2. 版本发布

今日发布 9 个版本，**全部为 Patch 级别，无破坏性变更**，由 Changesets 版本 PR [#1704](https://redirect.github.com/thesysdev/openui/pull/1704) 产出（下一轮版本 PR [#1708](https://redirect.github.com/thesysdev/openui/pull/1708) 已就绪待合并）。

| 包名 | 版本 | 变更内容 | 来源 PR |
|---|---|---|---|
| [@​openuidev/react-ui](https://github.com/thesysdev/openui/releases) | 0.18.11 | react-ui 与 react-components 共享同一 theme provider，统一主题体系 | [#1700](https://redirect.github.com/thesysdev/openui/pull/1700) |
| @​openuidev/react-components | 0.0.4 | 同上（theme provider 统一） | [#1700](https://redirect.github.com/thesysdev/openui/pull/1700) |
| @​openuidev/react-ui | 0.18.12 | 默认未对齐元素改用 CSS 逻辑属性（`text-align: start` / `justify-content: flex-start`），修复 RTL 布局 | [#1689](https://redirect.github.com/thesysdev/openui/pull/1689) |
| @​openuidev/react-components | 0.0.5 | 同上（逻辑属性修复） | [#1689](https://redirect.github.com/thesysdev/openui/pull/1689) |
| @​openuidev/intelligent-ui-library | 0.0.3 | 同上（逻辑属性修复） | [#1689](https://redirect.github.com/thesysdev/openui/pull/1689) |
| @​openuidev/dashboard-library | 1.0.2 | 同上（逻辑属性修复） | [#1689](https://redirect.github.com/thesysdev/openui/pull/1689) |
| @​openuidev/react-headless | 0.18.11 / 0.18.12 | 无实质变更（联动升版） | — |
| @​openuidev/server | 0.5.1 | `storeChatCompletionHistory` 与 `storeLangGraphHistory` 相关改进，为 Server 会话 API 主线铺垫 | [#1702](https://redirect.github.com/thesysdev/openui/pull/1702) |

**迁移注意事项：**
- RTL 用户：`dir="rtl"` 容器（阿拉伯语、希伯来语、波斯语、乌尔都语）下的默认对齐行为将**变为正确方向**，属于视觉行为修正，修复 [#1688](https://redirect.github.com/thesysdev/openui/issues/1688)。
- 样式架构：[#1705](https://redirect.github.com/thesysdev/openui/pull/1705) 将 react-ui 的样式实现从 goober 迁回 react-components 的共享样式表（`#openui-styles`），消除双样式表问题，并新增 lint 规则防回归。

---

## 3. 项目进展

今日 18 条 PR 合并/关闭，主要推进如下：

**基础设施与修复（已发版）**
- [#1689](https://redirect.github.com/thesysdev/openui/pull/1689) RTL / CSS 逻辑属性修复 — 关闭 Issue [#1688](https://redirect.github.com/thesysdev/openui/issues/1688)，当日发版 ✅
- [#1705](https://redirect.github.com/thesysdev/openui/pull/1705) react-ui 样式迁移至 react-components 的共享 `css`/`keyframes`，摆脱 goober 独立样式标签
- [#1706](https://redirect.github.com/thesysdev/openui/pull/1706) 为 #1705 补充 changeset，保证进入发布说明
- [#1691](https://redirect.github.com/thesysdev/openui/pull/1691) lang-core 命名 prop 类型写入库 JSON Schema，减少 prompt 签名中的类型重复

**文档与示例**
- [#1710](https://redirect.github.com/thesysdev/openui/pull/1710) 补充 [@​openuidev/channels](https://redirect.github.com/thesysdev/openui/pull/1710) 的 API 参考文档（补 #1669 遗漏）
- [#1429](https://redirect.github.com/thesysdev/openui/pull/1429) 官网首页 tweet wall 刷新为 2026 年 5–10 月的社区动态
- 历史示例 PR 集中关闭：[#444](https://redirect.github.com/thesysdev/openui/pull/444)（多工具 Dashboard 示例）、[#679](https://redirect.github.com/thesysdev/openui/pull/679)（Mastra Harness 示例）、[#778](https://redirect.github.com/thesysdev/openui/pull/778)（全栈 Lynx 聊天示例）、[#785](https://redirect.github.com/thesysdev/openui/pull/785)（CLI 后端脚手架）、[#867](https://redirect.github.com/thesysdev/openui/pull/867)（Google ADK 修复）——4 至 7 月的长尾 PR 于今日批量收尾，示例生态明显扩充

**在途主线（待合并 9 条中的关键项）**
- [#1544](https://redirect.github.com/thesysdev/openui/pull/1544) Dashboard 数据溯源（dataSources / enableProvenance）
- [#1703](https://redirect.github.com/thesysdev/openui/pull/1703) Sources 面板（DataSourcesPanel）
- [#1709](https://redirect.github.com/thesysdev/openui/pull/1709) Dashboard 构建过程可视化（step 事件展示）
- [#1707](https://redirect.github.com/thesysdev/openui/pull/1707) Server 端 `openui.conversations` 会话 API
- [#1679](https://redirect.github.com/thesysdev/openui/pull/1679) 打开中的 artifact 自动刷新（poll 机制）
- [#1629](https://redirect.github.com/thesysdev/openui/pull/1629) CLI 模板与示例依赖批量更新

**整体评估：** 今日完成"样式层架构统一 + i18n 正确性"收口，同时 Dashboard 可观测性特性树（溯源 → 面板 → 构建进度 → 文档）四层 PR 并行推进，项目正从"生成 UI"向"可信、可审计的生成式 Dashboard"方向演进。

---

## 4. 社区热点

评论数最多的活跃讨论：

| Issue | 主题 | 评论数 | 状态 |
|---|---|---|---|
| [#1227](https://redirect.github.com/thesysdev/openui/issues/1227) | Windows 语音输入文字在 Send 后重现 | 4 | Open |
| [#690](https://redirect.github.com/thesysdev/openui/issues/690) | react-lang 的 React 17 兼容性 | 4 | Open |
| [#1635](https://redirect.github.com/thesysdev/openui/issues/1635) | Dashboard API 能否用自托管 Postgres | 3 | Open |
| [#1440](https://redirect.github.com/thesysdev/openui/issues/1440) | stripFences 误判导致响应渲染空白 | 3 | Open |
| [#728](https://redirect.github.com/thesysdev/openui/issues/728) | Vue TextContent markdown 字面渲染（good first issue） | 3 + 👍1 | Open |
| [#727](https://redirect.github.com/thesysdev/openui/issues/727) | Renderer commit 阶段 insertBefore 崩溃 | 3 | Open |
| [#613](https://redirect.github.com/thesysdev/openui/issues/613) | AG-UI 协议 payload 不符合 RunAgentInputSchema | 3 | Open |

**关闭的重要讨论：**
- [#1688](https://redirect.github.com/thesysdev/openui/issues/1688) RTL 对齐 Bug — 修复已发版 ✅
- [#1188](https://redirect.github.com/thesysdev/openui/issues/1188) AIML API 50/50 RevShare 商务合作提案 — 已关闭（社区/商业合作提案）

**诉求分析：** 热点集中在四类：① **遗留技术栈兼容**（React 17 用户被 React 18 专属 API `useSyncExternalStore`/`useInsertionEffect` 挡在门外）；② **自托管边界**（#1635 用户直接质疑"是否因商业模式而限制本地 Postgres"，反映 self-host 社区对云端依赖的不安）；③ **协议合规**（自建 FastAPI 后端被 AG-UI schema 拒绝）；④ **Windows 输入法/语音输入边角问题**（#1227 明确指出 PR #1068 只守卫了 Enter 键路径，两个 Send 按钮仍直接调用 `handleSubmit()`）。

---

## 5. Bug 与稳定性

按严重程度排列（除特别标注外均**暂无修复 PR**）：

**🔴 高危 — 宿主崩溃或渲染整体失败**
- [#727](https://redirect.github.com/thesysdev/openui/issues/727) Renderer 在 commit 阶段抛出 `insertBefore` NotFoundError，可**直接崩溃宿主应用**，流式渲染 + index-keyed children 场景触发（2026-07-07 至今未修复，最危险的存量 Bug）
- [#1440](https://redirect.github.com/thesysdev/openui/issues/1440) `stripFences` 将行中三反引号视为 fence 开头，导致整段响应渲染空白
- [#1597](https://redirect.github.com/thesysdev/openui/issues/1597) 词法器静默吞掉未终止字符串，程序其余部分全部丢失且报错信息误导
- [#767](https://redirect.github.com/thesysdev/openui/issues/767) 流式场景下 `$binding` 截断值被 `store.initialize` 持久化为默认值

**🟠 中危 — 功能性错误**
- [#1711](https://redirect.github.com/thesysdev/openui/issues/1711) **今日新增**：`excess-args` 在元素完整渲染时仍报无 severity 的纯 error，违反 `ValidationError` 的 warning 语义约定
- [#1445](https://redirect.github.com/thesysdev/openui/issues/1445) 双引号字符串含原始换行/制表符时转义解码整体失效
- [#1693](https://redirect.github.com/thesysdev/openui/issues/1693) 组件实例成员访问读取内部 `ElementNode` 字段而非按 spec §3.1 返回 null
- [#1637](https://redirect.github.com/thesysdev/openui/issues/1637) `jsonToOpenUI` 丢弃必要括号，序列化后表达式语义改变
- [#1638](https://redirect.github.com/thesysdev/openui/issues/1638) prompt 签名列出 `z.enum` 的 keys 而非 values，模型按提示生成即被解析器拒绝
- [#1642](https://redirect.github.com/thesysdev/openui/issues/1642) zod peer 声明 `^3.25.0` 但实际使用仅 zod ≥4.0.17 的 `z.util.mergeDefs`，peer 范围虚宽
- [#1611](https://redirect.github.com/thesysdev/openui/issues/1611) LineChart 将缺失值（null/NaN）画为真实 0 而非留空隙
- [#1687](https://redirect.github.com/thesysdev/openui/issues/1687) 图表 y 轴小数刻度重复显示同一数值
- [#1639](https://redirect.github.com/thesysdev/openui/issues/1639) ScatterChart 声明的 xLabel/yLabel 实际被忽略
- [#1634](https://redirect.github.com/thesysdev/openui/issues/1634) OverviewCardItem 可选参数 `id` 排在必选参数 `top` 之前，位置映射错误
- [#1646](https://redirect.github.com/thesysdev/openui/issues/1646) openui.com/demo/chat 登录后聊天记录在移动端 Chrome 不保存

**✅ 已修复（今日）**
- [#1688](https://redirect.github.com/thesysdev/openui/issues/1688) RTL 文本对齐 — PR [#1689](https://redirect.github.com/thesysdev/openui/pull/1689) 已合并并发布

**结构性观察：** lang-core 的解析器/词法器/prompt 生成是 Bug 重灾区（#1440/#1445/#1597/#1693/#1711/#1637/#1638/#1642 共 8 条），其中 #1440、#1445、#1597 疑似同根因（引号/fence 扫描逻辑对边角输入处理不严谨），建议统一重构而非逐条修补。

---

## 6. 功能请求与路线图信号

**社区提出的功能请求：**
- [#690](https://redirect.github.com/thesysdev/openui/issues/690) React 17 兼容（呼声最高，但依赖 React 18 API，需架构权衡）
- [#1326](https://redirect.github.com/thesysdev/openui/issues/1326) Solid 2.0 运行时（补齐 React/Vue/Svelte/Angular 之外的框架矩阵）
- [#751](https://redirect.github.com/thesysdev/openui/issues/751) Renderer 原生 reveal-rate/平滑显示，解决 DSL 突发到达时的渲染顿挫
- [#959](https://redirect.github.com/thesysdev/openui/issues/959) `dataInvention` flag，允许 description-mode 消费者关闭"生成合理数据"规则
- [#1078](https://redirect.github.com/thesysdev/openui/issues/1078) openAIResponsesAdapter 暴露 token usage 回调
- [#706](https://redirect.github.com/thesysdev/openui/issues/706) Zod schema 描述纳入生成的 prompt
- 集成类：[#1061](https://redirect.github.com/thesysdev/openui/issues/1061) Agno AgentOS、[#1056](https://redirect.github.com/thesysdev/openui/issues/1056) Langflow 适配器

**下一版本可能纳入（基于在途 PR 的明确信号）：**

1. **Dashboard 溯源链完整落地**：[#1544](https://redirect.github.com/thesysdev/openui/pull/1544)（核心 API）→ [#1703](https://redirect.github.com/thesysdev/openui/pull/1703)（Sources 面板）→ [#1709](https://redirect.github.com/thesysdev/openui/pull/1709)（构建过程展示）→ [#1692](https://redirect.github.com/thesysdev/openui/pull/1692)（文档）呈层叠依赖结构，是团队当前最确定的大特性。
2. **Server 会话 API**：[#1707](https://redirect.github.com/thesysdev/openui/pull/1707) `openui.conversations`，已有 server@0.5.1（#1702）铺垫，动机是解决"demos 每轮都要 mint 前端 token"的痛点。
3. **Artifact 实时性**：[#1679](https://redirect.github.com/thesysdev/openui/pull/1679) 打开的 Dashboard 自动感知编辑/重命名/权限变更（受跨仓库依赖 coda#1120 阻塞）。

---

## 7. 用户反馈摘要

**痛点：**
- **自托管受限感**：[#1635](https://redirect.github.com/thesysdev/openui/issues/1635) 用户直言"是否因违背商业模式而不可行"，反映 self-host 用户对云依赖的信任焦虑。
- **存量应用迁移难**：[#690](https://redirect.github.com/thesysdev/openui/issues/690) React 17 业务应用用户无法接入，被 18 专属 API 硬性阻断。
- **Demo 体验转变**：[#1646](https://redirect.github.com/thesysdev/openui/issues/1646) 用户反馈 demo 现在强制登录才能发首条消息，且登录后移动端历史记录仍丢失，双重不满。
- **流式渲染边角失败**：[#1440](https://redirect.github.com/thesysdev/openui/issues/1440)、[#1445](https://redirect.github.com/thesysdev/openui/issues/1445) 报告流式过程中出现整段空白/转义显示为字面反斜杠，用户直接看到 `\"hi\"` 而非 `"hi"`。
- **集成摩擦**：[#613](https://redirect.github.com/thesysdev/openui/issues/613) 自建 FastAPI 后端用户被 AG-UI schema 校验拒收，需自行排查协议细节。

**满意点：**
- 外部贡献者 mlubbad 的 RTL 修复**当日合入当日发版**（[#1689](https://redirect.github.com/thesysdev/openui/pull/1689)），社区贡献响应链路非常顺畅。
- [#613](https://redirect.github.com/thesysdev/openui/issues/613) 报告者肯定设计方向："avoiding JSON and having a custom DSL is the right approach"。

---

## 8. 待处理积压

**长期未解决的重要 Issue（Open > 3 个月，建议维护者优先关注）：**

| Issue | 主题 | 开启时间 | 备注 |
|---|---|---|---|
| [#613](https://redirect.github.com/thesysdev/openui/issues/613) | AG-UI 协议不合规 | 2026-06-07 | 3 评论，影响自建后端集成 |
| [#690](https://redirect.github.com/thesysdev/openui/issues/690) | React 17 兼容 | 2026-06-29 | 4 评论，社区呼声最高 |
| [#727](https://redirect.github.com/thesysdev/openui/issues/727) | Renderer insertBefore 崩溃 | 2026-07-07 | **高危：宿主应用崩溃，5 个月未修复** |
| [#728](https://redirect.github.com/thesysdev/openui/issues/728) | Vue markdown 字面渲染 | 2026-07-07 | 已标 good first issue + help wanted，适合社区认领 |
| [#751](https://redirect.github.com/thesysdev/openui/issues/751) | Renderer reveal-rate | 2026-07-12 | 体验类核心诉求 |
| [#767](https://redirect.github.com/thesysdev/openui/issues/767) | 流式 $binding 默认值粘滞 | 2026-07-14 | 数据正确性问题 |
| [#959](https://redirect.github.com/thesysdev/openui/issues/959) | dataInvention flag | 2026-08-11 | 小改动即可满足 |
| [#1045](https://redirect.github.com/thesysdev/openui/issues/1045) / [#1227](https://redirect.github.com/thesysdev/openui/issues/1227) | Windows 语音输入文字残留 | 2026-08/09 | 修复路径已定位（Send 按钮直调 handleSubmit），但未跟进 |

**受阻 PR：**
- [#1679](https://redirect.github.com/thesysdev/openui/pull/1679) 依赖外部仓库 `thesysdev/coda#1120`，跨仓库协调待解。
- [#1544](https://redirect.github.com/thesysdev/openui/pull/1544) 溯源主线 PR 创建已 3 周，是多个 PR 的栈底，建议尽快推进合入以解锁 #1703/#1709/#1692。

**给维护者的两条优先建议：** ① 立即处理 #727（唯一可致宿主崩溃的存量 Bug）；② 将 lang-core 解析器簇（#1440/#1445/#1597/#1711）作为专项重构统一处理，避免边角输入问题在流式场景下持续侵蚀"渐进渲染"这一核心卖点。

---

*本报告基于 GitHub 公开数据自动生成，活跃度与结论以数据窗口内信息为准。*

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render 项目动态日报

**报告日期**：2026-11-24 ｜ **数据窗口**：过去 24 小时
**项目地址**：[github.com/vercel-labs/json-render](https://github.com/vercel-labs/json-render)

---

## 1. 今日速览

今日 json-render 社区侧完全静默：Issues 新增/活跃/关闭均为 **0**，无新版本发布。全部动态来自核心维护者 **ctate** 的 **4 个 PR（#503–#506）**，均在创建当日（11-23）关闭，且全部集中于文档站点品牌视觉（Vercel Labs lockup）与 OG 分享卡片基建。活跃度评估：维护响应链路极为高效（当日提交、当日关闭），但工作重心在展示层而非核心 JSON 渲染能力；社区参与度今日为零。综合判断：项目处于**稳定维护期**，健康度良好，短期无风险信号。

## 2. 项目进展

今日 4 个 PR 全部关闭，作者均为 ctate，创建→关闭均为同日（2026-11-23）：

| PR | 标题 | 状态 | 链接 |
|---|---|---|---|
| #503 | Use the Vercel Labs lockup in the docs header | CLOSED | [PR #503](https://redirect.github.com/vercel-labs/json-render/pull/503) |
| #504 | Use the Vercel Labs OG card generator | CLOSED | [PR #504](https://redirect.github.com/vercel-labs/json-render/pull/504) |
| #505 | Ship the header lockup styles in their own stylesheet | CLOSED | [PR #505](https://redirect.github.com/vercel-labs/json-render/pull/505) |
| #506 | Version the OG image URL by card content | CLOSED | [PR #506](https://redirect.github.com/vercel-labs/json-render/pull/506) |

**内容解读**：

- **[#503](https://redirect.github.com/vercel-labs/json-render/pull/503)**：文档页头部改用 Vercel Labs 官方 lockup（品牌标识组合），属于品牌统一动作。
- **[#504](https://redirect.github.com/vercel-labs/json-render/pull/504)**：文档站 OG（Open Graph）分享卡片改用 Vercel Labs 统一的卡片生成器，统一 labs 项目在社交平台/聊天工具中的链接预览观感。
- **[#505](https://redirect.github.com/vercel-labs/json-render/pull/505)**：将 header lockup 样式拆分为独立样式表，实现样式隔离，避免与文档主样式互相污染，同时便于独立缓存与复用。
- **[#506](https://redirect.github.com/vercel-labs/json-render/pull/506)**：按卡片内容对 OG 图片 URL 做版本化（cache-busting），确保卡片内容更新后，社交平台与 CDN 不再返回陈旧缓存图。

**整体评估**：四个 PR 编号连续、同日完成、主题成组，是一次围绕"文档品牌 + 分享体验"的成组小步迭代，**未触及核心渲染 API 或运行时逻辑**。对核心能力的推进幅度有限，但 #505（样式隔离）与 #506（内容寻址缓存版本化）是可复用的工程实践，能直接改善文档站稳定性与分享链路的正确性。

## 3. 社区热点

今日无任何社区讨论：Issue 数为 0，4 个 PR 的评论数均无数据、👍 均为 0。当日唯一可见的"动态焦点"即维护者自身的品牌基建系列（见第 2 节），**无用户侧诉求可供分析**。社区互动热度：0（数据窗口内）。

## 4. Bug 与稳定性

- **新增 Bug / 崩溃 / 回归：0**。当前无来自 Issue 渠道的已知稳定性问题。
- **展示层隐性修复（值得记录）**：[#506](https://redirect.github.com/vercel-labs/json-render/pull/506) 实质修复了"OG 图片因 URL 不变导致缓存陈旧"的问题——严重度低、仅影响分享预览正确性，且**该 PR 已关闭，可视为已有修复**；[#505](https://redirect.github.com/vercel-labs/json-render/pull/505) 的独立样式表属于预防样式冲突的前端卫生改进。
- **结论**：稳定性面今日无负面信号。

## 5. 功能请求与路线图信号

- **用户侧功能请求：0**，本期无需求端信号。
- **维护侧（供给侧）信号**：三个品牌/OG 相关 PR 表明 Vercel Labs 正在将共享品牌资产（lockup、OG 卡片生成器）系统性铺设到旗下项目，json-render 为其中之一。这属于**生态层面的标准化动作**，预示文档与对外呈现将持续向 Vercel Labs 统一视觉靠拢。今日数据未显示任何核心功能或 API 变更迹象，下阶段更可能延续展示层打磨而非破坏性变更——此为基于 PR 主题的推断，仅供参考。

## 6. 用户反馈摘要

今日 Issue 与 PR 评论均为空（评论数无数据、👍 为 0），**无可提炼的用户痛点、使用场景或满意度反馈**。

## 7. 待处理积压

- **待合并 PR：0**，短期交付管道干净。
- **长期未响应 Issue/PR**：本期快照未提供 stale 积压数据，无法列出具体清单。
- **维护者提醒**：单日零 Issue 属正常波动，但若连续多日为零，建议结合外部渠道（Discord/X 讨论、npm 下载量）交叉验证，确认是"低问题密度"而非"反馈渠道外移"。

---

### 📎 数据口径说明

1. PR 状态 "CLOSED" 在数据源中按"已合并/关闭"合并统计，未逐条区分 merged 与 closed；结合同日创建-关闭、编号连续、主题成组来看，本次系列更接近快速合并的成组提交。
2. 评论数显示"无数据"表示数据源未返回该字段，不代表实际评论为零之外的含义。
3. Release、Issue 数据窗口内均为空，相关章节已按规则省略或如实标注。

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报
**日期：2026-11-24 | 数据来源：github.com/CopilotKit/CopilotKit**

---

## 1. 今日速览

过去 24 小时内 CopilotKit 呈现**高活跃度、高发布节奏**状态：共 44 条 PR 更新（30 条待合并、14 条已合并/关闭）、4 条 Issue 更新、3 个新版本发布。工程主线清晰指向 **CopilotKit 2.0 发布冲刺**——示例迁移、2.0 文档、1.x/2.0 互通兼容修复齐头并进；同时 MCP Apps 规范对齐（#6824）、Channels 可靠性与发布工程稳定性持续收尾。社区响应速度值得肯定：新报告的 Python SDK 崩溃 Bug（#8551）当日即出现修复 PR（#8552）。需关注的健康度信号是 30 条待合并 PR 构成的中等评审积压，以及一条近 3 个月的规范对齐追踪 Issue。

---

## 2. 版本发布

| 版本 | 类型 | 关键内容 |
|---|---|---|
| [v1.90.1](https://github.com/CopilotKit/CopilotKit/releases/tag/v1.90.1) | 功能版本 | MCP Apps 组件全屏支持、遥测精度提升，**含破坏性变更** |
| [v1.90.2](https://github.com/CopilotKit/CopilotKit/releases/tag/v1.90.2) | 维护版本 | monorepo 全包版本对齐至 1.90.2，无功能变更 |
| [channels/v0.13.0](https://github.com/CopilotKit/CopilotKit/releases/tag/channels/v0.13.0) | 功能版本 | 审批恢复（approval resume）与交互式选择器在多进程/多副本下的可靠性、Intelligence 线程历史回放失败时的韧性 |

**迁移注意事项：**
- ⚠️ **v1.90.1 破坏性变更**：runtime 线程历史与调试事件处理方式发生变更。从 ≤1.90.0 升级的用户，如依赖 thread history API 或 debug event 逻辑，需在升级前核对变更细节。
- **channels 用户**：0.13.0 对多副本部署（approval resume、pickers）场景是重要可靠性升级，建议跟进。值得注意的是，该版本发布过程中曾因 `@copilotkit/runtime@1.90.1` 声明 `channels-core ^0.12.0` 导致发布校验失败，已由 [#8550](https://redirect.github.com/CopilotKit/CopilotKit/pull/8550) 修复（允许依赖 scope 先于依赖方发布）。
- **2.0 尝鲜者**：[#8555](https://redirect.github.com/CopilotKit/CopilotKit/pull/8555) 证实 2.0 文档此前安装命令缺少 `@next` 标签，导致 npm 装到 1.x 而 2.0 代码报错（1.90.1 的 runtime 根不存在 `CopilotKitRuntime`）。当前安装 2.0 RC 必须使用 `@next` 标签。
- [v1.90.2](https://github.com/CopilotKit/CopilotKit/releases/tag/v1.90.2) 为纯版本对齐，可无风险采用。

---

## 3. 项目进展

今日 14 条 PR 完成合并/关闭，重点包括：

- **[#8553](https://redirect.github.com/CopilotKit/CopilotKit/pull/8553)（已关闭）**：由 release workflow 自动生成的 v1.90.2 发布 PR，版本闭环完成。
- **[#8550](https://redirect.github.com/CopilotKit/CopilotKit/pull/8550)（已关闭）**：修复发布流水线中 "Verify no published scope is left behind" 校验的误报，使 channels 独立 scope 可先于 runtime 发布。这是发布工程的一次实质加固。
- **[#8459](https://redirect.github.com/CopilotKit/CopilotKit/pull/8459)（已关闭）**：Omnara 演示访客会话隔离——为每个 demo 线程签发服务端凭证并在 runtime 侧校验 scope，属于安全加固。
- **[#8508](https://redirect.github.com/CopilotKit/CopilotKit/pull/8508)（已关闭）**：Omnara 完成 staging 注册（CI、镜像检查、重部署管线）。
- **[#8548](https://redirect.github.com/CopilotKit/CopilotKit/pull/8548)（已关闭）**：修复 /v2 文档的 PostHog 事件丢失 base path 导致与稳定版文档数据混淆的问题。

**在途关键进展：**
- 2.0 主线全面推进：[#8185](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185)（2.0.0 主体 PR）、[#8556](https://github.com/CopilotKit/CopilotKit/CopilotKit/pull/8556)（用官方 codemod 完成全部 starter 的 2.0 迁移）、[#8554](https://redirect.github.com/CopilotKit/CopilotKit/pull/8554)（2.0 客户端连 1.x runtime 不再静默关闭 generative UI）、[#8555](https://redirect.github.com/CopilotKit/CopilotKit/pull/8555)（2.0 文档安装指引修正）。
- 安全：[#8493](https://redirect.github.com/CopilotKit/CopilotKit/pull/8493) 要求凭据 CORS 必须显式声明 origin，堵住 origin 反射漏洞。

**整体评估**：项目处于 2.0 正式发布前的收尾阶段——发布工程、文档栈（[#8432](https://redirect.github.com/CopilotKit/CopilotKit/pull/8432) 为 7 个文档 PR 栈的底层）、示例迁移、兼容性兜底四线并行，前进节奏明显。

---

## 4. 社区热点

按评论数与讨论热度排序（PR 评论数据缺失，以 Issue 为主）：

1. **[#6824](https://redirect.github.com/CopilotKit/CopilotKit/issues/6824)（5 评论，11-23 仍有更新）** — MCP Apps host 与规范（`@modelcontextprotocol/ext-apps`，协议 `2026-01-26`）的差距追踪。#6707 已将 React host 迁移到 `AppBridge`，但 display-mode、update-model-context、host-context、theme propagation 等能力仍未暴露。诉求本质：**开发者希望 host 层完整实现规范，以便 MCP App 生态可移植**。这是当前评论最多的 Issue，且持续近 3 个月，属于社区/spec 双向驱动的路线图核心。
2. **[#8115](https://redirect.github.com/CopilotKit/CopilotKit/issues/8115)（2 评论，11-23 更新）** — `@copilotkit/mcp-apps-renderer` 被列在 `react-core`/`vue`/`angular` 的硬依赖中，导致所有安装都拉入 `@modelcontextprotocol/ext-apps` 与 SDK。诉求：**安装体积与依赖最小化**，希望改为 optional peer dependency（runtime 侧已做 lazy 处理）。
3. **[#8551](https://redirect.github.com/CopilotKit/CopilotKit/issues/8551) + [#8552](https://redirect.github.com/CopilotKit/CopilotKit/pull/8552)** — 报告者 Harsh23Kashyap 当日提交 issue 并附上修复 PR，是典型的健康社区贡献闭环，也反映 Python/CrewAI 用户群体在真实使用中遇到 LLM 输出截断类脏数据。
4. **[#8493](https://redirect.github.com/CopilotKit/CopilotKit/pull/8493)** — 社区贡献者 egg119 依据维护者 @​BenTaylorDev 的分析（#8025 中的 option 2）实现 CORS 修复，展示了 issue 分析 → 外部贡献落地的协作模式。

---

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#8551](https://redirect.github.com/CopilotKit/CopilotKit/issues/8551)：`sdk-python` 的 `crewai_flow_messages_to_copilotkit` 在 tool call `arguments` 为空串/截断/缺失/null 时 `json.loads` 崩溃（含 `max_tokens` 截断场景） | ✅ 已有修复 PR [#8552](https://redirect.github.com/CopilotKit/CopilotKit/pull/8552)（当日提交，待合并） |
| 🔴 高（安全） | #8025：`cors: { credentials: true }` 且未配 `origin` 时，runtime 将请求自身 `Origin` 反射进 CORS 头，任意来源均获凭据放行 | 🔧 修复 PR [#8493](https://redirect.github.com/CopilotKit/CopilotKit/pull/8493) 开放中（11-19 提交） |
| 🟠 中高 | [#8539](https://redirect.github.com/CopilotKit/CopilotKit/issues/8539)：Channels 无法在 Cloudflare Workers 运行——`channels-core` 加载期调用 `createRequire`，且 `channels-intelligence` 被变量标识符导入；是 #6919 关闭结论（"不在 Worker bundle 内"）的**反例回归** | ❌ 暂无修复 PR |
| 🟠 中 | #8192（由 PR 引用）：Next.js 16 `cacheComponents` 下 `<CopilotChat>` 的 agent discovery 请求不触发、发送按钮禁用（Client Component 不稳定值报错） | 🔧 部分修复 PR [#8557](https://redirect.github.com/CopilotKit/CopilotKit/pull/8557)（今日提交，SSR 安全 fallback thread id） |
| 🟡 低中 | 2.0 客户端 + 1.x runtime 组合下 generative UI 被静默关闭、无任何提示 | 🔧 修复 PR [#8554](https://redirect.github.com/CopilotKit/CopilotKit/pull/8554) 评审中 |
| 🟡 低（CI） | 发布后 npm tarball 未就绪（404）导致 starter 冒烟测试失败 | 🔧 修复 PR [#8549](https://redirect.github.com/CopilotKit/CopilotKit/pull/8549) 开放中；同类发布问题 [#8550](https://redirect.github.com/CopilotKit/CopilotKit/pull/8550) 已修复 |

---

## 6. 功能请求与路线图信号

**强烈信号：2.0 正式版临近。** [#8185](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185)（2.0.0 主体，标注 WIP）+ [#8556](https://redirect.github.com/CopilotKit/CopilotKit/pull/8556)（全部 starter 已用官方 codemod 完成 2.0 迁移）+ [#8555](https://redirect.github.com/CopilotKit/CopilotKit/pull/8555)（文档改用 `@next` 安装 RC）+ [#8554](https://redirect.github.com/CopilotKit/CopilotKit/pull/8554)（1.x/2.0 互通）四者同时活跃，且 v1.90.x 连续补丁说明 1.x 线进入维护期。**判断：2.0 RC→stable 将是下一个大版本内容。**

其他纳入可能性评估：
- **[#8115](https://redirect.github.com/CopilotKit/CopilotKit/issues/8115) optional peer dependency**：runtime 已 lazy 化，改造范围明确，很可能随 2.0 一并解决（依赖结构重构的天然窗口）。
- **[#6824](https://redirect.github.com/CopilotKit/CopilotKit/issues/6824) MCP Apps 规范对齐**：持续更新中，与 v1.90.1 的 fullscreen 支持方向一致，属中长期路线图。
- **[#7971](https://redirect.github.com/CopilotKit/CopilotKit/pull/7971) langgraph-fastapi-auth starter**：Next.js + LangGraph + FastAPI + AG-UI 认证示例，丰富集成模板矩阵。
- **[#8558](https://redirect.github.com/CopilotKit/CopilotKit/pull/8558)**：staging Dojo 通过环境变量暴露预览集成，降低新集成的上架门槛，暗示 Showcase 集成列表将继续扩张。

---

## 7. 用户反馈摘要

从 Issue/PR 描述与评论提炼的真实痛点：

- **安装负担**：不渲染 MCP App 的用户也被迫安装 `@modelcontextprotocol/ext-apps` + SDK（[#8115](https://redirect.github.com/CopilotKit/CopilotKit/issues/8115)），反映前端开发者对 node_modules 体积的敏感。
- **边缘/Serverless 部署受限**：Cloudflare Workers 用户 Hosting Channel 时被 Node 专用 API（`createRequire`）阻断（[#8539](https://redirect.github.com/CopilotKit/CopilotKit/issues/8539)），说明有真实用户把 Channels 部署到非 Node 运行时。
- **LLM 输出的脏数据现实**：CrewAI 用户在持久化 flow state 中遇到空/截断的 tool call arguments 导致整条转换链崩溃（[#8551](https://redirect.github.com/CopilotKit/CopilotKit/issues/8551)）——这是对"LLM 输出不可信需防御性解析"的典型案例反馈。
- **前沿框架适配压力**：Next.js 16 `cacheComponents` 早期采用者直接踩坑（[#8557](https://redirect.github.com/CopilotKit/CopilotKit/pull/8557)），说明用户群中有相当比例的尝鲜者，对框架新特性的快速兼容是留存关键。
- **安全意识增强（正向）**：社区主动要求凭据 CORS 显式 origin（[#8493](https://redirect.github.com/CopilotKit/CopilotKit/pull/8493)）、Python quickstart 补齐 fail-closed 的 `authorization_scope_resolver` 示例（[#8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309)）——用户在生产化场景中认真对待认证边界。
- **满意度信号**：issue 报告当日获修复 PR、release 流水线问题当日修复（#8550/#8549），响应速度获得隐性正向反馈。

---

## 8. 待处理积压

建议维护者关注以下长期未闭环事项：

| 项目 | 开启时间 | 闲置时长 | 说明 |
|---|---|---|---|
| [Issue #6824](https://redirect.github.com/CopilotKit/CopilotKit/issues/6824) | 09-01 | **~12 周** | MCP Apps 规范差距追踪，5 条评论，尚未分配明确里程碑 |
| [PR #7697](https://redirect.github.com/CopilotKit/CopilotKit/pull/7697) | 10-08 | **~7 周** | 通用 AG-UI agent 完成事件等待修复（含回归覆盖），评审周期偏长 |
| [PR #7971](https://redirect.github.com/CopilotKit/CopilotKit/pull/7971) | 10-24 | **~1 个月** | 社区贡献的 langgraph-fastapi-auth starter，等待评审，拖久易劝退贡献者 |
| [Issue #8115](https://redirect.github.com/CopilotKit/CopilotKit/issues/8115) | 10-30 | ~25 天 | 依赖最小化诉求，建议至少给出纳入 2.0 与否的官方回复 |
| [PR #8185](https://redirect.github.com/CopilotKit/CopilotKit/pull/8185) | 11-03 | ~3 周 | 2.0.0 主体 PR（明确 WIP），需关注其收敛计划 |
| [PR #8309](https://redirect.github.com/CopilotKit/CopilotKit/pull/8309) / [#8432](https://redirect.github.com/CopilotKit/CopilotKit/pull/8432) | 11-10 / 11-17 | 1–2 周 | 文档栈（7-PR stack），栈式 PR 逐层合并周期偏慢会阻塞上层 |

**总体积压画像**：30 条待合并 PR 中约 1/3 已等待超过 2 周，建议优先消化文档栈与安全修复（#8493、#8552），并尽快对 #6824、#8115 两条高关注 Issue 给出路线图定性，以维持当前良好的社区响应口碑。

---

*本报告基于 GitHub 公开数据自动生成，统计窗口为过去 24 小时。PR 评论数数据缺失，热点分析以 Issue 评论数据为主。*

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*