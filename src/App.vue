
<template>
  <AppHeader />
  <div>
    <router-view
      :cart="cart"
      :add-to-cart="addToCart"
      :remove-from-cart="removeFromCart"
    />
  </div>
  <AppFooter />
</template>

<script setup>
import { ref } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

// 장바구니 상태
const cart = ref([]);

// 장바구니에 상품 추가 함수
const addToCart = (product) => {
  const itemIndex = cart.value.findIndex((item) => item.id === product.id);
  if (itemIndex === -1) {
    cart.value.push({ ...product, quantity: product.quantity });
  } else {
    cart.value[itemIndex].quantity += product.quantity;
  }
};

// 장바구니에서 상품 삭제 함수
const removeFromCart = (productId) => {
  cart.value = cart.value.filter((item) => item.id !== productId);
};
</script>
<style>
/* src/assets/main.css */
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap" rel="stylesheet"');

body {
  font-family: "Dosis", sans-serif; margin: 0; padding: 0; font-size: 15px;
}
body>div{
  width: 100%; position: relative;
}
</style>