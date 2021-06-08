import React, { Component } from "react"
import logo from "@/logo.svg"

import { Counter } from "@/features/counter/counter"

export default function Home() {
	return (
		<>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Hello and welcome to my react+redux test!</p>
				<p>There is a simple expense tracker on the Expense page.</p>
			</header>
		</>
	)
}
