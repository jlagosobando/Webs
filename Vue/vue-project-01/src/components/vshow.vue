<template>
<div>
<button @click="mostrarMensaje = !mostrarMensaje">Mostrar/Ocultar
mensaje</button>
<p v-show="mostrarMensaje">¡Hola, mundo!</p>
</div>
</template>
<script>
export default {
data() {
return {
mostrarMensaje: false
}
}
}
</script>