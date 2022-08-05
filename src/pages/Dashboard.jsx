import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import BlogCard from '../components/BlogCard'
import { data } from '../helper/data'
import { Divider, Typography } from '@mui/material'
import { useEffect } from 'react'
import { getPosts, useFetch } from '../helper/functions'
import { BlogContext } from '../context/BlogContext'
import { useContext } from 'react'

const Dashboard = () => {
  const { blogs, setBlogs } = useContext(BlogContext)
  useEffect(() => {
    const blog = getPosts()
    blog.then(a => setBlogs(a))
  }, [])
  console.log(blogs)
  return (
    <>
      <Typography>
        <Divider sx={{ mt: 2, fontFamily: 'Girassol' }}>
          <Typography sx={{ fontSize: '3rem', color: 'primary.main' }}>
            Dashboard
          </Typography>
        </Divider>
      </Typography>
      <Container
        maxWidth="xl"
        sx={{
          p: 4,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 10,
        }}
      >
        {data.map(card => (
          <BlogCard card={card} key={card.id} />
        ))}
      </Container>
    </>
  )
}

export default Dashboard
