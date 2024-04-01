import { createSlice } from '@reduxjs/toolkit'
export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
    },
    reducers: {
        // reducer to add task to tasks array
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        // reducer to change active status of the task
        changeActiveStatus: (state, action) => {
            const idx = action.payload.id
            state.tasks[idx].active = action.payload.value
        },
        // reducer to delete the task from the array
        deleteTask: (state, action) => {
            const idx = action.payload.id
            state.tasks.splice(idx, 1)
        }
    }

})
export const { addTask, changeActiveStatus, deleteTask } = tasksSlice.actions;
export const useDispatch = state => state.tasks.tasks;
export default tasksSlice.reducer;