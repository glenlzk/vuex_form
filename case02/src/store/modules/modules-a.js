/**
 * Created by lenovo on 2017/6/15.
 */

export const moduleA = {
  namespaced: true,         //  namespaced: true 的方式使其成为命名空间模块
  state: {
    stateA: 'STATE-A123',    // 模块内的状态已经是嵌套的了，使用 `namespaced` 属性不会对其产生影响
    countA: 2
  },
  mutations: {
    incrementA (state) {       // 传入参数 state
      state.countA += 10;      // 变更状态
      console.log('moduleA: ', state.countA);
    }
  },
  actions: {
    incrementIfOddOnRootSum ({ state, commit, rootState }) {  // dispatch('moduleA/incrementIfOddOnRootSum')
      if (state.countA + rootState.count > 1) {
        console.log('moduleA:actions');
        console.log('rootState:', rootState);
        commit('incrementA')
      };
    }
  },
  getters: {
    sumWithRootCount(state, getters, rootState) { // -> getters['moduleA/sumWithRootCount']
      return state.countA + rootState.count
    }
  }
}
