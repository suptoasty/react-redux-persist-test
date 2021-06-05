import "jsdom-global/register"

import React from "react"
import { mount } from "enzyme"

import { configureStore } from "@reduxjs/toolkit"

import { Provider } from "react-redux"
import { RootReducer } from "@/store/reducers"

import { Counter } from "@/features/counter/counter"

describe("Counter Component", () => {
	let wrapper: any
	let counter: any

	beforeEach(() => {
		const store = configureStore({
			reducer: RootReducer,
		})
		let jsx = (
			<Provider store={store}>
				<Counter />
			</Provider>
		)

		wrapper = mount(jsx)
		counter = wrapper.find(Counter)
	})

	afterEach(() => {})

	it("Counter Render", () => {
		expect(counter.exists()).toBeTruthy()
	})

	it("Can Increment", () => {
		expect(counter.find("#counter").text()).toBe("Count: 0")
		counter.find("#incrementButton").simulate("click")
		expect(counter.find("#counter").text()).toBe("Count: 1")
	})

	it("Can Decrement", () => {
		expect(counter.find("#counter").text()).toBe("Count: 0")
		counter.find("#decrementButton").simulate("click")
		expect(counter.find("#counter").text()).toBe("Count: -1")
	})
})
