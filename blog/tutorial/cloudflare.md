---
theme: knowledge-base
themeName: 知识库
outline: deep
---

# Cloudflare 免费功能盘点

> Cloudflare 是一家美国科技公司，总部位于加利福尼亚州旧金山，提供一系列的互联网服务，包括内容分发网络（CDN）、云网络安全、DDoS 攻击缓解，以及 ICANN 认证的域名注册。该公司的主要服务是充当用户与服务器之间的反向代理，从而提升性能并防护恶意流量。

像我们经常见到的人机验证，就是 Cloudflare 的 Turnstile 功能。

![人机验证](https://pic.hackstory.cn/blog/cloudflare/FfDQlcOb.webp)

**Cloudflare 为什么被叫做「赛博菩萨」？**

它是互联网的半壁江山，如果没有了它，互联网将瘫痪，而它提供的互联网基础设施，却是人人都可以免费使用的，而且订阅计划还很便宜大碗。

![梗图](https://pic.hackstory.cn/blog/cloudflare/GGZh8BkI.webp)

本文归纳总结一下赛博活佛 Cloudflare 免费计划的常用功能：

1️⃣ 域名与网站基础设施：
- 权威 DNS 解析
- 免费 SSL/TLS 证书
- 全球 CDN 加速
- 站点流量分析
- DDoS 防御与防火墙

2️⃣ 边缘计算与部署：
- Workers（边缘函数）
- Pages（静态网站托管）
- 电子邮件服务

3️⃣ 数据与存储服务：
- Cloudflare Workers KV
- Cloudflare D1（SQLite）
- Cloudflare R2（对象存储）

4️⃣ 其他：
- Cloudflare Tunnels（内网穿透）
- Turnstile（人机验证）

以上功能对于建设个人站点都是必备的，但 CF 的功能其实并不止于此。

## 域名与网站基础设施

### 权威 DNS 解析

全球最快 Anycast DNS 解析，基于 1.1.1.1 同源技术。支持无限子域名、CNAME、MX、TXT 等全部记录类型，自动智能路由，解析速度秒杀传统 DNS。免费无查询次数限制，还自带 1.1.1.1 公共 DNS 加速全网。

一键开启小橙云代理，即可隐藏服务器真实的 IP 地址，避免源站被直接攻击。

![DNS](https://pic.hackstory.cn/blog/cloudflare/RTQUpdRJ.webp)

### 免费 SSL/TLS 证书（自动 HTTPS）

Universal SSL/TLS 证书。自动颁发、自动续期、TLS 1.3 全开，支持 `Full (strict)` 模式，一键全站 HTTPS。支持通配符证书 `*.example.com`，零配置永久绿锁。

![SSL/TLS](https://pic.hackstory.cn/blog/cloudflare/3e9l5U3J.webp)

### 全球 CDN 加速

全球节点免费缓存你的静态资源 `HTML、CSS、JS、Images`。  不限流量，只要合理使用，不违反资源分发协议，几乎没有带宽上限，彻底解决传统云厂商高昂的流量费痛点。

详细请见 

[developers.cloudflare.com/cache](https://developers.cloudflare.com/cache)

![CDN](https://pic.hackstory.cn/blog/cloudflare/FpjbzS69.webp)

### 站点流量分析

无需在网站中植入复杂的 Cookie 追踪代码，基于边缘节点的请求即可生成精准的流量报表（UV、PV、国家 / 地区分布、访问路径、加载性能）。

![地区流量分析](https://pic.hackstory.cn/blog/cloudflare/T5FndYBN.webp)

完整流量仪表盘 + 安全分析。实时查看请求数、带宽、缓存命中率、访客地域、攻击拦截详情，搭配 Google Analytics 食用更佳。

![性能](https://pic.hackstory.cn/blog/cloudflare/17a9VBTn.webp)

### DDoS 防御与防火墙

无上限的 DDoS 缓解： 免费版同样享有企业级的 DDoS 基础防护，即使遭遇超大规模攻击，Cloudflare 也会为你扛下，且不收超额流量费，小网站再也不怕流量洪水。

自定义 WAF 规则： 免费用户可配置自定义防火墙规则（如屏蔽特定国家的 IP、拦截特定 User-Agent 或恶意路径扫描）。

5 秒盾（Under Attack Mode）： 遭到 CC 攻击时，一键开启，强制所有访客进行真人验证，瞬间过滤机器脚本。

![Under Attack](https://pic.hackstory.cn/blog/cloudflare/yurOctHv.webp)

> **历来规模最大的 DDoS 攻击是哪一次？**
> 
> 2025 年第三季度，Cloudflare 缓解了有史以来报告的最大型分布式拒绝服务 (DDoS) 攻击，峰值达到每秒 29.7 太比特 (Tbps)。此次攻击归因于 Aisuru 僵尸网络，该网络由估计在全球范围内有 100 万至 400 万受感染主机组成。尽管规模空前（在过去的几十年里，DDoS 攻击很少超过 1-2 Tbps），Cloudflare 网络仍能够自动缓解此次攻击。

## 边缘计算与部署

![Compute](https://pic.hackstory.cn/blog/cloudflare/NwzTlJEY.webp)

### Cloudflare Workers

把你的后端代码直接部署在 Cloudflare 全球数百个节点上，访客请求瞬间响应，冷启动时间几乎为零。

免费额度： 每天 10 万次免费请求！

![Workers](https://pic.hackstory.cn/blog/cloudflare/nyAD4Fhx.webp)

### Cloudflare Pages

完美替代 GitHub Pages。支持与 GitHub/GitLab 深度绑定，代码一推，自动构建上线（CI/CD）。

原生支持 React, Vue, Next.js, Hugo, Hexo 等主流框架。

免费额度： 无限量的带宽请求，每月 500 次构建次数，完全满足个人博客、项目文档和小型官网的需求。

![Pages](https://pic.hackstory.cn/blog/cloudflare/P6aBJRR5.webp)

### 电子邮件服务

电子邮件路由：完全免费、无限域名支持。自定义任意邮箱别名，无限创建。

自动 DNS 配置：添加域名后一键开启，MX / SPF / DKIM / DMARC 记录自动生成并锁定，防误删。

电子邮件发送：内测中，即将上线。

![Email Sending](https://pic.hackstory.cn/blog/cloudflare/aLuD1WXh.webp)

搭建教程 [hackstory.cn/blog/tutorial/email](https://hackstory.cn/blog/tutorial/email)

## 数据与存储服务

### Cloudflare Workers KV

全球分布式 NoSQL 键值数据库，毫秒级读写，边缘节点就近存储。适合缓存、会话、配置、计数器、短链等轻量数据。

> **免费额度**  
> 读取：一天 10 万次  
> 写入 / 删除：一天 1000 次  
> 存储：1 GB  
> 命名空间：1000 个  
> 额度每天刷新

![KV](https://pic.hackstory.cn/blog/cloudflare/Sh6Fa423.webp)

### Cloudflare D1

全托管 SQLite 数据库，Serverless + 边缘加速。支持标准 SQL 语法，自动多区域复制，再也不用自己搭 MySQL / PostgreSQL。

> **免费额度**  
> 读取行数：每天 5000 万行  
> 写入行数：每天 10 万行  
> 存储：总计5 GB（每个数据库最大 500 MB）  
> 数据库数量：一个账号最多 10 个  
> 额度每天刷新  

![D1](https://pic.hackstory.cn/blog/cloudflare/tddiN3by.webp)

### Cloudflare R2

S3 完全兼容的对象存储（图床、视频、备份、静态资源），最大亮点是出口流量永久免费（全球拉取都不收费）！

> **免费额度**  
> 存储：每个月 10 GB（没听错，是每个月！）  
> Class A 操作（上传、删除等）：每月 100 万次  
> Class B 操作（列表、获取等）：每月 1000 万次  
> 出口流量：永久免费  
> 桶数量：无限（上限100万）

![R2](https://pic.hackstory.cn/blog/cloudflare/Ma7eU0F3.webp)

## 其他

### Tunnels 内网穿透

归属于 Zero Trust 免费计划。无需公网 IP，无需配置路由器端口映射，只需在本地（如 NAS、树莓派、旧电脑）跑一个小程序，就能安全地把内网服务暴露到公网，还可以加上 Google / GitHub 账号的单点登录（SSO）验证。

![Tunnels](https://pic.hackstory.cn/blog/cloudflare/QqRpVxnh.webp)

### Turnstile

免费替代 Google reCAPTCHA。以隐私优先的方式验证访客是否为真人，不需要访客痛苦地去找反人类的红绿灯 / 斑马线 / 消防栓，极大地提升了用户体验。

![Turnstile](https://pic.hackstory.cn/blog/cloudflare/FfDQlcOb.webp)

### 更多

其实 Cloudflare 的功能不止于此，篇幅原因，剩下的大家可以自行去探索。

Cloudflare 的更新也非常勤快，目前也上线了很多 AI 相关的功能。

- Workers AI（调用模型）
- Vectorize（向量数据库）
- Analytics Engine（时序分析）
- AI Getaway（API 网关）

---

往期文章也有具体的玩法示例：  

搭建永久免费的图床  
[hackstory.cn/blog/tutorial/imgbed](https://hackstory.cn/blog/tutorial/imgbed)  
搭建个人域名邮箱  
[hackstory.cn/blog/tutorial/email](https://hackstory.cn/blog/tutorial/email)

![梗图 2](https://pic.hackstory.cn/blog/cloudflare/BWGXYvee.webp)

![梗图 3](https://pic.hackstory.cn/blog/cloudflare/22CPpxY1.webp)