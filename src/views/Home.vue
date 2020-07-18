<template>
  <div id="home">
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="300">
        <div ref="form" :model="usuario">
          <v-card
            id="login_card"
            class="white py-8 px-10 rounded-xl"
            max-width="380"
          >
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

            <v-btn
              id="ingresar_boton"
              type="submit"
              color="warning"
              @click="login"
              >INGRESAR</v-btn
            >
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
      >Iniciar Sesión</v-btn
    >
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
        password: "",
      },
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    ...mapActions(["updateUser"]),
    login(e) {
      e.preventDefault();
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario.email, this.usuario.password)
        .then((user) => {
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
    },
    /* noRegister() {
      this.$router.push("/login");
    }, */
  },
};
</script>

<style scoped>
#home {
  background-image: url("https://www.advancedsciencenews.com/wp-content/uploads/2020/06/graham-holtshausen-fUnfEz3VLv4-unsplash.jpg");
  background-size: cover;
  min-width: 100%;
  min-height: 670px;
}
#boton {
  display: flex;
  margin-top: 300px;
}
</style>
