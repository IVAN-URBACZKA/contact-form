const path = require('path')

module.exports = {

  mode: 'development',
  entry: path.resolve(__dirname),

  output: {
    path: path.resolve(__dirname, 'dist'),
  },

  devServer: {
    proxy: {
      '/*.*': { // Match all URL's with period/dot
        target: 'http://localhost:8080/',  // send to webpack dev server
        rewrite: function (req) {
          req.url = 'index.html';  // Send to react app
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // [style-loader](/loaders/style-loader)
          { loader: 'style-loader' },
          // [css-loader](/loaders/css-loader)
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          // [sass-loader](/loaders/sass-loader)
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(tsx|jsx|ts|js)?$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },

}

