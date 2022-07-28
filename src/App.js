import React from "react";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
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
