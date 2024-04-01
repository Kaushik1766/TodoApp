import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './features/tasks'

// configure store
export default configureStore({
    // setup reducers
    reducer: {
        tasks: tasksSlice
    }
})