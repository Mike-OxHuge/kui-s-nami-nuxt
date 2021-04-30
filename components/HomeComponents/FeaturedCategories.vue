<template>
  <v-main class="d-flex flex-column align-center py-2">
    <v-slide-group show-arrows="">
      <v-slide-item v-for="category in featuredCategories" :key="category.i">
        <v-card router :to="category.link" flat class="ma-3">
          <!-- <div class="d-flex flex-column align-center"> -->
          <v-avatar tile size="250">
            <v-img :src="category.img" />
          </v-avatar>

          <v-card-text class="fire--text" style="overflow-wrap: break-word">
            {{ category.name }}
          </v-card-text>
          <!-- </div> -->
        </v-card>
      </v-slide-item>
    </v-slide-group>

    <!-- <v-row no-gutters>
      <v-col
        v-for="category in featuredCategories"
        :key="category.i"
        cols="12"
        sm="4"
      >
        <v-card router :to="category.link" flat>
          <div class="d-flex flex-column align-center">
            <v-avatar size="100">
              <v-img :src="category.img" />
            </v-avatar>

            <v-card-title class="fire--text" style="overflow-wrap: break-word">
              {{ category.name }}
            </v-card-title>
          </div>
        </v-card>
      </v-col>
    </v-row> -->
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

<style></style>
