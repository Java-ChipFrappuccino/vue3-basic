<template>
  <div class="card">
    <div class="card-body">
      <span class="badge bg-secondary">{{ typeName }}</span>
      <h5 class="card-title mt-2">{{ title }}</h5>
      <p class="card-text">
        {{ contents }}
      </p>
      <a href="#" @click="likeBtn" class="btn" :class="isLikeClass">Go somewhere</a>
    </div>
  </div>
  <!-- <br />
  {{ obj }} -->
</template>

<script>
console.log(
  'PostItem',
) /* 컴포넌트를 여러번 쓰고싶지만 한번만 실행되게 하고싶은 코드는 스크립트 안에 작성 */
</script>

<script setup>
import { computed, onUpdated, watch, nextTick } from 'vue'
console.log('PostItem') // 컴포넌트를 불러올때마다 셋업스크립트를 읽는다

const props = defineProps({
  // modelValue: Boolean, // v-model에서 전달되는 값은 기본적으로 modelValue로 받음
  title: {
    type: String,
    default: 'Default Title', // 기본값
    required: true, // 필수값
  },
  contents: {
    type: String,
    default: 'Default Title', // 기본값
    required: true, // 필수값
  },
  isLiked: {
    type: Boolean,
    default: false, // 기본값
  },
  type: {
    type: String,
    default: 'news', // 기본값
    validator: (value) => {
      return ['news', 'notice'].includes(value)
    }, // 유효성 검사
  },
  obj: {
    type: Object,
    default: () => {},
  },
})
const emit = defineEmits(['update:isLiked']) // v-model을 업데이트하기 위한 이벤트 정의

const isLikeClass = computed(() => (props.isLiked ? 'btn-danger' : 'btn-outline-danger'))
const typeName = computed(() => (props.type === 'news' ? '뉴스' : '공지사항'))
const likeBtn = () => {
  // props.isLiked = !props.isLiked
  emit('update:isLiked', !props.isLiked) // v-model 값을 변경 ,
  // 비동기적으로 작동하기에 엄마~ 나 이거말고 다른거 사줘~ 하면 엄마가 응~ 뭐~? 라고 하기도 전에 엄마 이거사줘를 한 꼴,
  // 엄마가 자식이 전달한 값을 받고 변경한후 다시 자식에게 쏴주기 전에 비동식으로 이미 처리가 되어 버려서 현재 화면에 업데이트되어진 값과 다른값이 나와버린다 ,
  // 해결하려면 dom업데이트가 완료된후 실행되는 nextTick나 watch,생명주기 훅을 활용
  // console.log(tt.value)
  nextTick(() => {
    console.log('Updated isLiked after nextTick:', props.isLiked)
  })
}
// onUpdated(() => {
//   console.log('updated')
//   console.log(props.isLiked)
//   // console.log(tt.value)
// })
// const tt = computed(() => props.isLiked)
// watch(
//   () => props.isLiked,
//   (newVal) => {
//     console.log('Updated isLiked:', newVal)
//   },
// )
// const likeBtn = () => {
//   // props.isLiked = !props.isLiked
//   emit('update:isLiked', !props.isLiked) // v-model 값을 변경
//   console.log(props.isLiked)
// }
</script>

<style></style>
