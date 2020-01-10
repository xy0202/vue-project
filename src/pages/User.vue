<template>
  <div class="user">
    <div class="content">
      <div class="header">
        <h2>
          <img :src="baseUrl + user.icon" alt />
        </h2>
        <div class="user-box">
          <a>{{user.nikename}}</a>
          <a href="javascript:;" @click="logout">注销</a>
        </div>
        <ul class="clear">
          <li>
            <span>123</span>
            <p>订单</p>
          </li>
          <li>
            <span>345</span>
            <p class="end">好友</p>
          </li>
        </ul>
      </div>
      <div class="docList">
        <ul>
          <li class="gk">
            <i></i>
            <p>会员福利</p>
            <b></b>
          </li>
          <li class="mm">
            <i></i>
            <p>我的优惠</p>
            <b></b>
          </li>
          <li class="cg">
            <i></i>
            <p>服务中心</p>
            <b></b>
          </li>
          <li class="sc">
            <i></i>
            <p>收藏夹</p>
            <b></b>
          </li>
          <li class="my">
            <i></i>
            <p>设置</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {}
    };
  },
  beforeRouteEnter(to, from, next) {
    //异步条件
    axios({
      url: "/api/user"
    }).then(res =>
      res.data.err === 0
        ? next(_this => (_this.user = res.data.data))
        : next("/login")
    );
  },
  methods: {
    logout() {
      axios({
        url: "/api/logout",
        method: "delete"
      }).then(res => (res.data.err === 0 ? this.$router.push("/login") : null));
    }
  }
};
</script>

<style scoped>
body {
  background: #f2f4f5;
}

.content {
  margin: 0 auto;
  margin-bottom: 0.8rem;
}
.content .header {
  width: 100%;
  height: 10rem;
  background: #fa7000;
  padding-top: 0.3rem;
}
.content .header .user-box{
  height:2rem;
}
.content .header .user-box a{
  color: rgb(63, 63, 63);
  font-size:16px;
  line-height: 2rem;
}
.header h2 {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin: 0 auto;
 
}
.header h2 img {
  width: 100%;
  height:100%;
}
.header .box {
  width: 1.14rem;
  font-size: 0.3rem;
  color: #fff;
  margin: 0 auto;
  margin-top: 0.2rem;
}
.box a {
  color: #fff;
}
.header ul {
  margin-top: 0.3rem;
}
.header ul li {
  width: 50%;
  height: 2.5rem;
  float: left;
  color: #fff;
}
.header ul li span {
  height: 0.37rem;
  line-height: 0.37rem;
  text-align: center;
  display: block;
  font-size: 0.3rem;
}
.header ul li p {
  text-align: center;
  font-size: 1rem;
  height: 0.32rem;
  line-height: 0.32rem;
  border-right: 1px solid #fff;
}
.header ul li p.end {
  border: 0;
}

.content .docList {
  width: 100%;
  margin-top: 0.32rem;
}
.content .header .box {
  width: 5rem;
  text-align: center;
}
.content .header .box a {
  font: 16px/16px "";
}
.docList ul {
  border-top: 1px solid #a5a5a5;
}
.docList ul li {
  width: 100%;
  background: #fff;
  height: 2.7rem;
  border-top: 1px solid #bcbbba;
  border-bottom: 1px solid #7b7c7c;
}
.docList ul li span {
  float: right;
  margin-right: 0.14rem;
  margin-top: 0.26rem;
}
.docList ul li b {
  width: 1rem;
  height: 2rem;
  background: url(../assets/img/next_img.png) no-repeat 0 0;
  background-size: 100%;
  float: right;
  margin-right: 0.34rem;
  margin-top: 0.6rem;
}

.docList ul .gk i {
  width: 1.5rem;
  height: 1.5rem;
  background: url(../assets/img/gk_text.png) no-repeat 0 0;
  background-size: 100%;
  float: left;
  margin-left: 0.29rem;
  margin-top: 0.5rem;
}
.gk p {
  float: left;
  font-size: 1rem;
  margin-left: 0.29rem;
  margin-top: 0.5rem;
}
.docList ul .mm i {
  width: 1.5rem;
  height: 1.5rem;
  background: url(../assets/img/mm_text.png) no-repeat 0 0;
  background-size: 100%;
  float: left;
  margin-left: 0.32rem;
  margin-top: 0.5rem;
}
.mm p {
  float: left;
  font-size: 1rem;
  margin-left: 0.35rem;
  margin-top: 0.5rem;
}
.docList ul .cg i {
  width: 1.5rem;
  height: 1.5rem;
  background: url(../assets/img/cg_text.png) no-repeat 0 0;
  background-size: 100%;
  float: left;
  margin-left: 0.29rem;
  margin-top: 0.5rem;
}
.cg p {
  float: left;
  font-size: 1rem;
  margin-left: 0.29rem;
  margin-top: 0.5rem;
}
.docList ul .sc i {
  width: 1.5rem;
  height: 1.5rem;
  background: url(../assets/img/sc_text.png) no-repeat 0 0;
  background-size: 100%;
  float: left;
  margin-left: 0.29rem;
  margin-top: 0.5rem;
}
.sc p {
  float: left;
  font-size: 1rem;
  margin-left: 0.29rem;
  margin-top: 0.5rem;
}
.docList ul .my {
  margin-top: 0.45rem;
}
.docList ul .my i {
  width: 1.5rem;
  height: 1.5rem;
  background: url(../assets/img/my_cz.png) no-repeat 0 0;
  background-size: 100%;
  float: left;
  margin-left: 0.29rem;
  margin-top: 0.5rem;
}
.my p {
  float: left;
  font-size: 1rem;
  margin-left: 0.29rem;
  margin-top: 0.5rem;
}
</style>
