<template>
  <div class="p-3">
    <button type="button" class="btn btn-primary" v-bind="$attrs">Primary</button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  setup(props, context) {
    console.log(context.attrs)
    // context.attrs.onClick()
    return {}
  },
}
</script>

<style scoped></style>
