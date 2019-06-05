'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const entry = require('./entry')
const vuxLoader = require('vux-loader')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const webpackConfig  =  {
  entry: entry.getJSEntry('./src/**/*-main.js'),//多入口
  output: {
    path: config.env=='dev' ? '/' : config.build.assetsRoot, //图片等资源文件的输出路径
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.less'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: false
        }
      }
    ]
  }
}
// 加入 vux配置
module.exports = vuxLoader.merge(webpackConfig,    {
      // plugins: ['vux-ui']
      plugins: [
        {
          name: 'vux-ui'
        },
        {
         name: 'after-less-parser',
         fn: function (source) {
           // 解决引用vux库中的less单位被postcss转成rem
           if (this.resourcePath.replace(/\\/g, '/').indexOf('vux') > -1) {
             source = source.replace(/px/g, 'PX')
           }
           // 自定义的全局样式大部分不需要转换
           // if (this.resourcePath.replace(/\\/g, '/').indexOf('App.vue') > -1) {
           //   source = source.replace(/px/g, 'PX').replace(/-1PX/g, '-1px')
           // }
           return source
         }
       }

      ]
   })

// module.exports = webpackConfig
