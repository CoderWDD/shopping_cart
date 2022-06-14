<template>
  <el-container class="orderCardList">
    <el-container class="orderCardCreateTime" v-text="orderTime"></el-container>
    <el-container class="orderCardName" v-text="Item.goodsName"></el-container>
    <el-container class="text">
      <p class="orderNum" v-text="Item.num"></p>
    </el-container>
    <el-container class="orderCardPrice" v-text="`￥`+ Item.price"></el-container>
  </el-container>
</template>

<script>
export default {
  name: "OrderItemCard",
  props:[
      'item',
      'orderTime'
  ],
  data(){
    return {
      'Item': []
    }
  },
  mounted() {
    this.Item = this.item
    var num = this.Item.nums.split(',')
    var price = num[1].split('=')
    this.Item.num = parseInt(num[0])
    this.Item.price = parseInt(price[1])
    console.log(this.Item.price)
  }
}
</script>

<style scoped>

.orderCardList {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  height: 100px;
  background-color: #fff4e8;
}

.orderCardCreateTime{
  position: absolute;
  left: 40px;
  width: 330px;
  line-height: 180px;
}

.orderCardName {
  position: absolute;
  left: 390px;
  width: 330px;
  line-height: 180px;
}

.orderCardPrice {
  position: absolute;
  left: 990px;
  line-height: 180px;
}

.orderNum{
  position: absolute;
  left: 800px;
  line-height: 180px;
  text-align: center;
}
</style>