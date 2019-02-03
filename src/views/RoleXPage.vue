<template lang="pug">
	v-app
		v-navigation-drawer(app)
			v-toolbar(flat)
				v-list
					v-list-tile
						v-list-tile-content
							v-list-tile-title.title AppTitle
			v-list
				v-list-tile(to="/")
					v-list-tile-content
						v-list-tile-title Home
		router-view
</template>

<script>
export default {}
</script>

<style>
</style>
