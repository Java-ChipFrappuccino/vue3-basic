<template>
  <div class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" hd-data="헤더콘텐츠"></slot>
    </div>
    <div v-if="$slots.default" class="card-body">
      <slot :say-hello="sayHello" 자식데이터="자이자이자식아!">#body</slot>
    </div>
    <div v-if="$slots.footer" class="card-footer text-body-secondary">
      <slot name="footer" ft-data="푸터콘텐츠"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sayHello = ref('hello')
</script>

<style scoped></style>
