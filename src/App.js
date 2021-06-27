import React from "react";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";
function App() {
  return (
    <div className="app">
      {/* <h1>Gbook</h1> */}
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
