# 生成式 UI 生态日报 2026-10-24

> Issues: 80 | PRs: 139 | 覆盖项目: 4 个 | 生成时间: 2026-10-24 03:50 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告

**数据基准日：2026-10-24 · 覆盖项目：a2ui / OpenUI / json-render / CopilotKit**

---

## 一、生态全景

生成式 UI 生态正从"能力扩张"转入"质量收口"：四个项目当日工作重心全部落在流式管线正确性、安全边界加固与静默失败治理上，新功能让位于稳定性收敛。互操作标准开始产生实际引力——A2UI 规范一边由 a2ui 原生冲刺 v1.0，一边被 CopilotKit 以 Playground 和标准 catalog 全面接入，MCP 的 headless 消费同步落地，框架层选型正向协议层收敛。工程成熟度明显分层：a2ui 以 conformance 套件与合规审计冲刺 v1.0，CopilotKit 的 v1.80.0 版本列车在轨且单日 Issue 净消化为正，json-render 单日连发两个补丁版本走小步快跑路线，OpenUI 处于修复收尾+发版准备阶段。跨项目用户痛点高度趋同：流式渲染静默失败、token 上下文开销、依赖兼容性是当日共振最强的三大反馈主题。

---

## 二、各项目活跃度对比

| 项目 | Issue 更新 | Issue 关闭 / 新开活跃 | PR 更新 | PR 已关闭 / 待合并 | Release | 当日主线 |
|---|---|---|---|---|---|---|
| **a2ui** | 39 | 19 / 20 | 50 | 8 / 42 | 0（v1.0 冲刺中） | Bug Bash 收尾 + MCP 目录生态 |
| **CopilotKit** | 26 | 15 / 11 | 60 | 31 / 29 | 0（v1.80.0 流程已走完） | 安全加固 + A2UI 生态扩张 |
| **json-render** | 10 | 5 / 5 | 19 | 14 / 5 | **2**（v0.21.2 / v0.21.3） | 流式管线深审 + 积压清零 |
| **OpenUI** | 5 | 0 / 5 | 10 | 4 / 6 | 0（发版 PR #1461 在途） | lang-core 解析修复 + 发版准备 |

**读法提示**：
- **总量**：a2ui（89 条）与 CopilotKit（86 条）为第一梯队，json-render（29）、OpenUI（15）量级较小——但前两者为多包 monorepo，数字含自动化 bot 流量。
- **净消化**：CopilotKit 为唯一明确净消化积压的项目（关 15 / 增 11）；a2ui 大致持平（"清仓换新"节奏）；json-render 持平；OpenUI Issue 关闭为 0。
- **产出密度**：json-render 以 29 条动态产出 2 个版本，单位活动交付率最高；OpenUI 单日完成 issue→fix PR 闭环（#1463→#1464）。

---

## 三、共同关注的功能方向

**1. 流式管线的容错与正确性（4/4 项目命中，当日最强共振）**

LLM 产出的是"不完美文本"，解析层如何宽容且可预测地处理是共同战场：
- OpenUI：#1440 fence 误判致整页空白渲染、#1445 裸换行转义静默失效、#1463 括号丢失改变表达式语义
- json-render：#419 fence 状态跨块泄漏丢正文、#421 逐字符 delta（2000 字 ≈ 2000 次网络分块）、#423 重建文本≠原文
- CopilotKit：#7951 RN 端 60s 硬超时切断长 agent run、#7946 流式数字截断跳变（`100` 先渲染为 `1`）
- a2ui：#3598 TS Express 三项缺陷含"无法流式输出"

**2. 静默失败与可观测性（4/4）**

json-render #420 直接请求 `onInvalid` 钩子（无效 patch 行零上报）；OpenUI 两条高影响 bug 均"无报错、用户难自查"；a2ui #3598 静默丢 userMessage；CopilotKit #7846 注入警告噪音。共性诉求：生产环境需要"无效输入有出口、失败可定位"。

**3. Token 成本与 prompt 结构瘦身（3/4）**

- CopilotKit #7802：5 组件 catalog ≈ 10k 字符 schema，且默认双重发送
- a2ui #3576：系统提示词中协议细节淹没用户问题（#3559/#3562 推动 schema 移入 base rules）
- OpenUI #706：Zod `.describe()` 字段指引从未进入 prompt（修复 PR #1462 在途）

**4. 安全信任边界加固（3/4）**

a2ui 单日三项待 triage：权限绕过（#3483）、SSRF CGNAT 穿透（#3570）、原型污染（#3593）；json-render v0.21.3 落地 JSON Pointer 继承属性防护；CopilotKit #7930 完成 Teams JWT 验证 + serviceUrl 钉扎。共性认知浮现：生成式 UI 本质是"执行不可信描述"，沙盒帧、外部 schema、模型输出均是不可信输入面。

**5. A2UI / MCP 标准互操作（2/4，战略意义最强）**

a2ui 推进 catalog-mcp PR 栈实现"无 LLM 往返消费 MCP 工具"；CopilotKit #7965 A2UI Playground 明确走标准 catalog，A2UIProvider/createCatalog 系列修复密集落地。

---

## 四、差异化定位分析

| 维度 | a2ui | OpenUI | json-render | CopilotKit |
|---|---|---|---|---|
| **生态位** | 协议规范的官方参考实现 | 框架语言层 | 轻量流式渲染原语 | 全栈 agent 应用框架 |
| **技术路线** | 多语言 SDK（Python/TS/web_core/Dart/Swift）+ conformance 测试矩阵 | Zod schema 驱动 prompt/渲染，CLI + Cloud Artifacts 平台化 | JSONL / JSON Patch（RFC 6902）流式协议，多框架适配 | AG-UI 协议 + runtime + Intelligence 云平台 |
| **目标用户** | 跨语言企业部署、规范遵从方 | 前端开发者（React/RN/Svelte） | AI SDK 集成方、生产级流式应用 | 企业 copilot 应用团队 |
| **质量护城河** | 规范一致性 + 自动化审计 | 社区自修复效率 | 修复吞吐 + 社区贡献消化管线 | 发布自动化 + 快速闭环响应 |
| **迭代阶段** | v1.0 收敛期 | 0.x 增长期 | 0.21.x 补丁节奏 | 1.80 成熟维护期 |

**关键差异点**：
- **协议 vs 产品**：a2ui 卖"规范一致性"（同一文法五种实现的行为对齐），CopilotKit 卖"集成完备性"（MCP/A2UI/多渠道/云平台一站式），OpenUI 与 json-render 卖"渲染内核"。
- **语言广度 vs 框架广度**：a2ui 纵向覆盖五语言 SDK，CopilotKit 横向覆盖 React/Vue/Angular/RN 四端——分别代表"跨语言"与"跨框架"两条一致性路线。
- **重量级差异**：json-render 以极小 API 面 + 单日双补丁的节奏取胜，是四个项目中唯一无 monorepo 负担的轻量选项。

---

## 五、社区热度与成熟度

**活跃度排序**：a2ui ≈ CopilotKit（86–89 条/日）＞ json-render（29）＞ OpenUI（15）。

**社区结构差异**：
- **a2ui**：约 10 位核心贡献者分布式产出；社区呈"重论证轻 reaction"特征（多轮技术往返、👍 全为 0），是规范驱动型社区的典型形态
- **CopilotKit**：多维护者 + 社区双轨，响应迅速、高质量报告当日闭环；但 v1→v2 迁移长帖（#6408，17 评论、8 月至今）是信任管理的主要考验
- **json-render**：外部贡献者五连报（#419–#423）质量接近代码审查报告，社区输入质量极高；但吞吐高度依赖单一贡献者 lahfir（co-author 署名机制正在缓解集中度风险）
- **OpenUI**：社区自修复能力突出（同日 issue→PR 闭环、4 个月积压获认领），但当日 Issue 关闭为 0，已关闭 PR 全部来自单一维护者

**阶段判断**：json-render、OpenUI 处于**快速迭代期**（发版在途、下版本主题已由新 Issue 群勾勒）；a2ui、CopilotKit 处于**版本收敛期**。成熟度上，CopilotKit 商业化最成熟，a2ui 工程流程最成熟（合规审计、scaling conformance、CI 自动追踪），属不同维度。

---

## 六、值得关注的趋势信号

