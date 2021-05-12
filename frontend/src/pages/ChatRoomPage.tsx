import { loginActions } from "../actions";
import React, { FC } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";

export const ChatRoomPage: FC = () => {
    const { user } = useSelector((state: RootState) => state.login);

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(loginActions.logout());
    }

    return (
        <div>
            Welcome to Chat-Chat, {user?.userName}
            <div>
                <button onClick={handleClick}>SignOut</button>
            </div>
        </div>
    );
};