import React from "react"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { RootReducer, RootState } from "./reducers"

import {
	ThunkAction,
	Action,
	configureStore,
	getDefaultMiddleware,
} from "@reduxjs/toolkit"

const persistConfig = {
	key: "root",
	storage,
}

const pReducer = persistReducer(persistConfig, RootReducer)
const middleware = [...getDefaultMiddleware(), logger]
const store = configureStore({
	reducer: pReducer,
	middleware,
})
const persistor = persistStore(store)

export { persistor, store }
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action>
