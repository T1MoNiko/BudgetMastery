'use client'

import { GlobalThemeContext } from "@/app/context/GlobalThemeContext";
import { instance } from "@/shared/utils/axiosSettings";
import React, { useContext, useEffect, useState } from "react";

export const Profile = () => {
    const theme = useContext(GlobalThemeContext)
    const themeType = theme.defaultContext[theme.currentTheme]

    const [name, setName] = useState<string>()
    
        useEffect(() => {
            (async () => {
               (await instance()).get('/user').then(res => res.data).then(res => setName(res.name))
            })()
        }, [])

    return (
        <>
            <div style={{maxHeight: '100%', flexGrow: '1', backgroundColor: themeType.itemBackColor}}>
                <h1 style={{textAlign: 'center', color: 'white', fontSize: '24px', marginTop: '10px'}}>Профиль</h1>
                <div style={{display: 'block', margin: '0 auto', width: '100%', textAlign: 'center'}}>
                    <img src="/profileIcon.png" style={{borderRadius: '50%', display: 'block', margin: '0 auto', marginTop: '30px', width: '20%', minWidth: '150px'}} alt="" />
                </div>
                <h2 style={{textAlign: 'center', marginTop: '15px', fontSize: '20px', color: 'white'}}>{name}</h2>
                <button style={{position: 'absolute', right: '10px', bottom: '10px'}}>Выйти</button>
            </div>
        </>
    )
}

