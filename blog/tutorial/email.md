---
outline: deep
---

# 搭建个人域名邮箱

拥有自己的域名邮箱之后可以做很多事，可以体现你在互联网的专业性，也可以用于注册各种平台，实现无限小号薅羊毛等等。

## 前期准备

必要（收信服务）：`域名` `Cloudflare`  
可选（发信服务）：`Gmail` `Resend` `Vercel`

> 域名就是邮箱后缀，例如 **@hackstory.com**  
> 我们的老朋友 Cloudflare 用于托管邮件转发服务  
> Gmail 内自带邮件代发服务，可用于发信  
> 如需要专业发信，则需要用到 Resend API 并部署在 Vercel

### 部署收信服务

首先需要有一个域名，渠道有很多，可自行选择。

- 很多域名首年很便宜，续费很贵，这种我们称之为年抛域名。
- 在 Spaceship 花五块钱可注册一年 6 位数字 .xyz 后缀域名。
- 还有很多免费的三级域名，这里不做推荐。
- .cn 域名性价比很高，首年和续费都是 30 多。

将你的域名托管到 Cloudflare
![加入域](https://pic.hackstory.cn/blog/mail/kVKDoKLw.webp)
![输入域名](https://pic.hackstory.cn/blog/mail/kn1GZ99g.webp)
![免费计划](https://pic.hackstory.cn/blog/mail/eEu18Ofs.webp)
![名称服务器](https://pic.hackstory.cn/blog/mail/cRpE2Hz4.webp)

按照页面步骤，你需要到域名注册商后台，把你域名的 DNS 服务器地址修改成 Cloudflare 分配给你的这两条，下面以腾讯云和阿里云为例。
![腾讯云](https://pic.hackstory.cn/blog/mail/iDNPnTdu.webp)
![阿里云](https://pic.hackstory.cn/blog/mail/CyVbxt1D.webp)

设置完名称服务器后，打开 `域名` -> `电子邮件` -> `电子邮件路由` -> `启用电子邮件路由`。
![电子邮件路由](https://pic.hackstory.cn/blog/mail/Qcan21j8.webp)
![添加记录](https://pic.hackstory.cn/blog/mail/O9PYvXfO.webp)

之后我们添加一个目标地址，这个目标地址就是你日常使用的邮箱地址，用于接收被转发的邮件。也就是说，当自定义域名邮箱接收到邮件时，邮件就会被转发给你设置的目标地址。
![目标邮件地址](https://pic.hackstory.cn/blog/mail/jxKh6UI3.webp)

将 Catch-All 打开，并编辑设置转发。

> 打开 Catch-All 后，所有未单独创建规则的邮箱地址都会生效转发。  
> 例如，你只设置了 `test@example.com → your@gmail.com`，当开启 Catch-All 后，即使有人发邮件到 `abc@example.com`、`xyz@example.com`，这些原本不存在的地址也会被自动接收并转发到你设定的目标邮箱。

![Catch-All](https://pic.hackstory.cn/blog/mail/buAufpqn.webp)
![转发](https://pic.hackstory.cn/blog/mail/k1OPNmZ0.webp)

到这里收件的工作基本就做完了，你可以拿其他邮箱发送一个邮件测试一下是否生效，其他配置大家可以自行探索。

### 部署发信服务

有两种方法可以部署，分别是 `Gmail 便捷版` 和 `Resend API 进阶版`。

#### Gmail 版

首先我们需要准备一个 `应用专属密码` 用于登录 Google 的 SMTP 邮件服务器。

浏览器手动打开地址 [myaccount.google.com/security](https://myaccount.google.com/security)  
打开左侧的 `安全性与登录`，然后启用 `两步验证`。
![两步验证](https://pic.hackstory.cn/blog/mail/rX7mhrl4.webp)

再次手动打开地址 [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)  
输入密码名称，例如 `Mail`，然后点击创建，请提前保存好密码，因为只会显示一次。
![应用专属密码](https://pic.hackstory.cn/blog/mail/gFAdRlVs.webp)

打开 `Gmail` -> `设置` -> `账号和导入` -> `添加其他电子邮件地址`
![SMTP](https://pic.hackstory.cn/blog/mail/yuOHQU66.webp)

- 名称：使用该自定义邮箱时的发件人名称
- 邮箱：自定义前缀邮箱地址
- 勾选视为别名

![SMTP 2](https://pic.hackstory.cn/blog/mail/obqA635g.webp)

- SMTP 服务器改为 `smtp.gmail.com`
- 端口选择 `587`（使用 TLS）
- 用户名：当前 Gmail 邮箱地址
- 密码：输入刚刚生成的 `应用专用密码`

成功添加账号之后，我们就可以在 Gmail 内使用该自定义邮箱地址来发送或回复邮件了。
![Enjoy](https://pic.hackstory.cn/blog/mail/GGP61F4h.webp)

#### Resend API 进阶版

需要有一定的编程基础以及部署能力，当然你也可以选择 Vibe 一个，下面提几个注意事项：

> - 首次注册 Resend 后可能会被临时封禁，需要发送一份验证邮件，到时候按要求操作就行，你可以让 AI 写一份回复邮件模板，大概一天左右账户就可以正常使用（[点我获得模板](#template)）。
>
> - 部署的时候不要把你的 Resend API 直接写进 `.env` 文件，有泄露风险，正确做法是定义环境变量（如需本地开发测试，记得把 `.env` 加进 `.gitignore`）。
>
> - API Key 权限分离，不要只用一个全局 API Key。区分 `dev` / `staging` / `prod` 三套环境变量，并在不同部署环境下使用不同 key。若泄露，立即在后台 Revoke 并重新生成。
>
> - 必须正确配置 `SPF`、`DKIM`、`DMARC` 记录，否则极易进入垃圾箱。

平台提供了各种编程语言的用例，你可以按自己的需求自行选择。
![用例](https://pic.hackstory.cn/blog/mail/TNA8Od88.webp)

以下是我 Vibe 的一个简易发信应用：
![Rmail](https://pic.hackstory.cn/blog/mail/diBaTZOf.webp)

---

##### 邮件回复模板 {#template}

```
Hello Resend Support team,
Thank you for reaching out.

Here are the details you requested:

Website URL
[你的域名]
This is my personal website and technical blog. It is used to publish articles, projects, and documentation related to software development and personal projects.

Signup URL
At the moment, there is no public signup form. Email addresses are collected only through direct user actions, such as account registration or contact forms on the website. The project is still in an early stage and some features are under development.

Types of emails
I plan to use Resend exclusively for transactional emails, such as:
Account-related notifications
Login or verification emails
System notifications triggered by user actions

I do not send marketing, promotional, or unsolicited emails. All emails are sent only to users who have explicitly interacted with the site.

Please let me know if you need any additional information.
Thank you for your time and review.

Best regards,
[你的名字]
```