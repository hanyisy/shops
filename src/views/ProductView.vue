<template>
  <div class="product-container">
    <h2>상품 목록</h2>
    <div class="product-list">
      <div 
        v-for="product in products" 
        :key="product.id" 
        class="product-card" 
      >
        <img :src="product.image" :alt="product.name" class="product-image" />
        <h3>{{ product.name }}</h3>
        <p>가격: {{ product.price.toLocaleString() }}원</p>

        <!-- 수량 선택 -->
        <div class="quantity-control">
          <button @click.stop="decreaseQuantity(product)">-</button>
          <span>{{ product.quantity }}</span>
          <button @click.stop="increaseQuantity(product)">+</button>
        </div>

        <!-- 장바구니 버튼 (항상 하단에 위치) -->
        <button class="cart-button" @click.stop="addToCart(product)">장바구니 추가</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const laptopImage = "/image/note.jpg";
const phoneImage = "/image/ph.png";
const headphoneImage = "/image/tab.jpg";


// 부모 컴포넌트에서 `addToCart` 함수 받아오기
defineProps(["addToCart"]);

// 상품 데이터
const products = ref([
  { id: 1, name: "노트북", price: 1200000, image: laptopImage, quantity: 1, isSelected: false },
  { id: 2, name: "스마트폰", price: 800000, image: phoneImage, quantity: 1, isSelected: false },
  { id: 3, name: "태블릿", price: 150000, image: headphoneImage, quantity: 1, isSelected: false },
]);

// 상품 선택 토글 함수
// const toggleSelection = (product) => {
//   product.isSelected = !product.isSelected;
// };

// 수량 조절 함수
const increaseQuantity = (product) => product.quantity++;
const decreaseQuantity = (product) => product.quantity > 1 && product.quantity--;
</script>

<style scoped>
/* ✅ 전체 상품 목록을 감싸는 컨테이너 (스크롤 추가) */
.product-container {
  height: 80vh; /* 화면 높이의 80% 사용 */
  overflow: auto; /* 스크롤 자동 생성 */
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ✅ 상품 목록 (스크롤이 필요할 경우 자동 생성) */
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  /* overflow-y: auto; ✅ 세로 스크롤 가능 */
  max-height: 80vh; /* 상품 목록의 높이를 제한하여 스크롤 생성 */
  padding: 10px;
}

/* 상품 카드 스타일 */
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  width: 220px;
  min-height: 350px; /* ✅ 상품 크기 유지 */
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
  background: white;
  justify-content: center; /* ✅ 요소들을 위아래 정렬 */
  /* flex-grow: 1; ✅ 버튼이 항상 보이도록 카드 크기 조절 */
}


/* ✅ 이미지 크기 조절 */
.product-image {
  width: 100%;
  max-height: 100px;
  object-fit: contain;
  margin: 10px 0px;
}

/* 수량 조절 스타일 */
.quantity-control {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin: 5px 0;
}

/* ✅ 장바구니 버튼 항상 하단에 고정 */
.cart-button {
  padding: 5px;
  background: #2894a7;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  width: 80%;
  height: 40px;
  margin-top: 1rem; /*  ✅ 버튼이 항상 아래로 이동 */
}

.cart-button:hover {
  background: #215188;
}

/* 수량 조절 버튼 */
.quantity-control button {
  background: #007bff;
  color: white;
  border: none;
  width: 1.5rem; height: 1.5rem;
  cursor: pointer;
  border-radius: 5px;
}

.quantity-control button:hover {
  background: #0056b3;
}
</style>
