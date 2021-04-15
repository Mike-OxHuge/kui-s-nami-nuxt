<template>
  <v-sheet>
    <div class="d-flex justify-space-around mx-auto">
      <h1>{{ filteredCategories[0].name }}</h1>
      <h2>{{ filteredCategories[0].description }}</h2>
    </div>
    <h1>API: items</h1>
    <h2>'catalog/_subcategory/_items.vue' here</h2>
    <h2>params: {{ params }}</h2>

    <v-row>
      <v-col v-for="item in filteredItems" :key="item.i" cols="auto">
        <v-avatar tile size="300">
          <img :src="item.img" alt="картинка"
        /></v-avatar>
        {{ item.name }}
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  async asyncData() {
    const items = await fetch(
      'https://next.json-generator.com/api/json/get/NyoUxKRV9'
    ).then((res) => res.json())
    const categories = await fetch(
      'https://next.json-generator.com/api/json/get/4JaUgvANc'
    ).then((res) => res.json())

    return { items, categories }
  },
  data() {
    return {
      params: this.$route.params,
      title: this.$route.params.items,
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter(
        (item) =>
          item.type === this.$route.params.items &&
          item.dir === this.$route.params.subcategory
      )
    },
    filteredCategories() {
      return this.categories.filter(
        (category) => category.title === this.$route.params.items
      )
    },
  },
}
</script>

<style></style>
