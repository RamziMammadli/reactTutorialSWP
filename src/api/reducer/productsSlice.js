import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsThunk = createAsyncThunk('api/get' , async() => {
    const response = await axios.get('https://63b29e7e5901da0ab368fe8b.mockapi.io/eproducts/users')
    console.log('tank',response.data);
    return response.data
})

const getSlice = createSlice({
    name: 'get',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getProductsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
        .addCase(getProductsThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(getProductsThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default getSlice.reducer;