import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: undefined,
    apod: [],
    roverData: { photos: [] },
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
      let backup = {
        url:
          "https://apod.nasa.gov/apod/image/2007/NEOWISEBelowBigDipper-7-16-2020-TomMasterson1081.jpg",
      };
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
          commit("CURRENT_APOD", backup);
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
  getters: {
    cameras(state) {
      return state.roverData.photos.map((photo) => {
        return photo.camera.name;
      });
    },
    totalCamera(state, getters) {
      return getters.cameras.reduce((total, camera) => {
        total[camera] = (total[camera] || 0) + 1;
        return total;
      }, {});
    },
  },
});
