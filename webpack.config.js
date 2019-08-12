const path = require('path');


const HtmlWebPackPlugin = require("html-webpack-plugin");


const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  });

module.exports = {
    entry: path.join(__dirname, 'src', 'js', 'main.js'),
    // And to place the output in the `build` directory
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'main.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
      ]
    },
    devServer:{
      historyApiFallback: true
    },
    plugins: [htmlPlugin],
    

  };