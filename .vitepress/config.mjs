import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "黑衣执事",
  description: "hackdeacon",
  cleanUrls: true,
  lang: 'zh',
  head: [
    ['link', {rel: 'icon', href: 'https://bu.dusays.com/2024/01/28/65b5fcbaa0b2c.png'}]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: 'https://img.icons8.com/stickers/500/valorant.png',
    logo: 'https://bu.dusays.com/2024/01/28/65b5fcbaa0b2c.png',
    footer: {
      message: 'Hack Deacon',
      copyright: 'Happy Myself with Heart'
    },
    nav: [
      { text: '🏠', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'x', link: 'https://github.com/hackdeacon' }
    ]
  }
})
