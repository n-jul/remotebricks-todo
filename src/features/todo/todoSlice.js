import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const Todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos = state.todos.map((todo) =>
        todo.id === Todo.id ? { todo, ...Todo.text } : todo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
