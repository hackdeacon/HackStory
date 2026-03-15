---
theme: custom-1773083331384-qqqyml7j3
themeName: 知识库 (副本)
---

# 一篇文章讲透 Claude Code 为什么会失控

彻底告别 AI 上下文混乱，用 claude-health skill 给你的 AI Coding 工具做个「全身体检」。

> 最近半年，越来越多的开发者开始将 Claude Code 引入到日常的工作流中。但很多人很快就遇到了同一个痛点：刚开始用觉得很惊艳，但随着项目推进，<b>上下文越来越乱、AI 开始频繁忘记规则、给的工具越多它反而越容易选错</b>。

很多人的第一反应是：「是不是我的 Prompt 写得不够好？」

大佬 `Tw93` 在其最新博文[《你不知道的 Claude Code：架构、治理与工程实践》](https://tw93.fun/2026-03-12/claude.html)中一针见血地指出：**这不是 Prompt 的问题，而是系统治理的问题**。为了将这套复杂的治理理论真正落地，他开源了一款自动化诊断工具 [claude-health](https://github.com/tw93/claude-health)。

今天，我们就结合这篇深度博文，聊聊为什么你的 Claude 越来越笨，以及如何用这款开源工具让它重回巅峰。

---

### 理论篇 · 重新认识 Claude Code 的「六层架构」

在 Tw93 的文章中，他提出不要把 Claude Code 当成一个简单的 ChatBot，而应该把它看作一个包含六个层面的 Agentic 系统。如果你的 AI 表现糟糕，往往是因为这六层失衡了：

1. **长期上下文 `CLAUDE.md` / `rules` / `memory`**  
   告诉 Claude 该项目「是什么」。很多人的通病是把 CLAUDE.md 写成了几千字的百科全书，直接污染了 AI 的基础上下文。

2. **动作能力 `Tools` / `MCP`**  
   告诉 Claude「能做什么」。如果你接入了太多 MCP Server，它们庞大的工具定义会悄无声息地吃掉你高达 12.5% 以上的可用 Token。

3. **方法论 `Skills`**  
   按需加载的工作流。好 Skill 是按需加载的，而坏 Skill 的描述符冗长，每开一个新会话都在偷你的上下文空间。

4. **强制执行层 `Hooks`**  
   不依赖 AI 自己判断的强制拦截器。

5. **隔离层 `Subagents`**  
   隔离上下文的工作者，防止任务发散。

6. **验证闭环 `Verifiers`**  
   确保 AI 的输出可验证、可审计。

<b>核心痛点</b>： 哪怕你懂了这些道理，要在日常开发中时刻保持这六层的健康度（Context Hygiene）也极其耗费精力。

你很难靠肉眼去评估「我的 Skill 描述是不是太长了？」或者「MCP 工具是不是过度膨胀了？」

---

### 实践篇 · 你的 AI 架构审计专家 claude-health

为了解决「知易行难」的问题，Tw93 基于上述博文的理念，开发并开源了 claude-health。

> 简单来说，这是一个 **Claude Code Skill**。它的作用是像代码审查（Code Review）一样，对你的 Claude Code 配置进行系统级的健康度审查（Config Audit）。

#### 核心亮点与功能

1. **智能适配项目规模（复杂度检测）**  
   小项目和大项目的治理方式是不同的。`claude-health` 会自动检测你的项目是 Simple、Standard 还是 Complex 级别，并据此调整检查标准。它不会强迫一个个人小脚本去配置复杂的 Hooks 或 Subagents。

2. **全面覆盖「六层」深度体检**

- CLAUDE.md 审查：  
  检查信噪比，是否包含了冗长的废话（Prose bloat），是否缺失了关键的压缩指令（Compact Instructions）。

- Skill 审查  
  检查 Token 消耗量、触发条件的清晰度、是否滥用了自动调用（auto-invoke），甚至包含安全检查（Prompt 注入、危险的硬编码凭证等）。

- MCP 上下文压力测试  
  计算 MCP Server 的数量和 Token 成本，如果发现工具定义占比过高（比如超过 12.5% 的警戒线），会立即向你发出警告。

- 多层防御检查（Three-Layer Defense）  
  检查核心规则是否在 CLAUDE.md、Skill 和 Hook 中得到了协同保障。

3. **分级的行动指南（优先级报告）**  
  诊断完成后，它不会给你扔一堆晦涩的报错，而是输出一份清晰的三级报告：

- 🔴 Critical「关键问题」  
  严重的规则冲突、危险权限、破坏缓存的模式、高危的安全漏洞等。

- 🟡 Structural「架构调整」  
  放错位置的规则（比如该放 rules 的放到了根目录）、缺失的拦截器（Hooks）或冗余的 Skill 内容。

- 🟢 Incremental「渐进优化」  
  上下文卫生习惯建议、引入 `HANDOFF.md` 交接文档的建议等锦上添花的改进。

---

### 如何上手 claude-health

`claude-health` 的接入非常轻量，如果你已经在使用 Claude Code，只需在终端运行以下命令即可安装：

通过 npx skills 安装（推荐）

```bash
npx skills add tw93/claude-health
```

几乎支持所有流行的 AI Coding 工具，Cursor、TRAE、Antigravity、Codex、Gemini CLI、OpenCode、Claude Code 以及 OpenClaw 等等。
![npx](https://pic.hackstory.cn/blog/claude-health/XEf7iy7O.webp)

或者通过 Claude Plugin Marketplace 安装

```bash
claude plugin marketplace add tw93/claude-health
claude plugin install health
```

<b>使用方法</b>：
在任何 Claude Code 的交互会话中，直接输入 `/health`，或者用自然语言对 Claude 说：

> Run a health check on my Claude Code config

> 帮我检查一下当前项目的 Claude Code 配置健康度

它就会立刻启动两个并行的诊断 Agent，几秒钟后，你就能拿到一份量身定制的体检报告。
![Run](https://pic.hackstory.cn/blog/claude-health/xyox7xH5.webp)

---

### 总结

AI 辅助编程正在从「单纯的代码补全」走向「复杂的工程协作」。Tw93 的博文为我们提供了系统化治理 AI Agent 的底层思维，而 `claude-health` 则是将这一思维落地的终极利器。

如果你的项目中已经沉淀了大量的 `.claude` 配置、积累了各种 rules 和 skills，强烈建议你用 `claude-health` 给项目做一次全面的体检。别让混乱的上下文，限制了 Claude 真正的智力！

- 开源地址： [github.com/tw93/claude-health](https://github.com/tw93/claude-health)
- 深度博文： [tw93.fun/2026-03-12/claude](https://tw93.fun/2026-03-12/claude.html)