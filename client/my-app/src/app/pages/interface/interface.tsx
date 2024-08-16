'use client'

import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.css"
import MyDoughnutChart from "@/components/graphic";
import { instance } from "@/app/utils/axiosSettings";
import { Header } from "./header/Header";
import { TransactionsAndCategories } from "@/app/types/types";
import { TransactionBlock } from "./transactionBlock/transactionBlock";
import { CategoryBlock } from "./categoryBlock/CategoryBlock";
import { TransactionTable } from "./transactionTable/TransactionTable";
import { Footer } from "./footer/Footer";
import { useAppDispatch } from "@/lib/hooks/reduxHooks";
import { addTransactions } from "@/lib/transactionSlice";
import { addCategories } from "@/lib/categorySlice";

export const Interface = () => {
    const [data, setData] = useState<TransactionsAndCategories>({
        transactions: [],
        categories: []
    })
    const dispatch = useAppDispatch()
    const isMounting = useRef(false)

    useEffect(() => {
        if (!isMounting.current) {
            isMounting.current = true
        } else {
            instance().get('/transaction').then(res => res.data).then(res => dispatch(addTransactions(res)))
            instance().get('/category').then(res => res.data).then(res => dispatch(addCategories(res)))
        }
        
    }, [])

    return (
        <>
        <main className={styles.container}>
                <Header/>
                <section className={`${styles.wrapper} text-white text-xl`}>
                    <TransactionBlock/>
                    <CategoryBlock/>
                    <div className={`${styles.wrapper__item} col-span-1 row-span-2 flex flex-col justify-center items-center pl-5 pr-5`}>
                        <MyDoughnutChart/>
                    </div>
                    <TransactionTable/>
                </section>
                <Footer/>
            </main>
        </>
    )
}