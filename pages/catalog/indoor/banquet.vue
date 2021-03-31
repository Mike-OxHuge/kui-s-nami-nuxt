<template>
  <v-sheet>
    <h1>Банкетки</h1>
    <ItemView :items="banquet" />
  </v-sheet>
</template>

<script>
import ItemView from '~~/components/CatalogComponents/ItemView.vue'
export default {
  components: { ItemView },
  computed: {
    items() {
      return this.$store.state.catalog.items.items
    },
    banquet() {
      return this.items.filter((item) => item.type === 'banquet')
    },
  },
}
</script>

<style></style>
