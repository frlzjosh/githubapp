const path = require('path');


const HtmlWebPackPlugin = require("html-webpack-plugin");


const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  });

module.exports = {
    entry: path.join(__dirname, 'src', 'js', 'App.js'),
    // And to place the output in the `build` directory
    output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js'
    },
    module: {
      rules: [
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
        }
      ]
    },
    plugins: [htmlPlugin],
    

  };