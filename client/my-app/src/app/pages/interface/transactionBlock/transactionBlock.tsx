import React, { ChangeEventHandler, MouseEventHandler, SetStateAction, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { Transaction, TransactionsAndCategories } from "@/app/types/types";

import { instance } from "@/app/utils/axiosSettings";
import { MyButton } from "@/shared/ui/Button/myButton";
import { MyInput } from "@/shared/ui/Input/myInput";

import transactionStyles from "./transactionBlock.module.css"
import styles from "@/app/pages/interface/style.module.css"

import { useAppDispatch, useAppSelector } from "@/lib/hooks/reduxHooks";
import { addTransactions } from "@/lib/transactionSlice";
import { addSelectCategory } from "@/lib/categorySlice";
import { Enriqueta } from "next/font/google";


export const TransactionBlock = () => {
    const [transactionInput, setTransactionInput] = useState<Transaction>(
        {
            id: null,
            transaction: "",
            count: 0
        }
    )

    const dispatch = useAppDispatch()
    const selectedCategory = useAppSelector(state => state.categories.selectCategory)

    const ClickTransactionHandler: MouseEventHandler = async () => {
        const id = uuidv4()

        if (transactionInput.transaction && transactionInput.count) {
            dispatch(addTransactions([{...transactionInput, id, category_name: selectedCategory ? selectedCategory.name : null}]))     
            instance().post('/transaction', {id: id, name: transactionInput.transaction, count: transactionInput.count, category_id: selectedCategory?.id, category_name: selectedCategory?.name})
            
            setTransactionInput({
                id: null,
                transaction: "",
                count: 0
            })
            dispatch(addSelectCategory(null))
        }

}


    const ChangeTransactionHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        setTransactionInput(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    
    return (
        <div className={`${styles.wrapper__item} col-span-1 text-center`}>
            <h2 className="mt-3">Управление бюджетом</h2>
            <div>
                <MyInput 
                    onChange={ChangeTransactionHandler} 
                    className={transactionStyles.transactionInput} 
                    placeholder="Название транзакции"
                    value={transactionInput.transaction}
                    name="transaction"
                />
                <MyInput 
                    onChange={ChangeTransactionHandler} 
                    value={transactionInput.count <= 0 ? "" : transactionInput.count }
                    className={transactionStyles.transactionInput} 
                    placeholder="Сумма"
                    name="count"
                />
                <MyButton 
                    onClick={ClickTransactionHandler}  
                    className={transactionStyles.transactionBtn}
                >Добавить транзакцию</MyButton>
            </div>
        </div>
    )
}