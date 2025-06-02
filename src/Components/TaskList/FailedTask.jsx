import React from 'react'

const FailedTask = ({ data }) => {
    return (
        <div className='flex-shrink-0 h-full p-5 w-[400px] py-5 bg-red-400 rounded-2xl'>
            <div className='flex justify-between items-center'>
                <h2 className='bg-red-500 rounded-xl p-2 font-bold'>{data.category}</h2>
                <h4 className=''>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold font-serif'>{data.title}</h2>
            <p className='text-sm mt-2'>{data.description}</p>
            <div className="mt-4 flex flex-col p-2 justify-center items-center">
                <button className='p-3 w-full bg-red-500 rounded-2xl'>Task Failed</button>
            </div>
        </div>
    )
}

export default FailedTask