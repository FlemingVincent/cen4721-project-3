import React, {useState, useEffect} from "react";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from './components/Header/Header'
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
        {/*App body*/}
        <div className="app_body">
            <Feed />
            <Sidebar/>
        </div>
    </div>
  );
}

export default App;
