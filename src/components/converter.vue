<script setup>

import { ref, watchEffect, computed } from 'vue';
//APPELER LE TRUC MODEL VALUE !!!!

const props = defineProps({
    modelValue:{
        type: Number,
        required: true
    },
    symbol:{
        type: String,
        required: false,
        default: ''
    }
})




function round(val) {
    return Math.round(val)
}

function toFarenheit(val) {
    return ((val * 9 / 5) + 32)
}


// const tempCelsius = ref(32);

const emits = defineEmits(
    ['update:modelValue']
);

const value = computed({
    get: () => round(props.modelValue, 2),
    set: val =>  emits('update:modelValue', val)
})

watchEffect(() =>{
    console.log(props.modelValue)
})

</script>

<template>
    <div class="converter">
        <input type="number" v-model="value"> <span> {{ symbol }} </span>
    </div>
</template>

<style>
.converter input{
    width: 60px; margin: 0px 0px 0px 20px;
}
</style>
