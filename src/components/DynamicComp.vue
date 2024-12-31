<template>
  <div class="container py-4">
    <button @click="changeComp(DynamicAppleComp)" class="btn btn-primary me-2">사과</button>
    <button @click="changeComp(DynamicBananaComp)" class="btn btn-danger">바나나</button>
    <hr />
    <component :is="currentComp" />
  </div>
</template>

<script setup>
import { ref, shallowRef } from 'vue'
import DynamicAppleComp from './DynamicAppleComp.vue'
import DynamicBananaComp from './DynamicBananaComp.vue'

const currentComp = shallowRef(DynamicAppleComp) //제일 바깥쪽 속성(객체)에 대한 반응형만 유지하고 그 안쪽은 유지하지 않음,
// 객체자체를 바꾸는(여기선 컴포넌트 교체)행동을 할때만 반응한다, ref로 하지 않는 이유는 객체안의 모든 속성에 대해 반응형을 유지할 필요가 없기 때문, 그래서 콘솔창에도 성능 오버헤드 에러가 나온다
const changeComp = (comp) => (currentComp.value = comp)
</script>

<style scoped></style>
