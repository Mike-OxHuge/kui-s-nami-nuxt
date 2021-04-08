<template>
  <v-sheet>
    <v-card v-for="item in items" :key="item.i" flat>
      <v-card-title> {{ item.name }} </v-card-title>

      <expandable-image
        class="image"
        close-on-background-click
        :src="item.img"
      />
      <v-card-subtitle>
        Цена: {{ item.price }} раз послать тебя ко всем чертям
      </v-card-subtitle>
      <v-card-text> {{ item.description }} </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script>
import Vue from 'vue'
import VueExpandableImage from 'vue-expandable-image'
Vue.use(VueExpandableImage)
export default {
  computed: {
    imported() {
      return this.$store.state.catalog.items.items
    },
    items() {
      return this.imported.filter((item) => item.title === 'obossana')
    },
  },
  mounted() {
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },
}
</script>

<style scoped>
.image {
  width: 400px;
  max-width: 100%;
}
</style>
