<template>
  <div class="main">
    <div class="backImg"></div>
    <div class="register" style="position: absolute">
      <div class="title">
        <span>Register</span>
      </div>

      <el-form :model="dataFrom" class="registerForm">
        <el-form-item>
          <el-input class="username" v-model="dataFrom.username" placeholder="用户名"></el-input>
        </el-form-item>

        <el-form-item>
          <el-input class="password" v-model="dataFrom.password" placeholder="密码" ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button class="registerButton" type="primary" @click="registerClick" plain>注册</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>



<script>

import {registerApi} from "@/network/api";
import {getCurrentInstance} from "vue";

export default {
  name: "RegisterPage",
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
    registerClick() {

      registerApi(this.dataFrom.username,this.dataFrom.password)
          .then(res => {
            console.log(res.data)
            if (res.data === 'OK'){
              localStorage.setItem("username", this.dataFrom.username)
              localStorage.setItem("password", this.dataFrom.password)
              this.$router.push("/");
            } else {
              alert(res.data)
            }
          })
    }
  }
}
</script>

<style scoped>

.register {
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

.register .title {
  text-align: center;
  padding-bottom: 5px;
}

.register .title span {
  font-size: 30px;
  color: #000;
}

.registerForm{
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

.registerButton {
  background-color: #ff5252;
  text-align: center;
  color: white;
  border: none;
  padding: 0px 20px;
  height: 30px;
  border-radius: 3px;
}

</style>





