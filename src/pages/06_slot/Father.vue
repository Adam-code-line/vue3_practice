<template>
  <div class="father">
    <h1>Father Component</h1>
    <div class="content">
      <Game>
        <template v-slot=" { games }">
          <ul>
            <li v-for="game in games" :key="game.id">
              <h3>{{ game.name }}</h3>
              <p>{{ game.description }}</p>
            </li>
          </ul>
        </template>
      </Game>

      <Game>
        <template v-slot="{ games }">
          <ol>
            <li v-for="game in games" :key="game.id">
              <h3>{{ game.name }}</h3>
              <p>{{ game.description }}</p>
            </li>
          </ol>

        </template>
      </Game>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, provide} from 'vue';
import Game from './Game.vue';

</script>

<style scoped>
.father {
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;

}

.content {
  display: flex;
  justify-content: space-around;
}

</style>
