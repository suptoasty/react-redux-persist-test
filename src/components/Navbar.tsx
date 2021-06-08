import React from "react"
import { useHistory } from "react-router-dom"

// Routes
import { List, ListItem, AppBar, Toolbar, Tab, Button } from "@material-ui/core"

import routes from "@/routes"

export default function Navbar() {
	let history = useHistory()

	return (
		<AppBar position="sticky">
			<Toolbar>
				{routes &&
					routes.map((route) => (
						<Button
							style={{ color: "white" }}
							key={route.path}
							variant="text"
							onClick={() => history.push(route.path)}
						>
							{route.title}
						</Button>
					))}
			</Toolbar>
		</AppBar>
	)
}
