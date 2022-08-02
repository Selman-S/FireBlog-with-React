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
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import { grey } from '@mui/material/colors'

import cw from '../assets/cw.jpeg'

const pages = ['Dashboard', 'Profile', 'About', 'Login', 'Register']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const Navbar = () => {
  const user = false
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
                <Avatar alt="Semy Sharp" src="/static/images/avatar/2.jpg" />
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
              {user ? (
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
                  <MenuItem onClick={handleCloseUserMenu}>
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
