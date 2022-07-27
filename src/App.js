import React from "react";
import "./App.css";
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div>
        <Header/>
        {/*App body*/}
        <div className="app_body">
            {/*Posts Note: make the post area position:sticky flex:0.8 side bar would be pushed to the right*/}
            <Sidebar/>
        </div>
    </div>
  );
}

export default App;
