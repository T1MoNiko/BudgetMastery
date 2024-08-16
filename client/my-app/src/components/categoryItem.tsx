import React from "react";
import styles from "@/app/pages/interface/categoryBlock/categoryBlock.module.css"
import { Category } from "@/app/types/types";
import { useAppDispatch } from "@/lib/hooks/reduxHooks";
import { addSelectCategory } from "@/lib/categorySlice";

export const CategoryItem = ({item, isSelected}: {item: Category, isSelected: boolean}) => {
    const dispatch = useAppDispatch()
    return (
        <p key={item.id} 
           className={isSelected ? styles.categoryItem_active : styles.categoryItem}
           onClick={() => dispatch(addSelectCategory({id: item.id, name: item.name}))}>
          {item.name}</p>
    )
}