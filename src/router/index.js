import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [

  {
    path:'/',
    
  },
  {
    path:"/main",
    name:"Main",
    component: () => import('../views/Main.vue'),
    //二级路由

    children:[
      {
        path:"home",
        name:"Home",
        component:() => import('../views/Home.vue')
      },
      {
        path:"menu",
        name:"Menu",
        component:() => import('../views/Menu.vue')
      },
      {
        path:"shopbag",
        name:"Shopbag",
        component:() => import('../views/Shopbag.vue')
      },
      {
        path:"my",
        name:"My",
        component:() => import('../views/My.vue')
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
