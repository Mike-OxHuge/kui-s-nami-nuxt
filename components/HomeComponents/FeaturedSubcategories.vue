<template>
  <v-main class="pt-4">
    <v-carousel hide-delimiters :show-arrows="showArrows" height="100vh">
      <v-carousel-item>
        <v-sheet height="" tile>
          <v-row class="fill-height" align="center" justify="center">
            <v-col v-for="category in firstHalf" :key="category.i" cols="auto">
              <NuxtLink :to="category.link">
                <div
                  class="d-flex flex-column align-center mx-5"
                  :style="customWidth"
                >
                  <v-avatar :size="customSize">
                    <v-img
                      :src="category.img"
                      alt="featured sub category image"
                    />
                  </v-avatar>
                  <p class="fire--text text-center">
                    {{ category.name }}
                  </p>
                </div>
              </NuxtLink>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>

      <v-carousel-item>
        <v-sheet height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <v-col v-for="category in secondHalf" :key="category.i" cols="auto">
              <NuxtLink :to="category.link">
                <div
                  class="d-flex flex-column align-center mx-5"
                  :style="customWidth"
                >
                  <v-avatar :size="customSize">
                    <v-img
                      :src="category.img"
                      alt="featured sub category image"
                    />
                  </v-avatar>
                  <p class="fire--text text-center">
                    {{ category.name }}
                  </p>
                </div>
              </NuxtLink>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>

      <v-carousel-item>
        <v-sheet height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <v-col v-for="category in thirdHalf" :key="category.i" cols="auto">
              <NuxtLink :to="category.link">
                <div
                  class="d-flex flex-column align-center mx-5"
                  :style="customWidth"
                >
                  <v-avatar :size="customSize">
                    <v-img
                      :src="category.img"
                      alt="featured sub category image"
                    />
                  </v-avatar>
                  <p class="fire--text text-center">
                    {{ category.name }}
                  </p>
                </div>
              </NuxtLink>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-main>
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
    return {
      firstHalf: [],
      secondHalf: [],
      thirdHalf: [],
    }
  },

  computed: {
    // this is really bad
    // customWidth() {
    //   return this.$vuetify.breakpoint.smAndDown
    //     ? 'width: 15vw; height:20vh;'
    //     : 'width: 10vw; height:30vh;'
    // },
    showArrows() {
      return !this.$vuetify.breakpoint.smAndDown
    },
    customSize() {
      return this.$vuetify.breakpoint.smAndDown ? '60' : '150'
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
