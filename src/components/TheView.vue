<template>
  <main>
    <div class="container py-4">
      <MyButton @click="sayHello" id="test" class="parent" />
      <LabelInput label="이름" id="who" />
    </div>
  </main>
</template>

<script setup>
import MyButton from './MyButton.vue'
import LabelInput from './LabelInput.vue'
const sayHello = () => alert('hello')
</script>

<style scoped></style>
