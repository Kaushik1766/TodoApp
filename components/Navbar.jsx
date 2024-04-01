import React from 'react'

// navbar component
function Navbar() {
    return (
        <div className='w-full fixed p-3'>
            <div className='border border-white h-20 flex bg-gradient-to-r from-[#FBAB7E] to-[#F7CE68] w-11/12 md:w-4/5 mx-auto rounded-full items-center shadow-xl'>
                <h1 className='text-white text-center w-full text-3xl'>Todo App</h1>
            </div>
        </div>
    )
}

export default Navbar