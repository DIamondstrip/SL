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

import './axios';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
