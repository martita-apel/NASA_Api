import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: undefined,
    apod: "",
    roverData: "",
  },
  getters: {
    camera(state) {
      return state.roverData.photos.map((photos) => {
        return;
      });
    },
  },
  mutations: {
    UPDATE_CURR_USER(state, user) {
      state.currentUser = user;
    },
    CURRENT_APOD(state, apod) {
      state.apod = apod;
    },
    GET_ROVER(state, rover) {
      state.roverData = rover;
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
    getApod({ commit }, date = null) {
      let queryDate = date ? date : new Date().toISOString().substr(0, 10);
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=w3E3ZhsKDuZXQKZbgGJQUfS3FbtRo8kyYzznfpgr&date=${queryDate}`
        )
        .then((response) => {
          console.log(response.data);
          commit("CURRENT_APOD", response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getRover({ commit }, { sol, rover }) {
      axios
        .get(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&page=1&api_key=w3E3ZhsKDuZXQKZbgGJQUfS3FbtRo8kyYzznfpgr`
        )
        .then((response) => {
          console.log(response.data);
          commit("GET_ROVER", response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
});
