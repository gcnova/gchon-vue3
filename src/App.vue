<template>
  <div class="home">
    <div class="left-menu">
      <a href="#">logo占位</a>
      <router-link to="/">首页</router-link>
      <router-link to="/layout">布局</router-link>
      <router-link to="/card">卡片</router-link>
      <router-link to="/button">按钮</router-link>
      <router-link to="/about">关于</router-link>
    </div>
    <right-container></right-container>
  </div>
</template>

<script>
import RightContainer from "@/components/Container.vue";

export default {
  name: "HomeView",
  components: {
    RightContainer,
  },
};
</script>

<style lang="less">
@import "@/assets/css/global.css";

#app {
  height: 100%;
  width: 100%;
}

.home{
  width: 100%;
  height: 100%;
  display: flex;
}

.left-menu {
  width: 18%;
  min-width: 60px;
  height: 100%;
  color: #2ec4b6;
  background-color: #f5f7fa;
  display: flex;
  flex-direction: column;
  box-shadow: inset -1px 0 0 #e7e7e7;
  a{
        width: 100%;
        line-height: 50px;
        color: #252A34;
        padding-left: 30%;
        overflow: hidden;
    }
  a:hover{
    background-color: #2ec4b6;
  }
}
</style>
