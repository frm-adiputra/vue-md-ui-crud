import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import RoleXPage from './views/RoleXPage.vue'
import RoleXListA from './views/RoleXListA.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/login',
			component: Login
		},
		{
			path: '/role-x',
			component: RoleXPage,
			children: [
				{ path: '', redirect: 'list-a' },
				{
					path: 'list-a',
					component: RoleXListA
				}
			]
		}
		// {
		// 	path: '/about',
		// 	name: 'about',
		// 	// route level code-splitting
		// 	// this generates a separate chunk (about.[hash].js) for this route
		// 	// which is lazy-loaded when the route is visited.
		// 	component: () =>
		// 		import(/* webpackChunkName: "about" */ './views/About.vue')
		// }
	]
})
