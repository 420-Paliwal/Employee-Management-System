import React, { useState } from 'react'
import Login from '../Components/Auth/Login'

const Header = (props) => {
  // console.log("Header :", data)
 
  // const [userName, setUserName] = useState('')
 
  // if(!data){
  //   setUserName('Admin')
  // }else{
  //   setUserName(data.firstName)
  // }

  const logOutUser = () => {
       localStorage.setItem('loggedInUser','')
       props.changeUser('')
      } 
 
  return (
     <div className="my-8 flex items-center justify-between">
        <div className="box1">
            <h1 className='font-bold'>Hello</h1>
            <h1 className='text-3xl font-bold'>userName 👋</h1>
        </div>
        <div className="box2">
            <button onClick={logOutUser} className='p-2 bg-red-700 text-white cursor-pointer rounded-xl'>Log Out</button>
        </div>
     </div>
  )
}

export default Header