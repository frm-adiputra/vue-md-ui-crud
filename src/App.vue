<template lang="pug">
	div
		router-view
		.breakpoint {{ breakpoint }}
</template>

<script>
export default {
	name: 'App',
	computed: {
		breakpoint() {
			return this.$vuetify.breakpoint.name
		}
	}
}
</script>

<style>
.breakpoint {
	position: fixed;
	bottom: 0;
	right: 0;
}
</style>
