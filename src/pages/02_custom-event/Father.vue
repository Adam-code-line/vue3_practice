<template>
  <div class="father">
    <h1>Father Component</h1>
    <p v-show="toy">{{ toy }}</p>
    <Child @sendToy="getToy" />
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue';
import { ref } from 'vue';

let toy = ref('');

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
