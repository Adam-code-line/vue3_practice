<template>
  <div class="father">
    <h1>Father Component</h1>

    <NewInput v-model="username" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NewInput from './NewInput.vue';

let username = ref('zhangsan');

</script>

<style scoped>
.father {
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;

}
</style>
