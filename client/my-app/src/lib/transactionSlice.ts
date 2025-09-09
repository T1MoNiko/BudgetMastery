import { Transaction } from "@/shared/types/types"
import { createSlice } from "@reduxjs/toolkit"


const initialState: Transaction[] = []

const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        addTransactions: (state, action) => {
            state.push(...action.payload)
        },
        deleteAllTransactions: (state, action) => {
            state = state.splice(0, state.length);
        }
    }
})

export const { addTransactions, deleteAllTransactions } = transactionSlice.actions
export default transactionSlice.reducer