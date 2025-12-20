# 搭建永久免费的图床

用到的工具有：`一个域名`、`GitHub`、`Cloudflare`、`Telegram`、`EdgeOne`。

> 域名用来自定义图片 URL、公开域、CDN 加速，  
> GitHub 用来 Fork 图床仓库代码，并同步更新上游，  
> Cloudflare 会用到 R2 对象存储（免费 10GB）、Pages、KV，  
> Telegram 会用到 Bot 和 Channel 作为备用存储空间（无限容量），  
> EdgeOne 作为国内 CDN 加速。

本教程只作为复盘，纯小白请看：  
超级详细的部署教程文档：https://cfbed.sanyue.de

## 一、部署图床

https://github.com/MarSeventh/CloudFlare-ImgBed

Fork 仓库代码到自己的 GitHub，并用 Cloudflare Pages 部署。

![Fork](https://pic.hackdeacon.cn/blog/O3L0oKrr.png)

请注意新版本 Cloudflare 的 Workers and Pages 的仪表盘有所改动，请点击页面右上角的加号新建页面，而不是点击该页面上的创建应用程序。

![Cloudflare Pages](https://pic.hackdeacon.cn/blog/ss84IiGN.png)

连接你的 GitHub 账号后，选择我们刚刚 Fork 的仓库。

![导入 Git 仓库](https://pic.hackdeacon.cn/blog/o0wDMm5c.png)

构建命令填写 `npm install`，然后点击 `保存并部署`。

![构建命令](https://pic.hackdeacon.cn/blog/M41cp6fE.png)

## 二、配置 R2 及 KV

**创建 R2**  
`Cloudflare -> 存储和数据库 -> R2 对象存储 -> 概述 -> 创建存储桶`

起一个你喜欢的名字，地区我们选择 `亚太地区 (APAC)` 这样境内访问会快一点。

![创建 R2](https://pic.hackdeacon.cn/blog/QIrt1hn6.png)

**创建 KV**  
`Cloudflare -> 存储和数据库 -> Workers KV`

创建 KV 命名空间 `img_url`

![创建 KV](https://pic.hackdeacon.cn/blog/qhGKv73R.png)

**绑定 R2 和 KV 到 Pages 项目**

回到刚刚的 Pages 项目：  
`Workers 和 Pages -> cloudflare-imgbed (项目名称) -> 设置 -> 绑定 -> 添加 R2 存储桶`

变量名 `img_r2`，R2 存储桶选择刚刚创建好的。

![绑定 R2](https://pic.hackdeacon.cn/blog/p71zLpeN.png)

继续添加 KV 命名空间，变量名 `img_url`。

![绑定 KV](https://pic.hackdeacon.cn/blog/wnDKNov3.png)

R2 和 KV 绑定完成之后，点击部署 -> **重试部署**。

![重新部署](https://pic.hackdeacon.cn/blog/EDfotoKI.png)

## 三、配置域名及 CDN

**配置图床前端自定义域名**

在 Pages 项目中点击自定义域，添加你的域名，例如 `img.hackdeacon.com`，请提前做好解析，推荐将域名托管到 Cloudflare，不开橙云国内访问速度会正常一些（仅作为 DNS 解析）。

![自定义域名](https://pic.hackdeacon.cn/blog/lsUbpXNw.png)

**配置 R2 存储桶自定义域名**

例如 `r2.hackdeacon.com`，此处的自定义域名后面会用来作为 CDN 加速回源地址。

![R2 自定义域名](https://pic.hackdeacon.cn/blog/EY5SFUoL.png)

**EdgeOne 配置 CDN 加速**

大家可以选择不同厂家的 CDN，这里我选择 EdgeOne，因为有永久免费无限额度。

完成测速并分享至不同平台，即可获得四个域名的托管额度。  
活动地址 https://edgeone.ai/zh/get-free-plan

![EdgeOne](https://pic.hackdeacon.cn/blog/jhciPalK.png)

进入套餐管理页面 https://console.tencentcloud.com/edgeone/package 点击去绑定域名，按照提示做好域名的解析，这里我选择 CNAME 接入，因为我的域名 NS 托管在了 Cloudflare。

![绑定域名](https://pic.hackdeacon.cn/blog/fS2HqZ72.png)

回到 Cloudflare 创建 R2 存储桶的 API 访问密钥。  
`R2 -> Account Details -> Manage`

![R2 API](https://pic.hackdeacon.cn/blog/l3KmJxt6.png)

创建 Account API 令牌，权限建议改成 `对象读和写`，其他保持默认，点击创建后，保存好 `Access Key ID` 和 `Secret Access Key`。

![API 令牌](https://pic.hackdeacon.cn/blog/XJD8e5Qv.png)

加速域名：后续作为图床的主链接，例如 `pic.hackdeacon.com`。  
源站配置选择 `对象存储源站`，S3 兼容，源站地址填写刚刚作为 R2 存储桶的自定义域名。
将刚刚创建的公钥和私钥填写进相应的位置，推荐模板选择 `网站加速`。

![EdgeOne 配置](https://pic.hackdeacon.cn/blog/tAtKXCUP.png)

添加完后配置 HTTPS 证书。

![HTTPS](https://pic.hackdeacon.cn/blog/I0HJFm9H.png)

生效后我们可以用 https://www.itdog.cn/http 测试一下加速效果，仅作参考。

**<center>加速前 ⬇️</center>**

![ITDOG](https://pic.hackdeacon.cn/blog/dk2tt8uY.png)

**<center>加速后 ⬇️</center>**

![ITDOG](https://pic.hackdeacon.cn/blog/JUtoe1g5.png)

## 四、配置 TG

本教程最核心的配置 EdgeOne CDN 加速已结束。  
下面懒得写了，请看 [配置 Telegram Bot 以及 Channel](https://cfbed.sanyue.de/deployment/prerequisites.html#_2-telegram-bot-%E6%B8%A0%E9%81%93)。

配置完后在图床的设置里添加 Telegram 上传渠道。

![TG](https://pic.hackdeacon.cn/blog/DllJ5ICR.png)

## 五、配置图床

图床站点 LOGO、背景、名字等等。  
https://cfbed.sanyue.de/deployment/configuration.html

有一个需要注意的点，如果配置了 CDN 加速，记得修改默认 URL 前缀。  
还有一个需要注意的点，如果默认 URL 前缀放空不填的状态下，默认图片链接将是图床站点的链接后加 `/file` 路径。

例如 `https://img.hackdeacon.com/file/123.png`

![默认 URL](https://pic.hackdeacon.cn/blog/b6UjgZvN.png)

## 六、防盗链

`Cloudflare 主页 -> Scrape Shield -> Hotlink 保护`

![防盗链](https://pic.hackdeacon.cn/blog/2XuTl8wG.png)

开启之后你的图片只能在你域名下的站点使用，第三方域名站点将会 403。  
当然也可以上传图片到 `hotlink-ok` 文件夹下，该文件夹内的图片无防盗链保护。
