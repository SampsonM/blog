module.exports = {
  publicPath: '/',

  outputDir: './docs',

  css: {
    loaderOptions: {
      sass: {
        data: "@import '~@/assets/styles/_variables.scss'; @import '~@/assets/styles/_mixins.scss';"
      }
    }
  },

  chainWebpack(config){
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  }
}
