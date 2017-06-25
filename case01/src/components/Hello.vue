<template>
  <div class="hello">
    天亮
    <h2>{{profileVue}}</h2>
    <button v-on:click="setProfileVal">设置profile值</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: [
      'profileVue'
  ],
  created() {
  },
  data () {
    return {
      msg: 'Welcome to Your hello components'
    }
  },
  methods: {
     helloFun() {
         console.log('你已触发hello components Fun');
     },
     setProfileVal() {
       console.log('setProfileVal');
       this.profileVue.b = '子组件传递'
       console.log('this.profileVue: ', this.profileVue);
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
