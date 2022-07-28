import React, {useState, useEffect} from "react";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from './components/Header/Header'
import Login from "./Login";
import Sidebar from './components/Sidebar/Sidebar'
import {selectUser} from "./features/counter/userSlice"
import {useSelector} from "react-redux";


function App() {
    const user = useSelector(selectUser);
  

  return (
    <div classsName="app">
        <Header/>

        {!user ? (
        <Login />
        ) : (
        <div className="app_body">
            <Feed />
            <Sidebar/>
        </div>
      ) }
    </div>
  );
}

export default App;
