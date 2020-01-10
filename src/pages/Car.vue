<template>
  <div class="car">
      <div class="panel panel-info ">
	<router-link to="/home">回到首页</router-link>
        <div class="panel-body bg-info">
          <div class="checkbox">
            <label>
              <input id="selectAll" type="checkbox" value="" v-model="checkAll">
              全选
            </label>
            <!-- <span>&nbsp;&nbsp;&nbsp; 商品种类：2</span>
            <span>&nbsp;&nbsp;&nbsp; 所选商品数量： 3</span> -->
            <span>&nbsp;&nbsp;&nbsp; 所选商品价格： ￥{{totalMoney}}</span>&nbsp;&nbsp;&nbsp;
            <button id="pay" type="button"  class="btn btn-warning btn-xs">去结算</button>&nbsp;&nbsp;&nbsp;
            <button type="button" id="clear" class="btn btn-danger btn-xs" @click="clearBuycar">清空购物车</button>
          </div>
          <div class="panel-footer">
            <ul class="cart-list">
              <li class="cart-item"
                v-for="(item,index) of buycar" 
                 :key="item._id"
              >
                <div class="left">
                  <input  id="select" data-id="1234" type="checkbox" v-model="checked"  @click="currClick(item,index)">
                </div>
                <div class="right">
                  <div class="media">
                    <div class="media-left">
                      <a href="#">
                        <img class="media-object" :src="item.itemCode" alt="...">
                      </a>
                    </div>
                    <div class="media-body">
                      <!-- <h4 class="media-heading">￥999</h4> -->
                      <p>
                        <i class="glyphicon glyphicon-yen"></i>
                        <span>单价￥{{item.price}}</span>
                      </p>
                      
                      <button id="del" data-id="1234" class="btn btn-danger" @click="clearBuycar" v-show="buycar.length>0">删除</button>
                      

                    </div>
                    <div class="btn-group pull-right" role="group" aria-label="...">
                        <span class = "aaa">总价￥{{item.price*item.number}}</span>
                        <button data-id="1234" type="button" class="btn btn-default" id="sub" @click="changeItem({_id:item._id,num:-1})">-</button>
                        <button type="button" class="btn btn-default" disabled>{{item.number}}</button>
                        <button data-id="1234}" type="button" class="btn btn-default" id="add" @click="changeItem({_id:item._id,num:1})" >+</button>
                      </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </div>    
</template>

<script>
// import * as types from "../store/types.js";
// import store from '../plugins/vuex'
// import { mapState, mapActions, mapGetters } from "vuex";
import { mapState, mapActions } from "vuex";
export default {
   data() {
    return {
	
      checked:[],
    totalPrice:[],
    };
  },
 
computed: {
    ...mapState(["buycar"]),
   
	// totalMoney:function(item,index){
		totalMoney:function( ){
                let sum = 0;
                for(let i=0;i<this.totalPrice.length;i++){
                    sum += this.totalPrice[i];
                }
                return sum;
            },
            checkAll: {
                get: function() {
					
                    return this.checkedCount == this.buycar.length;
                },
                set: function(value){
                    var _this = this;
                    if (value) {   
                        this.totalPrice = [];
                        this.checked = this.buycar.map(function(item) {
                            item.checked = true;
                            let total = item.price*item.number;
                            _this.totalPrice.push(total);
                            return item._id
                        })
                    }else{
                        this.checked = [];
                        this.totalPrice=[];
                        // this.buycar.forEach(function(item,index){
							this.buycar.forEach(function(item){
                            item.checked = false;
                        });
                    }
                }
            },
            checkedCount: {
                get: function() {
                    return this.checked.length;
                }
            }
  },
  methods: {
    ...mapActions(['changeItem','clearBuycar','removeItem',]),
 // currClick:function(item,index){
	currClick:function(item){
                var _this = this;
                if(typeof item.checked == 'undefined'){
                    this.$set(item,'checked',true);
                        let total = item.price*item.number;
                        this.totalPrice.push(total);
                        // console.log(this.totalPrice);
                }else{
                    item.checked = !item.checked;
                    if(item.checked){
						this.totalPrice = [];
						// console.log(this.buycar)
                        // this.buycar.forEach(function(item,index){
							this.buycar.forEach(function(item){
                            if(item.checked){
                                let total = item.price*item.number;
                                _this.totalPrice.push(total);
                            }
                        });
                    }else{
                        this.totalPrice = [];
                        // this.buycar.forEach(function(item,index){
							this.buycar.forEach(function(item){
                            if(item.checked){
                                let total = item.price*item.number;
                                _this.totalPrice.push(total);
                            }
                        });
                    }
                }
            }
        




  }
};

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

ul, li, ol {
  list-style: none;
}
.list-group-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
}
/* .list-grou-item .item {
    
} */
.list-group-item img {
    height: 100px;
}


.cart-list {
    border-bottom: 1px solid skyblue;
  }
  
  .cart-item {
    display: flex;
    border: 1px solid skyblue;
    padding: 10px;
    border-bottom: 0px solid #000;
  }
  
  .cart-item > .left {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
  }
  
  .media img {
    width: 100px;
    height: 100px;
  }
  
  h4 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  
  p {
    margin-bottom:10px;
    font-size: 20px;
    color: red;
  }
  .right{
width:100%;
    overflow:hidden;
    position:relative;
  }
  .media{
    overflow:hidden;
  }
  .media-left{
    float:left;
  }
  .media-body{
    float:left;
    margin:0 5px;
    margin-top:20px;
  }
  
 .media-body p span{
	font:14px/16px "";
 }
  .pull-right{
  
    position:absolute;
    right:0;
    top:35px;
 
  }
  .pull-right .aaa{
    margin-right:10px;
    font:14px/16px "";
  }

</style>