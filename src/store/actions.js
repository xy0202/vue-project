//批量导出的 输入方式2
// import * as 变量 from './types';// 变量 == 对象    对象.属性  == 输出的变量
import * as types from './types'

// import {VIEW_ZHUCE,VIEW_DENGLU,VIEW_LOADING,UPDATE_HOME,UPDATE_LIST,UPDATE_DETAIL,UPDATE_CAR,CLEAR_CAR} from './types'
import axios from '../plugins/axios'
// import axios from 'axios'

export default {
  [types.UPDATE_HOME]: ({ commit, state }, payload) => {
    axios({
      url: '/api/home',
      params: {
        _page: 1,
        _limit: 10,
      }
    }).then(
      res => {commit(types.UPDATE_HOME, res.data.data)
        // res=>console.log(res.data.data)
      }
    )
  },
  [types.UPDATE_DETAIL]: ({ commit, state }, payload) => {
    //从parload里面解构出dataName id
    let { dataName, id } = payload;
    axios({
      url: `/api/${dataName}/${id}`,
    }).then(
      // res=>console.log(res.data.data),
      // res=>console.log(dataName),
      res => commit(types.UPDATE_DETAIL, res.data.data)
    )
  },
  [types.UPDATE_LOGIN]: ({ commit, state }, payload) => {
    //actions->//抓取成功或者失败的数据，写入state, 同步localstorage->返回回执信息
    let { username, password } = payload;
    console.log(payload);
    
    return axios({
      url: "/api/login",
      method: "post",
      data: {
        username,
        password
      }
    }).then(res => {
      console.log(res.data);
      
      commit('UPDATE_LOGIN',res.data);//写入state
      window.localStorage.setItem('1909_news_app',JSON.stringify(res.data))
      return {err:res.data.err,msg:res.data.msg}
    });
  },

  addItem:({commit,state},payload)=>{ 

    let arr=[...state.buycar];

    let find=false;

    arr.forEach((item,index)=>{
      if(item._id==payload._id){
        item.number++;//数量递增
        find=true;
      }
    });
    if(!find) {
      payload.number=1;//数量
      arr.push(payload);
    }
    // commit(types.ADD_ITEM,[...state.buycar])
    commit('ADD_ITEM',arr)
  },

  changeItem:({commit,state},payload)=>{
    // [...state.buycar]
    // {...state}

    console.log('changeItem',payload)
    state.buycar.forEach((item,index)=>{
      if(item._id==payload._id){
        item.number+=payload.num;
      }
    });
    //如果是对象，需要复制一份，不然state.buycar指向的是复制后state修改之前的引用
    commit('CHANGE_ITEM',state.buycar)
    // commit(types.CHANGE_ITEM,state)  ×
  },
  
  removeItem:({commit,state},payload)=>{
    
    state.buycar.forEach((item,index)=>{
      if(item._id==payload._id){
        state.buycar.splice(index,1);
      }
    });
    commit('REMOVE_ITEM',[...state.buycar]);
    // commit(types.REMOVE_ITEM,state.buycar);
  },

  clearBuycar:({commit,state})=>{
    commit('CLEAR_BUYCAR',[]);
  },
  
     
}


// commit函数   state数据  payLOAD 负载

