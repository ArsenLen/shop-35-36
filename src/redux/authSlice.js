import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        currentUser: null
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.currentUser = action.payload
        }
    }
})

export const { loginSuccess } = authSlice.actions
export default authSlice.reducer

/*
    authSlice = {
        actions: {
            loginSuccess,
            logout,

        },
        reducer: {
            fn
        }
    }
*/