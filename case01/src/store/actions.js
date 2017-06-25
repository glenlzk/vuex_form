/**
 * Created by lenovo on 2017/6/13.
 */


export default {
  incrementAsync ({ commit }, payload) {
    setTimeout(() => {
      commit('increment', payload);
    }, 1000)
  }
};
