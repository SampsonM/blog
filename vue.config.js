module.exports = {
  publicPath: '/',

  css: {
    loaderOptions: {
      sass: {
        data: "@import '~@/assets/styles/_variables.scss'; @import '~@/assets/styles/_mixins.scss';"
      }
    }
  }
}
