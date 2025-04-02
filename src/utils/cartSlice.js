import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem : (state,action)=>{
            //mutating the state here 
            state.items.push(action.payload);

        }
       
    }
})