/**
 * Created by lenovo on 2017/6/13.
 */

import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import modules from './modules';

Vue.use(Vuex);

const state = {
  count:100,
  user_name: 'wesdg',
  todos: [
    { id: 1, text: 'id+1', done: true },
    { id: 2, text: 'id+2', done: false }
  ],
  hotelObj: {
    smallRooms: 234,
    bigRooms: 456
  },
  obj: {
    message: 'state-message'
  }
};

export default new Vuex.Store({
  modules,
  state,
  getters,
  actions,
  mutations
});
