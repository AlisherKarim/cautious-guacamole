import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/auth/userSlice";

export default configureStore({
    reducer: {
        user: userReducer
    }
})