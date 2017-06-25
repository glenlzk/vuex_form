<template>
  <div id="app">
    <headTop></headTop>
    <!--<img src="./assets/logo.png" class="bg-test">-->
    <!--<div class="keylist">-->
      <!--<router-link to="/keylist">keylist</router-link>-->
    <!--</div>-->
    <router-view ></router-view>
  </div>
</template>

<script>

  import headTop from './components/header/header';
  import Hello from './components/Hello';
  import Test from './components/test';
  import Formtab from './components/form';
  import { getUserList } from './service/index.js';

  require('./common/css/base.less');

  export default {
    name: 'app',
    data() {
        return {
          items: [
            {'text': 'props01'},
            {'text': 'props02'},
            {'text': 'props03'},
            {'text': 'props04'},
            {'text': 'props05'}
          ]
        }
    },
    components:{
      headTop,
      Hello,
      Test,
      Formtab
    },
    watch: {
      '$route' (to, from) {
        console.log(to, from);
      },
      profileVue(newVal) {
          console.log('父组件profileVue：', newVal);
      },
      price(newVal) {
         console.log('父组件app：', newVal);
      }
    },
    mounted() {
      getUserList().then((res) => {
          console.log('成功回调12：', res);
      }, (error) => {
        console.log('失败回调12：', error);
      });
    },
    methods: {}
  }
</script>

<style lang="less">

  @import './common/css/mixin.less';
  @light-blue: #fcf;

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: @light-blue;
  }
  ul > li {
    .px2rem(height, 50);
    background: #fcf;
    .px2rem(width, 75);
    .px2rem(margin-top, 80);
    color: #000;
    float: left;
    .px2px(font-size, 20)
  }
  .bg-test {
    background: #fcf;
  }
  .box-down {
    .border-1px(#ccc);
    .border-scale();
  }

</style>
