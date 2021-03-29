import axios from 'axios'

export const login = async (username, password) => {
    return axios.post('http://localhost:8080/login', {}, {
        auth: {
            username,
            password
            // username: username,
            // password: password
        }
    }).then(authorizarion => authorizarion)
}


