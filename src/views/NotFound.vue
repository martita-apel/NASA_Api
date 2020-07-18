<template>
  <div class="notfound">
    <h1>La página que estás buscando no existe</h1>
    <v-btn class="boton my-6 mx-auto" to="/">Volver al inicio</v-btn>
  </div>
</template>

<script>
/* import { mapState, mapActions } from "vuex";
 */
export default {
  name: "NotFound",
  data() {
    return {};
  },
};
</script>

<style scoped>
.notfound {
  background-image: linear-gradient(to top, #a3bded 0%, #6991c7 100%);
  justify-content: center;
}
h1 {
  text-align: center;
  font-size: 50px;
  color: white;
  margin: 150px 0 20px 0;
}
.boton {
  display: flex;
  width: fit-content;
  margin: auto;
  margin-bottom: 150px;
}
</style>
