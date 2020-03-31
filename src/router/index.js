import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      // component: () => ('@/components/HelloWorld')
      component: resolve => require(['@/components/HelloWorld'], resolve)
    },
    {
      path: '/newcontact',
      component: resolve => require(['@/components/NewContact'], resolve)
    }
  ]
})
