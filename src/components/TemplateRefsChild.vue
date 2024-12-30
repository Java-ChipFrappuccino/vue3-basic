<template>
  <div>{{ $parent }}</div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from 'vue'

const message = ref('Hello, World!')
const sayHello = () => {
  alert(message.value)
}
onBeforeMount(() => {
  console.log('onBeforeMount')
})
onMounted(() => {
  console.log('onMounted')
})
</script>

<style scoped></style>
