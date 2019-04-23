module.exports = {
  css: {
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
        importLoaders: 1,
        modules: true,
        localIdentName: '[name]_[hash:base64:7]' // 为了生成类名不是纯随机
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      }
    }
  },
  chainWebpack: config => {
    config.resolve.extensions
      .add('.jsx')

    config.module
      .rule('jsx')
      .test(/\.jsx$/)
      .use('vue-jsx-hot-loader')
      .loader('vue-jsx-hot-loader')
      .end()
      .use('eslint-loader')
      .loader('eslint-loader')
      .end()
  }
  // devServer: {
  //   port: 7378,
  //   proxy: {
  //     '/a': {
  //       target: 'http://localhost:3666'
  //     },
  //     '/post': {
  //       target: 'http://localhost:3666'
  //     }
  //   }
  // }
}
