import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import BlogCard from '../components/BlogCard'
import {data} from '../helper/data'
import { Divider, Typography } from '@mui/material'

const Dashboard = () => {

  return (
    <><Typography>

     <Divider sx={{fontFamily: 'Girassol'}}>Dashboard</Divider>
    </Typography>
    <Container maxWidth="xl" sx={{p:4,display:'flex',flexWrap:'wrap', justifyContent: 'center' ,gap:10}}  >
        
      {data.map((card)=>
      (
        <BlogCard card={card} key={card.id} />
        
        ))}
    </Container>
        </>
  )
}

export default Dashboard
