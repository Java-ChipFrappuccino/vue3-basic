<template>
  <div class="container py-4">
    <!-- //작동순서 = 레고 설명서를 읽는다(스크립트 읽기) -> 전체적인 구조를 파악한다(템플릿 랜더링,사전
    돔트리 로딩, 전체적인 구조만 파악했을뿐 내용은 없다, 뼈대만 구성됨) -> 마운트작업을 하면 이제 조립을 시작하는것, 모든 조립이 끝나면(마운트를 다 읽으면)
    -> 템플릿 재렌더링(완성품을 전시한다) -->
    <input type="text" ref="input" />
    <!-- //ref는 돔객체에 직접 접근하기위한 함수 -->
    <p>{{ input }}</p>
    <p v-if="input">{{ input.value }} {{ $refs.input.value }}</p>
    <hr />
    <ul>
      <!-- <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">{{ fruit }}</li> -->
      <li v-for="fruit in fruits" :key="fruit" :ref="(er) => itemRefs.push(er.textContent)">
        {{ fruit }}
      </li>
    </ul>
    <hr />
    <TemplateRefsChild ref="child"></TemplateRefsChild>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeMount } from 'vue'
import TemplateRefsChild from './TemplateRefsChild.vue'
// console.log(input.value) //아직 마운트 되기전에는 돔이 생성되지않았으므로 null이 출력된다
const input = ref(null)
const itemRefs = ref([])
onMounted(() => {
  console.log('부모 onMounted')
  console.log(input.value)
  input.value.value = 'Hello'
  itemRefs.value.forEach((item) => {
    // console.log(item.textContent)
    console.log('item: ', item)
  })
  console.log('자식 객체', child.value)
})
const fruits = ref(['apple', 'banana', 'cherry'])
const child = ref(null)

onBeforeMount(() => {
  console.log('부모 onBeforeMount')
})
</script>

<style scoped></style>
