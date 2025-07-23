<template>
  <div class="person">
    <!-- 导航区 -->
    <ul>
      <li v-for="person in persons" :key="person.id">

        <button @click = "showPersonDetail(person)">查看人</button>

        <router-link :to="{name: 'person-detail', params: { id: person.id, name: person.name, age: person.age }}">
          {{ person.id }} -
          {{ person.name }}
        </router-link>
      </li>
    </ul>
    <!-- 路由视图 -->
      <div class="person-detail">
        <router-view></router-view>
      </div>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref ,} from 'vue';
import { useRouter } from 'vue-router';

const persons = ref([
  { id: 1, name: 'Person 1', age: 25 },
  { id: 2, name: 'Person 2', age: 30 },
  { id: 3, name: 'Person 3', age: 35 },
  { id: 4, name: 'Person 4', age: 40 },
  { id: 5, name: 'Person 5', age: 45 }
]);

  const router = useRouter();

  interface Person {
    id: number;
    name: string;
    age: number;
  }

  function showPersonDetail(person: Person) {
    router.push({
      name: 'person-detail', params: { id: person.id, name: person.name, age: person.age }
    })

  }

</script>

<style scoped>
.person {
  margin-top: 20px;
  display: grid; /* 使用 grid 布局 */
  grid-template-columns: 1fr 3fr; /* 左侧导航占 1fr，右侧显示区占 3fr */
  gap: 20px; /* 设置列间距 */
  padding: 20px; /* 给整个布局增加内边距 */
}

.person ul {
  list-style-type: none;
  padding: 0;
}

.person li {
  margin-bottom: 10px;
}

.person li a {
  text-decoration: none;
  color: #42b983; /* 链接颜色 */
  font-weight: bold;
}

.person-detail {
  border: 1px solid #ccc;
  padding: 20px; /* 增加内边距 */
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 90%; /* 调整宽度为显示区的 80% */
  height: auto; /* 自动调整高度 */
  max-height: 300px; /* 限制最大高度为 300px */
  overflow-y: auto; /* 如果内容超出，允许滚动 */
}
</style>
