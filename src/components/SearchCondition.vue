<template>
  <div class="search-condition">
    <div>
      <label>지역</label>

      <select 
            :value="localId"
            @change="onLocalIdChange"
        >
        <option value="">전체</option>
        <option value="LOCAL-001">서울</option>
        <option value="LOCAL-002">인천</option>
        <option value="LOCAL-003">부산</option>
      </select>
    </div>

    <div>
      <label>사용자명</label>

      <input
        type="text"
        placeholder="사용자명을 입력하세요"
        :value="userName"
        @input="onUserNameInput"
      >
    </div>

    <div>
      <button type="button"
                @click="onSearch"
      >
        조회
      </button>

      <button type="button"
                @click="resetSearchCondition"
        >
        초기화
      </button>
    </div>
  </div>
</template>

<script>
export default {
  
    name: 'SearchCondition',

    props : {
        localId : {
            type : String,
            default : ""
        },
        userName : {
            type : String,
            default : ""
        }
    } ,
    methods : {
        onUserNameInput(event) {
            const newValue = event.target.value;
            this.$emit("update-user-name", newValue);
        },
        onLocalIdChange(event) {
            const newValue = event.target.value;
            this.$emit("update-local-id", newValue);
        },
        onSearch() {
            this.$emit('on-search');
        },
        resetSearchCondition() {
            this.$emit('reset-search-condition');
        }
    }
};
</script>