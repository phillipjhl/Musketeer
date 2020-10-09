const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

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
    moduleIds: "hashed",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
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
        test: /\.(png|jpg|svg|gif)$/,
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
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader"
        })
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
    new ExtractTextPlugin({
      filename: "css/styles.css",
      allChunks: true
      // publicPath: ASSET_PATH
    })
    // new webpack.DefinePlugin({
    //   "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH)
    // })
  ],
  externals: {
    jquery: "jQuery",
    popper: "popper.js"
  }
};
