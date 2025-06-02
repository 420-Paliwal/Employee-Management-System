import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import TaskList from './Components/TaskList/TaskList'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
// import { getLocalStorage, setLocalStorage } from './Utils/Localstorage'
import { AuthContext } from './Context/AuthProvider'
import { use } from 'react'

const App = () => {
  // localStorage.clear()
  const [user, setUser] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
    // localStorage.setItem('loggedInUser','')
    const loggedInUserData = localStorage.getItem('loggedInUser')
    if(loggedInUserData){
      const userData = JSON.parse(loggedInUserData)
      setUser(userData.role)
      setLoggedInUser(userData.data)
    }
  }, [])
  
  
  
  const handleLogin = (email, password) => {
     if(email == 'admin@example.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(authData){
      const employee = authData.data.local_employees_data.find((e)=>email == e.email && authData.data.local_employees_data.find((e)=>password == e.password))   
      if (employee){
      setUser('employee')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee}))
      setLoggedInUser(employee)
    }
    }
    else{
      alert("Invalid Credentials")
    }
  }
  return (
    <>  
      {!user ?<Login handleLogin={handleLogin}/> : ""}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUser} />  : null)}
    </>
  )
}

export default App