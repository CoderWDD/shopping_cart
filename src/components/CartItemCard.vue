<template>
  <el-container>
    <el-table v-model="Nums" ></el-table>
  </el-container>
</template>

<script>
export default {
  name: "CartItemCard",
  props:[
      'item'
  ],
  mounted() {
    var temp =  this.item
    temp.num = 5
    console.log(this.item.num)
  }
}
</script>

<style scoped>

</style>