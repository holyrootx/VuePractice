<template>
  <div>
    <h1>직원 목록 조회</h1>

    <label for="employeeKeyword">
      직원 검색
    </label>

    <input
      id="employeeKeyword"
      v-model="employeeKeyword"
      type="text"
      placeholder="이름 또는 부서를 입력하세요"
    >

    <p>
      조회 결과: {{ filteredEmployeeList.length }}명
    </p>

    <ul>
      <li
        v-for="employee in filteredEmployeeList"
        :key="employee.id"
      >
        {{ employee.name }} / {{ employee.department }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EmployeeFilterLesson',

  data() {
    return {
      employeeKeyword: '',

      employeeList: [
        {
          id: 1,
          name: '김민수',
          department: '개발팀'
        },
        {
          id: 2,
          name: '이서연',
          department: '인사팀'
        },
        {
          id: 3,
          name: '박준호',
          department: '개발팀'
        }
      ]
    };
  },

  computed: {
    filteredEmployeeList() {
      const keyword = this.employeeKeyword.trim();

      if (!keyword) {
        return this.employeeList;
      }

      return this.employeeList.filter((employee) => {
        return (
          employee.name.includes(keyword) ||
          employee.department.includes(keyword)
        );
      });
    }
  }
};
</script>