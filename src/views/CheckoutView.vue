<template>
    <div>
        <h3>Event</h3>
        <div class="slidebox">
            <div class="slider">
                <img src="/shops/image/banner2.jpg" alt="banner" class="slide-image" />
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
h3{text-align: center;}
.slidebox{width: 75%; height: 20rem; background-color: antiquewhite; margin: auto; position: relative; overflow: hidden;}
.slider{width: 100%; height: 100%; position: absolute; left: 0; display: flex; justify-content: left; transition: 0.3s;}
.slide-image{width: 100%; height: 100%; object-fit: cover; position: relative;}
</style>