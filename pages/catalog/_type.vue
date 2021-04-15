<template>
  <v-sheet>
    <h1>API: subcategories</h1>
    <h2>'/catalog/_type.vue' here</h2>

    <p>Path: {{ $route.path }}</p>
    <p>route.params.type: {{ $route.params.type }}</p>
    <p>params.type: {{ params.type }}</p>

    <v-row>
      <v-col
        v-for="category in filteredCategories"
        :key="category.i"
        cols="auto"
      >
        <NuxtLink :to="category.link">
          <v-card>
            <v-avatar tile size="100">
              <img :src="category.img" alt="картинка для категории" />
            </v-avatar>

            <v-card-title>{{ category.name }}</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script>
export default {
  async asyncData({ params }) {
    const categories = await fetch(
      'https://next.json-generator.com/api/json/get/4JaUgvANc'
    ).then((res) => res.json())

    return { categories }
  },

  data() {
    return {
      params: this.$route.params,
    }
  },
  computed: {
    filteredCategories() {
      return this.categories.filter(
        (category) => category.type === this.$route.params.type
      )
    },
  },
}
// sort by type
// display name
// link is link
</script>
