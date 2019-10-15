
import Vue from 'vue'
import Router from 'vue-router';
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/components/login/login.vue')
    },
    {
      path: '/home',
      component: () => import('@/components/home/home.vue'),
      children: [
        {
          path: 'foodAdd',
          component: () => import('@/views/food-add.vue')
        },
        {
          path: 'foodkind',
          component: () => import('@/views/food-config/food-kind.vue')
        }
      ]
    }
  ]
});

// 配置路由守卫
router.beforeEach((to: any, from: any, next: any) => {
  // 判断是否有token--- 退出的时候清除token
  const token = localStorage.getItem('token') ? true : false;
  if (to.path === '/' || to.path === 'register') {
    next();
  } else {
    token ? next() : next('/');
  }
});

export default router;

