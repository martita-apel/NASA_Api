<template>
  <div class="apod">
    <v-row class="calendar" justify="space-around" align="center">
      <v-date-picker v-model="picker" :max="today" header-color="black" elevation="15"></v-date-picker>
      <v-card max-width="500">
        <v-img class="white--text align-end" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
          <v-card-title>Top 10 Australian beaches</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>
        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>
          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Apod",
  data() {
    return {
      picker: null,
      today: new Date().toISOString().substr(0, 10),
    };
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
.calendar {
  margin: 150px 0 50px 0;
}
</style>
