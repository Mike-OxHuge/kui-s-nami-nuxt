<template>
  <v-sheet>
    <div class="text-center">
<<<<<<< HEAD
      <v-dialog v-model="dialog" max-width="500">
=======
      <v-dialog v-model="dialog" width="auto">
>>>>>>> 55a876d44576ece1cadddf5f6fcf011879491c92
        <template #activator="{ on, attrs }">
          <v-row>
            <v-col v-for="item in items" :key="item.i">
              <v-card v-bind="attrs" @click="dialog = !dialog" v-on="on">
                <v-img width="250" height="250" :src="item.img" />
                <v-card-title> {{ item.name }} </v-card-title>
                <v-card-subtitle>
                  Цена: {{ item.price }} грамм конфет му-му
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </template>
        <v-card>
<<<<<<< HEAD
          <IndividualItemView :items="items" />
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              Закрыть
=======
          <IndividualItemView />
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              I accept
>>>>>>> 55a876d44576ece1cadddf5f6fcf011879491c92
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-sheet>
</template>

<script>
import IndividualItemView from '~~/components/CatalogComponents/IndividualItemView.vue'
export default {
  components: { IndividualItemView },
  props: {
    items: {
      type: Array,
<<<<<<< HEAD
      default: () => [],
=======
      required: true,
>>>>>>> 55a876d44576ece1cadddf5f6fcf011879491c92
    },
  },
  data() {
    return {
      dialog: false,
<<<<<<< HEAD
=======
      diaogue: false,
>>>>>>> 55a876d44576ece1cadddf5f6fcf011879491c92
    }
  },
}
</script>

<style></style>
