import fetch from './../utils/fetch';

export function loginByEmail(email, password) {
  const data = {
    email,
    password
  };
  return fetch({
    url: 'api/loginByEmail',
    method: 'post',
    data
  });
}

export function logout() {
  return fetch({
    url: 'login/logout',
    method: 'post'
  });
}

export function getUserInfo(token) {
  return fetch({
    url: 'api/getUserInfo',
    method: 'get',
    params: { token }
  });
}

