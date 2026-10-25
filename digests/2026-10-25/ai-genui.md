# 生成式 UI 生态日报 2026-10-25

> Issues: 10 | PRs: 30 | 覆盖项目: 4 个 | 生成时间: 2026-10-25 03:49 UTC

- [a2ui](https://github.com/a2ui-project/a2ui)
- [OpenUI](https://github.com/thesysdev/openui)
- [json-render](https://github.com/vercel-labs/json-render)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)

---

## 横向生态对比

# 生成式 UI 生态横向对比分析报告

**数据周期：2026-10-25（单日快照） | 覆盖项目：a2ui / OpenUI / json-render / CopilotKit**

---

## 1. 生态全景

生成式 UI 正处在从「能力验证」迈向「生产工程化」的切换期：协议层（a2ui）在 v1.0 前接受真实用户验收，暴露的是最后一公里的 SDK 成熟度问题；产品层（CopilotKit）以周级节奏发布 minor 版本，重心已转向安全加固与性能去债；已发布 1.0 的 OpenUI 则在偿还发布时明确延后的技术债。A2UI 与 MCP Apps 两套互操作规范正在成为生态交叉验证的汇聚点——CopilotKit 一边自建 A2UI Playground，一边追踪 MCP Apps host 规范符合性。当日问题清单中，「静默失败」「声明与执行不一致」「安全沙箱」取代「渲染不出来」成为最高频的关键词，标志着行业痛点已从渲染能力转向**可信性**。

---

## 2. 各项目活跃度对比

| 项目 | 新增 Issue | 关闭 Issue | PR 动态 | PR 合并 | Release | 单日画像 |
|---|---|---|---|---|---|---|
| **CopilotKit** | 0（4 条更新） | 3 | 22 条更新 | **11** | ✅ v1.80.0 | 高吞吐、净去债 |
| **a2ui** | 4 | 1（P1） | 7 条更新（净增 3） | 0 | 无 | 输入强、输出弱，PR 全积压 |
| **OpenUI** | 1 | 0 | 1（Devin bot） | 0 | 无 | 周末低位，质量不低 |
| **json-render** | 0 | 0 | 0 | 0 | 无 | 24h 零活动 |

> CopilotKit Issue 关闭率 75%、PR 吞吐 22 条/日，是当日唯一有代码落地与版本产出的项目；a2ui 与 OpenUI 的贡献均处于「排队待审」状态。

---

## 3. 共同关注的功能方向

| 方向 | 涉及项目 | 具体诉求与证据 |
|---|---|---|
| **声明与执行一致性（反静默失败）** | a2ui + OpenUI + CopilotKit | a2ui #3598 Express 静默丢 `userMessage`、#3601 互操作静默失败（`is_a2ui_part` 恒 False）；OpenUI #1467 受限动作「声明了但 parser/prompt 未收敛」；CopilotKit #7946 流式截断静默渲染误差 |
| **LLM 输出容错解析** | a2ui + CopilotKit | a2ui #2934 智能引号误伤合法 JSON（已闭环）；CopilotKit #7946 `partialJSONParse` 把截断数字当完整值 |
| **流式与长会话稳定性** | a2ui + CopilotKit | a2ui #3598 Express 不支持流式直接阻断聊天应用；CopilotKit #7951 RN 60 秒整段超时、#7746 长对话二次方复杂度（已修复） |
| **跨语言/跨端互操作** | a2ui + CopilotKit | a2ui TS SDK ↔ Python `a2a-sdk` 互操作断裂、v0.9.1 capabilities 键名不一致；CopilotKit #7970 NestJS body 预解析挂死 7 周方修复 |
| **多 agent / 多角色并存** | a2ui + CopilotKit | a2ui #3597 浏览器直连 Gemini 的 agent+renderer 双角色应用；CopilotKit #7919 同页多 agent 误停（已修复 #7920） |
| **安全与动作治理** | CopilotKit + OpenUI | CopilotKit #7896 opaque origin 破坏性收紧、#7930 安全合集、#6824 MCP Apps 规范追踪；OpenUI #1467 enforcement 本质是治理闭环 |
| **文档与选型指引** | a2ui + CopilotKit | a2ui #3599 direct JSON vs Express 选型缺文档；CopilotKit #7957 静态模型 ID 列表误导新模型用户 |

---

## 4. 差异化定位分析

| 项目 | 层级定位 | 技术路线 | 目标用户 | 当前阶段 |
|---|---|---|---|---|
| **a2ui** | 协议规范 + 多语言 SDK | spec-first（blueprint 驱动开发）；Python/TS 双栈；React/Lit/Flutter 多渲染器 | agent 开发者、渲染器与框架适配方 | v1.0 前验收冲刺，社区在做事实上的 acceptance test |
| **OpenUI** | 应用框架 | prompt / schema / parser 三层受限动作体系 | 构建 agent UI 的应用开发者 | 1.0 后补债打磨；Devin bot 自动化维护已常态化 |
| **json-render** | 轻量渲染库 | Vercel Labs 出品的 JSON→UI 方案 | 追求轻量集成的开发者 | 单日零信号，稳定或沉寂待观察 |
| **CopilotKit** | 全栈产品级框架 | React/Angular/RN + runtime；同时拥抱 AG-UI、MCP Apps、A2UI 三套协议；Automatic Learning 反馈闭环 | 生产级应用团队 | 成熟高速迭代期，v1.80.0，安全优先 |

**关键差异**：a2ui 卖「标准与互操作」，其 bug 多为协议一致性问题；CopilotKit 卖「交付效率与产品闭环」，其投入集中于安全、性能与学习闭环；OpenUI 卖「受控的生成行为」，聚焦治理维度；三者恰好覆盖协议层、应用层、治理层，重叠竞争有限。

---

## 5. 社区热度与成熟度

- **CopilotKit（最活跃，生产成熟期）**：11 条合并/日、自动化 release、零新增 bug + 3 个 bug 关闭的净去债周期。风险点是 11 条 PR 待审与 #6824 规范债。
- **a2ui（次活跃，快速迭代期）**：呈「社区输入强、维护输出弱」的结构性失衡——贡献质量极高（PR 附 repro 与 spec 出处），但 0 合并、PR 最长挂起 17 天、4 个新 Issue 无人 triage。**若 review 带宽不扩，高质量贡献者流失是最大风险**。
- **OpenUI（低位但健康）**：周日效应叠加 1.0 后稳定期；深度用户（主动检索 follow-up、附 repro）与 bot 贡献构成基本盘。
- **共性瓶颈**：两个活跃项目待审 PR 合计 18 条，**维护者 review 带宽是当日全生态最一致的约束**。

---

## 6. 值得关注的趋势信号

1. **A2UI 正在形成跨项目生态交叉验证**：a2ui 打磨 TS SDK 的同时，CopilotKit 已提交 A2UI Playground/Express 三连 PR，真实用户（polina-c）在做浏览器直连 LLM 的双角色验收。→ 早期采用者应锁定版本、自建互操作冒烟测试，勿假设 spec/示例/实现三方已一致。
2. **竞争焦点从「能否生成」转向「失败是否可见」**：当日最高频 bug 类型是静默数据丢失与声明-执行脱节。→ 选型评估应加入「失败可见性」「权限模型」维度；自研方案应为生成输出加 schema 校验与显式报错。
3. **长时流式会话成为生产常态负载**：60 秒超时误杀、二次方复杂度、Express 无流式均为真实场景反馈。→ 架构上应区分「停滞超时」与「总时长超时」，partial JSON 解析需做截断感知。
4. **TS 前端 + Python 后端的双栈摩擦是高频集成坑**（a2a-sdk 互操作、NestJS 挂死 7 周、fastapi starter 应运而生）。→ 互操作测试应进 CI；优先采用官方 starter 起步。
5. **自动化贡献常态化放大了人类 review 的稀缺性**（Devin bot PR、release bot 已是日常）。→ 依赖方应将「PR 合并延迟」纳入风险评估；贡献者宜提交小而自洽的 PR。
6. **生成式 UI 开始从一次性生成走向运行时持续优化**：CopilotKit 的 Automatic Learning 已完成前端评分收集（随 v1.80.0 发布）并提交服务端治理 API（#7977），前后端闭环成型中。→ 这是下一轮产品差异化方向，其数据治理与审批设计值得持续跟踪。

---

*数据局限说明：本报告基于单日快照，OpenUI 的周末效应与 json-render 的零活动均需更长观察周期验证；a2ui 的 v1.0 阻塞项（#3598 无在途修复）建议作为下期重点跟踪对象。*

---

## 各项目详细报告

<details>
<summary><strong>a2ui</strong> — <a href="https://github.com/a2ui-project/a2ui">a2ui-project/a2ui</a></summary>

# a2ui 项目动态日报
**日期：2026-10-25** | 数据来源：github.com/a2ui-project/a2ui

---

## 1. 今日速览

过去 24 小时项目呈现「**社区输入强、维护输出弱**」的典型状态：新增 4 个 Issue、关闭 1 个 P1 Bug，PR 侧有 7 条更新但**合并数为 0**，且无新版本发布。贡献高度集中：[polina-c](https://redirect.github.com/a2ui-project/a2ui/issues/3597) 一天内连发 3 个 Issue 直指 TypeScript agent SDK 的 v1.0 就绪度，[retz8](https://redirect.github.com/a2ui-project/a2ui/pull/3603) 则贡献了 4 个规格/示例/核心修复 PR。整体活跃度中等偏上，但 7 个 PR 全部积压待审，**review 带宽是当前最明显的瓶颈**，值得维护者关注。

---

## 2. 版本发布

今日无新版本发布。距 v1.0 目标（多个 Issue 携带 `[v1.0]` 标签）仍有明确的阻塞项待解决（见第 5、6 节）。

---

## 3. 项目进展

今日**无 PR 合并**，进展主要体现在 Issue 关闭与 PR 管线扩充上：

- ✅ **Issue 关闭**：[#2934](https://redirect.github.com/a2ui-project/a2ui/issues/2934)（P1，`parse_and_fix` 误拒含排版引号的合法 JSON）历经 24 天、3 轮讨论后关闭，状态标记为 `first-line-handled`，表明 Python 侧 JSON 容错解析问题已处理落地。
- 📥 **PR 管线净增 3 条**（#3600 / #3602 / #3603），当前 7 条待合并 PR 覆盖以下方向：

| 方向 | PR | 状态 |
|---|---|---|
| Flutter 渲染器生态 | [#3094](https://redirect.github.com/a2ui-project/a2ui/pull/3094) gallery app | 今日有更新，等待 17 天 |
| A2A 扩展规格修正 | [#3603](https://redirect.github.com/a2ui-project/a2ui/pull/3603)、[#3600](https://redirect.github.com/a2ui-project/a2ui/pull/3600)、[#3135](https://redirect.github.com/a2ui-project/a2ui/pull/3135) | 待 triage |
| 示例客户端修复 | [#3602](https://redirect.github.com/a2ui-project/a2ui/pull/3602) | 待 triage |
| Python 核心稳定性 | [#3306](https://redirect.github.com/a2ui-project/a2ui/pull/3306) | **needs review** |
| 核心 API 灵活性 | [#3304](https://redirect.github.com/a2ui-project/a2ui/pull/3304) | 待 triage |

**量化结论**：今日项目「前进量」主要体现在问题闭环（1 个 P1 关闭）与修复储备（+3 PR）上，代码实际落地量为零。

---

## 4. 社区热点

**热点一：polina-c 的「v1.0 验收三连击」**（单日 3 Issue，同源场景）
- [#3598](https://redirect.github.com/a2ui-project/a2ui/issues/3598)：TS Express 格式静默丢 `userMessage`、列表项函数调用编译错误、无法流式
- [#3597](https://redirect.github.com/a2ui-project/a2ui/issues/3597)：同时充当 agent 与 renderer 的 React 应用存在 API 缺口
- [#3599](https://redirect.github.com/a2ui-project/a2ui/issues/3599)：文档未说明 direct JSON 与 Express 的选型依据

> 背后诉求：作者正在构建**浏览器直连 Gemini 的 React 聊天应用**（双 A2UI 角色），这相当于一次真实的 v1.0 用户验收测试，暴露的是 TS SDK 在正式发布前的最后一公里问题。

**热点二：retz8 的规格一致性攻坚**（1 Issue + 4 PR）
- [#3601](https://redirect.github.com/a2ui-project/a2ui/issues/3601) + 配套修复 [#3602](https://redirect.github.com/a2ui-project/a2ui/pull/3602)，核心发现是**示例客户端与 Python `a2a-sdk` 实际互操作失败**（`is_a2ui_part` 恒返回 `False`）。诉求清晰：spec、示例、实现三方必须一致，否则新用户开箱即坏。

**热点三**：[#2934](https://redirect.github.com/a2ui-project/a2ui/issues/2934)（3 条评论，今日关闭）—— 本周期唯一有多轮讨论的 Issue，围绕 LLM 输出中常见的智能引号处理展开。

---

## 5. Bug 与稳定性（按严重程度排列）

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#3598](https://redirect.github.com/a2ui-project/a2ui/issues/3598) TS Express **静默丢失 `userMessage`**、误编译列表项函数调用（均无报错），且不支持流式。作者明确指出这使 v1.0 下 Express 不可用 | **尚无 fix PR** |
| 🟠 高 | [#3601](https://redirect.github.com/a2ui-project/a2ui/issues/3601) Lit/React 示例客户端 MIME type 放置错误，Python `a2a-sdk` 丢弃该字段 → `is_a2ui_part` 恒为 `False`，官方示例开箱即坏 | 已有 fix PR [#3602](https://redirect.github.com/a2ui-project/a2ui/pull/3602) |
| 🟡 中 | `Catalog.to_json()` 对**无参数 schema 的函数抛 `TypeError`**，自 #3230 起 `MessageProcessor` 构造路径同样受影响 | 已有 fix PR [#3306](https://redirect.github.com/a2ui-project/a2ui/pull/3306)（needs review） |
| 🟡 中 | v0.9.1 capabilities 键名与 schema 不一致，Python 端 `resolve_catalogs` **拒绝 v0.9.1 renderer 发送的能力声明**（互操作中断） | 已有 fix PR [#3135](https://redirect.github.com/a2ui-project/a2ui/pull/3135) |
| ✅ 已解决 | [#2934](https://redirect.github.com/a2ui-project/a2ui/issues/2934)（P1）`parse_and_fix` 将排版引号全局替换导致合法 JSON 解析失败 | 已关闭 |

**稳定性结论**：静默数据丢失类 bug（#3598）优先级最高，且是唯一无修复方案在途的阻塞项。

---

## 6. 功能请求与路线图信号

- **[#3597](https://redirect.github.com/a2ui-project/a2ui/issues/3597)（`[v1.0][agent][react]`，api-simplicity）**：双角色（agent + renderer）应用的 API 缺口。携带 v1.0 标签且无在途 PR，是**下一版本最明确的需求信号**，建议尽早排期。
- **[#3304](https://redirect.github.com/a2ui-project/a2ui/pull/3304)**：允许 `MessageProcessor` 在构建后挂载 catalog。PR 已就绪，合入后可解决「catalog 未知时只能重建 processor、丢失全部 surface」的核心 API 刚性问题，**大概率进入下一版本**。
- **[#3094](https://redirect.github.com/a2ui-project/a2ui/pull/3094)**：Flutter gallery app，对应 framework adapter blueprint 第 8 节，是 **Flutter 渲染器生态成熟度**的路线图信号。
- **[#3599](https://redirect.github.com/a2ui-project/a2ui/issues/3599)**：direct JSON vs Express 选型文档——低成本快赢，且其结论与 #3598 的修复方向（Express 是否保留）强相关，宜与 bug 修复联动决策。

**预判**：docs/spec 类修正（#3600/#3602/#3603）风险低、最可能先行合入；#3598 的修复是 v1.0 发布的前置条件。

---

## 7. 用户反馈摘要

**痛点（来自真实使用场景）：**
- **Express 路径不可信**：polina-c 反馈 Express 格式「前两个问题在不报错的情况下丢数据」，对数据完整性是致命伤；流式缺失则直接阻断聊天类应用。
- **文档指引缺位**：新用户无法自行判断 direct JSON 与 Express 的取舍边界，只能在踩坑后回来提 docs issue。
- **容错逻辑过度激进**：jayhemnani9910 报告的 #2934 表明，处理 LLM 输出（常含智能引号）时，「先替换再解析」的策略会误伤本已合法的 payload。
- **开箱体验受损**：retz8 的系列发现说明官方示例未与真实 SDK 做互操作验证，新用户按文档操作即失败。

**正面信号：**
- P1 issue（#2934）在约 3 周内得到闭环，响应机制有效。
- Blueprint 驱动的开发流程（如 #3094 引用 framework adapter blueprint）被外部贡献者主动遵循，说明架构文档发挥了实际引导作用。
- 贡献者提交的 PR 均附完整复现机制与 spec 出处，社区质量高。

---

## 8. 待处理积压

| 项目 | 开放时长 | 状态 | 提醒 |
|---|---|---|---|
| [PR #3094](https://redirect.github.com/a2ui-project/a2ui/pull/3094) Flutter gallery | **17 天**（10-08 起） | 今日仍活跃 | 长期挂起，建议尽快安排 review |
| [PR #3135](https://redirect.github.com/a2ui-project/a2ui/pull/3135) v0.9.1 capabilities 键名 | **15 天** | needs-triage | 修复 v0.9.1 互操作中断 |
| [PR #3306](https://redirect.github.com/a2ui-project/a2ui/pull/3306) catalog 序列化崩溃 | 8 天 | **needs review** | 已明确请求 review |
| [PR #3304](https://redirect.github.com/a2ui-project/a2ui/pull/3304) 运行时挂载 catalog | 8 天 | needs-triage | 核心 API 改进 |
| Issues [#3597](https://redirect.github.com/a2ui-project/a2ui/issues/3597) / [#3598](https://redirect.github.com/a2ui-project/a2ui/issues/3598) / [#3599](https://redirect.github.com/a2ui-project/a2ui/issues/3599) / [#3601](https://redirect.github.com/a2ui-project/a2ui/issues/3601) | 今日新建 | 均为 needs-triage | 待维护者分类 |

**健康度提醒**：当前 7 个 PR 待合并、0 个合入，且 4 个新 Issue 均未 triage。建议维护者优先处理 **#3598（v1.0 阻塞、无修复在途）** 的定级，并集中消化 #3306 / #3135 / #3094 三个久候 review 的 PR，避免高质量社区贡献因等待过久而流失。

---
*本报告基于 GitHub 公开数据自动生成，链接均指向对应 Issue/PR 原文。*

</details>

<details>
<summary><strong>OpenUI</strong> — <a href="https://github.com/thesysdev/openui">thesysdev/openui</a></summary>

# OpenUI 项目动态日报

**仓库**：[thesysdev/openui](https://github.com/thesysdev/openui) | **日期**：2026-10-25（周日）

---

## 1. 今日速览

今日（周日）仓库活跃度处于低位：过去 24 小时仅新增 1 条 Issue（[#1467](https://redirect.github.com/thesysdev/openui/issues/1467)）与 1 条待评审 PR（[#1466](https://redirect.github.com/thesysdev/openui/pull/1466)），无版本发布、无合并/关闭操作、无任何评论互动。尽管数量少，两条动态质量并不低——Issue #1467 是针对 1.0 已落地的受限 action slot 机制提出的 enforcement 缺口报告（附 repro），PR #1466 是由 `devin-ai-integration[bot]` 提交的文档站 bundle 瘦身优化（营销页每路由约 2.3 MB / 539 KB gz 的 chunk 有望被移除）。考虑到今日为周末，当前节奏属正常水平，无异常健康信号；需留意的是两项新贡献均在等待维护者首次响应。

| 指标 | 今日 | 备注 |
|---|---|---|
| 新增 Issue | 1 | 社区用户提交 |
| 关闭 Issue | 0 | — |
| 新增 PR | 1 | Bot（Devin）提交 |
| 合并/关闭 PR | 0 | — |
| Release | 0 | — |
| 新增评论 / 👍 | 0 / 0 | 无维护者互动记录 |

---

## 2. 版本发布

今日无新版本发布。据 [#1467](https://redirect.github.com/thesysdev/openui/issues/1467) 上下文，受限 action slot 的声明部分（prompt + schema）已随 **1.0**（经 [#1348](https://redirect.github.com/thesysdev/openui/pull/1348)）落地，enforcement 被明确留作后续工作，下一版本候选内容见第 6 节。

---

## 3. 项目进展

今日**无任何合并或关闭操作**，代码库净变更为 0；进展以"排队待审"形式积累：

- **[PR #1466](https://redirect.github.com/thesysdev/openui/pull/1466)（OPEN）— 文档站 bundle 隔离优化**：`app/layout.tsx` 与 `app/(home)/page.tsx` 此前从 `lib/source.ts` 导入 `BASE_URL`，导致全部 docs/blog MDX 页面被加载，其客户端组件（`@openuidev/react-ui`、语法高亮等）被挂到根布局，使**每个路由都携带约 2.3 MB（gzip 后约 539 KB）的 chunk**。该 PR 将 react-ui 与 Thesys 相关 bundle 从营销页剥离。若合并，营销类路由的首屏 JS 体积将显著下降，属于高性价比的站点性能修复。
- **进展评估**：今日为典型的"输入日"而非"落地日"，两项贡献均待评审；结合周日时点，节奏正常。真正的推进幅度取决于工作日维护者的评审吞吐。

---

## 4. 社区热点

今日仅两条动态且均无评论/反应，尚无形成讨论热点的线程，但两条本身信号价值较高：

- **[Issue #1467](https://redirect.github.com/thesysdev/openui/issues/1467)**（评论 0 / 👍 0）：深度技术反馈。作者检索后发现团队在 #1298 中承诺的 follow-up 无人跟踪，主动补开 issue 并附 repro。背后的诉求是 **prompt / schema / parser 三层一致性**——声明层已宣布动作受限，但执行层（parser 保留 `@OpenUrl`）与教学层（prompt 仍教授该动作）未同步收敛。
- **[PR #1466](https://redirect.github.com/thesysdev/openui/pull/1466)**：由 AI agent（Devin 集成）自动提交，反映项目已将自动化维护纳入日常流程；同时也意味着今日窗口内**无人类维护者的公开活动**（0 评论、0 合并）。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 中 | [Issue #1467](https://redirect.github.com/thesysdev/openui/issues/1467) 受限 action slot 未强制执行 | OPEN，待 triage | **暂无** |

- **问题描述**：[#1298](https://redirect.github.com/thesysdev/openui/issues/1298)（经 [#1348](https://redirect.github.com/thesysdev/openui/pull/1348) 随 1.0 发布）为 prompt 和 schema 引入了 restricted action slots，但 enforcement 被留作 follow-up。现状：parser 仍保留 `@OpenUrl`，prompt 仍在教授该动作，而 `lang-core` 已导出 `steps.OpenUrl.ref` / `steps.ToAssistant.ref` 供受限动作引用。
- **影响面**：声明与实际行为不一致，模型可能继续产出本应受限的动作，属一致性/治理类缺陷；未见崩溃、数据损坏或渲染失败报告。该问题是 1.0 发布时**有意延后的已知技术债**，非回归。
- 今日无崩溃类或稳定性相关的新报告。

---

## 6. 功能请求与路线图信号

- **受限 action slot 的 enforcement**（[#1467](https://redirect.github.com/thesysdev/openui/issues/1467)）：本就是 #1298 中明确 deferred 的既定后续项，作者亦确认"找不到跟踪 issue"才补开——**大概率已在官方路线图上**，若维护者确认 scope，有望进入下一个 patch 版本（预计为 1.0.x），落点应在 parser 强制执行 + prompt 移除对应教学内容。
- **文档站性能专项**（[PR #1466](https://redirect.github.com/thesysdev/openui/pull/1466)）：若合并，"避免根布局引入 `lib/source.ts` 依赖"的同类模式可能推广至其他路由，后续或有一系列 bundle 优化跟进。
- **AI agent 维护常态化**：Devin bot PR 显示自动化贡献已成为项目工作流的一部分，预计后续此类 docs/perf 自动 PR 会持续出现；维护者的评审带宽将是关键瓶颈变量。

---

## 7. 用户反馈摘要

> 样本量提示：今日仅 1 条用户原创反馈（另一条为 bot 生成），以下为单点洞察，不代表趋势。

- **用户画像**：[#1467](https://redirect.github.com/thesysdev/openui/issues/1467) 的报告者是典型的深度使用者——追踪 release 历史（清楚 #1298 → #1348 → 1.0 的脉络）、主动检索既有 issue、附带 repro 提交。说明 1.0 发布后存在认真研读变更的核心用户群，社区质量基础良好。
- **核心痛点**：功能"半落地"——声明层（prompt/schema）先行、执行层（parser enforcement）缺位，导致实际行为与发布说明的预期不符，给基于受限动作体系做二次开发的用户带来困惑。
- **隐含诉求**：希望受限动作体系形成闭环：parser 强制执行限制、prompt 不再教授受限动作、`lang-core` 导出的 ref 语义与之自洽。
- 今日无明确的满意/不满意情绪表述；"主动补齐跟踪 issue"这一行为本身是良性的社区参与信号。

---

## 8. 待处理积压

今日窗口内**无长期未响应条目**（两条动态均创建于 10-24，尚处于 24–48 小时首响窗口内），但需提醒维护者及时跟进：

1. **[Issue #1467](https://redirect.github.com/thesysdev/openui/issues/1467)**：需要 triage 确认 scope——enforcement 应落在 parser、prompt 还是双层同步修改，并回链至 #1298 的 follow-up 计划。
2. **[PR #1466](https://redirect.github.com/thesysdev/openui/pull/1466)**：bot 生成的 PR 建议人工评审后合并——验证 ~2.3 MB / 539 KB gz 的体积数据、确认 MDX 加载链路改动不影响文档路由的功能与构建产物。

**数据局限**：本日报仅覆盖过去 24 小时窗口，更早的 open issue/PR 积压情况未在本次数据中呈现，建议维护者另行巡检陈旧 open 条目，避免历史欠账被低活跃日掩盖。

---

**结语**：周末低活跃日，无风险信号。两项待审贡献（一个一致性 bug 跟踪、一个站点性能优化）质量均佳，周一维护者的响应速度将直接决定这批"排队进展"能否转化为实际落地。

</details>

<details>
<summary><strong>json-render</strong> — <a href="https://github.com/vercel-labs/json-render">vercel-labs/json-render</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CopilotKit</strong> — <a href="https://github.com/CopilotKit/CopilotKit">CopilotKit/CopilotKit</a></summary>

# CopilotKit 项目动态日报
**日期：2026-10-25 | 数据周期：过去 24 小时**

---

## 1. 今日速览

过去 24 小时 CopilotKit 呈现高活跃度：**22 条 PR 更新（11 条已合并/关闭、11 条待合并）、4 条 Issue 更新（3 条关闭）、1 个 minor 版本发布（v1.80.0）**。Issue 关闭率高达 75%，且清掉了两个存在已久的稳定性问题（含一个挂起 7 周的 runtime 挂死 bug）。贡献来源健康多元，维护者（BenTaylorDev、MikeRyanDev、tylerslaton 等）与社区贡献者（clean99、bercedev、devbymak、rainerhahnekamp 等）均有产出，其中一处修复体现了完整的社区接力闭环（#6840 → #7970）。战略层面，Automatic Learning、A2UI 生成式 UI 与 MCP Apps 安全合规三条主线同步推进。

---

## 2. 版本发布：v1.80.0

Release PR：[#7972](https://redirect.github.com/CopilotKit/CopilotKit/pull/7972)（由 release 自动化工作流生成，含 AI 增强版发布说明）

**Features**
- `react-core`：收集带评论的回复评分，用于 Automatic Learning（[#7828](https://redirect.github.com/CopilotKit/CopilotKit/pull/7828)）
- `react-core`：折叠连续发出的工具调用，简化聊天 UI（[#7938](https://redirect.github.com/CopilotKit/CopilotKit/pull/7938)）

**Fixes**
- ⚠️ **破坏性变更**：`fix(mcp-apps)!` MCP App widgets 默认改用 opaque origin（[#7896](https://redirect.github.com/CopilotKit/CopilotKit/pull/7896)）——widget 不再能读取宿主页面的 cookies、storage 等同源资源。**迁移注意**：若有 widget 依赖与宿主页面同源访问，需显式配置才能恢复原行为；这是安全加固的刻意默认值收紧，建议升级前排查自定义 MCP App widgets。
- 发布说明在此处截断（`fix(core): scope s...`）。依据当日合并记录推断，该条对应 [#7920](https://redirect.github.com/CopilotKit/CopilotKit/pull/7920)（`stopAgent` 与 run abort 按 agent 作用域隔离）——行为修正但属 bug fix 性质。

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 内容 | 意义 |
|---|---|---|
| [#7970](https://redirect.github.com/CopilotKit/CopilotKit/pull/7970) | 处理已被框架预解析的请求 body | **关闭挂起 7 周的 #6838**；runtime 兼容 Express/NestJS 等中间件场景。取代 [#6840](https://redirect.github.com/CopilotKit/CopilotKit/pull/6840)，并为原方向发现者 @​Devamol10 保留 co-author 署名 |
| [#7920](https://redirect.github.com/CopilotKit/CopilotKit/pull/7920) | `stopAgent` 作用域隔离 | 关闭 #7919；多 agent 并存时停止一个不再误伤另一个 |
| [#7748](https://redirect.github.com/CopilotKit/CopilotKit/pull/7748) | 避免重复 tool-call repair | 关闭 #7746；消除二次方复杂度，重对话场景性能收益明显 |
| [#7930](https://redirect.github.com/CopilotKit/CopilotKit/pull/7930) | 安全加固合集（opaque origin、thread 所有权校验、HITL 解析） | 跨 mcp-apps-renderer / runtime / channels-core 的系统性安全收敛 |
| [#7957](https://redirect.github.com/CopilotKit/CopilotKit/pull/7957) | BuiltInAgentModel IDs 标记为"建议"并更新 GPT-5 列表 | 解决"新 OpenAI 模型看似不支持"的文档误导 |
| [#7974](https://redirect.github.com/CopilotKit/CopilotKit/pull/7974) / [#7975](https://redirect.github.com/CopilotKit/CopilotKit/pull/7975) | showcase 验证 CLI 的 ESM 加载修复及文档对齐 | 工程细节维护 |

**整体评估**：本轮合并覆盖稳定性、安全、性能、文档四个维度，并配合 v1.80.0 发布落地。从 PR 创建日期看，多数修复在一周内走完闭环，交付节奏紧凑。

---

## 4. 社区热点

> 说明：本周期评论数数据缺失，以下按更新活跃度与内容影响排序。

- **[#6824](https://redirect.github.com/CopilotKit/CopilotKit/issues/6824) — MCP Apps host 规范符合性 Tracking（OPEN，3 评论，持续更新）**：追踪与 `@modelcontextprotocol/ext-apps` 规范（协议 `2026-01-26`）在 display-mode、update-model-context、host-context、theme propagation 等方面的差距。诉求本质是**规范级互操作性**：用户希望 CopilotKit 作为 MCP Apps host 能与生态内任意合规 widget 对接，而非私有实现。
- **#6838 修复接力（3 评论）**：9 月由 @​nathan-tj-xie 报告 → @​Devamol10 在 #6840 找到修复方向 → @​BenTaylorDev 在 #7970 落地并署名原作者。这是社区协作闭环的正面样本。
- **A2UI Playground 系列（[#7965](https://redirect.github.com/CopilotKit/CopilotKit/pull/7965) + [#7973](https://redirect.github.com/CopilotKit/CopilotKit/pull/7973) + [#7976](https://redirect.github.com/CopilotKit/CopilotKit/pull/7976)）**：@​tylerslaton 与 @​contextablemark 密集提交，演示基于 Google ADK + Gemini + AG-UI 的原生生成式 UI，且三个 PR 相互独立、均基于 #7965，提交纪律良好。
- **[#7977](https://redirect.github.com/CopilotKit/CopilotKit/pull/7977) — 服务端 Learning 管理 API**：Automatic Learning 从前端评分收集（#7828，已随 v1.80.0 发布）延伸到服务端治理，是当日最具战略信号的新 PR。

---

## 5. Bug 与稳定性（按严重程度排列）

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | [#6838](https://redirect.github.com/CopilotKit/CopilotKit/issues/6838) `NodeFetchHandler` 挂死：body 被中间件预解析后 POST 永久无响应 | ✅ 已修复（[#7970](https://redirect.github.com/CopilotKit/CopilotKit/pull/7970)） |
| 中高 | [#7919](https://redirect.github.com/CopilotKit/CopilotKit/issues/7919) `stopAgent` 误停其他 agent（共享 abort controller） | ✅ 已修复（[#7920](https://redirect.github.com/CopilotKit/CopilotKit/pull/7920)） |
| 中 | [#7746](https://redirect.github.com/CopilotKit/CopilotKit/issues/7746) `messageFilter` 工具调用修复呈二次方复杂度 | ✅ 已修复（[#7748](https://redirect.github.com/CopilotKit/CopilotKit/pull/7748)） |
| 中 | #7946 `partialJSONParse` 把流式截断的数字当作完整数字，导致渲染误差 | ⏳ 修复 PR [#7950](https://redirect.github.com/CopilotKit/CopilotKit/pull/7950) 待审 |
| 中 | #7951 React Native 流式请求 60 秒整段超时，长 agent run 被误杀 | ⏳ 修复 PR [#7954](https://redirect.github.com/CopilotKit/CopilotKit/pull/7954) 待审 |
| 低 | #7354 遗留：BuiltInAgentModel 过期 ID 致最新 OpenAI 模型"看似不支持" | ✅ 文档修复（[#7957](https://redirect.github.com/CopilotKit/CopilotKit/pull/7957)） |
| 跟踪中 | [#6824](https://redirect.github.com/CopilotKit/CopilotKit/issues/6824) MCP Apps host 规范差距 | 🔵 OPEN |

**值得注意的是当日零新增 bug 报告**（新开 Issue 为 0，唯一活跃项是 #6824 跟踪更新），叠加 3 个 bug 关闭，本周期是净去债周期。

---

## 6. 功能请求与路线图信号

- **Automatic Learning（信号最强）**：v1.80.0 已落地前端评分收集，[#7977](https://redirect.github.com/CopilotKit/CopilotKit/pull/7977) 进一步提出服务端 API（发现 Learning 容器、手动触发 run、审查 Skill 提案、显式批准/拒绝）。前后端闭环成型中，**大概率是下个版本的核心主题**。
- **A2UI 生成式 UI**：[#7965](https://redirect.github.com/CopilotKit/CopilotKit/pull/7965)（Playground）+ [#7976](https://redirect.github.com/CopilotKit/CopilotKit/pull/7976)（A2UI Express）+ [#7973](https://redirect.github.com/CopilotKit/CopilotKit/pull/7973)（view badge）三连提交，方向明确但以 examples/showcase 形态呈现，短期看是能力展示而非核心 API。
- **框架对齐**：[#7969](https://redirect.github.com/CopilotKit/CopilotKit/pull/7969) 为 Angular HITL 工具补 `onResponse` 回调——Angular 与 React 能力差距在收窄。
- **集成生态扩展**：[#7971](https://redirect.github.com/CopilotKit/CopilotKit/pull/7971) langgraph-fastapi-auth starter（Next.js + FastAPI + AG-UI，含用户身份注入 agent），降低 Python 后端接入门槛。
- **MCP Apps 规范符合**：[#6824](https://redirect.github.com/CopilotKit/CopilotKit/issues/6824) 是明确的 roadmap 载体，建议关注其 checklist 收敛进度。
- **细节打磨**：[#7979](https://redirect.github.com/CopilotKit/CopilotKit/pull/7979) 保留附件文件名（如 `invoice.pdf`）传给模型，小而实用。

---

## 7. 用户反馈摘要

- **企业级后端集成是刚需**：#6838 的复现场景是 NestJS 装饰器 + 中间件管道，说明用户在实际服务端框架中深度嵌入 CopilotKit runtime；body 预解析冲突导致挂死 7 周才修复，反映此类集成路径的测试覆盖此前不足。
- **多 agent 应用是真实使用形态**：#7919 报告者同页面运行多个 agent（如多个 `CopilotChat`），暴露了核心层按 provider 而非按 agent 隔离运行态的设计缺陷——用户对 agent 级隔离有明确预期。
- **重度流式用户存在**：#7746（长对话 + 并行工具调用）与 #7951（React Native 超 60 秒流式会话）表明生产环境已有长时、高密度工具调用负载，性能与超时语义（"停滞超时"而非"总时长超时"）是真实痛点。
- **模型新鲜度敏感**：用户会第一时间尝试最新 OpenAI 模型，静态的"受支持 ID"列表容易制造"不支持"的误导，#7957 改为"建议"是正确的产品化处理。
- **对 breaking 安全变更的接受度**：#7896 收紧 widget 权限被纳入正式发布而非默认推迟，说明社区对安全优先的取舍有共识。

---

## 8. 待处理积压

- **[#6824](https://redirect.github.com/CopilotKit/CopilotKit/issues/6824)**（开放自 2026-09-01）：MCP Apps 规范差距 tracking，是当前唯一活跃的开放 Issue，涵盖 display-mode、update-model-context、host-context、theme propagation 多项差距，建议维护者给出分阶段里程碑。
- **[#7827](https://redirect.github.com/CopilotKit/CopilotKit/pull/7827)**（开放自 2026-10-15）：Renovate 机器人提出的 GitHub Actions 依赖升级（setup-java v6.0.1→v6.1.0 等），已挂起 10 天，属低成本可清项。
- **待审 bug fix PR**：[#7950](https://redirect.github.com/CopilotKit/CopilotKit/pull/7950)（10-23 提交）与 [#7954](https://redirect.github.com/CopilotKit/CopilotKit/pull/7954)（10-23 提交）对应两个用户可感知的 bug，建议优先 review。
- **堆叠 PR 链协调**：#7965 → #7973 / #7976 三者声明相互独立但同源，合并顺序需要维护者明确，避免 showcase 系列长期悬置。
- **近期 feature PR 队列**：#7969、#7971、#7977、#7979 均在 48 小时内提交待审，加上 #7950/#7954，待合并 PR 共 11 条，review 带宽是当前主要瓶颈。

---

## 健康度小结

**活跃度高、净去债、社区管道通畅。** Issue 关闭率 75%、PR 吞吐 22 条/日、自动化 release 流程成熟（#7972 由机器人完成并生成增强说明）、安全响应主动（#7896、#7930）。风险点集中在两处：11 条 open PR 的 review 积压，以及 MCP Apps 规范符合性（#6824）这一长期债。Automatic Learning 的前后端布局（#7828 + #7977）值得作为下期观察重点。

</details>

---
*本日报由 [agents-radar](https://github.com/linqinghao/agents-radar) 自动生成。*