<template>
  <div class="child">
    <h2>GrandChild Component</h2>
    <h3>Money: {{ money }}</h3>
    <h3>Car: {{ car.brand }} {{ car.model }} - ${{ car.price }}</h3>
    <button @click="updateMoney(100)">Add $100</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, inject } from 'vue';

const {money, updateMoney} = inject('moneyContext', { money: 0, updateMoney: (value: number) => {} });
const car = inject('car', { brand: 'Default', model: 'Model', price: 0 });


</script>

<style scoped>
.child {
  padding: 16px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>