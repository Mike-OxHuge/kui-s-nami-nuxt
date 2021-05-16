<template>
  <v-main class="d-flex flex-column py-2">
    <v-row v-if="$vuetify.breakpoint.mdAndUp">
      <v-col
        v-for="category in featuredCategories"
        :key="category.i"
        cols="4"
        style="display: flex; justify-content: center"
      >
        <v-card router :to="category.link" flat class="ma-3">
          <v-avatar tile size="250">
            <v-img :src="category.img" />
          </v-avatar>
          <v-card-text class="fire--text" style="overflow-wrap: break-word">
            {{ category.name }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <div v-if="$vuetify.breakpoint.smAndDown">
      <v-carousel continuous cycle>
        <v-carousel-item
          v-for="category in featuredCategories"
          :key="category.i"
        >
          <v-sheet router :to="category.link">
            <v-img :src="category.img" contain />
            <div
              style="
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                text-align: center;
                width: 100vw;
                background-color: rgba(0, 0, 0, 0.55);
                padding: 5% 0px;
              "
            >
              <p class="fire--text mb-0">
                {{ category.name }}
              </p>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </v-main>
</template>

<script>
export default {
  components: {
    //
  },
  props: {
    featuredCategories: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      //,
    }
  },
  methods: {
    //,
  },
}
</script>

<style scoped>
p {
  font-weight: bolder !important;
  text-transform: uppercase;
}
</style>
