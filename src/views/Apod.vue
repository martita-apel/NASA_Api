<template>
  <div class="apod">
    <h1>¡HOLA!</h1>
    <h2>Esta página está en construcción</h2>
  </div>
</template>

<script>
export default {
  name: "Apod",
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
.apod {
  background-image: linear-gradient(
    to top,
    #fff800 0%,
    #ff1361 35%,
    #44107a 65%,
    #09003d 100%
  );
}
h1 {
  color: white;
  font-weight: 500;
  letter-spacing: 5px;
  font-size: 70px;
  text-align: center;
  margin: 200px 0 10px 0;
}
h2 {
  color: white;
  font-size: 50px;
  text-align: center;
  font-weight: lighter;
  margin: 0 0 200px 0;
}
</style>
