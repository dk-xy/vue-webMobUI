<script setup>

import removeFavVue from './removeFav.vue';
import { ref, watchEffect, computed } from 'vue';
//task envoyé dans transit
import { tasks } from '../transit.js';
import removeFav from './removeFav.vue';



function addTask(){
    console.log('hello')
tasks.value.push(theTask.value)
}

const theTask = ref('')

const filterBy = ref('') //chaine vide sinon marche pas si c'est null
//ici pas besoin de get et set
const tasksFiltered = computed(()=>{
return tasks.value.filter( task =>{
    return task.toLowerCase().includes(filterBy.value.toLowerCase());
});
})

  const tasksOrdered = computed(() => {
    return tasksFiltered.value.sort((t1 , t2) => {
      return t1.localeCompare(t2);
    });
  })

watchEffect(()=>{
    console.log(theTask.value)
})
</script>

<template>
<div>
Entrer votre task (pasfini)

<input v-model="theTask" type="text">
<button @click="addTask">Envoyer</button>

</div>

<div>
Filtrer
<input v-model="filterBy" type="text" placeholder="filtrer par ...">
</div>


<div v-for="(task, index) of tasksFiltered"> {{ task }} <removeFav :index="index"></removeFav></div> 
</template>

<style>

</style>
