import { createMuiTheme } from "@material-ui/core"
import { red } from "@material-ui/core/colors"

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#556cd6",
		},
		secondary: {
			main: "#19857b",
		},
		error: {
			main: "#F9857b",
		},
		background: {
			default: "#fff",
		},
	},
})

export default theme
