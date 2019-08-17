import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '上海'
  },
  getters: {
    //选到目前的城市
    getCity(state) {
      return state.city; //像接受COOKIE值一样接受CITY值
    }
  },
  mutations: {
    setCity(state, name) {
      state.city = name  //在传输数据的组件上设置需要更新的CITY值
    }
  },
  actions: {
    //异步传输或者导出数据的地方
    setCityName({ commit, state }, name) {
      commit('setCity', name)
    }
  }
})
