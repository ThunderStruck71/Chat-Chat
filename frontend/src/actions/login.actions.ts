import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../contants";
import { Dispatch, history } from "../helpers";
import { loginServices } from "../services";
import { User, Error } from "../types";

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
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: LOGIN_REQUEST
            });

            const signInResponse = await loginServices.signIn(userName);

            if (signInResponse) {
                history.push("/chatRoom");
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: signInResponse
                })
            }
        } catch (e) {
            const error: Error = {
                errorCode: 500,
                message: "Server",
                stackTrace: ""
            };

            dispatch({
                type: LOGIN_FAILURE,
                reason: error
            })
        }
    }
};

function logout(): LogoutAction {
    history.push("/login");
    loginServices.signOut();
    return {
        type: LOGOUT
    };
};

export const loginActions = {
    login,
    logout
}

export type LoginAction = LoginRequestAction | LoginSuccessAction | LoginFailureAction | LogoutAction;

