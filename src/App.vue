<template>
  <div id="app">
    <h2>{{result}}</h2>
    <h2>--------------------------</h2>
    <hello></hello>
  </div>
</template>

<script>
  import hello from './components/Hello.vue'
  import axios from 'axios'
  export default {
    name: 'App',
    data() {
      return {
        result: ''
      }
    },
    components: {
      hello
    },
    create() {
      axios({
        url: 'http://152.136.185.210:7878/api/m5/home/data'
      }).then(res => {
        console.log(res);
        this.result = res;
      })
    }
  }
</script>

<style>
</style>
