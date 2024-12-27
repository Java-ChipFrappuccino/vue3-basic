<template>
  <div>
    <input type="text" @keyup.ctrl.enter="addTodo" />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const todos = reactive([])

const addTodo = (e) => {
  todos.push(e.target.value)
  e.target.value = ''
  e.target.focus()
}
</script>

<style></style>
