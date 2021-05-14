import { UsersAction } from "../actions";
import { GET_ALL_FAILURE, GET_ALL_REQUEST, GET_ALL_SUCCESS } from "../contants";
import { User } from "../types";

type UsersState = {
    users: User[],
    error: Error | null
};

const initialState = {
    users: [],
    error: null
};

export const usersReducer = (state: UsersState = initialState, action: UsersAction) => {
    switch (action.type) {
        case GET_ALL_REQUEST:
            return {
                users: [],
                error: null
            };
        case GET_ALL_SUCCESS:
            return {
                users: action.payload,
                error: null
            }
        case GET_ALL_FAILURE:
            return {
                users: [],
                error: action.reason
            }
        default:
            return state;
    }
}