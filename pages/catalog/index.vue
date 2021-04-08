<template>
  <v-main>
    <v-row class="mt-n5" dense>
      <v-col v-for="category in categories" :key="category.i" cols="auto">
        <NuxtLink :to="`${category.link}`">
          <v-card>
            <v-img height="250" width="250" :src="category.img" />
            <v-card-title>
              <span>
                {{ category.name }}
              </span>
            </v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-main>
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
