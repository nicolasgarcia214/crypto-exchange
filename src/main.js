import Vue from 'vue'
import Chart from 'chart.js'
import Chartkick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'
import App from './App.vue'
import "@/assets/css/tailwind.css"

import router from '@/router'
import { dollarFilter, percentageFilter } from '@/utils/filters'

Vue.use(VueSpinners)
Vue.use(Chartkick.use(Chart))
Vue.filter('dollar', dollarFilter)
Vue.filter('percentage', percentageFilter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
