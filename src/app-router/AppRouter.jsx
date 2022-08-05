import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from '../components/Navbar'
import About from '../pages/About'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import MyPosts from '../pages/MyPosts'

import NewBlog from '../pages/NewBlog'
import PrivateRouter from './PrivateRouter'
import Details from '../pages/Details'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="details/:id" element={<PrivateRouter />}>
          <Route path="" element={<Details />} />
        </Route>
        <Route path="about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>
        <Route path="profile" element={<PrivateRouter />}>
          <Route path="" element={<Profile />} />
        </Route>
        <Route path="myposts" element={<PrivateRouter />}>
          <Route path="" element={<MyPosts />} />
        </Route>
        <Route path="newblog" element={<PrivateRouter />}>
          <Route path="" element={<NewBlog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
