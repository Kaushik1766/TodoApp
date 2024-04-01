'use client'
import React, { useEffect, useState } from 'react'
import AddTask from '@/components/AddTask'
import TasksPane from '@/components/TasksPane'
import { db } from '@/firebase/config'
import { collection, getDocs } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { addTask } from '@/Redux/features/tasks';

function page() {
  const dispatch = useDispatch()

  // fetches data from firebase and stores data to local redux store
  async function syncReduxFirebase() {
    const taskRef = collection(db, 'tasks')
    const querySnapshot = await getDocs(collection(db, 'tasks'))
    querySnapshot.forEach((doc) => {
      dispatch(addTask(doc.data()))
      // console.log(doc.data());
    })
  }

  // data fetching done at initial render
  useEffect(() => {
    syncReduxFirebase()
  }, [])

  const [currentTab, setCurrentTab] = useState(1)
  return (
    <>
      {/* spacer to accomodate navbar */}
      <div className='h-36'></div>

      {/* when tab0 is selected(add new task) */}
      {
        currentTab == 1 || <div className='flex w-full justify-evenly my-3'>

          <button className='border border-black rounded-full p-2 bg-gradient-to-r from-[#FF9A8B] to-[#FF99AC] text-xl px-4 md:text-2xl' onClick={() => {
            setCurrentTab(0)
          }}>Add New Task</button>
          <button className='border border-black rounded-full p-2 text-xl px-4 md:text-2xl' onClick={() => {
            setCurrentTab(1)
          }}>View All Tasks</button>
        </div>
      }
      {/* when tab1 is selected(view all tasks) */}
      {
        currentTab == 0 || <div className='flex w-full justify-evenly my-3'>

          <button className='border border-black rounded-full p-2 text-xl px-4 md:text-2xl ' onClick={() => {
            setCurrentTab(0)
          }}>Add New Task</button>
          <button className='border border-black rounded-full p-2 bg-gradient-to-r from-[#FF9A8B] to-[#FF99AC] text-xl px-4 md:text-2xl' onClick={() => {
            setCurrentTab(1)
          }}>View All Tasks</button>
        </div>
      }

      {
        currentTab == 1 || <AddTask />
      }
      {
        currentTab == 0 || <TasksPane />
      }
    </>
  )
}

export default page