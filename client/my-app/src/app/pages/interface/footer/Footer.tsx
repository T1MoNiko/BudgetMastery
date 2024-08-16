import React from "react";

import { SvgHome } from "@/components/svgHome";
import { SvgProfile } from "@/components/svgProfile";
import { usePathname } from "next/navigation";
import styles from "./footer.module.css"

export const Footer = () => {

    const path = usePathname()

    return (
        <footer className={styles.footer}>
            <div className="flex justify-around items-center h-full w-1/2 m-auto">
                <div className="flex flex-col justify-center items-center">
                    <SvgHome fill={path === '/' ? "#4aecd6" : "#565d8b"} width="30px" height="30px" />
                    <p className="text-white text-sm" style={{color: path === '/' ? "#4aecd6" : '#565d8b'}}>Главная</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <SvgProfile fill={path === '/profile' ? "#4aecd6" : "#565d8b"} width="30px" height="30px" />
                    <p className="text-white text-sm" style={{color: path === '/profile' ? "#4aecd6" : '#565d8b'}}>Пользователь</p>
                </div>
            </div>
        </footer>
    )
}