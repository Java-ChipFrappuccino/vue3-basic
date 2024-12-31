<template>
  <div>마우스 위치: x: {{ x }}, y: {{ y }}</div>
</template>

<script setup>
import { useMouse } from '@/assets/useMouse.js'

// 컴포넌트 A
const { x, y } = useMouse()
</script>

<style scoped></style>
