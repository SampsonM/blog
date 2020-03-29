module.exports = {
  publicPath: '',

  outputDir: './docs',

  css: {
    loaderOptions: {
      sass: {
        data: "@import '~@/assets/styles/_variables.scss'; @import '~@/assets/styles/_mixins.scss';"
      }
    }
  }
}
