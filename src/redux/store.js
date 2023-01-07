import { configureStore } from "@reduxjs/toolkit";
import fitlerReducer from "../components/Filters/filterSlice";
import toDoListReducer from "../components/TodoList/toDoListSclice";

export const store = configureStore({
  reducer: {
    filter: fitlerReducer,
    toDoList: toDoListReducer,
  },
});
