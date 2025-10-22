import { configureStore } from "@reduxjs/toolkit";

import authslice from '../features/authslice'
export const store = configureStore({
    reducer: {
        auth: authslice.reducer
    }
})