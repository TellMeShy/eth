import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import marketplace from '@/components/marketplace'
import collections from '@/components/collections'
import detail from '@/components/detail'

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/marketplace',
      name: 'marketplace',
      component: marketplace
    },
    {
      path: '/collections',
      name: 'collections',
      component: collections
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
