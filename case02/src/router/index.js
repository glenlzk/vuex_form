import Vue from 'vue'
import Router from 'vue-router'

import hotel from '@/page/hotel/hotel'
import keylist from '@/page/keylist/keylist'
import notfound from '@/page/notfound/notfound'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hotel',
      component: hotel
    },
    { path: '/keylist',   // 动态路由匹配
      component: keylist,
      /*children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: profile
        }
      ]*/
    },
    {
      path: '*',
      component: notfound
    }
  ]
})


