<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import headpage from './components/headpage.vue'
import oneNav from './components/nav.vue'
import converter from './components/converter.vue'
import favs from './components/favs.vue'
import appSchedule from './components/appSchedule.vue'
import { onHome, onConverter, onFav, onHoraire } from './transit.js';
import { ref, computed } from 'vue';




//PARTIE CONVERTER-------------------------

const baseUnit = ref(0);

const celsius =computed({
  get:() => baseUnit.value - 273.15,
  set: val => baseUnit.value = val + 273.15
})

//baseUnit en kelvin
const kelvin =computed({
  get:()=> baseUnit.value, 
  set: val => baseUnit.value = val
})



const farenheit =computed({
  get:()=> ((baseUnit.value - 273.15)/(9/5) + 32) , 
  set: val => baseUnit.value =  ((val - 32) * (5/9)) + 273.15
})

//PARTIE TODOLIST-------------------------



</script>

<template>
<headpage></headpage>
<oneNav></oneNav>
<!-- <converter 
  v-if="onConverter"
  :modelValue="celsius"
  symbol="°C">
</converter> -->

<converter 
  v-if="onConverter"
  v-model="celsius"
  symbol="°C">
</converter>

<converter 
  v-if="onConverter"
  v-model="kelvin"
  symbol="K">
</converter>


<converter 
  v-if="onConverter"
  v-model="farenheit"
  symbol="°F">
</converter>



<favs v-if="onFav"></favs>

<appSchedule v-if="onHoraire">

</appSchedule>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
