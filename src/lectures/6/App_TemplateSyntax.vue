<script>
import { ref } from 'vue'
export default {
  setup() {
    const message = ref('Hello Vue3')
    const rawHtml = ref('<h2>Hello Vue3</h2>')
    const dynamicTitle = ref('안녕하세요!')
    const isInputDisabled = ref(true)
    const attrs = ref({
      type: 'password',
      value: '12345678',
      disalbed: false,
    })

    return {
      message,
      rawHtml,
      dynamicTitle,
      isInputDisabled,
      attrs,
    }
  },
}
</script>

<template>
  <h2>보간법</h2>
  <p>{{ message }}</p>
  <p v-once>{{ message }}</p>
  <!-- // once는 데이터를 딱 한번만 바꾼다 -->
  <button v-on:click="message += '!'">click!</button>
  <hr />

  <h2>v-html</h2>
  <p>{{ rawHtml }}</p>
  <p v-html="rawHtml"></p>
  <!-- //v-html 문법을 사용하면 태그로 인식해서 태그가 적용된다. 
   다만 xss취약점에 노출될수 있으므로 관리자 페이지나 기타 신뢰할수있는 콘텐츠에서만 사용하고 사용자가 제공한 컨텐츠에서는 절대x-->
  <h2>속성 바인딩</h2>
  <div :title="dynamicTitle">마우스를 올려보세요</div>
  <!-- //v-bind는 스타일 속성을 동적으로 넣을때 사용 , 축약 : 혹은 객체를 넣을수도 있다-->
  <input type="text" value="홍길동" :disabled="isInputDisabled" />
  <input v-bind="attrs" />
  <h2>JavaScript</h2>
  {{ message.split('').reverse().join('') }}<br />
  {{ isInputDisabled ? '예' : '아니오' }}
  <!-- //보간법에는 자바스크립트 코드도 작성가능 -->
</template>

<style scoped></style>
