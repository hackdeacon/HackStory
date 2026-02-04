import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // appearance: false,
  title: "黑衣执事",
  // titleTemplate: "用心取悦自己",
  description: "hackdeacon",
  cleanUrls: true,
  lastUpdated: false,
  lang: 'zh',
  head: [
    ['link', { rel: 'icon', href: 'https://pic.hackdeacon.cn/hack.png' }]
  ],
  markdown: {
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://pic.hackdeacon.cn/hack.png',
    footer: {
      message: 'hackdeacon',
      copyright: 'Copyright © 2026 Ringo. All rights reserved.'
    },

    nav: [
      // { text: 'Home', link: '/' },
      {
        text: 'Blog',
        items: [
          { text: 'Creation', link: '/blog/creation/' },
          { text: 'Projects', link: '/blog/projects/' },
          { text: 'Thoughts', link: '/blog/thoughts/' },
          { text: 'Tutorial', link: '/blog/tutorial/' }
        ]
      },
      // { text: 'About', link: '/about' }
    ],

    sidebar: {
      '/blog/creation/': [
        {
          text: '创作',
          collapsed: false,
          items: [
            { text: '简介', link: '/blog/creation/' },
            { text: '123', link: '/blog/creation/0' }
          ]
        },
        {
          text: '作品集',
          collapsed: false,
          items: [
            { text: '汕头记忆', link: '/blog/creation/2' },
            { text: '蓬中时光机', link: '/blog/creation/1' }
          ]
        },
        {
          text: '摄影教程',
          collapsed: true,
          items: [
            { text: '曝光', link: '/blog/creation/1' },
            { text: '档位', link: '/blog/creation/2' },
            { text: '焦段', link: '/blog/creation/3' },
            { text: 'Raw', link: '/blog/creation/4' },
            { text: '后期', link: '/blog/creation/5' },
          ]
        }
      ],
      '/blog/projects/': [
        {
          text: '项目',
          collapsed: false,
          items: [
            { text: '简介', link: '/blog/projects/' },
            { text: '123', link: '/guide/' }
          ]
        }
      ],
      '/blog/thoughts': [
        {
          text: '观点',
          collapsed: false,
          items: [
            { text: '简介', link: '/blog/thoughts/' },
          ]
        },
        {
          text: '黑胶故事',
          collapsed: false,
          items: [
            { text: '2025', link: '/blog/thoughts/40-Questions-2025' }
          ]
        },
        {
          text: '碎碎念',
          collapsed: false,
          items: [
            { text: '我最好的朋友', link: '/blog/thoughts/my-best-friend' }
          ]
        }
      ],
      '/blog/tutorial/': [
        {
          text: '教程',
          collapsed: false,
          items: [
            { text: '简介', link: '/blog/tutorial/' },
            { text: '搭建图床', link: '/blog/tutorial/imgbed' },
            { text: '让你的 Favicon 适配主题', link: '/blog/tutorial/favicon' },
            { text: '介绍一下 Apple Creator Studio', link: '/blog/tutorial/apple-creator-studio' }
          ]
        }
      ]
    },

    socialLinks: [
      // { icon: 'valorant', link: 'https://github.com/hackdeacon' },
      { icon: 'twitter', link: 'https://x.com/hackdeacon' },
      // { icon: 'gmail', link: 'mailto:hackdeacon@gmail.com' },
    ],

    // editLink: {
    //   pattern: 'https://github.com/hackdeacon/HackStory/edit/main/:path',
    //   text: 'Edit this page on GitHub'
    // }
  }
})