**1. 流式容错成为下一轮竞争分水岭。** 当日四项目合计 10+ 条流式相关缺陷，根因一致：解析层假设了规范输入。解析器正从"严格解析"转向"宽容解析 + 可观测失败 + 可恢复状态"。→ *选型时应把 fence/转义/部分 JSON 的边界行为与失败上报通道当作验收项，而非只看 happy path demo。*

**2. 生成式 UI 正走到"协议化"拐点。** A2UI 同时在原生实现与第三方框架落地（CopilotKit 接入标准 catalog 是标志性事件），MCP headless 消费消除了对特定 LLM 的依赖——作用类比 LSP 之于编辑器生态。→ *优先评估 A2UI/MCP 兼容性，避免锁定私有渲染协议。*

**3. Token 经济学进入用户议程。** schema 双重发送（10k 字符/5 组件）与协议细节占比过高被精确量化投诉，prompt 结构调整在三个项目并行发生。→ *生成式 UI 的隐藏成本 = 上下文成本，落地前应实测 catalog schema 的 token 开销。*

**4. 安全面与 Web 安全早期问题同构。** 原型污染、SSRF、权限绕过、origin 隔离在三个项目连续出现，本质是"执行不可信描述"带来的攻击面。→ *部署时默认开启沙盒帧与权限模型，把安全评审前置到架构阶段而非事后补丁。*

**5. Agent 成为 DX 的一级评估对象。** OpenUI 为 agent 设计非阻塞 CLI 登录、a2ui 推进无 LLM 往返的 MCP 消费、CopilotKit 构建 CI 诊断 agent。→ *文档与接口的机器可读性、非阻塞交互设计将直接影响 agent 生态内的采用。*

**6. 依赖卫生与社区结构是选型的隐藏变量。** Zod 3/4 冲突致 1683 个类型错误说明依赖断层可直接阻断采用；json-render 与 OpenUI 均存在单点贡献者集中度问题。→ *企业选型除功能清单外，应评估贡献者分布、发版节奏与依赖升级时间表——比 star 数更能预测可持续性。*

---

**一句话结论**：Q4 的生成式 UI 竞争已从"渲染能力"转向"流式可靠性 + 协议兼容性 + 信任边界"三位一体。轻量场景可选 json-render 类高节奏原语库；框架集成优先验证 A2UI/MCP 兼容性与 token 开销；生产部署则应将沙盒隔离与失败可观测性作为前置条件。

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目动态日报 · 2026-10-24

