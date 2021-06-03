import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from '@/store/reducers'

export interface ExpenseState {
    itemizedList: Object
}

const initialState: ExpenseState = {
    itemizedList: {}
}

export const expenseSlice = createSlice({
    name: "expense",
    initialState,
    reducers: {}
})

export const { } = expenseSlice.actions
export const selectExpense = (state: RootState) => state.ExpenseReducer.itemizedList
export default expenseSlice.reducer