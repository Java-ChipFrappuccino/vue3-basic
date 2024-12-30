<template>
  <div class="container py-4">
    <input type="text" ref="inputRef" value="World" />
    <hr />
    <button @click="visible = !visible">Toggle Child</button>
    <LifeCycleChild v-if="visible"></LifeCycleChild>
    <p id="message">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref, onBeforeUpdate, onUpdated, onMounted, onBeforeMount } from 'vue'
import LifeCycleChild from './LifeCycleChild.vue'
const inputRef = ref(null)
const message = ref('')
const visible = ref(false)

console.log('setup')
onBeforeMount(() => {
  console.log('beforeMount')
})

onMounted(() => {
  console.log('Mounted')
})
// onBeforeUpdate(() => {
//   console.log(message.value) //반응형 데이터값이 바뀌면 훅이 감지하고 돔 컨텐츠를 재렌더링한다
//   console.log('Before Update')
//   console.log('DOM Content: ', document.querySelector('#message').textContent)
// })
// onUpdated(() => {
//   console.log(message.value)
//   console.log('Updated')
//   console.log('DOM Content: ', document.querySelector('#message').textContent)
// })
</script>

<style scoped></style>
