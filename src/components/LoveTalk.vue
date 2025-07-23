<template>
  <div class="love-talk">
    <h1>Love Talk Component</h1>
    <p>Share your thoughts on love:</p>
    <button @click="getLoveTalk">获取一句情话</button>
    <ul>
        <li v-for="talk in loveTalkStore.talkList" :key="talk.id">
            {{ talk.content }}
        </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { ref, reactive } from 'vue';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { useLoveTalkStore } from '@/store/loveTalk';

const loveTalkStore = useLoveTalkStore();

async function getLoveTalk() {
  loveTalkStore.getATalk();
}

loveTalkStore.$subscribe((mutation, state) => {
  console.log('State changed:', mutation, state);
  localStorage.setItem('loveTalkList', JSON.stringify(state.talkList));
});

</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

.love-talk {
  text-align: center;
  margin-top: 20px;
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

textarea {
  width: 100%;
  height: 100px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
}

button {
  margin-top: 10px;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
