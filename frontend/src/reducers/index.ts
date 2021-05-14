import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import { usersReducer } from "./users.reducer";

const rootReducer = combineReducers({
    login: loginReducer,
    users: usersReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;