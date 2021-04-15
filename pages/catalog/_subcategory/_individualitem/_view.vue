<template>
  <!-- this code is currently not displayed anywhere -->
  <v-main>
    <h1>API: items</h1>
    <h2>'/catalog/_subcategory/_individualitem/_view.vue' here</h2>
    <h3>params.view: {{ params }}</h3>
    <v-card v-for="item in filteredItems" :key="item.i">
      <v-avatar size="200">
        <img :src="item.img" alt="картинка предмета" />
      </v-avatar>
      <v-card-title>
        {{ item.name }} and item.title: {{ item.title }}
      </v-card-title>
      <v-card-subtitle>Цена: {{ item.price }} сантиметров</v-card-subtitle>
      <v-card-text> {{ item.description }} </v-card-text>
    </v-card>
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
      params: this.$route.params.view,
      title: '',
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => item.title === this.$route.params.view)
    },
  },
}
</script>

<style></style>
