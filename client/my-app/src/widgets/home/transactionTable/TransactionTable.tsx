'use client'

import React, { useContext } from "react";

import transactionTableStyles from "./transactionTable.module.css"
import styles from "@/pages/home/style.module.css"
import { GlobalThemeContext } from "@/app/context/GlobalThemeContext";
import { useTransactions } from "@/lib/hooks/queries/transactions";
import { useRouter } from "next/router";
import { getCookieClient } from "@/shared/utils/cookieClient";

export const TransactionTable = () => {
    const userId = getCookieClient('budget_token');
    // const router = useRouter();

    // if (!userId) {
    //     router.push('/auth/reg');
    // }
    const { transactions } = useTransactions(+userId!);
    console.log('transactions:', transactions)

    function capitalizeFirstLetter(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const theme = useContext(GlobalThemeContext)

    const currentTheme = theme.defaultContext[theme.currentTheme]

    return (
        <div className={`${styles.wrapper__item} ${transactionTableStyles.transactionBlock} col-span-2 text-center flex flex-col `} style={{backgroundColor: currentTheme.itemBackColor}}>
            <h2 className="mt-3">Транзакции</h2>

            <div className={transactionTableStyles.overflow}>
                <table className={transactionTableStyles.transactionTable}>
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th>Категория</th>
                            <th>Сумма</th>
                        </tr>
                    </thead>
                    <tbody className={transactionTableStyles.transactionItems}>
                        {transactions?.length ? transactions.map(item => (
                            <tr key={item.id} className="">
                                <td>{capitalizeFirstLetter(item.title)}</td>
                                <td>{item.category_name ? capitalizeFirstLetter(item.category_name) : '—'}</td>
                                <td>{item.amount}$</td>
                            </tr>
                        )): null}
                    </tbody>
                </table>
            </div>
        </div>
    )
} 