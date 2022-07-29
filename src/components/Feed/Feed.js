import React, { useState, useEffect } from 'react'
import "./Feed.css";
import { db } from '../../firebase'
import Grid from '@mui/material/Grid';
import Post from './Post/Post';
import ClipLoader from "react-spinners/ClipLoader";
import { getFeed } from '../../services/posts';

export default function Feed() {

  const [posts, setPosts] = useState(null)

  useEffect(() => {
    getFeed(setPosts)
  }, [])

  return (
    <div className='container'>
      {posts == null ?
        <div className='loaderContainer'>
          <ClipLoader size={20} color='gray' loading={true}/>
        </div>
        :
        <Grid className='grid' container alignItems="stretch" spacing={3}>
          {posts.map((post) => (
            <Grid key={post.id} item xs={12} sm={12} md={12} lg={6} xl={4}>
              <Post post={post}/>
            </Grid>
          ))}
        </Grid>
      }
    </div>
  )
}
