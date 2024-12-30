<template>
  <div class="card">
    <div class="card-header">Deep child component</div>
    <div class="card-body">
      <div>staticMessage: {{ staticMessage }}</div>
      <div>dynamicMessage: {{ dynamicMessage }}</div>
      <div>count: {{ count }}</div>
      <button @click="childBtnClick">click</button>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue'
import { myInjectionKey } from '@/assets/key.js'
// const staticMessage = inject('staticMessage', '기본값입니다') //2번째 매개변수로 부모쪽에서 데이터가 안올시 디폴트값 설정가능
// const dynamicMessage = inject('dynamicMessage')
const { count, addCount } = inject('count')
const { staticMessage, dynamicMessage } = inject(myInjectionKey, {
  staticMessage: 'Default static message',
  dynamicMessage: 'Default dynamic message',
})
console.log(count.value)
console.log(addCount(3))
const childBtnClick = () => {
  count.value += 1
}
</script>

<style scoped></style>
