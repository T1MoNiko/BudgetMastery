'use client'

import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";

import { MyButton } from "@/shared/ui/Button/myButton";
import { MyInput } from "@/shared/ui/Input/myInput";

import styles from './style.module.css'
import { instance } from "@/app/utils/axiosSettings";

export interface RegData {
    name: string | null,
    email: string | null,
    password: string | null,
}
    
const Auth = ({setData}: {setData: Function}) => {
    const [state, setState] = useState<RegData>({
        name: null,
        email: null,
        password: null
    });

    
    const Request = async () => {
        return await instance().post('/user', state)
    }

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
            switch (e.target.type) {
                case 'text':
                    setState ?
                    setState((prev) => ({...prev, name: e.target.value})) :
                    null
                    break;
                case 'email':
                    setState ?
                    setState((prev) => ({...prev, email: e.target.value})) :
                    null
                    break;
                case 'password':
                    setState ?
                    setState((prev) => ({...prev, password: e.target.value})) :
                    null
                    break;
            }
        }  

    const clickHandler: MouseEventHandler = async (e) => {
        e.preventDefault()

        const data = await Request();

        if (data.statusText === "Created") {
            const { name, ...userData } = data.data
            const user = await instance().post('auth/login', userData)
             
            if (setData) {
                setData(user.data.access_token)
            }

            localStorage.setItem('access_token', user.data.access_token)
        }
    }

    return (
        <main className="h-screen flex place-content-center items-center">
            <form className={styles.regModel}>
                <h1 className="text-white text-center text-2xl mt-10">Регистрация</h1>
                <MyInput 
                    placeholder="Введите имя" 
                    type="text" 
                    onChange={handleChange}
                    className={styles.regModel__input}
                />
                <MyInput 
                    placeholder="Введите email" 
                    type="email"
                    onChange={handleChange}
                    className={styles.regModel__input}
                />
                <MyInput 
                    placeholder="Введите пароль" 
                    type="password" 
                    onChange={handleChange}
                    className={styles.regModel__input}
                />
                <MyButton 
                    className={styles.regModel__btn}
                    onClick={clickHandler}
                >Зарегистрировать</MyButton>
            </form>
        </main>
    )
}

export default Auth;