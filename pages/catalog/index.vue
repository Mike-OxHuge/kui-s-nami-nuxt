<template>
  <v-container class="">
    <v-row justify="center" dense>
      <v-col
        v-for="category in categories"
        :key="category.i"
        cols="auto"
        class="align-center"
      >
        <NuxtLink :to="`${category.link}`">
          <v-card>
            <div class="d-flex flex-column align-center">
              <v-img height="250" width="250" :src="category.img" />
              <v-card-title>
                <span class="fire--text">
                  {{ category.name }}
                </span>
              </v-card-title>
            </div>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData() {
    const categories = await fetch(
      'https://next.json-generator.com/api/json/get/VJ5BPP0Nc'
    ).then((res) => res.json())

    return { categories }
  },
  data() {
    return {
      //
    }
  },
}
</script>

<style></style>
