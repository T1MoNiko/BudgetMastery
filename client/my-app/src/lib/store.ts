import { configureStore } from '@reduxjs/toolkit'
import transactionReducer from './transactionSlice'
import categoryReducer from './categorySlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      transactions: transactionReducer,
      categories: categoryReducer,
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']