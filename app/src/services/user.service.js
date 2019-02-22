// import { authHeader } from '../_helpers';
const axios = require("axios")

export const userService = {
    login,
    me,
    logout,
    register
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
        //   if (response.data.token) {
        //     localStorage.setItem('Authorization', response.data.token);
        //   }
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
            }
        )
}

function logout() {
    localStorage.removeItem('Account');
    localStorage.removeItem('Authorization');
}

// function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         if (!response.ok) {
//             if (response.status === 401) {
//                 // auto logout if 401 response returned from api
//                 logout();
//                 location.reload(true);
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
//     });
// }