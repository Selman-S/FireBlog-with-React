import { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = props => {
  const [auth, setAuth] = useState('s')
  return (
    <AuthContext.Provider value={{ auth: auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  )
}
