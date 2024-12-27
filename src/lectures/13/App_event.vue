<template>
  <div>
    <button @click="printEventInfo('hello', $event)">inline event handler</button>
  </div>
  <hr />
  <input type="text" @keyup="onKeyupHandler" />
</template>

<script setup>
const printEventInfo = (message, e) => {
  console.log('message: ', message)
  console.log('event.target: ', e.target)
  console.log('event.target.tagname: ', e.target.tagName)
}
const onKeyupHandler = (e) => {
  console.log('event.target: ', e.key)
}
</script>

<style></style>
