import React from "react";
import { Routes , Route} from "react-router-dom";
import Mockman from "mockman-js";
import { Navbar } from "./components";
import { Home, Signup, Login } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/mock" element={<Mockman />}/>
      </Routes>
    </div>
  );
}

export default App;
