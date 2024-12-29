<template>
  <label for="" class="form-label">
    {{ label }}
  </label>
  <input v-model="username" v-bind="$attrs" class="form-control" type="text" />
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const props = defineProps(['modelValue', 'label'])
// const emits = defineEmits(['update:modelValue'])
</script>

<style scoped></style>
