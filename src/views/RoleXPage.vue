<template lang="pug">
	v-app
		v-navigation-drawer(app)
			v-toolbar(flat)
				v-list
					v-list-tile
						v-list-tile-content
							v-list-tile-title.title AppTitle
			v-list
				v-list-tile(to="/role-x/list-a")
					v-list-tile-content
						v-list-tile-title List A
		router-view
</template>

<script>
export default {}
</script>

<style>
</style>
