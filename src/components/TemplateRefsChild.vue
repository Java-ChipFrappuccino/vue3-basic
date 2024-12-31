<template>
  <div>
    {{ $parent.fruits }}
  </div>
  <div>ttt</div>
  <button @click="sayHello">button</button>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from 'vue'

const message = ref('Hello, World!')
const sayHello = () => {
  console.log('click')

  alert(message.value)
  return 2
}
defineExpose({
  message,
  sayHello,
})
onBeforeMount(() => {
  console.log('onBeforeMount')
})
onMounted(() => {
  console.log('onMounted')
})
</script>

<style scoped></style>
