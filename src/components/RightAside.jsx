import { Box, Typography } from '@mui/material'
import React from 'react'

const RightAside = () => {
  return (
    <Box
      sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
      style={{ minWidth: '280px', maxWidth: '360px', border: '1px solid red' }}
    >
      <Typography style={{ width: '100%' }}>RightAside</Typography>
    </Box>
  )
}

export default RightAside
