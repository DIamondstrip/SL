import Vue from 'vue'
import VueRouter from 'vue-router'
import Friend from '../views/like/Friend'
import Message from '../views/message/Message'
import Mine from '../views/mine/Mine'


// 引入axios
// import axios from './axios' 报错
const axios = require("axios");
import Search from '../views/like/Search'
Vue.use(VueRouter)
// 图片上传用
const axiosAjax = axios.create({
  timeout: 1000 * 60, //时间
  withCredentials: true, //跨域携带cookie
  headers: {
      "Content-Type": "multipart/form-data"
  }
})
Vue.prototype.axiosAjax = axiosAjax// 用来上传文件的
const routes = [{
    path: '/',
    component: Friend
  },
  {
    path: '/search',
    component: Search
  },
  {
    path:'/details/:id',//path:'/details/:id' 通过id传参,在mounted钩子函数中获取对应的数据
    component: () => import('../views/like/details.vue')
  },
  {
    path:'/photoalbum/:id',//相册, 详情页跳转过来
    component:()=>import('../views/like/Photoalbum.vue')
  },
  {
    path: '/message',
    component: Message,
  }, {
    path: '/tongzhi',
    component: () => import('../views/message/tongzhi.vue')
  }, {
    path: '/tonghua',
    component: () => import('../views/message/tonghua.vue')
  }, {
    path: '/laifang',
    component: () => import('../views/message/laifang.vue')
  },

  {
    path: '/mine',
    component: Mine
  },
  // Test
  {
    path: '/Test',
    name: 'Test',
    component: () => import( /* webpackChunkName: "about" */ '../components/Test.vue')
  },
  // 启动页
  {
    path: '/Start',
    name: 'start',
    component: () => import( /* webpackChunkName: "about" */ '../components/Start.vue')
  },
  // 登录页面
  {
    path: '/codelogin',
    name: 'codelogin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../components/CodeLogin.vue')
  },
  // // 验证路由
  // {
  //   path: '/code/:phone',
  //   path: '/code',
  //   name: 'code',
  //   component: () => import( /* webpackChunkName: "about" */ '../components/Code.vue')
  // },
  // 手机号绑定路由
  {
    path: '/phonebind',
    name: 'PhoneBind',
    component: () => import( /* webpackChunkName: "about" */ '../components/PhoneBind.vue')
  },
  // 性别选择
  {
    path: '/idCard',
    component: () => import('../views/mine/idCard.vue')
  },
  {
    path: '/account',
    component: () => import('../views/mine/account.vue')
  },
  {
    path: '/photo',
    component: () => import('../views/mine/photo.vue')
  },
  {
    path: '/blackList',
    component: () => import('../views/mine/blackList.vue')
  },
  {
    path: '/myGift/:giftName',
    component: () => import('../views/mine/myGift.vue')
  },
  {
    path: '/attFans/:fansName',
    component: () => import('../views/mine/attFans.vue')
  },
  {
    path: '/withdraw',
    component: () => import('../views/mine/Withdraw.vue')
  },
  {
    path: '/myaccount',
    component: () => import('../views/mine/myaccount.vue')
  },
  {
    path: '/mycoins',
    component: () => import('../views/mine/mycoins.vue')
  },
  // 编辑资料
  {
    path:'/editdata',
    component: () => import('../views/mine/Editdata.vue')
  },
  // 编辑资料姓名修改
  // {
  //   path:'/editdataname',
  //   component: () => import('../views/mine/Editdataname.vue')
  // },
  // 个人设置
  {
    path:'/ownset',
    component: () => import('../views/mine/ownset.vue')
  },
  {
    path:'/bindu',
    component: () => import('../views/mine/bindu.vue')
  },
  // 关于我们
  {
    path:'/aboutus',
    component: () => import('../views/mine/aboutus.vue')
  },
  // 常见问题
  {
    path:'/usuproblem',
    component: () => import('../views/mine/usuproblem.vue')
  },

  {
    path: '/sex',
    name: 'sex',
    component: () => import( /* webpackChunkName: "about" */ '../components/Sex.vue')

  },
  // 填写资料
  {
    path: '/datacomplete',
    name: 'datacomplete',
    component: () => import( /* webpackChunkName: "about" */ '../components/DataComplete.vue')
  }
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// // 全局解析守卫
// // 从本地存储获取登录的用户信息，若存在说明之前登录过，否则转跳登录页面
router.beforeEach((to, from, next) => {
  //判断是否登陆过，获取浏览器缓存的用户手机号信息
  let userStr = window.localStorage.getItem('userInfo');
  // let sex = window.localStorage.getItem('sex');
  // let code = window.localStorage.getItem('code');  

  if(userStr){
    let userInfo = JSON.parse(userStr)
    // 有登录过，则发起请求，判断登录是否失效 
    axios({
      method: "post",
      url: "/user/register",
      // data:{} json数据
      // params{} 拼接字符串到地址栏
      params: {
        tel: userInfo.tel,
      }
    })
      .then((response)=>{
        let res = response.data
        if(res.code==10004) {//登录未过期，则不用再登录了
          if(to.path=='CodeLogin'){//如果是登陆页自动跳转到首页
            next('/');
          }else{ //其他就不跳
            next();
          }
        } else {//登陆过期，需要再登陆
          window.localStorage.removeItem('userInfo')
          // window.localStorage.removeItem('sex')
          // window.localStorage.removeItem('code')
          next('/CodeLogin');
        }
      })
      .catch((error)=>{
        console.log(error)
        // 刷新页面
      })
  }
  else { //从来没登录过的用户，直接到登录页面
    if (to.path == '/CodeLogin') { //如果是登录页面路径，就直接next()
      next();
    } else { //不然就跳转到登录；
      next('/CodeLogin');
    }
  }
  // next();
})

export default router



// vue启动自动打开页面，打开config文件下的index.js文件，更改autoOpenBrowser为true即可实现。？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？
// 给启动页一个组件，比如叫start.vue,在mounted(){}里面做一个定时器，2s后跳转到 首页的.vue？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？

// 打开app的瞬间，思路
// 打开app，自动进入到启动页(挂载前转跳吗？)，定时器，三秒后，转跳到首页。添加点击事件（在此页面只要有任何点击操作，执行如下钩子函数的逻辑）

