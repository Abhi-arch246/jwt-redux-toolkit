import axios from 'axios'

const API_URL = '/api/users/'

const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const logout = async () => {
    localStorage.removeItem('user')
}

const getAllUsers = async () => {
    const res = await axios.get(API_URL + 'allusers')
    if (res.data) {
        localStorage.setItem('users', JSON.stringify(res.data))
        console.log(res.data);

    }

}

const authService = {
    register,
    login,
    logout,
    getAllUsers
}

export default authService