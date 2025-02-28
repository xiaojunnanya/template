import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '鲸灵开发',
  description: '鲸灵开发开发文档',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/favicon.ico',
    nav: [
      { text: '首页', link: '/' },
      { text: '项目规划', link: '/docs/whale-plan' },
    ],

    sidebar: [
      {
        text: 'WhaleDev',
        items: [{ text: '介绍', link: '/docs/whale' }],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaojunnanya/whaledev' },
    ],
  },
  outDir: '../../build/docs',
})
