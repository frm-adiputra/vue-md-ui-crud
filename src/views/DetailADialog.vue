<template lang="pug">
ARouteDialog(:max-width="maxWidth")
	v-card
		v-toolbar(flat color="transparent")
			v-toolbar-title Article
			v-spacer
			v-toolbar-items
				v-btn(icon)
					v-icon edit
		v-card-title(primary-title)
			.headline {{ title }}
		v-card-text
			p {{ title }}
			p {{ author }}
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
		author() { return this.detail != null ? this.detail.author : null },
		maxWidth() {
			if (this.$vuetify.breakpoint.sm) {
				return 64 * 8
			} else {
				return 64 * 11
			}
		}
	},
	mounted() {
		this.detail = api.getArticle(this.$route.params.id)
	}
}
</script>
