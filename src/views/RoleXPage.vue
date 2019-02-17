<template lang="pug">
	v-app
		portal-target(name="toolbar")
		v-navigation-drawer(app floating clipped v-model="drawer")
			v-list
				v-list-tile(to="/role-x/list-a")
					v-list-tile-content
						v-list-tile-title List A
		router-view
</template>

<script>
export default {
	name: 'RoleXPage',
	data() {
		return {
			drawer: false
		}
	},
	methods: {
		toggleDrawer() { this.drawer = !this.drawer }
	},
	created() {
		this.$eventBus.$on('toggle-drawer', this.toggleDrawer)
	},
	beforeDestroy() {
		this.$eventBus.$off('toggle-drawer', this.toggleDrawer)
	}
}
</script>

<style>
</style>
