<template>
    <div>
    <h1>{{ titulo }}</h1>
    <button @click="incrementar">Incrementar</button>
    <p>Contador: {{ contador }}</p>
    </div>
    </template>
    <script setup>
    import { ref } from 'vue'
    const titulo = 'Componente con script setup'
    const contador = ref(0)
    function incrementar() {
    contador.value++
    }
    </script>
    <style scoped>
    h1 {
    color: red;
    }
    p {
    color: yellowgreen;
    }
    </style>