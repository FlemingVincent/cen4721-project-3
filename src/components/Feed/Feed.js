import React, { useState, useEffect } from 'react'
import "./Feed.css";
import { db } from '../../firebase'
import Grid from '@mui/material/Grid';
import Post from './Post/Post';

export default function Feed() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data()
        }
      )))
    })
  }, [])

  console.log(posts)

  return (
    <div className='container'>
      <Grid className='grid' container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post.id} item xs={12} sm={12} md={12} lg={6} xl={4}>
            <Post post={post}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
