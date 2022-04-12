import { Box, Grid } from '@mui/material'
import React from 'react'
import Post from '../components/card'
import Posts from '../assets/posts'

function Feed() {
  return (
    <div>
      <Box >
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 8, md: 12 }} >
          {Posts.map(post => (
            <Grid item xs={2} sm={4} md={4} key={post.id}>
              <Post 
                like={post.likeCount}
                caption={post.caption}
                image={post.imgUrl}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default Feed

