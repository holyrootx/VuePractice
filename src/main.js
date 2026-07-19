// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router, // 이 코드를 넣어야 전체 컴포넌트에서 다음을 사용할 수 있습니다.
          // this.$router
          // this.$route

  render: (createElement) => {
    return createElement(App);
  }
}).$mount('#app');