import { loginActions } from "../actions";
import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";

export const LoginPage: FC = () => {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);

        if (error) {
            setError(false);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!inputValue) {
            setError(true);
            return;
        }

        dispatch(loginActions.login(inputValue));
        setInputValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Введите имя</h2>
            <input type="text" placeholder="Имя пользователя чата" onChange={handleChange} value={inputValue}/>
            <button>Войти в чат</button>
            {error && <div>Поле не заполнено</div>}
        </form>
    );
};