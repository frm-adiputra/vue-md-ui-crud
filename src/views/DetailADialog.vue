<template lang="pug">
ARouteDialog
	v-card
		v-card-title(primary-title) Dialog
		v-card-text
			p {{ title }}
			p {{ author }}
		v-card-actions
			v-spacer
			v-btn Edit
</template>

<script>
import api from '@/api'

export default {
	name: 'DetailADialog',
	data() {
		return {
			detail: null
		}
	},
	computed: {
		title() { return this.detail != null ? this.detail.title : null },
		author() { return this.detail != null ? this.detail.author : null }
	},
	mounted() {
		this.detail = api.getArticle(this.$route.params.id)
	}
}
</script>
