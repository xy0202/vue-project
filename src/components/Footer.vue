<template>
  <div class="foote">
    <div class="box">
      <ul>
        <router-link 
        to="/home" 
        class="home" 
        active-class="home_active" 
        tag="li">
          <img src="../assets/img/shouye.png" alt />
          <p class="te">首页</p>
        </router-link>
        <!-- <router-link  to="/list">
                    <img src="../assets/img/list.png" alt="">
                    <p>列表</p>
        </router-link>-->
        <router-link 
        to="/car"
        class="write"
        active-class="write_active"
        tag="li"
        >
          <img src="../assets/img/car.png" alt />
          <p>购物车</p>
        </router-link>

        <router-link 
        to="/user"
        class="my"
        active-class="my_active"
        tag="li"
        >
          <img src="../assets/img/user.png" alt />
          <p>我的</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "foote"
};
</script>
<style scoped>
html {
  position: relative;
}
.foote {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: rgb(240, 237, 236);
}
.foote .box ul {
  display: flex;
  margin: 3px 0;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: nowrap;
  background:pink;
}
.foote .box ul img {
  width: 25px;
  height: 25px;
  margin-top:6px;
}
.foote .box ul p {
  font: 14px/16px "";
  margin: 0;
}
.foote .box ul p.te {
  color: rgb(55, 121, 175);
}
</style>