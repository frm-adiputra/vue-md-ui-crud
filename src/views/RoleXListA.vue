<template lang="pug">
    v-content
        v-toolbar(app)
            v-toolbar-side-icon
            v-toolbar-title Home
        v-list(two-line)
            v-list-tile(v-for="item in items" :key="item.id")
                v-list-tile-content
                    v-list-tile-title {{ item.title }}
                    v-list-tile-sub-title {{ item.author }}

</template>

<script>
import api from '@/api'

export default {
    name: 'RoleXListA',
    data() {
        return {
            items: []
        }
    },
    mounted() {
        this.items = api.listArticles()
    }
}
</script>

<style>

</style>
