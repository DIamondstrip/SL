import Vue from 'vue'
import VueRouter from 'vue-router'
import Friend from '../views/like/Friend'
import Message from '../views/message/Message'
import Mine from '../views/mine/Mine'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Friend
  }, {
    path: '/message',
    component: Message,
<<<<<<< HEAD
  },{
    path:'/tongzhi',
    component: () => import('../views/message/tongzhi.vue')
  },{
    path:'/tonghua',
    component: () => import('../views/message/tonghua.vue')
  },
=======
  }, {
    path: '/tongzhi',
    component: () => import('../views/message/tongzhi.vue')
  }, {
    path: '/tonghua',
    component: () => import('../views/message/tonghua.vue')
  },

>>>>>>> f8be9b1c89b678682cc3228c9e757d18de5d3b05
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
    path: '/getGift',
    component: () => import('../views/mine/getGift.vue')
  },
  {
    path: '/sendGift',
    component: () => import('../views/mine/sendGift.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
