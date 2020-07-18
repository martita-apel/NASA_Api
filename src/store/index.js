import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    API_KEY: "w3E3ZhsKDuZXQKZbgGJQUfS3FbtRo8kyYzznfpgr",
  },
  mutations: {},
  actions: {
    getApod() {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=API_KEY");
    },
  },
  modules: {},
});
