import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        topIndex: 0, //顶部导航栏索引
        classIndex: 0, //课程资源页面索引
    },
    mutations: {
        changePage(state,newVal){
            state.topIndex = newVal;
        },
        changePanel(state,newVal){
            state.classIndex = newVal;
        }
    },
    actions: {

    },
    modules:{

    }
})