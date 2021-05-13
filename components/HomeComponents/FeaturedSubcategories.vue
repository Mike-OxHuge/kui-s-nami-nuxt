<template>
  <v-main class="pt-4">
    <v-carousel hide-delimiters :show-arrows="showArrows" height="100vh">
      <v-carousel-item>
        <carousel-item :splitted-array="firstHalf" />
      </v-carousel-item>

      <v-carousel-item>
        <carousel-item :splitted-array="secondHalf" />
      </v-carousel-item>

      <v-carousel-item>
        <carousel-item :splitted-array="thirdHalf" />
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
      firstHalf: [],
      secondHalf: [],
      thirdHalf: [],
    }
  },

  computed: {
    showArrows() {
      return !this.$vuetify.breakpoint.smAndDown
    },
    //
  },

  beforeMount() {
    const x = this.featuredSubCategories.length / 3
    const a = this.featuredSubCategories.slice()
    const b = a.splice(0, x)
    const n = a.length / 2
    const c = a.splice(0, n)

    for (let i = 0; i < a.length; i++) {
      this.firstHalf.push(a[i])
    }
    for (let i = 0; i < b.length; i++) {
      this.secondHalf.push(b[i])
    }
    for (let i = 0; i < c.length; i++) {
      this.thirdHalf.push(c[i])
    }
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
