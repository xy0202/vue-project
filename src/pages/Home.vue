<template>
<div class="home">
<Slider></Slider>
<List :list="$store.state.home" dataName="home"></List>
<!-- <Footer  v-if="true"></Footer> -->
</div>

</template>

<script>
// import axios from 'axios';//输入axios
import List from '../components/List';
// import Footer from "../components/Footer";
import Slider from "../components/Slider";
import * as types from '../store/types.js' 
// import {mapActions,mapState,mapGetters} from 'vuex'

export default {
 // name:'home',
 props:['off','on'],
  data(){
    return {
      // list:[],
      // douban:[]
    }
  },
 components: {
    List,Slider
  },
  // mounted(){
  //   axios({
  //     url:'/api/home',
  //     params:{_page:1,_limit:10}
  //   }).then(
  //     res=>this.list=res.data.data
  //   )
    // window.axios({
    //   url:'/douban/v2/movie/top250',
    //   params:{start:1,count:10}
    // }).then(
    //   res=>this.douban=res.data
    // )
	activated(){
		this.$store.dispatch(types.UPDATE_HOME)    
	},

	mounted(){
		this.$store.dispatch('UPDATE_HOME')
	},

  
}
</script>

<style scoped>

</style>
