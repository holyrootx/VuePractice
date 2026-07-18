<template>
  <div>
    <h1>지역 선택</h1>

    <label for="city">
      도시
    </label>

    <select
      id="city"
      v-model="selectedCity"
    >
      <option value="">
        선택하세요
      </option>

      <option value="서울">
        서울
      </option>

      <option value="인천">
        인천
      </option>
    </select>

    <p>
      선택한 도시: {{ selectedCity }}
    </p>

    <ul>
      <li
        v-for="district in districtList"
        :key="district"
      >
        {{ district }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DistrictLoadLesson',

  data() {
    return {
      selectedCity: '',
      districtList: []
    };
  },

  watch: {
    selectedCity(newValue, oldValue) {
      console.log('이전 도시:', oldValue);
      console.log('새 도시:', newValue);

      this.loadDistrictList(newValue);
    }
  },

  methods: {
    loadDistrictList(city) {
      if (city === '서울') {
        this.districtList = [
          '강남구',
          '마포구',
          '송파구'
        ];

        return;
      }

      if (city === '인천') {
        this.districtList = [
          '남동구',
          '부평구',
          '연수구'
        ];

        return;
      }

      this.districtList = [];
    }
  }
};
</script>