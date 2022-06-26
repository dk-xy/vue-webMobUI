<script setup>
import { useFetch } from '../composables/fetch.js';

const { data: schedules } = useFetch('https://chabloz.eu/files/horaires/all.json');
console.log(schedules)
</script>

<template>
<h1> horaire IM</h1>
<!-- {{ schedules }} -->
<ul>
    <li v-for="course of schedules">
    {{ course.label }}, {{ course.room }} @ {{ course.start }}
    </li>
</ul>
</template>

<style>

</style>
