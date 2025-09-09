'use client'

import React, { useContext } from "react";
import InsightsIcon from '@mui/icons-material/Insights';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import FlagIcon from '@mui/icons-material/Flag';
import { GlobalThemeContext } from "@/app/context/GlobalThemeContext";
import { NavIcon } from "@/features/NavIcon";

import styles from "./footer.module.css"

export const Footer = () => {
    const theme = useContext(GlobalThemeContext);
    const themeType = theme.defaultContext[theme.currentTheme];
    const titles = ['Главная','Цели', 'Бюджеты' , 'Статистика', 'Профиль'];
    const componentsTypes = [HomeIcon, FlagIcon, BusinessCenterRoundedIcon, InsightsIcon, PersonIcon ];
    const paths = ['/home', '/goals', '/budgets', '/stats', '/profile'];

    return (
        <footer className={styles.footer} style={{background: themeType.itemBackColor}}>
            <div className="flex justify-around items-center h-full w-1/2 m-auto ">
                {titles.map((item, i) => (
                    <NavIcon 
                        key={i}
                        title={item}
                        path={paths[i]}
                        MuiComponentType={componentsTypes[i]} 
                        sx={{width: '35px', height: '35px'}}
                        className={styles.icon}
                    />
                ))}
            </div>
        </footer>
    )
}