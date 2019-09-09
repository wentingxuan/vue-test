import { loginByEmail, getUserInfo } from './../../api/user';
import Cookies from 'js-cookie';

const users = {
  state:{
    user: '',
    status: '',
    uid: '',
    name: '',
    token:Cookies.get('token'),
    introduction: '',
    roles: []
  },
  mutations:{
    SET_NAME:(state,username)=>{
      state.username = username;
    },
    SET_ROLES:(state,role)=>{
      state.role = role;
    },
    SET_UID:(state,uid)=>{
      state.uid = uid;
    },
    SET_INTRODUCTION:(state,introduction)=>{
      state.introduction = introduction;
    },
    SET_TOKEN:(state,token)=>{
      state.token = token;
    }
  },
  actions: {
    // 邮箱登录
    LoginByEmail({ commit }, userInfo) {
      const username = userInfo.username;
      return new Promise((resolve, reject) => {
        loginByEmail(username, userInfo.password).then(response => {
          const data = response.data;
          console.log(response.data);
          commit('SET_NAME', username); //将数据写入state中
          commit('SET_TOKEN', data.token);
          Cookies.set('token',data.token);
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },


    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(response => {
          const data = response.data;
          commit('SET_ROLES', data.role);
          commit('SET_NAME', data.name);
          commit('SET_UID', data.uid);
          commit('SET_INTRODUCTION', data.introduction);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    }
  }
}

export default users
