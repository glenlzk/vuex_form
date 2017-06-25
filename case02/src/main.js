// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import './config/rem';
import './common/css/index.css';

Vue.config.productionTip = false

Vue.use(MintUI);

router.beforeEach((to, from, next) => {
  console.log('to: ', to);
  console.log('from: ', from);
  console.log('next: ', next);
  next();
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
