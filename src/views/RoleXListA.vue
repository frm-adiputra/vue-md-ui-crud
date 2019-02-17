<template lang="pug">
    v-content
        portal(to="toolbar")
            v-toolbar(app flat clipped-left)
                v-toolbar-side-icon(@click="toggleDrawer")
                v-toolbar-title Home
        v-list(two-line)
            v-list-tile(v-for="item in items" :key="item.id" @click="showDetail(item.id)")
                v-list-tile-content
                    v-list-tile-title {{ item.title }}
                    v-list-tile-sub-title {{ item.author }}
        router-view
</template>

<script>
import api from '@/api'

export default {
    name: 'RoleXListA',
    data() {
        return {
            items: [],
            detail: null,
            detailDialog: false
        }
    },
    mounted() {
        this.items = api.listArticles()
    },
    methods: {
        showDetail(id) {
            this.$router.push(`/role-x/list-a/detail/${id}`)
        },
        toggleDrawer() {
            this.$eventBus.$emit('toggle-drawer')
        }
    }
}
</script>

<style>

</style>
