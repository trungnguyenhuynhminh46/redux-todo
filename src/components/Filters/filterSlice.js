import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  status: "All",
  priority: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeSearch(state, action) {
      state.search = action.payload;
    },
    changeStatus(state, action) {
      state.status = action.payload;
    },
    changePriority(state, action) {
      state.priority = action.payload;
    },
  },
});

export const { changeSearch, changeStatus, changePriority } =
  filterSlice.actions;
export default filterSlice.reducer;
