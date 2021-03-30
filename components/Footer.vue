<template>
  <v-footer>
    <span>&copy; {{ new Date().getFullYear() }}</span>
    <v-row justify="center" no-gutters>
      <v-card flat>
        <v-card-text>
          <v-btn
            v-for="contact in footerContacts"
            :key="contact.i"
            class="mx-5"
            text
          >
            <v-icon> {{ contact.icon }} </v-icon>
            {{ contact.title }}
          </v-btn>
        </v-card-text>
      </v-card>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  computed: {
    contacts() {
      return this.$store.state.contacts.contacts
    },
    footerContacts() {
      return this.contacts.filter((contact) => contact.inFooter === true)
    },
  },
}
</script>

<style></style>
