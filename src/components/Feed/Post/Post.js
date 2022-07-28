import React, {useState} from 'react'
import "./Post.css";
import {Card, CardActions, CardContent, Typography, Avatar, TextField, Box, Button, IconButton} from '@mui/material'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import { indigo, yellow } from '@mui/material/colors';
import { maxWidth } from '@mui/system';

export default function Post({post}) {

  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)

  return (
    <Card sx={{height: 400, minWidth: 400, maxWidth: 600}}>
        <div className='container'>
            <div className='informationContainer'>
                <div className='subInformatioContainer'>
                    <div className='title'>   
                        {post?.data.title}
                    </div>
                    <div className='userInfo'>
                        <div className='pictureContainer'>
                            
                        </div>
                        <div className='extraInfo'>
                            <div className='userName'>
                                {post?.data.name}
                            </div>
                            <div className='date'>
                                {new Date(post?.data.timestamp.seconds * 1000).toISOString().slice(0, 10)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='subInformatioContainer2'>
                
                    <div>
                        <div className='tagContainer'>
                            <div className='tag'>{post?.data.tag}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='descriptionContainer'>
                <p>{post?.data.details}</p>
            </div>
            <div className='buttonsContainer'>
                <div className='bookmarkContainer'>
                    <IconButton size="small" className='bookmark' onClick={() => {setBookmarked(!bookmarked)}}>
                        <BookmarkRoundedIcon sx={{color: (bookmarked) ? yellow[700] : ''}} fontSize="medium"/>
                    </IconButton>
                </div>
                <div className='likeContainer'>
                    <IconButton size="small" onClick={() => {setLiked(!liked)}}>
                        <ThumbUpRoundedIcon color={(liked) ? 'primary' : ''} fontSize="medium"/>
                    </IconButton>
                </div>
                <div className='commentContainer'>
                    <Button size="small">
                        <div className='comment'>
                            <ChatBubbleRoundedIcon sx={{color: indigo[200]}} fontSize="medium" />
                            <p className='commentText'>Discuss</p>
                        </div>
                    </Button>
                </div>
            </div>
        </div >
    </Card>
  )
}