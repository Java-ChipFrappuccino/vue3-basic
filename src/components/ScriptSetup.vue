<template>
  <div class="container py-4">
    <div>
      {{ msg }}
    </div>
    <br />
    {{ message }}
    <input v-model="message" type="text" />
    <button @click="sayHello">click</button>
    <PostItem type="news" title="제목" contents="내용입니다람쥐" v-model:is-liked="isLiked" />
    <PostItem type="news" title="제목" contents="내용입니다람쥐" v-model:is-liked="isLiked" />
    <PostItem type="news" title="제목" contents="내용입니다람쥐" v-model:is-liked="isLiked" />
    <hr />
    <MyButton class="parent-class" />
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import PostItem from './setup/PostItem.vue'
import MyButton from '@/components/setup/MyButton.vue'

const isLiked = ref(false)
const msg = 'Hello, Vue 3!'
const message = ref('Hello, World!')
const sayHello = () => {
  alert('하이?')
}
const response = await axios('https://jsonplaceholder.typicode.com/posts/1')

console.log('res: ', response.data)
</script>

<style scoped></style>
