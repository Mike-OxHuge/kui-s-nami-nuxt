<template>
  <v-main>
    <h1>API: items</h1>
    <h2>'catalog/_subcategory/_items.vue' here</h2>
    <h2>params: {{ params }}</h2>

    <ul v-for="item in filteredItems" :key="item.i">
      <li>
        <NuxtLink :to="item.path"> {{ item.name }}</NuxtLink>
      </li>
    </ul>
  </v-main>
</template>

<script>
export default {
  async asyncData() {
    const items = await fetch(
      'https://next.json-generator.com/api/json/get/NyoUxKRV9'
    ).then((res) => res.json())

    return { items }
  },
  data() {
    return {
      params: this.$route.params.items,
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => item.slug === this.$route.params.items)
    },
  },
}
// include slugs. slug === url (this.$route.params.items) maybe
</script>

<style></style>
