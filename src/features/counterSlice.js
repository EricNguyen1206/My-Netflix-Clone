import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

export const counterSlice = createSlice({
    name: "user",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { login, logout } = counterSlice.actions;

export const selectUser = (state) => state.user.user;

export default counterSlice.reducer;
