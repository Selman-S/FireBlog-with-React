import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import * as React from 'react'
import Card from '@mui/material/Card'
import { Button, InputLabel } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import FormControl from '@mui/material/FormControl'
import Typography from '@mui/material/Typography'
import { Box, Grid, TextField } from '@mui/material'

import { styled } from '@mui/material/styles'

export default function ImgMediaCard() {
  const { currentUser } = useContext(AuthContext)
  const ValidationTextField = styled(TextField)({
    '& input:valid + fieldset': {
      borderColor: 'primary.main',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  })
  console.log(currentUser)
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '80vh' }}
    >
      <Grid item xs={3} style={{ display: 'flex' }}>
        <Box sx={{ maxWidth: 345, mx: 10 }}>
          <CardMedia
            component="img"
            alt={currentUser.displayName}
            style={{ maxWidth: '140px', margin: 'auto' }}
            height="140"
            image={currentUser.photoURL}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Display Name :{currentUser.displayName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email :{currentUser.email}
            </Typography>
          </CardContent>
        </Box>{' '}
        <Card sx={{ width: '345px' }}>
          <CardContent fullWidth>
            <InputLabel sx={{ mt: 3 }} fullWidth>
              Update Displayname
            </InputLabel>
            <ValidationTextField
              label="displayname"
              variant="outlined"
              defaultValue=""
              fullWidth
              id="validation-outlined-input"
            />{' '}
            <InputLabel sx={{ mt: 3 }}>Update Email</InputLabel>
            <ValidationTextField
              label="email"
              fullWidth
              variant="outlined"
              defaultValue=""
              id="validation-outlined-input"
            />
            <InputLabel sx={{ mt: 3 }}>Update Image</InputLabel>
            <ValidationTextField
              label="imageUrl"
              variant="outlined"
              fullWidth
              defaultValue=""
              id="validation-outlined-input"
            />
            <Grid>
              <Button fullWidth sx={{ mt: 3 }} variant="contained" maxWidth>
                Update Profile
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
