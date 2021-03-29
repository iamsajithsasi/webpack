const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// let mode = "development";

// if (process.env.NODE_ENV == "production") {
//   mode = "production";
// }

module.exports = {
  //   mode: mode,
  entry: "./src/index.js", // set entry point
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  }, // set output
  module: {
    rules: [
      {
        test: /\.css$/i,
        // use: ["style-loader", "css-loader"],
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          //   {
          //     loader: "postcss-loader",
          //     options: {
          //       postcssOptions: {
          //         plugins: ["autoprefixer"],
          //       },
          //     },
          //   },
        ],
      }, // npm install --save-dev style-loader css-loader
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      }, // built in assets
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      }, // built in fonts
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      }, // babel loader
      //   {
      //     loader: "postcss-loader",
      //     options: {
      //       postcssOptions: {
      //         plugins: ["postcss-preset-env"],
      //       },
      //     },
      //   },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "WebPack Crash",
      template: "index.html", // required to specify
    }),
    new MiniCssExtractPlugin(),
  ], // npm i --save-dev html-webpack-plugin
  devtool: "source-map", // false source-map inline-source-map
  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    compress: true,
    hot: true,
    port: 9000,
  },
};
