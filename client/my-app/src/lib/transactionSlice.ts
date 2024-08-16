import { Transaction } from "@/app/types/types"
import { createSlice } from "@reduxjs/toolkit"


const initialState: Transaction[] = []

const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        addTransactions: (state, action) => {
            state.push(...action.payload)
        },
    }
})

export const { addTransactions } = transactionSlice.actions
export default transactionSlice.reducer