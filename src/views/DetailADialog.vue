<template lang="pug">
ARouteDialog(:width="maxWidth" :fullscreen="fullscreen" v-model="dlg")
	v-card
		v-toolbar(flat color="transparent")
			v-btn(icon v-if="fullscreen" @click="closeDialog" :ripple="false")
				v-icon close
			v-toolbar-title Article
			v-spacer
			v-toolbar-items
				v-btn(icon @click="editDlg = true")
					v-icon edit
				v-btn(icon)
					v-icon delete
		v-card-title(primary-title)
			.a-h5 {{ title }}
		v-card-text
			.field
				.field__label Title
				.field__value {{ title }}
			.field
				.field__label Author
				.field__value {{ author }}
	EditADialog(v-model="editDlg")
</template>

<script>
import api from '@/api'
import EditADialog from '@/views/EditADialog'

export default {
	name: 'DetailADialog',
	components: {
		EditADialog
	},
	data() {
		return {
			detail: null,
			dlg: false,
			editDlg: false
		}
	},
	computed: {
		title() { return this.detail != null ? this.detail.title : null },
		author() { return this.detail != null ? this.detail.author : null },
		maxWidth() {
			if (this.$vuetify.breakpoint.xl) {
				return 64 * 17
			} else if (this.$vuetify.breakpoint.lg) {
				return 64 * 15
			} else if (this.$vuetify.breakpoint.md) {
				return 64 * 11
			} else if (this.$vuetify.breakpoint.sm) {
				return 64 * 8
			} else {
				return 64 * 8
			}
		},
		fullscreen() {
			return this.$vuetify.breakpoint.xsOnly
		}
	},
	methods: {
		closeDialog() {
			this.dlg = false
		}
	},
	mounted() {
		this.detail = api.getArticle(this.$route.params.id)
	}
}
</script>
