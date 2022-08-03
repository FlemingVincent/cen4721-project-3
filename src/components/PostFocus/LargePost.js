import React, {useState, useEffect, useRef} from 'react'
import {Card, Modal, Button, IconButton, TextField, } from '@mui/material';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { indigo, yellow, deepOrange, red } from '@mui/material/colors';
import { getTimeSincePost } from '../../services/helpers';
import "./LargePost.css"
import { getComments, sendComment } from '../../services/posts';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import Comments from './comments/Comments';

export default function LargePost({isOpen, setModalOpen, post, user, bookmarked, handleUpdateBookmark, vote, handleUpdateVote}) {

  const [open, setOpen] = useState(isOpen)
  const currentUser = useSelector(selectUser)

  const handleClose = () => setModalOpen(false);

  return (
    <Modal
        open={open}
        onClose={handleClose}
        sx={{overflow: 'hidden', p: 1,}}
    >
        <Card sx={style} className='translateFix'>
            <div className="postInformation">
                <div className='informationContainer2'>
                    <div className='subInformatioContainer_2'>
                    <IconButton size="small">
                        <ArrowUpwardRoundedIcon sx={{fontSize: 25, color: (vote.state == 'up') ? indigo['A400'] : ''}} onClick={() => handleUpdateVote('up', vote)}/>
                    </IconButton>
                    <div style={{color: (vote.state == 'up') ? indigo['A400'] : ((vote.state == 'down') ? deepOrange['A700'] : ''), fontWeight: (vote.state != null) ? 'bold' : ''}}>
                        {(vote.counter == null) ? 0 : vote.counter}
                    </div>
                    <IconButton size="small">
                        <ArrowDownwardRoundedIcon sx={{fontSize: 25, color: (vote.state == 'down') ? deepOrange['A700'] : ''}} onClick={() => handleUpdateVote('down', vote)}/>
                    </IconButton>
                    </div>
                    <div className='subInformatioContainer2'>
                        <div className='title'>   
                            {post?.data?.title}
                        </div>
                        <div className='userInfo'>
                            <div className='pictureContainer'>
                            <img 
                                src={user?.photoUrl} 
                                className='profilePic'
                            />
                            </div>
                            <div className='extraInfo'>
                                <div className='userName'>
                                    {user?.displayName}
                                </div>
                                <div className='date'>
                                    {post?.data?.timestamp != null ? 
                                        getTimeSincePost(post?.data?.timestamp)
                                        : 
                                        ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='subInformatioContainer3'>
                        <div>
                            <div className='tagContainer'>
                                <div className='tag'>{post?.data?.tag}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='descriptionContainer2'>
                    <p>{post?.data?.details}</p>
                </div>
                <div className='buttonsContainer2'>
                    <div className='bookmarkContainer'>
                        <IconButton size="small" className='bookmark' onClick={() => handleUpdateBookmark(bookmarked)}>
                            {bookmarked ?
                                <BookmarkRoundedIcon sx={{color: indigo['A200'], fontSize: 30}}/>
                                :
                                <BookmarkBorderOutlinedIcon sx={{color: indigo[200], fontSize: 30}}/>
                            }
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className='divider'>
            </div>
            <Comments post={post}/>
        </Card>
    </Modal>
  )
}

const style = {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
    maxHeight: '80%', 
    maxWidth: '700px', 
    minWidth: '400px', 
    width: '60%', 
    overflow: 'auto',
    paddingTop: 3,
    display: 'flex',
    height: '700px',
    flexDirection: 'column',
}
