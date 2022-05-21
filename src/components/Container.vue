<template>
  <div class="container">
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
    name: '',
    setup() {}
  };
</script>
<style lang="less" scoped>
.container{
    width: 82%;
}
.nav{
    display: flex;
    height: 50px;
    background-color: #eee;
  }
</style>