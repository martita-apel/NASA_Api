<template>
  <div>
    <v-toolbar id="navbar" flat tile>
      <div id="secciones">
        <v-btn text dark class="mr-1" to="/">Inicio</v-btn>
        <v-btn text dark class="mr-1" to="/apod">APOD</v-btn>
        <v-btn text dark class="mr-1" to="/rover">Rover</v-btn>
        <v-btn
          text
          dark
          class="mr-1"
          to="/"
          v-show="currentUser"
          @click="logout"
        >
          Cerrar Sesión
        </v-btn>
      </div>

      <v-menu center dark offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            id="burger"
            class="mt-4 mr-1"
            dark
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon dark>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item id="block" class="text-center my-2">
            <v-list-item-title>
              <v-btn text dark class="mr-2 my-1" to="/">Inicio</v-btn>
            </v-list-item-title>

            <v-list-item-title>
              <v-btn text dark class="mr-2 my-1" to="/apod">APOD</v-btn>
            </v-list-item-title>

            <v-list-item-title>
              <v-btn text dark class="mr-2 my-1" to="/rover">Rover</v-btn>
            </v-list-item-title>

            <v-list-item-title>
              <v-btn
                text
                dark
                class="mr-2"
                to="/"
                v-show="currentUser"
                @click="logout"
                >Cerrar Sesión</v-btn
              >
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import firebase from "firebase";

export default {
  name: "Navbar",
  data: () => ({}),
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    ...mapActions(["updateUser"]),
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.updateUser(null);
        });
    },
  },
};
</script>

<style>
#navbar {
  min-width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
#secciones {
  justify-content: auto !important;
}

#buscador {
  min-width: 100px !important;
  max-width: 200px !important;
  display: none;
}

#burger {
  display: none;
}
#block {
  display: none;
}
@media only screen and (max-width: 600px) {
  #burger {
    display: block;
  }
  #block {
    display: block;
  }
  #secciones {
    display: none;
  }
}
</style>
