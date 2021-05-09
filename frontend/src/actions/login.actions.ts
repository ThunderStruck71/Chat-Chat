import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../contants";
import { Dispatch, history } from "../helpers";
import { loginServices } from "../services";
import { User } from "../types";

type LoginRequestAction = {
    type: typeof LOGIN_REQUEST
};

type LoginSuccessAction = {
    type: typeof LOGIN_SUCCESS,
    payload: User
};

type LoginFailureAction = {
    type: typeof LOGIN_FAILURE,
    reason: Error
};

type LogoutAction = {
    type: typeof LOGOUT
};

function login(userName: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: LOGIN_REQUEST
        });

        return loginServices.signIn(userName)
            .then(user => {
                history.push("/chatRoom");
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: user
                })
            })
            .catch(error => {
                dispatch({
                    type: LOGIN_FAILURE,
                    reason: error
                })
            });
    }
};

function logout(): LogoutAction {
    history.push("/login");
    return {
        type: LOGOUT
    };
};

export const loginActions = {
    login,
    logout
}

export type LoginAction = LoginRequestAction | LoginSuccessAction | LoginFailureAction | LogoutAction;

