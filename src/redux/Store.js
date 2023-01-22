import { ConfigureStore, combineReducers, } from "@reduxjs/toolkit";

const rootReducer = combineReducers ()

const store = ConfigureStore ({
    reducer: rootReducer,
})

export default store