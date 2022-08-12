import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from '../components/Navbar'
import About from '../pages/About'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import MyPosts from '../pages/MyPosts'

import PrivateRouter from './PrivateRouter'
import Details from '../pages/Details'
import Watch from '../pages/Watch'
import LeftAside from '../components/LeftAside'
import { Box } from '@mui/system'
import RightAside from '../components/RightAside'
import Bookmark from '../pages/Bookmark'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <LeftAside />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="bookmark" element={<Bookmark />} />
          <Route path="details/:id" element={<PrivateRouter />}>
            <Route path="" element={<Details />} />
          </Route>
          <Route path="about" element={<PrivateRouter />}>
            <Route path="" element={<About />} />
          </Route>{' '}
          <Route path="watch" element={<PrivateRouter />}>
            <Route path="" element={<Watch />} />
          </Route>
          <Route path="profile" element={<PrivateRouter />}>
            <Route path="" element={<Profile />} />
          </Route>
          <Route path="myposts" element={<PrivateRouter />}>
            <Route path="" element={<MyPosts />} />
          </Route>
        </Routes>
        <RightAside />
      </Box>
    </BrowserRouter>
  )
}

export default AppRouter
