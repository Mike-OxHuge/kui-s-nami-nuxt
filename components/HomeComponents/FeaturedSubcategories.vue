<template>
  <v-container class="">
    <v-row justify-center>
      <v-col
        v-for="category in featuredSubCategories"
        :key="category.i"
        cols="auto"
        class=""
      >
        <NuxtLink :to="category.link">
          <div class="d-flex flex-column align-center">
            <v-avatar size="100">
              <v-img :src="category.img" alt="featured sub category image" />
            </v-avatar>
            <v-btn text>
              <span class="fire--text">
                {{ category.name }}
              </span>
            </v-btn>
            <span class="fire--text">
              {{ category.name }}
            </span>
          </div>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    featuredSubCategories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },

  computed: {},
  methods: {},
}
</script>

<style scoped>
span {
  font-weight: bolder !important;
}
</style>
