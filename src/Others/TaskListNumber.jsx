import React from 'react'

const TaskListNumber = ({ data }) => {
    // console.log("Task List Number:", data)
 
    return (
    <div className='flex justify-between items-start gap-5 mt-14 mb-14'>
        <div className="boxi h-40 w-[50%] bg-blue-600 flex flex-col justify-center items-start gap-3 p-8">
            <h1 className='text-3xl font-bold  '>{data.taskCount.newTask}</h1>
            <h1 className='text-2xl font-bold '>New Task</h1>
        </div>
        <div className="boxi h-40 w-[50%] bg-green-800 flex flex-col justify-center items-start gap-3 p-8">
            <h1 className='text-3xl font-bold '>{data.taskCount.completed}</h1>
            <h1 className='text-2xl font-bold '>Task Completed</h1>
        </div>
        <div className="boxi h-40 w-[50%] bg-yellow-600 flex flex-col justify-center items-start gap-3 p-8">
            <h1 className='text-3xl font-bold '>{data.taskCount.active}</h1>
            <h1 className='text-2xl font-bold '>Task Active</h1>
        </div>
        <div className="boxi h-40 w-[50%] bg-amber-950 flex flex-col justify-center items-start gap-3 p-8">
            <h1 className='text-3xl font-bold '>{data.taskCount.failed}</h1>
            <h1 className='text-2xl font-bold '>Task Failed</h1>
        </div>
    </div>
  )
}

export default TaskListNumber