import types from '../../Actions/authAction/authActionTypes'

const initialState = {
    currentUser: null,
    error: null,
    token: null,
    status: null,
    userId: null,
    message: []
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GOOGLE_LOGIN_SUCCESS:
        case types.LOGIN_SUCCESS:
        case types.REGISTER_SUCCESS:
            return{
                ...state,
                currentUser: action.payload,
                error: null,
                token: action.payload.token,
                status: action.payload.status
            };
            case types.FORGOT_PASSWORD_SUCCESS:
                return{
                    ...state,
                    userId: action.payload,
                    error: null,
                    message: action.payload
                };
            case types.RESET_PASSWORD_SUCCESS:
                return{
                    ...state,
                    userId: action.payload,
                    message: action.payload,
                    error: null
                }

            case types.GOOGLE_LOGIN_FAILED:
            case types.LOGIN_FAILURE:
            case types.REGISTER_FAILURE:
                return{
                    ...state,
                    error: action.payload,
                    status: action.payload.status
                };
            case types.FORGOT_PASSWORD_FAILED:
                return{
                    ...state,
                    error: action.payload,
                    message: action.payload,
                }
            case types.RESET_PASSWORD_FAILED:
                return{
                    ...state,
                    error: action.payload,
                    message: action.payload
                }
                case types.LOGOUT:
                    return initialState
            default:
                return state;
    }
}

export default authReducer