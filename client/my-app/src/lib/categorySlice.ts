import { Category } from "@/app/types/types"
import { createSlice } from "@reduxjs/toolkit"

interface CategoryInfo {
    id: number,
    name: string
}

interface CategorySlice {
    categories: Category[],
    selectCategory: CategoryInfo | null
}

const initialState: CategorySlice = {
    categories: [],
    selectCategory: null
}

const transactionSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addCategories: (state, action) => {
            state.categories.push(...action.payload)
        },
        addSelectCategory: (state, action) => {
            state.selectCategory = action.payload
        }
    }
})

export const { addCategories, addSelectCategory } = transactionSlice.actions
export default transactionSlice.reducer