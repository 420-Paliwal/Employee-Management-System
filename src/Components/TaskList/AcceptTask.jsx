import React from 'react'

const AcceptTask = ({ data }) => {
  console.log("Acc : ",data)
  return (
    <div className='flex-shrink-0 h-full p-5 w-[400px] py-5 bg-blue-400 rounded-2xl'>
            <div className='flex justify-between items-center'>
                <h2 className='bg-blue-500 rounded-xl p-2 font-bold'>{data.category}</h2>
                <h4 className=''>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold font-serif'>{data.title}</h2>
            <p className='text-sm mt-2'>{data.description}</p>
            <div className="mt-4 flex justify-between items-center p-2">
                <button className='p-3 bg-green-400 rounded-2xl cursor-pointer'>Mark as Completed</button>
                <button className='p-3 bg-red-400 rounded-2xl cursor-pointer'>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask