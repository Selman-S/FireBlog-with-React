import { Box, Typography } from '@mui/material'
import React from 'react'

const RightAside = () => {
  return (
    <Box
      sx={{
        width: { md: '300px', lg: '300px', xl: '360px' },
        border: '1px solid red',
        display: { xs: 'none', sm: 'none', md: 'block' },
      }}
    >
      <Typography style={{ width: '100%' }}>RightAside</Typography>
    </Box>
  )
}

export default RightAside
