import axios from 'axios';
import {
    all,
    call,
    put,
    takeLatest
} from 'redux-saga/effects';
import types from '../../Actions/auth/authActionTypes'

const logIn = async (data) => {
    const response= await axios.post('https://api-talikasih.herokuapp.com/login', {
        email: data.email,
        password: data.password,
    });
    console.log(response, 'res')
    return response.data
};

const register = async (data) => {
    const response = await axios.post('https://api-talikasih.herokuapp.com/register', {
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
    });
    return response.data
};

export function* postLogIn(action) {
    try {
        const user = yield call(logIn, action.payload);
        console.log(user, "user", logIn)
        yield put({
            type: 'LOGIN_SUCCESS',
            payload: user
        });
    } catch (error) {
        yield put({
            type: 'LOGIN_FAILURE',
            payload: error
        });
    }
}

export function* postRegister(action) {
    try {
        const user = yield call(register, action.payload)
        yield put({
            type: 'REGISTER_SUCCESS',
            payload: user
        });
    } catch (error) {
        yield put({
            type: 'REGISTER_FAILURE',
            payload: error
        });
    }
}



export function* onLogInStart() {
    yield takeLatest(types.LOGIN_START, postLogIn);
}

export function* onRegisterStart() {
    yield takeLatest(types.REGISTER_START, postRegister)
}


export function* authSagas() {
    yield all([
        call(onLogInStart),
        call(onRegisterStart),
    ]);
}