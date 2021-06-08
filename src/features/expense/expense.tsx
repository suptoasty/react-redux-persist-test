import React from "react"
import { ExpenseItem, removeExpense } from "./expenseSlice"
import { useAppDispatch } from "@/store/hooks"
import {
	ListItem,
	IconButton,
	Icon,
	makeStyles,
	TextField,
	ListItemText,
} from "@material-ui/core"
import theme from "@/theme"

const styles = (theme: any) =>
	makeStyles({
		Button: {
			color: "white",
		},
	})

export const Expense = (props: any) => {
	const dispatch = useAppDispatch()
	const classes = styles(theme)

	const { toUSD, title, cost, id } = props

	return (
		<>
			<ListItemText
				inset
				style={{ backgroundColor: cost < 0 ? "red" : "green" }}
			>
				{title + " | " + toUSD(cost)}

				<IconButton onClick={() => dispatch(removeExpense(id))}>
					<Icon>delete</Icon>
				</IconButton>
			</ListItemText>
		</>
	)
}

export default Expense
