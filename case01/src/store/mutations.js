/**
 * Created by lenovo on 2017/6/13.
 */

import mu_type from './mutation-types';

export default {
  increment (state, payload) {
    // 变更状态
    state.count +=  payload.amount;
    console.log('increment: ', state.count);
  },
  [mu_type.some_mutation] (state, payload) {
    console.log('glen: ', state.count + payload.amount);
  },
  updateMessage(state, payload) {
    state.obj.message = payload;
    console.log('state.obj.message: ', state.obj.message);
  }
};
