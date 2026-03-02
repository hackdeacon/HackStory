---
outline: deep
---

# OpenClaw 食用指北

年前一段时间被这家伙刷屏了，它火到什么程度呢，看 GitHub Star 曲线就知道有多恐怖了。

![Star](https://pic.hackstory.cn/blog/openclaw/PtkuT7y3.webp)

截止发文时间，Star 数量已经来到了恐怖的 245k，增长速率一度超过了 Linux Kernel 等老牌项目。

![245k](https://pic.hackstory.cn/blog/openclaw/kMErcQew.webp)

## 项目简介

`OpenClaw` 是一个开源的个人 AI Agent 项目，用户可以在自己的设备上部署，并连接到常用的聊天软件，通过手机对话就可以让它操控电脑，去完成你交代给它的任务。因为它的爆火，让人们直呼：AGI is coming。也因为它，Mac mini 一度被抢购到缺货。

它最初叫 `Clawdbot`、在 Anthropic (Claude) 的律师函压力下更名为 `Moltbot`，改名后的第二天又改了一次名，最终确定名为 `OpenClaw`，创始人 Peter Steinberger 后来也成为了 OpenAI 的一员。

本文将对相关方案进行分类盘点，涵盖从完全免费的开箱即用服务，到手动部署的完整形态方案。

## 开箱即用

目前国内厂商有两家提供了零配置、开箱即用的套餐，分别是 Kimi 的 `Kimi Claw` 和 MiniMax 的 `MaxClaw`。

### Kimi Claw

需要开通每月 <span style="color:red;">¥199</span> 的 Allegretto 订阅计划，同时让 OpenClaw 使用最新的 `Kimi K2.5` 模型。

体验地址 [kimi.com/bot](https://www.kimi.com/bot)

![Kimi Claw](https://pic.hackstory.cn/blog/openclaw/Wb3IrXjf.webp)

![Kimi 登月计划](https://pic.hackstory.cn/blog/openclaw/RXHD66LF.webp)

### MiniMax

需要开通每个月 <span style="color:red;">¥39</span> 的订阅计划，同时让 OpenClaw 使用最新的 `MiniMax M2.5` 模型。

体验地址 [agent.minimaxi.com/max-claw](https://agent.minimaxi.com/max-claw)

![MaxClaw](https://img.hackstory.cn/file/blog/openclaw/G8rsliTC.svg)

![MiniMax 订阅计划](https://pic.hackstory.cn/blog/openclaw/ps79Ujdo.webp)

但有一个好消息是，国际版的 MaxClaw 目前是完全免费使用的。

大家可以去体验一下 [agent.minimax.io](https://agent.minimax.io)

![MiniMax 国际版](https://pic.hackstory.cn/blog/openclaw/uyP8tatv.webp)

## 部署教程

由于该 Agent 权限较高，建议大家在 `虚拟机` / `VPS` / `无重要资料的设备` 的环境下进行部署，避免造成不必要的损失。

### VPS

许多厂商也推出了内置好 OpenClaw 的 VPS 实例，例如阿里云、腾讯云等等，同时也有大量入门文档，玩法教程文章。

阿里云 [aliyun.com/benefit/scene/moltbot](https://www.aliyun.com/benefit/scene/moltbot)

![阿里云](https://pic.hackstory.cn/blog/openclaw/hStCjI4V.webp)

腾讯云 [cloud.tencent.com/act/pro/lighthouse-moltbot](https://cloud.tencent.com/act/pro/lighthouse-moltbot)

![腾讯云](https://pic.hackstory.cn/blog/openclaw/2HvKd2cC.webp)

### 手动部署

macOS / Linux 环境下，Terminal 输入：

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

Windows (WSL) 环境下，PowerShell 输入：

```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

耐心等待安装完成。

![Installing](https://pic.hackstory.cn/blog/openclaw/VUY53cOp.webp)

安装完成后，输入 `openclaw --flow quickstart` 进行初始化配置。

键盘左箭头键选择 `Yes` 后按回车，同意声明，不同意将退出。

![免责声明](https://pic.hackstory.cn/blog/openclaw/Cmjsq1mG.webp)

接下来选择模型，如果有自己的 API Key 可以自行选择配置，没有的话也可以选择 `Qwen` 的 OAuth 认证，将免费接入并使用千问大模型。

![Qwen](https://pic.hackstory.cn/blog/openclaw/i6sw6Jxm.webp)

下面进行连接 App，推荐 `WhatsApp`，扫描二维码即可进行配对，如需连接 Telegram / Discord 则需要配置 Bot Token。

也支持连接到国内 App，企业微信 / 飞书，大家可以自行搜索其他大佬的连接方法。

![连接 App](https://pic.hackstory.cn/blog/openclaw/ff1Ec9Bk.webp)

会询问你的 WhatsApp 手机号，选择 1 的话就是用一个账号，自己给自己发送消息即可完成交互，选择 2 的话则是单独给机器人配置一个账号，输入手机号记得加前缀，例如 `+86`。

![手机号](https://pic.hackstory.cn/blog/openclaw/UcO44T1g.webp)

配置完后的效果。

![WhatsApp](https://pic.hackstory.cn/blog/openclaw/Bz6ne2JH.webp)

下一步会询问你是否现在配置 `Skills`，也就是完成各种任务需要用到的工具，可以跳过也可以配置，后续也可以发消息让 Bot 帮你配置。

![Skills](https://pic.hackstory.cn/blog/openclaw/SCHUZkR2.webp)

后面的各种 API 大家可以自行选择配置，没有的话可以跳过不配置，Hooks 可以都启用。

![Hooks](https://pic.hackstory.cn/blog/openclaw/FC40jghP.webp)

最后会让你重启一下 `Gateway`，然后询问你本地对话方式。

- TUI 就是在当前命令行进行对话
- Web UI 就是在网页进行对话

不重要，按自己的喜好即可，因为我们后续主要用的是连接好的 App 进行对话，这里我选择 Web 方式。

![Web UI](https://pic.hackstory.cn/blog/openclaw/Bagybhcg.webp)

## 总结

到这里你就基本入门 OpenClaw 了，大家可以自行探索它能干什么活，把你天马行空的想法告诉它，大家也可以看各个大佬博主的玩法指南。

### 尝鲜优先级

不想折腾选择：

- MaxClaw 国际版（开箱即用，免费）
- MaxClaw CN（开箱即用，需要订阅 39 元套餐）
- Kimi Claw（开箱即用，需要订阅 199 元套餐）

有一点服务器基础选择：

- 腾讯云 OpenClaw VPS
- 阿里云 OpenClaw VPS
- 其他厂商 VPS 等等
- 本地虚拟机部署
