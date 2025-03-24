<template>
    <div>
        <div class="bannerBox">
            <img :src="bannerimage" alt="banner" class="banner-image" />
        </div>
        <div class="gopro"><router-link to="/product">원하시는 상품을 찾아보세요 →</router-link></div>
    </div>
</template>
<script setup>
import bannerimage from "/image/banner.jpg";
</script>
<style scoped>
.bannerBox{width: 80%; height: 27rem; margin: auto; margin-top: 2rem;}
.banner-image{
    width: 100%; height: 100%; object-fit: cover; display: block;
}
.gopro{width: 80%; margin: auto; display: flex; justify-content: end;}
.gopro a{color: darkblue; font-size: 20px; text-decoration: none;}
</style>