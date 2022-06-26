<script setup>
import { page, onHome } from '../transit.js'

window.addEventListener('hashchange', () => {
    console.log(window.location.hash)
    page.value = window.location.hash



})
</script>

<template>
    <nav>
        <ul>
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#converter">Converter</a>
            </li>
            <li>
                <a href="#fav">Favourites</a>
            </li>
            <li>
                <a href="#horaire">Horaire</a>
            </li>
        </ul>
    </nav>
</template>

<style>
html {
    margin-top: -20px;
}

nav {

    width: 100%;
    margin: none !important;

    background: rgb(0, 0, 0);
    -webkit-box-shadow: 0px 3px 10px 8px rgba(255, 255, 255, 0.76);
    box-shadow: 0px 3px 10px 8px rgba(255, 255, 255, 0.767);
    z-index: 1;


}

nav ul {

    padding: 40px 60px 40px 40px;

}

nav li {
    display: inline;
    padding: 20px 30px 20px 30px;
    color: white;
}

nav li a {
    color: white !important;
    text-decoration: none;
    padding: 20px 30px 20px 30px;
    font-weight: 800;
}

nav li:hover {
    background-color: rgb(236, 0, 0, 0.8);
    transition: 0.5s;
}
</style>