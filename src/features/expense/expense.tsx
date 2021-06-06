import React from "react"
import { ExpenseItem, removeExpense } from "./expenseSlice"
import { useAppDispatch } from "@/store/hooks"
import {
	ListItem,
	IconButton,
	Icon,
	makeStyles,
	TextField,
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
			<ListItem>
				<TextField type="text" variant="outlined" defaultValue={title} />
				{toUSD(cost)}
				<IconButton onClick={() => dispatch(removeExpense(id))}>
					<Icon>delete</Icon>
				</IconButton>
			</ListItem>
		</>
	)
}

export default Expense
