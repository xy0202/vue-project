<template>
  <div class="detail">
    <ul>  
      <li class="cont"
      
      >
        <div class="d_top">
          <div class="l">
            <div class="preview">
              <div id="vertical" class="bigImg">
                 <img :src="detail.itemCode" alt="">
              </div><!--bigImg end-->  
            </div>
          </div>
          <!-- <script src="../assets/js/detail.js"></script> -->
          <div class="r">
            <h3>{{detail.Cpmc}}</h3>
            <div class="info">{{detail.instro}}</div>
            <div class="text">
              <h4>产品规格</h4>
              <ul>
                <li>款号:86591B-GD</li>
                
                <li>长度:19厘米</li>
                <li>价格类型:计价</li>
                <li>价格:¥{{detail.price}}</li>
              </ul>
            </div>
            <div class="box">
                <a href="javascript:;" @click='addItem(detail)'>加入购物车</a>
                <router-link  active-class = "active" to="/Car">
                进入购物车
                </router-link>
            </div>
          </div>
        </div>
        <div class="d_fot">
          <div class="d_tit"><a class="act">产品详情</a> | <a >产品介绍</a> | <a >配送与退换</a></div>
          <div class="d_main dmain1">
            <img src="../assets/img/x5.jpg" alt="">
          </div>
          <div class="d_main dmain2">
            <img src="../assets/img/x6.jpg" alt="">
          </div>
          <div class="d_main dmain3">
            <img src="../assets/img/x8.jpg" alt="">
          </div>
        </div>
      </li>
    </ul>
  </div>
  
</template>

<script>
// import axios from 'axios';
import {mapState,mapActions} from 'vuex'
export default {
  props:['id','dataName'],
  mounted(){

    // this.$root.bLoading=true
    // console.log(11111111,this.dataName);
    this.$store.dispatch('UPDATE_DETAIL',{id:this.id,dataName:this.dataName})

  },
  
  methods:mapActions(['addItem']),
  computed:mapState(['detail']),

  // data(){
  //   return{
  //     detail:{}
  //   }
  // },
  // mounted(){
    
  //   // this.$root.bLoading = true
    
  //   axios({
  //     url:'/api/'+this.$route.query.dataName+'/'+this.$route.params.id
  //   }).then(
  //     // this.$root.bLoading = false,
  //     res=>this.detail=res.data.data
  //   )
  // },
  
}

  

</script>

<style scoped>
/* .detail{padding:50px 0 30px;} */
/* .detail .d_top .l,.detail .d_top .r{width: 50%;} */
img{width:117%}
.detail .d_top .r{padding:10px;overflow: hidden;}
.detail .d_top .r h3{font-size: 22px;color: rgb(8, 234, 250);margin:5px 0;}
.detail .d_top .r .info{font-size: 16px;color: rgb(250, 8, 89);margin: 10px 0 20px;}
.detail .d_top .r .text{background: #f8f8f8;width:50%;float:left;}
.detail .d_top .r .text h4{font-size: 18px;margin-bottom: 15px;}
/* .detail .d_top .r .text ul{overflow: hidden;} */
.detail .d_top .r .text ul li{width:100%;margin-bottom: 5px;}
.detail .d_top .r .box{float:left;padding-left:15px;width:45%;}
.detail .d_top .r a{height:40px;display: inline-block;background: #a71c1f;color: #fff;margin-top:30px;font-size: 20px;line-height:40px;text-align: center;border-radius: 3px;display: flex;justify-content: center;}
.detail .d_top .r a i{font-size: 32px;margin-right: 10px;}
.detail .d_fot{clear: both;padding-top: 30px;}
.detail .d_fot .d_tit{border-bottom: solid 1px #d2d2d2;text-align: center;margin-bottom: 15px;color: #999;padding:10px 0;}
.detail .d_fot .d_tit a{color: #999;padding:0 5px;font-size: 16px;cursor: pointer;}
.detail .d_fot .d_tit a.act{color: #333;}
.detail .d_fot .d_main{padding:30px 0 0;}
.detail .d_fot .dmain1{display: block;}
.detail .d_fot .d_main img{width: 90%;}

.detail .d_top .l{padding-right: 50px;}
</style>
