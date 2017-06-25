<template>
  <div>
    <div class="imgas-brand">
      {{'计数：' + stateA}}
    </div>
    <div class="">
      {{'message：' + message}}
    </div>
    <div>
      <input type="text" v-model = "message">
    </div>
  </div>
</template>

<script>

  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
  import store from '../../store';
  import Vue from 'vue';

  export default {
    data(){
      return{
        username: 'glen',
        localCount: 100,
        obj: {
            home: 12123
        }
      }
    },
    created(){
      /*this.SOME_MUTATION({
          amount: 300
      });
      this.$store.dispatch('incrementAsync', {
        amount: 200
      })*/

      // console.log('this.$store.state.moduleA.stateA: ', this.$store.state.moduleA.stateA);
      // 以下说明：
      // 默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——
      // 这样使得多个模块能够对同一 mutation 或 action 作出响应
      // 即是可以直接通过通过this.$store进行调用，而不用this.$store.state.moduleA.stateA
      // 可以通过打印 this.$store 查看对应的方法属性

      // this.$store.commit('moduleA/incrementA');
      // this.$store.dispatch('moduleA/incrementIfOddOnRootSum');
      // console.log('this.$store.getters[\'moduleA/sumWithRootCount\']: ', this.$store.getters['moduleA/sumWithRootCount']);

      this['moduleA/incrementIfOddOnRootSum']();
      this.incrementAsync({
          amount: 122
      });
      console.log('this.$store.state.obj.message: ', this.$store.state.obj.message );


    },
    mounted(){
    },
    components:{},
    computed: {
      ...mapState([
          'count','user_name'
      ]),
      ...mapState('moduleA', {
        stateA: state => state.stateA,
        countA: state => state.countA
      }),
      ...mapGetters([
          'doneTodos', 'addMoreOne'
      ]),
      message: {
        get() {
          return this.$store.state.obj.message;
        },
        set(val) {
            this.$store.commit('updateMessage', val);
        }
      },
      localComputed () { return 'asdfas' }
    },
    watch: {
      message(newVal, oldVal) {
          console.log('message: ', 'newVal: ' + newVal, 'oldVal: ' + oldVal);
      }
    },
    methods: {
      ...mapMutations([
        'increment', 'SOME_MUTATION' // 映射 this.increment() 为 this.$store.commit('increment')
      ]),
      ...mapActions([
        'moduleA/incrementIfOddOnRootSum',
        'incrementAsync'
      ]),
      ...mapActions([
        'incrementAsync'
      ])
    },
  }

</script>

<style lang="less" scoped>


  @import '../../common/css/mixin.less';

  .imgas-brand {
    .px2rem(margin-top, 80);
    .px2rem(width, 60);
    .px2rem(height, 36);
    .bg-image('../../page/hotel/brand');
    background-size: 100% 100%;
    background-position: left top;
    background-repeat: no-repeat;
  }
  input {
    border: 1px solid #000;
  }

</style>
