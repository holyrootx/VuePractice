<template>
  <section>
    <h2>고객 목록</h2>

    <ul>
      <li
        v-for="customer in customerList"
        :key="customer.id"
      >
        {{ customer.name }}
      </li>
    </ul>

    <button
      type="button"
      @click="moveDashboard"
    >
      대시보드로 이동
    </button>
  </section>
</template>

<script>
export default {
  name: 'CustomerRouteListLesson',

  data() {
    return {
      customerList: [
        {
          id: 1,
          name: '김민수'
        },
        {
          id: 2,
          name: '이서연'
        }
      ]
    };
  },

  methods: {
    moveDashboard() {
      this.$router.push({
        name: 'dashboard'
      });
    }
  }
};
</script>