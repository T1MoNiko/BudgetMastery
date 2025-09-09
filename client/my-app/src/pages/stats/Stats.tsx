'use client'

import { Footer } from "@/widgets/home/footer/Footer";
import { Header } from "@/widgets/home/header/Header";
import React, { useContext } from "react";
import { BarGraphic } from "@/widgets/stats/BarGraphic/BarGraphic";
import { LineGraphic } from "@/widgets/stats/LineGraphic/LineGraphic";
import generalStyles from '../generalStyles.module.css'

import styles from '../home/style.module.css'
import { GlobalThemeContext } from "@/app/context/GlobalThemeContext";

export const Stats = () => {
    const theme = useContext(GlobalThemeContext)
    const themeType = theme.defaultContext[theme.currentTheme]

    return (
        <>
            <div className={styles.wrapper}>
                <div style={{backgroundColor: themeType.itemBackColor}} className="col-span-3">
                    <div className={`${generalStyles.statsWrapper__item}`} >
                        <BarGraphic/>
                    </div>
                </div>
                <div style={{backgroundColor: themeType.itemBackColor}} className="col-span-3">
                    <div className={`${generalStyles.statsWrapper__item}`} >
                        <LineGraphic/>
                    </div>
                </div>
            </div>
        </>
    )
}