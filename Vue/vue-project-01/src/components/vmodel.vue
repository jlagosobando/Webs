<template>
<input v-model="mensaje" placeholder="Escribe algo">
<p>El mensaje es: {{ mensaje }}</p>
</template>
<script>
export default {
data() {
return {
mensaje: ''
}
}
}
</script>