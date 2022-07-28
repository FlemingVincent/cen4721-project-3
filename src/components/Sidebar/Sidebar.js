import React from "react";
import {Avatar, TextField, Box, Button} from '@mui/material'
import "./Sidebar.css";
import BorderColorIcon from '@mui/icons-material/BorderColor';
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://bq9mowy10i-flywheel.netdna-ssl.com/wp-content/uploads/2016/12/Powder-Blue-Background-300x300.jpg"
                     alt=""/>
                <Avatar className="sidebar_avatar"/>
                <h2>Name</h2>
                <h4>Email</h4>
            </div>

            <div className="sidebar_bottom">
                <Box mb={2}>
                    <BorderColorIcon className="sidebar_icon"/>
                    <TextField
                        id="outlined-title"
                        label="Title"
                        size="small"
                    />

                </Box>
                <Box mb={2} ml={4}>
                    <TextField
                        id="outlined-tag"
                        label="Tag"
                        size="small"
                    />
                </Box>
                <Box mb={2} >
                    <TextField
                        id="outlined-detail"
                        label="Detail"
                        size="small"
                        multiline
                        rows ={5}
                        fullWidth
                    />
                </Box>
                <Box ml={25}><Button variant="contained">Post</Button></Box>


            </div>

        </div>
    )
}