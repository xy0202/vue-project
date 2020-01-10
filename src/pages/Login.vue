<template>
  <div class="login">
    <div class="cont">
      <div class="form">
        <h3>会员登录</h3>
        <span>用户名</span>
        <input type="text" placeholder="请输入您的用户名" v-model="username" />
        <span>密码</span>
        <input type="text" placeholder="请输入您的密码" v-model="password" />

        <div class="icon">
          <a class="iconfont icon-wechat"></a>
          <a class="iconfont icon-weibo"></a>
          <a class="iconfont icon-zhifubao"></a>
        </div>

		{{errMess}}
        <a class="btn" @click="login">登录</a>

        <div class="tip">
          <router-link to="/reg" class="my" tag="li">
            <!-- <a href="/reg">新用户注册</a> -->
            新用户注册
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// import Header from '../components/Header'
// import * as types from '../store/types.js';
// import {mapActions ,mapState} from 'vuex'
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      errMess: ""
    };
  },
  // methods: {
  //   login() {
  //     axios({
  //       url: "./api/login",
  //       method: "post",
  //       data: {
  //         username: this.username,
  //         password: this.password
  //       }
  //     }).then(
  //       res =>
  //         res.data.err === 0
  //           ? this.$router.push("/home")
  //           : (this.errMess = res.data.msg)
  //       // console.log(),
  //     );
  //   }
      methods:{
        // ...mapActions([types.UPDATE_USER]),

      login(){

        // 发送dispsatch请求-> actions 抓取成功或者失败的数据，写入state

        this.$store.dispatch("UPDATE_LOGIN",{username:this.username,password:this.password}).then(

          receipt=>{receipt.err===0? this.$router.push('/home') : (this.errMess = receipt.msg)

          }

        )

      }
  }
};
</script>

<style scoped>
/* .login{background:green;padding:140px 0;overflow: hidden;} */
.login .form {
  float: right;
  width: 93%;
  background: #fff;
  margin: 25px;
  color: #666;
}
.login .form h3 {
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 20px;
  border-bottom: solid 1px #eee;
  color: #bb111e;
  margin-bottom: 30px;
}
.login .form input,
.login .form .btn {
  border-radius: 5px;
  border: solid 1px #eee;
  padding: 12px;
  margin-bottom: 20px;
  width: 100%;
}
.login .form .btn {
  background: #bb111e;
  color: #fff;
  display: block;
  border: none;
  text-align: center;
  font-size: 18px;
}
.login .form .icon {
  text-align: right;
  margin-bottom: 15px;
}
.login .form .icon a {
  font-size: 22px;
  color: #999;
  padding-left: 15px;
}
.login .form .tip a {
  color: #666;
}


</style>