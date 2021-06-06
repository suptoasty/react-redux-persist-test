import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from '@/store/reducers'
import { v4 as uuidv4 } from 'uuid'

export interface ExpenseState {
    itemizedList: Array<ExpenseItem>,
}

export class ExpenseItem {
    id: String = uuidv4()
    title: String = "Expense"
    cost: Number = 0

    constructor(title?: String, cost?: Number) {
        this.title = title ? title : 'DefaultExpenseName'
        this.cost = cost ? cost : 0
    }

}

const initialState: ExpenseState = {
    itemizedList: []
}

export const expenseSlice = createSlice({
    name: "expense",
    initialState,
    reducers: {
        addExpense: (state, action: PayloadAction<ExpenseItem>) => {
            state.itemizedList = [...state.itemizedList, action.payload]
            
        },
        removeExpense: (state, action: PayloadAction<String>) => {
            state.itemizedList = state.itemizedList.filter(item => item.id !== action.payload)
        }
    }
})

export const { addExpense, removeExpense } = expenseSlice.actions
export const selectExpense = (state: RootState) => state.ExpenseReducer.itemizedList
export const selectBalance = (state: RootState) => state.ExpenseReducer.itemizedList.reduce((balance: any, currentExpense: any) => balance + currentExpense.cost, 0)
export default expenseSlice.reducer