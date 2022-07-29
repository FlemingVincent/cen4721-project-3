import React, {useState} from "react";
import {Avatar, TextField, Box, Button} from '@mui/material'
import "./Sidebar.css";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useSelector } from "react-redux";
import { selectUser } from "../../features/counter/userSlice";
import { sendPost } from "../../services/posts";
export default function Sidebar() {
    const user = useSelector(selectUser);

    const [input, setInput] = useState({
        title: "",
        tag:"",
        details:"",
    });

    const handleChange = ({target})=>{
        const {id, value} = target;
        setInput((prev)=>({
            ...prev,
            [id]:value
        }));
    }

    async function handleSendPost(e){
        e.preventDefault();
        if (input.title !== "" && input.tag !== "" && input.details !==""){
            setInput({
                title: "",
                tag:"",
                details:"",
            })
            sendPost(user?.uid, input.title, input.tag, input.details)
        }
    };

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://bq9mowy10i-flywheel.netdna-ssl.com/wp-content/uploads/2016/12/Powder-Blue-Background-300x300.jpg"
                     alt=""/>
                <Avatar src={user.photoUrl}className="sidebar_avatar">
                    {user.email[0]} 
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar_bottom">
                <Box mb={2}>
                    <BorderColorIcon className="sidebar_icon"/>
                    <TextField
                        id="title"
                        label="Title"
                        size="small"
                        onChange={handleChange}
                        value = {input.title}
                    />
                </Box>
                <Box mb={2} ml={4}>
                    <TextField
                        id="tag"
                        label="Tag"
                        size="small"
                        onChange={handleChange}
                        value = {input.tag}
                    />
                </Box>
                <Box mb={2} >
                    <TextField
                        id="details"
                        label="Detail"
                        size="small"
                        multiline
                        rows ={5}
                        fullWidth
                        onChange={handleChange}
                        value = {input.details}
                    />
                </Box>
                <Box ml={25}><Button variant="contained" onClick={handleSendPost} type="submit">Post</Button></Box>
            </div>

        </div>
    )
}