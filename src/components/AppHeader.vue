<template>
    <div class="head">
        <h1>MolRo</h1>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/product">Product</router-link>
            <router-link to="/cart">장바구니</router-link>
            <router-link to="/checkout">결제</router-link>
            <router-link to="/contact">문의</router-link>
        </nav>
    </div>
</template>

<script setup>
//defineProps(["cart"]);//vue3 에서만 사용가능한 기능 ({{ cart.lengh }});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&family=Gowun+Dodum&display=swap");
.head{
    width: 100vw; text-align: center; position: relative; 
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    margin: auto; padding: 0;
}
h1{color: deepskyblue; text-align: center; }
nav{
    width: 100vw; height: 2.5rem; display: flex; justify-content: center; gap: 15px; background-color: dodgerblue;
    align-items: center;
}
nav>a{
    display: inline-block; text-decoration: none; color: white; width: 5rem;
    padding: 0px 10px; font-family: "Gowun Dodum", sans-serif; font-weight: 400;
    border-bottom: 1px solid rgba(255, 255, 255, 0); transition: 0.3s; text-align: center;
}
nav>a:hover{
    border-bottom: 1px solid white;
}
</style>