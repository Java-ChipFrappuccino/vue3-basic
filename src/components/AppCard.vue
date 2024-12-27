<template>
  <div class="card">
    <div class="card-body">
      <span class="badge bg-secondary">{{ type === 'news' ? '뉴스' : '공지사항' }}</span>
      <h5 class="card-title mt-2">{{ title }}</h5>
      <p class="card-text">
        {{ contents }}
      </p>
      <a v-if="isLiked" href="#" class="btn btn-danger">Go somewhere</a>
      <a v-else href="#" class="btn btn-outline-danger">Go somewhere</a>
    </div>
  </div>
</template>

<script setup>
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
})
</script>

<style></style>
