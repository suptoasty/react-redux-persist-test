import { combineReducers } from "redux"
import CounterReducer from "@/features/counter/counterSlice"
import ExpenseReducer from "@/features/expense/expenseSlice"

const RootReducer = combineReducers({
	CounterReducer,
	ExpenseReducer,
})

export type RootState = ReturnType<typeof RootReducer>
export { RootReducer }
