import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Mens from './pages/Mens';
import Womens from './pages/Womens';
import Kids from './pages/Kids';
import Footwear from './pages/Footwear';
import Accessories from './pages/Accessories';
import Wishlist from './pages/Wishlist/Wishlist';
import Navbar from './components/navbar/Navbar';
import ShopContextProvider from './context/shop-context';
import Drawer from './components/drawer/Drawer'
import Login from './pages/Login';

const App = () => {
  return (
    <div className='App'>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Mens" element={<Mens />} />
            <Route path="/Womens" element={<Womens />} />
            <Route path="/Kids" element={<Kids />} />
            <Route path="/Footwear" element={<Footwear />} />
            <Route path="/Accessories" element={<Accessories />} />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
          <Drawer />
        </Router>
      </ShopContextProvider>
    </div>
  );
};

export default App;
