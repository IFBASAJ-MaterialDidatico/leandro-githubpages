const { description } = require('../../package')

const glob = require('glob')

// function for loading all MD files in a directory
const getChildren = function (parent, path) {
  return glob
    .sync(parent + '/' + path + '/**/*.md')
    .map(f => {
      // remove "parent" and ".md"
      f = f.slice(parent.length + 1, -3)
      // remove README
      if (f.endsWith('README')) {
        f = f.slice(0, -6)
      }
      return f
    })
    .sort()
}

module.exports = {
  base: '/leandro-githubpages/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Oficina GitHub Pages',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'IFBASAJ-MaterialDidatico/leandro-githubpages',
    editLinks: true,
    docsDir: 'src',
    editLinkText: 'Editar',
    lastUpdated: false,
    docsBranch: 'main',
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: [
      {
        title: 'Config',
        collapsable: true,
        sidebarDepth: 2,
        children: getChildren('src', 'config')
      },
      {
        title: 'Guide',
        collapsable: true,
        children: getChildren('src', 'guide')
      }
    ]
  }
}
