<template>
  <div class="father">
    <h1>Father Component</h1>
    <p v-show="toy">{{ toy }}</p>
    <Child :message="message" :sendToy="getToy" />
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue';
import { ref } from 'vue';

const message = ref('Hello from Father!');
let toy = ref(' ');

function getToy(value: string) {
  toy.value = value;
  console.log(`Received toy from child: ${toy.value}`);
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
