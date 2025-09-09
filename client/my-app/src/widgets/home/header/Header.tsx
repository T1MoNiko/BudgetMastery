import React, { useContext, useEffect, useState } from "react";
import styles from "./header.module.css"
import { instance } from "@/shared/utils/axiosSettings";
import Image from "next/image";
import { IThemeProps } from "../../../pages/home/types";
import { GlobalThemeContext } from "@/app/context/GlobalThemeContext";

export const Header = ({ itemColor, textColor }: IThemeProps) => {
    const [name, setName] = useState<string>()
    const theme = useContext(GlobalThemeContext);
    const themeType = theme.defaultContext[theme.currentTheme];

    useEffect(() => {
        (async () => {
           (await instance()).get('/user').then(res => res.data).then(res => setName(res.name))
        })()
    }, [])

    return (
        <header 
            className={styles.header} 
            style={{
                backgroundColor: themeType.itemBackColor,
                color: themeType.textColor
            }} 
            >
            <div className={styles.logo}>
                <Image src={'/logo.png'} alt="" width={50} height={50} loading="eager"></Image>
                <h1>MoneyMastery</h1>
            </div>
            <p className="absolute right-5 bottom-1/2 translate-y-2/4 text-white">{name}</p>
        </header>
    )
}