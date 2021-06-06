import React from "react"
import { ExpenseItem } from "./expenseSlice"

export const ExpenseList = (items: Array<any>) => {
	return (
		<>
			<p>{items && items.map((x) => x.title)}</p>
			{/* <ul>{items && typeof items.map((x) => <p></p>)}</ul> */}
		</>
	)
}

export default ExpenseList
