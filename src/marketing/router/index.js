import Vue from 'vue'
import Router from 'vue-router'
import ShopHome from '@/marketing/components/home/shop-home'
import Member from '@/marketing/components/member/member'
import Service from '@/marketing/components/service/service'

Vue.use(Router)
/**
* 路由配置
*  ShopHome， Member， Service 强加载
**/

export default new Router({
  routes: [
    { path:'', redirect:'/shopHome' },
    /* 两种主页 */
    {
      path: '/shopHome',
      name: 'home-shop',
      component: ShopHome
    },
    {
      path: '/fxHome',
      name: 'home-fx',
      component: resolve => require(['@/marketing/components/home/fx-home'],resolve)
    },
    /* 会员中心 */
    // {
    //   path: '/member',
    //   name: 'member',
    //   component: Member,
    //   children: [
    //     {
    //       path: '/bills',
    //       name: 'child-bills',
    //       component: resolve => require(['@/marketing/components/member/child-bills'],resolve)
    //     },
    //     {
    //       path: '/bonus',
    //       name: 'child-bonus',
    //       component: resolve => require(['@/marketing/components/member/child-bonus'],resolve)
    //     },
    //     {
    //       path: '/card',
    //       name: 'child-card',
    //       component: resolve => require(['@/marketing/components/member/child-card'],resolve)
    //     },
    //     {
    //       path: '/account',
    //       name: 'child-account',
    //       component: resolve => require(['@/marketing/components/member/child-account'],resolve)
    //     },
    //     {
    //       path: '/order',
    //       name: 'child-order',
    //       component: resolve => require(['@/marketing/components/member/child-order'],resolve)
    //     },
    //     {
    //       path: '/promotion',
    //       name: 'child-promotion',
    //       component: resolve => require(['@/marketing/components/member/child-promotion'],resolve)
    //     },
    //     {
    //       path: '/team',
    //       name: 'child-team',
    //       component: resolve => require(['@/marketing/components/member/child-team'],resolve)
    //     }
    //   ]
    // },
    /* 服务项目（项目 卡项 产品） */
    // {
    //   path: '/service',
    //   name: 'service',
    //   component: Service,
    //   children: [
    //     {
    //       path: '/introduction',
    //       name: 'introduction',
    //       component: resolve => require(['@/marketing/components/service/service-introduction'],resolve)
    //     }
    //   ]
    // }
  ],
  scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
        return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})
