import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './features/tasks'

export default configureStore({
    reducer: {
        tasks: tasksSlice
    }
})