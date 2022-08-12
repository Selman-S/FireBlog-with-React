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
import SearchIcon from '@mui/icons-material/Search'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import userPhoto from '../assets/user.jfif'
import MenuIcon from '@mui/icons-material/Menu'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import { grey } from '@mui/material/colors'
import cw from '../assets/cw.jpeg'
import HomeIcon from '@mui/icons-material/Home'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import { logout } from '../helper/firebase'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
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
  console.log(currentUser)
  if (currentUser !== null) {
    if (currentUser.displayName === null) {
      var useName = currentUser.email.split('@')[0]
    } else {
      var useName = currentUser.displayName
    }
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', mr: 2 }}>
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
              <Box sx={{ my: 'auto' }}>
                <Search
                  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
                >
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              </Box>{' '}
            </Box>
            <Box
              sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' } }}
              style={{
                flexGrow: 1,
                marginRight: '30%',
                gap: '2rem',
              }}
            >
              <Link
                to="/"
                style={{
                  fontFamily: 'roboto',
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                <HomeIcon></HomeIcon>
              </Link>
              <Link
                to="/myposts"
                style={{
                  fontFamily: 'roboto',
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                <PeopleOutlineIcon></PeopleOutlineIcon>
              </Link>{' '}
              <Link
                to="/watch"
                style={{
                  fontFamily: 'roboto',
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                <OndemandVideoIcon></OndemandVideoIcon>
              </Link>
              <Link
                to="/bookmark"
                style={{
                  fontFamily: 'roboto',
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                <MenuIcon></MenuIcon>
              </Link>
            </Box>

            <Box
              sx={{
                display: { xs: 'flex', md: 'flex' },
              }}
            >
              {' '}
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
              <Box sx={{ display: 'flex', cursor: 'pointer', ml: 2 }}>
                <Box sx={{ my: 'auto', mx: 1 }}>
                  <Tooltip title="Account">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar src="/static/images/avatar/1.jpg">
                        <img
                          width="50"
                          src={currentUser ? currentUser.photoURL : userPhoto}
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
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar
