<template>
  <v-sheet>
    <featured-categories :categories="featuredCategories" />
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
  async asyncData() {
    const categories = await fetch(
      'https://next.json-generator.com/api/json/get/VJ5BPP0Nc'
    ).then((res) => res.json())
    // return { categories }

    const featuredCategories = categories.filter(
      (category) => category.featured === true
    )
    if (featuredCategories) {
      return { featuredCategories }
    }
  },
}
</script>
