import {createSlice} from "@reduxjs/toolkit";
import {normalizedDishes} from "../../../materials/normalized-mock.ts";
import type {RootState} from "../../store.ts";
import type {DishId} from "../../../types/app.types.ts";


const initialState = {
    Ids: normalizedDishes.map(dish => dish.id),
    dishes: normalizedDishes.reduce((acc, currentDish)=>{
        acc[currentDish.id] = currentDish
        return acc
    })
}

export const dishSlice = createSlice({
    name: "dishSlice",
    initialState,
    selectors:{
        selectDishIds: (sliceState: typeof initialState) => sliceState.Ids,
        selectDishByIds: (state: RootState, id:DishId)=> state.dishSlice.dishes[id]
    },
})

export const {selectDishById, selectDishIds} = dishSlice.selectors