import React from "react";
import {Avatar} from '@mui/material'
import "./Sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="" alt=""/>
                <Avatar className="sidebar_avatar"/>
                <h2>Name</h2>
                <h4>Email</h4>
            </div>

            <div className="sidebar_bottom">
                <p> Where text input box should be </p>
            </div>

        </div>
    )
}