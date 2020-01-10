
//引入
import Vue from 'vue';
import Vuex from 'vuex';

//安装插件
Vue.use(Vuex);

//引入
import state from '../store/state'
import actions from '../store/actions'
import mutations from '../store/mutations'
import getters from '../store/getters'


//实例化store实例
let store = new Vuex.Store({
  state,actions,getters,mutations
});

export default store;