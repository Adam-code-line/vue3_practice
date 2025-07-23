<template>
  <div class="father">
    <h1>Father Component</h1>
    <h3>number1: {{ number1 }}</h3>
    <h3>number2: {{ number2 }}</h3>
    <h3>number3: {{ number3 }}</h3>
    <h3>number4: {{ number4 }}</h3>
    <Child :number1="number1" :number2="number2" :number3="number3" :number4="number4" v-bind="{x:100 ,y:200 }" :update="updateNumbers" />
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue';
import { ref } from 'vue';

let number1 = ref(1);
let number2 = ref(2);
let number3 = ref(3);
let number4 = ref(4);

function updateNumbers() {
  number1.value += 1;
  number2.value += 2;
  number3.value += 3;
  number4.value += 4;
}


</script>

<style scoped>
.father {
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;

}
</style>
