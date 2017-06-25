/**
 * Created by lenovo on 2017/6/13.
 */


export default {
  doneTodos: state => {     // 第一个参数是:state
    return state.todos.filter(todo => todo.id == 1)
  },
  addMoreOne: (state, getters) => {  // 第二个参数是:getters
    return state.count + getters.doneTodos.length;
  }
};
