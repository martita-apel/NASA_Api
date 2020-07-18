<template>
  <div id="home" :style="{background: `url(${apod.url})`}" max-width="100%">
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="300">
        <div ref="form" :model="usuario">
          <v-card id="login_card" class="white py-8 px-10 rounded-xl" max-width="380">
            <br />
            <v-text-field
              v-model="usuario.email"
              name="email"
              type="text"
              label="Email"
              prepend-inner-icon="mdi-email"
              required
              outlined
            ></v-text-field>

            <v-text-field
              v-model="usuario.password"
              name="password"
              :counter="20"
              label="Contraseña"
              :type="showPassword ? 'text' : 'password'"
              prepend-inner-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              required
              outlined
            ></v-text-field>

            <v-btn id="ingresar_boton" type="submit" color="warning" @click="login">INGRESAR</v-btn>
          </v-card>
        </div>
      </v-dialog>
    </v-row>

    <v-btn
      id="boton"
      class="mx-auto"
      large
      outlined
      rounded
      color="white"
      @click.stop="dialog = true"
    >Iniciar Sesión</v-btn>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import firebase from "firebase";

export default {
  name: "Home",
  data() {
    return {
      dialog: false,
      showPassword: false,
      usuario: {
        email: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapState(["currentUser", "apod"])
  },
  methods: {
    ...mapActions(["updateUser", "getApod"]),
    login(e) {
      e.preventDefault();
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario.email, this.usuario.password)
        .then(user => {
          console.log(user);
          let usuario = this.usuario.email;
          this.updateUser(usuario);
          this.$router.push("/apod");
          alert("Te has registrado con éxito!");
        })
        .catch(() => {
          this.updateUser(null);
          alert("¡Error al iniciar sesión!");
        });
    }
  },
  created() {
    this.getApod();
  }
};
</script>

<style scoped>
#home {
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: bottom !important;
  min-height: 100% !important;
}
#boton {
  display: flex;
  margin: 300px;
}
</style>
