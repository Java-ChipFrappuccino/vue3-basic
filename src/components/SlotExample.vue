<template>
  <main>
    <div class="container py-4">
      <MyButton @click="sayHello" id="test" class="parent" />
      <LabelInput label="이름" id="who" />
      <hr />
      <FancyButton>Click!!<span style="color: red">@@@</span></FancyButton>
      <FancyButton v-slot="{ dynamic }">{{ dynamic }}</FancyButton>
      <hr />
      <AppCard>
        <!-- <template #[slotArgs]="{ sayHello: 안녕, 자식데이터: 자데 }">{{ 안녕 }}{{ 자데 }}</template> -->
        <!-- <template #default>내용입니다</template>
          -->
        <!-- 암시적으로 디폴트 입니다 -->
        <!-- <template #footer>푸터입니다</template> -->
        <template #header="{ hdData }">{{ hdData }}</template>
        <template v-slot="{ sayHello: 안녕, 자식데이터: 자데 }">{{ 안녕 }}{{ 자데 }}</template>
        <template #footer="{ ftData }">{{ ftData }}</template>
      </AppCard>
      <hr />
      <AppCard> 게시글입니다. </AppCard>
    </div>
  </main>
</template>

<script setup>
import MyButton from './MyButton.vue'
import LabelInput from './LabelInput.vue'
import FancyButton from './FancyButton.vue'
import AppCard from './AppCard.vue'
import { ref } from 'vue'
const slotArgs = ref('default')
const sayHello = () => alert('hello')
</script>

<style scoped></style>
