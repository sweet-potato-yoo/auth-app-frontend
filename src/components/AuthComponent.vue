<script setup>
import { ref } from 'vue';
const email = ref(null);
const password = ref(null);
</script>
<template>
    <div class="auth">
        <div class="auth-content">
            <div class="text-div">
                <p class="h1">Welcome Back  👋</p>
                <p class="plain-text">Today is a new day. It's your day. You shape it. 
                Sign in to start managing your projects.</p>
            </div>
            <div class="content-div">
                <div class="input-text">
                    <label class="label">Email</label>
                    <input type="email" class="inp" v-model="email" placeholder="Example@email.com" />
                </div>
                <div class="input-text">
                    <label class="label">Password</label>
                    <input type="password" class="inp" v-model="password" placeholder="At least 8 characters" />
                </div>
                <div class="forgot-password">
                    <p>Forgot Password?</p>
                </div>
                <button class="btn dark">Sign in</button>
            </div>
            <div class="content-div">
                <p class="overline">Or</p>
                <div class="sign-btns">
                    <button class="btn sign-with"><img src="../assets/Google.svg" class="btn-icon" />Sign in with Google</button>
                    <button class="btn sign-with"><img src="../assets/Facebook.svg" class="btn-icon" />Sign in with Facebook</button>
                </div>
            </div>
            <div class="sign-up">Don't you have an account? <p class="link">Sign up</p></div>
        </div>
    </div>
</template>
<style lang="scss">
.auth {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 1250px) {
        width: 40%;
    }
}
.auth-content {
    max-width: 350px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 48px;
}
.text-div {
    display: flex;
    flex-direction: column;
    gap: 28px;
}
.h1 {
    font-width: 600;
    font-size: 36px;
    margin: 0;
}
.input-text {
    gap: 8px;
    display: flex;
    flex-direction: column;
}
.content-div {
    display: flex;
    flex-direction: column;
    gap: 24px;
}
.label {
    font-size: 16px;
    color: #0C1421;
}
.inp {
    height: 48px;
    border-radius: 12px;
    padding-left: 15px;
    width: calc(100% - 15px);
    border: 0.5px #D4D7E3 solid;
    font-size: 16px;
    color: #8897AD;
    outline: none;
    background-color: transparent;
    &::placeholder {
        color: #8897AD;
    }
}
.btn {
    height: 52px;
    border-radius: 12px;
    width: 100%;
    font-size: 16px;
    border: none;
}
.dark {
    background-color: #162D3A;
    color: white;
}
.sign-with {
    background-color: #F3F9FA;
    color: #313957;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.btn-icon {
    width: 28px;
    height: 28px;
}
.forgot-password {
    width: 100%;
    text-align: right;
    color: #1E4AE9;
    font-size: 16px;
}
.overline {
    text-align: center;
}
.sign-btns {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.sign-up {
    display: flex;
    flex-direction: row;
    gap: 5px;
    justify-content: center;
}
.link {
    color: #1E4AE9;
    cursor: pointer;
}
</style>