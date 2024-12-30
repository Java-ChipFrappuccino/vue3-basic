<template>
  <button class="fancy-btn">
    <slot :dynamic="dynamic">기본값</slot>
  </button>
</template>

<script setup>
import { ref } from 'vue'

const dynamic = ref('다이나믹')
</script>

<style scoped>
.fancy-btn {
  color: #fff;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  border: none;
  padding: 5px 12px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
