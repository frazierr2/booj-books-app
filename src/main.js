// ===== Global Imports =====
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import Vuex from 'vuex'
// import VueRouter from 'vue-router'





import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// ===== Local Imports =====
import App from './App.vue'


library.add(faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue.use(Vuex)
// Vue.use(VueRouter)
Vue.use(BootstrapVue);
Vue.config.productionTip = false




new Vue({
  render: h => h(App),
}).$mount('#app')
