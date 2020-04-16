import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=> import( '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: ()=> import( '../views/Home.vue')
  }
]


const router = new VueRouter({
  routes,
  mode:'history'
})

//挂载路由导航守卫
router.beforeEach((to,from,next)=>{
    //to将要访问的路径
    //from从那个页面而来
    //next放行函数
    console.logto
    if(to.path=='/login') return next();
    const token = sessionStorage.getItem('token');
    if(!token) return next('/login');
    next()
  })

export default router
