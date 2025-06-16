import {configureStore} from "@reduxjs/toolkit";
import {dishSlice} from "./entities/dish/dishSlice.ts";

export const store = configureStore(
    {
        reducer: {
            [dishSlice.name]: dishSlice,
        }
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch