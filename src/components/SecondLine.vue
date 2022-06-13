<template>
  <el-container>
    <h3 v-text="mTitle"></h3>
  </el-container>
</template>

<script>
export default {
  name: "SecondLine",
  props: ['mTitle']
}
</script>

<style scoped>

h3 {
  text-align: center;
  line-height: 55px;
  font-size: 28px;
  font-weight: normal;
  color: #666;
  position: relative;
}

h3::after {
  content: " ";
  position: absolute;
  width: 50%;
  height: 2px;
  background-color: #fa884f;
  bottom: 0;
  left: 50%;
  margin-left: -25%;
}

</style>