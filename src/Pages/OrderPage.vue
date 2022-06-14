<template>
  <el-container>
    <SecondLine m-title="订单列表"></SecondLine>

    <el-container class="orderListHead">
      <el-container class="orderCreateTime">购买时间</el-container>
      <el-container class="orderName">商品</el-container>
      <el-container class="orderNum">数量</el-container>
      <el-container class="orderPrice">合计</el-container>
    </el-container>

    <el-container v-for="order in orderList" :key="order.id">
      <el-container v-for="orderGood in order.orderDetail" :key="orderGood.OrderDetailid">
        <OrderItemCard :item="orderGood" :order-time="order.orderTime"></OrderItemCard>
      </el-container>
    </el-container>

  </el-container>
</template>

<script>
import SecondLine from "@/components/SecondLine";
import OrderItemCard from "@/components/OrderItemCard";
import {orderListApi} from "@/network/api";
export default {
  name: "OrderPage",
  components:{
    SecondLine,
    OrderItemCard
  },
  data(){
    return {
      orderList: []
    }
  },
  mounted() {
    let userId = localStorage.getItem('userId')
    this.reloadOrderList(userId)
  },
  methods:{
    reloadOrderList(userId){
      orderListApi(userId)
          .then(res =>{
            this.orderList = res.data
            console.log(this.orderList)
          })
    }
  }
}
</script>

<style scoped>

.orderListHead {
  position: relative;
  margin: auto;
  margin-top: 50px;
  width: 1200px;
  height: 50px;
  background-color: #f3f3f3;
}

.orderCreateTime{
  position: absolute;
  bottom: 16px;
  left: 120px;
}

.orderName {
  position: absolute;
  bottom: 16px;
  left: 490px;
}

.orderNum {
  position: absolute;
  bottom: 16px;
  left: 788px;
}
.orderPrice {
  position: absolute;
  bottom: 16px;
  left: 1000px;
}

</style>