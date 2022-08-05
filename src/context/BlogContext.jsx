import React from 'react'
import { createContext, useState } from 'react'

export const BlogContext = createContext()

export const BlogProvider = props => {
  const [blogs, setBlogs] = useState(null)

  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {props.children}
    </BlogContext.Provider>
  )
}
