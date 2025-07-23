<template>
    <div class="game">
        <h2>游戏推荐</h2>
        <slot :games="games"></slot>
    </div>

</template>

<script setup lang="ts">
import { ref, reactive, provide } from 'vue';

let games = reactive([
    {id: 1, name: 'Game 1', description: 'Description of Game 1'},
    {id: 2, name: 'Game 2', description: 'Description of Game 2'},
    {id: 3, name: 'Game 3', description: 'Description of Game 3'},
    {id: 4, name: 'Game 4', description: 'Description of Game 4'},
])

</script>

<style scoped>
.game {
  padding: 20px;
  background-color: #e0f7fa;
  border: 1px solid #80deea;
  border-radius: 5px;
}
.game h2 {
    color: #00796b;
    margin-bottom: 10px;


}

</style>