import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { blueGrey, grey, red } from '@mui/material/colors'

import { Box } from '@mui/system'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

const BlogCard = ({ card }) => {
  const dateLocal = card.dateLocal.split(' ')

  const email = 'walter@clarusway.com'
  const timeLocal = new Date().toLocaleTimeString()

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={card.imgUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            sx={{ color: 'primary.light', fontFamily: 'Girassol' }}
            gutterBottom
            variant="h5"
            component="h5"
          >
            {card.title}
          </Typography>
          <Typography
            variant=""
            component="p"
            sx={{ color: blueGrey[200], fontSize: '12px', marginBottom: '3px' }}
          >
            {dateLocal[1]}, {dateLocal[0]}, {dateLocal[2]} {dateLocal[3]}{' '}
            {timeLocal[0]}
            {timeLocal[1]}
            {timeLocal[2]}
            {timeLocal[3]}
            {timeLocal[4]}
            {timeLocal[5]}
            {timeLocal[6]}
            {timeLocal[7]}
            {timeLocal[8]}
            {timeLocal[9]}
            {timeLocal[10]}
          </Typography>
          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '2',
              WebkitBoxOrient: 'vertical',
            }}
            component={'p'}
            variant="body2"
            color="text.secondary"
          >
            {card.description}
          </Typography>{' '}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box sx={{ display: 'flex', cursor: 'default' }}>
          <Typography>
            <AccountCircleIcon />
          </Typography>{' '}
          <Typography>{email} </Typography>
        </Box>
      </CardActions>
      <CardActions sx={{ color: grey[400], fontSize: '12px', gap: 1 }}>
        {card.like ? (
          <FavoriteIcon sx={{ cursor: 'pointer', color: red[500] }} />
        ) : (
          <FavoriteIcon sx={{ cursor: 'pointer' }} />
        )}
        <Typography>{card.like}</Typography>{' '}
        <ChatBubbleOutlineIcon sx={{ cursor: 'pointer' }} />
        <Typography>{card.comments.count}</Typography>
      </CardActions>
    </Card>
  )
}

export default BlogCard
