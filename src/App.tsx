import React, { Component, useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import { Counter } from "./features/counter/counter"
import {Post, PostProps} from "@/components/Post"
import { Grid } from "@material-ui/core"


type AppProps = {
	posts: []
}

type AppState = {
	posts: []
}

class App extends Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props)
	}

	state: AppState = {
		posts: []
	}

	componentDidMount() {
		// fetch("localhost:3000/api/collections").then((result) => {
		// 	console.log(result)
		// })
		fetch("https://dev.to/api/articles?username=nataliedeweerd").then(res => res.json()).then(result => {
			this.setState((state) => ({
				posts: result
			}))

			console.log(result)

		})

	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Hello Vite + React!</p>
					<Counter />
					
					<Grid container justify="space-evenly">
						{this.state.posts && this.state.posts.map(post =>
							<Grid item key={ post.id }>
								<Post {...post}/>
							</Grid>
						)}
					</Grid>
				</header>
			</div>
		)
	}
}

export default App
