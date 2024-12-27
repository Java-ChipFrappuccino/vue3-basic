<template>
  <div>
    <h2 v-if="visible">Hello Vue3!</h2>
    <h2 v-else>false 입니다.</h2>
    <button v-on:click="visible = !visible">toggle</button>
    <hr />
    <button v-on:click="type = 'A'">A</button>
    <button v-on:click="type = 'B'">B</button>
    <button v-on:click="type = 'C'">C</button>
    <button v-on:click="type = 'D'">D</button>

    <h2 v-if="type === 'A'">A입니다.</h2>
    <h2 v-else-if="type === 'B'">B입니다.</h2>
    <h2 v-else-if="type === 'C'">C입니다.</h2>
    <h2 v-else>A, B, C가 아닙니다.</h2>
    <hr />
    <template v-if="visible">
      <!-- //템플릿태그로 통째로 조건문을 걸수있다 -->
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
    <hr />
    <h1 v-show="ok">Title 입니다.</h1>
    <button v-on:click="ok = !ok">show toggle</button>
    <!-- //show는 초기에 무조건 렌더링 되고조건에 따라 dipsplay:none으로 숨겨진다, 따라서 자주 값을 바꿀
    필요가 있으면 show, //그렇지 않으면 v-if를 사용하는것이 좋다 . if는 조건에 따라 초기렌더링이 되지
    않을수 있지만 값을 바꿀때마다 렌더링이 반복된다 -->
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const visible = ref(false)
    const type = ref('A')
    const ok = ref(true)
    return { visible, type, ok }
  },
}
</script>

<style lang="scss" scoped></style>
