import { Box } from '@mui/material'
import React from 'react'

import BlogForm from '../components/BlogForm'

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <BlogForm />
    </Box>
  )
}

export default Dashboard
