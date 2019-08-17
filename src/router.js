import Vue from 'vue'
import Router from 'vue-router'
import topMain from './views/topMain'
import ChooseCity from './views/ChooseCity'
import details from './components/main-components/details'
import listMsg from './components/listMsg'
import Markin from './components/Markin'
import personalInf from './components/personal_inf'
Vue.use(Router)

//第二层路由
import theindex from './components/main-components/theindex'
import cooperation from './views/CheckMenu/cooperation'
import economy from './views/CheckMenu/economy'
export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/',
      name: 'topMain',
      component: topMain,
      redirect: { name: 'Mymain' },
      children:[{
        path : 'Mymain',
        name : 'Mymain',
        component:theindex        
      },
      {
        path : 'cooperation',
        name : 'cooperation',
        component: cooperation   
      },{
        path : 'economy',
        name : 'economy',
        component: economy   
      }
    ]
    },{
      path: '/details',
      name: 'details',
      component: details,
    },{
      path: '/listMsg',
      name: 'listMsg',
      component: listMsg,
    },{
      path: '/Markin',
      name: 'Markin',
      component: Markin,
    },
    {
      path: '/personalInf',
      name: 'personalInf',
      component: personalInf,
    },
    {
      path: '/ChooseCity',
      name: 'ChooseCity',
      component: ChooseCity,
    }
  ]
})
