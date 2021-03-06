import axios from 'axios'
import {
    LOGIN_USER,
    REGISTER_USER,
    REGISTER_USER_EMAIL_CHECK,
    AUTH_USER,
    LOGOUT_USER
} from './types'

export function loginUser(dataToSubmit){
    const request = axios.post('/api/user/login', dataToSubmit)
    .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function logoutUser(){
    const request = axios.get(`/api/user/logout`)
    .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}

export function registerUser(dataToSubmit){
    const request = axios.post('/api/user/register', dataToSubmit)
    .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function emailCheck(dataToSubmit){
    const request = axios.post('/api/user/emailCheck', dataToSubmit)
    .then(response => response.data)

    return {
        type: REGISTER_USER_EMAIL_CHECK,
        payload: request
    }
}

export function auth(){
    const request = axios.get('/api/user/auth')
    .then(response => response.data)

    return {
        type: AUTH_USER,
        payload: request
    }
}