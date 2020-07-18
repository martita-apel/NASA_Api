<template>
  <div class="apod">
    <v-row justify="center" class="form">
      <v-form ref="form" @submit.prevent="buscarRover">
        <v-text-field v-model="sol" label="Sol" required dark></v-text-field>
        <v-select
          v-model="select"
          :items="items"
          label="Item"
          required
          dark
        ></v-select>
        <v-btn color="warning" @click="buscarRover">Buscar</v-btn>
      </v-form>
    </v-row>
    <v-divider dark class="mx-10 my-10"></v-divider>

    <v-card
      class="mx-auto my-4"
      min-width="150"
      max-width="300"
      v-for="r in rover"
      :key="r.id"
    >
      <v-hover>
        <v-img min-height="200px" max-height="350px" :src="r.img_src">
          <v-spacer></v-spacer>
        </v-img>
      </v-hover>
      <v-card-title class="card_titulo dark--text text--secondary">{{
        r.camera.name
      }}</v-card-title>
      <v-card-subtitle class="overline pb-0">{{ r.sol }}</v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  data: () => ({
    sol: "",
    select: null,
    items: ["Curiosity", "Opportunity", "Spirit"],
  }),
  computed: { ...mapState(["rover"]) },
  methods: {
    ...mapActions(["getRover"]),
    buscarRover() {
      this.getRover();
    },
  },
};
</script>

<style scoped>
.apod {
  background-image: linear-gradient(to top, #0250c5 0%, #d43f8d 100%);
}
.form {
  margin: 150px 0 50px 0;
}
</style>
