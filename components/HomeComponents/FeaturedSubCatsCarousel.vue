<template>
  <v-row class="fill-height" align="center" justify="center">
    <v-col
      v-for="category in splittedArray"
      :key="category.i"
      cols="3"
      md="2"
      class="mx-2"
    >
      <div class="d-flex flex-column align-center">
        <v-avatar :size="customSize">
          <NuxtLink :to="category.link">
            <v-img :src="category.img" alt="featured sub category image" />
          </NuxtLink>
        </v-avatar>
        <NuxtLink :to="category.link">
          <p class="fire--text text-center">
            {{ category.name }}
          </p>
        </NuxtLink>
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
