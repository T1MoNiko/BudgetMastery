import React from "react";
import styles from "@/widgets/home/categoryBlock/categoryBlock.module.css"

import { Category } from "@/shared/types/types";
import { useAppDispatch } from "@/lib/hooks/reduxHooks";
import { addSelectCategory } from "@/lib/categorySlice";


export const CategoryItem = ({item, isSelected, style}: {item: Category, isSelected: boolean, style: React.CSSProperties}) => {
    const dispatch = useAppDispatch()
    return (
        <p key={item.id} 
           className={isSelected ? styles.categoryItem_active : styles.categoryItem}
           style={style}
           onClick={() => dispatch(addSelectCategory({id: item.id, name: item.name}))}>
          {item.name}</p>
    )
}