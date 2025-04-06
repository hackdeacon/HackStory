import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // appearance: false,
  title: "黑衣执事",
  // titleTemplate: "用心取悦自己",
  description: "hackdeacon",
  cleanUrls: true,
  lang: 'zh',
  head: [
    ['link', { rel: 'icon', href: 'https://bu.dusays.com/2025/04/06/67f28134f3d48.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://bu.dusays.com/2025/04/06/67f28134f3d48.png',
    footer: {
      message: 'ʜᴀᴄᴋ ᴅᴇᴀᴄᴏɴ',
      copyright: 'Happy Myself with Heart'
    },
    nav: [
      { text: '🍟', link: '/' },
      { text: '🧸', link: '/blog/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'HackAwards',
        collapsed: false,
        items: [
          { text: '2024', link: '/blog/HackAwards2024' },
          { text: '2025', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'valorant', link: 'https://github.com/hackdeacon' }
    ]
  }
})
