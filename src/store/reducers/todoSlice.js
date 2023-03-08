import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: [],
}

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todoList = [...state.todoList, action.payload]
        },
        updateTodo(state, action) {
            let array = [...state.todoList];
            array[action.payload.index] = action.payload.value;
            state.todoList = array   
        },
        removeTodoTask(state, action) {
            let array = [...state.todoList];
            array.splice(action.payload, 1);
            state.todoList = array
        }
    },
})
export const { addTodo,updateTodo,removeTodoTask } = todoSlice.actions
export default todoSlice.reducer
