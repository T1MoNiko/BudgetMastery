import React, { ChangeEventHandler, MouseEventHandler, SetStateAction, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { Transaction, TransactionsAndCategories } from "@/app/types/types";

import { instance } from "@/app/utils/axiosSettings";
import { MyButton } from "@/components/myButton";
import { MyInput } from "@/components/myInput";

import transactionStyles from "./transactionBlock.module.css"
import styles from "@/app/pages/interface/style.module.css"
import { useAppDispatch, useAppSelector } from "@/lib/hooks/reduxHooks";
import { addTransactions } from "@/lib/transactionSlice";
import { addSelectCategory } from "@/lib/categorySlice";


export const TransactionBlock = () => {
    const [transactionInput, setTransactionInput] = useState<Transaction>(
        {
            id: null,
            name: "",
            count: 0
        }
    )

    const dispatch = useAppDispatch()
    const selectedCategory = useAppSelector(state => state.categories.selectCategory)

    const ClickTransactionHandler: MouseEventHandler = async () => {
        const id = uuidv4()

        if (transactionInput.name && transactionInput.count) {
            dispatch(addTransactions([{...transactionInput, id, category_name: selectedCategory ? selectedCategory.name : null}]))     
            instance().post('/transaction', {id: id, name: transactionInput.name, count: transactionInput.count, category_id: selectedCategory?.id, category_name: selectedCategory?.name})
            
            setTransactionInput({
                id: null,
                name: "",
                count: 0
            })
            dispatch(addSelectCategory(null))
        }

}


    const ChangeTransactionHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        switch (e.target.name) {
            case 'transaction': 
                setTransactionInput(prev => ({...prev, name: e.target.value}))
                break;
            case 'count': 
                setTransactionInput(prev => ({...prev, count: +e.target.value}))
                break;
        }
    }
    
    return (
        <div className={`${styles.wrapper__item} col-span-1 text-center`}>
            <h2 className="mt-3">Управление бюджетом</h2>
            <div>
                <MyInput func={ChangeTransactionHandler} 
                            className={transactionStyles.transactionInput} 
                            placeholderText="Название транзакции"
                            value={transactionInput.name}
                            name="transaction"
                            />
                <MyInput func={ChangeTransactionHandler} 
                            value={transactionInput.count}
                            className={transactionStyles.transactionInput} 
                            placeholderText="Сумма"
                            name="count"
                            />
                <MyButton func={ClickTransactionHandler} className={transactionStyles.transactionBtn}>Добавить транзакцию</MyButton>
            </div>
        </div>
    )
}