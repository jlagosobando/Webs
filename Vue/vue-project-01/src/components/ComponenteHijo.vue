<template>
    <div>
    <p>{{ mensaje }}</p>
    <button @click="emitirEvento">Cambiar Mensaje</button>
    </div>
    </template>
    <script>
    export default {
    props: ['mensaje'],
    methods: {
    emitirEvento() {
    this.$emit('actualizarMensaje', 'Nuevo mensaje desde el hijo');
    }
    }
    }
    </script>