<template>
  <div class="child">
    <h2>Child Component</h2>
    <h3>number1: {{ props.number1 }}</h3>
    <h3>number2: {{ props.number2 }}</h3>
    <h3>number3: {{ props.number3 }}</h3>
    <h3>number4: {{ props.number4 }}</h3>
    <GrandChild v-bind = "$attrs" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import GrandChild from './GrandChild.vue';

const props = defineProps({
  number1: Number,
  number2: Number,
  number3: Number,
  number4: Number
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