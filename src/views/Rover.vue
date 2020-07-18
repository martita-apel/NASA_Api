<template>
  <div class="apod">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
/* import { mapState, mapActions } from "vuex";
 */
export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    /*     ...mapState(["currentUser"]),
     */
  },
  methods: {
    /*     ...mapActions(["updateUser"]),
     */
    /* noRegister() {
      this.$router.push("/login");
    }, */
  },
};
</script>

<style scoped>
.apod {
  background-image: linear-gradient(to top, #0250c5 0%, #d43f8d 100%);
}
h1 {
  color: white;
  margin: 300px 0;
}
</style>
