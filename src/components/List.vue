<template>
  <div class="list">
      <ul >
        <li
        v-for="item of list"
        :key="item._id"
        >
        <router-link
          :to="'/detail/'+item._id+'?dataName='+dataName"
        >
            <img :src="item.itemCode" alt="">
            <h3>{{item.Cpmc}}</h3>
            <p>{{item.instro}}</p>
            <span>￥{{item.price}}</span>
        </router-link>
        </li>
        
      </ul>
  </div>
</template>

<script>
export default {
 
props:['list','dataName']


}
</script>

<style scoped>
ul{margin:0 -15px;overflow: hidden;background:rgb(255, 255, 255);padding:5px;}
ul li{width:47%;float: left;padding:0 5px;margin:5px 0  5px 0;cursor: pointer;}
ul li img{height: 100%;width:100%;}
/* ul li h3{font-size: 18px;overflow: hidden;display: -webkit-box;word-break: break-all;-webkit-line-clamp: 1;-webkit-box-orient: vertical;}
ul li p{color: #999;margin: 5px 0;overflow: hidden;display: -webkit-box;word-break: break-all;-webkit-line-clamp: 1;-webkit-box-orient: vertical;height: 24px;} */

ul li h3{font-size: 18px;overflow: hidden;display: -webkit-box;word-break: break-all;-webkit-line-clamp: 1;-webkit-box-orient: vertical;margin:5px 0;}
ul li p{color: #999;margin: 5px 0;overflow: hidden;display: -webkit-box;word-break: break-all;-webkit-line-clamp: 1;-webkit-box-orient: vertical;}
ul li span{color: #c2121a;font-size: 16px;}
</style>
