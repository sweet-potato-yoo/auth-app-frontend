<template>
    <div class="input-text">
        <label class="label">{{ props.label }}</label>
        <input :type="props.inputType" class="inp" v-model="inputValue" :placeholder="props.placeholder" @input="onInput" />
    </div>
</template>
<script setup lang="ts">
import { InputProps } from '../types/index';
import { ref } from 'vue';
const props = defineProps<InputProps>();
const inputValue = ref<string | number>('');
const emit = defineEmits(['onValueChange']);

const onInput = () => {
    emit('onValueChange', inputValue.value);
}
</script>
<style scoped lang="scss">
@import '@/app/assets/main.scss';
.input-text {
    gap: 8px;
    display: flex;
    flex-direction: column;
}
.label, .plain-text {
    @include font-size-mix;
    color: $accent-color;
}
.inp {
    height: 48px;
    border-radius: 12px;
    padding-left: 15px;
    width: calc(100% - 15px);
    border: 0.5px $primary-color solid;
    border-color: $primary-color;
    @include font-size-mix;
    color: $accent-color;
    outline: none;
    background-color: transparent;
    transition: all ease-in-out 0.15s;
    &::placeholder {
        color: #8897AD;
    }
    &:focus {
        border-color: $accent-color;
    }
    @media only screen and (max-width: 1240px) {
        height: 42px;
    }
}
</style>