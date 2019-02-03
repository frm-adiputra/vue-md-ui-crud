import Vue from 'vue'
import './plugins/vuetify'
import './plugins/alos-uic'
import App from './App.vue'
import router from './router'
import store from './store'
import { $alos } from 'alos-uic'

Vue.config.productionTip = false

router.beforeEach($alos.routerBeforeEach)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
