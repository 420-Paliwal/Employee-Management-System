import React, { useState } from 'react'
import { CgArrowRightO } from "react-icons/cg";
import Login from '../Components/Auth/Login';
// import recalculateAndUpdateTaskCounts from '../Utils/LocalStorage';

const CreateTask = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [date, setDate] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})
   
    const submitHandler = (e) => {
         e.preventDefault()
        //  setTitle('')
        //  setDescription('')
        //  setAssignTo('')
        //  setCategory('')
        //  setDate('')

        setNewTask({
            title,description,assignTo,date,category,active:false,new:true,failed:false,completed:false
        })
        const data =  JSON.parse(localStorage.getItem('employees'))
        data.forEach(function(elem){
            // console.log(elem.firstName)
            if(elem.firstName == assignTo){
                elem.tasks.push(newTask)
                localStorage.setItem('employees',JSON.stringify(data))
                alert("Task Created Successfully")
                // console.log(elem.tasks)
            }
            console.log(elem.tasks)
            setTitle('')
            setDescription('')
            setAssignTo('')
            setCategory('')
            setDate('')
        })
    }

    return (
        <div className='flex justify-center items-center'>
            <form onSubmit={(e) => {                     
                submitHandler(e)                                                     
            }} className='mt-10 flex flex-col bg-[#1C1C1C] w-1/3 p-10'>

                <div className='mb-5 flex justify-start gap-3 items-center'>
                    <h1 className='font-bold text-2xl'><CgArrowRightO- /></h1>       
                    <h1 className='font-bold text-3xl'> Create Task</h1>
                </div>

                <h2 className='mt-3'> <label htmlFor="userName" className=''>
                    Task Title
                </label></h2>
                <input required value={title} onChange={(e)=>{
                    setTitle(e.target.value)
                }} id='userName' type="text" placeholder='Enter Your task' className=' border-1 border-red-50 outline-none mt-3 p-2 rounded-xl' />


                <h2 className='mt-3'> <label htmlFor="description" className=''>
                    Description
                </label></h2>
                <textarea required value={description} onChange={(e)=>{
                    setDescription(e.target.value)
                }} id='description' type="text" placeholder='Enter Your task' className=' border-1 border-red-50 outline-none mt-3 p-2 rounded-xl'></textarea>


                <h2 className='mt-3'> <label htmlFor="date" className=''>
                    Date
                </label></h2>
                <input value={date} required onChange={(e)=>{
                    setDate(e.target.value)
                }} id='date' type='date' placeholder='Enter Your task' className=' border-1 border-red-50 outline-none mt-3 p-2 rounded-xl' />


                <h2 className='mt-3'> <label htmlFor="assign_to" className=''>
                    Assign To
                </label></h2>
                <input value={assignTo} required onChange={(e)=>{
                    setAssignTo(e.target.value)
                }} id='assign_to' type="text" placeholder='Employee Name' className=' border-1 border-red-50 outline-none mt-3 p-2 rounded-xl' />


                <h2 className='mt-3'> <label htmlFor="category" className=''>
                    Category
                </label></h2>
                <input value={category} required onChange={(e)=>{
                    setCategory(e.target.value)
                }} id='category' type="text" placeholder='Design, Advertisement, etc..' className=' border-1 border-red-50 outline-none mt-3 p-2 rounded-xl' />

                <button className='bg-black cursor-pointer mt-5 p-3 font-semibold rounded-2xl text-lg'>Create Task</button>
            </form>
        </div>
    )
}

export default CreateTask 