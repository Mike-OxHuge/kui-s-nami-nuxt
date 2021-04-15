<template>
  <div>
    <div class="d-flex justify-space-around mx-auto">
      <h1>{{ title }}</h1>
    </div>
    <h1>API: items</h1>
    <h2>'catalog/_subcategory/_items.vue' here</h2>
    <h2>params: {{ params }}</h2>

    <ul v-for="item in filteredItems" :key="item.i">
      <li>
        <NuxtLink :to="item.path">
          <v-avatar> <img :src="item.img" alt="картинка" /></v-avatar>
          {{ item.name }}</NuxtLink
        >
      </li>
    </ul>
    <ul>
      <li>И многое многое другое...</li>
    </ul>
  </div>
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
  },
}
</script>

<style></style>
