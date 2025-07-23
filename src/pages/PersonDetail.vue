<template>
  <div class="person-detail">
    <router-link to="/person">Back to Person Page</router-link>
    <ul>
      <li>
        <h1>Person Detail</h1>
      </li>
      <li> ID: {{ id }} </li>
      <li> Name: {{ name }} </li>
      <li> Age: {{ age }} </li>
    </ul>
  </div>
</template>
<script lang="ts" setup name="PersonDetail">
defineProps(['id', 'name', 'age']);

</script>


<style scoped>
.person-detail {
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
}


h1 {
  color: blue;
}

.person-detail {
  margin-top: 20px;
}

.person-detail ul {
  list-style: none; /* 去掉列表项前的点 */
  padding: 0; /* 去掉默认内边距 */
}

li {
  margin-bottom: 10px;
  font-size: 18px;
  color: #333;
  text-decoration: none;
}
</style>