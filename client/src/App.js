import React from "react";
import './App.css';
import Nav from "./components/nav";
import CenterConsole from "./components/centerConsole";
import SideTab from "./components/sideTab";

function App() {
  return (
    <div className="App">
      <Nav/>
      <CenterConsole/>
      <SideTab/>
    </div>
  );
}

export default App;
