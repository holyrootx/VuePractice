<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    {{ message }}
    <HiPage :localId="localId"></HiPage>
    <UserListPage></UserListPage>
    <MemoDraftLesson
      v-model="memoContent"
      
      @clear-memo="clearMemo"
    />
  </div>
</template>

<script>
import HiPage from './components/HiPage.vue';
import UserListPage from './components/UserListPage.vue';
import MemoDraftLesson from './views/MemoDraftLesson.vue';

export default {

  components : {
    HiPage,
    UserListPage,
    MemoDraftLesson,

  },

  data() {
    return {
      message : "MESSAGE !!!!",
      localId : "52676",
      memoContent : "",
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
  methods : {
    clearMemo() {
      this.memoContent = "";
      console.log("부모에서 이벤트 전파 확인 후 clearMemo메서드 실행");
    },
    changeMemo(newValue) {
      this.memoContent = newValue;
      console.log(newValue);
    }
  }
    
}
</script>

<style>

</style>
