import React, {useState, useEffect, useInsertionEffect} from "react";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from './components/Header/Header'
import Login from "./components/Login/Login";
import Sidebar from './components/Sidebar/Sidebar'
import {login, selectUser} from "./features/counter/userSlice"
import {useDispatch, useSelector} from "react-redux";
import { auth } from "./firebase";
import { logout } from "./features/counter/userSlice";
import BeatLoader from "react-spinners/BeatLoader";


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [loaded, setLoaded] = useState(false)

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
          setLoaded(true)
      } else{
        //user is logged out
        dispatch(logout());
        setLoaded(true)
      }
    })
  }, []);

  return (
    <div classsName="app">
      {!loaded ? 
        <div className="appLoader">
          <BeatLoader size={20} color='gray' loading={loaded}/>
        </div>
        :
        <>
          <Header/>
          {!user ? 
          <Login />
          : 
          <div className="app_body">
              <Feed />
              <Sidebar/>
          </div>
        }
        </>
      }
    </div>
  );
}

export default App;
