<template>
  <v-main class="pt-2">
    <!-- small screens -->
    <!-- <v-slide-group
      v-if="$vuetify.breakpoint.mdAndDown"
      :show-arrows="showArrows"
    >
      <v-slide-item v-for="category in firstHalf" :key="category.i">
        <NuxtLink :to="category.link">
          <div
            class="d-flex flex-column align-center mx-3"
            :style="customWidth"
          >
            <v-avatar size="100">
              <v-img :src="category.img" alt="featured sub category image" />
            </v-avatar>
            <v-btn text>
              <span class="fire--text">
                {{ category.name }}
              </span>
            </v-btn>
          </div>
        </NuxtLink>
      </v-slide-item>
    </v-slide-group> -->

    <!-- <v-slide-group
      v-if="$vuetify.breakpoint.mdAndDown"
      :show-arrows="showArrows"
    >
      <v-slide-item v-for="category in secondHalf" :key="category.i">
        <NuxtLink :to="category.link">
          <div
            class="d-flex flex-column align-center mx-3"
            :style="customWidth"
          >
            <v-avatar size="100">
              <v-img :src="category.img" alt="featured sub category image" />
            </v-avatar>
            <v-btn text>
              <span class="fire--text">
                {{ category.name }}
              </span>
            </v-btn>
          </div>
        </NuxtLink>
      </v-slide-item>
    </v-slide-group> -->

    <!-- large screens -->
    <!-- <v-row v-if="$vuetify.breakpoint.lgAndUp">
      <v-col
        v-for="category in featuredSubCategories"
        :key="category.i"
        cols="auto"
        lg="2"
        xl="1"
        class=""
      >
        <NuxtLink :to="category.link">
          <div class="d-flex flex-column align-center">
            <v-avatar size="150">
              <v-img :src="category.img" alt="featured sub category image" />
            </v-avatar>
            <v-btn text>
              <span class="fire--text">
                {{ category.name }}
              </span>
            </v-btn>
          </div>
        </NuxtLink>
      </v-col>
    </v-row> -->
    <v-carousel hide-delimiters :show-arrows="showArrows">
      <v-carousel-item>
        <v-sheet height="100%" tile>
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
                  <v-btn text>
                    <span class="fire--text">
                      {{ category.name }}
                    </span>
                  </v-btn>
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
                  <v-btn text class="fire--text">
                    {{ category.name }}
                  </v-btn>
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
                  <v-btn text>
                    <span class="fire--text">
                      {{ category.name }}
                    </span>
                  </v-btn>
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
    customWidth() {
      return this.$vuetify.breakpoint.smAndDown ? 'width: 15vw;' : 'width: 10vw'
    },
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
span {
  font-weight: bolder !important;
}
</style>
