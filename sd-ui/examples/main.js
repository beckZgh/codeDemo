import Vue from 'vue'
import App from './App.vue'

import SdUl from './../packages'
Vue.use(SdUl)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
