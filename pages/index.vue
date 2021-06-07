<template>
  <v-sheet>
    <featured-categories :featured-categories="featuredCategories" />
    <general-info />
    <featured-subcategories :featured-sub-categories="featuredSubCategories" />
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

  // fetch is broken, currently using hardcoded backed-up data.

  // async asyncData() {
  //   const categories = await fetch(
  //     'https://api.json-generator.com/templates/UGGVwCTMQ6eR/data'
  //   ).then((res) => res.json())

  //   const subCategories = await fetch(
  //     'https://api.json-generator.com/templates/afT9Y8k2Rccb/data'
  //   ).then((res) => res.json())

  //   return { categories, subCategories }
  // },

  data() {
    return {
      //
    }
  },
  computed: {
    featuredCategories() {
      return this.$store.state.catalog.categories.categories.filter(
        (category) => category.featured === true
      )
    },
    featuredSubCategories() {
      return this.$store.state.catalog.subcategories.subCategories.filter(
        (category) => category.featured === true
      )
    },
  },
}
</script>
