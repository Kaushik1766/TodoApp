import { createSlice } from '@reduxjs/toolkit'
export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        markComplete: (state, action) => {
            const idx = action.payload.id
            state.tasks[idx].active = false
        },
        markIncomplete: (state, action) => {
            const idx = action.payload.id
            state.tasks[idx].active = true
        },
        deleteTask: (state, action) => {
            const idx = action.payload.id
            state.tasks.splice(idx, 1)
        }
    }

})
export const { addTask, markComplete, markIncomplete, deleteTask } = tasksSlice.actions;
export const useDispatch = state => state.tasks.tasks;
export default tasksSlice.reducer;