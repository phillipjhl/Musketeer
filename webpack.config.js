const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";

const CLIENT_DEST = path.join(__dirname, "./build/public");

const ASSET_PATH =
  process.env.NODE_ENV === "production" && process.env.ASSET_PATH
    ? process.env.ASSET_PATH
    : "/public/";

module.exports = {
  entry: ["@babel/polyfill", "./client/index.js"],
  output: {
    filename: "js/[name].js",
    path: CLIENT_DEST
    // publicPath: ASSET_PATH
  },
  mode: "development",
  devtool:
    process.env.NODE_ENV === "production" ? "source-map" : "inline-source-map",
  optimization: {
    minimizer: [new TerserJSPlugin({})],
    moduleIds: "hashed",
    splitChunks: {
      chunks: "all"
      // cacheGroups: {
      //   vendor: {
      //     test: /[\\/]node_modules[\\/]/,
      //     name: "vendors",
      //     chunks: "all"
      //   }
      // }
    }
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            filename: "[name].[ext]",
            // publicPath: ASSET_PATH,
            outputPath: "assets"
          }
        }
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(pdf)$/,
        use: {
          loader: "file-loader",
          options: {
            // publicPath: ASSET_PATH,
            outputPath: "docs"
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./client/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? "css/[name].css" : "css/[name].[contenthash].css",
      chunkFilename: devMode ? "css/[id].css" : "css/[id].[contenthash].css"
      // publicPath: ASSET_PATH
    })
    // new webpack.DefinePlugin({
    //   "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH)
    // })
  ]
  // externals: {
  //   jquery: "jQuery",
  //   popper: "popper.js"
  // }
};
