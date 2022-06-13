<template>
  <el-container>
    <SecondLine m-title="购物车列表"></SecondLine>
<!--    <CartItemCard :item="items[0]"></CartItemCard>-->
  </el-container>
</template>

<script>
import SecondLine from "@/components/SecondLine";
import CartItemCard from "@/components/CartItemCard";
import {getCurrentInstance} from "vue";
import {cartList} from "@/network/api";
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
      userId: ''
    }
  },
  mounted() {
    this.globalProperties = getCurrentInstance().appContext.config.globalProperties
    this.userId = this.globalProperties.userId
    // 如果购物车列表为空，就重新加载
    if (this.cartList.length === 0){
      this.reloadCartList()
    }
  },
  methods:{
    reloadCartList(){
      cartList(this.userId)
          .then(res => {
            this.cartList = res.data
          })
    }
  }
}
</script>

<style scoped>

</style>