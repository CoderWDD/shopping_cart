<template>
  <div class="main">
    <div class="backImg"></div>
    <div class="login" style="position: absolute">
      <div class="title">
        <span>Login</span>
      </div>

      <el-form :model="dataFrom" class="loginForm">
        <el-form-item>
          <el-input class="username" v-model="dataFrom.username" placeholder="用户名"></el-input>
        </el-form-item>

        <el-form-item>
          <el-input class="password" v-model="dataFrom.password" placeholder="密码" ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button class="loginButton" type="primary" @click="loginClick" plain>登录</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>



<script>

import {loginApi} from "@/network/api";
import {getCurrentInstance} from "vue";

export default {
  name: "LoginPage",
  data() {
    return {
      dataFrom: {
        username: '',
        password: ''
      },
      globalProperties: '',
    };
  },
  mounted() {
    this.globalProperties = getCurrentInstance().appContext.config.globalProperties
  },
  methods: {
    loginClick() {
      loginApi(this.dataFrom.username,this.dataFrom.password)
          .then(res => {
            this.globalProperties.userId = res.data
            localStorage.setItem("username", this.dataFrom.username)
            localStorage.setItem("password", this.dataFrom.password)
            localStorage.setItem("userId", res.data)
            this.$router.push("/");
          })
    }
  }
}
</script>

<style scoped>

.login {
  border-radius: 7px;
  box-shadow: 2px 3px 15px  #777777;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ccc;
  background: #fff;
  width: 20%;
  padding: 20px 20px 25px 20px;
}

.login .title {
  text-align: center;
  padding-bottom: 5px;
}

.login .title span {
  font-size: 30px;
  color: #000;
}

.loginForm{
  text-align: center;
}



.username {
  margin-bottom: 10px;
}

.username :focus{
  outline: none;
  text-align: center;
}

.password{
  margin-bottom: 10px;
}

.password :focus{
  outline: none;
  text-align: center;
}

.username ::-webkit-input-placeholder{
  text-align: center;
}

.password ::-webkit-input-placeholder{
  text-align: center;
}


.loginButton {
  background-color: #ff5252;
  text-align: center;
  color: white;
  border: none;
  padding: 0px 20px;
  height: 30px;
  border-radius: 3px;
}

</style>





