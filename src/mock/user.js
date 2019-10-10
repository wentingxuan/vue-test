import { param2Obj } from './../utils/index';

const userMap = {
  admin: {
    role: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    name: '超级管理员',
    uid: '001'
  },
  editor: {
    role: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    name: '编辑小张',
    uid: '002'


  },
  developer: {
    role: ['developer'],
    token: 'developer',
    introduction: '我是开发',
    name: '工程师小王',
    uid: '003'
  },
  consumer:{
    role: ['consumer'],
    token: 'consumer',
    introduction: '消费者',
    name: '青青',
    uid: '004'
  }
}

export default {
  loginByEmail: config => {
    const { email } = JSON.parse(config.body);
    return userMap[email.split('@')[0]];
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url);
    if (userMap[token]) {
      return userMap[token];
    } else {
      return Promise.reject('a');
    }
  },
  logout: () => 'success'
}
