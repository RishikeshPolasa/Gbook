import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      {/* <h1>Gbook</h1> */}
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
