import { createRouter, createWebHistory } from 'vue-router';
// import { createRouter, createWebHashHistory } from 'vue-router'; 리엑트와 비슷 이거 쓸거면 밑에 있는 라우터 함수에 히스토리 수정해야해요
import HomeView from '@/views/HomeView.vue';
import ProductView from '@/views/ProductView.vue';
import CartView from '@/views/CartView.vue';
import CheckoutView from '@/views/CheckoutView.vue';
import ContactView from '@/views/ContactView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/product', component: ProductView },
  { path: '/cart', component: CartView },
  { path: '/checkout', component: CheckoutView },
  { path: '/contact', component: ContactView },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
