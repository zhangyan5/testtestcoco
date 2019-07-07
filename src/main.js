// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { button, row, col, Swipe, SwipeItem, Lazyload } from 'vant'

Vue.config.productionTip = false
Vue.use(button)
  .use(row)
  .use(col)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
