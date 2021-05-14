import { Dispatch } from "../helpers";
import { usersServices } from "../services";
import { GET_ALL_FAILURE, GET_ALL_REQUEST, GET_ALL_SUCCESS } from "../contants";
import { Error, User } from "../types";


type GetAllRequestAction = {
    type: typeof GET_ALL_REQUEST;
};

type GetAllSuccessAction = {
    type: typeof GET_ALL_SUCCESS;
    payload: User[];
};

type GetAllFailureAction = {
    type: typeof GET_ALL_FAILURE;
    reason: Error;
};

function getAll() {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: GET_ALL_REQUEST
            });

            const getAllResponse = await usersServices.getAll();

            if (!getAllResponse["errorMessage"]) {
                dispatch({
                    type: GET_ALL_SUCCESS,
                    payload: getAllResponse
                })
            } else {
                throw getAllResponse;
            }

        } catch (error) {
            dispatch({
                type: GET_ALL_FAILURE,
                reason: error
            })
        }
    }
};

export const usersActions = {
    getAll
};

export type UsersAction = GetAllRequestAction | GetAllSuccessAction | GetAllFailureAction;