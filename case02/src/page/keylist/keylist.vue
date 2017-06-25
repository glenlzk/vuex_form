<template>
  <div> keylist动态路由匹配:
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    created(){
      console.log('glen: ', this.$route);
    },
    watch: {
      '$route' (to, from) {
        console.log(to, from);
      }
    },
    mounted(){

    },
    computed: {

    },
    methods: {

    },

  }

</script>

<style lang="less" scoped>


</style>
