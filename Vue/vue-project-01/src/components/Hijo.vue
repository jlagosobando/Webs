<template>
    <!-- Este es el HTML del componente -->
    <div class="card mt-3">
    <div class="card-body">
    <h5 class="card-title">Componente Hijo</h5>
    <!-- Aquí se muestra el mensaje que se pasa como prop desde el
    componente padre -->
    <p class="card-text">{{ mensaje }}</p>
    <!-- Este botón llama al método emitirEvento cuando se hace clic
    en él -->
    <button class="btn btn-success" v-on:click="emitirEvento">Cambiar
    Mensaje</button>
    <!-- Este párrafo se muestra solo si mensajeCambiado es verdadero
    -->
    <p v-show="mensajeCambiado">El mensaje ha sido cambiado</p>
    </div>
    </div>
    </template>
    <script>
    export default {
    name: 'Hijo', // Nombre del componente
    props: ['mensaje'], // Propiedades que se pasan desde el componente padre
    data() {
    return {
    mensajeCambiado: false // Variable de datos que controla si se muestra el párrafo
    }
    },
    methods: {
    emitirEvento() {
    // Cuando se llama a este método, cambia mensajeCambiado a verdadero y emite un evento al componente padre
    this.mensajeCambiado = true;
    this.$emit('actualizarMensaje', 'Nuevo mensaje desde el hijo');
    }
    }
    }
    </script>