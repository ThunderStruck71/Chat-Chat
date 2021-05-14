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

    const users = [
        { id: 0, name: "Ivan" },
        { id: 1, name: "Dima" },
        { id: 2, name: "Ilya" },
    ];

    return (
        <div>
            <h1>Добро пожаловать в Chat-Chat, {user?.userName}</h1>
            <div>
                <button onClick={handleClick}>Выйти из чата</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <div style={{display: "flex"}}>
                    <div style={{ display: "flex", width: "50%", height: "300px", border: "1px solid black", borderRadius: "8px", margin: "5px 0" }} />

                    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "50%" }}>
                        <h3>Список пользователей</h3>
                        <ul>
                            {users.map(user => (<li key={user.id}>{user.name}</li>))}
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