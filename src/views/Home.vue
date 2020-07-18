<template>
  <div id="home">
    <Login v-if="currentUser" />
    <v-btn
      v-else
      class="my-10 text-center"
      large
      outlined
      rounded
      color="white"
      @click="noRegister"
      >Registra tu planta</v-btn
    >
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Login,
  },
  data() {
    return {};
  },
  computed: {
    /*     ...mapState(["currentUser", "loading"]),
     */
  },
  methods: {
    ...mapActions("getApod"),
    noRegister() {
      this.$router.push("/login");
    },
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
</style>
