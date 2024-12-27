<template>
  <div>
    <h2>{{ teacher.name }}</h2>
    <h3>강의가 있습니까?</h3>
    <p>{{ hasLecture }}</p>
    <!-- //반응형 함수니까 이름만 쓰면됨 -->
    <p>{{ exitLecture() }}</p>
    <!-- //일반 함수니까 객체 호출() 해야함 -->
    <button v-on:click="counter++">counter: {{ counter }}</button>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'

export default {
  setup() {
    const counter = ref(0)
    const firstName = ref('홍')
    const lastName = ref('해')
    const fullName = computed({
      //원래 컴퓨티드 함수의 값을 변경할수없지만 setter메서드를 만들면 가능하다
      get() {
        return firstName.value + ' ' + lastName.value
      },
      set(value) {
        ;[firstName.value, lastName.value] = value.split(' ')
      },
    })
    fullName.value = '홍 박사'
    console.log(firstName.value, lastName.value)

    const teacher = reactive({
      name: '홍길동',
      lecture: ['Vue', 'React', 'Angular'],
    })

    const hasLecture = computed(() => {
      // computed는 데이터를 가공해서 사용할때 사용. 데이터가 변함을 감지해서 자동으로 계산해줌,
      // 일반 함수와의 차이점은 결과값이 캐시에 저장되어서 여러번 호출됐을때 반응형 데이터의 변화가 없었으면 캐시된값을 불러오므로 성능면에서 유리
      return teacher.lecture.length > 0 ? 'Yes' : 'No'
    })
    const exitLecture = () => {
      return teacher.lecture.length > 0 ? 'Yes' : 'No'
    }
    return { teacher, hasLecture, exitLecture, counter, firstName, lastName, fullName }
  },
}
</script>

<style></style>
