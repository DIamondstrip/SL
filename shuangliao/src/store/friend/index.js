import axios from 'axios';
export default {
  namespaced: true,
  state: {
    items:[]
  },
  mutations: { // 只是用来改变state的数据
    getdata(state,result){
      state.items=result;
    }
  },
  actions: {//异步操作和业务逻辑
    getdata(context,payload) {
      let userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
      // console.log(userInfo.tel)
      axios({
        method: "post",
        url: "/home/getusers",
        params:{tel:userInfo.tel,is_sex:payload}
      }).then(result => {
        // console.log('result.data.data',result.data.data)
        context.commit('getdata',result.data.data)
      });
    }
  }
}
