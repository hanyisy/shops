<template>
  <div>
    <h2>🛒 장바구니</h2>
    <div v-if="cart.length === 0" class="cartText">
      <div>꒰՞ °ᗝ°՞꒱.ᐟ.ᐟ</div>
      <!-- <div>( ˙ ° ˙)˙ㅿ˙)˙▫︎˙)˙ ¯ ˙)</div> -->
      <p>장바구니가 비어 있습니다.</p>
      <router-link to="/product">장바구니 채우러 가기</router-link>
    </div>

    <div v-else class="listBoxs">
      <div
        v-for="item in cart"
        :key="item.id"
        class="cart-item"
      >
        <img
          :src="item.image"
          :alt="item.name"
        >
        <h3>{{ item.name }}</h3>
        <p>가격: {{ item.price.toLocaleString() }}원</p>
        <p>수량: {{ item.quantity }}</p>

        <button @click="removeFromCart(item.id)">
          🗑️ 삭제
        </button>
      </div>
      <button @click="gorec()" class="butt">결제하러 가기!</button>
    </div>
  </div>
</template>

<script setup>
// ✅ 부모 컴포넌트에서 받은 props 정의
defineProps(["cart", "removeFromCart"]);
const gorec = ()=>{
    alert("아직 구매가능 기한이 아닙니다. (◞‸◟；)")
}
</script>

<style scoped>
h2{text-align: center; margin-bottom: 2rem;}
.cartText{
  width: 80%; margin: auto;
}
.cartText>div{
  text-align: center; font-size: 2.5rem;
}
.cartText>p{
  text-align: center; font-size: 1rem;
}
.cartText>a{
  width: 10rem; height: 2rem; display: block;
  text-decoration: none; text-align: center; align-content: center;
  border-radius: 10px; background-color: #2894a7;
  margin: auto; color: white;
}
.cartText>a:hover{
  background-color: #215188;
}
.listBoxs{width: 80%; margin: auto;}
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
}
.cart-item img {
  width: 90px;
  height: auto;
}
button {
  background: red;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
}
.butt{
    margin: auto; width: 10rem; height: 2rem; display: block;
    background-color: #2894a7; color: white;
    border: none; border-radius: 10px; cursor: pointer;
}
.butt:hover{
    background-color: #215188;
}
</style>
