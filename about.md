---
layout: doc
editLink: false
outline: 2
prev: false
next: false
title: 关于
lastUpdated: false
navbar: true
sidebar: false
aside: left
footer: false
---

<!-- Team -->
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/hackdeacon.png',
    name: '黑衣执事',
    title: 'hackdeacon',
    links: [
      // { icon: 'github', link: 'https://github.com/hackdeacon' },
      { icon: 'twitter', link: 'https://twitter.com/hackdeacon' }
    ]
  },
]

const hackmates = [
  {
    avatar: 'https://www.github.com/himicoswilson.png',
    name: 'HimiCos',
    title: 'A quiet technical learner',
    links: [
      { icon: 'github', link: 'https://himicos.com' },
      // { icon: 'hexo', link: 'https://himicos.com' }
    ]
  },
  {
    avatar: 'https://bu.dusays.com/2025/05/19/682b1b2de306e.webp',
    name: 'Grok',
    title: 'Understand the universe',
    links: [
      { icon: 'x', link: 'https://grok.com' }
    ]
  },
]

const timeline = [
  {
    avatar: 'https://bu.dusays.com/2025/05/19/682b187d17498.jpg',
    name: '龙湖区金英学校',
    title: '2013 - 2020',
    links: [
      { icon: 'github', link: 'https://himicos.com' }
    ]
  },
  {
    avatar: 'https://bu.dusays.com/2025/05/19/682b187d27602.jpg',
    name: '汕头市下蓬中学',
    title: '2020 - 2023',
    links: [
      { icon: 'x', link: 'https://grok.com' }
    ]
  },
  {
    avatar: 'https://bu.dusays.com/2025/05/19/682b187d0da7f.jpg',
    name: '广东科学技术职业学院',
    title: '2023 - 2026',
    links: [
      { icon: 'x', link: 'https://grok.com' }
    ]
  }
]

const acknowledgements = [
  {
    avatar: 'https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_42c42ce18228eb0e3ea8f072d2b32625~c5_300x300.jpeg',
    name: 'guigui',
    title: 'Friends since 2017',
    links: [
      { icon: 'valorant', link: '/' }
    ]
  },
  {
    avatar: 'https://www.github.com/himicoswilson.png',
    name: 'HimiCos',
    title: 'Friends since 2018',
    links: [
      { icon: 'twitter', link: 'https://himicos.com' }
    ]
  },
  {
    avatar: 'https://bu.dusays.com/2025/05/22/682e04a03b413.jpg',
    name: 'OpenAI',
    title: '2023',
    links: [
      { icon: 'openai', link: 'https://chatgpt.com' }
    ]
  },
  {
    avatar: 'https://bu.dusays.com/2025/05/19/682b1b2de306e.webp',
    name: 'Grok',
    title: '2025',
    links: [
      { icon: 'x', link: 'https://grok.com' }
    ]
  }
]
</script>

# 👋🏻 Hi, I'm hackdeacon.

<VPTeamMembers size="small" :members />

## 🧑🏻‍💻 Whoami

- 计算机专业在读 💻
- 学习产品开发、LLM、科技数码 🎨
- 自媒体内容创作者（技术 / Vlog）📝
- 喜欢探索新思维、新技能 🎲

## ✨ Sparking Creativity

- **前端** <Badge class="green" text="Vue" style="background-color:#10B98124; color:#299764;" />
- **后端** <Badge type="danger" text="Node.js" />
- **创作** <Badge type="tip" text="Premiere Pro" /> <Badge type="tip" text="Lightroom" />
- **技能** <Badge type="warning" text="Photograph" /> <Badge type="warning" text="Vibe Coding" />
- **学习中** <Badge type="info" text="Swift" /> <Badge type="info" text="LLM" />

## 🧩 What I'm Crafting
- 探索 LLM 🤖
- 积累项目经验 🛠️
- 完善技术博客 📚
- 深入学习前后端交互 📈
- 记录生活 Vlogging 📸

