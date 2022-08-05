import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
} from '@mui/material'
import googleSvg from '../assets/google.svg'

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import blogLogin from '../assets/blok.png'
import { createUser, signupProvider } from '../helper/firebase'

const Register = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = e => {
    e.preventDefault(e)
    createUser(email, password, navigate, name)
    setEmail('')
    setPassword('')
  }
  return (
    <Grid>
      <Paper
        elevation={10}
        style={{
          padding: 20,
          height: '600px',
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
            Sign up
          </Typography>
        </Grid>
        <Grid align="center" component="form" onSubmit={handleSubmit}>
          <TextField
            sx={{ mt: 2, fontFamily: 'roboto' }}
            label="Name"
            inputProps={{ style: { fontFamily: 'roboto' } }}
            InputLabelProps={{ style: { fontFamily: 'roboto' } }}
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder=" Enter Your Name"
            fullWidth
            required
          />
          <TextField
            sx={{ mt: 2, fontFamily: 'roboto' }}
            label="Email"
            inputProps={{ style: { fontFamily: 'roboto' } }}
            InputLabelProps={{ style: { fontFamily: 'roboto' } }}
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder=" Enter Email"
            fullWidth
            required
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
            sx={{ mt: 1, fontFamily: 'roboto' }}
            type="submit"
            variant="contained"
            fullWidth
          >
            Register
          </Button>
          <Typography sx={{ mt: 1, fontFamily: 'roboto' }}>or</Typography>
        </Grid>
        <Button
          sx={{ mt: 1, fontFamily: 'roboto' }}
          variant="contained"
          fullWidth
          onClick={() => signupProvider(navigate)}
        >
          Continue with Google{' '}
          <Avatar sx={{ backgroundColor: 'inherit', height: '27px' }}>
            <img src={googleSvg} style={{ width: '25px' }} alt="" />
          </Avatar>
        </Button>
        <Typography align="center" sx={{ mt: 2, fontFamily: 'roboto' }}>
          Do you have an account ?<Link to="/login">Login</Link>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default Register
