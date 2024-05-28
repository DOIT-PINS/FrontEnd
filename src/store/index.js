import { createStore } from 'vuex';

import authModule from './modules/auth/index.js';


const store = createStore({
  namespaced:true,
  modules: {
    auth: authModule,
  },
  state() {
    return {
      version: '1.0.0'
    };
  },
});

export default store;
