<template>
  <v-sheet>
    <v-row>
      <v-col v-for="category in featureds" :key="category.i">
        <a :href="category.link">
          <h4>{{ category.name }}</h4>
        </a>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  computed: {
    subCategories() {
      return this.$store.state.subCategories
    },
    featureds() {
      return this.subCategories.filter((category) => category.featured === true)
    },
  },
}
</script>

<style></style>
