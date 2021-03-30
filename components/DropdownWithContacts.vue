<template>
  <v-menu>
    <template #activator="{ on, attrs }">
      <v-btn icon color="black" v-bind="attrs" v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(contact, i) in contacts" :key="i">
        <v-btn text>
          <v-icon left>
            {{ contact.icon }}
          </v-icon>
          <span
            ><a :href="contact.link">{{ contact.title }} </a></span
          >
        </v-btn>
        <!-- <v-list-action>
          <v-icon left> {{ contact.icon }} </v-icon>
        </v-list-action>
        <v-list-item-title>
          {{ contact.title }}
        </v-list-item-title> -->
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  computed: {
    contacts() {
      return this.$store.state.contacts.contacts
    },
  },
}
</script>

<style></style>
