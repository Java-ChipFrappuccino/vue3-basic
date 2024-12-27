<template>
  <main>
    <div class="container py-4">
      <div class="row g-3">
        <div v-for="post in posts" :key="post.id" class="col col-4">
          <AppCard
            :title="post.title"
            :contents="post.body"
            :isLiked="post.isLiked"
            :type="post.type"
          ></AppCard>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import AppCard from './AppCard.vue'

import { reactive } from 'vue'

const posts = reactive([
  { id: 1, title: 'Post 1', body: 'This is post 1', isLiked: true, type: 'news' },
  { id: 2, title: 'Post 2', body: 'This is post 2', isLiked: true, type: 'news' },
  { id: 3, title: 'Post 3', body: 'This is post 3', isLiked: true, type: 'news' },
  { id: 4, title: 'Post 4', body: 'This is post 4', isLiked: false, type: 'notice' },
  { id: 5, title: 'Post 5', body: 'This is post 5', isLiked: false, type: 'notice' },
  { id: 6, title: 'Post 6', body: 'This is post 6', isLiked: false, type: 'notice' },
])
</script>

<style></style>
