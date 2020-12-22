const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');

const devMode = process.env.NODE_ENV !== "production";

const CLIENT_DEST = path.join(__dirname, "./build/public");

const ASSET_PATH =
  process.env.NODE_ENV === "production"
    ? "/"
    : "/";

module.exports = {
  entry: ["@babel/polyfill", "./client/index.js", "bootstrap"],
  output: {
    filename: "js/[name].js",
    chunkFilename: "js/[id].[contenthash].js",
    path: CLIENT_DEST,
    publicPath: ASSET_PATH
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
        test: /\.(pdf)$/,
        use: {
          loader: "file-loader",
          options: {
            filename: "[name].pdf",
            chunkFilename: "[name].pdf",
            outputPath: "assets"
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            filename: "[contenthash].[ext]",
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
      filename: "index.html",
      favicon: "./client/assets/images/logos/favicon.png"
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? "css/[name].css" : "css/[name].[contenthash].css",
      chunkFilename: devMode ? "css/[id].css" : "css/[id].[contenthash].css"
    }),
    // new CompressionPlugin({
    //     filename: '[path][base].gz',
    //     algorithm: 'gzip',
    //     test: /\.(jpg|js|css|html|svg)$/,
    //     // threshold: 10240,
    //     minRatio: 0.8,
    // })
  ]
  // externals: {
  //   jquery: "jQuery",
  //   popper: "popper.js"
  // }
};
