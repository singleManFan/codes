module.exports = {
    entry: "./main.js",
    output:"bundle.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['comment-require-loader'],
        // 针对采用了 fis3 CSS 导入语法的 JavaScript 文件通过 comment-require-loader 去转换 
        include: [path.resolve(__dirname, 'node_modules/imui')]
      }
    ]
  }
};