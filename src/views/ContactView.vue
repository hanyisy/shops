<template>
    <div>
        <h3>문의함</h3>
        <button @click="gocon()" class="butt">문의하러 가기</button>
    </div>
</template>
<script setup>
const gocon = ()=>{
    alert("아직 문의가능 기한이 아닙니다. (◞‸◟；)");
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