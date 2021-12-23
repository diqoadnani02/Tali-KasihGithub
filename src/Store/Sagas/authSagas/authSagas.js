import axios from 'axios';
import {
    all,
    call,
    put,
    takeLatest
} from 'redux-saga/effects';
import types from '../../Actions/authAction/authActionTypes'

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

const forgotPassword = async (data) => {
    const response = await axios.post('https://api-talikasih.herokuapp.com/forgotPassword', {
        email: data
    });
    return response.data
}


const resetPassword = async (data) => {
    const response = await axios.patch(`https://api-talikasih.herokuapp.com/resetPassword/${data.token}`, {
        password: data.password,
        confirmPassword: data.confirmPassword
    });
    console.log(response.data)
    return response.data
}

const googleLogin = async () => {
    const response = await axios.post('https://api-talikasih.herokuapp.com/signinGoogle');
    return response
}

export function* postLogIn(action) {
    try {
        const user = yield call(logIn, action.payload);
        console.log(user, "user")
        yield put({
            type: 'LOGIN_SUCCESS',
            payload: user
        });
        localStorage.setItem('token', user.token);
        window.location.reload();
    } catch (error) {
        console.log(error.message)
        yield put({
            type: 'LOGIN_FAILURE',
            payload: error
        });
    }
}

export function* postGoogleLogin(action) {
    try {
        const user = yield call(googleLogin, action.payload);
        console.log(user, "user")
        yield put({
            type: 'GOOGLE_LOGIN_SUCCESS',
            payload: user
        });
        localStorage.setItem('token', user.token)
        window.location.reload();
    } catch (error) {
        yield put ({
            type: 'GOOGLE_LOGIN_FAILED',
            payload: error
        })
    }
}

export function* postForgotPassword(action) {
    try {
        const user = yield call(forgotPassword, action.payload);
        console.log(user, "userId")
        yield put ({
            type: 'FORGOT_PASSWORD_SUCCESS',
            payload: user
        })
    } catch (error) {
        console.log(error.message)
        yield put({
            type: 'FORGOT_PASSWORD_FAILED',
            payload: error
        })
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

export function* patchResetPassword(action) {

    try {
        const user = yield call(resetPassword, action.payload)
        console.log(action.payload,"action.payload")
        console.log(user, "user")
        yield put ({
            type: 'RESET_PASSWORD_SUCCESS',
            payload: user
        })
    } catch (error) {
        yield put ({
            type: 'RESET_PASSWORD_FAILED',
            payload: error
        })
    }
}

export function* onLogInStart() {
    yield takeLatest(types.LOGIN_START, postLogIn);
}

export function* onRegisterStart() {
    yield takeLatest(types.REGISTER_START, postRegister)
}

export function* onForgotPasswordStart() {
    yield takeLatest(types.FORGOT_PASSWORD_START, postForgotPassword)
}

export function* onResetPasswordStart() {
    yield takeLatest(types.RESET_PASSWORD_START, patchResetPassword)
}

export function* onGoogleLoginStart() {
    yield takeLatest(types.GOOGLE_LOGIN_START, postGoogleLogin)
}


export function* authSagas() {
    yield all([
        call(onLogInStart),
        call(onRegisterStart),
        call(onForgotPasswordStart),
        call(onResetPasswordStart),
        call(onGoogleLoginStart)
    ]);
}