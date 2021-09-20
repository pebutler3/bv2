import axios from 'axios';

const BASE_API_URL = 'https://raw.githubusercontent.com/Bounteous-Inc/headless-cms-assessment/main';

const actions = {
  async getRoutes({ commit }) {
    try {
      const { data } = await axios.get(`${BASE_API_URL}/routes.json`);
      const routes = Object.keys(data).map(key => ({
        name: data[key].toLowerCase(),
        route: key,
      }));
      commit('SET_ROUTES', routes);
    } catch (error) {
      commit('SET_ROUTES', null);
    }
  },
  async getBios ({ state, commit }) {
    try {
      const route = state.routes.find(route => route.name === 'bios').route;
      const { data } = await axios.get(`${BASE_API_URL}/${route}.json`);
      commit('SET_BIOS', data);
    } catch (error) {
      console.log(error);
    }
  },
  async getBooks({ state, commit }) {
    try {
      const route = state.routes.find(route => route.name === 'books').route;
      const { data } = await axios.get(`${BASE_API_URL}/${route}.json`);
      commit('SET_BOOKS', data);
    } catch (error) {
      console.log(error);
    }
  },
};

export default actions;
