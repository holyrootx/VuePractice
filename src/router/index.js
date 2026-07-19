import Vue from 'vue';
import VueRouter from 'vue-router';
import AdminDashboardRouteLesson from '@/views/AdminDashboardRouteLesson.vue';
import CustomerRouteListLesson from '@/views/CustomerRouteListLesson.vue';

// Vue에 Vue Router 플러그인 등록
Vue.use(VueRouter);

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: AdminDashboardRouteLesson
  },
  {
    path: '/customers',
    name: 'customer-list',
    component: CustomerRouteListLesson
  }
];

const router = new VueRouter({
  routes
});

export default router;