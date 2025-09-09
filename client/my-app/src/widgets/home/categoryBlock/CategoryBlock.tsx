import { Category, TransactionsAndCategories } from "@/shared/types/types";
import { instance } from "@/shared/utils/axiosSettings";
import { MyButton } from "@/shared/ui/Button/myButton";
import { MyInput } from "@/shared/ui/Input/myInput";
import React, { ChangeEventHandler, MouseEventHandler, SetStateAction, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from "@/pages/home/style.module.css"
import categoryStyles from "./categoryBlock.module.css"
import { CategoryItem } from "@/features/categoryItem";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/reduxHooks";
import { addCategories } from "@/lib/categorySlice";
import { GlobalThemeContext } from "@/app/context/GlobalThemeContext";

export const CategoryBlock = () => {
    const [categoryInput, setCategoryInput] = useState<Category | null>()

    const categories = useAppSelector(state => state.categories.categories)
    const dispatch = useAppDispatch()
    const theme = useContext(GlobalThemeContext)
    const themeType = theme.defaultContext[theme.currentTheme]

    const ChangeCategoryHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        setCategoryInput({name: e.target.value, id: uuidv4()})
    }
    
    const ClickCategoryHandler: MouseEventHandler = async () => {
        const id = uuidv4()

        if (categoryInput) {
            dispatch(addCategories([{...categoryInput, id}]));
            try {
                (await instance()).post('/category', {name: categoryInput.name, id});
            } catch {
                console.log("Ошибка отправки категории на сервер")
            }
        }
        setCategoryInput({name: '', id: null});
    }
    
    const selectedCategory = useAppSelector(state => state.categories.selectCategory)
    
    return (
        <div className={`${styles.wrapper__item} col-span-1 text-center ${categoryStyles.categoryBlock}`} style={{backgroundColor: themeType.itemBackColor}}>
            <h2 className="mt-3">Категории</h2>
            <MyInput 
                className={categoryStyles.categoryInput} 
                onChange={ChangeCategoryHandler} 
                value={categoryInput?.name}
                placeholder="Название категории"
                style={{backgroundColor: themeType.interfaceBackColor, border: `2px solid ${themeType.inputBorderColor}`}}
            />
            <MyButton 
                className={categoryStyles.categoryBtn} 
                onClick={ClickCategoryHandler}
                style={{backgroundColor: themeType.btnColor}}
            >
            Добавить категорию
            </MyButton>
            <div className={categoryStyles.categoryItemsContainer}>
            {categories?.length ? categories.map(item => (
                <CategoryItem item={item} key={item.id} isSelected={item.id === selectedCategory?.id} style={{backgroundColor: themeType.interfaceBackColor, border: `2px solid ${themeType.inputBorderColor}` }}/>
            )): null}
            </div>
        </div>
    )
}
