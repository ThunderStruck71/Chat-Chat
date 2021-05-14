import { loginActions, usersActions } from "../actions";
import React, { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";

export const ChatRoomPage: FC = () => {
    const { user } = useSelector((state: RootState) => state.login);
    const { users } = useSelector((state: RootState) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(usersActions.getAll());
    }, [])

    const handleClick = () => {
        dispatch(loginActions.logout());
    }

    return (
        <div>
            <h1>Добро пожаловать в Chat-Chat, {user?.userName}</h1>
            <div>
                <button onClick={handleClick}>Выйти из чата</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <div style={{display: "flex"}}>
                    <div style={{ display: "flex", width: "50%", height: "300px", border: "1px solid black", borderRadius: "8px", margin: "5px 0" }} />

                    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "50%", height: "300px" }}>
                        <h3>Список пользователей</h3>
                        <ul style={{overflow: "auto", width: "inherit", listStyleType: "none"}}>
                            {users.map((user, index) => (<li key={index}>{user.userName}</li>))}
                        </ul>
                    </div>
                </div>
                <div style={{ display: "flex", width: "50%" }}>
                    <textarea placeholder="Введите текст"></textarea>
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    );
};