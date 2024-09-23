import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
    name:"card",

    initialState : [],

    reducers :{
        AddCard(state,action){
            state.push(action.payload)
        }
    }
})

export const {AddCard} = CardSlice.actions
export default CardSlice.reducer