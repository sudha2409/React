import { configureStore } from "@reduxjs/toolkit";

const appStore =  configureStore({
    //This is one Reducer For Whole App
    reducer:{
        // inside this we have multiple small reducers
        cart :cartReducer,
    },

});
export default appStore