import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Video from '@/components/video'
import Zhibo from '@/components/zhibo'
import My from '@/components/my'
import Item from '@/components/home/item'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[{
      	path: ':id?',
      	component: Item
      }]
    },{
      path: '/video',
      name: 'Video',
      component: Video
    },{
      path: '/zhibo',
      name: 'Zhibo',
      component: Zhibo
    },{
      path: '/my',
      name: 'My',
      component: My
    },{
    	path: '*',
      component: Home,
    }
  ]
})
