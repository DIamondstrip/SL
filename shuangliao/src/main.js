import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入外部框架设置自动转换rem单位
import 'amfe-flexible'

//awesome iconfont  自定义字体图标
import './assets/css/font-awesome-4.7.0/css/font-awesome.min.css'

//reset.css
import './assets/css/reset.css'
//vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//axios
import axios from 'axios';
Vue.prototype.$axios = axios;
import qs from 'qs';
Vue.prototype.qs=qs;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.config.productionTip = false

// 把默认配置withCredentials改为true，就可以允许跨域携带session信息了,这样每次发送ajax请求后，只要不关闭浏览器，得到的session数据都是一致的。
// axios.defaults.withCredentials=true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
