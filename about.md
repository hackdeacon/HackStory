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

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/hackdeacon.png',
    name: '黑衣执事',
    title: '用心取悦自己',
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
</script>

# 👋🏻 Hi, I'm Hack Deacon.

<VPTeamMembers size="small" :members />

## 🧑🏻‍💻 Whoami

- 计算机专业在读 💻
- 产品开发、LLM、数码产品 🎨
- 自媒体内容创作者（技术 / Vlog）📝
- 热爱驱动，喜欢探索新玩意、新思维、新技术 🎲

## ✨ Sparking Creativity

- **前端** <Badge class="green" text="Vue" style="background-color:#10B98124; color:#299764; font-weight:bold;" />
- **后端** <Badge type="danger" text="Node.js" />
- **创作** <Badge type="tip" text="Premiere Pro" /> <Badge type="tip" text="Lightroom" />
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
  width: 36px;
  display: inline-block;
  border-radius: 50%;
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
<img class="school-logo" src="https://bu.dusays.com/2025/05/19/682b187d0da7f.jpg" style="border: 1px solid pink;" /> **广东省科干学院** <Badge type="warning" text="2023 - 2026" style="font-weight:bold" />

<img class="school-logo" src="https://bu.dusays.com/2025/05/19/682b187d27602.jpg" style="border: 1px solid red;" /> **汕头市下蓬中学** <Badge type="danger" text="2020 - 2023" style="font-weight:bold" />

<img class="school-logo" src="https://bu.dusays.com/2025/05/19/682b187d17498.jpg" style="border: 1px solid mediumseagreen;" /> **龙湖区金英学校** <Badge class="green" text="2013 - 2020" style="background-color:#10B98124; color:#299764; font-weight:bold;" />
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
- **Style** <Badge type="tip" text="R&B" style="font-weight:bolder" /> <Badge type="warning" text="EDM" style="font-weight:bolder" /> <Badge type="danger" text="Mandopop" style="font-weight:bolder" /> <Badge type="info" text="K-Pop" style="font-weight:bolder" />
- **Favorite Singer** <Badge type="tip" text="Khalil Fong" style="font-weight:bolder" /> <Badge type="warning" text="Avicii" style="font-weight:bolder" /> <Badge type="danger" text="Jay Chou" style="font-weight:bolder" /> <Badge type="info" text="BIGBANG" style="font-weight:bolder" />

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
</style>

<div class="accordion-container">
  <div class="accordion-item">
    <a href="https://example.com/1" target="_blank">
      <img src="https://bu.dusays.com/2025/04/03/67ee73ea07906.png" title="1">
    </a>
  </div>
  <div class="accordion-item">
    <a href="https://space.bilibili.com/1604499246" target="_blank">
      <img src="https://bu.dusays.com/2025/04/03/67ee73ea07906.png" title="于可音">
    </a>
  </div>
  <div class="accordion-item">
    <a href="https://space.bilibili.com/946974" target="_blank">
      <img src="https://bu.dusays.com/2025/04/03/67ee73ea07906.png" title="影视飓风">
    </a>
  </div>
  <div class="accordion-item">
    <a href="https://example.com/4" target="_blank">
      <img src="https://bu.dusays.com/2025/04/03/67ee73ea07906.png" title="1">
    </a>
  </div>
  <div class="accordion-item">
    <a href="https://example.com/5" target="_blank">
      <img src="https://bu.dusays.com/2025/04/03/67ee73ea07906.png" title="1">
    </a>
  </div>
</div>

## 💌 Vibe with Me

| Channel | Contact |
| :--- | :--- |
| 📧 Mail | hackdeacon@gmail.com |
| 🌍 Blog | [hackdeacon.xyz](https://hackdeacon.xyz) |
| 📸 YouTube | [@黑衣执事](https://www.youtube.com/@hackdeacon) |

---

# 无限进步