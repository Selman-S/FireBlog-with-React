import { Container } from '@mui/material'
import React from 'react'
import { data } from '../helper/data'
import BlogCard from './BlogCard'
import { useEffect } from 'react'
import { getPosts } from '../helper/functions'
import { BlogContext } from '../context/BlogContext'
import { useContext } from 'react'

const BlogForm = () => {
  const { blogs, setBlogs } = useContext(BlogContext)
  useEffect(() => {
    const blog = getPosts()
    blog.then(a => setBlogs(a))
  }, [])
  console.log(blogs)
  return (
    <Container
      maxWidth="xl"
      style={{
        width: {
          xs: '590px',
          sm: '590px',
          md: '590px',
          xl: '590px',
          xxl: '700px',
        },
        border: '1px solid red',
      }}
      sx={{
        p: 4,
      }}
    >
      {data.map(card => (
        <BlogCard card={card} key={card.id} />
      ))}
    </Container>
  )
}

export default BlogForm