**仓库**：[a2ui-project/a2ui](https://github.com/a2ui-project/a2ui)
**数据窗口**：过去 24 小时 · Issues 更新 39 条（新开/活跃 20，关闭 19）· PR 更新 50 条（待合并 42，合并/关闭 8）· 新版本发布 0

---

## 1. 今日速览

- 项目处于**高活跃度**状态：单日 89 条 Issue/PR 更新，涉及 polina-c、ditman、josemontespg、innkuika、nan-yu、karolkulesza 等约 10 位核心贡献者，工作流自动化（合规审计机器人、E2E 失败追踪机器人）运转正常，工程成熟度高。
- 当前主线明确：**v1.0 Bug Bash 收尾 + MCP/iFrame 目录生态建设**。今日新增多条带 `v1-bug-bash` 标签的跨 SDK 一致性与安全缺陷，同时一批历史合规报告与已修复 Bug 被批量关闭，仓库进入 v1.0 发布前的清理阶段。
- josemontespg 的 MCP 目录 PR 栈持续推进，今日新开安全修复 PR [#3593](https://redirect.github.com/a2ui-project/a2ui/pull/3593) 及三个 catalog-mcp 功能 PR。
- **风险信号**：主分支 E2E 测试失败（[#3595](https://redirect.github.com/a2ui-project/a2ui/issues/3595)），且存在 3 个待 triage 的安全相关问题，建议维护者优先处理。

---

## 2. 项目进展

> 本日无版本发布。PR 侧"已合并/关闭 8 条"未给出具体编号，以下进展依据 Issue 关闭状态与 PR 描述推断。

**规范与核心修复（本日关闭）**
- [#3232](https://redirect.github.com/a2ui-project/a2ui/issues/3232)（P1，5 评论）：**跨目录 $ref 引用支持**在 Core 与 Agent SDK 落地——多目录 agent 部署（Basic Catalog + 自定义目录共享 Button.action 等场景）成为一等公民，是本周期最重要的能力补全。
- [#3019](https://redirect.github.com/a2ui-project/a2ui/issues/3019)（P1，4 评论）：Express `NUMBER` 文法在 Python/TypeScript 间的解析与反编译不一致已修复，并补齐了边界 conformance 用例。
- [#3410](https://redirect.github.com/a2ui-project/a2ui/issues/3410)：Python Express 编译器将字面量 map 中的 `variable` 键误判为 AST 变量引用、导致整个 map 被替换/载荷损坏的严重 bug 已关闭。
- [#3528](https://redirect.github.com/a2ui-project/a2ui/issues/3528)（v1-bug-bash）：Python 校验器违反规范通过 HTTP 拉取 peer catalog 的行为已修复关闭。
- [#3039](https://redirect.github.com/a2ui-project/a2ui/issues/3039)：web_core 中 `and/or/not` 拒绝 `ValidationResult` 操作数、导致登录表单永远无法提交的问题已关闭。
- [#2935](https://redirect.github.com/a2ui-project/a2ui/issues/2935)：v0.9.1 流解析器相对路径被改写为绝对路径的问题已关闭。

**质量基础设施建设**
- [#3315](https://redirect.github.com/a2ui-project/a2ui/issues/3315) / [#3316](https://redirect.github.com/a2ui-project/a2ui/issues/3316)：Python 与 TypeScript 的 **scaling conformance suites** 均已关闭——`measure_growth`（n vs 4n 负载、超 8 倍耗时即失败，可捕获平方级开销）等时序用例正式接入两套 SDK，为性能回归提供了机制性防护。
- 批量关闭 6 份历史 Weekly Compliance Report（[#2025](https://redirect.github.com/a2ui-project/a2ui/issues/2025)、[#2194](https://redirect.github.com/a2ui-project/a2ui/issues/2194)、[#2556](https://redirect.github.com/a2ui-project/a2ui/issues/2556)、[#2666](https://redirect.github.com/a2ui-project/a2ui/issues/2666)、[#2873](https://redirect.github.com/a2ui-project/a2ui/issues/2873)、[#2063](https://redirect.github.com/a2ui-project/a2ui/issues/2063)），显著降低 Issue 列表噪音。

**进行中的关键 PR**
- [#3555](https://redirect.github.com/a2ui-project/a2ui/pull/3555)：`callRendererFunction` 缺 `catalogId` 时从"抛校验错误、agent 静默等待超时"改为按规范回复 `INVALID_FUNCTION_CALL`——修复的是一个会直接挂死 agent 的交互缺陷。
- [#3593](https://redirect.github.com/a2ui-project/a2ui/pull/3593)（今日新开）：修复 `DataModelSync.applyChange` 用 `paths[change.key]` 查找导致沙盒帧可借继承属性名（`toString`/`constructor`/`__proto__`）解析到继承函数的安全问题。
- MCP 目录栈：[#3573](https://redirect.github.com/a2ui-project/a2ui/pull/3573)（parseJson/jmespath/updateDataModel）、[#3574](https://redirect.github.com/a2ui-project/a2ui/pull/3574)（split/regexCapture/regexReplace）、[#3577](https://redirect.github.com/a2ui-project/a2ui/pull/3577)（filesystem 样例迁移至 v1.0）、[#3578](https://redirect.github.com/a2ui-project/a2ui/pull/3578)（Promise 参数先 settle 再校验）。

**整体评估**：净 Issue 数大致持平（关 19 / 增 20），但关闭项多为存量实质缺陷，新增项为 bug bash 产出——属于健康的"清仓换新"节奏，v1.0 收敛趋势明确。

---

## 3. 社区热点

| 讨论串 | 热度 | 状态 | 核心诉求 |
|---|---|---|---|
| [#3416](https://redirect.github.com/a2ui-project/a2ui/issues/3416) RFC：统一 prompt 与 skill 生成 API | 4 评论 | **OPEN** | Agent SDK 现有 `PromptGenerator` 与 skill 生成两套并行公共 API，ditman 提议合并为单一入口——直接决定 SDK 公共接口的演进方向，是当前唯一活跃的设计层讨论 |
| [#2025](https://redirect.github.com/a2ui-project/a2ui/issues/2025) 周度合规报告 | 6 评论 | 已关闭 | gspencergoog 发起的全仓审计，结论"代码库整体健康、blueprint 合规性全面"，为 v1.0 提供质量背书 |
| [#3232](https://redirect.github.com/a2ui-project/a2ui/issues/3232) 跨目录 $ref | 5 评论 | 已关闭 | nan-yu 代表的多目录部署用户诉求，已实现 |
| [#3019](https://redirect.github.com/a2ui-project/a2ui/issues/3019) 数字字面量跨 SDK 差异 | 4 评论 | 已关闭 | 暴露"同一文法、多种语言实现"的一致性缝隙，修复时补齐了 conformance 覆盖 |
| [#3576](https://redirect.github.com/a2ui-project/a2ui/issues/3576) 模型思考被 A2UI 细节淹没 | 1 评论 | OPEN | polina-c 指出用户等待回答时读到的是 schema/surface ID/JSON 校验，而非自己的问题——终端 UX 层面的真实痛点 |

**模式观察**：所有 Issue 的 👍 均为 0，但评论深度高（多轮技术往返）——这是一个规范驱动、以文字论证为主的重技术社区，热度应按评论质量而非 reaction 衡量。

---

## 4. Bug 与稳定性（按严重程度排列）

**🔴 CI 阻断**
- [#3595](https://redirect.github.com/a2ui-project/a2ui/issues/3595)：**主分支 E2E 测试失败**（commit `409ded2`，关联 PR [#3590](https://redirect.github.com/a2ui-project/a2ui/pull/3590)）。CI 红灯会阻塞整个 PR 队列，**尚无 fix PR**，为当前最高优先级。

**🟠 P1 / 安全**
- [#3483](https://redirect.github.com/a2ui-project/a2ui/issues/3483)（v1-bug-bash）：web_core `createCatalogInvoker` 未检查 `allowedCallers === 'agentOnly'`，**UI 绑定与动作可执行 agent 专属函数**——违反 v1.0 协议第 327 行的明确限制，属权限绕过，needs-triage，**无 fix PR**。
- [#3596](https://redirect.github.com/a2ui-project/a2ui/issues/3596)（P1）：规范自相矛盾——`callRendererFunction` 缺 `catalogId` 时 JSON schema 判为 malformed，协议文档却要求回复 `INVALID_FUNCTION_CALL`。行为侧已有 fix PR [#3555](https://redirect.github.com/a2ui-project/a2ui/pull/3555)（web_core），**规范文档本身仍待修订**。
- [#3598](https://redirect.github.com/a2ui-project/a2ui/issues/3598)：TypeScript Express 三项缺陷——**丢弃 userMessage、列表项函数调用误编译、无法流式输出**，前两项静默丢数据，**无 fix PR**（KNOWN_GAPS.md 已登记）。
- [#3570](https://redirect.github.com/a2ui-project/a2ui/issues/3570)（v1-bug-bash）：Python `FileResolver` SSRF 检查遗漏 CGNAT 段 `100.64.0.0/10`，`100.64.0.1` 可穿透；改用 `ip.is_global` 即可拦截，**无 fix PR**。
- [#3593](https://redirect.github.com/a2ui-project/a2ui/pull/3593)：DataModelSync 继承键解析漏洞（沙盒帧可触发 `__proto__`/`constructor` 查找），**fix PR 今日已提交，审查中**。

**🟡 中等**
- [#3560](https://redirect.github.com/a2ui-project/a2ui/issues/3560)（v1-bug-bash）：Python `MessageProcessor` 接受非 UAX 31 的 `metadata.extensions` 键，web_core/Dart/Swift 均拒绝——跨 SDK 校验不一致，无 fix PR。
- [#2934](https://redirect.github.com/a2ui-project/a2ui/issues/2934)（P1）：`parse_and_fix` 无差别替换弯引号，导致含排版引号的**合法 JSON 解析失败**——开放 23 天，无 fix PR。

**✅ 本日修复关闭**：[#3410](https://redirect.github.com/a2ui-project/a2ui/issues/3410)、[#3019](https://redirect.github.com/a2ui-project/a2ui/issues/3019)、[#3039](https://redirect.github.com/a2ui-project/a2ui/issues/3039)、[#3528](https://redirect.github.com/a2ui-project/a2ui/issues/3528)、[#2935](https://redirect.github.com/a2ui-project/a2ui/issues/2935)。

**安全专项提示**：#3483（权限绕过）、#3570（SSRF）、#3593（继承键注入）三日连续出现，建议对 web_core 与 Python SDK 的输入信任边界做一次集中安全评审。

---

## 5. 功能请求与路线图信号

**Agent SDK 公共 API 演进（信号最强）**
- [#3416](https://redirect.github.com/a2ui-project/a2ui/issues/3416)（RFC，统一 prompt/skill 生成）+ [#3592](https://redirect.github.com/a2ui-project/a2ui/issues/3592)(清理 TS API 中的 Python 习语残留，#3397 评审后续) + [#3597](https://redirect.github.com/a2ui-project/a2ui/issues/3597)（agent+renderer 双角色应用 API 空缺）三条线索汇聚：**SDK 表面积简化与本地化重构**大概率是 v1.0 后的首要方向。
- [#3562](https://redirect.github.com/a2ui-project/a2ui/issues/3562)：TS Direct JSON prompt generator 需同步 Python 侧 #3559 的"协议 schema 移入 base rules"改动——跨 SDK 对齐仍在收尾。

**MCP/iFrame 生态（投入最大）**
- [#3573](https://redirect.github.com/a2ui-project/a2ui/pull/3573) / [#3574](https://redirect.github.com/a2ui-project/a2ui/pull/3574) 补齐 headless MCP 工具消费所需的 6 个函数后，`@a2ui/catalog-mcp` 将具备"无 LLM 往返消费 MCP 工具输出"的完整能力，配合 [#3577](https://redirect.github.com/a2ui-project/a2ui/pull/3577) 样例迁移，**具备纳入下一个 minor 版本的条件**。

**渲染器矩阵与规范实现**
- [#3405](https://redirect.github.com/a2ui-project/a2ui/issues/3405)：Angular 渲染器迁移至 Angular 22（当前锁 ^21.2.5）。
- [#2838](https://redirect.github.com/a2ui-project/a2ui/issues/2838)（P2）：表达式解析器全面支持 UAX 31 标识符——v1.0 规范已强制要求，与 #3560 构成同一收敛目标。
- [#3282](https://redirect.github.com/a2ui-project/a2ui/issues/3282)：Swift 包发布纳入 gardening rotation，发布流程制度化。
- [#3599](https://redirect.github.com/a2ui-project/a2ui/issues/3599)：补全"direct JSON vs Express 选型"官方文档。

---

## 6. 用户反馈摘要

- **真实场景浮出水面**：polina-c 在 [#3597](https://redirect.github.com/a2ui-project/a2ui/issues/3597) 描述了"浏览器端 React 聊天直连 Gemini、同一应用同时扮演 agent 与 renderer"的双角色用法——此前 API 设计未覆盖此类混合宿主，是来自一线的架构反馈。
- **Express 格式尚不可用是最大不满**：[#3598](https://redirect.github.com/a2ui-project/a2ui/issues/3598) 明确表示因 TS Express 的静默丢数据缺陷，v1.0 聊天被迫停留在 direct JSON；[#3599](https://redirect.github.com/a2ui-project/a2ui/issues/3599) 的文档请求同源于"两种格式如何取舍"的困惑。**格式选型指导 + Express 补齐**是用户侧最直接的期待。
- **终端用户体验诉求**：[#3576](https://redirect.github.com/a2ui-project/a2ui/issues/3576) 反馈"用户问的是自己的问题，读到的却是协议"——系统提示词中协议细节占比过高，与 #3559/#3562 的 prompt 结构调整方向直接呼应。
- **跨 SDK 一致性是社区核心关切**：bug bash 参与者（innkuika、karolkulesza、josemontespg）连续报告 Python/TS/web_core/Swift 行为分叉（#3560、#3570、#3483、#3019），"同一规范、多语言实现"的一致性是社区衡量项目质量的第一维度。
- **正面信号**：[#2025](https://redirect.github.com/a2ui-project/a2ui/issues/2025) 合规审计确认"整体健康、blueprint 合规全面"；scaling conformance suites 落地（#3315/#3316）让一致性从人工审计升级为自动化保障。

---

## 7. 待处理积压

| 条目 | 开放时长 | 风险 | 建议 |
|---|---|---|---|
| [#2934](https://redirect.github.com/a2ui-project/a2ui/issues/2934) P1 弯引号解析 | **23 天**（10-01 起） | 数据破坏 | 已 first-line-handled 但无 fix PR，建议排期 |
| [#2838](https://redirect.github.com/a2ui-project/a2ui/issues/2838) P2 UAX 31 标识符 | **26 天**（09-28 起） | 规范合规 | 与 #3560 同源，可合并处理 |
| iFrame PR 栈 [#2795](https://redirect.github.com/a2ui-project/a2ui/pull/2795) / [#2797](https://redirect.github.com/a2ui-project/a2ui/pull/2797) / [#2798](https://redirect.github.com/a2ui-project/a2ui/pull/2798) / [#2803](https://redirect.github.com/a2ui-project/a2ui/pull/2803) | **29 天**（09-25 起） | 阻塞整条栈 | 底层 schema/包 PR 久拖将放大合并冲突，建议优先评审解阻塞 |
| [#3008](https://redirect.github.com/a2ui-project/a2ui/pull/3008) / [#3009](https://redirect.github.com/a2ui-project/a2ui/pull/3009) / [#3010](https://redirect.github.com/a2ui-project/a2ui/pull/3010) 示例 PR | 19 天 | 同上 | 依赖底层栈 |
| [#3282](https://redirect.github.com/a2ui-project/a2ui/issues/3282) Swift 发布流程 | 8 天 | 流程债 | 文档类，可快速关闭 |
| [#3483](https://redirect.github.com/a2ui-project/a2ui/issues/3483) / [#3570](https://redirect.github.com/a2ui-project/a2ui/issues/3570) / [#3595](https://redirect.github.com/a2ui-project/a2ui/issues/3595) | 1–2 天 | **安全/CI** | 虽新报但风险高，建议插队处理 |

---

**健康度小结**：贡献节奏与质量基础设施（conformance 套件、合规审计、CI 自动追踪）均处于良好水平，v1.0 收敛路径清晰；短期需重点处置主分支 E2E 红灯与三项待 triage 的安全问题，中期需解开近一个月未合并的 iFrame/MCP 底层 PR 栈，避免栈式开发积压演变为重构成本。

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目日报 | 2026-10-24

**仓库**：[thesysdev/openui](https://github.com/thesysdev/openui) ｜ **数据窗口**：过去 24 小时

---

## 一、今日速览

OpenUI 今日活跃度处于中高水平：过去 24 小时 Issue 更新 5 条（全部为新开/活跃，0 条关闭），PR 更新 10 条（6 条待合并、4 条合并/关闭），无新版本发布。活动焦点高度集中在 `lang-core` 解析器正确性上——5 条活跃 Issue 中有 3 条指向解析/序列化缺陷，其中 [#1463](https://redirect.github.com/thesysdev/openui/issues/1463) 从报告到修复 PR 提交（[#1464](https://redirect.github.com/thesysdev/openui/pull/1464)）在同一天内闭环，显示社区自修复能力较强。同时，Changesets 自动开启的版本 PR [#1461](https://redirect.github.com/thesysdev/openui/pull/1461) 预示一次 npm 发版已在准备中。核心维护者 AbhinRustagi 贡献了今日全部 4 条已关闭 PR，推进节奏稳定；唯一短板是 Issue 关闭数为 0，两条高影响的解析器 Bug 仍无修复排期。

---

## 二、版本发布

本日无新版本发布。但需注意：Changesets 自动化于今日开启版本 PR [#1461](https://redirect.github.com/thesysdev/openui/pull/1461)（chore: version packages），合并后各 `@openuidev/*` 包将自动发布至 npm；配套的模板/示例依赖刷新 PR [#1438](https://redirect.github.com/thesysdev/openui/pull/1438) 也在待合并队列中，**预计近期有一次集中发版**，社区提交的两条 lang-core 修复（#1462、#1464）能否赶上该批次取决于评审速度。

---

## 三、项目进展

今日 4 条 PR 合并/关闭（均来自核心维护者 AbhinRustagi），主要推进三个方向：

1. **React Native 渲染修复落地**（[PR #1455](https://redirect.github.com/thesysdev/openui/pull/1455)）：`react-lang` 改为原生入口的 imports/exports，修复 `<Renderer>` 在 RN 上崩溃（"View config getter callback for component `div` must be a function"）。该问题经官方反馈渠道上报且已存在一段时间，此次修复显著恢复 RN 路径可用性。
2. **CLI 智能体体验**（[PR #1361](https://redirect.github.com/thesysdev/openui/pull/1361)）：登录改为非阻塞——浏览器登录在分离进程中运行，不再阻塞最长 5 分钟（超出多数 agent 的 shell 超时），直接服务"AI 智能体运行 CLI"核心场景。
3. **示例与文档**：[PR #1373](https://redirect.github.com/thesysdev/openui/pull/1373) 修复示例中切换/刷新会话后历史丢失（默认内存存储仅保留首条消息），改为 localStorage 持久化；[PR #1460](https://redirect.github.com/thesysdev/openui/pull/1460) 当日开启当日关闭，为 OpenUI Cloud Artifacts 提交开发者指南草稿，用于在 API 实现前先行评审 DX。

待合并队列（6 条）中含两条高质量社区修复：[#1462](https://redirect.github.com/thesysdev/openui/pull/1462)（Zod prop 描述纳入 prompt，关闭 #706）与 [#1464](https://redirect.github.com/thesysdev/openui/pull/1464)（序列化保留同优先级右操作数括号，关闭 #1463）。项目整体处于"**修复收尾 + 发版准备**"阶段。

---

## 四、社区热点

今日讨论最集中的主题是 **lang-core 解析器对非规范输入的容错性**：

- [#1440](https://redirect.github.com/thesysdev/openui/issues/1440)（2 条评论，本周评论最多的 Issue）：`stripFences` 将行中任意位置的三反引号视为 fence 开头，导致程序被截断、**整个响应渲染为空白**，且今日仍在活跃讨论，尚无修复 PR。
- [#706](https://redirect.github.com/thesysdev/openui/issues/706)（2 条评论，沉寂近 4 个月后因社区修复 PR #1462 复活）：Zod `.describe()` 字段指引从未进入 prompt，模型收不到字段级描述。
- [#1445](https://redirect.github.com/thesysdev/openui/issues/1445)（1 条评论）：双引号字符串含裸换行/Tab 时转义解码整体失效，用户看到 `\"hi\"` 而非 `"hi"`，流式渲染期间同样复现。

**诉求共性**：多位用户在真实生成流（尤其流式输出）中踩到解析边界条件，希望 lang-core 对模型产出的"不完美文本"更宽容、行为可预测。

---

## 五、Bug 与稳定性（按严重程度）

| 严重度 | 问题 | 修复状态 |
|---|---|---|
| 高 | [#1440](https://redirect.github.com/thesysdev/openui/issues/1440) `stripFences` 行中开 fence，响应整体渲染空白 | ❌ 无 fix PR，积压 8 天 |
| 中高 | [#1445](https://redirect.github.com/thesysdev/openui/issues/1445) 裸换行/Tab 导致转义解码静默失效（含流式期间） | ❌ 无 fix PR，积压 6 天 |
| 中 | [#1463](https://redirect.github.com/thesysdev/openui/issues/1463) `jsonToOpenUI` 丢弃右操作数括号，`$a - ($b - $c)` 变 `$a - $b - $c`，语义静默改变 | ✅ 同日修复 PR [#1464](https://redirect.github.com/thesysdev/openui/pull/1464) 已提交 |
| 已修复 | RN `<Renderer>` 崩溃（web `div` 泄漏至原生端） | ✅ PR [#1455](https://redirect.github.com/thesysdev/openui/pull/1455) 已关闭 |
| 已修复 | 示例聊天历史丢失（内存存储仅留首条） | ✅ PR [#1373](https://redirect.github.com/thesysdev/openui/pull/1373) 已关闭 |

**警示**：#1440 与 #1445 均表现为"静默失败/渲染空白"，无报错、用户难以自查，且同属 `lang-core` 解析层，建议合并排查。

---

## 六、功能请求与路线图信号

- **Svelte 5 / lang-core 1.0**（[#1465](https://redirect.github.com/thesysdev/openui/issues/1465)）：用户主动请缨将 `@openuidev/svelte-lang` 从 0.4 升至 1.0（#1379 遗留项），动机明确（需要 1.0 表单运行时），**纳入下一版本概率高**。
- **Zod 描述进 prompt**（[#706](https://redirect.github.com/thesysdev/openui/issues/706) + PR [#1462](https://redirect.github.com/thesysdev/openui/pull/1462)）：修复已就绪，是 #1461 发版的强候选。
- **CLI 任意仓库示例**（[PR #1392](https://redirect.github.com/thesysdev/openui/pull/1392)）：移除 `repo:` 的 owner 白名单，开放任意公开 GitHub 仓库脚手架，开放 12 天待评审。
- **Cloud Artifacts 路线图信号**（[PR #1460](https://redirect.github.com/thesysdev/openui/pull/1460)）：文档草稿透露 Gateway 将支持 live/static/slides/report 四类 artifact 与统一 server client API——"先评审 DX、后实现"的预发布设计，值得关注后续 API 落地。

---

## 七、用户反馈摘要

- **智能体/CLI 用户**：登录曾阻塞 agent 最长 5 分钟、超出常见 shell 超时，agent 只能在命令退出后才看到链接（#1361 已修复）——印证"CLI 需为 agent 而非仅人类设计"。
- **Svelte 用户**："0.4.2 渲染静态视图没问题，但表单等运行时特性需要 1.0"（#1465），迁移意愿明确。
- **React Native 用户**：崩溃经官方反馈渠道上报且长期存在，反映 RN 路径此前测试不足（#1455 已修复）。
- **示例使用者**：切换/刷新即丢聊天历史，默认存储行为低于预期（#1373 已修复）。
- **Prompt 工程用户**：精心编写的 `.describe()` 字段指引被静默丢弃，属"投入无效"型挫败（#706，修复中）。
- **普遍痛点**：lang-core 对流式/非规范输入的容错（空白渲染、转义失效、表达式语义漂移）是近期最密集的反馈区。

---

## 八、待处理积压

- [#1440](https://redirect.github.com/thesysdev/openui/issues/1440)：开启 8 天、2 条评论、直接影响渲染可用性，**尚无修复 PR**——建议优先排期。
- [#1445](https://redirect.github.com/thesysdev/openui/issues/1445)：开启 6 天，静默转义失效，无修复 PR。
- [PR #730](https://redirect.github.com/thesysdev/openui/pull/730)：7 月 7 日提交（约 3.5 个月），修复 Vue 示例 Markdown 渲染（#728），**当前最久未决的社区 PR**，建议尽快评审。
- [PR #1392](https://redirect.github.com/thesysdev/openui/pull/1392)：开放 12 天，待维护者评审。
- [PR #1438](https://redirect.github.com/thesysdev/openui/pull/1438)：开放 9 天，建议与发版（#1461）一并处理。
- [#706](https://redirect.github.com/thesysdev/openui/issues/706)：存在近 4 个月，修复 PR #1462 已提交，合并即可清偿积压。

---

**健康度小结**：社区贡献动能强劲（同日 issue→PR 闭环、长期积压获社区认领）、发版自动化成熟、核心维护者产出稳定；风险点在于 lang-core 解析层两条高影响静默 Bug（#1440、#1445）无人认领，以及 Vue 侧社区 PR 长期无响应。

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

# json-render 项目动态日报

**项目：** [vercel-labs/json-render](https://github.com/vercel-labs/json-render) | **日期：** 2026-10-24
**24h 数据：** Issues 更新 10 条（关闭 5 / 新开 5）· PR 更新 19 条（关闭 14 / 待合并 5）· 发布 2 个版本

---

## 一、今日速览

json-render 今日处于高强度维护冲刺状态：24 小时内连续发布 **v0.21.2 与 v0.21.3** 两个补丁版本，PR 活动量达 19 条，节奏显著高于常规。5 条历史 Issue 全部清零——包括 7 月报告的 [Tailwind 样式缺失](https://redirect.github.com/vercel-labs/json-render/issues/312)和 9 月的 [yaml-patch 状态同步缺陷](https://redirect.github.com/vercel-labs/json-render/issues/359)——显示维护者正在系统性消化积压。新开的 5 条 Issue（[#419](https://redirect.github.com/vercel-labs/json-render/issues/419)–[#423](https://redirect.github.com/vercel-labs/json-render/issues/423)）集中来自同一贡献者对 `@json-render/core` 0.21.0 流式实现的深度审查，直指状态管理、性能与可观测性，构成下一个修复周期的核心输入。值得注意的是，贡献者 lahfir 以极高频次提交修复，并将社区原始 PR 以 co-author 署名方式吸收重写（5 条社区 PR 被整合替代），呈现出高效的社区贡献消化管线。**整体健康度：优秀。**

---

## 二、版本发布

### v0.21.3（[PR #431](https://redirect.github.com/vercel-labs/json-render/pull/431)，2026-10-24）
- **YAML patch state：** `move`/`copy` 操作与后续 `yaml-edit` 保持同步、隔离拷贝值与输出值、限制 copy 增长（[#411](https://redirect.github.com/vercel-labs/json-render/pull/411)），修复 [Issue #359](https://redirect.github.com/vercel-labs/json-render/issues/359)
- **JSON Pointer paths：** 路径 helper 仅处理自有属性与稠密数组，忽略继承属性与越界数组索引（防原型污染类边界问题）

### v0.21.2（[PR #424](https://redirect.github.com/vercel-labs/json-render/pull/424)，2026-10-23）
- **Code generation：** 非标识符对象键加引号；序列化 props 时保留 `__proto__` 为自有属性（#407）
- **Production devtools：** 生产 bundle 正确替换 `process.env.NODE_ENV`，无浏览器 `process` 全平时 devtools 保持禁用

**迁移评估：** 两个版本均为纯 Bug Fix，无破坏性变更、无 API 变动，可作为补丁版本直接升级。使用 YAML transform 或在浏览器环境部署生产构建的用户建议尽快升级至 v0.21.3。

---

## 三、项目进展

今日 14 条关闭 PR 中，约 **9 条为合并**（含 2 个发版准备 PR），**5 条为被整合版替代关闭**：

| 类别 | PR | 内容 | 影响 |
|---|---|---|---|
| 核心-流编译 | [#414](https://redirect.github.com/vercel-labs/json-render/pull/414) | 重复 JSONL 行正确应用（移除 `processedLines` 去重） | 修复重复 `add` 操作丢数据 |
| 核心-YAML | [#411](https://redirect.github.com/vercel-labs/json-render/pull/411) | `move`/`copy` 状态同步 | 已进 v0.21.3，RFC 6902 完整性 |
| 文档-Solid | [#413](https://redirect.github.com/vercel-labs/json-render/pull/413) | 修复 Solid 快速开始崩溃 | 关闭 [#381](https://redirect.github.com/vercel-labs/json-render/issues/381)/[#382](https://redirect.github.com/vercel-labs/json-render/issues/382) |
| 文档-Next | [#416](https://redirect.github.com/vercel-labs/json-render/pull/416) | 混合消息部件有序渲染文档 | AI SDK 集成场景 |
| 文档-Jev | [#418](https://redirect.github.com/vercel-labs/json-render/pull/418) | 标注组合包自 0.21.0 已发布 | 消除"未发布"误导 |
| 示例 | [#415](https://redirect.github.com/vercel-labs/json-render/pull/415) | 修正 Tailwind `@source` 路径 | 关闭三个月前的 [#312](https://redirect.github.com/vercel-labs/json-render/issues/312) |
| 分发 | [#417](https://redirect.github.com/vercel-labs/json-render/pull/417) | skill 更名为 `json-render-shadcn` | 关闭 [#395](https://redirect.github.com/vercel-labs/json-render/issues/395) |

**被整合替代（原始社区贡献获 co-author 署名）：** [#351](https://redirect.github.com/vercel-labs/json-render/pull/351)→[#430](https://redirect.github.com/vercel-labs/json-render/pull/430)、[#318](https://redirect.github.com/vercel-labs/json-render/pull/318)→[#429](https://redirect.github.com/vercel-labs/json-render/pull/429)、[#402](https://redirect.github.com/vercel-labs/json-render/pull/402)→[#428](https://redirect.github.com/vercel-labs/json-render/pull/428)、[#383](https://redirect.github.com/vercel-labs/json-render/pull/383)→[#427](https://redirect.github.com/vercel-labs/json-render/pull/427)、[#425](https://redirect.github.com/vercel-labs/json-render/pull/425)→[#426](https://redirect.github.com/vercel-labs/json-render/pull/426)

**进展评估：** 单日覆盖核心正确性（流编译、YAML）、文档准确性（Solid/Next）、示例可用性（Tailwind）、分发命名四个层面，历史积压 Issue 清零，是一次广谱性的质量收口日。

---

## 四、社区热点

今日评论量整体偏低（单条最多 1 评论），热度主要体现在技术深度而非讨论量：

1. **peter-cynomi 的五连报（最重磅信号）**：[#419](https://redirect.github.com/vercel-labs/json-render/issues/419)–[#423](https://redirect.github.com/vercel-labs/json-render/issues/423) 于 10-23 密集提交，均针对 0.21.0 流式管线，含完整复现步骤与版本号标注，质量接近代码审查报告。其中 [#419](https://redirect.github.com/vercel-labs/json-render/issues/419) 已在**同一天**获得修复 PR（[#426](https://redirect.github.com/vercel-labs/json-render/pull/426)，且该 PR 又整合了另一位社区贡献者 WhyTan00 的 [#425](https://redirect.github.com/vercel-labs/json-render/pull/425)），社区→整合→待合并管线运转极快。
2. **shadcn skill 命名冲突**（[#395](https://redirect.github.com/vercel-labs/json-render/issues/395)，1 评论）：真实用户安装 skill 时覆盖了官方 shadcn skill，当日即由 [#417](https://redirect.github.com/vercel-labs/json-render/pull/417) 修复关闭——诉求是"与官方生态共存而非覆盖"。
3. **Solid 文档双 issue**（[#381](https://redirect.github.com/vercel-labs/json-render/issues/381)/[#382](https://redirect.github.com/vercel-labs/json-render/issues/382)，各 1 评论）：用户按 README 逐行复现失败，反映次主流框架文档验证缺位。

---

## 五、Bug 与稳定性

今日新报 5 个 Bug，全部位于流式处理链路，按严重程度排列：

| 严重度 | Issue | 问题 | Fix 状态 |
|---|---|---|---|
| 🔴 高 | [#419](https://redirect.github.com/vercel-labs/json-render/issues/419) | fence/行缓冲状态跨 text 块泄漏，**正文被静默丢弃**（数据丢失级） | ✅ 已有 [PR #426](https://redirect.github.com/vercel-labs/json-render/pull/426)（待合并） |
| 🟡 中 | [#422](https://redirect.github.com/vercel-labs/json-render/issues/422) | patch 行缩进空格泄漏为正文 | ❌ 暂无 PR |
| 🟡 中 | [#423](https://redirect.github.com/vercel-labs/json-render/issues/423) | `createMixedStreamParser` 丢弃换行与空行，重建文本 ≠ 原文（影响服务端持久化） | ❌ 暂无 PR |
| 🟡 中 | [#421](https://redirect.github.com/vercel-labs/json-render/issues/421) | 逐字符发 `text-delta`，2000 字回复 ≈ 2000 次网络分块 + 2000 次 UI 更新（性能） | ❌ 暂无 PR |
| 🟡 中 | [#420](https://redirect.github.com/vercel-labs/json-render/issues/420) | 无法解析的 patch 行要么混入正文、要么静默丢弃，零上报（兼具功能请求属性） | ❌ 暂无 PR |

**今日已修复：** [#359](https://redirect.github.com/vercel-labs/json-render/issues/359)（YAML move/copy，进 v0.21.3）、[#312](https://redirect.github.com/vercel-labs/json-render/issues/312)、[#395](https://redirect.github.com/vercel-labs/json-render/issues/395)、[#381](https://redirect.github.com/vercel-labs/json-render/issues/381)、[#382](https://redirect.github.com/vercel-labs/json-render/issues/382)。

---

## 六、功能请求与路线图信号

从新 Issue 与待合并 PR 交叉推断，下一版本主题大概率是**流式管线的健壮性与可观测性**：

- **错误可观测性 API**：[#420](https://redirect.github.com/vercel-labs/json-render/issues/420) 请求 `onInvalid` 钩子——目前无效 patch 行的静默处理对生产调试极不友好，属于典型路线图信号。
- **流式性能**：[#421](https://redirect.github.com/vercel-labs/json-render/issues/421) 请求正文 delta 批量化，直指长回复场景的传输与渲染开销。
- **持久化/回放 API**：[#423](https://redirect.github.com/vercel-labs/json-render/issues/423) 请求与流行为一致的整文切分导出，服务端保存原始回复的场景驱动。
- **待合并修复集群**：[#426](https://redirect.github.com/vercel-labs/json-render/pull/426)（fence 状态）、[#427](https://redirect.github.com/vercel-labs/json-render/pull/427)（JSX 字符串 props，修复 #379）、[#429](https://redirect.github.com/vercel-labs/json-render/pull/429)（min/max 数字字符串）、[#430](https://redirect.github.com/vercel-labs/json-render/pull/430)（email 校验 trim）均已就绪，合并后或构成 v0.21.4/v0.22.0。

---

## 七、用户反馈摘要

- **新手路径摩擦集中在文档与示例**：Solid 用户（coygeek）按 README 写的回调读不到 props、把标量当函数调用；chat 示例用户（adhamali450）遇到"类名正确但无样式"——Tailwind v4 跳过 `node_modules` 导致 `grid-cols-4` 等类无 CSS。这两类问题今日均已修复，但暴露出**文档示例缺少可运行性验证**的流程短板。
- **生态共存诉求**：skill 安装冲突（slargat）表明用户同时使用官方 shadcn skill，命名空间化（`json-render-shadcn`）是正确方向。
- **高级用户场景是服务端流式持久化**：peter-cynomi 的系列报告全部围绕"服务端保存模型原始回复后重建"展开——重建文本与流输出不一致、逐字符 delta 的性能代价，说明项目已进入**生产级流式应用**的深水区。
- **RFC 6902 合规性**：dajiaohuang 验证了 `move`/`copy` 在真实 YAML 工作流中的缺失，反映核心用户按标准语义使用 patch。

---

## 八、待处理积压

| 项目 | 状态 | 建议 |
|---|---|---|
| [#420](https://redirect.github.com/vercel-labs/json-render/issues/420) / [#421](https://redirect.github.com/vercel-labs/json-render/issues/421) / [#422](https://redirect.github.com/vercel-labs/json-render/issues/422) / [#423](https://redirect.github.com/vercel-labs/json-render/issues/423) | 新开，0 回应 | 四条流式问题尚无维护者回复，且其中三条无 fix PR，建议尽快 triage 定级 |
| [PR #426](https://redirect.github.com/vercel-labs/json-render/pull/426)–[#430](https://redirect.github.com/vercel-labs/json-render/pull/430) | 5 条待合并 | 修复+文档批次已就绪，是下个版本的直接输入 |
| [#312](https://redirect.github.com/vercel-labs/json-render/issues/312) 类示例问题 | 已关闭但历时 3 个月 | 建议对 examples 增加自动化构建/样式冒烟测试，防止同类问题长期潜伏 |

**风险提示：** 当前 Issue 响应与 PR 吞吐依赖高活跃单一贡献者（lahfir），存在贡献集中度风险；不过其 co-author 署名机制正在持续吸纳外部贡献者，管线本身是健康的。

---

*本日报基于 GitHub 公开数据自动汇总生成，"已合并"判定依据 Release Notes 与 PR 交叉引用推断。*

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报 · 2026-10-24

---

## 一、今日速览

过去 24 小时 CopilotKit 保持高强度迭代，共 86 条动态（Issues 26 条：新开/活跃 11、关闭 15；PRs 60 条：待合并 29、已合并/关闭 31）。Issue 关闭量（15）超过新开量（11），当日净消化积压，修复吞吐健康。无正式版本发布，但 v1.80.0 发布 PR 已于 10-23 走完流程，版本列车明显在推进。当日工作呈三条主线：**A2UI / 生成式 UI 生态扩张**、**跨 channels / MCP / runtime 的安全加固**、以及 react-core 内置组件的 UI 打磨。社区侧，Zod 4 兼容性（今日新开 [#7967](https://redirect.github.com/CopilotKit/CopilotKit/issues/7967)）成为升温最快的话题。整体健康度：良好偏优——吞吐大于新增、响应迅速；主要风险集中在依赖版本兼容与 React Native 流式链路。

---

## 二、版本发布

Releases 列表过去 24 小时无新条目，但发布管线有实质性动作，值得密切关注：

- [#7948](https://redirect.github.com/CopilotKit/CopilotKit/pull/7948) `chore: release monorepo v1.80.0`（copilotkit-bot 自动创建，10-23 关闭）——该 PR 若为合并关闭，v1.80.0 应已发布或即将发布；Releases 列表尚未出现对应条目，存在**发布延迟**或**流程中止**两种可能，建议持续跟踪。
- [#7949](https://redirect.github.com/CopilotKit/CopilotKit/pull/7949) 修复 `@copilotkit/learning` 发布轨道：该包此前走独立发布通道，仅在 10-02 发过 0.0.1 后停更，Core 存在依赖版本错配风险；现已纳入 monorepo 统一发布。
- 若 v1.80.0 生效，按合并记录预计包含：安全加固（[#7930](https://redirect.github.com/CopilotKit/CopilotKit/pull/7930)）、Messages 稳定 key 修复（[#7634](https://redirect.github.com/CopilotKit/CopilotKit/pull/7634)）、Learning 发布轨道修复（#7949）。**暂无已确认的破坏性变更**；在途的 [#7896](https://redirect.github.com/CopilotKit/CopilotKit/pull/7896)（MCP widget 默认 opaque origin，标记 breaking）尚未进入任何版本。

---

## 三、项目进展

当日 31 个 PR 合并/关闭，重点如下：

**安全加固（重大推进）**
- [#7930](https://redirect.github.com/CopilotKit/CopilotKit/pull/7930)：跨 channels、MCP Apps 与 runtime 的安全加固——Teams `/api/messages` 增加 Bot Framework JWT 验证、`serviceUrl` 钉扎到 Microsoft 主机（非生产环境放行 localhost）等，一 commit 对应一 fix 一测试。同日关闭了安全类 Issue（如 [#7632](https://redirect.github.com/CopilotKit/CopilotKit/issues/7632) 的 `/\` 前缀 open-link 绕过 `denyDangerousSchemes`）。

**正确性修复**
- [#7634](https://redirect.github.com/CopilotKit/CopilotKit/pull/7634)：Messages 组件改用稳定 `message.id` 作为 React key，修复流式输出期间的组件状态丢失与重挂载（关闭 [#7630](https://redirect.github.com/CopilotKit/CopilotKit/issues/7630)）。
- [#7956](https://redirect.github.com/CopilotKit/CopilotKit/pull/7956)：AG-UI Streams 文档定位澄清，从"导入/替换既有线程历史"修正为"与既有线程系统互补"。

**待合并管线（指向下一步方向）**
- [#7965](https://redirect.github.com/CopilotKit/CopilotKit/pull/7965) **A2UI Playground**：TanStack Start + Google ADK + Gemini over AG-UI 的原生生成式 UI 演示，走 CopilotKit Intelligence threads + 标准 catalog。
- [#7886](https://redirect.github.com/CopilotKit/CopilotKit/pull/7886) **Repo Doctor** showcase：Google Antigravity 上的 CI 诊断 agent + cookbook。
- [#7954](https://redirect.github.com/CopilotKit/CopilotKit/pull/7954)：RN 流式超时修复（对应 #7951）；[#7810](https://redirect.github.com/CopilotKit/CopilotKit/pull/7810)：`includeSchema: false` 三端落实（对应 #7802）。
- [#7959](https://redirect.github.com/CopilotKit/CopilotKit/pull/7959)：客户端断连时正确关闭 v2 SSE 流；[#7958](https://redirect.github.com/CopilotKit/CopilotKit/pull/7958)：Vue 侧 A2UI action promise 修复；[#7920](https://redirect.github.com/CopilotKit/CopilotKit/pull/7920)：`stopAgent`/abort 作用域收敛到单个 agent。
- tylerslaton 当日集中提交 4 个 react-core 组件打磨 PR：[#7961](https://redirect.github.com/CopilotKit/CopilotKit/pull/7961)（横向条形图命名）、[#7962](https://redirect.github.com/CopilotKit/CopilotKit/pull/7962)（模板化表格行）、[#7963](https://redirect.github.com/CopilotKit/CopilotKit/pull/7963)（Select 内边距）、[#7964](https://redirect.github.com/CopilotKit/CopilotKit/pull/7964)（自定义输入布局 textarea 自增高）。
- [#7966](https://redirect.github.com/CopilotKit/CopilotKit/pull/7966)：Inspector 接受 `.localhost` dashboard 并对 Learning 状态读取增加重试；[#7955](https://redirect.github.com/CopilotKit/CopilotKit/pull/7955) 为 Showcase 生产恢复提案（CPK-8652），明确标注"未经 Mark review 不得合并、未实际部署"。

**整体判断**：单日合并/关闭 31 个 PR、在途 29 个，安全与 A2UI 双线并进，推进速度高于常态。

---

## 四、社区热点

按讨论热度排列：

1. [#6408](https://redirect.github.com/CopilotKit/CopilotKit/issues/6408)（**17 评论**，8 月开帖至今）——"v1 界面被 v1.50.0 重实现孤儿化"总跟踪帖。10-01 状态更新确认核心能力（v1 `actions`/`mcpServers` 等）已在 **v1.72.0** 恢复，follow-up 持续推进，10-23 仍有活动。背后诉求：**v1 存量用户在 v2 过渡期的兼容性保障与沟通透明**，是当前项目信任度管理的核心。
2. [#7802](https://redirect.github.com/CopilotKit/CopilotKit/issues/7802)（5 评论）——`includeSchema: false` 仍向 agent 发送全部组件 JSON schema（5 组件约 10k 字符），默认模式还发送两次。诉求：**控制 agent 上下文与 token 成本**。
3. [#7654](https://redirect.github.com/CopilotKit/CopilotKit/issues/7654)（5 评论）——`partial-json`、`semver` 以 CommonJS 分发，触发 Angular CLI 优化告警。诉求：传递依赖 ESM 化。
4. [#7192](https://redirect.github.com/CopilotKit/CopilotKit/issues/7192)（5 评论，已关闭）——Claude Agent SDK quickstart 配置时的粘贴损坏与登录阻塞，反映**新用户上手摩擦**。
5. [#7816](https://redirect.github.com/CopilotKit/CopilotKit/issues/7816)（4 评论）+ 今日新开 [#7967](https://redirect.github.com/CopilotKit/CopilotKit/issues/7967)——Zod 3 声明文件与应用侧 Zod 4 冲突（`skipLibCheck: false` 时 **1683 个类型错误**）；#7967 进一步要求依赖层支持 Zod 4 并引用安全公告 GHSA-mrhx-c7xc-m…。
6. [#7846](https://redirect.github.com/CopilotKit/CopilotKit/issues/7846)（4 评论）——BuiltInAgent 将 system prompt 塞进 `messages`，导致 AI SDK v6 **每次运行都报 prompt-injection 警告**。

---

## 五、Bug 与稳定性

**新报 / 在途 Bug（按严重度排列）**

| Issue | 严重度 | 问题 | Fix 状态 |
|---|---|---|---|
| [#7951](https://redirect.github.com/CopilotKit/CopilotKit/issues/7951) | 🔴 高 | RN 流式 fetch shim 的 60s `xhr.timeout` 作用于整个请求，Android 上所有超过 1 分钟的 agent run 被切断；且 import 即全局替换 fetch | [#7954](https://redirect.github.com/CopilotKit/CopilotKit/pull/7954) 待合并 |
| [#7816](https://redirect.github.com/CopilotKit/CopilotKit/issues/7816) / [#7967](https://redirect.github.com/CopilotKit/CopilotKit/issues/7967) | 🔴 高 | Zod 3/4 混用致 1683 个类型错误；依赖仍锁 Zod 3 且有安全公告待升级 | 暂无完整修复 |
| [#7846](https://redirect.github.com/CopilotKit/CopilotKit/issues/7846) | 🔴 高 | system prompt 走 `messages` 通道，AI SDK v6 每次运行报注入警告 | 暂无 |
| [#7802](https://redirect.github.com/CopilotKit/CopilotKit/issues/7802) | 🟠 中 | `includeSchema: false` 失效，schema 照发且默认双重发送 | [#7810](https://redirect.github.com/CopilotKit/CopilotKit/pull/7810) 待合并 |
| [#7946](https://redirect.github.com/CopilotKit/CopilotKit/issues/7946) | 🟠 中 | 流式工具调用渲染数字截断跳变（`100` 先渲染为 `1`） | 暂无 |
| [#7882](https://redirect.github.com/CopilotKit/CopilotKit/issues/7882) | 🟠 中 | `/v2/headless` 无 web provider，headless 应用仍打包整套聊天渲染栈 | 暂无 |
| [#7891](https://redirect.github.com/CopilotKit/CopilotKit/issues/7891) | 🟠 中 | `ɵrepairToolCallPairs` 错配复用 call id、按 id 去重、覆盖用户 filter 编辑 | 暂无（明确在 #7877 范围外） |
| [#7486](https://redirect.github.com/CopilotKit/CopilotKit/issues/7486) | 🟡 低 | 小视口下 Inspector Escape 无法关闭面板、关闭按钮被推出屏幕 | 暂无 |
| [#7654](https://redirect.github.com/CopilotKit/CopilotKit/issues/7654) | 🟡 低 | CommonJS 传递依赖触发 Angular 构建优化告警 | 暂无 |

**当日关闭的 Bug（响应速度良好的证据）**：[#7630](https://redirect.github.com/CopilotKit/CopilotKit/issues/7630)（React key，→ PR #7634）、[#7906](https://redirect.github.com/CopilotKit/CopilotKit/issues/7906)（A2UIProvider 丢弃 onAction promise；Vue 同类修复 #7958 在途）、[#7814](https://redirect.github.com/CopilotKit/CopilotKit/issues/7814)（createCatalog props 类型错误）、[#7629](https://redirect.github.com/CopilotKit/CopilotKit/issues/7629) / [#7631](https://redirect.github.com/CopilotKit/CopilotKit/issues/7631)（headers 每渲染调用、deps 被 JSON.stringify）、[#7417](https://redirect.github.com/CopilotKit/CopilotKit/issues/7417)（工具调用后文本不到达 v1 客户端）、[#6919](https://redirect.github.com/CopilotKit/CopilotKit/issues/6919)（Cloudflare Workers SSE 零字节）、[#6570](https://redirect.github.com/CopilotKit/CopilotKit/issues/6570)（前端工具描述符三种形态）、[#7192](https://redirect.github.com/CopilotKit/CopilotKit/issues/7192)。

**稳定性评估**：新增高严重 Bug 3 个，但同日关闭 8+ 个历史 Bug，且新报问题中 2 个已有在途 fix。趋势向好；风险集中在依赖兼容（Zod、@​ag-ui/client）与 RN 流式链路。

---

## 六、功能请求与路线图信号

**用户侧请求**
- [#7967](https://redirect.github.com/CopilotKit/CopilotKit/issues/7967)（今日新开）**全面支持 Zod 4**——结合 #7816 的类型冲突与安全公告，迁移阻力 + 安全压力双重驱动，**被纳入下一版本的概率最高**。
- [#7654](https://redirect.github.com/CopilotKit/CopilotKit/issues/7654) 传递依赖 ESM 化：与已关闭的 [#7586](https://redirect.github.com/CopilotKit/CopilotKit/issues/7586)（@​ag-ui/client 嵌套四份 pre-1.0 副本）同属依赖卫生议题，预计逐步处理。
- [#7882](https://redirect.github.com/CopilotKit/CopilotKit/issues/7882) headless web provider：bundle 体积诉求，尚无对应 PR。
- [#7912](https://redirect.github.com/CopilotKit/CopilotKit/issues/7912)（已关闭）：请求将 DemonRoute（匿名 API key + 开源权重模型）列为兼容 provider——推广性质被关闭，但反映社区对开放模型接入的兴趣。

**路线图信号（从在途 PR 反推）**
1. **A2UI 生成式 UI 生态**：#7965、#7810、#7958、#7886——明确的战略投入方向。
2. **CopilotKit Intelligence / Learning 平台化**：#7966、#7949。
3. **安全加固第二波**：[#7896](https://redirect.github.com/CopilotKit/CopilotKit/pull/7896)（breaking）待审——或成下一个 minor 的显性破坏性变更，需提前关注迁移。
4. **多框架均衡**：Vue（#7958）、Angular（#7810 / #7654）、React Native（#7954）均有动作。

---

## 七、用户反馈摘要

**痛点**
- **Token 成本敏感**：#7802 用户精确量化"5 组件 catalog ≈ 10k 字符上下文"，对 schema 双重发送不满明显。
- **依赖地狱**：Zod 3/4 并存（#7816/#7967）、@​ag-ui/client 多版本嵌套（#7586）、CommonJS 传递依赖（#7654）——新项目从 `npm install` 起就遇摩擦，直接抬高采用门槛。
- **RN/Android 近乎不可用**：#7951 用户以"仅 import 即可复现"指出 fetch shim 的侵入性与 60s 硬超时。
- **v1→v2 迁移阵痛**：#6408 长帖持续发酵；文档滞后加剧焦虑（#6933 AG2 文档仍是 pre-1.0 API、#7882 headless 文档缺失）。
- **上手摩擦**：#7192 反映 quickstart 登录与 CLI 体验问题。

**满意点**
- 高质量报告获得快速闭环：codeCraft-Ritik 批量提交的 3 个 React 正确性问题当日全部关闭；Laptopmini 的深度复现报告推动 a2ui-renderer 多项修复落地。
- 发布流程透明可追溯（bot 自动 PR + AI 增强 release notes，#7948）。
- 维护者对修复边界诚实（#7891 明确标注"pre-existing on main and out of scope"）。

---

## 八、待处理积压

**Issue 侧（建议 triage）**
- [#6408](https://redirect.github.com/CopilotKit/CopilotKit/issues/6408)：8-05 开帖、17 评论、长期 OPEN 的总跟踪帖——虽有近期更新，但需给出明确收口时间表，避免信任损耗。
- [#7486](https://redirect.github.com/CopilotKit/CopilotKit/issues/7486)：09-28 开帖（约 26 天），无 fix PR。
- [#7654](https://redirect.github.com/CopilotKit/CopilotKit/issues/7654)：10-05 开帖（约 19 天），5 评论，无 fix PR。
- #7846 / #7816 / #7882 / #7891：近两周高价值 Issue 均无对应修复，其中 **Zod 组（#7816 + #7967）有安全公告背书，建议最优先**。

**PR 侧（review 队列老化风险）**
- [#7435](https://redirect.github.com/CopilotKit/CopilotKit/pull/7435)：09-25 开（约 29 天），修复 abort 期间工具调用生命周期事件乱序，长期未合。
- [#7810](https://redirect.github.com/CopilotKit/CopilotKit/pull/7810)：10-14 开，等待 review。
- [#7896](https://redirect.github.com/CopilotKit/CopilotKit/pull/7896)：breaking change，需要明确决策窗口。
- [#7955](https://redirect.github.com/CopilotKit/CopilotKit/pull/7955)：事故恢复关键路径，等待指定决策人 review。

**优先级建议**：Zod 4 兼容组（#7967/#7816）＞ RN 流式（#7951/#7954）＞ #6408 收口沟通＞ review 队列老化清理（#7435、#7810）。

---
*数据来源：CopilotKit GitHub Issues / PRs / Releases 快照（2026-10-24）。链接均指向 github.com/CopilotKit/CopilotKit。*

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*