import axios from 'axios';

const API_URL = 'http://localhost:8080/api/accounts';

export const register = (email, password) => {
  return axios.post(API_URL + '/register', {
    email: email,
    password: password
  });
};

export const login = (username, password) => {
  return axios
    .post(API_URL + '/login', {
      username: username,
      password: password
    })
    .then(response => {
      if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
    });
};

export const logout = () => {
  return axios.get(API_URL + '/logout').then(response => {
    if (response.status === 200) {
      localStorage.removeItem('user');
    }
  });
};
