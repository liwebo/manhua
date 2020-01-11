import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);


//代表着所有组件 引入了,以为着所有的样式 都插入到style标签了
// import Home from '../pages/home.vue'
// import Follow from '../pages/follow.vue'
// import Column from '../pages/column.vue'
// import User from '../pages/user.vue'
// import Reg from '../pages/reg.vue'
// import Login from '../pages/login.vue'
// import Detail from '../pages/detail.vue'
// import NoPage from '../pages/no-page.vue'

let routes=[
  //**重定向在开始，404在结尾 ----- 路由的查找是从上至下**
  {path:'/',redirect:'/home'},
  {path:'/home',name:'home',component:()=>import('@/pages/home.vue')},
  {path:'/follow',name:'Follow',component:()=>import('@/pages/follow.vue')},
  {path:'/column',name:'Column',component:()=>import('@/pages/column.vue')},
  {path:'/community',name:'community',component:()=>import('@/components/community.vue')},
  {path:'/user',name:'user',component:()=>import('@/pages/user.vue')},
  {path:'/reg',name:'Reg',component:()=>import('@/pages/reg.vue')},
  {path:'/login',name:'Login',component:()=>import('@/pages/login.vue')},
  {path:'/detail/:_id',name:'Detail',component:()=>import('@/pages/detail.vue')},
 
  {path:'/all',name:'all',component:()=>import('@/components/all.vue')},
  {path:'/all_2',name:'all_2',component:()=>import('@/components/all_2.vue')},
  {path:'/all_3',name:'all_3',component:()=>import('@/components/all_3.vue')},
  {path:'/all_4',name:'all_4',component:()=>import('@/components/all_4.vue')},
  {path:'/detailsmy',name:'detailsmy',component:()=>import('@/layouts/detailsmy.vue')},
  {path:'/end',name:'end',component:()=>import('@/pages/end.vue')},
  {path:'/popularity',name:'popularity',component:()=>import('@/pages/popularity.vue')},
  {path:'*',name:'404',component:()=>import('@/pages/no-page.vue')}
];



let router = new VueRouter({
  mode:'history',
  base: process.env.BASE_URL,
  routes
});

export default router;