<template>
  <v-sheet>
    <h1>Изделия для дома</h1>
    <v-row>
      <v-col v-for="indoorItem in indoorItems" :key="indoorItem.i">
        <NuxtLink :to="indoorItem.link">{{ indoorItem.name }}</NuxtLink>
      </v-col>
    </v-row>
    <NuxtChild />
  </v-sheet>
</template>

<script>
export default {
  computed: {
    subCats() {
      return this.$store.state.catalog.subcategories.subCategories
    },
    indoorItems() {
      return this.subCats.filter(
        (category) => category.type === 'indoor' || category.type === 'bothdoor'
      )
    },
  },
}
</script>

<style></style>
