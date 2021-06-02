import { combineReducers } from "redux"
import CounterReducer from "../features/counter/counterSlice"

const RootReducer = combineReducers({
	CounterReducer,
})

export type RootState = ReturnType<typeof RootReducer>
export { RootReducer }
