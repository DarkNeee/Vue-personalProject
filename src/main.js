import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementui from './uis/elementui'
import Vant from './uis/vantui'
import axios from 'axios'
Vant();
Vue.config.productionTip = false
Vue.prototype.$axios = axios
elementui()
new Vue({
  router,
  store,
  
 
  render: h => h(App)
}).$mount('#app')
