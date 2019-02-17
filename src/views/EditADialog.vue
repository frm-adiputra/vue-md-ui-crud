<template lang="pug">
ADialog(v-model="dlg" @input="$emit('input', $event)")
	v-card
		v-toolbar(flat color="transparent")
			v-btn(icon v-if="fullscreen" @click="closeDialog" :ripple="false")
				v-icon close
			v-toolbar-title Article
			v-spacer
			v-toolbar-items
				v-btn(icon)
					v-icon edit
				v-btn(icon)
					v-icon delete
</template>

<script>
export default {
	name: 'EditADialog',
	props: {
		value: {
			type: Boolean,
			required: true
		}
	},
	data() {
		return {
			dlg: false
		}
	},
	computed: {
		fullscreen() {
			return this.$vuetify.breakpoint.xsOnly
		}
	},
	methods: {
		closeDialog() {
			this.dlg = false
		}
	},
	watch: {
		value(newValue) {
			this.dlg = newValue
		}
	}
}
</script>

<style>

</style>
