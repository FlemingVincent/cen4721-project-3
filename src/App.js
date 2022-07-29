import React, {useState, useEffect, useInsertionEffect} from "react";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from './components/Header/Header'
import Login from "./Login";
import Sidebar from './components/Sidebar/Sidebar'
import {login, selectUser} from "./features/counter/userSlice"
import {useDispatch, useSelector} from "react-redux";
import { auth } from "./firebase";
import { logout } from "./features/counter/userSlice";


function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

  useEffect(() =>{
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
          );
      } else{
        //user is logged out
        dispatch(logout());
      }
    });
  },
  []);
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
