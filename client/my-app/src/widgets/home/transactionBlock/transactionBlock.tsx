'use client'

import React, { ChangeEventHandler, MouseEventHandler, useContext, useState } from "react";

import { Transaction } from "@/shared/types/types";

import { MyButton } from "@/shared/ui/Button/myButton";
import { MyInput } from "@/shared/ui/Input/myInput";

import transactionStyles from "./transactionBlock.module.css"
import styles from "@/pages/home/style.module.css"

import { useAppDispatch, useAppSelector } from "@/lib/hooks/reduxHooks";
import { GlobalThemeContext } from "@/app/context/GlobalThemeContext";
import { useAddTransaction } from "@/lib/hooks/mutations/transactions";
import { getCookieClient } from "@/shared/utils/cookieClient";
import { useRouter } from "next/navigation";


export const TransactionBlock = () => {
    const userId = getCookieClient('budget_token');
    const router = useRouter();

    if (!userId) {
        router.push('/auth/reg');
    }

    const { addTransaction } = useAddTransaction();
    const [transactionInput, setTransactionInput] = useState<Transaction>(
        {
            id: null,
            name: "",
            count: 0
        }
    )

    const theme = useContext(GlobalThemeContext)
    const themeType = theme.defaultContext[theme.currentTheme]
    const dispatch = useAppDispatch()
    const selectedCategory = useAppSelector(state => state.categories.selectCategory)

    const ClickTransactionHandler: MouseEventHandler = async () => {

        if (transactionInput.name && transactionInput.count) {
            // dispatch(addTransactions([{...transactionInput, id, category_name: selectedCategory ? selectedCategory.name : null}]));
            (async () => {
                addTransaction({id: +userId!, title: transactionInput.name, amount: +transactionInput.count})
             })()
            setTransactionInput({
                id: null,
                name: "",
                count: 0
            })
            // dispatch(addSelectCategory(null))
        }
    }

    const ChangeTransactionHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        setTransactionInput(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    
    return (
        <div className={`col-span-1 text-center ${styles.wrapper__item} ${transactionStyles.transactionBlock}`} style={{backgroundColor: themeType.itemBackColor}}>
            <h2 className="mt-3">Управление бюджетом</h2>
            <div>
                <MyInput 
                    onChange={ChangeTransactionHandler} 
                    className={transactionStyles.transactionInput} 
                    style={{backgroundColor: themeType.interfaceBackColor, border: `2px solid ${themeType.inputBorderColor}`}}
                    placeholder="Название транзакции"
                    value={transactionInput.name}
                    name="name"
                />
                <MyInput 
                    onChange={ChangeTransactionHandler} 
                    value={transactionInput.count <= 0 || Number.isNaN(+transactionInput.count) ? "" : transactionInput.count }
                    className={transactionStyles.transactionInput} 
                    style={{backgroundColor: themeType.interfaceBackColor, border: `2px solid ${themeType.inputBorderColor}`}}
                    placeholder="Сумма"
                    name="count"
                />
                <MyButton 
                    onClick={ClickTransactionHandler}  
                    className={transactionStyles.transactionBtn}
                    style={{backgroundColor: themeType.btnColor}}
                >Добавить транзакцию</MyButton>
            </div>
        </div>
    )
}