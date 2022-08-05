import { Link } from 'react-router-dom'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'

import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'

import { grey } from '@mui/material/colors'

import cw from '../assets/cw.jpeg'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

import { logout } from '../helper/firebase'

const Navbar = () => {
  const { currentUser } = useContext(AuthContext)
  console.log(currentUser)
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleLogout = () => {
    handleCloseUserMenu()
    logout()
  }
  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary.main' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <Link to="/">
                <img src={cw} alt="logo" width="50px" />
              </Link>
            </IconButton>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              color: '#fff',
              mr: 2,

              flexGrow: 1,
              fontFamily: 'Girassol',
              fontWeight: 700,
              letterSpacing: '.3rem',

              textDecoration: 'none',
            }}
          >
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontFamily: 'Girassol',
              }}
            >
              ──── &lt;Selman/&gt; Blog ────
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="/static/images/avatar/1.jpg">
                  {' '}
                  <img
                    width="40"
                    src={
                      currentUser
                        ? currentUser.photoURL
                        : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
                    }
                    alt=""
                  />{' '}
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {currentUser ? (
                <Box>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link
                        to="profile"
                        style={{
                          fontFamily: 'roboto',
                          color: grey[900],
                          textDecoration: 'none',
                        }}
                      >
                        Profile
                      </Link>
                    </Typography>
                  </MenuItem>

                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link
                        to="newblog"
                        style={{
                          fontFamily: 'roboto',
                          color: grey[900],
                          textDecoration: 'none',
                        }}
                      >
                        New
                      </Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <Typography
                      textAlign="center"
                      style={{
                        fontFamily: 'roboto',
                        color: grey[900],
                        textDecoration: 'none',
                      }}
                    >
                      Logout
                    </Typography>
                  </MenuItem>
                </Box>
              ) : (
                <>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link
                        to="login"
                        style={{
                          fontFamily: 'roboto',
                          color: grey[900],
                          textDecoration: 'none',
                        }}
                      >
                        Login
                      </Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link
                        to="register"
                        style={{
                          fontFamily: 'roboto',
                          color: grey[900],
                          textDecoration: 'none',
                        }}
                      >
                        Register
                      </Link>
                    </Typography>
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
