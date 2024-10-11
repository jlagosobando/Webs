<template>
    <ul>
    <li v-for="item in lista" :key="item.id">
    {{ item.nombre }}
    </li>
    </ul>
    </template>
    <script>
    export default {
    data() {
    return {
    lista: [
    { id: 1, nombre: 'Item 1' },
    { id: 2, nombre: 'Item 2' },
    { id: 3, nombre: 'Item 3' }
    ]
    }
    }
    }
    </script>