<template>
  <v-sheet>
    <div class="text-center">
      <v-dialog v-model="dialog" max-width="500">
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
          <IndividualItemView :items="items" />
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              Закрыть
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
      default: () => [],
    },
  },
  data() {
    return {
      dialog: false,
    }
  },
}
</script>

<style></style>
