module.exports = {
  devServer: {
    port: 7378,
    proxy: {
      '/a': {
        target: 'http://localhost:3666'
      },
      '/post': {
        target: 'http://localhost:3666'
      }
    }
  }
}
