import { Category, TransactionsAndCategories } from "@/app/types/types";
import { instance } from "@/app/utils/axiosSettings";
import { MyButton } from "@/components/myButton";
import { MyInput } from "@/components/myInput";
import React, { ChangeEventHandler, MouseEventHandler, SetStateAction, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from "@/app/pages/interface/style.module.css"
import categoryStyles from "./categoryBlock.module.css"
import { CategoryItem } from "@/components/categoryItem";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/reduxHooks";
import { addCategories } from "@/lib/categorySlice";

export const CategoryBlock = () => {
    const [categoryInput, setCategoryInput] = useState<Category | null>()

    const categories = useAppSelector(state => state.categories.categories)
    const dispatch = useAppDispatch()
    
    const ChangeCategoryHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        setCategoryInput({name: e.target.value, id: uuidv4()})
    }
    
    const ClickCategoryHandler: MouseEventHandler = () => {
        const id = uuidv4()

        if (categoryInput) {
            dispatch(addCategories([{...categoryInput, id}]))
            instance().post('/category', {name: categoryInput.name, id})
            setCategoryInput(null)
        }

    }
    
    const selectedCategory = useAppSelector(state => state.categories.selectCategory)
    
    return (
        <div className={`${styles.wrapper__item} col-span-1 text-center` }>
            <h2 className="mt-3">Категории</h2>
            <MyInput className={categoryStyles.categoryInput} 
                        func={ChangeCategoryHandler} 
                        value={categoryInput?.name}
                        placeholderText="Название категории"/>
            <MyButton className={categoryStyles.categoryBtn} 
                        func={ClickCategoryHandler}>Добавить категорию</MyButton>
            <div className={categoryStyles.categoryItemsContainer}>
            {categories?.length ? categories.map(item => (
                <CategoryItem item={item} key={item.id} isSelected={item.id === selectedCategory?.id}/>
            )): null}
            </div>
        </div>
    )
}
