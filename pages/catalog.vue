<template>
  <v-main>
    <v-row>
      <v-col v-for="category in categories" :key="category.i">
        <v-card router :to="category.link">
          <v-img height="250" width="250" :src="category.img" />
          <v-card-title>
            {{ category.name }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.state.catalog.categories.categories
    },
  },
}
</script>

<style></style>
