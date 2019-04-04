// import { authHeader } from '../_helpers';
const axios = require("axios")

export const userService = {
    login,
    me,
    logout,
    register,
    adminusers,
    useraccountedit,
    verify,
    reset,
    resetChange
    // logout,
    // getAll
};

function register(firstname, lastname,email, password) {
  return axios.post('https://api.schoolvpn.ca/user/signup', {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password
    })
      .then(response =>  {
        return response.data
      })
      .catch(error => {
          return Promise.reject(error.response.data.message);
      });
}

function login(email, password) {
  return axios.post('https://api.schoolvpn.ca/user/login', {
      email: email,
      password: password
    })
      .then(response =>  {
        if (response.data.token) {
          localStorage.setItem('Authorization', response.data.token);
        }
        return response.data
      })
      .catch(error => {
          return Promise.reject(error.response.data.message);
      });
}

function me() {
  return axios.get('https://api.schoolvpn.ca/user/me', { headers: { Authorization: `Bearer ${localStorage.getItem('Authorization')}`}})
    .then(
      response => {
        localStorage.setItem('Account', JSON.stringify(response.data))
        return response.data
      }
    )
}

function adminusers() {
  return axios.get('https://api.schoolvpn.ca/admin/users', { headers: { Authorization: `Bearer ${localStorage.getItem('Authorization')}`}})
    .then(
      response => {
        return response.data
      }
    )
    .catch(error => {
      return Promise.reject(error.response.data.message);
    });
}

function useraccountedit(firstname, lastname, picture) {
  return axios.put('https://api.schoolvpn.ca/user/me', {firstname: firstname, lastname: lastname, picture: picture}, { headers: {Authorization: `Bearer ${localStorage.getItem('Authorization')}`}, })
    .then(
      response => {
        return response.data
      }
    )
}

function logout() {
  localStorage.removeItem('Account');
  localStorage.removeItem('Authorization');
}


function verify(authCode) {
  return axios.post(`https://api.schoolvpn.ca/user/verify/${authCode}`)
    .then(
      response => {
        return response.data
      }
    ) 
    .catch(error => {
      return Promise.reject(error.response.data.message);
    });
}

function reset(email) {
  return axios.post(`https://api.schoolvpn.ca/user/password/reset`, {email: email})
    .then(
      response => {
        return response.data
      }
    ) 
    .catch(error => {
      return Promise.reject(error.response.data.message);
    });
}

function resetChange(resetCode, password) {
  return axios.post(`https://api.schoolvpn.ca/user/password/reset/${resetCode}`, {password: password})
    .then(
      response => {
        return response.data
      }
    ) 
    .catch(error => {
      return Promise.reject(error.response.data.message);
    });
}