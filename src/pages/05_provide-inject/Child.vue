<template>
  <div class="child">
    <h2>Child Component</h2>
    <GrandChild />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import GrandChild from './GrandChild.vue';
</script>

<style scoped>
.child {
  padding: 16px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>