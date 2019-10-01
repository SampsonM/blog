module.exports = {
  publicPath: '',

  outputDir: './docs',

  // configureWebpack: {
	// 	plugins: [
	// 		new CnameWebpackPlugin({
	// 		  domain: 'www.sweepsteaks.co.uk',
	// 		})
	// 	]
	// }

  css: {
    loaderOptions: {
      sass: {
        data: "@import '~@/assets/styles/_variables.scss'; @import '~@/assets/styles/_mixins.scss';"
      }
    }
  }
}
