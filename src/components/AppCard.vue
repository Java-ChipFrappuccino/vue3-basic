<template>
  <div class="card">
    <div class="card-body">
      <span class="badge bg-secondary">{{ typeName }}</span>
      <h5 class="card-title mt-2">{{ title }}</h5>
      <p class="card-text">
        {{ contents }}
      </p>
      <a href="#" class="btn" :class="isLikeClass">Go somewhere</a>
    </div>
  </div>
  <!-- <br />
  {{ obj }} -->
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
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

const isLikeClass = computed(() => (props.isLiked ? 'btn-danger' : 'btn-outline-danger'))
const typeName = computed(() => (props.type === 'news' ? '뉴스' : '공지사항'))
</script>

<style></style>
