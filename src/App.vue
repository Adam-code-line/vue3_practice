<script setup lang="ts" name="App">
import Header from './components/Header.vue';
import Count from './components/Count.vue';
import LoveTalk from './components/LoveTalk.vue';
</script>

<template>
  <router-view></router-view> <!-- 用于显示路由组件 -->
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>