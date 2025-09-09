'use client'

import React, { useContext, useEffect, useRef } from "react";
import styles from "./style.module.css"
import MyDoughnutChart from "@/features/graphic";
import { instance } from "@/shared/utils/axiosSettings";
import { TransactionBlock } from "../../widgets/home/transactionBlock/transactionBlock";
import { CategoryBlock } from "../../widgets/home/categoryBlock/CategoryBlock";
import { TransactionTable } from "../../widgets/home/transactionTable/TransactionTable";
import { useAppDispatch } from "@/lib/hooks/reduxHooks";
import { addTransactions, deleteAllTransactions } from "@/lib/transactionSlice";
import { addCategories, deleteAllCategories } from "@/lib/categorySlice";
import { GlobalThemeContext } from "@/app/context/GlobalThemeContext";

export const Home = () => {
    const theme = useContext(GlobalThemeContext)
    const themeType = theme.defaultContext[theme.currentTheme]
    const dispatch = useAppDispatch()
    const isMounting = useRef(false)

    useEffect(() => {
        if (!isMounting.current) {
            isMounting.current = true
        } else {
            (async () => {
                    await dispatch(deleteAllTransactions(''));
                    await dispatch(deleteAllCategories(''));
                 (await instance()).get('/transaction').then(res => res.data).then(res => dispatch(addTransactions(res)));
                 (await instance()).get('/category').then(res => res.data).then(res => dispatch(addCategories(res)));
            })()
        }
    }, [])

    return (
        <>
            <section className={`${styles.wrapper} text-white text-xl`}>
                <TransactionBlock/>
                <CategoryBlock/>
                <div 
                    className={`${styles.wrapper__item} ${styles.graphicContainer} col-span-1 row-span-2 flex flex-col justify-center items-center`} 
                    style={{backgroundColor: themeType.itemBackColor}}
                >
                    <MyDoughnutChart/>
                </div>
                <TransactionTable/>
            </section>
        </>
    )
}