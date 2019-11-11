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
  },{
    path:'/tongzhi',
    component: () => import('../views/message/tongzhi.vue')
  },{
    path:'/tonghua',
    component: () => import('../views/message/tonghua.vue')
  },
  {
    path: '/mine',
    component: Mine
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
