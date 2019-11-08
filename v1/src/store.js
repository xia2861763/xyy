// 跨组件数据传递使用Vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    lists:[]
  },
  mutations:{
    addItem(state,value){
      state.lists.push(value)
    }
  },
  actions:{

  }
})