::: tip 黑衣执事 - 用心取悦自己
[hackdeacon.xyz](https://hackdeacon.xyz)
:::

::: warning WeChat Mini Program
[Valorant Esports Wiki](https://bu.dusays.com/2025/05/16/6826a88a52501.png) (Demo)
:::

## 🎓 Milestones Timeline
<!-- - Chalkboards 2 Keyboards -->

<style>
.school-logo {
  user-select: none;
  /* pointer-events: none; */
  width: 48px;
  display: inline-block;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 4px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08);
}

.company-logo {
  user-select: none;
  /* pointer-events: none; */
  width: 48px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  margin-right: 4px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08);
}

.dark .green {
  color: #3DD68C !important;
  background-color: #10B98129 !important;
}
</style>

::: info **学业生涯 📖**
<img class="school-logo" src="https://bu.dusays.com/2025/05/19/682b187d0da7f.jpg" style="border: 2px solid pink;" /> **广东省科干学院** <Badge type="warning" text="2023 - 2026" style="font-weight:bold" />

<img class="school-logo" src="https://bu.dusays.com/2025/05/19/682b187d27602.jpg" style="border: 2px solid tomato;" /> **汕头市下蓬中学** <Badge type="danger" text="2020 - 2023" style="font-weight:bold" />

<img class="school-logo" src="https://bu.dusays.com/2025/05/19/682b187d17498.jpg" style="border: 2px solid mediumseagreen;" /> **龙湖区金英学校** <Badge class="green" text="2013 - 2020" style="background-color:#10B98124; color:#299764; font-weight:bold;" />
:::

::: info **工作经历 💼**
<img class="company-logo" src="https://www.minephone.com/static/logo_study3.png" style="border: 2px solid plum;" /> **迈峰网络科技** <Badge type="tip" text="即将加入" style="font-weight:bold" />
:::

<!-- <style>
.school-container {
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.school-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.school-logo {
  user-select: none;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08);
  margin-bottom: 10px;
}

.school-name {
  font-weight: bolder;
  margin-bottom: 10px;
  display: block;
}

.dark .green {
  color: #3DD68C !important;
  background-color: #10B98129 !important;
}

@media (max-width: 600px) {
  .school-container {
    justify-content: center;
  }

  .school-card {
    width: 100%;
    max-width: 200px;
  }
}
</style>

<div class="info custom-block" style="padding-bottom: 16px">
<div class="school-container">
  <div class="school-card">
    <img class="school-logo" src="https://bu.dusays.com/2025/05/19/682b187d0da7f.jpg" style="border: 2px solid pink;" />
    <span class="school-name">广东省科干学院</span>
    <Badge type="warning" text="2023 - 2026" style="font-weight:bold" />
  </div>
  
  <div class="school-card">
    <img class="school-logo" src="https://bu.dusays.com/2025/05/19/682b187d27602.jpg" style="border: 2px solid red;" />
    <span class="school-name">汕头市下蓬中学</span>
    <Badge type="danger" text="2020 - 2023" style="font-weight:bold" />
  </div>
  
  <div class="school-card">
    <img class="school-logo" src="https://bu.dusays.com/2025/05/19/682b187d17498.jpg" style="border: 2px solid mediumseagreen;" />
    <span class="school-name">龙湖区金英学校</span>
    <Badge class="green" text="2013 - 2020" style="background-color:#10B98124; color:#299764; font-weight:bold;" />
  </div>
</div>
</div> -->

<!-- <VPTeamMembers size="small" :members="timeline" /> -->

## 🐈‍⬛ Codemates

<VPTeamMembers size="small" :members="hackmates" />

## 💕 Motto
::: danger 用心取悦自己。
**Love Yourself, Wholeheartedly.** 
:::

## 🦄 MBTI
::: info Mediator 🦋
<h1 style="color:#32A478;font-weight:800">INFP</h1>

理想主义的探索者，追求内心的真实与世界的美好。  
喜欢沉思、创作、表达自我，也乐于共情和倾听他人。

