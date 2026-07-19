<template>
  <section>
    <h2>관리자 대시보드</h2>

    <p>
      관리자 시스템의 메인 화면입니다.
    </p>

    <button
      type="button"
      @click="moveCustomerPage"
    >
      고객 목록으로 이동
    </button>
  </section>
</template>

<script>
export default {
  name: 'AdminDashboardRouteLesson',

  methods: {
    moveCustomerPage() {
      // 코드에서 페이지 이동
      this.$router.push({
        name: 'customer-list'
      });
    }
  }
};
</script>