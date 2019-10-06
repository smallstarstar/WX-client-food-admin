
import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router';
import Error from '@/components/error.vue';
import loginComponent from '@/components/login/login.vue';
import Home from '@/components/home/home.vue';
import FoodKind from '@/views/food-kind.vue';
Vue.use(Router)

export const routes: RouteConfig[] = [
  {
    path: '/',
    component: loginComponent
  },
  {
    path: '/error',
    component: Error
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'foodKind',
        component: FoodKind
      }
    ]
  }
];


export default new Router({
  routes
})

