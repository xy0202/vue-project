<template>
  <div class="reg">
      <div class="cont">
        <div class="form">

          <h3>会员注册</h3>
          <span>用户名</span>
          <input type="text" placeholder="请输入您的用户名" v-model = "username"/>
          <span>密码</span>
          <input type="text" placeholder="请输入您的密码" v-model = "password"/>
          
          <div class="icon"><a class="iconfont icon-wechat"></a><a class="iconfont icon-weibo"></a><a class="iconfont icon-zhifubao"></a></div>
          {{errMess}}
          <a class="btn" @click="reg">注册</a>
          <div class="tip"><router-link :to="{path:'/login'}">用户登录</router-link></div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      username:'',
      password:'',
      errMess:'',
    }
  },
  methods:{
    // selectIcon() {
    //   let input = document.getElementById("icon");
    //   input.click();
    // },
    reg() {
      let formData = new FormData();
      formData.append("username", this.username);
      formData.append("password", this.password);
      // let input = document.getElementById("icon");
      // formData.append("icon", input.files[0]);
      axios({
        url:'./api/reg',
        method:'post',
        data: formData
      }).then(
        
        res=>res.data.err===0?this.$router.push('/login'):this.errMess=res.data.msg,
        // console.log(this.username),
      )
    }
  }
}
</script>

<style scoped>
/* .reg{background: url(../assets/img/banner.gif) no-repeat center;padding:140px 0;overflow: hidden;} */
.reg .form{float: right;width:93%;background: #fff;padding:25px;color: #666;}
.reg .form h3{font-size: 24px;font-weight: 600;padding-bottom: 20px;border-bottom: solid 1px #eee;color: #bb111e;margin-bottom: 30px;}
.reg .form input,.login .form .btn{border-radius: 5px;border:solid 1px #eee;padding:12px;margin-bottom: 20px;width: 100%;}
.reg .form .btn{background: #bb111e;color: #fff;display: block;width:108%;border:none;text-align: center;font-size: 20px;padding:5px 0;border-radius: 5px;}
.reg .form .icon{text-align: right;margin-bottom: 15px;}
.reg .form .icon a{font-size: 22px;color: #999;padding-left:15px;}
.reg .form .tip{margin-top:5px;}
.reg .form .tip a{color: #666;}
</style>