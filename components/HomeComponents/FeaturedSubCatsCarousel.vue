<template>
  <v-row class="fill-height" align="center" justify="center">
    <v-col v-for="category in splittedArray" :key="category.i" cols="auto">
      <div class="d-flex flex-column align-center">
        <v-avatar :size="customSize">
          <v-img :src="category.img" alt="featured sub category image" />
        </v-avatar>
        <p class="fire--text text-center">
          {{ category.name }}
        </p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    splittedArray: {
      type: Array,
      required: true,
    },
  },
  computed: {
    customSize() {
      return this.$vuetify.breakpoint.smAndDown ? '60' : '200'
    },
  },
}
</script>

<style></style>
