import Vue from 'vue'
import VueRouter from 'vue-router'
import Friend from '../views/like/Friend'
import Message from '../views/message/Message'
import Mine from '../views/mine/Mine'
import Search from '../views/like/Search'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Friend
  }, 
  {
    path: '/message',
    component: Message
  }, 
  {
    path: '/mine',
    component: Mine
  },
  {
    path:'/search',
    component:Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
