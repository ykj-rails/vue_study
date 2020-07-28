import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Like from './Like'

Vue.config.productionTip = false
Vue.component('Like', Like)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
