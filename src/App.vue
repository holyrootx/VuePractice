<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message : "MESSAGE !!!!",
    }
  },
  beforeCreate: () => {console.log(`beforeCreate`);},
  created: () => {console.log(`created`);},
  mounted: () => {console.log(`mounted`);},
  updated: () => {console.log(`updated`);},
    
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
