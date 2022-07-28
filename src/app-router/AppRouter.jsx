import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from '../components/Nav'
import Dashboard from '../pages/Dashboard'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path={'/'} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
