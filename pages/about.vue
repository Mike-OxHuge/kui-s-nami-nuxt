<template>
  <v-sheet>
    <h1>This is an about page</h1>
    <NuxtLink to="/catalog">nuxt link to catalog</NuxtLink> <br />
    <NuxtLink to="/catalog/indoor">nuxt link to catalog/indoor</NuxtLink>
    <v-card class="mx-5" flat>
      <div class="mx-2">
        <v-avatar size="150" tile class="pt-2">
          <v-img src="https://clck.ru/UBEsN" alt="test image" />
        </v-avatar>
        <v-card-title>Test card</v-card-title>
        <v-card-subtitle>test card subtitle</v-card-subtitle>
        <v-card-text>test card text</v-card-text>
      </div>
    </v-card>
  </v-sheet>
</template>

<script>
export default {}
</script>

<style></style>
