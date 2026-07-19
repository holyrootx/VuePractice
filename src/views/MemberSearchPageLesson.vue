<template>
  <div>
    <h1>회원 조회</h1>

    <!-- 조회 조건 영역 -->
    <section>
      <h2>조회 조건</h2>

      <div>
        <label for="memberKeyword">
          이름
        </label>

        <input
          id="memberKeyword"
          v-model.trim="searchCondition.keyword"
          type="text"
          placeholder="회원 이름을 입력하세요"
          @keyup.enter="searchMemberList"
        >
      </div>

      <div>
        <label for="memberStatus">
          회원 상태
        </label>

        <select
          id="memberStatus"
          v-model="searchCondition.status"
        >
          <option value="">
            전체
          </option>

          <option value="ACTIVE">
            사용 중
          </option>

          <option value="INACTIVE">
            사용 중지
          </option>
        </select>
      </div>

      <button
        type="button"
        @click="searchMemberList"
      >
        조회
      </button>

      <button
        type="button"
        @click="resetSearchCondition"
      >
        초기화
      </button>
    </section>

    <hr>

    <!-- 조회 결과 영역 -->
    <section>
      <h2>조회 결과</h2>

      <!-- 1. 조회 중 -->
      <p v-if="loading">
        회원 목록을 조회하고 있습니다.
      </p>

      <!-- 2. 오류 발생 -->
      <p v-else-if="errorMessage">
        {{ errorMessage }}
      </p>

      <!-- 3. 조회 완료지만 결과 없음 -->
      <p v-else-if="searched && memberList.length === 0">
        조회 결과가 없습니다.
      </p>

      <!-- 4. 조회 결과 있음 -->
      <table
        v-else-if="memberList.length > 0"
        border="1"
      >
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>부서</th>
            <th>상태</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="member in memberList"
            :key="member.id"
          >
            <td>{{ member.id }}</td>
            <td>{{ member.name }}</td>
            <td>{{ member.department }}</td>
            <td>{{ getStatusName(member.status) }}</td>
          </tr>
        </tbody>
      </table>

      <!-- 5. 아직 조회 버튼을 누르지 않음 -->
      <p v-else>
        조회 조건을 입력한 후 조회 버튼을 눌러주세요.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MemberSearchPageLesson',

  data() {
    return {
      searchCondition: {
        keyword: '',
        status: ''
      },

      memberList: [],

      loading: false,
      searched: false,
      errorMessage: '',

      originalMemberList: [
        {
          id: 1,
          name: '김민수',
          department: '개발팀',
          status: 'ACTIVE'
        },
        {
          id: 2,
          name: '이서연',
          department: '인사팀',
          status: 'ACTIVE'
        },
        {
          id: 3,
          name: '박준호',
          department: '개발팀',
          status: 'INACTIVE'
        },
        {
          id: 4,
          name: '최지우',
          department: '운영팀',
          status: 'ACTIVE'
        }
      ]
    };
  },

  methods: {
    searchMemberList() {
      this.loading = true;
      this.searched = true;
      this.errorMessage = '';

      // 현재는 실제 API 대신 서버 조회를 흉내 냅니다.
      setTimeout(() => {
        try {
          const keyword = this.searchCondition.keyword;
          const status = this.searchCondition.status;

          this.memberList = this.originalMemberList.filter((member) => {
            const matchesKeyword =
              !keyword ||
              member.name.includes(keyword);

            const matchesStatus =
              !status ||
              member.status === status;

            return matchesKeyword && matchesStatus;
          });
        } catch (error) {
          console.error(error);

          this.memberList = [];
          this.errorMessage =
            '회원 목록을 조회하지 못했습니다.';
        } finally {
          this.loading = false;
        }
      }, 500);
    },

    resetSearchCondition() {
      this.searchCondition.keyword = '';
      this.searchCondition.status = '';

      this.memberList = [];
      this.searched = false;
      this.errorMessage = '';
    },

    getStatusName(status) {
      if (status === 'ACTIVE') {
        return '사용 중';
      }

      if (status === 'INACTIVE') {
        return '사용 중지';
      }

      return '알 수 없음';
    }
  }
};
</script>