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
</script>

<style scoped>
p {
  font-weight: 500 !important;
  text-transform: uppercase;
}
</style>
