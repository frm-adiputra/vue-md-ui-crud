import Vue from 'vue'
import './plugins/vuetify'
import './plugins/alos-uic'
import './styles/alos.styl'
import App from './App.vue'
import router from './router'
import store from './store'
import PortalVue from 'portal-vue'
import { $alos } from 'alos-uic'

Vue.config.productionTip = false

router.beforeEach($alos.routerBeforeEach)
Vue.prototype.$eventBus = new Vue()
Vue.use(PortalVue)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
