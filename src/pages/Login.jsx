import {
  Avatar,
  Button,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import blogLogin from '../assets/blok.png'
import { AuthContext } from '../context/AuthContext'
import googleSvg from '../assets/google.svg'

const Login = () => {
  const { auth, setAuth } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    console.log('çalişti')
    setAuth('asım')
  }

  return (
    <Grid>
      <Paper
        elevation={10}
        style={{
          padding: 20,
          height: '530px',
          width: '350px',
          margin: '3rem auto 5rem',
        }}
      >
        <Grid align="center">
          <Avatar
            sx={{ backgroundColor: 'primary.main', width: 170, height: 170 }}
          >
            <img src={blogLogin} alt="" width="170" />
          </Avatar>
          <Typography
            variant="h4"
            component="h2"
            sx={{ mt: 2, fontFamily: 'roboto' }}
          >
            Sign in
          </Typography>
        </Grid>

        <Grid align="center" component="form" onSubmit={handleSubmit}>
          <TextField
            sx={{ mt: 2, fontFamily: 'roboto' }}
            label="Email"
            inputProps={{ style: { fontFamily: 'roboto' } }}
            InputLabelProps={{ style: { fontFamily: 'roboto' } }} // font size of input label
            placeholder=" Enter Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            fullWidth
          />
          <TextField
            sx={{ mt: 2, fontFamily: 'roboto' }}
            label="Password"
            placeholder=" Enter Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            fullWidth
            inputProps={{ style: { fontFamily: 'roboto' } }}
            InputLabelProps={{ style: { fontFamily: 'roboto' } }}
            required
          />
          <Button
            sx={{ mt: 2, fontFamily: 'roboto' }}
            type="submit"
            variant="contained"
            fullWidth
          >
            Login
          </Button>
          <Typography sx={{ mt: 2, fontFamily: 'roboto' }}>
            Don't you have an account ?<Link to="/register">Register</Link>
          </Typography>
        </Grid>
        <Button
          sx={{ mt: 2, fontFamily: 'roboto' }}
          variant="contained"
          fullWidth
        >
          Continue with Google{' '}
          <Avatar sx={{ backgroundColor: 'inherit', height: '27px' }}>
            <img src={googleSvg} style={{ width: '25px' }} alt="" />
          </Avatar>
        </Button>
      </Paper>
    </Grid>
  )
}

export default Login
