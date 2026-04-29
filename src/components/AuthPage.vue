<script setup>
import AuthComponent from './AuthComponent.vue';

</script>
<template>
    <div class="main-auth">
        <AuthComponent />
        <div class="background">
            <img src="../assets/Art.png" class="art" />
        </div>
    </div>
</template>
<style>
.main-auth {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
}
.background {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
}
.art {
    width: 90%;
    height: 95%;
    border-radius: 20px;
}
</style>