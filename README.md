## 微信公众号无线端

* 整站采用vue2.0 + vue-router + vux + webpack 的技术栈，适应单页多页.*
* 服务端使用express + art-template *
* 适应移动端和桌面端

> 主体业务需求待添加

开发新增多页面时 必须重启 npm run dev 才能识别多入口

生产环境构建 dist保留资源文件 html页面在server/views文件下

项目搭建完成度90%


### 约定及功能描述
* 【url路由】-对应-> 【HTML文件层级名称】-对应-> 【脚本名称】
* 禁止为了实现一个小功能而引用三方库
* 网络慢时对系统进行降级处理
* 网页重要功能监测并上报错误



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
