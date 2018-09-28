import Vue from 'vue'
import App from './App.vue'
import '../assets/app.styl'
import '../assets/custom-bootstrap-config.scss'
import '../node_modules/bootstrap/scss/bootstrap.scss'
import '../assets/styles.scss'

new Vue({
  el: '#app',
  render: h => h(App)
})
