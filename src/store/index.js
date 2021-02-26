import Vue from "vue";
import Vuex from "vuex";
import {API} from "../services/API"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    charactersList:[]
  },
  getters:{
    charactersList: state => {
      return state.charactersList;
    },
    character: state => id => {
      return state.charactersList.find(character => character.id === id);
    }
  },
  mutations: {
    fillCharactersList(state, fetchCharactersAction){
      state.charactersList = fetchCharactersAction
    }
  },
  actions: {
    fetchCharacters: async function({commit}){

      const rangeCharacter = () => {       
        const randomic = () => parseInt(Math.random() * (493 - 1) + 1)
        return Array(64).fill(0).reduce(item => [ ...item, randomic()], []).toString()
      }

      const res = await API.getCharacters(rangeCharacter());
      const characters = await res.data;
      commit('fillCharactersList',characters)
    }
  },
  modules: {},
});
