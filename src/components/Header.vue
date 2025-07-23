<template>
 <div class="app">
        <h2 class="title">vue route test</h2>
        <!--导航区-->
        <div class="nav">
            <router-link to="/home" active-class="active">首页</router-link>
            <router-link to="/about" active-class="active">关于</router-link>
            <router-link to="/person" active-class="active">个人中心</router-link>
        </div>
        <!--内容区-->
        <div class="content">
            <router-view>

            </router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
   .app {
        width: 100%;
        height: 100%;
    }

    .title {
        text-align: center;
        margin: 20px 0;
        font-size: 24px;
        color: #333;
    }

    .nav {
        background-color: #f0f0f0;
        padding: 10px;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }

    .nav a {
        margin-right: 15px;
        text-decoration: none;
        color: #333;
        font-weight: bold;
        transition: color 0.3s;
        &:hover {
            color: #42b983;
        }
    }

    .active {
        color: #42b983;
        border-bottom: 2px solid #42b983;
    }   

    .content {
        padding: 20px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        min-height: 400px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
</style>

