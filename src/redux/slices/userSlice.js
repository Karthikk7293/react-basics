import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "karthik",
    isLoggedIn: false,
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            state.name = action.payload
            state.isLoggedIn = true
        },
        logout(state) {
            state.name = ""
            state.isLoggedIn = false
        }
    }
})

export const { logout, login } = userSlice.actions
export default userSlice.reducer
