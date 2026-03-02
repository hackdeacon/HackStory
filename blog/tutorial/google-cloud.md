---
outline: deep
---

# 免费的 Google Cloud 服务器

通过本文你可以获得一台 2C1G 美国 IP 的 VPS，可以用于部署静态站点、轻量后端、以及各种小工具等，还有懂的都懂。

## 前期准备

- 一个 Google 账号
- 一张外币卡（U 卡 / 国内 Visa 信用卡 / 港卡）

## 激活谷歌云试用

浏览器打开 `console.cloud.google.com`

点击右上角开始试用。

![开始试用](https://pic.hackstory.cn/blog/gcp/OYe3v4Sr.webp)

地区随意，这里选择美国。

![国家 / 地区](https://pic.hackstory.cn/blog/gcp/VJ6xnFeE.webp)

使用美国地址生成器完善信息，并绑定外币卡。
只要你按照要求配置，是不会产生费用的，顶多产生几美分的 CDN 费用（1 美分 = 0.07 人民币）。

![验证付款信息](https://pic.hackstory.cn/blog/gcp/xmninIEd.webp)

完成之后打开左侧菜单，选择 `Compute Engine` -> `虚拟机实例`。

![虚拟机实例](https://pic.hackstory.cn/blog/gcp/rzwHH9Fv.webp)

点击创建实例，会让你激活 Compute Engine API，激活后即可创建虚拟机实例。

![创建虚拟机实例](https://pic.hackstory.cn/blog/gcp/Mobrzqk5.webp)

## 虚拟机实例配置

### 机器配置

可选 `爱荷华` 和 `俄勒冈`，推荐选择俄勒冈。

![俄勒冈](https://pic.hackstory.cn/blog/gcp/CcTiLall.webp)

下面机器类型，选择 `e2-micro`。

![e2-micro](https://pic.hackstory.cn/blog/gcp/UcvCXZ6P.webp)

### 操作系统和存储空间

左侧菜单栏切换到 `操作系统和存储空间`，然后点击 `更改`。

- 启动磁盘类型更改为 `标准永久性磁盘`
- 大小改为 `30 GB`
- 如有需求可自行选择操作系统版本

![更改磁盘类型和大小](https://pic.hackstory.cn/blog/gcp/OAyH8zS5.webp)

### 数据保护

选择 `无备份`。

![无备份](https://pic.hackstory.cn/blog/gcp/8ukI6k6m.webp)

### 网络配置

勾选 `允许 HTTP 流量` 和 `允许 HTTPS 流量`

![防火墙](https://pic.hackstory.cn/blog/gcp/4wdtyiDw.webp)

展开网络接口，将下面的网络服务层级改为 `标准`。

![展开网络接口](https://pic.hackstory.cn/blog/gcp/nzbbOauQ.webp)

![标准网络服务层级](https://pic.hackstory.cn/blog/gcp/1VijOMcE.webp)

然后就可以点击创建虚拟机实例了，到这里就算配置完成了，下面列个汇总表格，大家可以照着表格对照一下配置对了没有。

| 配置项 | 推荐设置 |
| :---: | :---: |
| **区域** | 爱荷华 / <span style="color:red;">俄勒冈</span> |
| **机器类型** | <span style="color:red;">e2-micro</span> |
| **磁盘类型** | <span style="color:red;">标准永久性磁盘</span> |
| **磁盘大小** | <span style="color:red;">30 GB</span> |
| **备份** | <span style="color:red;">无备份</span> |
| **防火墙** | 勾选 <span style="color:red;">允许 HTTP 流量</span> 和 <span style="color:red;">允许 HTTPS 流量</span> |
| **网络服务层级** | <span style="color:red;">标准</span> |

最后通过在线 SSH 连接就可以 Enjoy it 啦！

![SSH](https://pic.hackstory.cn/blog/gcp/ZoGmgWSs.webp)
