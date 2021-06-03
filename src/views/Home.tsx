import React, { Component } from "react"
import logo from "@/logo.svg"

import { Counter } from "@/features/counter/counter"

export default function Home() {
	return (
		<>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Hello Vite + React!</p>
				<Counter />
			</header>
		</>
	)
}
