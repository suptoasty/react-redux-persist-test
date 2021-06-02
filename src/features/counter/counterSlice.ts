import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../store/reducers"

export interface CounterState {
	value: number
	oldValue: number
}

const initialState: CounterState = {
	value: 0,
	oldValue: 0,
}

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.value++
		},
		decrement: (state) => {
			state.value--
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += Math.abs(action.payload)
		},
		setCount: (state, action: PayloadAction<number>) => {
			state.value = action.payload
		},
	},
})

export const { increment, decrement, incrementByAmount, setCount } =
	counterSlice.actions
export const selectCount = (state: RootState) => state.CounterReducer.value
export default counterSlice.reducer
