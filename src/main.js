import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
// 引入字体图标
import './assets/font_02gqvn3xo4r/iconfont.css'
// 适配文件
import 'lib-flexible/flexible'

// import qs from 'qs'

// axios 引入
import axios from 'axios'
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)
// 设置axios为form-data 格式 数据请求
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.transformRequest = [function (data) {
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}]
// 配置请根路径
axios.defaults.baseURL = 'http://test.tuolve.com/bawang/web/tl_api.php?s=/'
// 挂在到Vue的原型对象上 通过 实列对象的原型来获取 this.$http == this._proto_.$http == axios
Vue.prototype.$http = axios
// Vue.prototype.$qs = qs

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
