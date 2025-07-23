<template>
  <div class="child">
    <h2>GrandChildChild Component</h2>
    <h3>x: {{ x }}</h3>
    <h3>y: {{ y }}</h3>
    <button @click="update">Update Numbers</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

defineProps({
  x: Number,
  y: Number,
  update: Function,
});

</script>

<style scoped>
.child {
  padding: 16px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>