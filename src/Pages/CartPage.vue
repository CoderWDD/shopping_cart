<template>
  <el-container>

    <SecondLine m-title="购物车列表"></SecondLine>

    <el-container class="goodListHead">
      <el-container class="checkbox">
        <input class="allCheckBox" type="checkbox" name="fav" @click="checkAll" v-model="checkAllFlag"/>
      </el-container>
      <el-container class="goodCheckAll">全选</el-container>
      <el-container class="goodName">商品</el-container>
      <el-container class="goodPriceSingle">单价</el-container>
      <el-container class="goodNum">数量</el-container>
      <el-container class="goodPrice">小计</el-container>
      <el-container class="goodDelete">操作</el-container>
    </el-container>


    <el-container v-for="cartGood in cartList" :key="cartGood.id" class="CartGoodsList">
      <CartItemCard :item="cartGood"></CartItemCard>
    </el-container>


    <div class="kb fir"></div>

    <div class="buy_list"></div>

    <div class="check fir">
      <ul class="check_ul2">
        <li class="zj1">总价：</li>
        <li class="zj2">{{sumMoney}}</li>
        <li class="result">
          <button @click="summitOrder">去结算</button>
        </li>
      </ul>
    </div>


  </el-container>
</template>

<script>
import SecondLine from "@/components/SecondLine";
import CartItemCard from "@/components/CartItemCard";
import {addOrderApi, cartListApi} from "@/network/api";
export default {
  name: "CartPage",
  components:{
    SecondLine,
    CartItemCard
  },
  data(){
    return {
      cartList: [],
      globalProperties : '',
      userId: '',
      checkAllFlag: false,
      sumMoney: 0
    }
  },
  mounted() {
    this.userId = localStorage.getItem("userId")
    console.log(this.userId)

    this.reloadCartList(this.userId)

  },
  methods:{
    reloadCartList(userId){
      cartListApi(userId)
          .then(res => {
            this.cartList = res.data
          })
          .then(()=>{
            this.cartList.forEach(element=>{
              element.check = false
              element.delete = false
            })
          })
    },

    summitOrder(){
      let orderList = ''
      this.cartList.forEach(good => {
        if (good.check && !good.delete){
          orderList += good.cardid + ','
        }
      })

      orderList = orderList.substring (0,orderList.length - 1)

      console.log(orderList)

      let userId = localStorage.getItem('userId')

      addOrderApi(userId,orderList)
          .then(() => {
            this.cartList = []
            this.reloadCartList(userId)
              }
          )
    },

    // 1 1 0
    // 1 0 1
    // 0 0 1

    checkAll(){
      this.checkAllFlag = !this.checkAllFlag
      this.cartList.forEach(element => {
        element.check = this.checkAllFlag
      })
    }
  },
  watch:{
    cartList:{
      deep: true,
      immediate: true,
      handler(newList){
        this.checkAllFlag = false
        this.sumMoney = 0
        let cnt = 0
        newList.forEach(element => {
          if (element.check && !element.delete){
            cnt ++
            this.sumMoney += parseFloat(element.price) * parseInt(element.num)
          }
        })
        if (cnt == newList.length){
          this.checkAllFlag = true
        }
      }
    }
  }
}
</script>

<style scoped>

/* 购物车 */
.goodListHead {
  position: relative;
  margin: auto;
  margin-top: 50px;
  width: 1200px;
  height: 50px;
  background-color: #f3f3f3;
}
.checkbox {
  position: absolute;
  left: 4px;
  line-height: 50px;
}
.goodCheckAll {
  position: absolute;
  left: 20px;
  bottom: 16px;
}
.goodName {
  position: absolute;
  bottom: 16px;
  left: 120px;
}
.goodPriceSingle {
  position: absolute;
  bottom: 16px;
  left: 580px;
}
.goodNum {
  position: absolute;
  bottom: 16px;
  left: 750px;
}
.goodPrice {
  position: absolute;
  bottom: 16px;
  left: 920px;
}
.goodDelete {
  position: absolute;
  bottom: 16px;
  left: 1090px;
}


/* 结算栏开始 */


.check {
  margin: 0 auto;
  width: 1200px;
  height: 50px;
  border: 1px solid gainsboro;
  margin-top: 20px;
}

.check_ul1 li {
  list-style: none;
}

.check_ul1 li,
.check_ul2 li {
  float: left;
  line-height: 50px;
  list-style: none;

}

.check li:nth-child(3),
.check li:nth-child(4),
.check li:nth-child(5) {
  margin-left: 40px;
}

.check_ul1 a:hover {
  color: red;
}

.check_ul1 a {
  color: darkgrey;
  font-family: "黑体";
  font-size: 14px;
}

.check_ul2 {
  float: right;
  margin-left: 900px;
}

.zj1 {
  color: gray;
  font-family: "黑体";
  font-size: 13px;
}

.zj2 {
  font-weight: bold;
  color: red;
  position: relative;
  left: -5px;
}

.check_ul2 button {
  background-color: #e64347;
  border: 0px;
  width: 100px;
  height: 50px;
  font-weight: bold;
  font-size: 20px;
  font-family: "黑体";
}

.check_ul2 a {
  color: #ffffff;
}

/*结算栏结束*/

</style>