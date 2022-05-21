<template>
  <div class="home">
    <left-menu></left-menu>
    <right-container></right-container>
    
  </div>
</template>

<script>
import LeftMenu from "@/components/LeftMenu.vue";
import RightContainer from "@/components/Container.vue";

export default {
  name: 'HomeView',
  components:{
    LeftMenu,
    RightContainer
  }
}
</script>

<style lang="less" scoped>
  .home{
    width: 100%;
    height: 100%;
    display: flex;
  }
</style>
