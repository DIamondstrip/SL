import Vue from 'vue'
import VueRouter from 'vue-router'
import Friend from '../views/like/Friend'
import Message from '../views/message/Message'
import Mine from '../views/mine/Mine'
import Search from '../views/like/Search'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Friend
  }, 
  {
    path:'/search',
    component:Search
  },
  {
    path:'/details/:id',//path:'/details/:id' 通过id传参,在mounted钩子函数中获取对应的数据
    component: () => import('../views/like/details.vue')
  },
  {
    path:'/photoalbum',//相册, 详情页跳转过来
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
  },{
    path: '/laifang',
    component: () => import('../views/message/laifang.vue')
  },

  {
    path: '/mine',
    component: Mine
  },
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
    path: '/details',
    component: () => import('../views/mine/details.vue')
  },
  {
    path: '/myaccount',
    component: () => import('../views/mine/myaccount.vue')
  },
  {
    path: '/mycoins',
    component: () => import('../views/mine/mycoins.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router