![infp](https://www.16personalities.com/static/animations/type-descriptions/introductions/mediator.svg)
:::

## 🎧 Music
- **Style** <Badge type="tip" text="R&B" style="font-weight:bolder" /> <Badge type="warning" text="EDM" style="font-weight:bolder" /> <Badge type="danger" text="Mandopop" style="font-weight:bolder" />
- **Singer** <Badge type="tip" text="Khalil Fong" style="font-weight:bolder" /> <Badge type="warning" text="Avicii" style="font-weight:bolder" /> <Badge type="danger" text="Jay Chou" style="font-weight:bolder" />

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1pEFq9RKC6ZKnPyLuNErFW?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

## 🎮 Games

<style>
  .blur-hover-container {
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 1em;
    overflow: hidden;
  }

  .blur-hover-container .pic1,
  .blur-hover-container .pic2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: all 0.75s;
  }

  .blur-hover-container .pic1 {
    z-index: 1;
    user-select: none;
    pointer-events: none;
  }

  .blur-hover-container .pic2 {
    opacity: 0.5;
    z-index: 2;
    user-select: none;
    pointer-events: none;
    filter: blur(1px);
    mask-image: radial-gradient(circle at center, transparent 24%, black 72%);
    -webkit-mask-image: radial-gradient(circle at center, transparent 24%, black 72%);
  }

  .blur-hover-container:hover .pic1 {
    transform: scale(1.5);
  }

  .blur-hover-container:hover .pic2 {
    opacity: 0;
    filter: blur(64px);
  }

  .blur-hover-container .text-top-left {
    position: absolute;
    top: 32px;
    left: 24px;
    z-index: 3;
    color: #fafafa;
    font-size: 24px;
    font-weight: 800;
    user-select: none;
  }

  .blur-hover-container .text-bottom-right {
    position: absolute;
    bottom: 24px;
    right: 24px;
    z-index: 3;
    color: #cddccd;
    font-size: 14px;
    font-weight: 500;
  }

  .blur-hover-container .text-bottom-left {
    position: absolute;
    bottom: 24px;
    left: 24px;
    z-index: 3;
    color: #fafafa;
    font-size: 14px;
    font-weight: 1000;
    text-shadow: 0px 0px 16px black;
  }
</style>

<div class="blur-hover-container">
  <!-- 原图 -->
  <img class="pic1" src="https://bu.dusays.com/2025/05/17/68281a44c3db3.jpg" alt="pic1">
  <!-- 模糊图 -->
  <!-- <img class="pic2" src="https://bu.dusays.com/2025/05/17/6828213f0c563.jpeg" alt="pic2"> -->
  <!-- 四角文字 -->
  <div class="text-top-left">VALORANT</div>
  <div class="text-bottom-right"><span style="font-size:16px; color:#fff;">黑衣执事</span> #82068</div>
</div>

<br>

<div class="blur-hover-container">
  <!-- 原图 -->
  <img class="pic1" src="https://shp.qpic.cn/ishow/2735010315/1735890475_829394697_15125_sProdImgNo_6.jpg/" alt="pic1">
  <!-- 模糊图 -->
  <!-- <img class="pic2" src="https://shp.qpic.cn/ishow/2735022109/1708478801_829394697_34783_sProdImgNo_6.jpg/" alt="pic2"> -->
  <!-- 四角文字 -->
  <div class="text-top-left"></div>
  <div class="text-bottom-left"><span style="font-size:16px; color:white;">时之奇旅</span> / 孙策</div>
</div>

## 🐐 My GOATs

