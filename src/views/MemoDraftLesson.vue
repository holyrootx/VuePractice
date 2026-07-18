/**
 * 메모 입력창
 * → 사용자가 입력
 * → Vue 데이터 변경
 * →  아래 미리보기 갱신
 */

 <template>
  <div>
    <h1>메모 작성</h1>

    <label for="memoContent">
      메모 내용
    </label>

    <input
        id="memoContent"
        :value="value"
        @input="changeMemo"
        type="text"
        placeholder="메모를 입력하세요"
    >

    <p>
      입력 중인 메모: {{ memoContent }}
    </p>

    <button
      type="button"
      @click="clearMemo"
    >
      메모 지우기
    </button>    
  </div>
</template>

<script>
export default {
  name: 'MemoDraftLesson',

//   model: {
    // prop: 'memoContent',
    // event: 'change-memo'
//   },

  props: {
    memoContent: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
  },

  methods: {
    changeMemo(event) {
        this.$emit("input",event.target.value);
        // this.$emit("change-memo",event.target.value);

    },
    clearMemo(event) {
      this.$emit(
        'clear-memo',
        event.target.value
      );
      console.log("자식에서 이벤트 전파 함수 실행 ");
    }
  },
};
</script>