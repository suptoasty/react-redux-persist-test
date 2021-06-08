import React, { useState } from "react"

import {
	Container,
	List,
	Button,
	TextField,
	Grid,
	Card,
} from "@material-ui/core"
import Expense from "@/features/expense/expense"
import {
	selectExpense,
	selectBalance,
	addExpense,
	removeExpense,
	ExpenseItem,
} from "@/features/expense/expenseSlice"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { ListItemText } from "@material-ui/core"
import { Divider } from "@material-ui/core"

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
			<Container>
				<h1>Balance: {toUSD(balance)}</h1>
				<Grid
					container
					item
					direction="row"
					justify="center"
					alignItems="center"
					style={{ paddingTop: 10 }}
				>
					<TextField
						label="Expense Title"
						variant="outlined"
						onChange={(e) => setExpenseTitle(e.target.value)}
						style={{ marginRight: 10 }}
					></TextField>
					<TextField
						label="Exense/Income Amount"
						variant="outlined"
						onChange={(e) => setExpenseAmount(Number(e.target.value))}
						style={{ marginRight: 10 }}
					></TextField>
					<Button
						variant="outlined"
						color="primary"
						onClick={() => addNewExpense()}
						size="large"
					>
						Add
					</Button>
				</Grid>
				<h3>Itemized List:</h3>
				<Divider />
				<Card raised style={{ marginTop: 10 }}>
					<List dense disablePadding>
						{expenses &&
							expenses.map((item: ExpenseItem) => (
								<Expense key={item.id} {...item} toUSD={toUSD} />
							))}
						{expenses.length <= 0 && (
							<ListItemText>No Expenses Available</ListItemText>
						)}
					</List>
				</Card>
			</Container>
		</>
	)
}

export default ExpenseView
