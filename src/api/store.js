import { configureStore } from "@reduxjs/toolkit";
import getSlice from './reducer/productsSlice'

export const store = configureStore({
    reducer: {
        get: getSlice
        }
})