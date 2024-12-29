<template>
  <div class="row g-3">
    <div class="col col-2">
      <select v-model="type" class="form-select" aria-label="Default select example">
        <option selected value="news">뉴스</option>
        <option value="notice">공지사항</option>
      </select>
    </div>
    <div class="col col-8">
      <input v-model="title" type="text" class="form-control" />
    </div>
    <div class="col col-2 d-grid">
      <button class="btn btn-primary" @click="createPost">추가</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const type = ref('news')
const title = ref('')
const emits = defineEmits(['createPost'])
const createPost = () => {
  const newPost = {
    type: type.value,
    title: title.value,
  }
  emits('createPost', newPost)
  type.value = 'news'
  title.value = ''
}
</script>

<style scoped></style>
