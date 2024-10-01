import React, { SetStateAction } from "react";

import { TransactionsAndCategories } from "@/app/types/types";

import transactionTableStyles from "./transactionTable.module.css"
import styles from "@/app/pages/interface/style.module.css"
import { useAppSelector } from "@/lib/hooks/reduxHooks";

export const TransactionTable = () => {

    const transactions = useAppSelector(state => state.transactions)

    function capitalizeFirstLetter(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div className={`${styles.wrapper__item} col-span-2 text-center flex flex-col `}>
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
                                <td>{capitalizeFirstLetter(item.transaction)}</td>
                                <td>{item.category_name ? capitalizeFirstLetter(item.category_name) : '—'}</td>
                                <td>{item.count}$</td>
                            </tr>
                        )): null}
                    </tbody>
                </table>
            </div>
        </div>
    )
} 