<template>
  <div>
    <input type="text" class="new-input" :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
  </div>
</template>

<script setup lang="ts" name="NewInput">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: String
});

const emit = defineEmits(['update:modelValue']);
</script>

<style scoped>
.new-input {
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
    transition: border-color 0.3s;
}
</style>
