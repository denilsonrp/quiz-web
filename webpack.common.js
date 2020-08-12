const path = require('path')
const BeforeCleanWebpackPlugin = require('clean-webpack-plugin')
const AfterClearWebpackPlugin = require('webpack-clean')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const entryPointSass = {
  commonstyle: './assets/src/sass/common.scss'
}

const entryPointJs = {
  answers: './assets/src/js/answers.js',
  index: './assets/src/js/index.js',
  newanswer: './assets/src/js/new-answer.js',
  newquiz: './assets/src/js/new-quiz.js'
}

const removeUnusedJs = () => {
  const arr = [];

  for (key in entryPointSass) {
    arr.push(`public/dist/js/${key}.bundle.min.js`)
  }

  return arr
}

module.exports = {
  entry: {
    ...entryPointSass,
    ...entryPointJs
  },
  output: {
    filename: 'js/[name].bundle.min.js',
    chunkFilename: 'js/[name].chunk.js',
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: '/dist/',
  },
  plugins: [
    new BeforeCleanWebpackPlugin([ 'public/dist' ]),
    new AfterClearWebpackPlugin( removeUnusedJs() ),
    new MiniCssExtractPlugin({ filename: 'css/[name].bundle.min.css' })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-transform-async-to-generator",
              "@babel/plugin-transform-runtime",
              "transform-function-bind"
            ]
          }
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        exclude: /images/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts',
            publicPath: '../fonts'
          }
        }
      },
      {
        test: /\.(svg|png|jpg)(\?v=\d+\.\d+\.\d+)?$/,
        include: [
          path.resolve(__dirname, 'assets/src/images')
        ],
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images',
            publicPath: '../images'
          }
        }
      }
    ]
  }
}
