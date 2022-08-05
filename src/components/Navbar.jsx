import { Link } from 'react-router-dom'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import Badge from '@mui/material/Badge'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MoreIcon from '@mui/icons-material/MoreVert'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import { grey } from '@mui/material/colors'
import cw from '../assets/cw.jpeg'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import { logout } from '../helper/firebase'
import { TextField } from '@mui/material'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))
const Navbar = () => {
  const { currentUser } = useContext(AuthContext)
  const { setUpdateProfile } = useContext(AuthContext)

  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleLogout = () => {
    handleCloseUserMenu()
    logout()
  }
  const handleProfile = () => {
    handleCloseUserMenu()
    setUpdateProfile(currentUser)
  }

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget)
  }
  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ flexGrow: 0, display: 'flex', mr: 2 }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <Link to="/">
                  <img src={cw} alt="logo" width="50px" />
                </Link>
              </IconButton>
            </Box>
            <Search sx={{ display: { xs: 'none', sm: 'block' } }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ flexGrow: 1, border: '1px solid green' }} />
            asad
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                border: '1px solid red',
              }}
            >
              <Box sx={{ my: 'auto' }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
                      <MenuItem onClick={handleProfile}>
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
                            to="myposts"
                            style={{
                              fontFamily: 'roboto',
                              color: grey[900],
                              textDecoration: 'none',
                            }}
                          >
                            My Post
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
              <Typography>asd</Typography>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </>
  )
}

export default Navbar
