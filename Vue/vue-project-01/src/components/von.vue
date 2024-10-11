<template>
    <button v-on:click="contador++">Haz clic en mí</button>
    <p>Has hecho clic {{ contador }} veces.</p>
    </template>
    <script>
    export default {
    data() {
    return {
    contador: 0
    }
    }
    }
    </script>