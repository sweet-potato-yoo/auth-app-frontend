<script setup lang="ts">
import InputText from '@/shared/ui/InputText.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

const email = ref<string>('');
const password = ref<string>('');
const error = ref<string | null>(null);

const onSign = () => {
    const formData = new URLSearchParams();
    formData.append('username', email.value);
    formData.append('password', password.value);
    try {
        fetch('http://localhost:8000/token', {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        }).then(async (res) => {
            let data = await res.json();
            if (res.status === 200) {
                store.commit('setToken', data.access_token);
                router.replace('/main');
            } else {
                error.value = 'Error: ' + (Array.isArray(data.detail) ? data.detail[0].msg : data.detail);
            }
        })
    } catch(err) {
        console.error('error', err)
    }
}


const onEmailChange = (value: string) => {
    email.value = value;
}

const onPasswordChange = (value: string) => {
    password.value = value;
}
</script>
<template>
    <div class="auth">
        <div class="auth-content">
            <div class="text-div">
                <p class="h1">Welcome Back  👋</p>
                <p class="plain-text">Today is a new day. It's your day. You shape it. 
                Sign in to start managing your projects.</p>
                <p v-if="error" class="error">{{ error }}</p>
            </div>
            <div class="content-div">
                <InputText :label="'Email'" :input-type="'email'" :placeholder="'Example@email.com'" @onValueChange="onEmailChange" />
                <InputText :label="'Password'" :input-type="'password'" :placeholder="'At least 8 characters'" @onValueChange="onPasswordChange" />
                <div class="forgot-password">
                    <p>Forgot Password?</p>
                </div>
                <button class="btn dark" @click="onSign">Sign in</button>
            </div>
            <div class="content-div">
                <div class="overline-div">
                    <p class="overline">Or</p>
                </div>
                <div class="sign-btns">
                    <button class="btn sign-with"><img src="@/app/assets/Google.svg" class="btn-icon" />Sign in with Google</button>
                    <button class="btn sign-with"><img src="@/app/assets/Facebook.svg" class="btn-icon" />Sign in with Facebook</button>
                </div>
            </div>
            <div class="sign-up">Don't you have an account? <p class="link">Sign up</p></div>
            <p class="rights">© 2026 ALL RIGHTS RESERVED</p>
        </div>
    </div>
</template>
<style lang="scss">
@import './style';
</style>