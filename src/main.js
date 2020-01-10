import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false
import  './assets/css/base.css';

//引入路由配置
import router from './plugins/router';

//配置服务端地址
import server from './config/server'
Vue.prototype.baseUrl = server.baseUrl;

import store from './plugins/vuex.js'

//配置axios
import './plugins/axios'

let vm = new Vue({
  render: h => h(App),
  router:router,
  store
}).$mount('#app')

export default vm;
