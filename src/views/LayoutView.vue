<template>
<div class="gc-layout">
  <p>简单卡片</p>
    <div class="card" style="width: 300px;">
        我是卡片里的文字
    </div>
  <p>简单卡片</p>
  <div class="card" style="width: 300px;">
      我是卡片里的文字
  </div>
  <p>简单卡片</p>
  <div class="card" style="width: 300px;">
      我是卡片里的文字
  </div>
</div>
</template>

<script>
export default {
    name: '',
    setup() {}
  };
</script>
<style scoped>
.gc-layout{
  padding: 20px 0 0 20px;
}
.card{
  display: flow-root;
  position: relative;
  box-sizing: border-box;
  border-radius: 3px;
  margin: 10px 0;
  padding: 16px 24px;
  line-height: 1.5;
  border: 1px solid #dcdcdc;
}
</style>