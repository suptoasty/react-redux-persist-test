import React from "react"
import ReactDOM from "react-dom"

import { store, persistor } from "./store/index"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import "./index.css"
import { ThemeProvider } from "@material-ui/styles"
import { CssBaseline } from "@material-ui/core"
import theme from './theme'

import App from "@/App"

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<App />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)
