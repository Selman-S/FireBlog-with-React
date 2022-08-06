import { Avatar, Box, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const LeftAside = () => {
  const { currentUser } = useContext(AuthContext)

  console.log(currentUser)
  if (currentUser !== null) {
    if (currentUser.displayName === null) {
      var useName = currentUser.email.split('@')[0]
    } else {
      var useName = currentUser.displayName
    }
  }

  return (
    <Box
      sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}
      style={{
        minWidth: '300px',
        maxWidth: '360px',
        border: '1px solid red',
        padding: '.5rem',
      }}
    >
      <Link
        to="profile"
        style={{
          fontFamily: 'roboto',
          color: 'black',
          textDecoration: 'none',
        }}
      >
        <Box
          style={{
            display: 'flex',

            transition: 'all 0.1s ease-in-out',
            borderRadius: '5px',
            padding: '10px',
          }}
          sx={theme => ({
            '&:hover': {
              backgroundColor: '#e2e2e2',
            },
          })}
        >
          <Tooltip title="Open settings">
            <IconButton sx={{ p: 0, mr: 2 }}>
              <Avatar src="/static/images/avatar/1.jpg">
                <img
                  width="40"
                  src={
                    currentUser
                      ? currentUser.photoURL
                      : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
                  }
                  alt=""
                />
              </Avatar>
            </IconButton>
          </Tooltip>
          <Typography sx={{ my: 'auto', fontSize: '1.4rem' }}>
            {useName}
          </Typography>
        </Box>
      </Link>
    </Box>
  )
}

export default LeftAside
