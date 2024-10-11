<template>
    <ComponenteHijo :mensaje="mensajePadre"
    @actualizarMensaje="mensajePadre = $event" />
    </template>
    <script>
    import ComponenteHijo from './ComponenteHijo.vue';
    export default {
    components: {
    ComponenteHijo
    },
    data() {
    return {
    mensajePadre: 'Hola desde el padre'
    }
    }
    }
    </script>