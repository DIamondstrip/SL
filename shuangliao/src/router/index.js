import Vue from 'vue'
import VueRouter from 'vue-router'
import Friend from '../views/like/Friend'
import Message from '../views/message/Message'
import Mine from '../views/mine/Mine'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Friend
  }, {
    path: '/message',
    component: Message,
  }, {
    path: '/tongzhi',
    component: () => import('../views/message/tongzhi.vue')
  }, {
    path: '/tonghua',
    component: () => import('../views/message/tonghua.vue')
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