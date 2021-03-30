<template>
  <v-sheet>
    <div class="text-center ma-auto">
      <h1>Общая Информация</h1>
    </div>
    <div class="">
      <div />
      <div />

      <v-row justify="space-around">
        <v-col cols="auto">
          <v-btn color="warning">
            <a target="_blank" href="https://forms.gle/xDqnpQ6sGZiTEERy7">
              Обратная связь 1</a
            >
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-dialog transition="dialog-top-transition" max-width="600">
            <template #activator="{ on, attrs }">
              <v-btn color="primary" v-bind="attrs" v-on="on">
                Обратная связь 2
              </v-btn>
            </template>
            <template #default="dialog">
              <v-card flat>
                <iframe
                  scrolling="no"
                  lazy
                  src="https://docs.google.com/forms/d/e/1FAIpQLSf597x3mfJv_9tuhbzyEv0SUCh6XF2muwTh2kX2sIxs5Q5YdA/viewform?embedded=true"
                  frameborder="0"
                  >Loading…</iframe
                >
                <v-card-actions class="justify-end">
                  <v-btn text @click="dialog.value = false"> Закрыть </v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
        <v-col cols="auto">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
            officia fugiat sapiente veritatis similique quas perspiciatis
            consectetur assumenda recusandae? Quidem quam earum cupiditate
            suscipit odio dicta deleniti enim totam unde!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            vero. Eum voluptatum dolorem ex nulla mollitia et aut, doloremque
            corporis ducimus nostrum qui in enim eos! Tempore sequi ratione
            perferendis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            commodi mollitia unde corporis a non magni! Enim laboriosam
            doloribus delectus voluptatum non illum, quaerat quas placeat
            deleniti ut magni vitae?
          </p>
        </v-col>
      </v-row>
    </div>
    <hr />
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped>
iframe {
  width: inherit;
  height: 80vh;
}
a {
  text-decoration: none;
}
</style>
