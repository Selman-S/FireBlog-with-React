import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from '../components/Navbar'
import About from '../pages/About'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import {theme} from '../globalyStyles/theme';
import { ThemeProvider,  } from '@mui/material/styles';

const AppRouter = () => {

  return (
    <BrowserRouter>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
    
      </Routes>

    </BrowserRouter>
  )
}

export default AppRouter
