<template>
  <div>
    <button @click="message += '!'">와치맨</button>
    <div>{{ message }}</div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const message = ref('Hello Vue 3!')
watch(message, (newVal, oldVal) => {
  console.log('newVal:', newVal, 'oldVal:', oldVal)
})
</script>

<style></style>
