import React from "react";
import { Routes , Route} from "react-router-dom";
import Mockman from "mockman-js";
import { Navbar, Toast, Footer } from "./components";
import { Home, Signup, Login, Product, Wishlist, Cart } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Toast />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/products" element={<Product />}/>
        <Route path="/wishlist" element={<Wishlist />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/mock" element={<Mockman />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
