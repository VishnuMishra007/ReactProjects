import { configureStore } from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit";

export interface IStoreState{
    counter: number
}

const initialState: IStoreState = {
    counter: 0
};

const counterSlice = createSlice({
    name: "counterSlice",
    initialState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        toggle(state){
            state.counter = 0;
        },
        increase(state,action){
            state.counter = state.counter + action.payload;
        }
    }
});

export const counterSliceAction = counterSlice.actions;


const store = configureStore({
    reducer: counterSlice.reducer
});

export default store;