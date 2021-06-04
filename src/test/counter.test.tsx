import React from "react"
import { shallow } from "enzyme"

import configureStore from "redux-mock-store"

// import { store, persistor } from "@/store/index"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { RootReducer } from "@/store/reducers"

import { Counter } from "@/features/counter/counter"
import { ThemeProvider } from "@material-ui/styles"
import { CssBaseline } from "@material-ui/core"

import theme from "@/theme"

const mockStore = configureStore()
const mockDispatchfn = jest.fn()

describe("Counter Component", () => {
	let wrapper: any

	beforeEach(() => {
		wrapper = shallow(
			<Provider store={mockStore()}>
				<Counter />
			</Provider>
		).dive()
	})

	it("Counter Render", () => {
		expect(wrapper.find(Counter)).toHaveLength(1)
	})
})
