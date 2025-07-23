<template>
  <div class="father">
    <h1>Father Component</h1>
    <h3>Money: {{ money }}</h3>
    <h3>Car: {{ car.brand }} {{ car.model }} - ${{ car.price }}</h3>
    <Child/>
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue';
import { ref, reactive, provide} from 'vue';

let money = ref(1000);
let car = reactive({
  brand: 'Toyota',
  model: 'Corolla',
  price: 20000
});

function updateMoney(value: number) {
  money.value -= value;
}

provide('moneyContext', {money, updateMoney});
provide('car', car);

</script>

<style scoped>
.father {
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;

}
</style>
