import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import prefer from '@/components/prefer/prefer'
import shop from '@/components/shop/shop'
import geren from '@/components/geren/geren'
import detail from '@/components/base/detail/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:"/",
    	redirect:'/home'
    },
    {
    	path:"/home",
    	component:Home
    },
    {
    	path:"/prefer",
    	component:prefer
    },
    {
    	path:"/shop",
    	component:shop
    },
    {
    	path:"/geren",
    	component:geren
    },
    {
        path:"/detail/:id",
        component:detail
    }
  ]
})
