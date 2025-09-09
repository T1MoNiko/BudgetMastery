'use client'

import React, { ChangeEventHandler, MouseEventHandler, startTransition, useContext, useState } from "react";

import { MyButton } from "@/shared/ui/Button/myButton";
import { MyInput } from "@/shared/ui/Input/myInput";

import styles from './style.module.css';
import { instance } from "@/shared/utils/axiosSettings";
import { GlobalThemeContext } from "@/app/context/GlobalThemeContext";
import { setCookies } from "@/shared/utils/cookies";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth";

interface LoginData {
    email: string | null;
    password: string | null;
}

export const Login = () => {
    const router = useRouter();
    const { toggleMode } = useAuthStore();

    const [state, setState] = useState<LoginData>({
        email: null,
        password: null
    });

    const theme = useContext(GlobalThemeContext);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setState(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const clickHandler: MouseEventHandler = async (e) => {
        e.preventDefault();

        try {
            const { data } = await (await instance()).post('auth/login', state);
            setCookies('budget_token', data.id);
            startTransition(() => {
                router.push('/home');
            });
        } catch (error) {
            console.error('Error: failed to login');
        }
    };

    const currentTheme = theme.defaultContext[theme.currentTheme];

    return (
        <main className="h-screen flex place-content-center items-center" style={{ backgroundColor: currentTheme.appBackColor }}>
            <form className={styles.regModel} style={{ backgroundColor: currentTheme.itemBackColor }}>
                <h1 className="text-white text-center text-2xl mt-3">Вход</h1>
                <div>
                    <MyInput
                        placeholder="Введите email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        className={styles.regModel__input}
                    />
                    <MyInput
                        placeholder="Введите пароль"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        className={styles.regModel__input}
                    />
                </div>
                <MyButton
                    className={styles.regModel__btn}
                    onClick={clickHandler}
                    style={{
                        backgroundColor: currentTheme.btnColor,
                        color: currentTheme.btnTextColor
                    }}
                >
                    Войти
                </MyButton>
                <button onClick={() => toggleMode()} className={styles.text}>Зарегистрироваться</button>
            </form>
        </main>
    );
};
