const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const CLIENT_DEST = path.join(__dirname, "./client/dist");

module.exports = {
  entry: ["@babel/polyfill", "./client/src/index.js"],
  output: { path: CLIENT_DEST, filename: "bundle.js" },
  mode: "development",
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
            publicPath: "/dist/images",
            outputPath: "images"
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
            publicPath: "/dist/docs",
            outputPath: "docs"
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new ExtractTextPlugin({ filename: "css/styles.css", allChunks: true })
  ]
};
