import Vue from 'vue'
import App from './App'
/**
* 程序主入口
*
**/
Vue.config.productionTip = false


/**
  *  路由拦截
  *
  **/
router.beforeEach((to, from, next) => {
  console.log('当前路径：',to.path)
  next()
});

/**
  *  请求拦截
  *
  **/
 

/**
  *  end:挂载实例
  *
  **/
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
