<template>
  <div class="main">
    <div class="backImg"></div>
    <div class="login">
      <div class="title">
        <span>Login管理系统</span>
      </div>
      <div class="list">
        <el-input
            prefix-icon="el-icon-user"
            placeholder="请输入账号"
            v-model="dataFrom.username"
        ></el-input>
      </div>
      <div class="list">
        <el-input
            prefix-icon="el-icon-unlock"
            placeholder="请输入密码"
            show-password
            v-model="dataFrom.password"
        ></el-input>
      </div>
      <div class="btn">
        <button @click="loginClick">登录</button>
      </div>
    </div>
  </div>
</template>



<script>
import { useRouter} from "vue-router";

export default {
  name: "LoginPage",
  setup(){
    // const route = useRoute()
    const router = useRouter()
    const toGoodsPage = (() => {
      router.push({
        name: 'goodsPage'
      })
    })
    return {
      toGoodsPage
    }
  },
  data() {
    return {
      dataFrom: {
        username: "xq",
        password: "xq123",
        code: "",
      },
    };
  },
  mounted() {
    this.getCode();
  },
  methods: {
    loginClick() {
      if (
          this.dataFrom.username == "xq" &&
          this.dataFrom.password == "xq123" &&
          this.dataFrom.code == this.dataFrom.code
      ) {
        localStorage.setItem("username", this.dataFrom.username);
        localStorage.setItem("password", this.dataFrom.password);
        localStorage.setItem("code", this.dataFrom.code);
        this.$router.push("./home");
      }
    },
    getCode() {
      var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
      var arr = str.split("");
      var oldStr = "";
      for (var i = 0; i < 4; i++) {
        var n = Math.floor(Math.random() * arr.length);
        oldStr += arr[n];
      }
      this.dataFrom.code = oldStr.substring(oldStr.length - 4);
    },
  },

}
</script>

<style scoped>
.backImg {
  background-size: 100% 100%;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
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

.login .list {
  display: flex;
  align-items: center;
  padding: 8px 0;
}
.login .list input {
  outline-style: none;
  border-radius: 3px;
  border: none;
  outline: none;
  color: #999;
  border: 1px solid #bdbdbd;
  font-size: 14px;
  line-height: 35px;
  padding: 0 10px;
  display: block;
  box-sizing: border-box;
  flex: 7;
}

.login .list .getCode span {
  font-size: 20px;
  background: #f5f7fa;
  color: #777;
  border-radius: 4px;
  line-height: 38px;
  border: 1px solid #ccc;
  display: inline-block;
  margin-left: 10px;
  width: 80px;
  text-align: center;
  user-select: none;
  cursor: pointer;
}

.btn {
  display: flex;
  justify-content: flex-end;
  padding-top: 5px;
}
.btn button {
  font-size: 13px;
  color: #fff;
  background: #46b5ff;
  outline: none;
  border: none;
  line-height: 35px;
  padding: 0 20px;
  display: inline-block;
  flex: 1;
  cursor: pointer;
}
</style>
