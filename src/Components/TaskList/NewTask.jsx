import React from 'react'

const NewTask = ({ data }) => {
    return (
        <div className='flex-shrink-0 h-full p-5 w-[400px] py-5 bg-yellow-500 rounded-2xl'>
            <div className='flex justify-between items-center'>
                <h2 className='bg-yellow-600 rounded-xl p-2 font-bold'>{data.category}</h2>
                <h4 className=''>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold font-serif'>{data.title}</h2>
            <p className='text-sm mt-2'>{data.description}</p>
            <div className="mt-4 flex flex-col p-2 justify-center items-center">
                <button className='p-3 bg-cyan-500 rounded-2xl'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask