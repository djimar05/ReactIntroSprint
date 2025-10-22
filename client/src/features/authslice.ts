import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiProvider } from '../service/apiprovider';
import type { Signin, Signup } from "../Types";


///auth/login => juste un nom, c'est pas un endpoint
export const login =  createAsyncThunk("/user/api/login", async (data: Signin) => {
    console.log("Debut : authSlice > login");
    const result = await apiProvider.signin(data);
    console.log("result > login > authSlice",result)
    localStorage.setItem("token", result.token);
    localStorage.setItem("user", JSON.stringify(result.user));
    console.log("Fin : authSlice > login");
    return result;
});

export const register = createAsyncThunk("/user/api/register", async (data: Signup) => {
    console.log("Debut : authSlice > register")
    const result = await apiProvider.signup(data);
    console.log("result > register > authSlice",result)
    localStorage.setItem("token", result.token);
    localStorage.setItem("user", JSON.stringify(result.user));
    console.log("Fin : authSlice > register")
    return result;
});


const authslice = createSlice({
    name: "auth",
    initialState : {
        user: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
        })

        builder.addCase(register.fulfilled, (state, action) => {
            state.user = action.payload;
        })
    }
});

export default authslice;