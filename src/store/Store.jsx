import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./HomeSlice";

export const Store = configureStore({
    reducer:{
        Home : HomeSlice
    },
});