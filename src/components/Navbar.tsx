import React from "react"
import { Link } from "react-router-dom"

// Routes
import { List, ListItem, AppBar, Toolbar } from "@material-ui/core"

import routes from "@/routes"

export default function Navbar() {
	return (
		<AppBar position="sticky">
			<Toolbar>
				<List>
					{routes &&
						routes.map((route) => (
							<ListItem key={route.path}>
								<Link key={route.path} to={route.path}>
									{route.title}
								</Link>
							</ListItem>
						))}
				</List>
			</Toolbar>
		</AppBar>
	)
}
