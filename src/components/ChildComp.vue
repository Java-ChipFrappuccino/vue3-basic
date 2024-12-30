<template>
  <div class="card">
    <div class="card-header">child component</div>
    <div class="card-body">
      <DeepChildComp></DeepChildComp>
    </div>
  </div>
</template>

<script setup>
import DeepChildComp from './DeepChildComp.vue'
</script>

<style scoped></style>
