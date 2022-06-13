<template>
<el-container class="MainContainer">
  <TopLine :has-login="hasLogin"></TopLine>

  <SecondLine m-title="商品列表" ></SecondLine>

  <el-container v-for="good in goodsList" :key="good.id" class="goodsList">
    <GoodItemCard :good-id="good.id" :good-price="good.price1" :good-name="good.name" :good-img="good.pthumbnail"></GoodItemCard>
  </el-container>

</el-container>
</template>


<script>
import TopLine from "@/components/TopLine";
import SecondLine from "@/components/SecondLine";
import GoodItemCard from "@/components/GoodItemCard";
import {goodList, loginApi} from "@/network/api";
import {getCurrentInstance} from "vue";

export default {
  name: "GoodsPage",
  components:{
    TopLine,
    SecondLine,
    GoodItemCard
  },

  data(){
    return {
      goodsList: [],
      globalProperties: '',
      hasLogin: false
    }
  },
  mounted() {
    this.globalProperties = getCurrentInstance().appContext.config.globalProperties
    // 如果商品列表为空，就重新加载
    if (this.goodsList.length === 0){
      this.reloadGoodsList()
    }
    // 自动登录
    this.loginAuto()
  },
  methods:{
    reloadGoodsList(){
      goodList()
          .then(res => {
            this.goodsList = res.data
          })
    },
    loginAuto(){
      let username = localStorage.getItem("username")
      let password = localStorage.getItem('password')

      console.log(username + " | " + password)
      if (username.length > 0 && password.length > 0){
        loginApi(username,password)
            .then(res => {
              this.globalProperties.userId = res.data
              localStorage.setItem("username", username)
              localStorage.setItem("password", password)
              localStorage.setItem("userId", res.data)
              this.hasLogin = true
            })
      }
    }
  }
}
</script>



<style scoped>

.MainContainer{
  width: 63%;
  overflow: auto;
  text-align: center;
  margin: 10px auto;
  padding: 3px 7px;
  background: #f5f5f5;
}



</style>