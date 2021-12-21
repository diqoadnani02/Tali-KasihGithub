import types from './authActionTypes'

export const logInStart = (credentials) => ({
    type: types.LOGIN_START,
    payload: credentials,
});

export const logInSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user,
});

export const logInFailure = (error) => ({
    type: types.LOGIN_FAILURE,
    payload: error,
});

export const googleLoginStart = (credentials) => ({
    type: types.GOOGLE_LOGIN_START,
    payload: credentials,
});

export const googleLoginSuccess = (user) => ({
    type: types.GOOGLE_LOGIN_SUCCESS,
    payload: user,
});

export const googleLoginFailed = (error) => ({
    type: types.GOOGLE_LOGIN_FAILED,
    payload: error,
})

export const registerStart = (credentials) => ({
    type: types.REGISTER_START,
    payload: credentials,
});

export const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user,
});

export const registerFailure = (error) => ({
    type: types.REGISTER_FAILURE,
    payload: error,
});

export const forgotPasswordStart = (credentials) => ({
    type: types.FORGOT_PASSWORD_START,
    payload: credentials
})

export const forgotPasswordSuccess = (user) => ({
    type: types.FORGOT_PASSWORD_SUCCESS,
    payload: user
})

export const forgotPasswordFailed = (error) => ({
    type: types.FORGOT_PASSWORD_FAILED,
    payload: error
})

export const resetPasswordStart = (credentials) => ({
    type: types.RESET_PASSWORD_START,
    payload: credentials
})

export const resetPasswordSuccess = (user) => ({
    type: types.RESET_PASSWORD_SUCCESS,
    payload: user
})

export const resetPasswordField = (error) => ({
    type: types.RESET_PASSWORD_FAILED,
    payload: error
})

export const logOut = () => ({
    type: types.LOGOUT,
});