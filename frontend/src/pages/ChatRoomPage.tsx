import { loginActions } from "../actions";
import React, { FC } from "react"
import { useSelector } from "react-redux";
import { RootState } from "../reducers";

export const ChatRoomPage: FC = () => {
    const { user } = useSelector((state: RootState) => state.login);

    const handleClick = () => {
        loginActions.logout();
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