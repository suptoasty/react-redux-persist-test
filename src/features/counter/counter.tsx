import React, { useState, useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../store/hooks"
import {
	decrement,
	increment,
	incrementByAmount,
	setCount,
	selectCount,
} from "./counterSlice"

export function Counter() {
	const count = useAppSelector(selectCount)
	const dispatch = useAppDispatch()
	const [incrementAmount, setIncrementAmount] = useState("2")
	const incrementValue = Number(incrementAmount) || 0

	useEffect(() => {
		localStorage.setItem("counter.value", JSON.stringify(count))
	}, [count])

	useEffect(() => {
		// dispatch(setCount(Number(localStorage.getItem("counter.value"))))
	}, [])

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			<button onClick={() => dispatch(incrementByAmount(2))}>+ by 2</button>
		</div>
	)
}
