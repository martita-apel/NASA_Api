import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    API_KEY: "w3E3ZhsKDuZXQKZbgGJQUfS3FbtRo8kyYzznfpgr",
    currentUser: undefined,
  },
  mutations: {
    UPDATE_CURR_USER(state, user) {
      state.currentUser = user;
    },
  },
  actions: {
    updateUser({ commit }, user) {
      return new Promise((resolve, reject) => {
        try {
          commit("UPDATE_CURR_USER", user);
          resolve(user);
        } catch (e) {
          reject(e);
        }
      });
    },
    /* getApod({}) {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=API_KEY");
    }, */
  },
});
