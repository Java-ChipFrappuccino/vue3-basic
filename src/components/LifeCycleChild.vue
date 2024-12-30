<template>
  <div class="card">
    <div class="card-body">LifeCycleChild</div>
    <input type="text" id="input" />
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue'

console.log('Child setup')
onBeforeMount(() => {
  console.log('[Child] beforeMount')
})

onMounted(() => {
  console.log('[Child] Mounted')
})
onBeforeUnmount(() => {
  console.log('[Child] beforeUnmount')
  console.log('DOM Content: ', document.querySelector('#input'))
})

onUnmounted(() => {
  console.log('[Child] Unmounted')
  console.log('DOM Content: ', document.querySelector('#input'))
})
</script>

<style scoped></style>
