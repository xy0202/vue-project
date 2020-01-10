export default {

  // deatil:(state)=>{
  //   let err = state.deatil.err==0 ? true : false;
  //   return {err:err,data:state.deatil.data.data}
  // },
  detail:(state)=>{
    // let err = state.deatil.err==0 ? true : false;
    return state.detail.data ? state.detail.data.data : []
  },
  login:(state)=>{
    return state.login.data
  },
 }