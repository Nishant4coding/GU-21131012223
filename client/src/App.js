// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/categories/:categoryname/products/:productId" element={<ProductDetails />} />
          <Route path="/categories/:categoryname/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
