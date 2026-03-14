import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的博客",
  description: "个人博客",
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/hello' }
    ],
    sidebar: [
      {
        text: '文章',
        items: [
          { text: 'Hello World', link: '/posts/hello' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/haibuhao' }
    ]
  }
})
