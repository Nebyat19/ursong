import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false,
    error: null
}

export const userslice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signup:(state,action)=>{},
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
           
        },
      
        loginFailure: (state, action) => {
            state.user = null;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
    
        logout: (state) => {
           console.log("ffff")
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
        },
      
        signupFailure: (state, action) => {
            state.user = null;
            state.isAuthenticated = false;
            state.error = action.payload;
        }
    }
});


export const { setUser, loginFailure, logout, signupFailure,signup } = userslice.actions;


export default userslice.reducer;
