<template>
  <div class="index">
    <div class="index-title">gchon组件库</div>
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

<style lang="less" scoped>
.index {
  width: 100%;
}
.index-title {
  font-size: 50px;
  margin-top: 80px;
  text-align: center;
}
</style>
