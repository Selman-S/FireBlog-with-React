import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { blueGrey } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/system';
const BlogCard = ({card}) => {
  const dateLocal = new Date().toDateString().split(' ')
const email ='walter@clarusway.com'
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
          <Typography sx={{color:'primary.light',fontFamily:'Girassol'}} gutterBottom variant="h5" component="h5">
            {card.title}
          </Typography>
          <Typography variant="" component="p" sx={{color:blueGrey[200],fontSize:'12px',marginBottom:'3px'}}>
  {dateLocal[1]}, {dateLocal[0]}, {dateLocal[2]} {dateLocal[3]} {timeLocal[0]}{timeLocal[1]}{timeLocal[2]}{timeLocal[3]}{timeLocal[4]}{timeLocal[5]}{timeLocal[6]}{timeLocal[7]}{timeLocal[8]}{timeLocal[9]}{timeLocal[10]}
</Typography>
          
          <Typography   sx={{
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: '2',
      WebkitBoxOrient: 'vertical',
   }}  variant="body2" color="text.secondary">
            {card.description}
          </Typography>
         
          <Box sx={{display:'flex'}}>

          <Typography >
            <AccountCircleIcon/>
          </Typography>  <Typography>{email} </Typography> 
          </Box>
     
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default BlogCard
