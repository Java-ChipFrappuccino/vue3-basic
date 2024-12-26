<script setup>
import { reactive } from 'vue';

export default {
  setup() {
    const original = reactive({
      count: 0,
    });
    original.count++;
    console.log(original.count)
    return {

    };
  },
}
</script>

<template>
  <div></div>
</template>

<style></style>
