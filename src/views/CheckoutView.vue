<template>
    <div>
        <h3>결제를 진행하세요</h3>
        <button @click="gorec()" class="butt">결제하러 가기!</button>
    </div>
</template>
<script setup>
const gorec = ()=>{
    alert("아직 구매가능 기한이 아닙니다. (◞‸◟；)")
}
</script>
<style scoped>
h3{text-align: center;}
button{
    margin: auto; width: 10rem; height: 2rem; display: block;
    background-color: #2894a7; color: white;
    border: none; border-radius: 10px; cursor: pointer;
}
button:hover{
    background-color: #215188;
}
</style>