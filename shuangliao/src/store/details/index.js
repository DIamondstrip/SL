import axios from 'axios';
import qs from 'qs';
export default {
  namespaced: true,
  state: {
    detailobj:'',
    album:[],
    pop_gift:[]
  },
  mutations: { // 只是用来改变state的数据
    getdata(state,result){ //详情页 信息
        state.detailobj=result;
    },
    album(state,result){ //详情页 TA人相册
      state.album=result;
    },
    pop_gift(state,result){
      state.pop_gift=result;
    }
  },
  actions: {//异步操作和业务逻辑
     getdata(context,payload){ // TA人页信息
      let userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
         axios({ 
            method: "post",
            url: "/user/personal_details",
            params: {tel:userInfo.tel,uid:payload},
        }).then(result=>{
            context.commit('getdata',result.data.data)
            // console.log(result.data.data)
        })
    },
    album(context,payload){ // TA人页相册
      let userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
      let data = qs.stringify({tel:userInfo.tel,uid:payload});
      axios.post('/showTaPhotos',data).then(result=>{
        context.commit('album',result.data.data);
      })
    },
    pop_gift(context){
      let userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
      let data = qs.stringify({tel:userInfo.tel});
      axios.post('/gift/getgifts',data).then(result=>{
        context.commit('pop_gift',result.data.data);
        // console.log(result.data.data);
      })
    }

  }
}