import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Routes from './router/index.js'

Vue.config.productionTip = false

Vue.use(Router)

const router = new Router({
  routes: Routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')