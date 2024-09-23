import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from "./Auth"
import Products from "./Products"
import Card from "./Card"


export const store = configureStore({
    reducer:{
        auth:AuthSlice,
        products:Products,
        card:Card
    }
})