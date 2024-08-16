import React, { useEffect, useState } from "react";
import styles from "./header.module.css"
import { instance } from "@/app/utils/axiosSettings";

export const Header = () => {
    const [name, setName] = useState<string>()

    useEffect(() => {
        instance().get('/user').then(res => res.data).then(res => setName(res.name))
    }, [])

    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>MoneyMastery</h1>
            <p className="absolute right-5 bottom-1/2 translate-y-2/4 text-white">{name}</p>
        </header>
    )
}