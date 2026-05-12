<script setup>
import AuthComponent from './AuthComponent.vue';

</script>
<template>
    <div class="main-auth">
        <AuthComponent />
        <div class="background"></div>
    </div>
</template>
<style lang="scss">
.main-auth {
    width: calc(100vw - 40px);
    height: calc(100vh - 40px);
    display: flex;
    flex-direction: row;
    padding: 20px;
    @media only screen and (max-width: 600px) {
        flex-direction: column-reverse;
        align-items: center;
    }
}
.background {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 50%;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    padding: 20px;
    background-image: url('../assets/Art.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    border-radius: 20px;
    @media only screen and (max-width: 1240px) {
        background-size: contain;
    }
    @media only screen and (max-width: 600px) {
        background-size: cover;
        max-width: 100%;
        max-height: 250px;
    }
}
.art {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    aspect-ratio: 1076 / 200;
}
</style>