<style>
  .accordion-container {
    position: relative;
    width: 100%;
    margin: auto;
    /* aspect-ratio: 4/1; */
    border-radius: 1em;
    overflow: hidden;
    display: flex;
  }
  .accordion-item {
    flex: 1;
    transition: all 0.5s;
    opacity: 1;
    overflow: hidden;
    cursor: pointer;
  }
  .accordion-item a {
    display: block;
    width: 100%;
    height: 100%;
  }
  .accordion-item img {
    transition: all 0.5s;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .accordion-item img:hover {
    transform: scale(1.05);
  }

  .accordion-item:hover {
    flex: 2.75;
    z-index: 10;
    opacity: 1;
  }
  .accordion-container:hover .accordion-item:not(:hover) {
    filter: blur(1px);
    flex: 0.25;
    opacity: 0.25;
    z-index: 1;
  }

  @media (max-width: 600px) {
    .accordion-container {
      aspect-ratio: 3/1;
    }
  }
</style>

<div class="accordion-container">
  <div class="accordion-item">
    <a href="https://example.com/1" target="_blank">
      <img src="https://bu.dusays.com/2025/05/22/682ed3489fd73.jpeg" title="Heretics">
    </a>
  </div>
  <div class="accordion-item">
    <a href="https://space.bilibili.com/1604499246" target="_blank">
      <img src="https://sns-avatar-qc.xhscdn.com/avatar/660b0e88e342e5e9cee4d26e.jpg" title="于可音">
    </a>
  </div>
  <div class="accordion-item">
    <a href="https://space.bilibili.com/946974" target="_blank">
      <img src="https://bu.dusays.com/2025/05/21/682def07429db.jpg" title="影视飓风">
    </a>
  </div>
  <div class="accordion-item">
    <a href="https://weibo.com/u/1749127163" target="_blank">
      <img src="https://bu.dusays.com/2025/05/22/682ecf3110492.jpeg" title="雷军">
    </a>
  </div>
  <div class="accordion-item">
    <a href="https://v.douyin.com/uKo2HiteOyk/" target="_blank">
      <img src="https://p3-pc.douyinpic.com/img/aweme-avatar/mosaic-legacy_317260008137ea34710fe~c5_300x300.jpeg" title="王松傲寒">
    </a>
  </div>
</div>

## 🎒 EverydayCarry

<style>
/* 容器布局 */
.edc-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  /* margin-top: 16px; */
  justify-content: left; /* 横向居中整体 */
}

/* 单个卡片 */
.edc-card {
  width: 160px;
  padding: 16px 12px 20px;
  border-radius: 12px;
  text-align: center;
  background: var(--card-bg, #f9f9f9);
  /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); */
  transition: all 0.25s ease;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.edc-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 图片容器，固定大小，居中 */
.edc-img-wrapper {
  width: 128px;
  height: 96px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--img-bg, #eaeaea);
}

/* 图片本体，完整显示且居中 */
.edc-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保持比例，完整展示 */
}

