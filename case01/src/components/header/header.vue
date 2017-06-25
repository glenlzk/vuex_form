<template>
  <header id='head_top'>
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈" fixed >
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </header>
</template>

<script>



  export default {
    data(){
      return{

      }
    },
    created(){

    },
    mounted(){

    },
    props: [],
    computed: {
    },
    methods: {
    },

  }

</script>

<style lang="less" scoped>

</style>
