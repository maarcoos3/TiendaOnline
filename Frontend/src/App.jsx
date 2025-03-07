import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext"; 
import "./App.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider> {/*  */}
          <Router>
            <Header />
            <AppRoutes />
            <Footer />
          </Router>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
