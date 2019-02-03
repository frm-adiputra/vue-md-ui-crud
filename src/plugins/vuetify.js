import Vue from 'vue'
import Vuetify, {
	VBtn,
	VSnackbar,
	VSpacer,
	VDialog,
	VCard,
	VCardTitle,
	VCardText,
	VCardActions,
	VDivider
} from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
	iconfont: 'md',
	components: {
		VBtn,
		VSnackbar,
		VSpacer,
		VDialog,
		VCard,
		VCardTitle,
		VCardText,
		VCardActions,
		VDivider
	}
})
