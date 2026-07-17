<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    {{ message }}
    <HiPage :localId="localId"></HiPage>
  </div>
</template>

<script>
import HiPage from './components/HiPage.vue';



export default {

  components : {
    HiPage,
  },

  data() {
    return {
      message : "MESSAGE !!!!",
      localId : "52676",
    }
  },
  beforeCreate() {
    console.log(`beforeCreate`);
  },
  created() {
    console.log(`created`);
  },
  mounted()  {
    console.log(`mounted`);
    this.message = 'Hello Vue!!!'; // message의 값을 변경한다. 
  },
  updated() {
    console.log(`updated`);
  },
    
}
</script>

<style>

</style>
