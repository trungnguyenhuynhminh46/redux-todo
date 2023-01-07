import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    content: "This a job needing to be done",
    completed: true,
    priority: "High",
  },
];

export const toDoListSlice = createSlice({
  name: "toDoList",
  initialState,
  reducers: {
    addJob(state, action) {
      state.push(action.payload);
    },
    changeStatus(state, action) {
      const { jobId } = action.payload;
      const job = state.find((job) => job.id === jobId);
      job.completed = !job.completed;
    },
  },
});

export const { addJob, changeStatus } = toDoListSlice.actions;
export default toDoListSlice.reducer;
