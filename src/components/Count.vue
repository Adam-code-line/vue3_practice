<template>
  <div class="count">
    <h1>Count Component</h1>
    <p>Current Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCountStore } from '@/store/count';
import { storeToRefs } from 'pinia';

const countStore = useCountStore();
const { count , doubleCount } = storeToRefs(countStore);
countStore.$subscribe((mutation, state) => {
  console.log('State changed:', mutation, state);
});

let n = ref(1);//用户选择的数字

const increment = () => {
  countStore.count += n.value;
};

const decrement = () => {
  countStore.count -= n.value;
};
</script>

<style scoped>
.count {
  text-align: center;
  margin-top: 20px;
    font-family: Arial, sans-serif;
    color: #333;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

</style>
