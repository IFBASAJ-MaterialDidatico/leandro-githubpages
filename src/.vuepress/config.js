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
        text: 'Github',
        link: '/github/',
      },
      {
        text: 'GitHub Pages',
        link: '/github-pages/',
      },
      {
        text: 'CeT IFBA-SAJ',
        link: 'https://doity.com.br/seminario-de-ciencia-e-tecnologia-do-ifba-saj'
      }
    ],
    sidebar: [
      {
        title: 'Github',
        collapsable: true,
        sidebarDepth: 1,
        children: getChildren('src', 'github')
      },
      {
        title: 'GitHub Pages',
        collapsable: true,
        sidebarDepth: 1,
        children: getChildren('src', 'github-pages')
      },
    ],


  },
  markdown: {

    extendMarkdown: md => {
      md.use(require("markdown-it-footnote"))
      md.use(require("markdown-it-include"))
      md.use(require("markdown-it-task-lists"))
    },
    lineNumbers: true

  },

}
