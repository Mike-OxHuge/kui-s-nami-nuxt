<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      :fixed="fixed"
      app
      :width="customWidth"
    >
      <v-list>
        <div class="d-flex justify-end">
          <v-btn
            v-if="$vuetify.breakpoint.smAndDown"
            text
            class="ma-5"
            @click="refresh"
          >
            <v-icon right>close</v-icon>
          </v-btn>
        </div>

        <v-list-item
          v-for="route in routes"
          :key="route.i"
          :to="route.to"
          router
          exact
          @click="refresh"
        >
          <v-list-item-action>
            <v-icon>{{ route.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="route.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :fixed="fixed" app flat max-width="100vw">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <NuxtLink to="/">LOGO</NuxtLink>
      <v-spacer />
      <span> <a href="tel:+79XX-XXX-XX-XX">+79XX-XXX-XX-XX</a> </span>
      <DropdownWithContacts />
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-spacer></v-spacer>
    <Footer />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      fixed: true,
    }
  },
  computed: {
    routes() {
      return this.$store.state.menu.routes
    },
    customWidth() {
      return this.$vuetify.breakpoint.smAndDown ? '100vw' : '350'
    },
  },
  methods: {
    refresh() {
      if (this.drawer) {
        this.drawer = !this.drawer
      }
    },
  },
}
</script>

<style>
/*a normal, unvisited link*/
a:link {
  color: green;
}
/*a link the user has visited*/
a:visited {
  color: purple;
}
/*a link when the user mouses over it*/
a:hover {
  color: yellow;
}
/*a link the moment it is clicked*/
a:active {
  color: brown;
}
/* removed underline */
a {
  text-decoration: none;
}
</style>
