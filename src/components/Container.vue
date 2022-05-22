<template>
  <div class="container">
    <div class="nav">
        <a href="">首页</a>
        <a href="">布局</a>
        <a href="">按钮</a>
        <a href="">关于</a>
    </div>
    <router-view />
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
    justify-content: flex-end;
    height: 50px;
    background-color: #F5F7FA;
    box-shadow: inset 0 -1px 0 #e7e7e7;
    a{
        padding: 0 20px;
        line-height: 50px;
    }
  }
</style>