'use client'
import { addTask } from '@/Redux/features/tasks'
import React from 'react'
import submitForm from '@/components/submitForm'
import { useDispatch } from 'react-redux'
import { useRef } from "react";
import addToFirebase from './addToFirebase'

function AddTask() {
    const ref = useRef<HTMLFormElement>(null);
    const dispatch = useDispatch()
    return (
        <div className='p-5'>
            <h1 className='text-3xl text-center mb-4'>Add Task</h1>
            <form ref={ref} action={(formData) => {
                // submit form and store it in redux
                const task = {
                    name: formData.get('name'),
                    description: formData.get('description'),
                    active: true,
                }
                dispatch(addTask(task))
                addToFirebase(task)
                // reset the form
                ref.current?.reset();
            }
            } className='text-xl p-5 flex flex-col gap-4 border border-black rounded-2xl w-11/12 md:w4/5 lg:w-3/5 mx-auto'>
                <label htmlFor="name">Enter task name: </label>
                <input type="text" name='name' className='border border-black rounded-xl p-2' placeholder='Enter task name' required />
                <label htmlFor="description">Enter task description: </label>
                <textarea required name="description" id="desc" cols={30} rows={5} className='border border-black rounded-xl p-2' placeholder='Enter task description'></textarea>
                <button type='submit' className='p-2 bg-gradient-to-r from-[#85FFBD] to-[#FFFB7D] rounded-xl w-3/5 mx-auto font-bold'>Create Task</button>
            </form>
        </div>
    )
}

export default AddTask