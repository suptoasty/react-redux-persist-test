import React, { useState, useEffect } from "react"
import { useAppSelector, useAppDispatch } from "@/store/hooks"
import {
	decrement,
	increment,
	incrementByAmount,
	setCount,
	selectCount,
} from "./counterSlice"

export const Counter = () => {
	const count = useAppSelector(selectCount)
	const dispatch = useAppDispatch()
	const [incrementAmount, setIncrementAmount] = useState("2")
	const incrementValue = Number(incrementAmount) || 0

	return (
		<div>
			<p id="counter">Count: {count}</p>
			<button id="incrementButton" onClick={() => dispatch(increment())}>
				+
			</button>
			<button id="decrementButton" onClick={() => dispatch(decrement())}>
				-
			</button>
			<button
				id="incrementByAmountButton"
				onClick={() => dispatch(incrementByAmount(2))}
			>
				+ by 2
			</button>
		</div>
	)
}
