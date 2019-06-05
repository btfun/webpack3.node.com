import Vue from 'vue'
import App from './App'
import router from './router/index'
import axios from 'axios'

Vue.prototype.$http = axios;

Vue.config.productionTip = false

//请求拦截器
axios.interceptors.request.use(config => {
  // 请求发起之前做处理 参数的修改/替换
  if(!config.params)config.params={};

  return config
}, error => {
  return Promise.reject(error)
})
//响应拦截器
axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})
// //路由拦截器
router.beforeEach((to, from, next) => {
  console.log('当前路径：',to.path)
  next()
});

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  template: '<App/>',
  components: { App }
})
