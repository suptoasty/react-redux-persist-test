import React, { useState } from "react"

import { Container, List, Button, TextField } from "@material-ui/core"
import Expense from "@/features/expense/expense"
import {
	selectExpense,
	selectBalance,
	addExpense,
	removeExpense,
	ExpenseItem,
} from "@/features/expense/expenseSlice"
import { useAppDispatch, useAppSelector } from "@/store/hooks"

export const ExpenseView = () => {
	const expenses = useAppSelector(selectExpense)
	const balance = useAppSelector(selectBalance)
	const dispatch = useAppDispatch()

	const [expenseTitle, setExpenseTitle] = useState("")
	const [expenseAmount, setExpenseAmount] = useState(0)

	const addNewExpense = () => {
		let newExpense = new ExpenseItem(expenseTitle, expenseAmount)

		if (newExpense.cost != 0) dispatch(addExpense(newExpense))
		// add invalid input warning here
	}

	const sign = (value: Number) => {
		return value < 0 ? "-" : "+"
	}

	const toUSD = (value: any) => {
		return sign(value) + "$" + Math.abs(value)
	}

	return (
		<>
			Balance: {toUSD(balance)}
			<Container>
				<List dense disablePadding>
					{expenses &&
						expenses.map((item: ExpenseItem) => (
							<Expense key={item.id} {...item} toUSD={toUSD} />
						))}
					{expenses.length <= 0 && (
						<p>
							<br />
							No Expenses Available
							<br />
						</p>
					)}
				</List>
			</Container>
			<Container>
				Name
				<TextField
					onChange={(e) => setExpenseTitle(e.target.value)}
				></TextField>
				Expense/Income
				<TextField
					onChange={(e) => setExpenseAmount(Number(e.target.value))}
				></TextField>
				<Button
					variant="outlined"
					color="primary"
					onClick={() => addNewExpense()}
				>
					Add
				</Button>
			</Container>
		</>
	)
}

export default ExpenseView
