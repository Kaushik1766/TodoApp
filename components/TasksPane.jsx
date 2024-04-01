'use client'
import { deleteTask, changeActiveStatus } from '@/Redux/features/tasks'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import deleteFromFirebase from '@/components/deleteFromFirebase'
import completionStatus from '@/components/completionStatus'


function TasksPane() {
    const tasks = useSelector((state) => state.tasks.tasks)
    const dispatch = useDispatch()
    return (
        <div className='p-5'>
            <h1 className='text-3xl text-center my-4'>Tasks</h1>
            <div className='w-11/12 md:w-4/5 border border-black rounded-xl mx-auto min-h-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
                {
                    // displaying all tasks by putting them in the grid
                    tasks.map((item, idx) => {
                        // active tasks (tasks which are not completed )
                        if (item.active) {
                            return <div className='border border-black rounded-xl p-4 hover:scale-105 shadow-lg' key={idx}>
                                <h1 className='text-2xl' id={`task${idx}`}>{item.name}</h1>
                                <p className='text-wrap'>{item.description}</p>
                                <div className='flex justify-between my-4 gap-2'>
                                    <button className='p-2 bg-gray-400 rounded-xl shadow-xl hover:scale-105' onClick={() => {

                                        // update task status in redux
                                        dispatch(changeActiveStatus({ id: idx, value: false }))

                                        // update task status in firebase
                                        completionStatus(item.name, false)
                                    }}>Mark as Completed</button>
                                    <button className='p-2 bg-red-500 rounded-xl shadow-xl hover:scale-105' onClick={() => {

                                        // update task status in redux
                                        dispatch(deleteTask({ id: idx }))

                                        // update task status in firebase
                                        deleteFromFirebase(item.name)
                                    }}>Delete</button>
                                </div>
                            </div>
                        }
                        // inactive tasks (tasks which are marked as completed)
                        else {
                            return <div className='border text-gray-300 border-gray-300 rounded-xl p-4 shadow-lg' key={idx}>
                                <h1 className='text-2xl'>{item.name}</h1>
                                <p>{item.description}</p>
                                <div className='flex justify-between my-4 gap-2'>
                                    <button className='p-2  bg-gray-400 rounded-xl shadow-xl hover:scale-105 text-black' onClick={() => {

                                        // update task status in redux
                                        dispatch(changeActiveStatus({ id: idx, value: true }))

                                        // update task status in firebase
                                        completionStatus(item.name, true)
                                    }}>Mark as Incomplete</button>
                                    <button className='p-2 bg-red-500 rounded-xl shadow-xl hover:scale-105 text-black' onClick={() => {

                                        // update task status in redux
                                        dispatch(deleteTask({ id: idx }))

                                        // update task status in firebase
                                        deleteFromFirebase(item.name)
                                    }}>Delete</button>
                                </div>
                            </div>
                        }
                    })
                }
            </div>
        </div>
    )
}

export default TasksPane