/* 名称 */
.edc-name {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 6px;
  color: var(--text-primary, #222);
}

/* 描述 */
.edc-desc {
  font-size: 0.875rem;
  color: var(--text-secondary, #666);
  line-height: 1.3;
}

/* 主题适配 */
/* 浅色主题变量 */
:root {
  --card-bg: #f9f9f9;
  --img-bg: #eaeaea;
  --text-primary: #222222;
  --text-secondary: #666666;
}

/* 暗色主题变量 */
.dark, [data-theme="dark"] {
  --card-bg: #2b2b2b;
  --img-bg: #3a3a3a;
  --text-primary: #e0e0e0;
  --text-secondary: #bbbbbb;
}
</style>

<div class="edc-grid">

  <div class="edc-card">
    <div class="edc-img-wrapper">
      <img class="edc-img" src="https://www.mockupworld.co/wp-content/uploads/dynamic/2021/01/free-iphone-12-pro-display-mockup-psd-1072x0-c-default.jpg" alt="iPhone">
    </div>
    <div class="edc-name">iPhone 12 Pro</div>
    <div class="edc-desc">哥哥用剩下给我的<br><a href="https://www.apple.com.cn/iphone/compare/?modelList=iphone-12-pro,iphone-14-pro,iphone-16-pro" target="_blank"><br><small>查看详情</small></a></div>
  </div>

  <div class="edc-card">
    <div class="edc-img-wrapper">
      <img class="edc-img" src="https://www.apple.com/v/mac-mini/y/images/meta/mac-mini__dvce2jrm11w2_og.jpg" alt="Mac">
    </div>
    <div class="edc-name">Mac mini</div>
    <div class="edc-desc">我最好的小伙伴<br><a href="/blog/life/my-best-friend" target="_blank"><br><small>查看详情</small></a></div>
  </div>

  <div class="edc-card">
    <div class="edc-img-wrapper">
      <img class="edc-img" src="https://bu.dusays.com/2025/05/22/682eaff370fed.jpeg" alt="Laptop">
    </div>
    <div class="edc-name">Redmibook 14</div>
    <div class="edc-desc">游戏搭档 / 便携办公<br><a href="https://www.mi.com/shop/buy/detail?product_id=20870" target="_blank"><br><small>查看详情</small></a></div>
  </div>

  <div class="edc-card">
    <div class="edc-img-wrapper">
      <img class="edc-img" src="https://se-cdn.djiits.com/tpc/uploads/carousel/image/24c639a509645a93ab88f530ca0fa9a0@ultra.jpg" alt="DJI">
    </div>
    <div class="edc-name">DJI Action 4</div>
    <div class="edc-desc">记录生活的小玩意儿<br><a href="https://store.dji.com/cn/product/osmo-action-4?vid=144651" target="_blank"><br><small>查看详情</small></a></div>
  </div>

  <div class="edc-card">
    <div class="edc-img-wrapper">
      <img class="edc-img" src="https://bu.dusays.com/2025/05/22/682eb66ba2786.jpeg" alt="LUMIX">
    </div>
    <div class="edc-name">LUMIX G7</div>
    <div class="edc-desc">创作好帮手<br><a href="https://consumer.panasonic.cn/product/cameras-camcorders/lumix-series.html" target="_blank"><br><small>查看详情</small></a></div>
  </div>

  <div class="edc-card">
    <div class="edc-img-wrapper">
      <img class="edc-img" src="https://bu.dusays.com/2025/05/22/682eb83b0018f.jpeg" alt="LUMIX">
    </div>
    <div class="edc-name">25mm F1.7</div>
    <div class="edc-desc">人像利器<br><a href="https://consumer.panasonic.cn/product/cameras-camcorders/lens/lumix-lens/h-h025gk.html" target="_blank"><br><small>查看详情</small></a></div>
  </div>

  <div class="edc-card">
    <div class="edc-img-wrapper">
      <img class="edc-img" src="https://bu.dusays.com/2025/05/22/682ebc28be020.png" alt="VXE">
    </div>
    <div class="edc-name">VXE R1 SE</div>
    <div class="edc-desc">轻量化设计<br><a href="https://www.vxe.com/mouse/r1" target="_blank"><br><small>查看详情</small></a></div>
  </div>

  <div class="edc-card">
    <div class="edc-img-wrapper">
      <img class="edc-img" src="https://bu.dusays.com/2025/05/22/682ebdba6491e.jpeg" alt="VXE">
    </div>
    <div class="edc-name">VGN N75</div>
    <div class="edc-desc">薅朋友手上的<br><a href="https://www.vgnlab.com.cn/web/sku-614" target="_blank"><br><small>查看详情</small></a></div>
  </div>

</div>

## 💌 Vibe with Me

| Platform | Channel |
| :--- | :--- |
| 📧 Mail | hackdeacon@gmail.com |
| 🐦 Twitter | [@hackdeacon](https://x.com/hackdeacon) |
| 📸 Bilibili | [@黑衣执事X](https://space.bilibili.com/287107582) |

---

<br>

# 🌀 无限进步

::: info 🌱 为什么建站？
建立这个网站，是为了记录自己的学习过程、技术积累与成长轨迹。相比碎片化的社交平台，我更希望有一个结构清晰、内容可控的空间，长期沉淀对编程、创作和生活的思考。
:::

::: tip 📤 输出
碎片内容可以刷完就忘，真正的成长需要反思与整理。建站是我对 **「输出倒逼输入」** 理念的践行，也是希望通过文字和作品，留下一些自己走过的痕迹，也许能对某个和我一样在探索路上的人，带来一点帮助。
:::

::: warning 📝 记录
我是一个正在成长的学生，建这个站一方面是练手项目，另一方面是希望记录自己的学习过程。无论是代码笔记、踩过的坑，还是生活中的一些想法，我都希望能写下来，未来回头看看，也许就是成长的见证。
:::

::: danger 🫶 热爱 
在信息快速变化的时代，我一直想拥有一个属于自己的 **「数字栖息地」**。这个小破站既是我的博客，也是我作品的展示平台。它代表我的节奏、审美与思考，不依赖平台算法，不担心内容消失，只属于我自己。
:::

::: details 鸣谢 ❤️
<VPTeamMembers size="small" :members="acknowledgements" />
<br>
:::