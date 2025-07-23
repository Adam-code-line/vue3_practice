<template>
  <div>
    <h1>Home Page</h1>
    <router-link to="/about">Go to About Page</router-link>
  </div>
</template>

<script lang="ts" setup name="Home">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<style scoped>
h1 {
  color: blue;
}
</style>
