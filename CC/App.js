// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './components/CartPage';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import PaymentPage from './components/PaymentPage';
import ShoppingPage from './components/ShoppingPage';
import SignupPage from './components/SignupPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/shop" element={<ShoppingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
