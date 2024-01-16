import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
    name: "auth", 
    initialState: {
        isAuthenticated: localStorage.getItem('AuthToken') ? true : false,
    },
    reducers: {
        setIsAuthenticated: (state) => {
            state.isAuthenticated = true;
        }, 

        logout: (state) => {
            state.isAuthenticated = false;
        }
    }
});

export default AuthSlice.reducer;
export const {setIsAuthenticated, logout} = AuthSlice.actions;