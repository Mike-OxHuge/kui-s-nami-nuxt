<template>
  <v-sheet>
    <featured-categories />
    <general-info />
    <featured-subcategories />
    <additional-info />
  </v-sheet>
</template>

<script>
import AdditionalInfo from '~~/components/HomeComponents/AdditionalInfo.vue'

// @ is an alias to /src

export default {
  components: {
    AdditionalInfo,
  },
}
</script>
