<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    {{ this.message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message : "MESSAGE !!!!",
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
