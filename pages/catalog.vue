<template>
  <v-main>
    <v-row class="mt-n5">
      <v-col v-for="category in categories" :key="category.i" cols="2">
        <v-card router :to="category.link" @click="minimizer()">
          <v-img
            v-if="!minimize"
            height="250"
            width="250"
            :src="category.img"
          />
          <v-card-title>
            {{ category.name }}
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-btn v-if="minimize" router to="/catalog" @click="collapser()"
          ><v-icon>unfold_less</v-icon> скукожить/раскукожить</v-btn
        >
      </v-col>
    </v-row>
    <NuxtChild v-if="expand" />
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      minimize: false,
      expand: false,
    }
  },
  computed: {
    categories() {
      return this.$store.state.catalog.categories.categories
    },
  },
  methods: {
    minimizer() {
      if (this.minimize === false) {
        this.minimize = true
        this.expand = true
      } else if (this.minimize === true && this.expand === true) {
        this.minimize = true
        this.expand = true
      }
    },
    collapser() {
      if (this.minimize === true) {
        this.minimize = false
        this.expand = false
      }
    },
  },
}
</script>

<style></style>
