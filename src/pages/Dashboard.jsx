import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import BlogCard from '../components/BlogCard'
import {data} from '../helper/data'

const Dashboard = () => {

  return (
    <Container maxWidth="xl" sx={{p:4,display:'flex',flexWrap:'wrap', justifyContent: 'center' ,gap:10}}  >
      {data.map((card)=>
      (
        <BlogCard card={card} key={card.id} />

      ))}
    </Container>
  )
}

export default Dashboard
