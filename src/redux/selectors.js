import { createSelector } from "@reduxjs/toolkit";

export const selectFilterSearch = (state) => state.filter.search;
export const selectFilterStatus = (state) => state.filter.status;
export const selectFilterPriority = (state) => state.filter.priority;
export const selectToDoList = (state) => state.toDoList;

export const selectFilterdToDoJobs = createSelector(
  selectToDoList,
  selectFilterPriority,
  selectFilterStatus,
  selectFilterSearch,
  (toDos, priority, status, search) => {
    return toDos.filter((todo) => {
      if (status === "All") {
        return priority.length
          ? todo.content.includes(search) && priority.includes(priority)
          : todo.content.includes(search);
      } else {
        return priority.length
          ? todo.content.includes(search) &&
              priority.includes(priority) &&
              (status === "Completed" ? todo.completed : !todo.completed)
          : todo.content.includes(search) &&
              (status === "Completed" ? todo.completed : !todo.completed);
      }
    });
  }
);
