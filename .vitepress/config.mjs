import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // appearance: false,
  title: "hackstory",
  titleTemplate: false,
  description: "hackstory",
  cleanUrls: true,
  lastUpdated: false,
  lang: 'zh',
  head: [
    ['link', { rel: 'icon', href: '/hackstory.webp' }],
    ['link', { rel: 'apple-touch-icon', href: '/hackstory.webp' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@hackdeacon' }],
    ['meta', { name: 'twitter:title', content: 'HackStory' }],
    ['meta', { name: 'twitter:description', content: '黑胶故事' }],
    ['meta', { name: 'twitter:image', content: 'https://pic.hackstory.cn/hotlink-ok/hackstory-card.webp' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'HackStory' }],
    ['meta', { property: 'og:description', content: '黑胶故事' }],
    ['meta', { property: 'og:image', content: 'https://pic.hackstory.cn/hotlink-ok/hackstory-card.webp' }]
  ],
  markdown: {
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true
    }
  },
  sitemap: {
    hostname: 'https://hackstory.cn'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'HackStory',
    logo: '/hackstory.webp',
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
            { text: '简介', link: '/blog/creation/' }
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
          collapsed: false,
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
            { text: '简介', link: '/blog/projects/' }
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
            { text: '简介', link: '/blog/tutorial/' }
          ]
        },
        {
          text: '互联网技术',
          collapsed: false,
          items: [
            { text: '搭建图床', link: '/blog/tutorial/imgbed' },
            // { text: '让 Favicon 适配主题', link: '/blog/tutorial/favicon' },
            // { text: '介绍一下 Apple Creator Studio', link: '/blog/tutorial/apple-creator-studio' },
            { text: '搭建域名邮箱', link: '/blog/tutorial/email' },
            { text: '配置谷歌云服务器', link: '/blog/tutorial/google-cloud' },
            { text: 'OpenClaw 部署教程', link: '/blog/tutorial/openclaw' },
            { text: '认识一下 Cloudflare', link: '/blog/tutorial/cloudflare' },
            { text: 'macOS 神级清理工具', link: '/blog/tutorial/mole' },
            { text: 'Claude Code 配置体检', link: '/blog/tutorial/claude-health' }
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
