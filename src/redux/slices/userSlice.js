import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchProductWithId } from "../../api/products";

const initialState = {
    name: "karthik",
    isLoggedIn: false,
    userDetails: {},
    allProducts: [],
    productDetails: {},
    status: "",
    error: null
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.name = action.payload
            state.isLoggedIn = true
            localStorage.setItem('userDetails', JSON.stringify(action.payload))
        },
        logout: (state) => {
            state.name = ""
            state.isLoggedIn = false
            localStorage.clear()
        },
        getUserDetails: (state) => {
            const data = localStorage.getItem('userDetails')
            if (data) {
                state.userDetails = JSON.parse(data)
            }
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending, (state,) => {
            state.status = "pending"
        }).addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.status = "success"
            state.allProducts = action.payload
        }).addCase(fetchAllProducts.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error
        }).addCase(fetchProductWithId.pending, (state) => {
            state.status = 'loading'
        }).addCase(fetchProductWithId.fulfilled, (state, action) => {
            state.status = 'success'
            state.productDetails = action.payload
        }).addCase(fetchProductWithId.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.error
        })

    }
})

export const { logout, login } = userSlice.actions
export default userSlice.reducer
