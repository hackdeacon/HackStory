import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // appearance: false,
  title: "黑衣执事",
  // titleTemplate: "用心取悦自己",
  description: "hackdeacon",
  cleanUrls: true,
  lastUpdated: true,
  lang: 'zh',
  head: [
    ['link', { rel: 'icon', href: 'https://bu.dusays.com/2025/04/06/67f28134f3d48.png' }]
  ],
  markdown: {
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://bu.dusays.com/2025/04/06/67f28134f3d48.png',
    // footer: {
    //   message: 'ʜᴀᴄᴋ ᴅᴇᴀᴄᴏɴ',
    //   copyright: 'Happy Myself with Heart'
    // },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/hack' },
      { text: 'About', link: '/about' },
    ],

    sidebar: [
      {
        text: '自媒体创作',
        collapsed: false,
        items: [
          { text: '选题', link: '/hack#选题-📝' },
          { text: '摄影', link: '/hack#摄影-📸' },
          { text: '剪辑', link: '/hack#剪辑-🎬' },
          { text: '运营', link: '/hack#运营-📈' },
        ]
      },
      {
        text: '开发与技术',
        collapsed: false,
        items: [
          { text: '前端', link: '/hack#前端-🎨' },
          { text: '后端', link: '/hack#后端-🛠' },
          { text: '运维', link: '/hack#运维-⚙' },
          { text: 'LLM', link: '/hack#llm-🤖' },
        ]
      },
      {
        text: '产品小分享',
        collapsed: true,
        items: [
          { text: '数码', link: '/hack#数码-🎧' },
          { text: '网站', link: '/hack#网站-🌐' },
          { text: 'App', link: '/hack#app-📲' },
        ]
      },
      {
        text: '生活小记录',
        collapsed: true,
        items: [
          { text: '成长', link: '/hack2' },
          { text: '学习', link: '/blog/HackAwards2024' },
          { text: '碎碎念', link: '/hack#我最好的朋友' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'valorant', link: 'https://github.com/hackdeacon' },
      { icon: 'twitter', link: 'https://x.com/hackdeacon' },
      // { icon: 'gmail', link: 'mailto:hackdeacon@gmail.com' },
    ],

    // editLink: {
    //   pattern: 'https://github.com/hackdeacon/HackStory/edit/main/:path',
    //   text: 'Edit this page on GitHub'
    // }
  }
})
