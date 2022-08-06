import { Box } from '@mui/material'
import React from 'react'

import BlogForm from '../components/BlogForm'
import LeftAside from '../components/LeftAside'
import RightAside from '../components/RightAside'

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <LeftAside />
      <BlogForm />
      <RightAside />
    </Box>
  )
}

export default Dashboard
