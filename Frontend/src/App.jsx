// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./contexts/CartContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Header />
          <AppRoutes />
          <Footer />
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
