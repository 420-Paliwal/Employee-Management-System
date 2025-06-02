import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    setLocalStorage()
    const data = getLocalStorage()
    setUserData({data})
  }, [])
  
   
  return (
    <div>
        <AuthContext.Provider value={userData}>
           { children }
        </AuthContext.Provider>
      </div>
  )
}

export default AuthProvider