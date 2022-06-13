<template>
  <el-container class="goodItem">
    <img class="goodImage" :src=" `http://202.193.53.235:8080/` + goodImg">
    <strong class="goodPrice" v-text="`￥` +  goodPrice"></strong>
    <p class="goodName" v-text="goodName"></p>
    <el-container class="numContainer">
      <button class="subNum" @click="subNum">-</button>
      <input type="number" class="inputText" v-model="goodNum"/>
      <el-button class="addNum" @click="addNum">+</el-button>
    </el-container>
    <button class="addToCart" @click="addToCart">加入购物车</button>
  </el-container>
</template>

<script>

import {getCurrentInstance} from "vue";
import {addGood} from "@/network/api";
export default {
  name: "GoodItemCard",
  props:[
      'goodId',
      'goodName',
      'goodPrice',
      'goodImg'
  ],
  data(){
    return {
      ImgUrl: '',
      MyAxios: '',
      goodNum: 1,
      globalProperties: ''
    }
  },
  methods:{


    addToCart(){
      var userId = this.globalProperties.userId

      if (userId === '') {
        var dialog = window.confirm("请先登录！")
        if (dialog){
          this.$router.push({path:'/login'})
        }
        return
      }

      addGood(this.globalProperties.userId,this.goodId,this.goodNum,this.goodPrice)
          .then(res => {
            console.log(res)
            this.goodNum = 1
          })
    },

    subNum(){
      this.goodNum -= 1
    },

    addNum(){
      this.goodNum += 1
    }
  },
  mounted() {
    this.globalProperties = getCurrentInstance().appContext.config.globalProperties
    this.MyAxios = this.globalProperties.myAxios
    this.ImgUrl = this.MyAxios.defaults.baseURL + this.goodImg
  }
}
</script>

<style scoped>

.goodImage{
  border-radius: 10px;
  text-align: center;
  max-width: 250px;
  max-width: 250px;
}

.goodPrice{
  --antd-wave-shadow-color: #1890ff;
  --scroll-bar: 0;
  font: 12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
  line-height: 22px;
  font-size: 18px;
  color: #F40;
  font-weight: 700;
  font-family: arial;
  letter-spacing: 0.8px;
}

.goodName{
  --antd-wave-shadow-color: #1890ff;
  --scroll-bar: 0;
  font: 12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
  font-family: arial,'Hiragino Sans GB',"\5b8b\4f53",sans-serif;
  font-weight: 400;
  color: #3d3d3d;
  text-decoration: none;
}

.goodItem{
  position: relative;
  border-radius: 10px;
  box-shadow: 2px 3px 15px  #77777766;
  --scroll-bar: 0;
  color: #404040;
  font: 12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
  font-family: arial,'Hiragino Sans GB',"\5b8b\4f53",sans-serif;
  margin: 15px 10px;
  float: left;
  border: 1px solid #ededed;
  width: 250px;
  height: 370px;
}

.numContainer{
  float: left;
  margin-left: 10px;
  margin-top: 20px;

}

.subNum {
  height: 30px;
  width: 25px;
  margin-right: 2px;
  font-size: 15px;
  background-color: #ffebee44;
  border-width: 0.3px;
  border-color: #ccb9bc;
  border-radius: 3px;
}

.inputText {
  display: inline-block;
  border-style: solid;
  border-width: 0.2px;
  height: 26px;
  width: 50px;
  text-align: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"]{
  -moz-appearance: textfield;
}

.addNum {
  height: 30px;
  width: 25px;
  margin-left: 2px;
  font-size: 15px;
  background-color: #ffebee44;
  border-width: 0.3px;
  border-color: #ccb9bc;
  border-radius: 3px;
}

.addNum :focus {
  outline: none;
}

button.addToCart {
  background-color: #ff5252;
  text-align: center;
  color: white;
  border: none;
  padding: 0px 20px;
  margin-right: 10px;
  float: right;
  margin-top: 20px;
  height: 30px;
}
</style>