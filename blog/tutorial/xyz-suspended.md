# XYZ 域名解封指北

> 记录一次 .xyz 域名因 **Abuse / Blocklist** 被注册局封禁（`serverHold`），并最终成功解封的全过程。

---

## 一、前情提要

六位数字.xyz 域名在 Spaceship 仅需 ¥4.69 / 年，我买了喜欢的数字作为备用域名。
Vibe Coding 上瘾的我托管了几个小工具页面。

它们分别是以下内容：

* [Hack Gallery](https://img.hackstory.cn/)  迷你图床
* [Glory Power](https://pvp.hackstory.cn/) 王者荣耀战力查询
* [Bilibili Downloader](https://tv.hackstory.cn/) 哔哩哔哩解析
* [TikTok Downloader](https://tiktok.hackstory.cn/) 抖音国际版解析
* [Twitter Downloader](https://x.hackstory.cn/) 推特解析
* [Valorant Esports API](https://v.hackstory.cn/) 无畏契约电竞第三方数据

前几天起床后打开我自己的小工具网页，发现域名 **600025.xyz** 无法访问，而且是该域名下的所有子域名都无法访问，并且没有任何的邮件通知。我一开始以为是 Cloudflare 的证书过期了导致的，也怀疑过 DNSSEC 的设置。


后来通过 [Whois](https://whoiscx.com/) 查询发现域名状态为：

```
serverHold (注册局设置暂停解析)
```

这是最严重的域名状态之一，在该状态下，无论 DNS 如何设置，域名都无法被解析，因为解析在注册局层面被直接阻断。

相比之下，`clientHold` 只是由注册商施加的暂停状态，注册商有权限随时解除；
而 `serverHold` 由注册局控制，只有在完成合规审查后才可能被移除。


![serverHold](https://pic.hackdeacon.cn/blog/nfkisLVo.png)

随后从注册商 Spaceship 确认：

* 域名并非注册商封禁
* 而是被 **XYZ Registry（.xyz 注册局）** 直接挂起
* 原因：**Abuse reported（疑似滥用）**

注册商无法直接处理，只能由注册局审核。

![Spaceship](https://pic.hackdeacon.cn/blog/hIxAeNXN.png)

可能那几个视频解析网站的 SEO 里包含 `downloader` 等字样，导致被注册局识别为滥用。
后来我将这几个网站的名字改为了 `Bilibili Demo`、`TikTok Demo`、`Twitter Demo`，以规避被注册局识别为滥用。

---

## 二、XYZ 注册局的处理逻辑

XYZ 的解封逻辑非常明确：

> **只要域名仍在任意公共黑名单（Blocklist）中，就不会解封**。

因此必须完成两个步骤：

1. **从所有黑名单中解除（Delist）**
2. **提交完整证据，请求复审与重新激活**

---

## 三、需要检查的 6 个常见黑名单

XYZ 官方表单中明确列出了以下平台：

* Spamhaus
* VirusTotal
* Google Safe Browsing
* SURBL
* URIBL
* Quttera

只要其中 **任何一个仍显示异常**，都会被退回。

---

## 四、各平台检测网址汇总

### 1️⃣ Spamhaus

```
https://check.spamhaus.org/
```

期望结果：`Not listed`

---

### 2️⃣ VirusTotal

```
https://www.virustotal.com/gui/home/url
```

期望结果：

* Detection = 0
* No security vendors flagged

---

### 3️⃣ Google Safe Browsing

```
https://transparencyreport.google.com/safe-browsing/search
```

期望结果：`No unsafe content found`

---

### 4️⃣ SURBL（关键）

```
https://www.surbl.org/lookup
```

本次封禁的**直接原因就在 SURBL**，显示为 PH（Phishing）。

需要额外提交 **SURBL Delisting** 申请。

---

### 5️⃣ URIBL

```
https://lookup.uribl.com/
```

期望结果：`Not listed`

---

### 6️⃣ Quttera

```
https://quttera.com/
```

点击 **Scan URL**，期望结果：`Clean` / `No threats found`

---

## 五、SURBL 解封流程（重点）

当 SURBL 显示被列入时，需要走官方的 **Whitelist / Delisting 表单**：

* 填写域名
* 使用**自有域名邮箱**（不能用 Gmail / Outlook）
* 详细说明：

  * 已清理内容
  * 未从事钓鱼 / 垃圾邮件
  * 当前站点用途

SURBL 审核通过后：

* 会邮件确认
* 或在 Lookup 中显示 **Not listed**

这是后续提交给 XYZ 的**核心证据**。

---

## 六、向 XYZ 提交复审（Request Review & Reactivation）

在 XYZ 的 Unsuspend 表单中，需要：

### 1️⃣ 上传证据

* 每个平台 **至少一张截图**
* 即使“未列入”，也要截图

推荐命名方式：

```
spamhaus.png
virustotal.png
safebrowsing.png
surbl.png
uribl.png
quttera.png
```

---

### 2️⃣ 文字说明（示例）

```
Blocklist status for domain 600025.xyz:

- Spamhaus: Not listed
- VirusTotal: No malicious detections
- Google Safe Browsing: No unsafe content detected
- SURBL: Delisted after review
- URIBL: Not listed
- Quttera: Clean, no threats detected

All evidence screenshots are attached.
```

---

## 七、提交后的状态变化

常见流程：

```
serverHold → active
```

* 审核时间：数小时～1 个工作日
* DNS 生效可能有缓存延迟

---

## 八、避免二次被封的建议

解封后**不要立刻做以下行为**：

* 自动跳转
* 短链 / 批量页面
* iframe 外链聚合
* 参数型 URL 重写

建议：

* 先部署一个**干净的静态页面**
* 明确站点用途
* 保持一段时间的“正常访问行为”

---

## 九、总结

这类封禁并不罕见，尤其是：

* 新注册域名
* `.xyz` 后缀
* 无内容 / 空白页 / 跳转页

**关键不是慌，而是按注册局规则补齐证据链**。

只要所有 Blocklist 全部清干净，XYZ 基本都会解封。

希望这篇记录能帮你少走弯路。
