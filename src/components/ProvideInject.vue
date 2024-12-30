<template>
  <div class="container py-4">
    <div class="card">
      <div class="card-header">provide/inject component</div>
      <div class="card-body">
        <button @click="count++">button</button>
        <ChildComp></ChildComp>
      </div>
    </div>
  </div>
  {{ global }}
</template>

<script setup>
import { provide, ref, readonly, inject } from 'vue'
import ChildComp from './ChildComp.vue'
import { myInjectionKey } from '@/assets/key.js'
const staticMessage = 'This is a static message!!'
const dynamicMessage = ref('This is a dynamic message')
const global = inject('global')
const count = ref(0)
const addCount = (num) => (count.value += num)

provide(myInjectionKey, { staticMessage, dynamicMessage })
// provide('staticMessage', staticMessasge)
// provide('dynamicMessage', dynamicMessage)
// const readonlyCount = readonly(count)
provide('count', { count: readonly(count), addCount }) //프로바이드로 전달해줄때는 값을 조작하는 함수도 같이 모아서 보내주면 향후 유지관리에 좋다
</script>

<style scoped></style>
