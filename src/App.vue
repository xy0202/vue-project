<template>
  <div id="app">
    <!-- <Slider></Slider> -->
    <!-- <Loading v-if="$store.state.bLoading"></Loading> -->
    <transition
			enter-active-class = "animated bounceInLeft"
    >
    <router-view></router-view>
    </transition>
    <Footer  v-if="ww"></Footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Header from "./components/Header";
import Footer from "./components/Footer";
// import Slider from "./components/Slider";
// import Loading from "./components/Loading";
export default {
  name: 'app',
  data(){
    return{
      ww:'true'
    }
  },
  components: {
    Footer
  },
  watch: {
    $route:{
      handler(nextRoute) {
        let path = nextRoute.path;
        if(/home|detail|user/.test(path)){
          
         this.ww = true
        }
        if(/login|reg|Car/.test(path)){
          
         this.ww = false
        }
      //属性检测，路由观测
      },
      immediate: true
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
