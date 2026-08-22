//we are creating the redux store here.

import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './movies/slice';

export const store = configureStore({
    reducer: {
       movies: moviesReducer,
    } 
});