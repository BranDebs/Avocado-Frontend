import axios from 'axios';
import {BASE_URL} from "./const";

const API_URL = BASE_URL + '/accounts';

export const register = (email, password) => {
    axios.post(API_URL + '/login', {
        email: email,
        password: password
    }).then((response) => {
        console.log(response.data);
    }).catch((error) => {
        console.error({ error });
    });
};

export const login = (email, password) => {
    axios
      .post(API_URL + '/login', {
        email: email,
        password: password
      })
    .then((response) => {
        console.log(response.data);
    }).catch((error) => {
        console.error({ error });
    });
};

export const logout = () => {
};
