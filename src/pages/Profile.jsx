import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import * as React from 'react'
import Card from '@mui/material/Card'
import { Button, InputLabel } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box, Grid, TextField } from '@mui/material'

import { useState } from 'react'
import { updaterProfile } from '../helper/firebase'

export default function Profile() {
  const navigate = useNavigate()
  const { currentUser } = useContext(AuthContext)
  const { updateProfile } = useContext(AuthContext)
  const [displayName, setDisplayName] = useState(updateProfile.displayName)
  const [email, setEmail] = useState(updateProfile.email)
  const [image, setImage] = useState(updateProfile.photoURL)

  const handleUpdate = () => {
    updaterProfile(displayName, email, image, navigate)
    setDisplayName('')
    setEmail('')
    setImage('')
    navigate('/')
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '80vh' }}
    >
      <Grid item xs={3} sx={{ display: { xs: 'block', md: 'flex' } }}>
        <Box sx={{ maxWidth: 345, m: 10 }}>
          <CardMedia
            component="img"
            alt={currentUser.displayName}
            style={{ maxWidth: '140px', margin: 'auto' }}
            height="140"
            image={currentUser.photoURL}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {currentUser.displayName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {currentUser.email}
            </Typography>
          </CardContent>
        </Box>{' '}
        <Card sx={{ width: '345px', m: 10 }}>
          <CardContent fullWidth>
            <InputLabel sx={{ mt: 3 }} fullWidth>
              Update Displayname
            </InputLabel>
            <TextField
              label="displayname"
              variant="outlined"
              value={displayName}
              onChange={e => setDisplayName(e.target.value)}
              fullWidth
              id="validation-outlined-input"
            />{' '}
            <InputLabel sx={{ mt: 3 }}>Update Email</InputLabel>
            <TextField
              label="email"
              fullWidth
              variant="outlined"
              onChange={e => setEmail(e.target.value)}
              value={email}
              id="validation-outlined-input"
            />
            <InputLabel sx={{ mt: 3 }}>Update Image</InputLabel>
            <TextField
              label="imageUrl"
              variant="outlined"
              fullWidth
              onChange={e => setImage(e.target.value)}
              value={image}
              id="validation-outlined-input"
            />
            <Grid>
              <Button
                fullWidth
                sx={{ mt: 3 }}
                onClick={handleUpdate}
                variant="contained"
                maxWidth
              >
                Update Profile
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
