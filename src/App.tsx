import React, { Component } from "react"
import "@/App.css"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Navbar from "@/components/Navbar"
import routes from "@/routes"

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Navbar />
					<Switch>
						{routes &&
							routes.map((route) => <Route key={route.path} {...route} />)}
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App
