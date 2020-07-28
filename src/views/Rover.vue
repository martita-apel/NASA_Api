<template>
  <div class="apod">
    <v-row justify="center" class="form">
      <v-form ref="form" @submit.prevent="buscarRover">
        <v-text-field v-model="sol" label="Sol" required dark></v-text-field>
        <v-select v-model="rover" :items="items" label="Item" required dark></v-select>
        <v-btn color="warning" @click="buscarRover">Buscar</v-btn>
      </v-form>
    </v-row>

    <v-divider dark class="mx-10 my-5"></v-divider>

    <h2 class="registro">Registro de cámaras</h2>
    <div id="total_camaras">
      <div v-for="(camera, index) in totalCamera" :key="index">
        <p class="camara">{{index}} : {{camera}}</p>
      </div>
    </div>

    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="r in roverData.photos" :key="r.id">
          <v-card class="mx-auto my-1" max-width="300">
            <v-hover>
              <v-img min-height="180" :src="r.img_src">
                <v-spacer></v-spacer>
              </v-img>
            </v-hover>
            <v-card-title class="card_titulo dark--text text--secondary">{{r.camera.full_name}}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  data: () => ({
    sol: "1000",
    rover: "Curiosity",
    items: ["Curiosity", "Opportunity", "Spirit"],
  }),
  computed: {
    ...mapState(["roverData"]),
    ...mapGetters(["totalCamera"]),
  },
  methods: {
    ...mapActions(["getRover"]),
    buscarRover() {
      let hola = { sol: this.sol, rover: this.rover };
      this.getRover(hola);
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
.card_titulo {
  font-size: 15px;
}
.registro {
  text-align: center;
  color: white;
  letter-spacing: 5px;
  font-size: 25px;
  font-weight: 300;
  margin: 30px 0 10px 0;
}
.camara {
  padding: 0 15px;
}
#total_camaras {
  display: flex;
  justify-content: center;
  color: white;
  font-size: 30px;
  font-weight: bold;
}
</style>
