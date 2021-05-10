import { LoginAction } from "../actions";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../contants";
import { Error, User } from "../types";

type LoginState = {
    user: User | undefined,
    loggedIn: boolean,
    error: Error | null
};

let user = JSON.parse(localStorage.getItem("user") || '{}');

const initialState = user
    ? {
        user,
        loggedIn: true,
        error: null
    }
    : {
        user: undefined,
        loggedIn: false,
        error: null
    };

const loginReducer = (state: LoginState = initialState, action: LoginAction): LoginState => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case LOGOUT:
            return {
                loggedIn: false,
                user: undefined,
                error: null
            }
        case LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.payload,
                error: null
            }
        case LOGIN_FAILURE:
            return {
                loggedIn: false,
                user: undefined,
                error: action.reason
            }

        default:
            return state;
    }
}

export default loginReducer;