<template>
  <div>
    <h1>사용자 조회</h1>

    <SearchCondition 
        :localId="searchCondition.localId"
        :userName="searchCondition.userName" 
        @update-user-name="updateUserName"
        @update-local-id="updateLocalId"
        @on-search="search"
        @reset-search-condition="resetSearchCondition"
        />
  </div>
</template>

<script>
import SearchCondition from '@/components/SearchCondition.vue';

export default {
  name: 'UserListPage',

  components: {
    SearchCondition
  },

  data() {
    return {
      searchCondition: {
        localId: '',
        userName: ''
      },

      userList: [],
      loading: false
    };
  },
  methods : {
    updateUserName(newValue) {
        this.searchCondition.userName = newValue;
        console.log(`userName : ${newValue}`);
    },
    updateLocalId(newValue) {
        this.searchCondition.localId = newValue;
        console.log(`localId : ${newValue}`);
    },
    search() {
        console.log("조회 버튼 클릭!!!");
    },
    resetSearchCondition() {
        const initValue = "";
        this.searchCondition.userName = initValue;
        this.searchCondition.localId = initValue;
        console.log("초기화 ::::: ");

    }
  }
};
</script>