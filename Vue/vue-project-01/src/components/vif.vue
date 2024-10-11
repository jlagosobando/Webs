<template>
    <p v-if="mostrarMensaje">Hola Mundo</p>
    </template>
    <script>
    export default {
    data() {
    return {
    mostrarMensaje: true
    }
    }
    }
    </script>