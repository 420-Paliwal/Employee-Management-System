import React, { useState } from 'react'
import { CgPassword } from 'react-icons/cg'

const Login = ({ handleLogin }) => {
  // console.log(handleLogin)
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log();
    handleLogin(userName, userPassword)
    // console.log(userName,userPassword)
    setUserName('')
    setUserPassword('')
  }

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
       <div className="border-2 border-emerald-900 p-20 rounded-xl">
          <form className='flex flex-col items-center justify-center' onSubmit={(e) => {
            submitHandler(e)
          }}>
            <input value={userName} onChange={(e) => {
              setUserName(e.target.value)
              // console.log("E-mail : ",e.target.value);
              
            }} required type="email" placeholder='Enter Your E-mail' className='border-2 border-emerald-900 py-3 px-4 m-3 rounded-full text-gray-400 placeholder:text-gray-500 outline-none text-2xl'/>
            <input value={userPassword} onChange={(e) => {
              // console.log("Password : ",e.target.value);

              setUserPassword(e.target.value)
            }} required type="password" placeholder='Enter Your Password' className='border-2 border-emerald-900 text-2xl  outline-none text-gray-400 py-3 px-4 m-3 rounded-full placeholder:text-gray-500'/>
            <button className='cursor-pointer bg-emerald-900 py-3 w-75 m-4 text-2xl  rounded-full outline-none' >Log In</button>
          </form>
       </div>
    </div>
  )
}

export default Login