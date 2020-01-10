import {
  // VIEW_ZHUCE,
  VIEW_FOOT,
  VIEW_LOADING,
  UPDATE_HOME,
  UPDATE_LOGIN,
  UPDATE_DETAIL,
  UPDATE_CAR,
  CLEAR_CAR,
  UNREGIT
} from './types'

export default {
  // 'VIVE_ZHUCE':(state,payload)=>{state.zhuce = payload}
  // [VIVE_ZHUCE]:(state,payload)=>state.zhuce = payload,
  [VIEW_FOOT]:(state,payload)=>state.bFoot = payload,
  [VIEW_LOADING]: (state, payload) => state.bLoading = payload,
  [UPDATE_LOGIN]: (state, payload) => state.login = payload,
  [UPDATE_HOME]: (state, payload) => state.home = payload,
  [UPDATE_DETAIL]: (state, payload) => state.detail = payload,
  // [UPDATE_LIST]:(state,payload)=>state.list = payload,
  [UPDATE_CAR]: (state, payload) => state.car = payload,
  [CLEAR_CAR]: (state, payload) => state.car = payload,
  [UNREGIT]: (state, payload) => state.login = payload,
  // [types.ADD_ITEM]:(state,payload)=>{
  //   state.buycar = payload;//替换的是action传递过来的新值
  // },
  // [types.CHANGE_ITEM]:(state,payload)=>{
  //   state.buycar = payload;
  // },
  // [types.REMOVE_ITEM]:(state,payload)=>{
  //   state.buycar = payload;
  // },
  // [types.CLEAR_BUYCAR]:(state,payload)=>{
  //   state.buycar = payload;
  // },
  ADD_ITEM:(state,payload)=>{
    state.buycar=payload;  //
  },
  CHANGE_ITEM:(state,payload)=>{
    state.buycar=payload; //替换的是actions传递过来的新值
  },
  REMOVE_ITEM:(state,payload)=>{
    state.buycar=payload;
  },
  CLEAR_BUYCAR:(state,payload)=>{
    state.buycar=payload;
  },


}