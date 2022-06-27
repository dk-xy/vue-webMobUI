<script setup>
import { tasks } from '../transit.js';

const props = defineProps({
    index:{
        type: Number,
        required: true
    },
});



function removeFav(){
    console.log(props.index)
     console.log(tasks.value)
     tasks.value.splice(props.index, 1); // 2nd parameter means remove one item only

     }
</script>

<template>
<button @click="removeFav">X</button>
</template>

<style>


</style>