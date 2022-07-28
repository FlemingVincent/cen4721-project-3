import React, {useState, useEffect} from "react";
//import Login from "../Login";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from './components/Header/Header'
import Login from "./Login";
import Sidebar from './components/Sidebar/Sidebar'


function App() {

  // const [windowSize, setWindowSize] = useState(getWindowSize())

  // function getWindowSize() {
  //   const {innerWidth, innerHeight} = window;
  //   return {innerWidth, innerHeight};
  // }

  // useEffect(() => {
  //   function handleWindowResize() {
  //     setWindowSize(getWindowSize());
  //   }

  //   window.addEventListener('resize', handleWindowResize);

  //   return () => {
  //     window.removeEventListener('resize', handleWindowResize);
  //   };
  // }, []);

  // console.log(windowSize.innerHeight)

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
