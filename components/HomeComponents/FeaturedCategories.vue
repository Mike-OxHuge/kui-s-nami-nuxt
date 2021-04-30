<template>
  <v-main class="d-flex flex-column align-center py-2">
    <v-row>
      <v-col
        v-for="category in featuredCategories"
        :key="category.i"
        cols="auto"
      >
        <v-card router :to="category.link">
          <div class="d-flex flex-column align-center">
            <v-img height="250" width="250" :src="category.img" />
            <v-card-title class="fire--text">
              {{ category.name }}
            </v-card-title>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  props: {
    featuredCategories: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      //
    }
  },
  computed: {
    //
  },
}
</script>

<style></style>
