<template>
  <div class="index">
    <div class="index-title">gchon组件库</div>
  </div>
</template>

<script>
import RightContainer from "@/components/Container.vue";

export default {
  name: 'HomeView',
  components:{
    RightContainer
  }
}
</script>

<style lang="less" scoped>
.index{ 
  width: 100%;
  height: 100%;
}
.index-title{
  font-size: 50px;
  // width: 100%;
  // height: 50%;
  margin-top: 80px;
  // border-radius: 20px;
  // display: flex;
  text-align: center;
  // align-items: center;
  // background-color: #50C1E9;
}
</style>
