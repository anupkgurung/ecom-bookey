import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom"
import { AuthenticationProvider, ProductProvider, WishlistProvider, CartProvider } from "./context"
import { clearLocalStorage } from "./clearLocalStorage";
// Call make Server
makeServer();
clearLocalStorage();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthenticationProvider>
        <ProductProvider>
          <CartProvider>
            <WishlistProvider>
              <App />
            </WishlistProvider>
          </CartProvider>
        </ProductProvider>
      </AuthenticationProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
