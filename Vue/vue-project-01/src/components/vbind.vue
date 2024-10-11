<template>
    <button v-bind:disabled="botonDeshabilitado">Haz clic en mí</button>
    </template>
    <script>
    export default {
    data() {
    return {
    botonDeshabilitado: true
    }
    }
    }
    </script>