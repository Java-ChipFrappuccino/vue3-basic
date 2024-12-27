<template>
  <div :style="styleObject">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptatem nesciunt autem
    quibusdam placeat magnam enim quaerat tempore rerum nulla in, accusamus veritatis nam? Laborum
    cupiditate ex quaerat iste voluptates?
  </div>
  <button v-on:click="fontSize++">+</button>
  <button v-on:click="fontSize--">-</button>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
// const styleObject = reactive({
//   color: 'red',
//   fontSize: '13px',
//   fontWeight: 'bold',
// })
const fontSize = ref(13)
const styleObject = computed(() => {
  return {
    color: 'red', //내부 스타일값을 줄때는 일반적으로 카멜스타일로 표기
    fontSize: fontSize.value + 'px',
    fontWeight: 'bold',
  }
})
</script>

<style></style>
