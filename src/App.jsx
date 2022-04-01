import React from "react";
import { Routes , Route} from "react-router-dom";
import Mockman from "mockman-js";
import { Navbar } from "./components";
import { Home, Signup, Login, Product, Wishlist } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/products" element={<Product />}/>
        <Route path="/wishlist" element={<Wishlist />}/>
        <Route path="/mock" element={<Mockman />}/>
      </Routes>
    </div>
  );
}

export default App;
