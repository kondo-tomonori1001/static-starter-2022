module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/js/index.js`,

  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/public/assets/js`,
    // 出力ファイル名
    filename: "main.js"
  },
  module: {
    rules: [
      // ==== babel ====
      {
        test:/\.js$/,
        use:[
          {
            loader:"babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
              ]
            }
          }
        ]
      },
    ]
  },
};