import React, { Component, useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import { Counter } from "./features/counter/counter"

class App extends Component {
	// const [count, setCount] = useState(0)

	componentDidMount() {
		// fetch("localhost:3000/api/collections").then((result) => {
		// 	console.log(result)
		// })
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Hello Vite + React!</p>
					<Counter />
					<p>
						Edit <code>App.tsx</code> and save to test HMR updates.
					</p>
					<p>
						<a
							className="App-link"
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn React
						</a>
						{" | "}
						<a
							className="App-link"
							href="https://vitejs.dev/guide/features.html"
							target="_blank"
							rel="noopener noreferrer"
						>
							Vite Docs
						</a>
					</p>
				</header>
			</div>
		)
	}
}

export default App
