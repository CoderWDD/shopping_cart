<template>
  <el-container v-if="!Item.delete">
    <div class="sum_buy" style="position: relative;width: 1200px;margin: 0 auto;height: 180px;background-color: #fff4e8;">
      <div class="buy_checkbox" style="position: absolute;left: 4px;line-height: 180px;">
        <input class="singleCheckBox" type="checkbox" name="fav" v-model="Item.check"/>
      </div>
      <div class="buy_good1" style="position: absolute;left: 50px;top: 2.5px;width:187.5px;height:187.5px">
        <img :src=" `http://202.193.53.235:8080/` + Item.thumbnail" style="width: 100%;">
      </div>
      <div class="introduction" style="position: absolute;left: 250px;width: 330px;line-height: 180px;" v-text="Item.name"></div>
      <div class="buy_money" style="position: absolute;left: 575px;line-height: 180px;" v-text="`￥`+ Item.price"></div>
      <div class="text">
        <p class="goodName" v-text="Item.num" style="position: absolute;left: 750px;line-height: 180px; text-align: center;"></p>
      </div>
      <div class="buy_sum_money" style="position: absolute;left: 915px;line-height: 180px;" v-text="`￥` + Item.num * Item.price"></div>
      <div class="buy_delete">
        <button @click="onRemoveGood" style="position: absolute;left: 1090px;top: 79px;border: none;color: rgb(57, 73, 254);background-color: #fff4e8;">删除</button>
      </div>
    </div>
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
    console.log(this.item.num)
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

.sum_buy {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  height: 180px;
  background-color: #fff4e8;
}
.buy_checkbox {
  position: absolute;
  left: 4px;
  line-height: 180px;
}
.sum_buy img {
  width: 15%;
}
.buy_good1 {
  position: absolute;
  left: 50px;
  top: 2.5px;
}
.introduction {
  position: absolute;
  left: 230px;
  width: 330px;
  line-height: 180px;
}
.buy_money {
  position: absolute;
  left: 575px;
  line-height: 180px;
}

.sum_buy .text input {
  position: absolute;
  left: 750px;
  top: 75px;
  height: 26px;
  width: 30px;
  text-align: center;
}

.buy_sum_money {
  position: absolute;
  left: 915px;
  line-height: 180px;
}
.buy_delete button {
  position: absolute;
  left: 1090px;
  top: 79px;
  border: none;
  color: rgb(57, 73, 254);
  background-color: #fff4e8;
}
</style>