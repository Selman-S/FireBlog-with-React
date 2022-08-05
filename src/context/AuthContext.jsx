import { createContext, useEffect, useState } from 'react'
import { userObserver } from '../helper/firebase'

export const AuthContext = createContext()

export const AuthProvider = props => {
  const [currentUser, setCurrentUser] = useState(null)
  const [updateProfile, setUpdateProfile] = useState(null)
  useEffect(() => {
    userObserver(setCurrentUser)
  }, [])
  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, updateProfile, setUpdateProfile }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
