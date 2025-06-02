import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({ data }) => {
    return (
        <div id='flex-box' className='h-[31%] overflow-x-auto py-5 flex flex-nowrap gap-5'>
        {data.tasks.map((elem, key)=>{
            if(elem.active){
            return <AcceptTask data={elem} key={key}/>
          }
          if(elem.newTask){
            return <NewTask key={key} data={elem}/>
          }
          if(elem.failed){
            return <FailedTask key={key} data={elem}/>
          }
          if(elem.completed){
            return <CompleteTask key={key} data={elem}/>
          }
})}
    </div>
  )
}

export default TaskList