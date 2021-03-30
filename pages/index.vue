<template>
  <v-sheet>
    <featured-categories />
    <general-info />
    <featured-subcategories />
    <additional-info />
  </v-sheet>
</template>

<script>
import FeaturedCategories from '~~/components/HomeComponents/FeaturedCategories.vue'
import GeneralInfo from '~~/components/HomeComponents/GeneralInfo.vue'
import FeaturedSubcategories from '~~/components/HomeComponents/FeaturedSubcategories.vue'
import AdditionalInfo from '~~/components/HomeComponents/AdditionalInfo.vue'
// @ is an alias to /src

export default {
  components: {
    FeaturedCategories,
    GeneralInfo,
    FeaturedSubcategories,
    AdditionalInfo,
  },
}
</script>
