<template lang="pug">
v-app
    v-content
        v-container(fill-height)
            v-layout(row align-center)
                v-flex(align-self-center xs12 sm12 md6 offset-md3 xl4 offset-xl4)
                    v-card(max-width="480" style="margin: 0 auto;")
                        v-card-title
                            .headline Login
                        v-card-text
                            v-text-field(label='Username')
                            v-text-field(label='Password' type='password')
                        v-card-actions
                            v-spacer
                            v-btn(color='primary' @click="onSignIn") Sign In
</template>

<script>
export default {
    name: 'Login',
    methods: {
        onSignIn() {
            this.$router.push('/role-x')
        }
    }
}
</script>

<style>

</style>
