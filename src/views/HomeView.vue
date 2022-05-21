<template>
  <div class="home">
    <div class="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/about">关于</router-link>
    </div>
    <h1>我是首页balabala</h1>
  </div>
</template>

<script>

export default {
  name: 'HomeView'
}
</script>

<style lang="less" scoped>
  .nav{
    display: flex;
    height: 50px;
    background-color: #eee;
  }
</style>
