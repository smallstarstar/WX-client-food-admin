
import Vue from 'vue'
import App from './app.vue';
import router from './router'
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
import axios from 'axios';
import qs from 'Qs';

// 请求参数的拦截
axios.interceptors.request.use((config)=>{
  const {method,data} = config;
  if(method.toLowerCase() === 'post' && typeof data === 'object') {
         config.data = qs.stringify(data);
     }
  return config
})


// 返回的数据相应拦截
axios.interceptors.response.use((res) => {
  return res.data;
});


Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
