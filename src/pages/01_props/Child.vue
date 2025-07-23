<template>
  <div class="child">
    <h2>Child Component</h2>
    <p>{{ message }}</p>
    <button @click="sendToy(toy)">Send Toy to Father</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

let toy = ref('Teddy Bear');

const props = defineProps<{
  message: string;
  sendToy: (value: string) => void;
}>();
</script>

<style scoped>
.child {
  padding: 16px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>