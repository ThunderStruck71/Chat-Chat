import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { RootState } from "../reducers";

export const ErrorPage: FC = () => {
    const { error } = useSelector((state: RootState) => state.login);
    const history = useHistory();

    if (!error) {
        return null;
    }

    const handleClick = () => {
        history.push("/auth");
    }

    return (
        <div>
            <div>{error.status}</div>
            <div>{error.errorMessage}</div>
            <div>{error.stackTrace}</div>
            <div>
                <button onClick={handleClick}>Назад</button>
            </div>
        </div>
    );
};