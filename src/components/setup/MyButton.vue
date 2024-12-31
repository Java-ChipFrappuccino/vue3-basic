<template>
  <div class="p-3 bg-danger">
    <button type="button" class="btn btn-primary" v-bind="$attrs">Primary</button>
  </div>
</template>

<!-- <script>
export default {
  // inheritAttrs: false,
  setup(props, context) {
    console.log(context.attrs)
    // context.attrs.onClick()
    return {}
  },
}
</script> -->
<script setup>
defineOptions({
  inheritAttrs: false,
})
</script>

<style scoped></style>
