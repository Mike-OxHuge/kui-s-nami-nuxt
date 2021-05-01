<template>
  <v-main class="pt-2">
    <!-- small screens -->
    <v-slide-group
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
    </v-slide-group>

    <v-slide-group
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
    </v-slide-group>

    <!-- large screens -->
    <v-row v-if="$vuetify.breakpoint.lgAndUp">
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
    </v-row>
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
    }
  },

  computed: {
    customWidth() {
      return this.$vuetify.breakpoint.smAndDown ? 'width: 40vw' : 'width: 10vw'
    },
    showArrows() {
      return this.$vuetify.breakpoint.smAndDown ? 'false' : ''
    },
    //
  },
  beforeMount() {
    const n = this.featuredSubCategories.length / 2 // getting half of the array
    const a = this.featuredSubCategories.slice() // important to clone it with slice()
    const b = a.splice(0, n) // splicing right in the middle
    for (let i = 0; i < a.length; i++) {
      this.firstHalf.push(a[i])
    }
    for (let i = 0; i < b.length; i++) {
      this.secondHalf.push(b[i])
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
