import { createSlice } from "@reduxjs/toolkit";

interface TodoState {
  todos: {
    id: number;
    title: string;
    description?: string;
  }[]
}

const initialState: TodoState = {
  todos: []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    }
  }
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer