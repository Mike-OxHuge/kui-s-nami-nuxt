<template>
  <v-main class="pt-4">
    <v-carousel hide-delimiters>
      <v-carousel-item v-for="array in sliced" :key="array.i">
        <carousel-item :splitted-array="array" />
      </v-carousel-item>
    </v-carousel>
  </v-main>
</template>

<script>
import carouselItem from '~/components/HomeComponents/FeaturedSubCatsCarousel.vue'
export default {
  components: {
    carouselItem,
  },
  props: {
    featuredSubCategories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      sliced: [],
    }
  },

  computed: {
    showArrows() {
      return !this.$vuetify.breakpoint.smAndDown
    },
    //
  },

  beforeMount() {
    const total = this.featuredSubCategories.length
    const items = [
      this.featuredSubCategories.slice(0, Math.ceil(total / 3)),
      this.featuredSubCategories.slice(
        Math.ceil(total / 3),
        Math.ceil(total / 3) * 2
      ),
      this.featuredSubCategories.slice(
        Math.ceil(total / 3) * 2,
        Math.ceil(total + 1)
      ),
    ]
    this.sliced = items
  },

  mounted() {
    //
  },
  methods: {
    //
  },
}
// In case you will need a working solution for every case in the future
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// let result = [];

// arr.forEach((n, i) => !result[i % 3] ? result.push([n]) : result[i % 3].push(n));
</script>

<style scoped>
p {
  font-weight: 500 !important;
  text-transform: uppercase;
}
</style>
