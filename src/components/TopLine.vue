<template>

  <el-container class="topLine" >
    <a class="home" href="/" >首页</a>

    <el-container>

      <el-container class="noLogin">

        <router-link class="login" to="/login" v-if="!hasLogin">登录</router-link>
        <router-link class="register" to="/register" v-if="!hasLogin">注册</router-link>

      </el-container>

      <router-link class="logout" to="/" v-if="hasLogin" @click="logout">退出</router-link>

      <router-link class="order" to="/orderPage" v-if="hasLogin">订单列表</router-link>

      <router-link class="cart" to="/cartPage" v-if="hasLogin">购物车</router-link>

    </el-container>

  </el-container>

</template>

<script>


export default {
  name: "TopLine",
  props:[
      'hasLogin'
  ],
  methods:{
    logout(){
      localStorage.removeItem('username')
      localStorage.removeItem('password')
      localStorage.removeItem('userId')
      this.$router.push("/login");
    }
  }
}
</script>

<style scoped>

.topLine{
  width: 80%;
  overflow: auto;
  text-align: center;
  margin: 10px auto;
  padding: 3px 7px;
  background: #f5f5f5;
}

.home{
  float: left;
  text-decoration: none;
  color: #c85a54;
}

.noLogin {
  float: right;
}

.cart {
  float: right;
  margin-right: 10px;
  text-decoration: none;
  color: #c85a54;
}

.order{
  float: right;
  margin-right: 10px;
  text-decoration: none;
  color: #c85a54;
}

.logout{
  float: right;
  text-decoration: none;
  color: #c85a54;
}

.register{
  text-decoration: none;
  color: #c85a54;
}

.login{
  margin-right: 10px;
  text-decoration: none;
  color: #c85a54;
}

</style>