<template>
  <v-container>
    <v-row>
      <v-col
        v-for="category in featuredSubCategories"
        :key="category.i"
        cols="auto"
      >
        <NuxtLink :to="category.link">
          <v-card class="mx-auto" flat>
            <v-avatar size="100">
              <v-img :src="category.img" alt="featured sub category image" />
            </v-avatar>
            <v-card-text class="text-center">
              <span class="fire--text">
                {{ category.name }}
              </span>
            </v-card-text>
          </v-card>
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
