<template>
  <v-sheet>
    <v-row>
      <v-col v-for="category in featuredCategories" :key="category.i">
        <v-card router :to="category.link">
          <v-img height="250" width="250" :src="category.img" />
          <v-card-title>
            {{ category.name }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
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
