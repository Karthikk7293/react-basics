import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'



export const Store = configureStore({
    reducer: {
        user: userReducer,
    }
}) 