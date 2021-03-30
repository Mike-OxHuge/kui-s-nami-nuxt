<template>
  <v-sheet>
    <v-row>
      <v-col v-for="category in featuredCategories" :key="category.i">
        <v-card router :to="category.link">
          <v-img height="250" width="250" :src="category.img" />
          <v-card-title>
            {{ category.name }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.state.categories
    },

    featuredCategories() {
      return this.categories.filter((category) => category.featured === true)
    },
  },
}
</script>

<style></style>
