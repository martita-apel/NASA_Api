<template>
  <div class="apod">
    <v-row class="calendar" justify="center">
      <v-col>
        <v-date-picker
          v-model="date"
          :max="today"
          color="purple"
          header-color="black"
          elevation="15"
          class="mb-4 calen"
          @click:date="getDate"
        ></v-date-picker>
      </v-col>

      <v-col>
        <v-card max-width="500" class="mx-2">
          <v-img
            v-show="apod.media_type == 'image'"
            max-height="500"
            class="white--text align-end"
            :src="apod.url"
          >
            <v-card-title>{{apod.title}}</v-card-title>
          </v-img>
          <iframe
            v-show="apod.media_type == 'video'"
            :src="apod.url"
            frameborder="0"
            width="500"
            height="300"
          ></iframe>

          <v-card-subtitle class="pb-0">{{apod.date}}</v-card-subtitle>

          <v-card-text class="text--primary parrafo">
            <div>{{apod.explanation}}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Apod",
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      today: new Date().toISOString().substr(0, 10),
    };
  },
  computed: { ...mapState(["apod"]) },
  methods: {
    ...mapActions(["getApod"]),
    getDate() {
      this.getApod(this.date);
    },
  },
  created() {
    this.getApod();
  },
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
.calen {
  display: flex;
  object-fit: contain;
  height: fit-content;
  margin: 0 auto;
}
.parrafo {
  max-width: 500px;
  max-height: 70px;
  /* white-space: nowrap; */
  overflow-y: scroll;
  text-overflow: ellipsis;
  margin: 10px 0 15px 0;
}
</style>
