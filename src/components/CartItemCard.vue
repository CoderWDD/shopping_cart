<template>
  <el-container v-if="!Item.delete">
    <el-container class="goodCardList">
      <el-container class="checkbox">
        <input class="singleCheckBox" type="checkbox" v-model="Item.check"/>
      </el-container>
      <el-container class="goodCardImage">
        <img class="goodImg" :src=" `http://202.193.53.235:8080/` + Item.thumbnail" >
      </el-container>
      <el-container class="goodCardName" v-text="Item.name"></el-container>
      <el-container class="goodCardPrice" v-text="`￥`+ Item.price"></el-container>
      <el-container class="text">
        <p class="goodNum" v-text="Item.num"></p>
      </el-container>
      <el-container class="orderSumMoney" v-text="`￥` + Item.num * Item.price"></el-container>
      <el-container class="goodCardDelete">
        <el-button @click="onRemoveGood">删除</el-button>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import {deleteCartGoodApi} from "@/network/api";

export default {
  name: "CartItemCard",
  props:[
      'item'
  ],
  data(){
    return {
      Item : []
    }
  },
  mounted() {
    this.Item =  this.item
  },
  methods:{
    onRemoveGood(){
      this.Item.check = false
      this.Item.delete = true
      deleteCartGoodApi(localStorage.getItem('userId'),this.Item.cardid)
    }
  }
}
</script>

<style scoped>

.goodCardList {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  height: 180px;
  background-color: #fff4e8;
}
.checkbox {
  position: absolute;
  left: 4px;
  line-height: 180px;
}

.goodCardImage {
  position: absolute;
  left: 50px;
  top: 2.5px;
  width:187.5px;
  height:187.5px
}

.goodImg{
  width: 100%;
}

.goodCardName {
  position: absolute;
  left: 250px;
  width: 330px;
  line-height: 180px;
}

.goodCardPrice {
  position: absolute;
  left: 575px;
  line-height: 180px;
}

.goodNum{
  position: absolute;
  left: 750px;
  line-height: 180px;
  text-align: center;
}

.orderSumMoney {
  position: absolute;
  left: 915px;
  line-height: 180px;
}
.goodCardDelete button {
  position: absolute;
  left: 1090px;
  top: 79px;
  border: none;
  color: rgb(57, 73, 254);
  background-color: #fff4e8;
}
</style>