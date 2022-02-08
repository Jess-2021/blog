module.exports = {
  title: 'Jess Github',
  base: '/blog/',
  description: 'Jess Github',
  themeConfig: {
    logo: 'logo-mini.jpg',
    navbar: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
    ],
    // TODO 自动生成
    sidebar: [
      {
        text: 'JS',
        link: '/JS/object',
        collapsable: true,
        children: [
          { text: '对象', link: '/main/JS/对象.md' }
        ]
      }
    ]
  }
}