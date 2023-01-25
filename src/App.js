import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import Products from './components/Products/Products';
function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Category/:category' element={<Products />} />
          <Route exact path='/products/:id' element={<Product />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
