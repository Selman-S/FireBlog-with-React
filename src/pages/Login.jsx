import {
  Avatar,
  Button,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import blogLogin from '../assets/blok.png'

const Login = () => {
  return (
    <Grid>
      <Paper
        elevation={10}
        style={{
          padding: 20,
          height: '500px',
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
        <Grid align="center">
          <TextField
            sx={{ mt: 2, fontFamily: 'roboto' }}
            label="Email"
            inputProps={{ style: { fontFamily: 'roboto' } }}
            InputLabelProps={{ style: { fontFamily: 'roboto' } }} // font size of input label
            placeholder=" Enter Email"
            fullWidth
          />
          <TextField
            sx={{ mt: 2, fontFamily: 'roboto' }}
            label="Password"
            placeholder=" Enter Email"
            type="password"
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
      </Paper>
    </Grid>
  )
}

export default Login
