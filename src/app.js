import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import '../assets/app.styl'
import '../assets/custom-bootstrap-config.scss'
import '../node_modules/bootstrap/scss/bootstrap.scss'
import '../assets/styles.scss'

library.add(fas)


Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  el: '#app',
  render: h => h(App)
})
