import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const BlogCard = ({card}) => {
  const dateLocal = new Date().toDateString().split(' ')

const timeLocal = new Date().toLocaleTimeString();

  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={card.imgUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{color:'primary.light'}} gutterBottom variant="h5" component="div">
            {card.title}
          </Typography>
          <Typography sx={{color:'primary.light'}} gutterBottom variant="h5" component="div">
            {dateLocal[1]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {card.description}
          </Typography>
          <Typography>
            <AccountCircleIcon/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default BlogCard
