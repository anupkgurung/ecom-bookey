import React from "react";
import { Routes , Route} from "react-router-dom";
import Mockman from "mockman-js";
import { Navbar } from "./components/Navbar/Navbar";
import {Home} from "./pages/Home/Home"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mock" element={<Mockman />}/>
      </Routes>
    </div>
  );
}

export default App;
